import "./cljs_env.js";
goog.provide('mafs');
var module$node_modules$mafs$build$index=shadow.js.require("module$node_modules$mafs$build$index", {});
mafs.Theme = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$mafs$build$index.Theme,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
mafs.labelPi = module$node_modules$mafs$build$index.labelPi;
mafs.useTransformContext = module$node_modules$mafs$build$index.useTransformContext;
mafs.useStopwatch = module$node_modules$mafs$build$index.useStopwatch;
/**
 * 
 *   - `:width`
 *   - `:height`
 *   - `:pan`
 *   - `:viewbox`
 *   - `:preserve-aspect-ratio`
 *   - `:ssr`
 *   
 */
mafs.Mafs = reagent.core.adapt_react_class(module$node_modules$mafs$build$index.Mafs);
/**
 * 
 *   - `:x`
 *   - `:y`
 *   - `:color`
 *   - `:opacity`
 *   - `:svg-circle-props`
 */
mafs.Point = reagent.core.adapt_react_class(module$node_modules$mafs$build$index.Point);
/**
 * 
 *   - `:points`
 *   - `:svg-polygon-props`
 *   - `:color`
 *   - `:weight`
 *   - `:fill-opacity`
 *   - `:stroke-opacity`
 *   - `:stroke-style`
 *   
 */
mafs.Polygon = reagent.core.adapt_react_class(module$node_modules$mafs$build$index.Polygon);
/**
 * 
 *   - `:center`
 *   - `:radius`
 *   - `:svg-ellipse-props`
 *   - `:color`
 *   - `:weight`
 *   - `:fill-opacity`
 *   - `:stroke-opacity`
 *   - `:stroke-style`
 *   
 */
mafs.Ellipse = reagent.core.adapt_react_class(module$node_modules$mafs$build$index.Ellipse);
/**
 * 
 *   - `:center`
 *   - `:radius`
 *   - `:svg-ellipse-props`
 *   - `:color`
 *   - `:weight`
 *   - `:fill-opacity`
 *   - `:stroke-opacity`
 *   - `:stroke-style`
 *   
 */
mafs.Circle = (function mafs$Circle(p__48173){
var map__48174 = p__48173;
var map__48174__$1 = cljs.core.__destructure_map(map__48174);
var props = map__48174__$1;
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48174__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mafs.Ellipse,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [radius,radius], null))], null);
});
/**
 * 
 *   - `:x`
 *   - `:y`
 *   - `:attach`
 *   - `:attach-distance`
 *   - `:size`
 *   - `:color`
 *   - `:svg-text-props`
 *   
 */
mafs.Text = reagent.core.adapt_react_class(module$node_modules$mafs$build$index.Text);
/**
 * 
 *   - `:tail`
 *   - `:tip`
 *   - `:svg-line-props`
 *   - `:color`
 *   - `:opacity`
 *   - `:weight`
 *   - `:style`
 *   
 */
mafs.Vector = reagent.core.adapt_react_class(module$node_modules$mafs$build$index.Vector);
/**
 * 
 *   - `:matrix`
 *   - `:translate`
 *   - `:scale`
 *   - `:rotate`
 *   - `:shear`
 *   
 */
mafs.Transform = reagent.core.adapt_react_class(module$node_modules$mafs$build$index.Transform);
mafs.named_constraints = (function mafs$named_constraints(s,initial){
var G__48176 = s;
switch (G__48176) {
case "horizontal":
return (function (p__48177){
var vec__48179 = p__48177;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48179,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48179,(1),null);
return [x,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(initial,(1))];
});

break;
case "vertical":
return (function (p__48182){
var vec__48183 = p__48182;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48183,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48183,(1),null);
return [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(initial,(0)),y];
});

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid constraint name: ",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constrain","constrain",-1167296453),s], null));

}
});
mafs.constrain__GT_fn = (function mafs$constrain__GT_fn(constrain,initial){
if((constrain == null)){
return null;
} else {
if(cljs.core.fn_QMARK_(constrain)){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,constrain);
} else {
if((((constrain instanceof cljs.core.Keyword)) || (typeof constrain === 'string'))){
return mafs.named_constraints(cljs.core.name(constrain),initial);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid constraint!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constrain","constrain",-1167296453),constrain], null));

}
}
}
});
mafs.path__GT_get = (function mafs$path__GT_get(path){
if((path == null)){
return cljs.core.deref;
} else {
if(cljs.core.vector_QMARK_(path)){
return (function (p1__48194_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(p1__48194_SHARP_),path);
});
} else {
return (function (p1__48195_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(p1__48195_SHARP_),path);
});

}
}
});
mafs.path__GT_set = (function mafs$path__GT_set(path){
if((path == null)){
return cljs.core.reset_BANG_;
} else {
if(cljs.core.vector_QMARK_(path)){
return (function (p1__48196_SHARP_,p2__48197_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(p1__48196_SHARP_,cljs.core.assoc_in,path,p2__48197_SHARP_);
});
} else {
return (function (p1__48198_SHARP_,p2__48199_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(p1__48198_SHARP_,cljs.core.assoc,path,p2__48199_SHARP_);
});

}
}
});
/**
 * This version takes an atom and, optionally, a path into the atom.
 *   - `:atom`
 *   - `:path` optional
 *   - `:constrain`
 *   - `:color`
 * 
 *   also discuss
 * 
 *   - `:point`
 *   - `:on-move`
 */
mafs.MovablePoint = (function mafs$MovablePoint(p__48205){
var map__48206 = p__48205;
var map__48206__$1 = cljs.core.__destructure_map(map__48206);
var opts = map__48206__$1;
var _BANG_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48206__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48206__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48206__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var constrain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48206__$1,new cljs.core.Keyword(null,"constrain","constrain",-1167296453));
var on_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48206__$1,new cljs.core.Keyword(null,"on-move","on-move",-1779179710));
if(cljs.core.truth_((function (){var and__5043__auto__ = _BANG_state;
if(cljs.core.truth_(and__5043__auto__)){
return point;
} else {
return and__5043__auto__;
}
})())){
console.warn(["`:point` ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(point)," will be ignored in favor of the entry in the\n     supplied `:atom`."].join(''));
} else {
}

if(cljs.core.not(_BANG_state)){
if(cljs.core.not(point)){
console.warn("`:atom` and `:point` are both missing! Please supply one or the\n     other to initialize the point's position. Using default of `[0 0]`.");
} else {
}

if(cljs.core.not(on_move)){
console.warn("`:atom` and `:on-move` are both missing! Please supply one or the\n     other to capture state changes.");
} else {
}
} else {
}

var get = mafs.path__GT_get(path);
var set = mafs.path__GT_set(path);
var initial = (cljs.core.truth_(_BANG_state)?(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(_BANG_state) : get.call(null,_BANG_state)):(function (){var or__5045__auto__ = point;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}
})());
var constrain__$1 = mafs.constrain__GT_fn(constrain,initial);
var opts__$1 = (cljs.core.truth_(constrain__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"constrain","constrain",-1167296453),constrain__$1):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"constrain","constrain",-1167296453)));
return (function (p__48225){
var map__48226 = p__48225;
var map__48226__$1 = cljs.core.__destructure_map(map__48226);
var _BANG_state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48226__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var on_move__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48226__$1,new cljs.core.Keyword(null,"on-move","on-move",-1779179710));
var with_let48230 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let48230","with-let48230",-339203913));
var temp__5808__auto___48270 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___48270 == null)){
} else {
var c__40743__auto___48271 = temp__5808__auto___48270;
if((with_let48230.generation === c__40743__auto___48271.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let48230.generation = c__40743__auto___48271.ratomGeneration);
}

var init48231 = (with_let48230.length === (0));
var _BANG_state__$2 = ((((init48231) || (cljs.core.not(with_let48230.hasOwnProperty((0))))))?(with_let48230[(0)] = (function (){var or__5045__auto__ = _BANG_state__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
}
})()):(with_let48230[(0)]));
var res48232 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$mafs$build$index.MovablePoint,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts__$1,new cljs.core.Keyword(null,"point","point",1813198264),(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(_BANG_state__$2) : get.call(null,_BANG_state__$2)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-move","on-move",-1779179710),(function (new_point){
var xy = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new_point[(0)]),(new_point[(1)])], null);
(set.cljs$core$IFn$_invoke$arity$2 ? set.cljs$core$IFn$_invoke$arity$2(_BANG_state__$2,xy) : set.call(null,_BANG_state__$2,xy));

if(cljs.core.truth_(on_move__$1)){
return (on_move__$1.cljs$core$IFn$_invoke$arity$1 ? on_move__$1.cljs$core$IFn$_invoke$arity$1(xy) : on_move__$1.call(null,xy));
} else {
return null;
}
})], 0))], null);
return res48232;
});
});

//# sourceMappingURL=mafs.js.map
