(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{78:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(46),i=n.n(a),s=n(47),u="csrf-token",o="CSRF-Token";function j(e){var t;return null===(t=document.cookie.split("; ").find((function(t){return(null===t||void 0===t?void 0:t.split("=")[0])===e})))||void 0===t?void 0:t.split("=")[1]}var d=n.n(s).a.create({headers:[{name:o,value:j(u)}].reduce((function(e,t){return t.value&&(e[t.name]=t.value),e}),{})}),b=d,l=n(28),f=n(82),O=n(5),h=n(0);var p=function(e){var t=e.coffee,n=e.onSubmit,c={name:t?t.name:"",type:t?t.type:""};return Object(h.jsx)(O.c,{initialValues:c,validate:function(){return{}},onSubmit:n,children:function(e){var t=e.isSubmitting;return Object(h.jsxs)(O.b,{children:[Object(h.jsx)(O.a,{type:"text",name:"name",placeholder:"Name"}),Object(h.jsx)(O.a,{type:"text",name:"type",placeholder:"Type"}),Object(h.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})},v=n(8);var m=function(){var e=Object(l.b)(),t=Object(v.f)(),n=Object(f.a)((function(e){return b.post("/api/v1/coffees",e)}),{onSuccess:function(){e.invalidateQueries("coffees")}});return Object(h.jsx)(p,{onSubmit:function(e,c){var r=c.setSubmitting;n.mutate(e),null===r||void 0===r||r(!1),t.push("/coffees")}})},x=n(81);function g(e){var t=e.coffee,n=e.handleEdit,c=e.handleDelete,r=e.handleDetail;return Object(h.jsxs)(h.Fragment,{children:[t.name,Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"detail"}),Object(h.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"edit"}),Object(h.jsx)("button",{type:"button",onClick:function(){return c(t)},children:"delete"})]})}var S=function(){var e,t,n=Object(v.f)(),c=Object(l.b)(),r=Object(x.a)("coffees",(function(){return b.get("/api/v1/coffees").then((function(e){return e.data}))})),a=Object(f.a)((function(e){var t=e.id;return b.delete("/api/v1/coffees/".concat(t))}),{onSuccess:function(){c.invalidateQueries("coffees")}}),i=function(e){var t=e.id;n.push("/coffees/update/".concat(t))},s=function(e){var t=e.id;a.mutate({id:t})},u=function(e){var t=e.id;n.push("/coffees/detail/".concat(t))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:[null===(e=r.data)||void 0===e?void 0:e.length," coffees"]}),Object(h.jsx)("ul",{children:null===(t=r.data)||void 0===t?void 0:t.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(g,{coffee:e,handleDelete:s,handleEdit:i,handleDetail:u})},e.id)}))})]})};var y=function(){var e=Object(v.g)().id,t=Object(x.a)(["coffees",e],(function(){return b.get("/api/v1/coffees/".concat(e)).then((function(e){return e.data}))})),n=t.data;if(t.isLoading)return Object(h.jsx)("div",{children:"Loading..."});var c=n;return Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:c.name}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:c.type}),Object(h.jsx)("br",{})]})};var w=function(){var e=Object(v.g)().id,t=Object(l.b)(),n=Object(v.f)(),c=Object(x.a)(["coffees",e],(function(){return b.get("/api/v1/coffees/".concat(e)).then((function(e){return e.data}))})),r=c.data,a=c.isLoading,i=Object(f.a)((function(t){return b.put("/api/v1/coffees/".concat(e),t).then((function(e){return e.data}))}),{onSuccess:function(){t.invalidateQueries("coffees")}});if(a)return Object(h.jsx)("div",{children:"Loading..."});var s=r;return Object(h.jsx)(p,{coffee:s,onSubmit:function(e,t){var c=t.setSubmitting;i.mutate(e),null===c||void 0===c||c(!1),n.push("/coffees")}})};var C=function(e){var t=e.icecream,n=e.onSubmit,c={name:t?t.name:"",flavour:t?t.flavour:""};return Object(h.jsx)(O.c,{initialValues:c,validate:function(){return{}},onSubmit:n,children:function(e){var t=e.isSubmitting;return Object(h.jsxs)(O.b,{children:[Object(h.jsx)(O.a,{type:"text",name:"name",placeholder:"Name"}),Object(h.jsx)(O.a,{type:"text",name:"flavour",placeholder:"Flavour"}),Object(h.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})};var k=function(){var e=Object(l.b)(),t=Object(v.f)(),n=Object(f.a)((function(e){return b.post("/api/v1/icecreams",e)}),{onSuccess:function(){e.invalidateQueries("icecreams")}});return Object(h.jsx)(C,{onSubmit:function(e,c){var r=c.setSubmitting;n.mutate(e),null===r||void 0===r||r(!1),t.push("/icecreams")}})};function L(e){var t=e.icecream,n=e.handleEdit,c=e.handleDelete,r=e.handleDetail;return Object(h.jsxs)(h.Fragment,{children:[t.name,Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"detail"}),Object(h.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"edit"}),Object(h.jsx)("button",{type:"button",onClick:function(){return c(t)},children:"delete"})]})}var D=function(){var e,t,n=Object(v.f)(),c=Object(l.b)(),r=Object(x.a)("icecreams",(function(){return b.get("/api/v1/icecreams").then((function(e){return e.data}))})),a=Object(f.a)((function(e){var t=e.id;return b.delete("/api/v1/icecreams/".concat(t))}),{onSuccess:function(){c.invalidateQueries("icecreams")}}),i=function(e){var t=e.id;n.push("/icecreams/update/".concat(t))},s=function(e){var t=e.id;a.mutate({id:t})},u=function(e){var t=e.id;n.push("/icecreams/detail/".concat(t))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:[null===(e=r.data)||void 0===e?void 0:e.length," icecreams"]}),Object(h.jsx)("ul",{children:null===(t=r.data)||void 0===t?void 0:t.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(L,{icecream:e,handleDelete:s,handleEdit:i,handleDetail:u})},e.id)}))})]})};var Q=function(){var e=Object(v.g)().id,t=Object(x.a)(["icecreams",e],(function(){return b.get("/api/v1/icecreams/".concat(e)).then((function(e){return e.data}))})),n=t.data;if(t.isLoading)return Object(h.jsx)("div",{children:"Loading..."});var c=n;return Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:c.name}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:c.flavour}),Object(h.jsx)("br",{})]})};var E=function(){var e=Object(v.g)().id,t=Object(l.b)(),n=Object(v.f)(),c=Object(x.a)(["icecreams",e],(function(){return b.get("/api/v1/icecreams/".concat(e)).then((function(e){return e.data}))})),r=c.data,a=c.isLoading,i=Object(f.a)((function(t){return b.put("/api/v1/icecreams/".concat(e),t).then((function(e){return e.data}))}),{onSuccess:function(){t.invalidateQueries("icecreams")}});if(a)return Object(h.jsx)("div",{children:"Loading..."});var s=r;return Object(h.jsx)(C,{icecream:s,onSubmit:function(e,t){var c=t.setSubmitting;i.mutate(e),null===c||void 0===c||c(!1),n.push("/icecreams")}})};var F=function(e){var t=e.user,n=e.onSubmit,c={username:t?t.username:"",passwordHash:t?t.passwordHash:""};return Object(h.jsx)(O.c,{initialValues:c,validate:function(){return{}},onSubmit:n,children:function(e){var t=e.isSubmitting;return Object(h.jsxs)(O.b,{children:[Object(h.jsx)(O.a,{type:"text",name:"username",placeholder:"Username"}),Object(h.jsx)(O.a,{type:"text",name:"passwordHash",placeholder:"PasswordHash"}),Object(h.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})};var N=function(){var e=Object(l.b)(),t=Object(v.f)(),n=Object(f.a)((function(e){return b.post("/api/v1/users",e)}),{onSuccess:function(){e.invalidateQueries("users")}});return Object(h.jsx)(F,{onSubmit:function(e,c){var r=c.setSubmitting;n.mutate(e),null===r||void 0===r||r(!1),t.push("/users")}})};function H(e){var t=e.user,n=e.handleEdit,c=e.handleDelete,r=e.handleDetail;return Object(h.jsxs)(h.Fragment,{children:[t.username,Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"detail"}),Object(h.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"edit"}),Object(h.jsx)("button",{type:"button",onClick:function(){return c(t)},children:"delete"})]})}var U=function(){var e,t,n=Object(v.f)(),c=Object(l.b)(),r=Object(x.a)("users",(function(){return b.get("/api/v1/users").then((function(e){return e.data}))})),a=Object(f.a)((function(e){var t=e.id;return b.delete("/api/v1/users/".concat(t))}),{onSuccess:function(){c.invalidateQueries("users")}}),i=function(e){var t=e.id;n.push("/users/update/".concat(t))},s=function(e){var t=e.id;a.mutate({id:t})},u=function(e){var t=e.id;n.push("/users/detail/".concat(t))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:[null===(e=r.data)||void 0===e?void 0:e.length," users"]}),Object(h.jsx)("ul",{children:null===(t=r.data)||void 0===t?void 0:t.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(H,{user:e,handleDelete:s,handleEdit:i,handleDetail:u})},e.id)}))})]})};var R=function(){var e=Object(v.g)().id,t=Object(x.a)(["users",e],(function(){return b.get("/api/v1/users/".concat(e)).then((function(e){return e.data}))})),n=t.data;if(t.isLoading)return Object(h.jsx)("div",{children:"Loading..."});var c=n;return Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:c.username}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:c.passwordHash}),Object(h.jsx)("br",{})]})};var V=function(){var e=Object(v.g)().id,t=Object(l.b)(),n=Object(v.f)(),c=Object(x.a)(["users",e],(function(){return b.get("/api/v1/users/".concat(e)).then((function(e){return e.data}))})),r=c.data,a=c.isLoading,i=Object(f.a)((function(t){return b.put("/api/v1/users/".concat(e),t).then((function(e){return e.data}))}),{onSuccess:function(){t.invalidateQueries("users")}});if(a)return Object(h.jsx)("div",{children:"Loading..."});var s=r;return Object(h.jsx)(F,{user:s,onSubmit:function(e,t){var c=t.setSubmitting;i.mutate(e),null===c||void 0===c||c(!1),n.push("/users")}})},I=n(23),P=n.n(I),J=n(30),T=n(31);var B=function(){var e=Object(c.useState)(""),t=Object(T.a)(e,2),n=t[0],r=t[1],a=Object(v.f)(),i=Object(l.b)(),s=function(e,t){var n=t.setSubmitting;if(e.response&&e.response.data){var c=e.response.data.error;c&&r(c)}null===n||void 0===n||n(!1)},u=function(){var e=Object(J.a)(P.a.mark((function e(t,n){var c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.setSubmitting,e.prev=1,e.next=4,b.post("/auth/login",t);case 4:return null===c||void 0===c||c(!1),e.next=7,i.invalidateQueries("user");case 7:a.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),s(e.t0,{setSubmitting:c});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(h.jsx)(O.c,{initialValues:{username:"",password:""},validate:function(){return{}},onSubmit:u,children:function(e){var t=e.isSubmitting;return Object(h.jsxs)(O.b,{children:[Object(h.jsx)(O.a,{type:"text",name:"username",placeholder:"Username"}),Object(h.jsx)(O.a,{type:"password",name:"password",placeholder:"Password"}),n&&Object(h.jsx)("div",{children:n}),Object(h.jsx)("button",{type:"submit",disabled:t,children:"Login"})]})}})};var M=function(){var e=Object(c.useState)(""),t=Object(T.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(J.a)(P.a.mark((function e(t,n){var c,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.setSubmitting,e.prev=1,e.next=4,b.post("/auth/register",t);case 4:null===c||void 0===c||c(!1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),e.t0.response&&e.t0.response.data&&(a=e.t0.response.data.error)&&r(a),null===c||void 0===c||c(!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(h.jsx)(O.c,{initialValues:{username:"",email:"",password:"",passwordConfirm:""},validate:function(){return{}},onSubmit:a,children:function(e){var t=e.isSubmitting;return Object(h.jsxs)(O.b,{children:[Object(h.jsx)(O.a,{type:"text",name:"username",placeholder:"Username"}),Object(h.jsx)(O.a,{type:"text",name:"email",placeholder:"Email"}),Object(h.jsx)(O.a,{type:"password",name:"password",placeholder:"Password"}),Object(h.jsx)(O.a,{type:"password",name:"passwordConfirm",placeholder:"Confirm password"}),n&&Object(h.jsx)("div",{children:n}),Object(h.jsx)("button",{type:"submit",disabled:t,children:"Register"})]})}})},q=n(7);var z=function(){return Object(x.a)("user",(function(){return b.get("/auth/me")}),{retry:!1}).data,Object(c.useEffect)((function(){j(u)||d.get("/auth/csrf").then((function(){d.defaults.headers[o]=j(u)})).catch((function(e){console.warn("Received error while fetching CSRF token :",e)}))}),[]),Object(h.jsxs)(q.a,{children:[Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{className:"flex",children:[Object(h.jsxs)("li",{children:[Object(h.jsx)(q.b,{to:"/",children:"Home"}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("li",{className:"ml-10",children:[Object(h.jsx)(q.b,{to:"/login",children:"Login"}),Object(h.jsx)("br",{}),Object(h.jsx)(q.b,{to:"/register",children:"Register"}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("li",{className:"ml-10",children:[Object(h.jsx)(q.b,{to:"/coffees",children:"Coffees"}),Object(h.jsx)("br",{}),Object(h.jsx)(q.b,{to:"/coffees/create",children:"Create a Coffee"}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("li",{className:"ml-10",children:[Object(h.jsx)(q.b,{to:"/icecreams",children:"Icecreams"}),Object(h.jsx)("br",{}),Object(h.jsx)(q.b,{to:"/icecreams/create",children:"Create a Icecream"}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("li",{className:"ml-10",children:[Object(h.jsx)(q.b,{to:"/users",children:"Users"}),Object(h.jsx)("br",{}),Object(h.jsx)(q.b,{to:"/users/create",children:"Create a User"}),Object(h.jsx)("br",{})]})]})}),Object(h.jsxs)("main",{children:[Object(h.jsx)(v.a,{path:"/coffees",children:Object(h.jsx)("h1",{children:"Coffees"})}),Object(h.jsx)(v.a,{path:"/icecreams",children:Object(h.jsx)("h1",{children:"Icecreams"})}),Object(h.jsx)(v.a,{path:"/users",children:Object(h.jsx)("h1",{children:"Users"})}),Object(h.jsxs)(v.c,{children:[Object(h.jsx)(v.a,{path:"/coffees/create",component:m}),Object(h.jsx)(v.a,{path:"/coffees/update/:id",component:w}),Object(h.jsx)(v.a,{path:"/coffees/detail/:id",component:y}),Object(h.jsx)(v.a,{path:"/coffees",component:S}),",",Object(h.jsx)(v.a,{path:"/icecreams/create",component:k}),Object(h.jsx)(v.a,{path:"/icecreams/update/:id",component:E}),Object(h.jsx)(v.a,{path:"/icecreams/detail/:id",component:Q}),Object(h.jsx)(v.a,{path:"/icecreams",component:D}),",",Object(h.jsx)(v.a,{path:"/users/create",component:N}),Object(h.jsx)(v.a,{path:"/users/update/:id",component:V}),Object(h.jsx)(v.a,{path:"/users/detail/:id",component:R}),Object(h.jsx)(v.a,{path:"/users",component:U}),Object(h.jsx)(v.a,{path:"/login",component:B}),Object(h.jsx)(v.a,{path:"/register",component:M})]})]})]})},A=new(n(80).a);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(l.a,{client:A,children:Object(h.jsx)(z,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.377bf89a.chunk.js.map