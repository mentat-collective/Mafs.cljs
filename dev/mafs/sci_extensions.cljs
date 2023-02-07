(ns mafs.sci-extensions
  (:require [mafs.sci]
            [sci.core :as sci]
            [sci.ctx-store]))

;; ## SCI Customization

(sci.ctx-store/swap-ctx!
 sci/merge-opts
 (assoc mafs.sci/config
        :aliases {'mafs 'mafs.core}))
