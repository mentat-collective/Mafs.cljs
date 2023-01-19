(ns mafs.matrix
  (:refer-clojure :exclude [identity])
  (:require [clojure.string :as s]))

(defn create
  ([a b c d]
   [a c 0
    b d 0])
  ([a b c d tx ty]
   [a c tx
    b d ty]))

(def identity
  (create 1 0 0 1))

(defn rotation [a]
  (let [c (Math/cos a)
        s (Math/sin a)]
    (create c s (- s) c)))

(defn translation [tx ty]
  (create 1 0 0 1 tx ty))

(defn scale-matrix [cx cy]
  (create cx 0 0 cy))

(defn shear-matrix [sx sy]
  (create 1 sy sx 1))

(defn mult
  "Multiplies the first matrix by the second matrix. This composes the
  transformations from right to left."
  [[a0 a1 a2
    a3 a4 a5]
   [b0 b1 b2
    b3 b4 b5]]
  (create
   (+ (* a0 b0) (* a1 b3))
   (+ (* a3 b0) (* a4 b3))
   (+ (* a0 b1) (* a1 b4))
   (+ (* a3 b1) (* a4 b4))
   (+ (* a0 b2) (* a1 b5) a2)
   (+ (* a3 b2) (* a4 b5) a5)))

(defn det
  "Returns the determinant of the top-left corner of the 3x3 matrix (ignoring the
  translation)."
  [m]
  (- (* (nth m 0) (nth m 4))
     (* (nth m 3) (nth m 1))))

(defn invert
  [[a00 a01 a02
    a10 a11 a12 :as a]]
  (let [adet (det a)]
    (when-not (zero? adet)
      (let [inv-det (/ 1.0 adet)]
        (create
         (* inv-det a11)
         (* inv-det (- a10))
         (* inv-det (- a01))
         (* inv-det a00)
         (* inv-det (- (* a01 a12) (* a02 a11)))
         (* inv-det (- (* a02 a10) (* a00 a12))))))))

(defn rotate [m a]
  (mult (rotation a) m))

(defn translate [m tx ty]
  (mult (translation tx ty) m))

(defn scale [m cx cy]
  (mult (scale-matrix cx cy) m))

(defn shear [m sx sy]
  (mult (shear-matrix sx sy) m))

(defn ->css
  "Represent a matrix as a CSS transform `matrix(...)` string"
  [m]
  (str "matrix(" (s/join ", " m) ")"))
