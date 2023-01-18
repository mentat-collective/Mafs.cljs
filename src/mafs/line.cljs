(ns mafs.line
  (:require ["mafs" :as m]
            [mafs.macros :refer [defcomponent]]))

(defcomponent Segment
  "
  - `:point1`
  - `:point2`
  - `:color`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  (.-Segment m/Line))

(defcomponent ThroughPoints
  "
  - `:point1`
  - `:point2`
  - `:color`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  (.-ThroughPoints m/Line))

(defcomponent PointSlope
  "
  - `:point`
  - `:slope`
  - `:color`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  (.-PointSlope m/Line))

(defcomponent PointAngle
  "
  - `:point`
  - `:angle`
  - `:color`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  (.-PointAngle m/Line))
