(ns mafs.debug
  (:require ["mafs" :as m]
            [mafs.macros :refer [defcomponent]]))

(defcomponent TransformWidget
  (.-TransformWidget m/Debug))

(defcomponent ViewportInfo
  "
  - `:precision`"
  (.-ViewportInfo m/Debug))
