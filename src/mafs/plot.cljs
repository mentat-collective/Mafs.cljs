(ns mafs.plot
  (:require ["mafs" :as m]
            [mafs.macros :refer [defcomponent]]))

(defcomponent OfX
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
  (.-OfX m/Plot))

(defcomponent OfY
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
  (.-OfY m/Plot))

(defcomponent Parametric
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
  (.-Parametric m/Plot))

#_(defcomponent VectorField
    "
  - `:xy`
  - `:xy-opacity`
  - `:step`
  - `:opacity-step`
  - `:color`
  - `:style`"
    (.-VectorField m/Plot))
