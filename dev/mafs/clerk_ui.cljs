(ns mafs.clerk-ui
  (:require [mafs.core]
            [nextjournal.clerk.sci-env]
            [sci.ctx-store]
            [sci.core :as sci]))

;; ## SCI Customization

(sci.ctx-store/swap-ctx!
 sci/merge-opts
 {:classes    {'Math js/Math}
  :aliases    {'mafs 'mafs.core}
  :namespaces
  {'mafs.core
   (sci/copy-ns mafs.core (sci/create-ns 'mafs.core))}})
