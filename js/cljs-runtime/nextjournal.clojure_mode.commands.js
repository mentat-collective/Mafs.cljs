import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.commands');
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
nextjournal.clojure_mode.commands.view_command = (function nextjournal$clojure_mode$commands$view_command(f){
return (function (p__49316){
var map__49318 = p__49316;
var map__49318__$1 = (((((!((map__49318 == null))))?(((((map__49318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49318):map__49318);
var state = (function (){var obj49320 = map__49318__$1;
if((!((obj49320 == null)))){
return (obj49320["state"]);
} else {
return undefined;
}
})();
var dispatch = (function (){var obj49321 = map__49318__$1;
if((!((obj49321 == null)))){
return (obj49321["dispatch"]);
} else {
return undefined;
}
})();
var G__49325_49423 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(state) : f.call(null,state));
if((G__49325_49423 == null)){
} else {
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__49325_49423) : dispatch.call(null,G__49325_49423));
}

return true;
});
});
nextjournal.clojure_mode.commands.unwrap_STAR_ = (function nextjournal$clojure_mode$commands$unwrap_STAR_(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__49329){
var map__49330 = p__49329;
var map__49330__$1 = (((((!((map__49330 == null))))?(((((map__49330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49330):map__49330);
var range = map__49330__$1;
var from = (function (){var obj49333 = map__49330__$1;
if((!((obj49333 == null)))){
return (obj49333["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj49334 = map__49330__$1;
if((!((obj49334 == null)))){
return (obj49334["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj49335 = map__49330__$1;
if((!((obj49335 == null)))){
return (obj49335["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5804__auto__ = (function (){var G__49337 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,from,(-1));
var G__49337__$1 = (((G__49337 == null))?null:nextjournal.clojure_mode.node.closest(G__49337,nextjournal.clojure_mode.node.coll_QMARK_));
if((G__49337__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__49337__$1,nextjournal.clojure_mode.node.balanced_QMARK_);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var nearest_balanced_coll = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from - (1)),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.down(nearest_balanced_coll)),nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.down_last(nearest_balanced_coll))], null)], null);
} else {
return null;
}
} else {
return null;
}
}));
});
nextjournal.clojure_mode.commands.copy_to_clipboard_BANG_ = (function nextjournal$clojure_mode$commands$copy_to_clipboard_BANG_(text){
var focus_el = (function (){var obj49339 = document;
if((!((obj49339 == null)))){
return (obj49339["activeElement"]);
} else {
return undefined;
}
})();
var input_el = document.createElement("textarea");
input_el.setAttribute("class","clipboard-input");

var obj49340_49424 = input_el;
var obj49341_49425 = (((!((obj49340_49424 == null))))?obj49340_49424:({}));
(obj49341_49425["innerHTML"] = text);


document.body.appendChild(input_el);

input_el.focus(({"preventScroll": true}));

input_el.select();

document.execCommand("copy");

focus_el.focus(({"preventScroll": true}));

return document.body.removeChild(input_el);
});
nextjournal.clojure_mode.commands.kill_STAR_ = (function nextjournal$clojure_mode$commands$kill_STAR_(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__49346){
var map__49347 = p__49346;
var map__49347__$1 = (((((!((map__49347 == null))))?(((((map__49347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49347):map__49347);
var range = map__49347__$1;
var from = (function (){var obj49349 = map__49347__$1;
if((!((obj49349 == null)))){
return (obj49349["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj49350 = map__49347__$1;
if((!((obj49350 == null)))){
return (obj49350["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj49351 = map__49347__$1;
if((!((obj49351 == null)))){
return (obj49351["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var node = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from);
var parent = nextjournal.clojure_mode.node.closest(node,(function (p1__49344_SHARP_){
var or__5045__auto__ = nextjournal.clojure_mode.node.coll_QMARK_(p1__49344_SHARP_);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ((nextjournal.clojure_mode.node.string_QMARK_(p1__49344_SHARP_)) || (nextjournal.clojure_mode.node.top_QMARK_(p1__49344_SHARP_)));
}
}));
var line_end = state.doc.lineAt(from).to;
var next_children = (cljs.core.truth_(parent)?nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(parent,from,(1)):null);
var last_child_on_line = (cljs.core.truth_(parent)?(function (){var G__49352 = next_children;
var G__49352__$1 = (((G__49352 == null))?null:cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$1((function (p1__49345_SHARP_){
return (nextjournal.clojure_mode.node.start(p1__49345_SHARP_) <= line_end);
})),G__49352));
if((G__49352__$1 == null)){
return null;
} else {
return cljs.core.last(G__49352__$1);
}
})():null);
var to__$1 = ((nextjournal.clojure_mode.node.string_QMARK_(parent))?(function (){var content = cljs.core.str.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$2(state,parent));
var content_from = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(content,(from - nextjournal.clojure_mode.node.start(parent)));
var next_newline = content_from.indexOf("\n");
if((next_newline < (0))){
return (nextjournal.clojure_mode.node.end(parent) - (1));
} else {
return ((from + next_newline) + (1));
}
})():(cljs.core.truth_(last_child_on_line)?((nextjournal.clojure_mode.node.end_edge_QMARK_(last_child_on_line))?nextjournal.clojure_mode.node.start(last_child_on_line):nextjournal.clojure_mode.node.end(last_child_on_line)):(cljs.core.truth_((function (){var G__49353 = cljs.core.first(next_children);
var G__49353__$1 = (((G__49353 == null))?null:nextjournal.clojure_mode.node.start(G__49353));
if((G__49353__$1 == null)){
return null;
} else {
return (G__49353__$1 > line_end);
}
})())?nextjournal.clojure_mode.node.start(cljs.core.first(next_children)):null)));
if(nextjournal.clojure_mode.util.node_js_QMARK_){
} else {
nextjournal.clojure_mode.commands.copy_to_clipboard_BANG_(nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$3(state,from,to__$1));
}

if(cljs.core.truth_(to__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from,new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to__$1], null)], null);
} else {
return null;
}
} else {
nextjournal.clojure_mode.commands.copy_to_clipboard_BANG_(nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$3(state,from,to));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from,new cljs.core.Keyword(null,"changes","changes",1492088),nextjournal.clojure_mode.util.from_to(from,to)], null);
}
}));
});
nextjournal.clojure_mode.commands.enter_and_indent_STAR_ = (function nextjournal$clojure_mode$commands$enter_and_indent_STAR_(state){
var ctx = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__49354){
var map__49355 = p__49354;
var map__49355__$1 = (((((!((map__49355 == null))))?(((((map__49355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49355):map__49355);
var range = map__49355__$1;
var from = (function (){var obj49357 = map__49355__$1;
if((!((obj49357 == null)))){
return (obj49357["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj49358 = map__49355__$1;
if((!((obj49358 == null)))){
return (obj49358["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj49359 = map__49355__$1;
if((!((obj49359 == null)))){
return (obj49359["empty"]);
} else {
return undefined;
}
})();
var indent_at = nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.inner_span(nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,nextjournal.clojure_mode.node.top_QMARK_))));
var indent = nextjournal.clojure_mode.extensions.formatting.get_indentation(ctx,indent_at);
var insertion = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.extensions.formatting.spaces(state,indent))].join('');
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from + ((insertion).length)),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"insert","insert",1286475395),insertion], null)], null)], null);
}));
});
nextjournal.clojure_mode.commands.nav_position = (function nextjournal$clojure_mode$commands$nav_position(state,from,dir){
var or__5045__auto__ = (function (){var G__49361 = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),(function (p1__49360_SHARP_){
var or__5045__auto__ = nextjournal.clojure_mode.node.coll_QMARK_(p1__49360_SHARP_);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ((nextjournal.clojure_mode.node.string_QMARK_(p1__49360_SHARP_)) || (nextjournal.clojure_mode.node.top_QMARK_(p1__49360_SHARP_)));
}
}));
var G__49361__$1 = (((G__49361 == null))?null:nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(G__49361,from,dir));
var G__49361__$2 = (((G__49361__$1 == null))?null:cljs.core.first(G__49361__$1));
if((G__49361__$2 == null)){
return null;
} else {
var obj49362 = G__49361__$2;
if((!((obj49362 == null)))){
return (obj49362[applied_science.js_interop.impl.wrap_key((function (){var G__49364 = dir;
switch (G__49364) {
case (-1):
return new cljs.core.Keyword(null,"from","from",1815293044);

break;
case (1):
return new cljs.core.Keyword(null,"to","to",192099007);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49364)].join('')));

}
})())]);
} else {
return undefined;
}
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return nextjournal.clojure_mode.selections.constrain(state,(from + dir));
}
});
nextjournal.clojure_mode.commands.nav = (function nextjournal$clojure_mode$commands$nav(dir){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__49365){
var map__49366 = p__49365;
var map__49366__$1 = (((((!((map__49366 == null))))?(((((map__49366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49366):map__49366);
var range = map__49366__$1;
var from = (function (){var obj49368 = map__49366__$1;
if((!((obj49368 == null)))){
return (obj49368["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj49369 = map__49366__$1;
if((!((obj49369 == null)))){
return (obj49369["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj49370 = map__49366__$1;
if((!((obj49370 == null)))){
return (obj49370["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),nextjournal.clojure_mode.commands.nav_position(state,from,dir)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var obj49371 = nextjournal.clojure_mode.util.from_to(from,to);
if((!((obj49371 == null)))){
return (obj49371[applied_science.js_interop.impl.wrap_key((function (){var G__49373 = dir;
switch (G__49373) {
case (-1):
return new cljs.core.Keyword(null,"from","from",1815293044);

break;
case (1):
return new cljs.core.Keyword(null,"to","to",192099007);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49373)].join('')));

}
})())]);
} else {
return undefined;
}
})()], null);
}
}));
});
});
nextjournal.clojure_mode.commands.nav_select = (function nextjournal$clojure_mode$commands$nav_select(dir){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__49374){
var map__49375 = p__49374;
var map__49375__$1 = (((((!((map__49375 == null))))?(((((map__49375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49375):map__49375);
var range = map__49375__$1;
var from = (function (){var obj49377 = map__49375__$1;
if((!((obj49377 == null)))){
return (obj49377["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj49378 = map__49375__$1;
if((!((obj49378 == null)))){
return (obj49378["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj49379 = map__49375__$1;
if((!((obj49379 == null)))){
return (obj49379["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,from,nextjournal.clojure_mode.commands.nav_position(state,from,dir))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),(function (){var map__49380 = nextjournal.clojure_mode.util.from_to(from,to);
var map__49380__$1 = (((((!((map__49380 == null))))?(((((map__49380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49380):map__49380);
var from__$1 = (function (){var obj49382 = map__49380__$1;
if((!((obj49382 == null)))){
return (obj49382["from"]);
} else {
return undefined;
}
})();
var to__$1 = (function (){var obj49383 = map__49380__$1;
if((!((obj49383 == null)))){
return (obj49383["to"]);
} else {
return undefined;
}
})();
var G__49384 = dir;
switch (G__49384) {
case (1):
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,from__$1,nextjournal.clojure_mode.commands.nav_position(state,to__$1,dir));

break;
case (-1):
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,nextjournal.clojure_mode.commands.nav_position(state,from__$1,dir),to__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49384)].join('')));

}
})()], null);
}
}));
});
});
nextjournal.clojure_mode.commands.balance_ranges = (function nextjournal$clojure_mode$commands$balance_ranges(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__49385){
var map__49386 = p__49385;
var map__49386__$1 = (((((!((map__49386 == null))))?(((((map__49386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49386):map__49386);
var from = (function (){var obj49388 = map__49386__$1;
if((!((obj49388 == null)))){
return (obj49388["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj49389 = map__49386__$1;
if((!((obj49389 == null)))){
return (obj49389["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj49390 = map__49386__$1;
if((!((obj49390 == null)))){
return (obj49390["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,from,to)], null);
}
}));
});
nextjournal.clojure_mode.commands.log = console.log;
nextjournal.clojure_mode.commands.slurp = (function nextjournal$clojure_mode$commands$slurp(direction){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__49392){
var map__49393 = p__49392;
var map__49393__$1 = (((((!((map__49393 == null))))?(((((map__49393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49393):map__49393);
var range = map__49393__$1;
var from = (function (){var obj49395 = map__49393__$1;
if((!((obj49395 == null)))){
return (obj49395["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj49396 = map__49393__$1;
if((!((obj49396 == null)))){
return (obj49396["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj49397 = map__49393__$1;
if((!((obj49397 == null)))){
return (obj49397["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5804__auto__ = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,(function (p1__49391_SHARP_){
return cljs.core.not((function (){var G__49398 = direction;
switch (G__49398) {
case (1):
var G__49399 = p1__49391_SHARP_;
var G__49399__$1 = (((G__49399 == null))?null:nextjournal.clojure_mode.node.with_prefix(G__49399));
var G__49399__$2 = (((G__49399__$1 == null))?null:nextjournal.clojure_mode.node.right(G__49399__$1));
if((G__49399__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.end_edge_QMARK_(G__49399__$2);
}

break;
case (-1):
var G__49400 = p1__49391_SHARP_;
var G__49400__$1 = (((G__49400 == null))?null:nextjournal.clojure_mode.node.with_prefix(G__49400));
var G__49400__$2 = (((G__49400__$1 == null))?null:nextjournal.clojure_mode.node.left(G__49400__$1));
if((G__49400__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.start_edge_QMARK_(G__49400__$2);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49398)].join('')));

}
})());
})));
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
var temp__5804__auto____$1 = (function (){var G__49401 = direction;
switch (G__49401) {
case (1):
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,nextjournal.clojure_mode.node.rights(nextjournal.clojure_mode.node.with_prefix(parent))));

break;
case (-1):
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,nextjournal.clojure_mode.node.lefts(nextjournal.clojure_mode.node.with_prefix(parent))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49401)].join('')));

}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var target = temp__5804__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272),from,new cljs.core.Keyword(null,"changes","changes",1492088),(function (){var G__49402 = direction;
switch (G__49402) {
case (1):
var edge = nextjournal.clojure_mode.node.down_last(parent);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.end(target),new cljs.core.Keyword(null,"insert","insert",1286475395),nextjournal.clojure_mode.node.name(edge)], null),(function (){var obj49403 = nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(edge);
var obj49404 = (((!((obj49403 == null))))?obj49403:({}));
(obj49404["insert"] = " ");

return obj49404;
})()], null);

break;
case (-1):
var edge = nextjournal.clojure_mode.node.left_edge_with_prefix(state,parent);
var start = nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.with_prefix(parent));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),start,new cljs.core.Keyword(null,"to","to",192099007),(start + ((edge).length)),new cljs.core.Keyword(null,"insert","insert",1286475395)," "], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.start(target),new cljs.core.Keyword(null,"insert","insert",1286475395),edge], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49402)].join('')));

}
})()], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));
});
});
nextjournal.clojure_mode.commands.barf = (function nextjournal$clojure_mode$commands$barf(direction){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__49407){
var map__49408 = p__49407;
var map__49408__$1 = (((((!((map__49408 == null))))?(((((map__49408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49408):map__49408);
var range = map__49408__$1;
var from = (function (){var obj49410 = map__49408__$1;
if((!((obj49410 == null)))){
return (obj49410["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj49411 = map__49408__$1;
if((!((obj49411 == null)))){
return (obj49411["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj49412 = map__49408__$1;
if((!((obj49412 == null)))){
return (obj49412["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5804__auto__ = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),nextjournal.clojure_mode.node.coll_QMARK_);
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
var G__49413 = direction;
switch (G__49413) {
case (1):
var temp__5804__auto____$1 = (function (){var G__49414 = nextjournal.clojure_mode.node.down_last(parent);
var G__49414__$1 = (((G__49414 == null))?null:nextjournal.clojure_mode.node.lefts(G__49414));
var G__49414__$2 = (((G__49414__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,G__49414__$1));
var G__49414__$3 = (((G__49414__$2 == null))?null:cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),G__49414__$2));
if((G__49414__$3 == null)){
return null;
} else {
return cljs.core.first(G__49414__$3);
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var target = temp__5804__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var x__5133__auto__ = nextjournal.clojure_mode.node.end(target);
var y__5134__auto__ = from;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})(),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.end(target),new cljs.core.Keyword(null,"insert","insert",1286475395),nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.down_last(parent))], null),(function (){var obj49415 = nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.down_last(parent));
var obj49416 = (((!((obj49415 == null))))?obj49415:({}));
(obj49416["insert"] = " ");

return obj49416;
})()], null)], null);
} else {
return null;
}

break;
case (-1):
var temp__5804__auto____$1 = (function (){var G__49419 = nextjournal.clojure_mode.node.down(parent);
var G__49419__$1 = (((G__49419 == null))?null:nextjournal.clojure_mode.node.rights(G__49419));
var G__49419__$2 = (((G__49419__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,G__49419__$1));
var G__49419__$3 = (((G__49419__$2 == null))?null:cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),G__49419__$2));
if((G__49419__$3 == null)){
return null;
} else {
return cljs.core.first(G__49419__$3);
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var next_first_child = temp__5804__auto____$1;
var left_edge = nextjournal.clojure_mode.node.left_edge_with_prefix(state,parent);
var left_start = nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.with_prefix(parent));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var x__5130__auto__ = from;
var y__5131__auto__ = (nextjournal.clojure_mode.node.start(next_first_child) + (((left_edge).length) + (1)));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.start(next_first_child),new cljs.core.Keyword(null,"insert","insert",1286475395),[" ",left_edge].join('')], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),left_start,new cljs.core.Keyword(null,"to","to",192099007),(left_start + ((left_edge).length)),new cljs.core.Keyword(null,"insert","insert",1286475395),nextjournal.clojure_mode.extensions.formatting.spaces(state,((left_edge).length))], null)], null)], null);
} else {
return null;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49413)].join('')));

}
} else {
return null;
}
} else {
return null;
}
}));
});
});
/**
 * Subset of builtin commands that compliment paredit
 */
nextjournal.clojure_mode.commands.builtin_index = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cursorLineStart","cursorLineStart",-1505072960),new cljs.core.Keyword(null,"cursorLineDown","cursorLineDown",180576864),new cljs.core.Keyword(null,"selectAll","selectAll",869127842),new cljs.core.Keyword(null,"selectLineUp","selectLineUp",-255594686),new cljs.core.Keyword(null,"cursorLineBoundaryForward","cursorLineBoundaryForward",-1283359997),new cljs.core.Keyword(null,"selectLineBoundaryBackward","selectLineBoundaryBackward",-1443564123),new cljs.core.Keyword(null,"deleteCharBackward","deleteCharBackward",-618312025),new cljs.core.Keyword(null,"insertNewlineAndIndent","insertNewlineAndIndent",-542382007),new cljs.core.Keyword(null,"cursorLineBoundaryBackward","cursorLineBoundaryBackward",1373049802),new cljs.core.Keyword(null,"selectCharRight","selectCharRight",1049825195),new cljs.core.Keyword(null,"selectPageUp","selectPageUp",152840428),new cljs.core.Keyword(null,"deleteCharForward","deleteCharForward",823474956),new cljs.core.Keyword(null,"cursorCharLeft","cursorCharLeft",-1572589780),new cljs.core.Keyword(null,"cursorGroupBackward","cursorGroupBackward",-1004717331),new cljs.core.Keyword(null,"selectDocStart","selectDocStart",-217268371),new cljs.core.Keyword(null,"selectGroupBackward","selectGroupBackward",1569543117),new cljs.core.Keyword(null,"cursorDocEnd","cursorDocEnd",-1298653903),new cljs.core.Keyword(null,"deleteGroupBackward","deleteGroupBackward",616768113),new cljs.core.Keyword(null,"selectLineStart","selectLineStart",1211557745),new cljs.core.Keyword(null,"deleteGroupForward","deleteGroupForward",596007091),new cljs.core.Keyword(null,"selectDocEnd","selectDocEnd",496449813),new cljs.core.Keyword(null,"selectPageDown","selectPageDown",226562613),new cljs.core.Keyword(null,"cursorPageDown","cursorPageDown",-1143253131),new cljs.core.Keyword(null,"cursorPageUp","cursorPageUp",-716828715),new cljs.core.Keyword(null,"selectLineBoundaryForward","selectLineBoundaryForward",904508598),new cljs.core.Keyword(null,"cursorLineEnd","cursorLineEnd",-234219178),new cljs.core.Keyword(null,"cursorGroupForward","cursorGroupForward",1231480632),new cljs.core.Keyword(null,"cursorCharRight","cursorCharRight",-739900583),new cljs.core.Keyword(null,"selectGroupForward","selectGroupForward",1344873433),new cljs.core.Keyword(null,"selectLineEnd","selectLineEnd",-1578526086),new cljs.core.Keyword(null,"selectCharLeft","selectCharLeft",1894248154),new cljs.core.Keyword(null,"splitLine","splitLine",-1338533189),new cljs.core.Keyword(null,"selectLineDown","selectLineDown",1741100604),new cljs.core.Keyword(null,"transposeChars","transposeChars",1566260285),new cljs.core.Keyword(null,"cursorLineUp","cursorLineUp",-1375841219),new cljs.core.Keyword(null,"cursorDocStart","cursorDocStart",2008312830)],[module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineStart,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineDown,module$node_modules$$codemirror$commands$dist$index_cjs.selectAll,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineUp,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineBoundaryForward,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineBoundaryBackward,module$node_modules$$codemirror$commands$dist$index_cjs.deleteCharBackward,module$node_modules$$codemirror$commands$dist$index_cjs.insertNewlineAndIndent,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineBoundaryBackward,module$node_modules$$codemirror$commands$dist$index_cjs.selectCharRight,module$node_modules$$codemirror$commands$dist$index_cjs.selectPageUp,module$node_modules$$codemirror$commands$dist$index_cjs.deleteCharForward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorCharLeft,module$node_modules$$codemirror$commands$dist$index_cjs.cursorGroupBackward,module$node_modules$$codemirror$commands$dist$index_cjs.selectDocStart,module$node_modules$$codemirror$commands$dist$index_cjs.selectGroupBackward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorDocEnd,module$node_modules$$codemirror$commands$dist$index_cjs.deleteGroupBackward,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineStart,module$node_modules$$codemirror$commands$dist$index_cjs.deleteGroupForward,module$node_modules$$codemirror$commands$dist$index_cjs.selectDocEnd,module$node_modules$$codemirror$commands$dist$index_cjs.selectPageDown,module$node_modules$$codemirror$commands$dist$index_cjs.cursorPageDown,module$node_modules$$codemirror$commands$dist$index_cjs.cursorPageUp,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineBoundaryForward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineEnd,module$node_modules$$codemirror$commands$dist$index_cjs.cursorGroupForward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorCharRight,module$node_modules$$codemirror$commands$dist$index_cjs.selectGroupForward,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineEnd,module$node_modules$$codemirror$commands$dist$index_cjs.selectCharLeft,module$node_modules$$codemirror$commands$dist$index_cjs.splitLine,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineDown,module$node_modules$$codemirror$commands$dist$index_cjs.transposeChars,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineUp,module$node_modules$$codemirror$commands$dist$index_cjs.cursorDocStart]);
nextjournal.clojure_mode.commands.indent = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.extensions.formatting.format);
nextjournal.clojure_mode.commands.unwrap = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.unwrap_STAR_);
nextjournal.clojure_mode.commands.kill = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.kill_STAR_);
nextjournal.clojure_mode.commands.nav_right = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav((1)));
nextjournal.clojure_mode.commands.nav_left = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav((-1)));
nextjournal.clojure_mode.commands.nav_select_right = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav_select((1)));
nextjournal.clojure_mode.commands.nav_select_left = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav_select((-1)));
nextjournal.clojure_mode.commands.slurp_forward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.slurp((1)));
nextjournal.clojure_mode.commands.slurp_backward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.slurp((-1)));
nextjournal.clojure_mode.commands.barf_forward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.barf((1)));
nextjournal.clojure_mode.commands.barf_backward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.barf((-1)));
nextjournal.clojure_mode.commands.selection_grow = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.extensions.selection_history.selection_grow_STAR_);
nextjournal.clojure_mode.commands.selection_return = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.extensions.selection_history.selection_return_STAR_);
nextjournal.clojure_mode.commands.enter_and_indent = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.enter_and_indent_STAR_);
nextjournal.clojure_mode.commands.paredit_index = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"nav-left","nav-left",845947876),new cljs.core.Keyword(null,"enter-and-indent","enter-and-indent",-1825406873),new cljs.core.Keyword(null,"selection-grow","selection-grow",1627169352),new cljs.core.Keyword(null,"kill","kill",-12335575),new cljs.core.Keyword(null,"slurp-forward","slurp-forward",-866284566),new cljs.core.Keyword(null,"nav-select-right","nav-select-right",-455278613),new cljs.core.Keyword(null,"nav-select-left","nav-select-left",-1033285138),new cljs.core.Keyword(null,"barf-forward","barf-forward",1278612337),new cljs.core.Keyword(null,"barf-backward","barf-backward",434854195),new cljs.core.Keyword(null,"nav-right","nav-right",591041267),new cljs.core.Keyword(null,"slurp-backward","slurp-backward",-1615745159),new cljs.core.Keyword(null,"unwrap","unwrap",-1399175462),new cljs.core.Keyword(null,"selection-return","selection-return",267226206)],[nextjournal.clojure_mode.commands.indent,nextjournal.clojure_mode.commands.nav_left,nextjournal.clojure_mode.commands.enter_and_indent,nextjournal.clojure_mode.commands.selection_grow,nextjournal.clojure_mode.commands.kill,nextjournal.clojure_mode.commands.slurp_forward,nextjournal.clojure_mode.commands.nav_select_right,nextjournal.clojure_mode.commands.nav_select_left,nextjournal.clojure_mode.commands.barf_forward,nextjournal.clojure_mode.commands.barf_backward,nextjournal.clojure_mode.commands.nav_right,nextjournal.clojure_mode.commands.slurp_backward,nextjournal.clojure_mode.commands.unwrap,nextjournal.clojure_mode.commands.selection_return]);
/**
 * Mapping of keyword-id to command functions
 */
nextjournal.clojure_mode.commands.index = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.commands.builtin_index,nextjournal.clojure_mode.commands.paredit_index], 0));
/**
 * Lookup keyword-id by function
 */
nextjournal.clojure_mode.commands.reverse_index = cljs.core.reduce_kv((function (p1__49420_SHARP_,p2__49422_SHARP_,p3__49421_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49420_SHARP_,p3__49421_SHARP_,p2__49422_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,nextjournal.clojure_mode.commands.index);

//# sourceMappingURL=nextjournal.clojure_mode.commands.js.map
