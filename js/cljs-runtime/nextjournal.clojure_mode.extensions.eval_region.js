import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.extensions.eval_region');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
/**
 * Returns node or its highest ancestor that starts or ends at the cursor position.
 */
nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here = (function nextjournal$clojure_mode$extensions$eval_region$uppermost_edge_here(pos,node){
var or__5045__auto__ = cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_),(function (p1__47612_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.end(p1__47612_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.end(node)], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.start(p1__47612_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.start(node)], 0))));
})),cljs.core.iterate(nextjournal.clojure_mode.node.up,node)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return node;
}
});
nextjournal.clojure_mode.extensions.eval_region.main_selection = (function nextjournal$clojure_mode$extensions$eval_region$main_selection(state){
var obj47614 = (function (){var obj47613 = (function (){var parent__40467__auto__ = (state["selection"]);
var f__40468__auto__ = (parent__40467__auto__["asSingle"]);
return f__40468__auto__.call(parent__40467__auto__);
})();
if((!((obj47613 == null)))){
return (obj47613["ranges"]);
} else {
return undefined;
}
})();
if((!((obj47614 == null)))){
return (obj47614[(0)]);
} else {
return undefined;
}
});
nextjournal.clojure_mode.extensions.eval_region.node_at_cursor = (function nextjournal$clojure_mode$extensions$eval_region$node_at_cursor(var_args){
var G__47620 = arguments.length;
switch (G__47620) {
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
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2(state,(function (){var obj47621 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj47621 == null)))){
return (obj47621["from"]);
} else {
return undefined;
}
})());
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2 = (function (state,from){
var G__47623 = nextjournal.clojure_mode.node.nearest_touching(state,from,(-1));
var G__47623__$1 = (((G__47623 == null))?null:(function (p1__47616_SHARP_){
if(((nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__47616_SHARP_))) || ((((nextjournal.clojure_mode.node.start(p1__47616_SHARP_) <= from)) || ((nextjournal.clojure_mode.node.end(p1__47616_SHARP_) <= from)))))){
var G__47627 = p1__47616_SHARP_;
if(((nextjournal.clojure_mode.node.top_QMARK_(p1__47616_SHARP_)) || ((((!(nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__47616_SHARP_))))) && ((((nextjournal.clojure_mode.node.start(p1__47616_SHARP_) < from)) && ((from < nextjournal.clojure_mode.node.end(p1__47616_SHARP_))))))))){
return cljs.core.first(nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(G__47627,from,(-1)));
} else {
return G__47627;
}
} else {
return null;
}
})(G__47623));
var G__47623__$2 = (((G__47623__$1 == null))?null:nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here(from,G__47623__$1));
if((G__47623__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$2(state,G__47623__$2);
}
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.extensions.eval_region.top_level_node = (function nextjournal$clojure_mode$extensions$eval_region$top_level_node(state){
return cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_)),cljs.core.iterate(nextjournal.clojure_mode.node.up,nextjournal.clojure_mode.node.nearest_touching(state,(function (){var obj47630 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj47630 == null)))){
return (obj47630["from"]);
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
var or__5045__auto__ = (function (){var G__47641 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47638_SHARP_){
return p1__47638_SHARP_.is(nextjournal.clojure_mode.extensions.eval_region.modifier_effect);
}),tr.effects));
if((G__47641 == null)){
return null;
} else {
var obj47642 = G__47641;
if((!((obj47642 == null)))){
return (obj47642["value"]);
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
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_ = (function nextjournal$clojure_mode$extensions$eval_region$set_modifier_field_BANG_(p__47647,value){
var map__47649 = p__47647;
var map__47649__$1 = (((((!((map__47649 == null))))?(((((map__47649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47649):map__47649);
var view = map__47649__$1;
var dispatch = (function (){var obj47655 = map__47649__$1;
if((!((obj47655 == null)))){
return (obj47655["dispatch"]);
} else {
return undefined;
}
})();
var state = (function (){var obj47656 = map__47649__$1;
if((!((obj47656 == null)))){
return (obj47656["state"]);
} else {
return undefined;
}
})();
var G__47658 = ({"effects": nextjournal.clojure_mode.extensions.eval_region.modifier_effect.of(value)});
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__47658) : dispatch.call(null,G__47658));
});
nextjournal.clojure_mode.extensions.eval_region.mark = (function nextjournal$clojure_mode$extensions$eval_region$mark(spec,p__47662){
var map__47663 = p__47662;
var map__47663__$1 = (((((!((map__47663 == null))))?(((((map__47663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47663):map__47663);
var from = (function (){var obj47667 = map__47663__$1;
if((!((obj47667 == null)))){
return (obj47667["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj47668 = map__47663__$1;
if((!((obj47668 == null)))){
return (obj47668["to"]);
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
nextjournal.clojure_mode.extensions.eval_region.region_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none),"update":(function (_value,p__47681){
var map__47683 = p__47681;
var map__47683__$1 = (((((!((map__47683 == null))))?(((((map__47683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47683):map__47683);
var state = (function (){var obj47688 = map__47683__$1;
if((!((obj47688 == null)))){
return (obj47688["state"]);
} else {
return undefined;
}
})();
var map__47691 = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var map__47691__$1 = cljs.core.__destructure_map(map__47691);
var Alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47691__$1,"Alt");
var Shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47691__$1,"Shift");
var Enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47691__$1,"Enter");
var spec = (cljs.core.truth_(Enter)?nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight:nextjournal.clojure_mode.extensions.eval_region.mark_spec);
var temp__5802__auto__ = (cljs.core.truth_((function (){var and__5043__auto__ = Alt;
if(cljs.core.truth_(and__5043__auto__)){
return Shift;
} else {
return and__5043__auto__;
}
})())?nextjournal.clojure_mode.extensions.eval_region.top_level_node(state):(cljs.core.truth_(Alt)?(function (){var or__5045__auto__ = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.eval_region.main_selection(state),(function (p1__47677_SHARP_){
return cljs.core.not((function (){var obj47718 = p1__47677_SHARP_;
if((!((obj47718 == null)))){
return (obj47718["empty"]);
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
var or__5045__auto__ = (function (){var G__47728 = nextjournal.clojure_mode.extensions.eval_region.get_region_field(state);
var G__47728__$1 = (((G__47728 == null))?null:(function (){var obj__40460__auto__ = G__47728;
var f__40461__auto__ = (obj__40460__auto__["iter"]);
return f__40461__auto__.call(obj__40460__auto__);
})());
if((G__47728__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__47728__$1,(function (p1__47726_SHARP_){
var obj47731 = p1__47726_SHARP_;
if((!((obj47731 == null)))){
return (obj47731["value"]);
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
var handle_enter = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension_$_handle_enter(p__47739){
var map__47751 = p__47739;
var map__47751__$1 = (((((!((map__47751 == null))))?(((((map__47751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47751):map__47751);
var view = map__47751__$1;
var state = (function (){var obj47756 = map__47751__$1;
if((!((obj47756 == null)))){
return (obj47756["state"]);
} else {
return undefined;
}
})();
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state),"Enter",true));

return null;
});
var handle_key_event = (function (p__47761,p__47762){
var map__47765 = p__47761;
var map__47765__$1 = (((((!((map__47765 == null))))?(((((map__47765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47765):map__47765);
var event = map__47765__$1;
var altKey = (function (){var obj47772 = map__47765__$1;
if((!((obj47772 == null)))){
return (obj47772["altKey"]);
} else {
return undefined;
}
})();
var shiftKey = (function (){var obj47774 = map__47765__$1;
if((!((obj47774 == null)))){
return (obj47774["shiftKey"]);
} else {
return undefined;
}
})();
var metaKey = (function (){var obj47776 = map__47765__$1;
if((!((obj47776 == null)))){
return (obj47776["metaKey"]);
} else {
return undefined;
}
})();
var controlKey = (function (){var obj47777 = map__47765__$1;
if((!((obj47777 == null)))){
return (obj47777["controlKey"]);
} else {
return undefined;
}
})();
var type = (function (){var obj47778 = map__47765__$1;
if((!((obj47778 == null)))){
return (obj47778["type"]);
} else {
return undefined;
}
})();
var map__47766 = p__47762;
var map__47766__$1 = (((((!((map__47766 == null))))?(((((map__47766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47766):map__47766);
var view = map__47766__$1;
var state = (function (){var obj47780 = map__47766__$1;
if((!((obj47780 == null)))){
return (obj47780["state"]);
} else {
return undefined;
}
})();
var prev = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var next = (function (){var G__47782 = cljs.core.PersistentArrayMap.EMPTY;
var G__47782__$1 = (cljs.core.truth_(altKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47782,"Alt",true):G__47782);
var G__47782__$2 = (cljs.core.truth_(shiftKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47782__$1,"Shift",true):G__47782__$1);
var G__47782__$3 = (cljs.core.truth_(metaKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47782__$2,"Meta",true):G__47782__$2);
var G__47782__$4 = (cljs.core.truth_(controlKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47782__$3,"Control",true):G__47782__$3);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",module$node_modules$w3c_keyname$index_cjs.keyName(event))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47782__$4,"Enter",true);
} else {
return G__47782__$4;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,next)){
return nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,next);
} else {
return null;
}
});
var handle_backspace = (function (p__47787){
var map__47793 = p__47787;
var map__47793__$1 = (((((!((map__47793 == null))))?(((((map__47793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47793):map__47793);
var view = map__47793__$1;
var state = (function (){var obj47795 = map__47793__$1;
if((!((obj47795 == null)))){
return (obj47795["state"]);
} else {
return undefined;
}
})();
var dispatch = (function (){var obj47796 = map__47793__$1;
if((!((obj47796 == null)))){
return (obj47796["dispatch"]);
} else {
return undefined;
}
})();
var map__47797 = nextjournal.clojure_mode.extensions.eval_region.current_range(state);
var map__47797__$1 = (((((!((map__47797 == null))))?(((((map__47797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47797):map__47797);
var from = (function (){var obj47799 = map__47797__$1;
if((!((obj47799 == null)))){
return (obj47799["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj47800 = map__47797__$1;
if((!((obj47800 == null)))){
return (obj47800["to"]);
} else {
return undefined;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,to)){
var G__47802_47838 = ({"changes":({"from":from,"to":to,"insert":""}),"annotations":nextjournal.clojure_mode.util.user_event_annotation("delete")});
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__47802_47838) : dispatch.call(null,G__47802_47838));
} else {
}

return true;
});
return [nextjournal.clojure_mode.extensions.eval_region.modifier_field,module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Enter"].join(''),"shift":handle_enter,"run":handle_enter}),({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Backspace"].join(''),"run":handle_backspace,"shift":handle_backspace})]),module$node_modules$$codemirror$view$dist$index_cjs.EditorView.domEventHandlers(({"keydown": handle_key_event, "keyup": handle_key_event}))];
});
nextjournal.clojure_mode.extensions.eval_region.extension = (function nextjournal$clojure_mode$extensions$eval_region$extension(p__47806){
var map__47807 = p__47806;
var map__47807__$1 = cljs.core.__destructure_map(map__47807);
var modifier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47807__$1,new cljs.core.Keyword(null,"modifier","modifier",1634442788),"Alt");
return [nextjournal.clojure_mode.extensions.eval_region.modifier_extension(modifier),nextjournal.clojure_mode.extensions.eval_region.region_field,module$node_modules$$codemirror$view$dist$index_cjs.EditorView.decorations.from(nextjournal.clojure_mode.extensions.eval_region.region_field)];
});
nextjournal.clojure_mode.extensions.eval_region.cursor_node_string = (function nextjournal$clojure_mode$extensions$eval_region$cursor_node_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__47813 = nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
if((G__47813 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__47813);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});
nextjournal.clojure_mode.extensions.eval_region.top_level_string = (function nextjournal$clojure_mode$extensions$eval_region$top_level_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__47818 = nextjournal.clojure_mode.extensions.eval_region.top_level_node(state);
if((G__47818 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__47818);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.eval_region.js.map
