import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.extensions.formatting');
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.formatting.spaces = (function nextjournal$clojure_mode$extensions$formatting$spaces(state,n){
return module$node_modules$$codemirror$language$dist$index_cjs.indentString(state,n);
});
nextjournal.clojure_mode.extensions.formatting.indent_node_props = (function nextjournal$clojure_mode$extensions$formatting$indent_node_props(p__49064){
var map__49068 = p__49064;
var map__49068__$1 = (((((!((map__49068 == null))))?(((((map__49068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49068):map__49068);
var type = map__49068__$1;
var type_name = (function (){var obj49070 = map__49068__$1;
if((!((obj49070 == null)))){
return (obj49070["name"]);
} else {
return undefined;
}
})();
return (function (p__49071){
var map__49074 = p__49071;
var map__49074__$1 = (((((!((map__49074 == null))))?(((((map__49074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49074):map__49074);
var context = map__49074__$1;
var pos = (function (){var obj49086 = map__49074__$1;
if((!((obj49086 == null)))){
return (obj49086["pos"]);
} else {
return undefined;
}
})();
var unit = (function (){var obj49087 = map__49074__$1;
if((!((obj49087 == null)))){
return (obj49087["unit"]);
} else {
return undefined;
}
})();
var node = (function (){var obj49088 = map__49074__$1;
if((!((obj49088 == null)))){
return (obj49088["node"]);
} else {
return undefined;
}
})();
var state = (function (){var obj49090 = map__49074__$1;
if((!((obj49090 == null)))){
return (obj49090["state"]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Program",type_name)){
return (0);
} else {
if(cljs.core.truth_(nextjournal.clojure_mode.node.coll_type_QMARK_(type))){
var G__49095 = context.column(nextjournal.clojure_mode.node.end(nextjournal.clojure_mode.node.down(node)));
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("List",type_name);
if(and__5043__auto__){
var G__49100 = (function (){var G__49101 = node;
var G__49101__$1 = (((G__49101 == null))?null:nextjournal.clojure_mode.node.down(G__49101));
var G__49101__$2 = (((G__49101__$1 == null))?null:nextjournal.clojure_mode.node.right(G__49101__$1));
if((G__49101__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.name(G__49101__$2);
}
})();
var fexpr__49099 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["DefLike",null,"NS",null,"Operator",null], null), null);
return (fexpr__49099.cljs$core$IFn$_invoke$arity$1 ? fexpr__49099.cljs$core$IFn$_invoke$arity$1(G__49100) : fexpr__49099.call(null,G__49100));
} else {
return and__5043__auto__;
}
})())){
return (G__49095 + (1));
} else {
return G__49095;
}
} else {
return (-1);

}
}
});
});
nextjournal.clojure_mode.extensions.formatting.props = module$node_modules$$codemirror$language$dist$index_cjs.indentNodeProp.add(nextjournal.clojure_mode.extensions.formatting.indent_node_props);
nextjournal.clojure_mode.extensions.formatting.get_indentation = (function nextjournal$clojure_mode$extensions$formatting$get_indentation(context,pos){
return module$node_modules$$codemirror$language$dist$index_cjs.getIndentation(context.state,pos);
});
nextjournal.clojure_mode.extensions.formatting.make_indent_context = (function nextjournal$clojure_mode$extensions$formatting$make_indent_context(state){
return (new module$node_modules$$codemirror$language$dist$index_cjs.IndentContext(state));
});
nextjournal.clojure_mode.extensions.formatting.indent_all = (function nextjournal$clojure_mode$extensions$formatting$indent_all(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_lines(state,(function (from,content,line_num){
var current_indent = (/^\s*/.exec(content)[(0)]).length;
var indent = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.formatting.get_indentation(context,from),cljs.core.complement(cljs.core.neg_QMARK_));
if(cljs.core.truth_(indent)){
var G__49152 = cljs.core.compare(indent,current_indent);
switch (G__49152) {
case (0):
return null;

break;
case (1):
return ({"from": (from + current_indent), "insert": nextjournal.clojure_mode.extensions.formatting.spaces(state,(indent - current_indent))});

break;
case (-1):
return ({"from": (from + indent), "to": (from + current_indent)});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49152)].join('')));

}
} else {
return null;
}
}));
});
nextjournal.clojure_mode.extensions.formatting.expected_space = (function nextjournal$clojure_mode$extensions$formatting$expected_space(n1,n2){
if(((nextjournal.clojure_mode.node.start_edge_type_QMARK_(n1)) || (((nextjournal.clojure_mode.node.prefix_edge_type_QMARK_(n1)) || (((nextjournal.clojure_mode.node.end_edge_type_QMARK_(n2)) || (nextjournal.clojure_mode.node.same_edge_type_QMARK_(n2)))))))){
return (0);
} else {
return (1);
}
});
nextjournal.clojure_mode.extensions.formatting.space_changes = (function nextjournal$clojure_mode$extensions$formatting$space_changes(state,from,to){
var nodes = cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49158_SHARP_){
return (((((from <= nextjournal.clojure_mode.node.start(p1__49158_SHARP_))) && ((nextjournal.clojure_mode.node.start(p1__49158_SHARP_) <= to)))) || ((((from <= nextjournal.clojure_mode.node.end(p1__49158_SHARP_))) && ((nextjournal.clojure_mode.node.end(p1__49158_SHARP_) <= to)))));
}),nextjournal.clojure_mode.node.terminal_nodes(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),from,to)));
var trim_QMARK_ = (function (){var G__49162 = cljs.core.first(nodes);
var G__49162__$1 = (((G__49162 == null))?null:nextjournal.clojure_mode.node.end(G__49162));
if((G__49162__$1 == null)){
return null;
} else {
return (G__49162__$1 < to);
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,p__49167){
var vec__49168 = p__49167;
var map__49172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49168,(0),null);
var map__49172__$1 = (((((!((map__49172 == null))))?(((((map__49172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49172):map__49172);
var n2 = (function (){var obj49180 = map__49172__$1;
if((!((obj49180 == null)))){
return (obj49180["type"]);
} else {
return undefined;
}
})();
var start2 = (function (){var obj49182 = map__49172__$1;
if((!((obj49182 == null)))){
return (obj49182["from"]);
} else {
return undefined;
}
})();
var end2 = (function (){var obj49185 = map__49172__$1;
if((!((obj49185 == null)))){
return (obj49185["to"]);
} else {
return undefined;
}
})();
var map__49173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49168,(1),null);
var map__49173__$1 = (((((!((map__49173 == null))))?(((((map__49173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49173):map__49173);
var n1 = (function (){var obj49188 = map__49173__$1;
if((!((obj49188 == null)))){
return (obj49188["type"]);
} else {
return undefined;
}
})();
var start1 = (function (){var obj49189 = map__49173__$1;
if((!((obj49189 == null)))){
return (obj49189["from"]);
} else {
return undefined;
}
})();
var end1 = (function (){var obj49192 = map__49173__$1;
if((!((obj49192 == null)))){
return (obj49192["to"]);
} else {
return undefined;
}
})();
var expected = nextjournal.clojure_mode.extensions.formatting.expected_space(n1,n2);
var actual = (start2 - end1);
var G__49193 = cljs.core.compare(actual,expected);
switch (G__49193) {
case (0):
return out;

break;
case (1):
var Array49194 = out;
Array49194.push(({"from": (((expected === (0)))?end1:(end1 + (1))), "to": start2}));

return Array49194;

break;
case (-1):
var Array49195 = out;
Array49195.push(({"from": end1, "insert": " "}));

return Array49195;

break;
default:
return out;

}
}),(cljs.core.truth_(trim_QMARK_)?[({"from":nextjournal.clojure_mode.node.end(cljs.core.first(nodes)),"to":to})]:[]),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),nodes));
});
nextjournal.clojure_mode.extensions.formatting.into_arr = (function nextjournal$clojure_mode$extensions$formatting$into_arr(arr,items){
var seq__49198_49292 = cljs.core.seq(items);
var chunk__49199_49293 = null;
var count__49200_49294 = (0);
var i__49201_49295 = (0);
while(true){
if((i__49201_49295 < count__49200_49294)){
var i_49296 = chunk__49199_49293.cljs$core$IIndexed$_nth$arity$2(null,i__49201_49295);
arr.push(i_49296);


var G__49297 = seq__49198_49292;
var G__49298 = chunk__49199_49293;
var G__49299 = count__49200_49294;
var G__49300 = (i__49201_49295 + (1));
seq__49198_49292 = G__49297;
chunk__49199_49293 = G__49298;
count__49200_49294 = G__49299;
i__49201_49295 = G__49300;
continue;
} else {
var temp__5804__auto___49301 = cljs.core.seq(seq__49198_49292);
if(temp__5804__auto___49301){
var seq__49198_49302__$1 = temp__5804__auto___49301;
if(cljs.core.chunked_seq_QMARK_(seq__49198_49302__$1)){
var c__5568__auto___49303 = cljs.core.chunk_first(seq__49198_49302__$1);
var G__49304 = cljs.core.chunk_rest(seq__49198_49302__$1);
var G__49305 = c__5568__auto___49303;
var G__49306 = cljs.core.count(c__5568__auto___49303);
var G__49307 = (0);
seq__49198_49292 = G__49304;
chunk__49199_49293 = G__49305;
count__49200_49294 = G__49306;
i__49201_49295 = G__49307;
continue;
} else {
var i_49308 = cljs.core.first(seq__49198_49302__$1);
arr.push(i_49308);


var G__49309 = cljs.core.next(seq__49198_49302__$1);
var G__49310 = null;
var G__49311 = (0);
var G__49312 = (0);
seq__49198_49292 = G__49309;
chunk__49199_49293 = G__49310;
count__49200_49294 = G__49311;
i__49201_49295 = G__49312;
continue;
}
} else {
}
}
break;
}

return arr;
});
/**
 * Returns mutated `changes` array
 */
nextjournal.clojure_mode.extensions.formatting.format_line = (function nextjournal$clojure_mode$extensions$formatting$format_line(state,indent_context,from,text,line_num,changes,format_spaces_QMARK_){
if((!((text == null)))){
} else {
throw (new Error("Assert failed: (some? text)"));
}

var current_indent = (/^\s*/.exec(text)[(0)]).length;
var indent = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.formatting.get_indentation(indent_context,from),cljs.core.complement(cljs.core.neg_QMARK_));
var indentation_change = (cljs.core.truth_(indent)?(function (){var G__49212 = cljs.core.compare(indent,current_indent);
switch (G__49212) {
case (0):
return null;

break;
case (1):
return ({"from": (from + current_indent), "insert": nextjournal.clojure_mode.extensions.formatting.spaces(state,(indent - current_indent))});

break;
case (-1):
return ({"from": (from + indent), "to": (from + current_indent)});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49212)].join('')));

}
})():null);
var space_changes = (cljs.core.truth_(format_spaces_QMARK_)?nextjournal.clojure_mode.extensions.formatting.space_changes(state,(from + current_indent),(from + cljs.core.count(text))):null);
var G__49215 = changes;
var G__49215__$1 = (cljs.core.truth_(space_changes)?nextjournal.clojure_mode.extensions.formatting.into_arr(G__49215,space_changes):G__49215);
if(cljs.core.truth_(indentation_change)){
var Array49216 = G__49215__$1;
Array49216.push(indentation_change);

return Array49216;
} else {
return G__49215__$1;
}
});
nextjournal.clojure_mode.extensions.formatting.format_selection = (function nextjournal$clojure_mode$extensions$formatting$format_selection(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_selected_lines(state,(function (p__49218,changes,range){
var map__49219 = p__49218;
var map__49219__$1 = (((((!((map__49219 == null))))?(((((map__49219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49219):map__49219);
var line = map__49219__$1;
var from = (function (){var obj49254 = map__49219__$1;
if((!((obj49254 == null)))){
return (obj49254["from"]);
} else {
return undefined;
}
})();
var text = (function (){var obj49255 = map__49219__$1;
if((!((obj49255 == null)))){
return (obj49255["text"]);
} else {
return undefined;
}
})();
var number = (function (){var obj49256 = map__49219__$1;
if((!((obj49256 == null)))){
return (obj49256["number"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,from,text,number,changes,true);
}));
});
nextjournal.clojure_mode.extensions.formatting.format_all = (function nextjournal$clojure_mode$extensions$formatting$format_all(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_lines(state,(function (from,text,line_num){
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,from,text,line_num,[],true);
}));
});
nextjournal.clojure_mode.extensions.formatting.format_transaction = (function nextjournal$clojure_mode$extensions$formatting$format_transaction(tr){
var origin = nextjournal.clojure_mode.util.get_user_event_annotation(tr);
var temp__5802__auto__ = (function (){var G__49262 = origin;
switch (G__49262) {
case "input":
case "input.type":
case "delete":
case "keyboardselection":
case "pointerselection":
case "select.pointer":
case "cut":
case "noformat":
case "evalregion":
return null;

break;
case "format-selections":
return nextjournal.clojure_mode.extensions.formatting.format_selection(tr.state);

break;
default:
var state = tr.state;
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.iter_changed_lines(tr,(function (line,changes){
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,line.from,line.text,line.number,changes,true);
}));

}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var changes = temp__5802__auto__;
return tr.startState.update((function (){var obj49271 = changes;
var obj49274 = (((!((obj49271 == null))))?obj49271:({}));
(obj49274["filter"] = false);

return obj49274;
})());
} else {
return tr;
}
});
nextjournal.clojure_mode.extensions.formatting.format = (function nextjournal$clojure_mode$extensions$formatting$format(state){
if(nextjournal.clojure_mode.util.something_selected_QMARK_(state)){
return state.update(nextjournal.clojure_mode.extensions.formatting.format_selection(state));
} else {
return nextjournal.clojure_mode.extensions.formatting.format_all(state);
}
});
nextjournal.clojure_mode.extensions.formatting.prefix_all = (function nextjournal$clojure_mode$extensions$formatting$prefix_all(prefix,state){
return nextjournal.clojure_mode.util.update_lines(state,(function (from,_,___$1){
return ({"from": from, "insert": prefix});
}));
});
nextjournal.clojure_mode.extensions.formatting.ext_format_changed_lines = (function nextjournal$clojure_mode$extensions$formatting$ext_format_changed_lines(){
return module$node_modules$$codemirror$state$dist$index_cjs.EditorState.transactionFilter.of(nextjournal.clojure_mode.extensions.formatting.format_transaction);
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.formatting.js.map
