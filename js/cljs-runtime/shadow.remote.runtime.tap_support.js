import "./cljs_env.js";
goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__49202,p__49203){
var map__49205 = p__49202;
var map__49205__$1 = cljs.core.__destructure_map(map__49205);
var svc = map__49205__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49205__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49205__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49205__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__49206 = p__49203;
var map__49206__$1 = cljs.core.__destructure_map(map__49206);
var msg = map__49206__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49206__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49206__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49206__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49206__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__49218,p__49219){
var map__49223 = p__49218;
var map__49223__$1 = cljs.core.__destructure_map(map__49223);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49223__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__49224 = p__49219;
var map__49224__$1 = cljs.core.__destructure_map(map__49224);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49224__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__49228,p__49229){
var map__49233 = p__49228;
var map__49233__$1 = cljs.core.__destructure_map(map__49233);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49233__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49233__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__49234 = p__49229;
var map__49234__$1 = cljs.core.__destructure_map(map__49234);
var msg = map__49234__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49234__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__49240,tid){
var map__49241 = p__49240;
var map__49241__$1 = cljs.core.__destructure_map(map__49241);
var svc = map__49241__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49241__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__49254 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__49255 = null;
var count__49256 = (0);
var i__49257 = (0);
while(true){
if((i__49257 < count__49256)){
var vec__49271 = chunk__49255.cljs$core$IIndexed$_nth$arity$2(null,i__49257);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49271,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49271,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__49293 = seq__49254;
var G__49294 = chunk__49255;
var G__49295 = count__49256;
var G__49296 = (i__49257 + (1));
seq__49254 = G__49293;
chunk__49255 = G__49294;
count__49256 = G__49295;
i__49257 = G__49296;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49254);
if(temp__5753__auto__){
var seq__49254__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49254__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49254__$1);
var G__49297 = cljs.core.chunk_rest(seq__49254__$1);
var G__49298 = c__5568__auto__;
var G__49299 = cljs.core.count(c__5568__auto__);
var G__49300 = (0);
seq__49254 = G__49297;
chunk__49255 = G__49298;
count__49256 = G__49299;
i__49257 = G__49300;
continue;
} else {
var vec__49275 = cljs.core.first(seq__49254__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49275,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49275,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__49303 = cljs.core.next(seq__49254__$1);
var G__49304 = null;
var G__49305 = (0);
var G__49306 = (0);
seq__49254 = G__49303;
chunk__49255 = G__49304;
count__49256 = G__49305;
i__49257 = G__49306;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__49242_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__49242_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__49246_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__49246_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__49249_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__49249_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__49251_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__49251_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__49279){
var map__49281 = p__49279;
var map__49281__$1 = cljs.core.__destructure_map(map__49281);
var svc = map__49281__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49281__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49281__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
