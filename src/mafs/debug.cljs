(ns mafs.debug
  (:require ["mafs" :as m]))

(defn TransformWidget [& children]
  (into [:> (.-TransformWidget m/Debug)]
        children))

(defn ViewportInfo
  "
  - `:precision`"
  ([] [:> (.-ViewportInfo m/Debug)])
  ([opts] [:> (.-ViewportInfo m/Debug) opts]))
