(this["webpackJsonpcrud-react-redux"]=this["webpackJsonpcrud-react-redux"]||[]).push([[0],{47:function(e,t,a){e.exports=a(79)},77:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),s=a(16),u=a(18),i=a(17),o=a(9),m=a(10),d=a(12),h=a(11),p=a(13),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={date:new Date},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,this.state.date.toLocaleTimeString()))}}]),t}(n.Component);var f=function(){return r.a.createElement("header",{className:"jumbotron"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"CRUD using React"),r.a.createElement("p",{className:"lead"},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, veniam?"),r.a.createElement(E,null)))};function b(){return r.a.createElement("div",{className:"container"},r.a.createElement(u.b,{to:"/",type:"button",className:"btn btn-outline-danger"},"Back Home"))}var g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.a.Component),v=a(21),U=a.n(v);var y="DEL_USER",R="ADD_USER",O="UPD_USER",j="SEARCH_USER",x="GET_USERS",C="GET_USER",N="IS_LOADING",k="IS_SUCCESS",S="IS_ERROR",I="RESET",D="IS_EDITING",L="https://desolate-taiga-56372.herokuapp.com/robots";function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Loading...";return{type:N,payload:e}}function A(){return{type:I}}function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default Error Msg";return{type:S,payload:e}}var B=function(e){return function(t){t(w()),U.a.get("".concat(L,"/").concat(e)).then((function(e){return t((a=e.data,{type:C,payload:a}));var a})).catch((function(e){console.error(e.message),t(T(e.message))})).finally((function(){return setTimeout((function(){t(A())}),1500)}))}},_=function(){return function(e){e(w()),U.a.get(L).then((function(t){var a;e((a=t.data,{type:x,payload:a})),e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default Success Msg";return{type:k,payload:e}}("Success Fetch"))})).catch((function(t){console.error("ERROR at fetchAllUsers::",t.message),e(T(t.message))})).finally((function(){return setTimeout((function(){e(A())}),1500)}))}};var M=function(e){return function(t){t(w()),U.a.post("".concat(L),e).then((function(e){return t(function(e){return{type:R,payload:e}}(e.data))})).catch((function(e){console.error(e.message),t(T(e.message))})).finally((function(){return setTimeout((function(){t(A())}),1500)}))}};var V=function(e){return function(t){t(w()),U.a.delete("".concat(L,"/").concat(e)).then((function(e){return t(function(e){return{type:y,payload:e}}(e.data.id))})).catch((function(e){console.error(e.message),t(T(e.message))})).finally((function(){return setTimeout((function(){t(A())}),1500)}))}};var G=function(e,t){return function(a,n){var r=n().userReducer.users;U.a.put("".concat(L,"/").concat(t),e).then((function(e){console.log(e);var n=e.data,c=n.name,l=n.username,s=n.email,u=r.map((function(e){return e.id===t?{id:t,name:c,username:l,email:s}:e}));a(function(e){return{type:O,payload:e}}(u))})).catch((function(e){console.error(e.message),a(T(e.message))})).finally((function(){return setTimeout((function(){a(A())}),1500)}))}};var P=Object(s.b)((function(e){return{currentUserRx:e.userReducer.currentUser,isLoadingRx:e.userReducer.isLoading,isErrorRx:e.userReducer.isError,errorMsgRx:e.userReducer.msg}}),(function(e){return{fetchUserRx:function(t){return e(B(t))}}}))((function(e){var t=e.fetchUserRx,a=e.currentUserRx,c=e.isErrorRx,l=e.isLoadingRx,s=e.errorMsgRx,u=e.match,i=Number(u.params.id);if(Object(n.useEffect)((function(){t(i)}),[t,i]),c)return r.a.createElement("div",{className:"container"},s);if(l||!a)return r.a.createElement("div",{className:"container"},"Loading...");var o=a.id,m=a.name,d=a.username,h=a.email;return r.a.createElement("div",{className:"container text-center"},r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,"Hi,",d||"Default Username"," ",o||"no id"),r.a.createElement("ul",{style:{listStyle:"none"}},r.a.createElement("li",null,"Name:"," ".concat(m||"default name")),r.a.createElement("li",null,"Email:"," ".concat(h||"default email")))))}));function F(){return r.a.createElement("div",{className:"container text-center"},r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,"Error Page")))}var H=a(43),J=a(3),W=a(4),q=a(44),z=a.n(q);var K=function(e){var t=e.delUser,a=e.editUser,n=e.id;return r.a.createElement("td",null,r.a.createElement("div",{className:"btn-group"},r.a.createElement(u.b,{to:"/read/".concat(n),type:"button",className:"btn btn-sm btn-info"},"Read"),r.a.createElement("button",{onClick:function(e){return a(e,n)},type:"button",className:"btn btn-sm btn-primary"},"Edit"),r.a.createElement("button",{onClick:function(e){return t(e,n)},type:"button",className:"btn btn-sm btn-outline-danger"},"Delete")))},Q=a(19),X=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={name:e.name,username:e.username,email:e.email},a.handleChangeInput=a.handleChangeInput.bind(Object(W.a)(a)),a.handleUpdateBtn=a.handleUpdateBtn.bind(Object(W.a)(a)),a.handleCancelBtn=a.handleCancelBtn.bind(Object(W.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleChangeInput",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(Q.a)({},a,n))}},{key:"handleUpdateBtn",value:function(e){var t=this.props.id,a=this.state,n=a.name,r=a.username,c=a.email;this.props.updateUser(e,{id:t,name:n,username:r,email:c})}},{key:"handleCancelBtn",value:function(e){this.props.editUser(e,null)}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.username,n=e.email;return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.id),r.a.createElement("td",null,r.a.createElement("input",{onChange:this.handleChangeInput,type:"text",value:t,name:"name",placeholder:"Enter Name",className:"form-control"})),r.a.createElement("td",null,r.a.createElement("input",{onChange:this.handleChangeInput,type:"text",value:a,name:"username",placeholder:"Enter username",className:"form-control"})),r.a.createElement("td",null,r.a.createElement("input",{onChange:this.handleChangeInput,type:"email",value:n,name:"email",placeholder:"Email",className:"form-control"})),r.a.createElement("td",{className:"btn-group"},r.a.createElement("button",{type:"button",onClick:this.handleUpdateBtn,className:"btn btn-primary "},"Update"),r.a.createElement("button",{type:"button",onClick:this.handleCancelBtn,className:"btn btn-danger"},"Cancel")))}}]),t}(r.a.Component);var Y=function(e){var t=e.editing,a=e.currentId,n=e.id,c=e.name,l=e.username,s=e.email,u=e.delUser,i=e.editUser,o=e.addUser,m=e.updateUser;return t&&n===a?r.a.createElement(X,{addUser:o,editUser:i,updateUser:m,currentId:a,id:n,name:c,username:l,email:s}):r.a.createElement("tr",null,r.a.createElement("td",null,n),r.a.createElement("td",null,c),r.a.createElement("td",null,l||"-"),r.a.createElement("td",null,s||"-"),r.a.createElement(K,{id:n,editUser:i,delUser:u}))};var Z=Object(s.b)((function(e){return{inputValueRx:e.userReducer.inputValue}}))((function(e){var t=e.inputValueRx,a=e.dispatch;return r.a.createElement("input",{type:"search",name:"search",className:"form-control w-75",value:t,placeholder:"Search...",onChange:function(e){return a((t=e.target.value,{type:j,payload:t}));var t}})})),$=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).state={name:"",username:"",email:""},e.handleChange=e.handleChange.bind(Object(W.a)(e)),e.handleClick=e.handleClick.bind(Object(W.a)(e)),e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(Q.a)({},a,n))}},{key:"handleClick",value:function(e){e.preventDefault();var t=this.props,a=t.nextId,n=t.addUser,r=this.state;n(e,{name:r.name,username:r.username,email:r.email,nextId:a}),this.setState({name:"",username:"",email:""})}},{key:"render",value:function(){var e=this.props.nextId,t=this.state,a=t.name,n=t.username,c=t.email;return r.a.createElement("tr",null,r.a.createElement("td",null,e),r.a.createElement("td",null,r.a.createElement("input",{onChange:this.handleChange,type:"text",value:a,name:"name",placeholder:"Enter Name",className:"form-control"})),r.a.createElement("td",null,r.a.createElement("textarea",{onChange:this.handleChange,value:n,name:"username",placeholder:"Enter username",className:"form-control",rows:"1"})),r.a.createElement("td",null,r.a.createElement("input",{onChange:this.handleChange,type:"email",value:c,name:"email",placeholder:"enter email",className:"form-control"})),r.a.createElement("td",null,r.a.createElement("button",{type:"button",onClick:this.handleClick,className:"btn btn-success btn-block"},"Add User")))}}]),t}(r.a.Component);function ee(e){var t=e.isLoading,a=e.isError,n=e.msg;return r.a.createElement("h4",{className:"alert ".concat((t||a)&&"alert-danger"," alert-success  text-center mb-0")},(a||t||n)&&n)}var te=function(e){var t=e.users,a=e.otherProps,n=a.isLoadingRx,c=a.isErrorRx,l=a.msgRx,s=e.updateUser,u=e.delUser,i=e.addUser,o=e.editUser,m=e.editing,d=e.currentId,h=t.length?+t[t.length-1].id+1:1,p=n||c||l;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card mx-auto"},r.a.createElement("div",{className:"card-header text-white bg-info clearfix"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"Users Table")),r.a.createElement("div",{className:"col"},r.a.createElement(Z,null)))),p&&r.a.createElement(ee,{isLoading:n,isError:c,msg:l}),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,t.length>0?t.map((function(e){return r.a.createElement(Y,{key:z.a.v4(),id:e.id,name:e.name,username:e.username,email:e.email,updateUser:s,delUser:u,editUser:o,addUser:i,editing:m,currentId:d})})):r.a.createElement("tr",null,r.a.createElement("td",null," "),r.a.createElement("td",null," "),r.a.createElement("td",{colSpan:5},"Sorry, No User Available")),r.a.createElement($,{nextId:h,addUser:i})))))))},ae=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).state={status:{isEditing:!1,currentId:null},alerts:{isEmpty:!1,alertMsg:""}},e.onDelUser=e.onDelUser.bind(Object(W.a)(e)),e.onAddUser=e.onAddUser.bind(Object(W.a)(e)),e.onEditUser=e.onEditUser.bind(Object(W.a)(e)),e.onUpdateUser=e.onUpdateUser.bind(Object(W.a)(e)),e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchUsersRx()}},{key:"onDelUser",value:function(e,t){this.state.status.isEditing||this.props.fetchDeleteUserRx(t)}},{key:"onEditUser",value:function(e,t){this.setState((function(e){return{status:{isEditing:!e.status.isEditing,currentId:t}}}))}},{key:"onUpdateUser",value:function(e,t){var a=t.id,n=t.name,r=t.username,c=t.email;n&&r&&c?(this.props.fetchUpdateUserRx({name:n,username:r,email:c},a),this.setState({status:{isEditing:!1,currentId:null}})):this.setState((function(e){return{alerts:Object(J.a)({},e.alerts,{isEmpty:!0,alertMsg:"Enter Text"})}}))}},{key:"onAddUser",value:function(e,t){var a=t.name,n=t.username,r=t.email;t.nextId;a.trim()&&n.trim()&&r.trim()?this.props.fetchAddUserRx({name:a,username:n,email:r}):this.setState((function(e){return{alerts:Object(J.a)({},e,{isEmpty:!0,alertMsg:"Enter Text"})}}))}},{key:"render",value:function(){var e=this.state.status,t=e.isEditing,a=e.currentId,n=this.props,c=n.inputValueRx,l=n.usersRx,s=Object(H.a)(n,["inputValueRx","usersRx"]),u=l.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase().trim())}));return r.a.createElement("main",null,r.a.createElement(te,{otherProps:s,users:u,delUser:this.onDelUser,addUser:this.onAddUser,editUser:this.onEditUser,updateUser:this.onUpdateUser,editing:t,currentId:a}),r.a.createElement("div",{style:{height:"300px"}}))}}]),t}(r.a.Component),ne=Object(s.b)((function(e){return{inputValueRx:e.userReducer.inputValue,usersRx:e.userReducer.users,isLoadingRx:e.userReducer.isLoading,isErrorRx:e.userReducer.isError,msgRx:e.userReducer.msg}}),(function(e){return{fetchAddUserRx:function(t){return e(M(t))},fetchDeleteUserRx:function(t){return e(V(t))},fetchUpdateUserRx:function(t,a){return e(G(t,a))},fetchUsersRx:function(){return e(_())}}}))(ae);function re(){return r.a.createElement(ne,null)}a(77);var ce=a(20),le=(a(78),a(45)),se=a(46),ue={inputValue:"",users:[],currentUser:null,isEditing:!1,isLoading:!1,isSuccess:!1,isError:!1,msg:""},ie=[le.a],oe=Object(ce.c)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.type,t.payload;switch(t.type){case N:return Object(J.a)({},e,{isLoading:!0,msg:t.payload});case k:return Object(J.a)({},e,{isLoading:!1,isSuccess:!0,msg:t.payload});case S:return Object(J.a)({},e,{isLoading:!1,isError:!0,msg:t.payload});case I:return Object(J.a)({},e,{msg:"",isError:!1,isLoading:!1,isSuccess:!1});case C:return Object(J.a)({},e,{users:ue.users,currentUser:t.payload});case x:return Object(J.a)({},e,{currentUser:ue.currentUser,users:t.payload});case R:return Object(J.a)({},e,{users:[].concat(Object(se.a)(e.users),[t.payload])});case y:return Object(J.a)({},e,{users:e.users.filter((function(e){return e.id!==t.payload}))});case D:return Object(J.a)({},e,{isEditing:t.payload});case O:return Object(J.a)({},e,{users:t.payload,isEditing:!1});case j:return Object(J.a)({},e,{inputValue:t.payload});default:return e}}}),me=Object(ce.d)(oe,ce.a.apply(void 0,ie));l.a.render(r.a.createElement(s.a,{store:me},r.a.createElement(u.a,null,r.a.createElement((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(i.a,{exact:!0,path:"/read/:id",component:b}),r.a.createElement(g,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:re}),r.a.createElement(i.a,{exact:!0,path:"/read/:id",component:P}),r.a.createElement(i.a,{component:F}))))}),null))),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.3a8d0971.chunk.js.map