import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.commands');
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
nextjournal.clojure_mode.commands.view_command = (function nextjournal$clojure_mode$commands$view_command(f){
return (function (p__50483){
var map__50484 = p__50483;
var map__50484__$1 = (((((!((map__50484 == null))))?(((((map__50484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50484):map__50484);
var state = (function (){var obj50487 = map__50484__$1;
if((!((obj50487 == null)))){
return (obj50487["state"]);
} else {
return undefined;
}
})();
var dispatch = (function (){var obj50488 = map__50484__$1;
if((!((obj50488 == null)))){
return (obj50488["dispatch"]);
} else {
return undefined;
}
})();
var G__50493_50664 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(state) : f.call(null,state));
if((G__50493_50664 == null)){
} else {
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__50493_50664) : dispatch.call(null,G__50493_50664));
}

return true;
});
});
nextjournal.clojure_mode.commands.unwrap_STAR_ = (function nextjournal$clojure_mode$commands$unwrap_STAR_(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__50512){
var map__50515 = p__50512;
var map__50515__$1 = (((((!((map__50515 == null))))?(((((map__50515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50515):map__50515);
var range = map__50515__$1;
var from = (function (){var obj50519 = map__50515__$1;
if((!((obj50519 == null)))){
return (obj50519["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj50520 = map__50515__$1;
if((!((obj50520 == null)))){
return (obj50520["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj50521 = map__50515__$1;
if((!((obj50521 == null)))){
return (obj50521["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5804__auto__ = (function (){var G__50522 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,from,(-1));
var G__50522__$1 = (((G__50522 == null))?null:nextjournal.clojure_mode.node.closest(G__50522,nextjournal.clojure_mode.node.coll_QMARK_));
if((G__50522__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__50522__$1,nextjournal.clojure_mode.node.balanced_QMARK_);
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
var focus_el = (function (){var obj50529 = document;
if((!((obj50529 == null)))){
return (obj50529["activeElement"]);
} else {
return undefined;
}
})();
var input_el = document.createElement("textarea");
input_el.setAttribute("class","clipboard-input");

var obj50543_50665 = input_el;
var obj50544_50666 = (((!((obj50543_50665 == null))))?obj50543_50665:({}));
(obj50544_50666["innerHTML"] = text);


document.body.appendChild(input_el);

input_el.focus(({"preventScroll": true}));

input_el.select();

document.execCommand("copy");

focus_el.focus(({"preventScroll": true}));

return document.body.removeChild(input_el);
});
nextjournal.clojure_mode.commands.kill_STAR_ = (function nextjournal$clojure_mode$commands$kill_STAR_(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__50553){
var map__50555 = p__50553;
var map__50555__$1 = (((((!((map__50555 == null))))?(((((map__50555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50555):map__50555);
var range = map__50555__$1;
var from = (function (){var obj50561 = map__50555__$1;
if((!((obj50561 == null)))){
return (obj50561["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj50562 = map__50555__$1;
if((!((obj50562 == null)))){
return (obj50562["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj50564 = map__50555__$1;
if((!((obj50564 == null)))){
return (obj50564["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var node = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from);
var parent = nextjournal.clojure_mode.node.closest(node,(function (p1__50547_SHARP_){
var or__5045__auto__ = nextjournal.clojure_mode.node.coll_QMARK_(p1__50547_SHARP_);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ((nextjournal.clojure_mode.node.string_QMARK_(p1__50547_SHARP_)) || (nextjournal.clojure_mode.node.top_QMARK_(p1__50547_SHARP_)));
}
}));
var line_end = state.doc.lineAt(from).to;
var next_children = (cljs.core.truth_(parent)?nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(parent,from,(1)):null);
var last_child_on_line = (cljs.core.truth_(parent)?(function (){var G__50570 = next_children;
var G__50570__$1 = (((G__50570 == null))?null:cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$1((function (p1__50549_SHARP_){
return (nextjournal.clojure_mode.node.start(p1__50549_SHARP_) <= line_end);
})),G__50570));
if((G__50570__$1 == null)){
return null;
} else {
return cljs.core.last(G__50570__$1);
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
})():(cljs.core.truth_(last_child_on_line)?((nextjournal.clojure_mode.node.end_edge_QMARK_(last_child_on_line))?nextjournal.clojure_mode.node.start(last_child_on_line):nextjournal.clojure_mode.node.end(last_child_on_line)):(cljs.core.truth_((function (){var G__50572 = cljs.core.first(next_children);
var G__50572__$1 = (((G__50572 == null))?null:nextjournal.clojure_mode.node.start(G__50572));
if((G__50572__$1 == null)){
return null;
} else {
return (G__50572__$1 > line_end);
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
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__50574){
var map__50575 = p__50574;
var map__50575__$1 = (((((!((map__50575 == null))))?(((((map__50575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50575):map__50575);
var range = map__50575__$1;
var from = (function (){var obj50577 = map__50575__$1;
if((!((obj50577 == null)))){
return (obj50577["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj50578 = map__50575__$1;
if((!((obj50578 == null)))){
return (obj50578["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj50579 = map__50575__$1;
if((!((obj50579 == null)))){
return (obj50579["empty"]);
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
var or__5045__auto__ = (function (){var G__50588 = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),(function (p1__50583_SHARP_){
var or__5045__auto__ = nextjournal.clojure_mode.node.coll_QMARK_(p1__50583_SHARP_);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ((nextjournal.clojure_mode.node.string_QMARK_(p1__50583_SHARP_)) || (nextjournal.clojure_mode.node.top_QMARK_(p1__50583_SHARP_)));
}
}));
var G__50588__$1 = (((G__50588 == null))?null:nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(G__50588,from,dir));
var G__50588__$2 = (((G__50588__$1 == null))?null:cljs.core.first(G__50588__$1));
if((G__50588__$2 == null)){
return null;
} else {
var obj50589 = G__50588__$2;
if((!((obj50589 == null)))){
return (obj50589[applied_science.js_interop.impl.wrap_key((function (){var G__50596 = dir;
switch (G__50596) {
case (-1):
return new cljs.core.Keyword(null,"from","from",1815293044);

break;
case (1):
return new cljs.core.Keyword(null,"to","to",192099007);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50596)].join('')));

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
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__50604){
var map__50605 = p__50604;
var map__50605__$1 = (((((!((map__50605 == null))))?(((((map__50605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50605):map__50605);
var range = map__50605__$1;
var from = (function (){var obj50607 = map__50605__$1;
if((!((obj50607 == null)))){
return (obj50607["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj50608 = map__50605__$1;
if((!((obj50608 == null)))){
return (obj50608["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj50609 = map__50605__$1;
if((!((obj50609 == null)))){
return (obj50609["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),nextjournal.clojure_mode.commands.nav_position(state,from,dir)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var obj50610 = nextjournal.clojure_mode.util.from_to(from,to);
if((!((obj50610 == null)))){
return (obj50610[applied_science.js_interop.impl.wrap_key((function (){var G__50612 = dir;
switch (G__50612) {
case (-1):
return new cljs.core.Keyword(null,"from","from",1815293044);

break;
case (1):
return new cljs.core.Keyword(null,"to","to",192099007);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50612)].join('')));

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
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__50613){
var map__50614 = p__50613;
var map__50614__$1 = (((((!((map__50614 == null))))?(((((map__50614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50614):map__50614);
var range = map__50614__$1;
var from = (function (){var obj50616 = map__50614__$1;
if((!((obj50616 == null)))){
return (obj50616["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj50617 = map__50614__$1;
if((!((obj50617 == null)))){
return (obj50617["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj50618 = map__50614__$1;
if((!((obj50618 == null)))){
return (obj50618["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,from,nextjournal.clojure_mode.commands.nav_position(state,from,dir))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),(function (){var map__50619 = nextjournal.clojure_mode.util.from_to(from,to);
var map__50619__$1 = (((((!((map__50619 == null))))?(((((map__50619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50619):map__50619);
var from__$1 = (function (){var obj50621 = map__50619__$1;
if((!((obj50621 == null)))){
return (obj50621["from"]);
} else {
return undefined;
}
})();
var to__$1 = (function (){var obj50622 = map__50619__$1;
if((!((obj50622 == null)))){
return (obj50622["to"]);
} else {
return undefined;
}
})();
var G__50623 = dir;
switch (G__50623) {
case (1):
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,from__$1,nextjournal.clojure_mode.commands.nav_position(state,to__$1,dir));

break;
case (-1):
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,nextjournal.clojure_mode.commands.nav_position(state,from__$1,dir),to__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50623)].join('')));

}
})()], null);
}
}));
});
});
nextjournal.clojure_mode.commands.balance_ranges = (function nextjournal$clojure_mode$commands$balance_ranges(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__50624){
var map__50625 = p__50624;
var map__50625__$1 = (((((!((map__50625 == null))))?(((((map__50625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50625):map__50625);
var from = (function (){var obj50627 = map__50625__$1;
if((!((obj50627 == null)))){
return (obj50627["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj50628 = map__50625__$1;
if((!((obj50628 == null)))){
return (obj50628["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj50629 = map__50625__$1;
if((!((obj50629 == null)))){
return (obj50629["empty"]);
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
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__50631){
var map__50632 = p__50631;
var map__50632__$1 = (((((!((map__50632 == null))))?(((((map__50632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50632):map__50632);
var range = map__50632__$1;
var from = (function (){var obj50634 = map__50632__$1;
if((!((obj50634 == null)))){
return (obj50634["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj50635 = map__50632__$1;
if((!((obj50635 == null)))){
return (obj50635["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj50636 = map__50632__$1;
if((!((obj50636 == null)))){
return (obj50636["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5804__auto__ = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,(function (p1__50630_SHARP_){
return cljs.core.not((function (){var G__50637 = direction;
switch (G__50637) {
case (1):
var G__50638 = p1__50630_SHARP_;
var G__50638__$1 = (((G__50638 == null))?null:nextjournal.clojure_mode.node.with_prefix(G__50638));
var G__50638__$2 = (((G__50638__$1 == null))?null:nextjournal.clojure_mode.node.right(G__50638__$1));
if((G__50638__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.end_edge_QMARK_(G__50638__$2);
}

break;
case (-1):
var G__50639 = p1__50630_SHARP_;
var G__50639__$1 = (((G__50639 == null))?null:nextjournal.clojure_mode.node.with_prefix(G__50639));
var G__50639__$2 = (((G__50639__$1 == null))?null:nextjournal.clojure_mode.node.left(G__50639__$1));
if((G__50639__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.start_edge_QMARK_(G__50639__$2);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50637)].join('')));

}
})());
})));
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
var temp__5804__auto____$1 = (function (){var G__50640 = direction;
switch (G__50640) {
case (1):
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,nextjournal.clojure_mode.node.rights(nextjournal.clojure_mode.node.with_prefix(parent))));

break;
case (-1):
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,nextjournal.clojure_mode.node.lefts(nextjournal.clojure_mode.node.with_prefix(parent))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50640)].join('')));

}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var target = temp__5804__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272),from,new cljs.core.Keyword(null,"changes","changes",1492088),(function (){var G__50641 = direction;
switch (G__50641) {
case (1):
var edge = nextjournal.clojure_mode.node.down_last(parent);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.end(target),new cljs.core.Keyword(null,"insert","insert",1286475395),nextjournal.clojure_mode.node.name(edge)], null),(function (){var obj50642 = nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(edge);
var obj50643 = (((!((obj50642 == null))))?obj50642:({}));
(obj50643["insert"] = " ");

return obj50643;
})()], null);

break;
case (-1):
var edge = nextjournal.clojure_mode.node.left_edge_with_prefix(state,parent);
var start = nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.with_prefix(parent));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),start,new cljs.core.Keyword(null,"to","to",192099007),(start + ((edge).length)),new cljs.core.Keyword(null,"insert","insert",1286475395)," "], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.start(target),new cljs.core.Keyword(null,"insert","insert",1286475395),edge], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50641)].join('')));

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
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__50646){
var map__50647 = p__50646;
var map__50647__$1 = (((((!((map__50647 == null))))?(((((map__50647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50647):map__50647);
var range = map__50647__$1;
var from = (function (){var obj50649 = map__50647__$1;
if((!((obj50649 == null)))){
return (obj50649["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj50650 = map__50647__$1;
if((!((obj50650 == null)))){
return (obj50650["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj50651 = map__50647__$1;
if((!((obj50651 == null)))){
return (obj50651["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5804__auto__ = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),nextjournal.clojure_mode.node.coll_QMARK_);
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
var G__50652 = direction;
switch (G__50652) {
case (1):
var temp__5804__auto____$1 = (function (){var G__50653 = nextjournal.clojure_mode.node.down_last(parent);
var G__50653__$1 = (((G__50653 == null))?null:nextjournal.clojure_mode.node.lefts(G__50653));
var G__50653__$2 = (((G__50653__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,G__50653__$1));
var G__50653__$3 = (((G__50653__$2 == null))?null:cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),G__50653__$2));
if((G__50653__$3 == null)){
return null;
} else {
return cljs.core.first(G__50653__$3);
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var target = temp__5804__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var x__5133__auto__ = nextjournal.clojure_mode.node.end(target);
var y__5134__auto__ = from;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})(),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.end(target),new cljs.core.Keyword(null,"insert","insert",1286475395),nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.down_last(parent))], null),(function (){var obj50654 = nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.down_last(parent));
var obj50655 = (((!((obj50654 == null))))?obj50654:({}));
(obj50655["insert"] = " ");

return obj50655;
})()], null)], null);
} else {
return null;
}

break;
case (-1):
var temp__5804__auto____$1 = (function (){var G__50658 = nextjournal.clojure_mode.node.down(parent);
var G__50658__$1 = (((G__50658 == null))?null:nextjournal.clojure_mode.node.rights(G__50658));
var G__50658__$2 = (((G__50658__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,G__50658__$1));
var G__50658__$3 = (((G__50658__$2 == null))?null:cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),G__50658__$2));
if((G__50658__$3 == null)){
return null;
} else {
return cljs.core.first(G__50658__$3);
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50652)].join('')));

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
nextjournal.clojure_mode.commands.reverse_index = cljs.core.reduce_kv((function (p1__50661_SHARP_,p2__50663_SHARP_,p3__50662_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50661_SHARP_,p3__50662_SHARP_,p2__50663_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,nextjournal.clojure_mode.commands.index);

//# sourceMappingURL=nextjournal.clojure_mode.commands.js.map
