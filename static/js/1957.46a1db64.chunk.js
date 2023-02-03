"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[1957],{54065:function(n,t,e){e.d(t,{Z:function(){return h}});var i=e(74165),a=e(15861),r=e(15671),o=e(43144),s=e(27415),l=e(56856),c=e(72426),d=e.n(c),h=function(){function n(){(0,r.Z)(this,n)}return(0,o.Z)(n,null,[{key:"getLatestMediatheques",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(){var t,e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=l.Z.get(),n.next=3,s.Z.get("/tenant/".concat(t,"/mediatique/"));case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"getMediathequesBasedOnType",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(t){var e,a;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=l.Z.get(),n.next=3,s.Z.get("/tenant/".concat(e,"/mediatique/").concat(t));case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},{key:"getOneMediatheque",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(t){var e,a;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=l.Z.get(),n.next=3,s.Z.get("/tenant/".concat(e,"/mediatique/").concat(t));case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},{key:"pipeDate",value:function(n){var t=n.split("T")[0];return d()(t).format("LL")}},{key:"getDate",value:function(n){return null===n||void 0===n?void 0:n.split("T")[0]}},{key:"getTime",value:function(n){return null===n||void 0===n?void 0:n.split("T")[1]}}]),n}()},919:function(n,t,e){e.r(t),e.d(t,{default:function(){return an}});var i,a,r,o=e(30168),s=e(72791),l=e(86538),c=e(29439),d=e(54065),h=l.ZP.section(i||(i=(0,o.Z)(["\n\tcolor: #fff;\n\theight: auto;\n\n\t.bottomGrid {\n\t\theight: 704px;\n\t\twidth: 100%;\n\t\tpadding-top: calc(704px - 450px);\n\t\tborder-top: 5px solid red;\n\t\tbackground-color: var(--violet-dark);\n\t\tposition: relative;\n\t\ttop: -200px;\n\n\t\t.loaderPlaceholder {\n\t\t\twidth: var(--cerntered-content);\n\t\t\tmargin: auto;\n\t\t\theight: 330px;\n\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\talign-items: center;\n\t\t\tjustify-content: space-between;\n\n\t\t\t.customLoader {\n\t\t\t\twidth: 350px;\n\t\t\t}\n\t\t}\n\t}\n\n\t.splideContent {\n\t\twidth: var(--cerntered-content);\n\t\theight: 507px;\n\t\tmargin: auto;\n\t\tbackground-color: transparent;\n\t\tposition: relative;\n\t\tz-index: 4;\n\t}\n\n\t@media (max-width: 767px) {\n\t\theight: auto;\n\t\t.bottomGrid {\n\t\t\tpadding-top: 1rem;\n\t\t\theight: auto;\n\t\t}\n\n\t\t.splideContent {\n\t\t\twidth: 100%;\n\t\t\theight: 210px;\n\t\t\t/* overflow: hidden; */\n\t\t}\n\t}\n"]))),p=l.ZP.section(a||(a=(0,o.Z)(['\n  header {\n    margin-bottom: 3rem;\n\n    h1 {\n      width: 100%;\n      font-size: 2rem;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: flex-end;\n      color: #fff;\n      line-height: 0.7;\n\n      &:after {\n        content: "";\n        display: inline-block;\n        flex-grow: 1;\n        height: 1px;\n        background-color: red;\n      }\n    }\n  }\n\n  main {\n    width: 100%;\n    position: relative;\n\n    /* STYLING THE SPLIDE ARROWS ! */\n    .splide__arrow {\n      height: 35px;\n      width: 35px;\n      position: absolute;\n      top: -80px;\n\n      background-color: transparent;\n      border: 1px solid var(--gray3);\n      border-radius: 0.2rem;\n\n      svg {\n        fill: #fff;\n      }\n    }\n    button {\n      &:nth-child(1) {\n        position: relative;\n        float: right;\n        margin-right: 1rem;\n      }\n    }\n\n    .VerticlPlayer {\n      width: 270px !important;\n      height: 330px !important;\n      overflow: hidden;\n\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n\n      .cardThumbnail {\n        width: 100%;\n        height: 200px;\n        background-size: cover;\n        background-position: center;\n      }\n      .hasNoThumbnail {\n        background-image: url("https://imgur.com/N1ZiTM4.jpeg");\n      }\n\n      .dateAndType {\n        height: 30px;\n        color: #fff;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n\n        span {\n          color: #fff;\n        }\n\n        .contentType {\n          width: 100px;\n          height: 30px;\n          border: 1px solid #e1011a;\n          border-radius: 3px;\n          font-family: "Proxima Nova";\n          font-style: normal;\n          font-weight: 400;\n          font-size: 15px;\n          line-height: 15px;\n          color: red;\n          padding: 0.3rem 0.5rem;\n          display: flex;\n          align-items: center;\n          justify-content: space-evenly;\n\n          .icon {\n            margin-right: 5px;\n          }\n        }\n\n        .contentDate {\n          color: rgba(255, 255, 255, 1);\n          font-family: "Proxima Nova";\n          font-style: normal;\n          font-weight: 400;\n          font-size: 12px;\n          line-height: 15px;\n          color: #ffffff;\n        }\n      }\n\n      .verticalPlayerTitle {\n        height: 70px;\n        width: 250px;\n        span {\n          font-family: "Bebas Neue Pro";\n          font-style: normal;\n          font-weight: 700;\n          font-size: 23px;\n          line-height: 24px;\n          color: #fff !important;\n        }\n      }\n    }\n  }\n\n  @media (max-width: 767px) {\n    padding: 1rem 0.5rem;\n    header {\n      h1 {\n        font-size: 1.6rem;\n      }\n    }\n    main {\n      padding: 0;\n      .splide__arrow {\n        display: none;\n      }\n    }\n  }\n']))),u=e(82535),m=e(48282),x=(e(78677),e(76053)),f=e(40071),g=e(39126),v=e(7692),j=e(4726),y=e(85785),b=e(25930),w=e(80184);function Z(n){var t,e=n.data;return(0,w.jsx)(p,{children:(0,w.jsxs)("section",{className:"wideContent",children:[(0,w.jsx)("header",{children:(0,w.jsxs)("div",{className:"archieve__header",children:[(0,w.jsx)("h2",{style:{color:"#fff"},children:(0,b.ag)("common.laUne")}),(0,w.jsx)("div",{className:"satestique__bar"})]})}),(0,w.jsx)("main",{children:(0,w.jsx)(m.tv,{options:{gap:".5rem",perPage:1,pagination:!1,wheel:!0},children:null===(t=e.rows)||void 0===t?void 0:t.map((function(n){var t;return(0,w.jsxs)(m.jw,{className:"VerticlPlayer",children:[null!==(t=n.photos)&&void 0!==t&&t.length?(0,w.jsx)("div",{className:"cardThumbnail",style:{backgroundImage:"url("+n.photos[0].downloadUrl+")"},children:(0,w.jsx)(u.Z,{data:n,entity:""})}):(0,w.jsx)("div",{className:"cardThumbnail hasNoThumbnail",children:(0,w.jsx)(u.Z,{data:n,entity:""})}),(0,w.jsxs)("div",{className:"dateAndType",children:[(0,w.jsxs)("div",{className:"contentType",children:[{documentaire:(0,w.jsx)(x.hIq,{className:"icon"}),podcast:(0,w.jsx)(v.dxk,{className:"icon"}),videos:(0,w.jsx)(f._DQ,{className:"icon"}),autres:(0,w.jsx)(g.BB5,{className:"icon"})}[n.type],"autres"===n.type?(0,b.ag)("entities.mediatique.enumerators.type.photos"):(0,b.ag)("entities.mediatique.enumerators.type.".concat(n.type))]}),(0,w.jsx)("span",{className:"contentDate",children:y.Z.pipeDate(n.updatedAt)})]}),(0,w.jsx)("div",{className:"verticalPlayerTitle text__wrap",children:(0,w.jsx)("span",{style:{color:"#fff"},children:j.Z.Trans("title",n)})})]},n._id)}))})})]})})}var N=l.ZP.section(r||(r=(0,o.Z)(['\n  /* color: #fff; */\n  width: var(--cerntered-content);\n  height: 507px;\n  background-color: #000;\n\n  button {\n    padding: 0 !important ;\n  }\n\n  .splide {\n    /* position: relative; */\n    /* background-color: yellow; */\n\n    .splide__pagination__page {\n      height: 10px;\n      width: 10px;\n      border-radius: 0;\n    }\n\n    .splide__arrow {\n      height: 35px;\n      width: 35px;\n      position: absolute;\n      bottom: 0;\n\n      background-color: rgba(255, 255, 255, 0.3);\n      border: 1px solid var(--gray3);\n      border-radius: 0.2rem;\n\n      svg {\n        fill: #000;\n      }\n    }\n  }\n\n  .horizontalPlayer {\n    width: 100% !important;\n    height: 507px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-size: cover;\n    background-position: center;\n\n    section {\n      display: grid;\n      grid-template-columns: 467px 500px;\n      place-items: center;\n      column-gap: 31px;\n\n      .cardThumbnail {\n        width: 467px !important;\n        height: 350px;\n        background-size: cover;\n        background-position: center;\n        filter: drop-shadow(0px 9px 14px rgba(0, 0, 0, 0.1));\n      }\n      .hasNoThumbnail {\n        background-image: url("https://placehold.jp/467x350.png");\n      }\n\n      .textContent {\n        width: 500px;\n        font-family: "Bebas Neue Pro";\n        line-height: 1.2;\n        text-align: left;\n        color: #fff;\n        .horizontalPlayerTitle {\n          border: 1px color #000;\n\n          word-break: break-word;\n          font-family: "Bebas Neue Pro";\n          font-style: normal;\n          font-weight: 700;\n          font-size: 40px;\n          line-height: 43px;\n          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n        }\n\n        .horizontalPlayerDescription {\n          font-family: "Proxima Nova";\n          font-style: normal;\n          font-weight: 400;\n          font-size: 14px;\n          line-height: 22px;\n        }\n      }\n\n      .dateAndType {\n        display: block;\n        margin-bottom: 8px;\n\n        span {\n          color: #fff;\n        }\n\n        .contentType {\n          width: 100px;\n          height: 30px;\n          border: 1px solid #e1011a;\n          border-radius: 3px;\n          margin-bottom: 1rem;\n          font-family: "Proxima Nova";\n          font-style: normal;\n          font-weight: 400;\n          font-size: 15px;\n          line-height: 15px;\n          color: red;\n          padding: 0.3rem 0.5rem;\n          display: flex;\n          align-items: center;\n          justify-content: space-evenly;\n        }\n\n        .contentDate {\n          font-family: "Proxima Nova";\n          font-style: normal;\n          font-weight: 400;\n          font-size: 12px;\n          line-height: 15px;\n          color: #ffffff;\n        }\n      }\n    }\n  }\n\n  @media (max-width: 767px) {\n    display: none;\n  }\n']))),T=e(85880),k=e(78820),_=e(14651),P=e(72426),z=e.n(P);function D(n){var t=n.data,e=function(n){var t=n.split("T")[0];return z()(t).format("LL")};return(0,w.jsx)(N,{children:(0,w.jsx)(m.tv,{options:{perPage:1,pagination:!0,wheel:!1},className:"splide",children:null===t||void 0===t?void 0:t.map((function(n){var t,i;return(0,w.jsx)(m.jw,{className:"horizontalPlayer",style:{background:"linear-gradient(115.19deg, #2B2840 28.27%, rgba(43, 40, 64, 0) 68.81%), linear-gradient(0deg, rgba(43, 40, 64, 0.7), rgba(43, 40, 64, 0.7)), url("+(null===(t=n.photos[0])||void 0===t?void 0:t.downloadUrl)+")"},children:(0,w.jsxs)("section",{children:[(0,w.jsx)("div",{children:null!==(i=n.photos)&&void 0!==i&&i.length?(0,w.jsx)("div",{className:"cardThumbnail",style:{backgroundImage:"url("+n.photos[0].downloadUrl+")"},children:(0,w.jsx)(u.Z,{data:n,entity:"main"})}):(0,w.jsx)("div",{className:"cardThumbnail hasNoThumbnail",children:(0,w.jsx)(u.Z,{data:n,entity:"main"})})}),(0,w.jsxs)("div",{children:[(0,w.jsxs)("div",{className:"dateAndType",children:[(0,w.jsxs)("div",{className:"contentType",children:[{Texte:(0,w.jsx)(x.hIq,{className:"icon",size:20}),audio:(0,w.jsx)(v.dxk,{className:"icon",size:20}),videos:(0,w.jsx)(f._DQ,{className:"icon",size:20}),"lien web":(0,w.jsx)(T.cU6,{className:"icon",size:20}),photo:(0,w.jsx)(g.BB5,{className:"icon",size:20}),infographie:(0,w.jsx)(_.mMd,{className:"icon",size:20}),statistiques:(0,w.jsx)(v.s2C,{className:"icon",size:20}),autres:(0,w.jsx)(k.KEm,{className:"icon",size:20})}[n.type],(0,b.ag)("entities.mediatique.enumerators.type.".concat(n.type))]}),(0,w.jsx)("span",{className:"contentDate",children:e(n.updatedAt)})]}),(0,w.jsxs)("div",{className:"textContent",children:[(0,w.jsx)("div",{className:"horizontalPlayerTitle ow",children:j.Z.Trans("title",n)}),(0,w.jsx)("div",{className:"horizontalPlayerDescription text__wrap",children:j.Z.Trans("description",n)})]})]})]})},n._id)}))})})}var q,L=e(2579);e(85862);function M(){var n=(0,s.useState)([]),t=(0,c.Z)(n,2),e=t[0],i=t[1],a=(0,s.useState)([]),r=(0,c.Z)(a,2),o=r[0],l=r[1],p=(0,s.useState)(!0),u=(0,c.Z)(p,2),m=u[0],x=u[1],f=function(){d.Z.getLatestMediatheques().then((function(n){i(n),function(n,t,e){var i;null===(i=n.rows)||void 0===i||i.map((function(n,i){i<t&&"hot"===e&&l((function(t){return t.concat(n)}))}))}(n,3,"hot"),x(!1)}))};return(0,s.useEffect)((function(){f()}),[]),(0,w.jsxs)(h,{children:[(0,w.jsx)("section",{className:"splideContent",children:m?(0,w.jsx)(L.Z,{height:507}):(0,w.jsx)("section",{children:o.length>0?(0,w.jsx)(D,{data:o}):(0,w.jsx)("h2",{children:(0,b.ag)("common.noData")})})}),(0,w.jsx)("section",{className:"bottomGrid",children:m?(0,w.jsxs)("div",{className:"loaderPlaceholder",children:[(0,w.jsx)(L.Z,{height:350,className:"customLoader"}),(0,w.jsx)(L.Z,{height:350,className:"customLoader"}),(0,w.jsx)(L.Z,{height:350,className:"customLoader"})]}):(0,w.jsx)("section",{children:o.length>0?(0,w.jsx)(Z,{data:e}):(0,w.jsx)("h2",{style:{textAlign:"center",color:"#fff"},children:(0,b.ag)("common.noData")})})})]})}var S=l.ZP.section(q||(q=(0,o.Z)(["\n  width: 100%;\n\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(270px, 1rem));\n    grid-gap: 1.9375rem;\n  }\n"]))),C=e(33594);function B(n){var t=n.videosList;return(0,w.jsxs)(S,{children:[(0,w.jsxs)("div",{className:"archieve__header",children:[(0,w.jsx)("h2",{children:(0,b.ag)("entities.mediatique.enumerators.type.videos")}),(0,w.jsx)("div",{className:"satestique__bar"})]}),(0,w.jsx)("div",{style:{marginBottom:"2.1875rem"}}),(0,w.jsx)("div",{className:"grid",children:null===t||void 0===t?void 0:t.map((function(n){return(0,w.jsx)(C.Z,{dataSource:n},n._id)}))})]})}function Y(n){var t=n.photosList;return(0,w.jsxs)(S,{children:[(0,w.jsxs)("div",{className:"archieve__header",children:[(0,w.jsx)("h2",{children:(0,b.ag)("entities.mediatique.enumerators.type.documentaire")}),(0,w.jsx)("div",{className:"satestique__bar"})]}),(0,w.jsx)("div",{style:{marginBottom:"2.1875rem"}}),(0,w.jsx)("div",{className:"grid",children:null===t||void 0===t?void 0:t.map((function(n){return(0,w.jsx)(C.Z,{dataSource:n},n._id)}))})]})}var A,U=e(96710);function G(n){var t=n.dataSource;return(0,w.jsxs)(E,{className:"videoCardVertical",children:[(0,w.jsxs)("div",{className:"dateAndType",children:[(0,w.jsxs)("div",{className:"contentType",children:[(0,w.jsx)(v.dxk,{className:"icon"}),t.type]}),(0,w.jsx)("span",{className:"contentDate",children:function(n){var t=n.split("T")[0];return z()(t).format("LL")}(t.updatedAt)})]}),(0,w.jsx)("div",{className:"verticalPlayerTitle",children:(0,w.jsx)("span",{style:{textTransform:"lowercase"},children:j.Z.Trans("title",t)})}),(null===t||void 0===t?void 0:t.link)&&(0,w.jsx)(U.Z,{url:null===t||void 0===t?void 0:t.link,width:280,height:100})]},t._id)}var I,E=l.ZP.div(A||(A=(0,o.Z)(['\n\tposition: relative;\n\theight: auto;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\n\t.dateAndType {\n\t\theight: 30px;\n\t\tcolor: #fff;\n\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\n\t\tspan {\n\t\t\tcolor: #fff;\n\t\t}\n\n\t\t.contentType {\n\t\t\twidth: 100px;\n\t\t\tborder: 1px solid red;\n\t\t\tborder-radius: 0.5rem;\n\t\t\theight: 30px;\n\n\t\t\tfont-family: "Proxima Nova";\n\t\t\tfont-style: normal;\n\t\t\tfont-weight: 400;\n\t\t\tfont-size: 1rem;\n\t\t\ttext-transform: capitalize;\n\t\t\tline-height: 15px;\n\t\t\tcolor: red;\n\t\t\tpadding: 0.3rem 0.5rem;\n\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: space-evenly;\n\n\t\t\t.icon {\n\t\t\t\tmargin-right: 5px;\n\t\t\t}\n\t\t}\n\n\t\t.contentDate {\n\t\t\tcolor: rgba(122, 122, 122, 1);\n\t\t\tfont-size: 12px;\n\t\t\tfont-family: "Proxima Nova";\n\n\t\t\tfont-style: normal;\n\t\t\tfont-weight: 400;\n\t\t\tfont-size: 12px;\n\t\t\tline-height: 15px;\n\t\t}\n\t}\n\n\t.verticalPlayerTitle {\n\t\tmargin-top: 1rem;\n\t\theight: 70px;\n\n\t\tspan {\n\t\t\twidth: 100%;\n\t\t\tfont-family: "Proxima Nova";\n\t\t\ttext-transform: capitalize !important;\n\t\t\tline-height: 1.5;\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 16px;\n\t\t\tcolor: var(--violet);\n\n\t\t\toverflow: hidden;\n\t\t\tdisplay: inline-block;\n\t\t\ttext-overflow: ellipsis;\n\t\t\twhite-space: nowrap;\n\t\t}\n\t}\n'])));function H(n){var t=n.podcastList;return(0,w.jsxs)(S,{children:[(0,w.jsxs)("div",{className:"archieve__header",children:[(0,w.jsx)("h2",{children:(0,b.ag)("entities.mediatique.enumerators.type.podcast")}),(0,w.jsx)("div",{className:"satestique__bar"})]}),(0,w.jsx)("div",{style:{marginBottom:"2.1875rem"}}),(0,w.jsx)("div",{className:"grid",children:null===t||void 0===t?void 0:t.map((function(n){return(0,w.jsx)(G,{dataSource:n},n._id)}))})]})}function R(n){var t,e=n.dataSource;return(0,w.jsx)(V,{children:(null===(t=e.photos)||void 0===t?void 0:t.length)>0?(0,w.jsx)("div",{className:"cardThumbnail",style:{background:"linear-gradient(180deg, rgba(43, 40, 64, 0) 30.73%, rgba(43, 40, 64, 0.7) 100%), url("+e.photos[0].downloadUrl+")",backgroundSize:"cover",backgroundPosition:"center"},children:(0,w.jsx)("div",{className:"cardTitle",children:(0,w.jsx)("span",{children:j.Z.Trans("title",e)})})}):(0,w.jsx)("div",{className:"cardThumbnail hasNoThumbnail",children:(0,w.jsx)("div",{className:"cardTitle",children:(0,w.jsx)("span",{className:"text__wrap__height",children:j.Z.Trans("title",e)})})})})}var V=l.ZP.div(I||(I=(0,o.Z)(['\n  height: 200px !important;\n\n  .cardThumbnail {\n    width: 100%;\n    height: 200px;\n    padding: 1rem;\n    display: flex;\n    align-items: flex-end;\n  }\n  .hasNoThumbnail {\n    background: linear-gradient(\n        180deg,\n        rgba(43, 40, 64, 0) 30.73%,\n        rgba(43, 40, 64, 0.7) 100%\n      ),\n      url("https://imgur.com/N1ZiTM4.jpeg");\n    background-size: cover;\n    background-position: center;\n  }\n\n  .cardTitle {\n    background: linear-gradient(\n      180deg,\n      rgba(43, 40, 64, 0) 30.73%,\n      rgba(43, 40, 64, 0.7) 100%\n    );\n    span {\n      font-family: "Bebas Neue Pro";\n      font-style: normal;\n      font-weight: 700;\n      font-size: 23px;\n      line-height: 24px;\n      color: #e7e3ff;\n      text-transform: lowercase !important;\n      width: 230px;\n      /**Major Properties**/\n      overflow: hidden;\n      max-height: 6rem;\n      -webkit-box-orient: vertical;\n      display: block;\n      display: -webkit-box;\n      overflow: hidden !important;\n      text-overflow: ellipsis;\n      -webkit-line-clamp: 2;\n    }\n  }\n'])));function O(n){var t=n.docstList;return(0,w.jsxs)(S,{children:[(0,w.jsxs)("div",{className:"archieve__header",children:[(0,w.jsx)("h2",{children:(0,b.ag)("entities.mediatique.enumerators.type.documentaire")}),(0,w.jsx)("div",{className:"satestique__bar"})]}),(0,w.jsx)("div",{style:{marginBottom:"2.1875rem"}}),(0,w.jsx)("div",{className:"grid",children:null===t||void 0===t?void 0:t.map((function(n){return(0,w.jsx)(R,{dataSource:n},n._id)}))})]})}var Q,K=e(91523);function W(n){var t=n.contentType;return(0,w.jsx)(J,{children:(0,w.jsx)(K.rU,{to:"/Mediatheque/type/"+t,children:(0,w.jsx)("div",{className:"plus__button",children:(0,b.ag)("common.voirPlus")})})})}var F,J=l.ZP.div(Q||(Q=(0,o.Z)(['\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n  width: 100%;\n  text-align: center;\n  span {\n    font-family: "Proxima Nova";\n    font-size: 1rem;\n    font-weight: thin;\n    text-decoration-line: underline;\n    text-transform: uppercase;\n    color: #e1011a !important;\n  }\n'])));function X(){var n=(0,s.useState)([]),t=(0,c.Z)(n,2),e=t[0],i=t[1],a=(0,s.useState)(!0),r=(0,c.Z)(a,2),o=r[0],l=r[1],h=(0,s.useState)([]),p=(0,c.Z)(h,2),u=p[0],m=p[1],x=(0,s.useState)(!0),f=(0,c.Z)(x,2),g=f[0],v=f[1],j=(0,s.useState)([]),y=(0,c.Z)(j,2),b=y[0],Z=y[1],N=(0,s.useState)(!0),T=(0,c.Z)(N,2),k=T[0],_=T[1],P=(0,s.useState)([]),z=(0,c.Z)(P,2),D=z[0],q=z[1],M=(0,s.useState)(!0),S=(0,c.Z)(M,2),C=S[0],A=S[1];return(0,s.useEffect)((function(){!function(){var n=0,t=0,e=0,a=0;d.Z.getLatestMediatheques().then((function(r){var o;null===(o=r.rows)||void 0===o||o.map((function(r,o){"videos"===r.type&&n<8&&(i((function(n){return n.concat(r)})),n+=1),"autres"===r.type&&e<8&&(m((function(n){return n.concat(r)})),e+=1),"podcast"===r.type&&t<2&&(Z((function(n){return n.concat(r)})),t+=1),"documentaire"===r.type&&a<2&&(q((function(n){return n.concat(r)})),a+=1)})),l(!1),v(!1),_(!1),A(!1)}))}()}),[]),(0,w.jsxs)(nn,{children:[(0,w.jsxs)("section",{className:"mainContentLeftSection",children:[o?(0,w.jsx)(L.Z,{height:300}):(0,w.jsx)("section",{children:e.length>0?(0,w.jsxs)("section",{children:[(0,w.jsx)(B,{videosList:e}),(0,w.jsx)(W,{contentType:"videos"})]}):null}),g?(0,w.jsx)(L.Z,{height:300}):(0,w.jsx)("section",{children:u.length>0?(0,w.jsxs)("section",{children:[(0,w.jsx)(Y,{photosList:u}),(0,w.jsx)(W,{contentType:"photos"})]}):null})]}),(0,w.jsxs)("section",{className:"mainContentRightSection",children:[C?(0,w.jsx)(L.Z,{height:300}):(0,w.jsx)("section",{children:D.length>0?(0,w.jsxs)("section",{children:[(0,w.jsx)(O,{docstList:D}),(0,w.jsx)(W,{contentType:"documentaires"})]}):null}),k?(0,w.jsx)(L.Z,{height:300}):(0,w.jsx)("section",{children:b.length>0?(0,w.jsxs)("section",{children:[(0,w.jsx)(H,{podcastList:b}),(0,w.jsx)(W,{contentType:"podcasts"})]}):null})]})]})}var $,nn=l.ZP.section(F||(F=(0,o.Z)(["\n  margin: 1rem auto;\n  width: var(--cerntered-content);\n  min-height: 200px;\n  position: relative;\n  top: -180px;\n\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n\n  .mainContentRightSection {\n    width: 350px !important;\n    margin-left: 2rem;\n  }\n\n  .mainContentLeftSection {\n    width: 100%;\n  }\n\n  @media (max-width: 767px) {\n    display: block;\n    width: 100%;\n    padding: 0 0.5rem;\n\n    .mainContentRightSection {\n      width: 100% !important;\n      padding: 0;\n      margin: 0;\n    }\n    .mainContentLeftSection {\n      width: 100%;\n      display: grid;\n      grid-gap: 1rem;\n    }\n  }\n"]))),tn=e(8765);var en=l.ZP.div($||($=(0,o.Z)(["\n\t@media (max-width: 1071px) {\n\t\tmargin: 160px auto 0 auto;\n\t}\n"]))),an=function(){return(0,w.jsxs)(en,{children:[(0,w.jsx)(tn.Z,{title:(0,b.ag)("entities.mediatique.label"),items:[[(0,b.ag)("app.title"),"/"],[(0,b.ag)("entities.mediatique.label")]]}),(0,w.jsx)(M,{}),(0,w.jsx)(X,{})]})}},33594:function(n,t,e){e.d(t,{Z:function(){return u}});var i,a=e(30168),r=(e(72791),e(86538)),o=e(82535),s=e(72426),l=e.n(s),c=e(40071),d=e(4726),h=e(25930),p=e(80184);function u(n){var t,e=n.dataSource;return(0,p.jsxs)(m,{className:"videoCardVertical",children:[(null===(t=e.photos)||void 0===t?void 0:t.length)>0?(0,p.jsx)("div",{className:"cardThumbnail",style:{backgroundImage:"url("+e.photos[0].downloadUrl+")"},children:(0,p.jsx)(o.Z,{data:e,entity:"mainGridPlayer"})}):(0,p.jsx)("div",{className:"cardThumbnail hasNoThumbnail",children:(0,p.jsx)(o.Z,{data:e,entity:"mainGridPlayer"})}),(0,p.jsxs)("div",{className:"dateAndType",children:[(0,p.jsxs)("div",{className:"contentType",children:[(0,p.jsx)(c._DQ,{className:"icon"}),(0,h.ag)("entities.mediatique.enumerators.type.".concat(e.type))]}),(0,p.jsx)("span",{className:"contentDate",children:function(n){var t=n.split("T")[0];return l()(t).format("LL")}(e.updatedAt)})]}),(0,p.jsx)("div",{className:"verticalPlayerTitle text__wrap",children:(0,p.jsx)("span",{children:d.Z.Trans("title",e)})})]},e._id)}var m=r.ZP.div(i||(i=(0,a.Z)(['\n  position: relative;\n  height: 330px !important;\n  overflow: hidden;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  .cardThumbnail {\n    width: 100%;\n    height: 200px;\n    background-size: cover;\n    background-position: center;\n    position: relative;\n  }\n  .hasNoThumbnail {\n    background-image: url("https://imgur.com/N1ZiTM4.jpeg");\n  }\n\n  .dateAndType {\n    height: 30px;\n    color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    span {\n      color: #fff;\n    }\n\n    .contentType {\n      width: 100px;\n      height: 30px;\n      border: 1px solid #e1011a;\n      border-radius: 3px;\n\n      font-family: "Proxima Nova";\n      font-style: normal;\n      font-weight: 400;\n      font-size: 15px;\n      line-height: 15px;\n      color: red;\n      padding: 0.3rem 0.5rem;\n      display: flex;\n      align-items: center;\n      justify-content: space-evenly;\n\n      .icon {\n        margin-right: 5px;\n      }\n    }\n\n    .contentDate {\n      color: rgba(122, 122, 122, 1);\n      font-size: 12px;\n\n      font-family: "Proxima Nova";\n\n      font-style: normal;\n      font-weight: 400;\n      font-size: 12px;\n      line-height: 15px;\n    }\n  }\n\n  .verticalPlayerTitle {\n    height: 50px;\n\n    span {\n      width: 100%;\n      font-family: "Bebas Neue Pro";\n      font-style: normal;\n      font-weight: 700;\n      font-size: 23px;\n      line-height: 24px;\n      text-transform: capitalize !important;\n      color: var(--violet);\n    }\n  }\n'])))},82535:function(n,t,e){e.d(t,{Z:function(){return p}});var i,a,r,o=e(30168),s=(e(72791),e(86538)),l=e(91523),c=e(39126),d=e(78820),h=e(80184);function p(n){var t=n.data,e=n.entity;return(0,h.jsxs)("div",{children:["main"===e&&(0,h.jsx)(l.rU,{to:"/Mediatheque/entity/"+t._id,children:(0,h.jsx)(m,{children:{videos:(0,h.jsx)(c.mz0,{}),autres:(0,h.jsx)(d.Zju,{}),documentaire:(0,h.jsx)(d.Zju,{}),photos:(0,h.jsx)(d.Zju,{}),podcast:(0,h.jsx)(d.Zju,{})}[t.type]})}),""===e&&(0,h.jsx)(l.rU,{to:"/Mediatheque/entity/"+t._id,children:(0,h.jsx)(u,{children:{videos:(0,h.jsx)(c.mz0,{}),autres:(0,h.jsx)(d.Zju,{}),documentaire:(0,h.jsx)(d.Zju,{}),photos:(0,h.jsx)(d.Zju,{}),podcast:(0,h.jsx)(d.Zju,{})}[t.type]})}),"mainGridPlayer"===e&&(0,h.jsx)(l.rU,{to:"/Mediatheque/entity/"+t._id,children:(0,h.jsx)(x,{children:{videos:(0,h.jsx)(c.mz0,{}),autres:(0,h.jsx)(d.Zju,{}),documentaire:(0,h.jsx)(d.Zju,{}),photos:(0,h.jsx)(d.Zju,{}),podcast:(0,h.jsx)(d.Zju,{})}[t.type]})})]})}var u=s.ZP.div(i||(i=(0,o.Z)(["\n    height: 50px;\n    width: 50px;\n    font-size: 1.4rem;\n    border-radius: 50%;\n    color: red;\n    background-color: #fff;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    position: absolute;\n    top: 140px;\n    left: 10px;\n"]))),m=s.ZP.div(a||(a=(0,o.Z)(["\n    height: 50px;\n    width: 50px;\n    font-size: 1.4rem;\n    border-radius: 50%;\n    color: red;\n    background-color: #fff;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    position: absolute;\n    top: 290px;\n    left: 10px;\n"]))),x=s.ZP.div(r||(r=(0,o.Z)(["\n    height: 50px;\n    width: 50px;\n    font-size: 1.4rem;\n    border-radius: 50%;\n    color: red;\n    background-color: #fff;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    position: absolute;\n    top: 140px;\n    left: 10px;\n"])))},8765:function(n,t,e){var i,a=e(30168),r=(e(72791),e(91523)),o=e(86538),s=e(80184),l=o.ZP.div(i||(i=(0,a.Z)(['\n\tmargin: 28px 0 10px 0;\n\t.breadcrumb {\n\t\twidth: 100%;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbackground-color: transparent;\n\t}\n\tol {\n\t\tdisplay: flex;\n\t}\n\tli {\n\t\tfont-family: "Proxima Nova";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-size: 14px;\n\t\tline-height: 25px;\n\t}\n\t.breadcrump__nav {\n\t\tmargin: auto;\n\t\tleft: 0;\n\t\tdisplay: flex;\n\t\tmax-width: 1170px;\n\t\tflex-direction: column;\n\t}\n\n\t.breadcrumb-item:not(.active) a {\n\t\tcolor: rgba(0, 0, 0, 0.45);\n\t}\n\n\th2 {\n\t\tfont-family: "Bebas Neue Pro";\n\t\tfont-style: normal;\n\t\tfont-weight: 700;\n\t\tfont-size: 47px;\n\t\tline-height: 39px;\n\t}\n'])));t.Z=function(n){var t=function(n){return n.length>1};return(0,s.jsx)(l,{children:(0,s.jsxs)("div",{className:"breadcrump__nav",children:[(0,s.jsx)("div",{children:(0,s.jsx)("h2",{children:n.title})}),(0,s.jsx)("div",{children:(0,s.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(e,i){return(0,s.jsx)("li",{className:"breadcrumb-item ".concat(n.items.length-1===i?"active":""),children:t(e)?(0,s.jsxs)(r.rU,{to:e[1],children:[" ",e[0]," ",e[1]]}):e[0]},e[0])}))})})]})})}},85785:function(n,t,e){var i=e(15671),a=e(43144),r=e(72426),o=e.n(r),s=function(){function n(){(0,i.Z)(this,n)}return(0,a.Z)(n,null,[{key:"Hour",value:function(n){return o()(n).format("hh:mm a")}},{key:"HourMinute",value:function(n){return o()(n).format("DD-MM-YYYY HH:mm")}},{key:"fullDate",value:function(n){return o()(n).format("DD-MM-YYYY")}},{key:"Day",value:function(n){return o()(n).format("D")}},{key:"Month",value:function(n){return o()(n).format("MMMM")}},{key:"Year",value:function(n){return o()(n).format("y")}},{key:"date",value:function(n){var t=this.Day(n),e=this.Month(n),i=this.Year(n);return"".concat(t," ").concat(e," ").concat(i," ")}},{key:"DetaillDate",value:function(n){return o()(n).format("dddd, MMMM Do YYYY")}}]),n}();s.pipeDate=function(n){var t=n.split("T")[0];return o()(t).format("LL")},t.Z=s}}]);
//# sourceMappingURL=1957.46a1db64.chunk.js.map