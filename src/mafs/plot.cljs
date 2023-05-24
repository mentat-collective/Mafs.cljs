(ns mafs.plot
  (:require ["mafs" :as m]
            [mafs.core :as mafs]))

(defn OfX
  "
  - `:y`
  - `:svg-path-props`
  - `:color`
  - `:min-sampling-depth`
  - :`max-sampling-depth`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  [opts]
  [:>
   (.-OfX m/Plot)
   (mafs/process-color opts)])

(defn OfY
  "
  - `:x`
  - `:svg-path-props`
  - `:color`
  - `:min-sampling-depth`
  - :`max-sampling-depth`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  [opts]
  [:>
   (.-OfY m/Plot)
   (mafs/process-color opts)])

(defn Inequality
  "

  - `:x`
  - `:y`
  - `:color`
  - `:weight`
  - `:stroke-color`
  - `:stroke-opacity`
  - `:fill-color`
  - `:fill-opacity`
  - `:min-sampling-depth`
  - :`max-sampling-depth`
  - `:upper-color`
  - `:upper-weight`
  - `:upper-opacity`
  - `:lower-color`
  - `:lower-weight`
  - `:lower-opacity`
  - `:svg-upper-path-props`
  - `:svg-lower-path-props`
  - `:svg-fill-path-props`
  "
  [opts]
  [:>
   (.-Inequality m/Plot)
   (mafs/process-color opts)])

(defn Parametric
  "
  - `:xy`
  - `:t`
  - `:svg-path-props`
  - `:color`
  - `:min-sampling-depth`
  - :`max-sampling-depth`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  [opts]
  [:>
   (.-Parametric m/Plot)
   (mafs/process-color opts)])

(defn ^:no-doc ->array-fn [f]
  (fn [input]
    (let [ret (f (into [] input))]
      (apply array ret))))

(defn VectorField
  "
  - `:xy`
  - `:xy-opacity`
  - `:step`
  - `:opacity-step`
  - `:color`
  - `:style`"
  [opts]
  [:>
   (.-VectorField m/Plot)
   (-> (mafs/process-color opts)
       (update :xy ->array-fn))])
