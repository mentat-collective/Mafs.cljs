(ns mafs.line
  (:require ["mafs" :as m]
            [mafs.core :as mafs]))

(defn Segment
  "Given a map `opts`, renders a line segment between points `:point1` and
  `:point2` into a Mafs scene.

  Supported options:

  - `:point1`: a 2-vector of the form `[<x> <y>]`.

  - `:point2`: a 2-vector of the form `[<x> <y>]`.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/Theme]].

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
     the line.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\"."
  [opts]
  [:>
   (.-Segment m/Line)
   (mafs/process-color opts)])

(defn ThroughPoints
  "Given a map `opts`, renders a line between points `:point1` and `:point2` into
  a Mafs scene.

  Supported options:

  - `:point1`: a 2-vector of the form `[<x> <y>]`.

  - `:point2`: a 2-vector of the form `[<x> <y>]`.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/Theme]].

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the line.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\"."
  [opts]
  [:>
   (.-ThroughPoints m/Line)
   (mafs/process-color opts)])

(defn PointSlope
  "Given a map `opts`, renders a line passing through point `:point` with slope
  `:slope` into a Mafs scene.

  Supported options:

  - `:point`: a 2-vector of the form `[<x> <y>]`.

  - `:slope`: number defining the slope of the line (amount of increase in the
    `y` direction for each unit increase in the `x` direction).

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/Theme]].

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the line.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\"."
  [opts]
  [:>
   (.-PointSlope m/Line)
   (mafs/process-color opts)])

(defn PointAngle
  "Given a map `opts`, renders a line passing through point `:point` with angle
  `:angle` into a Mafs scene.

  Supported options:

  - `:point`: a 2-vector of the form `[<x> <y>]`.

  - `:angle`: angle in radians.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/Theme]].

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the line.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\"."
  [opts]
  [:>
   (.-PointAngle m/Line)
   (mafs/process-color opts)])
