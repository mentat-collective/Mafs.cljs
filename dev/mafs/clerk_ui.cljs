(ns mafs.clerk-ui
  (:require [mafs.sci]
            [nextjournal.clerk.sci-env]
            [sci.ctx-store]
            [sci.core :as sci]))

;; ## SCI Customization

(sci.ctx-store/swap-ctx!
 sci/merge-opts
 {:classes {'Math js/Math}
  :namespaces mafs.sci/namespaces})
