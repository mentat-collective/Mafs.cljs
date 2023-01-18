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
var G__48857 = arguments.length;
switch (G__48857) {
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
var G__48859 = arguments.length;
switch (G__48859) {
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

var map__48863 = nextjournal.clojure_mode.util.guard(update_map,cljs.core.map_QMARK_);
var map__48863__$1 = cljs.core.__destructure_map(map__48863);
var mapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48863__$1,new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48863__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var from_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48863__$1,new cljs.core.Keyword(null,"from-to","from-to",-640428401));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48863__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48863__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
var change_desc = (cljs.core.truth_(changes)?state.changes(cljs.core.clj__GT_js(changes)):null);
var G__48864 = ({"range": (function (){var or__5045__auto__ = range;
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
var obj48865 = G__48864;
(obj48865["changes"] = change_desc);

return obj48865;
} else {
return G__48864;
}
});
/**
 * Applies `f` to each range in `state` (see `changeByRange`)
 */
nextjournal.clojure_mode.util.update_ranges = (function nextjournal$clojure_mode$util$update_ranges(var_args){
var G__48868 = arguments.length;
switch (G__48868) {
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
return state.update((function (p1__48866_SHARP_){
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(p1__48866_SHARP_,tr_specs);
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
var G__48874 = state.update(({"changes": changes}));
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__48874) : dispatch.call(null,G__48874));
}
});
nextjournal.clojure_mode.util.update_lines = (function nextjournal$clojure_mode$util$update_lines(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48976 = arguments.length;
var i__5770__auto___48977 = (0);
while(true){
if((i__5770__auto___48977 < len__5769__auto___48976)){
args__5775__auto__.push((arguments[i__5770__auto___48977]));

var G__48978 = (i__5770__auto___48977 + (1));
i__5770__auto___48977 = G__48978;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic = (function (state,f,p__48881){
var vec__48882 = p__48881;
var map__48885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48882,(0),null);
var map__48885__$1 = cljs.core.__destructure_map(map__48885);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48885__$1,new cljs.core.Keyword(null,"from","from",1815293044),(0));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48885__$1,new cljs.core.Keyword(null,"to","to",192099007));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48885__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var iterator = state.doc.iter();
var result = iterator.next();
var changes = [];
var from_pos = from;
var line_num = (1);
while(true){
var map__48895 = result;
var map__48895__$1 = (((((!((map__48895 == null))))?(((((map__48895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48895):map__48895);
var done = (function (){var obj48898 = map__48895__$1;
if((!((obj48898 == null)))){
return (obj48898["done"]);
} else {
return undefined;
}
})();
var lineBreak = (function (){var obj48899 = map__48895__$1;
if((!((obj48899 == null)))){
return (obj48899["lineBreak"]);
} else {
return undefined;
}
})();
var value = (function (){var obj48901 = map__48895__$1;
if((!((obj48901 == null)))){
return (obj48901["value"]);
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
var G__48979 = iterator.next();
var G__48980 = (function (){var temp__5802__auto__ = (function (){var and__5043__auto__ = cljs.core.not(lineBreak);
if(and__5043__auto__){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(from_pos,value,line_num) : f.call(null,from_pos,value,line_num));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var change = temp__5802__auto__;
var Array48903 = changes;
Array48903.push(change);

return Array48903;
} else {
return changes;
}
})();
var G__48981 = (from_pos + ((value).length));
var G__48982 = (function (){var G__48904 = line_num;
if(cljs.core.truth_(lineBreak)){
return (G__48904 + (1));
} else {
return G__48904;
}
})();
result = G__48979;
changes = G__48980;
from_pos = G__48981;
line_num = G__48982;
continue;
}
break;
}
}));

(nextjournal.clojure_mode.util.update_lines.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.clojure_mode.util.update_lines.cljs$lang$applyTo = (function (seq48877){
var G__48878 = cljs.core.first(seq48877);
var seq48877__$1 = cljs.core.next(seq48877);
var G__48879 = cljs.core.first(seq48877__$1);
var seq48877__$2 = cljs.core.next(seq48877__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48878,G__48879,seq48877__$2);
}));

/**
 * `f` will be called for each selected line with args [line, changes-array, range]
 * and should *mutate* changes-array
 */
nextjournal.clojure_mode.util.update_selected_lines = (function nextjournal$clojure_mode$util$update_selected_lines(state,f){
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var doc = state.doc;
return state.changeByRange((function (p__48908){
var map__48909 = p__48908;
var map__48909__$1 = (((((!((map__48909 == null))))?(((((map__48909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48909):map__48909);
var range = map__48909__$1;
var from = (function (){var obj48911 = map__48909__$1;
if((!((obj48911 == null)))){
return (obj48911["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj48912 = map__48909__$1;
if((!((obj48912 == null)))){
return (obj48912["to"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj48913 = map__48909__$1;
if((!((obj48913 == null)))){
return (obj48913["anchor"]);
} else {
return undefined;
}
})();
var head = (function (){var obj48914 = map__48909__$1;
if((!((obj48914 == null)))){
return (obj48914["head"]);
} else {
return undefined;
}
})();
var changes = [];
var line = doc.lineAt(from);
while(true){
var map__48919 = line;
var map__48919__$1 = (((((!((map__48919 == null))))?(((((map__48919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48919):map__48919);
var line_number = (function (){var obj48921 = map__48919__$1;
if((!((obj48921 == null)))){
return (obj48921["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj48922 = map__48919__$1;
if((!((obj48922 == null)))){
return (obj48922["to"]);
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
return nextjournal.clojure_mode.util.guard(doc.lineAt((line_to + (1))),((function (line,and__5043__auto__,map__48919,map__48919__$1,line_number,line_to,changes,map__48909,map__48909__$1,range,from,to,anchor,head,at_line,doc){
return (function (p1__48906_SHARP_){
return (p1__48906_SHARP_.number > line_number);
});})(line,and__5043__auto__,map__48919,map__48919__$1,line_number,line_to,changes,map__48909,map__48909__$1,range,from,to,anchor,head,at_line,doc))
);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var next_line = temp__5802__auto__;
var G__48983 = next_line;
line = G__48983;
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
nextjournal.clojure_mode.util.iter_changed_lines = (function nextjournal$clojure_mode$util$iter_changed_lines(p__48923,f){
var map__48924 = p__48923;
var map__48924__$1 = (((((!((map__48924 == null))))?(((((map__48924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48924):map__48924);
var tr = map__48924__$1;
var map__48925 = (function (){var obj48927 = map__48924__$1;
if((!((obj48927 == null)))){
return (obj48927["state"]);
} else {
return undefined;
}
})();
var map__48925__$1 = (((((!((map__48925 == null))))?(((((map__48925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48925):map__48925);
var state = map__48925__$1;
var doc = (function (){var obj48929 = map__48925__$1;
if((!((obj48929 == null)))){
return (obj48929["doc"]);
} else {
return undefined;
}
})();
var changes = (function (){var obj48930 = map__48924__$1;
if((!((obj48930 == null)))){
return (obj48930["changes"]);
} else {
return undefined;
}
})();
var effects = (function (){var obj48931 = map__48924__$1;
if((!((obj48931 == null)))){
return (obj48931["effects"]);
} else {
return undefined;
}
})();
var selection = (function (){var obj48932 = map__48924__$1;
if((!((obj48932 == null)))){
return (obj48932["selection"]);
} else {
return undefined;
}
})();
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var next_changes = [];
var _ = changes.iterChanges((function (from_a,to_a,from_b,to_b,inserted){
var map__48933 = doc.lineAt(from_b);
var map__48933__$1 = (((((!((map__48933 == null))))?(((((map__48933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48933):map__48933);
var line = map__48933__$1;
var line_number = (function (){var obj48935 = map__48933__$1;
if((!((obj48935 == null)))){
return (obj48935["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj48936 = map__48933__$1;
if((!((obj48936 == null)))){
return (obj48936["to"]);
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
var G__48984 = next_line;
line__$1 = G__48984;
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
var G__48937 = (function (){var obj48938 = (function (){var obj48939 = tr;
if((!((obj48939 == null)))){
var out48940 = ({});
var k__40367__auto___48985 = "annotations";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__40367__auto___48985,obj48939)){
var obj48943_48986 = out48940;
(obj48943_48986[k__40367__auto___48985] = (obj48939[k__40367__auto___48985]));

} else {
}

var k__40367__auto___48987 = "scrollIntoView";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__40367__auto___48987,obj48939)){
var obj48944_48988 = out48940;
(obj48944_48988[k__40367__auto___48987] = (obj48939[k__40367__auto___48987]));

} else {
}

var k__40367__auto___48989 = "reconfigure";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__40367__auto___48989,obj48939)){
var obj48945_48990 = out48940;
(obj48945_48990[k__40367__auto___48989] = (obj48939[k__40367__auto___48989]));

} else {
}

return out48940;
} else {
return ({});
}
})();
var obj48948 = (((!((obj48938 == null))))?obj48938:({}));
(obj48948["changes"] = changes.compose(next_changeset));

return obj48948;
})();
var G__48937__$1 = (cljs.core.truth_(selection)?(function (){var obj48951 = G__48937;
var obj48952 = (((!((obj48951 == null))))?obj48951:({}));
(obj48952["selection"] = state.selection.map(next_changeset));

return obj48952;
})():G__48937);
if(cljs.core.truth_(effects)){
var obj48955 = G__48937__$1;
var obj48956 = (((!((obj48955 == null))))?obj48955:({}));
(obj48956["effects"] = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.mapEffects(effects,next_changeset));

return obj48956;
} else {
return G__48937__$1;
}
} else {
return tr;
}
});
nextjournal.clojure_mode.util.something_selected_QMARK_ = (function nextjournal$clojure_mode$util$something_selected_QMARK_(p__48960){
var map__48961 = p__48960;
var map__48961__$1 = (((((!((map__48961 == null))))?(((((map__48961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48961):map__48961);
var map__48962 = (function (){var obj48964 = map__48961__$1;
if((!((obj48964 == null)))){
return (obj48964["selection"]);
} else {
return undefined;
}
})();
var map__48962__$1 = (((((!((map__48962 == null))))?(((((map__48962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48962):map__48962);
var ranges = (function (){var obj48966 = map__48962__$1;
if((!((obj48966 == null)))){
return (obj48966["ranges"]);
} else {
return undefined;
}
})();
return (!(cljs.core.every_QMARK_((function (p1__48959_SHARP_){
return p1__48959_SHARP_.empty;
}),ranges)));
});
nextjournal.clojure_mode.util.range_str = (function nextjournal$clojure_mode$util$range_str(state,p__48967){
var map__48968 = p__48967;
var map__48968__$1 = (((((!((map__48968 == null))))?(((((map__48968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48968):map__48968);
var selection = map__48968__$1;
var from = (function (){var obj48970 = map__48968__$1;
if((!((obj48970 == null)))){
return (obj48970["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj48971 = map__48968__$1;
if((!((obj48971 == null)))){
return (obj48971["to"]);
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
