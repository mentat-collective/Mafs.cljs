(ns mafs.debug
  (:require ["mafs" :as m]))

(defn TransformWidget
  "Component that wraps any supplied children in an interactive transformation
  widget that lets you rotate, scale and translate all children."
  [& children]
  (into [:> (.-TransformWidget m/Debug)]
        children))

(defn ViewportInfo
  "Component that mounts a `ViewportInfo` component into the Mafs scene.

  This component displays Mafs' understanding of the world space that's in view,
  showing both the minimum and maximum x and y values, as well as what panes are
  visible according to the pane context.

  Supported options:

  - `:precision`: The number of decimal places to which to round the displayed
    values. Defaults to 3."
  ([] [:> (.-ViewportInfo m/Debug)])
  ([opts] [:> (.-ViewportInfo m/Debug) opts]))
