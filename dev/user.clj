(ns user
  (:require [mentat.clerk-utils.build :as b]))

(def index
  "dev/mafs/notebook.clj")

(def defaults
  {:index index
   :browse? true
   :watch-paths ["dev"]
   :cljs-namespaces '[mafs.clerk-ui]
   :cname "mafs.mentat.org"
   :github-slug "mentat-collective/mafs.cljs"})

(def static-defaults
  (assoc defaults :browse? false))

(b/set-css!
 "https://unpkg.com/computer-modern@0.1.2/cmu-serif.css"
 "https://unpkg.com/mafs@0.11.4/core.css"
 "https://unpkg.com/mafs@0.11.4/font.css")

(defn start!
  ([] (start! {}))
  ([opts]
   (b/serve!
    (merge defaults
           {:browse? true}
           opts))))

(def halt! b/halt!)

(defn static-build! [opts]
  (b/static-build!
   (merge static-defaults
          opts)))

(defn garden! [opts]
  (b/garden!
   (merge static-defaults opts)))
