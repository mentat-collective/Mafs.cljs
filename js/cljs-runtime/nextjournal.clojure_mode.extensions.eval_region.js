import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.extensions.eval_region');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
/**
 * Returns node or its highest ancestor that starts or ends at the cursor position.
 */
nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here = (function nextjournal$clojure_mode$extensions$eval_region$uppermost_edge_here(pos,node){
var or__5045__auto__ = cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_),(function (p1__47697_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.end(p1__47697_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.end(node)], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.start(p1__47697_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.start(node)], 0))));
})),cljs.core.iterate(nextjournal.clojure_mode.node.up,node)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return node;
}
});
nextjournal.clojure_mode.extensions.eval_region.main_selection = (function nextjournal$clojure_mode$extensions$eval_region$main_selection(state){
var obj47705 = (function (){var obj47704 = (function (){var parent__40467__auto__ = (state["selection"]);
var f__40468__auto__ = (parent__40467__auto__["asSingle"]);
return f__40468__auto__.call(parent__40467__auto__);
})();
if((!((obj47704 == null)))){
return (obj47704["ranges"]);
} else {
return undefined;
}
})();
if((!((obj47705 == null)))){
return (obj47705[(0)]);
} else {
return undefined;
}
});
nextjournal.clojure_mode.extensions.eval_region.node_at_cursor = (function nextjournal$clojure_mode$extensions$eval_region$node_at_cursor(var_args){
var G__47732 = arguments.length;
switch (G__47732) {
case 1:
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1 = (function (state){
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2(state,(function (){var obj47749 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj47749 == null)))){
return (obj47749["from"]);
} else {
return undefined;
}
})());
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2 = (function (state,from){
var G__47751 = nextjournal.clojure_mode.node.nearest_touching(state,from,(-1));
var G__47751__$1 = (((G__47751 == null))?null:(function (p1__47724_SHARP_){
if(((nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__47724_SHARP_))) || ((((nextjournal.clojure_mode.node.start(p1__47724_SHARP_) <= from)) || ((nextjournal.clojure_mode.node.end(p1__47724_SHARP_) <= from)))))){
var G__47756 = p1__47724_SHARP_;
if(((nextjournal.clojure_mode.node.top_QMARK_(p1__47724_SHARP_)) || ((((!(nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__47724_SHARP_))))) && ((((nextjournal.clojure_mode.node.start(p1__47724_SHARP_) < from)) && ((from < nextjournal.clojure_mode.node.end(p1__47724_SHARP_))))))))){
return cljs.core.first(nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(G__47756,from,(-1)));
} else {
return G__47756;
}
} else {
return null;
}
})(G__47751));
var G__47751__$2 = (((G__47751__$1 == null))?null:nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here(from,G__47751__$1));
if((G__47751__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$2(state,G__47751__$2);
}
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.extensions.eval_region.top_level_node = (function nextjournal$clojure_mode$extensions$eval_region$top_level_node(state){
return cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_)),cljs.core.iterate(nextjournal.clojure_mode.node.up,nextjournal.clojure_mode.node.nearest_touching(state,(function (){var obj47767 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj47767 == null)))){
return (obj47767["from"]);
} else {
return undefined;
}
})(),(-1)))));
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.modifier_effect !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.modifier_effect = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.define();
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.modifier_field !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.modifier_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY),"update":(function (value,tr){
var or__5045__auto__ = (function (){var G__47810 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47795_SHARP_){
return p1__47795_SHARP_.is(nextjournal.clojure_mode.extensions.eval_region.modifier_effect);
}),tr.effects));
if((G__47810 == null)){
return null;
} else {
var obj47813 = G__47810;
if((!((obj47813 == null)))){
return (obj47813["value"]);
} else {
return undefined;
}
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return value;
}
})}));
}
nextjournal.clojure_mode.extensions.eval_region.get_modifier_field = (function nextjournal$clojure_mode$extensions$eval_region$get_modifier_field(state){
return state.field(nextjournal.clojure_mode.extensions.eval_region.modifier_field);
});
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_ = (function nextjournal$clojure_mode$extensions$eval_region$set_modifier_field_BANG_(p__47832,value){
var map__47836 = p__47832;
var map__47836__$1 = (((((!((map__47836 == null))))?(((((map__47836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47836):map__47836);
var view = map__47836__$1;
var dispatch = (function (){var obj47841 = map__47836__$1;
if((!((obj47841 == null)))){
return (obj47841["dispatch"]);
} else {
return undefined;
}
})();
var state = (function (){var obj47844 = map__47836__$1;
if((!((obj47844 == null)))){
return (obj47844["state"]);
} else {
return undefined;
}
})();
var G__47847 = ({"effects": nextjournal.clojure_mode.extensions.eval_region.modifier_effect.of(value)});
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__47847) : dispatch.call(null,G__47847));
});
nextjournal.clojure_mode.extensions.eval_region.mark = (function nextjournal$clojure_mode$extensions$eval_region$mark(spec,p__47852){
var map__47853 = p__47852;
var map__47853__$1 = (((((!((map__47853 == null))))?(((((map__47853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47853):map__47853);
var from = (function (){var obj47857 = map__47853__$1;
if((!((obj47857 == null)))){
return (obj47857["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj47859 = map__47853__$1;
if((!((obj47859 == null)))){
return (obj47859["to"]);
} else {
return undefined;
}
})();
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.mark(spec).range(from,to);
});
nextjournal.clojure_mode.extensions.eval_region.single_mark = (function nextjournal$clojure_mode$extensions$eval_region$single_mark(spec,range){
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.set([nextjournal.clojure_mode.extensions.eval_region.mark(spec,range)]);
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.mark_spec !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.mark_spec = ({"attributes":({"style":"background-color: rgba(0, 243, 255, 0.14);"})});
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight = ({"attributes":({"style":"background-color: rgba(0, 243, 255, 0.35);"})});
}
nextjournal.clojure_mode.extensions.eval_region.cursor_range = (function nextjournal$clojure_mode$extensions$eval_region$cursor_range(state){
if(cljs.core.truth_(state.selection.main.empty)){
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
} else {
return state.selection.main;
}
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.region_field !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.region_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none),"update":(function (_value,p__47880){
var map__47881 = p__47880;
var map__47881__$1 = (((((!((map__47881 == null))))?(((((map__47881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47881):map__47881);
var state = (function (){var obj47883 = map__47881__$1;
if((!((obj47883 == null)))){
return (obj47883["state"]);
} else {
return undefined;
}
})();
var map__47884 = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var map__47884__$1 = cljs.core.__destructure_map(map__47884);
var Alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47884__$1,"Alt");
var Shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47884__$1,"Shift");
var Enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47884__$1,"Enter");
var spec = (cljs.core.truth_(Enter)?nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight:nextjournal.clojure_mode.extensions.eval_region.mark_spec);
var temp__5802__auto__ = (cljs.core.truth_((function (){var and__5043__auto__ = Alt;
if(cljs.core.truth_(and__5043__auto__)){
return Shift;
} else {
return and__5043__auto__;
}
})())?nextjournal.clojure_mode.extensions.eval_region.top_level_node(state):(cljs.core.truth_(Alt)?(function (){var or__5045__auto__ = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.eval_region.main_selection(state),(function (p1__47875_SHARP_){
return cljs.core.not((function (){var obj47886 = p1__47875_SHARP_;
if((!((obj47886 == null)))){
return (obj47886["empty"]);
} else {
return undefined;
}
})());
}));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return nextjournal.clojure_mode.extensions.eval_region.cursor_range(state);
}
})():null));
if(cljs.core.truth_(temp__5802__auto__)){
var range = temp__5802__auto__;
return nextjournal.clojure_mode.extensions.eval_region.single_mark(spec,range);
} else {
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none;
}
})}));
}
nextjournal.clojure_mode.extensions.eval_region.get_region_field = (function nextjournal$clojure_mode$extensions$eval_region$get_region_field(state){
return state.field(nextjournal.clojure_mode.extensions.eval_region.region_field);
});
nextjournal.clojure_mode.extensions.eval_region.current_range = (function nextjournal$clojure_mode$extensions$eval_region$current_range(state){
var or__5045__auto__ = (function (){var G__47952 = nextjournal.clojure_mode.extensions.eval_region.get_region_field(state);
var G__47952__$1 = (((G__47952 == null))?null:(function (){var obj__40460__auto__ = G__47952;
var f__40461__auto__ = (obj__40460__auto__["iter"]);
return f__40461__auto__.call(obj__40460__auto__);
})());
if((G__47952__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__47952__$1,(function (p1__47949_SHARP_){
var obj47957 = p1__47949_SHARP_;
if((!((obj47957 == null)))){
return (obj47957["value"]);
} else {
return undefined;
}
}));
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return state.selection.main;
}
});
/**
 * Maintains modifier-state-field, containing a map of {<modifier> true}, including Enter.
 */
nextjournal.clojure_mode.extensions.eval_region.modifier_extension = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension(modifier){
var handle_enter = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension_$_handle_enter(p__47960){
var map__47961 = p__47960;
var map__47961__$1 = (((((!((map__47961 == null))))?(((((map__47961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47961):map__47961);
var view = map__47961__$1;
var state = (function (){var obj47964 = map__47961__$1;
if((!((obj47964 == null)))){
return (obj47964["state"]);
} else {
return undefined;
}
})();
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state),"Enter",true));

return null;
});
var handle_key_event = (function (p__47970,p__47971){
var map__47972 = p__47970;
var map__47972__$1 = (((((!((map__47972 == null))))?(((((map__47972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47972):map__47972);
var event = map__47972__$1;
var altKey = (function (){var obj47975 = map__47972__$1;
if((!((obj47975 == null)))){
return (obj47975["altKey"]);
} else {
return undefined;
}
})();
var shiftKey = (function (){var obj47976 = map__47972__$1;
if((!((obj47976 == null)))){
return (obj47976["shiftKey"]);
} else {
return undefined;
}
})();
var metaKey = (function (){var obj47977 = map__47972__$1;
if((!((obj47977 == null)))){
return (obj47977["metaKey"]);
} else {
return undefined;
}
})();
var controlKey = (function (){var obj47978 = map__47972__$1;
if((!((obj47978 == null)))){
return (obj47978["controlKey"]);
} else {
return undefined;
}
})();
var type = (function (){var obj47979 = map__47972__$1;
if((!((obj47979 == null)))){
return (obj47979["type"]);
} else {
return undefined;
}
})();
var map__47973 = p__47971;
var map__47973__$1 = (((((!((map__47973 == null))))?(((((map__47973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47973):map__47973);
var view = map__47973__$1;
var state = (function (){var obj47981 = map__47973__$1;
if((!((obj47981 == null)))){
return (obj47981["state"]);
} else {
return undefined;
}
})();
var prev = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var next = (function (){var G__47982 = cljs.core.PersistentArrayMap.EMPTY;
var G__47982__$1 = (cljs.core.truth_(altKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47982,"Alt",true):G__47982);
var G__47982__$2 = (cljs.core.truth_(shiftKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47982__$1,"Shift",true):G__47982__$1);
var G__47982__$3 = (cljs.core.truth_(metaKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47982__$2,"Meta",true):G__47982__$2);
var G__47982__$4 = (cljs.core.truth_(controlKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47982__$3,"Control",true):G__47982__$3);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",module$node_modules$w3c_keyname$index_cjs.keyName(event))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47982__$4,"Enter",true);
} else {
return G__47982__$4;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,next)){
return nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,next);
} else {
return null;
}
});
var handle_backspace = (function (p__47983){
var map__47984 = p__47983;
var map__47984__$1 = (((((!((map__47984 == null))))?(((((map__47984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47984):map__47984);
var view = map__47984__$1;
var state = (function (){var obj47987 = map__47984__$1;
if((!((obj47987 == null)))){
return (obj47987["state"]);
} else {
return undefined;
}
})();
var dispatch = (function (){var obj47988 = map__47984__$1;
if((!((obj47988 == null)))){
return (obj47988["dispatch"]);
} else {
return undefined;
}
})();
var map__47989 = nextjournal.clojure_mode.extensions.eval_region.current_range(state);
var map__47989__$1 = (((((!((map__47989 == null))))?(((((map__47989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47989):map__47989);
var from = (function (){var obj47991 = map__47989__$1;
if((!((obj47991 == null)))){
return (obj47991["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj47992 = map__47989__$1;
if((!((obj47992 == null)))){
return (obj47992["to"]);
} else {
return undefined;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,to)){
var G__47994_48022 = ({"changes":({"from":from,"to":to,"insert":""}),"annotations":nextjournal.clojure_mode.util.user_event_annotation("delete")});
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__47994_48022) : dispatch.call(null,G__47994_48022));
} else {
}

return true;
});
return [nextjournal.clojure_mode.extensions.eval_region.modifier_field,module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Enter"].join(''),"shift":handle_enter,"run":handle_enter}),({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Backspace"].join(''),"run":handle_backspace,"shift":handle_backspace})]),module$node_modules$$codemirror$view$dist$index_cjs.EditorView.domEventHandlers(({"keydown": handle_key_event, "keyup": handle_key_event}))];
});
nextjournal.clojure_mode.extensions.eval_region.extension = (function nextjournal$clojure_mode$extensions$eval_region$extension(p__47995){
var map__47996 = p__47995;
var map__47996__$1 = cljs.core.__destructure_map(map__47996);
var modifier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47996__$1,new cljs.core.Keyword(null,"modifier","modifier",1634442788),"Alt");
return [nextjournal.clojure_mode.extensions.eval_region.modifier_extension(modifier),nextjournal.clojure_mode.extensions.eval_region.region_field,module$node_modules$$codemirror$view$dist$index_cjs.EditorView.decorations.from(nextjournal.clojure_mode.extensions.eval_region.region_field)];
});
nextjournal.clojure_mode.extensions.eval_region.cursor_node_string = (function nextjournal$clojure_mode$extensions$eval_region$cursor_node_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__48000 = nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
if((G__48000 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__48000);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});
nextjournal.clojure_mode.extensions.eval_region.top_level_string = (function nextjournal$clojure_mode$extensions$eval_region$top_level_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__48003 = nextjournal.clojure_mode.extensions.eval_region.top_level_node(state);
if((G__48003 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__48003);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.eval_region.js.map
