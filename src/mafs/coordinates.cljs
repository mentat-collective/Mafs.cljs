(ns mafs.coordinates
  (:require ["mafs" :as m]))

(defn Cartesian
  "Takes an (optional) options map `opts` and renders a cartesian coordinate plane
  into the Mafs scene.

  Supported options:

  - `:x-axis`: `false` to disable the axis, or an axis options map (see below).

  - `:y-axis`: `false` to disable the axis, or an xis options map (see below).

  - `:subdivisions`: How many subdivisions to draw per line as a default for
    both axes, or `false` to draw none.

  Supported axis options:

  - `:axis`: boolean that specifies whether or not to draw the axis line.

  - `:lines`: The spacing between each primary line orthogonal to the axis, or
      false to draw none.

  - `:subdivisions`: How many subdivisions to draw per line, or `false` to draw
      none.

  - `:labels`: A quoted ClojureScript function that returns a label for each
      line, or [[mafs.core/labelPi]]. "
  ([] [:> (.-Cartesian m/Coordinates)])
  ([opts] [:> (.-Cartesian m/Coordinates) opts]))

(defn Polar
  "Takes an (optional) options map `opts` and renders a polar coordinate plane
  into the Mafs scene.

  Supported options:

  - `:x-axis`: `false` to disable the axis, or an axis options map (see below).

  - `:y-axis`: `false` to disable the axis, or an xis options map (see below).

  - `:lines`: The spacing between each radial line, or false to draw none.

  - `:subdivisions`: How many subdivisions to draw per line as a default for
    both axes, or `false` to draw none.

  Supported axis options:

  - `:axis`: boolean that specifies whether or not to draw the axis line.

  - `:labels`: A quoted ClojureScript function that returns a label for each
      line, or [[mafs.core/labelPi]]. "
  ([] [:> (.-Polar m/Coordinates)])
  ([opts] [:> (.-Polar m/Coordinates) opts]))
