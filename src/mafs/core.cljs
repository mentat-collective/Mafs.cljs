(ns mafs.core
  "Main components and helper functions for mafs."
  (:require ["mafs" :as m]
            [reagent.core :as reagent]))

;; ## Helpers

(def labelPi m/labelPi)
(def useTransformContext m/useTransformContext)
(def useStopwatch m/useStopwatch)

(def Theme
  (js->clj m/Theme :keywordize-keys true))

(defn ^:no-doc split-opts [children]
  (if (map? (first children))
    [(first children) (rest children)]
    [{} children]))

(defn ^:no-doc process-color [m]
  (if-let [c (:color m)]
    (if (keyword? c)
      (assoc m :color (Theme c (name c)))
      m)
    m))

;; ## Components

(defn Mafs
  "
  - `:width`
  - `:height`
  - `:pan`
  - `:zoom`
  - `:view-box`
  - `:on-click`
  - `:preserve-aspect-ratio`
  - `:ssr`
  "
  [& children]
  (into [:> m/Mafs] children))

(defn Point
  "
  - `:x`
  - `:y`
  - `:color`
  - `:opacity`
  - `:svg-circle-props`
  "
  [opts]
  [:> m/Point (process-color opts)])

(defn Polygon
  "
  - `:points`
  - `:svg-polygon-props`
  - `:color`
  - `:weight`
  - `:fill-opacity`
  - `:stroke-opacity`
  - `:stroke-style`
  "
  [opts]
  [:> m/Polygon (process-color opts)])

(defn Polyline
  "
  - `:points`
  - `:svg-polyline-props`
  - `:color`
  - `:weight`
  - `:fill-opacity`
  - `:stroke-opacity`
  - `:stroke-style`
  "
  [opts]
  [:> m/Polyline (process-color opts)])

(defn Ellipse
  "
  - `:center`
  - `:radius`
  - `:angle`
  - `:svg-ellipse-props`
  - `:color`
  - `:weight`
  - `:fill-opacity`
  - `:stroke-opacity`
  - `:stroke-style`
  "
  [opts]
  [:> m/Ellipse (process-color opts)])


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

(defn Text
  "
  - `:x`
  - `:y`
  - `:attach`
  - `:attach-distance`
  - `:size`
  - `:color`
  - `:svg-text-props`
  "
  [& children]
  (let [[opts children] (split-opts children)]
    (into [:> m/Text (process-color opts)]
          children)))

(defn Vector
  "
  - `:tail`
  - `:tip`
  - `:svg-line-props`
  - `:color`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  [opts]
  [:> m/Vector opts])

(defn Transform
  "
  - `:matrix`
  - `:translate`
  - `:scale`
  - `:rotate`
  - `:shear`
  "
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

(defn ^:no-doc constrain->fn [constrain initial]
  (cond (nil? constrain) nil
        (fn? constrain) (comp clj->js constrain)

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
  "This version takes an atom and, optionally, a path into the atom.
  - `:atom`
  - `:path` optional
  - `:constrain`
  - `:color`

  also discuss

  - `:point`
  - `:on-move`"
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
