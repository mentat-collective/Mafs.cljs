(ns mafs.clerk-ui
  (:require [mafs]
            [mafs.debug]
            [mafs.line]
            [mafs.plot]
            [nextjournal.clerk.sci-env]
            [sci.ctx-store]
            [sci.core :as sci]))

;; ## SCI Customization

(sci.ctx-store/swap-ctx!
 sci/merge-opts
 {:classes    {'Math js/Math}
  :aliases {'mafs 'mafs}
  :namespaces
  {'mafs
   (sci/copy-ns mafs (sci/create-ns 'mafs))

   'mafs.plot
   (sci/copy-ns mafs.plot (sci/create-ns 'mafs.plot))

   'mafs.line
   (sci/copy-ns mafs.line (sci/create-ns 'mafs.line))

   'mafs.debug
   (sci/copy-ns mafs.debug (sci/create-ns 'mafs.debug))}})
