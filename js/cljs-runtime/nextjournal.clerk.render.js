import "./cljs_env.js";
goog.provide('nextjournal.clerk.render');
goog.scope(function(){
  nextjournal.clerk.render.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$vh_sticky_table_header$build$commonjs$index=shadow.js.require("module$node_modules$vh_sticky_table_header$build$commonjs$index", {});
reagent.core.set_default_compiler_BANG_(reagent.core.create_compiler(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"function-components","function-components",1492814963),true], null)));




nextjournal.clerk.render.nbsp = goog.string.unescapeEntities("&nbsp;");
nextjournal.clerk.render.reagent_atom_QMARK_ = (function nextjournal$clerk$render$reagent_atom_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reagent$ratom$IReactiveAtom$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,x);
}
});
nextjournal.clerk.render.toc_items = (function nextjournal$clerk$render$toc_items(items){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__48302){
var map__48303 = p__48302;
var map__48303__$1 = cljs.core.__destructure_map(map__48303);
var item = map__48303__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48303__$1,new cljs.core.Keyword(null,"content","content",15833224));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48303__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48303__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
if(cljs.core.truth_(content)){
var title = nextjournal.markdown.transform.__GT_text(item);
return cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"path","path",-188191168),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs))].join(''),new cljs.core.Keyword(null,"items","items",1031954938),(nextjournal.clerk.render.toc_items.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.render.toc_items.cljs$core$IFn$_invoke$arity$1(children) : nextjournal.clerk.render.toc_items.call(null,children))], null)));
} else {
var G__48304 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(item);
return (nextjournal.clerk.render.toc_items.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.render.toc_items.cljs$core$IFn$_invoke$arity$1(G__48304) : nextjournal.clerk.render.toc_items.call(null,G__48304));
}
}),cljs.core.PersistentVector.EMPTY,items);
});
nextjournal.clerk.render.dark_mode_toggle = (function nextjournal$clerk$render$dark_mode_toggle(_BANG_state){
var map__48305 = cljs.core.deref(_BANG_state);
var map__48305__$1 = cljs.core.__destructure_map(map__48305);
var dark_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48305__$1,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096));
var spring = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"stiffness","stiffness",-795208962),(200),new cljs.core.Keyword(null,"damping","damping",1054389681),(10)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.dark-mode-toggle","div.relative.dark-mode-toggle",-1696831098),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.text-slate-400.hover:text-slate-600.dark:hover:text-white.cursor-pointer","button.text-slate-400.hover:text-slate-600.dark:hover:text-white.cursor-pointer",-1717879008),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096),cljs.core.not(dark_mode_QMARK_));
})], null),(cljs.core.truth_(dark_mode_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.svg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5 md:w-4 md:h-4",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 50 50",new cljs.core.Keyword(null,"key","key",-1516042587),"moon"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"d","d",1972142424),"M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"initial","initial",1854648214),"initial",new cljs.core.Keyword(null,"animate","animate",1850194573),"animate",new cljs.core.Keyword(null,"variants","variants",-176391100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),0.6,new cljs.core.Keyword(null,"rotate","rotate",152705015),(90)], null),new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"rotate","rotate",152705015),(0),new cljs.core.Keyword(null,"transition","transition",765692007),spring], null)], null)], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.svg,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),"sun",new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5 md:w-4 md:h-4",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.circle,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),"11.9998",new cljs.core.Keyword(null,"cy","cy",755331060),"11.9998",new cljs.core.Keyword(null,"r","r",-471384190),"5.75375",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"initial","initial",1854648214),"initial",new cljs.core.Keyword(null,"animate","animate",1850194573),"animate",new cljs.core.Keyword(null,"variants","variants",-176391100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),1.5], null),new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"transition","transition",765692007),spring], null)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.g,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial","initial",1854648214),"initial",new cljs.core.Keyword(null,"animate","animate",1850194573),"animate",new cljs.core.Keyword(null,"variants","variants",-176391100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(45)], null),new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(0),new cljs.core.Keyword(null,"transition","transition",765692007),spring], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"3.08982",new cljs.core.Keyword(null,"cy","cy",755331060),"6.85502",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-60 3.08982 6.85502)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"3.0903",new cljs.core.Keyword(null,"cy","cy",755331060),"17.1436",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-120 3.0903 17.1436)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),"12",new cljs.core.Keyword(null,"cy","cy",755331060),"22.2881",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"20.9101",new cljs.core.Keyword(null,"cy","cy",755331060),"17.1436",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-60 20.9101 17.1436)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"20.9101",new cljs.core.Keyword(null,"cy","cy",755331060),"6.8555",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-120 20.9101 6.8555)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),"12",new cljs.core.Keyword(null,"cy","cy",755331060),"1.71143",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null)], null)], null))], null)], null);
});
nextjournal.clerk.render.localstorage_set_BANG_ = (function nextjournal$clerk$render$localstorage_set_BANG_(key,val){
if((typeof window !== 'undefined')){
return window.localStorage.setItem(key,val);
} else {
return null;
}
});
nextjournal.clerk.render.localstorage_get = (function nextjournal$clerk$render$localstorage_get(key){
if((typeof window !== 'undefined')){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(window.localStorage.getItem(key));
} else {
return null;
}
});
nextjournal.clerk.render.local_storage_dark_mode_key = "clerk-darkmode";
nextjournal.clerk.render.set_dark_mode_BANG_ = (function nextjournal$clerk$render$set_dark_mode_BANG_(dark_mode_QMARK_){
var class_list_48472 = document.querySelector("html").classList;
if(cljs.core.truth_(dark_mode_QMARK_)){
class_list_48472.add("dark");
} else {
class_list_48472.remove("dark");
}

return nextjournal.clerk.render.localstorage_set_BANG_(nextjournal.clerk.render.local_storage_dark_mode_key,dark_mode_QMARK_);
});
nextjournal.clerk.render.setup_dark_mode_BANG_ = (function nextjournal$clerk$render$setup_dark_mode_BANG_(_BANG_state){
var map__48306 = cljs.core.deref(_BANG_state);
var map__48306__$1 = cljs.core.__destructure_map(map__48306);
var dark_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48306__$1,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096));
cljs.core.add_watch(_BANG_state,new cljs.core.Keyword("nextjournal.clerk.render","dark-mode","nextjournal.clerk.render/dark-mode",-360205762),(function (_,___$1,old,p__48307){
var map__48308 = p__48307;
var map__48308__$1 = cljs.core.__destructure_map(map__48308);
var dark_mode_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48308__$1,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096).cljs$core$IFn$_invoke$arity$1(old),dark_mode_QMARK___$1)){
return nextjournal.clerk.render.set_dark_mode_BANG_(dark_mode_QMARK___$1);
} else {
return null;
}
}));

if(cljs.core.truth_(dark_mode_QMARK_)){
return nextjournal.clerk.render.set_dark_mode_BANG_(dark_mode_QMARK_);
} else {
return null;
}
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render._BANG_eval_counter !== 'undefined')){
} else {
nextjournal.clerk.render._BANG_eval_counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
nextjournal.clerk.render.render_notebook = (function nextjournal$clerk$render$render_notebook(p__48309){
var map__48310 = p__48309;
var map__48310__$1 = cljs.core.__destructure_map(map__48310);
var _doc = map__48310__$1;
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48310__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var bundle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48310__$1,new cljs.core.Keyword(null,"bundle?","bundle?",-35631730));
var css_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48310__$1,new cljs.core.Keyword(null,"css-class","css-class",-919455334));
var toc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48310__$1,new cljs.core.Keyword(null,"toc","toc",2050089251));
var toc_visibility = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48310__$1,new cljs.core.Keyword(null,"toc-visibility","toc-visibility",-1781055352));
var with_let48311 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let48311","with-let48311",342156879));
var temp__5808__auto___48474 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___48474 == null)){
} else {
var c__40743__auto___48476 = temp__5808__auto___48474;
if((with_let48311.generation === c__40743__auto___48476.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let48311.generation = c__40743__auto___48476.ratomGeneration);
}

var init48312 = (with_let48311.length === (0));
var local_storage_key = ((((init48312) || (cljs.core.not(with_let48311.hasOwnProperty((0))))))?(with_let48311[(0)] = "clerk-navbar"):(with_let48311[(0)]));
var navbar_width = ((((init48312) || (cljs.core.not(with_let48311.hasOwnProperty((1))))))?(with_let48311[(1)] = (220)):(with_let48311[(1)]));
var _BANG_state = ((((init48312) || (cljs.core.not(with_let48311.hasOwnProperty((2))))))?(with_let48311[(2)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"toc","toc",2050089251),new cljs.core.Keyword(null,"md-toc","md-toc",401610567),new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096),new cljs.core.Keyword(null,"scroll-el","scroll-el",2005954473),new cljs.core.Keyword(null,"local-storage-key","local-storage-key",-1983909558),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"mobile-width","mobile-width",-48320880),new cljs.core.Keyword(null,"open?","open?",1238443125),new cljs.core.Keyword(null,"set-hash?","set-hash?",1284779132)],[nextjournal.clerk.render.toc_items(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(toc)),toc,nextjournal.clerk.render.localstorage_get(nextjournal.clerk.render.local_storage_dark_mode_key),document.querySelector("html"),local_storage_key,navbar_width,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-over","slide-over",1619183007),"bg-slate-100 dark:bg-gray-800 font-sans border-r dark:border-slate-900"], null),(300),(function (){var temp__5806__auto__ = nextjournal.clerk.render.localstorage_get(local_storage_key);
if((temp__5806__auto__ == null)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),toc_visibility);
} else {
var stored_open_QMARK_ = temp__5806__auto__;
return stored_open_QMARK_;
}
})(),cljs.core.not(bundle_QMARK_)]))):(with_let48311[(2)]));
var root_ref_fn = ((((init48312) || (cljs.core.not(with_let48311.hasOwnProperty((3))))))?(with_let48311[(3)] = (function (el){
if(cljs.core.truth_(el)){
nextjournal.clerk.render.setup_dark_mode_BANG_(_BANG_state);

var temp__5808__auto__ = (((((typeof location !== 'undefined')) && (cljs.core.not(bundle_QMARK_))))?(function (){try{var G__48315 = location;
var G__48315__$1 = (((G__48315 == null))?null:G__48315.hash);
var G__48315__$2 = (((G__48315__$1 == null))?null:cljs.core.not_empty(G__48315__$1));
var G__48315__$3 = (((G__48315__$2 == null))?null:decodeURI(G__48315__$2));
if((G__48315__$3 == null)){
return null;
} else {
return document.querySelector(G__48315__$3);
}
}catch (e48314){if((e48314 instanceof Error)){
var _ = e48314;
return console.warn(["Clerk render-notebook, invalid selector: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.hash)].join(''));
} else {
throw e48314;

}
}})():null);
if((temp__5808__auto__ == null)){
return null;
} else {
var heading = temp__5808__auto__;
return requestAnimationFrame((function (){
return heading.scrollIntoViewIfNeeded();
}));
}
} else {
return null;
}
})):(with_let48311[(3)]));
var res48313 = (function (){var map__48316 = cljs.core.deref(_BANG_state);
var map__48316__$1 = cljs.core.__destructure_map(map__48316);
var md_toc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48316__$1,new cljs.core.Keyword(null,"md-toc","md-toc",401610567));
var mobile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48316__$1,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48316__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var doc_inset = (cljs.core.truth_(mobile_QMARK_)?(0):(cljs.core.truth_(open_QMARK_)?navbar_width:(0)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(md_toc,toc)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"toc","toc",2050089251),nextjournal.clerk.render.toc_items(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(toc)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"md-toc","md-toc",401610567),toc,new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),toc_visibility)], 0));
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),root_ref_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.top-2.left-2.md:left-auto.md:right-2.z-10","div.fixed.top-2.left-2.md:left-auto.md:right-2.z-10",-1924941252),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.dark_mode_toggle,_BANG_state], null)], null),(cljs.core.truth_((function (){var and__5043__auto__ = toc;
if(cljs.core.truth_(and__5043__auto__)){
return toc_visibility;
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.navbar.toggle_button,_BANG_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.icon.menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uppercase.tracking-wider.ml-1.font-bold","span.uppercase.tracking-wider.ml-1.font-bold",184219074),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[12px]"], null),"ToC"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"z-10 fixed right-2 top-2 md:right-auto md:left-3 md:top-[7px] text-slate-400 font-sans text-xs hover:underline cursor-pointer flex items-center bg-white dark:bg-gray-900 py-1 px-3 md:p-0 rounded-full md:rounded-none border md:border-0 border-slate-200 dark:border-gray-500 shadow md:shadow-none dark:text-slate-400 dark:hover:text-white"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.navbar.panel,_BANG_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.navbar.navbar,_BANG_state], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-auto.w-screen.scroll-container","div.flex-auto.w-screen.scroll-container",-886749679),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.div,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),"viewer-notebook",new cljs.core.Keyword(null,"initial","initial",1854648214),(cljs.core.truth_(toc_visibility)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),doc_inset], null):null),new cljs.core.Keyword(null,"animate","animate",1850194573),(cljs.core.truth_(toc_visibility)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),doc_inset], null):null),new cljs.core.Keyword(null,"transition","transition",765692007),nextjournal.clerk.render.navbar.spring,new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var or__5045__auto__ = css_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "flex flex-col items-center viewer-notebook flex-auto";
}
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
var map__48317 = nextjournal.clerk.viewer.__GT_viewer(x);
var map__48317__$1 = cljs.core.__destructure_map(map__48317);
var viewer_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48317__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var viewer_css_class = nextjournal.clerk.viewer.css_class(x);
var inner_viewer_name = (function (){var G__48318 = x;
var G__48318__$1 = (((G__48318 == null))?null:nextjournal.clerk.viewer.__GT_value(G__48318));
var G__48318__$2 = (((G__48318__$1 == null))?null:nextjournal.clerk.viewer.__GT_viewer(G__48318__$1));
if((G__48318__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__48318__$2);
}
})();
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword("nextjournal","open-graph-image-capture","nextjournal/open-graph-image-capture",201173909).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_value(x)))?"open-graph-image-capture":null)], null),(cljs.core.truth_(viewer_css_class)?(function (){var G__48319 = viewer_css_class;
if(typeof viewer_css_class === 'string'){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__48319],null));
} else {
return G__48319;
}
})():new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["viewer",(cljs.core.truth_(viewer_name)?["viewer-",cljs.core.name(viewer_name)].join(''):null),(cljs.core.truth_(inner_viewer_name)?["viewer-",cljs.core.name(inner_viewer_name)].join(''):null),(function (){var G__48320 = (function (){var or__5045__auto__ = nextjournal.clerk.viewer.width(x);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__48321 = viewer_name;
var G__48321__$1 = (((G__48321 instanceof cljs.core.Keyword))?G__48321.fqn:null);
switch (G__48321__$1) {
case "code":
case "code-folded":
return new cljs.core.Keyword(null,"wide","wide",-151772487);

break;
default:
return new cljs.core.Keyword(null,"prose","prose",2099617726);

}
}
})();
var G__48320__$1 = (((G__48320 instanceof cljs.core.Keyword))?G__48320.fqn:null);
switch (G__48320__$1) {
case "wide":
return "w-full max-w-wide";

break;
case "full":
return "w-full";

break;
default:
return "w-full max-w-prose px-8";

}
})()], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,x], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nextjournal.clerk.render._BANG_eval_counter))].join('')], null));
}),xs))], null)], null)], null);
})();
return res48313;
});
nextjournal.clerk.render.opts__GT_query = (function nextjournal$clerk$render$opts__GT_query(opts){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.string.join,"="),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48322_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__48322_SHARP_,(0),cljs.core.name);
}),opts)));
});
nextjournal.clerk.render.render_unreadable_edn = (function nextjournal$clerk$render$render_unreadable_edn(edn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap.cmt-default","span.inspected-value.whitespace-nowrap.cmt-default",1768608485),edn], null);
});
nextjournal.clerk.render.error_badge = (function nextjournal$clerk$render$error_badge(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48481 = arguments.length;
var i__5770__auto___48482 = (0);
while(true){
if((i__5770__auto___48482 < len__5769__auto___48481)){
args__5775__auto__.push((arguments[i__5770__auto___48482]));

var G__48483 = (i__5770__auto___48482 + (1));
i__5770__auto___48482 = G__48483;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return nextjournal.clerk.render.error_badge.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(nextjournal.clerk.render.error_badge.cljs$core$IFn$_invoke$arity$variadic = (function (content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-50.rounded-sm.text-xs.text-red-400.px-2.py-1.items-center.sans-serif.inline-flex","div.bg-red-50.rounded-sm.text-xs.text-red-400.px-2.py-1.items-center.sans-serif.inline-flex",1436970942),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-4.w-4.text-red-400","svg.h-4.w-4.text-red-400",-439155594),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-2.font-bold","div.ml-2.font-bold",1964855578)], null),content)], null);
}));

(nextjournal.clerk.render.error_badge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nextjournal.clerk.render.error_badge.cljs$lang$applyTo = (function (seq48323){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48323));
}));

nextjournal.clerk.render.error_view = (function nextjournal$clerk$render$error_view(error){
var _BANG_stack_expanded = nextjournal.clerk.render.hooks.use_state(false);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-300.not-prose","div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-300.not-prose",1278649712),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.font-mono.text-red-600.dark:text-red-300.font-bold","p.font-mono.text-red-600.dark:text-red-300.font-bold",-1938208543),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return error.message;
}
})()], null),(function (){var temp__5804__auto__ = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return error.data;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.overflow-auto","div.mt-2.overflow-auto",452117243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect,data], null)], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = (function (){try{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),clojure.string.split_lines((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return error.stack;
}
})())));
}catch (e48324){if((e48324 instanceof Error)){
var _ = e48324;
return null;
} else {
throw e48324;

}
}})();
if(cljs.core.truth_(temp__5804__auto__)){
var stack = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.text-red-600.dark:text-red-300.w-full.overflow-auto.mt-2","pre.text-red-600.dark:text-red-300.w-full.overflow-auto.mt-2",113939522),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[11px] max-h-[155px]"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.underline.cursor-pointer","span.underline.cursor-pointer",2117382003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_stack_expanded,cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(_BANG_stack_expanded))?"Hide":"Show")," Stacktrace (",cljs.core.count(stack)," lines)\n"], null),(cljs.core.truth_(cljs.core.deref(_BANG_stack_expanded))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",stack):null)], null);
} else {
return null;
}
})()], null);
});
nextjournal.clerk.render.ErrorBoundary = class nextjournal$clerk$render$ErrorBoundary extends module$node_modules$react$index.Component {
  constructor(G__48325) {
var props_48484 = G__48325;
super(props_48484);
var self__ = this;

(self__.state = ({"error": null, "hash": (function (){var obj48326 = props_48484;
if((!((obj48326 == null)))){
return (obj48326["hash"]);
} else {
return undefined;
}
})()}));

(self__.hash = (function (){var obj48327 = props_48484;
if((!((obj48327 == null)))){
return (obj48327["hash"]);
} else {
return undefined;
}
})());

(self__.handle_error = (function (error){
return (self__.state = ({"error": error}));
}));
  }
};
(nextjournal.clerk.render.ErrorBoundary.prototype.render = (function (props){
var self__ = this;
var this$ = this;
var map__48328 = this$;
var map__48328__$1 = (((((!((map__48328 == null))))?(((((map__48328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48328):map__48328);
var map__48329 = (function (){var obj48332 = map__48328__$1;
if((!((obj48332 == null)))){
return (obj48332["state"]);
} else {
return undefined;
}
})();
var map__48329__$1 = (((((!((map__48329 == null))))?(((((map__48329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48329):map__48329);
var error = (function (){var obj48334 = map__48329__$1;
if((!((obj48334 == null)))){
return (obj48334["error"]);
} else {
return undefined;
}
})();
var map__48330 = (function (){var obj48335 = map__48328__$1;
if((!((obj48335 == null)))){
return (obj48335["props"]);
} else {
return undefined;
}
})();
var map__48330__$1 = (((((!((map__48330 == null))))?(((((map__48330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48330):map__48330);
var children = (function (){var obj48337 = map__48330__$1;
if((!((obj48337 == null)))){
return (obj48337["children"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(error)){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.error_view,error], null));
} else {
return children;
}
}));
var obj48338_48485 = nextjournal.clerk.render.ErrorBoundary;
(obj48338_48485["getDerivedStateFromError"] = (function (error){
return ({"error": error});
}));

(obj48338_48485["getDerivedStateFromProps"] = (function (props,state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var obj48339 = props;
if((!((obj48339 == null)))){
return (obj48339["hash"]);
} else {
return undefined;
}
})(),(function (){var obj48340 = state;
if((!((obj48340 == null)))){
return (obj48340["hash"]);
} else {
return undefined;
}
})())){
return ({"hash": (function (){var obj48341 = props;
if((!((obj48341 == null)))){
return (obj48341["hash"]);
} else {
return undefined;
}
})(), "error": null});
} else {
return null;
}
}));

nextjournal.clerk.render.default_loading_view = "Loading...";
nextjournal.clerk.render.read_string = (function nextjournal$clerk$render$read_string(s){
return nextjournal.clerk.sci_env.read_string(s);
});
nextjournal.clerk.render.fetch_BANG_ = (function nextjournal$clerk$render$fetch_BANG_(p__48344,opts){
var map__48345 = p__48344;
var map__48345__$1 = cljs.core.__destructure_map(map__48345);
var blob_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48345__$1,new cljs.core.Keyword(null,"blob-id","blob-id",1929300970));
return fetch(["_blob/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(blob_id),((cljs.core.seq(opts))?["?",nextjournal.clerk.render.opts__GT_query(opts)].join(''):null)].join('')).then((function (p1__48342_SHARP_){
return p1__48342_SHARP_.text();
})).then((function (p1__48343_SHARP_){
try{return nextjournal.clerk.render.read_string(p1__48343_SHARP_);
}catch (e48346){if((e48346 instanceof Error)){
var e = e48346;
console.error(({"message": "sci read error", "blob-id": blob_id, "code-string": p1__48343_SHARP_, "error": e}));

return nextjournal.clerk.render.render_unreadable_edn(p1__48343_SHARP_);
} else {
throw e48346;

}
}}));
});
nextjournal.clerk.render.__GT_expanded_at = (function nextjournal$clerk$render$__GT_expanded_at(auto_expand_QMARK_,presented){
var G__48347 = presented;
var G__48347__$1 = (cljs.core.truth_(auto_expand_QMARK_)?nextjournal.clerk.viewer.assign_content_lengths(G__48347):G__48347);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.assign_expanded_at(G__48347__$1),new cljs.core.Keyword("nextjournal","expanded-at","nextjournal/expanded-at",-1490351009),cljs.core.PersistentArrayMap.EMPTY);

});
nextjournal.clerk.render.render_result = (function nextjournal$clerk$render$render_result(p__48350,p__48351){
var map__48352 = p__48350;
var map__48352__$1 = cljs.core.__destructure_map(map__48352);
var result = map__48352__$1;
var fetch_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48352__$1,new cljs.core.Keyword("nextjournal","fetch-opts","nextjournal/fetch-opts",61437218));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48352__$1,new cljs.core.Keyword("nextjournal","hash","nextjournal/hash",669857928));
var presented = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48352__$1,new cljs.core.Keyword("nextjournal","presented","nextjournal/presented",1933851841));
var map__48353 = p__48351;
var map__48353__$1 = cljs.core.__destructure_map(map__48353);
var opts = map__48353__$1;
var auto_expand_results_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48353__$1,new cljs.core.Keyword(null,"auto-expand-results?","auto-expand-results?",945863436));
var _BANG_desc = nextjournal.clerk.render.hooks.use_state_with_deps(presented,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hash], null));
var _BANG_expanded_at = nextjournal.clerk.render.hooks.use_state(((cljs.core.map_QMARK_(cljs.core.deref(_BANG_desc)))?nextjournal.clerk.render.__GT_expanded_at(auto_expand_results_QMARK_,cljs.core.deref(_BANG_desc)):null));
var fetch_fn = nextjournal.clerk.render.hooks.use_callback.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(fetch_opts)?(function (opts__$1){
return nextjournal.clerk.render.fetch_BANG_(fetch_opts,opts__$1).then((function (more){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_desc,nextjournal.clerk.viewer.merge_presentations,more,opts__$1);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_expanded_at,(function (p1__48348_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clerk.render.__GT_expanded_at(auto_expand_results_QMARK_,cljs.core.deref(_BANG_desc)),p1__48348_SHARP_], 0));
}));
}));
}):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hash], null));
var on_key_down = nextjournal.clerk.render.hooks.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
if(cljs.core.truth_(event.altKey)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_expanded_at,cljs.core.assoc,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923),true);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_expanded_at,cljs.core.dissoc,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
}
}));
var on_key_up = nextjournal.clerk.render.hooks.use_callback.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_expanded_at,cljs.core.dissoc,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
}));
var ref_fn = nextjournal.clerk.render.hooks.use_callback.cljs$core$IFn$_invoke$arity$1((function (p1__48349_SHARP_){
if(cljs.core.truth_(p1__48349_SHARP_)){
if((typeof document !== 'undefined')){
document.addEventListener("keydown",on_key_down);

return document.addEventListener("keyup",on_key_up);
} else {
return null;
}
} else {
if((typeof document !== 'undefined')){
document.removeEventListener("keydown",on_key_down);

return document.removeEventListener("up",on_key_up);
} else {
return null;
}
}
}));
if(cljs.core.truth_(cljs.core.deref(_BANG_desc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.view.context.provide,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383),fetch_fn], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.clerk.render.ErrorBoundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hash","hash",-13781596),hash], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative","div.relative",430334058),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-y-hidden","div.overflow-y-hidden",1952845994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694),_BANG_expanded_at], null),cljs.core.deref(_BANG_desc)], null)], null)], null)], null)], null);
} else {
return null;
}
});
nextjournal.clerk.render.toggle_expanded = (function nextjournal$clerk$render$toggle_expanded(_BANG_expanded_at,path,event){
event.preventDefault();

event.stopPropagation();

var map__48354 = cljs.core.deref(_BANG_expanded_at);
var map__48354__$1 = cljs.core.__destructure_map(map__48354);
var hover_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48354__$1,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491));
var prompt_multi_expand_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48354__$1,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
var hover_path_count = cljs.core.count(hover_path);
var hover_path_expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
if(cljs.core.truth_((function (){var and__5043__auto__ = hover_path;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = prompt_multi_expand_QMARK_;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path),hover_path_count);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_expanded_at,(function (expanded_at){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__48355){
var vec__48356 = p__48355;
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48356,(0),null);
var expanded_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48356,(1),null);
if(((cljs.core.coll_QMARK_(path__$1)) && (((cljs.core.vector_QMARK_(path__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path__$1),hover_path_count)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,path__$1,cljs.core.not(hover_path_expanded_QMARK_));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,path__$1,expanded_QMARK_);
}
}),cljs.core.PersistentArrayMap.EMPTY,expanded_at);
}));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_expanded_at,cljs.core.update,path,cljs.core.not);
}
});
nextjournal.clerk.render.expandable_QMARK_ = (function nextjournal$clerk$render$expandable_QMARK_(xs){
return ((1) < cljs.core.count(xs));
});
nextjournal.clerk.render.inspect_children = (function nextjournal$clerk$render$inspect_children(opts){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,x){
var G__48359 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),idx);
var G__48360 = x;
return (nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$2 ? nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$2(G__48359,G__48360) : nextjournal.clerk.render.inspect_presented.call(null,G__48359,G__48360));
}));
});
nextjournal.clerk.render.expand_style = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor-pointer","bg-indigo-50","hover:bg-indigo-100","border-b","border-gray-400","hover:border-gray-500","dark:bg-gray-900","dark:hover:bg-slate-700","dark:border-slate-600","dark:hover:border-slate-500"], null);
nextjournal.clerk.render.triangle = (function nextjournal$clerk$render$triangle(expanded_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100",new cljs.core.Keyword(null,"class","class",-2030961996),["w-[7px] h-[7px] fill-current inline-block transition-all mr-[1px] -mt-[2px] ",(cljs.core.truth_(expanded_QMARK_)?"rotate-180":"rotate-90")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),"5.9,88.2 50,11.8 94.1,88.2 "], null)], null)], null);
});
nextjournal.clerk.render.triangle_spacer = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inline-block w-[8px]"], null)], null);
nextjournal.clerk.render.expand_button = (function nextjournal$clerk$render$expand_button(_BANG_expanded_at,opening_paren,path){
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
var map__48361 = cljs.core.deref(_BANG_expanded_at);
var map__48361__$1 = cljs.core.__destructure_map(map__48361);
var hover_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48361__$1,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491));
var prompt_multi_expand_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48361__$1,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
var multi_expand_QMARK_ = (function (){var and__5043__auto__ = hover_path;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = prompt_multi_expand_QMARK_;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path),cljs.core.count(hover_path));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.group.hover:bg-indigo-100.rounded-sm.hover:shadow.cursor-pointer","span.group.hover:bg-indigo-100.rounded-sm.hover:shadow.cursor-pointer",-1703697853),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(multi_expand_QMARK_)?"bg-indigo-100 shadow ":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.render.toggle_expanded,_BANG_expanded_at,path),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_expanded_at,cljs.core.assoc,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491),path);
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_expanded_at,cljs.core.dissoc,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-slate-400.group-hover:text-indigo-700","span.text-slate-400.group-hover:text-indigo-700",438525494),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(multi_expand_QMARK_)?"text-indigo-700 ":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.triangle,expanded_QMARK_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.group-hover:text-indigo-700","span.group-hover:text-indigo-700",-444234631),opening_paren], null)], null);
});
nextjournal.clerk.render.render_coll = (function nextjournal$clerk$render$render_coll(xs,p__48362){
var map__48363 = p__48362;
var map__48363__$1 = cljs.core.__destructure_map(map__48363);
var opts = map__48363__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48363__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48363__$1,new cljs.core.Keyword(null,"viewer","viewer",-783949853));
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48363__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
var map__48364 = viewer;
var map__48364__$1 = cljs.core.__destructure_map(map__48364);
var opening_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48364__$1,new cljs.core.Keyword(null,"opening-paren","opening-paren",2017445203));
var closing_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48364__$1,new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap","span.inspected-value.whitespace-nowrap",1177458280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(expanded_QMARK_)?"inline-flex":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((((1) < cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.expand_button,_BANG_expanded_at,opening_paren,path], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),opening_paren], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.render.inspect_children(opts),cljs.core.interpose.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),nextjournal.clerk.render.triangle_spacer,nextjournal.clerk.render.nbsp,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(opening_paren)))?nextjournal.clerk.render.nbsp:null)], null):" "))),xs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__48365 = closing_paren;
if(cljs.core.list_QMARK_(closing_paren)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),G__48365);
} else {
return G__48365;
}
})()], null)], null)], null);
});
nextjournal.clerk.render.render_elision = (function nextjournal$clerk$render$render_elision(p__48366,_){
var map__48367 = p__48366;
var map__48367__$1 = cljs.core.__destructure_map(map__48367);
var fetch_opts = map__48367__$1;
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48367__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48367__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var unbounded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48367__$1,new cljs.core.Keyword(null,"unbounded?","unbounded?",1662946650));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.view.context.consume,new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383),(function (fetch_fn){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sans-serif.relative.whitespace-nowrap","span.sans-serif.relative.whitespace-nowrap",1223699353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(2),new cljs.core.Keyword(null,"padding","padding",1660304693),((cljs.core.fn_QMARK_(fetch_fn))?"1px 3px":null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(11),new cljs.core.Keyword(null,"top","top",-1856271961),(-1)], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.fn_QMARK_(fetch_fn))?"cursor-pointer bg-indigo-200 hover:bg-indigo-300 dark:bg-gray-700 dark:hover:bg-slate-600 text-gray-900 dark:text-white":"text-gray-400 dark:text-slate-300"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.fn_QMARK_(fetch_fn)){
return (fetch_fn.cljs$core$IFn$_invoke$arity$1 ? fetch_fn.cljs$core$IFn$_invoke$arity$1(fetch_opts) : fetch_fn.call(null,fetch_opts));
} else {
return null;
}
})], null),(total - offset),(cljs.core.truth_(unbounded_QMARK_)?"+":null),((cljs.core.fn_QMARK_(fetch_fn))?" more\u2026":" more elided")], null);
})], null);
});
nextjournal.clerk.render.render_map = (function nextjournal$clerk$render$render_map(xs,p__48368){
var map__48369 = p__48368;
var map__48369__$1 = cljs.core.__destructure_map(map__48369);
var opts = map__48369__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48369__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48369__$1,new cljs.core.Keyword(null,"viewer","viewer",-783949853));
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48369__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
var map__48370 = viewer;
var map__48370__$1 = cljs.core.__destructure_map(map__48370);
var closing_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48370__$1,new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap","span.inspected-value.whitespace-nowrap",1177458280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(expanded_QMARK_)?"inline-flex":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((nextjournal.clerk.render.expandable_QMARK_(xs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.expand_button,_BANG_expanded_at,"{",path], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"{"], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.render.inspect_children(opts),cljs.core.interpose.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),nextjournal.clerk.render.triangle_spacer,nextjournal.clerk.render.nbsp], null):" "))),xs),(function (){var G__48371 = closing_paren;
if(cljs.core.list_QMARK_(closing_paren)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),G__48371);
} else {
return G__48371;
}
})()], null)], null);
});
nextjournal.clerk.render.render_string = (function nextjournal$clerk$render$render_string(s,p__48373){
var map__48374 = p__48373;
var map__48374__$1 = cljs.core.__destructure_map(map__48374);
var opts = map__48374__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48374__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48374__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.whitespace-pre","span.whitespace-pre",1321639334)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__48372_SHARP_){
if(typeof p1__48372_SHARP_ === 'string'){
if(cljs.core.truth_(expanded_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),clojure.string.split_lines(p1__48372_SHARP_)));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-slate-400","span.text-slate-400",-1212905222),"\u21A9\uFE0E"], null),clojure.string.split_lines(p1__48372_SHARP_)));
}
} else {
return (nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$2 ? nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$2(opts,p1__48372_SHARP_) : nextjournal.clerk.render.inspect_presented.call(null,opts,p1__48372_SHARP_));
}
})),((typeof s === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null):s));
});
nextjournal.clerk.render.render_quoted_string = (function nextjournal$clerk$render$render_quoted_string(s,p__48376){
var map__48377 = p__48376;
var map__48377__$1 = cljs.core.__destructure_map(map__48377);
var opts = map__48377__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48377__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48377__$1,new cljs.core.Keyword(null,"viewer","viewer",-783949853));
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48377__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var map__48378 = viewer;
var map__48378__$1 = cljs.core.__destructure_map(map__48378);
var opening_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48378__$1,new cljs.core.Keyword(null,"opening-paren","opening-paren",2017445203));
var closing_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48378__$1,new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.inline-flex","span.inspected-value.inline-flex",1701180050),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-string","span.cmt-string",1654842913),(cljs.core.truth_(cljs.core.some((function (p1__48375_SHARP_){
return ((typeof p1__48375_SHARP_ === 'string') && (clojure.string.includes_QMARK_(p1__48375_SHARP_,"\n")));
}),((typeof s === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null):s)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.expand_button,_BANG_expanded_at,opening_paren,path], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),opening_paren], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-string","span.cmt-string",1654842913),nextjournal.clerk.viewer.__GT_value(nextjournal.clerk.render.render_string(s,opts)),cljs.core.first(closing_paren)], null),((cljs.core.list_QMARK_(closing_paren))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.rest(closing_paren)):null)], null)], null);
});
nextjournal.clerk.render.render_number = (function nextjournal$clerk$render$render_number(num){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-number.inspected-value","span.cmt-number.inspected-value",1512437969),(cljs.core.truth_(Number.isNaN(num))?"NaN":cljs.core.str.cljs$core$IFn$_invoke$arity$1(num))], null);
});
nextjournal.clerk.render.sort_BANG_ = (function nextjournal$clerk$render$sort_BANG_(_BANG_sort,i,k){
var map__48379 = cljs.core.deref(_BANG_sort);
var map__48379__$1 = cljs.core.__destructure_map(map__48379);
var sort_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48379__$1,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623));
var sort_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48379__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
return cljs.core.reset_BANG_(_BANG_sort,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sort-index","sort-index",-1082353222),i,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),k,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_key,k))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order,new cljs.core.Keyword(null,"asc","asc",356854569)))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569)):new cljs.core.Keyword(null,"asc","asc",356854569))], null));
});
nextjournal.clerk.render.sort_data = (function nextjournal$clerk$render$sort_data(p__48385,p__48386){
var map__48387 = p__48385;
var map__48387__$1 = cljs.core.__destructure_map(map__48387);
var sort_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48387__$1,new cljs.core.Keyword(null,"sort-index","sort-index",-1082353222));
var sort_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48387__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
var map__48388 = p__48386;
var map__48388__$1 = cljs.core.__destructure_map(map__48388);
var data = map__48388__$1;
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48388__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48388__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var G__48389 = data;
if(cljs.core.truth_(head)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48389,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__48380_SHARP_){
var G__48390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__48380_SHARP_,sort_index);
if(typeof cljs.core.val === 'string'){
return clojure.string.lower_case(G__48390);
} else {
return G__48390;
}
}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order,new cljs.core.Keyword(null,"asc","asc",356854569)))?(function (p1__48381_SHARP_,p2__48382_SHARP_){
return cljs.core.compare(p1__48381_SHARP_,p2__48382_SHARP_);
}):(function (p1__48384_SHARP_,p2__48383_SHARP_){
return cljs.core.compare(p2__48383_SHARP_,p1__48384_SHARP_);
})),rows)));
} else {
return G__48389;
}
});
nextjournal.clerk.render.x_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-4.w-4","svg.h-4.w-4",1958440568),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null);
nextjournal.clerk.render.check_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-4.w-4","svg.h-4.w-4",1958440568),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null);
nextjournal.clerk.render.render_table_error = (function nextjournal$clerk$render$render_table_error(p__48391){
var vec__48392 = p__48391;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48392,(0),null);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-400.not-prose","div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-400.not-prose",472299052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.mt-0.uppercase.text-xs.dark:text-red-400.tracking-wide","h4.mt-0.uppercase.text-xs.dark:text-red-400.tracking-wide",-1114358129),"Table Error"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-4.font-medium","p.mt-4.font-medium",778592363),"Clerk\u2019s table viewer does not recognize the format of your data:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex","div.mt-2.flex",-812335696),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-red-500.mr-2","div.text-red-500.mr-2",-1965802655),nextjournal.clerk.render.x_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,data], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-4.font-medium","p.mt-4.font-medium",778592363),"Currently, the following formats are supported:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.render.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-1","column-1",844467295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"column-2","column-2",1966117147),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.render.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-1","column-1",844467295),(1),new cljs.core.Keyword(null,"column-2","column-2",1966117147),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-1","column-1",844467295),(2),new cljs.core.Keyword(null,"column-2","column-2",1966117147),(4)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.render.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.render.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-1","column-1",844467295),new cljs.core.Keyword(null,"column-2","column-2",1966117147)], null),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null)], null)], null)], null)], null)], null);
});
nextjournal.clerk.render.render_table_with_sticky_header = (function nextjournal$clerk$render$render_table_with_sticky_header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48486 = arguments.length;
var i__5770__auto___48487 = (0);
while(true){
if((i__5770__auto___48487 < len__5769__auto___48486)){
args__5775__auto__.push((arguments[i__5770__auto___48487]));

var G__48488 = (i__5770__auto___48487 + (1));
i__5770__auto___48487 = G__48488;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return nextjournal.clerk.render.render_table_with_sticky_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(nextjournal.clerk.render.render_table_with_sticky_header.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var _BANG_table_ref = nextjournal.clerk.render.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null);
var _BANG_table_clone_ref = nextjournal.clerk.render.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null);
nextjournal.clerk.render.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$1((function (){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(_BANG_table_ref);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.deref(_BANG_table_ref).querySelector("thead");
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.deref(_BANG_table_clone_ref);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
var sticky = (new module$node_modules$vh_sticky_table_header$build$commonjs$index.StickyTableHeader(cljs.core.deref(_BANG_table_ref),cljs.core.deref(_BANG_table_clone_ref),({"max": (0)})));
return (function (){
return sticky.destroy();
});
} else {
return null;
}
}));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-x-auto.overflow-y-hidden.w-full","div.overflow-x-auto.overflow-y-hidden.w-full",-935402308),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.text-xs.sans-serif.text-gray-900.dark:text-white.not-prose","table.text-xs.sans-serif.text-gray-900.dark:text-white.not-prose",-355725270),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_BANG_table_ref], null)], null),children)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-x-auto.overflow-y-hidden.w-full.shadow","div.overflow-x-auto.overflow-y-hidden.w-full.shadow",-1618229290),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.text-xs.sans-serif.text-gray-900.dark:text-white.not-prose","table.text-xs.sans-serif.text-gray-900.dark:text-white.not-prose",-355725270),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),_BANG_table_clone_ref,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null)], null)], null);
}));

(nextjournal.clerk.render.render_table_with_sticky_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nextjournal.clerk.render.render_table_with_sticky_header.cljs$lang$applyTo = (function (seq48395){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48395));
}));

nextjournal.clerk.render.throwable_view = (function nextjournal$clerk$render$throwable_view(p__48396){
var map__48397 = p__48396;
var map__48397__$1 = cljs.core.__destructure_map(map__48397);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48397__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48397__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.max-w-6xl.mx-auto.text-xs.monospace.not-prose","div.bg-white.max-w-6xl.mx-auto.text-xs.monospace.not-prose",-741753812),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48398){
var map__48399 = p__48398;
var map__48399__$1 = cljs.core.__destructure_map(map__48399);
var _ex = map__48399__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48399__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48399__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48399__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var _trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48399__$1,new cljs.core.Keyword(null,"_trace","_trace",-196725681));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.bg-red-100.border-b.border-b-gray-300","div.p-4.bg-red-100.border-b.border-b-gray-300",-1067794245),(cljs.core.truth_(type)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-bold","div.font-bold",2116623818),"Unhandled ",type], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-bold.mt-1","div.font-bold.mt-1",-1699801213),message], null),(cljs.core.truth_(data)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1","div.mt-1",-36845891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect,data], null)], null):null)], null);
}),via)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.py-6.overflow-x-auto","div.py-6.overflow-x-auto",-1663715111),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.w-full","table.w-full",1746679141),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__48400){
var vec__48401 = p__48400;
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48401,(0),null);
var _x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48401,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48401,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48401,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.hover:bg-red-100.leading-tight","tr.hover:bg-red-100.leading-tight",96605729),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-right.px-6","td.text-right.px-6",324007517),file,":"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-right.pr-6","td.text-right.pr-6",1739173277),line], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.py-1.pr-6","td.py-1.pr-6",1245547684),call], null)], null);
})),trace)], null)], null)], null);
});
nextjournal.clerk.render.render_throwable = (function nextjournal$clerk$render$render_throwable(ex){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(ex);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (ex instanceof Error);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.error_view,ex], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.throwable_view,ex], null);
}
});
nextjournal.clerk.render.render_tagged_value = (function nextjournal$clerk$render$render_tagged_value(var_args){
var G__48405 = arguments.length;
switch (G__48405) {
case 2:
return nextjournal.clerk.render.render_tagged_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clerk.render.render_tagged_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.render.render_tagged_value.cljs$core$IFn$_invoke$arity$2 = (function (tag,value){
return nextjournal.clerk.render.render_tagged_value.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"space?","space?",-1369314665),true], null),tag,value);
}));

(nextjournal.clerk.render.render_tagged_value.cljs$core$IFn$_invoke$arity$3 = (function (p__48406,tag,value){
var map__48407 = p__48406;
var map__48407__$1 = cljs.core.__destructure_map(map__48407);
var space_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48407__$1,new cljs.core.Keyword(null,"space?","space?",-1369314665));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap","span.inspected-value.whitespace-nowrap",1177458280),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),tag], null),(cljs.core.truth_(space_QMARK_)?nextjournal.clerk.render.nbsp:null),value], null);
}));

(nextjournal.clerk.render.render_tagged_value.cljs$lang$maxFixedArity = 3);

if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render._BANG_doc !== 'undefined')){
} else {
nextjournal.clerk.render._BANG_doc = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render._BANG_error !== 'undefined')){
} else {
nextjournal.clerk.render._BANG_error = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render._BANG_viewers !== 'undefined')){
} else {
nextjournal.clerk.render._BANG_viewers = nextjournal.clerk.viewer._BANG_viewers;
}
nextjournal.clerk.render.set_viewers_BANG_ = (function nextjournal$clerk$render$set_viewers_BANG_(scope,viewers){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nextjournal.clerk.render._BANG_viewers,cljs.core.assoc,scope,cljs.core.vec(viewers));

return new cljs.core.Symbol(null,"set-viewers!","set-viewers!",-745204889,null);
});
nextjournal.clerk.render.valid_react_element_QMARK_ = (function nextjournal$clerk$render$valid_react_element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
nextjournal.clerk.render.inspect_presented = (function nextjournal$clerk$render$inspect_presented(var_args){
var G__48409 = arguments.length;
switch (G__48409) {
case 1:
return nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$1 = (function (x){
var with_let48410 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let48410","with-let48410",-1889016369));
var temp__5808__auto___48491 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___48491 == null)){
} else {
var c__40743__auto___48492 = temp__5808__auto___48491;
if((with_let48410.generation === c__40743__auto___48492.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let48410.generation = c__40743__auto___48492.ratomGeneration);
}

var init48411 = (with_let48410.length === (0));
var _BANG_expanded_at = ((((init48411) || (cljs.core.not(with_let48410.hasOwnProperty((0))))))?(with_let48410[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nextjournal","expanded-at","nextjournal/expanded-at",-1490351009).cljs$core$IFn$_invoke$arity$1(x))):(with_let48410[(0)]));
var res48412 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694),_BANG_expanded_at], null),x], null);
return res48412;
}));

(nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$2 = (function (opts,x){
if(cljs.core.truth_(nextjournal.clerk.render.valid_react_element_QMARK_(x))){
return x;
} else {
var map__48413 = x;
var map__48413__$1 = cljs.core.__destructure_map(map__48413);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48413__$1,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48413__$1,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(viewer),value,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.Keyword("nextjournal","opts","nextjournal/opts",570344249).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),viewer], null)], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(viewer)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.peek(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)))].join('')], null));
}
}));

(nextjournal.clerk.render.inspect_presented.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.render.in_process_fetch = (function nextjournal$clerk$render$in_process_fetch(value,opts){
return Promise.resolve(nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$2(value,opts));
});
nextjournal.clerk.render.inspect = (function nextjournal$clerk$render$inspect(value){
var with_let48414 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let48414","with-let48414",-710017232));
var temp__5808__auto___48493 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___48493 == null)){
} else {
var c__40743__auto___48494 = temp__5808__auto___48493;
if((with_let48414.generation === c__40743__auto___48494.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let48414.generation = c__40743__auto___48494.ratomGeneration);
}

var init48415 = (with_let48414.length === (0));
var _BANG_state = ((((init48415) || (cljs.core.not(with_let48414.hasOwnProperty((0))))))?(with_let48414[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let48414[(0)]));
var res48416 = (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_state),new cljs.core.Keyword("nextjournal.clerk.render","not-found","nextjournal.clerk.render/not-found",-247770595)),value)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"desc","desc",2093485764),nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$1(value)], 0));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.view.context.provide,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383),(function (fetch_opts){
return nextjournal.clerk.render.in_process_fetch(value,fetch_opts).then((function (more){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_state,cljs.core.update,new cljs.core.Keyword(null,"desc","desc",2093485764),nextjournal.clerk.viewer.merge_presentations,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more,fetch_opts], 0));
}));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_state))], null)], null);
})()
;
return res48416;
});
nextjournal.clerk.render.root = (function nextjournal$clerk$render$root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,cljs.core.deref(nextjournal.clerk.render._BANG_doc)], null),(cljs.core.truth_(cljs.core.deref(nextjournal.clerk.render._BANG_error))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.top-0.left-0.w-full.h-full","div.fixed.top-0.left-0.w-full.h-full",1721394456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,cljs.core.deref(nextjournal.clerk.render._BANG_error)], null)], null):null)], null);
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render._STAR_sync_STAR_ !== 'undefined')){
} else {
nextjournal.clerk.render._STAR_sync_STAR_ = true;
}
nextjournal.clerk.render.atom_changed = (function nextjournal$clerk$render$atom_changed(var_name,_atom,_old_state,new_state){
if(cljs.core.truth_(nextjournal.clerk.render._STAR_sync_STAR_)){
return ws_send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"swap!","swap!",1998758253),new cljs.core.Keyword(null,"var-name","var-name",-574747624),var_name,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,new_state,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null))], null)], null)], 0)));
} else {
return null;
}
});
nextjournal.clerk.render.intern_atom_BANG_ = (function nextjournal$clerk$render$intern_atom_BANG_(var_name,state){
if(cljs.core.truth_(sci.ctx_store.get_ctx())){
} else {
throw (new Error(["Assert failed: ","sci-ctx must be set","\n","(sci.ctx-store/get-ctx)"].join('')));
}

return sci.core.intern.cljs$core$IFn$_invoke$arity$4(sci.ctx_store.get_ctx(),sci.core.create_ns.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(var_name))),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(var_name)),(function (){var G__48417 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(G__48417,var_name,nextjournal.clerk.render.atom_changed);

return G__48417;
})());
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render._BANG_synced_atom_vars !== 'undefined')){
} else {
nextjournal.clerk.render._BANG_synced_atom_vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
nextjournal.clerk.render.sci_ns_unmap_BANG_ = (function nextjournal$clerk$render$sci_ns_unmap_BANG_(ns_sym,var_sym){
var ns_unmap = sci.core.eval_string_STAR_(sci.ctx_store.get_ctx(),"ns-unmap");
return (ns_unmap.cljs$core$IFn$_invoke$arity$2 ? ns_unmap.cljs$core$IFn$_invoke$arity$2(ns_sym,var_sym) : ns_unmap.call(null,ns_sym,var_sym));
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render._STAR_reset_sync_atoms_QMARK__STAR_ !== 'undefined')){
} else {
nextjournal.clerk.render._STAR_reset_sync_atoms_QMARK__STAR_ = true;
}
nextjournal.clerk.render.set_reset_sync_atoms_BANG_ = (function nextjournal$clerk$render$set_reset_sync_atoms_BANG_(new_val){
return (nextjournal.clerk.render._STAR_reset_sync_atoms_QMARK__STAR_ = new_val);
});
nextjournal.clerk.render.intern_atoms_BANG_ = (function nextjournal$clerk$render$intern_atoms_BANG_(atom_var_name__GT_state){
var vars_in_use = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(atom_var_name__GT_state));
var vars_interned = cljs.core.deref(nextjournal.clerk.render._BANG_synced_atom_vars);
var seq__48418_48495 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(vars_interned,vars_in_use));
var chunk__48419_48496 = null;
var count__48420_48497 = (0);
var i__48421_48498 = (0);
while(true){
if((i__48421_48498 < count__48420_48497)){
var var_name_to_unmap_48499 = chunk__48419_48496.cljs$core$IIndexed$_nth$arity$2(null,i__48421_48498);
nextjournal.clerk.render.sci_ns_unmap_BANG_(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(var_name_to_unmap_48499)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(var_name_to_unmap_48499)));


var G__48500 = seq__48418_48495;
var G__48501 = chunk__48419_48496;
var G__48502 = count__48420_48497;
var G__48503 = (i__48421_48498 + (1));
seq__48418_48495 = G__48500;
chunk__48419_48496 = G__48501;
count__48420_48497 = G__48502;
i__48421_48498 = G__48503;
continue;
} else {
var temp__5804__auto___48504 = cljs.core.seq(seq__48418_48495);
if(temp__5804__auto___48504){
var seq__48418_48505__$1 = temp__5804__auto___48504;
if(cljs.core.chunked_seq_QMARK_(seq__48418_48505__$1)){
var c__5568__auto___48506 = cljs.core.chunk_first(seq__48418_48505__$1);
var G__48507 = cljs.core.chunk_rest(seq__48418_48505__$1);
var G__48508 = c__5568__auto___48506;
var G__48509 = cljs.core.count(c__5568__auto___48506);
var G__48510 = (0);
seq__48418_48495 = G__48507;
chunk__48419_48496 = G__48508;
count__48420_48497 = G__48509;
i__48421_48498 = G__48510;
continue;
} else {
var var_name_to_unmap_48511 = cljs.core.first(seq__48418_48505__$1);
nextjournal.clerk.render.sci_ns_unmap_BANG_(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(var_name_to_unmap_48511)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(var_name_to_unmap_48511)));


var G__48512 = cljs.core.next(seq__48418_48505__$1);
var G__48513 = null;
var G__48514 = (0);
var G__48515 = (0);
seq__48418_48495 = G__48512;
chunk__48419_48496 = G__48513;
count__48420_48497 = G__48514;
i__48421_48498 = G__48515;
continue;
}
} else {
}
}
break;
}

var seq__48422_48516 = cljs.core.seq(atom_var_name__GT_state);
var chunk__48423_48517 = null;
var count__48424_48518 = (0);
var i__48425_48519 = (0);
while(true){
if((i__48425_48519 < count__48424_48518)){
var vec__48436_48520 = chunk__48423_48517.cljs$core$IIndexed$_nth$arity$2(null,i__48425_48519);
var var_name_48521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48436_48520,(0),null);
var value_48522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48436_48520,(1),null);
var temp__5802__auto___48523 = sci.core.resolve(sci.ctx_store.get_ctx(),var_name_48521);
if(cljs.core.truth_(temp__5802__auto___48523)){
var existing_var_48524 = temp__5802__auto___48523;
if(cljs.core.truth_(nextjournal.clerk.render._STAR_reset_sync_atoms_QMARK__STAR_)){
var _STAR_sync_STAR__orig_val__48439_48525 = nextjournal.clerk.render._STAR_sync_STAR_;
var _STAR_sync_STAR__temp_val__48440_48526 = false;
(nextjournal.clerk.render._STAR_sync_STAR_ = _STAR_sync_STAR__temp_val__48440_48526);

try{cljs.core.reset_BANG_(cljs.core.deref(existing_var_48524),value_48522);
}finally {(nextjournal.clerk.render._STAR_sync_STAR_ = _STAR_sync_STAR__orig_val__48439_48525);
}} else {
}
} else {
nextjournal.clerk.render.intern_atom_BANG_(var_name_48521,value_48522);
}


var G__48527 = seq__48422_48516;
var G__48528 = chunk__48423_48517;
var G__48529 = count__48424_48518;
var G__48530 = (i__48425_48519 + (1));
seq__48422_48516 = G__48527;
chunk__48423_48517 = G__48528;
count__48424_48518 = G__48529;
i__48425_48519 = G__48530;
continue;
} else {
var temp__5804__auto___48531 = cljs.core.seq(seq__48422_48516);
if(temp__5804__auto___48531){
var seq__48422_48532__$1 = temp__5804__auto___48531;
if(cljs.core.chunked_seq_QMARK_(seq__48422_48532__$1)){
var c__5568__auto___48533 = cljs.core.chunk_first(seq__48422_48532__$1);
var G__48534 = cljs.core.chunk_rest(seq__48422_48532__$1);
var G__48535 = c__5568__auto___48533;
var G__48536 = cljs.core.count(c__5568__auto___48533);
var G__48537 = (0);
seq__48422_48516 = G__48534;
chunk__48423_48517 = G__48535;
count__48424_48518 = G__48536;
i__48425_48519 = G__48537;
continue;
} else {
var vec__48441_48538 = cljs.core.first(seq__48422_48532__$1);
var var_name_48539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48441_48538,(0),null);
var value_48540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48441_48538,(1),null);
var temp__5802__auto___48541 = sci.core.resolve(sci.ctx_store.get_ctx(),var_name_48539);
if(cljs.core.truth_(temp__5802__auto___48541)){
var existing_var_48542 = temp__5802__auto___48541;
if(cljs.core.truth_(nextjournal.clerk.render._STAR_reset_sync_atoms_QMARK__STAR_)){
var _STAR_sync_STAR__orig_val__48444_48543 = nextjournal.clerk.render._STAR_sync_STAR_;
var _STAR_sync_STAR__temp_val__48445_48544 = false;
(nextjournal.clerk.render._STAR_sync_STAR_ = _STAR_sync_STAR__temp_val__48445_48544);

try{cljs.core.reset_BANG_(cljs.core.deref(existing_var_48542),value_48540);
}finally {(nextjournal.clerk.render._STAR_sync_STAR_ = _STAR_sync_STAR__orig_val__48444_48543);
}} else {
}
} else {
nextjournal.clerk.render.intern_atom_BANG_(var_name_48539,value_48540);
}


var G__48545 = cljs.core.next(seq__48422_48532__$1);
var G__48546 = null;
var G__48547 = (0);
var G__48548 = (0);
seq__48422_48516 = G__48545;
chunk__48423_48517 = G__48546;
count__48424_48518 = G__48547;
i__48425_48519 = G__48548;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(nextjournal.clerk.render._BANG_synced_atom_vars,vars_in_use);
});
nextjournal.clerk.render.remount_QMARK_ = (function nextjournal$clerk$render$remount_QMARK_(doc_or_patch){
return cljs.core.some((function (p1__48446_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__48446_SHARP_,new cljs.core.Keyword("nextjournal.clerk","remount","nextjournal.clerk/remount",-1003805683));
}),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,doc_or_patch)) === true;
});
nextjournal.clerk.render.re_eval_viewer_fns = (function nextjournal$clerk$render$re_eval_viewer_fns(doc){
var re_eval = (function (p1__48447_SHARP_){
return nextjournal.clerk.viewer.__GT_viewer_fn(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(p1__48447_SHARP_));
});
return clojure.walk.postwalk((function (p1__48448_SHARP_){
var G__48449 = p1__48448_SHARP_;
if(nextjournal.clerk.viewer.viewer_fn_QMARK_(p1__48448_SHARP_)){
return re_eval(G__48449);
} else {
return G__48449;
}
}),doc);
});
nextjournal.clerk.render.set_state_BANG_ = (function nextjournal$clerk$render$set_state_BANG_(p__48450){
var map__48451 = p__48450;
var map__48451__$1 = cljs.core.__destructure_map(map__48451);
var state = map__48451__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48451__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48451__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"doc","doc",1913296891))){
cljs.core.reset_BANG_(nextjournal.clerk.render._BANG_doc,doc);
} else {
}

if(nextjournal.clerk.render.remount_QMARK_(doc)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.render._BANG_eval_counter,cljs.core.inc);
} else {
}

cljs.core.reset_BANG_(nextjournal.clerk.render._BANG_error,error);

var temp__5804__auto__ = (function (){var and__5043__auto__ = (typeof document !== 'undefined');
if(and__5043__auto__){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_value(doc));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var title = temp__5804__auto__;
return (document.title = title);
} else {
return null;
}
});
goog.exportSymbol('nextjournal.clerk.render.set_state_BANG_', nextjournal.clerk.render.set_state_BANG_);
nextjournal.clerk.render.apply_patch = (function nextjournal$clerk$render$apply_patch(x,patch){
return editscript.core.patch(x,(editscript.core.edits__GT_script.cljs$core$IFn$_invoke$arity$1 ? editscript.core.edits__GT_script.cljs$core$IFn$_invoke$arity$1(patch) : editscript.core.edits__GT_script.call(null,patch)));
});
nextjournal.clerk.render.patch_state_BANG_ = (function nextjournal$clerk$render$patch_state_BANG_(p__48453){
var map__48454 = p__48453;
var map__48454__$1 = cljs.core.__destructure_map(map__48454);
var patch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48454__$1,new cljs.core.Keyword(null,"patch","patch",380775109));
cljs.core.reset_BANG_(nextjournal.clerk.render._BANG_error,null);

if(nextjournal.clerk.render.remount_QMARK_(patch)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.render._BANG_doc,(function (p1__48452_SHARP_){
return nextjournal.clerk.render.re_eval_viewer_fns(nextjournal.clerk.render.apply_patch(p1__48452_SHARP_,patch));
}));

return setTimeout((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.render._BANG_eval_counter,cljs.core.inc);
}),(10));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.render._BANG_doc,nextjournal.clerk.render.apply_patch,patch);
}
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render._BANG_pending_clerk_eval_replies !== 'undefined')){
} else {
nextjournal.clerk.render._BANG_pending_clerk_eval_replies = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
nextjournal.clerk.render.clerk_eval = (function nextjournal$clerk$render$clerk_eval(form){
var eval_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var promise = (new Promise((function (resolve,reject){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nextjournal.clerk.render._BANG_pending_clerk_eval_replies,cljs.core.assoc,eval_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"resolve","resolve",-1584445482),resolve,new cljs.core.Keyword(null,"reject","reject",1415953113),reject], null));
})));
goog.global.ws_send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"eval-id","eval-id",766598661),eval_id], null)], 0)));

return promise;
});
nextjournal.clerk.render.process_eval_reply_BANG_ = (function nextjournal$clerk$render$process_eval_reply_BANG_(p__48455){
var map__48456 = p__48455;
var map__48456__$1 = cljs.core.__destructure_map(map__48456);
var eval_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48456__$1,new cljs.core.Keyword(null,"eval-id","eval-id",766598661));
var reply = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48456__$1,new cljs.core.Keyword(null,"reply","reply",1144328671));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48456__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nextjournal.clerk.render._BANG_pending_clerk_eval_replies),eval_id);
if(cljs.core.truth_(temp__5802__auto__)){
var map__48457 = temp__5802__auto__;
var map__48457__$1 = cljs.core.__destructure_map(map__48457);
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48457__$1,new cljs.core.Keyword(null,"resolve","resolve",-1584445482));
var reject = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48457__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.render._BANG_pending_clerk_eval_replies,cljs.core.dissoc,eval_id);

if(cljs.core.truth_(reply)){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(reply) : resolve.call(null,reply));
} else {
if(cljs.core.truth_(error)){
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(error) : reject.call(null,error));
} else {
return null;
}
}
} else {
return console.warn(new cljs.core.Keyword("process-eval-reply!","not-found","process-eval-reply!/not-found",1784535534),new cljs.core.Keyword(null,"eval-id","eval-id",766598661),eval_id,new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.keys(cljs.core.deref(nextjournal.clerk.render._BANG_pending_clerk_eval_replies)));
}
});
nextjournal.clerk.render.dispatch = (function nextjournal$clerk$render$dispatch(p__48458){
var map__48459 = p__48458;
var map__48459__$1 = cljs.core.__destructure_map(map__48459);
var msg = map__48459__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48459__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"patch-state!","patch-state!",1188766076),nextjournal.clerk.render.patch_state_BANG_,new cljs.core.Keyword(null,"set-state!","set-state!",1449612100),nextjournal.clerk.render.set_state_BANG_,new cljs.core.Keyword(null,"eval-reply","eval-reply",-445092826),nextjournal.clerk.render.process_eval_reply_BANG_], null),type,(function (_){
return console.warn(["no on-message dispatch for type `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"`"].join(''));
}));
return (dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? dispatch_fn.cljs$core$IFn$_invoke$arity$1(msg) : dispatch_fn.call(null,msg));
});
goog.exportSymbol('nextjournal.clerk.render.dispatch', nextjournal.clerk.render.dispatch);
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render.react_root !== 'undefined')){
} else {
nextjournal.clerk.render.react_root = (function (){var temp__5804__auto__ = (function (){var and__5043__auto__ = (typeof document !== 'undefined');
if(and__5043__auto__){
return document.getElementById("clerk");
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
return module$node_modules$react_dom$client.createRoot(el);
} else {
return null;
}
})();
}
nextjournal.clerk.render.mount = (function nextjournal$clerk$render$mount(){
if(cljs.core.truth_(nextjournal.clerk.render.react_root)){
return nextjournal.clerk.render.react_root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.root], null)));
} else {
return null;
}
});
goog.exportSymbol('nextjournal.clerk.render.mount', nextjournal.clerk.render.mount);
nextjournal.clerk.render.render_katex = (function nextjournal$clerk$render$render_katex(tex_string,p__48460){
var map__48461 = p__48460;
var map__48461__$1 = cljs.core.__destructure_map(map__48461);
var inline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48461__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),nextjournal.viewer.katex.to_html_string.cljs$core$IFn$_invoke$arity$2(tex_string,({"displayMode":cljs.core.not(inline_QMARK_)}))], null)], null)], null);
});
nextjournal.clerk.render.html_render = (function nextjournal$clerk$render$html_render(markup){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(((typeof markup === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),markup], null)], null)], null):markup));
});
nextjournal.clerk.render.html_viewer = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),nextjournal.clerk.render.html_render], null);
nextjournal.clerk.render.html = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.render.html_viewer);
nextjournal.clerk.render.render_reagent = (function nextjournal$clerk$render$render_reagent(x){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((function (){var G__48462 = x;
if(cljs.core.fn_QMARK_(x)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__48462],null));
} else {
return G__48462;
}
})());
});
nextjournal.clerk.render.reagent_viewer = nextjournal.clerk.render.render_reagent;
nextjournal.clerk.render.render_promise = (function nextjournal$clerk$render$render_promise(p,opts){
var _BANG_state = nextjournal.clerk.render.hooks.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pending","pending",-220036727),true], null));
nextjournal.clerk.render.hooks.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
return p.then((function (p1__48463_SHARP_){
return cljs.core.reset_BANG_(_BANG_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),p1__48463_SHARP_], null));
})).catch((function (p1__48464_SHARP_){
return cljs.core.reset_BANG_(_BANG_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__48464_SHARP_], null));
}));
}));

var map__48465 = cljs.core.deref(_BANG_state);
var map__48465__$1 = cljs.core.__destructure_map(map__48465);
var pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48465__$1,new cljs.core.Keyword(null,"pending","pending",-220036727));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48465__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48465__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(pending)){
return nextjournal.clerk.render.default_loading_view;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect,(function (){var or__5045__auto__ = pending;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = value;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return error;
}
}
})()], null);
}
});
nextjournal.clerk.render.with_d3_require = (function nextjournal$clerk$render$with_d3_require(p__48466,f){
var map__48467 = p__48466;
var map__48467__$1 = cljs.core.__destructure_map(map__48467);
var package$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48467__$1,new cljs.core.Keyword(null,"package","package",1189062786));
var loading_view = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48467__$1,new cljs.core.Keyword(null,"loading-view","loading-view",1386748874),nextjournal.clerk.render.default_loading_view);
var temp__5802__auto__ = nextjournal.clerk.render.hooks.use_d3_require(package$);
if(cljs.core.truth_(temp__5802__auto__)){
var package$__$1 = temp__5802__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(package$__$1) : f.call(null,package$__$1));
} else {
return loading_view;
}
});
nextjournal.clerk.render.render_vega_lite = (function nextjournal$clerk$render$render_vega_lite(value){
var handle_error = nextjournal.clerk.render.hooks.use_error_handler();
var vega_embed = nextjournal.clerk.render.hooks.use_d3_require("vega-embed@6.11.1");
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("embed","opts","embed/opts",187667792),cljs.core.PersistentArrayMap.EMPTY);
var ref_fn = module$node_modules$react$index.useCallback((function (p1__48468_SHARP_){
if(cljs.core.truth_(p1__48468_SHARP_)){
return vega_embed.embed(p1__48468_SHARP_,cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(value,new cljs.core.Keyword("embed","opts","embed/opts",187667792),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("embed","callback","embed/callback",-604624783)], 0))),cljs.core.clj__GT_js(opts)).then((function (result){
var temp__5802__auto__ = new cljs.core.Keyword("embed","callback","embed/callback",-604624783).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(temp__5802__auto__)){
var callback = temp__5802__auto__;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(result) : callback.call(null,result));
} else {
return result;
}
})).catch(handle_error);
} else {
return null;
}
}),[value,vega_embed]);
if(cljs.core.truth_(value)){
if(cljs.core.truth_(vega_embed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-x-auto","div.overflow-x-auto",-1359457684),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vega-lite","div.vega-lite",1198823274),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)], null);
} else {
return nextjournal.clerk.render.default_loading_view;
}
} else {
return null;
}
});
nextjournal.clerk.render.render_plotly = (function nextjournal$clerk$render$render_plotly(value){
var plotly = nextjournal.clerk.render.hooks.use_d3_require("plotly.js-dist@2.15.1");
var ref_fn = module$node_modules$react$index.useCallback((function (p1__48469_SHARP_){
if(cljs.core.truth_(p1__48469_SHARP_)){
return plotly.newPlot(p1__48469_SHARP_,cljs.core.clj__GT_js(value));
} else {
return null;
}
}),[value,plotly]);
if(cljs.core.truth_(value)){
if(cljs.core.truth_(plotly)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-x-auto","div.overflow-x-auto",-1359457684),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plotly","div.plotly",-1155863466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)], null);
} else {
return nextjournal.clerk.render.default_loading_view;
}
} else {
return null;
}
});
nextjournal.clerk.render.render_mathjax = nextjournal.viewer.mathjax.viewer;
nextjournal.clerk.render.render_code = nextjournal.clerk.render.code.render_code;
nextjournal.clerk.render.expand_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"width","width",-384071477),(12),new cljs.core.Keyword(null,"height","height",1025178622),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null);
nextjournal.clerk.render.render_folded_code = (function nextjournal$clerk$render$render_folded_code(code_string){
var _BANG_hidden_QMARK_ = nextjournal.clerk.render.hooks.use_state(true);
if(cljs.core.truth_(cljs.core.deref(_BANG_hidden_QMARK_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.pl-12.font-sans.text-slate-400.cursor-pointer.flex.overflow-y-hidden.group","div.relative.pl-12.font-sans.text-slate-400.cursor-pointer.flex.overflow-y-hidden.group",45115011),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hover:text-slate-500","span.hover:text-slate-500",807205573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10px]",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_hidden_QMARK_,cljs.core.not);
})], null),"show code"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.pl-12.font-sans.text-slate-400.cursor-pointer.flex.overflow-y-hidden.group.mb-1","div.relative.pl-12.font-sans.text-slate-400.cursor-pointer.flex.overflow-y-hidden.group.mb-1",1365696722),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hover:text-slate-500","span.hover:text-slate-500",807205573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10px]",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_hidden_QMARK_,cljs.core.not);
})], null),"hide code"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-code.mb-2.relative","div.viewer-code.mb-2.relative",-490925077),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.render_code,code_string], null)], null)], null);
}
});
nextjournal.clerk.render.url_for = (function nextjournal$clerk$render$url_for(p__48470){
var map__48471 = p__48470;
var map__48471__$1 = cljs.core.__destructure_map(map__48471);
var src = map__48471__$1;
var blob_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48471__$1,new cljs.core.Keyword(null,"blob-id","blob-id",1929300970));
if(typeof src === 'string'){
return src;
} else {
return ["/_blob/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(blob_id),(function (){var temp__5804__auto__ = cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(src,new cljs.core.Keyword(null,"blob-id","blob-id",1929300970)));
if(temp__5804__auto__){
var opts = temp__5804__auto__;
return ["?",nextjournal.clerk.render.opts__GT_query(opts)].join('');
} else {
return null;
}
})()].join('');
}
});
nextjournal.clerk.render.consume_view_context = nextjournal.view.context.consume;

//# sourceMappingURL=nextjournal.clerk.render.js.map
