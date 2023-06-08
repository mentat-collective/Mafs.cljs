(ns mafs.core
  "Main components and helper functions for mafs."
  (:require ["mafs" :as m]
            [reagent.core :as reagent]))

;; ## Helpers

(def labelPi
  "Labeling function that, suitable for use with the `:labels` options of various
  components."
  m/labelPi)

(def useTransformContext m/useTransformContext)
(def useStopwatch m/useStopwatch)

(def Theme
  "Map of keyword => CSS Mafs theming variable."
  (js->clj m/Theme :keywordize-keys true))

(defn ^:no-doc split-opts
  "Given a sequence of component children that may or may not start with an
  options map, returns a pair of

  - `options` (or {} if none existed)
  - `children`"
  [children]
  (if (map? (first children))
    [(first children) (rest children)]
    [{} children]))

(defn ^:no-doc process-color
  "Given an options map `m`, attempts to replace the `:color` entry (if present)
  with an entry from [[Theme]]. Returns the updated options."
  [m]
  (if-let [c (:color m)]
    (if (keyword? c)
      (assoc m :color (Theme c (name c)))
      m)
    m))

;; ## Components

(defn Mafs
  "Given an optional map of options and any number of children, renders a Mafs 2D
  scene.

  Supported options:

  - `:width`: number (width in pixels) or \"auto\"

  - `:height`: number (height in pixels)

  - `:pan`: If true (default), enable panning with the mouse and keyboard.

  - `:view-box`: If true, enable zooming with the mouse and keyboard.

      can also be a map with keys `:min` (in range `(0, 1]`) and `:max` (in range
      `[1, ∞)`).

  - `:preserve-aspect-ratio`: boolean or \"contain\" (default). Whether to
    squish the graph to fill the Mafs viewport or to preserve the aspect ratio of
    the coordinate space.

  - `:on-click`: `(fn [point, mouse-event] ...)`, called when the view is
    clicked on, and passed the point where it was clicked."
  [& children]
  (into [:> m/Mafs] children))

(defn Point
  "Takes a map with `:x` and `:y` entries required and renders a dot onto a Mafs
  scene at location $(x, y)$.

  Supported options:

  - `:x`: x-coordinate of the point.

  - `:y`: y-coordinate of the point.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/Theme]].

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:svg-circle-props`: A map of property name => value of any property
    accepted
    by [SVGCircleElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGCircleElement)
    or any parent."
  [opts]
  [:> m/Point (process-color opts)])

(defn Polygon
  "Takes a map with `:point` entry required and renders a polygon onto a Mafs
  scene bounded by the specified points.

  Supported options:

  - `:points`: a sequence of `[<x> <y>]` coordinates.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/Theme]].

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the polygon's boundary line.

  - `:fill-opacity`: Double in the range [0.0, 0.1] inclusive specifying the
      opacity of the interior of the polygon.

  - `:stroke-opacity`: Double in the range [0.0, 0.1] inclusive specifying the
      opacity of the boundary of the polygon.

  - `:stroke-style`: \"solid\" or \"dashed\". Defaults to \"solid\".

  - `:svg-polygon-props`: A map of property name => value of any property
    accepted
    by [SVGPolygonElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGPolygonElement)
    or any parent."
  [opts]
  [:> m/Polygon (process-color opts)])

(defn Polyline
  "Similar to [[polygon]], except the first and last points are not connected.

  See [[polygon]] for supported inputs."
  [opts]
  [:> m/Polyline (process-color opts)])

(defn Ellipse
  "Takes a map with `:center` and `:radius` entries required and renders the
  specified ellipse onto a Mafs scene.

  Supported options:

  - `:center`: a 2-vector specifying the `[<x> <y>]` coordinate of the center.

  - `:radius`: a 2-vector specifying `[<width-radius> <height-radius>]`

  - `:angle`: a counter-clockwise angle in radians to rotate the ellipse.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/colors]].

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the ellipse's boundary line.

  - `:fill-opacity`: Double in the range [0.0, 0.1] inclusive specifying the
      opacity of the interior of the ellipse.

  - `:stroke-opacity`: Double in the range [0.0, 0.1] inclusive specifying the
      opacity of the boundary of the ellipse.

  - `:stroke-style`: \"solid\" or \"dashed\". Defaults to \"solid\".

  - `:svg-ellipse-props`: A map of property name => value of any property
    accepted
    by [SVGEllipseElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGEllipseElement)
    or any parent."
  [opts]
  [:> m/Ellipse (process-color opts)])


(defn Circle
  "Similar to [[ellipse]] but takes a single number for `:radius`.

  See [[ellipse]] for a description of all other supported options."
  [{:keys [radius] :as props}]
  [Ellipse
   (assoc props :radius [radius radius])])

(defn Text
  "Takes an options map with `:x` and `:y` required and any number of string
  children and renders the concatenated string children onto a Mafs scene.

  Supported options:

  - `:x`: The x-coordinate of the element the text should attach to.

  - `:y`: The y-coordinate of the element the text should attach to.

  - `:attach`: The cardinal direction that `s` should be offset from its
      element. One of \"n\" | \"ne\" | \"e\" | \"se\" | \"s\" | \"sw\" | \"w\" |
      \"nw\".

  - `:attach-distance`: The distance away from the attaching element.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/Theme]].

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the polygon's boundary line.

  - `:size`: font size.

  - `:svg-text-props`: A map of property name => value of any property accepted
      by [SVGTextElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGTextElement)
      or any parent."
  [& children]
  (let [[opts children] (split-opts children)]
    (into [:> m/Text (process-color opts)]
          children)))

(defn Vector
  "Takes a map with `:tip` entry required and renders a vector onto a Mafs scene.

  Supported options:

  - `:tail`: 2-vector `[<x> <y>]` specifying the coordinates of the vector tip.

  - `:tip`: 2-vector `[<x> <y>]` specifying the coordinates of the vector tip.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/Theme]].

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the polygon's boundary line.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\".

  - `:svg-line-props`: A map of property name => value of any property accepted
      by [SVGLineElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGLineElement)
      or any parent."
  [opts]
  [:> m/Vector (process-color opts)])

(defn Transform
  "Takes an options map and any number of children and transforms the children as
  specified by the options.

  Supported options:

  - `:matrix`: Matrix object generated by the code in [[mafs.matrix]].

  - `:translate`: 2-vector of the form `[<x-translation> <y-translation>]`.

  - `:scale`: either a number (scale factor) or a 2-vector of the form
    `[<x-scale> <y-scale>]`.

  - `:rotate`: number of radians to rotate the children.

  - `:translate`: 2-vector of the form `[<x-shear> <y-shear>]`."
  [& children]
  (into [:> m/Transform] children))

(defn ^:no-doc named-constraints
  [s initial]
  (case s
    "horizontal" (fn [[x _]] #js [x (nth initial 1)])
    "vertical"   (fn [[_ y]] #js [(nth initial 0) y])
    (throw
     (ex-info
      "Invalid constraint name: "
      {:constrain s}))))

(defn ^:no-doc ->array-fn [f]
  (fn [input]
    (let [ret (f input)]
      (if (vector? ret)
        (apply array ret)
        ret))))

(defn ^:no-doc constrain->fn [constrain initial]
  (cond (nil? constrain) nil
        (fn? constrain) (->array-fn constrain)

        (or (keyword? constrain)
            (string? constrain))
        (named-constraints (name constrain) initial)

        :else
        (throw
         (ex-info "Invalid constraint!"
                  {:constrain constrain}))))

(defn ^:no-doc path->get [path]
  (cond (nil? path)    deref
        (vector? path) #(get-in (deref %) path)
        :else          #(get (deref %) path)))

(defn ^:no-doc path->set [path]
  (cond (nil? path)    reset!
        (vector? path) #(swap! %1 assoc-in path %2)
        :else          #(swap! %1 assoc path %2)))

(defn MovablePoint
  "Takes an options map and renders a movable point onto a Mafs scene.

  Movable points can be dragged around the coordinate plane, or moved via the
  keyboard. These points can also synchronize their current position into an
  atom specified by the user, optionally at some nested path.

  Control the point by either specifying

  - `:atom` (and `:path`, optionally)
  - `:point` and `:on-move`.

  Supported options:

  - `:atom`: atom into which the movable point should synchronize its current
    coordinates `[<x> <y>]`. By default, `reset!`s the atom. Use `:path` to
    synchronize with some internal path.

  - `:path`: the (optional) path into the atom. For example, any of these forms
    are valid:

  ```clojure
  (reagent.core/with-let [!xy (reagent.core/atom [0 0])]
    (movable-point {:atom !xy}))

  (reagent.core/with-let [!state (reagent.core/atom {:coords [0 0]})]
    (movable-point {:atom !state :path :coords}))

  (reagent.core/with-let
    [!state (reagent.core/atom {:nested {:coords [0 0]}})]
    (movable-point {:atom !state :path [:nested :coords]}))
  ```

  - `:point`: the controlled coordinates `[<x> <y>]` of the point.

  - `:on-move`: called on each update with the new coordinates of the point.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/Theme]].

  - `:constrain`: Either \"horizontal\" | \"vertical\" | <constraint function>

    If you supply a function, it will be called on each point update with the
    proposed position; return a new 2-vector with the constrained position.

    For example, the following will constrain the point to a sine curve:

  ```clojure
  (movable-point {:constrain (fn [[x _]] [x (Math/sin x)])})
  ```"
  [{!state :atom :keys [point path constrain on-move] :as opts}]
  (when (and !state point)
    (js/console.warn
     (str "`:point` " point " will be ignored in favor of the entry in the
     supplied `:atom`.")))

  (when (not !state)
    (when (not point)
      (js/console.warn
       (str "`:atom` and `:point` are both missing! Please supply one or the
     other to initialize the point's position. Using default of `[0 0]`.")))

    (when (not on-move)
      (js/console.warn
       (str "`:atom` and `:on-move` are both missing! Please supply one or the
     other to capture state changes."))))
  (let [get       (path->get path)
        set       (path->set path)
        initial   (if !state
                    (get !state)
                    (or point [0 0]))
        constrain (constrain->fn constrain initial)
        opts (if constrain
               (assoc opts  :constrain constrain)
               (dissoc opts :constrain))]
    (fn [{!state :atom on-move :on-move}]
      (reagent/with-let [!state (or !state (reagent/atom initial))]
        [:> m/MovablePoint
         ;; TODO is this a problem, that the color can't come in? Can color not
         ;; update?
         (assoc (process-color opts)
                :point (get !state)
                :on-move
                (fn [new-point]
                  (let [xy [(aget new-point 0) (aget new-point 1)]]
                    (set !state xy)
                    (when on-move
                      (on-move xy)))))]))))
