import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.extensions.eval_region');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
/**
 * Returns node or its highest ancestor that starts or ends at the cursor position.
 */
nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here = (function nextjournal$clojure_mode$extensions$eval_region$uppermost_edge_here(pos,node){
var or__5045__auto__ = cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_),(function (p1__49079_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.end(p1__49079_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.end(node)], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.start(p1__49079_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.start(node)], 0))));
})),cljs.core.iterate(nextjournal.clojure_mode.node.up,node)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return node;
}
});
nextjournal.clojure_mode.extensions.eval_region.main_selection = (function nextjournal$clojure_mode$extensions$eval_region$main_selection(state){
var obj49085 = (function (){var obj49084 = (function (){var parent__40467__auto__ = (state["selection"]);
var f__40468__auto__ = (parent__40467__auto__["asSingle"]);
return f__40468__auto__.call(parent__40467__auto__);
})();
if((!((obj49084 == null)))){
return (obj49084["ranges"]);
} else {
return undefined;
}
})();
if((!((obj49085 == null)))){
return (obj49085[(0)]);
} else {
return undefined;
}
});
nextjournal.clojure_mode.extensions.eval_region.node_at_cursor = (function nextjournal$clojure_mode$extensions$eval_region$node_at_cursor(var_args){
var G__49102 = arguments.length;
switch (G__49102) {
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
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2(state,(function (){var obj49110 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj49110 == null)))){
return (obj49110["from"]);
} else {
return undefined;
}
})());
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2 = (function (state,from){
var G__49113 = nextjournal.clojure_mode.node.nearest_touching(state,from,(-1));
var G__49113__$1 = (((G__49113 == null))?null:(function (p1__49092_SHARP_){
if(((nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__49092_SHARP_))) || ((((nextjournal.clojure_mode.node.start(p1__49092_SHARP_) <= from)) || ((nextjournal.clojure_mode.node.end(p1__49092_SHARP_) <= from)))))){
var G__49118 = p1__49092_SHARP_;
if(((nextjournal.clojure_mode.node.top_QMARK_(p1__49092_SHARP_)) || ((((!(nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__49092_SHARP_))))) && ((((nextjournal.clojure_mode.node.start(p1__49092_SHARP_) < from)) && ((from < nextjournal.clojure_mode.node.end(p1__49092_SHARP_))))))))){
return cljs.core.first(nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(G__49118,from,(-1)));
} else {
return G__49118;
}
} else {
return null;
}
})(G__49113));
var G__49113__$2 = (((G__49113__$1 == null))?null:nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here(from,G__49113__$1));
if((G__49113__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$2(state,G__49113__$2);
}
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.extensions.eval_region.top_level_node = (function nextjournal$clojure_mode$extensions$eval_region$top_level_node(state){
return cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_)),cljs.core.iterate(nextjournal.clojure_mode.node.up,nextjournal.clojure_mode.node.nearest_touching(state,(function (){var obj49132 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj49132 == null)))){
return (obj49132["from"]);
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
var or__5045__auto__ = (function (){var G__49134 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49133_SHARP_){
return p1__49133_SHARP_.is(nextjournal.clojure_mode.extensions.eval_region.modifier_effect);
}),tr.effects));
if((G__49134 == null)){
return null;
} else {
var obj49135 = G__49134;
if((!((obj49135 == null)))){
return (obj49135["value"]);
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
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_ = (function nextjournal$clojure_mode$extensions$eval_region$set_modifier_field_BANG_(p__49138,value){
var map__49140 = p__49138;
var map__49140__$1 = (((((!((map__49140 == null))))?(((((map__49140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49140):map__49140);
var view = map__49140__$1;
var dispatch = (function (){var obj49147 = map__49140__$1;
if((!((obj49147 == null)))){
return (obj49147["dispatch"]);
} else {
return undefined;
}
})();
var state = (function (){var obj49148 = map__49140__$1;
if((!((obj49148 == null)))){
return (obj49148["state"]);
} else {
return undefined;
}
})();
var G__49149 = ({"effects": nextjournal.clojure_mode.extensions.eval_region.modifier_effect.of(value)});
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__49149) : dispatch.call(null,G__49149));
});
nextjournal.clojure_mode.extensions.eval_region.mark = (function nextjournal$clojure_mode$extensions$eval_region$mark(spec,p__49151){
var map__49153 = p__49151;
var map__49153__$1 = (((((!((map__49153 == null))))?(((((map__49153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49153):map__49153);
var from = (function (){var obj49155 = map__49153__$1;
if((!((obj49155 == null)))){
return (obj49155["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj49156 = map__49153__$1;
if((!((obj49156 == null)))){
return (obj49156["to"]);
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
nextjournal.clojure_mode.extensions.eval_region.region_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none),"update":(function (_value,p__49165){
var map__49174 = p__49165;
var map__49174__$1 = (((((!((map__49174 == null))))?(((((map__49174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49174):map__49174);
var state = (function (){var obj49181 = map__49174__$1;
if((!((obj49181 == null)))){
return (obj49181["state"]);
} else {
return undefined;
}
})();
var map__49183 = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var map__49183__$1 = cljs.core.__destructure_map(map__49183);
var Alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49183__$1,"Alt");
var Shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49183__$1,"Shift");
var Enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49183__$1,"Enter");
var spec = (cljs.core.truth_(Enter)?nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight:nextjournal.clojure_mode.extensions.eval_region.mark_spec);
var temp__5802__auto__ = (cljs.core.truth_((function (){var and__5043__auto__ = Alt;
if(cljs.core.truth_(and__5043__auto__)){
return Shift;
} else {
return and__5043__auto__;
}
})())?nextjournal.clojure_mode.extensions.eval_region.top_level_node(state):(cljs.core.truth_(Alt)?(function (){var or__5045__auto__ = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.eval_region.main_selection(state),(function (p1__49163_SHARP_){
return cljs.core.not((function (){var obj49190 = p1__49163_SHARP_;
if((!((obj49190 == null)))){
return (obj49190["empty"]);
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
var or__5045__auto__ = (function (){var G__49202 = nextjournal.clojure_mode.extensions.eval_region.get_region_field(state);
var G__49202__$1 = (((G__49202 == null))?null:(function (){var obj__40460__auto__ = G__49202;
var f__40461__auto__ = (obj__40460__auto__["iter"]);
return f__40461__auto__.call(obj__40460__auto__);
})());
if((G__49202__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__49202__$1,(function (p1__49196_SHARP_){
var obj49207 = p1__49196_SHARP_;
if((!((obj49207 == null)))){
return (obj49207["value"]);
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
var handle_enter = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension_$_handle_enter(p__49228){
var map__49229 = p__49228;
var map__49229__$1 = (((((!((map__49229 == null))))?(((((map__49229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49229):map__49229);
var view = map__49229__$1;
var state = (function (){var obj49233 = map__49229__$1;
if((!((obj49233 == null)))){
return (obj49233["state"]);
} else {
return undefined;
}
})();
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state),"Enter",true));

return null;
});
var handle_key_event = (function (p__49237,p__49238){
var map__49239 = p__49237;
var map__49239__$1 = (((((!((map__49239 == null))))?(((((map__49239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49239):map__49239);
var event = map__49239__$1;
var altKey = (function (){var obj49243 = map__49239__$1;
if((!((obj49243 == null)))){
return (obj49243["altKey"]);
} else {
return undefined;
}
})();
var shiftKey = (function (){var obj49246 = map__49239__$1;
if((!((obj49246 == null)))){
return (obj49246["shiftKey"]);
} else {
return undefined;
}
})();
var metaKey = (function (){var obj49247 = map__49239__$1;
if((!((obj49247 == null)))){
return (obj49247["metaKey"]);
} else {
return undefined;
}
})();
var controlKey = (function (){var obj49249 = map__49239__$1;
if((!((obj49249 == null)))){
return (obj49249["controlKey"]);
} else {
return undefined;
}
})();
var type = (function (){var obj49250 = map__49239__$1;
if((!((obj49250 == null)))){
return (obj49250["type"]);
} else {
return undefined;
}
})();
var map__49240 = p__49238;
var map__49240__$1 = (((((!((map__49240 == null))))?(((((map__49240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49240):map__49240);
var view = map__49240__$1;
var state = (function (){var obj49252 = map__49240__$1;
if((!((obj49252 == null)))){
return (obj49252["state"]);
} else {
return undefined;
}
})();
var prev = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var next = (function (){var G__49253 = cljs.core.PersistentArrayMap.EMPTY;
var G__49253__$1 = (cljs.core.truth_(altKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49253,"Alt",true):G__49253);
var G__49253__$2 = (cljs.core.truth_(shiftKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49253__$1,"Shift",true):G__49253__$1);
var G__49253__$3 = (cljs.core.truth_(metaKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49253__$2,"Meta",true):G__49253__$2);
var G__49253__$4 = (cljs.core.truth_(controlKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49253__$3,"Control",true):G__49253__$3);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",module$node_modules$w3c_keyname$index_cjs.keyName(event))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49253__$4,"Enter",true);
} else {
return G__49253__$4;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,next)){
return nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,next);
} else {
return null;
}
});
var handle_backspace = (function (p__49263){
var map__49264 = p__49263;
var map__49264__$1 = (((((!((map__49264 == null))))?(((((map__49264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49264):map__49264);
var view = map__49264__$1;
var state = (function (){var obj49266 = map__49264__$1;
if((!((obj49266 == null)))){
return (obj49266["state"]);
} else {
return undefined;
}
})();
var dispatch = (function (){var obj49267 = map__49264__$1;
if((!((obj49267 == null)))){
return (obj49267["dispatch"]);
} else {
return undefined;
}
})();
var map__49268 = nextjournal.clojure_mode.extensions.eval_region.current_range(state);
var map__49268__$1 = (((((!((map__49268 == null))))?(((((map__49268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49268):map__49268);
var from = (function (){var obj49270 = map__49268__$1;
if((!((obj49270 == null)))){
return (obj49270["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj49272 = map__49268__$1;
if((!((obj49272 == null)))){
return (obj49272["to"]);
} else {
return undefined;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,to)){
var G__49273_49282 = ({"changes":({"from":from,"to":to,"insert":""}),"annotations":nextjournal.clojure_mode.util.user_event_annotation("delete")});
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__49273_49282) : dispatch.call(null,G__49273_49282));
} else {
}

return true;
});
return [nextjournal.clojure_mode.extensions.eval_region.modifier_field,module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Enter"].join(''),"shift":handle_enter,"run":handle_enter}),({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Backspace"].join(''),"run":handle_backspace,"shift":handle_backspace})]),module$node_modules$$codemirror$view$dist$index_cjs.EditorView.domEventHandlers(({"keydown": handle_key_event, "keyup": handle_key_event}))];
});
nextjournal.clojure_mode.extensions.eval_region.extension = (function nextjournal$clojure_mode$extensions$eval_region$extension(p__49277){
var map__49278 = p__49277;
var map__49278__$1 = cljs.core.__destructure_map(map__49278);
var modifier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49278__$1,new cljs.core.Keyword(null,"modifier","modifier",1634442788),"Alt");
return [nextjournal.clojure_mode.extensions.eval_region.modifier_extension(modifier),nextjournal.clojure_mode.extensions.eval_region.region_field,module$node_modules$$codemirror$view$dist$index_cjs.EditorView.decorations.from(nextjournal.clojure_mode.extensions.eval_region.region_field)];
});
nextjournal.clojure_mode.extensions.eval_region.cursor_node_string = (function nextjournal$clojure_mode$extensions$eval_region$cursor_node_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__49279 = nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
if((G__49279 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__49279);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});
nextjournal.clojure_mode.extensions.eval_region.top_level_string = (function nextjournal$clojure_mode$extensions$eval_region$top_level_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__49280 = nextjournal.clojure_mode.extensions.eval_region.top_level_node(state);
if((G__49280 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__49280);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.eval_region.js.map
