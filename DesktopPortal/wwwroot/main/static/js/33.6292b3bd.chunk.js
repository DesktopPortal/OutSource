webpackJsonp([33],{2061:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e){return console.log("\u5e94\u7528apptableMapStateToProps:"+JSON.stringify(e.app)),{activeTreeNode:e.app.activeTreeNode,operInfo:e.app.operInfo,appList:e.app.appList,showLoading:e.emp.showLoading}}function o(e){return{dispatch:e}}Object.defineProperty(t,"__esModule",{value:!0});var p=a(92),c=a(1281),s=a(0),u=a.n(s),f=a(46),d=a(2062),h=a(120),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),y=f.s.Header,b=(f.s.Sider,f.s.Content),v=function(e){function t(){var e,a,l,r;n(this,t);for(var o=arguments.length,p=Array(o),s=0;s<o;s++)p[s]=arguments[s];return a=l=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(p))),l.state={checkList:[]},l.appTableColumns=[{title:"\u5e94\u7528\u7f16\u7801",dataIndex:"clientId",key:"clientId"},{title:"\u5e94\u7528\u540d\u79f0",dataIndex:"displayName",key:"displayName"},{title:"\u5e94\u7528\u7c7b\u578b",dataIndex:"applicationType",key:"applicationType",render:function(e,t){var a="",n=h.a.find(function(e){return e.key==t.applicationType});return a=void 0!=n?n.value:t.applicationType,u.a.createElement("span",null,a)}},{title:"\u9000\u51fa\u5730\u5740",dataIndex:"postLogoutRedirectUris",key:"postLogoutRedirectUris"},{title:"\u8df3\u8f6c\u5730\u5740",dataIndex:"redirectUris",key:"redirectUris"},{title:"\u7f16\u8f91",dataIndex:"edit",key:"edit",render:function(e,t){return u.a.createElement("div",null,u.a.createElement(f.H,{title:"\u5e94\u7528\u7f16\u8f91"},u.a.createElement(f.g,{type:"primary",shape:"circle",size:"small",icon:"edit",onClick:function(e){return l.handleEditClick(t)}})),u.a.createElement(f.H,{title:"\u5220\u9664\u5e94\u7528"},u.a.createElement(f.w,{title:"\u786e\u8ba4\u8981\u5220\u9664\u9009\u4e2d\u5e94\u7528?",onConfirm:function(e){return l.confirmDelete(e,t.id)},onCancel:l.cancelDelete,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"},"\xa0",u.a.createElement(f.g,{type:"primary",size:"small",shape:"circle",icon:"delete"}))))}}],l.handleAddClick=function(e){l.props.dispatch(Object(c.a)())},l.handleRefreshClick=function(e){l.props.dispatch(Object(c.R)(!0)),l.props.dispatch(Object(c.f)())},l.handleEditClick=function(e){console.log("handleEditClick"+JSON.stringify(e)),l.props.dispatch(Object(c.e)(e))},l.confirmDelete=function(e,t){l.props.dispatch(Object(c.c)(t))},l.cancelDelete=function(e){console.log("\u4e0d\u5220\u9664",e)},l.handleCheckChange=function(e,t){var a=t.clientId,n=e.target.checked,i=l.state.checkList.slice(),r=!1;for(var o in i)if(i[o].id==a){i[o].status=n,r=!0;break}r||i.push({id:a,status:n}),l.setState({checkList:i})},r=a,i(l,r)}return l(t,e),m(t,[{key:"componentWillMount",value:function(){console.log("\u52a0\u8f7dapp\u5217\u8868"),this.props.dispatch(Object(c.R)(!0)),this.props.dispatch(Object(c.f)())}},{key:"render",value:function(){return u.a.createElement("div",{className:"relative"},u.a.createElement(f.s,null,u.a.createElement(y,null,"\u5e94\u7528\u7ba1\u7406",u.a.createElement(f.H,{title:"\u65b0\u589e\u5e94\u7528"},"\xa0",u.a.createElement(f.g,{type:"primary",shape:"circle",icon:"plus",onClick:this.handleAddClick})),u.a.createElement(f.H,{title:"\u5237\u65b0"},"\xa0",u.a.createElement(f.g,{type:"primary",shape:"circle",icon:"sync",onClick:this.handleRefreshClick}))),u.a.createElement(b,{className:"content"},u.a.createElement(f.B,{spinning:this.props.showLoading},u.a.createElement(f.D,{columns:this.appTableColumns,dataSource:this.props.appList,style:{marginTop:"0.5rem"}}),u.a.createElement(d.a,null)))))}}]),t}(s.Component);t.default=Object(p.b)(r,o)(v)},2062:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e){return{activeApp:e.app.activeApp,operInfo:e.app.operInfo,appList:e.app.appList}}function o(e){return{dispatch:e}}var p=a(92),c=a(1281),s=a(0),u=a.n(s),f=a(46),d=a(120),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=f.o.Item,y=f.A.Option,b=function(e){function t(){var e,a,l,r;n(this,t);for(var o=arguments.length,p=Array(o),s=0;s<o;s++)p[s]=arguments[s];return a=l=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(p))),l.state={visible:!1,appInfo:{},dialogTitle:""},l.handleOk=function(e){e.preventDefault();var t=l.props.operInfo.operType;l.props.form.validateFields(function(e,a){if(!e){console.log("Received values of form: ",a),"privApp"===l.state.appInfo.applicationType?a.type="confidential":(a.clientSecret="",a.type="public");var n="POST";if("add"!=t)n="PUT",a=Object.assign({},l.props.activeApp,a);else if(l.props.appList&&l.props.appList.find(function(e){return e.clientId===a.clientId}))return void f.L.error({description:"\u5e94\u7528\u7f16\u53f7\u5df2\u7ecf\u5b58\u5728!"});l.props.dispatch(Object(c.b)({method:n,data:a}))}})},l.handlePrivilegeTypeChange=function(e){console.log("selected",e);var t=l.state.appInfo||{};t.applicationType=e,l.setState({appInfo:t})},l.handleCancel=function(e){l.props.dispatch(Object(c.d)())},r=a,i(l,r)}return l(t,e),h(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.operInfo,a=t.operType,n=(t.result,e.activeApp);if(console.log("operType:",a),this.state.appInfo.clientId!==n.clientId||void 0===n.clientId)if("edit"===a)this.setState({appInfo:n,visible:!0,dialogTitle:"\u5e94\u7528\u7f16\u8f91"});else if("add"===a){var i={};this.state.appInfo.applicationType&&(i.applicationType=this.state.appInfo.applicationType),this.setState({appInfo:i,visible:!0,dialogTitle:"\u5e94\u7528\u65b0\u589e"})}["edit","add"].includes(a)||(this.props.form.resetFields(),this.setState({visible:!1,appInfo:{}}))}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t={labelCol:{span:6},wrapperCol:{span:14}};return u.a.createElement("div",null,u.a.createElement(f.u,{width:600,title:this.state.dialogTitle,maskClosable:!1,visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},u.a.createElement(f.z,null,u.a.createElement(f.k,{span:12},u.a.createElement(m,Object.assign({},t,{label:u.a.createElement("span",null,"\u5e94\u7528\u7f16\u53f7"),hasFeedback:!0}),e("clientId",{initialValue:this.state.appInfo.clientId,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e94\u7528\u7f16\u53f7!"}]})(u.a.createElement(f.q,{style:{float:"left"}})))),u.a.createElement(f.k,{span:12}," ",u.a.createElement(m,Object.assign({},t,{label:u.a.createElement("span",null,"\u5e94\u7528\u540d\u79f0"),hasFeedback:!0}),e("displayName",{initialValue:this.state.appInfo.displayName,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e94\u7528\u540d\u79f0!"}]})(u.a.createElement(f.q,{style:{float:"left"}}))))),u.a.createElement(f.z,null,u.a.createElement(f.k,{span:12},u.a.createElement(m,Object.assign({},t,{label:u.a.createElement("span",null,"\u5e94\u7528\u7c7b\u578b"),hasFeedback:!0}),e("applicationType",{initialValue:this.state.appInfo.applicationType})(u.a.createElement(f.A,{style:{width:120},onChange:this.handlePrivilegeTypeChange},d.a.map(function(e){return u.a.createElement(y,{key:e.key,value:e.key},e.value)}))))),u.a.createElement(f.k,{span:12},"privApp"===this.state.appInfo.applicationType?u.a.createElement(m,Object.assign({},t,{label:u.a.createElement("span",null,"\u5e94\u7528\u5bc6\u94a5"),hasFeedback:!0}),e("clientSecret",{initialValue:this.state.appInfo.clientSecret,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e94\u7528\u5bc6\u94a5!"}]})(u.a.createElement(f.q,null))):null)),u.a.createElement(f.z,null,u.a.createElement(f.k,{span:20,pull:2},u.a.createElement(m,Object.assign({},t,{label:u.a.createElement("span",null,"\u8df3\u8f6c\u5730\u5740"),hasFeedback:!0}),e("redirectUris",{initialValue:this.state.appInfo.redirectUris,rules:[{pattern:"(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]",message:"\u4e0d\u662f\u6709\u6548\u7684Url\u5730\u5740!"}]})(u.a.createElement(f.q,{style:{float:"left"}}))))),u.a.createElement(f.z,null,u.a.createElement(f.k,{span:20,pull:2},u.a.createElement(m,Object.assign({},t,{label:u.a.createElement("span",null,"\u9000\u51fa\u5730\u5740"),hasFeedback:!0}),e("postLogoutRedirectUris",{initialValue:this.state.appInfo.postLogoutRedirectUris,rules:[{pattern:"(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]",message:"\u4e0d\u662f\u6709\u6548\u7684Url\u5730\u5740!"}]})(u.a.createElement(f.q,{style:{float:"left"}})))))))}}]),t}(s.Component),v=f.o.create()(b);t.a=Object(p.b)(r,o)(v)}});
//# sourceMappingURL=33.6292b3bd.chunk.js.map