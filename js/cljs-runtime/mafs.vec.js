import "./cljs_env.js";
goog.provide('mafs.vec');
/**
 * Add two vectors
 */
mafs.vec.add = (function mafs$vec$add(p__47743,p__47744){
var vec__47745 = p__47743;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47745,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47745,(1),null);
var vec__47748 = p__47744;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47748,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47748,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + x2),(y1 + y2)], null);
});
/**
 * Subtract one vector from another
 */
mafs.vec.sub = (function mafs$vec$sub(p__47751,p__47752){
var vec__47753 = p__47751;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47753,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47753,(1),null);
var vec__47756 = p__47752;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47756,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47756,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 - x2),(y1 - y2)], null);
});
/**
 * Dot product of two vectors
 */
mafs.vec.dot = (function mafs$vec$dot(p__47759,p__47760){
var vec__47761 = p__47759;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47761,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47761,(1),null);
var vec__47764 = p__47760;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47764,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47764,(1),null);
return ((x1 * x2) + (y1 * y2));
});
/**
 * Get the magnitude of a vector
 */
mafs.vec.mag = (function mafs$vec$mag(v){
return Math.sqrt(mafs.vec.dot(v,v));
});
/**
 * Get the normal vector of a vector
 */
mafs.vec.normal = (function mafs$vec$normal(p__47767){
var vec__47768 = p__47767;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47768,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47768,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- y),x], null);
});
/**
 * Scale a vector by a scalar
 */
mafs.vec.scale = (function mafs$vec$scale(p__47771,sc){
var vec__47772 = p__47771;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47772,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47772,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x * sc),(y * sc)], null);
});
mafs.vec.with_mag = (function mafs$vec$with_mag(v,m){
return mafs.vec.scale(v,(m / mafs.vec.mag(v)));
});
/**
 * Return a normalized version of a vector
 */
mafs.vec.normalize = (function mafs$vec$normalize(v){
return mafs.vec.with_mag(v,(1));
});
/**
 * Linear interpolation between two vectors
 */
mafs.vec.lerp = (function mafs$vec$lerp(v1,v2,t){
var d = mafs.vec.sub(v2,v1);
var m = mafs.vec.mag(d);
return mafs.vec.add(v1,mafs.vec.with_mag(d,(t * m)));
});
/**
 * Rotates a vector around the origin. Shorthand for a rotation matrix.
 */
mafs.vec.rotate = (function mafs$vec$rotate(p__47775,a){
var vec__47776 = p__47775;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47776,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47776,(1),null);
var c = Math.cos(a);
var s = Math.sin(a);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((c * x) - (s * y)),((s * x) + (c * y))], null);
});
/**
 * Rotates a vector around a given point.
 */
mafs.vec.rotate_about = (function mafs$vec$rotate_about(v,cp,a){
return mafs.vec.add(mafs.vec.rotate(mafs.vec.sub(v,cp),a),cp);
});
/**
 * Gets the midpoint of two vectors
 */
mafs.vec.midpoint = (function mafs$vec$midpoint(v1,v2){
return mafs.vec.lerp(v1,v2,0.5);
});
/**
 * Get the square distance between two vectors
 */
mafs.vec.square_dist = (function mafs$vec$square_dist(p__47779,p__47780){
var vec__47781 = p__47779;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47781,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47781,(1),null);
var vec__47784 = p__47780;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47784,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47784,(1),null);
return (Math.pow((x2 - x1),(2)) + Math.pow((y2 - y1),(2)));
});
/**
 * Gets the distance between two vectors
 */
mafs.vec.dist = (function mafs$vec$dist(v1,v2){
return Math.sqrt(mafs.vec.square_dist(v1,v2));
});
/**
 * Apply a matrix transformation to a vector. This is a 3x3 matrix applied to a 2d
 *   vector, like M*v.
 */
mafs.vec.transform = (function mafs$vec$transform(p__47787,p__47788){
var vec__47789 = p__47787;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47789,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47789,(1),null);
var vec__47792 = p__47788;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47792,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47792,(1),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47792,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47792,(3),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47792,(4),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47792,(5),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((a * x) + (c * y)) + tx),(((b * x) + (d * y)) + ty)], null);
});

//# sourceMappingURL=mafs.vec.js.map
