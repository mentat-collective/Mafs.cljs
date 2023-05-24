(ns mafs.line
  (:require ["mafs" :as m]
            [mafs.core :as mafs]))

(defn Segment
  "
  - `:point1`
  - `:point2`
  - `:color`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  [opts]
  [:>
   (.-Segment m/Line)
   (mafs/process-color opts)])

(defn ThroughPoints
  "
  - `:point1`
  - `:point2`
  - `:color`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  [opts]
  [:>
   (.-ThroughPoints m/Line)
   (mafs/process-color opts)])

(defn PointSlope
  "
  - `:point`
  - `:slope`
  - `:color`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  [opts]
  [:>
   (.-PointSlope m/Line)
   (mafs/process-color opts)])

(defn PointAngle
  "
  - `:point`
  - `:angle`
  - `:color`
  - `:opacity`
  - `:weight`
  - `:style`
  "
  [opts]
  [:>
   (.-PointAngle m/Line)
   (mafs/process-color opts)])
