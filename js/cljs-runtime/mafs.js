import "./cljs_env.js";
goog.provide('mafs');
var module$node_modules$mafs$build$index=shadow.js.require("module$node_modules$mafs$build$index", {});
mafs.Theme = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$mafs$build$index.Theme,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
mafs.labelPi = module$node_modules$mafs$build$index.labelPi;
/**
 * TODO expose better versions of these.
 */
mafs.mag = (function mafs$mag(p){
return module$node_modules$mafs$build$index.vec.mag(cljs.core.clj__GT_js(p));
});
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
 *   - `:x-axis`
 *   - `:y-axis`
 *   - `:subdivisions`
 */
mafs.CartesianCoordinates = reagent.core.adapt_react_class(module$node_modules$mafs$build$index.CartesianCoordinates);
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
mafs.Circle = (function mafs$Circle(p__48310){
var map__48311 = p__48310;
var map__48311__$1 = cljs.core.__destructure_map(map__48311);
var props = map__48311__$1;
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48311__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
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
var G__48313 = s;
switch (G__48313) {
case "horizontal":
return (function (p__48314){
var vec__48315 = p__48314;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48315,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48315,(1),null);
return [x,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(initial,(1))];
});

break;
case "vertical":
return (function (p__48319){
var vec__48320 = p__48319;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48320,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48320,(1),null);
return [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(initial,(0)),y];
});

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid constraint name: ",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constrain","constrain",-1167296453),s], null));

}
});
mafs.constrain__GT_fn = (function mafs$constrain__GT_fn(constrain,initial){
if(((cljs.core.fn_QMARK_(constrain)) || ((constrain == null)))){
return constrain;
} else {
if((((constrain instanceof cljs.core.Keyword)) || (typeof constrain === 'string'))){
return mafs.named_constraints(cljs.core.name(constrain),initial);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid constraint!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constrain","constrain",-1167296453),constrain], null));

}
}
});
mafs.path__GT_get = (function mafs$path__GT_get(path){
if((path == null)){
return cljs.core.deref;
} else {
if(cljs.core.vector_QMARK_(path)){
return (function (p1__48323_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(p1__48323_SHARP_),path);
});
} else {
return (function (p1__48324_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(p1__48324_SHARP_),path);
});

}
}
});
mafs.path__GT_set = (function mafs$path__GT_set(path){
if((path == null)){
return cljs.core.reset_BANG_;
} else {
if(cljs.core.vector_QMARK_(path)){
return (function (p1__48325_SHARP_,p2__48326_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(p1__48325_SHARP_,cljs.core.assoc_in,path,p2__48326_SHARP_);
});
} else {
return (function (p1__48327_SHARP_,p2__48328_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(p1__48327_SHARP_,cljs.core.assoc,path,p2__48328_SHARP_);
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
 */
mafs.MovablePointAtom = (function mafs$MovablePointAtom(p__48332){
var map__48333 = p__48332;
var map__48333__$1 = cljs.core.__destructure_map(map__48333);
var opts = map__48333__$1;
var _BANG_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48333__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48333__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var constrain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48333__$1,new cljs.core.Keyword(null,"constrain","constrain",-1167296453));
var get = mafs.path__GT_get(path);
var set = mafs.path__GT_set(path);
var initial = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(_BANG_state) : get.call(null,_BANG_state));
var constrain__$1 = mafs.constrain__GT_fn(constrain,initial);
var opts__$1 = (cljs.core.truth_(constrain__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"constrain","constrain",-1167296453),constrain__$1):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"constrain","constrain",-1167296453)));
return (function (p__48334){
var map__48335 = p__48334;
var map__48335__$1 = cljs.core.__destructure_map(map__48335);
var _BANG_state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48335__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48335__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$mafs$build$index.MovablePoint,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts__$1,new cljs.core.Keyword(null,"point","point",1813198264),(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(_BANG_state__$1) : get.call(null,_BANG_state__$1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-move","on-move",-1779179710),(function (new_point){
var xy = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new_point[(0)]),(new_point[(1)])], null);
(set.cljs$core$IFn$_invoke$arity$2 ? set.cljs$core$IFn$_invoke$arity$2(_BANG_state__$1,xy) : set.call(null,_BANG_state__$1,xy));

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(xy) : on_change.call(null,xy));
} else {
return null;
}
})], 0))], null);
});
});
/**
 * This version takes an initial point and an `:on-move`.
 * 
 *   - `:point`
 *   - `:on-move`
 *   - `:constrain`
 *   - `:color`
 */
mafs.MovablePoint = (function mafs$MovablePoint(p__48338){
var map__48339 = p__48338;
var map__48339__$1 = cljs.core.__destructure_map(map__48339);
var opts = map__48339__$1;
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48339__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var with_let48340 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let48340","with-let48340",737051264));
var temp__5808__auto___48352 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___48352 == null)){
} else {
var c__40743__auto___48353 = temp__5808__auto___48352;
if((with_let48340.generation === c__40743__auto___48353.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let48340.generation = c__40743__auto___48353.ratomGeneration);
}

var init48341 = (with_let48340.length === (0));
var _BANG_state = ((((init48341) || (cljs.core.not(with_let48340.hasOwnProperty((0))))))?(with_let48340[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(point)):(with_let48340[(0)]));
var res48342 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mafs.MovablePointAtom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"atom","atom",-397043653),_BANG_state)], null);
return res48342;
});

//# sourceMappingURL=mafs.js.map
