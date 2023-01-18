import "./cljs_env.js";
goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__56468 = arguments.length;
switch (G__56468) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,extra_meta){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(extra_meta,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__56472 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__56473 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__56473);

try{var G__56474 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__56474);

return G__56474;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__56472);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__56475 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__56476 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__56476);

try{var G__56477 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__56477);

return G__56477;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__56475);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__56478 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__56479 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__56479);

try{var G__56480 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__56480);

return G__56480;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__56478);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__56482 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__56483 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__56483);

try{var G__56484 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__56484);

return G__56484;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__56482);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__56491 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__56492 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__56492);

try{var G__56493 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__56493);

return G__56493;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__56491);
}})();
sci.impl.io.print_meta = (new sci.lang.Var(cljs.core._STAR_print_meta_STAR_,new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"If set to logical true, when printing an object, its metadata will also\n  be printed in a form that can be read back by the reader.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.print_length = (new sci.lang.Var(cljs.core._STAR_print_length_STAR_,new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-length* controls how many items of each collection the\n  printer will print. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  number of items of each collection to print. If a collection contains\n  more items, the printer will print items up to the limit followed by\n  '...' to represent the remaining items. The root binding is nil\n  indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.print_level = (new sci.lang.Var(cljs.core._STAR_print_level_STAR_,new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.print_namespace_maps = (new sci.lang.Var(true,new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-namespace-maps* controls whether the printer will print\n  namespace map literal syntax.\n\n  Defaults to false, but the REPL binds it to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.flush_on_newline = (new sci.lang.Var(cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to true, output will be flushed whenever a newline is printed.\n\n  Defaults to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.print_readably = (new sci.lang.Var(cljs.core._STAR_print_readably_STAR_,new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.print_dup_var = (new sci.lang.Var(cljs.core._STAR_print_dup_STAR_,new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.print_newline = (new sci.lang.Var(cljs.core._STAR_print_newline_STAR_,new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false will drop newlines from printing calls.\n  This is to work around the implicit newlines emitted by standard JavaScript\n  console objects.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__56498 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__56499 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56499);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56498);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56887 = arguments.length;
var i__5770__auto___56888 = (0);
while(true){
if((i__5770__auto___56888 < len__5769__auto___56887)){
args__5775__auto__.push((arguments[i__5770__auto___56888]));

var G__56890 = (i__5770__auto___56888 + (1));
i__5770__auto___56888 = G__56890;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__56507 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__56508 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__56509 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__56510 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__56511 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__56512 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__56513 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__56514 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__56515 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__56516 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__56517 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__56518 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__56519 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__56520 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__56521 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__56522 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56515);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__56516);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__56517);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__56518);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__56519);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__56520);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56521);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__56522);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__56514);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56513);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__56512);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__56511);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__56510);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__56509);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__56508);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56507);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq56502){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56502));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__56529 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__56530 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56530);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56529);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56896 = arguments.length;
var i__5770__auto___56897 = (0);
while(true){
if((i__5770__auto___56897 < len__5769__auto___56896)){
args__5775__auto__.push((arguments[i__5770__auto___56897]));

var G__56898 = (i__5770__auto___56897 + (1));
i__5770__auto___56897 = G__56898;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__56539 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__56540 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__56541 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__56542 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__56543 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__56544 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__56545 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__56546 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__56547 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__56548 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__56549 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__56550 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__56551 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__56552 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__56546);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__56547);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__56548);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__56549);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__56550);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56551);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__56552);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__56545);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56544);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__56543);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__56542);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__56541);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__56540);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__56539);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq56533){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56533));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56899 = arguments.length;
var i__5770__auto___56900 = (0);
while(true){
if((i__5770__auto___56900 < len__5769__auto___56899)){
args__5775__auto__.push((arguments[i__5770__auto___56900]));

var G__56901 = (i__5770__auto___56900 + (1));
i__5770__auto___56900 = G__56901;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__56562 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__56563 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__56564 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__56565 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__56566 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__56567 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__56568 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__56569 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__56570 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__56571 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__56572 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__56573 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__56574 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__56575 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__56576 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__56577 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56570);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__56571);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__56572);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__56573);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__56574);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__56575);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56576);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__56577);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__56569);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56568);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__56567);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__56566);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__56565);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__56564);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__56563);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56562);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq56561){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56561));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56902 = arguments.length;
var i__5770__auto___56903 = (0);
while(true){
if((i__5770__auto___56903 < len__5769__auto___56902)){
args__5775__auto__.push((arguments[i__5770__auto___56903]));

var G__56904 = (i__5770__auto___56903 + (1));
i__5770__auto___56903 = G__56904;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__56586 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__56587 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__56588 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__56589 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__56590 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__56591 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__56592 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__56593 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__56594 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__56595 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__56596 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__56597 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__56598 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__56599 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__56593);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__56594);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__56595);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__56596);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__56597);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56598);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__56599);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__56592);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56591);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__56590);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__56589);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__56588);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__56587);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__56586);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq56580){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56580));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56909 = arguments.length;
var i__5770__auto___56910 = (0);
while(true){
if((i__5770__auto___56910 < len__5769__auto___56909)){
args__5775__auto__.push((arguments[i__5770__auto___56910]));

var G__56911 = (i__5770__auto___56910 + (1));
i__5770__auto___56910 = G__56911;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__56608 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__56609 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__56610 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__56611 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__56612 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__56613 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__56614 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__56615 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__56616 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__56617 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__56618 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__56619 = null;
var _STAR_print_newline_STAR__temp_val__56620 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__56621 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56615);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__56616);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__56617);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__56618);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__56619);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56620);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__56621);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__56614);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56613);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__56612);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__56611);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__56610);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__56609);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56608);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq56604){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56604));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56918 = arguments.length;
var i__5770__auto___56919 = (0);
while(true){
if((i__5770__auto___56919 < len__5769__auto___56918)){
args__5775__auto__.push((arguments[i__5770__auto___56919]));

var G__56920 = (i__5770__auto___56919 + (1));
i__5770__auto___56919 = G__56920;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__56628 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__56629 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__56630 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__56631 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__56632 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__56633 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__56634 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__56635 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__56636 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__56637 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__56638 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__56639 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__56640 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__56641 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__56635);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__56636);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__56637);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__56638);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__56639);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56640);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__56641);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__56634);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56633);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__56632);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__56631);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__56630);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__56629);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__56628);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq56626){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56626));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56928 = arguments.length;
var i__5770__auto___56929 = (0);
while(true){
if((i__5770__auto___56929 < len__5769__auto___56928)){
args__5775__auto__.push((arguments[i__5770__auto___56929]));

var G__56930 = (i__5770__auto___56929 + (1));
i__5770__auto___56929 = G__56930;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__56849 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__56850 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__56851 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__56852 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__56853 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__56854 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__56855 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__56856 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__56857 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__56858 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__56859 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__56860 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__56861 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__56862 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__56863 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__56864 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56857);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__56858);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__56859);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__56860);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__56861);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__56862);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56863);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__56864);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__56856);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56855);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__56854);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__56853);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__56852);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__56851);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__56850);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56849);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq56848){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56848));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56934 = arguments.length;
var i__5770__auto___56935 = (0);
while(true){
if((i__5770__auto___56935 < len__5769__auto___56934)){
args__5775__auto__.push((arguments[i__5770__auto___56935]));

var G__56936 = (i__5770__auto___56935 + (1));
i__5770__auto___56935 = G__56936;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__56867__auto__","s__56867__auto__",542415807,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__56868__auto__","x__56868__auto__",-8177792,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__56867__auto__","s__56867__auto__",542415807,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__56868__auto__","x__56868__auto__",-8177792,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__56867__auto__","s__56867__auto__",542415807,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq56869){
var G__56870 = cljs.core.first(seq56869);
var seq56869__$1 = cljs.core.next(seq56869);
var G__56871 = cljs.core.first(seq56869__$1);
var seq56869__$2 = cljs.core.next(seq56869__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56870,G__56871,seq56869__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
