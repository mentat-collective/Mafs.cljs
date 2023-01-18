^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mafs.notebook
  {:nextjournal.clerk/auto-expand-results? true}
  (:require [mentat.clerk-utils.show :refer [show-sci]]))

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
     [mafs/MovablePointAtom
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

(show-sci
 [mafs/Mafs
  [mafs/CartesianCoordinates]
  [mafs/Point {:x 1 :y 1}]])

;; ### Line

;; There are a few components for lines, depending on how you want to construct them.

;; #### Line Segment

(show-sci
 (reagent/with-let
   [!state (reagent/atom
            {:point1 [-1 -1]
             :point2 [2 1]})]
   [mafs/Mafs
    [mafs/CartesianCoordinates]
    [mafs.line/Segment @!state]
    [mafs/MovablePointAtom
     {:atom !state
      :path :point1}]
    [mafs/MovablePointAtom
     {:atom !state
      :path :point2}]]))

;; Line through two points

(show-sci
 (reagent/with-let
   [!state (reagent/atom
            {:point1 [-1 -1]
             :point2 [2 1]})]
   [mafs/Mafs
    [mafs/CartesianCoordinates]
    [mafs.line/ThroughPoints @!state]
    [mafs/MovablePointAtom
     {:atom !state
      :path :point1}]
    [mafs/MovablePointAtom
     {:atom !state
      :path :point2}]]))

;; #### Point and slope

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
    [mafs/MovablePointAtom
     {:atom !state
      :path :point}]
    [mafs/MovablePointAtom
     {:atom !state
      :path :slope
      :constrain "vertical"}]]))

;; #### Point and angle

(show-sci
 (reagent/with-let
   [!state (reagent/atom [-1 -1])]
   [mafs/Mafs {:view-box {:y [-1 1]}}
    [mafs/CartesianCoordinates]
    [mafs.line/PointAngle
     {:point @!state
      :angle (/ Math/PI 6)}]
    [mafs/MovablePointAtom {:atom !state}]]))

;; ### Polygon

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
    [mafs/MovablePointAtom {:atom !c}]]))

;; ### Circle

;; Circles take a center vector and a radius.

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
      :radius (mafs/mag @!point-on-circle)}]
    [mafs/MovablePointAtom
     {:atom !point-on-circle}]]))

;; ### Ellipse

;; ### Plot

;; ### Text

;; ### Vector

;; ### Transform

;; ### Debug

^{:nextjournal.clerk/width :wide}
(show-sci
 (defn sigmoid1 [x]
   (dec (/ 2 (inc (Math/exp (- x))))))

 [mafs/Mafs {}
  [mafs/CartesianCoordinates]
  [mafs.plot/OfX {:y Math/sin :color (:blue mafs/Theme)}]
  [mafs.plot/OfY {:x sigmoid1 :color (:pink mafs/Theme)}]])
