import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.extensions.close_brackets');
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_ = (function nextjournal$clojure_mode$extensions$close_brackets$in_string_QMARK_(state,pos){
var G__49073 = nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,pos));
var fexpr__49072 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["StringContent",null,"String",null], null), null);
return (fexpr__49072.cljs$core$IFn$_invoke$arity$1 ? fexpr__49072.cljs$core$IFn$_invoke$arity$1(G__49073) : fexpr__49072.call(null,G__49073));
});
nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_ = (function nextjournal$clojure_mode$extensions$close_brackets$escaped_QMARK_(state,pos){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",state.doc.slice((function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (pos - (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),pos).toString());
});
nextjournal.clojure_mode.extensions.close_brackets.backspace_backoff = (function nextjournal$clojure_mode$extensions$close_brackets$backspace_backoff(state,from,to){
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var G__49082 = nextjournal.clojure_mode.node.node_BAR_(state,(from - (1)));
if((G__49082 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__49082,nextjournal.clojure_mode.node.line_comment_QMARK_);
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return (!(clojure.string.blank_QMARK_(nextjournal.clojure_mode.util.line_content_at(state,from))));
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from - (1))], null);
} else {
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2(from,to);
}
});
/**
 * - skips over closing brackets
 * - when deleting an opening bracket of an empty list, removes both brackets
 */
nextjournal.clojure_mode.extensions.close_brackets.handle_backspace = (function nextjournal$clojure_mode$extensions$close_brackets$handle_backspace(p__49089){
var map__49094 = p__49089;
var map__49094__$1 = (((((!((map__49094 == null))))?(((((map__49094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49094):map__49094);
var state = map__49094__$1;
var doc = (function (){var obj49103 = map__49094__$1;
if((!((obj49103 == null)))){
return (obj49103["doc"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),state.selection.ranges.length);
if(and__5043__auto__){
var range = (function (){var obj49108 = (function (){var obj49107 = (function (){var obj49106 = state;
if((!((obj49106 == null)))){
return (obj49106["selection"]);
} else {
return undefined;
}
})();
if((!((obj49107 == null)))){
return (obj49107["ranges"]);
} else {
return undefined;
}
})();
if((!((obj49108 == null)))){
return (obj49108[(0)]);
} else {
return undefined;
}
})();
var and__5043__auto____$1 = range.empty;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),range.from);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return null;
} else {
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("delete")}),(function (p__49116){
var map__49117 = p__49116;
var map__49117__$1 = (((((!((map__49117 == null))))?(((((map__49117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49117):map__49117);
var range = map__49117__$1;
var head = (function (){var obj49120 = map__49117__$1;
if((!((obj49120 == null)))){
return (obj49120["head"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj49123 = map__49117__$1;
if((!((obj49123 == null)))){
return (obj49123["empty"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj49125 = map__49117__$1;
if((!((obj49125 == null)))){
return (obj49125["anchor"]);
} else {
return undefined;
}
})();
var map__49126 = nextjournal.clojure_mode.util.from_to(head,anchor);
var map__49126__$1 = (((((!((map__49126 == null))))?(((((map__49126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49126):map__49126);
var range__$1 = map__49126__$1;
var from = (function (){var obj49130 = map__49126__$1;
if((!((obj49130 == null)))){
return (obj49130["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj49131 = map__49126__$1;
if((!((obj49131 == null)))){
return (obj49131["to"]);
} else {
return undefined;
}
})();
var node_BAR_ = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state).resolve(from,(-1));
var parent = node_BAR_.parent;
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.not(empty);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("StringContent",nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,from,(-1))));
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
var and__5043__auto__ = parent;
if(cljs.core.truth_(and__5043__auto__)){
return (((!(nextjournal.clojure_mode.node.balanced_QMARK_(parent)))) && (nextjournal.clojure_mode.node.left_edge_QMARK_(node_BAR_)));
} else {
return and__5043__auto__;
}
}
}
})())){
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2(from,to);
} else {
if(((nextjournal.clojure_mode.node.right_edge_QMARK_(node_BAR_)) && ((from === nextjournal.clojure_mode.node.end(parent))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from - (1))], null);
} else {
if(((((nextjournal.clojure_mode.node.start_edge_QMARK_(node_BAR_)) || (nextjournal.clojure_mode.node.same_edge_QMARK_(node_BAR_)))) && ((nextjournal.clojure_mode.node.start(node_BAR_) === nextjournal.clojure_mode.node.start(parent))))){
if(nextjournal.clojure_mode.node.empty_QMARK_(nextjournal.clojure_mode.node.up(node_BAR_))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),nextjournal.clojure_mode.node.start(parent),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clojure_mode.util.from_to(nextjournal.clojure_mode.node.start(parent),nextjournal.clojure_mode.node.end(parent))], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from], null);
}
} else {
return nextjournal.clojure_mode.extensions.close_brackets.backspace_backoff(state,from,to);

}
}
}
}));
}
});
nextjournal.clojure_mode.extensions.close_brackets.coll_pairs = new cljs.core.PersistentArrayMap(null, 4, ["(",")","[","]","{","}","\"","\""], null);
nextjournal.clojure_mode.extensions.close_brackets.handle_open = (function nextjournal$clojure_mode$extensions$close_brackets$handle_open(state,open){
var close = (nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.cljs$core$IFn$_invoke$arity$1(open) : nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.call(null,open));
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("input")}),(function (p__49143){
var map__49144 = p__49143;
var map__49144__$1 = (((((!((map__49144 == null))))?(((((map__49144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49144):map__49144);
var from = (function (){var obj49161 = map__49144__$1;
if((!((obj49161 == null)))){
return (obj49161["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj49166 = map__49144__$1;
if((!((obj49166 == null)))){
return (obj49166["to"]);
} else {
return undefined;
}
})();
var head = (function (){var obj49177 = map__49144__$1;
if((!((obj49177 == null)))){
return (obj49177["head"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj49184 = map__49144__$1;
if((!((obj49184 == null)))){
return (obj49184["anchor"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj49187 = map__49144__$1;
if((!((obj49187 == null)))){
return (obj49187["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_(state,from))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(open,"\"")){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2(head,"\\\"");
} else {
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,open);
}
} else {
if(nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_(state,from)){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,open);
} else {
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),[open,close].join(''),new cljs.core.Keyword(null,"from","from",1815293044),head], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(head + ((open).length))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),open,new cljs.core.Keyword(null,"from","from",1815293044),from], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),close,new cljs.core.Keyword(null,"from","from",1815293044),to], null)], null),new cljs.core.Keyword(null,"from-to","from-to",-640428401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(anchor + ((open).length)),(head + ((open).length))], null)], null);
}

}
}
}));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_close = (function nextjournal$clojure_mode$extensions$close_brackets$handle_close(state,key_name){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("input")}),(function (p__49204){
var map__49205 = p__49204;
var map__49205__$1 = (((((!((map__49205 == null))))?(((((map__49205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49205):map__49205);
var range = map__49205__$1;
var empty = (function (){var obj49208 = map__49205__$1;
if((!((obj49208 == null)))){
return (obj49208["empty"]);
} else {
return undefined;
}
})();
var head = (function (){var obj49209 = map__49205__$1;
if((!((obj49209 == null)))){
return (obj49209["head"]);
} else {
return undefined;
}
})();
var from = (function (){var obj49210 = map__49205__$1;
if((!((obj49210 == null)))){
return (obj49210["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj49211 = map__49205__$1;
if((!((obj49211 == null)))){
return (obj49211["to"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var or__5045__auto__ = nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_(state,from);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_(state,from);
}
})())){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,key_name);
} else {
if(cljs.core.truth_(empty)){
var or__5045__auto__ = (function (){var unbalanced = (function (){var G__49213 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,head,(-1));
var G__49213__$1 = (((G__49213 == null))?null:nextjournal.clojure_mode.node.ancestors(G__49213));
var G__49213__$2 = (((G__49213__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,cljs.core.complement(nextjournal.clojure_mode.node.balanced_QMARK_)),G__49213__$1));
if((G__49213__$2 == null)){
return null;
} else {
return cljs.core.first(G__49213__$2);
}
})();
var closing = (function (){var G__49214 = unbalanced;
var G__49214__$1 = (((G__49214 == null))?null:nextjournal.clojure_mode.node.down(G__49214));
if((G__49214__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.closed_by(G__49214__$1);
}
})();
var pos = (function (){var G__49217 = unbalanced;
if((G__49217 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.end(G__49217);
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = closing;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(closing,key_name);
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),pos,new cljs.core.Keyword(null,"insert","insert",1286475395),closing], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(pos + (1))], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var temp__5804__auto__ = (function (){var temp__5804__auto__ = nextjournal.clojure_mode.node.terminal_cursor(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),head,(1));
if(cljs.core.truth_(temp__5804__auto__)){
var cursor = temp__5804__auto__;
while(true){
if(nextjournal.clojure_mode.node.right_edge_type_QMARK_(cursor.type)){
return nextjournal.clojure_mode.node.end(cursor);
} else {
if(cljs.core.truth_(cursor.next())){
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var close_node_end = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),close_node_end], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),head], null);
}
}
} else {
return null;
}
}
}));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_backspace_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_backspace_cmd(p__49221){
var map__49225 = p__49221;
var map__49225__$1 = (((((!((map__49225 == null))))?(((((map__49225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49225):map__49225);
var view = map__49225__$1;
var state = (function (){var obj49227 = map__49225__$1;
if((!((obj49227 == null)))){
return (obj49227["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_backspace(state));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_open_cmd(key_name){
return (function (p__49231){
var map__49232 = p__49231;
var map__49232__$1 = (((((!((map__49232 == null))))?(((((map__49232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49232):map__49232);
var view = map__49232__$1;
var state = (function (){var obj49236 = map__49232__$1;
if((!((obj49236 == null)))){
return (obj49236["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_open(state,key_name));
});
});
nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_close_cmd(key_name){
return (function (p__49242){
var map__49244 = p__49242;
var map__49244__$1 = (((((!((map__49244 == null))))?(((((map__49244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49244):map__49244);
var view = map__49244__$1;
var state = (function (){var obj49248 = map__49244__$1;
if((!((obj49248 == null)))){
return (obj49248["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_close(state,key_name));
});
});
nextjournal.clojure_mode.extensions.close_brackets.extension = (function nextjournal$clojure_mode$extensions$close_brackets$extension(){
return module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":"Backspace","run":(function (p__49257){
var map__49258 = p__49257;
var map__49258__$1 = (((((!((map__49258 == null))))?(((((map__49258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49258):map__49258);
var view = map__49258__$1;
var state = (function (){var obj49261 = map__49258__$1;
if((!((obj49261 == null)))){
return (obj49261["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_backspace(state));
})}),({"key":"(","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("(")}),({"key":"[","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("[")}),({"key":"{","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("{")}),({"key":"\"","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("\"")}),({"key":")","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd(")")}),({"key":"]","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd("]")}),({"key":"}","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd("}")})]);
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.close_brackets.js.map
