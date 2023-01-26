(ns mafs.clerk-ui
  (:require [mafs]
            [mafs.coordinates]
            [mafs.debug]
            [mafs.line]
            [mafs.plot]
            [mafs.vec]
            [nextjournal.clerk.sci-env]
            [sci.ctx-store]
            [sci.core :as sci]))

;; ## SCI Customization

(sci.ctx-store/swap-ctx!
 sci/merge-opts
 {:classes {'Math js/Math}
  :namespaces
  {'mafs
   (sci/copy-ns mafs (sci/create-ns 'mafs))

   'mafs.coordinates
   (sci/copy-ns mafs.coordinates (sci/create-ns 'mafs.coordinates))

   'mafs.plot
   (sci/copy-ns mafs.plot (sci/create-ns 'mafs.plot))

   'mafs.line
   (sci/copy-ns mafs.line (sci/create-ns 'mafs.line))

   'mafs.debug
   (sci/copy-ns mafs.debug (sci/create-ns 'mafs.debug))

   'mafs.vec
   (sci/copy-ns mafs.vec (sci/create-ns 'mafs.vec))}})
