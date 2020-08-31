(this.webpackJsonpmario=this.webpackJsonpmario||[]).push([[0],{327:function(e,t,a){e.exports=a(667)},332:function(e,t,a){},667:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(118),c=a.n(l),s=(a(332),a(24)),i=a(25),o=a(28),m=a(27),u=a(6),d=a(26),h=a(7),p=Object(h.b)(null,(function(e){return{signOutFunc:function(){e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"LOGED_OUT_USER"})}))}))}}}))((function(e){var t=e.initials;return r.a.createElement("ul",{className:" d-flex nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.c,{className:"nav-link text-light",to:"/createPlan"},"Make Plane")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link text-light",onClick:function(t){e.signOutFunc()}},"Logout ")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link text-light bg-danger rounded-pill d-inline-block "},t||r.a.createElement("span",{className:"text-danger"},"A"))))})),f=function(){return r.a.createElement("ul",{className:" d-flex nav align-items-center"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.c,{className:"nav-link text-light",to:"/login"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.c,{className:"nav-link text-light",to:"/signup"},"Signup")))},E=a(13),b=a(20),g=Object(E.d)(Object(b.firestoreConnect)((function(){return["users"]})),Object(h.b)((function(e){return{auth:e.firebase.auth,usersId:e.firestore.ordered.users,init:e.firebase.profile}})))((function(e){var t=e.auth,a=(e.usersId,e.init),n=t.uid?r.a.createElement(p,{initials:t.isLoaded&&a.initials}):r.a.createElement(f,null);return r.a.createElement("ul",{className:"nav sticky-top container-fluid bg-dark shadow-sm nav-pills nav-fill"},r.a.createElement("li",{className:"nav-link"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.c,{exact:!0,className:"nav-link ",to:"/"},r.a.createElement("h5",{className:" text-light"},"Plan Maker"))))),r.a.createElement("li",{className:"nav-link text-light"},t.isLoaded&&n))})),N=a(3),v=a(57),O=a.n(v),j=function(e){var t=e.notifications;return r.a.createElement("div",{className:" card shadow"},r.a.createElement("div",{className:"card-header bg-info text-light"},r.a.createElement("h5",null,"Notifications")),t?t.map((function(e){return r.a.createElement("div",{className:"card-body border-bottom ",key:e.id},r.a.createElement("h6",null,r.a.createElement("span",{className:"text-danger"},e.user,"  "),r.a.createElement("span",{className:"text-info ml-3"},e.content)),r.a.createElement("p",{className:"text-muted"},O()(e.time.toDate()).fromNow()))})):r.a.createElement("div",{className:"card-body border-bottom "},r.a.createElement("h3",{className:"text-center text-info"},"Loading...")))},y=function(e){var t=e.plans;e.profile;return r.a.createElement("div",{key:t.id},r.a.createElement("div",{className:"card mb-2 shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h6",{className:""},t.title)),r.a.createElement("div",{className:"card-body"},r.a.createElement(u.b,{to:"/plan/".concat(t.id),className:" nav-link text-dark"},r.a.createElement("p",null,"created by",r.a.createElement("span",{className:"ml-1 text-info"},t.authFirstName,t.authLastName)),r.a.createElement("p",{className:"text-muted"},O()(t.createdAt.toDate()).calendar())))))},x=function(e){var t=e.plans,a=e.profile;return r.a.createElement("div",null,t&&t.map((function(e){return r.a.createElement(y,{plans:e,key:t.id,profile:a})})))},w=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.plans,a=e.auth,n=e.profile,l=e.notifications;return a.uid?r.a.createElement("div",{className:"container-fluid container-md"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-7 order-2 order-md-1 col-12 py-4 px-md-4"},r.a.createElement(x,{plans:t,profile:n})),r.a.createElement("div",{className:"col-md-5 order-1 order-md-2 col-12 py-4 px-md-4"},r.a.createElement(j,{notifications:l})))):r.a.createElement(N.a,{to:"/login"})}}]),a}(n.Component),C=Object(E.d)(Object(b.firestoreConnect)([{collection:"notifications",limit:3,orderBy:["time","desc"]},{collection:"plans",orderBy:["createdAt","desc"]}]),Object(h.b)((function(e){return{plans:e.firestore.ordered.plans,auth:e.firebase.auth,profile:e.firebase.profile,notifications:e.firestore.ordered.notifications}})))(w);var F=Object(E.d)(Object(b.firestoreConnect)((function(){return["plans"]})),Object(h.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.plans;return{plan:n?n[a]:null,auth:e.firebase.auth,profile:e.firebase.profile}})))((function(e){var t=e.plan;return e.auth.uid?t?r.a.createElement("div",{className:"container m-5 mx-auto"},r.a.createElement("div",{className:"card text-left p-4 shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,t.title)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},t.content)),r.a.createElement("div",{className:"card-body border-top"},r.a.createElement("p",{className:"text-muted"},"Posted by  ",r.a.createElement("span",{className:"text-info"}," ",t.authFirstName," ",t.authLastName)),r.a.createElement("p",{className:"text-muted"},O()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container m-5 mx-auto"},r.a.createElement("div",{className:"card text-left p-4 "},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},"Loading....")))):r.a.createElement(N.a,{to:"/login"})})),k=a(18),S=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:""},e.handleSubmit=function(t){t.preventDefault(),t.target.reset(),e.props.createPlan(e.state),e.props.history.push("/")},e.handleChange=function(t){e.setState(Object(d.a)({},t.target.id,t.target.value))},e}return Object(i.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container-fluid container-md mt-5"},r.a.createElement("h3",{className:"text-center border-bottom mb-5"},"Add Your Plan"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-11 col-md-8 mx-auto bg-light p-3  rounded shadow"},r.a.createElement("form",{className:"p-4",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"title"),r.a.createElement("input",{onChange:this.handleChange,type:"text",className:"form-control",id:"title",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"content"},"content"),r.a.createElement("textarea",{onChange:this.handleChange,type:"text",className:"form-control",id:"content",required:!0})),r.a.createElement("button",{className:"btn btn-outline-dark"},"Submit"))))):r.a.createElement(N.a,{to:"/login"})}}]),a}(n.Component),L=Object(h.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createPlan:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),l=a().firebase.profile,c=a().firebase.auth.uid;r.collection("plans").add(Object(k.a)(Object(k.a)({},e),{},{authFirstName:l.firstname,authLastName:l.lastname,authId:c,createdAt:new Date})).then((function(){t({type:"CREATE_PLAN",plan:e})})).catch((function(e){t({type:"CREATE_PLAN_ERROR",err:e})}))}}(t))}}}))(S),A=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleSubmit=function(t){t.preventDefault(),e.props.signInFunc(e.state)},e.handleChange=function(t){e.setState(Object(d.a)({},t.target.id,t.target.value))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.err,a=e.auth;return a.uid?r.a.createElement(N.a,{to:"/"}):a.isLoaded&&r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h3",{className:"text-center border-bottom mb-5"},"Sign In"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-11 col-md-8 mx-auto bg-light p-3  rounded shadow"},t?r.a.createElement("div",{className:"alert alert-danger"},r.a.createElement("p",{className:"text-center"},t)):null,r.a.createElement("form",{className:"p-4",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"email"),r.a.createElement("input",{onChange:this.handleChange,type:"email",className:"form-control",id:"email",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"password"),r.a.createElement("input",{onChange:this.handleChange,type:"password",className:"form-control",id:"password",required:!0})),r.a.createElement("button",{className:"btn btn-outline-dark"},"Submit")))))}}]),a}(n.Component),I=Object(h.b)((function(e){return{err:e.auth.authErr,auth:e.firebase.auth}}),(function(e){return{signInFunc:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESSFUL"})})).catch((function(t){e({type:"LOGIN_FAILED",err:t})}))}));var a}}}))(A),_=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={firstname:"",lastname:"",email:"",password:"",confirm:""},e.handleSubmit=function(t){t.preventDefault();var a=e.state;a.password===a.confirm?e.props.signUpFunc(e.state):alert("passwords are not matching")},e.handleChange=function(t){e.setState(Object(d.a)({},t.target.id,t.target.value))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authLite;return t.uid?r.a.createElement(N.a,{to:"/"}):t.isLoaded&&r.a.createElement("div",{className:"container mt-4"},r.a.createElement("h3",{className:"text-center border-bottom text-dark mb-4 p-2"},"Sign Up"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-11 col-md-8 mx-auto bg-light p-3  rounded shadow"},r.a.createElement("form",{className:"p-4",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"firstname"},"First Name"),r.a.createElement("input",{onChange:this.handleChange,type:"text",className:"form-control",id:"firstname",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"lastname"},"Last Name"),r.a.createElement("input",{onChange:this.handleChange,type:"text",className:"form-control",id:"lastname",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"email"),r.a.createElement("input",{onChange:this.handleChange,type:"email",className:"form-control",id:"email",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.handleChange,type:"password",className:"form-control",id:"password",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"confirm"},"Confirm Password"),r.a.createElement("input",{onChange:this.handleChange,type:"password",className:"form-control",id:"confirm",required:!0})),a?r.a.createElement("div",{className:"alert alert-danger"},r.a.createElement("p",{className:"text-center"},a)):null,r.a.createElement("button",{className:"btn btn-outline-dark"},"Submit")))))}}]),a}(n.Component),P=Object(h.b)((function(e){return{auth:e.firebase.auth,authLite:e.auth.authErr}}),(function(e){return{signUpFunc:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,l=n.getFirestore,c=r(),s=l();c.auth().createUserWithEmailAndPassword(a.email,a.password).then((function(e){return s.collection("users").doc(e.user.uid).set(Object(d.a)({firstname:a.firstname,lastname:a.lastname,initials:a.firstname[0].toUpperCase()+a.lastname[0].toUpperCase()},"firstname",a.firstname))})).then((function(){e({type:"SIGNED_UP_USER"})})).catch((function(t){e({type:"SIGNED_UP_USER_FAIL",err:t})}))}));var a}}}))(_),U=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(N.d,null,r.a.createElement(N.b,{exact:!0,path:"/",component:C}),r.a.createElement(N.b,{path:"/plan/:id",component:F}),r.a.createElement(N.b,{path:"/login",component:I}),r.a.createElement(N.b,{path:"/signup",component:P}),r.a.createElement(N.b,{path:"/createPlan",component:L}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R={authErr:null},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_FAILED":return Object(k.a)(Object(k.a)({},e),{},{authErr:t.err.message});case"LOGIN_SUCCESSFUL":return Object(k.a)(Object(k.a)({},e),{},{authErr:null});case"LOGED_OUT_USER":console.log(t.type);case"SIGNED_UP_USER":return console.log(t.type),Object(k.a)(Object(k.a)({},e),{},{authErr:null});case"SIGNED_UP_USER_FAIL":return Object(k.a)(Object(k.a)({},e),{},{authErr:t.err.message});default:return e}},G={plans:[{id:1,title:"make the shit",content:"hululululu lkpas acnasd asdas casdjp"},{id:2,title:"cock the shit",content:"hujlulululu hujkhjhjkhjk acnasd asdas casdjp"},{id:3,title:"cum the meet",content:"hulusaedrfsdfs acnasd asdas casdjp"}]},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PLAN":return console.log(e),e;case"CREATE_PLAN_ERROR":console.log(t.type,t.err);default:return e}},B=a(58),T=Object(E.c)({auth:D,plan:q,firestore:B.firestoreReducer,firebase:b.firebaseReducer}),W=a(326),M=a(186),J=a.n(M);a(662),a(665);J.a.initializeApp({apiKey:"AIzaSyDmDJKhkYAtCNnr8GQ5myRAC4GDBo7HluM",authDomain:"ad-planner-45436.firebaseapp.com",databaseURL:"https://ad-planner-45436.firebaseio.com",projectId:"ad-planner-45436",storageBucket:"ad-planner-45436.appspot.com",messagingSenderId:"741250255755",appId:"1:741250255755:web:83450f36f4c0f74d3dfd8e",measurementId:"G-GWEZ73BWXD"});var z=J.a,K=Object(E.e)(T,Object(E.d)(Object(E.a)(W.a.withExtraArgument({getFirebase:b.getFirebase,getFirestore:B.getFirestore})),Object(B.reduxFirestore)(z))),Y={firebase:z,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:K.dispatch,createFirestoreInstance:B.createFirestoreInstance};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:K},r.a.createElement(b.ReactReduxFirebaseProvider,Y,r.a.createElement(U,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[327,1,2]]]);
//# sourceMappingURL=main.4be28354.chunk.js.map