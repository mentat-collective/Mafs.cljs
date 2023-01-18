import "./cljs_env.js";
goog.provide('reagent.dom.server');
var module$node_modules$react_dom$server_browser=shadow.js.require("module$node_modules$react_dom$server_browser", {});
/**
 * Turns a component into an HTML string.
 */
reagent.dom.server.render_to_string = (function reagent$dom$server$render_to_string(var_args){
var G__48222 = arguments.length;
switch (G__48222) {
case 1:
return reagent.dom.server.render_to_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.dom.server.render_to_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.server.render_to_string.cljs$core$IFn$_invoke$arity$1 = (function (component){
return reagent.dom.server.render_to_string.cljs$core$IFn$_invoke$arity$2(component,reagent.impl.template.default_compiler);
}));

(reagent.dom.server.render_to_string.cljs$core$IFn$_invoke$arity$2 = (function (component,compiler){
reagent.ratom.flush_BANG_();

var _STAR_non_reactive_STAR__orig_val__48224 = reagent.impl.util._STAR_non_reactive_STAR_;
var _STAR_non_reactive_STAR__temp_val__48225 = true;
(reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__temp_val__48225);

try{return module$node_modules$react_dom$server_browser.renderToString(reagent.impl.protocols.as_element(compiler,component));
}finally {(reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__orig_val__48224);
}}));

(reagent.dom.server.render_to_string.cljs$lang$maxFixedArity = 2);

/**
 * Turns a component into an HTML string, without data-react-id attributes, etc.
 */
reagent.dom.server.render_to_static_markup = (function reagent$dom$server$render_to_static_markup(var_args){
var G__48227 = arguments.length;
switch (G__48227) {
case 1:
return reagent.dom.server.render_to_static_markup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.dom.server.render_to_static_markup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.server.render_to_static_markup.cljs$core$IFn$_invoke$arity$1 = (function (component){
return reagent.dom.server.render_to_static_markup.cljs$core$IFn$_invoke$arity$2(component,reagent.impl.template.default_compiler);
}));

(reagent.dom.server.render_to_static_markup.cljs$core$IFn$_invoke$arity$2 = (function (component,compiler){
reagent.ratom.flush_BANG_();

var _STAR_non_reactive_STAR__orig_val__48228 = reagent.impl.util._STAR_non_reactive_STAR_;
var _STAR_non_reactive_STAR__temp_val__48229 = true;
(reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__temp_val__48229);

try{return module$node_modules$react_dom$server_browser.renderToStaticMarkup(reagent.impl.protocols.as_element(compiler,component));
}finally {(reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__orig_val__48228);
}}));

(reagent.dom.server.render_to_static_markup.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=reagent.dom.server.js.map
