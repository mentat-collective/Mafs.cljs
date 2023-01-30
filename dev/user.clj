(ns user
  (:require [mentat.clerk-utils.build :as b]))

(def index
  "dev/mafs/notebook.clj")

(def defaults
  {:index index
   :browse? true
   :watch-paths ["dev"]
   :cljs-namespaces '[mafs.clerk-ui]
   :github-slug "mentat-collective/mafs.cljs"})

(defonce _ignore
  (b/add-css!
   "https://unpkg.com/computer-modern@0.1.2/cmu-serif.css"
   "https://unpkg.com/mafs@0.11.4/core.css"
   "https://unpkg.com/mafs@0.11.4/font.css"))

(defn start!
  ([] (start! {}))
  ([opts]
   (b/serve!
    (merge defaults opts))))

(def halt! b/halt!)

(defn static-build! [opts]
  (b/static-build! (merge defaults opts)))

(defn garden! [opts]
  (b/garden! (merge defaults opts)))
