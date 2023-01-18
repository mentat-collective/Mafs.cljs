import "./cljs_env.js";
goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54750 = cljs.core.get_global_hierarchy;
return (fexpr__54750.cljs$core$IFn$_invoke$arity$0 ? fexpr__54750.cljs$core$IFn$_invoke$arity$0() : fexpr__54750.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__54771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__54771.cljs$core$IFn$_invoke$arity$1 ? fexpr__54771.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__54771.call(null,ref));
}));
sci.impl.core_protocols.ideref_default = sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x);
});
sci.impl.core_protocols.cljs_core_ns = sci.lang.__GT_Namespace(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IDeref,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54796 = cljs.core.get_global_hierarchy;
return (fexpr__54796.cljs$core$IFn$_invoke$arity$0 ? fexpr__54796.cljs$core$IFn$_invoke$arity$0() : fexpr__54796.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54799 = cljs.core.get_global_hierarchy;
return (fexpr__54799.cljs$core$IFn$_invoke$arity$0 ? fexpr__54799.cljs$core$IFn$_invoke$arity$0() : fexpr__54799.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__54904 = null;
var G__54904__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__54803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__54803.cljs$core$IFn$_invoke$arity$2 ? fexpr__54803.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__54803.call(null,ref,f));
});
var G__54904__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__54804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__54804.cljs$core$IFn$_invoke$arity$3 ? fexpr__54804.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__54804.call(null,ref,f,a1));
});
var G__54904__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__54812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__54812.cljs$core$IFn$_invoke$arity$4 ? fexpr__54812.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__54812.call(null,ref,f,a1,a2));
});
var G__54904__5 = (function() { 
var G__54918__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__54918 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__54919__i = 0, G__54919__a = new Array(arguments.length -  4);
while (G__54919__i < G__54919__a.length) {G__54919__a[G__54919__i] = arguments[G__54919__i + 4]; ++G__54919__i;}
  args = new cljs.core.IndexedSeq(G__54919__a,0,null);
} 
return G__54918__delegate.call(this,ref,f,a1,a2,args);};
G__54918.cljs$lang$maxFixedArity = 4;
G__54918.cljs$lang$applyTo = (function (arglist__54920){
var ref = cljs.core.first(arglist__54920);
arglist__54920 = cljs.core.next(arglist__54920);
var f = cljs.core.first(arglist__54920);
arglist__54920 = cljs.core.next(arglist__54920);
var a1 = cljs.core.first(arglist__54920);
arglist__54920 = cljs.core.next(arglist__54920);
var a2 = cljs.core.first(arglist__54920);
var args = cljs.core.rest(arglist__54920);
return G__54918__delegate(ref,f,a1,a2,args);
});
G__54918.cljs$core$IFn$_invoke$arity$variadic = G__54918__delegate;
return G__54918;
})()
;
G__54904 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__54904__2.call(this,ref,f);
case 3:
return G__54904__3.call(this,ref,f,a1);
case 4:
return G__54904__4.call(this,ref,f,a1,a2);
default:
var G__54938 = null;
if (arguments.length > 4) {
var G__54939__i = 0, G__54939__a = new Array(arguments.length -  4);
while (G__54939__i < G__54939__a.length) {G__54939__a[G__54939__i] = arguments[G__54939__i + 4]; ++G__54939__i;}
G__54938 = new cljs.core.IndexedSeq(G__54939__a,0,null);
}
return G__54904__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__54938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54904.cljs$lang$maxFixedArity = 4;
G__54904.cljs$lang$applyTo = G__54904__5.cljs$lang$applyTo;
G__54904.cljs$core$IFn$_invoke$arity$2 = G__54904__2;
G__54904.cljs$core$IFn$_invoke$arity$3 = G__54904__3;
G__54904.cljs$core$IFn$_invoke$arity$4 = G__54904__4;
G__54904.cljs$core$IFn$_invoke$arity$variadic = G__54904__5.cljs$core$IFn$_invoke$arity$variadic;
return G__54904;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__54817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__54817.cljs$core$IFn$_invoke$arity$2 ? fexpr__54817.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__54817.call(null,ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__54944__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__54944 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__54945__i = 0, G__54945__a = new Array(arguments.length -  2);
while (G__54945__i < G__54945__a.length) {G__54945__a[G__54945__i] = arguments[G__54945__i + 2]; ++G__54945__i;}
  args = new cljs.core.IndexedSeq(G__54945__a,0,null);
} 
return G__54944__delegate.call(this,ref,f,args);};
G__54944.cljs$lang$maxFixedArity = 2;
G__54944.cljs$lang$applyTo = (function (arglist__54946){
var ref = cljs.core.first(arglist__54946);
arglist__54946 = cljs.core.next(arglist__54946);
var f = cljs.core.first(arglist__54946);
var args = cljs.core.rest(arglist__54946);
return G__54944__delegate(ref,f,args);
});
G__54944.cljs$core$IFn$_invoke$arity$variadic = G__54944__delegate;
return G__54944;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54947 = arguments.length;
var i__5770__auto___54948 = (0);
while(true){
if((i__5770__auto___54948 < len__5769__auto___54947)){
args__5775__auto__.push((arguments[i__5770__auto___54948]));

var G__54949 = (i__5770__auto___54948 + (1));
i__5770__auto___54948 = G__54949;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq54829){
var G__54830 = cljs.core.first(seq54829);
var seq54829__$1 = cljs.core.next(seq54829);
var G__54831 = cljs.core.first(seq54829__$1);
var seq54829__$2 = cljs.core.next(seq54829__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54830,G__54831,seq54829__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
});
sci.impl.core_protocols.swap_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.ISwap,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IReset,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));

//# sourceMappingURL=sci.impl.core_protocols.js.map
