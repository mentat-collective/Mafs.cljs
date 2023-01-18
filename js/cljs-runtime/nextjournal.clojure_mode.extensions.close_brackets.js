import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.extensions.close_brackets');
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_ = (function nextjournal$clojure_mode$extensions$close_brackets$in_string_QMARK_(state,pos){
var G__50295 = nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,pos));
var fexpr__50294 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["StringContent",null,"String",null], null), null);
return (fexpr__50294.cljs$core$IFn$_invoke$arity$1 ? fexpr__50294.cljs$core$IFn$_invoke$arity$1(G__50295) : fexpr__50294.call(null,G__50295));
});
nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_ = (function nextjournal$clojure_mode$extensions$close_brackets$escaped_QMARK_(state,pos){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",state.doc.slice((function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (pos - (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),pos).toString());
});
nextjournal.clojure_mode.extensions.close_brackets.backspace_backoff = (function nextjournal$clojure_mode$extensions$close_brackets$backspace_backoff(state,from,to){
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var G__50310 = nextjournal.clojure_mode.node.node_BAR_(state,(from - (1)));
if((G__50310 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__50310,nextjournal.clojure_mode.node.line_comment_QMARK_);
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
nextjournal.clojure_mode.extensions.close_brackets.handle_backspace = (function nextjournal$clojure_mode$extensions$close_brackets$handle_backspace(p__50339){
var map__50340 = p__50339;
var map__50340__$1 = (((((!((map__50340 == null))))?(((((map__50340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50340):map__50340);
var state = map__50340__$1;
var doc = (function (){var obj50349 = map__50340__$1;
if((!((obj50349 == null)))){
return (obj50349["doc"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),state.selection.ranges.length);
if(and__5043__auto__){
var range = (function (){var obj50355 = (function (){var obj50354 = (function (){var obj50353 = state;
if((!((obj50353 == null)))){
return (obj50353["selection"]);
} else {
return undefined;
}
})();
if((!((obj50354 == null)))){
return (obj50354["ranges"]);
} else {
return undefined;
}
})();
if((!((obj50355 == null)))){
return (obj50355[(0)]);
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
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("delete")}),(function (p__50359){
var map__50361 = p__50359;
var map__50361__$1 = (((((!((map__50361 == null))))?(((((map__50361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50361):map__50361);
var range = map__50361__$1;
var head = (function (){var obj50363 = map__50361__$1;
if((!((obj50363 == null)))){
return (obj50363["head"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj50364 = map__50361__$1;
if((!((obj50364 == null)))){
return (obj50364["empty"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj50368 = map__50361__$1;
if((!((obj50368 == null)))){
return (obj50368["anchor"]);
} else {
return undefined;
}
})();
var map__50369 = nextjournal.clojure_mode.util.from_to(head,anchor);
var map__50369__$1 = (((((!((map__50369 == null))))?(((((map__50369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50369):map__50369);
var range__$1 = map__50369__$1;
var from = (function (){var obj50394 = map__50369__$1;
if((!((obj50394 == null)))){
return (obj50394["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj50396 = map__50369__$1;
if((!((obj50396 == null)))){
return (obj50396["to"]);
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
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("input")}),(function (p__50432){
var map__50433 = p__50432;
var map__50433__$1 = (((((!((map__50433 == null))))?(((((map__50433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50433):map__50433);
var from = (function (){var obj50436 = map__50433__$1;
if((!((obj50436 == null)))){
return (obj50436["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj50438 = map__50433__$1;
if((!((obj50438 == null)))){
return (obj50438["to"]);
} else {
return undefined;
}
})();
var head = (function (){var obj50439 = map__50433__$1;
if((!((obj50439 == null)))){
return (obj50439["head"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj50441 = map__50433__$1;
if((!((obj50441 == null)))){
return (obj50441["anchor"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj50443 = map__50433__$1;
if((!((obj50443 == null)))){
return (obj50443["empty"]);
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
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("input")}),(function (p__50445){
var map__50446 = p__50445;
var map__50446__$1 = (((((!((map__50446 == null))))?(((((map__50446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50446):map__50446);
var range = map__50446__$1;
var empty = (function (){var obj50448 = map__50446__$1;
if((!((obj50448 == null)))){
return (obj50448["empty"]);
} else {
return undefined;
}
})();
var head = (function (){var obj50450 = map__50446__$1;
if((!((obj50450 == null)))){
return (obj50450["head"]);
} else {
return undefined;
}
})();
var from = (function (){var obj50451 = map__50446__$1;
if((!((obj50451 == null)))){
return (obj50451["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj50452 = map__50446__$1;
if((!((obj50452 == null)))){
return (obj50452["to"]);
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
var or__5045__auto__ = (function (){var unbalanced = (function (){var G__50454 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,head,(-1));
var G__50454__$1 = (((G__50454 == null))?null:nextjournal.clojure_mode.node.ancestors(G__50454));
var G__50454__$2 = (((G__50454__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,cljs.core.complement(nextjournal.clojure_mode.node.balanced_QMARK_)),G__50454__$1));
if((G__50454__$2 == null)){
return null;
} else {
return cljs.core.first(G__50454__$2);
}
})();
var closing = (function (){var G__50455 = unbalanced;
var G__50455__$1 = (((G__50455 == null))?null:nextjournal.clojure_mode.node.down(G__50455));
if((G__50455__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.closed_by(G__50455__$1);
}
})();
var pos = (function (){var G__50456 = unbalanced;
if((G__50456 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.end(G__50456);
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
nextjournal.clojure_mode.extensions.close_brackets.handle_backspace_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_backspace_cmd(p__50473){
var map__50474 = p__50473;
var map__50474__$1 = (((((!((map__50474 == null))))?(((((map__50474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50474):map__50474);
var view = map__50474__$1;
var state = (function (){var obj50476 = map__50474__$1;
if((!((obj50476 == null)))){
return (obj50476["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_backspace(state));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_open_cmd(key_name){
return (function (p__50477){
var map__50478 = p__50477;
var map__50478__$1 = (((((!((map__50478 == null))))?(((((map__50478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50478):map__50478);
var view = map__50478__$1;
var state = (function (){var obj50513 = map__50478__$1;
if((!((obj50513 == null)))){
return (obj50513["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_open(state,key_name));
});
});
nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_close_cmd(key_name){
return (function (p__50523){
var map__50524 = p__50523;
var map__50524__$1 = (((((!((map__50524 == null))))?(((((map__50524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50524):map__50524);
var view = map__50524__$1;
var state = (function (){var obj50526 = map__50524__$1;
if((!((obj50526 == null)))){
return (obj50526["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_close(state,key_name));
});
});
nextjournal.clojure_mode.extensions.close_brackets.extension = (function nextjournal$clojure_mode$extensions$close_brackets$extension(){
return module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":"Backspace","run":(function (p__50531){
var map__50532 = p__50531;
var map__50532__$1 = (((((!((map__50532 == null))))?(((((map__50532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50532):map__50532);
var view = map__50532__$1;
var state = (function (){var obj50534 = map__50532__$1;
if((!((obj50534 == null)))){
return (obj50534["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_backspace(state));
})}),({"key":"(","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("(")}),({"key":"[","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("[")}),({"key":"{","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("{")}),({"key":"\"","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("\"")}),({"key":")","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd(")")}),({"key":"]","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd("]")}),({"key":"}","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd("}")})]);
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.close_brackets.js.map
