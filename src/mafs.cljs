(ns mafs
  "Reagent components and utilities exposing
  the [hooks](https://reactjs.org/docs/hooks-intro.html) declared by
  the [Leva](https://github.com/pmndrs/leva) components GUI.

  These components make it easy to synchronize state through Clojure's atom
  interface instead of
  [React hooks](https://reactjs.org/docs/hooks-intro.html) and callbacks."
  (:require ["mafs" :as m]
            [mafs.macros :refer [defcomponent]]
            [reagent.core :as reagent]))

(def Theme
  (js->clj m/Theme :keywordize-keys true))

(def labelPi m/labelPi)

(defn mag
  "TODO expose better versions of these."
  [p]
  (.mag m/vec (clj->js p)))

;; ## Components

(defcomponent Mafs
  "
  - `:width`
  - `:height`
  - `:pan`
  - `:viewbox`
  - `:preserve-aspect-ratio`
  - `:ssr`
  "
  m/Mafs)

(defcomponent CartesianCoordinates
  "
  - `:x-axis`
  - `:y-axis`
  - `:subdivisions`"
  m/CartesianCoordinates)

(defcomponent Point
  "
  - `:x`
  - `:y`
  - `:color`
  - `:opacity`
  - `:svg-circle-props`
"
  m/Point)

(defcomponent Polygon
  "
  - `:points`
  - `:svg-polygon-props`
  - `:color`
  - `:weight`
  - `:fill-opacity`
  - `:stroke-opacity`
  - `:stroke-style`
  "
  m/Polygon)

(defcomponent Ellipse
  "
  - `:center`
  - `:radius`
  - `:svg-ellipse-props`
  - `:color`
  - `:weight`
  - `:fill-opacity`
  - `:stroke-opacity`
  - `:stroke-style`
  "
  m/Ellipse)


(defn Circle
  "
  - `:center`
  - `:radius`
  - `:svg-ellipse-props`
  - `:color`
  - `:weight`
  - `:fill-opacity`
  - `:stroke-opacity`
  - `:stroke-style`
  "
  [{:keys [radius] :as props}]
  [Ellipse
   (assoc props :radius [radius radius])])

(defcomponent Text
  "
  - `:x`
  - `:y`
  - `:attach`
  - `:attach-distance`
  - `:size`
  - `:color`
  - `:svg-text-props`
  "
  m/Text)

(defcomponent Vector
  "
  - `:tail`
  - `:tip`
  - `:svg-line-props`
  - `:color`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  m/Vector)

(defcomponent Transform
  "
  - `:matrix`
  - `:translate`
  - `:scale`
  - `:rotate`
  - `:shear`
  "
  m/Transform)

(defn ^:no-doc named-constraints
  [s initial]
  (case s
    "horizontal" (fn [[x _]] #js [x (nth initial 1)])
    "vertical"   (fn [[_ y]] #js [(nth initial 0) y])
    (throw
     (ex-info
      "Invalid constraint name: "
      {:constrain s}))))

(defn ^:no-doc constrain->fn [constrain initial]
  (cond (or (fn? constrain)
            (nil? constrain))
        constrain

        (or (keyword? constrain)
            (string? constrain))
        (named-constraints (name constrain) initial)

        :else
        (throw
         (ex-info "Invalid constraint!"
                  {:constrain constrain}))))

(defn path->get [path]
  (cond (nil? path)    deref
        (vector? path) #(get-in (deref %) path)
        :else          #(get (deref %) path)))

(defn path->set [path]
  (cond (nil? path)    reset!
        (vector? path) #(swap! %1 assoc-in path %2)
        :else          #(swap! %1 assoc path %2)))

;; TODO consolidate these two!

(defn MovablePointAtom
  "This version takes an atom and, optionally, a path into the atom.
  - `:atom`
  - `:path` optional
  - `:constrain`
  - `:color`"
  [{!state :atom :keys [path constrain] :as opts}]
  (let [get       (path->get path)
        set       (path->set path)
        initial   (get !state)
        constrain (constrain->fn constrain initial)
        ;; TODO report if constrain is nil, error!

        opts (if constrain
               (assoc opts :constrain constrain)
               (dissoc opts :constrain))]
    (fn [{!state :atom on-change :on-change}]
      [:> m/MovablePoint
       (assoc opts
              :point (get !state)
              :on-move
              (fn [new-point]
                (let [xy [(aget new-point 0) (aget new-point 1)]]
                  (set !state xy)
                  (when on-change
                    (on-change xy)))))])))

(defn MovablePoint
  "This version takes an initial point and an `:on-move`.

  - `:point`
  - `:on-move`
  - `:constrain`
  - `:color`"
  [{:keys [point] :as opts}]
  (reagent/with-let [!state (reagent/atom point)]
    [MovablePointAtom (assoc opts :atom !state)]))
