import "./cljs_env.js";
goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48281 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_48281(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48283 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_48283(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47311 = coll;
var G__47312 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47311,G__47312) : shadow.dom.lazy_native_coll_seq.call(null,G__47311,G__47312));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47327 = arguments.length;
switch (G__47327) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47349 = arguments.length;
switch (G__47349) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47365 = arguments.length;
switch (G__47365) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47379 = arguments.length;
switch (G__47379) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47392 = arguments.length;
switch (G__47392) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47405 = arguments.length;
switch (G__47405) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47408){if((e47408 instanceof Object)){
var e = e47408;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47408;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47419 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47420 = null;
var count__47421 = (0);
var i__47422 = (0);
while(true){
if((i__47422 < count__47421)){
var el = chunk__47420.cljs$core$IIndexed$_nth$arity$2(null,i__47422);
var handler_48313__$1 = ((function (seq__47419,chunk__47420,count__47421,i__47422,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47419,chunk__47420,count__47421,i__47422,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48313__$1);


var G__48316 = seq__47419;
var G__48317 = chunk__47420;
var G__48318 = count__47421;
var G__48319 = (i__47422 + (1));
seq__47419 = G__48316;
chunk__47420 = G__48317;
count__47421 = G__48318;
i__47422 = G__48319;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47419);
if(temp__5753__auto__){
var seq__47419__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47419__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47419__$1);
var G__48320 = cljs.core.chunk_rest(seq__47419__$1);
var G__48321 = c__5568__auto__;
var G__48322 = cljs.core.count(c__5568__auto__);
var G__48323 = (0);
seq__47419 = G__48320;
chunk__47420 = G__48321;
count__47421 = G__48322;
i__47422 = G__48323;
continue;
} else {
var el = cljs.core.first(seq__47419__$1);
var handler_48325__$1 = ((function (seq__47419,chunk__47420,count__47421,i__47422,el,seq__47419__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47419,chunk__47420,count__47421,i__47422,el,seq__47419__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48325__$1);


var G__48331 = cljs.core.next(seq__47419__$1);
var G__48332 = null;
var G__48333 = (0);
var G__48334 = (0);
seq__47419 = G__48331;
chunk__47420 = G__48332;
count__47421 = G__48333;
i__47422 = G__48334;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47439 = arguments.length;
switch (G__47439) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47460 = cljs.core.seq(events);
var chunk__47461 = null;
var count__47462 = (0);
var i__47463 = (0);
while(true){
if((i__47463 < count__47462)){
var vec__47472 = chunk__47461.cljs$core$IIndexed$_nth$arity$2(null,i__47463);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47472,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47472,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48347 = seq__47460;
var G__48348 = chunk__47461;
var G__48349 = count__47462;
var G__48350 = (i__47463 + (1));
seq__47460 = G__48347;
chunk__47461 = G__48348;
count__47462 = G__48349;
i__47463 = G__48350;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47460);
if(temp__5753__auto__){
var seq__47460__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47460__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47460__$1);
var G__48351 = cljs.core.chunk_rest(seq__47460__$1);
var G__48352 = c__5568__auto__;
var G__48353 = cljs.core.count(c__5568__auto__);
var G__48354 = (0);
seq__47460 = G__48351;
chunk__47461 = G__48352;
count__47462 = G__48353;
i__47463 = G__48354;
continue;
} else {
var vec__47478 = cljs.core.first(seq__47460__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47478,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47478,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48355 = cljs.core.next(seq__47460__$1);
var G__48356 = null;
var G__48357 = (0);
var G__48358 = (0);
seq__47460 = G__48355;
chunk__47461 = G__48356;
count__47462 = G__48357;
i__47463 = G__48358;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47484 = cljs.core.seq(styles);
var chunk__47485 = null;
var count__47486 = (0);
var i__47487 = (0);
while(true){
if((i__47487 < count__47486)){
var vec__47503 = chunk__47485.cljs$core$IIndexed$_nth$arity$2(null,i__47487);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47503,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47503,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48359 = seq__47484;
var G__48360 = chunk__47485;
var G__48361 = count__47486;
var G__48362 = (i__47487 + (1));
seq__47484 = G__48359;
chunk__47485 = G__48360;
count__47486 = G__48361;
i__47487 = G__48362;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47484);
if(temp__5753__auto__){
var seq__47484__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47484__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47484__$1);
var G__48363 = cljs.core.chunk_rest(seq__47484__$1);
var G__48364 = c__5568__auto__;
var G__48365 = cljs.core.count(c__5568__auto__);
var G__48366 = (0);
seq__47484 = G__48363;
chunk__47485 = G__48364;
count__47486 = G__48365;
i__47487 = G__48366;
continue;
} else {
var vec__47511 = cljs.core.first(seq__47484__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47511,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47511,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48367 = cljs.core.next(seq__47484__$1);
var G__48368 = null;
var G__48369 = (0);
var G__48370 = (0);
seq__47484 = G__48367;
chunk__47485 = G__48368;
count__47486 = G__48369;
i__47487 = G__48370;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47522_48371 = key;
var G__47522_48372__$1 = (((G__47522_48371 instanceof cljs.core.Keyword))?G__47522_48371.fqn:null);
switch (G__47522_48372__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48374 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_48374,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_48374,"aria-");
}
})())){
el.setAttribute(ks_48374,value);
} else {
(el[ks_48374] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47542){
var map__47543 = p__47542;
var map__47543__$1 = cljs.core.__destructure_map(map__47543);
var props = map__47543__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47543__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47548 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47548,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47548,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47548,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47553 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47553,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47553;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47558 = arguments.length;
switch (G__47558) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47578){
var vec__47580 = p__47578;
var seq__47581 = cljs.core.seq(vec__47580);
var first__47582 = cljs.core.first(seq__47581);
var seq__47581__$1 = cljs.core.next(seq__47581);
var nn = first__47582;
var first__47582__$1 = cljs.core.first(seq__47581__$1);
var seq__47581__$2 = cljs.core.next(seq__47581__$1);
var np = first__47582__$1;
var nc = seq__47581__$2;
var node = vec__47580;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47585 = nn;
var G__47586 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47585,G__47586) : create_fn.call(null,G__47585,G__47586));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47591 = nn;
var G__47592 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47591,G__47592) : create_fn.call(null,G__47591,G__47592));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47602 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47602,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47602,(1),null);
var seq__47606_48376 = cljs.core.seq(node_children);
var chunk__47607_48377 = null;
var count__47608_48378 = (0);
var i__47609_48379 = (0);
while(true){
if((i__47609_48379 < count__47608_48378)){
var child_struct_48380 = chunk__47607_48377.cljs$core$IIndexed$_nth$arity$2(null,i__47609_48379);
var children_48381 = shadow.dom.dom_node(child_struct_48380);
if(cljs.core.seq_QMARK_(children_48381)){
var seq__47661_48382 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48381));
var chunk__47663_48383 = null;
var count__47664_48384 = (0);
var i__47665_48385 = (0);
while(true){
if((i__47665_48385 < count__47664_48384)){
var child_48386 = chunk__47663_48383.cljs$core$IIndexed$_nth$arity$2(null,i__47665_48385);
if(cljs.core.truth_(child_48386)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48386);


var G__48387 = seq__47661_48382;
var G__48388 = chunk__47663_48383;
var G__48389 = count__47664_48384;
var G__48390 = (i__47665_48385 + (1));
seq__47661_48382 = G__48387;
chunk__47663_48383 = G__48388;
count__47664_48384 = G__48389;
i__47665_48385 = G__48390;
continue;
} else {
var G__48391 = seq__47661_48382;
var G__48392 = chunk__47663_48383;
var G__48393 = count__47664_48384;
var G__48394 = (i__47665_48385 + (1));
seq__47661_48382 = G__48391;
chunk__47663_48383 = G__48392;
count__47664_48384 = G__48393;
i__47665_48385 = G__48394;
continue;
}
} else {
var temp__5753__auto___48395 = cljs.core.seq(seq__47661_48382);
if(temp__5753__auto___48395){
var seq__47661_48396__$1 = temp__5753__auto___48395;
if(cljs.core.chunked_seq_QMARK_(seq__47661_48396__$1)){
var c__5568__auto___48397 = cljs.core.chunk_first(seq__47661_48396__$1);
var G__48398 = cljs.core.chunk_rest(seq__47661_48396__$1);
var G__48399 = c__5568__auto___48397;
var G__48400 = cljs.core.count(c__5568__auto___48397);
var G__48401 = (0);
seq__47661_48382 = G__48398;
chunk__47663_48383 = G__48399;
count__47664_48384 = G__48400;
i__47665_48385 = G__48401;
continue;
} else {
var child_48402 = cljs.core.first(seq__47661_48396__$1);
if(cljs.core.truth_(child_48402)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48402);


var G__48403 = cljs.core.next(seq__47661_48396__$1);
var G__48404 = null;
var G__48405 = (0);
var G__48406 = (0);
seq__47661_48382 = G__48403;
chunk__47663_48383 = G__48404;
count__47664_48384 = G__48405;
i__47665_48385 = G__48406;
continue;
} else {
var G__48407 = cljs.core.next(seq__47661_48396__$1);
var G__48408 = null;
var G__48409 = (0);
var G__48410 = (0);
seq__47661_48382 = G__48407;
chunk__47663_48383 = G__48408;
count__47664_48384 = G__48409;
i__47665_48385 = G__48410;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48381);
}


var G__48412 = seq__47606_48376;
var G__48413 = chunk__47607_48377;
var G__48414 = count__47608_48378;
var G__48415 = (i__47609_48379 + (1));
seq__47606_48376 = G__48412;
chunk__47607_48377 = G__48413;
count__47608_48378 = G__48414;
i__47609_48379 = G__48415;
continue;
} else {
var temp__5753__auto___48416 = cljs.core.seq(seq__47606_48376);
if(temp__5753__auto___48416){
var seq__47606_48417__$1 = temp__5753__auto___48416;
if(cljs.core.chunked_seq_QMARK_(seq__47606_48417__$1)){
var c__5568__auto___48418 = cljs.core.chunk_first(seq__47606_48417__$1);
var G__48419 = cljs.core.chunk_rest(seq__47606_48417__$1);
var G__48420 = c__5568__auto___48418;
var G__48421 = cljs.core.count(c__5568__auto___48418);
var G__48422 = (0);
seq__47606_48376 = G__48419;
chunk__47607_48377 = G__48420;
count__47608_48378 = G__48421;
i__47609_48379 = G__48422;
continue;
} else {
var child_struct_48423 = cljs.core.first(seq__47606_48417__$1);
var children_48424 = shadow.dom.dom_node(child_struct_48423);
if(cljs.core.seq_QMARK_(children_48424)){
var seq__47673_48425 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48424));
var chunk__47675_48426 = null;
var count__47676_48427 = (0);
var i__47677_48428 = (0);
while(true){
if((i__47677_48428 < count__47676_48427)){
var child_48430 = chunk__47675_48426.cljs$core$IIndexed$_nth$arity$2(null,i__47677_48428);
if(cljs.core.truth_(child_48430)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48430);


var G__48431 = seq__47673_48425;
var G__48432 = chunk__47675_48426;
var G__48433 = count__47676_48427;
var G__48434 = (i__47677_48428 + (1));
seq__47673_48425 = G__48431;
chunk__47675_48426 = G__48432;
count__47676_48427 = G__48433;
i__47677_48428 = G__48434;
continue;
} else {
var G__48435 = seq__47673_48425;
var G__48436 = chunk__47675_48426;
var G__48437 = count__47676_48427;
var G__48438 = (i__47677_48428 + (1));
seq__47673_48425 = G__48435;
chunk__47675_48426 = G__48436;
count__47676_48427 = G__48437;
i__47677_48428 = G__48438;
continue;
}
} else {
var temp__5753__auto___48439__$1 = cljs.core.seq(seq__47673_48425);
if(temp__5753__auto___48439__$1){
var seq__47673_48440__$1 = temp__5753__auto___48439__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47673_48440__$1)){
var c__5568__auto___48442 = cljs.core.chunk_first(seq__47673_48440__$1);
var G__48443 = cljs.core.chunk_rest(seq__47673_48440__$1);
var G__48444 = c__5568__auto___48442;
var G__48445 = cljs.core.count(c__5568__auto___48442);
var G__48446 = (0);
seq__47673_48425 = G__48443;
chunk__47675_48426 = G__48444;
count__47676_48427 = G__48445;
i__47677_48428 = G__48446;
continue;
} else {
var child_48447 = cljs.core.first(seq__47673_48440__$1);
if(cljs.core.truth_(child_48447)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48447);


var G__48448 = cljs.core.next(seq__47673_48440__$1);
var G__48449 = null;
var G__48450 = (0);
var G__48451 = (0);
seq__47673_48425 = G__48448;
chunk__47675_48426 = G__48449;
count__47676_48427 = G__48450;
i__47677_48428 = G__48451;
continue;
} else {
var G__48452 = cljs.core.next(seq__47673_48440__$1);
var G__48453 = null;
var G__48454 = (0);
var G__48455 = (0);
seq__47673_48425 = G__48452;
chunk__47675_48426 = G__48453;
count__47676_48427 = G__48454;
i__47677_48428 = G__48455;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48424);
}


var G__48456 = cljs.core.next(seq__47606_48417__$1);
var G__48457 = null;
var G__48458 = (0);
var G__48459 = (0);
seq__47606_48376 = G__48456;
chunk__47607_48377 = G__48457;
count__47608_48378 = G__48458;
i__47609_48379 = G__48459;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47705 = cljs.core.seq(node);
var chunk__47706 = null;
var count__47707 = (0);
var i__47708 = (0);
while(true){
if((i__47708 < count__47707)){
var n = chunk__47706.cljs$core$IIndexed$_nth$arity$2(null,i__47708);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48462 = seq__47705;
var G__48463 = chunk__47706;
var G__48464 = count__47707;
var G__48465 = (i__47708 + (1));
seq__47705 = G__48462;
chunk__47706 = G__48463;
count__47707 = G__48464;
i__47708 = G__48465;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47705);
if(temp__5753__auto__){
var seq__47705__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47705__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47705__$1);
var G__48467 = cljs.core.chunk_rest(seq__47705__$1);
var G__48468 = c__5568__auto__;
var G__48469 = cljs.core.count(c__5568__auto__);
var G__48470 = (0);
seq__47705 = G__48467;
chunk__47706 = G__48468;
count__47707 = G__48469;
i__47708 = G__48470;
continue;
} else {
var n = cljs.core.first(seq__47705__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48471 = cljs.core.next(seq__47705__$1);
var G__48472 = null;
var G__48473 = (0);
var G__48474 = (0);
seq__47705 = G__48471;
chunk__47706 = G__48472;
count__47707 = G__48473;
i__47708 = G__48474;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47719 = arguments.length;
switch (G__47719) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47725 = arguments.length;
switch (G__47725) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47741 = arguments.length;
switch (G__47741) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48479 = arguments.length;
var i__5770__auto___48480 = (0);
while(true){
if((i__5770__auto___48480 < len__5769__auto___48479)){
args__5775__auto__.push((arguments[i__5770__auto___48480]));

var G__48481 = (i__5770__auto___48480 + (1));
i__5770__auto___48480 = G__48481;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47769_48484 = cljs.core.seq(nodes);
var chunk__47770_48485 = null;
var count__47771_48486 = (0);
var i__47772_48487 = (0);
while(true){
if((i__47772_48487 < count__47771_48486)){
var node_48488 = chunk__47770_48485.cljs$core$IIndexed$_nth$arity$2(null,i__47772_48487);
fragment.appendChild(shadow.dom._to_dom(node_48488));


var G__48489 = seq__47769_48484;
var G__48490 = chunk__47770_48485;
var G__48491 = count__47771_48486;
var G__48492 = (i__47772_48487 + (1));
seq__47769_48484 = G__48489;
chunk__47770_48485 = G__48490;
count__47771_48486 = G__48491;
i__47772_48487 = G__48492;
continue;
} else {
var temp__5753__auto___48493 = cljs.core.seq(seq__47769_48484);
if(temp__5753__auto___48493){
var seq__47769_48494__$1 = temp__5753__auto___48493;
if(cljs.core.chunked_seq_QMARK_(seq__47769_48494__$1)){
var c__5568__auto___48495 = cljs.core.chunk_first(seq__47769_48494__$1);
var G__48496 = cljs.core.chunk_rest(seq__47769_48494__$1);
var G__48497 = c__5568__auto___48495;
var G__48498 = cljs.core.count(c__5568__auto___48495);
var G__48499 = (0);
seq__47769_48484 = G__48496;
chunk__47770_48485 = G__48497;
count__47771_48486 = G__48498;
i__47772_48487 = G__48499;
continue;
} else {
var node_48500 = cljs.core.first(seq__47769_48494__$1);
fragment.appendChild(shadow.dom._to_dom(node_48500));


var G__48501 = cljs.core.next(seq__47769_48494__$1);
var G__48502 = null;
var G__48503 = (0);
var G__48504 = (0);
seq__47769_48484 = G__48501;
chunk__47770_48485 = G__48502;
count__47771_48486 = G__48503;
i__47772_48487 = G__48504;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47764){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47764));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47787_48506 = cljs.core.seq(scripts);
var chunk__47788_48507 = null;
var count__47789_48508 = (0);
var i__47790_48509 = (0);
while(true){
if((i__47790_48509 < count__47789_48508)){
var vec__47800_48510 = chunk__47788_48507.cljs$core$IIndexed$_nth$arity$2(null,i__47790_48509);
var script_tag_48511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47800_48510,(0),null);
var script_body_48512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47800_48510,(1),null);
eval(script_body_48512);


var G__48514 = seq__47787_48506;
var G__48515 = chunk__47788_48507;
var G__48516 = count__47789_48508;
var G__48517 = (i__47790_48509 + (1));
seq__47787_48506 = G__48514;
chunk__47788_48507 = G__48515;
count__47789_48508 = G__48516;
i__47790_48509 = G__48517;
continue;
} else {
var temp__5753__auto___48518 = cljs.core.seq(seq__47787_48506);
if(temp__5753__auto___48518){
var seq__47787_48519__$1 = temp__5753__auto___48518;
if(cljs.core.chunked_seq_QMARK_(seq__47787_48519__$1)){
var c__5568__auto___48520 = cljs.core.chunk_first(seq__47787_48519__$1);
var G__48521 = cljs.core.chunk_rest(seq__47787_48519__$1);
var G__48522 = c__5568__auto___48520;
var G__48523 = cljs.core.count(c__5568__auto___48520);
var G__48524 = (0);
seq__47787_48506 = G__48521;
chunk__47788_48507 = G__48522;
count__47789_48508 = G__48523;
i__47790_48509 = G__48524;
continue;
} else {
var vec__47804_48526 = cljs.core.first(seq__47787_48519__$1);
var script_tag_48527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47804_48526,(0),null);
var script_body_48528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47804_48526,(1),null);
eval(script_body_48528);


var G__48529 = cljs.core.next(seq__47787_48519__$1);
var G__48530 = null;
var G__48531 = (0);
var G__48532 = (0);
seq__47787_48506 = G__48529;
chunk__47788_48507 = G__48530;
count__47789_48508 = G__48531;
i__47790_48509 = G__48532;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47815){
var vec__47816 = p__47815;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47816,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47816,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47837 = arguments.length;
switch (G__47837) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47857 = cljs.core.seq(style_keys);
var chunk__47858 = null;
var count__47859 = (0);
var i__47860 = (0);
while(true){
if((i__47860 < count__47859)){
var it = chunk__47858.cljs$core$IIndexed$_nth$arity$2(null,i__47860);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48536 = seq__47857;
var G__48537 = chunk__47858;
var G__48538 = count__47859;
var G__48539 = (i__47860 + (1));
seq__47857 = G__48536;
chunk__47858 = G__48537;
count__47859 = G__48538;
i__47860 = G__48539;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47857);
if(temp__5753__auto__){
var seq__47857__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47857__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47857__$1);
var G__48540 = cljs.core.chunk_rest(seq__47857__$1);
var G__48541 = c__5568__auto__;
var G__48542 = cljs.core.count(c__5568__auto__);
var G__48543 = (0);
seq__47857 = G__48540;
chunk__47858 = G__48541;
count__47859 = G__48542;
i__47860 = G__48543;
continue;
} else {
var it = cljs.core.first(seq__47857__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48544 = cljs.core.next(seq__47857__$1);
var G__48545 = null;
var G__48546 = (0);
var G__48547 = (0);
seq__47857 = G__48544;
chunk__47858 = G__48545;
count__47859 = G__48546;
i__47860 = G__48547;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k47870,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__47881 = k47870;
var G__47881__$1 = (((G__47881 instanceof cljs.core.Keyword))?G__47881.fqn:null);
switch (G__47881__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47870,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__47886){
var vec__47888 = p__47886;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47888,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47888,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47869){
var self__ = this;
var G__47869__$1 = this;
return (new cljs.core.RecordIter((0),G__47869__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47871,other47872){
var self__ = this;
var this47871__$1 = this;
return (((!((other47872 == null)))) && ((((this47871__$1.constructor === other47872.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47871__$1.x,other47872.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47871__$1.y,other47872.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47871__$1.__extmap,other47872.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k47870){
var self__ = this;
var this__5350__auto____$1 = this;
var G__47925 = k47870;
var G__47925__$1 = (((G__47925 instanceof cljs.core.Keyword))?G__47925.fqn:null);
switch (G__47925__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47870);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__47869){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__47926 = cljs.core.keyword_identical_QMARK_;
var expr__47927 = k__5352__auto__;
if(cljs.core.truth_((pred__47926.cljs$core$IFn$_invoke$arity$2 ? pred__47926.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47927) : pred__47926.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47927)))){
return (new shadow.dom.Coordinate(G__47869,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47926.cljs$core$IFn$_invoke$arity$2 ? pred__47926.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47927) : pred__47926.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47927)))){
return (new shadow.dom.Coordinate(self__.x,G__47869,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__47869),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__47869){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47869,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47875){
var extmap__5385__auto__ = (function (){var G__47938 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47875,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47875)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47938);
} else {
return G__47938;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47875),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47875),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k47951,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__47962 = k47951;
var G__47962__$1 = (((G__47962 instanceof cljs.core.Keyword))?G__47962.fqn:null);
switch (G__47962__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47951,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__47973){
var vec__47981 = p__47973;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47981,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47981,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47950){
var self__ = this;
var G__47950__$1 = this;
return (new cljs.core.RecordIter((0),G__47950__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47952,other47953){
var self__ = this;
var this47952__$1 = this;
return (((!((other47953 == null)))) && ((((this47952__$1.constructor === other47953.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47952__$1.w,other47953.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47952__$1.h,other47953.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47952__$1.__extmap,other47953.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k47951){
var self__ = this;
var this__5350__auto____$1 = this;
var G__48012 = k47951;
var G__48012__$1 = (((G__48012 instanceof cljs.core.Keyword))?G__48012.fqn:null);
switch (G__48012__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47951);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__47950){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__48014 = cljs.core.keyword_identical_QMARK_;
var expr__48015 = k__5352__auto__;
if(cljs.core.truth_((pred__48014.cljs$core$IFn$_invoke$arity$2 ? pred__48014.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__48015) : pred__48014.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__48015)))){
return (new shadow.dom.Size(G__47950,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48014.cljs$core$IFn$_invoke$arity$2 ? pred__48014.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__48015) : pred__48014.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__48015)))){
return (new shadow.dom.Size(self__.w,G__47950,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__47950),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__47950){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47950,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47955){
var extmap__5385__auto__ = (function (){var G__48032 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47955,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47955)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48032);
} else {
return G__48032;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47955),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47955),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__48676 = (i + (1));
var G__48677 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48676;
ret = G__48677;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48066){
var vec__48067 = p__48066;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48067,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48067,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48076 = arguments.length;
switch (G__48076) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48686 = ps;
var G__48687 = (i + (1));
el__$1 = G__48686;
i = G__48687;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48100 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48100,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48100,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48100,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48104_48690 = cljs.core.seq(props);
var chunk__48105_48691 = null;
var count__48106_48692 = (0);
var i__48107_48693 = (0);
while(true){
if((i__48107_48693 < count__48106_48692)){
var vec__48129_48694 = chunk__48105_48691.cljs$core$IIndexed$_nth$arity$2(null,i__48107_48693);
var k_48695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48129_48694,(0),null);
var v_48696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48129_48694,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_48695);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48695),v_48696);


var G__48698 = seq__48104_48690;
var G__48699 = chunk__48105_48691;
var G__48700 = count__48106_48692;
var G__48701 = (i__48107_48693 + (1));
seq__48104_48690 = G__48698;
chunk__48105_48691 = G__48699;
count__48106_48692 = G__48700;
i__48107_48693 = G__48701;
continue;
} else {
var temp__5753__auto___48702 = cljs.core.seq(seq__48104_48690);
if(temp__5753__auto___48702){
var seq__48104_48703__$1 = temp__5753__auto___48702;
if(cljs.core.chunked_seq_QMARK_(seq__48104_48703__$1)){
var c__5568__auto___48704 = cljs.core.chunk_first(seq__48104_48703__$1);
var G__48705 = cljs.core.chunk_rest(seq__48104_48703__$1);
var G__48706 = c__5568__auto___48704;
var G__48707 = cljs.core.count(c__5568__auto___48704);
var G__48708 = (0);
seq__48104_48690 = G__48705;
chunk__48105_48691 = G__48706;
count__48106_48692 = G__48707;
i__48107_48693 = G__48708;
continue;
} else {
var vec__48135_48709 = cljs.core.first(seq__48104_48703__$1);
var k_48710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48135_48709,(0),null);
var v_48711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48135_48709,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_48710);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48710),v_48711);


var G__48712 = cljs.core.next(seq__48104_48703__$1);
var G__48713 = null;
var G__48714 = (0);
var G__48715 = (0);
seq__48104_48690 = G__48712;
chunk__48105_48691 = G__48713;
count__48106_48692 = G__48714;
i__48107_48693 = G__48715;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48140 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48140,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48140,(1),null);
var seq__48143_48716 = cljs.core.seq(node_children);
var chunk__48145_48717 = null;
var count__48146_48718 = (0);
var i__48147_48719 = (0);
while(true){
if((i__48147_48719 < count__48146_48718)){
var child_struct_48720 = chunk__48145_48717.cljs$core$IIndexed$_nth$arity$2(null,i__48147_48719);
if((!((child_struct_48720 == null)))){
if(typeof child_struct_48720 === 'string'){
var text_48721 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48721),child_struct_48720].join(''));
} else {
var children_48722 = shadow.dom.svg_node(child_struct_48720);
if(cljs.core.seq_QMARK_(children_48722)){
var seq__48178_48727 = cljs.core.seq(children_48722);
var chunk__48180_48728 = null;
var count__48181_48729 = (0);
var i__48182_48730 = (0);
while(true){
if((i__48182_48730 < count__48181_48729)){
var child_48733 = chunk__48180_48728.cljs$core$IIndexed$_nth$arity$2(null,i__48182_48730);
if(cljs.core.truth_(child_48733)){
node.appendChild(child_48733);


var G__48738 = seq__48178_48727;
var G__48739 = chunk__48180_48728;
var G__48740 = count__48181_48729;
var G__48741 = (i__48182_48730 + (1));
seq__48178_48727 = G__48738;
chunk__48180_48728 = G__48739;
count__48181_48729 = G__48740;
i__48182_48730 = G__48741;
continue;
} else {
var G__48746 = seq__48178_48727;
var G__48747 = chunk__48180_48728;
var G__48748 = count__48181_48729;
var G__48749 = (i__48182_48730 + (1));
seq__48178_48727 = G__48746;
chunk__48180_48728 = G__48747;
count__48181_48729 = G__48748;
i__48182_48730 = G__48749;
continue;
}
} else {
var temp__5753__auto___48750 = cljs.core.seq(seq__48178_48727);
if(temp__5753__auto___48750){
var seq__48178_48752__$1 = temp__5753__auto___48750;
if(cljs.core.chunked_seq_QMARK_(seq__48178_48752__$1)){
var c__5568__auto___48754 = cljs.core.chunk_first(seq__48178_48752__$1);
var G__48756 = cljs.core.chunk_rest(seq__48178_48752__$1);
var G__48757 = c__5568__auto___48754;
var G__48758 = cljs.core.count(c__5568__auto___48754);
var G__48759 = (0);
seq__48178_48727 = G__48756;
chunk__48180_48728 = G__48757;
count__48181_48729 = G__48758;
i__48182_48730 = G__48759;
continue;
} else {
var child_48761 = cljs.core.first(seq__48178_48752__$1);
if(cljs.core.truth_(child_48761)){
node.appendChild(child_48761);


var G__48764 = cljs.core.next(seq__48178_48752__$1);
var G__48765 = null;
var G__48766 = (0);
var G__48767 = (0);
seq__48178_48727 = G__48764;
chunk__48180_48728 = G__48765;
count__48181_48729 = G__48766;
i__48182_48730 = G__48767;
continue;
} else {
var G__48768 = cljs.core.next(seq__48178_48752__$1);
var G__48769 = null;
var G__48770 = (0);
var G__48771 = (0);
seq__48178_48727 = G__48768;
chunk__48180_48728 = G__48769;
count__48181_48729 = G__48770;
i__48182_48730 = G__48771;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48722);
}
}


var G__48775 = seq__48143_48716;
var G__48776 = chunk__48145_48717;
var G__48777 = count__48146_48718;
var G__48778 = (i__48147_48719 + (1));
seq__48143_48716 = G__48775;
chunk__48145_48717 = G__48776;
count__48146_48718 = G__48777;
i__48147_48719 = G__48778;
continue;
} else {
var G__48780 = seq__48143_48716;
var G__48781 = chunk__48145_48717;
var G__48782 = count__48146_48718;
var G__48783 = (i__48147_48719 + (1));
seq__48143_48716 = G__48780;
chunk__48145_48717 = G__48781;
count__48146_48718 = G__48782;
i__48147_48719 = G__48783;
continue;
}
} else {
var temp__5753__auto___48785 = cljs.core.seq(seq__48143_48716);
if(temp__5753__auto___48785){
var seq__48143_48786__$1 = temp__5753__auto___48785;
if(cljs.core.chunked_seq_QMARK_(seq__48143_48786__$1)){
var c__5568__auto___48790 = cljs.core.chunk_first(seq__48143_48786__$1);
var G__48791 = cljs.core.chunk_rest(seq__48143_48786__$1);
var G__48792 = c__5568__auto___48790;
var G__48793 = cljs.core.count(c__5568__auto___48790);
var G__48794 = (0);
seq__48143_48716 = G__48791;
chunk__48145_48717 = G__48792;
count__48146_48718 = G__48793;
i__48147_48719 = G__48794;
continue;
} else {
var child_struct_48796 = cljs.core.first(seq__48143_48786__$1);
if((!((child_struct_48796 == null)))){
if(typeof child_struct_48796 === 'string'){
var text_48798 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48798),child_struct_48796].join(''));
} else {
var children_48799 = shadow.dom.svg_node(child_struct_48796);
if(cljs.core.seq_QMARK_(children_48799)){
var seq__48194_48800 = cljs.core.seq(children_48799);
var chunk__48196_48801 = null;
var count__48197_48802 = (0);
var i__48198_48803 = (0);
while(true){
if((i__48198_48803 < count__48197_48802)){
var child_48805 = chunk__48196_48801.cljs$core$IIndexed$_nth$arity$2(null,i__48198_48803);
if(cljs.core.truth_(child_48805)){
node.appendChild(child_48805);


var G__48808 = seq__48194_48800;
var G__48809 = chunk__48196_48801;
var G__48810 = count__48197_48802;
var G__48811 = (i__48198_48803 + (1));
seq__48194_48800 = G__48808;
chunk__48196_48801 = G__48809;
count__48197_48802 = G__48810;
i__48198_48803 = G__48811;
continue;
} else {
var G__48814 = seq__48194_48800;
var G__48815 = chunk__48196_48801;
var G__48816 = count__48197_48802;
var G__48817 = (i__48198_48803 + (1));
seq__48194_48800 = G__48814;
chunk__48196_48801 = G__48815;
count__48197_48802 = G__48816;
i__48198_48803 = G__48817;
continue;
}
} else {
var temp__5753__auto___48818__$1 = cljs.core.seq(seq__48194_48800);
if(temp__5753__auto___48818__$1){
var seq__48194_48821__$1 = temp__5753__auto___48818__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48194_48821__$1)){
var c__5568__auto___48823 = cljs.core.chunk_first(seq__48194_48821__$1);
var G__48824 = cljs.core.chunk_rest(seq__48194_48821__$1);
var G__48825 = c__5568__auto___48823;
var G__48826 = cljs.core.count(c__5568__auto___48823);
var G__48827 = (0);
seq__48194_48800 = G__48824;
chunk__48196_48801 = G__48825;
count__48197_48802 = G__48826;
i__48198_48803 = G__48827;
continue;
} else {
var child_48828 = cljs.core.first(seq__48194_48821__$1);
if(cljs.core.truth_(child_48828)){
node.appendChild(child_48828);


var G__48831 = cljs.core.next(seq__48194_48821__$1);
var G__48832 = null;
var G__48833 = (0);
var G__48834 = (0);
seq__48194_48800 = G__48831;
chunk__48196_48801 = G__48832;
count__48197_48802 = G__48833;
i__48198_48803 = G__48834;
continue;
} else {
var G__48840 = cljs.core.next(seq__48194_48821__$1);
var G__48841 = null;
var G__48842 = (0);
var G__48843 = (0);
seq__48194_48800 = G__48840;
chunk__48196_48801 = G__48841;
count__48197_48802 = G__48842;
i__48198_48803 = G__48843;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48799);
}
}


var G__48850 = cljs.core.next(seq__48143_48786__$1);
var G__48851 = null;
var G__48852 = (0);
var G__48853 = (0);
seq__48143_48716 = G__48850;
chunk__48145_48717 = G__48851;
count__48146_48718 = G__48852;
i__48147_48719 = G__48853;
continue;
} else {
var G__48855 = cljs.core.next(seq__48143_48786__$1);
var G__48856 = null;
var G__48857 = (0);
var G__48858 = (0);
seq__48143_48716 = G__48855;
chunk__48145_48717 = G__48856;
count__48146_48718 = G__48857;
i__48147_48719 = G__48858;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48895 = arguments.length;
var i__5770__auto___48896 = (0);
while(true){
if((i__5770__auto___48896 < len__5769__auto___48895)){
args__5775__auto__.push((arguments[i__5770__auto___48896]));

var G__48914 = (i__5770__auto___48896 + (1));
i__5770__auto___48896 = G__48914;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48212){
var G__48213 = cljs.core.first(seq48212);
var seq48212__$1 = cljs.core.next(seq48212);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48213,seq48212__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48232 = arguments.length;
switch (G__48232) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__45083__auto___48967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_48244){
var state_val_48246 = (state_48244[(1)]);
if((state_val_48246 === (1))){
var state_48244__$1 = state_48244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48244__$1,(2),once_or_cleanup);
} else {
if((state_val_48246 === (2))){
var inst_48241 = (state_48244[(2)]);
var inst_48242 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48244__$1 = (function (){var statearr_48250 = state_48244;
(statearr_48250[(7)] = inst_48241);

return statearr_48250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48244__$1,inst_48242);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__44889__auto__ = null;
var shadow$dom$state_machine__44889__auto____0 = (function (){
var statearr_48252 = [null,null,null,null,null,null,null,null];
(statearr_48252[(0)] = shadow$dom$state_machine__44889__auto__);

(statearr_48252[(1)] = (1));

return statearr_48252;
});
var shadow$dom$state_machine__44889__auto____1 = (function (state_48244){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_48244);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e48255){var ex__44892__auto__ = e48255;
var statearr_48256_48982 = state_48244;
(statearr_48256_48982[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_48244[(4)]))){
var statearr_48258_48983 = state_48244;
(statearr_48258_48983[(1)] = cljs.core.first((state_48244[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48984 = state_48244;
state_48244 = G__48984;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
shadow$dom$state_machine__44889__auto__ = function(state_48244){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__44889__auto____0.call(this);
case 1:
return shadow$dom$state_machine__44889__auto____1.call(this,state_48244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__44889__auto____0;
shadow$dom$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__44889__auto____1;
return shadow$dom$state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_48259 = f__45084__auto__();
(statearr_48259[(6)] = c__45083__auto___48967);

return statearr_48259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
