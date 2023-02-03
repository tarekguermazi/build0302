"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[874],{50874:function(e,a,n){n.r(a),n.d(a,{default:function(){return A}});var r=n(29439),t=n(72791),s=n(69025),i=n(91523),o=n(1413),l=n(77942),c=n(28646),u=n(68835),d=n(87705),m={type:["Legal","logistique"],etat:["En_ligne","physique"],gouvernorat:["tunis","ariana","gafsa","kasserine","monastir","sousse","beja"],importance:["Haute","modere","normale"]},p=n(25930),f=n(45003),h=n(16931),v=n(44825),g=n(81657),x=n(2107),j=n(80184),b=l.Ry().shape({gouvernorat:c.Z.enumerator((0,p.ag)("entities.demandeAppui.fields.gouvernorat"),{options:m.gouvernorat}),phoneNumber:c.Z.string((0,p.ag)("user.fields.phoneNumber"),{matches:/^[0-9]/,max:8,required:!0}),descriptionFR:c.Z.string((0,p.ag)("entities.demandeAppui.fields.description"),{required:!0}),supports:c.Z.files((0,p.ag)("entities.demandeAppui.fields.supports"),{})});var N=function(e){var a=(0,t.useState)("physique"),n=(0,r.Z)(a,2),s=n[0],i=n[1],l=(0,t.useState)("legal"),c=(0,r.Z)(l,2),m=c[0],N=c[1],_=(0,t.useState)((function(){var a=e.record||{};return i(a.personne),N(a.types),{email:a.email,personne:a.personne,phoneNumber:a.phoneNumber,descriptionFR:a.descriptionFR,supports:a.supports||[]}})),Z=(0,r.Z)(_,1)[0],C=(0,d.cI)({resolver:(0,u.X)(b),mode:"all",defaultValues:Z}),q=function(a){var n;a.personne=s,a.statut="en_attente",a.types=m,e.onSubmit(null===e||void 0===e||null===(n=e.record)||void 0===n?void 0:n.id,a)},y=e.saveLoading;return(0,j.jsx)(d.RV,(0,o.Z)((0,o.Z)({},C),{},{children:(0,j.jsx)("form",{onSubmit:C.handleSubmit(q),children:(0,j.jsxs)("div",{className:"container__form",children:[(0,j.jsxs)("div",{className:"form__importance",children:[(0,j.jsx)("label",{htmlFor:"Importance",children:"Personne"}),(0,j.jsxs)("div",{className:"importance__status",children:[(0,j.jsx)("div",{className:"physique"===s?"status__active":"",onClick:function(){i("physique")},children:"physique"}),(0,j.jsx)("div",{className:"Organisation"===s?"status__active":"",onClick:function(){i("Organisation")},children:"Organisation"})]})]}),(0,j.jsxs)("div",{className:"form__importance",children:[(0,j.jsx)("label",{htmlFor:"Importance",children:"Type"}),(0,j.jsxs)("div",{className:"importance__status",children:[(0,j.jsx)("div",{className:"legal"===m?"status__active":"",onClick:function(){N("legal")},children:"Legal"}),(0,j.jsx)("div",{className:"logistique"===m?"status__active":"",onClick:function(){N("logistique")},children:"logistique"})]})]}),(0,j.jsx)(x.Z,{name:"email",label:(0,p.ag)("user.fields.email"),autoComplete:"email"}),(0,j.jsx)(x.Z,{name:"phoneNumber",label:(0,p.ag)("user.fields.phoneNumber"),autoComplete:"phoneNumber"}),(0,j.jsx)(v.Z,{name:"supports",label:(0,p.ag)("entities.demandeAppui.fields.supports"),required:!1,storage:g.Z.values.demandeAppuiSupports,max:void 0,formats:void 0}),(0,j.jsx)(f.Z,{name:"descriptionFR",label:(0,p.ag)("entities.demandeAppui.fields.description"),required:!1}),(0,j.jsxs)("div",{className:"item__button",children:[(0,j.jsx)("button",{className:"cancel__button",onClick:function(){Object.keys(Z).forEach((function(e){C.setValue(e,Z[e])}))},type:"button",disabled:y,children:(0,p.ag)("common.reset")}),(0,j.jsxs)("button",{className:"form__button",onClick:C.handleSubmit(q),disabled:y,children:[(0,j.jsx)(h.Z,{loading:y}),(0,p.ag)("common.save")]})]})]})})}))},_=n(55478),Z=n(94233),C=n(50873),q=function(e){return e.demandeAppui.form},y=(0,C.P1)([q],(function(e){return e.record})),k={selectInitLoading:(0,C.P1)([q],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:(0,C.P1)([q],(function(e){return Boolean(e.saveLoading)})),selectRecord:y,selectRaw:q},S=n(2721),B=n(79271),F=n(75992),w=n(84078);var A=function(e){var a=(0,t.useState)(!1),n=(0,r.Z)(a,2),o=n[0],l=n[1],c=(0,Z.I0)(),u=(0,B.$B)(),d=(0,Z.v9)(k.selectInitLoading),m=(0,Z.v9)(k.selectSaveLoading),f=(0,Z.v9)(k.selectRecord),h=Boolean(u.params.id),v=h?"entities.demandeAppui.edit.title":"entities.demandeAppui.new.title";return(0,t.useEffect)((function(){c(_.Z.doInit(u.params.id)),l(!0)}),[c,u.params.id]),(0,j.jsxs)("div",{className:"app__contenu",children:[(0,j.jsx)(i.rU,{to:"/profile",children:(0,j.jsx)(w.Z,{})}),(0,j.jsxs)("div",{className:"contenu",children:[(0,j.jsxs)("div",{className:"archieve__header",children:[(0,j.jsx)("h2",{children:(0,p.ag)("menu.demande_appui")}),(0,j.jsx)("div",{className:"communiquer__bar"})]}),(0,j.jsx)("div",{className:"contenu__description",children:"Description lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus eros metus, sit amet scelerisque odio posuere eu. Sed vitae pharetra lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra"}),(0,j.jsx)(s.Z,{children:(0,j.jsxs)("div",{className:"Login__container",children:[d&&(0,j.jsx)(F.C,{}),o&&!d&&(0,j.jsx)(N,{title:v,saveLoading:m,record:f,isEditing:h,onSubmit:function(e,a){c(h?_.Z.doUpdate(e,a):_.Z.doCreate(a))},onCancel:function(){return(0,S.s1)().push("/demande-appui")}})]})})]})]})}},44825:function(e,a,n){n.d(a,{Z:function(){return g}});var r=n(72791),t=n(74165),s=n(93433),i=n(15861),o=n(29439),l=n(38658),c=n(68561),u=n(25930),d=n(16931),m=n(80184);var p=function(e){var a=(0,r.useState)(!1),n=(0,o.Z)(a,2),p=n[0],f=n[1],h=(0,r.useRef)(),v=function(){var a=e.value;return a?Array.isArray(a)?a:[a]:[]},g=function(){var a=(0,i.Z)((0,t.Z)().mark((function a(n){var r,i;return(0,t.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,(r=n.target.files)&&r.length){a.next=4;break}return a.abrupt("return");case 4:return i=r[0],l.Z.validate(i,{storage:e.storage,formats:e.formats}),f(!0),a.next=9,l.Z.upload(i,{storage:e.storage,formats:e.formats});case 9:i=a.sent,h.current.value="",f(!1),e.onChange([].concat((0,s.Z)(v()),[i])),a.next=21;break;case 15:a.prev=15,a.t0=a.catch(0),h.current.value="",console.error(a.t0),f(!1),c.Z.showMessage(a.t0);case 21:case"end":return a.stop()}}),a,null,[[0,15]])})));return function(e){return a.apply(this,arguments)}}(),x=e.max,j=e.readonly,b=(0,m.jsxs)("label",{className:"btn btn-outline-secondary px-4 mb-2",style:{cursor:"pointer"},children:[(0,m.jsxs)("div",{className:"upload__file",children:[(0,u.ag)("fileUploader.upload"),(0,m.jsx)(d.Z,{loading:p,iconClass:"fas fa-plus"})]}),(0,m.jsx)("input",{style:{display:"none"},disabled:p||j,accept:function(){var a=e.schema;if(a&&a.formats)return a.formats.map((function(e){return".".concat(e)})).join(",")}(),type:"file",onChange:g,ref:h})]});return(0,m.jsxs)("div",{children:[j||x&&v().map((function(e){return{uid:e.id||void 0,name:e.name,status:"done",url:e.downloadUrl}})).length>=x?null:b,v()&&v().length?(0,m.jsx)("div",{children:v().map((function(a){return(0,m.jsxs)("div",{className:"file__show",children:[(0,m.jsx)("i",{className:"fas fa-link text-muted mr-2"}),(0,m.jsx)("a",{href:a.downloadUrl,target:"_blank",rel:"noopener noreferrer",download:!0,children:a.name}),!j&&(0,m.jsx)("button",{className:"btn btn-link",type:"button",onClick:function(){return n=a.id,void e.onChange(v().filter((function(e){return e.id!==n})));var n},children:(0,m.jsx)("i",{className:"fas fa-times"})})]},a.id)}))}):null]})},f=n(87705),h=n(34141);function v(e){var a=e.label,n=e.name,t=e.hint,s=e.storage,i=e.formats,o=e.max,l=e.required,c=e.externalErrorMessage,u=(0,f.Gc)(),d=u.register,v=u.errors,g=u.formState,x=g.touched,j=g.isSubmitted,b=u.setValue,N=u.watch;(0,r.useEffect)((function(){d({name:n})}),[d,n]);var _=h.Z.errorMessage(n,v,x,j,c);return(0,m.jsxs)("div",{className:"form-group",children:[Boolean(a)&&(0,m.jsx)("label",{className:"col-form-label ".concat(l?"required":null),htmlFor:n,children:a}),(0,m.jsx)("br",{}),(0,m.jsx)(p,{storage:s,formats:i,value:N(n),onChange:function(a){b(n,a,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(a)},max:o}),(0,m.jsx)("div",{className:"invalid-feedback",children:_}),Boolean(t)&&(0,m.jsx)("small",{className:"form-text text-muted",children:t})]})}v.defaultProps={max:void 0,required:!1};var g=v},2107:function(e,a,n){n(72791);var r=n(87705),t=n(34141),s=n(80184);function i(e){var a=e.label,n=e.description,i=e.name,o=e.hint,l=e.type,c=(e.placeholder,e.autoFocus),u=e.autoComplete,d=e.required,m=e.externalErrorMessage,p=e.disabled,f=e.endAdornment,h=(0,r.Gc)(),v=h.register,g=h.errors,x=h.formState,j=x.touched,b=x.isSubmitted,N=t.Z.errorMessage(i,g,j,b,m);return(0,s.jsxs)("div",{className:"form__group",children:[(0,s.jsxs)("div",{className:f?"input-group":"",children:[Boolean(a)&&(0,s.jsx)("label",{className:"".concat(d?"required":null),htmlFor:i,children:a}),n,(0,s.jsx)("input",{id:i,name:i,type:l,ref:v,onChange:function(a){e.onChange&&e.onChange(a.target.value)},onBlur:function(a){e.onBlur&&e.onBlur(a)},autoFocus:c||void 0,autoComplete:u||void 0,disabled:p,className:"form-control ".concat(N?"is-invalid":"")}),f&&(0,s.jsx)("div",{className:"input-group-append",children:(0,s.jsx)("span",{className:"input-group-text",children:f})})]}),(0,s.jsx)("div",{className:"invalid-feedback",children:N}),Boolean(o)&&(0,s.jsx)("small",{className:"form-text text-muted",children:o})]})}i.defaultProps={type:"text",required:!1},a.Z=i},45003:function(e,a,n){n(72791);var r=n(87705),t=n(34141),s=n(80184);function i(e){var a=e.label,n=e.name,i=e.hint,o=e.size,l=e.placeholder,c=e.autoFocus,u=e.autoComplete,d=e.externalErrorMessage,m=e.required,p={small:"col-form-label-sm",large:"col-form-label-lg"}[o]||"",f={small:"form-control-sm",large:"form-control-lg"}[o]||"",h=(0,r.Gc)(),v=h.register,g=h.errors,x=h.formState,j=x.touched,b=x.isSubmitted,N=t.Z.errorMessage(n,g,j,b,d);return(0,s.jsxs)("div",{className:"form_textarea",children:[Boolean(a)&&(0,s.jsx)("label",{className:"col-form-label ".concat(m?"required":null," ").concat(p),htmlFor:n,children:a}),(0,s.jsx)("textarea",{id:n,name:n,ref:v,onChange:function(a){e.onChange&&e.onChange(a.target.value)},onBlur:function(a){e.onBlur&&e.onBlur(a)},placeholder:l||void 0,autoFocus:c||void 0,autoComplete:u||void 0,className:"form-control ".concat(f," ").concat(N?"is-invalid":"")}),(0,s.jsx)("div",{className:"invalid-feedback",children:N}),Boolean(i)&&(0,s.jsx)("small",{className:"form-text text-muted",children:i})]})}i.defaultProps={required:!1},a.Z=i}}]);
//# sourceMappingURL=874.83179c1b.chunk.js.map