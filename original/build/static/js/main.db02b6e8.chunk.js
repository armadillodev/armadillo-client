(this["webpackJsonparmadillo-client"]=this["webpackJsonparmadillo-client"]||[]).push([[0],{152:function(e,t,a){e.exports=a(186)},157:function(e,t,a){},164:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(9),o=(a(157),a(158),a(22)),u=a(50),i=a(58),s=a(104);!function(e){e.Bike="bike",e.Oven="oven",e.Solar="solar"}(n||(n={}));var m=/^(bike|oven|solar)\/([0-9]+)$/;function f(e){var t=e.match(m);return null==t||3!=t.length?(console.error(t),console.error("invalid id %s",e),["","",""]):t}var d,p=Object(i.b)({name:"sourceData",initialState:{bike:[],oven:[],solar:[]},reducers:{pushData:function(e,t){var a=t.payload,r=a.id,c=a.packet;console.assert(c);var l=function(e){var t;switch(f(e)[1]){case"bike":t=n.Bike;break;case"oven":t=n.Oven;break;case"solar":t=n.Solar;break;default:t=n.Bike}return t}(r),o=function(e){var t=Number(f(e)[2]);return Number(t)}(r),u=e[l],i=u[o]||[];i=[].concat(Object(s.a)(c),Object(s.a)(i));for(;i.length>300;)i.pop();u[o]=i},clearData:function(e){e.bike=[],e.oven=[],e.solar=[]}}}),E=p.actions,b=E.pushData,v=E.clearData,h=[],g=function(e){return function(t){return function(a){return a.sourceData[e][t]||h}}},O=g(n.Bike),k=g(n.Oven),j=g(n.Solar),y=function(e){return function(t){return function(a){for(var n=[],r=0;r<t.length;r++)n.push(a.sourceData[e][t[r]]||h);return n}}},w=y(n.Bike),x=(y(n.Oven),y(n.Solar),p.reducer),N=a(15),D=a.n(N),S=a(36),_=function(e,t,a,n){return{data:e,ok:t,statusText:a,url:n}},B=function(){var e=Object(S.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(200===(a=e.sent).status){e.next=5;break}return e.abrupt("return",_(null,!1,a.statusText,a.url));case 5:return e.t0=_,e.next=8,a.json();case 8:return e.t1=e.sent,e.t2=a.url,e.abrupt("return",(0,e.t0)(e.t1,!0,"",e.t2));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(S.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("".concat("/api","/trailer/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(S.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("".concat("/api","/time"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(S.a)(D.a.mark((function e(t,a,n){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("".concat("/api","/data/").concat(t,"?from=").concat(a,"&until=").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();!function(e){e.Idle="idle",e.Loading="loading",e.Failed="failed",e.Success="success"}(d||(d={}));var M={name:"",location:"",ovens:[],bikes:[],solars:[]},P={status:d.Idle,data:M},C=Object(i.b)({name:"trailer",initialState:P,reducers:{addData:function(e,t){var a=t.payload.data;e.data=a},removeData:function(e){e.data=M,e.status=d.Loading},loading:function(e){e.status=d.Loading},failed:function(e){e.status=d.Failed},success:function(e){e.status=d.Success}}}),H=C.actions,W=H.addData,q=H.removeData,F=H.loading,G=H.failed,X=H.success,$=C.reducer,z={actionSanitizer:function(e){return e.type===b.type&&e.payload.packet?Object(u.a)(Object(u.a)({},e),{},{payload:{id:e.payload.id,length:e.payload.packet.length,packet:"<<LONG_BLOB>>"}}):e},stateSanitizer:function(e){return e.sourceData?Object(u.a)(Object(u.a)({},e),{},{sourceData:"<<LONG_BLOB>>"}):e}},J=Object(i.a)({reducer:{trailer:$,sourceData:x},devTools:z}),A=(a(164),a(227)),Y=a(91),K=a(229),Q=a(224),R=Object(Q.a)((function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,backgroundColor:e.palette.primary.main},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},homeLink:{"&$selected":{backgroundColor:"blue"}},graphPaper:{padding:e.spacing(2)},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}}})),U=function(){var e=Object(o.c)((function(e){return e.trailer}));return"success"!==e.status?null:e.data},V=function(){var e=R(),t=U(),a=t?t.name:"Armadillo";return c.a.createElement("div",null,c.a.createElement(A.a,{position:"fixed",className:e.appBar},c.a.createElement(K.a,null,c.a.createElement(Y.a,{varient:"h5",noWrap:!0},a))))},Z=a(243),ee=a(234),te=a(233),ae=a(230),ne=a(232),re=a(231),ce=a(129),le=a.n(ce),oe=a(103),ue=a.n(oe),ie=a(128),se=a.n(ie),me=a(30),fe=a(13),de=a(190),pe=Object(Q.a)((function(e){return{root:Object(u.a)(Object(u.a)({},e.mixins.toolbar),{},{position:"relative",display:"flex",flexWrap:"wrap"}),homeButton:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",left:0,right:0,top:0,bottom:0}}})),Ee=function(){var e=pe();return c.a.createElement("div",{className:e.root},c.a.createElement(de.a,{className:e.homeButton,component:me.c,to:"/"},c.a.createElement(Y.a,{variant:"h5"},"World")))},be=function(e){return c.a.createElement(ae.a,Object.assign({button:!0,exact:!0,component:me.c,activeClassName:"Mui-selected"},e))},ve=function(e,t){return function(a,n){return c.a.createElement(be,{to:"".concat(e,"/").concat(t,"/").concat(a),key:"".concat(t,"-").concat(a)},c.a.createElement(re.a,null,c.a.createElement(ue.a,null)),c.a.createElement(ne.a,{primary:"".concat(t," ").concat(n+1)}))}},he=function(e){var t=e.url;return c.a.createElement(be,{to:"".concat(t,"/bike"),key:"bike-list"},c.a.createElement(re.a,null,c.a.createElement(ue.a,null)),c.a.createElement(ne.a,{primary:"Bikes"}))},ge=function(e){var t=e.url;return c.a.createElement(be,{to:"".concat(t,"/download"),key:"bike-list"},c.a.createElement(re.a,null,c.a.createElement(se.a,null)),c.a.createElement(ne.a,{primary:"Downloader"}))},Oe=function(){var e,t=Object(fe.h)(),a=R(),n=U();return e=null!==n?function(e,t){var a=t.ovens.map(ve(e,"oven")),n=t.solars.map(ve(e,"solar"));return c.a.createElement(te.a,null,c.a.createElement(be,{to:"".concat(e,"/trailer"),key:"trailer"},c.a.createElement(re.a,null,c.a.createElement(le.a,null)),c.a.createElement(ne.a,{primary:t.name})),c.a.createElement(ee.a,null),c.a.createElement(he,{url:e}),c.a.createElement(ee.a,null),a,c.a.createElement(ee.a,null),n,c.a.createElement(ee.a,null),c.a.createElement(ge,{url:e}))}(t.url,n):"",c.a.createElement("div",null,c.a.createElement(Z.a,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper},anchor:"left"},c.a.createElement("div",{className:a.toolbar},c.a.createElement(Ee,null)),e))},ke=a(238),je=a(19),ye=function(e){return c.a.createElement(ae.a,{button:!0,component:me.b,to:"/".concat(e.id),key:e.id},c.a.createElement(ne.a,{primary:e.name}))},we=function(){var e=function(){var e=Object(r.useState)(null),t=Object(je.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){fetch("/api/trailer").then((function(e){return e.json()})).then((function(e){return n(e)})).catch(n(null))}),[]),a}();if(null==e)return"failed to connect to database";var t=e.map(ye);return c.a.createElement(te.a,null,t)},xe=function(e){return{x:e.created_at,y:e.current*e.voltage}},Ne=function(e){var t=function(e){return Object(o.c)(w(e))}(e),a=Object(r.useState)([]),n=Object(je.a)(a,2),c=n[0],l=n[1];return Object(r.useEffect)((function(){l(function(e){console.assert(void 0!==e[0]);for(var t=-1,a=-1,n=0;n<e.length;n++)e[n].length>t&&(t=e[n].length,a=n);for(var r=[],c=0;c<t;c++){for(var l=0,o=0;o<e.length;o++)void 0!==e[o][c]&&(l+=e[o][c].y||0);var u={y:l,x:e[a][c].x};r.push(u)}return r}(t.map((function(e){return e.map(xe)}))))}),t),c},De=function(e){var t=function(e){return Object(o.c)(O(e))}(e),a=Object(r.useState)([]),n=Object(je.a)(a,2),c=n[0],l=n[1];return Object(r.useEffect)((function(){return l(t.map(xe))}),[t]),c},Se=a(187),_e=a(17),Be=a(86),Ie=a(21),Le=function(e){var t=e.data,a=e.title,n=R(),l=Object(Ie.a)(),o=Object(r.useState)(!1),u=Object(je.a)(o,2),i=u[0],s=u[1],m=function(e,t){s(e)},f=function(){s(!1)},d=function(e){return 1e3*e.x};return c.a.createElement(Se.a,{className:n.graphPaper},c.a.createElement(Y.a,{variant:"h5"},a),c.a.createElement(Be.a,{disableHeight:!0},(function(e){var a=e.width;return c.a.createElement(_e.h,{getX:d,onMouseLeave:f,height:250,width:a,xType:"time"},c.a.createElement(_e.g,null),c.a.createElement(_e.i,null),c.a.createElement(_e.f,null),c.a.createElement(_e.d,null),c.a.createElement(_e.a,{data:t,color:l.palette.secondary.light,opacity:.6}),c.a.createElement(_e.e,{data:t,color:l.palette.secondary.main,onNearestX:m}),c.a.createElement(_e.b,{drag:!0,enableY:!1}),i?c.a.createElement(_e.c,{value:i}):null)})))},Te=function(e){var t=e.bike_id,a=De(t);return c.a.createElement(Le,{data:a,title:"Bike Power"})},Me=a(236),Pe=function(){var e=U();if(null===e)return"No Data";for(var t=[],a=0;a<e.bikes.length;a++)t.push(c.a.createElement(Me.a,{item:!0,xs:12},c.a.createElement(Te,{bike_id:e.bikes[a]})));return c.a.createElement("div",null,c.a.createElement(Me.a,{container:!0,spacing:3},t))},Ce=function(){var e=R(),t=U();return null===t?"No data":c.a.createElement(Se.a,{className:e.graphPaper},c.a.createElement(Y.a,null,"Name: ",t.name),c.a.createElement(Y.a,null,"Location: ",t.location))},He=function(e){var t=Object(o.c)(k(e)),a=Object(r.useState)([]),n=Object(je.a)(a,2),c=n[0],l=n[1];return Object(r.useEffect)((function(){l(t.map((function(e){return{x:e.created_at,y:e.temperature}})))}),[t]),c},We=function(e){var t=Object(o.c)(j(e)),a=Object(r.useState)([]),n=Object(je.a)(a,2),c=n[0],l=n[1];return Object(r.useEffect)((function(){l(t.map((function(e){return{x:e.created_at,y:e.power}})))}),[t]),c},qe=function(e){var t=e.data,a=e.title,n=R();if(null==t)return c.a.createElement(Y.a,null,"No Data");var r=function(e){return 1e3*e.x};return c.a.createElement(Se.a,{className:n.graphPaper},c.a.createElement(Y.a,{variant:"h5"},a),c.a.createElement(Be.a,{disableHeight:!0},(function(e){var a=e.width;return c.a.createElement(_e.h,{getX:r,height:250,width:a,yDomain:[0,100],xType:"time"},c.a.createElement(_e.f,null),c.a.createElement(_e.d,null),c.a.createElement(_e.g,null),c.a.createElement(_e.i,null),c.a.createElement(_e.e,{data:t}))})))},Fe=function(e){e.trailerId;var t=U().ovens[0],a=He(t);return c.a.createElement(qe,{data:a,title:"Oven Temperature"})},Ge=function(e){e.trailerId;var t=U().solars[0],a=We(t);return c.a.createElement(Le,{data:a,title:"Solar Power"})},Xe=function(e){e.trailerId;var t=U(),a=Ne(t.bikes);return c.a.createElement(Le,{data:a,title:"Bike Data"})},$e=function(){var e=Number(Object(fe.g)().trailer_id);return null===U()?"No Data":c.a.createElement(Me.a,{container:!0,spacing:3},c.a.createElement(Me.a,{item:!0,xs:12},c.a.createElement(Ce,{trailer_id:e})),c.a.createElement(Me.a,{container:!0,item:!0,spacing:1},c.a.createElement(Me.a,{item:!0,sm:12,md:4,key:"bike"},c.a.createElement(Xe,{trailerId:e})),c.a.createElement(Me.a,{item:!0,sm:12,md:4,key:"solar"},c.a.createElement(Ge,{trailerId:e})),c.a.createElement(Me.a,{item:!0,sm:12,md:4,key:"oven"},c.a.createElement(Fe,{trailerId:e}))))},ze=function(e){var t=e.oven_id,a=R();return c.a.createElement(Se.a,{className:a.graphPaper},c.a.createElement(Y.a,null,"Oven: ",t))},Je=function(){var e=Number(Object(fe.g)().oven_id),t=He(e);return c.a.createElement("div",null,c.a.createElement(Me.a,{container:!0,spacing:3},c.a.createElement(Me.a,{item:!0,xs:3},c.a.createElement(ze,{oven_id:e})),c.a.createElement(Me.a,{item:!0,xs:12},c.a.createElement(qe,{data:t,title:"Oven Temperature"}))))},Ae=function(e){var t=e.solar_id,a=R();return c.a.createElement(Se.a,{className:a.graphPaper},c.a.createElement(Y.a,null,"Solar Microgrid: ",t))},Ye=function(){var e=Number(Object(fe.g)().solar_id),t=We(e);return c.a.createElement("div",null,c.a.createElement(Me.a,{container:!0,spacing:3},c.a.createElement(Me.a,{item:!0,xs:3},c.a.createElement(Ae,{solar_id:e})),c.a.createElement(Me.a,{item:!0,xs:12},c.a.createElement(Le,{data:t,title:"Solar Data"}))))},Ke=a(27),Qe=a(133),Re=a(241),Ue=null,Ve=!1,Ze=null,et=function(e,t,a){var n;null!==Ue&&Qe.a((n=Ue,[n.bikes.map((function(e){return"bike/".concat(e)})),n.ovens.map((function(e){return"oven/".concat(e)})),n.solars.map((function(e){return"solar/".concat(e)}))].flat())).pipe(Object(Re.a)(function(e,t){return function(a){return new Ke.a((function(n){T(a,e,t).then((function(e){e.ok?n.next([a,e.data]):console.error(e.statusText),n.complete()}))}))}}(t,a))).subscribe((function(t){return e(b({id:t[0],packet:t[1]}))}),(function(e){return console.error(e)}))},tt=function(e,t){(Ue=e,Ve=!0,null===Ze)&&function(){var e=Object(S.a)(D.a.mark((function e(){var a,n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:a=e.sent.data,n=a,(r=function(){var e=Object(S.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ve&&(Ve=!1,t(v()),console.log("changed target to %s",Ue),n=a-300),null===Ue){e.next=7;break}return et(t,n,a),n=a,e.next=6,L();case 6:a=e.sent.data;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}())(),Ze=window.setInterval(r,1e3);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()},at=function(){console.log("stopping downloader"),Ue=null},nt=a(239),rt=function(){var e=Object(r.useState)(new Date),t=Object(je.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(new Date),l=Object(je.a)(c,2),o=l[0],u=l[1],i=Object(r.useState)(""),s=Object(je.a)(i,2),m=s[0],f=s[1],d=Object(r.useState)(""),p=Object(je.a)(d,2),E=p[0],b=p[1];return r.createElement(r.Fragment,null,r.createElement("code",null,window.location.host+E),r.createElement("form",{onSubmit:function(e){if(e.preventDefault(),null!=a&&null!=o){var t=Math.floor(a.getTime()/1e3),n=Math.floor(o.getTime()/1e3);console.log(m,t,n);var r="/api/data/".concat(m,"/csv?from=").concat(t,"&until=").concat(n);window.open(r,"_blank"),b(r)}}},r.createElement("h3",null,"Downloader"),r.createElement("label",null,"ID:",r.createElement("input",{required:!0,name:"id",placeholder:"<type>/<id>",value:m,onChange:function(e){f(e.target.value)}})),r.createElement("br",null),r.createElement(nt.a,{required:!0,variant:"inline",label:"from",value:a,onChange:function(e){return n(e)},format:"yyyy/MM/dd HH:mm"}),r.createElement("br",null),r.createElement(nt.a,{required:!0,variant:"inline",label:"until",value:o,onChange:function(e){return u(e)},format:"yyyy/MM/dd HH:mm"}),r.createElement("br",null),r.createElement("input",{type:"submit"})))},ct=function(){var e=Object(fe.g)().trailer_id,t=Object(o.b)(),a=Object(o.c)((function(e){return e.trailer.data}));return Object(r.useEffect)((function(){var a;return t((a=e,function(){var e=Object(S.a)(D.a.mark((function e(t,n){var r,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("loading"!==n().status){e.next=3;break}return e.abrupt("return");case 3:return t(F()),e.next=6,I(a);case 6:if((r=e.sent).ok){e.next=11;break}return console.error(r.statusText),t(G()),e.abrupt("return");case 11:c=r.data,t(W({data:c})),t(X());case 14:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())),function(){t(q())}}),[e,t]),Object(r.useEffect)((function(){return tt(a,t),function(){at()}}),[e,a,t]),c.a.createElement(fe.d,null,c.a.createElement(fe.b,{exact:!0,path:"/".concat(e)},c.a.createElement(fe.a,{to:"/".concat(e,"/trailer")})),c.a.createElement(fe.b,{path:"/".concat(e,"/trailer")},c.a.createElement($e,null)),c.a.createElement(fe.b,{path:"/".concat(e,"/bike")},c.a.createElement(Pe,null)),c.a.createElement(fe.b,{path:"/".concat(e,"/oven/:oven_id")},c.a.createElement(Je,null)),c.a.createElement(fe.b,{path:"/".concat(e,"/solar/:solar_id")},c.a.createElement(Ye,null)),c.a.createElement(fe.b,{path:"/".concat(e,"/download")},c.a.createElement(rt,null)))},lt=a(237),ot=a(132),ut=Object(ot.a)({palette:{primary:{main:"#ff9100"},secondary:{main:"#00796b"}}}),it=function(){var e=R();return c.a.createElement(lt.a,{theme:ut},c.a.createElement(me.a,null,c.a.createElement("div",{className:e.root},c.a.createElement(ke.a,null),c.a.createElement(V,null),c.a.createElement(fe.d,null,c.a.createElement(fe.b,{exact:!0,path:"/"},c.a.createElement(Oe,null),c.a.createElement("main",{className:e.content},c.a.createElement("div",{className:e.toolbar}),c.a.createElement(we,null))),c.a.createElement(fe.b,{path:"/:trailer_id"},c.a.createElement(Oe,null),c.a.createElement("main",{className:e.content},c.a.createElement("div",{className:e.toolbar}),c.a.createElement(ct,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(185);var st=a(14),mt=a(131);l.render(r.createElement(r.StrictMode,null,r.createElement(st.a,{utils:mt.a},r.createElement(o.a,{store:J},r.createElement(it,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[152,1,2]]]);
//# sourceMappingURL=main.db02b6e8.chunk.js.map