(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"949b9e7d"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-todo/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"grey lighten-4"},[a("Navbar"),a("v-content",{staticClass:"mx-4 mb-4"},[a("router-view")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-snackbar",{attrs:{timeout:3e3,top:"",color:"success"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a("span",[t._v("You add a new project!")]),a("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){t.snackbar=!1}}},[t._v("X")])],1),a("v-app-bar",{attrs:{flat:"",app:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[a("span",{staticClass:"font-weight-light"},[t._v("Todo")]),a("span",[t._v("Danny")])]),a("v-spacer"),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{text:"",color:"grey"}},n),[a("v-icon",{attrs:{left:""}},[t._v("mdi-chevron-down")]),a("span",[t._v("Menu")])],1)]}}])},[a("v-list",t._l(t.links,(function(e){return a("v-list-item",{key:e.text,attrs:{router:"",to:e.route}},[a("v-list-item-title",[a("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),a("span",[t._v(t._s(e.text))])],1)],1)})),1)],1)],1),a("v-navigation-drawer",{staticClass:"primary",attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-row",{staticClass:"flex-column",attrs:{align:"center"}},[a("v-col",{staticClass:"mt-5",attrs:{cols:"6"}},[a("v-avatar",{staticClass:"grey lighten-2",attrs:{size:"100"}},[a("img",{attrs:{src:"/danny.jpg"}})]),a("div",{staticClass:"p white--text subtitle-2 mt-2 ml-2"},[t._v("Danny Wang")])],1),a("div",{staticClass:"mt-3 mb-4"},[a("Popup",{attrs:{isNew:t.isNew,project:t.project},on:{afterAdded:function(e){t.snackbar=!0}}})],1)],1),a("v-divider"),a("v-list",t._l(t.links,(function(e){return a("v-list-item",{key:e.text,attrs:{router:"",to:e.route}},[a("v-list-item-icon",[a("v-icon",{staticClass:"white--text"},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"white--text"},[t._v(t._s(e.text))])],1)],1)})),1)],1)],1)},i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[t.isNew?a("v-btn",t._g({staticClass:"success",attrs:{dark:""}},n),[a("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-plus")]),a("span",{staticClass:"caption"},[t._v("Add New Project")])],1):a("v-btn",t._g({staticClass:"mr-2",attrs:{small:"",fab:"",color:"info"}},n),[a("v-icon",[t._v("mdi-pencil")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[t.isNew?a("v-card-title",{staticClass:"headline grey lighten-2"},[t._v("Add a New Project")]):a("v-card-title",{staticClass:"headline grey lighten-2"},[t._v("Edit Project")]),a("v-card-text",[a("v-form",{ref:"form",staticClass:"px-3 text-center"},[a("v-text-field",{attrs:{label:"Title","prepend-icon":"mdi-folder",rules:t.inputRules},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("v-textarea",{attrs:{label:"Information","prepend-icon":"mdi-pencil",rules:t.inputRules},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),a("v-menu",{attrs:{"max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-text-field",t._g({attrs:{value:t.formattedDate,label:"Due date","prepend-icon":"mdi-calendar-range",rules:t.inputRules}},n))]}}])},[a("v-date-picker",{model:{value:t.due,callback:function(e){t.due=e},expression:"due"}})],1),a("v-select",{attrs:{items:t.statusList,label:"Status"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}}),t.isNew?a("v-btn",{staticClass:"mx-0 mt-3 success",attrs:{text:"",loading:t.loading},on:{click:t.submit}},[t._v("Add new project")]):a("v-btn",{staticClass:"mx-0 mt-3 info",attrs:{text:"",loading:t.loading},on:{click:function(e){return t.edit(t.project.id)}}},[t._v("Edit project")])],1)],1)],1)],1)],1)},l=[],u=(a("96cf"),a("1da1")),d=a("b166"),p=a("e3ee"),v=a("59ca"),f=a.n(v),m=(a("e71f"),{apiKey:Object({NODE_ENV:"production",BASE_URL:"/vue-todo/"}).fb_api_key,authDomain:"danny-todo.firebaseapp.com",databaseURL:"https://danny-todo.firebaseio.com",projectId:"danny-todo",storageBucket:"danny-todo.appspot.com",messagingSenderId:"890909080795",appId:Object({NODE_ENV:"production",BASE_URL:"/vue-todo/"}).fb_app_id,measurementId:"G-52991N1GHJ"});f.a.initializeApp(m);var b=f.a.firestore(),h=b,g={props:["isNew","project"],data:function(){return{title:this.project.title,content:this.project.content,due:null,inputRules:[function(t){return!!t||"Required."},function(t){return t.length>=3||"You must type in at least 3 charaters"}],loading:!1,dialog:!1,statusList:["ongoing","complete","overdue"],status:this.project.status,isValid:!1}},methods:{submit:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.loading=!0,!this.$refs.form.validate()){t.next=16;break}return e={title:this.title,content:this.content,due:Object(d["a"])(Object(p["a"])(this.due),"do MMM yyyy"),person:"Danny",status:this.status},t.prev=3,t.next=6,h.collection("projects").add(e);case 6:this.loading=!1,this.dialog=!1,this.$emit("afterAdded"),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](3),console.log(t.t0);case 14:t.next=17;break;case 16:this.loading=!1;case 17:case"end":return t.stop()}}),t,this,[[3,11]])})));function e(){return t.apply(this,arguments)}return e}(),edit:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.loading=!0,!this.$refs.form.validate()){t.next=16;break}return a={title:this.title,content:this.content,due:Object(d["a"])(Object(p["a"])(this.due),"do MMM yyyy"),person:"Danny",status:this.status},t.prev=3,t.next=6,h.collection("projects").doc(e).update(a);case 6:this.loading=!1,this.dialog=!1,this.$emit("afterEdited"),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](3),console.log(t.t0);case 14:t.next=17;break;case 16:this.loading=!1;case 17:case"end":return t.stop()}}),t,this,[[3,11]])})));function e(e){return t.apply(this,arguments)}return e}()},computed:{formattedDate:function(){return this.due?Object(d["a"])(Object(p["a"])(this.due),"do MMM yyyy"):""}}},y=g,j=a("2877"),_=a("6544"),x=a.n(_),w=a("8336"),C=a("b0af"),O=a("99d9"),k=a("2e4b"),V=a("169a"),P=a("4bd4"),E=a("132d"),D=a("e449"),S=a("b974"),L=a("8654"),N=a("a844"),T=Object(j["a"])(y,c,l,!1,null,null,null),M=T.exports;x()(T,{VBtn:w["a"],VCard:C["a"],VCardText:O["a"],VCardTitle:O["b"],VDatePicker:k["a"],VDialog:V["a"],VForm:P["a"],VIcon:E["a"],VMenu:D["a"],VSelect:S["a"],VTextField:L["a"],VTextarea:N["a"]});var I={name:"Navbar",components:{Popup:M},data:function(){return{drawer:!1,links:[{icon:"mdi-view-dashboard",text:"Dashboard",route:"/"},{icon:"mdi-folder",text:"My Projects",route:"/projects"},{icon:"mdi-account",text:"Team",route:"/team"}],snackbar:!1,isNew:!0,project:{content:"",title:"",due:null,status:""}}}},R=I,A=a("40dc"),B=a("5bc1"),$=a("8212"),z=a("62ad"),G=a("ce7e"),W=a("8860"),J=a("da13"),U=a("5d23"),Y=a("34c3"),q=a("f774"),F=a("0fd9"),H=a("2db4"),K=a("2fa4"),X=a("2a7f"),Q=Object(j["a"])(R,s,i,!1,null,null,null),Z=Q.exports;x()(Q,{VAppBar:A["a"],VAppBarNavIcon:B["a"],VAvatar:$["a"],VBtn:w["a"],VCol:z["a"],VDivider:G["a"],VIcon:E["a"],VList:W["a"],VListItem:J["a"],VListItemContent:U["a"],VListItemIcon:Y["a"],VListItemTitle:U["b"],VMenu:D["a"],VNavigationDrawer:q["a"],VRow:F["a"],VSnackbar:H["a"],VSpacer:K["a"],VToolbarTitle:X["a"]});var tt={name:"App",components:{Navbar:Z},data:function(){return{}}},et=tt,at=a("7496"),nt=a("a75b"),rt=Object(j["a"])(et,r,o,!1,null,null,null),ot=rt.exports;x()(rt,{VApp:at["a"],VContent:nt["a"]});a("d3b7");var st=a("8c4f"),it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"team"},[a("h1",{staticClass:"subtitle-1 grey--text"},[t._v("Team")]),a("v-container",{staticClass:"my-5"},[a("v-row",t._l(t.team,(function(e){return a("v-col",{key:e.name,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[a("v-card",{staticClass:"text-center ma-3"},[a("v-img",[a("v-avatar",{staticClass:"grey lighten-2",attrs:{size:"100"}},[a("img",{attrs:{src:e.avatar}})])],1),a("v-card-text",[a("div",{staticClass:"subtitle-2 font-weight-bold"},[t._v(t._s(e.name))]),a("div",{staticClass:"gre--text"},[t._v(t._s(e.role))])]),a("v-card-action",[a("v-btn",{attrs:{text:"",color:"grey"}},[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-message")]),a("span",[t._v("Message")])],1)],1)],1)],1)})),1)],1)],1)},ct=[],lt={name:"team",data:function(){return{team:[{name:"Danny Wang",role:"Entry Level Web developer",avatar:"/danny.jpg"},{name:"Ryu",role:"Graphic designer",avatar:"/avatar-2.png"},{name:"Chun Li",role:"Web developer",avatar:"/avatar-3.png"},{name:"Gouken",role:"Social media maverick",avatar:"/avatar-4.png"},{name:"Yoshi",role:"Sales guru",avatar:"/avatar-5.png"}]}}},ut=lt,dt=a("a523"),pt=a("adda"),vt=Object(j["a"])(ut,it,ct,!1,null,null,null),ft=vt.exports;x()(vt,{VAvatar:$["a"],VBtn:w["a"],VCard:C["a"],VCardText:O["a"],VCol:z["a"],VContainer:dt["a"],VIcon:E["a"],VImg:pt["a"],VRow:F["a"]});var mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("h1",{staticClass:"subtitle-1 grey--text"},[t._v("Dashboard")]),a("v-container",[t.isLoading?a("v-row",{staticClass:"mb-2"},[a("v-col",[a("div",{staticClass:"spinner text-center"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary",size:200}},[t._v("Loading...")])],1)])],1):a("v-row",{staticClass:"mb-2"},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{small:"",text:"",color:"grey"},on:{click:function(e){return t.sortBy("title")}}},n),[a("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-folder")]),a("span",{staticClass:"caption text-lowercase"},[t._v("By project names")])],1)]}}])},[a("span",[t._v("Sort by project names")])]),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{small:"",text:"",color:"grey",dark:""},on:{click:function(e){return t.sortBy("person")}}},n),[a("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-account")]),a("span",{staticClass:"caption text-lowercase"},[t._v("By person names")])],1)]}}])},[a("span",[t._v("Sort by project names")])])],1),t._l(t.projects,(function(e){return a("v-card",{key:e.id,staticClass:"pa-3 mb-2",attrs:{flat:""}},[a("v-row",{class:"pa-3 project "+e.status},[a("v-col",{attrs:{cols:"12",md:"4"}},[a("div",{staticClass:"caption grey--text"},[t._v("Project Title")]),a("div",{},[t._v(t._s(e.title))])]),a("v-col",{attrs:{cols:"6",sm:"4",md:"2"}},[a("div",{staticClass:"caption grey--text"},[t._v("Person")]),a("div",{},[t._v(t._s(e.person))])]),a("v-col",{attrs:{cols:"6",sm:"4",md:"2"}},[a("div",{staticClass:"caption grey--text"},[t._v("Due By")]),a("div",{},[t._v(t._s(e.due))])]),a("v-col",{attrs:{cols:"3",sm:"4",md:"2"}},[a("div",{staticClass:"right"},[a("v-chip",{staticClass:"v-chip--active white--text caption my-2",attrs:{small:"",color:""+e.status}},[t._v(t._s(e.status))])],1)]),a("v-col",{attrs:{cols:"2"}},[a("div",{staticClass:"buttons d-flex"},[a("Popup",{attrs:{project:e},on:{afterEdited:t.fetchProjects}}),a("v-btn",{attrs:{small:"",fab:"",color:"error"}},[a("v-icon",{on:{click:function(a){return t.deleteProject(e.id)}}},[t._v("mdi-delete")])],1)],1)])],1)],1)}))],2)],1)},bt=[],ht=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3"));function gt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function yt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?gt(Object(a),!0).forEach((function(e){Object(ht["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):gt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var jt={name:"dashboard",components:{Popup:M},created:function(){this.fetchProjects()},data:function(){return{projects:[],isLoading:!1}},methods:{sortBy:function(t){this.projects.sort((function(e,a){return e[t]<a[t]?-1:1}))},deleteProject:function(t){h.collection("projects").doc(t).delete(),this.fetchProjects()},fetchProjects:function(){var t=this;this.projects=[],this.isLoading=!0,h.collection("projects").onSnapshot((function(e){var a=e.docChanges();a.forEach((function(e){"added"===e.type&&t.projects.push(yt({},e.doc.data(),{id:e.doc.id}))})),t.isLoading=!1}))}}},_t=jt,xt=(a("b985"),a("cc20")),wt=a("490a"),Ct=a("3a2f"),Ot=Object(j["a"])(_t,mt,bt,!1,null,null,null),kt=Ot.exports;x()(Ot,{VBtn:w["a"],VCard:C["a"],VChip:xt["a"],VCol:z["a"],VContainer:dt["a"],VIcon:E["a"],VProgressCircular:wt["a"],VRow:F["a"],VTooltip:Ct["a"]});var Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projects"},[a("h1",{staticClass:"subtitle-1 grey--text"},[t._v("Projects")]),a("v-container",{staticClass:"my-5"},[a("v-expansion-panels",{attrs:{accordion:""}},t._l(t.myProjects,(function(e){return a("v-expansion-panel",{key:e.title},[a("v-expansion-panel-header",{attrs:{"expand-icon":"mdi-menu-down"}},[t._v(t._s(e.title))]),a("v-expansion-panel-content",{staticClass:"grey--text"},[a("div",{staticClass:"font-weight-bold"},[t._v("due by "+t._s(e.due))]),a("div",[t._v(t._s(e.content))])])],1)})),1)],1)],1)},Pt=[];function Et(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function Dt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Et(Object(a),!0).forEach((function(e){Object(ht["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Et(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var St={name:"projects",created:function(){var t=this;h.collection("projects").onSnapshot((function(e){var a=e.docChanges();a.forEach((function(e){"added"===e.type&&t.projects.push(Dt({},e.doc.data(),{id:e.doc.id}))}))}))},data:function(){return{projects:[]}},computed:{myProjects:function(){return this.projects.filter((function(t){return"Danny"===t.person}))}}},Lt=St,Nt=a("cd55"),Tt=a("49e2"),Mt=a("c865"),It=a("0393"),Rt=Object(j["a"])(Lt,Vt,Pt,!1,null,null,null),At=Rt.exports;x()(Rt,{VContainer:dt["a"],VExpansionPanel:Nt["a"],VExpansionPanelContent:Tt["a"],VExpansionPanelHeader:Mt["a"],VExpansionPanels:It["a"]}),n["a"].use(st["a"]);var Bt=[{path:"/",name:"dashboard",component:kt},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/projects",name:"projects",component:At},{path:"/team",name:"team",component:ft}],$t=new st["a"]({mode:"history",base:"/vue-todo/",routes:Bt}),zt=$t,Gt=a("f309");n["a"].use(Gt["a"]);var Wt=new Gt["a"]({theme:{themes:{light:{primary:"#9652ff",secondary:"#3cd1c2",accent:"#ffaa2c",error:"#f83e70"}}}});n["a"].config.productionTip=!1,new n["a"]({router:zt,vuetify:Wt,render:function(t){return t(ot)}}).$mount("#app")},9603:function(t,e,a){},b985:function(t,e,a){"use strict";var n=a("9603"),r=a.n(n);r.a}});
//# sourceMappingURL=app.404f051a.js.map