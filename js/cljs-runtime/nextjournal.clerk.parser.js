import "./cljs_env.js";
goog.provide('nextjournal.clerk.parser');
nextjournal.clerk.parser.ns_QMARK_ = (function nextjournal$clerk$parser$ns_QMARK_(form){
return ((cljs.core.seq_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),cljs.core.first(form))));
});
nextjournal.clerk.parser.remove_leading_semicolons = (function nextjournal$clerk$parser$remove_leading_semicolons(s){
return clojure.string.replace(s,/^[;]+/,"");
});
nextjournal.clerk.parser.legacy_doc_visibility = (function nextjournal$clerk$parser$legacy_doc_visibility(form){
var temp__5804__auto__ = new cljs.core.Keyword("nextjournal.clerk","visibility","nextjournal.clerk/visibility",-1860031708).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
if(cljs.core.truth_(temp__5804__auto__)){
var visibility = temp__5804__auto__;
var temp__5804__auto____$1 = (((visibility instanceof cljs.core.Keyword))?cljs.core.PersistentHashSet.createAsIfByAssoc([visibility]):((cljs.core.set_QMARK_(visibility))?visibility:null));
if(cljs.core.truth_(temp__5804__auto____$1)){
var visibility_set = temp__5804__auto____$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),(function (){var or__5045__auto__ = cljs.core.some((function (p1__46907_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(visibility_set,p1__46907_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hide","hide",-596913169),new cljs.core.Keyword(null,"fold","fold",-887461332)], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"show","show",-576705889);
}
})()], null);
} else {
return null;
}
} else {
return null;
}
});
nextjournal.clerk.parser.legacy_form_visibility = (function nextjournal$clerk$parser$legacy_form_visibility(form,visibility){
var temp__5804__auto__ = (((visibility instanceof cljs.core.Keyword))?cljs.core.PersistentHashSet.createAsIfByAssoc([visibility]):((cljs.core.set_QMARK_(visibility))?visibility:null));
if(cljs.core.truth_(temp__5804__auto__)){
var legacy_visibility = temp__5804__auto__;
var visibility_set_SINGLEQUOTE_ = (function (){var G__46913 = legacy_visibility;
if(cljs.core.truth_(new cljs.core.Keyword(null,"hide-ns","hide-ns",-279339071).cljs$core$IFn$_invoke$arity$1(legacy_visibility))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__46913,legacy_visibility,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hide","hide",-596913169)], 0));
} else {
return G__46913;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),(function (){var or__5045__auto__ = cljs.core.some((function (p1__46910_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(visibility_set_SINGLEQUOTE_,p1__46910_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hide","hide",-596913169),new cljs.core.Keyword(null,"fold","fold",-887461332)], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"show","show",-576705889);
}
})()], null),(((function (){var or__5045__auto__ = (function (){var G__46918 = form;
var G__46918__$1 = (((G__46918 == null))?null:cljs.core.meta(G__46918));
var G__46918__$2 = (((G__46918__$1 == null))?null:new cljs.core.Keyword("nextjournal.clerk","viewer","nextjournal.clerk/viewer",484555418).cljs$core$IFn$_invoke$arity$1(G__46918__$1));
var G__46918__$3 = (((G__46918__$2 == null))?null:cljs.core.name(G__46918__$2));
if((G__46918__$3 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__46918__$3,"hide-result");
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ((cljs.core.seq_QMARK_(form)) && ((((cljs.core.first(form) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("hide-result",cljs.core.name(cljs.core.first(form)))))));
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"hide","hide",-596913169)], null):null)], 0));
} else {
return null;
}
});
nextjournal.clerk.parser.visibility_marker_QMARK_ = (function nextjournal$clerk$parser$visibility_marker_QMARK_(form){
return ((cljs.core.map_QMARK_(form)) && (cljs.core.contains_QMARK_(form,new cljs.core.Keyword("nextjournal.clerk","visibility","nextjournal.clerk/visibility",-1860031708))));
});
nextjournal.clerk.parser.parse_visibility = (function nextjournal$clerk$parser$parse_visibility(form,visibility){
var or__5045__auto__ = nextjournal.clerk.parser.legacy_form_visibility(form,visibility);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var temp__5804__auto__ = (function (){var and__5043__auto__ = visibility;
if(cljs.core.truth_(and__5043__auto__)){
var G__46921 = visibility;
if((!(cljs.core.map_QMARK_(visibility)))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"code","code",1586293142)],[G__46921]);
} else {
return G__46921;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var visibility_map = temp__5804__auto__;
if(((cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),cljs.core.keys(visibility_map))) && (cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fold","fold",-887461332),null,new cljs.core.Keyword(null,"hide","hide",-596913169),null,new cljs.core.Keyword(null,"show","show",-576705889),null], null), null),cljs.core.vals(visibility_map))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid `:nextjournal.clerk/visibility`, please pass a map with `:code` and `:result` keys, allowed values are `:hide`, `:show` and `:fold`.",(function (){var G__46932 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),visibility], null);
if(cljs.core.truth_(form)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46932,new cljs.core.Keyword(null,"form","form",-1624062471),form);
} else {
return G__46932;
}
})());
}

return visibility_map;
} else {
return null;
}
}
});
nextjournal.clerk.parser.__GT_visibility = (function nextjournal$clerk$parser$__GT_visibility(form){
if(nextjournal.clerk.parser.visibility_marker_QMARK_(form)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"hide","hide",-596913169),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"hide","hide",-596913169)], null);
} else {
var G__46933 = nextjournal.clerk.parser.parse_visibility(form,new cljs.core.Keyword("nextjournal.clerk","visibility","nextjournal.clerk/visibility",-1860031708).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form)));
if(nextjournal.clerk.parser.ns_QMARK_(form)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__46933,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"hide","hide",-596913169)], null)], 0));
} else {
return G__46933;
}
}
});
nextjournal.clerk.parser.get_doc_setting = (function nextjournal$clerk$parser$get_doc_setting(form,key){
var or__5045__auto__ = ((nextjournal.clerk.parser.ns_QMARK_(form))?(function (){var or__5045__auto__ = cljs.core.some(key,form);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__46936 = cljs.core.meta(cljs.core.second(form));
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__46936) : key.call(null,G__46936));
}
})():null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.map_QMARK_(form)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,key);
} else {
return null;
}
}
});
nextjournal.clerk.parser.__GT_doc_visibility = (function nextjournal$clerk$parser$__GT_doc_visibility(form){
if(cljs.core.truth_((function (){var and__5043__auto__ = nextjournal.clerk.parser.ns_QMARK_(form);
if(and__5043__auto__){
return nextjournal.clerk.parser.legacy_doc_visibility(form);
} else {
return and__5043__auto__;
}
})())){
return nextjournal.clerk.parser.legacy_doc_visibility(form);
} else {
if(((nextjournal.clerk.parser.ns_QMARK_(form)) || (nextjournal.clerk.parser.visibility_marker_QMARK_(form)))){
return nextjournal.clerk.parser.parse_visibility(form,nextjournal.clerk.parser.get_doc_setting(form,new cljs.core.Keyword("nextjournal.clerk","visibility","nextjournal.clerk/visibility",-1860031708)));
} else {
return null;
}
}
});
nextjournal.clerk.parser.parse_error_on_missing_vars = (function nextjournal$clerk$parser$parse_error_on_missing_vars(first_form){
var temp__5806__auto__ = ((nextjournal.clerk.parser.ns_QMARK_(first_form))?nextjournal.clerk.parser.get_doc_setting(first_form,new cljs.core.Keyword("nextjournal.clerk","error-on-missing-vars","nextjournal.clerk/error-on-missing-vars",506551072)):null);
if((temp__5806__auto__ == null)){
if(nextjournal.clerk.parser.ns_QMARK_(first_form)){
return new cljs.core.Keyword(null,"on","on",173873944);
} else {
return new cljs.core.Keyword(null,"off","off",606440789);
}
} else {
var setting = temp__5806__auto__;
if(cljs.core.truth_((function (){var fexpr__46941 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"off","off",606440789),null,new cljs.core.Keyword(null,"on","on",173873944),null], null), null);
return (fexpr__46941.cljs$core$IFn$_invoke$arity$1 ? fexpr__46941.cljs$core$IFn$_invoke$arity$1(setting) : fexpr__46941.call(null,setting));
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid setting `",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([setting], 0)),"` for `:nextjournal.clerk/error-on-missing-vars`. Valid values are `:on` and `:off`."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.clerk","error-on-missing-vars","nextjournal.clerk/error-on-missing-vars",506551072),setting], null));
}

return setting;
}
});
nextjournal.clerk.parser.__GT_doc_settings = (function nextjournal$clerk$parser$__GT_doc_settings(first_form){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ns?","ns?",-1192630279),nextjournal.clerk.parser.ns_QMARK_(first_form),new cljs.core.Keyword(null,"error-on-missing-vars","error-on-missing-vars",1053641043),nextjournal.clerk.parser.parse_error_on_missing_vars(first_form),new cljs.core.Keyword(null,"toc-visibility","toc-visibility",-1781055352),(function (){var or__5045__auto__ = (function (){var G__46948 = new cljs.core.Keyword("nextjournal.clerk","toc","nextjournal.clerk/toc",-1231615888).cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(first_form),((nextjournal.clerk.parser.ns_QMARK_(first_form))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(cljs.core.second(first_form)),cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,first_form))], 0)):null)], 0)));
var fexpr__46947 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),null,true,null], null), null);
return (fexpr__46947.cljs$core$IFn$_invoke$arity$1 ? fexpr__46947.cljs$core$IFn$_invoke$arity$1(G__46948) : fexpr__46947.call(null,G__46948));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return false;
}
})()], null);
});
nextjournal.clerk.parser.__GT_open_graph = (function nextjournal$clerk$parser$__GT_open_graph(p__46955){
var map__46956 = p__46955;
var map__46956__$1 = cljs.core.__destructure_map(map__46956);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46956__$1,new cljs.core.Keyword(null,"title","title",636505583));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46956__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"article:clerk",new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.first(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"doc","doc",1913296891)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paragraph","paragraph",296707709),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(nextjournal.markdown.transform.__GT_text)], 0)),blocks))], null),cljs.core.some((function (p1__46954_SHARP_){
return nextjournal.clerk.parser.get_doc_setting(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(p1__46954_SHARP_),new cljs.core.Keyword("nextjournal.clerk","open-graph","nextjournal.clerk/open-graph",1681164391));
}),blocks)], 0));
});
nextjournal.clerk.parser.add_open_graph_metadata = (function nextjournal$clerk$parser$add_open_graph_metadata(doc){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"open-graph","open-graph",-1193910354),nextjournal.clerk.parser.__GT_open_graph(doc));
});
nextjournal.clerk.parser.add_auto_expand_results = (function nextjournal$clerk$parser$add_auto_expand_results(p__46957){
var map__46959 = p__46957;
var map__46959__$1 = cljs.core.__destructure_map(map__46959);
var doc = map__46959__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46959__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"auto-expand-results?","auto-expand-results?",945863436),cljs.core.some((function (p__46961){
var map__46962 = p__46961;
var map__46962__$1 = cljs.core.__destructure_map(map__46962);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46962__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
if(nextjournal.clerk.parser.ns_QMARK_(form)){
return cljs.core.some(new cljs.core.Keyword("nextjournal.clerk","auto-expand-results?","nextjournal.clerk/auto-expand-results?",1961678817),form);
} else {
return null;
}
}),blocks));
});
nextjournal.clerk.parser.add_css_class = (function nextjournal$clerk$parser$add_css_class(p__46966){
var map__46968 = p__46966;
var map__46968__$1 = cljs.core.__destructure_map(map__46968);
var doc = map__46968__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46968__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"css-class","css-class",-919455334),cljs.core.some((function (p__46969){
var map__46970 = p__46969;
var map__46970__$1 = cljs.core.__destructure_map(map__46970);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46970__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
if(nextjournal.clerk.parser.ns_QMARK_(form)){
return cljs.core.some(new cljs.core.Keyword("nextjournal.clerk","css-class","nextjournal.clerk/css-class",-1936321803),form);
} else {
return null;
}
}),blocks));
});
nextjournal.clerk.parser.markdown_QMARK_ = (function nextjournal$clerk$parser$markdown_QMARK_(p__46971){
var map__46972 = p__46971;
var map__46972__$1 = cljs.core.__destructure_map(map__46972);
var block = map__46972__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46972__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null], null), null),type);
});
nextjournal.clerk.parser.code_QMARK_ = (function nextjournal$clerk$parser$code_QMARK_(p__46973){
var map__46974 = p__46973;
var map__46974__$1 = cljs.core.__destructure_map(map__46974);
var block = map__46974__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46974__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),type);
});
nextjournal.clerk.parser.add_block_visibility = (function nextjournal$clerk$parser$add_block_visibility(p__46975){
var map__46976 = p__46975;
var map__46976__$1 = cljs.core.__destructure_map(map__46976);
var analyzed_doc = map__46976__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46976__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46977,p__46978){
var map__46979 = p__46977;
var map__46979__$1 = cljs.core.__destructure_map(map__46979);
var state = map__46979__$1;
var visibility = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46979__$1,new cljs.core.Keyword(null,"visibility","visibility",1338380893));
var map__46980 = p__46978;
var map__46980__$1 = cljs.core.__destructure_map(map__46980);
var block = map__46980__$1;
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46980__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var visibility_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([visibility,nextjournal.clerk.parser.__GT_doc_visibility(form)], 0));
var G__46983 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.conj,(function (){var G__46984 = block;
if(nextjournal.clerk.parser.code_QMARK_(block)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46984,new cljs.core.Keyword(null,"visibility","visibility",1338380893),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([visibility_SINGLEQUOTE_,nextjournal.clerk.parser.__GT_visibility(form)], 0)));
} else {
return G__46984;
}
})());
if(nextjournal.clerk.parser.code_QMARK_(block)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46983,new cljs.core.Keyword(null,"visibility","visibility",1338380893),visibility_SINGLEQUOTE_);
} else {
return G__46983;
}
}),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(analyzed_doc,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"show","show",-576705889)], null)], 0)),blocks),new cljs.core.Keyword(null,"visibility","visibility",1338380893));
});
nextjournal.clerk.parser.code_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"meta","meta",1499536964),null,new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422),null,new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"token","token",-1211463215),null,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),null,new cljs.core.Keyword(null,"list","list",765357683),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"quote","quote",-262615245),null,new cljs.core.Keyword(null,"deref","deref",-145586795),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null);
nextjournal.clerk.parser.whitespace_on_line_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),null,new cljs.core.Keyword(null,"comma","comma",1699024745),null,new cljs.core.Keyword(null,"comment","comment",532206069),null], null), null);
nextjournal.clerk.parser.markdown_context = (function nextjournal$clerk$parser$markdown_context(){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(nextjournal.markdown.parser.empty_doc,new cljs.core.Keyword(null,"text-tokenizers","text-tokenizers",1311007926),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,nextjournal.markdown.parser.normalize_tokenizer));
});
/**
 * Like `n.markdown.parser/parse` but allows to reuse the same context in successive calls
 */
nextjournal.clerk.parser.parse_markdown = (function nextjournal$clerk$parser$parse_markdown(ctx,md){
return nextjournal.markdown.parser.apply_tokens(ctx,(nextjournal.markdown.tokenize.cljs$core$IFn$_invoke$arity$1 ? nextjournal.markdown.tokenize.cljs$core$IFn$_invoke$arity$1(md) : nextjournal.markdown.tokenize.call(null,md)));
});
nextjournal.clerk.parser.update_markdown_blocks = (function nextjournal$clerk$parser$update_markdown_blocks(p__46993,md){
var map__46994 = p__46993;
var map__46994__$1 = cljs.core.__destructure_map(map__46994);
var state = map__46994__$1;
var md_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46994__$1,new cljs.core.Keyword(null,"md-context","md-context",1050536849));
var map__46995 = md_context;
var map__46995__$1 = cljs.core.__destructure_map(map__46995);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46995__$1,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444));
var doc = nextjournal.clerk.parser.parse_markdown(md_context,md);
var vec__46996 = path;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46996,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46996,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"md-context","md-context",1050536849),doc),new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.select_keys(doc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"content","content",15833224)], null)),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.subvec,(index + (1)))], null));
});
nextjournal.clerk.parser.parse_clojure_string = (function nextjournal$clerk$parser$parse_clojure_string(var_args){
var G__47000 = arguments.length;
switch (G__47000) {
case 1:
return nextjournal.clerk.parser.parse_clojure_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.parser.parse_clojure_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clerk.parser.parse_clojure_string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.parser.parse_clojure_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return nextjournal.clerk.parser.parse_clojure_string.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,s);
}));

(nextjournal.clerk.parser.parse_clojure_string.cljs$core$IFn$_invoke$arity$2 = (function (p__47001,s){
var map__47002 = p__47001;
var map__47002__$1 = cljs.core.__destructure_map(map__47002);
var opts = map__47002__$1;
var doc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47002__$1,new cljs.core.Keyword(null,"doc?","doc?",754571024));
var doc = nextjournal.clerk.parser.parse_clojure_string.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"md-context","md-context",1050536849),nextjournal.clerk.parser.markdown_context()], null),s);
return cljs.core.select_keys((function (){var G__47003 = doc;
if(cljs.core.truth_(doc_QMARK_)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__47003,new cljs.core.Keyword(null,"md-context","md-context",1050536849).cljs$core$IFn$_invoke$arity$1(doc)], 0));
} else {
return G__47003;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"toc","toc",2050089251)], null));
}));

(nextjournal.clerk.parser.parse_clojure_string.cljs$core$IFn$_invoke$arity$3 = (function (p__47004,initial_state,s){
var map__47005 = p__47004;
var map__47005__$1 = cljs.core.__destructure_map(map__47005);
var _opts = map__47005__$1;
var doc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47005__$1,new cljs.core.Keyword(null,"doc?","doc?",754571024));
var G__47008 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial_state,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(rewrite_clj.parser.parse_string_all(s)));
var map__47009 = G__47008;
var map__47009__$1 = cljs.core.__destructure_map(map__47009);
var state = map__47009__$1;
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47009__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47009__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var add_comment_on_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47009__$1,new cljs.core.Keyword(null,"add-comment-on-line?","add-comment-on-line?",-104005565));
var G__47008__$1 = G__47008;
while(true){
var map__47038 = G__47008__$1;
var map__47038__$1 = cljs.core.__destructure_map(map__47038);
var state__$1 = map__47038__$1;
var nodes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47038__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var blocks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47038__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var add_comment_on_line_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47038__$1,new cljs.core.Keyword(null,"add-comment-on-line?","add-comment-on-line?",-104005565));
var temp__5802__auto__ = cljs.core.first(nodes__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var node = temp__5802__auto__;
var G__47133 = (cljs.core.truth_((function (){var G__47046 = rewrite_clj.node.tag(node);
return (nextjournal.clerk.parser.code_tags.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.parser.code_tags.cljs$core$IFn$_invoke$arity$1(G__47046) : nextjournal.clerk.parser.code_tags.call(null,G__47046));
})())?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"add-comment-on-line?","add-comment-on-line?",-104005565),true),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.rest),new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"text","text",-1790561697),rewrite_clj.node.string(node),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.select_keys(clojure.set.rename_keys(cljs.core.meta(node),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"column","column",2078222095)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null))], null)):(cljs.core.truth_((function (){var and__5043__auto__ = add_comment_on_line_QMARK___$1;
if(cljs.core.truth_(and__5043__auto__)){
var G__47049 = rewrite_clj.node.tag(node);
return (nextjournal.clerk.parser.whitespace_on_line_tags.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.parser.whitespace_on_line_tags.cljs$core$IFn$_invoke$arity$1(G__47049) : nextjournal.clerk.parser.whitespace_on_line_tags.call(null,G__47049));
} else {
return and__5043__auto__;
}
})())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"add-comment-on-line?","add-comment-on-line?",-104005565),(!(rewrite_clj.node.comment_QMARK_(node)))),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.rest),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),(cljs.core.count(blocks__$1) - (1)),new cljs.core.Keyword(null,"text","text",-1790561697)], null),cljs.core.str,clojure.string.trim_newline(rewrite_clj.node.string(node))):(cljs.core.truth_((function (){var and__5043__auto__ = doc_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return rewrite_clj.node.comment_QMARK_(node);
} else {
return and__5043__auto__;
}
})())?nextjournal.clerk.parser.update_markdown_blocks(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"add-comment-on-line?","add-comment-on-line?",-104005565),false),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.comment_QMARK_,rewrite_clj.node.linebreak_QMARK_),nodes__$1)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.parser.remove_leading_semicolons,rewrite_clj.node.string),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.comment_QMARK_,rewrite_clj.node.linebreak_QMARK_),nodes__$1)))):cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"add-comment-on-line?","add-comment-on-line?",-104005565),false),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.rest)
)));
G__47008__$1 = G__47133;
continue;
} else {
return state__$1;
}
break;
}
}));

(nextjournal.clerk.parser.parse_clojure_string.cljs$lang$maxFixedArity = 3);

nextjournal.clerk.parser.parse_markdown_cell = (function nextjournal$clerk$parser$parse_markdown_cell(p__47061,opts){
var map__47062 = p__47061;
var map__47062__$1 = cljs.core.__destructure_map(map__47062);
var state = map__47062__$1;
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47062__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(nextjournal.clerk.parser.parse_clojure_string.cljs$core$IFn$_invoke$arity$3(opts,state,nextjournal.markdown.transform.__GT_text(cljs.core.first(nodes))),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.rest(nodes),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nextjournal.clerk.parser","md-slice","nextjournal.clerk.parser/md-slice",-2055840453),cljs.core.PersistentVector.EMPTY], 0));
});
nextjournal.clerk.parser.parse_markdown_string = (function nextjournal$clerk$parser$parse_markdown_string(p__47068,s){
var map__47069 = p__47068;
var map__47069__$1 = cljs.core.__destructure_map(map__47069);
var opts = map__47069__$1;
var doc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47069__$1,new cljs.core.Keyword(null,"doc?","doc?",754571024));
var map__47070 = nextjournal.clerk.parser.parse_markdown(nextjournal.clerk.parser.markdown_context(),s);
var map__47070__$1 = cljs.core.__destructure_map(map__47070);
var ctx = map__47070__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47070__$1,new cljs.core.Keyword(null,"content","content",15833224));
var toc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47070__$1,new cljs.core.Keyword(null,"toc","toc",2050089251));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47070__$1,new cljs.core.Keyword(null,"title","title",636505583));
var G__47075 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("nextjournal.clerk.parser","md-slice","nextjournal.clerk.parser/md-slice",-2055840453),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),content,new cljs.core.Keyword(null,"md-context","md-context",1050536849),ctx], null);
var map__47076 = G__47075;
var map__47076__$1 = cljs.core.__destructure_map(map__47076);
var state = map__47076__$1;
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47076__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var md_slice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47076__$1,new cljs.core.Keyword("nextjournal.clerk.parser","md-slice","nextjournal.clerk.parser/md-slice",-2055840453));
var G__47075__$1 = G__47075;
while(true){
var map__47086 = G__47075__$1;
var map__47086__$1 = cljs.core.__destructure_map(map__47086);
var state__$1 = map__47086__$1;
var nodes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47086__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var md_slice__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47086__$1,new cljs.core.Keyword("nextjournal.clerk.parser","md-slice","nextjournal.clerk.parser/md-slice",-2055840453));
var temp__5806__auto__ = cljs.core.first(nodes__$1);
if((temp__5806__auto__ == null)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153),((function (G__47075__$1,temp__5806__auto__,map__47086,map__47086__$1,state__$1,nodes__$1,md_slice__$1,G__47075,map__47076,map__47076__$1,state,nodes,md_slice,map__47070,map__47070__$1,ctx,content,toc,title,map__47069,map__47069__$1,opts,doc_QMARK_){
return (function (p1__47067_SHARP_){
var G__47087 = p1__47067_SHARP_;
if(cljs.core.seq(md_slice__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__47087,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"content","content",15833224),md_slice__$1], null)], null));
} else {
return G__47087;
}
});})(G__47075__$1,temp__5806__auto__,map__47086,map__47086__$1,state__$1,nodes__$1,md_slice__$1,G__47075,map__47076,map__47076__$1,state,nodes,md_slice,map__47070,map__47070__$1,ctx,content,toc,title,map__47069,map__47069__$1,opts,doc_QMARK_))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"visibility","visibility",1338380893)], null)),(cljs.core.truth_(doc_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"toc","toc",2050089251),toc], null):null)], 0));
} else {
var node = temp__5806__auto__;
var G__47140 = ((((nextjournal.clerk.parser.code_QMARK_(node)) && (cljs.core.contains_QMARK_(node,new cljs.core.Keyword(null,"info","info",-317069002)))))?nextjournal.clerk.parser.parse_markdown_cell(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153),((function (G__47075__$1,node,temp__5806__auto__,map__47086,map__47086__$1,state__$1,nodes__$1,md_slice__$1,G__47075,map__47076,map__47076__$1,state,nodes,md_slice,map__47070,map__47070__$1,ctx,content,toc,title,map__47069,map__47069__$1,opts,doc_QMARK_){
return (function (p1__47066_SHARP_){
var G__47090 = p1__47066_SHARP_;
if(cljs.core.seq(md_slice__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__47090,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"content","content",15833224),md_slice__$1], null)], null));
} else {
return G__47090;
}
});})(G__47075__$1,node,temp__5806__auto__,map__47086,map__47086__$1,state__$1,nodes__$1,md_slice__$1,G__47075,map__47076,map__47076__$1,state,nodes,md_slice,map__47070,map__47070__$1,ctx,content,toc,title,map__47069,map__47069__$1,opts,doc_QMARK_))
),opts):(function (){var G__47092 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.rest);
if(cljs.core.truth_(doc_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__47092,new cljs.core.Keyword("nextjournal.clerk.parser","md-slice","nextjournal.clerk.parser/md-slice",-2055840453),cljs.core.conj,node);
} else {
return G__47092;
}
})());
G__47075__$1 = G__47140;
continue;
}
break;
}
});

//# sourceMappingURL=nextjournal.clerk.parser.js.map
