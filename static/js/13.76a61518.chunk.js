(this["webpackJsonptogedoor-frontend"]=this["webpackJsonptogedoor-frontend"]||[]).push([[13],{470:function(e,t,a){"use strict";var r=a(12),n=a(0),c=a(442),o=a(452),s=a(476),i=a(151),l=a(453),d=a(19),u=a(160),m=a(685),b=a(656),j=a(441),f=a(657),h=a(658),x=a(8),p=a(1),v=function(e){var t=e.modal,a=e.toggle,r=e.children,n=e.to,c=e.title;return Object(p.jsxs)(m.a,{isOpen:t,toggle:a,className:"mt-13",children:[Object(p.jsxs)(b.a,{tag:"h6",toggle:a,className:"border-0",children:[Object(p.jsx)(d.a,{className:"text-primary mr-1",icon:u.c}),Object(p.jsx)("span",{className:"  text-dark",children:c})]}),Object(p.jsxs)(j.a,{children:[r&&Object(p.jsx)(f.a,{children:r}),Object(p.jsxs)(h.a,{className:"border-0 justify-content-start",children:[Object(p.jsx)(i.a,{color:"primary",onClick:a,children:"Save Updates"})," ",Object(p.jsx)(x.b,{to:n||"#",className:"text-primary",onClick:a,children:"cancel"})," "]})]})]})},g=a(245),O=a(248),y=a(244),N=a(159),w=function(e){var t=function(t){t.persist(),e.setUserBasicInfo(t.target.value,t.target.name)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(g.a,{row:!0,children:[Object(p.jsx)(O.a,{for:"exampetext",sm:3,children:"First name :"}),Object(p.jsx)(y.a,{sm:9,children:Object(p.jsx)(N.a,{type:"text",name:"firstName",id:"exampleEmail",placeholder:"Please insert your first name",onChange:t,className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]}),Object(p.jsxs)(g.a,{row:!0,children:[Object(p.jsx)(O.a,{for:"exampetext",sm:3,children:"Last name :"}),Object(p.jsx)(y.a,{sm:9,children:Object(p.jsx)(N.a,{type:"text",name:"lastName",id:"exampleEmail",placeholder:"Please insert your last name",onChange:t,className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]}),Object(p.jsxs)(g.a,{row:!0,children:[Object(p.jsx)(O.a,{for:"exampetext",sm:3,children:"Job title :"}),Object(p.jsx)(y.a,{sm:9,children:Object(p.jsx)(N.a,{type:"text",name:"jobTitle",id:"exampleEmail",placeholder:"Please insert your job title",onChange:t,className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]}),Object(p.jsxs)(g.a,{row:!0,children:[Object(p.jsx)(O.a,{for:"exampleEmail",sm:3,children:"Location :"}),Object(p.jsx)(y.a,{sm:9,children:Object(p.jsx)(N.a,{type:"text",name:"location",id:"exampleEmail",onChange:t,placeholder:"Please insert your location",className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]})]})},S=function(e){console.log(e);return Object(p.jsxs)(g.a,{row:!0,children:[Object(p.jsx)(O.a,{for:"exampleText",sm:3,children:"Write Yourself:"}),Object(p.jsx)(y.a,{sm:9,children:Object(p.jsx)(N.a,{type:"textarea",name:"aboutMe",id:"exampleText",placeholder:"Write YourSelf",className:"border-top-0 border-left-0 border-right-0 boder-bottom",onChange:function(t){t.persist(),e.setUserAboutMe(t.target.value,t.target.name)}})})]})},I=function(){return Object(p.jsxs)(g.a,{row:!0,children:[Object(p.jsx)(O.a,{for:"exampleEmail",sm:3,children:"Video Link :"}),Object(p.jsx)(y.a,{sm:9,children:Object(p.jsx)(N.a,{type:"text",name:"videolink",id:"exampleEmail",placeholder:"Youtube Url Or Browse Link",className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]})},k=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(g.a,{row:!0,children:[Object(p.jsx)(O.a,{for:"exampleText",sm:3,children:"Gallery 01:"}),Object(p.jsxs)(y.a,{sm:9,children:[Object(p.jsx)(N.a,{type:"text",name:"text",id:"exampleText",placeholder:"Title",className:"border-top-0 border-left-0 border-right-0 boder-bottom"}),Object(p.jsx)(N.a,{type:"text",name:"text",id:"exampleText",placeholder:"Link",className:"border-top-0 border-left-0 border-right-0 boder-bottom"}),Object(p.jsx)(O.a,{for:"exampleFile",className:"text-muted m-3",children:"Image"}),Object(p.jsx)(N.a,{type:"file",name:"file",id:"exampleFile"})]})]}),Object(p.jsxs)(g.a,{row:!0,children:[Object(p.jsx)(O.a,{for:"exampleText",sm:3,children:"Gallery 02:"}),Object(p.jsxs)(y.a,{sm:9,children:[Object(p.jsx)(N.a,{type:"text",name:"text",id:"exampleText",placeholder:"Title",className:"border-top-0 border-left-0 border-right-0 boder-bottom"}),Object(p.jsx)(N.a,{type:"text",name:"text",id:"exampleText",placeholder:"Link",className:"border-top-0 border-left-0 border-right-0 boder-bottom"}),Object(p.jsx)(O.a,{for:"exampleFile",className:"text-muted m-3",children:"Image"}),Object(p.jsx)(N.a,{type:"file",name:"file",id:"exampleFile"})]})]})]})};t.a=function(e){var t=e.title,a=e.action,m=e.children,b=e.className,j=e.modalName,f=Object(n.useState)(!1),h=Object(r.a)(f,2),x=h[0],g=h[1],O=function(){return g(!x)},y=Object(n.useState)("Write Yourself:"),N=Object(r.a)(y,2),M=(N[0],N[1],function(t,a){e.setAboutMe(t,a)});return Object(p.jsxs)(c.a,{className:"".concat(b&&b),children:[Object(p.jsxs)(o.a,{tag:"h6",className:"d-flex justify-content-between align-items-center bg-primary",children:[Object(p.jsx)(s.a,{className:"m-0 text-white p-2",children:t}),a&&Object(p.jsxs)(i.a,{size:"sm",onClick:O,className:"btn-icon text-white",color:"link",children:["basic"===j&&Object(p.jsx)(v,{modal:x,toggle:O,title:"basic information",children:Object(p.jsx)(w,{setUserBasicInfo:M})}),"about"===j&&Object(p.jsx)(v,{modal:x,toggle:O,title:"About us",children:Object(p.jsx)(S,{setUserAboutMe:M})}),"videoLink"===j&&Object(p.jsx)(v,{modal:x,toggle:O,title:"Intro video",children:Object(p.jsx)(I,{})}),"gallery"===j&&Object(p.jsx)(v,{modal:x,toggle:O,title:"Intro video",children:Object(p.jsx)(k,{})}),Object(p.jsx)(d.a,{icon:u.c})]})]}),m&&Object(p.jsx)(l.a,{children:m})]})}},471:function(e,t,a){"use strict";a(0);var r=a(462),n=a(19),c=a(1);t.a=function(e){var t=e.icon,a=e.title,o=e.description,s=e.className;return Object(c.jsxs)(r.a,{className:"d-flex p-1 ".concat(s),children:[Object(c.jsx)(n.a,{className:"mt-2 text-primary",icon:t}),Object(c.jsxs)("div",{className:"ml-4 pb-4",children:[Object(c.jsx)("p",{className:"m-0 d-block",children:a}),Object(c.jsx)("span",{className:"m-0 d-block text-muted",children:o})]})]})}},476:function(e,t,a){"use strict";var r=a(5),n=a(7),c=a(0),o=a.n(c),s=a(2),i=a.n(s),l=a(3),d=a.n(l),u=a(4),m={tag:u.n,className:i.a.string,cssModule:i.a.object},b=function(e){var t=e.className,a=e.cssModule,c=e.tag,s=Object(n.a)(e,["className","cssModule","tag"]),i=Object(u.j)(d()(t,"card-title"),a);return o.a.createElement(c,Object(r.a)({},s,{className:i}))};b.propTypes=m,b.defaultProps={tag:"div"},t.a=b},596:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(i){n=!0,c=i}finally{try{!r&&s.return&&s.return()}finally{if(n)throw c}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=a(0),c=l(n),o=l(a(2)),s=l(a(597)),i=l(a(598));function l(e){return e&&e.__esModule?e:{default:e}}var d={overflow:"hidden",position:"relative"};function u(e,t){return"\n    .react-stars-"+t+":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: "+e+";\n  }"}function m(e){var t=(0,n.useState)(""),a=r(t,2),o=a[0],l=a[1],m=(0,n.useState)(0),b=r(m,2),j=b[0],f=b[1],h=(0,n.useState)([]),x=r(h,2),p=x[0],v=x[1],g=(0,n.useState)(!1),O=r(g,2),y=O[0],N=O[1],w=(0,s.default)(e),S=r(w,2),I=S[0],k=S[1],M=(0,n.useState)(0),C=r(M,2),A=C[0],T=C[1],E=(0,n.useState)(!1),H=r(E,2),P=H[0],_=H[1],L=(0,n.useState)(""),F=r(L,2),z=F[0],D=F[1];function R(e){"undefined"===typeof e&&(e=I.isHalf?Math.floor(j):Math.round(j));for(var t=[],a=0;a<I.count;a++)t.push({active:a<=e-1});return t}function U(e){if(I.edit){var t=Number(e.currentTarget.getAttribute("data-index"));if(I.isHalf){var a=q(e);_(a),a&&(t+=1),T(t)}else t+=1;!function(e){var t=p.filter((function(e){return e.active}));e!==t.length&&v(R(e))}(t)}}function q(e){var t=e.target.getBoundingClientRect(),a=e.clientX-t.left;return(a=Math.round(Math.abs(a)))>t.width/2}function B(){I.edit&&(J(j),v(R()))}function J(e){I.isHalf&&(_(function(e){return e%1===0}(e)),T(Math.floor(e)))}function Y(e){if(I.edit){var t=Number(e.currentTarget.getAttribute("data-index")),a=void 0;if(I.isHalf){var r=q(e);_(r),r&&(t+=1),a=r?t:t+.5,T(t)}else a=t+=1;W(a)}}function W(t){t!==j&&(v(R(t)),f(t),e.onChange(t))}return(0,n.useEffect)((function(){var t,a;!function(){var t="react-stars";D(e.classNames+" "+t)}(),t=e.value,a=e.count,f(t<0||t>a?0:t),v(R(e.value)),k(e),l((Math.random()+"").replace(".","")),N(function(e){return!e.isHalf&&e.emptyIcon&&e.filledIcon||e.isHalf&&e.emptyIcon&&e.halfIcon&&e.filledIcon}(e)),T(Math.floor(e.value)),_(e.isHalf&&e.value%1<.5)}),[]),c.default.createElement("div",{className:"react-stars-wrapper-"+o,style:{display:"flex"}},c.default.createElement("div",{tabIndex:I.a11y&&I.edit?0:null,"aria-label":"add rating by typing an integer from 0 to 5 or pressing arrow keys",onKeyDown:function(e){if(I.a11y||I.edit){var t=e.key,a=j,r=Number(t);r?Number.isInteger(r)&&r>0&&r<=I.count&&(a=r):("ArrowUp"===t||"ArrowRight"===t)&&a<I.count?(e.preventDefault(),a+=I.isHalf?.5:1):("ArrowDown"===t||"ArrowLeft"===t)&&a>.5&&(e.preventDefault(),a-=I.isHalf?.5:1),J(a),W(a)}},className:z,style:d},I.isHalf&&function(){return c.default.createElement("style",{dangerouslySetInnerHTML:{__html:y?(e=I.activeColor,"\n          span.react-stars-half > * {\n          color: "+e+";\n      }"):u(I.activeColor,o)}});var e}(),p.map((function(e,t){return c.default.createElement(i.default,{key:t,index:t,active:e.active,config:I,onMouseOver:U,onMouseLeave:B,onClick:Y,halfStarHidden:P,halfStarAt:A,isUsingIcons:y,uniqueness:o})})),c.default.createElement("p",{style:{position:"absolute",left:"-200rem"},role:"status"},j)))}m.propTypes={classNames:o.default.string,edit:o.default.bool,half:o.default.bool,value:o.default.number,count:o.default.number,char:o.default.string,size:o.default.number,color:o.default.string,activeColor:o.default.string,emptyIcon:o.default.element,halfIcon:o.default.element,filledIcon:o.default.element,a11y:o.default.bool},m.defaultProps={edit:!0,half:!1,value:0,count:5,char:"\u2605",size:15,color:"gray",activeColor:"#ffd700",a11y:!0,onChange:function(){}},t.default=m},597:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(i){n=!0,c=i}finally{try{!r&&s.return&&s.return()}finally{if(n)throw c}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=(0,n.useState)(e.count),a=r(t,2),c=a[0],o=a[1],s=(0,n.useState)(e.size),i=r(s,2),l=i[0],d=i[1],u=(0,n.useState)(e.char),m=r(u,2),b=m[0],j=m[1],f=(0,n.useState)(e.color),h=r(f,2),x=h[0],p=h[1],v=(0,n.useState)(e.activeColor),g=r(v,2),O=g[0],y=g[1],N=(0,n.useState)(e.isHalf),w=r(N,2),S=w[0],I=w[1],k=(0,n.useState)(e.edit),M=r(k,2),C=M[0],A=M[1],T=(0,n.useState)(e.emptyIcon),E=r(T,2),H=E[0],P=E[1],_=(0,n.useState)(e.halfIcon),L=r(_,2),F=L[0],z=L[1],D=(0,n.useState)(e.filledIcon),R=r(D,2),U=R[0],q=R[1],B=(0,n.useState)(e.a11y),J=r(B,2),Y=J[0],W=J[1];return[{count:c,size:l,char:b,color:x,activeColor:O,isHalf:S,edit:C,emptyIcon:H,halfIcon:F,filledIcon:U,a11y:Y},function(e){o(e.count),d(e.size),j(e.char),p(e.color),y(e.activeColor),I(e.isHalf),A(e.edit),P(e.emptyIcon),z(e.halfIcon),q(e.filledIcon),W(e.a11y)}]};var n=a(0)},598:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};t.default=function(e){var t=e.index,a=e.active,n=e.config,c=e.onMouseOver,i=e.onMouseLeave,l=e.onClick,d=e.halfStarHidden,u=e.halfStarAt,m=e.isUsingIcons,b=e.uniqueness,j=n.color,f=n.activeColor,h=n.size,x=n.char,p=n.isHalf,v=n.edit,g=n.halfIcon,O=n.emptyIcon,y=n.filledIcon,N="",w=!1;p&&!d&&u===t&&(N=m?"react-stars-half":"react-stars-"+b,w=!0);var S=r({},s,{color:a?f:j,cursor:v?"pointer":"default",fontSize:h+"px"});return o.default.createElement("span",{className:N,style:S,key:t,"data-index":t,"data-forhalf":y?t:x,onMouseOver:c,onMouseMove:c,onMouseLeave:i,onClick:l},m?a?y:!a&&w?g:O:x)};var n,c=a(0),o=(n=c)&&n.__esModule?n:{default:n};var s={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"}},679:function(e,t,a){"use strict";a.r(t);var r=a(9),n=a.n(r),c=a(15),o=a(12),s=a(0),i=a(438),l=a(439),d=a(244),u=a(36),m=a(442),b=a(452),j=a(453),f=a(458),h=a(151),x=a(596),p=a.n(x),v=a(8),g=a(11),O=a(461),y=a(16),N=a(471),w=a(33),S=a.n(w),I=a(1),k=function(e){var t=[{icon:y.i,title:"Date posted:",description:"".concat(e.myService.createdAt)},{icon:y.v,title:"Category:",description:"".concat(e.myService.categoryName)},{icon:y.Z,title:"Price:",description:"".concat(e.myService.Salary,"$")},{icon:y.P,title:"Rating:",description:"".concat(e.avgRating)}];return Object(I.jsx)(O.a,{children:t&&t.map((function(e,t){return Object(I.jsx)(N.a,Object(g.a)({},e),t)}))})},M=function(e){var t=Object(s.useState)(e.myService.avgRating),a=Object(o.a)(t,2),r=a[0],i=a[1],d=function(){var t=Object(c.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r={rating:a,userID:localStorage.id,serviceID:e.myService._id},S.a.post("https://www.togedoortestgo.site/graphql/services/addrating",r).then((function(t){console.log(t),S.a.get("https://www.togedoortestgo.site/graphql/services/".concat(e.myService._id)).then((function(e){console.log(e),i(e.data.avgRating),console.log(e.data.avgRating)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return e.myService.userID===localStorage.id?Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(m.a,{children:[Object(I.jsx)(b.a,{className:"d-flex justify-content-between align-items-center bg-primary card-header text-white",children:"Project Overview"}),Object(I.jsxs)(j.a,{className:"text-center",children:[Object(I.jsx)(f.a,{src:"https://www.togedoortestgo.site/graphql/".concat(e.myService.serviceImage)}),Object(I.jsx)("h6",{className:"align-self-center pt-4",children:e.myService.userName})]}),Object(I.jsx)(j.a,{className:"p-5",children:Object(I.jsx)(k,{myService:e.myService,avgRating:r})})]})}):Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(m.a,{children:[Object(I.jsx)(b.a,{className:"d-flex justify-content-between  align-items-center bg-primary card-header text-white",children:"Project Overview"}),Object(I.jsxs)(j.a,{className:"text-center justify-content-center",children:[Object(I.jsx)(f.a,{src:"https://www.togedoortestgo.site/graphql/".concat(e.myService.serviceImage)}),Object(I.jsx)("h6",{className:"align-self-center pt-4",children:e.myService.userName}),Object(I.jsx)(v.b,{to:{pathname:"/company/".concat(e.myService.userID)},children:Object(I.jsx)(h.a,{color:"primary",className:"btn btn-sm",children:"View profile"})})]}),Object(I.jsx)(l.a,{className:"justify-content-center",children:Object(I.jsx)(p.a,{onChange:d,count:5,size:40,isHalf:!0,value:r,activeColor:"#ffd700"})}),Object(I.jsxs)(j.a,{className:"p-5",children:[Object(I.jsx)(k,{myService:e.myService,avgRating:r}),Object(I.jsx)(h.a,{block:!0,color:"primary",className:"btn  btn-md ",children:"Apply Now!"})]})]})})},C=a(470),A=function(e){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(C.a,{title:"Project title",className:"mb-5",modalName:"about",children:Object(I.jsx)("p",{children:e.myService.JobTitle})}),Object(I.jsx)(C.a,{title:"Project discription",className:"mb-5",modalName:"about",children:Object(I.jsx)("textarea",{disabled:!0,className:"form-control",name:"description",rows:"5",children:e.myService.description})})]})};a(62),t.default=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{})((function(e){var t=e.match.params;console.log(t);var a=t.serviceID,r=Object(s.useState)(),u=Object(o.a)(r,2),m=u[0],b=u[1];return Object(s.useEffect)((function(){function e(){return(e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("https://www.togedoortestgo.site/graphql/services/".concat(a));case 3:t=e.sent,b(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(I.jsx)(I.Fragment,{children:m?Object(I.jsx)(i.a,{className:"pt-8",children:Object(I.jsxs)(l.a,{children:[Object(I.jsx)(d.a,{md:12,sm:12,lg:4,className:"mb-6 mb-lg-0",children:Object(I.jsx)(M,{myService:m})}),Object(I.jsx)(d.a,{md:12,sm:12,lg:8,children:Object(I.jsx)(A,{myService:m})})]})}):Object(I.jsx)("div",{children:"Loading..."})})}))}}]);
//# sourceMappingURL=13.76a61518.chunk.js.map