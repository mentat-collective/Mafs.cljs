(ns mafs.plot
  (:require ["mafs" :as m]
            [mafs.core :as mafs]))

(defn OfX
  "Takes either

  - a function `f: R => R` and an optional `opts` map
  - a map with `:y` entry required

  and returns a fragment that will plot `y = f(x)` values onto a Mafs scene.

  Supported options:

  - `:y`: a function `f: R => R`.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/Theme]].

  - `:min-sampling-depth`: The minimum recursive depth of the sampling
      algorithm. See [the Mafs docs](https://mafs.dev/guides/display/plots) for more
      detail.

  - `:max-sampling-depth`: The maximum recursive depth of the sampling
      algorithm. See [the Mafs docs](https://mafs.dev/guides/display/plots) for more
      detail.

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\".

  - `:svg-path-props`: A map of property name => value of any property
    accepted
    by [SVGPathElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement)
    or any parent."
  [opts]
  [:>
   (.-OfX m/Plot)
   (mafs/process-color opts)])

(defn OfY
  "Takes either

  - a function `f: R => R`  and an optional `opts` map
  - a map with `:x` entry required

  and returns a fragment that will plot `x = f(y)` values onto a Mafs scene.

  Supported options:

  - `:x`: a function `f: R => R`.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/Theme]].

  - `:min-sampling-depth`: The minimum recursive depth of the sampling
      algorithm. See [the Mafs docs](https://mafs.dev/guides/display/plots) for more
      detail.

  - `:max-sampling-depth`: The maximum recursive depth of the sampling
      algorithm. See [the Mafs docs](https://mafs.dev/guides/display/plots) for more
      detail.

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\".

  - `:svg-path-props`: A map of property name => value of any property
    accepted
    by [SVGPathElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement)
    or any parent."
  [opts]
  [:>
   (.-OfY m/Plot)
   (mafs/process-color opts)])

(defn Inequality
  "given a map `opts`, returns a fragment that will plot the region between two
  functions (or constants, or either function-constant combination). The
  inequality can be a function of $x$ or $y$.

  Supported options:

  - `:y`: map with some combination of keys `:<`, `:>`, `:<=` or `:>=`
    representing inequality symbols, each bound to either

    - a static `x` value, or

    - a function of type `f: R => R`

    Mixing conflicting inequality operators like `:<` and `:<=` or `:>` and
    `:>=` will result in a runtime exception.

  - `:x`: same as `:y`, but functions are passed `y` values instead of `x`
    values. Only one of `:x` or `:y` is supported! Passing both will result in a
    runtime exception.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/Theme]].

  - `:weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the lines on the plot.

  - `:stroke-color`: any valid [CSS
    color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
    from [[mafs.core/Theme]].

  - `:stroke-opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:fill-color`: any valid [CSS
    color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
    from [[mafs.core/Theme]].

  - `:fill-opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:min-sampling-depth`: The minimum recursive depth of the sampling
      algorithm. See [the Mafs docs](https://mafs.dev/guides/display/plots) for more
      detail.

  - `:max-sampling-depth`: The maximum recursive depth of the sampling
      algorithm. See [the Mafs docs](https://mafs.dev/guides/display/plots) for more
      detail.

  - `:upper-color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/Theme]].

  - `:upper-weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the lines on the plot.

  - `:upper-opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:lower-color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/Theme]].

  - `:lower-weight`: Double in the range [0.0, 0.1] inclusive specifying the weight of
      the lines on the plot.

  - `:lower-opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:svg-upper-path-props`: A map of property name => value of any property
    accepted
    by [SVGPathElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement)
    or any parent.

  - `:svg-lower-path-props`: A map of property name => value of any property
    accepted
    by [SVGPathElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement)
    or any parent.

  - `:svg-fill-props`: A map of property name => value of any property
    accepted
    by [SVGPathElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement)
    or any parent."
  [opts]
  [:>
   (.-Inequality m/Plot)
   (mafs/process-color opts)])

(defn Parametric
  "Given a map `opts`, returns a fragment that will plot $(x, y)$ points as a
  function of the parametric function provided to `:xy` for the range specified
  by `:t` onto a Mafs scene.

  Supported options:

  - `:xy`: a function `(fn [t] [<x> <y>])`.

  - `:t`: 2-vector of the form `[<start-t> <end-t>]` inclusive defining the
    domain in which to evaluate `:xy`.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/Theme]].

  - `:min-sampling-depth`: The minimum recursive depth of the sampling
      algorithm. See [the Mafs docs](https://mafs.dev/guides/display/plots) for more
      detail.

  - `:max-sampling-depth`: The maximum recursive depth of the sampling
      algorithm. See [the Mafs docs](https://mafs.dev/guides/display/plots) for more
      detail.

  - `:opacity`: Double in the range [0.0, 0.1] inclusive.

  - `:weight`: Double in the range [0.0, 0.1] inclusive.

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\".

  - `:svg-path-props`: A map of property name => value of any property
    accepted
    by [SVGPathElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement)
    or any parent."
  [opts]
  [:>
   (.-Parametric m/Plot)
   (-> (mafs/process-color opts)
       (update :xy mafs/->array-fn))])

(defn VectorField
  "Given a map `opts`, plots a vector at every point in a grid on a coordinate
  plane by calling a function `:xy` that receives the vector's tail and returns
  its tip.

  Supported options:

  - `:xy`: a function `(fn [[<tail-x> <tail-y>]] [<tip-x> <tip-y>])`.

  - `:xy-opacity`: function from a point `[<x> <y>]` to a double in the
    range [0.0, 0.1] inclusive.

  - `:step`: spacing between each vector in the vector field.

  - `:opacity-step`: opacity is quantized; this value (between 0.01 and 1)
    defines the width of an opacity layer bucket.

  - `:color`: any valid [CSS
     color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), or any keyword
     from [[mafs.core/Theme]].

  - `:style`: \"solid\" or \"dashed\". Defaults to \"solid\"."
  [opts]
  [:>
   (.-VectorField m/Plot)
   (-> (mafs/process-color opts)
       (update :xy mafs/->array-fn))])
