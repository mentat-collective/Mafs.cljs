(ns user
  (:require [mentat.clerk-utils.build :as b]))

(b/set-css!
 "https://unpkg.com/computer-modern@0.1.2/cmu-serif.css"
 "https://unpkg.com/mafs@0.11.4/core.css"
 "https://unpkg.com/mafs@0.11.4/font.css")

(def index
  "dev/mafs/notebook.clj")

(def defaults
  {:index index
   :browse? true
   :watch-paths ["dev"]
   :cljs-namespaces '[mafs.clerk-ui]})

(def static-defaults
  (assoc defaults
         :browse? false
         :cname "mafs.mentat.org"
         :git/url "https://github.com/mentat-collective/mafs.cljs"))

(defn start!
  ([] (start! {}))
  ([opts]
   (b/serve!
    (merge defaults opts))))

(def halt! b/halt!)

(defn static-build! [opts]
  (b/static-build!
   (merge static-defaults opts)))
