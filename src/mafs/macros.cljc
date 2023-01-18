(ns mafs.macros
  #?(:cljs
     (:require [reagent.core]))
  #?(:cljs
     (:require-macros [mafs.macros])))

(defmacro defcomponent
  ([sym component]
   `(defcomponent ~sym "" {} ~component))
  ([sym docstring component]
   `(defcomponent ~sym ~docstring {} ~component))
  ([sym docstring attr component]
   {:pre [(string? docstring)
          (map? attr)]}
   (when (:ns &env)
     (let [m (-> (meta sym)
                 (merge (assoc attr :doc docstring)))]
       `(def ~(with-meta sym m)
          (reagent.core/adapt-react-class ~component))))))
