(ns mafs.coordinates
  (:require ["mafs" :as m]))

(defn Cartesian
  "
  - `:x-axis`
  - `:y-axis`
  - `:subdivisions`"
  ([] [:> (.-Cartesian m/Coordinates)])
  ([opts] [:> (.-Cartesian m/Coordinates) opts]))

(defn Polar
  "
  - `:x-axis`
  - `:y-axis`
  - `:lines`
  - `:subdivisions`"
  ([] [:> (.-Polar m/Coordinates)])
  ([opts] [:> (.-Polar m/Coordinates) opts]))
