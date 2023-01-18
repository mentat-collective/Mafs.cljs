import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.node');
var module$node_modules$$lezer$common$dist$index_cjs=shadow.js.require("module$node_modules$$lezer$common$dist$index_cjs", {});
var module$node_modules$lezer_clojure$dist$index_cjs=shadow.js.require("module$node_modules$lezer_clojure$dist$index_cjs", {});
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
nextjournal.clojure_mode.node.coll_prop = module$node_modules$lezer_clojure$dist$index_cjs.props.coll;
nextjournal.clojure_mode.node.prefix_coll_prop = module$node_modules$lezer_clojure$dist$index_cjs.props.prefixColl;
nextjournal.clojure_mode.node.prefix_edge_prop = module$node_modules$lezer_clojure$dist$index_cjs.props.prefixEdge;
nextjournal.clojure_mode.node.prefix_container_prop = module$node_modules$lezer_clojure$dist$index_cjs.props.prefixContainer;
nextjournal.clojure_mode.node.start_edge_prop = module$node_modules$$lezer$common$dist$index_cjs.NodeProp.closedBy;
nextjournal.clojure_mode.node.end_edge_prop = module$node_modules$$lezer$common$dist$index_cjs.NodeProp.openedBy;
nextjournal.clojure_mode.node.same_edge_prop = module$node_modules$lezer_clojure$dist$index_cjs.props.sameEdge;
nextjournal.clojure_mode.node.node_prop = (function nextjournal$clojure_mode$node$node_prop(prop_name){
var G__47612 = prop_name;
switch (G__47612) {
case "prefixColl":
return nextjournal.clojure_mode.node.prefix_coll_prop;

break;
case "coll":
return nextjournal.clojure_mode.node.coll_prop;

break;
case "prefixEdge":
return nextjournal.clojure_mode.node.prefix_edge_prop;

break;
case "prefixContainer":
return nextjournal.clojure_mode.node.prefix_container_prop;

break;
case "sameEdge":
return nextjournal.clojure_mode.node.same_edge_prop;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47612)].join('')));

}
});
nextjournal.clojure_mode.node.type = (function nextjournal$clojure_mode$node$type(node){
return node.type;
});
nextjournal.clojure_mode.node.start = (function nextjournal$clojure_mode$node$start(node){
if(cljs.core.truth_(node.from)){
} else {
throw (new Error("Assert failed: (.-from node)"));
}

return node.from;
});
nextjournal.clojure_mode.node.end = (function nextjournal$clojure_mode$node$end(node){
if(cljs.core.truth_(node.to)){
} else {
throw (new Error("Assert failed: (.-to node)"));
}

return node.to;
});
nextjournal.clojure_mode.node.up = (function nextjournal$clojure_mode$node$up(node){
return node.parent;
});
nextjournal.clojure_mode.node.down = (function nextjournal$clojure_mode$node$down(node){
if((!(cljs.core.fn_QMARK_(node.lastChild)))){
} else {
throw (new Error("Assert failed: (not (fn? (.-lastChild node)))"));
}

return node.firstChild;
});
nextjournal.clojure_mode.node.down_last = (function nextjournal$clojure_mode$node$down_last(node){
if((!(cljs.core.fn_QMARK_(node.lastChild)))){
} else {
throw (new Error("Assert failed: (not (fn? (.-lastChild node)))"));
}

return node.lastChild;
});
nextjournal.clojure_mode.node.depth = (function nextjournal$clojure_mode$node$depth(node){
var node__$1 = node;
var i = (0);
while(true){
var temp__5806__auto__ = nextjournal.clojure_mode.node.up(node__$1);
if((temp__5806__auto__ == null)){
return i;
} else {
var parent = temp__5806__auto__;
var G__47695 = parent;
var G__47696 = (i + (1));
node__$1 = G__47695;
i = G__47696;
continue;
}
break;
}
});
nextjournal.clojure_mode.node.left = (function nextjournal$clojure_mode$node$left(node){
return nextjournal.clojure_mode.node.up(node).childBefore(nextjournal.clojure_mode.node.start(node));
});
nextjournal.clojure_mode.node.lefts = (function nextjournal$clojure_mode$node$lefts(node){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(nextjournal.clojure_mode.node.left,nextjournal.clojure_mode.node.left(node)));
});
nextjournal.clojure_mode.node.right = (function nextjournal$clojure_mode$node$right(node){
return nextjournal.clojure_mode.node.up(node).childAfter(nextjournal.clojure_mode.node.end(node));
});
nextjournal.clojure_mode.node.rights = (function nextjournal$clojure_mode$node$rights(node){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(nextjournal.clojure_mode.node.right,nextjournal.clojure_mode.node.right(node)));
});
nextjournal.clojure_mode.node.coll_type_QMARK_ = (function nextjournal$clojure_mode$node$coll_type_QMARK_(node_type){
return node_type.prop(nextjournal.clojure_mode.node.coll_prop);
});
nextjournal.clojure_mode.node.prefix_type_QMARK_ = (function nextjournal$clojure_mode$node$prefix_type_QMARK_(node_type){
return node_type.prop(nextjournal.clojure_mode.node.prefix_coll_prop);
});
nextjournal.clojure_mode.node.prefix_edge_type_QMARK_ = (function nextjournal$clojure_mode$node$prefix_edge_type_QMARK_(node_type){
return node_type.prop(nextjournal.clojure_mode.node.prefix_edge_prop);
});
nextjournal.clojure_mode.node.prefix_container_type_QMARK_ = (function nextjournal$clojure_mode$node$prefix_container_type_QMARK_(node_type){
return node_type.prop(nextjournal.clojure_mode.node.prefix_container_prop);
});
nextjournal.clojure_mode.node.same_edge_type_QMARK_ = (function nextjournal$clojure_mode$node$same_edge_type_QMARK_(node_type){
return node_type.prop(nextjournal.clojure_mode.node.same_edge_prop);
});
nextjournal.clojure_mode.node.start_edge_type_QMARK_ = (function nextjournal$clojure_mode$node$start_edge_type_QMARK_(node_type){
return node_type.prop(nextjournal.clojure_mode.node.start_edge_prop);
});
nextjournal.clojure_mode.node.end_edge_type_QMARK_ = (function nextjournal$clojure_mode$node$end_edge_type_QMARK_(node_type){
return node_type.prop(nextjournal.clojure_mode.node.end_edge_prop);
});
nextjournal.clojure_mode.node.top_type_QMARK_ = (function nextjournal$clojure_mode$node$top_type_QMARK_(node_type){
return node_type.isTop;
});
nextjournal.clojure_mode.node.error_type_QMARK_ = (function nextjournal$clojure_mode$node$error_type_QMARK_(node_type){
return node_type.isError;
});
nextjournal.clojure_mode.node.prefix_QMARK_ = (function nextjournal$clojure_mode$node$prefix_QMARK_(n){
return nextjournal.clojure_mode.node.prefix_type_QMARK_(nextjournal.clojure_mode.node.type(n));
});
nextjournal.clojure_mode.node.prefix_edge_QMARK_ = (function nextjournal$clojure_mode$node$prefix_edge_QMARK_(n){
return nextjournal.clojure_mode.node.prefix_edge_type_QMARK_(nextjournal.clojure_mode.node.type(n));
});
nextjournal.clojure_mode.node.prefix_container_QMARK_ = (function nextjournal$clojure_mode$node$prefix_container_QMARK_(n){
return nextjournal.clojure_mode.node.prefix_container_type_QMARK_(nextjournal.clojure_mode.node.type(n));
});
nextjournal.clojure_mode.node.same_edge_QMARK_ = (function nextjournal$clojure_mode$node$same_edge_QMARK_(n){
return nextjournal.clojure_mode.node.same_edge_type_QMARK_(nextjournal.clojure_mode.node.type(n));
});
nextjournal.clojure_mode.node.start_edge_QMARK_ = (function nextjournal$clojure_mode$node$start_edge_QMARK_(n){
return nextjournal.clojure_mode.node.start_edge_type_QMARK_(nextjournal.clojure_mode.node.type(n));
});
nextjournal.clojure_mode.node.end_edge_QMARK_ = (function nextjournal$clojure_mode$node$end_edge_QMARK_(n){
return nextjournal.clojure_mode.node.end_edge_type_QMARK_(nextjournal.clojure_mode.node.type(n));
});
nextjournal.clojure_mode.node.left_edge_type_QMARK_ = (function nextjournal$clojure_mode$node$left_edge_type_QMARK_(t){
return ((nextjournal.clojure_mode.node.start_edge_type_QMARK_(t)) || (((nextjournal.clojure_mode.node.same_edge_type_QMARK_(t)) || (nextjournal.clojure_mode.node.prefix_edge_type_QMARK_(t)))));
});
nextjournal.clojure_mode.node.left_edge_QMARK_ = (function nextjournal$clojure_mode$node$left_edge_QMARK_(n){
return nextjournal.clojure_mode.node.left_edge_type_QMARK_(nextjournal.clojure_mode.node.type(n));
});
nextjournal.clojure_mode.node.right_edge_type_QMARK_ = (function nextjournal$clojure_mode$node$right_edge_type_QMARK_(t){
return ((nextjournal.clojure_mode.node.end_edge_type_QMARK_(t)) || (nextjournal.clojure_mode.node.same_edge_type_QMARK_(t)));
});
nextjournal.clojure_mode.node.right_edge_QMARK_ = (function nextjournal$clojure_mode$node$right_edge_QMARK_(n){
return nextjournal.clojure_mode.node.right_edge_type_QMARK_(nextjournal.clojure_mode.node.type(n));
});
nextjournal.clojure_mode.node.edge_QMARK_ = (function nextjournal$clojure_mode$node$edge_QMARK_(n){
var t = nextjournal.clojure_mode.node.type(n);
return ((nextjournal.clojure_mode.node.start_edge_type_QMARK_(t)) || (((nextjournal.clojure_mode.node.end_edge_type_QMARK_(t)) || (((nextjournal.clojure_mode.node.same_edge_type_QMARK_(t)) || (nextjournal.clojure_mode.node.prefix_type_QMARK_(t)))))));
});
nextjournal.clojure_mode.node.closed_by = (function nextjournal$clojure_mode$node$closed_by(n){
var G__47630 = nextjournal.clojure_mode.node.type(n).prop(module$node_modules$$lezer$common$dist$index_cjs.NodeProp.closedBy);
if((G__47630 == null)){
return null;
} else {
return (G__47630[(0)]);
}
});
nextjournal.clojure_mode.node.opened_by = (function nextjournal$clojure_mode$node$opened_by(n){
var G__47631 = nextjournal.clojure_mode.node.type(n).prop(module$node_modules$$lezer$common$dist$index_cjs.NodeProp.openedBy);
if((G__47631 == null)){
return null;
} else {
return (G__47631[(0)]);
}
});
nextjournal.clojure_mode.node.name = (function nextjournal$clojure_mode$node$name(node){
return node.name;
});
nextjournal.clojure_mode.node.error_QMARK_ = (function nextjournal$clojure_mode$node$error_QMARK_(node){
return nextjournal.clojure_mode.node.error_type_QMARK_(node);
});
nextjournal.clojure_mode.node.top_QMARK_ = (function nextjournal$clojure_mode$node$top_QMARK_(node){
return nextjournal.clojure_mode.node.top_type_QMARK_(nextjournal.clojure_mode.node.type(node));
});
nextjournal.clojure_mode.node.string_QMARK_ = (function nextjournal$clojure_mode$node$string_QMARK_(node){
return ("String" === nextjournal.clojure_mode.node.name(node));
});
nextjournal.clojure_mode.node.regexp_QMARK_ = (function nextjournal$clojure_mode$node$regexp_QMARK_(node){
return ("RegExp" === nextjournal.clojure_mode.node.name(node));
});
nextjournal.clojure_mode.node.line_comment_QMARK_ = (function nextjournal$clojure_mode$node$line_comment_QMARK_(node){
return ("LineComment" === nextjournal.clojure_mode.node.name(node));
});
nextjournal.clojure_mode.node.discard_QMARK_ = (function nextjournal$clojure_mode$node$discard_QMARK_(node){
return ("Discard" === nextjournal.clojure_mode.node.name(node));
});
nextjournal.clojure_mode.node.coll_QMARK_ = (function nextjournal$clojure_mode$node$coll_QMARK_(node){
return nextjournal.clojure_mode.node.coll_type_QMARK_(nextjournal.clojure_mode.node.type(node));
});
nextjournal.clojure_mode.node.terminal_type_QMARK_ = (function nextjournal$clojure_mode$node$terminal_type_QMARK_(node_type){
if(nextjournal.clojure_mode.node.top_type_QMARK_(node_type)){
return false;
} else {
if(cljs.core.truth_(node_type.prop(nextjournal.clojure_mode.node.prefix_coll_prop))){
return false;
} else {
if(cljs.core.truth_(node_type.prop(nextjournal.clojure_mode.node.coll_prop))){
return false;
} else {
if(("Meta" === nextjournal.clojure_mode.node.name(node_type))){
return false;
} else {
if(("TaggedLiteral" === nextjournal.clojure_mode.node.name(node_type))){
return false;
} else {
if(("ConstructorCall" === nextjournal.clojure_mode.node.name(node_type))){
return false;
} else {
return true;

}
}
}
}
}
}
});
nextjournal.clojure_mode.node.balanced_QMARK_ = (function nextjournal$clojure_mode$node$balanced_QMARK_(p__47632){
var map__47633 = p__47632;
var map__47633__$1 = (((((!((map__47633 == null))))?(((((map__47633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47633):map__47633);
var node = map__47633__$1;
var firstChild = (function (){var obj47635 = map__47633__$1;
if((!((obj47635 == null)))){
return (obj47635["firstChild"]);
} else {
return undefined;
}
})();
var lastChild = (function (){var obj47636 = map__47633__$1;
if((!((obj47636 == null)))){
return (obj47636["lastChild"]);
} else {
return undefined;
}
})();
var temp__5802__auto__ = nextjournal.clojure_mode.node.closed_by(firstChild);
if(cljs.core.truth_(temp__5802__auto__)){
var closing = temp__5802__auto__;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(closing,nextjournal.clojure_mode.node.name(lastChild))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.end(firstChild),nextjournal.clojure_mode.node.end(lastChild))));
} else {
return true;
}
});
nextjournal.clojure_mode.node.ancestors = (function nextjournal$clojure_mode$node$ancestors(node){
var temp__5808__auto__ = nextjournal.clojure_mode.node.up(node);
if((temp__5808__auto__ == null)){
return null;
} else {
var parent = temp__5808__auto__;
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (nextjournal.clojure_mode.node.ancestors.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clojure_mode.node.ancestors.cljs$core$IFn$_invoke$arity$1(parent) : nextjournal.clojure_mode.node.ancestors.call(null,parent));
}),null,null)));
}
});
nextjournal.clojure_mode.node.closest = (function nextjournal$clojure_mode$node$closest(node,pred){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(node) : pred.call(null,node)))){
return node;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.reduced(x);
} else {
return null;
}
}),null,nextjournal.clojure_mode.node.ancestors(node));
}
});
nextjournal.clojure_mode.node.highest = (function nextjournal$clojure_mode$node$highest(node,pred){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (found,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
return cljs.core.reduced(found);
}
}),null,cljs.core.cons(node,nextjournal.clojure_mode.node.ancestors(node)));
});
nextjournal.clojure_mode.node.children = (function nextjournal$clojure_mode$node$children(var_args){
var G__47638 = arguments.length;
switch (G__47638) {
case 3:
return nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3 = (function (parent,from,dir){
var temp__5808__auto__ = (function (){var G__47639 = dir;
switch (G__47639) {
case (1):
return parent.childAfter(from);

break;
case (-1):
return parent.childBefore(from);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47639)].join('')));

}
})();
if((temp__5808__auto__ == null)){
return null;
} else {
var child = temp__5808__auto__;
return cljs.core.cons(child,(new cljs.core.LazySeq(null,(function (){
return nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(parent,(function (){var G__47640 = dir;
switch (G__47640) {
case (1):
return nextjournal.clojure_mode.node.end(child);

break;
case (-1):
return nextjournal.clojure_mode.node.start(child);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47640)].join('')));

}
})(),dir);
}),null,null)));
}
}));

(nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$1 = (function (subtree){
return nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(subtree,nextjournal.clojure_mode.node.start(subtree),(1));
}));

(nextjournal.clojure_mode.node.children.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.node.eq_QMARK_ = (function nextjournal$clojure_mode$node$eq_QMARK_(x,y){
return (((nextjournal.clojure_mode.node.start(x) === nextjournal.clojure_mode.node.start(y))) && ((((nextjournal.clojure_mode.node.end(x) === nextjournal.clojure_mode.node.end(y))) && ((nextjournal.clojure_mode.node.depth(x) === nextjournal.clojure_mode.node.depth(y))))));
});
/**
 * Node only contains whitespace
 */
nextjournal.clojure_mode.node.empty_QMARK_ = (function nextjournal$clojure_mode$node$empty_QMARK_(node){
var type_name = nextjournal.clojure_mode.node.name(node);
if(cljs.core.truth_(nextjournal.clojure_mode.node.coll_QMARK_(node))){
return nextjournal.clojure_mode.node.eq_QMARK_(nextjournal.clojure_mode.node.right(nextjournal.clojure_mode.node.down(node)),nextjournal.clojure_mode.node.down_last(node));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("String",type_name)){
return (nextjournal.clojure_mode.node.end(nextjournal.clojure_mode.node.down(node)) === nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.down_last(node)));
} else {
return false;

}
}
});
nextjournal.clojure_mode.node.from_to = (function nextjournal$clojure_mode$node$from_to(var_args){
var G__47642 = arguments.length;
switch (G__47642) {
case 2:
return nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return ({"from": from, "to": to});
}));

(nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1 = (function (node){
return nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.start(node),nextjournal.clojure_mode.node.end(node));
}));

(nextjournal.clojure_mode.node.from_to.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.node.range = (function nextjournal$clojure_mode$node$range(node){
return nextjournal.clojure_mode.selections.range.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.start(node),nextjournal.clojure_mode.node.end(node));
});
nextjournal.clojure_mode.node.string = (function nextjournal$clojure_mode$node$string(var_args){
var G__47644 = arguments.length;
switch (G__47644) {
case 2:
return nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$2 = (function (state,node){
return nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$3(state,nextjournal.clojure_mode.node.start(node),nextjournal.clojure_mode.node.end(node));
}));

(nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$3 = (function (state,from,to){
return state.doc.sliceString(from,to,"\n");
}));

(nextjournal.clojure_mode.node.string.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.node.ancestor_QMARK_ = (function nextjournal$clojure_mode$node$ancestor_QMARK_(parent,child){
return cljs.core.boolean$((((nextjournal.clojure_mode.node.start(parent) <= nextjournal.clojure_mode.node.start(child))) && ((((nextjournal.clojure_mode.node.end(parent) >= nextjournal.clojure_mode.node.end(child))) && ((nextjournal.clojure_mode.node.depth(parent) < nextjournal.clojure_mode.node.depth(child)))))));
});
/**
 * Returns next loc moving toward `to-path`, skipping children
 */
nextjournal.clojure_mode.node.move_toward = (function nextjournal$clojure_mode$node$move_toward(node,to_node){
if(nextjournal.clojure_mode.node.eq_QMARK_(node,to_node)){
return null;
} else {
var G__47645 = cljs.core.compare(nextjournal.clojure_mode.node.start(to_node),nextjournal.clojure_mode.node.start(node));
switch (G__47645) {
case (0):
if(nextjournal.clojure_mode.node.ancestor_QMARK_(to_node,node)){
return nextjournal.clojure_mode.node.up(node);
} else {
if(nextjournal.clojure_mode.node.ancestor_QMARK_(node,to_node)){
return nextjournal.clojure_mode.node.down(node);
} else {
return null;
}
}

break;
case (-1):
if(nextjournal.clojure_mode.node.ancestor_QMARK_(node,to_node)){
return nextjournal.clojure_mode.node.down_last(node);
} else {
var or__5045__auto__ = nextjournal.clojure_mode.node.left(node);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return nextjournal.clojure_mode.node.up(node);
}
}

break;
case (1):
if(nextjournal.clojure_mode.node.ancestor_QMARK_(node,to_node)){
return nextjournal.clojure_mode.node.down(node);
} else {
var or__5045__auto__ = nextjournal.clojure_mode.node.right(node);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return nextjournal.clojure_mode.node.up(node);
}
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47645)].join('')));

}
}
});
nextjournal.clojure_mode.node.nodes_between = (function nextjournal$clojure_mode$node$nodes_between(node,to_node){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate((function (p1__47646_SHARP_){
return nextjournal.clojure_mode.node.move_toward(p1__47646_SHARP_,to_node);
}),node));
});
nextjournal.clojure_mode.node.require_balance_QMARK_ = (function nextjournal$clojure_mode$node$require_balance_QMARK_(node){
var or__5045__auto__ = nextjournal.clojure_mode.node.coll_QMARK_(node);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ((nextjournal.clojure_mode.node.string_QMARK_(node)) || (nextjournal.clojure_mode.node.regexp_QMARK_(node)));
}
});
nextjournal.clojure_mode.node.tree = (function nextjournal$clojure_mode$node$tree(var_args){
var G__47648 = arguments.length;
switch (G__47648) {
case 1:
return nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1 = (function (state){
return module$node_modules$$codemirror$language$dist$index_cjs.syntaxTree(state);
}));

(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2 = (function (state,pos){
return module$node_modules$$codemirror$language$dist$index_cjs.syntaxTree(state).resolve(pos);
}));

(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3 = (function (state,pos,dir){
return module$node_modules$$codemirror$language$dist$index_cjs.syntaxTree(state).resolve(pos,dir);
}));

(nextjournal.clojure_mode.node.tree.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.node.cursor = (function nextjournal$clojure_mode$node$cursor(var_args){
var G__47650 = arguments.length;
switch (G__47650) {
case 1:
return nextjournal.clojure_mode.node.cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.node.cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.node.cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.node.cursor.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return tree.cursor();
}));

(nextjournal.clojure_mode.node.cursor.cljs$core$IFn$_invoke$arity$2 = (function (tree,pos){
return tree.cursorAt(pos);
}));

(nextjournal.clojure_mode.node.cursor.cljs$core$IFn$_invoke$arity$3 = (function (tree,pos,dir){
return tree.cursorAt(pos,dir);
}));

(nextjournal.clojure_mode.node.cursor.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.node.terminal_cursor = (function nextjournal$clojure_mode$node$terminal_cursor(tree,pos,dir){
var i = pos;
while(true){
var c = nextjournal.clojure_mode.node.cursor.cljs$core$IFn$_invoke$arity$3(tree,i,dir);
var type = c.type;
if(nextjournal.clojure_mode.node.top_type_QMARK_(type)){
return null;
} else {
if(nextjournal.clojure_mode.node.terminal_type_QMARK_(c.type)){
return c;
} else {
var G__47770 = (dir + i);
i = G__47770;
continue;

}
}
break;
}
});
/**
 * Returns topmost node at same starting position
 */
nextjournal.clojure_mode.node.up_here = (function nextjournal$clojure_mode$node$up_here(node){
var from = nextjournal.clojure_mode.node.start(node);
var or__5045__auto__ = nextjournal.clojure_mode.node.highest(node,(function (p1__47651_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,nextjournal.clojure_mode.node.start(p1__47651_SHARP_));
}));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return node;
}
});
nextjournal.clojure_mode.node.topmost_cursor = (function nextjournal$clojure_mode$node$topmost_cursor(state,from){
return nextjournal.clojure_mode.node.up_here(nextjournal.clojure_mode.node.cursor.cljs$core$IFn$_invoke$arity$3(state,from,(1)).node).cursor();
});
nextjournal.clojure_mode.node.terminal_nodes = (function nextjournal$clojure_mode$node$terminal_nodes(state,from,to){
var cursor = nextjournal.clojure_mode.node.topmost_cursor(state,from);
var found = cljs.core.PersistentVector.EMPTY;
while(true){
var node_type = nextjournal.clojure_mode.node.type(cursor);
if((nextjournal.clojure_mode.node.start(cursor) > to)){
return found;
} else {
if(((nextjournal.clojure_mode.node.terminal_type_QMARK_(node_type)) || (nextjournal.clojure_mode.node.error_QMARK_(node_type)))){
var found__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,({"type": node_type, "from": nextjournal.clojure_mode.node.start(cursor), "to": nextjournal.clojure_mode.node.end(cursor)}));
cursor.lastChild();

if(cljs.core.truth_(cursor.next())){
var G__47780 = found__$1;
found = G__47780;
continue;
} else {
return found__$1;
}
} else {
if(cljs.core.truth_(cursor.next())){
var G__47781 = found;
found = G__47781;
continue;
} else {
return found;
}

}
}
break;
}
});
nextjournal.clojure_mode.node.balanced_range = (function nextjournal$clojure_mode$node$balanced_range(var_args){
var G__47654 = arguments.length;
switch (G__47654) {
case 2:
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$2 = (function (state,node){
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,nextjournal.clojure_mode.node.start(node),nextjournal.clojure_mode.node.end(node));
}));

(nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3 = (function (state,from,to){
var vec__47655 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null));
var from__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47655,(0),null);
var to__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47655,(1),null);
var from_node = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,from__$1,(1));
var to_node = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,to__$1,(-1));
var from__$2 = (cljs.core.truth_(nextjournal.clojure_mode.node.require_balance_QMARK_(from_node))?nextjournal.clojure_mode.node.start(from_node):from__$1);
var to__$2 = (cljs.core.truth_(nextjournal.clojure_mode.node.require_balance_QMARK_(to_node))?nextjournal.clojure_mode.node.end(to_node):to__$1);
var vec__47658 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__47661,node_between){
var vec__47662 = p__47661;
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47662,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47662,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((nextjournal.clojure_mode.node.ancestor_QMARK_(node_between,from_node))?nextjournal.clojure_mode.node.start(node_between):left),((nextjournal.clojure_mode.node.ancestor_QMARK_(node_between,to_node))?nextjournal.clojure_mode.node.end(node_between):right)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from__$2,to__$2], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47652_SHARP_){
var G__47665 = p1__47652_SHARP_;
if(nextjournal.clojure_mode.node.edge_QMARK_(p1__47652_SHARP_)){
return nextjournal.clojure_mode.node.up(G__47665);
} else {
return G__47665;
}
}),nextjournal.clojure_mode.node.nodes_between(from_node,to_node)));
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47658,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47658,(1),null);
return nextjournal.clojure_mode.selections.range.cljs$core$IFn$_invoke$arity$2(left,right);
}));

(nextjournal.clojure_mode.node.balanced_range.cljs$lang$maxFixedArity = 3);

/**
 * Span of collection not including edges
 */
nextjournal.clojure_mode.node.inner_span = (function nextjournal$clojure_mode$node$inner_span(p__47666){
var map__47667 = p__47666;
var map__47667__$1 = (((((!((map__47667 == null))))?(((((map__47667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47667):map__47667);
var node = map__47667__$1;
var firstChild = (function (){var obj47669 = map__47667__$1;
if((!((obj47669 == null)))){
return (obj47669["firstChild"]);
} else {
return undefined;
}
})();
var lastChild = (function (){var obj47670 = map__47667__$1;
if((!((obj47670 == null)))){
return (obj47670["lastChild"]);
} else {
return undefined;
}
})();
return ({"from": ((nextjournal.clojure_mode.node.left_edge_QMARK_(firstChild))?nextjournal.clojure_mode.node.end(firstChild):nextjournal.clojure_mode.node.start(node)), "to": ((nextjournal.clojure_mode.node.right_edge_QMARK_(lastChild))?nextjournal.clojure_mode.node.start(lastChild):nextjournal.clojure_mode.node.end(node))});
});
/**
 * within (exclusive of edges)
 */
nextjournal.clojure_mode.node.within_QMARK__LT_ = (function nextjournal$clojure_mode$node$within_QMARK__LT_(parent,child){
var c1 = cljs.core.compare(nextjournal.clojure_mode.node.start(parent),nextjournal.clojure_mode.node.start(child));
var c2 = cljs.core.compare(nextjournal.clojure_mode.node.end(parent),nextjournal.clojure_mode.node.end(child));
return (((((c1 > (0))) || ((c2 < (0))))) && ((((!((c1 < (0))))) && ((!((c2 > (0))))))));
});
/**
 * within (inclusive of edges)
 */
nextjournal.clojure_mode.node.within_QMARK_ = (function nextjournal$clojure_mode$node$within_QMARK_(parent,child){
return (((!((cljs.core.compare(nextjournal.clojure_mode.node.start(parent),nextjournal.clojure_mode.node.start(child)) < (0))))) && ((!((cljs.core.compare(nextjournal.clojure_mode.node.end(parent),nextjournal.clojure_mode.node.end(child)) > (0))))));
});
nextjournal.clojure_mode.node.follow_edges = (function nextjournal$clojure_mode$node$follow_edges(node){
if(nextjournal.clojure_mode.node.edge_QMARK_(node)){
return nextjournal.clojure_mode.node.up(node);
} else {
return node;
}
});
nextjournal.clojure_mode.node.prefix = (function nextjournal$clojure_mode$node$prefix(node){
var temp__5808__auto__ = nextjournal.clojure_mode.node.up(node);
if((temp__5808__auto__ == null)){
return null;
} else {
var parent = temp__5808__auto__;
var or__5045__auto__ = nextjournal.clojure_mode.util.guard(parent,nextjournal.clojure_mode.node.prefix_container_QMARK_);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.node.down(parent),nextjournal.clojure_mode.node.prefix_edge_QMARK_);
}
}
});
nextjournal.clojure_mode.node.left_edge_with_prefix = (function nextjournal$clojure_mode$node$left_edge_with_prefix(state,node){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__47672 = nextjournal.clojure_mode.node.prefix(node);
if((G__47672 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$2(state,G__47672);
}
})()),nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.down(node))].join('');
});
nextjournal.clojure_mode.node.with_prefix = (function nextjournal$clojure_mode$node$with_prefix(node){
var G__47673 = node;
if(cljs.core.truth_(nextjournal.clojure_mode.node.prefix(node))){
return nextjournal.clojure_mode.node.up(G__47673);
} else {
return G__47673;
}
});
/**
 * Node ending immediately to the left of pos
 */
nextjournal.clojure_mode.node.node_BAR_ = (function nextjournal$clojure_mode$node$node_BAR_(state,pos){
var G__47675 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,pos,(-1));
if((G__47675 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__47675,(function (p1__47674_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,nextjournal.clojure_mode.node.end(p1__47674_SHARP_));
}));
}
});
/**
 * Node starting immediately to the right of pos
 */
nextjournal.clojure_mode.node._BAR_node = (function nextjournal$clojure_mode$node$_BAR_node(state,pos){
var G__47677 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,pos,(1));
if((G__47677 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__47677,(function (p1__47676_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,nextjournal.clojure_mode.node.start(p1__47676_SHARP_));
}));
}
});
nextjournal.clojure_mode.node.nearest_touching = (function nextjournal$clojure_mode$node$nearest_touching(state,pos,dir){
var L = (function (){var G__47680 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,pos,(-1));
if((G__47680 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__47680,(function (p__47681){
var map__47682 = p__47681;
var map__47682__$1 = (((((!((map__47682 == null))))?(((((map__47682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47682):map__47682);
var to = (function (){var obj47684 = map__47682__$1;
if((!((obj47684 == null)))){
return (obj47684["to"]);
} else {
return undefined;
}
})();
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,to);
}));
}
})();
var R = (function (){var G__47685 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,pos,(1));
if((G__47685 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__47685,(function (p__47686){
var map__47687 = p__47686;
var map__47687__$1 = (((((!((map__47687 == null))))?(((((map__47687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47687):map__47687);
var from = (function (){var obj47689 = map__47687__$1;
if((!((obj47689 == null)))){
return (obj47689["from"]);
} else {
return undefined;
}
})();
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,from);
}));
}
})();
var mid = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,pos);
var G__47690 = dir;
switch (G__47690) {
case (1):
var or__5045__auto__ = nextjournal.clojure_mode.util.guard(R,cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function (p1__47678_SHARP_){
return ((nextjournal.clojure_mode.node.same_edge_QMARK_(p1__47678_SHARP_)) || ((!(nextjournal.clojure_mode.node.right_edge_QMARK_(p1__47678_SHARP_)))));
})));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = L;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = R;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return mid;
}
}
}

break;
case (-1):
var or__5045__auto__ = nextjournal.clojure_mode.util.guard(L,cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function (p1__47679_SHARP_){
return ((nextjournal.clojure_mode.node.same_edge_QMARK_(p1__47679_SHARP_)) || ((!(nextjournal.clojure_mode.node.left_edge_QMARK_(p1__47679_SHARP_)))));
})));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = R;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = L;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return mid;
}
}
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47690)].join('')));

}
});

//# sourceMappingURL=nextjournal.clojure_mode.node.js.map
