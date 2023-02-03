"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[470],{10255:function(e,n,t){var s=t(72791),i=t(91523),r=t(72040),a=t(94233),o=t(57967),c=t(23140),l=t(25930),d=t(80184);n.Z=function(){var e=(0,a.I0)(),n=((0,a.v9)(c.Z.selectLoadingVenir),(0,a.v9)(c.Z.selectRowsVenir));return(0,s.useEffect)((function(){e(o.Z.evenementvenir())}),[]),(0,d.jsx)("div",{className:"evenment__venir",children:(0,d.jsxs)("div",{className:"venir",children:[(0,d.jsxs)("div",{className:"archieve__header",children:[(0,d.jsx)("h2",{children:(0,l.ag)("common.evenementVenir")}),(0,d.jsx)("div",{className:"satestique__bar"})]}),(0,d.jsx)("div",{className:"venir__content",children:n.map((function(e,n){return(0,d.jsx)(r.Z,{data:e})}))}),(0,d.jsx)(i.rU,{to:"/detaill/Evenement/Venir",children:(0,d.jsx)("div",{className:"plus__button",children:(0,l.ag)("common.voirPlus")})})]})})}},72040:function(e,n,t){t(72791);var s=t(16856),i=t(91523),r=t(85785),a=t(32771),o=t(4726),c=t(80184);n.Z=function(e){var n=e.data;return(0,c.jsxs)("div",{children:[(0,c.jsx)(i.rU,{to:"/Evenements/".concat(n._id),children:(0,c.jsxs)("div",{className:"contentVenir__top",children:[(0,c.jsx)(a.Z,{width:370,height:220,src:n.supports[0].downloadUrl,alt:""}),(0,c.jsxs)("div",{className:"venir__clendar",children:[(0,c.jsx)("div",{className:"calendar__number",children:r.Z.Day(n.date)}),(0,c.jsx)("div",{className:"calendar__months",children:r.Z.Month(n.date)})]})]})}),(0,c.jsxs)("div",{className:"contentVenir__bottom",children:[(0,c.jsxs)("div",{className:"venir__localistaion",children:[(0,c.jsx)(s.$0r,{}),o.Z.TransEmplacement(n)]}),(0,c.jsx)("div",{className:"venir__description",children:o.Z.Trans("title",n)})]})]})}},19565:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var s=t(72791),i=t(8765),r=t(25930),a=t(78820),o=t(16856),c=t(29439),l=t(27314),d=t(80184);function u(e){var n=e.direction,t=e.moveSlide;return(0,d.jsx)("button",{onClick:t,className:"next"===n?"btn-slide next":"btn-slide prev",children:(0,d.jsx)("img",{src:"next"===n?l.rz:l.VJ,alt:"arrow"})})}var m=t(49123),v=((0,m.Z)(),(0,m.Z)(),(0,m.Z)(),(0,m.Z)(),(0,m.Z)(),[{title:"Criminalization of refugees: the dark side of EU and UNHCR policies..."},{title:"En Tunisie, r\xe9fugi\xe9.e.s et demandeur.se.s d\u2019asile abandonn\xe9s dans une situation humanitaire critique"},{title:"Enjeux de gouvernance des for\xeats urbaines. Cas du parc urbain Farhat Hached \xe0 Rad\xe8s"},{title:"Zones urbaines et foresti\xe8res semi-urbaines. Quelle relation ?"}]),h=t(32771);var f=function(e){var n=e.slider,t=e.rows,i=(0,s.useState)(1),r=(0,c.Z)(i,2),a=r[0],o=r[1],l=Number(e.width),m=Number(e.height);return(0,d.jsxs)("div",{className:"container-slider",style:{width:l,height:m},children:[t.map((function(t,s){var i;return(0,d.jsxs)("div",{className:a===s+1?"slide active-anim":"slide",children:[(0,d.jsx)(h.Z,{width:l,height:m,src:(null===t||void 0===t||null===(i=t.supports[0])||void 0===i?void 0:i.downloadUrl)||void 0,alt:n}),e.render(t)]},t.id)})),(0,d.jsx)(u,{moveSlide:function(){a!==t.length?o(a+1):a===t.length&&o(1)},direction:"next"}),(0,d.jsx)(u,{moveSlide:function(){1!==a?o(a-1):1===a&&o(t.length)},direction:"prev"}),(null===e||void 0===e?void 0:e.showDots)&&(0,d.jsx)("div",{className:"container-dots",children:e.rows.map((function(e,n){return(0,d.jsx)("div",{onClick:function(){return function(e){o(e)}(n+1)},className:a===n+1?"dot active":"dot"})}))}),!(null!==e&&void 0!==e&&e.showDots)&&(0,d.jsx)("div",{className:"content__sliderBottom",children:v.map((function(n,t){return e.bottomrender(n,t,a)}))})]})},x=t(10255),p=t(72040),j=t(94233),_=t(57967),g=t(23140),N=t(91523);var Z=function(){(0,j.v9)(g.Z.selectLoadingPasse);var e=(0,j.v9)(g.Z.selectRowsPasse),n=(0,j.I0)();return(0,s.useEffect)((function(){n(_.Z.evenementpasse())}),[]),(0,d.jsx)("div",{className:"evenment__passe",children:(0,d.jsxs)("div",{className:"passe",children:[(0,d.jsxs)("div",{className:"archieve__header",children:[(0,d.jsx)("h2",{children:(0,r.ag)("common.evenementPasse")}),(0,d.jsx)("div",{className:"satestique__bar"})]}),(0,d.jsx)("div",{className:"passe__content",children:e.map((function(e,n){return(0,d.jsx)(p.Z,{data:e})}))}),(0,d.jsx)(N.rU,{to:"/detaill/Evenement/Passe",children:(0,d.jsx)("div",{className:"plus__button",children:(0,r.ag)("common.voirPlus")})})]})})},b=t(85785),y=t(4726);var w=function(){var e=(0,j.I0)(),n=((0,j.v9)(g.Z.selectRows),(0,j.v9)(g.Z.selectRows));return(0,s.useEffect)((function(){e(_.Z.doFetch())}),[]),(0,d.jsxs)("div",{className:"__evenement",children:[(0,d.jsx)(i.Z,{title:(0,r.ag)("common.Ev\xe8nements"),items:[[(0,r.ag)("app.title"),"/"],[(0,r.ag)("common.Ev\xe8nements")]]}),(0,d.jsxs)("div",{className:"page__evenement",children:[(0,d.jsx)("div",{className:"evenment__header",children:(0,d.jsx)(f,{rows:n,height:404,width:1170,label:"slider",render:function(e){return(0,d.jsxs)("div",{className:"evenement__message",children:[(0,d.jsxs)("div",{className:"messageEvenement__left",children:[(0,d.jsx)("div",{className:"left__number",children:b.Z.Day(null===e||void 0===e?void 0:e.date)}),(0,d.jsx)("div",{className:"left__months",children:b.Z.Month(null===e||void 0===e?void 0:e.date)})]}),(0,d.jsxs)("div",{className:"messageEvenement__right",children:[(0,d.jsx)("div",{className:"messageEvenement__title",children:y.Z.Trans("title",e)}),(0,d.jsxs)("div",{className:"messageEvenement__description",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(a.xHR,{}),b.Z.date(null===e||void 0===e?void 0:e.date)]}),(0,d.jsxs)("div",{children:[(0,d.jsx)(o.$0r,{}),y.Z.TransEmplacement(e)]})]})]})]})},showDots:!0})}),(0,d.jsx)(x.Z,{}),(0,d.jsx)(Z,{})]})]})}},8765:function(e,n,t){var s,i=t(30168),r=(t(72791),t(91523)),a=t(86538),o=t(80184),c=a.ZP.div(s||(s=(0,i.Z)(['\n\tmargin: 28px 0 10px 0;\n\t.breadcrumb {\n\t\twidth: 100%;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbackground-color: transparent;\n\t}\n\tol {\n\t\tdisplay: flex;\n\t}\n\tli {\n\t\tfont-family: "Proxima Nova";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-size: 14px;\n\t\tline-height: 25px;\n\t}\n\t.breadcrump__nav {\n\t\tmargin: auto;\n\t\tleft: 0;\n\t\tdisplay: flex;\n\t\tmax-width: 1170px;\n\t\tflex-direction: column;\n\t}\n\n\t.breadcrumb-item:not(.active) a {\n\t\tcolor: rgba(0, 0, 0, 0.45);\n\t}\n\n\th2 {\n\t\tfont-family: "Bebas Neue Pro";\n\t\tfont-style: normal;\n\t\tfont-weight: 700;\n\t\tfont-size: 47px;\n\t\tline-height: 39px;\n\t}\n'])));n.Z=function(e){var n=function(e){return e.length>1};return(0,o.jsx)(c,{children:(0,o.jsxs)("div",{className:"breadcrump__nav",children:[(0,o.jsx)("div",{children:(0,o.jsx)("h2",{children:e.title})}),(0,o.jsx)("div",{children:(0,o.jsx)("ol",{className:"breadcrumb",children:e.items.map((function(t,s){return(0,o.jsx)("li",{className:"breadcrumb-item ".concat(e.items.length-1===s?"active":""),children:n(t)?(0,o.jsxs)(r.rU,{to:t[1],children:[" ",t[0]," ",t[1]]}):t[0]},t[0])}))})})]})})}},85785:function(e,n,t){var s=t(15671),i=t(43144),r=t(72426),a=t.n(r),o=function(){function e(){(0,s.Z)(this,e)}return(0,i.Z)(e,null,[{key:"Hour",value:function(e){return a()(e).format("hh:mm a")}},{key:"HourMinute",value:function(e){return a()(e).format("DD-MM-YYYY HH:mm")}},{key:"fullDate",value:function(e){return a()(e).format("DD-MM-YYYY")}},{key:"Day",value:function(e){return a()(e).format("D")}},{key:"Month",value:function(e){return a()(e).format("MMMM")}},{key:"Year",value:function(e){return a()(e).format("y")}},{key:"date",value:function(e){var n=this.Day(e),t=this.Month(e),s=this.Year(e);return"".concat(n," ").concat(t," ").concat(s," ")}},{key:"DetaillDate",value:function(e){return a()(e).format("dddd, MMMM Do YYYY")}}]),e}();o.pipeDate=function(e){var n=e.split("T")[0];return a()(n).format("LL")},n.Z=o},32771:function(e,n,t){t(72791);var s=t(87087),i=(t(19713),t(80184));n.Z=function(e){var n=e.src,t=e.width,r=e.height,a=e.alt,o=e.caption,c=e.key,l=n||"https://placehold.jp/".concat(t,"x").concat(r,".png");return(0,i.jsx)(s.LazyLoadImage,{alt:a,height:r,src:l,width:t,effect:"blur",caption:o},c)}},49123:function(e,n,t){t.d(n,{Z:function(){return l}});var s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),i=new Uint8Array(16);function r(){if(!s)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(i)}for(var a=[],o=0;o<256;++o)a[o]=(o+256).toString(16).substr(1);var c=function(e,n){var t=n||0,s=a;return[s[e[t++]],s[e[t++]],s[e[t++]],s[e[t++]],"-",s[e[t++]],s[e[t++]],"-",s[e[t++]],s[e[t++]],"-",s[e[t++]],s[e[t++]],"-",s[e[t++]],s[e[t++]],s[e[t++]],s[e[t++]],s[e[t++]],s[e[t++]]].join("")};var l=function(e,n,t){var s=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n)for(var a=0;a<16;++a)n[s+a]=i[a];return n||c(i)}}}]);
//# sourceMappingURL=470.7eabbb16.chunk.js.map