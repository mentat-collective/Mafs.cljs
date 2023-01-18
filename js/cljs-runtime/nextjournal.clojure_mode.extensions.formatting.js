import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.extensions.formatting');
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.formatting.spaces = (function nextjournal$clojure_mode$extensions$formatting$spaces(state,n){
return module$node_modules$$codemirror$language$dist$index_cjs.indentString(state,n);
});
nextjournal.clojure_mode.extensions.formatting.indent_node_props = (function nextjournal$clojure_mode$extensions$formatting$indent_node_props(p__47692){
var map__47693 = p__47692;
var map__47693__$1 = (((((!((map__47693 == null))))?(((((map__47693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47693):map__47693);
var type = map__47693__$1;
var type_name = (function (){var obj47698 = map__47693__$1;
if((!((obj47698 == null)))){
return (obj47698["name"]);
} else {
return undefined;
}
})();
return (function (p__47699){
var map__47700 = p__47699;
var map__47700__$1 = (((((!((map__47700 == null))))?(((((map__47700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47700):map__47700);
var context = map__47700__$1;
var pos = (function (){var obj47706 = map__47700__$1;
if((!((obj47706 == null)))){
return (obj47706["pos"]);
} else {
return undefined;
}
})();
var unit = (function (){var obj47707 = map__47700__$1;
if((!((obj47707 == null)))){
return (obj47707["unit"]);
} else {
return undefined;
}
})();
var node = (function (){var obj47708 = map__47700__$1;
if((!((obj47708 == null)))){
return (obj47708["node"]);
} else {
return undefined;
}
})();
var state = (function (){var obj47709 = map__47700__$1;
if((!((obj47709 == null)))){
return (obj47709["state"]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Program",type_name)){
return (0);
} else {
if(cljs.core.truth_(nextjournal.clojure_mode.node.coll_type_QMARK_(type))){
var G__47712 = context.column(nextjournal.clojure_mode.node.end(nextjournal.clojure_mode.node.down(node)));
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("List",type_name);
if(and__5043__auto__){
var G__47715 = (function (){var G__47716 = node;
var G__47716__$1 = (((G__47716 == null))?null:nextjournal.clojure_mode.node.down(G__47716));
var G__47716__$2 = (((G__47716__$1 == null))?null:nextjournal.clojure_mode.node.right(G__47716__$1));
if((G__47716__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.name(G__47716__$2);
}
})();
var fexpr__47714 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["DefLike",null,"NS",null,"Operator",null], null), null);
return (fexpr__47714.cljs$core$IFn$_invoke$arity$1 ? fexpr__47714.cljs$core$IFn$_invoke$arity$1(G__47715) : fexpr__47714.call(null,G__47715));
} else {
return and__5043__auto__;
}
})())){
return (G__47712 + (1));
} else {
return G__47712;
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
var G__47750 = cljs.core.compare(indent,current_indent);
switch (G__47750) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47750)].join('')));

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
var nodes = cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47760_SHARP_){
return (((((from <= nextjournal.clojure_mode.node.start(p1__47760_SHARP_))) && ((nextjournal.clojure_mode.node.start(p1__47760_SHARP_) <= to)))) || ((((from <= nextjournal.clojure_mode.node.end(p1__47760_SHARP_))) && ((nextjournal.clojure_mode.node.end(p1__47760_SHARP_) <= to)))));
}),nextjournal.clojure_mode.node.terminal_nodes(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),from,to)));
var trim_QMARK_ = (function (){var G__47769 = cljs.core.first(nodes);
var G__47769__$1 = (((G__47769 == null))?null:nextjournal.clojure_mode.node.end(G__47769));
if((G__47769__$1 == null)){
return null;
} else {
return (G__47769__$1 < to);
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,p__47771){
var vec__47772 = p__47771;
var map__47777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47772,(0),null);
var map__47777__$1 = (((((!((map__47777 == null))))?(((((map__47777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47777):map__47777);
var n2 = (function (){var obj47784 = map__47777__$1;
if((!((obj47784 == null)))){
return (obj47784["type"]);
} else {
return undefined;
}
})();
var start2 = (function (){var obj47785 = map__47777__$1;
if((!((obj47785 == null)))){
return (obj47785["from"]);
} else {
return undefined;
}
})();
var end2 = (function (){var obj47787 = map__47777__$1;
if((!((obj47787 == null)))){
return (obj47787["to"]);
} else {
return undefined;
}
})();
var map__47778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47772,(1),null);
var map__47778__$1 = (((((!((map__47778 == null))))?(((((map__47778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47778):map__47778);
var n1 = (function (){var obj47790 = map__47778__$1;
if((!((obj47790 == null)))){
return (obj47790["type"]);
} else {
return undefined;
}
})();
var start1 = (function (){var obj47793 = map__47778__$1;
if((!((obj47793 == null)))){
return (obj47793["from"]);
} else {
return undefined;
}
})();
var end1 = (function (){var obj47794 = map__47778__$1;
if((!((obj47794 == null)))){
return (obj47794["to"]);
} else {
return undefined;
}
})();
var expected = nextjournal.clojure_mode.extensions.formatting.expected_space(n1,n2);
var actual = (start2 - end1);
var G__47797 = cljs.core.compare(actual,expected);
switch (G__47797) {
case (0):
return out;

break;
case (1):
var Array47800 = out;
Array47800.push(({"from": (((expected === (0)))?end1:(end1 + (1))), "to": start2}));

return Array47800;

break;
case (-1):
var Array47802 = out;
Array47802.push(({"from": end1, "insert": " "}));

return Array47802;

break;
default:
return out;

}
}),(cljs.core.truth_(trim_QMARK_)?[({"from":nextjournal.clojure_mode.node.end(cljs.core.first(nodes)),"to":to})]:[]),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),nodes));
});
nextjournal.clojure_mode.extensions.formatting.into_arr = (function nextjournal$clojure_mode$extensions$formatting$into_arr(arr,items){
var seq__47817_47888 = cljs.core.seq(items);
var chunk__47818_47889 = null;
var count__47819_47890 = (0);
var i__47820_47891 = (0);
while(true){
if((i__47820_47891 < count__47819_47890)){
var i_47892 = chunk__47818_47889.cljs$core$IIndexed$_nth$arity$2(null,i__47820_47891);
arr.push(i_47892);


var G__47893 = seq__47817_47888;
var G__47894 = chunk__47818_47889;
var G__47895 = count__47819_47890;
var G__47896 = (i__47820_47891 + (1));
seq__47817_47888 = G__47893;
chunk__47818_47889 = G__47894;
count__47819_47890 = G__47895;
i__47820_47891 = G__47896;
continue;
} else {
var temp__5804__auto___47897 = cljs.core.seq(seq__47817_47888);
if(temp__5804__auto___47897){
var seq__47817_47898__$1 = temp__5804__auto___47897;
if(cljs.core.chunked_seq_QMARK_(seq__47817_47898__$1)){
var c__5568__auto___47899 = cljs.core.chunk_first(seq__47817_47898__$1);
var G__47900 = cljs.core.chunk_rest(seq__47817_47898__$1);
var G__47901 = c__5568__auto___47899;
var G__47902 = cljs.core.count(c__5568__auto___47899);
var G__47903 = (0);
seq__47817_47888 = G__47900;
chunk__47818_47889 = G__47901;
count__47819_47890 = G__47902;
i__47820_47891 = G__47903;
continue;
} else {
var i_47904 = cljs.core.first(seq__47817_47898__$1);
arr.push(i_47904);


var G__47905 = cljs.core.next(seq__47817_47898__$1);
var G__47906 = null;
var G__47907 = (0);
var G__47908 = (0);
seq__47817_47888 = G__47905;
chunk__47818_47889 = G__47906;
count__47819_47890 = G__47907;
i__47820_47891 = G__47908;
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
var indentation_change = (cljs.core.truth_(indent)?(function (){var G__47861 = cljs.core.compare(indent,current_indent);
switch (G__47861) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47861)].join('')));

}
})():null);
var space_changes = (cljs.core.truth_(format_spaces_QMARK_)?nextjournal.clojure_mode.extensions.formatting.space_changes(state,(from + current_indent),(from + cljs.core.count(text))):null);
var G__47863 = changes;
var G__47863__$1 = (cljs.core.truth_(space_changes)?nextjournal.clojure_mode.extensions.formatting.into_arr(G__47863,space_changes):G__47863);
if(cljs.core.truth_(indentation_change)){
var Array47865 = G__47863__$1;
Array47865.push(indentation_change);

return Array47865;
} else {
return G__47863__$1;
}
});
nextjournal.clojure_mode.extensions.formatting.format_selection = (function nextjournal$clojure_mode$extensions$formatting$format_selection(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_selected_lines(state,(function (p__47868,changes,range){
var map__47869 = p__47868;
var map__47869__$1 = (((((!((map__47869 == null))))?(((((map__47869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47869):map__47869);
var line = map__47869__$1;
var from = (function (){var obj47871 = map__47869__$1;
if((!((obj47871 == null)))){
return (obj47871["from"]);
} else {
return undefined;
}
})();
var text = (function (){var obj47872 = map__47869__$1;
if((!((obj47872 == null)))){
return (obj47872["text"]);
} else {
return undefined;
}
})();
var number = (function (){var obj47873 = map__47869__$1;
if((!((obj47873 == null)))){
return (obj47873["number"]);
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
var temp__5802__auto__ = (function (){var G__47874 = origin;
switch (G__47874) {
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
return tr.startState.update((function (){var obj47876 = changes;
var obj47877 = (((!((obj47876 == null))))?obj47876:({}));
(obj47877["filter"] = false);

return obj47877;
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
