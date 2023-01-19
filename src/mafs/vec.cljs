(ns mafs.vec)

(defn add
  "Add two vectors"
  [[x1 y1] [x2 y2]]
  [(+ x1 x2) (+ y1 y2)])

(defn sub
  "Subtract one vector from another"
  [[x1 y1] [x2 y2]]
  [(- x1 x2) (- y1 y2)])

(defn dot
  "Dot product of two vectors"
  [[x1 y1] [x2 y2]]
  (+ (* x1 x2) (* y1 y2)))

(defn mag
  "Get the magnitude of a vector"
  [v]
  (Math/sqrt
   (dot v v)))

(defn normal
  "Get the normal vector of a vector"
  [[x y]]
  [(- y) x])

(defn scale
  "Scale a vector by a scalar"
  [[x y] sc]
  [(* x sc) (* y sc)])

(defn with-mag [v m]
  (scale v (/ m (mag v))))

(defn normalize
  "Return a normalized version of a vector"
  [v]
  (with-mag v 1))

(defn lerp
  "Linear interpolation between two vectors"
  [v1 v2 t]
  (let [d (sub v2 v1)
        m (mag d)]
    (add v1 (with-mag d (* t m)))))

(defn rotate
  "Rotates a vector around the origin. Shorthand for a rotation matrix."
  [[x y] a]
  (let [c (Math/cos a)
        s (Math/sin a)]
    [(- (* c x) (* s y))
     (+ (* s x) (* c y))]))

(defn rotate-about
  "Rotates a vector around a given point."
  [v cp a]
  (-> (sub v cp)
      (rotate a)
      (add cp)))

(defn midpoint
  "Gets the midpoint of two vectors"
  [v1 v2]
  (lerp v1 v2 0.5))

(defn square-dist
  "Get the square distance between two vectors"
  [[x1 y1] [x2 y2]]
  (+ (Math/pow (- x2 x1) 2)
     (Math/pow (- y2 y1) 2)))

(defn dist
  "Gets the distance between two vectors"
  [v1 v2]
  (Math/sqrt
   (square-dist v1 v2)))

(defn transform
  "Apply a matrix transformation to a vector. This is a 3x3 matrix applied to a 2d
  vector, like M*v."
  [[x y] [a c tx b d ty]]
  [(+ (* a x) (* c y) tx)
   (+ (* b x) (* d y) ty)])
