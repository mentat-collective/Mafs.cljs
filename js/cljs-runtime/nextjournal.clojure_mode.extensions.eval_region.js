import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.extensions.eval_region');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
/**
 * Returns node or its highest ancestor that starts or ends at the cursor position.
 */
nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here = (function nextjournal$clojure_mode$extensions$eval_region$uppermost_edge_here(pos,node){
var or__5045__auto__ = cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_),(function (p1__50318_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.end(p1__50318_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.end(node)], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.start(p1__50318_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.start(node)], 0))));
})),cljs.core.iterate(nextjournal.clojure_mode.node.up,node)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return node;
}
});
nextjournal.clojure_mode.extensions.eval_region.main_selection = (function nextjournal$clojure_mode$extensions$eval_region$main_selection(state){
var obj50357 = (function (){var obj50356 = (function (){var parent__40467__auto__ = (state["selection"]);
var f__40468__auto__ = (parent__40467__auto__["asSingle"]);
return f__40468__auto__.call(parent__40467__auto__);
})();
if((!((obj50356 == null)))){
return (obj50356["ranges"]);
} else {
return undefined;
}
})();
if((!((obj50357 == null)))){
return (obj50357[(0)]);
} else {
return undefined;
}
});
nextjournal.clojure_mode.extensions.eval_region.node_at_cursor = (function nextjournal$clojure_mode$extensions$eval_region$node_at_cursor(var_args){
var G__50379 = arguments.length;
switch (G__50379) {
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
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2(state,(function (){var obj50380 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj50380 == null)))){
return (obj50380["from"]);
} else {
return undefined;
}
})());
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2 = (function (state,from){
var G__50383 = nextjournal.clojure_mode.node.nearest_touching(state,from,(-1));
var G__50383__$1 = (((G__50383 == null))?null:(function (p1__50377_SHARP_){
if(((nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__50377_SHARP_))) || ((((nextjournal.clojure_mode.node.start(p1__50377_SHARP_) <= from)) || ((nextjournal.clojure_mode.node.end(p1__50377_SHARP_) <= from)))))){
var G__50384 = p1__50377_SHARP_;
if(((nextjournal.clojure_mode.node.top_QMARK_(p1__50377_SHARP_)) || ((((!(nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__50377_SHARP_))))) && ((((nextjournal.clojure_mode.node.start(p1__50377_SHARP_) < from)) && ((from < nextjournal.clojure_mode.node.end(p1__50377_SHARP_))))))))){
return cljs.core.first(nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(G__50384,from,(-1)));
} else {
return G__50384;
}
} else {
return null;
}
})(G__50383));
var G__50383__$2 = (((G__50383__$1 == null))?null:nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here(from,G__50383__$1));
if((G__50383__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$2(state,G__50383__$2);
}
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.extensions.eval_region.top_level_node = (function nextjournal$clojure_mode$extensions$eval_region$top_level_node(state){
return cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_)),cljs.core.iterate(nextjournal.clojure_mode.node.up,nextjournal.clojure_mode.node.nearest_touching(state,(function (){var obj50390 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj50390 == null)))){
return (obj50390["from"]);
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
var or__5045__auto__ = (function (){var G__50401 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50398_SHARP_){
return p1__50398_SHARP_.is(nextjournal.clojure_mode.extensions.eval_region.modifier_effect);
}),tr.effects));
if((G__50401 == null)){
return null;
} else {
var obj50402 = G__50401;
if((!((obj50402 == null)))){
return (obj50402["value"]);
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
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_ = (function nextjournal$clojure_mode$extensions$eval_region$set_modifier_field_BANG_(p__50407,value){
var map__50413 = p__50407;
var map__50413__$1 = (((((!((map__50413 == null))))?(((((map__50413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50413):map__50413);
var view = map__50413__$1;
var dispatch = (function (){var obj50416 = map__50413__$1;
if((!((obj50416 == null)))){
return (obj50416["dispatch"]);
} else {
return undefined;
}
})();
var state = (function (){var obj50418 = map__50413__$1;
if((!((obj50418 == null)))){
return (obj50418["state"]);
} else {
return undefined;
}
})();
var G__50421 = ({"effects": nextjournal.clojure_mode.extensions.eval_region.modifier_effect.of(value)});
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__50421) : dispatch.call(null,G__50421));
});
nextjournal.clojure_mode.extensions.eval_region.mark = (function nextjournal$clojure_mode$extensions$eval_region$mark(spec,p__50423){
var map__50425 = p__50423;
var map__50425__$1 = (((((!((map__50425 == null))))?(((((map__50425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50425):map__50425);
var from = (function (){var obj50429 = map__50425__$1;
if((!((obj50429 == null)))){
return (obj50429["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj50431 = map__50425__$1;
if((!((obj50431 == null)))){
return (obj50431["to"]);
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
nextjournal.clojure_mode.extensions.eval_region.region_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none),"update":(function (_value,p__50460){
var map__50461 = p__50460;
var map__50461__$1 = (((((!((map__50461 == null))))?(((((map__50461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50461):map__50461);
var state = (function (){var obj50463 = map__50461__$1;
if((!((obj50463 == null)))){
return (obj50463["state"]);
} else {
return undefined;
}
})();
var map__50464 = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var map__50464__$1 = cljs.core.__destructure_map(map__50464);
var Alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50464__$1,"Alt");
var Shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50464__$1,"Shift");
var Enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50464__$1,"Enter");
var spec = (cljs.core.truth_(Enter)?nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight:nextjournal.clojure_mode.extensions.eval_region.mark_spec);
var temp__5802__auto__ = (cljs.core.truth_((function (){var and__5043__auto__ = Alt;
if(cljs.core.truth_(and__5043__auto__)){
return Shift;
} else {
return and__5043__auto__;
}
})())?nextjournal.clojure_mode.extensions.eval_region.top_level_node(state):(cljs.core.truth_(Alt)?(function (){var or__5045__auto__ = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.eval_region.main_selection(state),(function (p1__50458_SHARP_){
return cljs.core.not((function (){var obj50466 = p1__50458_SHARP_;
if((!((obj50466 == null)))){
return (obj50466["empty"]);
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
var or__5045__auto__ = (function (){var G__50471 = nextjournal.clojure_mode.extensions.eval_region.get_region_field(state);
var G__50471__$1 = (((G__50471 == null))?null:(function (){var obj__40460__auto__ = G__50471;
var f__40461__auto__ = (obj__40460__auto__["iter"]);
return f__40461__auto__.call(obj__40460__auto__);
})());
if((G__50471__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__50471__$1,(function (p1__50470_SHARP_){
var obj50472 = p1__50470_SHARP_;
if((!((obj50472 == null)))){
return (obj50472["value"]);
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
var handle_enter = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension_$_handle_enter(p__50479){
var map__50486 = p__50479;
var map__50486__$1 = (((((!((map__50486 == null))))?(((((map__50486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50486):map__50486);
var view = map__50486__$1;
var state = (function (){var obj50514 = map__50486__$1;
if((!((obj50514 == null)))){
return (obj50514["state"]);
} else {
return undefined;
}
})();
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state),"Enter",true));

return null;
});
var handle_key_event = (function (p__50517,p__50518){
var map__50527 = p__50517;
var map__50527__$1 = (((((!((map__50527 == null))))?(((((map__50527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50527):map__50527);
var event = map__50527__$1;
var altKey = (function (){var obj50535 = map__50527__$1;
if((!((obj50535 == null)))){
return (obj50535["altKey"]);
} else {
return undefined;
}
})();
var shiftKey = (function (){var obj50536 = map__50527__$1;
if((!((obj50536 == null)))){
return (obj50536["shiftKey"]);
} else {
return undefined;
}
})();
var metaKey = (function (){var obj50537 = map__50527__$1;
if((!((obj50537 == null)))){
return (obj50537["metaKey"]);
} else {
return undefined;
}
})();
var controlKey = (function (){var obj50538 = map__50527__$1;
if((!((obj50538 == null)))){
return (obj50538["controlKey"]);
} else {
return undefined;
}
})();
var type = (function (){var obj50539 = map__50527__$1;
if((!((obj50539 == null)))){
return (obj50539["type"]);
} else {
return undefined;
}
})();
var map__50528 = p__50518;
var map__50528__$1 = (((((!((map__50528 == null))))?(((((map__50528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50528):map__50528);
var view = map__50528__$1;
var state = (function (){var obj50541 = map__50528__$1;
if((!((obj50541 == null)))){
return (obj50541["state"]);
} else {
return undefined;
}
})();
var prev = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var next = (function (){var G__50542 = cljs.core.PersistentArrayMap.EMPTY;
var G__50542__$1 = (cljs.core.truth_(altKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50542,"Alt",true):G__50542);
var G__50542__$2 = (cljs.core.truth_(shiftKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50542__$1,"Shift",true):G__50542__$1);
var G__50542__$3 = (cljs.core.truth_(metaKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50542__$2,"Meta",true):G__50542__$2);
var G__50542__$4 = (cljs.core.truth_(controlKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50542__$3,"Control",true):G__50542__$3);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",module$node_modules$w3c_keyname$index_cjs.keyName(event))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50542__$4,"Enter",true);
} else {
return G__50542__$4;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,next)){
return nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,next);
} else {
return null;
}
});
var handle_backspace = (function (p__50550){
var map__50551 = p__50550;
var map__50551__$1 = (((((!((map__50551 == null))))?(((((map__50551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50551):map__50551);
var view = map__50551__$1;
var state = (function (){var obj50554 = map__50551__$1;
if((!((obj50554 == null)))){
return (obj50554["state"]);
} else {
return undefined;
}
})();
var dispatch = (function (){var obj50556 = map__50551__$1;
if((!((obj50556 == null)))){
return (obj50556["dispatch"]);
} else {
return undefined;
}
})();
var map__50558 = nextjournal.clojure_mode.extensions.eval_region.current_range(state);
var map__50558__$1 = (((((!((map__50558 == null))))?(((((map__50558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50558):map__50558);
var from = (function (){var obj50563 = map__50558__$1;
if((!((obj50563 == null)))){
return (obj50563["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj50565 = map__50558__$1;
if((!((obj50565 == null)))){
return (obj50565["to"]);
} else {
return undefined;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,to)){
var G__50566_50591 = ({"changes":({"from":from,"to":to,"insert":""}),"annotations":nextjournal.clojure_mode.util.user_event_annotation("delete")});
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__50566_50591) : dispatch.call(null,G__50566_50591));
} else {
}

return true;
});
return [nextjournal.clojure_mode.extensions.eval_region.modifier_field,module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Enter"].join(''),"shift":handle_enter,"run":handle_enter}),({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Backspace"].join(''),"run":handle_backspace,"shift":handle_backspace})]),module$node_modules$$codemirror$view$dist$index_cjs.EditorView.domEventHandlers(({"keydown": handle_key_event, "keyup": handle_key_event}))];
});
nextjournal.clojure_mode.extensions.eval_region.extension = (function nextjournal$clojure_mode$extensions$eval_region$extension(p__50567){
var map__50568 = p__50567;
var map__50568__$1 = cljs.core.__destructure_map(map__50568);
var modifier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50568__$1,new cljs.core.Keyword(null,"modifier","modifier",1634442788),"Alt");
return [nextjournal.clojure_mode.extensions.eval_region.modifier_extension(modifier),nextjournal.clojure_mode.extensions.eval_region.region_field,module$node_modules$$codemirror$view$dist$index_cjs.EditorView.decorations.from(nextjournal.clojure_mode.extensions.eval_region.region_field)];
});
nextjournal.clojure_mode.extensions.eval_region.cursor_node_string = (function nextjournal$clojure_mode$extensions$eval_region$cursor_node_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__50569 = nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
if((G__50569 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__50569);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});
nextjournal.clojure_mode.extensions.eval_region.top_level_string = (function nextjournal$clojure_mode$extensions$eval_region$top_level_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__50571 = nextjournal.clojure_mode.extensions.eval_region.top_level_node(state);
if((G__50571 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__50571);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.eval_region.js.map
