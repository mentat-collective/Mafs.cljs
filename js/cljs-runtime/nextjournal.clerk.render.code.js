import "./cljs_env.js";
goog.provide('nextjournal.clerk.render.code');
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$lezer$highlight$dist$index_cjs=shadow.js.require("module$node_modules$$lezer$highlight$dist$index_cjs", {});
var module$node_modules$$nextjournal$lang_clojure$dist$index_cjs=shadow.js.require("module$node_modules$$nextjournal$lang_clojure$dist$index_cjs", {});
nextjournal.clerk.render.code.highlight_style = module$node_modules$$codemirror$language$dist$index_cjs.HighlightStyle.define(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.meta,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-meta"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.link,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-link"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.heading,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-heading"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.emphasis,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-italic"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.strong,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-strong"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.strikethrough,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-strikethrough"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.keyword,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-keyword"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.atom,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-atom"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.bool,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-bool"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.url,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-url"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.contentSeparator,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-contentSeparator"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.labelName,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-labelName"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.literal,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-literal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.inserted,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-inserted"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.string,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-string"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.deleted,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-deleted"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.regexp,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-regexp"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.escape,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-escape"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.special(module$node_modules$$lezer$highlight$dist$index_cjs.tags.string),new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-string"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.definition(module$node_modules$$lezer$highlight$dist$index_cjs.tags.variableName),new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-variableName"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.local(module$node_modules$$lezer$highlight$dist$index_cjs.tags.variableName),new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-variableName"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.typeName,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-typeName"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.namespace,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-namespace"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.className,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-className"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.special(module$node_modules$$lezer$highlight$dist$index_cjs.tags.variableName),new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-variableName"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.macroName,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-macroName"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.definition(module$node_modules$$lezer$highlight$dist$index_cjs.tags.propertyName),new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-propertyName"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.comment,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-comment"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.invalid,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-invalid"], null)], null)));
/**
 * Returns a lazy-seq of ranges inside a RangeSet (like a Decoration set)
 */
nextjournal.clerk.render.code.rangeset_seq = (function nextjournal$clerk$render$code$rangeset_seq(var_args){
var G__50691 = arguments.length;
switch (G__50691) {
case 1:
return nextjournal.clerk.render.code.rangeset_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.render.code.rangeset_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.render.code.rangeset_seq.cljs$core$IFn$_invoke$arity$1 = (function (rset){
return nextjournal.clerk.render.code.rangeset_seq.cljs$core$IFn$_invoke$arity$2(rset,(0));
}));

(nextjournal.clerk.render.code.rangeset_seq.cljs$core$IFn$_invoke$arity$2 = (function (rset,from){
var iterator = rset.iter(from);
return (function nextjournal$clerk$render$code$step(){
var temp__5808__auto__ = iterator.value;
if((temp__5808__auto__ == null)){
return null;
} else {
var val = temp__5808__auto__;
var from__$1 = iterator.from;
var to = iterator.to;
iterator.next();

return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),from__$1,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"val","val",128701612),val], null),(new cljs.core.LazySeq(null,(function (){
return nextjournal$clerk$render$code$step();
}),null,null)));
}
})();
}));

(nextjournal.clerk.render.code.rangeset_seq.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.render.code.style__GT_hiccup_tag = (function nextjournal$clerk$render$code$style__GT_hiccup_tag(p__50699){
var map__50706 = p__50699;
var map__50706__$1 = (((((!((map__50706 == null))))?(((((map__50706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50706):map__50706);
var tagName = (function (){var obj50709 = map__50706__$1;
if((!((obj50709 == null)))){
return (obj50709["tagName"]);
} else {
return undefined;
}
})();
var class$ = (function (){var obj50711 = map__50706__$1;
if((!((obj50711 == null)))){
return (obj50711["class"]);
} else {
return undefined;
}
})();
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,tagName,(cljs.core.truth_(class$)?cljs.core.cons(".",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(".",clojure.string.split.cljs$core$IFn$_invoke$arity$2(class$,/ /))):null)));
});
nextjournal.clerk.render.code.intersects_QMARK_ = (function nextjournal$clerk$render$code$intersects_QMARK_(p__50712,range){
var map__50714 = p__50712;
var map__50714__$1 = (((((!((map__50714 == null))))?(((((map__50714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50714):map__50714);
var from = (function (){var obj50718 = map__50714__$1;
if((!((obj50718 == null)))){
return (obj50718["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj50719 = map__50714__$1;
if((!((obj50719 == null)))){
return (obj50719["to"]);
} else {
return undefined;
}
})();
return (((((from <= new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(range))) && ((new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(range) < to)))) || ((((((from < new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(range))) && ((new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(range) <= to)))) || ((((new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(range) <= from)) && ((to <= new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(range))))))));
});
nextjournal.clerk.render.code.style_line = (function nextjournal$clerk$render$code$style_line(decos,text,i){
var map__50723 = text.line(i);
var map__50723__$1 = (((((!((map__50723 == null))))?(((((map__50723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50723):map__50723);
var line = map__50723__$1;
var from = (function (){var obj50725 = map__50723__$1;
if((!((obj50725 == null)))){
return (obj50725["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj50726 = map__50723__$1;
if((!((obj50726 == null)))){
return (obj50726["to"]);
} else {
return undefined;
}
})();
var length = (function (){var obj50727 = map__50723__$1;
if((!((obj50727 == null)))){
return (obj50727["length"]);
} else {
return undefined;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cm-line","div.cm-line",-882561882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.6",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"15px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"\"Fira Mono\", monospace"], null)], null)], null),(((length === (0)))?"\n":(function (){var pos = from;
var lds = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.render.code.intersects_QMARK_,line),nextjournal.clerk.render.code.rangeset_seq.cljs$core$IFn$_invoke$arity$1(decos));
var buf = cljs.core.List.EMPTY;
while(true){
var temp__5806__auto__ = cljs.core.first(lds);
if((temp__5806__auto__ == null)){
var G__50736 = buf;
if((pos < to)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__50736,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [text.sliceString(pos,to)], null));
} else {
return G__50736;
}
} else {
var map__50738 = temp__5806__auto__;
var map__50738__$1 = cljs.core.__destructure_map(map__50738);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50738__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50738__$1,new cljs.core.Keyword(null,"to","to",192099007));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50738__$1,new cljs.core.Keyword(null,"val","val",128701612));
var G__50759 = end;
var G__50760 = cljs.core.next(lds);
var G__50761 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(buf,(function (){var G__50739 = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.code.style__GT_hiccup_tag(style),text.sliceString((function (){var x__5130__auto__ = from;
var y__5131__auto__ = start;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),(function (){var x__5133__auto__ = to;
var y__5134__auto__ = end;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})())], null),null,(1),null));
if((pos < start)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__50739,text.sliceString(pos,start));
} else {
return G__50739;
}
})());
pos = G__50759;
lds = G__50760;
buf = G__50761;
continue;
}
break;
}
})()));
});
nextjournal.clerk.render.code.render_code = (function nextjournal$clerk$render$code$render_code(code){
var builder = (new module$node_modules$$codemirror$state$dist$index_cjs.RangeSetBuilder());
var _ = module$node_modules$$lezer$highlight$dist$index_cjs.highlightTree(module$node_modules$$nextjournal$lang_clojure$dist$index_cjs.clojureLanguage.parser.parse(code),nextjournal.clerk.render.code.highlight_style,(function (from,to,style){
return builder.add(from,to,module$node_modules$$codemirror$view$dist$index_cjs.Decoration.mark(({"class":style})));
}));
var decorations_rangeset = builder.finish();
var text = module$node_modules$$codemirror$state$dist$index_cjs.Text.of(code.split("\n"));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cm-editor","div.cm-editor",-325076497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cm-scroller","cm-scroller",144210605),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cm-content.whitespace-pre","div.cm-content.whitespace-pre",-803572291)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.render.code.style_line,decorations_rangeset,text)),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(text.lines + (1))))], null)], null);
});
nextjournal.clerk.render.code.theme = module$node_modules$$codemirror$view$dist$index_cjs.EditorView.theme(({".cm-tooltip > ul > li:first-child":({"border-top-left-radius":"3px","border-top-right-radius":"3px"}),".cm-tooltip":({"border":"1px solid rgba(0,0,0,.1)","border-radius":"3px","overflow":"hidden"}),"&.cm-focused .cm-cursor":({"visibility":"visible","animation":"steps(1) cm-blink 1.2s infinite"}),"&.cm-focused":({"outline":"none"}),".cm-cursor":({"visibility":"hidden"}),".cm-tooltip > ul > li":({"padding":"3px 10px 3px 0 !important"}),"&.cm-focused .cm-selectionBackground":({"background-color":"Highlight"}),".cm-line":({"padding":"0","line-height":"1.6","font-size":"15px","font-family":"\"Fira Mono\", monospace"}),".cm-matchingBracket":({"border-bottom":"1px solid var(--teal-color)","color":"inherit"})}));
nextjournal.clerk.render.code.complete_keymap = module$node_modules$$codemirror$view$dist$index_cjs.keymap.of(nextjournal.clojure_mode.keymap.complete);
nextjournal.clerk.render.code.builtin_keymap = module$node_modules$$codemirror$view$dist$index_cjs.keymap.of(nextjournal.clojure_mode.keymap.builtin);
nextjournal.clerk.render.code.paredit_keymap = module$node_modules$$codemirror$view$dist$index_cjs.keymap.of(nextjournal.clojure_mode.keymap.paredit);
nextjournal.clerk.render.code.read_only = module$node_modules$$codemirror$view$dist$index_cjs.EditorView.editable.of(false);
nextjournal.clerk.render.code.on_change_ext = (function nextjournal$clerk$render$code$on_change_ext(f){
return module$node_modules$$codemirror$state$dist$index_cjs.EditorState.transactionExtender.of((function (tr){
if(cljs.core.truth_(tr.docChanged)){
var G__50743_50762 = tr.state.sliceDoc();
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50743_50762) : f.call(null,G__50743_50762));
} else {
}

return ({});
}));
});
nextjournal.clerk.render.code.default_extensions = [nextjournal.clojure_mode.default_extensions,module$node_modules$$codemirror$language$dist$index_cjs.syntaxHighlighting(nextjournal.clerk.render.code.highlight_style),nextjournal.clerk.render.code.theme];
goog.exportSymbol('nextjournal.clerk.render.code.default_extensions', nextjournal.clerk.render.code.default_extensions);
nextjournal.clerk.render.code.make_state = (function nextjournal$clerk$render$code$make_state(doc,extensions){
return module$node_modules$$codemirror$state$dist$index_cjs.EditorState.create(({"doc":doc,"extensions":extensions}));
});
nextjournal.clerk.render.code.make_view = (function nextjournal$clerk$render$code$make_view(state,parent){
return (new module$node_modules$$codemirror$view$dist$index_cjs.EditorView(({"state":state,"parent":parent})));
});
nextjournal.clerk.render.code.editor = (function nextjournal$clerk$render$code$editor(var_args){
var G__50747 = arguments.length;
switch (G__50747) {
case 1:
return nextjournal.clerk.render.code.editor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.render.code.editor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.render.code.editor.cljs$core$IFn$_invoke$arity$1 = (function (_BANG_code_str){
return nextjournal.clerk.render.code.editor.cljs$core$IFn$_invoke$arity$2(_BANG_code_str,cljs.core.PersistentArrayMap.EMPTY);
}));

(nextjournal.clerk.render.code.editor.cljs$core$IFn$_invoke$arity$2 = (function (_BANG_code_str,p__50748){
var map__50749 = p__50748;
var map__50749__$1 = cljs.core.__destructure_map(map__50749);
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50749__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50749__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__50745_SHARP_){
return cljs.core.reset_BANG_(_BANG_code_str,p1__50745_SHARP_);
}));
var _BANG_container_el = nextjournal.clerk.render.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null);
var _BANG_view = nextjournal.clerk.render.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null);
nextjournal.clerk.render.hooks.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
var view = cljs.core.reset_BANG_(_BANG_view,nextjournal.clerk.render.code.make_view(nextjournal.clerk.render.code.make_state(cljs.core.deref(_BANG_code_str),(function (){var G__50751 = nextjournal.clerk.render.code.default_extensions;
var G__50751__$1 = ((cljs.core.seq(extensions))?G__50751.concat(extensions):G__50751);
if(cljs.core.truth_(on_change)){
return G__50751__$1.concat(nextjournal.clerk.render.code.on_change_ext(on_change));
} else {
return G__50751__$1;
}
})()),cljs.core.deref(_BANG_container_el)));
return (function (){
return view.destroy();
});
}));

nextjournal.clerk.render.hooks.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var state = cljs.core.deref(_BANG_view).state;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_code_str),state.sliceDoc())){
return cljs.core.deref(_BANG_view).dispatch(state.update(({"changes":[({"insert":cljs.core.deref(_BANG_code_str),"from":(0),"to":state.doc.length})]})));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(_BANG_code_str)], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_BANG_container_el], null)], null);
}));

(nextjournal.clerk.render.code.editor.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=nextjournal.clerk.render.code.js.map
