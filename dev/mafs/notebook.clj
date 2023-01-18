^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mafs.notebook
  {:nextjournal.clerk/auto-expand-results? true}
  (:require [mentat.clerk-utils.show :refer [show-sci]]))

;; # Mafs.cljs
;;
;; A [Reagent](https://reagent-project.github.io/) interface to
;; the [Mafs](https://jsxgraph.org/) interactive math visualization library.

;; [![Build Status](https://github.com/mentat-collective/mafs.cljs/actions/workflows/kondo.yml/badge.svg?branch=main)](https://github.com/mentat-collective/mafs.cljs/actions/workflows/kondo.yml)
;; [![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/mentat-collective/mafs.cljs/blob/main/LICENSE)
;; [![cljdoc badge](https://cljdoc.org/badge/org.mentat/mafs.cljs)](https://cljdoc.org/d/org.mentat/mafs.cljs/CURRENT)
;; [![Clojars Project](https://img.shields.io/clojars/v/org.mentat/mafs.cljs.svg)](https://clojars.org/org.mentat/mafs.cljs)
;;
;; > The interactive documentation on this page was generated from [this source
;; > file](https://github.com/mentat-collective/mafs.cljs/blob/$GIT_SHA/dev/mafs/notebook.clj)
;; > using [Clerk](https://github.com/nextjournal/clerk). Follow
;; > the [instructions in the
;; > README](https://github.com/mentat-collective/mafs.cljs/tree/main#interactive-documentation-via-clerk)
;; > to run and modify this notebook on your machine!
;; >
;; > See the [Github
;; > project](https://github.com/mentat-collective/mafs.cljs) for more
;; > details, and the [cljdoc
;; > page](https://cljdoc.org/d/org.mentat/mafs.cljs/CURRENT/doc/readme) for
;; > detailed API documentation.

;; ## Hello f(x)

;; Documentation often starts with "Hello, world". For this library, the
;; equivalent example is rendering a function on the coordinate plane and making
;; it a little bit interactive.

;; ### Drawing a coordinate plane


;; Mafs only needs a few components to set up a working coordinate plane view.
;; We'll start with the same setup we had in “Installation” — just a Cartesian
;; coordinate plane with nothing too interesting on it.

^{:nextjournal.clerk/width :wide}
(show-sci
 [mafs/Mafs
  [mafs/CartesianCoordinates]])

;; `CartesianCoordinates` is pretty customizable. Let's make our graph a little
;; bit more sophisticated-looking by adding some subdivisions.

^{:nextjournal.clerk/width :wide}
(show-sci
 [mafs/Mafs
  [mafs/CartesianCoordinates {:subdivisions 4}]])

;; ### Plotting a function

;; Plotting a function works by passing a literal ClojureScript function. Let's
;; plot `(Math/sin x)`.

^{:nextjournal.clerk/width :wide}
(show-sci
 [mafs/Mafs
  [mafs/CartesianCoordinates {:subdivisions 4}]
  [mafs.plot/OfX {:y (fn [x] (Math/sin x))}]])

;; We've passed a plain ClojureScript function, and Mafs evaluated it and
;; plotted it across the coordinate plane.

;; This looks a little weird though: sine waves are periodic in $\pi$, so it'd
;; be nice to reflect that in our coordinate plane. Let's do the following:

;; - Tell the x-axis to draw a line at every multiple of π
;; - Label the x-axis in terms of $\pi$
;; - Zoom the x-axis out a bit
;; - Zoom the y-axis in a bit
;; - Tell Mafs to let us squish the viewport

^{:nextjournal.clerk/width :wide}
(show-sci
 [mafs/Mafs
  {:view-box {:x [-10 10] :y [-2 2]}
   :preserve-aspect-ratio false}
  [mafs/CartesianCoordinates
   {:subdivisions 4
    :x-axis
    {:lines Math/PI
     :labels mafs/labelPi}}]
  [mafs.plot/OfX {:y (fn [x] (Math/sin x))}]])

;; At this point, it's worth noting that you haven't _instructed_ the library to
;; do anything—you've just declared what you want on the screen. This model of
;; programming is core to React, and also core to this library.

;; ### Making things interactive

;; If you imagine holding what you've just built in your hands, it would feel
;; only natural to slide the wave back and forth to adjust the phase. Let's add
;; a movable point and hook it up to our function.

^{:nextjournal.clerk/width :wide}
(show-sci
 (reagent/with-let [!phase (reagent/atom [0 0])]
   [:<>
    [mafs/Mafs
     {:view-box {:x [-10 10] :y [-2 2]}
      :preserve-aspect-ratio false}
     [mafs/CartesianCoordinates
      {:subdivisions 4
       :x-axis
       {:lines Math/PI
        :labels mafs/labelPi}}]
     [mafs.plot/OfX {:y (fn [x] (Math/sin (- x (first @!phase))))}]
     [mafs/MovablePoint
      {:atom !phase
       :constrain "horizontal"}]]
    [:pre
     (str "Phase shift: " (first @!phase))]]))

;; There are a few noteworthy things here: one is how we declared our point. We
;; start centered on the origin, but constrain the motion of the point
;; horizontally.

;; Also worth noting is how we subtracted `phase.x` from the `x` in our sine
;; function. This is just math—we're moving our wave side-to-side based on the
;; point's position.

;; Lastly, we draw `{phase.element}` on the view, which renders the actual
;; point. We place it last so that it gets rendered above our function.

;; ## Components

;; ### Mafs

^{:nextjournal.clerk/width :wide}
(show-sci
 [mafs/Mafs {:height 200}
  [mafs/Text {:x 0 :y 0} "I love math!"]])

;; #### Sizing

;; Mafs accepts a width and height prop. width defaults to auto, which means
;; that Mafs will scale to the width of its container. height defaults to 500px,
;; and cannot be set to "auto".

;; #### Viewbox

;; When showing a visualization, it's useful to think of your content as having
;; a useful "viewbox" designating the region in which interesting things are
;; happening. Mafs allows you to specify this with the viewBox prop.

^{:nextjournal.clerk/width :wide}
(show-sci
 [mafs/Mafs
  {:view-box {:x [-5 5]
              :y [-5 5]}}
  [mafs/CartesianCoordinates]
  [mafs/Polygon {:points [[-5 -5] [5 -5] [5 5] [-5 5]]}]])

;; #### Aspect ratio preservation

;; The preserveAspectRatio prop changes how the viewbox is mapped to the Mafs
;; viewport. Setting it to false will stretch the viewbox to fit the viewport,
;; tossing aside the aspect ratio preservation.

^{:nextjournal.clerk/width :wide}
(show-sci
 [mafs/Mafs
  {:view-box {:x [-5 5]
              :y [-5 5]}
   :preserve-aspect-ratio false}
  [mafs/CartesianCoordinates]
  [mafs/Polygon {:points [[-5 -5] [5 -5] [5 5] [-5 5]]}]])

;; The only other option is "contain" for now, which is also the default.

;; #### Padding

;; Mafs adds a padding of 0.5 to all visualizations by default. To change or
;; remove padding, you can specify padding in the viewBox object.

^{:nextjournal.clerk/width :wide}
(show-sci
 [mafs/Mafs
  {:view-box {:x [-5 5]
              :y [-5 5]
              :padding 0}}
  [mafs/CartesianCoordinates]
  [mafs/Polygon {:points [[-5 -5] [5 -5] [5 5] [-5 5]]}]])

;; ### Coordinates

;; Coordinates overlay a grid of lines on top of the Mafs canvas to give a sense
;; of scale. Axes are pretty configurable—the spacing between lines, number of
;; subdivisions, and the labels themselves can be altered.

^{:nextjournal.clerk/width :wide}
(show-sci
 [mafs/Mafs
  [mafs/CartesianCoordinates]])

;; #### Axis options

;; Each axis—xAxis and yAxis—can be configured with the following options:

;; - axis: Whether to draw the axis line.
;; - lines: The spacing between each primary line orthogonal to the axis, or
;;   false to draw none.
;; - subdivisions: How many subdivisions to draw per line, or false to draw none.
;; - labels: A function that returns a label for each line.

;; The entire axis can also be set to falseto disable it entirely.

;; Mafs also exports a helper function, labelPi, which can be passed to labels
;; to render in terms of $\pi$.

^{:nextjournal.clerk/width :wide}
(show-sci
 [mafs/Mafs
  {:view-box {:x [-8 8]
              :y [(* 2 (- Math/PI))
                  (* 2 Math/PI)]
              :padding (/ Math/PI 2)}
   :preserve-aspect-ratio false}
  [mafs/CartesianCoordinates
   {:x-axis
    {:lines 1
     :labels
     (fn [n]
       (if (odd? n) n ""))}
    :y-axis
    {:lines Math/PI
     :subdivisions 4
     :labels mafs/labelPi}}]])

;; ### Point

;; Points are dots that can be rendered at a location (x, y).

^{:nextjournal.clerk/width :wide}
(show-sci
 [mafs/Mafs
  [mafs/CartesianCoordinates]
  [mafs/Point {:x 1 :y 1}]])

;; ### Line

;; There are a few components for lines, depending on how you want to construct
;; them.

;; #### Line Segment

^{:nextjournal.clerk/width :wide}
(show-sci
 (reagent/with-let
   [!state (reagent/atom
            {:point1 [-1 -1]
             :point2 [2 1]})]
   [mafs/Mafs
    [mafs/CartesianCoordinates]
    [mafs.line/Segment @!state]
    [mafs/MovablePoint
     {:atom !state
      :path :point1}]
    [mafs/MovablePoint
     {:atom !state
      :path :point2}]]))

;; Line through two points

^{:nextjournal.clerk/width :wide}
(show-sci
 (reagent/with-let
   [!state (reagent/atom
            {:point1 [-1 -1]
             :point2 [2 1]})]
   [mafs/Mafs
    [mafs/CartesianCoordinates]
    [mafs.line/ThroughPoints @!state]
    [mafs/MovablePoint
     {:atom !state
      :path :point1}]
    [mafs/MovablePoint
     {:atom !state
      :path :point2}]]))

;; #### Point and slope

^{:nextjournal.clerk/width :wide}
(show-sci
 (reagent/with-let
   [!state (reagent/atom
            {:point [-1 -1]
             :slope [0 1]})]
   [mafs/Mafs
    [mafs/CartesianCoordinates]
    [mafs.line/PointSlope
     {:point (:point @!state)
      :slope (-> (:slope @!state)
                 (second))}]
    [mafs/MovablePoint
     {:atom !state
      :path :point}]
    [mafs/MovablePoint
     {:atom !state
      :path :slope
      :constrain "vertical"}]]))

;; #### Point and angle

^{:nextjournal.clerk/width :wide}
(show-sci
 (reagent/with-let
   [!state (reagent/atom [-1 -1])]
   [mafs/Mafs {:view-box {:y [-1 1]}}
    [mafs/CartesianCoordinates]
    [mafs.line/PointAngle
     {:point @!state
      :angle (/ Math/PI 6)}]
    [mafs/MovablePoint {:atom !state}]]))

;; ### Polygon

^{:nextjournal.clerk/width :wide}
(show-sci
 (reagent/with-let
   [a  [2 0]
    b  [-2 0]
    !c (reagent/atom [0 2])]
   [mafs/Mafs
    [mafs/CartesianCoordinates]
    [mafs/Polygon
     {:points (let [[cx cy] @!c]
                [[cx (- cy)] a b])
      :stroke-style "dashed"}]
    [mafs/Polygon
     {:points [@!c a b]
      :color (:blue mafs/Theme)}]
    [mafs/MovablePoint {:atom !c}]]))

;; ### Circle

;; Circles take a center vector and a radius.

^{:nextjournal.clerk/width :wide}
(show-sci
 (reagent/with-let
   [!point-on-circle
    (reagent/atom
     [(/ (Math/sqrt 2) 2)
      (/ (Math/sqrt 2) 2)])]
   [mafs/Mafs {:view-box {:y [-2 2]}}
    [mafs/CartesianCoordinates]
    [mafs/Circle
     {:center [0 0]
      :radius (mafs.vec/mag @!point-on-circle)}]
    [mafs/MovablePoint
     {:atom !point-on-circle}]]))

;; ### Ellipse

;; Ellipses take a center vector, radius vector, and an angle.

^{:nextjournal.clerk/width :wide}
(show-sci
 (reagent/with-let
   [hint-radius 3
    !state
    (reagent/atom
     {:translate [0 0]
      :rotate [hint-radius 0]
      :width [-2 0]
      :height [0 1]})]
   [mafs/Mafs {:view-box {:x [-3 3]
                          :y [-3 3]}}
    [mafs/CartesianCoordinates]
    [mafs/Transform {:translate (:translate @!state)}
     [mafs/Transform {:rotate
                      (let [[x y] (:rotate @!state)]
                        (Math/atan2 y x))}
      ;; Display a little hint that the point is meant to move radially
      [mafs/Circle
       {:center [0 0]
        :radius hint-radius
        :stroke-style "dashed"
        :stroke-opacity 0.3
        :fill-opacity 0}]

      [mafs/Ellipse
       {:center [0 0]
        :radius (let [{[x _] :width [_ y] :height} @!state]
                  [(Math/abs x) (Math/abs y)])}]
      [mafs/MovablePoint {:atom !state
                          :path :width
                          :constrain "horizontal"}]
      [mafs/MovablePoint {:atom !state
                          :path :height
                          :constrain "vertical"}]]
     [mafs/MovablePoint {:atom !state
                         :path :rotate
                         :color (:blue mafs/Theme)
                         ;; Constrain this point to only move in a circle
                         :constrain
                         (fn [p]
                           (mafs.vec/with-mag p 3))}]]
    [mafs/MovablePoint {:atom !state
                        :path :translate
                        :color (:orange mafs/Theme)}]]))

;; ### Plot

;; Mafs supports numerically plotting a number of function types by passing in
;; plain JavaScript functions.

;; #### Functions of $x$ and $y$

^{:nextjournal.clerk/width :wide}
(show-sci
 (defn sigmoid1 [x]
   (dec (/ 2 (inc (Math/exp (- x))))))

 [mafs/Mafs
  [mafs/CartesianCoordinates]
  [mafs.plot/OfX {:y Math/sin :color (:blue mafs/Theme)}]
  [mafs.plot/OfY {:x sigmoid1 :color (:pink mafs/Theme)}]])

;; #### Parametric functions

^{:nextjournal.clerk/width :wide}
(show-sci
 (defn clamp [x min max]
   (cond
     (> x max) max
     (< x min) min
     :else x))

 (reagent/with-let
   [!point (reagent/atom [0.5 0])]
   [mafs/Mafs {:view-box {:x [-1 1] :y [-1 1]}}
    [mafs/CartesianCoordinates {:subdivisions 4}]
    [mafs.plot/Parametric
     (let [k (* 25 (first @!point) Math/PI)]
       {:t [0 k]
        :xy (fn [t]
              [(Math/cos t) (* (/ t k) (Math/sin t))])})]
    [mafs/MovablePoint
     {:atom !point
      :constrain
      (fn [[x]]
        [(clamp x -1 1) 0])}]]))

;; #### Vector fields

^{:nextjournal.clerk/width :wide}
(show-sci
 (reagent/with-let
   [!point (reagent/atom [0.6 0.6])]
   [mafs/Mafs
    [mafs/CartesianCoordinates {:subdivisions 2}]
    [mafs.plot/VectorField
     {:step 0.5
      :xy
      (let [[ax ay] @!point]
        (fn [[x y]]
          (js/Array.
           (- (- y ay) (- x ax))
           (- (- (- x ax)) (- y ay)))))
      :xy-opacity
      (fn [[x y]]
        (/ (+ (Math/abs x) (Math/abs y))
           10))}]
    [mafs/MovablePoint
     {:atom !point}]]))

;; #### Render quality

;; ##### Function sampling

;; Plot.OfX, Plot.OfY, and Plot.Parametric use numerical methods for evaluating
;; a function and attempting to plot it accurately. The approach works well for
;; most functions, but it's far from perfect.

;; Mafs samples functions by by recursively subdividing the domain until an
;; estimated error threshold is met (or the recursion limit limit is reached).

;; ##### Sampling depth

;; To force more subdivisions (and therefore improve quality), the
;; minSamplingDepth and maxSamplingDepth props can be tuned. Increasing
;; minSamplingDepth can help when you want to ensure more subdivisions and
;; improve accuracy, and lowering maxSamplingDepth can help improve performance.
;; These two props should be tuned to meet your needs.

;; Here's an example of a common "stress test" function for plotters, sin(1/x).
;; The top plot has the default sampling depths, while the bottom has
;; minSamplingDepth increased to 15. Neither approach is perfect, but the bottom
;; render is indistinguishable from a perfect plot.

^{:nextjournal.clerk/width :wide}
(show-sci
 (let [f (fn [x] (Math/sin (/ 1 x)))]
   [mafs/Mafs {:view-box {:x [(/ -1 32) (/ 1 32)]
                          :y [-3.5 3.5]
                          :padding 0}
               :preserve-aspect-ratio false}
    [mafs/CartesianCoordinates]
    [mafs.plot/OfX {:y (fn [x] (+ (f x) 1.5))}]
    [mafs.plot/OfX {:y (fn [x] (- (f x) 1.5))
                    :min-sampling-depth 15}]]))

;; ##### Vector fields

;; Vector field rendering quality can be tuned with the step prop. This declares
;; the spacing between arrows, so lowering it will decrease performance.

;; ### Text

;; The Text component is a pretty lightweight wrapper around SVG's text, namely
;; that the anchor point is mapped to coordinate space. The optional attach will
;; orient the text along a cardinal direction ("n", "s", "nw", etc.)

^{:nextjournal.clerk/width :wide}
(show-sci
 (reagent/with-let [!point (reagent/atom [0.6 0.6])]
   [mafs/Mafs {:view-box {:y [0 2] :x [-3 5]}}
    [mafs/CartesianCoordinates]
    (let [[x y] @!point
          desc  (str "(" (.toFixed x 3)  ", " (.toFixed y 3) ")")
          opts  {:x x :y y :attach-distance 15}]
      [:<>
       [mafs/Text (assoc opts :attach "w") desc]
       [mafs/Text (assoc opts :attach "e") desc]])
    [mafs/MovablePoint {:atom !point}]]))

;; ### Vector

;; Vectors are a handy line-and-arrow shape for visualizing direction and
;; magnitude.

;; Mafs ships with a small selection of common linear algebra functions (for
;; both vectors and matrices), exposing them as vec. Those utilities are used
;; extensively here.

^{:nextjournal.clerk/width :wide}
(show-sci
 (reagent/with-let [!point (reagent/atom [0.4 0.6])]
   (let [[x y :as vec1] @!point
         angle (Math/atan2 y x)
         vec2  (mafs.vec/add vec1 (mafs.vec/rotate vec1 angle))
         vec3  (mafs.vec/add vec1 (mafs.vec/rotate vec2 (* -2 angle)))]
     [mafs/Mafs
      [mafs/CartesianCoordinates]
      [mafs/Vector {:tip vec1}]
      [mafs/Vector {:tail vec1 :tip vec2}]
      [mafs/Vector {:tail vec2 :tip vec3}]
      [mafs/MovablePoint {:atom !point}]])))

;; ### Transform

;; Sometimes it can be useful to apply 2D transformations to one or more
;; components collectively. This is where Transform comes in handy.

;; TODO example

;; #### Transformation Types

;; Transform supports many transformation convenience props, but they all boil
;; down to matrix multiplication.

;; You can pass your own matrix via the matrix prop and it will be combined with
;; any other transformations you define. Use vec.matrixBuilder() to construct
;; such a matrix if needed.

;; ##### Nesting

(comment
  [mafs/Transform {:translate [10 10]}
   [mafs/Transform {:rotate (/ Math/PI 2)}
    ;; components in here will be rotated, THEN translated
    ]])

;; Nesting is supported. Transformations will be applied inside out, so the
;; innermost Transform will be applied first.

;; #### Exceptions

;; Not all elements support Transform. This may change in the future.

;; - Text nodes have their anchor points transformed, but not the text itself.
;; - CartesianCoordinates cannot be transformed.
;; - Function.OfX cannot be transformed.
;; - VectorField cannot be transformed.

;; ### Debug

;; TODO

;; ### Movable Points

;; Movable points can be dragged around the coordinate plane, or moved via the
;; keyboard. They're the cornerstone of lots of interactions.

;; They can be unconstrained (allowed to move freely), constrained horizontally
;; or vertically, or constrained to an arbitrary function. This example
;; constrains movement horizontally:

;; TODO

;; #### Constraints

;; Beyond constraining horizontally or vertically, points can also be
;; constrained to arbitrary paths. This is done by passing a function to
;; constrain. The function is expected to take a point (x, y), which is where
;; the user is trying to move to, and to return a new point, (x', y'), which is
;; where the point should actually go.

;; To demonstrate this, imagine constraining a point to "snap" to the nearest
;; whole number point. We take where the user is trying to move to, and round it
;; to the nearest whole number.

;; TODO demo

;; Another common use case is to constrain motion to be circular —
;; `mafs.vec/with-mag` comes in handy there.

;; TODO demo

;; You can also constrain a point to follow a straight line by setting constrain
;; to "horizontal" or "vertical".

;; Mafs may call constrain more than once when the user moves a point using the
;; arrow keys, so it should be side-effect free.

;; #### Transformations and constraints

;; When wrapping a Movable Point in a Transform, the point will be transformed
;; too. However, your constrain function will be passed the untransformed point,
;; and its return value will be transformed back into the currently applied
;; transform. In other words, Mafs takes care of the math for you.

;; Let's see a more complex example where we combine more interesting constraint
;; functions with transforms. On the left, we have a point that can only move in
;; whole-number increments within a square, and on the right, a point that can
;; only move in π/16 increments in a circle.

;; TODO

;; #### Dynamic Movable Points

;; useMovablePoint is a hook that helps you instantiate and manage the state of
;; a MovablePoint. However, if need be, you can also use MovablePoint directly.
;; This can be useful if you need to work with a dynamic number of movable
;; points (since the React "rules of hooks" ban you from dynamically calling
;; hooks).

;; TODO

;; ## Custom Components

;; Sometimes, Mafs simply won't have the component you need. When that happens,
;; Mafs provides APIs to drop one level deeper, letting you render any SVG
;; elements you want. All it takes is some work to ensure things render
;; correctly.

;; In learning this, we'll make a PizzaSlice component that behaves just like a
;; built-in Mafs component.

;; ### Transform Contexts

;; TODO finish.

;; ## Animation

;; TODO

;; ## Examples

;; ### Bézier curves
;; ### Riemann sums
;; ### Fancy parabola
;; ### Projectile motion

;; ## Thanks and Support

;; To support this work and my other open source projects, consider sponsoring
;; me via my [GitHub Sponsors page](https://github.com/sponsors/sritchie). Thank
;; you to my current sponsors!

;; I'm grateful to [Clojurists Together](https://www.clojuriststogether.org/)
;; for financial support during this library's creation. Please
;; consider [becoming a member](https://www.clojuriststogether.org/developers/)
;; to support this work and projects like it.
;;
;; For more information on me and my work, visit https://samritchie.io.

;; ## License

;; Copyright © 2022 Sam Ritchie.

;; Distributed under the [MIT
;; License](https://github.com/mentat-collective/mafs.cljs/blob/main/LICENSE).
;; See [LICENSE](https://github.com/mentat-collective/mafs.cljs/blob/main/LICENSE).
