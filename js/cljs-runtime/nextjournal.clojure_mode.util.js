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
var G__50097 = arguments.length;
switch (G__50097) {
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
var G__50099 = arguments.length;
switch (G__50099) {
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

var map__50102 = nextjournal.clojure_mode.util.guard(update_map,cljs.core.map_QMARK_);
var map__50102__$1 = cljs.core.__destructure_map(map__50102);
var mapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50102__$1,new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50102__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var from_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50102__$1,new cljs.core.Keyword(null,"from-to","from-to",-640428401));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50102__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50102__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
var change_desc = (cljs.core.truth_(changes)?state.changes(cljs.core.clj__GT_js(changes)):null);
var G__50103 = ({"range": (function (){var or__5045__auto__ = range;
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
var obj50104 = G__50103;
(obj50104["changes"] = change_desc);

return obj50104;
} else {
return G__50103;
}
});
/**
 * Applies `f` to each range in `state` (see `changeByRange`)
 */
nextjournal.clojure_mode.util.update_ranges = (function nextjournal$clojure_mode$util$update_ranges(var_args){
var G__50107 = arguments.length;
switch (G__50107) {
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
return state.update((function (p1__50105_SHARP_){
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(p1__50105_SHARP_,tr_specs);
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
var G__50116 = state.update(({"changes": changes}));
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__50116) : dispatch.call(null,G__50116));
}
});
nextjournal.clojure_mode.util.update_lines = (function nextjournal$clojure_mode$util$update_lines(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50214 = arguments.length;
var i__5770__auto___50215 = (0);
while(true){
if((i__5770__auto___50215 < len__5769__auto___50214)){
args__5775__auto__.push((arguments[i__5770__auto___50215]));

var G__50216 = (i__5770__auto___50215 + (1));
i__5770__auto___50215 = G__50216;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic = (function (state,f,p__50122){
var vec__50123 = p__50122;
var map__50126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50123,(0),null);
var map__50126__$1 = cljs.core.__destructure_map(map__50126);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50126__$1,new cljs.core.Keyword(null,"from","from",1815293044),(0));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50126__$1,new cljs.core.Keyword(null,"to","to",192099007));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50126__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var iterator = state.doc.iter();
var result = iterator.next();
var changes = [];
var from_pos = from;
var line_num = (1);
while(true){
var map__50138 = result;
var map__50138__$1 = (((((!((map__50138 == null))))?(((((map__50138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50138):map__50138);
var done = (function (){var obj50140 = map__50138__$1;
if((!((obj50140 == null)))){
return (obj50140["done"]);
} else {
return undefined;
}
})();
var lineBreak = (function (){var obj50141 = map__50138__$1;
if((!((obj50141 == null)))){
return (obj50141["lineBreak"]);
} else {
return undefined;
}
})();
var value = (function (){var obj50142 = map__50138__$1;
if((!((obj50142 == null)))){
return (obj50142["value"]);
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
var G__50217 = iterator.next();
var G__50218 = (function (){var temp__5802__auto__ = (function (){var and__5043__auto__ = cljs.core.not(lineBreak);
if(and__5043__auto__){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(from_pos,value,line_num) : f.call(null,from_pos,value,line_num));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var change = temp__5802__auto__;
var Array50144 = changes;
Array50144.push(change);

return Array50144;
} else {
return changes;
}
})();
var G__50219 = (from_pos + ((value).length));
var G__50220 = (function (){var G__50145 = line_num;
if(cljs.core.truth_(lineBreak)){
return (G__50145 + (1));
} else {
return G__50145;
}
})();
result = G__50217;
changes = G__50218;
from_pos = G__50219;
line_num = G__50220;
continue;
}
break;
}
}));

(nextjournal.clojure_mode.util.update_lines.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.clojure_mode.util.update_lines.cljs$lang$applyTo = (function (seq50117){
var G__50118 = cljs.core.first(seq50117);
var seq50117__$1 = cljs.core.next(seq50117);
var G__50119 = cljs.core.first(seq50117__$1);
var seq50117__$2 = cljs.core.next(seq50117__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50118,G__50119,seq50117__$2);
}));

/**
 * `f` will be called for each selected line with args [line, changes-array, range]
 * and should *mutate* changes-array
 */
nextjournal.clojure_mode.util.update_selected_lines = (function nextjournal$clojure_mode$util$update_selected_lines(state,f){
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var doc = state.doc;
return state.changeByRange((function (p__50147){
var map__50148 = p__50147;
var map__50148__$1 = (((((!((map__50148 == null))))?(((((map__50148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50148):map__50148);
var range = map__50148__$1;
var from = (function (){var obj50150 = map__50148__$1;
if((!((obj50150 == null)))){
return (obj50150["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj50151 = map__50148__$1;
if((!((obj50151 == null)))){
return (obj50151["to"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj50152 = map__50148__$1;
if((!((obj50152 == null)))){
return (obj50152["anchor"]);
} else {
return undefined;
}
})();
var head = (function (){var obj50153 = map__50148__$1;
if((!((obj50153 == null)))){
return (obj50153["head"]);
} else {
return undefined;
}
})();
var changes = [];
var line = doc.lineAt(from);
while(true){
var map__50158 = line;
var map__50158__$1 = (((((!((map__50158 == null))))?(((((map__50158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50158):map__50158);
var line_number = (function (){var obj50160 = map__50158__$1;
if((!((obj50160 == null)))){
return (obj50160["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj50161 = map__50158__$1;
if((!((obj50161 == null)))){
return (obj50161["to"]);
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
return nextjournal.clojure_mode.util.guard(doc.lineAt((line_to + (1))),((function (line,and__5043__auto__,map__50158,map__50158__$1,line_number,line_to,changes,map__50148,map__50148__$1,range,from,to,anchor,head,at_line,doc){
return (function (p1__50146_SHARP_){
return (p1__50146_SHARP_.number > line_number);
});})(line,and__5043__auto__,map__50158,map__50158__$1,line_number,line_to,changes,map__50148,map__50148__$1,range,from,to,anchor,head,at_line,doc))
);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var next_line = temp__5802__auto__;
var G__50222 = next_line;
line = G__50222;
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
nextjournal.clojure_mode.util.iter_changed_lines = (function nextjournal$clojure_mode$util$iter_changed_lines(p__50162,f){
var map__50163 = p__50162;
var map__50163__$1 = (((((!((map__50163 == null))))?(((((map__50163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50163):map__50163);
var tr = map__50163__$1;
var map__50164 = (function (){var obj50166 = map__50163__$1;
if((!((obj50166 == null)))){
return (obj50166["state"]);
} else {
return undefined;
}
})();
var map__50164__$1 = (((((!((map__50164 == null))))?(((((map__50164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50164):map__50164);
var state = map__50164__$1;
var doc = (function (){var obj50168 = map__50164__$1;
if((!((obj50168 == null)))){
return (obj50168["doc"]);
} else {
return undefined;
}
})();
var changes = (function (){var obj50169 = map__50163__$1;
if((!((obj50169 == null)))){
return (obj50169["changes"]);
} else {
return undefined;
}
})();
var effects = (function (){var obj50170 = map__50163__$1;
if((!((obj50170 == null)))){
return (obj50170["effects"]);
} else {
return undefined;
}
})();
var selection = (function (){var obj50171 = map__50163__$1;
if((!((obj50171 == null)))){
return (obj50171["selection"]);
} else {
return undefined;
}
})();
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var next_changes = [];
var _ = changes.iterChanges((function (from_a,to_a,from_b,to_b,inserted){
var map__50172 = doc.lineAt(from_b);
var map__50172__$1 = (((((!((map__50172 == null))))?(((((map__50172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50172):map__50172);
var line = map__50172__$1;
var line_number = (function (){var obj50174 = map__50172__$1;
if((!((obj50174 == null)))){
return (obj50174["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj50175 = map__50172__$1;
if((!((obj50175 == null)))){
return (obj50175["to"]);
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
var G__50223 = next_line;
line__$1 = G__50223;
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
var G__50176 = (function (){var obj50177 = (function (){var obj50178 = tr;
if((!((obj50178 == null)))){
var out50179 = ({});
var k__40367__auto___50224 = "annotations";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__40367__auto___50224,obj50178)){
var obj50182_50225 = out50179;
(obj50182_50225[k__40367__auto___50224] = (obj50178[k__40367__auto___50224]));

} else {
}

var k__40367__auto___50226 = "scrollIntoView";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__40367__auto___50226,obj50178)){
var obj50183_50227 = out50179;
(obj50183_50227[k__40367__auto___50226] = (obj50178[k__40367__auto___50226]));

} else {
}

var k__40367__auto___50228 = "reconfigure";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__40367__auto___50228,obj50178)){
var obj50184_50229 = out50179;
(obj50184_50229[k__40367__auto___50228] = (obj50178[k__40367__auto___50228]));

} else {
}

return out50179;
} else {
return ({});
}
})();
var obj50187 = (((!((obj50177 == null))))?obj50177:({}));
(obj50187["changes"] = changes.compose(next_changeset));

return obj50187;
})();
var G__50176__$1 = (cljs.core.truth_(selection)?(function (){var obj50190 = G__50176;
var obj50191 = (((!((obj50190 == null))))?obj50190:({}));
(obj50191["selection"] = state.selection.map(next_changeset));

return obj50191;
})():G__50176);
if(cljs.core.truth_(effects)){
var obj50194 = G__50176__$1;
var obj50195 = (((!((obj50194 == null))))?obj50194:({}));
(obj50195["effects"] = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.mapEffects(effects,next_changeset));

return obj50195;
} else {
return G__50176__$1;
}
} else {
return tr;
}
});
nextjournal.clojure_mode.util.something_selected_QMARK_ = (function nextjournal$clojure_mode$util$something_selected_QMARK_(p__50199){
var map__50200 = p__50199;
var map__50200__$1 = (((((!((map__50200 == null))))?(((((map__50200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50200):map__50200);
var map__50201 = (function (){var obj50203 = map__50200__$1;
if((!((obj50203 == null)))){
return (obj50203["selection"]);
} else {
return undefined;
}
})();
var map__50201__$1 = (((((!((map__50201 == null))))?(((((map__50201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50201):map__50201);
var ranges = (function (){var obj50205 = map__50201__$1;
if((!((obj50205 == null)))){
return (obj50205["ranges"]);
} else {
return undefined;
}
})();
return (!(cljs.core.every_QMARK_((function (p1__50198_SHARP_){
return p1__50198_SHARP_.empty;
}),ranges)));
});
nextjournal.clojure_mode.util.range_str = (function nextjournal$clojure_mode$util$range_str(state,p__50206){
var map__50207 = p__50206;
var map__50207__$1 = (((((!((map__50207 == null))))?(((((map__50207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50207):map__50207);
var selection = map__50207__$1;
var from = (function (){var obj50209 = map__50207__$1;
if((!((obj50209 == null)))){
return (obj50209["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj50210 = map__50207__$1;
if((!((obj50210 == null)))){
return (obj50210["to"]);
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
