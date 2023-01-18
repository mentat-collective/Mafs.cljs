import "./cljs_env.js";
goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45145 = arguments.length;
switch (G__45145) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45146 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45146 = (function (f,blockable,meta45147){
this.f = f;
this.blockable = blockable;
this.meta45147 = meta45147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45148,meta45147__$1){
var self__ = this;
var _45148__$1 = this;
return (new cljs.core.async.t_cljs$core$async45146(self__.f,self__.blockable,meta45147__$1));
}));

(cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45148){
var self__ = this;
var _45148__$1 = this;
return self__.meta45147;
}));

(cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45147","meta45147",-1865714606,null)], null);
}));

(cljs.core.async.t_cljs$core$async45146.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45146");

(cljs.core.async.t_cljs$core$async45146.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45146");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45146.
 */
cljs.core.async.__GT_t_cljs$core$async45146 = (function cljs$core$async$__GT_t_cljs$core$async45146(f__$1,blockable__$1,meta45147){
return (new cljs.core.async.t_cljs$core$async45146(f__$1,blockable__$1,meta45147));
});

}

return (new cljs.core.async.t_cljs$core$async45146(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45155 = arguments.length;
switch (G__45155) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45163 = arguments.length;
switch (G__45163) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45179 = arguments.length;
switch (G__45179) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47320 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47320) : fn1.call(null,val_47320));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47320) : fn1.call(null,val_47320));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45197 = arguments.length;
switch (G__45197) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___47323 = n;
var x_47324 = (0);
while(true){
if((x_47324 < n__5636__auto___47323)){
(a[x_47324] = x_47324);

var G__47325 = (x_47324 + (1));
x_47324 = G__47325;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45206 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45206 = (function (flag,meta45207){
this.flag = flag;
this.meta45207 = meta45207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45208,meta45207__$1){
var self__ = this;
var _45208__$1 = this;
return (new cljs.core.async.t_cljs$core$async45206(self__.flag,meta45207__$1));
}));

(cljs.core.async.t_cljs$core$async45206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45208){
var self__ = this;
var _45208__$1 = this;
return self__.meta45207;
}));

(cljs.core.async.t_cljs$core$async45206.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45206.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45206.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45206.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45207","meta45207",-1710280852,null)], null);
}));

(cljs.core.async.t_cljs$core$async45206.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45206");

(cljs.core.async.t_cljs$core$async45206.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45206");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45206.
 */
cljs.core.async.__GT_t_cljs$core$async45206 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45206(flag__$1,meta45207){
return (new cljs.core.async.t_cljs$core$async45206(flag__$1,meta45207));
});

}

return (new cljs.core.async.t_cljs$core$async45206(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45209 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45209 = (function (flag,cb,meta45210){
this.flag = flag;
this.cb = cb;
this.meta45210 = meta45210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45211,meta45210__$1){
var self__ = this;
var _45211__$1 = this;
return (new cljs.core.async.t_cljs$core$async45209(self__.flag,self__.cb,meta45210__$1));
}));

(cljs.core.async.t_cljs$core$async45209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45211){
var self__ = this;
var _45211__$1 = this;
return self__.meta45210;
}));

(cljs.core.async.t_cljs$core$async45209.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45209.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45209.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45209.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45210","meta45210",-1115029606,null)], null);
}));

(cljs.core.async.t_cljs$core$async45209.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45209");

(cljs.core.async.t_cljs$core$async45209.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45209");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45209.
 */
cljs.core.async.__GT_t_cljs$core$async45209 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45209(flag__$1,cb__$1,meta45210){
return (new cljs.core.async.t_cljs$core$async45209(flag__$1,cb__$1,meta45210));
});

}

return (new cljs.core.async.t_cljs$core$async45209(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45214_SHARP_){
var G__45216 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45214_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45216) : fret.call(null,G__45216));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45215_SHARP_){
var G__45217 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45215_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45217) : fret.call(null,G__45217));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47372 = (i + (1));
i = G__47372;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47373 = arguments.length;
var i__5770__auto___47374 = (0);
while(true){
if((i__5770__auto___47374 < len__5769__auto___47373)){
args__5775__auto__.push((arguments[i__5770__auto___47374]));

var G__47375 = (i__5770__auto___47374 + (1));
i__5770__auto___47374 = G__47375;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45221){
var map__45222 = p__45221;
var map__45222__$1 = cljs.core.__destructure_map(map__45222);
var opts = map__45222__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45218){
var G__45219 = cljs.core.first(seq45218);
var seq45218__$1 = cljs.core.next(seq45218);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45219,seq45218__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__45233 = arguments.length;
switch (G__45233) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45083__auto___47382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_45273){
var state_val_45274 = (state_45273[(1)]);
if((state_val_45274 === (7))){
var inst_45269 = (state_45273[(2)]);
var state_45273__$1 = state_45273;
var statearr_45275_47383 = state_45273__$1;
(statearr_45275_47383[(2)] = inst_45269);

(statearr_45275_47383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (1))){
var state_45273__$1 = state_45273;
var statearr_45276_47384 = state_45273__$1;
(statearr_45276_47384[(2)] = null);

(statearr_45276_47384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (4))){
var inst_45249 = (state_45273[(7)]);
var inst_45249__$1 = (state_45273[(2)]);
var inst_45253 = (inst_45249__$1 == null);
var state_45273__$1 = (function (){var statearr_45278 = state_45273;
(statearr_45278[(7)] = inst_45249__$1);

return statearr_45278;
})();
if(cljs.core.truth_(inst_45253)){
var statearr_45279_47385 = state_45273__$1;
(statearr_45279_47385[(1)] = (5));

} else {
var statearr_45280_47386 = state_45273__$1;
(statearr_45280_47386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (13))){
var state_45273__$1 = state_45273;
var statearr_45281_47390 = state_45273__$1;
(statearr_45281_47390[(2)] = null);

(statearr_45281_47390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (6))){
var inst_45249 = (state_45273[(7)]);
var state_45273__$1 = state_45273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45273__$1,(11),to,inst_45249);
} else {
if((state_val_45274 === (3))){
var inst_45271 = (state_45273[(2)]);
var state_45273__$1 = state_45273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45273__$1,inst_45271);
} else {
if((state_val_45274 === (12))){
var state_45273__$1 = state_45273;
var statearr_45282_47393 = state_45273__$1;
(statearr_45282_47393[(2)] = null);

(statearr_45282_47393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (2))){
var state_45273__$1 = state_45273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45273__$1,(4),from);
} else {
if((state_val_45274 === (11))){
var inst_45262 = (state_45273[(2)]);
var state_45273__$1 = state_45273;
if(cljs.core.truth_(inst_45262)){
var statearr_45283_47394 = state_45273__$1;
(statearr_45283_47394[(1)] = (12));

} else {
var statearr_45284_47395 = state_45273__$1;
(statearr_45284_47395[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (9))){
var state_45273__$1 = state_45273;
var statearr_45285_47396 = state_45273__$1;
(statearr_45285_47396[(2)] = null);

(statearr_45285_47396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (5))){
var state_45273__$1 = state_45273;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45286_47397 = state_45273__$1;
(statearr_45286_47397[(1)] = (8));

} else {
var statearr_45287_47398 = state_45273__$1;
(statearr_45287_47398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (14))){
var inst_45267 = (state_45273[(2)]);
var state_45273__$1 = state_45273;
var statearr_45288_47399 = state_45273__$1;
(statearr_45288_47399[(2)] = inst_45267);

(statearr_45288_47399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (10))){
var inst_45259 = (state_45273[(2)]);
var state_45273__$1 = state_45273;
var statearr_45289_47400 = state_45273__$1;
(statearr_45289_47400[(2)] = inst_45259);

(statearr_45289_47400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (8))){
var inst_45256 = cljs.core.async.close_BANG_(to);
var state_45273__$1 = state_45273;
var statearr_45290_47401 = state_45273__$1;
(statearr_45290_47401[(2)] = inst_45256);

(statearr_45290_47401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44889__auto__ = null;
var cljs$core$async$state_machine__44889__auto____0 = (function (){
var statearr_45291 = [null,null,null,null,null,null,null,null];
(statearr_45291[(0)] = cljs$core$async$state_machine__44889__auto__);

(statearr_45291[(1)] = (1));

return statearr_45291;
});
var cljs$core$async$state_machine__44889__auto____1 = (function (state_45273){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_45273);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e45292){var ex__44892__auto__ = e45292;
var statearr_45293_47402 = state_45273;
(statearr_45293_47402[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_45273[(4)]))){
var statearr_45294_47404 = state_45273;
(statearr_45294_47404[(1)] = cljs.core.first((state_45273[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47406 = state_45273;
state_45273 = G__47406;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$state_machine__44889__auto__ = function(state_45273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44889__auto____1.call(this,state_45273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44889__auto____0;
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44889__auto____1;
return cljs$core$async$state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_45295 = f__45084__auto__();
(statearr_45295[(6)] = c__45083__auto___47382);

return statearr_45295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__45297){
var vec__45298 = p__45297;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45298,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45298,(1),null);
var job = vec__45298;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45083__auto___47407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_45305){
var state_val_45306 = (state_45305[(1)]);
if((state_val_45306 === (1))){
var state_45305__$1 = state_45305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45305__$1,(2),res,v);
} else {
if((state_val_45306 === (2))){
var inst_45302 = (state_45305[(2)]);
var inst_45303 = cljs.core.async.close_BANG_(res);
var state_45305__$1 = (function (){var statearr_45307 = state_45305;
(statearr_45307[(7)] = inst_45302);

return statearr_45307;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45305__$1,inst_45303);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____0 = (function (){
var statearr_45308 = [null,null,null,null,null,null,null,null];
(statearr_45308[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__);

(statearr_45308[(1)] = (1));

return statearr_45308;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____1 = (function (state_45305){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_45305);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e45309){var ex__44892__auto__ = e45309;
var statearr_45310_47409 = state_45305;
(statearr_45310_47409[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_45305[(4)]))){
var statearr_45311_47410 = state_45305;
(statearr_45311_47410[(1)] = cljs.core.first((state_45305[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47411 = state_45305;
state_45305 = G__47411;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__ = function(state_45305){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____1.call(this,state_45305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_45312 = f__45084__auto__();
(statearr_45312[(6)] = c__45083__auto___47407);

return statearr_45312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__45313){
var vec__45314 = p__45313;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45314,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45314,(1),null);
var job = vec__45314;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___47412 = n;
var __47413 = (0);
while(true){
if((__47413 < n__5636__auto___47412)){
var G__45317_47414 = type;
var G__45317_47415__$1 = (((G__45317_47414 instanceof cljs.core.Keyword))?G__45317_47414.fqn:null);
switch (G__45317_47415__$1) {
case "compute":
var c__45083__auto___47417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47413,c__45083__auto___47417,G__45317_47414,G__45317_47415__$1,n__5636__auto___47412,jobs,results,process__$1,async){
return (function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = ((function (__47413,c__45083__auto___47417,G__45317_47414,G__45317_47415__$1,n__5636__auto___47412,jobs,results,process__$1,async){
return (function (state_45356){
var state_val_45357 = (state_45356[(1)]);
if((state_val_45357 === (1))){
var state_45356__$1 = state_45356;
var statearr_45361_47418 = state_45356__$1;
(statearr_45361_47418[(2)] = null);

(statearr_45361_47418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45357 === (2))){
var state_45356__$1 = state_45356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45356__$1,(4),jobs);
} else {
if((state_val_45357 === (3))){
var inst_45354 = (state_45356[(2)]);
var state_45356__$1 = state_45356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45356__$1,inst_45354);
} else {
if((state_val_45357 === (4))){
var inst_45345 = (state_45356[(2)]);
var inst_45346 = process__$1(inst_45345);
var state_45356__$1 = state_45356;
if(cljs.core.truth_(inst_45346)){
var statearr_45363_47423 = state_45356__$1;
(statearr_45363_47423[(1)] = (5));

} else {
var statearr_45364_47424 = state_45356__$1;
(statearr_45364_47424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45357 === (5))){
var state_45356__$1 = state_45356;
var statearr_45365_47425 = state_45356__$1;
(statearr_45365_47425[(2)] = null);

(statearr_45365_47425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45357 === (6))){
var state_45356__$1 = state_45356;
var statearr_45367_47426 = state_45356__$1;
(statearr_45367_47426[(2)] = null);

(statearr_45367_47426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45357 === (7))){
var inst_45352 = (state_45356[(2)]);
var state_45356__$1 = state_45356;
var statearr_45368_47427 = state_45356__$1;
(statearr_45368_47427[(2)] = inst_45352);

(statearr_45368_47427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47413,c__45083__auto___47417,G__45317_47414,G__45317_47415__$1,n__5636__auto___47412,jobs,results,process__$1,async))
;
return ((function (__47413,switch__44888__auto__,c__45083__auto___47417,G__45317_47414,G__45317_47415__$1,n__5636__auto___47412,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____0 = (function (){
var statearr_45373 = [null,null,null,null,null,null,null];
(statearr_45373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__);

(statearr_45373[(1)] = (1));

return statearr_45373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____1 = (function (state_45356){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_45356);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e45380){var ex__44892__auto__ = e45380;
var statearr_45383_47428 = state_45356;
(statearr_45383_47428[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_45356[(4)]))){
var statearr_45389_47429 = state_45356;
(statearr_45389_47429[(1)] = cljs.core.first((state_45356[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47430 = state_45356;
state_45356 = G__47430;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__ = function(state_45356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____1.call(this,state_45356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__;
})()
;})(__47413,switch__44888__auto__,c__45083__auto___47417,G__45317_47414,G__45317_47415__$1,n__5636__auto___47412,jobs,results,process__$1,async))
})();
var state__45085__auto__ = (function (){var statearr_45394 = f__45084__auto__();
(statearr_45394[(6)] = c__45083__auto___47417);

return statearr_45394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
});})(__47413,c__45083__auto___47417,G__45317_47414,G__45317_47415__$1,n__5636__auto___47412,jobs,results,process__$1,async))
);


break;
case "async":
var c__45083__auto___47431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47413,c__45083__auto___47431,G__45317_47414,G__45317_47415__$1,n__5636__auto___47412,jobs,results,process__$1,async){
return (function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = ((function (__47413,c__45083__auto___47431,G__45317_47414,G__45317_47415__$1,n__5636__auto___47412,jobs,results,process__$1,async){
return (function (state_45411){
var state_val_45412 = (state_45411[(1)]);
if((state_val_45412 === (1))){
var state_45411__$1 = state_45411;
var statearr_45432_47432 = state_45411__$1;
(statearr_45432_47432[(2)] = null);

(statearr_45432_47432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45412 === (2))){
var state_45411__$1 = state_45411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45411__$1,(4),jobs);
} else {
if((state_val_45412 === (3))){
var inst_45406 = (state_45411[(2)]);
var state_45411__$1 = state_45411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45411__$1,inst_45406);
} else {
if((state_val_45412 === (4))){
var inst_45397 = (state_45411[(2)]);
var inst_45398 = async(inst_45397);
var state_45411__$1 = state_45411;
if(cljs.core.truth_(inst_45398)){
var statearr_45439_47433 = state_45411__$1;
(statearr_45439_47433[(1)] = (5));

} else {
var statearr_45445_47434 = state_45411__$1;
(statearr_45445_47434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45412 === (5))){
var state_45411__$1 = state_45411;
var statearr_45452_47435 = state_45411__$1;
(statearr_45452_47435[(2)] = null);

(statearr_45452_47435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45412 === (6))){
var state_45411__$1 = state_45411;
var statearr_45458_47436 = state_45411__$1;
(statearr_45458_47436[(2)] = null);

(statearr_45458_47436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45412 === (7))){
var inst_45403 = (state_45411[(2)]);
var state_45411__$1 = state_45411;
var statearr_45462_47438 = state_45411__$1;
(statearr_45462_47438[(2)] = inst_45403);

(statearr_45462_47438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47413,c__45083__auto___47431,G__45317_47414,G__45317_47415__$1,n__5636__auto___47412,jobs,results,process__$1,async))
;
return ((function (__47413,switch__44888__auto__,c__45083__auto___47431,G__45317_47414,G__45317_47415__$1,n__5636__auto___47412,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____0 = (function (){
var statearr_45463 = [null,null,null,null,null,null,null];
(statearr_45463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__);

(statearr_45463[(1)] = (1));

return statearr_45463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____1 = (function (state_45411){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_45411);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e45464){var ex__44892__auto__ = e45464;
var statearr_45465_47446 = state_45411;
(statearr_45465_47446[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_45411[(4)]))){
var statearr_45468_47449 = state_45411;
(statearr_45468_47449[(1)] = cljs.core.first((state_45411[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47450 = state_45411;
state_45411 = G__47450;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__ = function(state_45411){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____1.call(this,state_45411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__;
})()
;})(__47413,switch__44888__auto__,c__45083__auto___47431,G__45317_47414,G__45317_47415__$1,n__5636__auto___47412,jobs,results,process__$1,async))
})();
var state__45085__auto__ = (function (){var statearr_45477 = f__45084__auto__();
(statearr_45477[(6)] = c__45083__auto___47431);

return statearr_45477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
});})(__47413,c__45083__auto___47431,G__45317_47414,G__45317_47415__$1,n__5636__auto___47412,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45317_47415__$1)].join('')));

}

var G__47454 = (__47413 + (1));
__47413 = G__47454;
continue;
} else {
}
break;
}

var c__45083__auto___47455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_45500){
var state_val_45501 = (state_45500[(1)]);
if((state_val_45501 === (7))){
var inst_45496 = (state_45500[(2)]);
var state_45500__$1 = state_45500;
var statearr_45508_47456 = state_45500__$1;
(statearr_45508_47456[(2)] = inst_45496);

(statearr_45508_47456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45501 === (1))){
var state_45500__$1 = state_45500;
var statearr_45515_47457 = state_45500__$1;
(statearr_45515_47457[(2)] = null);

(statearr_45515_47457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45501 === (4))){
var inst_45481 = (state_45500[(7)]);
var inst_45481__$1 = (state_45500[(2)]);
var inst_45482 = (inst_45481__$1 == null);
var state_45500__$1 = (function (){var statearr_45521 = state_45500;
(statearr_45521[(7)] = inst_45481__$1);

return statearr_45521;
})();
if(cljs.core.truth_(inst_45482)){
var statearr_45522_47458 = state_45500__$1;
(statearr_45522_47458[(1)] = (5));

} else {
var statearr_45523_47459 = state_45500__$1;
(statearr_45523_47459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45501 === (6))){
var inst_45486 = (state_45500[(8)]);
var inst_45481 = (state_45500[(7)]);
var inst_45486__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_45487 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45488 = [inst_45481,inst_45486__$1];
var inst_45489 = (new cljs.core.PersistentVector(null,2,(5),inst_45487,inst_45488,null));
var state_45500__$1 = (function (){var statearr_45524 = state_45500;
(statearr_45524[(8)] = inst_45486__$1);

return statearr_45524;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45500__$1,(8),jobs,inst_45489);
} else {
if((state_val_45501 === (3))){
var inst_45498 = (state_45500[(2)]);
var state_45500__$1 = state_45500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45500__$1,inst_45498);
} else {
if((state_val_45501 === (2))){
var state_45500__$1 = state_45500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45500__$1,(4),from);
} else {
if((state_val_45501 === (9))){
var inst_45493 = (state_45500[(2)]);
var state_45500__$1 = (function (){var statearr_45526 = state_45500;
(statearr_45526[(9)] = inst_45493);

return statearr_45526;
})();
var statearr_45527_47467 = state_45500__$1;
(statearr_45527_47467[(2)] = null);

(statearr_45527_47467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45501 === (5))){
var inst_45484 = cljs.core.async.close_BANG_(jobs);
var state_45500__$1 = state_45500;
var statearr_45528_47468 = state_45500__$1;
(statearr_45528_47468[(2)] = inst_45484);

(statearr_45528_47468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45501 === (8))){
var inst_45486 = (state_45500[(8)]);
var inst_45491 = (state_45500[(2)]);
var state_45500__$1 = (function (){var statearr_45529 = state_45500;
(statearr_45529[(10)] = inst_45491);

return statearr_45529;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45500__$1,(9),results,inst_45486);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____0 = (function (){
var statearr_45530 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45530[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__);

(statearr_45530[(1)] = (1));

return statearr_45530;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____1 = (function (state_45500){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_45500);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e45531){var ex__44892__auto__ = e45531;
var statearr_45532_47475 = state_45500;
(statearr_45532_47475[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_45500[(4)]))){
var statearr_45533_47476 = state_45500;
(statearr_45533_47476[(1)] = cljs.core.first((state_45500[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47477 = state_45500;
state_45500 = G__47477;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__ = function(state_45500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____1.call(this,state_45500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_45534 = f__45084__auto__();
(statearr_45534[(6)] = c__45083__auto___47455);

return statearr_45534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));


var c__45083__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_45574){
var state_val_45575 = (state_45574[(1)]);
if((state_val_45575 === (7))){
var inst_45570 = (state_45574[(2)]);
var state_45574__$1 = state_45574;
var statearr_45576_47481 = state_45574__$1;
(statearr_45576_47481[(2)] = inst_45570);

(statearr_45576_47481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45575 === (20))){
var state_45574__$1 = state_45574;
var statearr_45577_47482 = state_45574__$1;
(statearr_45577_47482[(2)] = null);

(statearr_45577_47482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45575 === (1))){
var state_45574__$1 = state_45574;
var statearr_45578_47483 = state_45574__$1;
(statearr_45578_47483[(2)] = null);

(statearr_45578_47483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45575 === (4))){
var inst_45537 = (state_45574[(7)]);
var inst_45537__$1 = (state_45574[(2)]);
var inst_45539 = (inst_45537__$1 == null);
var state_45574__$1 = (function (){var statearr_45579 = state_45574;
(statearr_45579[(7)] = inst_45537__$1);

return statearr_45579;
})();
if(cljs.core.truth_(inst_45539)){
var statearr_45580_47488 = state_45574__$1;
(statearr_45580_47488[(1)] = (5));

} else {
var statearr_45581_47489 = state_45574__$1;
(statearr_45581_47489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45575 === (15))){
var inst_45552 = (state_45574[(8)]);
var state_45574__$1 = state_45574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45574__$1,(18),to,inst_45552);
} else {
if((state_val_45575 === (21))){
var inst_45565 = (state_45574[(2)]);
var state_45574__$1 = state_45574;
var statearr_45584_47493 = state_45574__$1;
(statearr_45584_47493[(2)] = inst_45565);

(statearr_45584_47493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45575 === (13))){
var inst_45567 = (state_45574[(2)]);
var state_45574__$1 = (function (){var statearr_45585 = state_45574;
(statearr_45585[(9)] = inst_45567);

return statearr_45585;
})();
var statearr_45586_47494 = state_45574__$1;
(statearr_45586_47494[(2)] = null);

(statearr_45586_47494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45575 === (6))){
var inst_45537 = (state_45574[(7)]);
var state_45574__$1 = state_45574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45574__$1,(11),inst_45537);
} else {
if((state_val_45575 === (17))){
var inst_45560 = (state_45574[(2)]);
var state_45574__$1 = state_45574;
if(cljs.core.truth_(inst_45560)){
var statearr_45587_47495 = state_45574__$1;
(statearr_45587_47495[(1)] = (19));

} else {
var statearr_45588_47496 = state_45574__$1;
(statearr_45588_47496[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45575 === (3))){
var inst_45572 = (state_45574[(2)]);
var state_45574__$1 = state_45574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45574__$1,inst_45572);
} else {
if((state_val_45575 === (12))){
var inst_45549 = (state_45574[(10)]);
var state_45574__$1 = state_45574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45574__$1,(14),inst_45549);
} else {
if((state_val_45575 === (2))){
var state_45574__$1 = state_45574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45574__$1,(4),results);
} else {
if((state_val_45575 === (19))){
var state_45574__$1 = state_45574;
var statearr_45589_47500 = state_45574__$1;
(statearr_45589_47500[(2)] = null);

(statearr_45589_47500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45575 === (11))){
var inst_45549 = (state_45574[(2)]);
var state_45574__$1 = (function (){var statearr_45590 = state_45574;
(statearr_45590[(10)] = inst_45549);

return statearr_45590;
})();
var statearr_45591_47502 = state_45574__$1;
(statearr_45591_47502[(2)] = null);

(statearr_45591_47502[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45575 === (9))){
var state_45574__$1 = state_45574;
var statearr_45592_47506 = state_45574__$1;
(statearr_45592_47506[(2)] = null);

(statearr_45592_47506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45575 === (5))){
var state_45574__$1 = state_45574;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45593_47508 = state_45574__$1;
(statearr_45593_47508[(1)] = (8));

} else {
var statearr_45594_47509 = state_45574__$1;
(statearr_45594_47509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45575 === (14))){
var inst_45554 = (state_45574[(11)]);
var inst_45552 = (state_45574[(8)]);
var inst_45552__$1 = (state_45574[(2)]);
var inst_45553 = (inst_45552__$1 == null);
var inst_45554__$1 = cljs.core.not(inst_45553);
var state_45574__$1 = (function (){var statearr_45595 = state_45574;
(statearr_45595[(11)] = inst_45554__$1);

(statearr_45595[(8)] = inst_45552__$1);

return statearr_45595;
})();
if(inst_45554__$1){
var statearr_45598_47510 = state_45574__$1;
(statearr_45598_47510[(1)] = (15));

} else {
var statearr_45600_47514 = state_45574__$1;
(statearr_45600_47514[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45575 === (16))){
var inst_45554 = (state_45574[(11)]);
var state_45574__$1 = state_45574;
var statearr_45602_47515 = state_45574__$1;
(statearr_45602_47515[(2)] = inst_45554);

(statearr_45602_47515[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45575 === (10))){
var inst_45545 = (state_45574[(2)]);
var state_45574__$1 = state_45574;
var statearr_45603_47518 = state_45574__$1;
(statearr_45603_47518[(2)] = inst_45545);

(statearr_45603_47518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45575 === (18))){
var inst_45557 = (state_45574[(2)]);
var state_45574__$1 = state_45574;
var statearr_45604_47519 = state_45574__$1;
(statearr_45604_47519[(2)] = inst_45557);

(statearr_45604_47519[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45575 === (8))){
var inst_45542 = cljs.core.async.close_BANG_(to);
var state_45574__$1 = state_45574;
var statearr_45605_47520 = state_45574__$1;
(statearr_45605_47520[(2)] = inst_45542);

(statearr_45605_47520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____0 = (function (){
var statearr_45608 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45608[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__);

(statearr_45608[(1)] = (1));

return statearr_45608;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____1 = (function (state_45574){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_45574);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e45609){var ex__44892__auto__ = e45609;
var statearr_45610_47524 = state_45574;
(statearr_45610_47524[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_45574[(4)]))){
var statearr_45611_47525 = state_45574;
(statearr_45611_47525[(1)] = cljs.core.first((state_45574[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47526 = state_45574;
state_45574 = G__47526;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__ = function(state_45574){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____1.call(this,state_45574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_45617 = f__45084__auto__();
(statearr_45617[(6)] = c__45083__auto__);

return statearr_45617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));

return c__45083__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__45619 = arguments.length;
switch (G__45619) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__45621 = arguments.length;
switch (G__45621) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__45623 = arguments.length;
switch (G__45623) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__45083__auto___47532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_45649){
var state_val_45650 = (state_45649[(1)]);
if((state_val_45650 === (7))){
var inst_45645 = (state_45649[(2)]);
var state_45649__$1 = state_45649;
var statearr_45651_47533 = state_45649__$1;
(statearr_45651_47533[(2)] = inst_45645);

(statearr_45651_47533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45650 === (1))){
var state_45649__$1 = state_45649;
var statearr_45652_47534 = state_45649__$1;
(statearr_45652_47534[(2)] = null);

(statearr_45652_47534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45650 === (4))){
var inst_45626 = (state_45649[(7)]);
var inst_45626__$1 = (state_45649[(2)]);
var inst_45627 = (inst_45626__$1 == null);
var state_45649__$1 = (function (){var statearr_45653 = state_45649;
(statearr_45653[(7)] = inst_45626__$1);

return statearr_45653;
})();
if(cljs.core.truth_(inst_45627)){
var statearr_45654_47535 = state_45649__$1;
(statearr_45654_47535[(1)] = (5));

} else {
var statearr_45655_47536 = state_45649__$1;
(statearr_45655_47536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45650 === (13))){
var state_45649__$1 = state_45649;
var statearr_45656_47537 = state_45649__$1;
(statearr_45656_47537[(2)] = null);

(statearr_45656_47537[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45650 === (6))){
var inst_45626 = (state_45649[(7)]);
var inst_45632 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45626) : p.call(null,inst_45626));
var state_45649__$1 = state_45649;
if(cljs.core.truth_(inst_45632)){
var statearr_45657_47538 = state_45649__$1;
(statearr_45657_47538[(1)] = (9));

} else {
var statearr_45658_47539 = state_45649__$1;
(statearr_45658_47539[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45650 === (3))){
var inst_45647 = (state_45649[(2)]);
var state_45649__$1 = state_45649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45649__$1,inst_45647);
} else {
if((state_val_45650 === (12))){
var state_45649__$1 = state_45649;
var statearr_45659_47540 = state_45649__$1;
(statearr_45659_47540[(2)] = null);

(statearr_45659_47540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45650 === (2))){
var state_45649__$1 = state_45649;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45649__$1,(4),ch);
} else {
if((state_val_45650 === (11))){
var inst_45626 = (state_45649[(7)]);
var inst_45636 = (state_45649[(2)]);
var state_45649__$1 = state_45649;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45649__$1,(8),inst_45636,inst_45626);
} else {
if((state_val_45650 === (9))){
var state_45649__$1 = state_45649;
var statearr_45662_47541 = state_45649__$1;
(statearr_45662_47541[(2)] = tc);

(statearr_45662_47541[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45650 === (5))){
var inst_45629 = cljs.core.async.close_BANG_(tc);
var inst_45630 = cljs.core.async.close_BANG_(fc);
var state_45649__$1 = (function (){var statearr_45663 = state_45649;
(statearr_45663[(8)] = inst_45629);

return statearr_45663;
})();
var statearr_45664_47547 = state_45649__$1;
(statearr_45664_47547[(2)] = inst_45630);

(statearr_45664_47547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45650 === (14))){
var inst_45643 = (state_45649[(2)]);
var state_45649__$1 = state_45649;
var statearr_45666_47551 = state_45649__$1;
(statearr_45666_47551[(2)] = inst_45643);

(statearr_45666_47551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45650 === (10))){
var state_45649__$1 = state_45649;
var statearr_45668_47552 = state_45649__$1;
(statearr_45668_47552[(2)] = fc);

(statearr_45668_47552[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45650 === (8))){
var inst_45638 = (state_45649[(2)]);
var state_45649__$1 = state_45649;
if(cljs.core.truth_(inst_45638)){
var statearr_45669_47554 = state_45649__$1;
(statearr_45669_47554[(1)] = (12));

} else {
var statearr_45670_47555 = state_45649__$1;
(statearr_45670_47555[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44889__auto__ = null;
var cljs$core$async$state_machine__44889__auto____0 = (function (){
var statearr_45671 = [null,null,null,null,null,null,null,null,null];
(statearr_45671[(0)] = cljs$core$async$state_machine__44889__auto__);

(statearr_45671[(1)] = (1));

return statearr_45671;
});
var cljs$core$async$state_machine__44889__auto____1 = (function (state_45649){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_45649);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e45672){var ex__44892__auto__ = e45672;
var statearr_45673_47557 = state_45649;
(statearr_45673_47557[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_45649[(4)]))){
var statearr_45674_47559 = state_45649;
(statearr_45674_47559[(1)] = cljs.core.first((state_45649[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47560 = state_45649;
state_45649 = G__47560;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$state_machine__44889__auto__ = function(state_45649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44889__auto____1.call(this,state_45649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44889__auto____0;
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44889__auto____1;
return cljs$core$async$state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_45675 = f__45084__auto__();
(statearr_45675[(6)] = c__45083__auto___47532);

return statearr_45675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45083__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_45708){
var state_val_45709 = (state_45708[(1)]);
if((state_val_45709 === (7))){
var inst_45703 = (state_45708[(2)]);
var state_45708__$1 = state_45708;
var statearr_45710_47561 = state_45708__$1;
(statearr_45710_47561[(2)] = inst_45703);

(statearr_45710_47561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45709 === (1))){
var inst_45680 = init;
var inst_45681 = inst_45680;
var state_45708__$1 = (function (){var statearr_45711 = state_45708;
(statearr_45711[(7)] = inst_45681);

return statearr_45711;
})();
var statearr_45712_47565 = state_45708__$1;
(statearr_45712_47565[(2)] = null);

(statearr_45712_47565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45709 === (4))){
var inst_45684 = (state_45708[(8)]);
var inst_45684__$1 = (state_45708[(2)]);
var inst_45685 = (inst_45684__$1 == null);
var state_45708__$1 = (function (){var statearr_45713 = state_45708;
(statearr_45713[(8)] = inst_45684__$1);

return statearr_45713;
})();
if(cljs.core.truth_(inst_45685)){
var statearr_45714_47573 = state_45708__$1;
(statearr_45714_47573[(1)] = (5));

} else {
var statearr_45715_47574 = state_45708__$1;
(statearr_45715_47574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45709 === (6))){
var inst_45684 = (state_45708[(8)]);
var inst_45681 = (state_45708[(7)]);
var inst_45688 = (state_45708[(9)]);
var inst_45688__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_45681,inst_45684) : f.call(null,inst_45681,inst_45684));
var inst_45689 = cljs.core.reduced_QMARK_(inst_45688__$1);
var state_45708__$1 = (function (){var statearr_45716 = state_45708;
(statearr_45716[(9)] = inst_45688__$1);

return statearr_45716;
})();
if(inst_45689){
var statearr_45718_47579 = state_45708__$1;
(statearr_45718_47579[(1)] = (8));

} else {
var statearr_45719_47583 = state_45708__$1;
(statearr_45719_47583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45709 === (3))){
var inst_45705 = (state_45708[(2)]);
var state_45708__$1 = state_45708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45708__$1,inst_45705);
} else {
if((state_val_45709 === (2))){
var state_45708__$1 = state_45708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45708__$1,(4),ch);
} else {
if((state_val_45709 === (9))){
var inst_45688 = (state_45708[(9)]);
var inst_45681 = inst_45688;
var state_45708__$1 = (function (){var statearr_45723 = state_45708;
(statearr_45723[(7)] = inst_45681);

return statearr_45723;
})();
var statearr_45724_47584 = state_45708__$1;
(statearr_45724_47584[(2)] = null);

(statearr_45724_47584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45709 === (5))){
var inst_45681 = (state_45708[(7)]);
var state_45708__$1 = state_45708;
var statearr_45725_47587 = state_45708__$1;
(statearr_45725_47587[(2)] = inst_45681);

(statearr_45725_47587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45709 === (10))){
var inst_45701 = (state_45708[(2)]);
var state_45708__$1 = state_45708;
var statearr_45726_47594 = state_45708__$1;
(statearr_45726_47594[(2)] = inst_45701);

(statearr_45726_47594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45709 === (8))){
var inst_45688 = (state_45708[(9)]);
var inst_45697 = cljs.core.deref(inst_45688);
var state_45708__$1 = state_45708;
var statearr_45727_47598 = state_45708__$1;
(statearr_45727_47598[(2)] = inst_45697);

(statearr_45727_47598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__44889__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44889__auto____0 = (function (){
var statearr_45728 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45728[(0)] = cljs$core$async$reduce_$_state_machine__44889__auto__);

(statearr_45728[(1)] = (1));

return statearr_45728;
});
var cljs$core$async$reduce_$_state_machine__44889__auto____1 = (function (state_45708){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_45708);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e45729){var ex__44892__auto__ = e45729;
var statearr_45730_47605 = state_45708;
(statearr_45730_47605[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_45708[(4)]))){
var statearr_45732_47610 = state_45708;
(statearr_45732_47610[(1)] = cljs.core.first((state_45708[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47611 = state_45708;
state_45708 = G__47611;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44889__auto__ = function(state_45708){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44889__auto____1.call(this,state_45708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44889__auto____0;
cljs$core$async$reduce_$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44889__auto____1;
return cljs$core$async$reduce_$_state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_45733 = f__45084__auto__();
(statearr_45733[(6)] = c__45083__auto__);

return statearr_45733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));

return c__45083__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45083__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_45739){
var state_val_45740 = (state_45739[(1)]);
if((state_val_45740 === (1))){
var inst_45734 = cljs.core.async.reduce(f__$1,init,ch);
var state_45739__$1 = state_45739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45739__$1,(2),inst_45734);
} else {
if((state_val_45740 === (2))){
var inst_45736 = (state_45739[(2)]);
var inst_45737 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_45736) : f__$1.call(null,inst_45736));
var state_45739__$1 = state_45739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45739__$1,inst_45737);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__44889__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44889__auto____0 = (function (){
var statearr_45742 = [null,null,null,null,null,null,null];
(statearr_45742[(0)] = cljs$core$async$transduce_$_state_machine__44889__auto__);

(statearr_45742[(1)] = (1));

return statearr_45742;
});
var cljs$core$async$transduce_$_state_machine__44889__auto____1 = (function (state_45739){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_45739);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e45743){var ex__44892__auto__ = e45743;
var statearr_45744_47635 = state_45739;
(statearr_45744_47635[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_45739[(4)]))){
var statearr_45745_47636 = state_45739;
(statearr_45745_47636[(1)] = cljs.core.first((state_45739[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47637 = state_45739;
state_45739 = G__47637;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44889__auto__ = function(state_45739){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44889__auto____1.call(this,state_45739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44889__auto____0;
cljs$core$async$transduce_$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44889__auto____1;
return cljs$core$async$transduce_$_state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_45746 = f__45084__auto__();
(statearr_45746[(6)] = c__45083__auto__);

return statearr_45746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));

return c__45083__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__45748 = arguments.length;
switch (G__45748) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45083__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_45776){
var state_val_45777 = (state_45776[(1)]);
if((state_val_45777 === (7))){
var inst_45758 = (state_45776[(2)]);
var state_45776__$1 = state_45776;
var statearr_45790_47641 = state_45776__$1;
(statearr_45790_47641[(2)] = inst_45758);

(statearr_45790_47641[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (1))){
var inst_45752 = cljs.core.seq(coll);
var inst_45753 = inst_45752;
var state_45776__$1 = (function (){var statearr_45799 = state_45776;
(statearr_45799[(7)] = inst_45753);

return statearr_45799;
})();
var statearr_45800_47642 = state_45776__$1;
(statearr_45800_47642[(2)] = null);

(statearr_45800_47642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (4))){
var inst_45753 = (state_45776[(7)]);
var inst_45756 = cljs.core.first(inst_45753);
var state_45776__$1 = state_45776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45776__$1,(7),ch,inst_45756);
} else {
if((state_val_45777 === (13))){
var inst_45770 = (state_45776[(2)]);
var state_45776__$1 = state_45776;
var statearr_45801_47649 = state_45776__$1;
(statearr_45801_47649[(2)] = inst_45770);

(statearr_45801_47649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (6))){
var inst_45761 = (state_45776[(2)]);
var state_45776__$1 = state_45776;
if(cljs.core.truth_(inst_45761)){
var statearr_45802_47650 = state_45776__$1;
(statearr_45802_47650[(1)] = (8));

} else {
var statearr_45803_47651 = state_45776__$1;
(statearr_45803_47651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (3))){
var inst_45774 = (state_45776[(2)]);
var state_45776__$1 = state_45776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45776__$1,inst_45774);
} else {
if((state_val_45777 === (12))){
var state_45776__$1 = state_45776;
var statearr_45804_47652 = state_45776__$1;
(statearr_45804_47652[(2)] = null);

(statearr_45804_47652[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (2))){
var inst_45753 = (state_45776[(7)]);
var state_45776__$1 = state_45776;
if(cljs.core.truth_(inst_45753)){
var statearr_45805_47653 = state_45776__$1;
(statearr_45805_47653[(1)] = (4));

} else {
var statearr_45806_47654 = state_45776__$1;
(statearr_45806_47654[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (11))){
var inst_45767 = cljs.core.async.close_BANG_(ch);
var state_45776__$1 = state_45776;
var statearr_45807_47655 = state_45776__$1;
(statearr_45807_47655[(2)] = inst_45767);

(statearr_45807_47655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (9))){
var state_45776__$1 = state_45776;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45808_47656 = state_45776__$1;
(statearr_45808_47656[(1)] = (11));

} else {
var statearr_45809_47657 = state_45776__$1;
(statearr_45809_47657[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (5))){
var inst_45753 = (state_45776[(7)]);
var state_45776__$1 = state_45776;
var statearr_45810_47658 = state_45776__$1;
(statearr_45810_47658[(2)] = inst_45753);

(statearr_45810_47658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (10))){
var inst_45772 = (state_45776[(2)]);
var state_45776__$1 = state_45776;
var statearr_45811_47659 = state_45776__$1;
(statearr_45811_47659[(2)] = inst_45772);

(statearr_45811_47659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (8))){
var inst_45753 = (state_45776[(7)]);
var inst_45763 = cljs.core.next(inst_45753);
var inst_45753__$1 = inst_45763;
var state_45776__$1 = (function (){var statearr_45812 = state_45776;
(statearr_45812[(7)] = inst_45753__$1);

return statearr_45812;
})();
var statearr_45813_47660 = state_45776__$1;
(statearr_45813_47660[(2)] = null);

(statearr_45813_47660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44889__auto__ = null;
var cljs$core$async$state_machine__44889__auto____0 = (function (){
var statearr_45814 = [null,null,null,null,null,null,null,null];
(statearr_45814[(0)] = cljs$core$async$state_machine__44889__auto__);

(statearr_45814[(1)] = (1));

return statearr_45814;
});
var cljs$core$async$state_machine__44889__auto____1 = (function (state_45776){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_45776);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e45815){var ex__44892__auto__ = e45815;
var statearr_45816_47667 = state_45776;
(statearr_45816_47667[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_45776[(4)]))){
var statearr_45817_47668 = state_45776;
(statearr_45817_47668[(1)] = cljs.core.first((state_45776[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47669 = state_45776;
state_45776 = G__47669;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$state_machine__44889__auto__ = function(state_45776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44889__auto____1.call(this,state_45776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44889__auto____0;
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44889__auto____1;
return cljs$core$async$state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_45819 = f__45084__auto__();
(statearr_45819[(6)] = c__45083__auto__);

return statearr_45819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));

return c__45083__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45821 = arguments.length;
switch (G__45821) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47671 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47671(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47672 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47672(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47679 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47679(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47680 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47680(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45845 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45845 = (function (ch,cs,meta45846){
this.ch = ch;
this.cs = cs;
this.meta45846 = meta45846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45847,meta45846__$1){
var self__ = this;
var _45847__$1 = this;
return (new cljs.core.async.t_cljs$core$async45845(self__.ch,self__.cs,meta45846__$1));
}));

(cljs.core.async.t_cljs$core$async45845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45847){
var self__ = this;
var _45847__$1 = this;
return self__.meta45846;
}));

(cljs.core.async.t_cljs$core$async45845.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45845.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45845.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45845.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45845.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45845.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45846","meta45846",771453462,null)], null);
}));

(cljs.core.async.t_cljs$core$async45845.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45845");

(cljs.core.async.t_cljs$core$async45845.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45845");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45845.
 */
cljs.core.async.__GT_t_cljs$core$async45845 = (function cljs$core$async$mult_$___GT_t_cljs$core$async45845(ch__$1,cs__$1,meta45846){
return (new cljs.core.async.t_cljs$core$async45845(ch__$1,cs__$1,meta45846));
});

}

return (new cljs.core.async.t_cljs$core$async45845(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__45083__auto___47694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_45981){
var state_val_45982 = (state_45981[(1)]);
if((state_val_45982 === (7))){
var inst_45977 = (state_45981[(2)]);
var state_45981__$1 = state_45981;
var statearr_45983_47695 = state_45981__$1;
(statearr_45983_47695[(2)] = inst_45977);

(statearr_45983_47695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (20))){
var inst_45881 = (state_45981[(7)]);
var inst_45894 = cljs.core.first(inst_45881);
var inst_45895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45894,(0),null);
var inst_45896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45894,(1),null);
var state_45981__$1 = (function (){var statearr_45984 = state_45981;
(statearr_45984[(8)] = inst_45895);

return statearr_45984;
})();
if(cljs.core.truth_(inst_45896)){
var statearr_45985_47697 = state_45981__$1;
(statearr_45985_47697[(1)] = (22));

} else {
var statearr_45986_47698 = state_45981__$1;
(statearr_45986_47698[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (27))){
var inst_45931 = (state_45981[(9)]);
var inst_45850 = (state_45981[(10)]);
var inst_45926 = (state_45981[(11)]);
var inst_45924 = (state_45981[(12)]);
var inst_45931__$1 = cljs.core._nth(inst_45924,inst_45926);
var inst_45932 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45931__$1,inst_45850,done);
var state_45981__$1 = (function (){var statearr_45987 = state_45981;
(statearr_45987[(9)] = inst_45931__$1);

return statearr_45987;
})();
if(cljs.core.truth_(inst_45932)){
var statearr_45988_47700 = state_45981__$1;
(statearr_45988_47700[(1)] = (30));

} else {
var statearr_45990_47701 = state_45981__$1;
(statearr_45990_47701[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (1))){
var state_45981__$1 = state_45981;
var statearr_45991_47702 = state_45981__$1;
(statearr_45991_47702[(2)] = null);

(statearr_45991_47702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (24))){
var inst_45881 = (state_45981[(7)]);
var inst_45901 = (state_45981[(2)]);
var inst_45902 = cljs.core.next(inst_45881);
var inst_45859 = inst_45902;
var inst_45860 = null;
var inst_45861 = (0);
var inst_45862 = (0);
var state_45981__$1 = (function (){var statearr_45992 = state_45981;
(statearr_45992[(13)] = inst_45860);

(statearr_45992[(14)] = inst_45861);

(statearr_45992[(15)] = inst_45859);

(statearr_45992[(16)] = inst_45901);

(statearr_45992[(17)] = inst_45862);

return statearr_45992;
})();
var statearr_45993_47704 = state_45981__$1;
(statearr_45993_47704[(2)] = null);

(statearr_45993_47704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (39))){
var state_45981__$1 = state_45981;
var statearr_45997_47709 = state_45981__$1;
(statearr_45997_47709[(2)] = null);

(statearr_45997_47709[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (4))){
var inst_45850 = (state_45981[(10)]);
var inst_45850__$1 = (state_45981[(2)]);
var inst_45851 = (inst_45850__$1 == null);
var state_45981__$1 = (function (){var statearr_45999 = state_45981;
(statearr_45999[(10)] = inst_45850__$1);

return statearr_45999;
})();
if(cljs.core.truth_(inst_45851)){
var statearr_46000_47710 = state_45981__$1;
(statearr_46000_47710[(1)] = (5));

} else {
var statearr_46001_47711 = state_45981__$1;
(statearr_46001_47711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (15))){
var inst_45860 = (state_45981[(13)]);
var inst_45861 = (state_45981[(14)]);
var inst_45859 = (state_45981[(15)]);
var inst_45862 = (state_45981[(17)]);
var inst_45877 = (state_45981[(2)]);
var inst_45878 = (inst_45862 + (1));
var tmp45994 = inst_45860;
var tmp45995 = inst_45861;
var tmp45996 = inst_45859;
var inst_45859__$1 = tmp45996;
var inst_45860__$1 = tmp45994;
var inst_45861__$1 = tmp45995;
var inst_45862__$1 = inst_45878;
var state_45981__$1 = (function (){var statearr_46002 = state_45981;
(statearr_46002[(18)] = inst_45877);

(statearr_46002[(13)] = inst_45860__$1);

(statearr_46002[(14)] = inst_45861__$1);

(statearr_46002[(15)] = inst_45859__$1);

(statearr_46002[(17)] = inst_45862__$1);

return statearr_46002;
})();
var statearr_46003_47712 = state_45981__$1;
(statearr_46003_47712[(2)] = null);

(statearr_46003_47712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (21))){
var inst_45905 = (state_45981[(2)]);
var state_45981__$1 = state_45981;
var statearr_46007_47713 = state_45981__$1;
(statearr_46007_47713[(2)] = inst_45905);

(statearr_46007_47713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (31))){
var inst_45931 = (state_45981[(9)]);
var inst_45935 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45931);
var state_45981__$1 = state_45981;
var statearr_46008_47714 = state_45981__$1;
(statearr_46008_47714[(2)] = inst_45935);

(statearr_46008_47714[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (32))){
var inst_45925 = (state_45981[(19)]);
var inst_45926 = (state_45981[(11)]);
var inst_45924 = (state_45981[(12)]);
var inst_45923 = (state_45981[(20)]);
var inst_45937 = (state_45981[(2)]);
var inst_45938 = (inst_45926 + (1));
var tmp46004 = inst_45925;
var tmp46005 = inst_45924;
var tmp46006 = inst_45923;
var inst_45923__$1 = tmp46006;
var inst_45924__$1 = tmp46005;
var inst_45925__$1 = tmp46004;
var inst_45926__$1 = inst_45938;
var state_45981__$1 = (function (){var statearr_46009 = state_45981;
(statearr_46009[(19)] = inst_45925__$1);

(statearr_46009[(11)] = inst_45926__$1);

(statearr_46009[(12)] = inst_45924__$1);

(statearr_46009[(21)] = inst_45937);

(statearr_46009[(20)] = inst_45923__$1);

return statearr_46009;
})();
var statearr_46011_47715 = state_45981__$1;
(statearr_46011_47715[(2)] = null);

(statearr_46011_47715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (40))){
var inst_45950 = (state_45981[(22)]);
var inst_45954 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45950);
var state_45981__$1 = state_45981;
var statearr_46012_47716 = state_45981__$1;
(statearr_46012_47716[(2)] = inst_45954);

(statearr_46012_47716[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (33))){
var inst_45941 = (state_45981[(23)]);
var inst_45943 = cljs.core.chunked_seq_QMARK_(inst_45941);
var state_45981__$1 = state_45981;
if(inst_45943){
var statearr_46013_47718 = state_45981__$1;
(statearr_46013_47718[(1)] = (36));

} else {
var statearr_46014_47720 = state_45981__$1;
(statearr_46014_47720[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (13))){
var inst_45871 = (state_45981[(24)]);
var inst_45874 = cljs.core.async.close_BANG_(inst_45871);
var state_45981__$1 = state_45981;
var statearr_46015_47721 = state_45981__$1;
(statearr_46015_47721[(2)] = inst_45874);

(statearr_46015_47721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (22))){
var inst_45895 = (state_45981[(8)]);
var inst_45898 = cljs.core.async.close_BANG_(inst_45895);
var state_45981__$1 = state_45981;
var statearr_46016_47722 = state_45981__$1;
(statearr_46016_47722[(2)] = inst_45898);

(statearr_46016_47722[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (36))){
var inst_45941 = (state_45981[(23)]);
var inst_45945 = cljs.core.chunk_first(inst_45941);
var inst_45946 = cljs.core.chunk_rest(inst_45941);
var inst_45947 = cljs.core.count(inst_45945);
var inst_45923 = inst_45946;
var inst_45924 = inst_45945;
var inst_45925 = inst_45947;
var inst_45926 = (0);
var state_45981__$1 = (function (){var statearr_46017 = state_45981;
(statearr_46017[(19)] = inst_45925);

(statearr_46017[(11)] = inst_45926);

(statearr_46017[(12)] = inst_45924);

(statearr_46017[(20)] = inst_45923);

return statearr_46017;
})();
var statearr_46019_47723 = state_45981__$1;
(statearr_46019_47723[(2)] = null);

(statearr_46019_47723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (41))){
var inst_45941 = (state_45981[(23)]);
var inst_45956 = (state_45981[(2)]);
var inst_45957 = cljs.core.next(inst_45941);
var inst_45923 = inst_45957;
var inst_45924 = null;
var inst_45925 = (0);
var inst_45926 = (0);
var state_45981__$1 = (function (){var statearr_46020 = state_45981;
(statearr_46020[(19)] = inst_45925);

(statearr_46020[(11)] = inst_45926);

(statearr_46020[(25)] = inst_45956);

(statearr_46020[(12)] = inst_45924);

(statearr_46020[(20)] = inst_45923);

return statearr_46020;
})();
var statearr_46021_47726 = state_45981__$1;
(statearr_46021_47726[(2)] = null);

(statearr_46021_47726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (43))){
var state_45981__$1 = state_45981;
var statearr_46022_47727 = state_45981__$1;
(statearr_46022_47727[(2)] = null);

(statearr_46022_47727[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (29))){
var inst_45965 = (state_45981[(2)]);
var state_45981__$1 = state_45981;
var statearr_46023_47728 = state_45981__$1;
(statearr_46023_47728[(2)] = inst_45965);

(statearr_46023_47728[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (44))){
var inst_45974 = (state_45981[(2)]);
var state_45981__$1 = (function (){var statearr_46024 = state_45981;
(statearr_46024[(26)] = inst_45974);

return statearr_46024;
})();
var statearr_46026_47730 = state_45981__$1;
(statearr_46026_47730[(2)] = null);

(statearr_46026_47730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (6))){
var inst_45915 = (state_45981[(27)]);
var inst_45914 = cljs.core.deref(cs);
var inst_45915__$1 = cljs.core.keys(inst_45914);
var inst_45916 = cljs.core.count(inst_45915__$1);
var inst_45917 = cljs.core.reset_BANG_(dctr,inst_45916);
var inst_45922 = cljs.core.seq(inst_45915__$1);
var inst_45923 = inst_45922;
var inst_45924 = null;
var inst_45925 = (0);
var inst_45926 = (0);
var state_45981__$1 = (function (){var statearr_46027 = state_45981;
(statearr_46027[(27)] = inst_45915__$1);

(statearr_46027[(19)] = inst_45925);

(statearr_46027[(11)] = inst_45926);

(statearr_46027[(28)] = inst_45917);

(statearr_46027[(12)] = inst_45924);

(statearr_46027[(20)] = inst_45923);

return statearr_46027;
})();
var statearr_46028_47732 = state_45981__$1;
(statearr_46028_47732[(2)] = null);

(statearr_46028_47732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (28))){
var inst_45941 = (state_45981[(23)]);
var inst_45923 = (state_45981[(20)]);
var inst_45941__$1 = cljs.core.seq(inst_45923);
var state_45981__$1 = (function (){var statearr_46029 = state_45981;
(statearr_46029[(23)] = inst_45941__$1);

return statearr_46029;
})();
if(inst_45941__$1){
var statearr_46030_47734 = state_45981__$1;
(statearr_46030_47734[(1)] = (33));

} else {
var statearr_46031_47735 = state_45981__$1;
(statearr_46031_47735[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (25))){
var inst_45925 = (state_45981[(19)]);
var inst_45926 = (state_45981[(11)]);
var inst_45928 = (inst_45926 < inst_45925);
var inst_45929 = inst_45928;
var state_45981__$1 = state_45981;
if(cljs.core.truth_(inst_45929)){
var statearr_46032_47736 = state_45981__$1;
(statearr_46032_47736[(1)] = (27));

} else {
var statearr_46033_47737 = state_45981__$1;
(statearr_46033_47737[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (34))){
var state_45981__$1 = state_45981;
var statearr_46035_47738 = state_45981__$1;
(statearr_46035_47738[(2)] = null);

(statearr_46035_47738[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (17))){
var state_45981__$1 = state_45981;
var statearr_46036_47740 = state_45981__$1;
(statearr_46036_47740[(2)] = null);

(statearr_46036_47740[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (3))){
var inst_45979 = (state_45981[(2)]);
var state_45981__$1 = state_45981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45981__$1,inst_45979);
} else {
if((state_val_45982 === (12))){
var inst_45910 = (state_45981[(2)]);
var state_45981__$1 = state_45981;
var statearr_46037_47742 = state_45981__$1;
(statearr_46037_47742[(2)] = inst_45910);

(statearr_46037_47742[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (2))){
var state_45981__$1 = state_45981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45981__$1,(4),ch);
} else {
if((state_val_45982 === (23))){
var state_45981__$1 = state_45981;
var statearr_46038_47743 = state_45981__$1;
(statearr_46038_47743[(2)] = null);

(statearr_46038_47743[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (35))){
var inst_45963 = (state_45981[(2)]);
var state_45981__$1 = state_45981;
var statearr_46039_47744 = state_45981__$1;
(statearr_46039_47744[(2)] = inst_45963);

(statearr_46039_47744[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (19))){
var inst_45881 = (state_45981[(7)]);
var inst_45886 = cljs.core.chunk_first(inst_45881);
var inst_45887 = cljs.core.chunk_rest(inst_45881);
var inst_45888 = cljs.core.count(inst_45886);
var inst_45859 = inst_45887;
var inst_45860 = inst_45886;
var inst_45861 = inst_45888;
var inst_45862 = (0);
var state_45981__$1 = (function (){var statearr_46040 = state_45981;
(statearr_46040[(13)] = inst_45860);

(statearr_46040[(14)] = inst_45861);

(statearr_46040[(15)] = inst_45859);

(statearr_46040[(17)] = inst_45862);

return statearr_46040;
})();
var statearr_46041_47754 = state_45981__$1;
(statearr_46041_47754[(2)] = null);

(statearr_46041_47754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (11))){
var inst_45881 = (state_45981[(7)]);
var inst_45859 = (state_45981[(15)]);
var inst_45881__$1 = cljs.core.seq(inst_45859);
var state_45981__$1 = (function (){var statearr_46043 = state_45981;
(statearr_46043[(7)] = inst_45881__$1);

return statearr_46043;
})();
if(inst_45881__$1){
var statearr_46044_47755 = state_45981__$1;
(statearr_46044_47755[(1)] = (16));

} else {
var statearr_46045_47756 = state_45981__$1;
(statearr_46045_47756[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (9))){
var inst_45912 = (state_45981[(2)]);
var state_45981__$1 = state_45981;
var statearr_46046_47757 = state_45981__$1;
(statearr_46046_47757[(2)] = inst_45912);

(statearr_46046_47757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (5))){
var inst_45857 = cljs.core.deref(cs);
var inst_45858 = cljs.core.seq(inst_45857);
var inst_45859 = inst_45858;
var inst_45860 = null;
var inst_45861 = (0);
var inst_45862 = (0);
var state_45981__$1 = (function (){var statearr_46047 = state_45981;
(statearr_46047[(13)] = inst_45860);

(statearr_46047[(14)] = inst_45861);

(statearr_46047[(15)] = inst_45859);

(statearr_46047[(17)] = inst_45862);

return statearr_46047;
})();
var statearr_46048_47759 = state_45981__$1;
(statearr_46048_47759[(2)] = null);

(statearr_46048_47759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (14))){
var state_45981__$1 = state_45981;
var statearr_46049_47760 = state_45981__$1;
(statearr_46049_47760[(2)] = null);

(statearr_46049_47760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (45))){
var inst_45971 = (state_45981[(2)]);
var state_45981__$1 = state_45981;
var statearr_46050_47761 = state_45981__$1;
(statearr_46050_47761[(2)] = inst_45971);

(statearr_46050_47761[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (26))){
var inst_45915 = (state_45981[(27)]);
var inst_45967 = (state_45981[(2)]);
var inst_45968 = cljs.core.seq(inst_45915);
var state_45981__$1 = (function (){var statearr_46052 = state_45981;
(statearr_46052[(29)] = inst_45967);

return statearr_46052;
})();
if(inst_45968){
var statearr_46053_47762 = state_45981__$1;
(statearr_46053_47762[(1)] = (42));

} else {
var statearr_46054_47763 = state_45981__$1;
(statearr_46054_47763[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (16))){
var inst_45881 = (state_45981[(7)]);
var inst_45884 = cljs.core.chunked_seq_QMARK_(inst_45881);
var state_45981__$1 = state_45981;
if(inst_45884){
var statearr_46055_47765 = state_45981__$1;
(statearr_46055_47765[(1)] = (19));

} else {
var statearr_46056_47766 = state_45981__$1;
(statearr_46056_47766[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (38))){
var inst_45960 = (state_45981[(2)]);
var state_45981__$1 = state_45981;
var statearr_46057_47767 = state_45981__$1;
(statearr_46057_47767[(2)] = inst_45960);

(statearr_46057_47767[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (30))){
var state_45981__$1 = state_45981;
var statearr_46058_47768 = state_45981__$1;
(statearr_46058_47768[(2)] = null);

(statearr_46058_47768[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (10))){
var inst_45860 = (state_45981[(13)]);
var inst_45862 = (state_45981[(17)]);
var inst_45870 = cljs.core._nth(inst_45860,inst_45862);
var inst_45871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45870,(0),null);
var inst_45872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45870,(1),null);
var state_45981__$1 = (function (){var statearr_46059 = state_45981;
(statearr_46059[(24)] = inst_45871);

return statearr_46059;
})();
if(cljs.core.truth_(inst_45872)){
var statearr_46060_47773 = state_45981__$1;
(statearr_46060_47773[(1)] = (13));

} else {
var statearr_46062_47774 = state_45981__$1;
(statearr_46062_47774[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (18))){
var inst_45908 = (state_45981[(2)]);
var state_45981__$1 = state_45981;
var statearr_46063_47775 = state_45981__$1;
(statearr_46063_47775[(2)] = inst_45908);

(statearr_46063_47775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (42))){
var state_45981__$1 = state_45981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45981__$1,(45),dchan);
} else {
if((state_val_45982 === (37))){
var inst_45941 = (state_45981[(23)]);
var inst_45850 = (state_45981[(10)]);
var inst_45950 = (state_45981[(22)]);
var inst_45950__$1 = cljs.core.first(inst_45941);
var inst_45951 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45950__$1,inst_45850,done);
var state_45981__$1 = (function (){var statearr_46064 = state_45981;
(statearr_46064[(22)] = inst_45950__$1);

return statearr_46064;
})();
if(cljs.core.truth_(inst_45951)){
var statearr_46065_47776 = state_45981__$1;
(statearr_46065_47776[(1)] = (39));

} else {
var statearr_46066_47777 = state_45981__$1;
(statearr_46066_47777[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45982 === (8))){
var inst_45861 = (state_45981[(14)]);
var inst_45862 = (state_45981[(17)]);
var inst_45864 = (inst_45862 < inst_45861);
var inst_45865 = inst_45864;
var state_45981__$1 = state_45981;
if(cljs.core.truth_(inst_45865)){
var statearr_46067_47778 = state_45981__$1;
(statearr_46067_47778[(1)] = (10));

} else {
var statearr_46068_47779 = state_45981__$1;
(statearr_46068_47779[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__44889__auto__ = null;
var cljs$core$async$mult_$_state_machine__44889__auto____0 = (function (){
var statearr_46070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46070[(0)] = cljs$core$async$mult_$_state_machine__44889__auto__);

(statearr_46070[(1)] = (1));

return statearr_46070;
});
var cljs$core$async$mult_$_state_machine__44889__auto____1 = (function (state_45981){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_45981);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e46071){var ex__44892__auto__ = e46071;
var statearr_46072_47782 = state_45981;
(statearr_46072_47782[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_45981[(4)]))){
var statearr_46073_47783 = state_45981;
(statearr_46073_47783[(1)] = cljs.core.first((state_45981[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47784 = state_45981;
state_45981 = G__47784;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44889__auto__ = function(state_45981){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44889__auto____1.call(this,state_45981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44889__auto____0;
cljs$core$async$mult_$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44889__auto____1;
return cljs$core$async$mult_$_state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_46074 = f__45084__auto__();
(statearr_46074[(6)] = c__45083__auto___47694);

return statearr_46074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46077 = arguments.length;
switch (G__46077) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_47795 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47795(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47799 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47799(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47803 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47803(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47807 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47807(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47819 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47819(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47821 = arguments.length;
var i__5770__auto___47822 = (0);
while(true){
if((i__5770__auto___47822 < len__5769__auto___47821)){
args__5775__auto__.push((arguments[i__5770__auto___47822]));

var G__47832 = (i__5770__auto___47822 + (1));
i__5770__auto___47822 = G__47832;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46087){
var map__46088 = p__46087;
var map__46088__$1 = cljs.core.__destructure_map(map__46088);
var opts = map__46088__$1;
var statearr_46089_47833 = state;
(statearr_46089_47833[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46090_47834 = state;
(statearr_46090_47834[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_46092_47836 = state;
(statearr_46092_47836[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46083){
var G__46084 = cljs.core.first(seq46083);
var seq46083__$1 = cljs.core.next(seq46083);
var G__46085 = cljs.core.first(seq46083__$1);
var seq46083__$2 = cljs.core.next(seq46083__$1);
var G__46086 = cljs.core.first(seq46083__$2);
var seq46083__$3 = cljs.core.next(seq46083__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46084,G__46085,G__46086,seq46083__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46095 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46095 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46096){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46096 = meta46096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46097,meta46096__$1){
var self__ = this;
var _46097__$1 = this;
return (new cljs.core.async.t_cljs$core$async46095(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46096__$1));
}));

(cljs.core.async.t_cljs$core$async46095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46097){
var self__ = this;
var _46097__$1 = this;
return self__.meta46096;
}));

(cljs.core.async.t_cljs$core$async46095.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46095.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46095.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46095.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46095.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46095.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46095.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46095.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46096","meta46096",264993693,null)], null);
}));

(cljs.core.async.t_cljs$core$async46095.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46095");

(cljs.core.async.t_cljs$core$async46095.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46095");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46095.
 */
cljs.core.async.__GT_t_cljs$core$async46095 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46095(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46096){
return (new cljs.core.async.t_cljs$core$async46095(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46096));
});

}

return (new cljs.core.async.t_cljs$core$async46095(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45083__auto___47862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_46169){
var state_val_46170 = (state_46169[(1)]);
if((state_val_46170 === (7))){
var inst_46128 = (state_46169[(2)]);
var state_46169__$1 = state_46169;
if(cljs.core.truth_(inst_46128)){
var statearr_46171_47866 = state_46169__$1;
(statearr_46171_47866[(1)] = (8));

} else {
var statearr_46172_47867 = state_46169__$1;
(statearr_46172_47867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (20))){
var inst_46121 = (state_46169[(7)]);
var state_46169__$1 = state_46169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46169__$1,(23),out,inst_46121);
} else {
if((state_val_46170 === (1))){
var inst_46103 = calc_state();
var inst_46104 = cljs.core.__destructure_map(inst_46103);
var inst_46105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46104,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46104,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46104,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46108 = inst_46103;
var state_46169__$1 = (function (){var statearr_46174 = state_46169;
(statearr_46174[(8)] = inst_46105);

(statearr_46174[(9)] = inst_46107);

(statearr_46174[(10)] = inst_46106);

(statearr_46174[(11)] = inst_46108);

return statearr_46174;
})();
var statearr_46175_47873 = state_46169__$1;
(statearr_46175_47873[(2)] = null);

(statearr_46175_47873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (24))){
var inst_46111 = (state_46169[(12)]);
var inst_46108 = inst_46111;
var state_46169__$1 = (function (){var statearr_46176 = state_46169;
(statearr_46176[(11)] = inst_46108);

return statearr_46176;
})();
var statearr_46177_47874 = state_46169__$1;
(statearr_46177_47874[(2)] = null);

(statearr_46177_47874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (4))){
var inst_46121 = (state_46169[(7)]);
var inst_46123 = (state_46169[(13)]);
var inst_46120 = (state_46169[(2)]);
var inst_46121__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46120,(0),null);
var inst_46122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46120,(1),null);
var inst_46123__$1 = (inst_46121__$1 == null);
var state_46169__$1 = (function (){var statearr_46178 = state_46169;
(statearr_46178[(7)] = inst_46121__$1);

(statearr_46178[(13)] = inst_46123__$1);

(statearr_46178[(14)] = inst_46122);

return statearr_46178;
})();
if(cljs.core.truth_(inst_46123__$1)){
var statearr_46179_47876 = state_46169__$1;
(statearr_46179_47876[(1)] = (5));

} else {
var statearr_46180_47877 = state_46169__$1;
(statearr_46180_47877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (15))){
var inst_46112 = (state_46169[(15)]);
var inst_46142 = (state_46169[(16)]);
var inst_46142__$1 = cljs.core.empty_QMARK_(inst_46112);
var state_46169__$1 = (function (){var statearr_46182 = state_46169;
(statearr_46182[(16)] = inst_46142__$1);

return statearr_46182;
})();
if(inst_46142__$1){
var statearr_46183_47878 = state_46169__$1;
(statearr_46183_47878[(1)] = (17));

} else {
var statearr_46184_47879 = state_46169__$1;
(statearr_46184_47879[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (21))){
var inst_46111 = (state_46169[(12)]);
var inst_46108 = inst_46111;
var state_46169__$1 = (function (){var statearr_46185 = state_46169;
(statearr_46185[(11)] = inst_46108);

return statearr_46185;
})();
var statearr_46186_47880 = state_46169__$1;
(statearr_46186_47880[(2)] = null);

(statearr_46186_47880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (13))){
var inst_46135 = (state_46169[(2)]);
var inst_46136 = calc_state();
var inst_46108 = inst_46136;
var state_46169__$1 = (function (){var statearr_46187 = state_46169;
(statearr_46187[(11)] = inst_46108);

(statearr_46187[(17)] = inst_46135);

return statearr_46187;
})();
var statearr_46188_47883 = state_46169__$1;
(statearr_46188_47883[(2)] = null);

(statearr_46188_47883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (22))){
var inst_46162 = (state_46169[(2)]);
var state_46169__$1 = state_46169;
var statearr_46189_47884 = state_46169__$1;
(statearr_46189_47884[(2)] = inst_46162);

(statearr_46189_47884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (6))){
var inst_46122 = (state_46169[(14)]);
var inst_46126 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46122,change);
var state_46169__$1 = state_46169;
var statearr_46191_47885 = state_46169__$1;
(statearr_46191_47885[(2)] = inst_46126);

(statearr_46191_47885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (25))){
var state_46169__$1 = state_46169;
var statearr_46192_47897 = state_46169__$1;
(statearr_46192_47897[(2)] = null);

(statearr_46192_47897[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (17))){
var inst_46113 = (state_46169[(18)]);
var inst_46122 = (state_46169[(14)]);
var inst_46144 = (inst_46113.cljs$core$IFn$_invoke$arity$1 ? inst_46113.cljs$core$IFn$_invoke$arity$1(inst_46122) : inst_46113.call(null,inst_46122));
var inst_46145 = cljs.core.not(inst_46144);
var state_46169__$1 = state_46169;
var statearr_46193_47898 = state_46169__$1;
(statearr_46193_47898[(2)] = inst_46145);

(statearr_46193_47898[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (3))){
var inst_46166 = (state_46169[(2)]);
var state_46169__$1 = state_46169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46169__$1,inst_46166);
} else {
if((state_val_46170 === (12))){
var state_46169__$1 = state_46169;
var statearr_46194_47899 = state_46169__$1;
(statearr_46194_47899[(2)] = null);

(statearr_46194_47899[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (2))){
var inst_46108 = (state_46169[(11)]);
var inst_46111 = (state_46169[(12)]);
var inst_46111__$1 = cljs.core.__destructure_map(inst_46108);
var inst_46112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46111__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46111__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46111__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46169__$1 = (function (){var statearr_46195 = state_46169;
(statearr_46195[(18)] = inst_46113);

(statearr_46195[(15)] = inst_46112);

(statearr_46195[(12)] = inst_46111__$1);

return statearr_46195;
})();
return cljs.core.async.ioc_alts_BANG_(state_46169__$1,(4),inst_46114);
} else {
if((state_val_46170 === (23))){
var inst_46153 = (state_46169[(2)]);
var state_46169__$1 = state_46169;
if(cljs.core.truth_(inst_46153)){
var statearr_46196_47901 = state_46169__$1;
(statearr_46196_47901[(1)] = (24));

} else {
var statearr_46197_47902 = state_46169__$1;
(statearr_46197_47902[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (19))){
var inst_46148 = (state_46169[(2)]);
var state_46169__$1 = state_46169;
var statearr_46198_47903 = state_46169__$1;
(statearr_46198_47903[(2)] = inst_46148);

(statearr_46198_47903[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (11))){
var inst_46122 = (state_46169[(14)]);
var inst_46132 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46122);
var state_46169__$1 = state_46169;
var statearr_46200_47904 = state_46169__$1;
(statearr_46200_47904[(2)] = inst_46132);

(statearr_46200_47904[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (9))){
var inst_46112 = (state_46169[(15)]);
var inst_46139 = (state_46169[(19)]);
var inst_46122 = (state_46169[(14)]);
var inst_46139__$1 = (inst_46112.cljs$core$IFn$_invoke$arity$1 ? inst_46112.cljs$core$IFn$_invoke$arity$1(inst_46122) : inst_46112.call(null,inst_46122));
var state_46169__$1 = (function (){var statearr_46201 = state_46169;
(statearr_46201[(19)] = inst_46139__$1);

return statearr_46201;
})();
if(cljs.core.truth_(inst_46139__$1)){
var statearr_46202_47907 = state_46169__$1;
(statearr_46202_47907[(1)] = (14));

} else {
var statearr_46203_47908 = state_46169__$1;
(statearr_46203_47908[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (5))){
var inst_46123 = (state_46169[(13)]);
var state_46169__$1 = state_46169;
var statearr_46204_47909 = state_46169__$1;
(statearr_46204_47909[(2)] = inst_46123);

(statearr_46204_47909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (14))){
var inst_46139 = (state_46169[(19)]);
var state_46169__$1 = state_46169;
var statearr_46205_47910 = state_46169__$1;
(statearr_46205_47910[(2)] = inst_46139);

(statearr_46205_47910[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (26))){
var inst_46158 = (state_46169[(2)]);
var state_46169__$1 = state_46169;
var statearr_46206_47913 = state_46169__$1;
(statearr_46206_47913[(2)] = inst_46158);

(statearr_46206_47913[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (16))){
var inst_46150 = (state_46169[(2)]);
var state_46169__$1 = state_46169;
if(cljs.core.truth_(inst_46150)){
var statearr_46207_47914 = state_46169__$1;
(statearr_46207_47914[(1)] = (20));

} else {
var statearr_46208_47915 = state_46169__$1;
(statearr_46208_47915[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (10))){
var inst_46164 = (state_46169[(2)]);
var state_46169__$1 = state_46169;
var statearr_46210_47916 = state_46169__$1;
(statearr_46210_47916[(2)] = inst_46164);

(statearr_46210_47916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (18))){
var inst_46142 = (state_46169[(16)]);
var state_46169__$1 = state_46169;
var statearr_46211_47917 = state_46169__$1;
(statearr_46211_47917[(2)] = inst_46142);

(statearr_46211_47917[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46170 === (8))){
var inst_46121 = (state_46169[(7)]);
var inst_46130 = (inst_46121 == null);
var state_46169__$1 = state_46169;
if(cljs.core.truth_(inst_46130)){
var statearr_46212_47918 = state_46169__$1;
(statearr_46212_47918[(1)] = (11));

} else {
var statearr_46213_47919 = state_46169__$1;
(statearr_46213_47919[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__44889__auto__ = null;
var cljs$core$async$mix_$_state_machine__44889__auto____0 = (function (){
var statearr_46214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46214[(0)] = cljs$core$async$mix_$_state_machine__44889__auto__);

(statearr_46214[(1)] = (1));

return statearr_46214;
});
var cljs$core$async$mix_$_state_machine__44889__auto____1 = (function (state_46169){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_46169);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e46215){var ex__44892__auto__ = e46215;
var statearr_46216_47921 = state_46169;
(statearr_46216_47921[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_46169[(4)]))){
var statearr_46217_47922 = state_46169;
(statearr_46217_47922[(1)] = cljs.core.first((state_46169[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47924 = state_46169;
state_46169 = G__47924;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44889__auto__ = function(state_46169){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44889__auto____1.call(this,state_46169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44889__auto____0;
cljs$core$async$mix_$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44889__auto____1;
return cljs$core$async$mix_$_state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_46219 = f__45084__auto__();
(statearr_46219[(6)] = c__45083__auto___47862);

return statearr_46219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_47929 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_47929(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47930 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_47930(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47931 = (function() {
var G__47932 = null;
var G__47932__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__47932__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__47932 = function(p,v){
switch(arguments.length){
case 1:
return G__47932__1.call(this,p);
case 2:
return G__47932__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47932.cljs$core$IFn$_invoke$arity$1 = G__47932__1;
G__47932.cljs$core$IFn$_invoke$arity$2 = G__47932__2;
return G__47932;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46225 = arguments.length;
switch (G__46225) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47931(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47931(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__46229 = arguments.length;
switch (G__46229) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46227_SHARP_){
if(cljs.core.truth_((p1__46227_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46227_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46227_SHARP_.call(null,topic)))){
return p1__46227_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46227_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46231 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46231 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46232){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46232 = meta46232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46233,meta46232__$1){
var self__ = this;
var _46233__$1 = this;
return (new cljs.core.async.t_cljs$core$async46231(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46232__$1));
}));

(cljs.core.async.t_cljs$core$async46231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46233){
var self__ = this;
var _46233__$1 = this;
return self__.meta46232;
}));

(cljs.core.async.t_cljs$core$async46231.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46231.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46231.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46231.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46231.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async46231.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46231.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46232","meta46232",-1513927906,null)], null);
}));

(cljs.core.async.t_cljs$core$async46231.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46231");

(cljs.core.async.t_cljs$core$async46231.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46231");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46231.
 */
cljs.core.async.__GT_t_cljs$core$async46231 = (function cljs$core$async$__GT_t_cljs$core$async46231(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46232){
return (new cljs.core.async.t_cljs$core$async46231(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46232));
});

}

return (new cljs.core.async.t_cljs$core$async46231(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45083__auto___47959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_46309){
var state_val_46310 = (state_46309[(1)]);
if((state_val_46310 === (7))){
var inst_46305 = (state_46309[(2)]);
var state_46309__$1 = state_46309;
var statearr_46312_47960 = state_46309__$1;
(statearr_46312_47960[(2)] = inst_46305);

(statearr_46312_47960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (20))){
var state_46309__$1 = state_46309;
var statearr_46313_47961 = state_46309__$1;
(statearr_46313_47961[(2)] = null);

(statearr_46313_47961[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (1))){
var state_46309__$1 = state_46309;
var statearr_46314_47969 = state_46309__$1;
(statearr_46314_47969[(2)] = null);

(statearr_46314_47969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (24))){
var inst_46288 = (state_46309[(7)]);
var inst_46297 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46288);
var state_46309__$1 = state_46309;
var statearr_46316_47970 = state_46309__$1;
(statearr_46316_47970[(2)] = inst_46297);

(statearr_46316_47970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (4))){
var inst_46239 = (state_46309[(8)]);
var inst_46239__$1 = (state_46309[(2)]);
var inst_46240 = (inst_46239__$1 == null);
var state_46309__$1 = (function (){var statearr_46318 = state_46309;
(statearr_46318[(8)] = inst_46239__$1);

return statearr_46318;
})();
if(cljs.core.truth_(inst_46240)){
var statearr_46319_47971 = state_46309__$1;
(statearr_46319_47971[(1)] = (5));

} else {
var statearr_46320_47972 = state_46309__$1;
(statearr_46320_47972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (15))){
var inst_46282 = (state_46309[(2)]);
var state_46309__$1 = state_46309;
var statearr_46321_47980 = state_46309__$1;
(statearr_46321_47980[(2)] = inst_46282);

(statearr_46321_47980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (21))){
var inst_46302 = (state_46309[(2)]);
var state_46309__$1 = (function (){var statearr_46322 = state_46309;
(statearr_46322[(9)] = inst_46302);

return statearr_46322;
})();
var statearr_46323_47984 = state_46309__$1;
(statearr_46323_47984[(2)] = null);

(statearr_46323_47984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (13))){
var inst_46263 = (state_46309[(10)]);
var inst_46266 = cljs.core.chunked_seq_QMARK_(inst_46263);
var state_46309__$1 = state_46309;
if(inst_46266){
var statearr_46324_47985 = state_46309__$1;
(statearr_46324_47985[(1)] = (16));

} else {
var statearr_46325_47986 = state_46309__$1;
(statearr_46325_47986[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (22))){
var inst_46294 = (state_46309[(2)]);
var state_46309__$1 = state_46309;
if(cljs.core.truth_(inst_46294)){
var statearr_46326_47987 = state_46309__$1;
(statearr_46326_47987[(1)] = (23));

} else {
var statearr_46327_47988 = state_46309__$1;
(statearr_46327_47988[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (6))){
var inst_46288 = (state_46309[(7)]);
var inst_46290 = (state_46309[(11)]);
var inst_46239 = (state_46309[(8)]);
var inst_46288__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46239) : topic_fn.call(null,inst_46239));
var inst_46289 = cljs.core.deref(mults);
var inst_46290__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46289,inst_46288__$1);
var state_46309__$1 = (function (){var statearr_46330 = state_46309;
(statearr_46330[(7)] = inst_46288__$1);

(statearr_46330[(11)] = inst_46290__$1);

return statearr_46330;
})();
if(cljs.core.truth_(inst_46290__$1)){
var statearr_46331_47989 = state_46309__$1;
(statearr_46331_47989[(1)] = (19));

} else {
var statearr_46332_47991 = state_46309__$1;
(statearr_46332_47991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (25))){
var inst_46299 = (state_46309[(2)]);
var state_46309__$1 = state_46309;
var statearr_46333_47992 = state_46309__$1;
(statearr_46333_47992[(2)] = inst_46299);

(statearr_46333_47992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (17))){
var inst_46263 = (state_46309[(10)]);
var inst_46273 = cljs.core.first(inst_46263);
var inst_46274 = cljs.core.async.muxch_STAR_(inst_46273);
var inst_46275 = cljs.core.async.close_BANG_(inst_46274);
var inst_46276 = cljs.core.next(inst_46263);
var inst_46249 = inst_46276;
var inst_46250 = null;
var inst_46251 = (0);
var inst_46252 = (0);
var state_46309__$1 = (function (){var statearr_46334 = state_46309;
(statearr_46334[(12)] = inst_46249);

(statearr_46334[(13)] = inst_46252);

(statearr_46334[(14)] = inst_46250);

(statearr_46334[(15)] = inst_46275);

(statearr_46334[(16)] = inst_46251);

return statearr_46334;
})();
var statearr_46335_47994 = state_46309__$1;
(statearr_46335_47994[(2)] = null);

(statearr_46335_47994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (3))){
var inst_46307 = (state_46309[(2)]);
var state_46309__$1 = state_46309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46309__$1,inst_46307);
} else {
if((state_val_46310 === (12))){
var inst_46284 = (state_46309[(2)]);
var state_46309__$1 = state_46309;
var statearr_46336_47995 = state_46309__$1;
(statearr_46336_47995[(2)] = inst_46284);

(statearr_46336_47995[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (2))){
var state_46309__$1 = state_46309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46309__$1,(4),ch);
} else {
if((state_val_46310 === (23))){
var state_46309__$1 = state_46309;
var statearr_46337_47996 = state_46309__$1;
(statearr_46337_47996[(2)] = null);

(statearr_46337_47996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (19))){
var inst_46290 = (state_46309[(11)]);
var inst_46239 = (state_46309[(8)]);
var inst_46292 = cljs.core.async.muxch_STAR_(inst_46290);
var state_46309__$1 = state_46309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46309__$1,(22),inst_46292,inst_46239);
} else {
if((state_val_46310 === (11))){
var inst_46249 = (state_46309[(12)]);
var inst_46263 = (state_46309[(10)]);
var inst_46263__$1 = cljs.core.seq(inst_46249);
var state_46309__$1 = (function (){var statearr_46338 = state_46309;
(statearr_46338[(10)] = inst_46263__$1);

return statearr_46338;
})();
if(inst_46263__$1){
var statearr_46339_47997 = state_46309__$1;
(statearr_46339_47997[(1)] = (13));

} else {
var statearr_46340_47998 = state_46309__$1;
(statearr_46340_47998[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (9))){
var inst_46286 = (state_46309[(2)]);
var state_46309__$1 = state_46309;
var statearr_46341_48004 = state_46309__$1;
(statearr_46341_48004[(2)] = inst_46286);

(statearr_46341_48004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (5))){
var inst_46246 = cljs.core.deref(mults);
var inst_46247 = cljs.core.vals(inst_46246);
var inst_46248 = cljs.core.seq(inst_46247);
var inst_46249 = inst_46248;
var inst_46250 = null;
var inst_46251 = (0);
var inst_46252 = (0);
var state_46309__$1 = (function (){var statearr_46342 = state_46309;
(statearr_46342[(12)] = inst_46249);

(statearr_46342[(13)] = inst_46252);

(statearr_46342[(14)] = inst_46250);

(statearr_46342[(16)] = inst_46251);

return statearr_46342;
})();
var statearr_46343_48010 = state_46309__$1;
(statearr_46343_48010[(2)] = null);

(statearr_46343_48010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (14))){
var state_46309__$1 = state_46309;
var statearr_46348_48011 = state_46309__$1;
(statearr_46348_48011[(2)] = null);

(statearr_46348_48011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (16))){
var inst_46263 = (state_46309[(10)]);
var inst_46268 = cljs.core.chunk_first(inst_46263);
var inst_46269 = cljs.core.chunk_rest(inst_46263);
var inst_46270 = cljs.core.count(inst_46268);
var inst_46249 = inst_46269;
var inst_46250 = inst_46268;
var inst_46251 = inst_46270;
var inst_46252 = (0);
var state_46309__$1 = (function (){var statearr_46350 = state_46309;
(statearr_46350[(12)] = inst_46249);

(statearr_46350[(13)] = inst_46252);

(statearr_46350[(14)] = inst_46250);

(statearr_46350[(16)] = inst_46251);

return statearr_46350;
})();
var statearr_46351_48013 = state_46309__$1;
(statearr_46351_48013[(2)] = null);

(statearr_46351_48013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (10))){
var inst_46249 = (state_46309[(12)]);
var inst_46252 = (state_46309[(13)]);
var inst_46250 = (state_46309[(14)]);
var inst_46251 = (state_46309[(16)]);
var inst_46257 = cljs.core._nth(inst_46250,inst_46252);
var inst_46258 = cljs.core.async.muxch_STAR_(inst_46257);
var inst_46259 = cljs.core.async.close_BANG_(inst_46258);
var inst_46260 = (inst_46252 + (1));
var tmp46344 = inst_46249;
var tmp46345 = inst_46250;
var tmp46346 = inst_46251;
var inst_46249__$1 = tmp46344;
var inst_46250__$1 = tmp46345;
var inst_46251__$1 = tmp46346;
var inst_46252__$1 = inst_46260;
var state_46309__$1 = (function (){var statearr_46352 = state_46309;
(statearr_46352[(12)] = inst_46249__$1);

(statearr_46352[(13)] = inst_46252__$1);

(statearr_46352[(14)] = inst_46250__$1);

(statearr_46352[(17)] = inst_46259);

(statearr_46352[(16)] = inst_46251__$1);

return statearr_46352;
})();
var statearr_46353_48018 = state_46309__$1;
(statearr_46353_48018[(2)] = null);

(statearr_46353_48018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (18))){
var inst_46279 = (state_46309[(2)]);
var state_46309__$1 = state_46309;
var statearr_46354_48019 = state_46309__$1;
(statearr_46354_48019[(2)] = inst_46279);

(statearr_46354_48019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (8))){
var inst_46252 = (state_46309[(13)]);
var inst_46251 = (state_46309[(16)]);
var inst_46254 = (inst_46252 < inst_46251);
var inst_46255 = inst_46254;
var state_46309__$1 = state_46309;
if(cljs.core.truth_(inst_46255)){
var statearr_46355_48021 = state_46309__$1;
(statearr_46355_48021[(1)] = (10));

} else {
var statearr_46356_48022 = state_46309__$1;
(statearr_46356_48022[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44889__auto__ = null;
var cljs$core$async$state_machine__44889__auto____0 = (function (){
var statearr_46357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46357[(0)] = cljs$core$async$state_machine__44889__auto__);

(statearr_46357[(1)] = (1));

return statearr_46357;
});
var cljs$core$async$state_machine__44889__auto____1 = (function (state_46309){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_46309);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e46358){var ex__44892__auto__ = e46358;
var statearr_46359_48028 = state_46309;
(statearr_46359_48028[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_46309[(4)]))){
var statearr_46360_48029 = state_46309;
(statearr_46360_48029[(1)] = cljs.core.first((state_46309[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48030 = state_46309;
state_46309 = G__48030;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$state_machine__44889__auto__ = function(state_46309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44889__auto____1.call(this,state_46309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44889__auto____0;
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44889__auto____1;
return cljs$core$async$state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_46361 = f__45084__auto__();
(statearr_46361[(6)] = c__45083__auto___47959);

return statearr_46361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__46363 = arguments.length;
switch (G__46363) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__46368 = arguments.length;
switch (G__46368) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__46376 = arguments.length;
switch (G__46376) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__45083__auto___48039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_46443){
var state_val_46444 = (state_46443[(1)]);
if((state_val_46444 === (7))){
var state_46443__$1 = state_46443;
var statearr_46449_48040 = state_46443__$1;
(statearr_46449_48040[(2)] = null);

(statearr_46449_48040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (1))){
var state_46443__$1 = state_46443;
var statearr_46450_48041 = state_46443__$1;
(statearr_46450_48041[(2)] = null);

(statearr_46450_48041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (4))){
var inst_46388 = (state_46443[(7)]);
var inst_46387 = (state_46443[(8)]);
var inst_46390 = (inst_46388 < inst_46387);
var state_46443__$1 = state_46443;
if(cljs.core.truth_(inst_46390)){
var statearr_46453_48042 = state_46443__$1;
(statearr_46453_48042[(1)] = (6));

} else {
var statearr_46456_48043 = state_46443__$1;
(statearr_46456_48043[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (15))){
var inst_46425 = (state_46443[(9)]);
var inst_46431 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46425);
var state_46443__$1 = state_46443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46443__$1,(17),out,inst_46431);
} else {
if((state_val_46444 === (13))){
var inst_46425 = (state_46443[(9)]);
var inst_46425__$1 = (state_46443[(2)]);
var inst_46427 = cljs.core.some(cljs.core.nil_QMARK_,inst_46425__$1);
var state_46443__$1 = (function (){var statearr_46459 = state_46443;
(statearr_46459[(9)] = inst_46425__$1);

return statearr_46459;
})();
if(cljs.core.truth_(inst_46427)){
var statearr_46460_48051 = state_46443__$1;
(statearr_46460_48051[(1)] = (14));

} else {
var statearr_46461_48052 = state_46443__$1;
(statearr_46461_48052[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (6))){
var state_46443__$1 = state_46443;
var statearr_46465_48056 = state_46443__$1;
(statearr_46465_48056[(2)] = null);

(statearr_46465_48056[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (17))){
var inst_46433 = (state_46443[(2)]);
var state_46443__$1 = (function (){var statearr_46474 = state_46443;
(statearr_46474[(10)] = inst_46433);

return statearr_46474;
})();
var statearr_46477_48057 = state_46443__$1;
(statearr_46477_48057[(2)] = null);

(statearr_46477_48057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (3))){
var inst_46438 = (state_46443[(2)]);
var state_46443__$1 = state_46443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46443__$1,inst_46438);
} else {
if((state_val_46444 === (12))){
var _ = (function (){var statearr_46479 = state_46443;
(statearr_46479[(4)] = cljs.core.rest((state_46443[(4)])));

return statearr_46479;
})();
var state_46443__$1 = state_46443;
var ex46473 = (state_46443__$1[(2)]);
var statearr_46481_48058 = state_46443__$1;
(statearr_46481_48058[(5)] = ex46473);


if((ex46473 instanceof Object)){
var statearr_46485_48059 = state_46443__$1;
(statearr_46485_48059[(1)] = (11));

(statearr_46485_48059[(5)] = null);

} else {
throw ex46473;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (2))){
var inst_46385 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46387 = cnt;
var inst_46388 = (0);
var state_46443__$1 = (function (){var statearr_46490 = state_46443;
(statearr_46490[(7)] = inst_46388);

(statearr_46490[(11)] = inst_46385);

(statearr_46490[(8)] = inst_46387);

return statearr_46490;
})();
var statearr_46492_48064 = state_46443__$1;
(statearr_46492_48064[(2)] = null);

(statearr_46492_48064[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (11))){
var inst_46401 = (state_46443[(2)]);
var inst_46402 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46443__$1 = (function (){var statearr_46494 = state_46443;
(statearr_46494[(12)] = inst_46401);

return statearr_46494;
})();
var statearr_46495_48065 = state_46443__$1;
(statearr_46495_48065[(2)] = inst_46402);

(statearr_46495_48065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (9))){
var inst_46388 = (state_46443[(7)]);
var _ = (function (){var statearr_46499 = state_46443;
(statearr_46499[(4)] = cljs.core.cons((12),(state_46443[(4)])));

return statearr_46499;
})();
var inst_46411 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46388) : chs__$1.call(null,inst_46388));
var inst_46412 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46388) : done.call(null,inst_46388));
var inst_46413 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46411,inst_46412);
var ___$1 = (function (){var statearr_46503 = state_46443;
(statearr_46503[(4)] = cljs.core.rest((state_46443[(4)])));

return statearr_46503;
})();
var state_46443__$1 = state_46443;
var statearr_46505_48070 = state_46443__$1;
(statearr_46505_48070[(2)] = inst_46413);

(statearr_46505_48070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (5))){
var inst_46423 = (state_46443[(2)]);
var state_46443__$1 = (function (){var statearr_46506 = state_46443;
(statearr_46506[(13)] = inst_46423);

return statearr_46506;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46443__$1,(13),dchan);
} else {
if((state_val_46444 === (14))){
var inst_46429 = cljs.core.async.close_BANG_(out);
var state_46443__$1 = state_46443;
var statearr_46510_48075 = state_46443__$1;
(statearr_46510_48075[(2)] = inst_46429);

(statearr_46510_48075[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (16))){
var inst_46436 = (state_46443[(2)]);
var state_46443__$1 = state_46443;
var statearr_46511_48077 = state_46443__$1;
(statearr_46511_48077[(2)] = inst_46436);

(statearr_46511_48077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (10))){
var inst_46388 = (state_46443[(7)]);
var inst_46416 = (state_46443[(2)]);
var inst_46417 = (inst_46388 + (1));
var inst_46388__$1 = inst_46417;
var state_46443__$1 = (function (){var statearr_46513 = state_46443;
(statearr_46513[(7)] = inst_46388__$1);

(statearr_46513[(14)] = inst_46416);

return statearr_46513;
})();
var statearr_46514_48078 = state_46443__$1;
(statearr_46514_48078[(2)] = null);

(statearr_46514_48078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (8))){
var inst_46421 = (state_46443[(2)]);
var state_46443__$1 = state_46443;
var statearr_46517_48079 = state_46443__$1;
(statearr_46517_48079[(2)] = inst_46421);

(statearr_46517_48079[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44889__auto__ = null;
var cljs$core$async$state_machine__44889__auto____0 = (function (){
var statearr_46521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46521[(0)] = cljs$core$async$state_machine__44889__auto__);

(statearr_46521[(1)] = (1));

return statearr_46521;
});
var cljs$core$async$state_machine__44889__auto____1 = (function (state_46443){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_46443);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e46523){var ex__44892__auto__ = e46523;
var statearr_46525_48080 = state_46443;
(statearr_46525_48080[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_46443[(4)]))){
var statearr_46528_48081 = state_46443;
(statearr_46528_48081[(1)] = cljs.core.first((state_46443[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48082 = state_46443;
state_46443 = G__48082;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$state_machine__44889__auto__ = function(state_46443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44889__auto____1.call(this,state_46443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44889__auto____0;
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44889__auto____1;
return cljs$core$async$state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_46530 = f__45084__auto__();
(statearr_46530[(6)] = c__45083__auto___48039);

return statearr_46530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46537 = arguments.length;
switch (G__46537) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45083__auto___48084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_46581){
var state_val_46582 = (state_46581[(1)]);
if((state_val_46582 === (7))){
var inst_46555 = (state_46581[(7)]);
var inst_46556 = (state_46581[(8)]);
var inst_46555__$1 = (state_46581[(2)]);
var inst_46556__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46555__$1,(0),null);
var inst_46557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46555__$1,(1),null);
var inst_46558 = (inst_46556__$1 == null);
var state_46581__$1 = (function (){var statearr_46588 = state_46581;
(statearr_46588[(9)] = inst_46557);

(statearr_46588[(7)] = inst_46555__$1);

(statearr_46588[(8)] = inst_46556__$1);

return statearr_46588;
})();
if(cljs.core.truth_(inst_46558)){
var statearr_46591_48085 = state_46581__$1;
(statearr_46591_48085[(1)] = (8));

} else {
var statearr_46593_48086 = state_46581__$1;
(statearr_46593_48086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (1))){
var inst_46542 = cljs.core.vec(chs);
var inst_46544 = inst_46542;
var state_46581__$1 = (function (){var statearr_46595 = state_46581;
(statearr_46595[(10)] = inst_46544);

return statearr_46595;
})();
var statearr_46596_48087 = state_46581__$1;
(statearr_46596_48087[(2)] = null);

(statearr_46596_48087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (4))){
var inst_46544 = (state_46581[(10)]);
var state_46581__$1 = state_46581;
return cljs.core.async.ioc_alts_BANG_(state_46581__$1,(7),inst_46544);
} else {
if((state_val_46582 === (6))){
var inst_46576 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46600_48088 = state_46581__$1;
(statearr_46600_48088[(2)] = inst_46576);

(statearr_46600_48088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (3))){
var inst_46578 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46581__$1,inst_46578);
} else {
if((state_val_46582 === (2))){
var inst_46544 = (state_46581[(10)]);
var inst_46548 = cljs.core.count(inst_46544);
var inst_46549 = (inst_46548 > (0));
var state_46581__$1 = state_46581;
if(cljs.core.truth_(inst_46549)){
var statearr_46604_48089 = state_46581__$1;
(statearr_46604_48089[(1)] = (4));

} else {
var statearr_46605_48090 = state_46581__$1;
(statearr_46605_48090[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (11))){
var inst_46544 = (state_46581[(10)]);
var inst_46569 = (state_46581[(2)]);
var tmp46602 = inst_46544;
var inst_46544__$1 = tmp46602;
var state_46581__$1 = (function (){var statearr_46609 = state_46581;
(statearr_46609[(11)] = inst_46569);

(statearr_46609[(10)] = inst_46544__$1);

return statearr_46609;
})();
var statearr_46610_48091 = state_46581__$1;
(statearr_46610_48091[(2)] = null);

(statearr_46610_48091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (9))){
var inst_46556 = (state_46581[(8)]);
var state_46581__$1 = state_46581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46581__$1,(11),out,inst_46556);
} else {
if((state_val_46582 === (5))){
var inst_46574 = cljs.core.async.close_BANG_(out);
var state_46581__$1 = state_46581;
var statearr_46616_48092 = state_46581__$1;
(statearr_46616_48092[(2)] = inst_46574);

(statearr_46616_48092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (10))){
var inst_46572 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46617_48093 = state_46581__$1;
(statearr_46617_48093[(2)] = inst_46572);

(statearr_46617_48093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (8))){
var inst_46557 = (state_46581[(9)]);
var inst_46544 = (state_46581[(10)]);
var inst_46555 = (state_46581[(7)]);
var inst_46556 = (state_46581[(8)]);
var inst_46563 = (function (){var cs = inst_46544;
var vec__46551 = inst_46555;
var v = inst_46556;
var c = inst_46557;
return (function (p1__46534_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46534_SHARP_);
});
})();
var inst_46565 = cljs.core.filterv(inst_46563,inst_46544);
var inst_46544__$1 = inst_46565;
var state_46581__$1 = (function (){var statearr_46621 = state_46581;
(statearr_46621[(10)] = inst_46544__$1);

return statearr_46621;
})();
var statearr_46623_48094 = state_46581__$1;
(statearr_46623_48094[(2)] = null);

(statearr_46623_48094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44889__auto__ = null;
var cljs$core$async$state_machine__44889__auto____0 = (function (){
var statearr_46627 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46627[(0)] = cljs$core$async$state_machine__44889__auto__);

(statearr_46627[(1)] = (1));

return statearr_46627;
});
var cljs$core$async$state_machine__44889__auto____1 = (function (state_46581){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_46581);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e46628){var ex__44892__auto__ = e46628;
var statearr_46629_48095 = state_46581;
(statearr_46629_48095[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_46581[(4)]))){
var statearr_46631_48096 = state_46581;
(statearr_46631_48096[(1)] = cljs.core.first((state_46581[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48097 = state_46581;
state_46581 = G__48097;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$state_machine__44889__auto__ = function(state_46581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44889__auto____1.call(this,state_46581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44889__auto____0;
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44889__auto____1;
return cljs$core$async$state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_46635 = f__45084__auto__();
(statearr_46635[(6)] = c__45083__auto___48084);

return statearr_46635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46644 = arguments.length;
switch (G__46644) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45083__auto___48103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_46685){
var state_val_46686 = (state_46685[(1)]);
if((state_val_46686 === (7))){
var inst_46661 = (state_46685[(7)]);
var inst_46661__$1 = (state_46685[(2)]);
var inst_46662 = (inst_46661__$1 == null);
var inst_46663 = cljs.core.not(inst_46662);
var state_46685__$1 = (function (){var statearr_46691 = state_46685;
(statearr_46691[(7)] = inst_46661__$1);

return statearr_46691;
})();
if(inst_46663){
var statearr_46693_48108 = state_46685__$1;
(statearr_46693_48108[(1)] = (8));

} else {
var statearr_46695_48112 = state_46685__$1;
(statearr_46695_48112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (1))){
var inst_46656 = (0);
var state_46685__$1 = (function (){var statearr_46701 = state_46685;
(statearr_46701[(8)] = inst_46656);

return statearr_46701;
})();
var statearr_46702_48116 = state_46685__$1;
(statearr_46702_48116[(2)] = null);

(statearr_46702_48116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (4))){
var state_46685__$1 = state_46685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46685__$1,(7),ch);
} else {
if((state_val_46686 === (6))){
var inst_46679 = (state_46685[(2)]);
var state_46685__$1 = state_46685;
var statearr_46708_48117 = state_46685__$1;
(statearr_46708_48117[(2)] = inst_46679);

(statearr_46708_48117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (3))){
var inst_46681 = (state_46685[(2)]);
var inst_46682 = cljs.core.async.close_BANG_(out);
var state_46685__$1 = (function (){var statearr_46712 = state_46685;
(statearr_46712[(9)] = inst_46681);

return statearr_46712;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46685__$1,inst_46682);
} else {
if((state_val_46686 === (2))){
var inst_46656 = (state_46685[(8)]);
var inst_46658 = (inst_46656 < n);
var state_46685__$1 = state_46685;
if(cljs.core.truth_(inst_46658)){
var statearr_46717_48118 = state_46685__$1;
(statearr_46717_48118[(1)] = (4));

} else {
var statearr_46718_48119 = state_46685__$1;
(statearr_46718_48119[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (11))){
var inst_46656 = (state_46685[(8)]);
var inst_46671 = (state_46685[(2)]);
var inst_46672 = (inst_46656 + (1));
var inst_46656__$1 = inst_46672;
var state_46685__$1 = (function (){var statearr_46723 = state_46685;
(statearr_46723[(8)] = inst_46656__$1);

(statearr_46723[(10)] = inst_46671);

return statearr_46723;
})();
var statearr_46724_48123 = state_46685__$1;
(statearr_46724_48123[(2)] = null);

(statearr_46724_48123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (9))){
var state_46685__$1 = state_46685;
var statearr_46729_48127 = state_46685__$1;
(statearr_46729_48127[(2)] = null);

(statearr_46729_48127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (5))){
var state_46685__$1 = state_46685;
var statearr_46731_48128 = state_46685__$1;
(statearr_46731_48128[(2)] = null);

(statearr_46731_48128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (10))){
var inst_46676 = (state_46685[(2)]);
var state_46685__$1 = state_46685;
var statearr_46735_48132 = state_46685__$1;
(statearr_46735_48132[(2)] = inst_46676);

(statearr_46735_48132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (8))){
var inst_46661 = (state_46685[(7)]);
var state_46685__$1 = state_46685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46685__$1,(11),out,inst_46661);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44889__auto__ = null;
var cljs$core$async$state_machine__44889__auto____0 = (function (){
var statearr_46741 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46741[(0)] = cljs$core$async$state_machine__44889__auto__);

(statearr_46741[(1)] = (1));

return statearr_46741;
});
var cljs$core$async$state_machine__44889__auto____1 = (function (state_46685){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_46685);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e46745){var ex__44892__auto__ = e46745;
var statearr_46746_48133 = state_46685;
(statearr_46746_48133[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_46685[(4)]))){
var statearr_46747_48134 = state_46685;
(statearr_46747_48134[(1)] = cljs.core.first((state_46685[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48138 = state_46685;
state_46685 = G__48138;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$state_machine__44889__auto__ = function(state_46685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44889__auto____1.call(this,state_46685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44889__auto____0;
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44889__auto____1;
return cljs$core$async$state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_46751 = f__45084__auto__();
(statearr_46751[(6)] = c__45083__auto___48103);

return statearr_46751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46763 = (function (f,ch,meta46764){
this.f = f;
this.ch = ch;
this.meta46764 = meta46764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46765,meta46764__$1){
var self__ = this;
var _46765__$1 = this;
return (new cljs.core.async.t_cljs$core$async46763(self__.f,self__.ch,meta46764__$1));
}));

(cljs.core.async.t_cljs$core$async46763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46765){
var self__ = this;
var _46765__$1 = this;
return self__.meta46764;
}));

(cljs.core.async.t_cljs$core$async46763.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46763.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46763.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46763.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46763.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46785 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46785 = (function (f,ch,meta46764,_,fn1,meta46786){
this.f = f;
this.ch = ch;
this.meta46764 = meta46764;
this._ = _;
this.fn1 = fn1;
this.meta46786 = meta46786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46787,meta46786__$1){
var self__ = this;
var _46787__$1 = this;
return (new cljs.core.async.t_cljs$core$async46785(self__.f,self__.ch,self__.meta46764,self__._,self__.fn1,meta46786__$1));
}));

(cljs.core.async.t_cljs$core$async46785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46787){
var self__ = this;
var _46787__$1 = this;
return self__.meta46786;
}));

(cljs.core.async.t_cljs$core$async46785.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46785.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46785.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46785.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46755_SHARP_){
var G__46793 = (((p1__46755_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46755_SHARP_) : self__.f.call(null,p1__46755_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46793) : f1.call(null,G__46793));
});
}));

(cljs.core.async.t_cljs$core$async46785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46764","meta46764",-980870685,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46763","cljs.core.async/t_cljs$core$async46763",-2107826072,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46786","meta46786",-157156066,null)], null);
}));

(cljs.core.async.t_cljs$core$async46785.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46785");

(cljs.core.async.t_cljs$core$async46785.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46785");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46785.
 */
cljs.core.async.__GT_t_cljs$core$async46785 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46785(f__$1,ch__$1,meta46764__$1,___$2,fn1__$1,meta46786){
return (new cljs.core.async.t_cljs$core$async46785(f__$1,ch__$1,meta46764__$1,___$2,fn1__$1,meta46786));
});

}

return (new cljs.core.async.t_cljs$core$async46785(self__.f,self__.ch,self__.meta46764,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46802 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46802) : self__.f.call(null,G__46802));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46763.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46763.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46764","meta46764",-980870685,null)], null);
}));

(cljs.core.async.t_cljs$core$async46763.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46763");

(cljs.core.async.t_cljs$core$async46763.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46763");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46763.
 */
cljs.core.async.__GT_t_cljs$core$async46763 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46763(f__$1,ch__$1,meta46764){
return (new cljs.core.async.t_cljs$core$async46763(f__$1,ch__$1,meta46764));
});

}

return (new cljs.core.async.t_cljs$core$async46763(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46811 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46811 = (function (f,ch,meta46812){
this.f = f;
this.ch = ch;
this.meta46812 = meta46812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46813,meta46812__$1){
var self__ = this;
var _46813__$1 = this;
return (new cljs.core.async.t_cljs$core$async46811(self__.f,self__.ch,meta46812__$1));
}));

(cljs.core.async.t_cljs$core$async46811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46813){
var self__ = this;
var _46813__$1 = this;
return self__.meta46812;
}));

(cljs.core.async.t_cljs$core$async46811.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46811.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46811.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46811.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46811.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46811.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46812","meta46812",-270212928,null)], null);
}));

(cljs.core.async.t_cljs$core$async46811.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46811");

(cljs.core.async.t_cljs$core$async46811.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46811");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46811.
 */
cljs.core.async.__GT_t_cljs$core$async46811 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46811(f__$1,ch__$1,meta46812){
return (new cljs.core.async.t_cljs$core$async46811(f__$1,ch__$1,meta46812));
});

}

return (new cljs.core.async.t_cljs$core$async46811(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46827 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46827 = (function (p,ch,meta46828){
this.p = p;
this.ch = ch;
this.meta46828 = meta46828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46829,meta46828__$1){
var self__ = this;
var _46829__$1 = this;
return (new cljs.core.async.t_cljs$core$async46827(self__.p,self__.ch,meta46828__$1));
}));

(cljs.core.async.t_cljs$core$async46827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46829){
var self__ = this;
var _46829__$1 = this;
return self__.meta46828;
}));

(cljs.core.async.t_cljs$core$async46827.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46827.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46827.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46827.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46827.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46827.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46827.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46827.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46828","meta46828",1472044050,null)], null);
}));

(cljs.core.async.t_cljs$core$async46827.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46827");

(cljs.core.async.t_cljs$core$async46827.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46827");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46827.
 */
cljs.core.async.__GT_t_cljs$core$async46827 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46827(p__$1,ch__$1,meta46828){
return (new cljs.core.async.t_cljs$core$async46827(p__$1,ch__$1,meta46828));
});

}

return (new cljs.core.async.t_cljs$core$async46827(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46847 = arguments.length;
switch (G__46847) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45083__auto___48171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_46869){
var state_val_46870 = (state_46869[(1)]);
if((state_val_46870 === (7))){
var inst_46865 = (state_46869[(2)]);
var state_46869__$1 = state_46869;
var statearr_46871_48172 = state_46869__$1;
(statearr_46871_48172[(2)] = inst_46865);

(statearr_46871_48172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46870 === (1))){
var state_46869__$1 = state_46869;
var statearr_46872_48173 = state_46869__$1;
(statearr_46872_48173[(2)] = null);

(statearr_46872_48173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46870 === (4))){
var inst_46851 = (state_46869[(7)]);
var inst_46851__$1 = (state_46869[(2)]);
var inst_46852 = (inst_46851__$1 == null);
var state_46869__$1 = (function (){var statearr_46873 = state_46869;
(statearr_46873[(7)] = inst_46851__$1);

return statearr_46873;
})();
if(cljs.core.truth_(inst_46852)){
var statearr_46875_48174 = state_46869__$1;
(statearr_46875_48174[(1)] = (5));

} else {
var statearr_46876_48175 = state_46869__$1;
(statearr_46876_48175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46870 === (6))){
var inst_46851 = (state_46869[(7)]);
var inst_46856 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46851) : p.call(null,inst_46851));
var state_46869__$1 = state_46869;
if(cljs.core.truth_(inst_46856)){
var statearr_46878_48184 = state_46869__$1;
(statearr_46878_48184[(1)] = (8));

} else {
var statearr_46879_48185 = state_46869__$1;
(statearr_46879_48185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46870 === (3))){
var inst_46867 = (state_46869[(2)]);
var state_46869__$1 = state_46869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46869__$1,inst_46867);
} else {
if((state_val_46870 === (2))){
var state_46869__$1 = state_46869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46869__$1,(4),ch);
} else {
if((state_val_46870 === (11))){
var inst_46859 = (state_46869[(2)]);
var state_46869__$1 = state_46869;
var statearr_46880_48186 = state_46869__$1;
(statearr_46880_48186[(2)] = inst_46859);

(statearr_46880_48186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46870 === (9))){
var state_46869__$1 = state_46869;
var statearr_46881_48187 = state_46869__$1;
(statearr_46881_48187[(2)] = null);

(statearr_46881_48187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46870 === (5))){
var inst_46854 = cljs.core.async.close_BANG_(out);
var state_46869__$1 = state_46869;
var statearr_46882_48188 = state_46869__$1;
(statearr_46882_48188[(2)] = inst_46854);

(statearr_46882_48188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46870 === (10))){
var inst_46862 = (state_46869[(2)]);
var state_46869__$1 = (function (){var statearr_46883 = state_46869;
(statearr_46883[(8)] = inst_46862);

return statearr_46883;
})();
var statearr_46884_48189 = state_46869__$1;
(statearr_46884_48189[(2)] = null);

(statearr_46884_48189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46870 === (8))){
var inst_46851 = (state_46869[(7)]);
var state_46869__$1 = state_46869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46869__$1,(11),out,inst_46851);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44889__auto__ = null;
var cljs$core$async$state_machine__44889__auto____0 = (function (){
var statearr_46885 = [null,null,null,null,null,null,null,null,null];
(statearr_46885[(0)] = cljs$core$async$state_machine__44889__auto__);

(statearr_46885[(1)] = (1));

return statearr_46885;
});
var cljs$core$async$state_machine__44889__auto____1 = (function (state_46869){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_46869);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e46886){var ex__44892__auto__ = e46886;
var statearr_46887_48190 = state_46869;
(statearr_46887_48190[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_46869[(4)]))){
var statearr_46888_48191 = state_46869;
(statearr_46888_48191[(1)] = cljs.core.first((state_46869[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48192 = state_46869;
state_46869 = G__48192;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$state_machine__44889__auto__ = function(state_46869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44889__auto____1.call(this,state_46869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44889__auto____0;
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44889__auto____1;
return cljs$core$async$state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_46889 = f__45084__auto__();
(statearr_46889[(6)] = c__45083__auto___48171);

return statearr_46889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46891 = arguments.length;
switch (G__46891) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45083__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_46954){
var state_val_46956 = (state_46954[(1)]);
if((state_val_46956 === (7))){
var inst_46949 = (state_46954[(2)]);
var state_46954__$1 = state_46954;
var statearr_46957_48200 = state_46954__$1;
(statearr_46957_48200[(2)] = inst_46949);

(statearr_46957_48200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (20))){
var inst_46919 = (state_46954[(7)]);
var inst_46930 = (state_46954[(2)]);
var inst_46931 = cljs.core.next(inst_46919);
var inst_46905 = inst_46931;
var inst_46906 = null;
var inst_46907 = (0);
var inst_46908 = (0);
var state_46954__$1 = (function (){var statearr_46958 = state_46954;
(statearr_46958[(8)] = inst_46905);

(statearr_46958[(9)] = inst_46930);

(statearr_46958[(10)] = inst_46906);

(statearr_46958[(11)] = inst_46908);

(statearr_46958[(12)] = inst_46907);

return statearr_46958;
})();
var statearr_46959_48201 = state_46954__$1;
(statearr_46959_48201[(2)] = null);

(statearr_46959_48201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (1))){
var state_46954__$1 = state_46954;
var statearr_46960_48202 = state_46954__$1;
(statearr_46960_48202[(2)] = null);

(statearr_46960_48202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (4))){
var inst_46894 = (state_46954[(13)]);
var inst_46894__$1 = (state_46954[(2)]);
var inst_46895 = (inst_46894__$1 == null);
var state_46954__$1 = (function (){var statearr_46962 = state_46954;
(statearr_46962[(13)] = inst_46894__$1);

return statearr_46962;
})();
if(cljs.core.truth_(inst_46895)){
var statearr_46963_48203 = state_46954__$1;
(statearr_46963_48203[(1)] = (5));

} else {
var statearr_46965_48204 = state_46954__$1;
(statearr_46965_48204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (15))){
var state_46954__$1 = state_46954;
var statearr_46969_48205 = state_46954__$1;
(statearr_46969_48205[(2)] = null);

(statearr_46969_48205[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (21))){
var state_46954__$1 = state_46954;
var statearr_46970_48206 = state_46954__$1;
(statearr_46970_48206[(2)] = null);

(statearr_46970_48206[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (13))){
var inst_46905 = (state_46954[(8)]);
var inst_46906 = (state_46954[(10)]);
var inst_46908 = (state_46954[(11)]);
var inst_46907 = (state_46954[(12)]);
var inst_46915 = (state_46954[(2)]);
var inst_46916 = (inst_46908 + (1));
var tmp46966 = inst_46905;
var tmp46967 = inst_46906;
var tmp46968 = inst_46907;
var inst_46905__$1 = tmp46966;
var inst_46906__$1 = tmp46967;
var inst_46907__$1 = tmp46968;
var inst_46908__$1 = inst_46916;
var state_46954__$1 = (function (){var statearr_46971 = state_46954;
(statearr_46971[(8)] = inst_46905__$1);

(statearr_46971[(10)] = inst_46906__$1);

(statearr_46971[(14)] = inst_46915);

(statearr_46971[(11)] = inst_46908__$1);

(statearr_46971[(12)] = inst_46907__$1);

return statearr_46971;
})();
var statearr_46972_48207 = state_46954__$1;
(statearr_46972_48207[(2)] = null);

(statearr_46972_48207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (22))){
var state_46954__$1 = state_46954;
var statearr_46973_48208 = state_46954__$1;
(statearr_46973_48208[(2)] = null);

(statearr_46973_48208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (6))){
var inst_46894 = (state_46954[(13)]);
var inst_46903 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46894) : f.call(null,inst_46894));
var inst_46904 = cljs.core.seq(inst_46903);
var inst_46905 = inst_46904;
var inst_46906 = null;
var inst_46907 = (0);
var inst_46908 = (0);
var state_46954__$1 = (function (){var statearr_46976 = state_46954;
(statearr_46976[(8)] = inst_46905);

(statearr_46976[(10)] = inst_46906);

(statearr_46976[(11)] = inst_46908);

(statearr_46976[(12)] = inst_46907);

return statearr_46976;
})();
var statearr_46977_48209 = state_46954__$1;
(statearr_46977_48209[(2)] = null);

(statearr_46977_48209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (17))){
var inst_46919 = (state_46954[(7)]);
var inst_46923 = cljs.core.chunk_first(inst_46919);
var inst_46924 = cljs.core.chunk_rest(inst_46919);
var inst_46925 = cljs.core.count(inst_46923);
var inst_46905 = inst_46924;
var inst_46906 = inst_46923;
var inst_46907 = inst_46925;
var inst_46908 = (0);
var state_46954__$1 = (function (){var statearr_46978 = state_46954;
(statearr_46978[(8)] = inst_46905);

(statearr_46978[(10)] = inst_46906);

(statearr_46978[(11)] = inst_46908);

(statearr_46978[(12)] = inst_46907);

return statearr_46978;
})();
var statearr_46979_48210 = state_46954__$1;
(statearr_46979_48210[(2)] = null);

(statearr_46979_48210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (3))){
var inst_46951 = (state_46954[(2)]);
var state_46954__$1 = state_46954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46954__$1,inst_46951);
} else {
if((state_val_46956 === (12))){
var inst_46939 = (state_46954[(2)]);
var state_46954__$1 = state_46954;
var statearr_46980_48211 = state_46954__$1;
(statearr_46980_48211[(2)] = inst_46939);

(statearr_46980_48211[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (2))){
var state_46954__$1 = state_46954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46954__$1,(4),in$);
} else {
if((state_val_46956 === (23))){
var inst_46947 = (state_46954[(2)]);
var state_46954__$1 = state_46954;
var statearr_46981_48214 = state_46954__$1;
(statearr_46981_48214[(2)] = inst_46947);

(statearr_46981_48214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (19))){
var inst_46934 = (state_46954[(2)]);
var state_46954__$1 = state_46954;
var statearr_46982_48216 = state_46954__$1;
(statearr_46982_48216[(2)] = inst_46934);

(statearr_46982_48216[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (11))){
var inst_46905 = (state_46954[(8)]);
var inst_46919 = (state_46954[(7)]);
var inst_46919__$1 = cljs.core.seq(inst_46905);
var state_46954__$1 = (function (){var statearr_46983 = state_46954;
(statearr_46983[(7)] = inst_46919__$1);

return statearr_46983;
})();
if(inst_46919__$1){
var statearr_46984_48220 = state_46954__$1;
(statearr_46984_48220[(1)] = (14));

} else {
var statearr_46985_48221 = state_46954__$1;
(statearr_46985_48221[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (9))){
var inst_46941 = (state_46954[(2)]);
var inst_46942 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46954__$1 = (function (){var statearr_46986 = state_46954;
(statearr_46986[(15)] = inst_46941);

return statearr_46986;
})();
if(cljs.core.truth_(inst_46942)){
var statearr_46987_48222 = state_46954__$1;
(statearr_46987_48222[(1)] = (21));

} else {
var statearr_46988_48223 = state_46954__$1;
(statearr_46988_48223[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (5))){
var inst_46897 = cljs.core.async.close_BANG_(out);
var state_46954__$1 = state_46954;
var statearr_46989_48224 = state_46954__$1;
(statearr_46989_48224[(2)] = inst_46897);

(statearr_46989_48224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (14))){
var inst_46919 = (state_46954[(7)]);
var inst_46921 = cljs.core.chunked_seq_QMARK_(inst_46919);
var state_46954__$1 = state_46954;
if(inst_46921){
var statearr_46990_48228 = state_46954__$1;
(statearr_46990_48228[(1)] = (17));

} else {
var statearr_46992_48229 = state_46954__$1;
(statearr_46992_48229[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (16))){
var inst_46937 = (state_46954[(2)]);
var state_46954__$1 = state_46954;
var statearr_46994_48230 = state_46954__$1;
(statearr_46994_48230[(2)] = inst_46937);

(statearr_46994_48230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (10))){
var inst_46906 = (state_46954[(10)]);
var inst_46908 = (state_46954[(11)]);
var inst_46913 = cljs.core._nth(inst_46906,inst_46908);
var state_46954__$1 = state_46954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46954__$1,(13),out,inst_46913);
} else {
if((state_val_46956 === (18))){
var inst_46919 = (state_46954[(7)]);
var inst_46928 = cljs.core.first(inst_46919);
var state_46954__$1 = state_46954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46954__$1,(20),out,inst_46928);
} else {
if((state_val_46956 === (8))){
var inst_46908 = (state_46954[(11)]);
var inst_46907 = (state_46954[(12)]);
var inst_46910 = (inst_46908 < inst_46907);
var inst_46911 = inst_46910;
var state_46954__$1 = state_46954;
if(cljs.core.truth_(inst_46911)){
var statearr_46995_48233 = state_46954__$1;
(statearr_46995_48233[(1)] = (10));

} else {
var statearr_46996_48234 = state_46954__$1;
(statearr_46996_48234[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44889__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44889__auto____0 = (function (){
var statearr_47001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47001[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44889__auto__);

(statearr_47001[(1)] = (1));

return statearr_47001;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44889__auto____1 = (function (state_46954){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_46954);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e47002){var ex__44892__auto__ = e47002;
var statearr_47003_48235 = state_46954;
(statearr_47003_48235[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_46954[(4)]))){
var statearr_47004_48236 = state_46954;
(statearr_47004_48236[(1)] = cljs.core.first((state_46954[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48237 = state_46954;
state_46954 = G__48237;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44889__auto__ = function(state_46954){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44889__auto____1.call(this,state_46954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44889__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44889__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_47006 = f__45084__auto__();
(statearr_47006[(6)] = c__45083__auto__);

return statearr_47006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));

return c__45083__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47009 = arguments.length;
switch (G__47009) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47014 = arguments.length;
switch (G__47014) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47019 = arguments.length;
switch (G__47019) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45083__auto___48248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_47062){
var state_val_47063 = (state_47062[(1)]);
if((state_val_47063 === (7))){
var inst_47057 = (state_47062[(2)]);
var state_47062__$1 = state_47062;
var statearr_47074_48249 = state_47062__$1;
(statearr_47074_48249[(2)] = inst_47057);

(statearr_47074_48249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (1))){
var inst_47033 = null;
var state_47062__$1 = (function (){var statearr_47075 = state_47062;
(statearr_47075[(7)] = inst_47033);

return statearr_47075;
})();
var statearr_47076_48251 = state_47062__$1;
(statearr_47076_48251[(2)] = null);

(statearr_47076_48251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (4))){
var inst_47042 = (state_47062[(8)]);
var inst_47042__$1 = (state_47062[(2)]);
var inst_47043 = (inst_47042__$1 == null);
var inst_47044 = cljs.core.not(inst_47043);
var state_47062__$1 = (function (){var statearr_47080 = state_47062;
(statearr_47080[(8)] = inst_47042__$1);

return statearr_47080;
})();
if(inst_47044){
var statearr_47081_48253 = state_47062__$1;
(statearr_47081_48253[(1)] = (5));

} else {
var statearr_47082_48254 = state_47062__$1;
(statearr_47082_48254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (6))){
var state_47062__$1 = state_47062;
var statearr_47083_48257 = state_47062__$1;
(statearr_47083_48257[(2)] = null);

(statearr_47083_48257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (3))){
var inst_47059 = (state_47062[(2)]);
var inst_47060 = cljs.core.async.close_BANG_(out);
var state_47062__$1 = (function (){var statearr_47084 = state_47062;
(statearr_47084[(9)] = inst_47059);

return statearr_47084;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47062__$1,inst_47060);
} else {
if((state_val_47063 === (2))){
var state_47062__$1 = state_47062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47062__$1,(4),ch);
} else {
if((state_val_47063 === (11))){
var inst_47042 = (state_47062[(8)]);
var inst_47051 = (state_47062[(2)]);
var inst_47033 = inst_47042;
var state_47062__$1 = (function (){var statearr_47085 = state_47062;
(statearr_47085[(7)] = inst_47033);

(statearr_47085[(10)] = inst_47051);

return statearr_47085;
})();
var statearr_47086_48260 = state_47062__$1;
(statearr_47086_48260[(2)] = null);

(statearr_47086_48260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (9))){
var inst_47042 = (state_47062[(8)]);
var state_47062__$1 = state_47062;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47062__$1,(11),out,inst_47042);
} else {
if((state_val_47063 === (5))){
var inst_47033 = (state_47062[(7)]);
var inst_47042 = (state_47062[(8)]);
var inst_47046 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47042,inst_47033);
var state_47062__$1 = state_47062;
if(inst_47046){
var statearr_47092_48264 = state_47062__$1;
(statearr_47092_48264[(1)] = (8));

} else {
var statearr_47093_48265 = state_47062__$1;
(statearr_47093_48265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (10))){
var inst_47054 = (state_47062[(2)]);
var state_47062__$1 = state_47062;
var statearr_47094_48266 = state_47062__$1;
(statearr_47094_48266[(2)] = inst_47054);

(statearr_47094_48266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47063 === (8))){
var inst_47033 = (state_47062[(7)]);
var tmp47088 = inst_47033;
var inst_47033__$1 = tmp47088;
var state_47062__$1 = (function (){var statearr_47095 = state_47062;
(statearr_47095[(7)] = inst_47033__$1);

return statearr_47095;
})();
var statearr_47096_48267 = state_47062__$1;
(statearr_47096_48267[(2)] = null);

(statearr_47096_48267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44889__auto__ = null;
var cljs$core$async$state_machine__44889__auto____0 = (function (){
var statearr_47097 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47097[(0)] = cljs$core$async$state_machine__44889__auto__);

(statearr_47097[(1)] = (1));

return statearr_47097;
});
var cljs$core$async$state_machine__44889__auto____1 = (function (state_47062){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_47062);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e47098){var ex__44892__auto__ = e47098;
var statearr_47099_48268 = state_47062;
(statearr_47099_48268[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_47062[(4)]))){
var statearr_47100_48269 = state_47062;
(statearr_47100_48269[(1)] = cljs.core.first((state_47062[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48270 = state_47062;
state_47062 = G__48270;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$state_machine__44889__auto__ = function(state_47062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44889__auto____1.call(this,state_47062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44889__auto____0;
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44889__auto____1;
return cljs$core$async$state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_47101 = f__45084__auto__();
(statearr_47101[(6)] = c__45083__auto___48248);

return statearr_47101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47109 = arguments.length;
switch (G__47109) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45083__auto___48272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_47149){
var state_val_47150 = (state_47149[(1)]);
if((state_val_47150 === (7))){
var inst_47145 = (state_47149[(2)]);
var state_47149__$1 = state_47149;
var statearr_47151_48273 = state_47149__$1;
(statearr_47151_48273[(2)] = inst_47145);

(statearr_47151_48273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47150 === (1))){
var inst_47112 = (new Array(n));
var inst_47113 = inst_47112;
var inst_47114 = (0);
var state_47149__$1 = (function (){var statearr_47152 = state_47149;
(statearr_47152[(7)] = inst_47114);

(statearr_47152[(8)] = inst_47113);

return statearr_47152;
})();
var statearr_47153_48274 = state_47149__$1;
(statearr_47153_48274[(2)] = null);

(statearr_47153_48274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47150 === (4))){
var inst_47117 = (state_47149[(9)]);
var inst_47117__$1 = (state_47149[(2)]);
var inst_47118 = (inst_47117__$1 == null);
var inst_47119 = cljs.core.not(inst_47118);
var state_47149__$1 = (function (){var statearr_47154 = state_47149;
(statearr_47154[(9)] = inst_47117__$1);

return statearr_47154;
})();
if(inst_47119){
var statearr_47155_48275 = state_47149__$1;
(statearr_47155_48275[(1)] = (5));

} else {
var statearr_47156_48276 = state_47149__$1;
(statearr_47156_48276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47150 === (15))){
var inst_47139 = (state_47149[(2)]);
var state_47149__$1 = state_47149;
var statearr_47158_48277 = state_47149__$1;
(statearr_47158_48277[(2)] = inst_47139);

(statearr_47158_48277[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47150 === (13))){
var state_47149__$1 = state_47149;
var statearr_47160_48278 = state_47149__$1;
(statearr_47160_48278[(2)] = null);

(statearr_47160_48278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47150 === (6))){
var inst_47114 = (state_47149[(7)]);
var inst_47135 = (inst_47114 > (0));
var state_47149__$1 = state_47149;
if(cljs.core.truth_(inst_47135)){
var statearr_47161_48279 = state_47149__$1;
(statearr_47161_48279[(1)] = (12));

} else {
var statearr_47162_48280 = state_47149__$1;
(statearr_47162_48280[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47150 === (3))){
var inst_47147 = (state_47149[(2)]);
var state_47149__$1 = state_47149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47149__$1,inst_47147);
} else {
if((state_val_47150 === (12))){
var inst_47113 = (state_47149[(8)]);
var inst_47137 = cljs.core.vec(inst_47113);
var state_47149__$1 = state_47149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47149__$1,(15),out,inst_47137);
} else {
if((state_val_47150 === (2))){
var state_47149__$1 = state_47149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47149__$1,(4),ch);
} else {
if((state_val_47150 === (11))){
var inst_47129 = (state_47149[(2)]);
var inst_47130 = (new Array(n));
var inst_47113 = inst_47130;
var inst_47114 = (0);
var state_47149__$1 = (function (){var statearr_47165 = state_47149;
(statearr_47165[(10)] = inst_47129);

(statearr_47165[(7)] = inst_47114);

(statearr_47165[(8)] = inst_47113);

return statearr_47165;
})();
var statearr_47169_48282 = state_47149__$1;
(statearr_47169_48282[(2)] = null);

(statearr_47169_48282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47150 === (9))){
var inst_47113 = (state_47149[(8)]);
var inst_47127 = cljs.core.vec(inst_47113);
var state_47149__$1 = state_47149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47149__$1,(11),out,inst_47127);
} else {
if((state_val_47150 === (5))){
var inst_47114 = (state_47149[(7)]);
var inst_47117 = (state_47149[(9)]);
var inst_47122 = (state_47149[(11)]);
var inst_47113 = (state_47149[(8)]);
var inst_47121 = (inst_47113[inst_47114] = inst_47117);
var inst_47122__$1 = (inst_47114 + (1));
var inst_47123 = (inst_47122__$1 < n);
var state_47149__$1 = (function (){var statearr_47170 = state_47149;
(statearr_47170[(11)] = inst_47122__$1);

(statearr_47170[(12)] = inst_47121);

return statearr_47170;
})();
if(cljs.core.truth_(inst_47123)){
var statearr_47171_48284 = state_47149__$1;
(statearr_47171_48284[(1)] = (8));

} else {
var statearr_47172_48285 = state_47149__$1;
(statearr_47172_48285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47150 === (14))){
var inst_47142 = (state_47149[(2)]);
var inst_47143 = cljs.core.async.close_BANG_(out);
var state_47149__$1 = (function (){var statearr_47174 = state_47149;
(statearr_47174[(13)] = inst_47142);

return statearr_47174;
})();
var statearr_47175_48286 = state_47149__$1;
(statearr_47175_48286[(2)] = inst_47143);

(statearr_47175_48286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47150 === (10))){
var inst_47133 = (state_47149[(2)]);
var state_47149__$1 = state_47149;
var statearr_47176_48288 = state_47149__$1;
(statearr_47176_48288[(2)] = inst_47133);

(statearr_47176_48288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47150 === (8))){
var inst_47122 = (state_47149[(11)]);
var inst_47113 = (state_47149[(8)]);
var tmp47173 = inst_47113;
var inst_47113__$1 = tmp47173;
var inst_47114 = inst_47122;
var state_47149__$1 = (function (){var statearr_47177 = state_47149;
(statearr_47177[(7)] = inst_47114);

(statearr_47177[(8)] = inst_47113__$1);

return statearr_47177;
})();
var statearr_47178_48291 = state_47149__$1;
(statearr_47178_48291[(2)] = null);

(statearr_47178_48291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44889__auto__ = null;
var cljs$core$async$state_machine__44889__auto____0 = (function (){
var statearr_47179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47179[(0)] = cljs$core$async$state_machine__44889__auto__);

(statearr_47179[(1)] = (1));

return statearr_47179;
});
var cljs$core$async$state_machine__44889__auto____1 = (function (state_47149){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_47149);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e47180){var ex__44892__auto__ = e47180;
var statearr_47181_48292 = state_47149;
(statearr_47181_48292[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_47149[(4)]))){
var statearr_47182_48293 = state_47149;
(statearr_47182_48293[(1)] = cljs.core.first((state_47149[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48294 = state_47149;
state_47149 = G__48294;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$state_machine__44889__auto__ = function(state_47149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44889__auto____1.call(this,state_47149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44889__auto____0;
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44889__auto____1;
return cljs$core$async$state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_47183 = f__45084__auto__();
(statearr_47183[(6)] = c__45083__auto___48272);

return statearr_47183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47185 = arguments.length;
switch (G__47185) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45083__auto___48298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45084__auto__ = (function (){var switch__44888__auto__ = (function (state_47237){
var state_val_47238 = (state_47237[(1)]);
if((state_val_47238 === (7))){
var inst_47233 = (state_47237[(2)]);
var state_47237__$1 = state_47237;
var statearr_47240_48300 = state_47237__$1;
(statearr_47240_48300[(2)] = inst_47233);

(statearr_47240_48300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (1))){
var inst_47191 = [];
var inst_47192 = inst_47191;
var inst_47193 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47237__$1 = (function (){var statearr_47242 = state_47237;
(statearr_47242[(7)] = inst_47192);

(statearr_47242[(8)] = inst_47193);

return statearr_47242;
})();
var statearr_47246_48301 = state_47237__$1;
(statearr_47246_48301[(2)] = null);

(statearr_47246_48301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (4))){
var inst_47196 = (state_47237[(9)]);
var inst_47196__$1 = (state_47237[(2)]);
var inst_47197 = (inst_47196__$1 == null);
var inst_47198 = cljs.core.not(inst_47197);
var state_47237__$1 = (function (){var statearr_47247 = state_47237;
(statearr_47247[(9)] = inst_47196__$1);

return statearr_47247;
})();
if(inst_47198){
var statearr_47248_48303 = state_47237__$1;
(statearr_47248_48303[(1)] = (5));

} else {
var statearr_47249_48304 = state_47237__$1;
(statearr_47249_48304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (15))){
var inst_47192 = (state_47237[(7)]);
var inst_47225 = cljs.core.vec(inst_47192);
var state_47237__$1 = state_47237;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47237__$1,(18),out,inst_47225);
} else {
if((state_val_47238 === (13))){
var inst_47220 = (state_47237[(2)]);
var state_47237__$1 = state_47237;
var statearr_47250_48306 = state_47237__$1;
(statearr_47250_48306[(2)] = inst_47220);

(statearr_47250_48306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (6))){
var inst_47192 = (state_47237[(7)]);
var inst_47222 = inst_47192.length;
var inst_47223 = (inst_47222 > (0));
var state_47237__$1 = state_47237;
if(cljs.core.truth_(inst_47223)){
var statearr_47251_48307 = state_47237__$1;
(statearr_47251_48307[(1)] = (15));

} else {
var statearr_47252_48308 = state_47237__$1;
(statearr_47252_48308[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (17))){
var inst_47230 = (state_47237[(2)]);
var inst_47231 = cljs.core.async.close_BANG_(out);
var state_47237__$1 = (function (){var statearr_47253 = state_47237;
(statearr_47253[(10)] = inst_47230);

return statearr_47253;
})();
var statearr_47254_48309 = state_47237__$1;
(statearr_47254_48309[(2)] = inst_47231);

(statearr_47254_48309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (3))){
var inst_47235 = (state_47237[(2)]);
var state_47237__$1 = state_47237;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47237__$1,inst_47235);
} else {
if((state_val_47238 === (12))){
var inst_47192 = (state_47237[(7)]);
var inst_47212 = cljs.core.vec(inst_47192);
var state_47237__$1 = state_47237;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47237__$1,(14),out,inst_47212);
} else {
if((state_val_47238 === (2))){
var state_47237__$1 = state_47237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47237__$1,(4),ch);
} else {
if((state_val_47238 === (11))){
var inst_47200 = (state_47237[(11)]);
var inst_47196 = (state_47237[(9)]);
var inst_47192 = (state_47237[(7)]);
var inst_47208 = inst_47192.push(inst_47196);
var tmp47255 = inst_47192;
var inst_47192__$1 = tmp47255;
var inst_47193 = inst_47200;
var state_47237__$1 = (function (){var statearr_47256 = state_47237;
(statearr_47256[(12)] = inst_47208);

(statearr_47256[(7)] = inst_47192__$1);

(statearr_47256[(8)] = inst_47193);

return statearr_47256;
})();
var statearr_47257_48311 = state_47237__$1;
(statearr_47257_48311[(2)] = null);

(statearr_47257_48311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (9))){
var inst_47193 = (state_47237[(8)]);
var inst_47204 = cljs.core.keyword_identical_QMARK_(inst_47193,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_47237__$1 = state_47237;
var statearr_47258_48312 = state_47237__$1;
(statearr_47258_48312[(2)] = inst_47204);

(statearr_47258_48312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (5))){
var inst_47200 = (state_47237[(11)]);
var inst_47201 = (state_47237[(13)]);
var inst_47196 = (state_47237[(9)]);
var inst_47193 = (state_47237[(8)]);
var inst_47200__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47196) : f.call(null,inst_47196));
var inst_47201__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47200__$1,inst_47193);
var state_47237__$1 = (function (){var statearr_47263 = state_47237;
(statearr_47263[(11)] = inst_47200__$1);

(statearr_47263[(13)] = inst_47201__$1);

return statearr_47263;
})();
if(inst_47201__$1){
var statearr_47264_48314 = state_47237__$1;
(statearr_47264_48314[(1)] = (8));

} else {
var statearr_47265_48315 = state_47237__$1;
(statearr_47265_48315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (14))){
var inst_47200 = (state_47237[(11)]);
var inst_47196 = (state_47237[(9)]);
var inst_47214 = (state_47237[(2)]);
var inst_47215 = [];
var inst_47216 = inst_47215.push(inst_47196);
var inst_47192 = inst_47215;
var inst_47193 = inst_47200;
var state_47237__$1 = (function (){var statearr_47266 = state_47237;
(statearr_47266[(7)] = inst_47192);

(statearr_47266[(14)] = inst_47216);

(statearr_47266[(8)] = inst_47193);

(statearr_47266[(15)] = inst_47214);

return statearr_47266;
})();
var statearr_47267_48324 = state_47237__$1;
(statearr_47267_48324[(2)] = null);

(statearr_47267_48324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (16))){
var state_47237__$1 = state_47237;
var statearr_47272_48330 = state_47237__$1;
(statearr_47272_48330[(2)] = null);

(statearr_47272_48330[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (10))){
var inst_47206 = (state_47237[(2)]);
var state_47237__$1 = state_47237;
if(cljs.core.truth_(inst_47206)){
var statearr_47273_48335 = state_47237__$1;
(statearr_47273_48335[(1)] = (11));

} else {
var statearr_47274_48337 = state_47237__$1;
(statearr_47274_48337[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (18))){
var inst_47227 = (state_47237[(2)]);
var state_47237__$1 = state_47237;
var statearr_47275_48338 = state_47237__$1;
(statearr_47275_48338[(2)] = inst_47227);

(statearr_47275_48338[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (8))){
var inst_47201 = (state_47237[(13)]);
var state_47237__$1 = state_47237;
var statearr_47276_48339 = state_47237__$1;
(statearr_47276_48339[(2)] = inst_47201);

(statearr_47276_48339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44889__auto__ = null;
var cljs$core$async$state_machine__44889__auto____0 = (function (){
var statearr_47277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47277[(0)] = cljs$core$async$state_machine__44889__auto__);

(statearr_47277[(1)] = (1));

return statearr_47277;
});
var cljs$core$async$state_machine__44889__auto____1 = (function (state_47237){
while(true){
var ret_value__44890__auto__ = (function (){try{while(true){
var result__44891__auto__ = switch__44888__auto__(state_47237);
if(cljs.core.keyword_identical_QMARK_(result__44891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44891__auto__;
}
break;
}
}catch (e47278){var ex__44892__auto__ = e47278;
var statearr_47279_48344 = state_47237;
(statearr_47279_48344[(2)] = ex__44892__auto__);


if(cljs.core.seq((state_47237[(4)]))){
var statearr_47280_48345 = state_47237;
(statearr_47280_48345[(1)] = cljs.core.first((state_47237[(4)])));

} else {
throw ex__44892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48346 = state_47237;
state_47237 = G__48346;
continue;
} else {
return ret_value__44890__auto__;
}
break;
}
});
cljs$core$async$state_machine__44889__auto__ = function(state_47237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44889__auto____1.call(this,state_47237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44889__auto____0;
cljs$core$async$state_machine__44889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44889__auto____1;
return cljs$core$async$state_machine__44889__auto__;
})()
})();
var state__45085__auto__ = (function (){var statearr_47281 = f__45084__auto__();
(statearr_47281[(6)] = c__45083__auto___48298);

return statearr_47281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45085__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
