import "./cljs_env.js";
goog.provide('editscript.edit');

/**
 * @interface
 */
editscript.edit.IEdit = function(){};

var editscript$edit$IEdit$auto_sizing$dyn_50647 = (function (this$,path,value){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.auto_sizing[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__5394__auto__.call(null,this$,path,value));
} else {
var m__5392__auto__ = (editscript.edit.auto_sizing["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__5392__auto__.call(null,this$,path,value));
} else {
throw cljs.core.missing_protocol("IEdit.auto-sizing",this$);
}
}
});
editscript.edit.auto_sizing = (function editscript$edit$auto_sizing(this$,path,value){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$auto_sizing$arity$3 == null)))))){
return this$.editscript$edit$IEdit$auto_sizing$arity$3(this$,path,value);
} else {
return editscript$edit$IEdit$auto_sizing$dyn_50647(this$,path,value);
}
});

var editscript$edit$IEdit$add_data$dyn_50650 = (function (this$,path,value){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.add_data[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__5394__auto__.call(null,this$,path,value));
} else {
var m__5392__auto__ = (editscript.edit.add_data["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__5392__auto__.call(null,this$,path,value));
} else {
throw cljs.core.missing_protocol("IEdit.add-data",this$);
}
}
});
editscript.edit.add_data = (function editscript$edit$add_data(this$,path,value){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$add_data$arity$3 == null)))))){
return this$.editscript$edit$IEdit$add_data$arity$3(this$,path,value);
} else {
return editscript$edit$IEdit$add_data$dyn_50650(this$,path,value);
}
});

var editscript$edit$IEdit$delete_data$dyn_50653 = (function (this$,path){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.delete_data[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5394__auto__.call(null,this$,path));
} else {
var m__5392__auto__ = (editscript.edit.delete_data["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5392__auto__.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("IEdit.delete-data",this$);
}
}
});
editscript.edit.delete_data = (function editscript$edit$delete_data(this$,path){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$delete_data$arity$2 == null)))))){
return this$.editscript$edit$IEdit$delete_data$arity$2(this$,path);
} else {
return editscript$edit$IEdit$delete_data$dyn_50653(this$,path);
}
});

var editscript$edit$IEdit$replace_data$dyn_50654 = (function (this$,path,value){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.replace_data[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__5394__auto__.call(null,this$,path,value));
} else {
var m__5392__auto__ = (editscript.edit.replace_data["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__5392__auto__.call(null,this$,path,value));
} else {
throw cljs.core.missing_protocol("IEdit.replace-data",this$);
}
}
});
editscript.edit.replace_data = (function editscript$edit$replace_data(this$,path,value){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$replace_data$arity$3 == null)))))){
return this$.editscript$edit$IEdit$replace_data$arity$3(this$,path,value);
} else {
return editscript$edit$IEdit$replace_data$dyn_50654(this$,path,value);
}
});

var editscript$edit$IEdit$replace_str$dyn_50655 = (function (this$,path,ops,level){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.replace_str[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(this$,path,ops,level) : m__5394__auto__.call(null,this$,path,ops,level));
} else {
var m__5392__auto__ = (editscript.edit.replace_str["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(this$,path,ops,level) : m__5392__auto__.call(null,this$,path,ops,level));
} else {
throw cljs.core.missing_protocol("IEdit.replace-str",this$);
}
}
});
editscript.edit.replace_str = (function editscript$edit$replace_str(this$,path,ops,level){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$replace_str$arity$4 == null)))))){
return this$.editscript$edit$IEdit$replace_str$arity$4(this$,path,ops,level);
} else {
return editscript$edit$IEdit$replace_str$dyn_50655(this$,path,ops,level);
}
});


/**
 * @interface
 */
editscript.edit.IEditScript = function(){};

var editscript$edit$IEditScript$combine$dyn_50656 = (function (this$,that){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.combine[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__5394__auto__.call(null,this$,that));
} else {
var m__5392__auto__ = (editscript.edit.combine["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__5392__auto__.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("IEditScript.combine",this$);
}
}
});
/**
 * Concate that editscript onto this editscript, return the new editscript
 */
editscript.edit.combine = (function editscript$edit$combine(this$,that){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$combine$arity$2 == null)))))){
return this$.editscript$edit$IEditScript$combine$arity$2(this$,that);
} else {
return editscript$edit$IEditScript$combine$dyn_50656(this$,that);
}
});

var editscript$edit$IEditScript$get_size$dyn_50657 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.get_size[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (editscript.edit.get_size["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-size",this$);
}
}
});
/**
 * Report the size of the editscript
 */
editscript.edit.get_size = (function editscript$edit$get_size(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_size$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_size$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_size$dyn_50657(this$);
}
});

var editscript$edit$IEditScript$set_size$dyn_50659 = (function (this$,size){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.set_size[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,size) : m__5394__auto__.call(null,this$,size));
} else {
var m__5392__auto__ = (editscript.edit.set_size["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,size) : m__5392__auto__.call(null,this$,size));
} else {
throw cljs.core.missing_protocol("IEditScript.set-size",this$);
}
}
});
/**
 * Set the size, return the script
 */
editscript.edit.set_size = (function editscript$edit$set_size(this$,size){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$set_size$arity$2 == null)))))){
return this$.editscript$edit$IEditScript$set_size$arity$2(this$,size);
} else {
return editscript$edit$IEditScript$set_size$dyn_50659(this$,size);
}
});

var editscript$edit$IEditScript$edit_distance$dyn_50660 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.edit_distance[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (editscript.edit.edit_distance["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.edit-distance",this$);
}
}
});
/**
 * Report the edit distance, i.e number of operations
 */
editscript.edit.edit_distance = (function editscript$edit$edit_distance(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$edit_distance$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$edit_distance$arity$1(this$);
} else {
return editscript$edit$IEditScript$edit_distance$dyn_50660(this$);
}
});

var editscript$edit$IEditScript$get_edits$dyn_50661 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.get_edits[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (editscript.edit.get_edits["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-edits",this$);
}
}
});
/**
 * Report the edits as a vector
 */
editscript.edit.get_edits = (function editscript$edit$get_edits(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_edits$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_edits$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_edits$dyn_50661(this$);
}
});

var editscript$edit$IEditScript$get_adds_num$dyn_50662 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.get_adds_num[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (editscript.edit.get_adds_num["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-adds-num",this$);
}
}
});
/**
 * Report the number of additions
 */
editscript.edit.get_adds_num = (function editscript$edit$get_adds_num(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_adds_num$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_adds_num$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_adds_num$dyn_50662(this$);
}
});

var editscript$edit$IEditScript$get_dels_num$dyn_50663 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.get_dels_num[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (editscript.edit.get_dels_num["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-dels-num",this$);
}
}
});
/**
 * Report the number of deletions
 */
editscript.edit.get_dels_num = (function editscript$edit$get_dels_num(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_dels_num$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_dels_num$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_dels_num$dyn_50663(this$);
}
});

var editscript$edit$IEditScript$get_reps_num$dyn_50667 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.get_reps_num[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (editscript.edit.get_reps_num["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-reps-num",this$);
}
}
});
/**
 * Report the number of replacements
 */
editscript.edit.get_reps_num = (function editscript$edit$get_reps_num(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_reps_num$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_reps_num$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_reps_num$dyn_50667(this$);
}
});


/**
 * @interface
 */
editscript.edit.IType = function(){};

var editscript$edit$IType$get_type$dyn_50692 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.get_type[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (editscript.edit.get_type["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IType.get-type",this$);
}
}
});
/**
 * Return a type keyword, :val, :map, :lst, etc.
 */
editscript.edit.get_type = (function editscript$edit$get_type(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IType$get_type$arity$1 == null)))))){
return this$.editscript$edit$IType$get_type$arity$1(this$);
} else {
return editscript$edit$IType$get_type$dyn_50692(this$);
}
});

/**
 * A special type means 'not present'
 */
editscript.edit.nada = (function editscript$edit$nada(){
if((typeof editscript !== 'undefined') && (typeof editscript.edit !== 'undefined') && (typeof editscript.edit.t_editscript$edit50286 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {editscript.edit.IType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
editscript.edit.t_editscript$edit50286 = (function (meta50287){
this.meta50287 = meta50287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(editscript.edit.t_editscript$edit50286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50288,meta50287__$1){
var self__ = this;
var _50288__$1 = this;
return (new editscript.edit.t_editscript$edit50286(meta50287__$1));
}));

(editscript.edit.t_editscript$edit50286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50288){
var self__ = this;
var _50288__$1 = this;
return self__.meta50287;
}));

(editscript.edit.t_editscript$edit50286.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.t_editscript$edit50286.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"nil","nil",99600501);
}));

(editscript.edit.t_editscript$edit50286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50287","meta50287",-1000087986,null)], null);
}));

(editscript.edit.t_editscript$edit50286.cljs$lang$type = true);

(editscript.edit.t_editscript$edit50286.cljs$lang$ctorStr = "editscript.edit/t_editscript$edit50286");

(editscript.edit.t_editscript$edit50286.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"editscript.edit/t_editscript$edit50286");
}));

/**
 * Positional factory function for editscript.edit/t_editscript$edit50286.
 */
editscript.edit.__GT_t_editscript$edit50286 = (function editscript$edit$nada_$___GT_t_editscript$edit50286(meta50287){
return (new editscript.edit.t_editscript$edit50286(meta50287));
});

}

return (new editscript.edit.t_editscript$edit50286(cljs.core.PersistentArrayMap.EMPTY));
});
(editscript.edit.IType["null"] = true);

(editscript.edit.get_type["null"] = (function (_){
return new cljs.core.Keyword(null,"val","val",128701612);
}));

(cljs.core.MapEntry.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"val","val",128701612);
}));

(cljs.core.PersistentTreeSet.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeSet.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"set","set",304602554);
}));

(cljs.core.Cons.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"lst","lst",269745987);
}));

(cljs.core.PersistentHashMap.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"map","map",1371690461);
}));

(cljs.core.Subvec.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"vec","vec",-657847931);
}));

(editscript.edit.IType["_"] = true);

(editscript.edit.get_type["_"] = (function (_){
return new cljs.core.Keyword(null,"val","val",128701612);
}));

(cljs.core.PersistentTreeMap.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"map","map",1371690461);
}));

(cljs.core.PersistentHashSet.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"set","set",304602554);
}));

(cljs.core.PersistentVector.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"vec","vec",-657847931);
}));

(editscript.edit.IType["string"] = true);

(editscript.edit.get_type["string"] = (function (_){
return new cljs.core.Keyword(null,"str","str",1089608819);
}));

(cljs.core.EmptyList.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"lst","lst",269745987);
}));

(cljs.core.PersistentArrayMap.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"map","map",1371690461);
}));

(cljs.core.List.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"lst","lst",269745987);
}));
editscript.edit.sizing_STAR_ = (function editscript$edit$sizing_STAR_(data,size){
var up = (function (s){
return (s + (1));
});
if(cljs.core.truth_((function (){var G__50313 = editscript.edit.get_type(data);
var fexpr__50312 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lst","lst",269745987),null,new cljs.core.Keyword(null,"vec","vec",-657847931),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null);
return (fexpr__50312.cljs$core$IFn$_invoke$arity$1 ? fexpr__50312.cljs$core$IFn$_invoke$arity$1(G__50313) : fexpr__50312.call(null,G__50313));
})())){
cljs.core._vreset_BANG_(size,up(cljs.core._deref(size)));

var seq__50314 = cljs.core.seq(data);
var chunk__50315 = null;
var count__50316 = (0);
var i__50317 = (0);
while(true){
if((i__50317 < count__50316)){
var child = chunk__50315.cljs$core$IIndexed$_nth$arity$2(null,i__50317);
(editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2 ? editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2(child,size) : editscript.edit.sizing_STAR_.call(null,child,size));


var G__50792 = seq__50314;
var G__50793 = chunk__50315;
var G__50794 = count__50316;
var G__50795 = (i__50317 + (1));
seq__50314 = G__50792;
chunk__50315 = G__50793;
count__50316 = G__50794;
i__50317 = G__50795;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50314);
if(temp__5753__auto__){
var seq__50314__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50314__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50314__$1);
var G__50796 = cljs.core.chunk_rest(seq__50314__$1);
var G__50797 = c__5568__auto__;
var G__50798 = cljs.core.count(c__5568__auto__);
var G__50799 = (0);
seq__50314 = G__50796;
chunk__50315 = G__50797;
count__50316 = G__50798;
i__50317 = G__50799;
continue;
} else {
var child = cljs.core.first(seq__50314__$1);
(editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2 ? editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2(child,size) : editscript.edit.sizing_STAR_.call(null,child,size));


var G__50800 = cljs.core.next(seq__50314__$1);
var G__50801 = null;
var G__50802 = (0);
var G__50803 = (0);
seq__50314 = G__50800;
chunk__50315 = G__50801;
count__50316 = G__50802;
i__50317 = G__50803;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return cljs.core._vreset_BANG_(size,up(cljs.core._deref(size)));
}
});
editscript.edit.sizing = (function editscript$edit$sizing(data){
var size = cljs.core.volatile_BANG_((0));
editscript.edit.sizing_STAR_(data,size);

return cljs.core.deref(size);
});

/**
* @constructor
 * @implements {editscript.edit.IEditScript}
 * @implements {editscript.edit.IEdit}
*/
editscript.edit.EditScript = (function (edits,auto_sizing_QMARK_,size,adds_num,dels_num,reps_num){
this.edits = edits;
this.auto_sizing_QMARK_ = auto_sizing_QMARK_;
this.size = size;
this.adds_num = adds_num;
this.dels_num = dels_num;
this.reps_num = reps_num;
});
(editscript.edit.EditScript.prototype.editscript$edit$IEdit$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$auto_sizing$arity$3 = (function (this$,path,value){
var self__ = this;
var this$__$1 = this;
if(self__.auto_sizing_QMARK_){
(self__.size = cljs.core.long$(((((2) + self__.size) + editscript.edit.sizing(path)) + (cljs.core.truth_(value)?editscript.edit.sizing(value):(0)))));
} else {
}

return this$__$1;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$add_data$arity$3 = (function (this$,path,value){
var self__ = this;
var this$__$1 = this;
(self__.adds_num = (self__.adds_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"+","+",1913524883),value], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null,path,value);
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$delete_data$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
(self__.dels_num = (self__.dels_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"-","-",-2112348439)], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null,path,null);
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$replace_data$arity$3 = (function (this$,path,value){
var self__ = this;
var this$__$1 = this;
(self__.reps_num = (self__.reps_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"r","r",-471384190),value], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null,path,value);
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$replace_str$arity$4 = (function (this$,path,ops,level){
var self__ = this;
var this$__$1 = this;
(self__.reps_num = (self__.reps_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,(function (){var G__50378 = level;
var G__50378__$1 = (((G__50378 instanceof cljs.core.Keyword))?G__50378.fqn:null);
switch (G__50378__$1) {
case "character":
return new cljs.core.Keyword(null,"s","s",1705939918);

break;
case "word":
return new cljs.core.Keyword(null,"sw","sw",833113913);

break;
case "line":
return new cljs.core.Keyword(null,"sl","sl",1007549161);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50378__$1)].join('')));

}
})(),ops], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null,path,"");
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$combine$arity$2 = (function (_,that){
var self__ = this;
var ___$1 = this;
return (new editscript.edit.EditScript(cljs.core.into.cljs$core$IFn$_invoke$arity$2(self__.edits,editscript.edit.get_edits(that)),self__.auto_sizing_QMARK_,(self__.size + editscript.edit.get_size(that)),(self__.adds_num + editscript.edit.get_adds_num(that)),(self__.dels_num + editscript.edit.get_dels_num(that)),(self__.reps_num + editscript.edit.get_reps_num(that))));
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_size$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.size;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$set_size$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
(self__.size = cljs.core.long$(s));

return this$__$1;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_edits$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.edits;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_adds_num$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.adds_num;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_dels_num$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.dels_num;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_reps_num$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.reps_num;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$edit_distance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.adds_num + self__.dels_num) + self__.reps_num);
}));

(editscript.edit.EditScript.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"edits","edits",-599366147,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-sizing?","auto-sizing?",-1705546383,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"adds-num","adds-num",-1467287693,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dels-num","dels-num",819513451,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"reps-num","reps-num",582946575,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null))], null);
}));

(editscript.edit.EditScript.cljs$lang$type = true);

(editscript.edit.EditScript.cljs$lang$ctorStr = "editscript.edit/EditScript");

(editscript.edit.EditScript.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"editscript.edit/EditScript");
}));

/**
 * Positional factory function for editscript.edit/EditScript.
 */
editscript.edit.__GT_EditScript = (function editscript$edit$__GT_EditScript(edits,auto_sizing_QMARK_,size,adds_num,dels_num,reps_num){
return (new editscript.edit.EditScript(edits,auto_sizing_QMARK_,size,adds_num,dels_num,reps_num));
});

editscript.edit.valid_str_edits_QMARK_ = (function editscript$edit$valid_str_edits_QMARK_(data,level){
return ((cljs.core.vector_QMARK_(data)) && (cljs.core.every_QMARK_((function (x){
var or__5045__auto__ = cljs.core.nat_int_QMARK_(x);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto____$1 = cljs.core.vector_QMARK_(x);
if(and__5043__auto____$1){
var and__5043__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x));
if(and__5043__auto____$2){
var vec__50428 = x;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50428,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50428,(1),null);
var and__5043__auto____$3 = (function (){var fexpr__50431 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"+","+",1913524883),null], null), null);
return (fexpr__50431.cljs$core$IFn$_invoke$arity$1 ? fexpr__50431.cljs$core$IFn$_invoke$arity$1(op) : fexpr__50431.call(null,op));
})();
if(cljs.core.truth_(and__5043__auto____$3)){
var G__50438 = op;
var G__50438__$1 = (((G__50438 instanceof cljs.core.Keyword))?G__50438.fqn:null);
switch (G__50438__$1) {
case "-":
return cljs.core.nat_int_QMARK_(y);

break;
case "+":
case "r":
var G__50441 = level;
var G__50441__$1 = (((G__50441 instanceof cljs.core.Keyword))?G__50441.fqn:null);
switch (G__50441__$1) {
case "s":
return typeof y === 'string';

break;
case "sl":
case "sw":
return cljs.core.vector_QMARK_(y);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50441__$1)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50438__$1)].join('')));

}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
}
}),data)));
});
editscript.edit.valid_edit_QMARK_ = (function editscript$edit$valid_edit_QMARK_(edit){
if(cljs.core.vector_QMARK_(edit)){
var c = cljs.core.count(edit);
if(((((1) < c)) && ((c < (4))))){
var vec__50479 = edit;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50479,(0),null);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50479,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50479,(2),null);
var and__5043__auto__ = cljs.core.vector_QMARK_(path);
if(and__5043__auto__){
var and__5043__auto____$1 = (function (){var fexpr__50485 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"sl","sl",1007549161),null,new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"+","+",1913524883),null,new cljs.core.Keyword(null,"sw","sw",833113913),null], null), null);
return (fexpr__50485.cljs$core$IFn$_invoke$arity$1 ? fexpr__50485.cljs$core$IFn$_invoke$arity$1(op) : fexpr__50485.call(null,op));
})();
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"-","-",-2112348439),op))?(data == null):cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,(3)));
if(and__5043__auto____$2){
if(cljs.core.truth_((function (){var fexpr__50491 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sl","sl",1007549161),null,new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"sw","sw",833113913),null], null), null);
return (fexpr__50491.cljs$core$IFn$_invoke$arity$1 ? fexpr__50491.cljs$core$IFn$_invoke$arity$1(op) : fexpr__50491.call(null,op));
})())){
return editscript.edit.valid_str_edits_QMARK_(data,op);
} else {
return true;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
} else {
return null;
}
} else {
return null;
}
});
editscript.edit.valid_edits_QMARK_ = (function editscript$edit$valid_edits_QMARK_(edits){
if(cljs.core.vector_QMARK_(edits)){
if(cljs.core.seq(edits)){
return cljs.core.every_QMARK_(editscript.edit.valid_edit_QMARK_,edits);
} else {
return true;
}
} else {
return null;
}
});
editscript.edit.count_str_ops = (function editscript$edit$count_str_ops(data,adds,dels,reps){
var seq__50509 = cljs.core.seq(data);
var chunk__50512 = null;
var count__50513 = (0);
var i__50514 = (0);
while(true){
if((i__50514 < count__50513)){
var d = chunk__50512.cljs$core$IIndexed$_nth$arity$2(null,i__50514);
if(cljs.core.vector_QMARK_(d)){
var G__50544_50812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(d,(0));
var G__50544_50813__$1 = (((G__50544_50812 instanceof cljs.core.Keyword))?G__50544_50812.fqn:null);
switch (G__50544_50813__$1) {
case "+":
cljs.core._vreset_BANG_(adds,(cljs.core._deref(adds) + (1)));

break;
case "-":
cljs.core._vreset_BANG_(dels,(cljs.core._deref(dels) + (1)));

break;
case "r":
cljs.core._vreset_BANG_(reps,(cljs.core._deref(reps) + (1)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50544_50813__$1)].join('')));

}


var G__50821 = seq__50509;
var G__50822 = chunk__50512;
var G__50823 = count__50513;
var G__50824 = (i__50514 + (1));
seq__50509 = G__50821;
chunk__50512 = G__50822;
count__50513 = G__50823;
i__50514 = G__50824;
continue;
} else {
var G__50825 = seq__50509;
var G__50826 = chunk__50512;
var G__50827 = count__50513;
var G__50828 = (i__50514 + (1));
seq__50509 = G__50825;
chunk__50512 = G__50826;
count__50513 = G__50827;
i__50514 = G__50828;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50509);
if(temp__5753__auto__){
var seq__50509__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50509__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50509__$1);
var G__50831 = cljs.core.chunk_rest(seq__50509__$1);
var G__50832 = c__5568__auto__;
var G__50833 = cljs.core.count(c__5568__auto__);
var G__50834 = (0);
seq__50509 = G__50831;
chunk__50512 = G__50832;
count__50513 = G__50833;
i__50514 = G__50834;
continue;
} else {
var d = cljs.core.first(seq__50509__$1);
if(cljs.core.vector_QMARK_(d)){
var G__50555_50836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(d,(0));
var G__50555_50837__$1 = (((G__50555_50836 instanceof cljs.core.Keyword))?G__50555_50836.fqn:null);
switch (G__50555_50837__$1) {
case "+":
cljs.core._vreset_BANG_(adds,(cljs.core._deref(adds) + (1)));

break;
case "-":
cljs.core._vreset_BANG_(dels,(cljs.core._deref(dels) + (1)));

break;
case "r":
cljs.core._vreset_BANG_(reps,(cljs.core._deref(reps) + (1)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50555_50837__$1)].join('')));

}


var G__50841 = cljs.core.next(seq__50509__$1);
var G__50842 = null;
var G__50843 = (0);
var G__50844 = (0);
seq__50509 = G__50841;
chunk__50512 = G__50842;
count__50513 = G__50843;
i__50514 = G__50844;
continue;
} else {
var G__50846 = cljs.core.next(seq__50509__$1);
var G__50847 = null;
var G__50848 = (0);
var G__50849 = (0);
seq__50509 = G__50846;
chunk__50512 = G__50847;
count__50513 = G__50848;
i__50514 = G__50849;
continue;
}
}
} else {
return null;
}
}
break;
}
});
editscript.edit.count_ops = (function editscript$edit$count_ops(edits){
var adds = cljs.core.volatile_BANG_((0));
var dels = cljs.core.volatile_BANG_((0));
var reps = cljs.core.volatile_BANG_((0));
var seq__50561_50850 = cljs.core.seq(edits);
var chunk__50562_50851 = null;
var count__50563_50852 = (0);
var i__50564_50853 = (0);
while(true){
if((i__50564_50853 < count__50563_50852)){
var vec__50608_50854 = chunk__50562_50851.cljs$core$IIndexed$_nth$arity$2(null,i__50564_50853);
var __50855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50608_50854,(0),null);
var op_50856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50608_50854,(1),null);
var data_50857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50608_50854,(2),null);
var G__50611_50858 = op_50856;
var G__50611_50859__$1 = (((G__50611_50858 instanceof cljs.core.Keyword))?G__50611_50858.fqn:null);
switch (G__50611_50859__$1) {
case "+":
adds.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(adds.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "-":
dels.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(dels.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "r":
reps.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(reps.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "s":
case "sw":
case "sl":
editscript.edit.count_str_ops(data_50857,adds,dels,reps);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50611_50859__$1)].join('')));

}


var G__50861 = seq__50561_50850;
var G__50862 = chunk__50562_50851;
var G__50863 = count__50563_50852;
var G__50864 = (i__50564_50853 + (1));
seq__50561_50850 = G__50861;
chunk__50562_50851 = G__50862;
count__50563_50852 = G__50863;
i__50564_50853 = G__50864;
continue;
} else {
var temp__5753__auto___50865 = cljs.core.seq(seq__50561_50850);
if(temp__5753__auto___50865){
var seq__50561_50866__$1 = temp__5753__auto___50865;
if(cljs.core.chunked_seq_QMARK_(seq__50561_50866__$1)){
var c__5568__auto___50871 = cljs.core.chunk_first(seq__50561_50866__$1);
var G__50872 = cljs.core.chunk_rest(seq__50561_50866__$1);
var G__50873 = c__5568__auto___50871;
var G__50874 = cljs.core.count(c__5568__auto___50871);
var G__50875 = (0);
seq__50561_50850 = G__50872;
chunk__50562_50851 = G__50873;
count__50563_50852 = G__50874;
i__50564_50853 = G__50875;
continue;
} else {
var vec__50614_50877 = cljs.core.first(seq__50561_50866__$1);
var __50878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50614_50877,(0),null);
var op_50879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50614_50877,(1),null);
var data_50880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50614_50877,(2),null);
var G__50619_50882 = op_50879;
var G__50619_50883__$1 = (((G__50619_50882 instanceof cljs.core.Keyword))?G__50619_50882.fqn:null);
switch (G__50619_50883__$1) {
case "+":
adds.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(adds.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "-":
dels.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(dels.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "r":
reps.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(reps.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "s":
case "sw":
case "sl":
editscript.edit.count_str_ops(data_50880,adds,dels,reps);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50619_50883__$1)].join('')));

}


var G__50890 = cljs.core.next(seq__50561_50866__$1);
var G__50891 = null;
var G__50892 = (0);
var G__50893 = (0);
seq__50561_50850 = G__50890;
chunk__50562_50851 = G__50891;
count__50563_50852 = G__50892;
i__50564_50853 = G__50893;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(adds),cljs.core.deref(dels),cljs.core.deref(reps)], null);
});
/**
 * Create an EditScript instance from a vector of edits, like those obtained
 *   through calling `get-edits` on an EditScript
 */
editscript.edit.edits__GT_script = (function editscript$edit$edits__GT_script(edits){
if(cljs.core.truth_(editscript.edit.valid_edits_QMARK_(edits))){
} else {
throw (new Error(["Assert failed: ","Not a vector of valid edits","\n","(valid-edits? edits)"].join('')));
}

var vec__50624 = editscript.edit.count_ops(edits);
var adds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50624,(0),null);
var dels = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50624,(1),null);
var reps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50624,(2),null);
return editscript.edit.__GT_EditScript(edits,true,editscript.edit.sizing(edits),adds,dels,reps);
});
(editscript.edit.EditScript.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.EditScript.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,opts){
var o__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(o__$1.editscript$edit$IEditScript$get_edits$arity$1(null))], 0));
}));

//# sourceMappingURL=editscript.edit.js.map
