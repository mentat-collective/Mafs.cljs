import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.util');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
/**
 * @define {boolean}
 */
nextjournal.clojure_mode.util.node_js_QMARK_ = goog.define("nextjournal.clojure_mode.util.node_js_QMARK_",false);
nextjournal.clojure_mode.util.user_event_annotation = (function nextjournal$clojure_mode$util$user_event_annotation(event_name){
return module$node_modules$$codemirror$state$dist$index_cjs.Transaction.userEvent.of(event_name);
});
nextjournal.clojure_mode.util.get_user_event_annotation = (function nextjournal$clojure_mode$util$get_user_event_annotation(tr){
return tr.annotation(module$node_modules$$codemirror$state$dist$index_cjs.Transaction.userEvent);
});
nextjournal.clojure_mode.util.guard = (function nextjournal$clojure_mode$util$guard(x,f){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return x;
} else {
return null;
}
});
nextjournal.clojure_mode.util.from_to = (function nextjournal$clojure_mode$util$from_to(p1,p2){
if((p1 > p2)){
return ({"from": p2, "to": p1});
} else {
return ({"from": p1, "to": p2});
}
});
/**
 * If passed a transaction, dispatch to view and return true to stop processing commands.
 */
nextjournal.clojure_mode.util.dispatch_some = (function nextjournal$clojure_mode$util$dispatch_some(view,tr){
if(cljs.core.truth_(tr)){
view.dispatch(tr);

return true;
} else {
return false;
}
});
/**
 * Returns a `change` that inserts string `s` at position `from` and moves cursor to end of insertion.
 */
nextjournal.clojure_mode.util.insertion = (function nextjournal$clojure_mode$util$insertion(var_args){
var G__47491 = arguments.length;
switch (G__47491) {
case 2:
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2 = (function (from,s){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,from,s);
}));

(nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3 = (function (from,to,s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"insert","insert",1286475395),s,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from + ((s).length))], null);
}));

(nextjournal.clojure_mode.util.insertion.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.util.deletion = (function nextjournal$clojure_mode$util$deletion(var_args){
var G__47507 = arguments.length;
switch (G__47507) {
case 1:
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$1 = (function (from){
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2((function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (from - (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),from);
}));

(nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
var from__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to))?(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (from - (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})():from);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from__$1,new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),from__$1,new cljs.core.Keyword(null,"to","to",192099007),to], null)], null);
}));

(nextjournal.clojure_mode.util.deletion.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.util.line_content_at = (function nextjournal$clojure_mode$util$line_content_at(state,from){
var obj__40460__auto__ = (function (){var parent__40467__auto__ = (state["doc"]);
var f__40468__auto__ = (parent__40467__auto__["lineAt"]);
return f__40468__auto__.call(parent__40467__auto__,from);
})();
var f__40461__auto__ = (obj__40460__auto__["slice"]);
return f__40461__auto__.call(obj__40460__auto__);
});
nextjournal.clojure_mode.util.map_cursor = (function nextjournal$clojure_mode$util$map_cursor(original_range,state,update_map){
if(cljs.core.map_QMARK_(update_map)){
} else {
throw (new Error("Assert failed: (map? update-map)"));
}

var map__47512 = nextjournal.clojure_mode.util.guard(update_map,cljs.core.map_QMARK_);
var map__47512__$1 = cljs.core.__destructure_map(map__47512);
var mapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47512__$1,new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47512__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var from_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47512__$1,new cljs.core.Keyword(null,"from-to","from-to",-640428401));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47512__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47512__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
var change_desc = (cljs.core.truth_(changes)?state.changes(cljs.core.clj__GT_js(changes)):null);
var G__47515 = ({"range": (function (){var or__5045__auto__ = range;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (cljs.core.truth_(mapped)?nextjournal.clojure_mode.selections.cursor(change_desc.mapPos(mapped)):(cljs.core.truth_(cursor)?nextjournal.clojure_mode.selections.cursor(cursor):(cljs.core.truth_(from_to)?nextjournal.clojure_mode.selections.range.cljs$core$IFn$_invoke$arity$2((from_to.cljs$core$IFn$_invoke$arity$1 ? from_to.cljs$core$IFn$_invoke$arity$1((0)) : from_to.call(null,(0))),(from_to.cljs$core$IFn$_invoke$arity$1 ? from_to.cljs$core$IFn$_invoke$arity$1((1)) : from_to.call(null,(1)))):null)));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return original_range;
}
}
})()});
if(cljs.core.truth_(change_desc)){
var obj47518 = G__47515;
(obj47518["changes"] = change_desc);

return obj47518;
} else {
return G__47515;
}
});
/**
 * Applies `f` to each range in `state` (see `changeByRange`)
 */
nextjournal.clojure_mode.util.update_ranges = (function nextjournal$clojure_mode$util$update_ranges(var_args){
var G__47522 = arguments.length;
switch (G__47522) {
case 2:
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2 = (function (state,f){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,null,f);
}));

(nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3 = (function (state,tr_specs,f){
return state.update((function (p1__47519_SHARP_){
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(p1__47519_SHARP_,tr_specs);
})(state.changeByRange((function (range){
var or__5045__auto__ = (function (){var temp__5808__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(range) : f.call(null,range));
if((temp__5808__auto__ == null)){
return null;
} else {
var result = temp__5808__auto__;
return nextjournal.clojure_mode.util.map_cursor(range,state,result);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ({"range": range});
}
}))));
}));

(nextjournal.clojure_mode.util.update_ranges.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.util.dispatch_changes = (function nextjournal$clojure_mode$util$dispatch_changes(state,dispatch,changes){
if(cljs.core.truth_(changes.empty)){
return null;
} else {
var G__47523 = state.update(({"changes": changes}));
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__47523) : dispatch.call(null,G__47523));
}
});
nextjournal.clojure_mode.util.update_lines = (function nextjournal$clojure_mode$util$update_lines(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47615 = arguments.length;
var i__5770__auto___47616 = (0);
while(true){
if((i__5770__auto___47616 < len__5769__auto___47615)){
args__5775__auto__.push((arguments[i__5770__auto___47616]));

var G__47617 = (i__5770__auto___47616 + (1));
i__5770__auto___47616 = G__47617;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic = (function (state,f,p__47527){
var vec__47528 = p__47527;
var map__47531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47528,(0),null);
var map__47531__$1 = cljs.core.__destructure_map(map__47531);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47531__$1,new cljs.core.Keyword(null,"from","from",1815293044),(0));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47531__$1,new cljs.core.Keyword(null,"to","to",192099007));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47531__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var iterator = state.doc.iter();
var result = iterator.next();
var changes = [];
var from_pos = from;
var line_num = (1);
while(true){
var map__47539 = result;
var map__47539__$1 = (((((!((map__47539 == null))))?(((((map__47539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47539):map__47539);
var done = (function (){var obj47541 = map__47539__$1;
if((!((obj47541 == null)))){
return (obj47541["done"]);
} else {
return undefined;
}
})();
var lineBreak = (function (){var obj47542 = map__47539__$1;
if((!((obj47542 == null)))){
return (obj47542["lineBreak"]);
} else {
return undefined;
}
})();
var value = (function (){var obj47543 = map__47539__$1;
if((!((obj47543 == null)))){
return (obj47543["value"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var or__5045__auto__ = done;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (from > to);
}
})())){
return state.update(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(({"changes": state.changes(changes)}),spec));
} else {
var G__47618 = iterator.next();
var G__47619 = (function (){var temp__5802__auto__ = (function (){var and__5043__auto__ = cljs.core.not(lineBreak);
if(and__5043__auto__){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(from_pos,value,line_num) : f.call(null,from_pos,value,line_num));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var change = temp__5802__auto__;
var Array47544 = changes;
Array47544.push(change);

return Array47544;
} else {
return changes;
}
})();
var G__47620 = (from_pos + ((value).length));
var G__47621 = (function (){var G__47545 = line_num;
if(cljs.core.truth_(lineBreak)){
return (G__47545 + (1));
} else {
return G__47545;
}
})();
result = G__47618;
changes = G__47619;
from_pos = G__47620;
line_num = G__47621;
continue;
}
break;
}
}));

(nextjournal.clojure_mode.util.update_lines.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.clojure_mode.util.update_lines.cljs$lang$applyTo = (function (seq47524){
var G__47525 = cljs.core.first(seq47524);
var seq47524__$1 = cljs.core.next(seq47524);
var G__47526 = cljs.core.first(seq47524__$1);
var seq47524__$2 = cljs.core.next(seq47524__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47525,G__47526,seq47524__$2);
}));

/**
 * `f` will be called for each selected line with args [line, changes-array, range]
 * and should *mutate* changes-array
 */
nextjournal.clojure_mode.util.update_selected_lines = (function nextjournal$clojure_mode$util$update_selected_lines(state,f){
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var doc = state.doc;
return state.changeByRange((function (p__47547){
var map__47548 = p__47547;
var map__47548__$1 = (((((!((map__47548 == null))))?(((((map__47548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47548):map__47548);
var range = map__47548__$1;
var from = (function (){var obj47550 = map__47548__$1;
if((!((obj47550 == null)))){
return (obj47550["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj47551 = map__47548__$1;
if((!((obj47551 == null)))){
return (obj47551["to"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj47552 = map__47548__$1;
if((!((obj47552 == null)))){
return (obj47552["anchor"]);
} else {
return undefined;
}
})();
var head = (function (){var obj47553 = map__47548__$1;
if((!((obj47553 == null)))){
return (obj47553["head"]);
} else {
return undefined;
}
})();
var changes = [];
var line = doc.lineAt(from);
while(true){
var map__47558 = line;
var map__47558__$1 = (((((!((map__47558 == null))))?(((((map__47558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47558):map__47558);
var line_number = (function (){var obj47560 = map__47558__$1;
if((!((obj47560 == null)))){
return (obj47560["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj47561 = map__47558__$1;
if((!((obj47561 == null)))){
return (obj47561["to"]);
} else {
return undefined;
}
})();
if((line.number > cljs.core.deref(at_line))){
cljs.core.reset_BANG_(at_line,line_number);

(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(line,changes,range) : f.call(null,line,changes,range));
} else {
}

var temp__5802__auto__ = (function (){var and__5043__auto__ = (to > line_to);
if(and__5043__auto__){
return nextjournal.clojure_mode.util.guard(doc.lineAt((line_to + (1))),((function (line,and__5043__auto__,map__47558,map__47558__$1,line_number,line_to,changes,map__47548,map__47548__$1,range,from,to,anchor,head,at_line,doc){
return (function (p1__47546_SHARP_){
return (p1__47546_SHARP_.number > line_number);
});})(line,and__5043__auto__,map__47558,map__47558__$1,line_number,line_to,changes,map__47548,map__47548__$1,range,from,to,anchor,head,at_line,doc))
);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var next_line = temp__5802__auto__;
var G__47622 = next_line;
line = G__47622;
continue;
} else {
var change_set = state.changes(changes);
return ({"changes": changes, "range": module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.range(change_set.mapPos(anchor,(1)),change_set.mapPos(head,(1)))});
}
break;
}
}));
});
/**
 * `f` will be called for each changed line with args [line, changes-array]
 * and should *mutate* changes-array. Selections will be mapped through the resulting changeset.
 */
nextjournal.clojure_mode.util.iter_changed_lines = (function nextjournal$clojure_mode$util$iter_changed_lines(p__47562,f){
var map__47563 = p__47562;
var map__47563__$1 = (((((!((map__47563 == null))))?(((((map__47563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47563):map__47563);
var tr = map__47563__$1;
var map__47564 = (function (){var obj47566 = map__47563__$1;
if((!((obj47566 == null)))){
return (obj47566["state"]);
} else {
return undefined;
}
})();
var map__47564__$1 = (((((!((map__47564 == null))))?(((((map__47564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47564):map__47564);
var state = map__47564__$1;
var doc = (function (){var obj47568 = map__47564__$1;
if((!((obj47568 == null)))){
return (obj47568["doc"]);
} else {
return undefined;
}
})();
var changes = (function (){var obj47569 = map__47563__$1;
if((!((obj47569 == null)))){
return (obj47569["changes"]);
} else {
return undefined;
}
})();
var effects = (function (){var obj47570 = map__47563__$1;
if((!((obj47570 == null)))){
return (obj47570["effects"]);
} else {
return undefined;
}
})();
var selection = (function (){var obj47571 = map__47563__$1;
if((!((obj47571 == null)))){
return (obj47571["selection"]);
} else {
return undefined;
}
})();
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var next_changes = [];
var _ = changes.iterChanges((function (from_a,to_a,from_b,to_b,inserted){
var map__47572 = doc.lineAt(from_b);
var map__47572__$1 = (((((!((map__47572 == null))))?(((((map__47572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47572):map__47572);
var line = map__47572__$1;
var line_number = (function (){var obj47574 = map__47572__$1;
if((!((obj47574 == null)))){
return (obj47574["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj47575 = map__47572__$1;
if((!((obj47575 == null)))){
return (obj47575["to"]);
} else {
return undefined;
}
})();
var line__$1 = line;
while(true){
if((line_number > cljs.core.deref(at_line))){
cljs.core.reset_BANG_(at_line,line_number);

(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(line__$1,next_changes) : f.call(null,line__$1,next_changes));
} else {
}

if((to_b <= line_to)){
return null;
} else {
var next_line = doc.lineAt((line_to + (1)));
if(cljs.core.truth_((function (){var and__5043__auto__ = next_line;
if(cljs.core.truth_(and__5043__auto__)){
return (next_line.number > line__$1.number);
} else {
return and__5043__auto__;
}
})())){
var G__47623 = next_line;
line__$1 = G__47623;
continue;
} else {
return null;
}
}
break;
}
}));
var next_changeset = state.changes(next_changes);
if(cljs.core.seq(next_changes)){
var G__47576 = (function (){var obj47577 = (function (){var obj47578 = tr;
if((!((obj47578 == null)))){
var out47579 = ({});
var k__40367__auto___47624 = "annotations";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__40367__auto___47624,obj47578)){
var obj47582_47625 = out47579;
(obj47582_47625[k__40367__auto___47624] = (obj47578[k__40367__auto___47624]));

} else {
}

var k__40367__auto___47626 = "scrollIntoView";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__40367__auto___47626,obj47578)){
var obj47583_47627 = out47579;
(obj47583_47627[k__40367__auto___47626] = (obj47578[k__40367__auto___47626]));

} else {
}

var k__40367__auto___47628 = "reconfigure";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__40367__auto___47628,obj47578)){
var obj47584_47629 = out47579;
(obj47584_47629[k__40367__auto___47628] = (obj47578[k__40367__auto___47628]));

} else {
}

return out47579;
} else {
return ({});
}
})();
var obj47587 = (((!((obj47577 == null))))?obj47577:({}));
(obj47587["changes"] = changes.compose(next_changeset));

return obj47587;
})();
var G__47576__$1 = (cljs.core.truth_(selection)?(function (){var obj47590 = G__47576;
var obj47591 = (((!((obj47590 == null))))?obj47590:({}));
(obj47591["selection"] = state.selection.map(next_changeset));

return obj47591;
})():G__47576);
if(cljs.core.truth_(effects)){
var obj47594 = G__47576__$1;
var obj47595 = (((!((obj47594 == null))))?obj47594:({}));
(obj47595["effects"] = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.mapEffects(effects,next_changeset));

return obj47595;
} else {
return G__47576__$1;
}
} else {
return tr;
}
});
nextjournal.clojure_mode.util.something_selected_QMARK_ = (function nextjournal$clojure_mode$util$something_selected_QMARK_(p__47599){
var map__47600 = p__47599;
var map__47600__$1 = (((((!((map__47600 == null))))?(((((map__47600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47600):map__47600);
var map__47601 = (function (){var obj47603 = map__47600__$1;
if((!((obj47603 == null)))){
return (obj47603["selection"]);
} else {
return undefined;
}
})();
var map__47601__$1 = (((((!((map__47601 == null))))?(((((map__47601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47601):map__47601);
var ranges = (function (){var obj47605 = map__47601__$1;
if((!((obj47605 == null)))){
return (obj47605["ranges"]);
} else {
return undefined;
}
})();
return (!(cljs.core.every_QMARK_((function (p1__47598_SHARP_){
return p1__47598_SHARP_.empty;
}),ranges)));
});
nextjournal.clojure_mode.util.range_str = (function nextjournal$clojure_mode$util$range_str(state,p__47606){
var map__47607 = p__47606;
var map__47607__$1 = (((((!((map__47607 == null))))?(((((map__47607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47607):map__47607);
var selection = map__47607__$1;
var from = (function (){var obj47609 = map__47607__$1;
if((!((obj47609 == null)))){
return (obj47609["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj47610 = map__47607__$1;
if((!((obj47610 == null)))){
return (obj47610["to"]);
} else {
return undefined;
}
})();
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var parent__40467__auto__ = (state["doc"]);
var f__40468__auto__ = (parent__40467__auto__["slice"]);
return f__40468__auto__.call(parent__40467__auto__,from,to);
})());
});

//# sourceMappingURL=nextjournal.clojure_mode.util.js.map
