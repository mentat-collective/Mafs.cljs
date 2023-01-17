(ns mafs.core
  "Reagent components and utilities exposing
  the [hooks](https://reactjs.org/docs/hooks-intro.html) declared by
  the [Leva](https://github.com/pmndrs/leva) components GUI.

  These components make it easy to synchronize state through Clojure's atom
  interface instead of
  [React hooks](https://reactjs.org/docs/hooks-intro.html) and callbacks."
  (:require ["mafs" :as m]
            ["react" :as react]))
