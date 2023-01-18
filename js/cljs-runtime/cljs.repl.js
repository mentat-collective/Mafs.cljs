import "./cljs_env.js";
goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__48513){
var map__48525 = p__48513;
var map__48525__$1 = cljs.core.__destructure_map(map__48525);
var m = map__48525__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48525__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48525__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__48548_48897 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48549_48898 = null;
var count__48550_48899 = (0);
var i__48551_48900 = (0);
while(true){
if((i__48551_48900 < count__48550_48899)){
var f_48901 = chunk__48549_48898.cljs$core$IIndexed$_nth$arity$2(null,i__48551_48900);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_48901], 0));


var G__48902 = seq__48548_48897;
var G__48903 = chunk__48549_48898;
var G__48904 = count__48550_48899;
var G__48905 = (i__48551_48900 + (1));
seq__48548_48897 = G__48902;
chunk__48549_48898 = G__48903;
count__48550_48899 = G__48904;
i__48551_48900 = G__48905;
continue;
} else {
var temp__5753__auto___48906 = cljs.core.seq(seq__48548_48897);
if(temp__5753__auto___48906){
var seq__48548_48907__$1 = temp__5753__auto___48906;
if(cljs.core.chunked_seq_QMARK_(seq__48548_48907__$1)){
var c__5568__auto___48908 = cljs.core.chunk_first(seq__48548_48907__$1);
var G__48909 = cljs.core.chunk_rest(seq__48548_48907__$1);
var G__48910 = c__5568__auto___48908;
var G__48911 = cljs.core.count(c__5568__auto___48908);
var G__48912 = (0);
seq__48548_48897 = G__48909;
chunk__48549_48898 = G__48910;
count__48550_48899 = G__48911;
i__48551_48900 = G__48912;
continue;
} else {
var f_48913 = cljs.core.first(seq__48548_48907__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_48913], 0));


var G__48915 = cljs.core.next(seq__48548_48907__$1);
var G__48916 = null;
var G__48917 = (0);
var G__48918 = (0);
seq__48548_48897 = G__48915;
chunk__48549_48898 = G__48916;
count__48550_48899 = G__48917;
i__48551_48900 = G__48918;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_48919 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_48919], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_48919)))?cljs.core.second(arglists_48919):arglists_48919)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__48652_48920 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48653_48921 = null;
var count__48654_48922 = (0);
var i__48655_48923 = (0);
while(true){
if((i__48655_48923 < count__48654_48922)){
var vec__48667_48924 = chunk__48653_48921.cljs$core$IIndexed$_nth$arity$2(null,i__48655_48923);
var name_48925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48667_48924,(0),null);
var map__48670_48926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48667_48924,(1),null);
var map__48670_48927__$1 = cljs.core.__destructure_map(map__48670_48926);
var doc_48928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48670_48927__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48670_48927__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_48925], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_48929], 0));

if(cljs.core.truth_(doc_48928)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_48928], 0));
} else {
}


var G__48934 = seq__48652_48920;
var G__48935 = chunk__48653_48921;
var G__48936 = count__48654_48922;
var G__48937 = (i__48655_48923 + (1));
seq__48652_48920 = G__48934;
chunk__48653_48921 = G__48935;
count__48654_48922 = G__48936;
i__48655_48923 = G__48937;
continue;
} else {
var temp__5753__auto___48938 = cljs.core.seq(seq__48652_48920);
if(temp__5753__auto___48938){
var seq__48652_48939__$1 = temp__5753__auto___48938;
if(cljs.core.chunked_seq_QMARK_(seq__48652_48939__$1)){
var c__5568__auto___48940 = cljs.core.chunk_first(seq__48652_48939__$1);
var G__48941 = cljs.core.chunk_rest(seq__48652_48939__$1);
var G__48942 = c__5568__auto___48940;
var G__48943 = cljs.core.count(c__5568__auto___48940);
var G__48944 = (0);
seq__48652_48920 = G__48941;
chunk__48653_48921 = G__48942;
count__48654_48922 = G__48943;
i__48655_48923 = G__48944;
continue;
} else {
var vec__48671_48945 = cljs.core.first(seq__48652_48939__$1);
var name_48946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48671_48945,(0),null);
var map__48674_48947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48671_48945,(1),null);
var map__48674_48948__$1 = cljs.core.__destructure_map(map__48674_48947);
var doc_48949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48674_48948__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48674_48948__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_48946], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_48950], 0));

if(cljs.core.truth_(doc_48949)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_48949], 0));
} else {
}


var G__48952 = cljs.core.next(seq__48652_48939__$1);
var G__48953 = null;
var G__48954 = (0);
var G__48955 = (0);
seq__48652_48920 = G__48952;
chunk__48653_48921 = G__48953;
count__48654_48922 = G__48954;
i__48655_48923 = G__48955;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__48679 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__48680 = null;
var count__48681 = (0);
var i__48682 = (0);
while(true){
if((i__48682 < count__48681)){
var role = chunk__48680.cljs$core$IIndexed$_nth$arity$2(null,i__48682);
var temp__5753__auto___48961__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___48961__$1)){
var spec_48962 = temp__5753__auto___48961__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_48962)], 0));
} else {
}


var G__48963 = seq__48679;
var G__48964 = chunk__48680;
var G__48965 = count__48681;
var G__48966 = (i__48682 + (1));
seq__48679 = G__48963;
chunk__48680 = G__48964;
count__48681 = G__48965;
i__48682 = G__48966;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__48679);
if(temp__5753__auto____$1){
var seq__48679__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__48679__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48679__$1);
var G__48971 = cljs.core.chunk_rest(seq__48679__$1);
var G__48972 = c__5568__auto__;
var G__48973 = cljs.core.count(c__5568__auto__);
var G__48974 = (0);
seq__48679 = G__48971;
chunk__48680 = G__48972;
count__48681 = G__48973;
i__48682 = G__48974;
continue;
} else {
var role = cljs.core.first(seq__48679__$1);
var temp__5753__auto___48975__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___48975__$2)){
var spec_48976 = temp__5753__auto___48975__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_48976)], 0));
} else {
}


var G__48977 = cljs.core.next(seq__48679__$1);
var G__48978 = null;
var G__48979 = (0);
var G__48980 = (0);
seq__48679 = G__48977;
chunk__48680 = G__48978;
count__48681 = G__48979;
i__48682 = G__48980;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__48985 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__48986 = cljs.core.ex_cause(t);
via = G__48985;
t = G__48986;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__48734 = datafied_throwable;
var map__48734__$1 = cljs.core.__destructure_map(map__48734);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48734__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48734__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48734__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__48735 = cljs.core.last(via);
var map__48735__$1 = cljs.core.__destructure_map(map__48735);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48735__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48735__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48735__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__48736 = data;
var map__48736__$1 = cljs.core.__destructure_map(map__48736);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48736__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48736__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48736__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__48737 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__48737__$1 = cljs.core.__destructure_map(map__48737);
var top_data = map__48737__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48737__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__48751 = phase;
var G__48751__$1 = (((G__48751 instanceof cljs.core.Keyword))?G__48751.fqn:null);
switch (G__48751__$1) {
case "read-source":
var map__48753 = data;
var map__48753__$1 = cljs.core.__destructure_map(map__48753);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48753__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48753__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__48755 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__48755__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48755,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__48755);
var G__48755__$2 = (cljs.core.truth_((function (){var fexpr__48760 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__48760.cljs$core$IFn$_invoke$arity$1 ? fexpr__48760.cljs$core$IFn$_invoke$arity$1(source) : fexpr__48760.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48755__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__48755__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48755__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__48755__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__48762 = top_data;
var G__48762__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48762,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__48762);
var G__48762__$2 = (cljs.core.truth_((function (){var fexpr__48763 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__48763.cljs$core$IFn$_invoke$arity$1 ? fexpr__48763.cljs$core$IFn$_invoke$arity$1(source) : fexpr__48763.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48762__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__48762__$1);
var G__48762__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48762__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__48762__$2);
var G__48762__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48762__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__48762__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48762__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__48762__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__48772 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48772,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48772,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48772,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48772,(3),null);
var G__48779 = top_data;
var G__48779__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48779,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__48779);
var G__48779__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48779__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__48779__$1);
var G__48779__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48779__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__48779__$2);
var G__48779__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48779__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__48779__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48779__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__48779__$4;
}

break;
case "execution":
var vec__48787 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48787,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48787,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48787,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48787,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__48726_SHARP_){
var or__5045__auto__ = (p1__48726_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__48795 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__48795.cljs$core$IFn$_invoke$arity$1 ? fexpr__48795.cljs$core$IFn$_invoke$arity$1(p1__48726_SHARP_) : fexpr__48795.call(null,p1__48726_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__48797 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__48797__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48797,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__48797);
var G__48797__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48797__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__48797__$1);
var G__48797__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48797__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__48797__$2);
var G__48797__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48797__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__48797__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48797__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__48797__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48751__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__48819){
var map__48820 = p__48819;
var map__48820__$1 = cljs.core.__destructure_map(map__48820);
var triage_data = map__48820__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48820__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48820__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48820__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48820__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48820__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48820__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48820__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48820__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__48829 = phase;
var G__48829__$1 = (((G__48829 instanceof cljs.core.Keyword))?G__48829.fqn:null);
switch (G__48829__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__48836 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__48837 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48838 = loc;
var G__48839 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48844_49002 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48845_49003 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48846_49004 = true;
var _STAR_print_fn_STAR__temp_val__48847_49005 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48846_49004);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48847_49005);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48806_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__48806_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48845_49003);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48844_49002);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__48836,G__48837,G__48838,G__48839) : format.call(null,G__48836,G__48837,G__48838,G__48839));

break;
case "macroexpansion":
var G__48859 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__48860 = cause_type;
var G__48861 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48862 = loc;
var G__48863 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48859,G__48860,G__48861,G__48862,G__48863) : format.call(null,G__48859,G__48860,G__48861,G__48862,G__48863));

break;
case "compile-syntax-check":
var G__48864 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__48865 = cause_type;
var G__48866 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48867 = loc;
var G__48868 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48864,G__48865,G__48866,G__48867,G__48868) : format.call(null,G__48864,G__48865,G__48866,G__48867,G__48868));

break;
case "compilation":
var G__48869 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__48870 = cause_type;
var G__48871 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48872 = loc;
var G__48873 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48869,G__48870,G__48871,G__48872,G__48873) : format.call(null,G__48869,G__48870,G__48871,G__48872,G__48873));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__48874 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__48875 = symbol;
var G__48876 = loc;
var G__48877 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48878_49012 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48879_49013 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48880_49014 = true;
var _STAR_print_fn_STAR__temp_val__48881_49015 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48880_49014);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48881_49015);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48813_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__48813_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48879_49013);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48878_49012);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__48874,G__48875,G__48876,G__48877) : format.call(null,G__48874,G__48875,G__48876,G__48877));
} else {
var G__48883 = "Execution error%s at %s(%s).\n%s\n";
var G__48884 = cause_type;
var G__48885 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48886 = loc;
var G__48887 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48883,G__48884,G__48885,G__48886,G__48887) : format.call(null,G__48883,G__48884,G__48885,G__48886,G__48887));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48829__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
