(ns mafs.sci
  (:require [mafs]
            [mafs.coordinates]
            [mafs.debug]
            [mafs.line]
            [mafs.plot]
            [mafs.vec]
            [sci.core :as sci]))

(def mafs-namespace
  (sci/copy-ns mafs (sci/create-ns 'mafs)))

(def mafs-coordinates-namespace
  (sci/copy-ns mafs.coordinates (sci/create-ns 'mafs.coordinates)))

(def mafs-plot-namespace
  (sci/copy-ns mafs.plot (sci/create-ns 'mafs.plot)))

(def mafs-line-namespace
  (sci/copy-ns mafs.line (sci/create-ns 'mafs.line)))

(def mafs-debug-namespace
  (sci/copy-ns mafs.debug (sci/create-ns 'mafs.debug)))

(def mafs-vec-namespace
  (sci/copy-ns mafs.vec (sci/create-ns 'mafs.vec)))

(def namespaces
  {'mafs mafs-namespace
   'mafs.coordinates mafs-coordinates-namespace
   'mafs.plot mafs-plot-namespace
   'mafs.line mafs-line-namespace
   'mafs.debug mafs-debug-namespace
   'mafs.vec mafs-vec-namespace})

(def config
  {:namespaces namespaces})
