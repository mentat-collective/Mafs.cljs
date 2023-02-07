(ns mafs.sci
  "Functions and vars for installation of all namespaces into an SCI context."
  (:require [mafs.coordinates]
            [mafs.core]
            [mafs.debug]
            [mafs.line]
            [mafs.plot]
            [mafs.vec]
            [sci.core :as sci]
            [sci.ctx-store]))

(def mafs-core-namespace
  (sci/copy-ns mafs.core (sci/create-ns 'mafs.core)))

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

(def ^{:doc "Map of symbol to SCI namespace object. This var is usable as the
`:namespaces` entry in an SCI context config."}
  namespaces
  {'mafs.core mafs-core-namespace
   'mafs.coordinates mafs-coordinates-namespace
   'mafs.plot mafs-plot-namespace
   'mafs.line mafs-line-namespace
   'mafs.debug mafs-debug-namespace
   'mafs.vec mafs-vec-namespace})

(def ^{:doc "SCI config that will install all of Mafs.cljs into an SCI context,
  with no aliases registered."}
  config
  {:classes {'Math js/Math}
   :namespaces namespaces})

(defn install!
  "Called with no arguments, installs [[config]] into the shared SCI context
  store.

  Takes an optional `:aliases` map of alias symbol => namespace symbol.

  For example, to install all namespaces, but alias `mafs.core` to `mafs`, call:

  ```clj
  (mafs.sci/install! {'mafs 'mafs.core})
  ```"
  ([] (install! {}))
  ([aliases]
   (sci.ctx-store/swap-ctx!
    sci/merge-opts
    (assoc config :aliases aliases))))
