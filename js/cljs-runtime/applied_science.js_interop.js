import "./cljs_env.js";
goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50439 = arguments.length;
var i__5770__auto___50440 = (0);
while(true){
if((i__5770__auto___50440 < len__5769__auto___50439)){
args__5775__auto__.push((arguments[i__5770__auto___50440]));

var G__50442 = (i__5770__auto___50440 + (1));
i__5770__auto___50440 = G__50442;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__50192_50443 = keyvals;
var vec__50193_50444 = G__50192_50443;
var seq__50194_50445 = cljs.core.seq(vec__50193_50444);
var first__50195_50446 = cljs.core.first(seq__50194_50445);
var seq__50194_50447__$1 = cljs.core.next(seq__50194_50445);
var k_50448 = first__50195_50446;
var first__50195_50449__$1 = cljs.core.first(seq__50194_50447__$1);
var seq__50194_50450__$2 = cljs.core.next(seq__50194_50447__$1);
var v_50451 = first__50195_50449__$1;
var keyvals_50452__$1 = seq__50194_50450__$2;
var G__50192_50453__$1 = G__50192_50443;
while(true){
var vec__50196_50454 = G__50192_50453__$1;
var seq__50197_50455 = cljs.core.seq(vec__50196_50454);
var first__50198_50456 = cljs.core.first(seq__50197_50455);
var seq__50197_50457__$1 = cljs.core.next(seq__50197_50455);
var k_50458__$1 = first__50198_50456;
var first__50198_50459__$1 = cljs.core.first(seq__50197_50457__$1);
var seq__50197_50460__$2 = cljs.core.next(seq__50197_50457__$1);
var v_50461__$1 = first__50198_50459__$1;
var keyvals_50462__$2 = seq__50197_50460__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_50458__$1)] = v_50461__$1);

if(keyvals_50462__$2){
var G__50468 = keyvals_50462__$2;
G__50192_50453__$1 = G__50468;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq50183){
var G__50185 = cljs.core.first(seq50183);
var seq50183__$1 = cljs.core.next(seq50183);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50185,seq50183__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__50213 = arguments.length;
switch (G__50213) {
case 1:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1 = (function (k){
return (function (obj){
var obj50214 = obj;
if((!((obj50214 == null)))){
return (obj50214[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj50224 = obj;
if((!((obj50224 == null)))){
return (obj50224[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__49902__auto__ = (function (){var obj50227 = obj;
if((!((obj50227 == null)))){
return (obj50227[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__49902__auto__)){
return not_found;
} else {
return val__49902__auto__;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__50229 = arguments.length;
switch (G__50229) {
case 1:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
var ks__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks);
return (function (obj){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,ks__$1);
});
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj50238 = self__.obj;
if((!((obj50238 == null)))){
return (obj50238[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__49902__auto__ = (function (){var obj50239 = self__.obj;
if((!((obj50239 == null)))){
return (obj50239[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__49902__auto__)){
return not_found;
} else {
return val__49902__auto__;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50486 = arguments.length;
var i__5770__auto___50487 = (0);
while(true){
if((i__5770__auto___50487 < len__5769__auto___50486)){
args__5775__auto__.push((arguments[i__5770__auto___50487]));

var G__50488 = (i__5770__auto___50487 + (1));
i__5770__auto___50487 = G__50488;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__50251 = keyvals;
var vec__50252 = G__50251;
var seq__50253 = cljs.core.seq(vec__50252);
var first__50254 = cljs.core.first(seq__50253);
var seq__50253__$1 = cljs.core.next(seq__50253);
var k = first__50254;
var first__50254__$1 = cljs.core.first(seq__50253__$1);
var seq__50253__$2 = cljs.core.next(seq__50253__$1);
var v = first__50254__$1;
var kvs = seq__50253__$2;
var G__50251__$1 = G__50251;
while(true){
var vec__50259 = G__50251__$1;
var seq__50260 = cljs.core.seq(vec__50259);
var first__50261 = cljs.core.first(seq__50260);
var seq__50260__$1 = cljs.core.next(seq__50260);
var k__$1 = first__50261;
var first__50261__$1 = cljs.core.first(seq__50260__$1);
var seq__50260__$2 = cljs.core.next(seq__50260__$1);
var v__$1 = first__50261__$1;
var kvs__$1 = seq__50260__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__50499 = kvs__$1;
G__50251__$1 = G__50499;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq50242){
var G__50243 = cljs.core.first(seq50242);
var seq50242__$1 = cljs.core.next(seq50242);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50243,seq50242__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50503 = arguments.length;
var i__5770__auto___50504 = (0);
while(true){
if((i__5770__auto___50504 < len__5769__auto___50503)){
args__5775__auto__.push((arguments[i__5770__auto___50504]));

var G__50505 = (i__5770__auto___50504 + (1));
i__5770__auto___50504 = G__50505;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq50268){
var G__50269 = cljs.core.first(seq50268);
var seq50268__$1 = cljs.core.next(seq50268);
var G__50270 = cljs.core.first(seq50268__$1);
var seq50268__$2 = cljs.core.next(seq50268__$1);
var G__50271 = cljs.core.first(seq50268__$2);
var seq50268__$3 = cljs.core.next(seq50268__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50269,G__50270,G__50271,seq50268__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50520 = arguments.length;
var i__5770__auto___50522 = (0);
while(true){
if((i__5770__auto___50522 < len__5769__auto___50520)){
args__5775__auto__.push((arguments[i__5770__auto___50522]));

var G__50523 = (i__5770__auto___50522 + (1));
i__5770__auto___50522 = G__50523;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq50282){
var G__50283 = cljs.core.first(seq50282);
var seq50282__$1 = cljs.core.next(seq50282);
var G__50284 = cljs.core.first(seq50282__$1);
var seq50282__$2 = cljs.core.next(seq50282__$1);
var G__50285 = cljs.core.first(seq50282__$2);
var seq50282__$3 = cljs.core.next(seq50282__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50283,G__50284,G__50285,seq50282__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend! o other)
 *   (j/extend! o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__50303 = arguments.length;
switch (G__50303) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___50528 = arguments.length;
var i__5770__auto___50529 = (0);
while(true){
if((i__5770__auto___50529 < len__5769__auto___50528)){
args_arr__5794__auto__.push((arguments[i__5770__auto___50529]));

var G__50531 = (i__5770__auto___50529 + (1));
i__5770__auto___50529 = G__50531;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__50308_50532 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__50309_50533 = null;
var count__50310_50534 = (0);
var i__50311_50535 = (0);
while(true){
if((i__50311_50535 < count__50310_50534)){
var k_50536 = chunk__50309_50533.cljs$core$IIndexed$_nth$arity$2(null,i__50311_50535);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_50536,applied_science.js_interop.unchecked_get(x,k_50536)], 0));


var G__50537 = seq__50308_50532;
var G__50538 = chunk__50309_50533;
var G__50539 = count__50310_50534;
var G__50540 = (i__50311_50535 + (1));
seq__50308_50532 = G__50537;
chunk__50309_50533 = G__50538;
count__50310_50534 = G__50539;
i__50311_50535 = G__50540;
continue;
} else {
var temp__5753__auto___50541 = cljs.core.seq(seq__50308_50532);
if(temp__5753__auto___50541){
var seq__50308_50542__$1 = temp__5753__auto___50541;
if(cljs.core.chunked_seq_QMARK_(seq__50308_50542__$1)){
var c__5568__auto___50543 = cljs.core.chunk_first(seq__50308_50542__$1);
var G__50545 = cljs.core.chunk_rest(seq__50308_50542__$1);
var G__50546 = c__5568__auto___50543;
var G__50547 = cljs.core.count(c__5568__auto___50543);
var G__50548 = (0);
seq__50308_50532 = G__50545;
chunk__50309_50533 = G__50546;
count__50310_50534 = G__50547;
i__50311_50535 = G__50548;
continue;
} else {
var k_50549 = cljs.core.first(seq__50308_50542__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_50549,applied_science.js_interop.unchecked_get(x,k_50549)], 0));


var G__50550 = cljs.core.next(seq__50308_50542__$1);
var G__50551 = null;
var G__50552 = (0);
var G__50553 = (0);
seq__50308_50532 = G__50550;
chunk__50309_50533 = G__50551;
count__50310_50534 = G__50552;
i__50311_50535 = G__50553;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq50300){
var G__50301 = cljs.core.first(seq50300);
var seq50300__$1 = cljs.core.next(seq50300);
var G__50302 = cljs.core.first(seq50300__$1);
var seq50300__$2 = cljs.core.next(seq50300__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50301,G__50302,seq50300__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__50323 = array;
G__50323.push(x);

return G__50323;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__50324 = array;
G__50324.unshift(x);

return G__50324;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50554 = arguments.length;
var i__5770__auto___50556 = (0);
while(true){
if((i__5770__auto___50556 < len__5769__auto___50554)){
args__5775__auto__.push((arguments[i__5770__auto___50556]));

var G__50557 = (i__5770__auto___50556 + (1));
i__5770__auto___50556 = G__50557;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj50328 = obj;
if((!((obj50328 == null)))){
return (obj50328[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq50325){
var G__50326 = cljs.core.first(seq50325);
var seq50325__$1 = cljs.core.next(seq50325);
var G__50327 = cljs.core.first(seq50325__$1);
var seq50325__$2 = cljs.core.next(seq50325__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50326,G__50327,seq50325__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj50330 = obj;
if((!((obj50330 == null)))){
return (obj50330[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50558 = arguments.length;
var i__5770__auto___50559 = (0);
while(true){
if((i__5770__auto___50559 < len__5769__auto___50558)){
args__5775__auto__.push((arguments[i__5770__auto___50559]));

var G__50560 = (i__5770__auto___50559 + (1));
i__5770__auto___50559 = G__50560;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq50336){
var G__50337 = cljs.core.first(seq50336);
var seq50336__$1 = cljs.core.next(seq50336);
var G__50338 = cljs.core.first(seq50336__$1);
var seq50336__$2 = cljs.core.next(seq50336__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50337,G__50338,seq50336__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50571 = arguments.length;
var i__5770__auto___50572 = (0);
while(true){
if((i__5770__auto___50572 < len__5769__auto___50571)){
args__5775__auto__.push((arguments[i__5770__auto___50572]));

var G__50573 = (i__5770__auto___50572 + (1));
i__5770__auto___50572 = G__50573;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__50349_50574 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__50350_50575 = null;
var count__50351_50576 = (0);
var i__50352_50577 = (0);
while(true){
if((i__50352_50577 < count__50351_50576)){
var vec__50392_50578 = chunk__50350_50575.cljs$core$IIndexed$_nth$arity$2(null,i__50352_50577);
var k_50579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50392_50578,(0),null);
var v_50580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50392_50578,(1),null);
var obj50400_50584 = obj;
var obj50402_50585 = (((!((obj50400_50584 == null))))?obj50400_50584:({}));
(obj50402_50585[applied_science.js_interop.impl.wrap_key(k_50579)] = v_50580);



var G__50587 = seq__50349_50574;
var G__50588 = chunk__50350_50575;
var G__50589 = count__50351_50576;
var G__50590 = (i__50352_50577 + (1));
seq__50349_50574 = G__50587;
chunk__50350_50575 = G__50588;
count__50351_50576 = G__50589;
i__50352_50577 = G__50590;
continue;
} else {
var temp__5753__auto___50591 = cljs.core.seq(seq__50349_50574);
if(temp__5753__auto___50591){
var seq__50349_50592__$1 = temp__5753__auto___50591;
if(cljs.core.chunked_seq_QMARK_(seq__50349_50592__$1)){
var c__5568__auto___50593 = cljs.core.chunk_first(seq__50349_50592__$1);
var G__50594 = cljs.core.chunk_rest(seq__50349_50592__$1);
var G__50595 = c__5568__auto___50593;
var G__50596 = cljs.core.count(c__5568__auto___50593);
var G__50597 = (0);
seq__50349_50574 = G__50594;
chunk__50350_50575 = G__50595;
count__50351_50576 = G__50596;
i__50352_50577 = G__50597;
continue;
} else {
var vec__50414_50598 = cljs.core.first(seq__50349_50592__$1);
var k_50599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50414_50598,(0),null);
var v_50600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50414_50598,(1),null);
var obj50418_50601 = obj;
var obj50419_50602 = (((!((obj50418_50601 == null))))?obj50418_50601:({}));
(obj50419_50602[applied_science.js_interop.impl.wrap_key(k_50599)] = v_50600);



var G__50603 = cljs.core.next(seq__50349_50592__$1);
var G__50604 = null;
var G__50605 = (0);
var G__50606 = (0);
seq__50349_50574 = G__50603;
chunk__50350_50575 = G__50604;
count__50351_50576 = G__50605;
i__50352_50577 = G__50606;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq50344){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50344));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
