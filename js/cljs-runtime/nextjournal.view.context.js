import "./cljs_env.js";
goog.provide('nextjournal.view.context');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.view !== 'undefined') && (typeof nextjournal.view.context !== 'undefined') && (typeof nextjournal.view.context.get_context !== 'undefined')){
} else {
nextjournal.view.context.get_context = cljs.core.memoize((function (k){
if((k instanceof cljs.core.Keyword)){
return module$node_modules$react$index.createContext(cljs.core.munge(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)));
} else {
return k;
}
}));
}
/**
 * Adds React contexts to the component tree.
 * `bindings` should be a map of {<keyword-or-Context>, <value-to-be-bound>}.
 */
nextjournal.view.context.provide = (function nextjournal$view$context$provide(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50911 = arguments.length;
var i__5770__auto___50912 = (0);
while(true){
if((i__5770__auto___50912 < len__5769__auto___50911)){
args__5775__auto__.push((arguments[i__5770__auto___50912]));

var G__50913 = (i__5770__auto___50912 + (1));
i__5770__auto___50912 = G__50913;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return nextjournal.view.context.provide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(nextjournal.view.context.provide.cljs$core$IFn$_invoke$arity$variadic = (function (bindings,body){
var bindings__$1 = cljs.core.seq(bindings);
var out = module$node_modules$react$index.createElement.apply(null,[module$node_modules$react$index.Fragment,({})].concat(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (bindings__$1){
return (function (a,el){
var G__50906 = a;
G__50906.push(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(el));

return G__50906;
});})(bindings__$1))
,[],body)));
while(true){
if(cljs.core.empty_QMARK_(bindings__$1)){
return out;
} else {
var G__50916 = cljs.core.rest(bindings__$1);
var G__50917 = (function (){var vec__50907 = cljs.core.first(bindings__$1);
var context_or_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50907,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50907,(1),null);
var context = nextjournal.view.context.get_context(context_or_key);
return module$node_modules$react$index.createElement(context.Provider,({"value": v}),out);
})();
bindings__$1 = G__50916;
out = G__50917;
continue;
}
break;
}
}));

(nextjournal.view.context.provide.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nextjournal.view.context.provide.cljs$lang$applyTo = (function (seq50904){
var G__50905 = cljs.core.first(seq50904);
var seq50904__$1 = cljs.core.next(seq50904);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50905,seq50904__$1);
}));

/**
 * Reads a React context value within component tree.
 * `context` should be a keyword or React Context instance.
 */
nextjournal.view.context.consume = (function nextjournal$view$context$consume(context,f){
return module$node_modules$react$index.createElement(nextjournal.view.context.get_context(context).Consumer,({}),(function (value){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,value], null));
}));
});

//# sourceMappingURL=nextjournal.view.context.js.map
