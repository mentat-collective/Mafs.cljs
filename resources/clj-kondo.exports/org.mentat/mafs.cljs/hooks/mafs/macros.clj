(ns hooks.mafs.macros
  (:require [clj-kondo.hooks-api :as api]))

(defn defcomponent
  "Converts a node representing an invocation of the [[mafs.macros/defcomponent]]
  macro into a matching `defn` call."
  [{:keys [node]}]
  (let [[_ sym & body]   (:children node)
        [docstring body] (if (api/string-node? (first body))
                           [(first body) (rest body)]
                           [nil body])
        [attrs body]     (if (api/map-node? (first body))
                           [(first body) (rest body)]
                           [nil body])]
    {:node
     (api/list-node
      (concat [(api/token-node 'defn) sym]
              (when docstring [docstring])
              (when attrs     [attrs])
              [(api/vector-node [])]
              body))}))
