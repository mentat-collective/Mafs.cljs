import "./cljs_env.js";
goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___51551 = arguments.length;
var i__5770__auto___51552 = (0);
while(true){
if((i__5770__auto___51552 < len__5769__auto___51551)){
args__5775__auto__.push((arguments[i__5770__auto___51552]));

var G__51553 = (i__5770__auto___51552 + (1));
i__5770__auto___51552 = G__51553;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50829){
var G__50830 = cljs.core.first(seq50829);
var seq50829__$1 = cljs.core.next(seq50829);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50830,seq50829__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50867 = cljs.core.seq(sources);
var chunk__50868 = null;
var count__50869 = (0);
var i__50870 = (0);
while(true){
if((i__50870 < count__50869)){
var map__50900 = chunk__50868.cljs$core$IIndexed$_nth$arity$2(null,i__50870);
var map__50900__$1 = cljs.core.__destructure_map(map__50900);
var src = map__50900__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50900__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50900__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50900__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50900__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50902){var e_51559 = e50902;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51559);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51559.message)].join('')));
}

var G__51560 = seq__50867;
var G__51561 = chunk__50868;
var G__51562 = count__50869;
var G__51563 = (i__50870 + (1));
seq__50867 = G__51560;
chunk__50868 = G__51561;
count__50869 = G__51562;
i__50870 = G__51563;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50867);
if(temp__5753__auto__){
var seq__50867__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50867__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50867__$1);
var G__51570 = cljs.core.chunk_rest(seq__50867__$1);
var G__51571 = c__5568__auto__;
var G__51572 = cljs.core.count(c__5568__auto__);
var G__51573 = (0);
seq__50867 = G__51570;
chunk__50868 = G__51571;
count__50869 = G__51572;
i__50870 = G__51573;
continue;
} else {
var map__50904 = cljs.core.first(seq__50867__$1);
var map__50904__$1 = cljs.core.__destructure_map(map__50904);
var src = map__50904__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50904__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50904__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50904__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50904__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50905){var e_51574 = e50905;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51574);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51574.message)].join('')));
}

var G__51576 = cljs.core.next(seq__50867__$1);
var G__51577 = null;
var G__51578 = (0);
var G__51579 = (0);
seq__50867 = G__51576;
chunk__50868 = G__51577;
count__50869 = G__51578;
i__50870 = G__51579;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50908 = cljs.core.seq(js_requires);
var chunk__50909 = null;
var count__50910 = (0);
var i__50911 = (0);
while(true){
if((i__50911 < count__50910)){
var js_ns = chunk__50909.cljs$core$IIndexed$_nth$arity$2(null,i__50911);
var require_str_51581 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51581);


var G__51582 = seq__50908;
var G__51583 = chunk__50909;
var G__51584 = count__50910;
var G__51585 = (i__50911 + (1));
seq__50908 = G__51582;
chunk__50909 = G__51583;
count__50910 = G__51584;
i__50911 = G__51585;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50908);
if(temp__5753__auto__){
var seq__50908__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50908__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50908__$1);
var G__51592 = cljs.core.chunk_rest(seq__50908__$1);
var G__51593 = c__5568__auto__;
var G__51594 = cljs.core.count(c__5568__auto__);
var G__51595 = (0);
seq__50908 = G__51592;
chunk__50909 = G__51593;
count__50910 = G__51594;
i__50911 = G__51595;
continue;
} else {
var js_ns = cljs.core.first(seq__50908__$1);
var require_str_51597 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51597);


var G__51598 = cljs.core.next(seq__50908__$1);
var G__51599 = null;
var G__51600 = (0);
var G__51601 = (0);
seq__50908 = G__51598;
chunk__50909 = G__51599;
count__50910 = G__51600;
i__50911 = G__51601;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__50920){
var map__50921 = p__50920;
var map__50921__$1 = cljs.core.__destructure_map(map__50921);
var msg = map__50921__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50921__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50921__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50922(s__50923){
return (new cljs.core.LazySeq(null,(function (){
var s__50923__$1 = s__50923;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50923__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__50928 = cljs.core.first(xs__6308__auto__);
var map__50928__$1 = cljs.core.__destructure_map(map__50928);
var src = map__50928__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50928__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50928__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__50923__$1,map__50928,map__50928__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50921,map__50921__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50922_$_iter__50924(s__50925){
return (new cljs.core.LazySeq(null,((function (s__50923__$1,map__50928,map__50928__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50921,map__50921__$1,msg,info,reload_info){
return (function (){
var s__50925__$1 = s__50925;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50925__$1);
if(temp__5753__auto____$1){
var s__50925__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50925__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__50925__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__50927 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__50926 = (0);
while(true){
if((i__50926 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__50926);
cljs.core.chunk_append(b__50927,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51606 = (i__50926 + (1));
i__50926 = G__51606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50927),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50922_$_iter__50924(cljs.core.chunk_rest(s__50925__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50927),null);
}
} else {
var warning = cljs.core.first(s__50925__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50922_$_iter__50924(cljs.core.rest(s__50925__$2)));
}
} else {
return null;
}
break;
}
});})(s__50923__$1,map__50928,map__50928__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50921,map__50921__$1,msg,info,reload_info))
,null,null));
});})(s__50923__$1,map__50928,map__50928__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50921,map__50921__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50922(cljs.core.rest(s__50923__$1)));
} else {
var G__51607 = cljs.core.rest(s__50923__$1);
s__50923__$1 = G__51607;
continue;
}
} else {
var G__51608 = cljs.core.rest(s__50923__$1);
s__50923__$1 = G__51608;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__50930_51609 = cljs.core.seq(warnings);
var chunk__50931_51610 = null;
var count__50932_51611 = (0);
var i__50933_51612 = (0);
while(true){
if((i__50933_51612 < count__50932_51611)){
var map__50936_51619 = chunk__50931_51610.cljs$core$IIndexed$_nth$arity$2(null,i__50933_51612);
var map__50936_51620__$1 = cljs.core.__destructure_map(map__50936_51619);
var w_51621 = map__50936_51620__$1;
var msg_51622__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50936_51620__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50936_51620__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50936_51620__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50936_51620__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51625)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51623),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51624),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51622__$1)].join(''));


var G__51626 = seq__50930_51609;
var G__51627 = chunk__50931_51610;
var G__51628 = count__50932_51611;
var G__51629 = (i__50933_51612 + (1));
seq__50930_51609 = G__51626;
chunk__50931_51610 = G__51627;
count__50932_51611 = G__51628;
i__50933_51612 = G__51629;
continue;
} else {
var temp__5753__auto___51630 = cljs.core.seq(seq__50930_51609);
if(temp__5753__auto___51630){
var seq__50930_51631__$1 = temp__5753__auto___51630;
if(cljs.core.chunked_seq_QMARK_(seq__50930_51631__$1)){
var c__5568__auto___51632 = cljs.core.chunk_first(seq__50930_51631__$1);
var G__51633 = cljs.core.chunk_rest(seq__50930_51631__$1);
var G__51634 = c__5568__auto___51632;
var G__51635 = cljs.core.count(c__5568__auto___51632);
var G__51636 = (0);
seq__50930_51609 = G__51633;
chunk__50931_51610 = G__51634;
count__50932_51611 = G__51635;
i__50933_51612 = G__51636;
continue;
} else {
var map__50937_51637 = cljs.core.first(seq__50930_51631__$1);
var map__50937_51638__$1 = cljs.core.__destructure_map(map__50937_51637);
var w_51639 = map__50937_51638__$1;
var msg_51640__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50937_51638__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50937_51638__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50937_51638__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50937_51638__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51643)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51641),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51642),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51640__$1)].join(''));


var G__51646 = cljs.core.next(seq__50930_51631__$1);
var G__51647 = null;
var G__51648 = (0);
var G__51649 = (0);
seq__50930_51609 = G__51646;
chunk__50931_51610 = G__51647;
count__50932_51611 = G__51648;
i__50933_51612 = G__51649;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__50919_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50919_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__50940){
var map__50941 = p__50940;
var map__50941__$1 = cljs.core.__destructure_map(map__50941);
var msg = map__50941__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50941__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50941__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__50942 = cljs.core.seq(updates);
var chunk__50944 = null;
var count__50945 = (0);
var i__50946 = (0);
while(true){
if((i__50946 < count__50945)){
var path = chunk__50944.cljs$core$IIndexed$_nth$arity$2(null,i__50946);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51200_51654 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51204_51655 = null;
var count__51205_51656 = (0);
var i__51206_51657 = (0);
while(true){
if((i__51206_51657 < count__51205_51656)){
var node_51668 = chunk__51204_51655.cljs$core$IIndexed$_nth$arity$2(null,i__51206_51657);
if(cljs.core.not(node_51668.shadow$old)){
var path_match_51669 = shadow.cljs.devtools.client.browser.match_paths(node_51668.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51669)){
var new_link_51670 = (function (){var G__51273 = node_51668.cloneNode(true);
G__51273.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51669),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51273;
})();
(node_51668.shadow$old = true);

(new_link_51670.onload = ((function (seq__51200_51654,chunk__51204_51655,count__51205_51656,i__51206_51657,seq__50942,chunk__50944,count__50945,i__50946,new_link_51670,path_match_51669,node_51668,path,map__50941,map__50941__$1,msg,updates,reload_info){
return (function (e){
var seq__51274_51671 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51276_51672 = null;
var count__51277_51673 = (0);
var i__51278_51674 = (0);
while(true){
if((i__51278_51674 < count__51277_51673)){
var map__51284_51675 = chunk__51276_51672.cljs$core$IIndexed$_nth$arity$2(null,i__51278_51674);
var map__51284_51676__$1 = cljs.core.__destructure_map(map__51284_51675);
var task_51677 = map__51284_51676__$1;
var fn_str_51678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51284_51676__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51284_51676__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51682 = goog.getObjectByName(fn_str_51678,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51679)].join(''));

(fn_obj_51682.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51682.cljs$core$IFn$_invoke$arity$2(path,new_link_51670) : fn_obj_51682.call(null,path,new_link_51670));


var G__51683 = seq__51274_51671;
var G__51684 = chunk__51276_51672;
var G__51685 = count__51277_51673;
var G__51686 = (i__51278_51674 + (1));
seq__51274_51671 = G__51683;
chunk__51276_51672 = G__51684;
count__51277_51673 = G__51685;
i__51278_51674 = G__51686;
continue;
} else {
var temp__5753__auto___51687 = cljs.core.seq(seq__51274_51671);
if(temp__5753__auto___51687){
var seq__51274_51688__$1 = temp__5753__auto___51687;
if(cljs.core.chunked_seq_QMARK_(seq__51274_51688__$1)){
var c__5568__auto___51689 = cljs.core.chunk_first(seq__51274_51688__$1);
var G__51690 = cljs.core.chunk_rest(seq__51274_51688__$1);
var G__51691 = c__5568__auto___51689;
var G__51692 = cljs.core.count(c__5568__auto___51689);
var G__51693 = (0);
seq__51274_51671 = G__51690;
chunk__51276_51672 = G__51691;
count__51277_51673 = G__51692;
i__51278_51674 = G__51693;
continue;
} else {
var map__51287_51695 = cljs.core.first(seq__51274_51688__$1);
var map__51287_51696__$1 = cljs.core.__destructure_map(map__51287_51695);
var task_51697 = map__51287_51696__$1;
var fn_str_51698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51287_51696__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51287_51696__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51700 = goog.getObjectByName(fn_str_51698,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51699)].join(''));

(fn_obj_51700.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51700.cljs$core$IFn$_invoke$arity$2(path,new_link_51670) : fn_obj_51700.call(null,path,new_link_51670));


var G__51701 = cljs.core.next(seq__51274_51688__$1);
var G__51702 = null;
var G__51703 = (0);
var G__51704 = (0);
seq__51274_51671 = G__51701;
chunk__51276_51672 = G__51702;
count__51277_51673 = G__51703;
i__51278_51674 = G__51704;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51668);
});})(seq__51200_51654,chunk__51204_51655,count__51205_51656,i__51206_51657,seq__50942,chunk__50944,count__50945,i__50946,new_link_51670,path_match_51669,node_51668,path,map__50941,map__50941__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51669], 0));

goog.dom.insertSiblingAfter(new_link_51670,node_51668);


var G__51705 = seq__51200_51654;
var G__51706 = chunk__51204_51655;
var G__51707 = count__51205_51656;
var G__51708 = (i__51206_51657 + (1));
seq__51200_51654 = G__51705;
chunk__51204_51655 = G__51706;
count__51205_51656 = G__51707;
i__51206_51657 = G__51708;
continue;
} else {
var G__51709 = seq__51200_51654;
var G__51710 = chunk__51204_51655;
var G__51711 = count__51205_51656;
var G__51712 = (i__51206_51657 + (1));
seq__51200_51654 = G__51709;
chunk__51204_51655 = G__51710;
count__51205_51656 = G__51711;
i__51206_51657 = G__51712;
continue;
}
} else {
var G__51713 = seq__51200_51654;
var G__51714 = chunk__51204_51655;
var G__51715 = count__51205_51656;
var G__51716 = (i__51206_51657 + (1));
seq__51200_51654 = G__51713;
chunk__51204_51655 = G__51714;
count__51205_51656 = G__51715;
i__51206_51657 = G__51716;
continue;
}
} else {
var temp__5753__auto___51717 = cljs.core.seq(seq__51200_51654);
if(temp__5753__auto___51717){
var seq__51200_51719__$1 = temp__5753__auto___51717;
if(cljs.core.chunked_seq_QMARK_(seq__51200_51719__$1)){
var c__5568__auto___51720 = cljs.core.chunk_first(seq__51200_51719__$1);
var G__51721 = cljs.core.chunk_rest(seq__51200_51719__$1);
var G__51722 = c__5568__auto___51720;
var G__51723 = cljs.core.count(c__5568__auto___51720);
var G__51724 = (0);
seq__51200_51654 = G__51721;
chunk__51204_51655 = G__51722;
count__51205_51656 = G__51723;
i__51206_51657 = G__51724;
continue;
} else {
var node_51725 = cljs.core.first(seq__51200_51719__$1);
if(cljs.core.not(node_51725.shadow$old)){
var path_match_51726 = shadow.cljs.devtools.client.browser.match_paths(node_51725.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51726)){
var new_link_51727 = (function (){var G__51293 = node_51725.cloneNode(true);
G__51293.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51726),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51293;
})();
(node_51725.shadow$old = true);

(new_link_51727.onload = ((function (seq__51200_51654,chunk__51204_51655,count__51205_51656,i__51206_51657,seq__50942,chunk__50944,count__50945,i__50946,new_link_51727,path_match_51726,node_51725,seq__51200_51719__$1,temp__5753__auto___51717,path,map__50941,map__50941__$1,msg,updates,reload_info){
return (function (e){
var seq__51294_51728 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51296_51729 = null;
var count__51297_51730 = (0);
var i__51298_51731 = (0);
while(true){
if((i__51298_51731 < count__51297_51730)){
var map__51315_51732 = chunk__51296_51729.cljs$core$IIndexed$_nth$arity$2(null,i__51298_51731);
var map__51315_51734__$1 = cljs.core.__destructure_map(map__51315_51732);
var task_51735 = map__51315_51734__$1;
var fn_str_51736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51315_51734__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51315_51734__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51738 = goog.getObjectByName(fn_str_51736,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51737)].join(''));

(fn_obj_51738.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51738.cljs$core$IFn$_invoke$arity$2(path,new_link_51727) : fn_obj_51738.call(null,path,new_link_51727));


var G__51739 = seq__51294_51728;
var G__51740 = chunk__51296_51729;
var G__51741 = count__51297_51730;
var G__51742 = (i__51298_51731 + (1));
seq__51294_51728 = G__51739;
chunk__51296_51729 = G__51740;
count__51297_51730 = G__51741;
i__51298_51731 = G__51742;
continue;
} else {
var temp__5753__auto___51745__$1 = cljs.core.seq(seq__51294_51728);
if(temp__5753__auto___51745__$1){
var seq__51294_51746__$1 = temp__5753__auto___51745__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51294_51746__$1)){
var c__5568__auto___51747 = cljs.core.chunk_first(seq__51294_51746__$1);
var G__51748 = cljs.core.chunk_rest(seq__51294_51746__$1);
var G__51749 = c__5568__auto___51747;
var G__51750 = cljs.core.count(c__5568__auto___51747);
var G__51751 = (0);
seq__51294_51728 = G__51748;
chunk__51296_51729 = G__51749;
count__51297_51730 = G__51750;
i__51298_51731 = G__51751;
continue;
} else {
var map__51330_51752 = cljs.core.first(seq__51294_51746__$1);
var map__51330_51753__$1 = cljs.core.__destructure_map(map__51330_51752);
var task_51754 = map__51330_51753__$1;
var fn_str_51755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51330_51753__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51330_51753__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51757 = goog.getObjectByName(fn_str_51755,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51756)].join(''));

(fn_obj_51757.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51757.cljs$core$IFn$_invoke$arity$2(path,new_link_51727) : fn_obj_51757.call(null,path,new_link_51727));


var G__51758 = cljs.core.next(seq__51294_51746__$1);
var G__51759 = null;
var G__51760 = (0);
var G__51761 = (0);
seq__51294_51728 = G__51758;
chunk__51296_51729 = G__51759;
count__51297_51730 = G__51760;
i__51298_51731 = G__51761;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51725);
});})(seq__51200_51654,chunk__51204_51655,count__51205_51656,i__51206_51657,seq__50942,chunk__50944,count__50945,i__50946,new_link_51727,path_match_51726,node_51725,seq__51200_51719__$1,temp__5753__auto___51717,path,map__50941,map__50941__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51726], 0));

goog.dom.insertSiblingAfter(new_link_51727,node_51725);


var G__51764 = cljs.core.next(seq__51200_51719__$1);
var G__51765 = null;
var G__51766 = (0);
var G__51767 = (0);
seq__51200_51654 = G__51764;
chunk__51204_51655 = G__51765;
count__51205_51656 = G__51766;
i__51206_51657 = G__51767;
continue;
} else {
var G__51768 = cljs.core.next(seq__51200_51719__$1);
var G__51769 = null;
var G__51770 = (0);
var G__51771 = (0);
seq__51200_51654 = G__51768;
chunk__51204_51655 = G__51769;
count__51205_51656 = G__51770;
i__51206_51657 = G__51771;
continue;
}
} else {
var G__51772 = cljs.core.next(seq__51200_51719__$1);
var G__51773 = null;
var G__51774 = (0);
var G__51775 = (0);
seq__51200_51654 = G__51772;
chunk__51204_51655 = G__51773;
count__51205_51656 = G__51774;
i__51206_51657 = G__51775;
continue;
}
}
} else {
}
}
break;
}


var G__51776 = seq__50942;
var G__51777 = chunk__50944;
var G__51778 = count__50945;
var G__51779 = (i__50946 + (1));
seq__50942 = G__51776;
chunk__50944 = G__51777;
count__50945 = G__51778;
i__50946 = G__51779;
continue;
} else {
var G__51783 = seq__50942;
var G__51784 = chunk__50944;
var G__51785 = count__50945;
var G__51786 = (i__50946 + (1));
seq__50942 = G__51783;
chunk__50944 = G__51784;
count__50945 = G__51785;
i__50946 = G__51786;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50942);
if(temp__5753__auto__){
var seq__50942__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50942__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50942__$1);
var G__51788 = cljs.core.chunk_rest(seq__50942__$1);
var G__51789 = c__5568__auto__;
var G__51790 = cljs.core.count(c__5568__auto__);
var G__51791 = (0);
seq__50942 = G__51788;
chunk__50944 = G__51789;
count__50945 = G__51790;
i__50946 = G__51791;
continue;
} else {
var path = cljs.core.first(seq__50942__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51360_51795 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51386_51796 = null;
var count__51387_51797 = (0);
var i__51388_51798 = (0);
while(true){
if((i__51388_51798 < count__51387_51797)){
var node_51799 = chunk__51386_51796.cljs$core$IIndexed$_nth$arity$2(null,i__51388_51798);
if(cljs.core.not(node_51799.shadow$old)){
var path_match_51800 = shadow.cljs.devtools.client.browser.match_paths(node_51799.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51800)){
var new_link_51801 = (function (){var G__51442 = node_51799.cloneNode(true);
G__51442.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51800),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51442;
})();
(node_51799.shadow$old = true);

(new_link_51801.onload = ((function (seq__51360_51795,chunk__51386_51796,count__51387_51797,i__51388_51798,seq__50942,chunk__50944,count__50945,i__50946,new_link_51801,path_match_51800,node_51799,path,seq__50942__$1,temp__5753__auto__,map__50941,map__50941__$1,msg,updates,reload_info){
return (function (e){
var seq__51443_51804 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51445_51805 = null;
var count__51446_51806 = (0);
var i__51447_51807 = (0);
while(true){
if((i__51447_51807 < count__51446_51806)){
var map__51457_51808 = chunk__51445_51805.cljs$core$IIndexed$_nth$arity$2(null,i__51447_51807);
var map__51457_51809__$1 = cljs.core.__destructure_map(map__51457_51808);
var task_51810 = map__51457_51809__$1;
var fn_str_51811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51457_51809__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51457_51809__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51816 = goog.getObjectByName(fn_str_51811,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51812)].join(''));

(fn_obj_51816.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51816.cljs$core$IFn$_invoke$arity$2(path,new_link_51801) : fn_obj_51816.call(null,path,new_link_51801));


var G__51817 = seq__51443_51804;
var G__51818 = chunk__51445_51805;
var G__51819 = count__51446_51806;
var G__51820 = (i__51447_51807 + (1));
seq__51443_51804 = G__51817;
chunk__51445_51805 = G__51818;
count__51446_51806 = G__51819;
i__51447_51807 = G__51820;
continue;
} else {
var temp__5753__auto___51825__$1 = cljs.core.seq(seq__51443_51804);
if(temp__5753__auto___51825__$1){
var seq__51443_51826__$1 = temp__5753__auto___51825__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51443_51826__$1)){
var c__5568__auto___51827 = cljs.core.chunk_first(seq__51443_51826__$1);
var G__51828 = cljs.core.chunk_rest(seq__51443_51826__$1);
var G__51829 = c__5568__auto___51827;
var G__51830 = cljs.core.count(c__5568__auto___51827);
var G__51831 = (0);
seq__51443_51804 = G__51828;
chunk__51445_51805 = G__51829;
count__51446_51806 = G__51830;
i__51447_51807 = G__51831;
continue;
} else {
var map__51458_51832 = cljs.core.first(seq__51443_51826__$1);
var map__51458_51833__$1 = cljs.core.__destructure_map(map__51458_51832);
var task_51834 = map__51458_51833__$1;
var fn_str_51835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51458_51833__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51458_51833__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51837 = goog.getObjectByName(fn_str_51835,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51836)].join(''));

(fn_obj_51837.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51837.cljs$core$IFn$_invoke$arity$2(path,new_link_51801) : fn_obj_51837.call(null,path,new_link_51801));


var G__51841 = cljs.core.next(seq__51443_51826__$1);
var G__51842 = null;
var G__51843 = (0);
var G__51844 = (0);
seq__51443_51804 = G__51841;
chunk__51445_51805 = G__51842;
count__51446_51806 = G__51843;
i__51447_51807 = G__51844;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51799);
});})(seq__51360_51795,chunk__51386_51796,count__51387_51797,i__51388_51798,seq__50942,chunk__50944,count__50945,i__50946,new_link_51801,path_match_51800,node_51799,path,seq__50942__$1,temp__5753__auto__,map__50941,map__50941__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51800], 0));

goog.dom.insertSiblingAfter(new_link_51801,node_51799);


var G__51845 = seq__51360_51795;
var G__51846 = chunk__51386_51796;
var G__51847 = count__51387_51797;
var G__51848 = (i__51388_51798 + (1));
seq__51360_51795 = G__51845;
chunk__51386_51796 = G__51846;
count__51387_51797 = G__51847;
i__51388_51798 = G__51848;
continue;
} else {
var G__51850 = seq__51360_51795;
var G__51851 = chunk__51386_51796;
var G__51852 = count__51387_51797;
var G__51853 = (i__51388_51798 + (1));
seq__51360_51795 = G__51850;
chunk__51386_51796 = G__51851;
count__51387_51797 = G__51852;
i__51388_51798 = G__51853;
continue;
}
} else {
var G__51854 = seq__51360_51795;
var G__51855 = chunk__51386_51796;
var G__51856 = count__51387_51797;
var G__51857 = (i__51388_51798 + (1));
seq__51360_51795 = G__51854;
chunk__51386_51796 = G__51855;
count__51387_51797 = G__51856;
i__51388_51798 = G__51857;
continue;
}
} else {
var temp__5753__auto___51858__$1 = cljs.core.seq(seq__51360_51795);
if(temp__5753__auto___51858__$1){
var seq__51360_51859__$1 = temp__5753__auto___51858__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51360_51859__$1)){
var c__5568__auto___51860 = cljs.core.chunk_first(seq__51360_51859__$1);
var G__51861 = cljs.core.chunk_rest(seq__51360_51859__$1);
var G__51862 = c__5568__auto___51860;
var G__51863 = cljs.core.count(c__5568__auto___51860);
var G__51864 = (0);
seq__51360_51795 = G__51861;
chunk__51386_51796 = G__51862;
count__51387_51797 = G__51863;
i__51388_51798 = G__51864;
continue;
} else {
var node_51865 = cljs.core.first(seq__51360_51859__$1);
if(cljs.core.not(node_51865.shadow$old)){
var path_match_51866 = shadow.cljs.devtools.client.browser.match_paths(node_51865.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51866)){
var new_link_51867 = (function (){var G__51459 = node_51865.cloneNode(true);
G__51459.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51866),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51459;
})();
(node_51865.shadow$old = true);

(new_link_51867.onload = ((function (seq__51360_51795,chunk__51386_51796,count__51387_51797,i__51388_51798,seq__50942,chunk__50944,count__50945,i__50946,new_link_51867,path_match_51866,node_51865,seq__51360_51859__$1,temp__5753__auto___51858__$1,path,seq__50942__$1,temp__5753__auto__,map__50941,map__50941__$1,msg,updates,reload_info){
return (function (e){
var seq__51463_51869 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51465_51870 = null;
var count__51466_51871 = (0);
var i__51467_51872 = (0);
while(true){
if((i__51467_51872 < count__51466_51871)){
var map__51474_51873 = chunk__51465_51870.cljs$core$IIndexed$_nth$arity$2(null,i__51467_51872);
var map__51474_51874__$1 = cljs.core.__destructure_map(map__51474_51873);
var task_51875 = map__51474_51874__$1;
var fn_str_51876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51474_51874__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51474_51874__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51878 = goog.getObjectByName(fn_str_51876,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51877)].join(''));

(fn_obj_51878.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51878.cljs$core$IFn$_invoke$arity$2(path,new_link_51867) : fn_obj_51878.call(null,path,new_link_51867));


var G__51880 = seq__51463_51869;
var G__51881 = chunk__51465_51870;
var G__51882 = count__51466_51871;
var G__51883 = (i__51467_51872 + (1));
seq__51463_51869 = G__51880;
chunk__51465_51870 = G__51881;
count__51466_51871 = G__51882;
i__51467_51872 = G__51883;
continue;
} else {
var temp__5753__auto___51884__$2 = cljs.core.seq(seq__51463_51869);
if(temp__5753__auto___51884__$2){
var seq__51463_51885__$1 = temp__5753__auto___51884__$2;
if(cljs.core.chunked_seq_QMARK_(seq__51463_51885__$1)){
var c__5568__auto___51890 = cljs.core.chunk_first(seq__51463_51885__$1);
var G__51891 = cljs.core.chunk_rest(seq__51463_51885__$1);
var G__51892 = c__5568__auto___51890;
var G__51893 = cljs.core.count(c__5568__auto___51890);
var G__51894 = (0);
seq__51463_51869 = G__51891;
chunk__51465_51870 = G__51892;
count__51466_51871 = G__51893;
i__51467_51872 = G__51894;
continue;
} else {
var map__51475_51898 = cljs.core.first(seq__51463_51885__$1);
var map__51475_51899__$1 = cljs.core.__destructure_map(map__51475_51898);
var task_51900 = map__51475_51899__$1;
var fn_str_51901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51475_51899__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51475_51899__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51903 = goog.getObjectByName(fn_str_51901,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51902)].join(''));

(fn_obj_51903.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51903.cljs$core$IFn$_invoke$arity$2(path,new_link_51867) : fn_obj_51903.call(null,path,new_link_51867));


var G__51904 = cljs.core.next(seq__51463_51885__$1);
var G__51905 = null;
var G__51906 = (0);
var G__51907 = (0);
seq__51463_51869 = G__51904;
chunk__51465_51870 = G__51905;
count__51466_51871 = G__51906;
i__51467_51872 = G__51907;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51865);
});})(seq__51360_51795,chunk__51386_51796,count__51387_51797,i__51388_51798,seq__50942,chunk__50944,count__50945,i__50946,new_link_51867,path_match_51866,node_51865,seq__51360_51859__$1,temp__5753__auto___51858__$1,path,seq__50942__$1,temp__5753__auto__,map__50941,map__50941__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51866], 0));

goog.dom.insertSiblingAfter(new_link_51867,node_51865);


var G__51911 = cljs.core.next(seq__51360_51859__$1);
var G__51912 = null;
var G__51913 = (0);
var G__51914 = (0);
seq__51360_51795 = G__51911;
chunk__51386_51796 = G__51912;
count__51387_51797 = G__51913;
i__51388_51798 = G__51914;
continue;
} else {
var G__51915 = cljs.core.next(seq__51360_51859__$1);
var G__51916 = null;
var G__51917 = (0);
var G__51918 = (0);
seq__51360_51795 = G__51915;
chunk__51386_51796 = G__51916;
count__51387_51797 = G__51917;
i__51388_51798 = G__51918;
continue;
}
} else {
var G__51919 = cljs.core.next(seq__51360_51859__$1);
var G__51920 = null;
var G__51921 = (0);
var G__51922 = (0);
seq__51360_51795 = G__51919;
chunk__51386_51796 = G__51920;
count__51387_51797 = G__51921;
i__51388_51798 = G__51922;
continue;
}
}
} else {
}
}
break;
}


var G__51923 = cljs.core.next(seq__50942__$1);
var G__51924 = null;
var G__51925 = (0);
var G__51926 = (0);
seq__50942 = G__51923;
chunk__50944 = G__51924;
count__50945 = G__51925;
i__50946 = G__51926;
continue;
} else {
var G__51927 = cljs.core.next(seq__50942__$1);
var G__51928 = null;
var G__51929 = (0);
var G__51930 = (0);
seq__50942 = G__51927;
chunk__50944 = G__51928;
count__50945 = G__51929;
i__50946 = G__51930;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__51491){
var map__51492 = p__51491;
var map__51492__$1 = cljs.core.__destructure_map(map__51492);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51492__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__51513){
var map__51514 = p__51513;
var map__51514__$1 = cljs.core.__destructure_map(map__51514);
var _ = map__51514__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51514__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51515,done,error){
var map__51516 = p__51515;
var map__51516__$1 = cljs.core.__destructure_map(map__51516);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51516__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__51517,done,error){
var map__51519 = p__51517;
var map__51519__$1 = cljs.core.__destructure_map(map__51519);
var msg = map__51519__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51519__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51519__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51519__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51520){
var map__51521 = p__51520;
var map__51521__$1 = cljs.core.__destructure_map(map__51521);
var src = map__51521__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51521__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__51522 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51522) : done.call(null,G__51522));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__51523){
var map__51524 = p__51523;
var map__51524__$1 = cljs.core.__destructure_map(map__51524);
var msg__$1 = map__51524__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51524__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e51530){var ex = e51530;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51531){
var map__51532 = p__51531;
var map__51532__$1 = cljs.core.__destructure_map(map__51532);
var env = map__51532__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51532__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51538){
var map__51539 = p__51538;
var map__51539__$1 = cljs.core.__destructure_map(map__51539);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51539__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51539__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__51540){
var map__51541 = p__51540;
var map__51541__$1 = cljs.core.__destructure_map(map__51541);
var svc = map__51541__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51541__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
