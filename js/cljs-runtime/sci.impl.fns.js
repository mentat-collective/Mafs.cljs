import "./cljs_env.js";
goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__54504 = arguments.length;
switch (G__54504) {
case 5:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 11:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_){
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body),sci.impl.utils.current_ns_name(),new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body));
}));

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,fixed_arity,enclosed__GT_invocation,body,invoc_size,nsm,vararg_idx){
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__54507 = (fixed_arity | (0));
switch (G__54507) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__54508){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__54508);

while(true){
var ret__53897__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53897__auto__)){
continue;
} else {
return ret__53897__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__54508 = null;
if (arguments.length > 0) {
var G__55083__i = 0, G__55083__a = new Array(arguments.length -  0);
while (G__55083__i < G__55083__a.length) {G__55083__a[G__55083__i] = arguments[G__55083__i + 0]; ++G__55083__i;}
  G__54508 = new cljs.core.IndexedSeq(G__55083__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__54508);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__55084){
var G__54508 = cljs.core.seq(arglist__55084);
return sci$impl$fns$arity_0__delegate(G__54508);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__54511,G__54512){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54511);

(invoc_array[vararg_idx] = G__54512);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__54511,var_args){
var G__54512 = null;
if (arguments.length > 1) {
var G__55085__i = 0, G__55085__a = new Array(arguments.length -  1);
while (G__55085__i < G__55085__a.length) {G__55085__a[G__55085__i] = arguments[G__55085__i + 1]; ++G__55085__i;}
  G__54512 = new cljs.core.IndexedSeq(G__55085__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__54511,G__54512);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__55086){
var G__54511 = cljs.core.first(arglist__55086);
var G__54512 = cljs.core.rest(arglist__55086);
return sci$impl$fns$arity_1__delegate(G__54511,G__54512);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__54514,G__54515,G__54516){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54514);

(invoc_array[(1)] = G__54515);

(invoc_array[vararg_idx] = G__54516);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__54514,G__54515,var_args){
var G__54516 = null;
if (arguments.length > 2) {
var G__55087__i = 0, G__55087__a = new Array(arguments.length -  2);
while (G__55087__i < G__55087__a.length) {G__55087__a[G__55087__i] = arguments[G__55087__i + 2]; ++G__55087__i;}
  G__54516 = new cljs.core.IndexedSeq(G__55087__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__54514,G__54515,G__54516);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__55088){
var G__54514 = cljs.core.first(arglist__55088);
arglist__55088 = cljs.core.next(arglist__55088);
var G__54515 = cljs.core.first(arglist__55088);
var G__54516 = cljs.core.rest(arglist__55088);
return sci$impl$fns$arity_2__delegate(G__54514,G__54515,G__54516);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__54517,G__54518,G__54519,G__54520){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54517);

(invoc_array[(1)] = G__54518);

(invoc_array[(2)] = G__54519);

(invoc_array[vararg_idx] = G__54520);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__54517,G__54518,G__54519,var_args){
var G__54520 = null;
if (arguments.length > 3) {
var G__55089__i = 0, G__55089__a = new Array(arguments.length -  3);
while (G__55089__i < G__55089__a.length) {G__55089__a[G__55089__i] = arguments[G__55089__i + 3]; ++G__55089__i;}
  G__54520 = new cljs.core.IndexedSeq(G__55089__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__54517,G__54518,G__54519,G__54520);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__55090){
var G__54517 = cljs.core.first(arglist__55090);
arglist__55090 = cljs.core.next(arglist__55090);
var G__54518 = cljs.core.first(arglist__55090);
arglist__55090 = cljs.core.next(arglist__55090);
var G__54519 = cljs.core.first(arglist__55090);
var G__54520 = cljs.core.rest(arglist__55090);
return sci$impl$fns$arity_3__delegate(G__54517,G__54518,G__54519,G__54520);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__54522,G__54523,G__54524,G__54525,G__54526){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54522);

(invoc_array[(1)] = G__54523);

(invoc_array[(2)] = G__54524);

(invoc_array[(3)] = G__54525);

(invoc_array[vararg_idx] = G__54526);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__54522,G__54523,G__54524,G__54525,var_args){
var G__54526 = null;
if (arguments.length > 4) {
var G__55094__i = 0, G__55094__a = new Array(arguments.length -  4);
while (G__55094__i < G__55094__a.length) {G__55094__a[G__55094__i] = arguments[G__55094__i + 4]; ++G__55094__i;}
  G__54526 = new cljs.core.IndexedSeq(G__55094__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__54522,G__54523,G__54524,G__54525,G__54526);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__55095){
var G__54522 = cljs.core.first(arglist__55095);
arglist__55095 = cljs.core.next(arglist__55095);
var G__54523 = cljs.core.first(arglist__55095);
arglist__55095 = cljs.core.next(arglist__55095);
var G__54524 = cljs.core.first(arglist__55095);
arglist__55095 = cljs.core.next(arglist__55095);
var G__54525 = cljs.core.first(arglist__55095);
var G__54526 = cljs.core.rest(arglist__55095);
return sci$impl$fns$arity_4__delegate(G__54522,G__54523,G__54524,G__54525,G__54526);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__54531,G__54532,G__54533,G__54534,G__54535,G__54536){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54531);

(invoc_array[(1)] = G__54532);

(invoc_array[(2)] = G__54533);

(invoc_array[(3)] = G__54534);

(invoc_array[(4)] = G__54535);

(invoc_array[vararg_idx] = G__54536);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__54531,G__54532,G__54533,G__54534,G__54535,var_args){
var G__54536 = null;
if (arguments.length > 5) {
var G__55096__i = 0, G__55096__a = new Array(arguments.length -  5);
while (G__55096__i < G__55096__a.length) {G__55096__a[G__55096__i] = arguments[G__55096__i + 5]; ++G__55096__i;}
  G__54536 = new cljs.core.IndexedSeq(G__55096__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__54531,G__54532,G__54533,G__54534,G__54535,G__54536);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__55097){
var G__54531 = cljs.core.first(arglist__55097);
arglist__55097 = cljs.core.next(arglist__55097);
var G__54532 = cljs.core.first(arglist__55097);
arglist__55097 = cljs.core.next(arglist__55097);
var G__54533 = cljs.core.first(arglist__55097);
arglist__55097 = cljs.core.next(arglist__55097);
var G__54534 = cljs.core.first(arglist__55097);
arglist__55097 = cljs.core.next(arglist__55097);
var G__54535 = cljs.core.first(arglist__55097);
var G__54536 = cljs.core.rest(arglist__55097);
return sci$impl$fns$arity_5__delegate(G__54531,G__54532,G__54533,G__54534,G__54535,G__54536);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__54537,G__54538,G__54539,G__54540,G__54541,G__54542,G__54543){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54537);

(invoc_array[(1)] = G__54538);

(invoc_array[(2)] = G__54539);

(invoc_array[(3)] = G__54540);

(invoc_array[(4)] = G__54541);

(invoc_array[(5)] = G__54542);

(invoc_array[vararg_idx] = G__54543);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__54537,G__54538,G__54539,G__54540,G__54541,G__54542,var_args){
var G__54543 = null;
if (arguments.length > 6) {
var G__55107__i = 0, G__55107__a = new Array(arguments.length -  6);
while (G__55107__i < G__55107__a.length) {G__55107__a[G__55107__i] = arguments[G__55107__i + 6]; ++G__55107__i;}
  G__54543 = new cljs.core.IndexedSeq(G__55107__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__54537,G__54538,G__54539,G__54540,G__54541,G__54542,G__54543);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__55112){
var G__54537 = cljs.core.first(arglist__55112);
arglist__55112 = cljs.core.next(arglist__55112);
var G__54538 = cljs.core.first(arglist__55112);
arglist__55112 = cljs.core.next(arglist__55112);
var G__54539 = cljs.core.first(arglist__55112);
arglist__55112 = cljs.core.next(arglist__55112);
var G__54540 = cljs.core.first(arglist__55112);
arglist__55112 = cljs.core.next(arglist__55112);
var G__54541 = cljs.core.first(arglist__55112);
arglist__55112 = cljs.core.next(arglist__55112);
var G__54542 = cljs.core.first(arglist__55112);
var G__54543 = cljs.core.rest(arglist__55112);
return sci$impl$fns$arity_6__delegate(G__54537,G__54538,G__54539,G__54540,G__54541,G__54542,G__54543);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__54544,G__54545,G__54546,G__54547,G__54548,G__54549,G__54550,G__54551){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54544);

(invoc_array[(1)] = G__54545);

(invoc_array[(2)] = G__54546);

(invoc_array[(3)] = G__54547);

(invoc_array[(4)] = G__54548);

(invoc_array[(5)] = G__54549);

(invoc_array[(6)] = G__54550);

(invoc_array[vararg_idx] = G__54551);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__54544,G__54545,G__54546,G__54547,G__54548,G__54549,G__54550,var_args){
var G__54551 = null;
if (arguments.length > 7) {
var G__55119__i = 0, G__55119__a = new Array(arguments.length -  7);
while (G__55119__i < G__55119__a.length) {G__55119__a[G__55119__i] = arguments[G__55119__i + 7]; ++G__55119__i;}
  G__54551 = new cljs.core.IndexedSeq(G__55119__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__54544,G__54545,G__54546,G__54547,G__54548,G__54549,G__54550,G__54551);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__55120){
var G__54544 = cljs.core.first(arglist__55120);
arglist__55120 = cljs.core.next(arglist__55120);
var G__54545 = cljs.core.first(arglist__55120);
arglist__55120 = cljs.core.next(arglist__55120);
var G__54546 = cljs.core.first(arglist__55120);
arglist__55120 = cljs.core.next(arglist__55120);
var G__54547 = cljs.core.first(arglist__55120);
arglist__55120 = cljs.core.next(arglist__55120);
var G__54548 = cljs.core.first(arglist__55120);
arglist__55120 = cljs.core.next(arglist__55120);
var G__54549 = cljs.core.first(arglist__55120);
arglist__55120 = cljs.core.next(arglist__55120);
var G__54550 = cljs.core.first(arglist__55120);
var G__54551 = cljs.core.rest(arglist__55120);
return sci$impl$fns$arity_7__delegate(G__54544,G__54545,G__54546,G__54547,G__54548,G__54549,G__54550,G__54551);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__54553,G__54554,G__54555,G__54556,G__54557,G__54558,G__54559,G__54560,G__54561){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54553);

(invoc_array[(1)] = G__54554);

(invoc_array[(2)] = G__54555);

(invoc_array[(3)] = G__54556);

(invoc_array[(4)] = G__54557);

(invoc_array[(5)] = G__54558);

(invoc_array[(6)] = G__54559);

(invoc_array[(7)] = G__54560);

(invoc_array[vararg_idx] = G__54561);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__54553,G__54554,G__54555,G__54556,G__54557,G__54558,G__54559,G__54560,var_args){
var G__54561 = null;
if (arguments.length > 8) {
var G__55121__i = 0, G__55121__a = new Array(arguments.length -  8);
while (G__55121__i < G__55121__a.length) {G__55121__a[G__55121__i] = arguments[G__55121__i + 8]; ++G__55121__i;}
  G__54561 = new cljs.core.IndexedSeq(G__55121__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__54553,G__54554,G__54555,G__54556,G__54557,G__54558,G__54559,G__54560,G__54561);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__55122){
var G__54553 = cljs.core.first(arglist__55122);
arglist__55122 = cljs.core.next(arglist__55122);
var G__54554 = cljs.core.first(arglist__55122);
arglist__55122 = cljs.core.next(arglist__55122);
var G__54555 = cljs.core.first(arglist__55122);
arglist__55122 = cljs.core.next(arglist__55122);
var G__54556 = cljs.core.first(arglist__55122);
arglist__55122 = cljs.core.next(arglist__55122);
var G__54557 = cljs.core.first(arglist__55122);
arglist__55122 = cljs.core.next(arglist__55122);
var G__54558 = cljs.core.first(arglist__55122);
arglist__55122 = cljs.core.next(arglist__55122);
var G__54559 = cljs.core.first(arglist__55122);
arglist__55122 = cljs.core.next(arglist__55122);
var G__54560 = cljs.core.first(arglist__55122);
var G__54561 = cljs.core.rest(arglist__55122);
return sci$impl$fns$arity_8__delegate(G__54553,G__54554,G__54555,G__54556,G__54557,G__54558,G__54559,G__54560,G__54561);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__54569,G__54570,G__54571,G__54572,G__54573,G__54574,G__54575,G__54576,G__54577,G__54578){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54569);

(invoc_array[(1)] = G__54570);

(invoc_array[(2)] = G__54571);

(invoc_array[(3)] = G__54572);

(invoc_array[(4)] = G__54573);

(invoc_array[(5)] = G__54574);

(invoc_array[(6)] = G__54575);

(invoc_array[(7)] = G__54576);

(invoc_array[(8)] = G__54577);

(invoc_array[vararg_idx] = G__54578);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__54569,G__54570,G__54571,G__54572,G__54573,G__54574,G__54575,G__54576,G__54577,var_args){
var G__54578 = null;
if (arguments.length > 9) {
var G__55126__i = 0, G__55126__a = new Array(arguments.length -  9);
while (G__55126__i < G__55126__a.length) {G__55126__a[G__55126__i] = arguments[G__55126__i + 9]; ++G__55126__i;}
  G__54578 = new cljs.core.IndexedSeq(G__55126__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__54569,G__54570,G__54571,G__54572,G__54573,G__54574,G__54575,G__54576,G__54577,G__54578);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__55127){
var G__54569 = cljs.core.first(arglist__55127);
arglist__55127 = cljs.core.next(arglist__55127);
var G__54570 = cljs.core.first(arglist__55127);
arglist__55127 = cljs.core.next(arglist__55127);
var G__54571 = cljs.core.first(arglist__55127);
arglist__55127 = cljs.core.next(arglist__55127);
var G__54572 = cljs.core.first(arglist__55127);
arglist__55127 = cljs.core.next(arglist__55127);
var G__54573 = cljs.core.first(arglist__55127);
arglist__55127 = cljs.core.next(arglist__55127);
var G__54574 = cljs.core.first(arglist__55127);
arglist__55127 = cljs.core.next(arglist__55127);
var G__54575 = cljs.core.first(arglist__55127);
arglist__55127 = cljs.core.next(arglist__55127);
var G__54576 = cljs.core.first(arglist__55127);
arglist__55127 = cljs.core.next(arglist__55127);
var G__54577 = cljs.core.first(arglist__55127);
var G__54578 = cljs.core.rest(arglist__55127);
return sci$impl$fns$arity_9__delegate(G__54569,G__54570,G__54571,G__54572,G__54573,G__54574,G__54575,G__54576,G__54577,G__54578);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__54582,G__54583,G__54584,G__54585,G__54586,G__54587,G__54588,G__54589,G__54590,G__54591,G__54592){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54582);

(invoc_array[(1)] = G__54583);

(invoc_array[(2)] = G__54584);

(invoc_array[(3)] = G__54585);

(invoc_array[(4)] = G__54586);

(invoc_array[(5)] = G__54587);

(invoc_array[(6)] = G__54588);

(invoc_array[(7)] = G__54589);

(invoc_array[(8)] = G__54590);

(invoc_array[(9)] = G__54591);

(invoc_array[vararg_idx] = G__54592);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__54582,G__54583,G__54584,G__54585,G__54586,G__54587,G__54588,G__54589,G__54590,G__54591,var_args){
var G__54592 = null;
if (arguments.length > 10) {
var G__55131__i = 0, G__55131__a = new Array(arguments.length -  10);
while (G__55131__i < G__55131__a.length) {G__55131__a[G__55131__i] = arguments[G__55131__i + 10]; ++G__55131__i;}
  G__54592 = new cljs.core.IndexedSeq(G__55131__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__54582,G__54583,G__54584,G__54585,G__54586,G__54587,G__54588,G__54589,G__54590,G__54591,G__54592);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__55132){
var G__54582 = cljs.core.first(arglist__55132);
arglist__55132 = cljs.core.next(arglist__55132);
var G__54583 = cljs.core.first(arglist__55132);
arglist__55132 = cljs.core.next(arglist__55132);
var G__54584 = cljs.core.first(arglist__55132);
arglist__55132 = cljs.core.next(arglist__55132);
var G__54585 = cljs.core.first(arglist__55132);
arglist__55132 = cljs.core.next(arglist__55132);
var G__54586 = cljs.core.first(arglist__55132);
arglist__55132 = cljs.core.next(arglist__55132);
var G__54587 = cljs.core.first(arglist__55132);
arglist__55132 = cljs.core.next(arglist__55132);
var G__54588 = cljs.core.first(arglist__55132);
arglist__55132 = cljs.core.next(arglist__55132);
var G__54589 = cljs.core.first(arglist__55132);
arglist__55132 = cljs.core.next(arglist__55132);
var G__54590 = cljs.core.first(arglist__55132);
arglist__55132 = cljs.core.next(arglist__55132);
var G__54591 = cljs.core.first(arglist__55132);
var G__54592 = cljs.core.rest(arglist__55132);
return sci$impl$fns$arity_10__delegate(G__54582,G__54583,G__54584,G__54585,G__54586,G__54587,G__54588,G__54589,G__54590,G__54591,G__54592);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__54598,G__54599,G__54600,G__54601,G__54602,G__54603,G__54604,G__54605,G__54606,G__54607,G__54608,G__54609){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54598);

(invoc_array[(1)] = G__54599);

(invoc_array[(2)] = G__54600);

(invoc_array[(3)] = G__54601);

(invoc_array[(4)] = G__54602);

(invoc_array[(5)] = G__54603);

(invoc_array[(6)] = G__54604);

(invoc_array[(7)] = G__54605);

(invoc_array[(8)] = G__54606);

(invoc_array[(9)] = G__54607);

(invoc_array[(10)] = G__54608);

(invoc_array[vararg_idx] = G__54609);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__54598,G__54599,G__54600,G__54601,G__54602,G__54603,G__54604,G__54605,G__54606,G__54607,G__54608,var_args){
var G__54609 = null;
if (arguments.length > 11) {
var G__55133__i = 0, G__55133__a = new Array(arguments.length -  11);
while (G__55133__i < G__55133__a.length) {G__55133__a[G__55133__i] = arguments[G__55133__i + 11]; ++G__55133__i;}
  G__54609 = new cljs.core.IndexedSeq(G__55133__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__54598,G__54599,G__54600,G__54601,G__54602,G__54603,G__54604,G__54605,G__54606,G__54607,G__54608,G__54609);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__55134){
var G__54598 = cljs.core.first(arglist__55134);
arglist__55134 = cljs.core.next(arglist__55134);
var G__54599 = cljs.core.first(arglist__55134);
arglist__55134 = cljs.core.next(arglist__55134);
var G__54600 = cljs.core.first(arglist__55134);
arglist__55134 = cljs.core.next(arglist__55134);
var G__54601 = cljs.core.first(arglist__55134);
arglist__55134 = cljs.core.next(arglist__55134);
var G__54602 = cljs.core.first(arglist__55134);
arglist__55134 = cljs.core.next(arglist__55134);
var G__54603 = cljs.core.first(arglist__55134);
arglist__55134 = cljs.core.next(arglist__55134);
var G__54604 = cljs.core.first(arglist__55134);
arglist__55134 = cljs.core.next(arglist__55134);
var G__54605 = cljs.core.first(arglist__55134);
arglist__55134 = cljs.core.next(arglist__55134);
var G__54606 = cljs.core.first(arglist__55134);
arglist__55134 = cljs.core.next(arglist__55134);
var G__54607 = cljs.core.first(arglist__55134);
arglist__55134 = cljs.core.next(arglist__55134);
var G__54608 = cljs.core.first(arglist__55134);
var G__54609 = cljs.core.rest(arglist__55134);
return sci$impl$fns$arity_11__delegate(G__54598,G__54599,G__54600,G__54601,G__54602,G__54603,G__54604,G__54605,G__54606,G__54607,G__54608,G__54609);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__54619,G__54620,G__54621,G__54622,G__54623,G__54624,G__54625,G__54626,G__54627,G__54628,G__54629,G__54630,G__54631){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54619);

(invoc_array[(1)] = G__54620);

(invoc_array[(2)] = G__54621);

(invoc_array[(3)] = G__54622);

(invoc_array[(4)] = G__54623);

(invoc_array[(5)] = G__54624);

(invoc_array[(6)] = G__54625);

(invoc_array[(7)] = G__54626);

(invoc_array[(8)] = G__54627);

(invoc_array[(9)] = G__54628);

(invoc_array[(10)] = G__54629);

(invoc_array[(11)] = G__54630);

(invoc_array[vararg_idx] = G__54631);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__54619,G__54620,G__54621,G__54622,G__54623,G__54624,G__54625,G__54626,G__54627,G__54628,G__54629,G__54630,var_args){
var G__54631 = null;
if (arguments.length > 12) {
var G__55138__i = 0, G__55138__a = new Array(arguments.length -  12);
while (G__55138__i < G__55138__a.length) {G__55138__a[G__55138__i] = arguments[G__55138__i + 12]; ++G__55138__i;}
  G__54631 = new cljs.core.IndexedSeq(G__55138__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__54619,G__54620,G__54621,G__54622,G__54623,G__54624,G__54625,G__54626,G__54627,G__54628,G__54629,G__54630,G__54631);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__55139){
var G__54619 = cljs.core.first(arglist__55139);
arglist__55139 = cljs.core.next(arglist__55139);
var G__54620 = cljs.core.first(arglist__55139);
arglist__55139 = cljs.core.next(arglist__55139);
var G__54621 = cljs.core.first(arglist__55139);
arglist__55139 = cljs.core.next(arglist__55139);
var G__54622 = cljs.core.first(arglist__55139);
arglist__55139 = cljs.core.next(arglist__55139);
var G__54623 = cljs.core.first(arglist__55139);
arglist__55139 = cljs.core.next(arglist__55139);
var G__54624 = cljs.core.first(arglist__55139);
arglist__55139 = cljs.core.next(arglist__55139);
var G__54625 = cljs.core.first(arglist__55139);
arglist__55139 = cljs.core.next(arglist__55139);
var G__54626 = cljs.core.first(arglist__55139);
arglist__55139 = cljs.core.next(arglist__55139);
var G__54627 = cljs.core.first(arglist__55139);
arglist__55139 = cljs.core.next(arglist__55139);
var G__54628 = cljs.core.first(arglist__55139);
arglist__55139 = cljs.core.next(arglist__55139);
var G__54629 = cljs.core.first(arglist__55139);
arglist__55139 = cljs.core.next(arglist__55139);
var G__54630 = cljs.core.first(arglist__55139);
var G__54631 = cljs.core.rest(arglist__55139);
return sci$impl$fns$arity_12__delegate(G__54619,G__54620,G__54621,G__54622,G__54623,G__54624,G__54625,G__54626,G__54627,G__54628,G__54629,G__54630,G__54631);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__54632,G__54633,G__54634,G__54635,G__54636,G__54637,G__54638,G__54639,G__54640,G__54641,G__54642,G__54643,G__54644,G__54645){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54632);

(invoc_array[(1)] = G__54633);

(invoc_array[(2)] = G__54634);

(invoc_array[(3)] = G__54635);

(invoc_array[(4)] = G__54636);

(invoc_array[(5)] = G__54637);

(invoc_array[(6)] = G__54638);

(invoc_array[(7)] = G__54639);

(invoc_array[(8)] = G__54640);

(invoc_array[(9)] = G__54641);

(invoc_array[(10)] = G__54642);

(invoc_array[(11)] = G__54643);

(invoc_array[(12)] = G__54644);

(invoc_array[vararg_idx] = G__54645);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__54632,G__54633,G__54634,G__54635,G__54636,G__54637,G__54638,G__54639,G__54640,G__54641,G__54642,G__54643,G__54644,var_args){
var G__54645 = null;
if (arguments.length > 13) {
var G__55153__i = 0, G__55153__a = new Array(arguments.length -  13);
while (G__55153__i < G__55153__a.length) {G__55153__a[G__55153__i] = arguments[G__55153__i + 13]; ++G__55153__i;}
  G__54645 = new cljs.core.IndexedSeq(G__55153__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__54632,G__54633,G__54634,G__54635,G__54636,G__54637,G__54638,G__54639,G__54640,G__54641,G__54642,G__54643,G__54644,G__54645);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__55154){
var G__54632 = cljs.core.first(arglist__55154);
arglist__55154 = cljs.core.next(arglist__55154);
var G__54633 = cljs.core.first(arglist__55154);
arglist__55154 = cljs.core.next(arglist__55154);
var G__54634 = cljs.core.first(arglist__55154);
arglist__55154 = cljs.core.next(arglist__55154);
var G__54635 = cljs.core.first(arglist__55154);
arglist__55154 = cljs.core.next(arglist__55154);
var G__54636 = cljs.core.first(arglist__55154);
arglist__55154 = cljs.core.next(arglist__55154);
var G__54637 = cljs.core.first(arglist__55154);
arglist__55154 = cljs.core.next(arglist__55154);
var G__54638 = cljs.core.first(arglist__55154);
arglist__55154 = cljs.core.next(arglist__55154);
var G__54639 = cljs.core.first(arglist__55154);
arglist__55154 = cljs.core.next(arglist__55154);
var G__54640 = cljs.core.first(arglist__55154);
arglist__55154 = cljs.core.next(arglist__55154);
var G__54641 = cljs.core.first(arglist__55154);
arglist__55154 = cljs.core.next(arglist__55154);
var G__54642 = cljs.core.first(arglist__55154);
arglist__55154 = cljs.core.next(arglist__55154);
var G__54643 = cljs.core.first(arglist__55154);
arglist__55154 = cljs.core.next(arglist__55154);
var G__54644 = cljs.core.first(arglist__55154);
var G__54645 = cljs.core.rest(arglist__55154);
return sci$impl$fns$arity_13__delegate(G__54632,G__54633,G__54634,G__54635,G__54636,G__54637,G__54638,G__54639,G__54640,G__54641,G__54642,G__54643,G__54644,G__54645);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__54649,G__54650,G__54651,G__54652,G__54653,G__54654,G__54655,G__54656,G__54657,G__54658,G__54659,G__54660,G__54661,G__54662,G__54663){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54649);

(invoc_array[(1)] = G__54650);

(invoc_array[(2)] = G__54651);

(invoc_array[(3)] = G__54652);

(invoc_array[(4)] = G__54653);

(invoc_array[(5)] = G__54654);

(invoc_array[(6)] = G__54655);

(invoc_array[(7)] = G__54656);

(invoc_array[(8)] = G__54657);

(invoc_array[(9)] = G__54658);

(invoc_array[(10)] = G__54659);

(invoc_array[(11)] = G__54660);

(invoc_array[(12)] = G__54661);

(invoc_array[(13)] = G__54662);

(invoc_array[vararg_idx] = G__54663);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__54649,G__54650,G__54651,G__54652,G__54653,G__54654,G__54655,G__54656,G__54657,G__54658,G__54659,G__54660,G__54661,G__54662,var_args){
var G__54663 = null;
if (arguments.length > 14) {
var G__55160__i = 0, G__55160__a = new Array(arguments.length -  14);
while (G__55160__i < G__55160__a.length) {G__55160__a[G__55160__i] = arguments[G__55160__i + 14]; ++G__55160__i;}
  G__54663 = new cljs.core.IndexedSeq(G__55160__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__54649,G__54650,G__54651,G__54652,G__54653,G__54654,G__54655,G__54656,G__54657,G__54658,G__54659,G__54660,G__54661,G__54662,G__54663);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__55166){
var G__54649 = cljs.core.first(arglist__55166);
arglist__55166 = cljs.core.next(arglist__55166);
var G__54650 = cljs.core.first(arglist__55166);
arglist__55166 = cljs.core.next(arglist__55166);
var G__54651 = cljs.core.first(arglist__55166);
arglist__55166 = cljs.core.next(arglist__55166);
var G__54652 = cljs.core.first(arglist__55166);
arglist__55166 = cljs.core.next(arglist__55166);
var G__54653 = cljs.core.first(arglist__55166);
arglist__55166 = cljs.core.next(arglist__55166);
var G__54654 = cljs.core.first(arglist__55166);
arglist__55166 = cljs.core.next(arglist__55166);
var G__54655 = cljs.core.first(arglist__55166);
arglist__55166 = cljs.core.next(arglist__55166);
var G__54656 = cljs.core.first(arglist__55166);
arglist__55166 = cljs.core.next(arglist__55166);
var G__54657 = cljs.core.first(arglist__55166);
arglist__55166 = cljs.core.next(arglist__55166);
var G__54658 = cljs.core.first(arglist__55166);
arglist__55166 = cljs.core.next(arglist__55166);
var G__54659 = cljs.core.first(arglist__55166);
arglist__55166 = cljs.core.next(arglist__55166);
var G__54660 = cljs.core.first(arglist__55166);
arglist__55166 = cljs.core.next(arglist__55166);
var G__54661 = cljs.core.first(arglist__55166);
arglist__55166 = cljs.core.next(arglist__55166);
var G__54662 = cljs.core.first(arglist__55166);
var G__54663 = cljs.core.rest(arglist__55166);
return sci$impl$fns$arity_14__delegate(G__54649,G__54650,G__54651,G__54652,G__54653,G__54654,G__54655,G__54656,G__54657,G__54658,G__54659,G__54660,G__54661,G__54662,G__54663);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__54668,G__54669,G__54670,G__54671,G__54672,G__54673,G__54674,G__54675,G__54676,G__54677,G__54678,G__54679,G__54680,G__54681,G__54682,G__54683){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54668);

(invoc_array[(1)] = G__54669);

(invoc_array[(2)] = G__54670);

(invoc_array[(3)] = G__54671);

(invoc_array[(4)] = G__54672);

(invoc_array[(5)] = G__54673);

(invoc_array[(6)] = G__54674);

(invoc_array[(7)] = G__54675);

(invoc_array[(8)] = G__54676);

(invoc_array[(9)] = G__54677);

(invoc_array[(10)] = G__54678);

(invoc_array[(11)] = G__54679);

(invoc_array[(12)] = G__54680);

(invoc_array[(13)] = G__54681);

(invoc_array[(14)] = G__54682);

(invoc_array[vararg_idx] = G__54683);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__54668,G__54669,G__54670,G__54671,G__54672,G__54673,G__54674,G__54675,G__54676,G__54677,G__54678,G__54679,G__54680,G__54681,G__54682,var_args){
var G__54683 = null;
if (arguments.length > 15) {
var G__55178__i = 0, G__55178__a = new Array(arguments.length -  15);
while (G__55178__i < G__55178__a.length) {G__55178__a[G__55178__i] = arguments[G__55178__i + 15]; ++G__55178__i;}
  G__54683 = new cljs.core.IndexedSeq(G__55178__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__54668,G__54669,G__54670,G__54671,G__54672,G__54673,G__54674,G__54675,G__54676,G__54677,G__54678,G__54679,G__54680,G__54681,G__54682,G__54683);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__55179){
var G__54668 = cljs.core.first(arglist__55179);
arglist__55179 = cljs.core.next(arglist__55179);
var G__54669 = cljs.core.first(arglist__55179);
arglist__55179 = cljs.core.next(arglist__55179);
var G__54670 = cljs.core.first(arglist__55179);
arglist__55179 = cljs.core.next(arglist__55179);
var G__54671 = cljs.core.first(arglist__55179);
arglist__55179 = cljs.core.next(arglist__55179);
var G__54672 = cljs.core.first(arglist__55179);
arglist__55179 = cljs.core.next(arglist__55179);
var G__54673 = cljs.core.first(arglist__55179);
arglist__55179 = cljs.core.next(arglist__55179);
var G__54674 = cljs.core.first(arglist__55179);
arglist__55179 = cljs.core.next(arglist__55179);
var G__54675 = cljs.core.first(arglist__55179);
arglist__55179 = cljs.core.next(arglist__55179);
var G__54676 = cljs.core.first(arglist__55179);
arglist__55179 = cljs.core.next(arglist__55179);
var G__54677 = cljs.core.first(arglist__55179);
arglist__55179 = cljs.core.next(arglist__55179);
var G__54678 = cljs.core.first(arglist__55179);
arglist__55179 = cljs.core.next(arglist__55179);
var G__54679 = cljs.core.first(arglist__55179);
arglist__55179 = cljs.core.next(arglist__55179);
var G__54680 = cljs.core.first(arglist__55179);
arglist__55179 = cljs.core.next(arglist__55179);
var G__54681 = cljs.core.first(arglist__55179);
arglist__55179 = cljs.core.next(arglist__55179);
var G__54682 = cljs.core.first(arglist__55179);
var G__54683 = cljs.core.rest(arglist__55179);
return sci$impl$fns$arity_15__delegate(G__54668,G__54669,G__54670,G__54671,G__54672,G__54673,G__54674,G__54675,G__54676,G__54677,G__54678,G__54679,G__54680,G__54681,G__54682,G__54683);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__54687,G__54688,G__54689,G__54690,G__54691,G__54692,G__54693,G__54694,G__54695,G__54696,G__54697,G__54698,G__54699,G__54700,G__54701,G__54702,G__54703){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54687);

(invoc_array[(1)] = G__54688);

(invoc_array[(2)] = G__54689);

(invoc_array[(3)] = G__54690);

(invoc_array[(4)] = G__54691);

(invoc_array[(5)] = G__54692);

(invoc_array[(6)] = G__54693);

(invoc_array[(7)] = G__54694);

(invoc_array[(8)] = G__54695);

(invoc_array[(9)] = G__54696);

(invoc_array[(10)] = G__54697);

(invoc_array[(11)] = G__54698);

(invoc_array[(12)] = G__54699);

(invoc_array[(13)] = G__54700);

(invoc_array[(14)] = G__54701);

(invoc_array[(15)] = G__54702);

(invoc_array[vararg_idx] = G__54703);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__54687,G__54688,G__54689,G__54690,G__54691,G__54692,G__54693,G__54694,G__54695,G__54696,G__54697,G__54698,G__54699,G__54700,G__54701,G__54702,var_args){
var G__54703 = null;
if (arguments.length > 16) {
var G__55187__i = 0, G__55187__a = new Array(arguments.length -  16);
while (G__55187__i < G__55187__a.length) {G__55187__a[G__55187__i] = arguments[G__55187__i + 16]; ++G__55187__i;}
  G__54703 = new cljs.core.IndexedSeq(G__55187__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__54687,G__54688,G__54689,G__54690,G__54691,G__54692,G__54693,G__54694,G__54695,G__54696,G__54697,G__54698,G__54699,G__54700,G__54701,G__54702,G__54703);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__55188){
var G__54687 = cljs.core.first(arglist__55188);
arglist__55188 = cljs.core.next(arglist__55188);
var G__54688 = cljs.core.first(arglist__55188);
arglist__55188 = cljs.core.next(arglist__55188);
var G__54689 = cljs.core.first(arglist__55188);
arglist__55188 = cljs.core.next(arglist__55188);
var G__54690 = cljs.core.first(arglist__55188);
arglist__55188 = cljs.core.next(arglist__55188);
var G__54691 = cljs.core.first(arglist__55188);
arglist__55188 = cljs.core.next(arglist__55188);
var G__54692 = cljs.core.first(arglist__55188);
arglist__55188 = cljs.core.next(arglist__55188);
var G__54693 = cljs.core.first(arglist__55188);
arglist__55188 = cljs.core.next(arglist__55188);
var G__54694 = cljs.core.first(arglist__55188);
arglist__55188 = cljs.core.next(arglist__55188);
var G__54695 = cljs.core.first(arglist__55188);
arglist__55188 = cljs.core.next(arglist__55188);
var G__54696 = cljs.core.first(arglist__55188);
arglist__55188 = cljs.core.next(arglist__55188);
var G__54697 = cljs.core.first(arglist__55188);
arglist__55188 = cljs.core.next(arglist__55188);
var G__54698 = cljs.core.first(arglist__55188);
arglist__55188 = cljs.core.next(arglist__55188);
var G__54699 = cljs.core.first(arglist__55188);
arglist__55188 = cljs.core.next(arglist__55188);
var G__54700 = cljs.core.first(arglist__55188);
arglist__55188 = cljs.core.next(arglist__55188);
var G__54701 = cljs.core.first(arglist__55188);
arglist__55188 = cljs.core.next(arglist__55188);
var G__54702 = cljs.core.first(arglist__55188);
var G__54703 = cljs.core.rest(arglist__55188);
return sci$impl$fns$arity_16__delegate(G__54687,G__54688,G__54689,G__54690,G__54691,G__54692,G__54693,G__54694,G__54695,G__54696,G__54697,G__54698,G__54699,G__54700,G__54701,G__54702,G__54703);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__54706,G__54707,G__54708,G__54709,G__54710,G__54711,G__54712,G__54713,G__54714,G__54715,G__54716,G__54717,G__54718,G__54719,G__54720,G__54721,G__54722,G__54723){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54706);

(invoc_array[(1)] = G__54707);

(invoc_array[(2)] = G__54708);

(invoc_array[(3)] = G__54709);

(invoc_array[(4)] = G__54710);

(invoc_array[(5)] = G__54711);

(invoc_array[(6)] = G__54712);

(invoc_array[(7)] = G__54713);

(invoc_array[(8)] = G__54714);

(invoc_array[(9)] = G__54715);

(invoc_array[(10)] = G__54716);

(invoc_array[(11)] = G__54717);

(invoc_array[(12)] = G__54718);

(invoc_array[(13)] = G__54719);

(invoc_array[(14)] = G__54720);

(invoc_array[(15)] = G__54721);

(invoc_array[(16)] = G__54722);

(invoc_array[vararg_idx] = G__54723);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__54706,G__54707,G__54708,G__54709,G__54710,G__54711,G__54712,G__54713,G__54714,G__54715,G__54716,G__54717,G__54718,G__54719,G__54720,G__54721,G__54722,var_args){
var G__54723 = null;
if (arguments.length > 17) {
var G__55194__i = 0, G__55194__a = new Array(arguments.length -  17);
while (G__55194__i < G__55194__a.length) {G__55194__a[G__55194__i] = arguments[G__55194__i + 17]; ++G__55194__i;}
  G__54723 = new cljs.core.IndexedSeq(G__55194__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__54706,G__54707,G__54708,G__54709,G__54710,G__54711,G__54712,G__54713,G__54714,G__54715,G__54716,G__54717,G__54718,G__54719,G__54720,G__54721,G__54722,G__54723);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__55199){
var G__54706 = cljs.core.first(arglist__55199);
arglist__55199 = cljs.core.next(arglist__55199);
var G__54707 = cljs.core.first(arglist__55199);
arglist__55199 = cljs.core.next(arglist__55199);
var G__54708 = cljs.core.first(arglist__55199);
arglist__55199 = cljs.core.next(arglist__55199);
var G__54709 = cljs.core.first(arglist__55199);
arglist__55199 = cljs.core.next(arglist__55199);
var G__54710 = cljs.core.first(arglist__55199);
arglist__55199 = cljs.core.next(arglist__55199);
var G__54711 = cljs.core.first(arglist__55199);
arglist__55199 = cljs.core.next(arglist__55199);
var G__54712 = cljs.core.first(arglist__55199);
arglist__55199 = cljs.core.next(arglist__55199);
var G__54713 = cljs.core.first(arglist__55199);
arglist__55199 = cljs.core.next(arglist__55199);
var G__54714 = cljs.core.first(arglist__55199);
arglist__55199 = cljs.core.next(arglist__55199);
var G__54715 = cljs.core.first(arglist__55199);
arglist__55199 = cljs.core.next(arglist__55199);
var G__54716 = cljs.core.first(arglist__55199);
arglist__55199 = cljs.core.next(arglist__55199);
var G__54717 = cljs.core.first(arglist__55199);
arglist__55199 = cljs.core.next(arglist__55199);
var G__54718 = cljs.core.first(arglist__55199);
arglist__55199 = cljs.core.next(arglist__55199);
var G__54719 = cljs.core.first(arglist__55199);
arglist__55199 = cljs.core.next(arglist__55199);
var G__54720 = cljs.core.first(arglist__55199);
arglist__55199 = cljs.core.next(arglist__55199);
var G__54721 = cljs.core.first(arglist__55199);
arglist__55199 = cljs.core.next(arglist__55199);
var G__54722 = cljs.core.first(arglist__55199);
var G__54723 = cljs.core.rest(arglist__55199);
return sci$impl$fns$arity_17__delegate(G__54706,G__54707,G__54708,G__54709,G__54710,G__54711,G__54712,G__54713,G__54714,G__54715,G__54716,G__54717,G__54718,G__54719,G__54720,G__54721,G__54722,G__54723);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__54724,G__54725,G__54726,G__54727,G__54728,G__54729,G__54730,G__54731,G__54732,G__54733,G__54734,G__54735,G__54736,G__54737,G__54738,G__54739,G__54740,G__54741,G__54742){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54724);

(invoc_array[(1)] = G__54725);

(invoc_array[(2)] = G__54726);

(invoc_array[(3)] = G__54727);

(invoc_array[(4)] = G__54728);

(invoc_array[(5)] = G__54729);

(invoc_array[(6)] = G__54730);

(invoc_array[(7)] = G__54731);

(invoc_array[(8)] = G__54732);

(invoc_array[(9)] = G__54733);

(invoc_array[(10)] = G__54734);

(invoc_array[(11)] = G__54735);

(invoc_array[(12)] = G__54736);

(invoc_array[(13)] = G__54737);

(invoc_array[(14)] = G__54738);

(invoc_array[(15)] = G__54739);

(invoc_array[(16)] = G__54740);

(invoc_array[(17)] = G__54741);

(invoc_array[vararg_idx] = G__54742);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__54724,G__54725,G__54726,G__54727,G__54728,G__54729,G__54730,G__54731,G__54732,G__54733,G__54734,G__54735,G__54736,G__54737,G__54738,G__54739,G__54740,G__54741,var_args){
var G__54742 = null;
if (arguments.length > 18) {
var G__55230__i = 0, G__55230__a = new Array(arguments.length -  18);
while (G__55230__i < G__55230__a.length) {G__55230__a[G__55230__i] = arguments[G__55230__i + 18]; ++G__55230__i;}
  G__54742 = new cljs.core.IndexedSeq(G__55230__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__54724,G__54725,G__54726,G__54727,G__54728,G__54729,G__54730,G__54731,G__54732,G__54733,G__54734,G__54735,G__54736,G__54737,G__54738,G__54739,G__54740,G__54741,G__54742);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__55238){
var G__54724 = cljs.core.first(arglist__55238);
arglist__55238 = cljs.core.next(arglist__55238);
var G__54725 = cljs.core.first(arglist__55238);
arglist__55238 = cljs.core.next(arglist__55238);
var G__54726 = cljs.core.first(arglist__55238);
arglist__55238 = cljs.core.next(arglist__55238);
var G__54727 = cljs.core.first(arglist__55238);
arglist__55238 = cljs.core.next(arglist__55238);
var G__54728 = cljs.core.first(arglist__55238);
arglist__55238 = cljs.core.next(arglist__55238);
var G__54729 = cljs.core.first(arglist__55238);
arglist__55238 = cljs.core.next(arglist__55238);
var G__54730 = cljs.core.first(arglist__55238);
arglist__55238 = cljs.core.next(arglist__55238);
var G__54731 = cljs.core.first(arglist__55238);
arglist__55238 = cljs.core.next(arglist__55238);
var G__54732 = cljs.core.first(arglist__55238);
arglist__55238 = cljs.core.next(arglist__55238);
var G__54733 = cljs.core.first(arglist__55238);
arglist__55238 = cljs.core.next(arglist__55238);
var G__54734 = cljs.core.first(arglist__55238);
arglist__55238 = cljs.core.next(arglist__55238);
var G__54735 = cljs.core.first(arglist__55238);
arglist__55238 = cljs.core.next(arglist__55238);
var G__54736 = cljs.core.first(arglist__55238);
arglist__55238 = cljs.core.next(arglist__55238);
var G__54737 = cljs.core.first(arglist__55238);
arglist__55238 = cljs.core.next(arglist__55238);
var G__54738 = cljs.core.first(arglist__55238);
arglist__55238 = cljs.core.next(arglist__55238);
var G__54739 = cljs.core.first(arglist__55238);
arglist__55238 = cljs.core.next(arglist__55238);
var G__54740 = cljs.core.first(arglist__55238);
arglist__55238 = cljs.core.next(arglist__55238);
var G__54741 = cljs.core.first(arglist__55238);
var G__54742 = cljs.core.rest(arglist__55238);
return sci$impl$fns$arity_18__delegate(G__54724,G__54725,G__54726,G__54727,G__54728,G__54729,G__54730,G__54731,G__54732,G__54733,G__54734,G__54735,G__54736,G__54737,G__54738,G__54739,G__54740,G__54741,G__54742);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__54751,G__54752,G__54753,G__54754,G__54755,G__54756,G__54757,G__54758,G__54759,G__54760,G__54761,G__54762,G__54763,G__54764,G__54765,G__54766,G__54767,G__54768,G__54769,G__54770){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54751);

(invoc_array[(1)] = G__54752);

(invoc_array[(2)] = G__54753);

(invoc_array[(3)] = G__54754);

(invoc_array[(4)] = G__54755);

(invoc_array[(5)] = G__54756);

(invoc_array[(6)] = G__54757);

(invoc_array[(7)] = G__54758);

(invoc_array[(8)] = G__54759);

(invoc_array[(9)] = G__54760);

(invoc_array[(10)] = G__54761);

(invoc_array[(11)] = G__54762);

(invoc_array[(12)] = G__54763);

(invoc_array[(13)] = G__54764);

(invoc_array[(14)] = G__54765);

(invoc_array[(15)] = G__54766);

(invoc_array[(16)] = G__54767);

(invoc_array[(17)] = G__54768);

(invoc_array[(18)] = G__54769);

(invoc_array[vararg_idx] = G__54770);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__54751,G__54752,G__54753,G__54754,G__54755,G__54756,G__54757,G__54758,G__54759,G__54760,G__54761,G__54762,G__54763,G__54764,G__54765,G__54766,G__54767,G__54768,G__54769,var_args){
var G__54770 = null;
if (arguments.length > 19) {
var G__55279__i = 0, G__55279__a = new Array(arguments.length -  19);
while (G__55279__i < G__55279__a.length) {G__55279__a[G__55279__i] = arguments[G__55279__i + 19]; ++G__55279__i;}
  G__54770 = new cljs.core.IndexedSeq(G__55279__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__54751,G__54752,G__54753,G__54754,G__54755,G__54756,G__54757,G__54758,G__54759,G__54760,G__54761,G__54762,G__54763,G__54764,G__54765,G__54766,G__54767,G__54768,G__54769,G__54770);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__55281){
var G__54751 = cljs.core.first(arglist__55281);
arglist__55281 = cljs.core.next(arglist__55281);
var G__54752 = cljs.core.first(arglist__55281);
arglist__55281 = cljs.core.next(arglist__55281);
var G__54753 = cljs.core.first(arglist__55281);
arglist__55281 = cljs.core.next(arglist__55281);
var G__54754 = cljs.core.first(arglist__55281);
arglist__55281 = cljs.core.next(arglist__55281);
var G__54755 = cljs.core.first(arglist__55281);
arglist__55281 = cljs.core.next(arglist__55281);
var G__54756 = cljs.core.first(arglist__55281);
arglist__55281 = cljs.core.next(arglist__55281);
var G__54757 = cljs.core.first(arglist__55281);
arglist__55281 = cljs.core.next(arglist__55281);
var G__54758 = cljs.core.first(arglist__55281);
arglist__55281 = cljs.core.next(arglist__55281);
var G__54759 = cljs.core.first(arglist__55281);
arglist__55281 = cljs.core.next(arglist__55281);
var G__54760 = cljs.core.first(arglist__55281);
arglist__55281 = cljs.core.next(arglist__55281);
var G__54761 = cljs.core.first(arglist__55281);
arglist__55281 = cljs.core.next(arglist__55281);
var G__54762 = cljs.core.first(arglist__55281);
arglist__55281 = cljs.core.next(arglist__55281);
var G__54763 = cljs.core.first(arglist__55281);
arglist__55281 = cljs.core.next(arglist__55281);
var G__54764 = cljs.core.first(arglist__55281);
arglist__55281 = cljs.core.next(arglist__55281);
var G__54765 = cljs.core.first(arglist__55281);
arglist__55281 = cljs.core.next(arglist__55281);
var G__54766 = cljs.core.first(arglist__55281);
arglist__55281 = cljs.core.next(arglist__55281);
var G__54767 = cljs.core.first(arglist__55281);
arglist__55281 = cljs.core.next(arglist__55281);
var G__54768 = cljs.core.first(arglist__55281);
arglist__55281 = cljs.core.next(arglist__55281);
var G__54769 = cljs.core.first(arglist__55281);
var G__54770 = cljs.core.rest(arglist__55281);
return sci$impl$fns$arity_19__delegate(G__54751,G__54752,G__54753,G__54754,G__54755,G__54756,G__54757,G__54758,G__54759,G__54760,G__54761,G__54762,G__54763,G__54764,G__54765,G__54766,G__54767,G__54768,G__54769,G__54770);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__54773,G__54774,G__54775,G__54776,G__54777,G__54778,G__54779,G__54780,G__54781,G__54782,G__54783,G__54784,G__54785,G__54786,G__54787,G__54788,G__54789,G__54790,G__54791,G__54792,G__54793){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54773);

(invoc_array[(1)] = G__54774);

(invoc_array[(2)] = G__54775);

(invoc_array[(3)] = G__54776);

(invoc_array[(4)] = G__54777);

(invoc_array[(5)] = G__54778);

(invoc_array[(6)] = G__54779);

(invoc_array[(7)] = G__54780);

(invoc_array[(8)] = G__54781);

(invoc_array[(9)] = G__54782);

(invoc_array[(10)] = G__54783);

(invoc_array[(11)] = G__54784);

(invoc_array[(12)] = G__54785);

(invoc_array[(13)] = G__54786);

(invoc_array[(14)] = G__54787);

(invoc_array[(15)] = G__54788);

(invoc_array[(16)] = G__54789);

(invoc_array[(17)] = G__54790);

(invoc_array[(18)] = G__54791);

(invoc_array[(19)] = G__54792);

(invoc_array[vararg_idx] = G__54793);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__54773,G__54774,G__54775,G__54776,G__54777,G__54778,G__54779,G__54780,G__54781,G__54782,G__54783,G__54784,G__54785,G__54786,G__54787,G__54788,G__54789,G__54790,G__54791,G__54792,var_args){
var G__54793 = null;
if (arguments.length > 20) {
var G__55295__i = 0, G__55295__a = new Array(arguments.length -  20);
while (G__55295__i < G__55295__a.length) {G__55295__a[G__55295__i] = arguments[G__55295__i + 20]; ++G__55295__i;}
  G__54793 = new cljs.core.IndexedSeq(G__55295__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__54773,G__54774,G__54775,G__54776,G__54777,G__54778,G__54779,G__54780,G__54781,G__54782,G__54783,G__54784,G__54785,G__54786,G__54787,G__54788,G__54789,G__54790,G__54791,G__54792,G__54793);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__55297){
var G__54773 = cljs.core.first(arglist__55297);
arglist__55297 = cljs.core.next(arglist__55297);
var G__54774 = cljs.core.first(arglist__55297);
arglist__55297 = cljs.core.next(arglist__55297);
var G__54775 = cljs.core.first(arglist__55297);
arglist__55297 = cljs.core.next(arglist__55297);
var G__54776 = cljs.core.first(arglist__55297);
arglist__55297 = cljs.core.next(arglist__55297);
var G__54777 = cljs.core.first(arglist__55297);
arglist__55297 = cljs.core.next(arglist__55297);
var G__54778 = cljs.core.first(arglist__55297);
arglist__55297 = cljs.core.next(arglist__55297);
var G__54779 = cljs.core.first(arglist__55297);
arglist__55297 = cljs.core.next(arglist__55297);
var G__54780 = cljs.core.first(arglist__55297);
arglist__55297 = cljs.core.next(arglist__55297);
var G__54781 = cljs.core.first(arglist__55297);
arglist__55297 = cljs.core.next(arglist__55297);
var G__54782 = cljs.core.first(arglist__55297);
arglist__55297 = cljs.core.next(arglist__55297);
var G__54783 = cljs.core.first(arglist__55297);
arglist__55297 = cljs.core.next(arglist__55297);
var G__54784 = cljs.core.first(arglist__55297);
arglist__55297 = cljs.core.next(arglist__55297);
var G__54785 = cljs.core.first(arglist__55297);
arglist__55297 = cljs.core.next(arglist__55297);
var G__54786 = cljs.core.first(arglist__55297);
arglist__55297 = cljs.core.next(arglist__55297);
var G__54787 = cljs.core.first(arglist__55297);
arglist__55297 = cljs.core.next(arglist__55297);
var G__54788 = cljs.core.first(arglist__55297);
arglist__55297 = cljs.core.next(arglist__55297);
var G__54789 = cljs.core.first(arglist__55297);
arglist__55297 = cljs.core.next(arglist__55297);
var G__54790 = cljs.core.first(arglist__55297);
arglist__55297 = cljs.core.next(arglist__55297);
var G__54791 = cljs.core.first(arglist__55297);
arglist__55297 = cljs.core.next(arglist__55297);
var G__54792 = cljs.core.first(arglist__55297);
var G__54793 = cljs.core.rest(arglist__55297);
return sci$impl$fns$arity_20__delegate(G__54773,G__54774,G__54775,G__54776,G__54777,G__54778,G__54779,G__54780,G__54781,G__54782,G__54783,G__54784,G__54785,G__54786,G__54787,G__54788,G__54789,G__54790,G__54791,G__54792,G__54793);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54507)].join('')));

}
})():(function (){var G__54797 = (fixed_arity | (0));
switch (G__54797) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__53897__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53897__auto__)){
continue;
} else {
return ret__53897__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__54800){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54800);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__54801,G__54802){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54801);

(invoc_array[(1)] = G__54802);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__54809,G__54810,G__54811){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54809);

(invoc_array[(1)] = G__54810);

(invoc_array[(2)] = G__54811);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__54813,G__54814,G__54815,G__54816){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54813);

(invoc_array[(1)] = G__54814);

(invoc_array[(2)] = G__54815);

(invoc_array[(3)] = G__54816);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__54818,G__54819,G__54820,G__54821,G__54822){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54818);

(invoc_array[(1)] = G__54819);

(invoc_array[(2)] = G__54820);

(invoc_array[(3)] = G__54821);

(invoc_array[(4)] = G__54822);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__54823,G__54824,G__54825,G__54826,G__54827,G__54828){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54823);

(invoc_array[(1)] = G__54824);

(invoc_array[(2)] = G__54825);

(invoc_array[(3)] = G__54826);

(invoc_array[(4)] = G__54827);

(invoc_array[(5)] = G__54828);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__54832,G__54833,G__54834,G__54835,G__54836,G__54837,G__54838){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54832);

(invoc_array[(1)] = G__54833);

(invoc_array[(2)] = G__54834);

(invoc_array[(3)] = G__54835);

(invoc_array[(4)] = G__54836);

(invoc_array[(5)] = G__54837);

(invoc_array[(6)] = G__54838);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__54839,G__54840,G__54841,G__54842,G__54843,G__54844,G__54845,G__54846){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54839);

(invoc_array[(1)] = G__54840);

(invoc_array[(2)] = G__54841);

(invoc_array[(3)] = G__54842);

(invoc_array[(4)] = G__54843);

(invoc_array[(5)] = G__54844);

(invoc_array[(6)] = G__54845);

(invoc_array[(7)] = G__54846);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__54847,G__54848,G__54849,G__54850,G__54851,G__54852,G__54853,G__54854,G__54855){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54847);

(invoc_array[(1)] = G__54848);

(invoc_array[(2)] = G__54849);

(invoc_array[(3)] = G__54850);

(invoc_array[(4)] = G__54851);

(invoc_array[(5)] = G__54852);

(invoc_array[(6)] = G__54853);

(invoc_array[(7)] = G__54854);

(invoc_array[(8)] = G__54855);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__54856,G__54857,G__54858,G__54859,G__54860,G__54861,G__54862,G__54863,G__54864,G__54865){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54856);

(invoc_array[(1)] = G__54857);

(invoc_array[(2)] = G__54858);

(invoc_array[(3)] = G__54859);

(invoc_array[(4)] = G__54860);

(invoc_array[(5)] = G__54861);

(invoc_array[(6)] = G__54862);

(invoc_array[(7)] = G__54863);

(invoc_array[(8)] = G__54864);

(invoc_array[(9)] = G__54865);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__54877,G__54878,G__54879,G__54880,G__54881,G__54882,G__54883,G__54884,G__54885,G__54886,G__54887){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54877);

(invoc_array[(1)] = G__54878);

(invoc_array[(2)] = G__54879);

(invoc_array[(3)] = G__54880);

(invoc_array[(4)] = G__54881);

(invoc_array[(5)] = G__54882);

(invoc_array[(6)] = G__54883);

(invoc_array[(7)] = G__54884);

(invoc_array[(8)] = G__54885);

(invoc_array[(9)] = G__54886);

(invoc_array[(10)] = G__54887);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__54892,G__54893,G__54894,G__54895,G__54896,G__54897,G__54898,G__54899,G__54900,G__54901,G__54902,G__54903){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54892);

(invoc_array[(1)] = G__54893);

(invoc_array[(2)] = G__54894);

(invoc_array[(3)] = G__54895);

(invoc_array[(4)] = G__54896);

(invoc_array[(5)] = G__54897);

(invoc_array[(6)] = G__54898);

(invoc_array[(7)] = G__54899);

(invoc_array[(8)] = G__54900);

(invoc_array[(9)] = G__54901);

(invoc_array[(10)] = G__54902);

(invoc_array[(11)] = G__54903);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__54905,G__54906,G__54907,G__54908,G__54909,G__54910,G__54911,G__54912,G__54913,G__54914,G__54915,G__54916,G__54917){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54905);

(invoc_array[(1)] = G__54906);

(invoc_array[(2)] = G__54907);

(invoc_array[(3)] = G__54908);

(invoc_array[(4)] = G__54909);

(invoc_array[(5)] = G__54910);

(invoc_array[(6)] = G__54911);

(invoc_array[(7)] = G__54912);

(invoc_array[(8)] = G__54913);

(invoc_array[(9)] = G__54914);

(invoc_array[(10)] = G__54915);

(invoc_array[(11)] = G__54916);

(invoc_array[(12)] = G__54917);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__54924,G__54925,G__54926,G__54927,G__54928,G__54929,G__54930,G__54931,G__54932,G__54933,G__54934,G__54935,G__54936,G__54937){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54924);

(invoc_array[(1)] = G__54925);

(invoc_array[(2)] = G__54926);

(invoc_array[(3)] = G__54927);

(invoc_array[(4)] = G__54928);

(invoc_array[(5)] = G__54929);

(invoc_array[(6)] = G__54930);

(invoc_array[(7)] = G__54931);

(invoc_array[(8)] = G__54932);

(invoc_array[(9)] = G__54933);

(invoc_array[(10)] = G__54934);

(invoc_array[(11)] = G__54935);

(invoc_array[(12)] = G__54936);

(invoc_array[(13)] = G__54937);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__54950,G__54951,G__54952,G__54953,G__54954,G__54955,G__54956,G__54957,G__54958,G__54959,G__54960,G__54961,G__54962,G__54963,G__54964){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54950);

(invoc_array[(1)] = G__54951);

(invoc_array[(2)] = G__54952);

(invoc_array[(3)] = G__54953);

(invoc_array[(4)] = G__54954);

(invoc_array[(5)] = G__54955);

(invoc_array[(6)] = G__54956);

(invoc_array[(7)] = G__54957);

(invoc_array[(8)] = G__54958);

(invoc_array[(9)] = G__54959);

(invoc_array[(10)] = G__54960);

(invoc_array[(11)] = G__54961);

(invoc_array[(12)] = G__54962);

(invoc_array[(13)] = G__54963);

(invoc_array[(14)] = G__54964);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__54965,G__54966,G__54967,G__54968,G__54969,G__54970,G__54971,G__54972,G__54973,G__54974,G__54975,G__54976,G__54977,G__54978,G__54979,G__54980){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54965);

(invoc_array[(1)] = G__54966);

(invoc_array[(2)] = G__54967);

(invoc_array[(3)] = G__54968);

(invoc_array[(4)] = G__54969);

(invoc_array[(5)] = G__54970);

(invoc_array[(6)] = G__54971);

(invoc_array[(7)] = G__54972);

(invoc_array[(8)] = G__54973);

(invoc_array[(9)] = G__54974);

(invoc_array[(10)] = G__54975);

(invoc_array[(11)] = G__54976);

(invoc_array[(12)] = G__54977);

(invoc_array[(13)] = G__54978);

(invoc_array[(14)] = G__54979);

(invoc_array[(15)] = G__54980);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__54988,G__54989,G__54990,G__54991,G__54992,G__54993,G__54994,G__54995,G__54996,G__54997,G__54998,G__54999,G__55000,G__55001,G__55002,G__55003,G__55004){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__54988);

(invoc_array[(1)] = G__54989);

(invoc_array[(2)] = G__54990);

(invoc_array[(3)] = G__54991);

(invoc_array[(4)] = G__54992);

(invoc_array[(5)] = G__54993);

(invoc_array[(6)] = G__54994);

(invoc_array[(7)] = G__54995);

(invoc_array[(8)] = G__54996);

(invoc_array[(9)] = G__54997);

(invoc_array[(10)] = G__54998);

(invoc_array[(11)] = G__54999);

(invoc_array[(12)] = G__55000);

(invoc_array[(13)] = G__55001);

(invoc_array[(14)] = G__55002);

(invoc_array[(15)] = G__55003);

(invoc_array[(16)] = G__55004);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__55005,G__55006,G__55007,G__55008,G__55009,G__55010,G__55011,G__55012,G__55013,G__55014,G__55015,G__55016,G__55017,G__55018,G__55019,G__55020,G__55021,G__55022){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__55005);

(invoc_array[(1)] = G__55006);

(invoc_array[(2)] = G__55007);

(invoc_array[(3)] = G__55008);

(invoc_array[(4)] = G__55009);

(invoc_array[(5)] = G__55010);

(invoc_array[(6)] = G__55011);

(invoc_array[(7)] = G__55012);

(invoc_array[(8)] = G__55013);

(invoc_array[(9)] = G__55014);

(invoc_array[(10)] = G__55015);

(invoc_array[(11)] = G__55016);

(invoc_array[(12)] = G__55017);

(invoc_array[(13)] = G__55018);

(invoc_array[(14)] = G__55019);

(invoc_array[(15)] = G__55020);

(invoc_array[(16)] = G__55021);

(invoc_array[(17)] = G__55022);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__55026,G__55027,G__55028,G__55029,G__55030,G__55031,G__55032,G__55033,G__55034,G__55035,G__55036,G__55037,G__55038,G__55039,G__55040,G__55041,G__55042,G__55043,G__55044){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__55026);

(invoc_array[(1)] = G__55027);

(invoc_array[(2)] = G__55028);

(invoc_array[(3)] = G__55029);

(invoc_array[(4)] = G__55030);

(invoc_array[(5)] = G__55031);

(invoc_array[(6)] = G__55032);

(invoc_array[(7)] = G__55033);

(invoc_array[(8)] = G__55034);

(invoc_array[(9)] = G__55035);

(invoc_array[(10)] = G__55036);

(invoc_array[(11)] = G__55037);

(invoc_array[(12)] = G__55038);

(invoc_array[(13)] = G__55039);

(invoc_array[(14)] = G__55040);

(invoc_array[(15)] = G__55041);

(invoc_array[(16)] = G__55042);

(invoc_array[(17)] = G__55043);

(invoc_array[(18)] = G__55044);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__55049,G__55050,G__55051,G__55052,G__55053,G__55054,G__55055,G__55056,G__55057,G__55058,G__55059,G__55060,G__55061,G__55062,G__55063,G__55064,G__55065,G__55066,G__55067,G__55068){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__55049);

(invoc_array[(1)] = G__55050);

(invoc_array[(2)] = G__55051);

(invoc_array[(3)] = G__55052);

(invoc_array[(4)] = G__55053);

(invoc_array[(5)] = G__55054);

(invoc_array[(6)] = G__55055);

(invoc_array[(7)] = G__55056);

(invoc_array[(8)] = G__55057);

(invoc_array[(9)] = G__55058);

(invoc_array[(10)] = G__55059);

(invoc_array[(11)] = G__55060);

(invoc_array[(12)] = G__55061);

(invoc_array[(13)] = G__55062);

(invoc_array[(14)] = G__55063);

(invoc_array[(15)] = G__55064);

(invoc_array[(16)] = G__55065);

(invoc_array[(17)] = G__55066);

(invoc_array[(18)] = G__55067);

(invoc_array[(19)] = G__55068);

while(true){
var ret__53898__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__53898__auto__)){
continue;
} else {
return ret__53898__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54797)].join('')));

}
})());
return f;
}));

(sci.impl.fns.fun.cljs$lang$maxFixedArity = 11);

sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});

//# sourceMappingURL=sci.impl.fns.js.map
