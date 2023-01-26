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
var G__47410 = arguments.length;
switch (G__47410) {
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
var G__47416 = arguments.length;
switch (G__47416) {
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

var map__47420 = nextjournal.clojure_mode.util.guard(update_map,cljs.core.map_QMARK_);
var map__47420__$1 = cljs.core.__destructure_map(map__47420);
var mapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47420__$1,new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47420__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var from_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47420__$1,new cljs.core.Keyword(null,"from-to","from-to",-640428401));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47420__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47420__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
var change_desc = (cljs.core.truth_(changes)?state.changes(cljs.core.clj__GT_js(changes)):null);
var G__47421 = ({"range": (function (){var or__5045__auto__ = range;
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
var obj47422 = G__47421;
(obj47422["changes"] = change_desc);

return obj47422;
} else {
return G__47421;
}
});
/**
 * Applies `f` to each range in `state` (see `changeByRange`)
 */
nextjournal.clojure_mode.util.update_ranges = (function nextjournal$clojure_mode$util$update_ranges(var_args){
var G__47425 = arguments.length;
switch (G__47425) {
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
return state.update((function (p1__47423_SHARP_){
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(p1__47423_SHARP_,tr_specs);
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
var G__47426 = state.update(({"changes": changes}));
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__47426) : dispatch.call(null,G__47426));
}
});
nextjournal.clojure_mode.util.update_lines = (function nextjournal$clojure_mode$util$update_lines(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47533 = arguments.length;
var i__5770__auto___47534 = (0);
while(true){
if((i__5770__auto___47534 < len__5769__auto___47533)){
args__5775__auto__.push((arguments[i__5770__auto___47534]));

var G__47535 = (i__5770__auto___47534 + (1));
i__5770__auto___47534 = G__47535;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic = (function (state,f,p__47438){
var vec__47439 = p__47438;
var map__47442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47439,(0),null);
var map__47442__$1 = cljs.core.__destructure_map(map__47442);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47442__$1,new cljs.core.Keyword(null,"from","from",1815293044),(0));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47442__$1,new cljs.core.Keyword(null,"to","to",192099007));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47442__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var iterator = state.doc.iter();
var result = iterator.next();
var changes = [];
var from_pos = from;
var line_num = (1);
while(true){
var map__47457 = result;
var map__47457__$1 = (((((!((map__47457 == null))))?(((((map__47457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47457):map__47457);
var done = (function (){var obj47459 = map__47457__$1;
if((!((obj47459 == null)))){
return (obj47459["done"]);
} else {
return undefined;
}
})();
var lineBreak = (function (){var obj47460 = map__47457__$1;
if((!((obj47460 == null)))){
return (obj47460["lineBreak"]);
} else {
return undefined;
}
})();
var value = (function (){var obj47461 = map__47457__$1;
if((!((obj47461 == null)))){
return (obj47461["value"]);
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
var G__47536 = iterator.next();
var G__47537 = (function (){var temp__5802__auto__ = (function (){var and__5043__auto__ = cljs.core.not(lineBreak);
if(and__5043__auto__){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(from_pos,value,line_num) : f.call(null,from_pos,value,line_num));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var change = temp__5802__auto__;
var Array47462 = changes;
Array47462.push(change);

return Array47462;
} else {
return changes;
}
})();
var G__47538 = (from_pos + ((value).length));
var G__47539 = (function (){var G__47463 = line_num;
if(cljs.core.truth_(lineBreak)){
return (G__47463 + (1));
} else {
return G__47463;
}
})();
result = G__47536;
changes = G__47537;
from_pos = G__47538;
line_num = G__47539;
continue;
}
break;
}
}));

(nextjournal.clojure_mode.util.update_lines.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.clojure_mode.util.update_lines.cljs$lang$applyTo = (function (seq47427){
var G__47434 = cljs.core.first(seq47427);
var seq47427__$1 = cljs.core.next(seq47427);
var G__47435 = cljs.core.first(seq47427__$1);
var seq47427__$2 = cljs.core.next(seq47427__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47434,G__47435,seq47427__$2);
}));

/**
 * `f` will be called for each selected line with args [line, changes-array, range]
 * and should *mutate* changes-array
 */
nextjournal.clojure_mode.util.update_selected_lines = (function nextjournal$clojure_mode$util$update_selected_lines(state,f){
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var doc = state.doc;
return state.changeByRange((function (p__47465){
var map__47466 = p__47465;
var map__47466__$1 = (((((!((map__47466 == null))))?(((((map__47466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47466):map__47466);
var range = map__47466__$1;
var from = (function (){var obj47468 = map__47466__$1;
if((!((obj47468 == null)))){
return (obj47468["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj47469 = map__47466__$1;
if((!((obj47469 == null)))){
return (obj47469["to"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj47470 = map__47466__$1;
if((!((obj47470 == null)))){
return (obj47470["anchor"]);
} else {
return undefined;
}
})();
var head = (function (){var obj47471 = map__47466__$1;
if((!((obj47471 == null)))){
return (obj47471["head"]);
} else {
return undefined;
}
})();
var changes = [];
var line = doc.lineAt(from);
while(true){
var map__47476 = line;
var map__47476__$1 = (((((!((map__47476 == null))))?(((((map__47476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47476):map__47476);
var line_number = (function (){var obj47478 = map__47476__$1;
if((!((obj47478 == null)))){
return (obj47478["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj47479 = map__47476__$1;
if((!((obj47479 == null)))){
return (obj47479["to"]);
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
return nextjournal.clojure_mode.util.guard(doc.lineAt((line_to + (1))),((function (line,and__5043__auto__,map__47476,map__47476__$1,line_number,line_to,changes,map__47466,map__47466__$1,range,from,to,anchor,head,at_line,doc){
return (function (p1__47464_SHARP_){
return (p1__47464_SHARP_.number > line_number);
});})(line,and__5043__auto__,map__47476,map__47476__$1,line_number,line_to,changes,map__47466,map__47466__$1,range,from,to,anchor,head,at_line,doc))
);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var next_line = temp__5802__auto__;
var G__47540 = next_line;
line = G__47540;
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
nextjournal.clojure_mode.util.iter_changed_lines = (function nextjournal$clojure_mode$util$iter_changed_lines(p__47480,f){
var map__47481 = p__47480;
var map__47481__$1 = (((((!((map__47481 == null))))?(((((map__47481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47481):map__47481);
var tr = map__47481__$1;
var map__47482 = (function (){var obj47484 = map__47481__$1;
if((!((obj47484 == null)))){
return (obj47484["state"]);
} else {
return undefined;
}
})();
var map__47482__$1 = (((((!((map__47482 == null))))?(((((map__47482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47482):map__47482);
var state = map__47482__$1;
var doc = (function (){var obj47486 = map__47482__$1;
if((!((obj47486 == null)))){
return (obj47486["doc"]);
} else {
return undefined;
}
})();
var changes = (function (){var obj47487 = map__47481__$1;
if((!((obj47487 == null)))){
return (obj47487["changes"]);
} else {
return undefined;
}
})();
var effects = (function (){var obj47488 = map__47481__$1;
if((!((obj47488 == null)))){
return (obj47488["effects"]);
} else {
return undefined;
}
})();
var selection = (function (){var obj47489 = map__47481__$1;
if((!((obj47489 == null)))){
return (obj47489["selection"]);
} else {
return undefined;
}
})();
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var next_changes = [];
var _ = changes.iterChanges((function (from_a,to_a,from_b,to_b,inserted){
var map__47490 = doc.lineAt(from_b);
var map__47490__$1 = (((((!((map__47490 == null))))?(((((map__47490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47490):map__47490);
var line = map__47490__$1;
var line_number = (function (){var obj47492 = map__47490__$1;
if((!((obj47492 == null)))){
return (obj47492["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj47493 = map__47490__$1;
if((!((obj47493 == null)))){
return (obj47493["to"]);
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
var G__47541 = next_line;
line__$1 = G__47541;
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
var G__47494 = (function (){var obj47495 = (function (){var obj47496 = tr;
if((!((obj47496 == null)))){
var out47497 = ({});
var k__40367__auto___47542 = "annotations";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__40367__auto___47542,obj47496)){
var obj47500_47543 = out47497;
(obj47500_47543[k__40367__auto___47542] = (obj47496[k__40367__auto___47542]));

} else {
}

var k__40367__auto___47544 = "scrollIntoView";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__40367__auto___47544,obj47496)){
var obj47501_47545 = out47497;
(obj47501_47545[k__40367__auto___47544] = (obj47496[k__40367__auto___47544]));

} else {
}

var k__40367__auto___47546 = "reconfigure";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__40367__auto___47546,obj47496)){
var obj47502_47547 = out47497;
(obj47502_47547[k__40367__auto___47546] = (obj47496[k__40367__auto___47546]));

} else {
}

return out47497;
} else {
return ({});
}
})();
var obj47505 = (((!((obj47495 == null))))?obj47495:({}));
(obj47505["changes"] = changes.compose(next_changeset));

return obj47505;
})();
var G__47494__$1 = (cljs.core.truth_(selection)?(function (){var obj47508 = G__47494;
var obj47509 = (((!((obj47508 == null))))?obj47508:({}));
(obj47509["selection"] = state.selection.map(next_changeset));

return obj47509;
})():G__47494);
if(cljs.core.truth_(effects)){
var obj47512 = G__47494__$1;
var obj47513 = (((!((obj47512 == null))))?obj47512:({}));
(obj47513["effects"] = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.mapEffects(effects,next_changeset));

return obj47513;
} else {
return G__47494__$1;
}
} else {
return tr;
}
});
nextjournal.clojure_mode.util.something_selected_QMARK_ = (function nextjournal$clojure_mode$util$something_selected_QMARK_(p__47517){
var map__47518 = p__47517;
var map__47518__$1 = (((((!((map__47518 == null))))?(((((map__47518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47518):map__47518);
var map__47519 = (function (){var obj47521 = map__47518__$1;
if((!((obj47521 == null)))){
return (obj47521["selection"]);
} else {
return undefined;
}
})();
var map__47519__$1 = (((((!((map__47519 == null))))?(((((map__47519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47519):map__47519);
var ranges = (function (){var obj47523 = map__47519__$1;
if((!((obj47523 == null)))){
return (obj47523["ranges"]);
} else {
return undefined;
}
})();
return (!(cljs.core.every_QMARK_((function (p1__47516_SHARP_){
return p1__47516_SHARP_.empty;
}),ranges)));
});
nextjournal.clojure_mode.util.range_str = (function nextjournal$clojure_mode$util$range_str(state,p__47524){
var map__47525 = p__47524;
var map__47525__$1 = (((((!((map__47525 == null))))?(((((map__47525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47525):map__47525);
var selection = map__47525__$1;
var from = (function (){var obj47527 = map__47525__$1;
if((!((obj47527 == null)))){
return (obj47527["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj47528 = map__47525__$1;
if((!((obj47528 == null)))){
return (obj47528["to"]);
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
