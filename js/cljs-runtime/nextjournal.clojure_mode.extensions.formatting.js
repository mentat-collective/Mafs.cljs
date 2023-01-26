import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.extensions.formatting');
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.formatting.spaces = (function nextjournal$clojure_mode$extensions$formatting$spaces(state,n){
return module$node_modules$$codemirror$language$dist$index_cjs.indentString(state,n);
});
nextjournal.clojure_mode.extensions.formatting.indent_node_props = (function nextjournal$clojure_mode$extensions$formatting$indent_node_props(p__47636){
var map__47639 = p__47636;
var map__47639__$1 = (((((!((map__47639 == null))))?(((((map__47639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47639):map__47639);
var type = map__47639__$1;
var type_name = (function (){var obj47643 = map__47639__$1;
if((!((obj47643 == null)))){
return (obj47643["name"]);
} else {
return undefined;
}
})();
return (function (p__47644){
var map__47645 = p__47644;
var map__47645__$1 = (((((!((map__47645 == null))))?(((((map__47645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47645):map__47645);
var context = map__47645__$1;
var pos = (function (){var obj47648 = map__47645__$1;
if((!((obj47648 == null)))){
return (obj47648["pos"]);
} else {
return undefined;
}
})();
var unit = (function (){var obj47650 = map__47645__$1;
if((!((obj47650 == null)))){
return (obj47650["unit"]);
} else {
return undefined;
}
})();
var node = (function (){var obj47652 = map__47645__$1;
if((!((obj47652 == null)))){
return (obj47652["node"]);
} else {
return undefined;
}
})();
var state = (function (){var obj47654 = map__47645__$1;
if((!((obj47654 == null)))){
return (obj47654["state"]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Program",type_name)){
return (0);
} else {
if(cljs.core.truth_(nextjournal.clojure_mode.node.coll_type_QMARK_(type))){
var G__47657 = context.column(nextjournal.clojure_mode.node.end(nextjournal.clojure_mode.node.down(node)));
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("List",type_name);
if(and__5043__auto__){
var G__47660 = (function (){var G__47661 = node;
var G__47661__$1 = (((G__47661 == null))?null:nextjournal.clojure_mode.node.down(G__47661));
var G__47661__$2 = (((G__47661__$1 == null))?null:nextjournal.clojure_mode.node.right(G__47661__$1));
if((G__47661__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.name(G__47661__$2);
}
})();
var fexpr__47659 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["DefLike",null,"NS",null,"Operator",null], null), null);
return (fexpr__47659.cljs$core$IFn$_invoke$arity$1 ? fexpr__47659.cljs$core$IFn$_invoke$arity$1(G__47660) : fexpr__47659.call(null,G__47660));
} else {
return and__5043__auto__;
}
})())){
return (G__47657 + (1));
} else {
return G__47657;
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
var G__47733 = cljs.core.compare(indent,current_indent);
switch (G__47733) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47733)].join('')));

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
var nodes = cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47735_SHARP_){
return (((((from <= nextjournal.clojure_mode.node.start(p1__47735_SHARP_))) && ((nextjournal.clojure_mode.node.start(p1__47735_SHARP_) <= to)))) || ((((from <= nextjournal.clojure_mode.node.end(p1__47735_SHARP_))) && ((nextjournal.clojure_mode.node.end(p1__47735_SHARP_) <= to)))));
}),nextjournal.clojure_mode.node.terminal_nodes(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),from,to)));
var trim_QMARK_ = (function (){var G__47742 = cljs.core.first(nodes);
var G__47742__$1 = (((G__47742 == null))?null:nextjournal.clojure_mode.node.end(G__47742));
if((G__47742__$1 == null)){
return null;
} else {
return (G__47742__$1 < to);
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,p__47743){
var vec__47744 = p__47743;
var map__47748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47744,(0),null);
var map__47748__$1 = (((((!((map__47748 == null))))?(((((map__47748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47748):map__47748);
var n2 = (function (){var obj47752 = map__47748__$1;
if((!((obj47752 == null)))){
return (obj47752["type"]);
} else {
return undefined;
}
})();
var start2 = (function (){var obj47754 = map__47748__$1;
if((!((obj47754 == null)))){
return (obj47754["from"]);
} else {
return undefined;
}
})();
var end2 = (function (){var obj47755 = map__47748__$1;
if((!((obj47755 == null)))){
return (obj47755["to"]);
} else {
return undefined;
}
})();
var map__47749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47744,(1),null);
var map__47749__$1 = (((((!((map__47749 == null))))?(((((map__47749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47749):map__47749);
var n1 = (function (){var obj47760 = map__47749__$1;
if((!((obj47760 == null)))){
return (obj47760["type"]);
} else {
return undefined;
}
})();
var start1 = (function (){var obj47764 = map__47749__$1;
if((!((obj47764 == null)))){
return (obj47764["from"]);
} else {
return undefined;
}
})();
var end1 = (function (){var obj47767 = map__47749__$1;
if((!((obj47767 == null)))){
return (obj47767["to"]);
} else {
return undefined;
}
})();
var expected = nextjournal.clojure_mode.extensions.formatting.expected_space(n1,n2);
var actual = (start2 - end1);
var G__47771 = cljs.core.compare(actual,expected);
switch (G__47771) {
case (0):
return out;

break;
case (1):
var Array47773 = out;
Array47773.push(({"from": (((expected === (0)))?end1:(end1 + (1))), "to": start2}));

return Array47773;

break;
case (-1):
var Array47775 = out;
Array47775.push(({"from": end1, "insert": " "}));

return Array47775;

break;
default:
return out;

}
}),(cljs.core.truth_(trim_QMARK_)?[({"from":nextjournal.clojure_mode.node.end(cljs.core.first(nodes)),"to":to})]:[]),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),nodes));
});
nextjournal.clojure_mode.extensions.formatting.into_arr = (function nextjournal$clojure_mode$extensions$formatting$into_arr(arr,items){
var seq__47789_47868 = cljs.core.seq(items);
var chunk__47790_47869 = null;
var count__47791_47870 = (0);
var i__47792_47871 = (0);
while(true){
if((i__47792_47871 < count__47791_47870)){
var i_47872 = chunk__47790_47869.cljs$core$IIndexed$_nth$arity$2(null,i__47792_47871);
arr.push(i_47872);


var G__47873 = seq__47789_47868;
var G__47874 = chunk__47790_47869;
var G__47875 = count__47791_47870;
var G__47876 = (i__47792_47871 + (1));
seq__47789_47868 = G__47873;
chunk__47790_47869 = G__47874;
count__47791_47870 = G__47875;
i__47792_47871 = G__47876;
continue;
} else {
var temp__5804__auto___47877 = cljs.core.seq(seq__47789_47868);
if(temp__5804__auto___47877){
var seq__47789_47878__$1 = temp__5804__auto___47877;
if(cljs.core.chunked_seq_QMARK_(seq__47789_47878__$1)){
var c__5568__auto___47879 = cljs.core.chunk_first(seq__47789_47878__$1);
var G__47880 = cljs.core.chunk_rest(seq__47789_47878__$1);
var G__47881 = c__5568__auto___47879;
var G__47882 = cljs.core.count(c__5568__auto___47879);
var G__47883 = (0);
seq__47789_47868 = G__47880;
chunk__47790_47869 = G__47881;
count__47791_47870 = G__47882;
i__47792_47871 = G__47883;
continue;
} else {
var i_47884 = cljs.core.first(seq__47789_47878__$1);
arr.push(i_47884);


var G__47885 = cljs.core.next(seq__47789_47878__$1);
var G__47886 = null;
var G__47887 = (0);
var G__47888 = (0);
seq__47789_47868 = G__47885;
chunk__47790_47869 = G__47886;
count__47791_47870 = G__47887;
i__47792_47871 = G__47888;
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
var indentation_change = (cljs.core.truth_(indent)?(function (){var G__47811 = cljs.core.compare(indent,current_indent);
switch (G__47811) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47811)].join('')));

}
})():null);
var space_changes = (cljs.core.truth_(format_spaces_QMARK_)?nextjournal.clojure_mode.extensions.formatting.space_changes(state,(from + current_indent),(from + cljs.core.count(text))):null);
var G__47814 = changes;
var G__47814__$1 = (cljs.core.truth_(space_changes)?nextjournal.clojure_mode.extensions.formatting.into_arr(G__47814,space_changes):G__47814);
if(cljs.core.truth_(indentation_change)){
var Array47817 = G__47814__$1;
Array47817.push(indentation_change);

return Array47817;
} else {
return G__47814__$1;
}
});
nextjournal.clojure_mode.extensions.formatting.format_selection = (function nextjournal$clojure_mode$extensions$formatting$format_selection(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_selected_lines(state,(function (p__47822,changes,range){
var map__47823 = p__47822;
var map__47823__$1 = (((((!((map__47823 == null))))?(((((map__47823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47823):map__47823);
var line = map__47823__$1;
var from = (function (){var obj47825 = map__47823__$1;
if((!((obj47825 == null)))){
return (obj47825["from"]);
} else {
return undefined;
}
})();
var text = (function (){var obj47826 = map__47823__$1;
if((!((obj47826 == null)))){
return (obj47826["text"]);
} else {
return undefined;
}
})();
var number = (function (){var obj47827 = map__47823__$1;
if((!((obj47827 == null)))){
return (obj47827["number"]);
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
var temp__5802__auto__ = (function (){var G__47830 = origin;
switch (G__47830) {
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
return tr.startState.update((function (){var obj47831 = changes;
var obj47832 = (((!((obj47831 == null))))?obj47831:({}));
(obj47832["filter"] = false);

return obj47832;
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
