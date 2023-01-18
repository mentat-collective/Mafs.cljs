import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.extensions.formatting');
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.formatting.spaces = (function nextjournal$clojure_mode$extensions$formatting$spaces(state,n){
return module$node_modules$$codemirror$language$dist$index_cjs.indentString(state,n);
});
nextjournal.clojure_mode.extensions.formatting.indent_node_props = (function nextjournal$clojure_mode$extensions$formatting$indent_node_props(p__50299){
var map__50300 = p__50299;
var map__50300__$1 = (((((!((map__50300 == null))))?(((((map__50300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50300):map__50300);
var type = map__50300__$1;
var type_name = (function (){var obj50302 = map__50300__$1;
if((!((obj50302 == null)))){
return (obj50302["name"]);
} else {
return undefined;
}
})();
return (function (p__50303){
var map__50304 = p__50303;
var map__50304__$1 = (((((!((map__50304 == null))))?(((((map__50304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50304):map__50304);
var context = map__50304__$1;
var pos = (function (){var obj50306 = map__50304__$1;
if((!((obj50306 == null)))){
return (obj50306["pos"]);
} else {
return undefined;
}
})();
var unit = (function (){var obj50308 = map__50304__$1;
if((!((obj50308 == null)))){
return (obj50308["unit"]);
} else {
return undefined;
}
})();
var node = (function (){var obj50309 = map__50304__$1;
if((!((obj50309 == null)))){
return (obj50309["node"]);
} else {
return undefined;
}
})();
var state = (function (){var obj50312 = map__50304__$1;
if((!((obj50312 == null)))){
return (obj50312["state"]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Program",type_name)){
return (0);
} else {
if(cljs.core.truth_(nextjournal.clojure_mode.node.coll_type_QMARK_(type))){
var G__50313 = context.column(nextjournal.clojure_mode.node.end(nextjournal.clojure_mode.node.down(node)));
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("List",type_name);
if(and__5043__auto__){
var G__50315 = (function (){var G__50316 = node;
var G__50316__$1 = (((G__50316 == null))?null:nextjournal.clojure_mode.node.down(G__50316));
var G__50316__$2 = (((G__50316__$1 == null))?null:nextjournal.clojure_mode.node.right(G__50316__$1));
if((G__50316__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.name(G__50316__$2);
}
})();
var fexpr__50314 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["DefLike",null,"NS",null,"Operator",null], null), null);
return (fexpr__50314.cljs$core$IFn$_invoke$arity$1 ? fexpr__50314.cljs$core$IFn$_invoke$arity$1(G__50315) : fexpr__50314.call(null,G__50315));
} else {
return and__5043__auto__;
}
})())){
return (G__50313 + (1));
} else {
return G__50313;
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
var G__50322 = cljs.core.compare(indent,current_indent);
switch (G__50322) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50322)].join('')));

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
var nodes = cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50336_SHARP_){
return (((((from <= nextjournal.clojure_mode.node.start(p1__50336_SHARP_))) && ((nextjournal.clojure_mode.node.start(p1__50336_SHARP_) <= to)))) || ((((from <= nextjournal.clojure_mode.node.end(p1__50336_SHARP_))) && ((nextjournal.clojure_mode.node.end(p1__50336_SHARP_) <= to)))));
}),nextjournal.clojure_mode.node.terminal_nodes(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),from,to)));
var trim_QMARK_ = (function (){var G__50352 = cljs.core.first(nodes);
var G__50352__$1 = (((G__50352 == null))?null:nextjournal.clojure_mode.node.end(G__50352));
if((G__50352__$1 == null)){
return null;
} else {
return (G__50352__$1 < to);
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,p__50370){
var vec__50371 = p__50370;
var map__50375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50371,(0),null);
var map__50375__$1 = (((((!((map__50375 == null))))?(((((map__50375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50375):map__50375);
var n2 = (function (){var obj50386 = map__50375__$1;
if((!((obj50386 == null)))){
return (obj50386["type"]);
} else {
return undefined;
}
})();
var start2 = (function (){var obj50387 = map__50375__$1;
if((!((obj50387 == null)))){
return (obj50387["from"]);
} else {
return undefined;
}
})();
var end2 = (function (){var obj50388 = map__50375__$1;
if((!((obj50388 == null)))){
return (obj50388["to"]);
} else {
return undefined;
}
})();
var map__50376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50371,(1),null);
var map__50376__$1 = (((((!((map__50376 == null))))?(((((map__50376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50376):map__50376);
var n1 = (function (){var obj50392 = map__50376__$1;
if((!((obj50392 == null)))){
return (obj50392["type"]);
} else {
return undefined;
}
})();
var start1 = (function (){var obj50393 = map__50376__$1;
if((!((obj50393 == null)))){
return (obj50393["from"]);
} else {
return undefined;
}
})();
var end1 = (function (){var obj50395 = map__50376__$1;
if((!((obj50395 == null)))){
return (obj50395["to"]);
} else {
return undefined;
}
})();
var expected = nextjournal.clojure_mode.extensions.formatting.expected_space(n1,n2);
var actual = (start2 - end1);
var G__50397 = cljs.core.compare(actual,expected);
switch (G__50397) {
case (0):
return out;

break;
case (1):
var Array50399 = out;
Array50399.push(({"from": (((expected === (0)))?end1:(end1 + (1))), "to": start2}));

return Array50399;

break;
case (-1):
var Array50400 = out;
Array50400.push(({"from": end1, "insert": " "}));

return Array50400;

break;
default:
return out;

}
}),(cljs.core.truth_(trim_QMARK_)?[({"from":nextjournal.clojure_mode.node.end(cljs.core.first(nodes)),"to":to})]:[]),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),nodes));
});
nextjournal.clojure_mode.extensions.formatting.into_arr = (function nextjournal$clojure_mode$extensions$formatting$into_arr(arr,items){
var seq__50403_50489 = cljs.core.seq(items);
var chunk__50404_50490 = null;
var count__50405_50491 = (0);
var i__50406_50492 = (0);
while(true){
if((i__50406_50492 < count__50405_50491)){
var i_50494 = chunk__50404_50490.cljs$core$IIndexed$_nth$arity$2(null,i__50406_50492);
arr.push(i_50494);


var G__50496 = seq__50403_50489;
var G__50497 = chunk__50404_50490;
var G__50498 = count__50405_50491;
var G__50499 = (i__50406_50492 + (1));
seq__50403_50489 = G__50496;
chunk__50404_50490 = G__50497;
count__50405_50491 = G__50498;
i__50406_50492 = G__50499;
continue;
} else {
var temp__5804__auto___50500 = cljs.core.seq(seq__50403_50489);
if(temp__5804__auto___50500){
var seq__50403_50501__$1 = temp__5804__auto___50500;
if(cljs.core.chunked_seq_QMARK_(seq__50403_50501__$1)){
var c__5568__auto___50502 = cljs.core.chunk_first(seq__50403_50501__$1);
var G__50503 = cljs.core.chunk_rest(seq__50403_50501__$1);
var G__50504 = c__5568__auto___50502;
var G__50505 = cljs.core.count(c__5568__auto___50502);
var G__50506 = (0);
seq__50403_50489 = G__50503;
chunk__50404_50490 = G__50504;
count__50405_50491 = G__50505;
i__50406_50492 = G__50506;
continue;
} else {
var i_50507 = cljs.core.first(seq__50403_50501__$1);
arr.push(i_50507);


var G__50508 = cljs.core.next(seq__50403_50501__$1);
var G__50509 = null;
var G__50510 = (0);
var G__50511 = (0);
seq__50403_50489 = G__50508;
chunk__50404_50490 = G__50509;
count__50405_50491 = G__50510;
i__50406_50492 = G__50511;
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
var indentation_change = (cljs.core.truth_(indent)?(function (){var G__50414 = cljs.core.compare(indent,current_indent);
switch (G__50414) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50414)].join('')));

}
})():null);
var space_changes = (cljs.core.truth_(format_spaces_QMARK_)?nextjournal.clojure_mode.extensions.formatting.space_changes(state,(from + current_indent),(from + cljs.core.count(text))):null);
var G__50435 = changes;
var G__50435__$1 = (cljs.core.truth_(space_changes)?nextjournal.clojure_mode.extensions.formatting.into_arr(G__50435,space_changes):G__50435);
if(cljs.core.truth_(indentation_change)){
var Array50437 = G__50435__$1;
Array50437.push(indentation_change);

return Array50437;
} else {
return G__50435__$1;
}
});
nextjournal.clojure_mode.extensions.formatting.format_selection = (function nextjournal$clojure_mode$extensions$formatting$format_selection(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_selected_lines(state,(function (p__50440,changes,range){
var map__50442 = p__50440;
var map__50442__$1 = (((((!((map__50442 == null))))?(((((map__50442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50442):map__50442);
var line = map__50442__$1;
var from = (function (){var obj50449 = map__50442__$1;
if((!((obj50449 == null)))){
return (obj50449["from"]);
} else {
return undefined;
}
})();
var text = (function (){var obj50453 = map__50442__$1;
if((!((obj50453 == null)))){
return (obj50453["text"]);
} else {
return undefined;
}
})();
var number = (function (){var obj50457 = map__50442__$1;
if((!((obj50457 == null)))){
return (obj50457["number"]);
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
var temp__5802__auto__ = (function (){var G__50459 = origin;
switch (G__50459) {
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
return tr.startState.update((function (){var obj50465 = changes;
var obj50467 = (((!((obj50465 == null))))?obj50465:({}));
(obj50467["filter"] = false);

return obj50467;
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
