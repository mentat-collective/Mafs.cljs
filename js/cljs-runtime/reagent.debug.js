import "./cljs_env.js";
goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__51449__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51451__i = 0, G__51451__a = new Array(arguments.length -  0);
while (G__51451__i < G__51451__a.length) {G__51451__a[G__51451__i] = arguments[G__51451__i + 0]; ++G__51451__i;}
  args = new cljs.core.IndexedSeq(G__51451__a,0,null);
} 
return G__51449__delegate.call(this,args);};
G__51449.cljs$lang$maxFixedArity = 0;
G__51449.cljs$lang$applyTo = (function (arglist__51452){
var args = cljs.core.seq(arglist__51452);
return G__51449__delegate(args);
});
G__51449.cljs$core$IFn$_invoke$arity$variadic = G__51449__delegate;
return G__51449;
})()
);

(o.error = (function() { 
var G__51453__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51454__i = 0, G__51454__a = new Array(arguments.length -  0);
while (G__51454__i < G__51454__a.length) {G__51454__a[G__51454__i] = arguments[G__51454__i + 0]; ++G__51454__i;}
  args = new cljs.core.IndexedSeq(G__51454__a,0,null);
} 
return G__51453__delegate.call(this,args);};
G__51453.cljs$lang$maxFixedArity = 0;
G__51453.cljs$lang$applyTo = (function (arglist__51455){
var args = cljs.core.seq(arglist__51455);
return G__51453__delegate(args);
});
G__51453.cljs$core$IFn$_invoke$arity$variadic = G__51453__delegate;
return G__51453;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
