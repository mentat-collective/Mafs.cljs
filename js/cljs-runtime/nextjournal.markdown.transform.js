import "./cljs_env.js";
goog.provide('nextjournal.markdown.transform');
nextjournal.markdown.transform.guard = (function nextjournal$markdown$transform$guard(pred,val){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(val) : pred.call(null,val)))){
return val;
} else {
return null;
}
});
nextjournal.markdown.transform.__GT_text = (function nextjournal$markdown$transform$__GT_text(p__41312){
var map__41313 = p__41312;
var map__41313__$1 = cljs.core.__destructure_map(map__41313);
var _node = map__41313__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41313__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41313__$1,new cljs.core.Keyword(null,"content","content",15833224));
var or__5045__auto__ = text;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.__GT_text,content));
}
});
/**
 * Scans doc contents and replaces toc node placeholder with the toc node accumulated during parse.
 */
nextjournal.markdown.transform.hydrate_toc = (function nextjournal$markdown$transform$hydrate_toc(p__41321){
var map__41322 = p__41321;
var map__41322__$1 = cljs.core.__destructure_map(map__41322);
var doc = map__41322__$1;
var toc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41322__$1,new cljs.core.Keyword(null,"toc","toc",2050089251));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__41323){
var map__41325 = p__41323;
var map__41325__$1 = cljs.core.__destructure_map(map__41325);
var node = map__41325__$1;
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41325__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toc","toc",2050089251),t)){
return toc;
} else {
return node;
}
}))));
});
nextjournal.markdown.transform.table_alignment = (function nextjournal$markdown$transform$table_alignment(p__41329){
var map__41331 = p__41329;
var map__41331__$1 = cljs.core.__destructure_map(map__41331);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41331__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(typeof style === 'string'){
var vec__41332 = cljs.core.re_matches(/^text-align:(.+)$/,style);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41332,(0),null);
var alignment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41332,(1),null);
if(cljs.core.truth_(alignment)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),alignment], null);
} else {
return null;
}
} else {
return null;
}
});
nextjournal.markdown.transform.heading_markup = (function nextjournal$markdown$transform$heading_markup(p__41336){
var map__41338 = p__41336;
var map__41338__$1 = cljs.core.__destructure_map(map__41338);
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41338__$1,new cljs.core.Keyword(null,"heading-level","heading-level",563433452));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["h",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = l;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})())].join(''))], null);
});
/**
 * Takes a hiccup vector, a context and a node, puts node's `:content` into markup mapping through `->hiccup`.
 */
nextjournal.markdown.transform.into_markup = (function nextjournal$markdown$transform$into_markup(mkup,ctx,p__41350){
var map__41351 = p__41350;
var map__41351__$1 = cljs.core.__destructure_map(map__41351);
var node = map__41351__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41351__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41351__$1,new cljs.core.Keyword(null,"content","content",15833224));
if(cljs.core.truth_(text)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(mkup,text);
} else {
if(cljs.core.seq(content)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(mkup,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.__GT_hiccup,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("nextjournal.markdown.transform","parent","nextjournal.markdown.transform/parent",612696398),node))),content);
} else {
return null;
}
}
});
nextjournal.markdown.transform.toc__GT_hiccup = (function nextjournal$markdown$transform$toc__GT_hiccup(p__41366,p__41367){
var map__41368 = p__41366;
var map__41368__$1 = cljs.core.__destructure_map(map__41368);
var ctx = map__41368__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41368__$1,new cljs.core.Keyword("nextjournal.markdown.transform","parent","nextjournal.markdown.transform/parent",612696398));
var map__41369 = p__41367;
var map__41369__$1 = cljs.core.__destructure_map(map__41369);
var node = map__41369__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41369__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41369__$1,new cljs.core.Keyword(null,"content","content",15833224));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41369__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs);
var toc_item = (function (){var G__41375 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
var G__41375__$1 = ((cljs.core.seq(content))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__41375,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__41359_SHARP_){
var temp__5808__auto__ = document.getElementById(id);
if((temp__5808__auto__ == null)){
return null;
} else {
var el = temp__5808__auto__;
p1__41359_SHARP_.preventDefault();

return el.scrollIntoViewIfNeeded();
}
})], null),nextjournal.markdown.transform.into_markup(nextjournal.markdown.transform.heading_markup(node),ctx,node)], null)):G__41375);
if(cljs.core.seq(children)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__41375__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.__GT_hiccup,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("nextjournal.markdown.transform","parent","nextjournal.markdown.transform/parent",612696398),node))),children));
} else {
return G__41375__$1;
}
})();
var G__41394 = toc_item;
var G__41394__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toc","toc",2050089251),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parent)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.toc-item","li.toc-item",1430212457)], null),G__41394):G__41394);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toc","toc",2050089251),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parent))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toc","div.toc",2085460476)], null),G__41394__$1);
} else {
return G__41394__$1;
}
});
nextjournal.markdown.transform.default_hiccup_renderers = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"table-header","table-header",564803008),new cljs.core.Keyword(null,"todo-list","todo-list",653205378),new cljs.core.Keyword(null,"table-data","table-data",-1783738205),new cljs.core.Keyword(null,"toc","toc",2050089251),new cljs.core.Keyword(null,"table-body","table-body",-753458877),new cljs.core.Keyword(null,"table-row","table-row",118957987),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"bullet-list","bullet-list",-2051767989),new cljs.core.Keyword(null,"ruler","ruler",2134373867),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"list-item","list-item",-999803634),new cljs.core.Keyword(null,"sidenote","sidenote",-368558802),new cljs.core.Keyword(null,"numbered-list","numbered-list",13892942),new cljs.core.Keyword(null,"softbreak","softbreak",-983135729),new cljs.core.Keyword(null,"monospace","monospace",2089559697),new cljs.core.Keyword(null,"sidenote-ref","sidenote-ref",-1057198382),new cljs.core.Keyword(null,"block-formula","block-formula",-1790528301),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"strikethrough","strikethrough",1012146804),new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"formula","formula",-1059725192),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"table-head","table-head",-1134134854),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"todo-item","todo-item",-1060924804),new cljs.core.Keyword(null,"internal-link","internal-link",-1380732260),new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),new cljs.core.Keyword(null,"paragraph","paragraph",296707709),new cljs.core.Keyword(null,"blockquote","blockquote",372264190),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"text","text",-1790561697)],[(function (ctx,p__41421){
var map__41422 = p__41421;
var map__41422__$1 = cljs.core.__destructure_map(map__41422);
var node = map__41422__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41422__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return nextjournal.markdown.transform.into_markup(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),nextjournal.markdown.transform.table_alignment(attrs)], null)], null),ctx,node);
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.contains-task-list","ul.contains-task-list",-299292859)], null)),(function (ctx,p__41426){
var map__41427 = p__41426;
var map__41427__$1 = cljs.core.__destructure_map(map__41427);
var node = map__41427__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41427__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return nextjournal.markdown.transform.into_markup(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),nextjournal.markdown.transform.table_alignment(attrs)], null)], null),ctx,node);
}),nextjournal.markdown.transform.toc__GT_hiccup,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036)], null)),(function (ctx,p__41432){
var map__41433 = p__41432;
var map__41433__$1 = cljs.core.__destructure_map(map__41433);
var node = map__41433__$1;
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41433__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5808__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.default_hiccup_renderers,t);
if((temp__5808__auto__ == null)){
return null;
} else {
var d = temp__5808__auto__;
return (d.cljs$core$IFn$_invoke$arity$2 ? d.cljs$core$IFn$_invoke$arity$2(ctx,node) : d.call(null,ctx,node));
}
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null)),cljs.core.constantly(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null)),(function (ctx,p__41434){
var map__41435 = p__41434;
var map__41435__$1 = cljs.core.__destructure_map(map__41435);
var node = map__41435__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41435__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return nextjournal.markdown.transform.into_markup(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sidenote","span.sidenote",-1886925254),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"3px"], null)], null),(new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(attrs) + (1))], null)], null),ctx,node);
}),(function (ctx,p__41438){
var map__41441 = p__41438;
var map__41441__$1 = cljs.core.__destructure_map(map__41441);
var node = map__41441__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41441__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return nextjournal.markdown.transform.into_markup(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),attrs], null),ctx,node);
}),cljs.core.constantly(" "),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup.sidenote-ref","sup.sidenote-ref",-900607849)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.formula","figure.formula",-1349258944)], null)),(function (ctx,p__41442){
var map__41443 = p__41442;
var map__41443__$1 = cljs.core.__destructure_map(map__41443);
var node = map__41443__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41443__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return nextjournal.markdown.transform.into_markup(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(attrs)], null)], null),ctx,node);
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.viewer-code.not-prose","pre.viewer-code.not-prose",-1594627191)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.formula","span.formula",-1123101161)], null)),(function (p__41444,p__41445){
var map__41446 = p__41444;
var map__41446__$1 = cljs.core.__destructure_map(map__41446);
var ctx = map__41446__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41446__$1,new cljs.core.Keyword("nextjournal.markdown.transform","parent","nextjournal.markdown.transform/parent",612696398));
var map__41448 = p__41445;
var map__41448__$1 = cljs.core.__destructure_map(map__41448);
var node = map__41448__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41448__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"paragraph","paragraph",296707709),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parent))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.inline","img.inline",-1116141579),attrs], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.image","figure.image",-1216510536),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),attrs], null),nextjournal.markdown.transform.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047)], null),ctx,node)], null);
}
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)),(function (ctx,p__41453){
var map__41454 = p__41453;
var map__41454__$1 = cljs.core.__destructure_map(map__41454);
var node = map__41454__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41454__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return nextjournal.markdown.transform.into_markup(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(attrs)], null)], null)], null),ctx,node);
}),(function (_,p__41456){
var map__41457 = p__41456;
var map__41457__$1 = cljs.core.__destructure_map(map__41457);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41457__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41457__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.internal","a.internal",-136861873),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(attrs,text)], null),text], null);
}),(function (_,p__41458){
var map__41459 = p__41458;
var map__41459__$1 = cljs.core.__destructure_map(map__41459);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41459__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.tag","a.tag",-1102521004),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["/tags/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join('')], null),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join('')], null);
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blockquote","blockquote",372264190)], null)),(function (ctx,p__41462){
var map__41464 = p__41462;
var map__41464__$1 = cljs.core.__destructure_map(map__41464);
var node = map__41464__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41464__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return nextjournal.markdown.transform.into_markup(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.heading_markup(node),attrs),ctx,node);
}),(function (_,p__41465){
var map__41466 = p__41465;
var map__41466__$1 = cljs.core.__destructure_map(map__41466);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41466__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return text;
})]);
nextjournal.markdown.transform.__GT_hiccup = (function nextjournal$markdown$transform$__GT_hiccup(var_args){
var G__41474 = arguments.length;
switch (G__41474) {
case 1:
return nextjournal.markdown.transform.__GT_hiccup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.markdown.transform.__GT_hiccup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.markdown.transform.__GT_hiccup.cljs$core$IFn$_invoke$arity$1 = (function (node){
return nextjournal.markdown.transform.__GT_hiccup.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.default_hiccup_renderers,node);
}));

(nextjournal.markdown.transform.__GT_hiccup.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__41475){
var map__41476 = p__41475;
var map__41476__$1 = cljs.core.__destructure_map(map__41476);
var node = map__41476__$1;
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41476__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var map__41477 = (function (){var G__41478 = node;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"doc","doc",1913296891),t)){
return nextjournal.markdown.transform.hydrate_toc(G__41478);
} else {
return G__41478;
}
})();
var map__41477__$1 = cljs.core.__destructure_map(map__41477);
var node__$1 = map__41477__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41477__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5806__auto__ = nextjournal.markdown.transform.guard(cljs.core.fn_QMARK_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx,type));
if((temp__5806__auto__ == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.message.red","span.message.red",-41588333),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),["Unknown type: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"'."].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node__$1], 0))], null)], null);
} else {
var f = temp__5806__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ctx,node__$1) : f.call(null,ctx,node__$1));
}
}));

(nextjournal.markdown.transform.__GT_hiccup.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=nextjournal.markdown.transform.js.map
