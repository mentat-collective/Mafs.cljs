(ns mafs.coordinates
  (:require ["mafs" :as m]
            [mafs.macros :refer [defcomponent]]))

(defcomponent Cartesian
  "
  - `:x-axis`
  - `:y-axis`
  - `:subdivisions`"
  (.-Cartesian m/Coordinates))

(defcomponent Polar
  "
  - `:x-axis`
  - `:y-axis`
  - `:lines`
  - `:subdivisions`"
  (.-Polar m/Coordinates))
