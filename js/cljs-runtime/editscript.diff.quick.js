import "./cljs_env.js";
goog.provide('editscript.diff.quick');
editscript.diff.quick.diff_map = (function editscript$diff$quick$diff_map(script,path,a,b,opts){
cljs.core.reduce_kv((function (_,ka,va){
var path_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ka);
if(cljs.core.contains_QMARK_(b,ka)){
var G__50972 = script;
var G__50973 = path_SINGLEQUOTE_;
var G__50974 = va;
var G__50975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,ka);
var G__50976 = opts;
return (editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__50972,G__50973,G__50974,G__50975,G__50976) : editscript.diff.quick.diff_STAR_.call(null,G__50972,G__50973,G__50974,G__50975,G__50976));
} else {
var G__50977 = script;
var G__50978 = path_SINGLEQUOTE_;
var G__50979 = va;
var G__50980 = editscript.edit.nada();
var G__50981 = opts;
return (editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__50977,G__50978,G__50979,G__50980,G__50981) : editscript.diff.quick.diff_STAR_.call(null,G__50977,G__50978,G__50979,G__50980,G__50981));
}
}),null,a);

return cljs.core.reduce_kv((function (_,kb,vb){
if(cljs.core.contains_QMARK_(a,kb)){
return null;
} else {
var G__50982 = script;
var G__50983 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,kb);
var G__50984 = editscript.edit.nada();
var G__50985 = vb;
var G__50986 = opts;
return (editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__50982,G__50983,G__50984,G__50985,G__50986) : editscript.diff.quick.diff_STAR_.call(null,G__50982,G__50983,G__50984,G__50985,G__50986));
}
}),null,b);
});
/**
 * Adjust the indices to have a correct editscript
 */
editscript.diff.quick.diff_vec = (function editscript$diff$quick$diff_vec(script,path,a,b,opts){
var edits = editscript.util.common.vec_edits(a,b,opts);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edits,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return editscript.edit.replace_data(script,path,b);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__50995,op){
var vec__50996 = p__50995;
var ia = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50996,(0),null);
var ia_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50996,(1),null);
var ib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50996,(2),null);
var G__50999 = op;
var G__50999__$1 = (((G__50999 instanceof cljs.core.Keyword))?G__50999.fqn:null);
switch (G__50999__$1) {
case "-":
var G__51001_51319 = script;
var G__51002_51320 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ia_SINGLEQUOTE_);
var G__51003_51321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,ia);
var G__51004_51322 = editscript.edit.nada();
var G__51005_51323 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51001_51319,G__51002_51320,G__51003_51321,G__51004_51322,G__51005_51323) : editscript.diff.quick.diff_STAR_.call(null,G__51001_51319,G__51002_51320,G__51003_51321,G__51004_51322,G__51005_51323));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ia + (1)),ia_SINGLEQUOTE_,ib], null);

break;
case "+":
var G__51006_51325 = script;
var G__51007_51326 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ia_SINGLEQUOTE_);
var G__51008_51327 = editscript.edit.nada();
var G__51009_51328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,ib);
var G__51010_51329 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51006_51325,G__51007_51326,G__51008_51327,G__51009_51328,G__51010_51329) : editscript.diff.quick.diff_STAR_.call(null,G__51006_51325,G__51007_51326,G__51008_51327,G__51009_51328,G__51010_51329));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ia,(ia_SINGLEQUOTE_ + (1)),(ib + (1))], null);

break;
case "r":
var G__51015_51331 = script;
var G__51016_51332 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ia_SINGLEQUOTE_);
var G__51017_51333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,ia);
var G__51018_51334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,ib);
var G__51019_51335 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51015_51331,G__51016_51332,G__51017_51333,G__51018_51334,G__51019_51335) : editscript.diff.quick.diff_STAR_.call(null,G__51015_51331,G__51016_51332,G__51017_51333,G__51018_51334,G__51019_51335));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ia + (1)),(ia_SINGLEQUOTE_ + (1)),(ib + (1))], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ia + op),(ia_SINGLEQUOTE_ + op),(ib + op)], null);

}
}),cljs.core.transient$(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)),edits);
}
});
editscript.diff.quick.diff_set = (function editscript$diff$quick$diff_set(script,path,a,b,opts){
var seq__51081_51340 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b));
var chunk__51082_51341 = null;
var count__51083_51342 = (0);
var i__51084_51343 = (0);
while(true){
if((i__51084_51343 < count__51083_51342)){
var va_51344 = chunk__51082_51341.cljs$core$IIndexed$_nth$arity$2(null,i__51084_51343);
var G__51103_51346 = script;
var G__51104_51347 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,va_51344);
var G__51105_51348 = va_51344;
var G__51106_51349 = editscript.edit.nada();
var G__51107_51350 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51103_51346,G__51104_51347,G__51105_51348,G__51106_51349,G__51107_51350) : editscript.diff.quick.diff_STAR_.call(null,G__51103_51346,G__51104_51347,G__51105_51348,G__51106_51349,G__51107_51350));


var G__51351 = seq__51081_51340;
var G__51352 = chunk__51082_51341;
var G__51353 = count__51083_51342;
var G__51354 = (i__51084_51343 + (1));
seq__51081_51340 = G__51351;
chunk__51082_51341 = G__51352;
count__51083_51342 = G__51353;
i__51084_51343 = G__51354;
continue;
} else {
var temp__5753__auto___51355 = cljs.core.seq(seq__51081_51340);
if(temp__5753__auto___51355){
var seq__51081_51358__$1 = temp__5753__auto___51355;
if(cljs.core.chunked_seq_QMARK_(seq__51081_51358__$1)){
var c__5568__auto___51359 = cljs.core.chunk_first(seq__51081_51358__$1);
var G__51361 = cljs.core.chunk_rest(seq__51081_51358__$1);
var G__51362 = c__5568__auto___51359;
var G__51363 = cljs.core.count(c__5568__auto___51359);
var G__51364 = (0);
seq__51081_51340 = G__51361;
chunk__51082_51341 = G__51362;
count__51083_51342 = G__51363;
i__51084_51343 = G__51364;
continue;
} else {
var va_51365 = cljs.core.first(seq__51081_51358__$1);
var G__51139_51368 = script;
var G__51140_51369 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,va_51365);
var G__51141_51370 = va_51365;
var G__51142_51371 = editscript.edit.nada();
var G__51143_51372 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51139_51368,G__51140_51369,G__51141_51370,G__51142_51371,G__51143_51372) : editscript.diff.quick.diff_STAR_.call(null,G__51139_51368,G__51140_51369,G__51141_51370,G__51142_51371,G__51143_51372));


var G__51373 = cljs.core.next(seq__51081_51358__$1);
var G__51374 = null;
var G__51375 = (0);
var G__51376 = (0);
seq__51081_51340 = G__51373;
chunk__51082_51341 = G__51374;
count__51083_51342 = G__51375;
i__51084_51343 = G__51376;
continue;
}
} else {
}
}
break;
}

var seq__51153 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a));
var chunk__51154 = null;
var count__51155 = (0);
var i__51156 = (0);
while(true){
if((i__51156 < count__51155)){
var vb = chunk__51154.cljs$core$IIndexed$_nth$arity$2(null,i__51156);
var G__51194_51378 = script;
var G__51195_51379 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,vb);
var G__51196_51380 = editscript.edit.nada();
var G__51197_51381 = vb;
var G__51198_51382 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51194_51378,G__51195_51379,G__51196_51380,G__51197_51381,G__51198_51382) : editscript.diff.quick.diff_STAR_.call(null,G__51194_51378,G__51195_51379,G__51196_51380,G__51197_51381,G__51198_51382));


var G__51389 = seq__51153;
var G__51390 = chunk__51154;
var G__51391 = count__51155;
var G__51392 = (i__51156 + (1));
seq__51153 = G__51389;
chunk__51154 = G__51390;
count__51155 = G__51391;
i__51156 = G__51392;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51153);
if(temp__5753__auto__){
var seq__51153__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51153__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51153__$1);
var G__51395 = cljs.core.chunk_rest(seq__51153__$1);
var G__51396 = c__5568__auto__;
var G__51397 = cljs.core.count(c__5568__auto__);
var G__51398 = (0);
seq__51153 = G__51395;
chunk__51154 = G__51396;
count__51155 = G__51397;
i__51156 = G__51398;
continue;
} else {
var vb = cljs.core.first(seq__51153__$1);
var G__51213_51404 = script;
var G__51214_51405 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,vb);
var G__51215_51406 = editscript.edit.nada();
var G__51216_51407 = vb;
var G__51217_51408 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51213_51404,G__51214_51405,G__51215_51406,G__51216_51407,G__51217_51408) : editscript.diff.quick.diff_STAR_.call(null,G__51213_51404,G__51214_51405,G__51215_51406,G__51216_51407,G__51217_51408));


var G__51409 = cljs.core.next(seq__51153__$1);
var G__51410 = null;
var G__51411 = (0);
var G__51412 = (0);
seq__51153 = G__51409;
chunk__51154 = G__51410;
count__51155 = G__51411;
i__51156 = G__51412;
continue;
}
} else {
return null;
}
}
break;
}
});
editscript.diff.quick.diff_lst = (function editscript$diff$quick$diff_lst(script,path,a,b,opts){
return editscript.diff.quick.diff_vec(script,path,cljs.core.vec(a),cljs.core.vec(b),opts);
});
editscript.diff.quick.diff_val = (function editscript$diff$quick$diff_val(script,path,_,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editscript.edit.get_type(b),new cljs.core.Keyword(null,"nil","nil",99600501))){
return editscript.edit.delete_data(script,path);
} else {
return editscript.edit.replace_data(script,path,b);
}
});
editscript.diff.quick.diff_STAR_ = (function editscript$diff$quick$diff_STAR_(script,path,a,b,p__51248){
var map__51249 = p__51248;
var map__51249__$1 = cljs.core.__destructure_map(map__51249);
var opts = map__51249__$1;
var str_diff = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51249__$1,new cljs.core.Keyword(null,"str-diff","str-diff",1239614806),new cljs.core.Keyword(null,"none","none",1333468478));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return null;
} else {
var G__51250 = editscript.edit.get_type(a);
var G__51250__$1 = (((G__51250 instanceof cljs.core.Keyword))?G__51250.fqn:null);
switch (G__51250__$1) {
case "nil":
return editscript.edit.add_data(script,path,b);

break;
case "map":
var G__51252 = editscript.edit.get_type(b);
var G__51252__$1 = (((G__51252 instanceof cljs.core.Keyword))?G__51252.fqn:null);
switch (G__51252__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "map":
var fexpr__51257 = new cljs.core.Var(function(){return editscript.diff.quick.diff_map;},new cljs.core.Symbol("editscript.diff.quick","diff-map","editscript.diff.quick/diff-map",1973051147,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-map","diff-map",-711364586,null),"editscript/diff/quick.cljc",16,1,22,22,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(editscript.diff.quick.diff_map)?editscript.diff.quick.diff_map.cljs$lang$test:null)]));
return (fexpr__51257.cljs$core$IFn$_invoke$arity$5 ? fexpr__51257.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__51257.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "vec":
var G__51259 = editscript.edit.get_type(b);
var G__51259__$1 = (((G__51259 instanceof cljs.core.Keyword))?G__51259.fqn:null);
switch (G__51259__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "vec":
var fexpr__51261 = new cljs.core.Var(function(){return editscript.diff.quick.diff_vec;},new cljs.core.Symbol("editscript.diff.quick","diff-vec","editscript.diff.quick/diff-vec",-1781503036,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-vec","diff-vec",-170849589,null),"editscript/diff/quick.cljc",16,1,39,39,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),"Adjust the indices to have a correct editscript",(cljs.core.truth_(editscript.diff.quick.diff_vec)?editscript.diff.quick.diff_vec.cljs$lang$test:null)]));
return (fexpr__51261.cljs$core$IFn$_invoke$arity$5 ? fexpr__51261.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__51261.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "set":
var G__51263 = editscript.edit.get_type(b);
var G__51263__$1 = (((G__51263 instanceof cljs.core.Keyword))?G__51263.fqn:null);
switch (G__51263__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "set":
var fexpr__51264 = new cljs.core.Var(function(){return editscript.diff.quick.diff_set;},new cljs.core.Symbol("editscript.diff.quick","diff-set","editscript.diff.quick/diff-set",1246078730,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-set","diff-set",-364591609,null),"editscript/diff/quick.cljc",16,1,58,58,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(editscript.diff.quick.diff_set)?editscript.diff.quick.diff_set.cljs$lang$test:null)]));
return (fexpr__51264.cljs$core$IFn$_invoke$arity$5 ? fexpr__51264.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__51264.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "lst":
var G__51269 = editscript.edit.get_type(b);
var G__51269__$1 = (((G__51269 instanceof cljs.core.Keyword))?G__51269.fqn:null);
switch (G__51269__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "lst":
var fexpr__51270 = new cljs.core.Var(function(){return editscript.diff.quick.diff_lst;},new cljs.core.Symbol("editscript.diff.quick","diff-lst","editscript.diff.quick/diff-lst",-1885319001,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-lst","diff-lst",799109538,null),"editscript/diff/quick.cljc",16,1,65,65,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(editscript.diff.quick.diff_lst)?editscript.diff.quick.diff_lst.cljs$lang$test:null)]));
return (fexpr__51270.cljs$core$IFn$_invoke$arity$5 ? fexpr__51270.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__51270.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "str":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(str_diff,new cljs.core.Keyword(null,"none","none",1333468478))){
return editscript.diff.quick.diff_val(script,path,a,b);
} else {
var G__51271 = editscript.edit.get_type(b);
var G__51271__$1 = (((G__51271 instanceof cljs.core.Keyword))?G__51271.fqn:null);
switch (G__51271__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "str":
var fexpr__51288 = new cljs.core.Var(function(){return editscript.util.common.diff_str;},new cljs.core.Symbol("editscript.util.common","diff-str","editscript.util.common/diff-str",283460236,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"editscript.util.common","editscript.util.common",1209759084,null),new cljs.core.Symbol(null,"diff-str","diff-str",1255675210,null),"editscript/util/common.cljc",15,1,161,161,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"str-change-limit","str-change-limit",-2124863440,null),new cljs.core.Symbol(null,"str-diff","str-diff",-1414820963,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"str-change-limit","str-change-limit",-2124863440,null),0.2], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)], null)),null,(cljs.core.truth_(editscript.util.common.diff_str)?editscript.util.common.diff_str.cljs$lang$test:null)]));
return (fexpr__51288.cljs$core$IFn$_invoke$arity$5 ? fexpr__51288.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__51288.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}
}

break;
case "val":
return editscript.diff.quick.diff_val(script,path,a,b);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51250__$1)].join('')));

}
}
});
/**
 * Create an EditScript that represents the difference between `b` and `a`
 *   This algorithm is fast, but it does not attempt to generate an EditScript
 *   that is minimal in size
 */
editscript.diff.quick.diff = (function editscript$diff$quick$diff(var_args){
var G__51292 = arguments.length;
switch (G__51292) {
case 2:
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3(a,b,null);
}));

(editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3 = (function (a,b,opts){
var script = editscript.edit.edits__GT_script(cljs.core.PersistentVector.EMPTY);
editscript.diff.quick.diff_STAR_(script,cljs.core.PersistentVector.EMPTY,a,b,opts);

return script;
}));

(editscript.diff.quick.diff.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=editscript.diff.quick.js.map
