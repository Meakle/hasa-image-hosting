(this["webpackJsonpmeakle-image-hosting"]=this["webpackJsonpmeakle-image-hosting"]||[]).push([[2],{101:function(e,t,n){"use strict";n.r(t);var r=n(4),i=n(0),o=n.n(i),c=n(21),a=n.n(c),s=n(9),l=n(105),p=n(22),u=n(34),b=n(58),f=n(104),j=n(60),h=p.a.header.withConfig({displayName:"Header",componentId:"sc-17t1bpc-0"})(["display:flex;align-items:center;padding:12px 100px;background-color:#ffffff;color:#262626;"]),O=Object(p.a)(u.b).withConfig({displayName:"Header__StyleNavLink",componentId:"sc-17t1bpc-1"})(["color:#262626;padding-bottom:10px;margin-left:40px;&.active{border-bottom:2px solid #3f90f7;}"]),y=p.a.div.withConfig({displayName:"Header__Login",componentId:"sc-17t1bpc-2"})(["margin-left:auto;"]),d=Object(p.a)(f.a).withConfig({displayName:"Header__StyleButton",componentId:"sc-17t1bpc-3"})(["margin-left:20px;font-weight:bolder;font-size:14px;"]),m=Object(b.a)((function(){var e=Object(j.a)(),t=e.UserStore,n=e.AuthStore,o=Object(s.f)();return Object(i.useEffect)((function(){t.pullUser()}),[]),Object(r.jsxs)(h,{children:[Object(r.jsxs)("nav",{children:[Object(r.jsx)(O,{to:"/",activeClassName:"active",exact:!0,children:"\u9996\u9875"}),Object(r.jsx)(O,{to:"/history",children:"\u5386\u53f2"}),Object(r.jsx)(O,{to:"/about",children:"\u5173\u4e8e"})]}),Object(r.jsx)(y,{children:t.currentUser?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{children:t.currentUser.attributes.username}),Object(r.jsx)(d,{type:"primary",onClick:function(){n.logout()},children:"\u6ce8\u9500"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{type:"primary",onClick:function(){o.push("/login")},children:"\u767b\u5f55"}),Object(r.jsx)(d,{type:"primary",onClick:function(){o.push("/register")},children:"\u6ce8\u518c"})]})})]})})),g=n(108),w=n(109),v=p.a.footer.withConfig({displayName:"Footer",componentId:"sc-1v5rnn5-0"})(["padding:0px 100px;text-align:center;font-size:15px;margin-bottom:20px;color:#bbbbbb;"]),x=p.a.a.withConfig({displayName:"Footer__A",componentId:"sc-1v5rnn5-1"})(["color:#bbbbbb;margin:15px;:hover{color:#40a9ff;}"]);function U(){return Object(r.jsxs)(v,{children:[Object(r.jsx)(x,{href:"https://www.yuque.com/meakle",target:"_blank",children:Object(r.jsx)(g.a,{})}),Object(r.jsx)(x,{href:"http://meakle.com/",target:"_blank",children:"@\xa0\u65b9\u963f\u68ee"}),Object(r.jsx)(x,{href:"https://github.com/meakle",target:"_blank",children:Object(r.jsx)(w.a,{})})]})}n(95);var k=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(7),n.e(9)]).then(n.bind(null,1921))})),P=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(6),n.e(8)]).then(n.bind(null,1925))})),z=Object(i.lazy)((function(){return n.e(10).then(n.bind(null,1914))})),F=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(11)]).then(n.bind(null,1915))})),D=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,1916))})),I=p.a.main.withConfig({displayName:"App__Main",componentId:"sc-1jiorch-0"})(["text-align:center;margin:20px 35px;"]);function C(){return Object(r.jsxs)(o.a.Fragment,{children:[Object(r.jsx)(m,{}),Object(r.jsx)(I,{children:Object(r.jsx)(i.Suspense,{fallback:Object(r.jsx)(l.a,{tip:"\u52a0\u8f7d\u4e2d",size:"large"}),children:Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.a,{path:"/",exact:!0,component:k}),Object(r.jsx)(s.a,{path:"/history",component:P}),Object(r.jsx)(s.a,{path:"/about",component:z}),Object(r.jsx)(s.a,{path:"/login",component:F}),Object(r.jsx)(s.a,{path:"/register",component:D})]})})}),Object(r.jsx)(U,{})]})}a.a.render(Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(u.a,{children:Object(r.jsx)(C,{})})}),document.getElementById("root"))},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var r=n(0),i=n(16),o=n(27),c=n(28),a=n(6),s=(n(44),n(1)),l=n(107),p=n(20),u=n.n(p);u.a.init({appId:"E3vYhzO0pDzgBhmIYQdfQfEm-gzGzoHsz",appKey:"YWD9Jpx17zt4zAYYOOIjRHQl",serverURL:"https://e3vyhzo0.lc-cn-n1-shared.com"});var b,f,j=function(e,t){var n=new p.User;return n.setUsername(e),n.setPassword(t),new Promise((function(e,t){n.signUp().then((function(t){return e(t)}),(function(e){return t(e)}))}))},h=function(e,t){return new Promise((function(n,r){p.User.logIn(e,t).then((function(e){return n(e)}),(function(e){return r(e)}))}))},O=function(){p.User.logOut()},y=function(){return p.User.current()},d={add:function(e,t){var n=new u.a.Object("Image"),r=new u.a.File(t,e);return console.log(u.a.User.current()),n.set("filename",t),n.set("owner",u.a.User.current()),n.set("url",r),new Promise((function(e,t){n.save().then((function(t){e(t)}),(function(e){console.log("\u4fdd\u5b58\u5931\u8d25",e),t(e)}))}))},find:function(e){var t=e.page,n=void 0===t?0:t,r=e.limit,i=void 0===r?10:r,o=new u.a.Query("Image");return o.include("owner"),o.limit(i),o.skip(n*i),o.descending("createdAt"),o.equalTo("owner",u.a.User.current()),new Promise((function(e,t){o.find().then((function(t){return e(t)})).catch((function(e){return t(e)}))}))}};window.Uploader=d;var m,g,w,v,x,U,k,P,z,F,D,I,C=new(b=function(){function e(){Object(o.a)(this,e),Object(i.a)(this,"currentUser",f,this),Object(s.m)(this)}return Object(c.a)(e,[{key:"pullUser",value:function(){this.currentUser=y()}},{key:"resetUser",value:function(){this.currentUser=null}}]),e}(),f=Object(a.a)(b.prototype,"currentUser",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(a.a)(b.prototype,"pullUser",[s.f],Object.getOwnPropertyDescriptor(b.prototype,"pullUser"),b.prototype),Object(a.a)(b.prototype,"resetUser",[s.f],Object.getOwnPropertyDescriptor(b.prototype,"resetUser"),b.prototype),b),S=new(m=function(){function e(){Object(o.a)(this,e),Object(i.a)(this,"list",g,this),Object(i.a)(this,"isLoading",w,this),Object(i.a)(this,"hasMore",v,this),Object(i.a)(this,"page",x,this),this.limit=10,Object(s.m)(this)}return Object(c.a)(e,[{key:"append",value:function(e){this.list=this.list.concat(e)}},{key:"find",value:function(){var e=this;this.isLoading=!0,d.find({page:this.page,limit:this.limit}).then((function(t){e.append(t),e.page++,t.length<e.limit&&(e.hasMore=!1)})).catch((function(e){l.b.error("\u83b7\u53d6\u5386\u53f2\u9519\u8bef"),console.log(e)})).finally((function(){e.isLoading=!1}))}},{key:"reset",value:function(){this.list=[],this.isLoading=!1,this.hasMore=!0,this.page=0}}]),e}(),g=Object(a.a)(m.prototype,"list",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),w=Object(a.a)(m.prototype,"isLoading",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),v=Object(a.a)(m.prototype,"hasMore",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),x=Object(a.a)(m.prototype,"page",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Object(a.a)(m.prototype,"append",[s.f],Object.getOwnPropertyDescriptor(m.prototype,"append"),m.prototype),Object(a.a)(m.prototype,"find",[s.f],Object.getOwnPropertyDescriptor(m.prototype,"find"),m.prototype),Object(a.a)(m.prototype,"reset",[s.f],Object.getOwnPropertyDescriptor(m.prototype,"reset"),m.prototype),m),_=new(U=function(){function e(){Object(o.a)(this,e),Object(i.a)(this,"filename",k,this),Object(i.a)(this,"file",P,this),Object(i.a)(this,"isUploading",z,this),Object(i.a)(this,"serverFile",F,this),Object(s.m)(this)}return Object(c.a)(e,[{key:"setFilename",value:function(e){this.filename=e}},{key:"setFile",value:function(e){this.file=e}},{key:"upload",value:function(){var e=this;return this.isUploading=!0,this.serverFile=null,new Promise((function(t,n){d.add(e.file,e.filename).then((function(n){e.serverFile=n,t(n)})).catch((function(e){l.b.error("\u4e0a\u4f20\u65f6\u53d1\u751f\u9519\u8bef"),n(e)})).finally((function(){e.isUploading=!1}))}))}},{key:"reset",value:function(){this.filename="",this.file=null,this.serverFile=null}}]),e}(),k=Object(a.a)(U.prototype,"filename",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),P=Object(a.a)(U.prototype,"file",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=Object(a.a)(U.prototype,"isUploading",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),F=Object(a.a)(U.prototype,"serverFile",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(a.a)(U.prototype,"setFilename",[s.f],Object.getOwnPropertyDescriptor(U.prototype,"setFilename"),U.prototype),Object(a.a)(U.prototype,"setFile",[s.f],Object.getOwnPropertyDescriptor(U.prototype,"setFile"),U.prototype),Object(a.a)(U.prototype,"upload",[s.f],Object.getOwnPropertyDescriptor(U.prototype,"upload"),U.prototype),Object(a.a)(U.prototype,"reset",[s.f],Object.getOwnPropertyDescriptor(U.prototype,"reset"),U.prototype),U),N=new(D=function(){function e(){Object(o.a)(this,e),Object(i.a)(this,"values",I,this),Object(s.m)(this)}return Object(c.a)(e,[{key:"setUsername",value:function(e){this.values.username=e}},{key:"setPassword",value:function(e){this.values.password=e}},{key:"login",value:function(){var e=this;return new Promise((function(t,n){h(e.values.username,e.values.password).then((function(e){C.pullUser(),t(e)})).catch((function(e){C.resetUser(),l.b.error("\u8d26\u53f7\u6216\u5bc6\u7801\u9519\u8bef, \u8bf7\u5c1d\u8bd5\u91cd\u65b0\u767b\u5f55"),n(e)}))}))}},{key:"register",value:function(){var e=this;return new Promise((function(t,n){j(e.values.username,e.values.password).then((function(e){t(e)})).catch((function(e){C.resetUser(),l.b.error("\u8be5\u7528\u6237\u540d\u5df2\u5b58\u5728, \u6ce8\u518c\u5931\u8d25"),n(e)}))}))}},{key:"logout",value:function(){O(),S.reset(),_.reset(),C.resetUser()}}]),e}(),I=Object(a.a)(D.prototype,"values",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{username:"",password:""}}}),Object(a.a)(D.prototype,"setUsername",[s.f],Object.getOwnPropertyDescriptor(D.prototype,"setUsername"),D.prototype),Object(a.a)(D.prototype,"setPassword",[s.f],Object.getOwnPropertyDescriptor(D.prototype,"setPassword"),D.prototype),Object(a.a)(D.prototype,"login",[s.f],Object.getOwnPropertyDescriptor(D.prototype,"login"),D.prototype),Object(a.a)(D.prototype,"register",[s.f],Object.getOwnPropertyDescriptor(D.prototype,"register"),D.prototype),Object(a.a)(D.prototype,"logout",[s.f],Object.getOwnPropertyDescriptor(D.prototype,"logout"),D.prototype),D),H=Object(r.createContext)({AuthStore:N,UserStore:C,ImageStore:_,HistoryStore:S});window.stores={AuthStore:N,UserStore:C,ImageStore:_,HistoryStore:S};var L=function(){return Object(r.useContext)(H)}},95:function(e,t,n){}},[[101,3,5]]]);
//# sourceMappingURL=main.d261615f.chunk.js.map