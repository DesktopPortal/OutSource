webpackJsonp([27],{1332:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"f",function(){return r}),n.d(t,"g",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"e",function(){return l}),n.d(t,"K",function(){return c}),n.d(t,"L",function(){return s}),n.d(t,"O",function(){return u}),n.d(t,"N",function(){return d}),n.d(t,"M",function(){return p}),n.d(t,"J",function(){return h}),n.d(t,"k",function(){return f}),n.d(t,"l",function(){return m}),n.d(t,"m",function(){return y}),n.d(t,"n",function(){return E}),n.d(t,"G",function(){return v}),n.d(t,"E",function(){return b}),n.d(t,"H",function(){return g}),n.d(t,"F",function(){return C}),n.d(t,"D",function(){return O}),n.d(t,"C",function(){return _}),n.d(t,"I",function(){return S}),n.d(t,"x",function(){return T}),n.d(t,"u",function(){return k}),n.d(t,"B",function(){return I}),n.d(t,"c",function(){return j}),n.d(t,"v",function(){return A}),n.d(t,"w",function(){return L}),n.d(t,"b",function(){return D}),n.d(t,"o",function(){return R}),n.d(t,"p",function(){return M}),n.d(t,"A",function(){return w}),n.d(t,"z",function(){return P}),n.d(t,"s",function(){return N}),n.d(t,"t",function(){return x}),n.d(t,"q",function(){return G}),n.d(t,"r",function(){return U}),n.d(t,"y",function(){return K}),n.d(t,"h",function(){return B}),n.d(t,"j",function(){return z}),n.d(t,"i",function(){return H});var a="SearchToolIndex",r="DIC_GET_PARLIST",o="DIC_GET_PARLIST_COMPLETE",i="DIC_GET_AREA",l="DIC_GET_AREA_COMPLETE",c="SEARCH_XYH_BUILDING",s="SEARCH_XYH_BUILDING_COMPLETE",u="XYH_GET_BUILDING_DETAIL",d="XYH_GET_BUILDING_COMPLETE",p="SET_SEARCH_LOADING",h="SEARCH_BOX_EXPAND",f="GET_BUILDING_SHOPS",m="GET_BUILDING_SHOPS_COMPLETE",y="GET_BUILDING_SHOPS_DETAIL",E="GET_BUILDING_SHOPS_DETAIL_COMPLETE",v="RESULT_PREV",b="RESULT_NEXT",g="RESULT_PREV_COMPLETE",C="RESULT_NEXT_COMPLETE",O="RESULT_CLOSE",_="RESULT_BUILDING_RECOMMEND",S="RESULT_VIEW_BACK",T="GET_RECOMMEND_PERMISSION",k="GET_PERMISSION_COMPLETE",I="OPEN_RECOMMEND_DIALOG",j="CLOSE_RECOMMEND_DIALOG",A="GET_RECOMMEND_LIST",L="GET_RECOMMEND_LIST_COMPLETE",D="CANCEL_RECOMMEND",R="GET_CUSTOMER_DEAL_INFO",M="GET_CUSTOMER_DEAL_INFO_COMPLETE",w="OPEN_MSG_LIST",P="OPEN_MSG_DETAIL",N="GET_MSG_LIST",x="GET_MSG_LIST_COMPLETE",G="GET_MSG_DETAIL",U="GET_MSG_DETAIL_COMPLETE",K="NAV_CHANGE",B="GET_ACTIVE_LIST",z="GET_ACTIVE_LIST_START",H="GET_ACTIVE_LIST_END"},1335:function(e,t,n){"use strict";n.d(t,"i",function(){return o}),n.d(t,"g",function(){return i}),n.d(t,"q",function(){return l}),n.d(t,"o",function(){return c}),n.d(t,"l",function(){return s}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return d}),n.d(t,"h",function(){return p}),n.d(t,"k",function(){return h}),n.d(t,"n",function(){return f}),n.d(t,"b",function(){return m}),n.d(t,"p",function(){return y}),n.d(t,"a",function(){return E}),n.d(t,"m",function(){return v}),n.d(t,"j",function(){return b}),n.d(t,"f",function(){return g}),n.d(t,"e",function(){return C});var a=n(69),r=n(1332),o=Object(a.a)(r.f),i=Object(a.a)(r.d),l=Object(a.a)(r.M),c=Object(a.a)(r.K),s=Object(a.a)(r.O),u=(Object(a.a)(r.G),Object(a.a)(r.E),Object(a.a)(r.D)),d=Object(a.a)(r.J),p=Object(a.a)(r.k),h=Object(a.a)(r.m),f=Object(a.a)(r.C),m=(Object(a.a)(r.I),Object(a.a)(r.x),Object(a.a)(r.B),Object(a.a)(r.c)),y=Object(a.a)(r.v),E=(Object(a.a)(r.b),Object(a.a)(r.o),Object(a.a)(r.y)),v=(Object(a.a)(r.A),Object(a.a)(r.z)),b=(Object(a.a)(r.s),Object(a.a)(r.q)),g=(Object(a.a)(r.h),Object(a.a)(r.j)),C=Object(a.a)(r.i)},1846:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{basicData:e.basicData,searchInfo:e.search}}function l(e){return{dispatch:e}}function c(e){var t="0";switch(e){case"menu_index":t="1";break;case"menu_have_deal":t="2";break;case"menu_invalid":t="3";break;case"menu_public_pool":t="4";break;default:t="1"}return t}function s(e){var t=Object.assign({},e);return t&&(t.importance=t.customerLevel,t.demandLevel=t.requirementLevel,t.source=t.customerSource,t.provinceId="0"===t.firstAreaKey?null:t.firstAreaKey,t.cityId="0"===t.secondAreaKey?null:t.secondAreaKey,t.areaId="0"===t.thirdAreaKey?null:t.thirdAreaKey,t.businessStage=t.businessChance,delete t.customerLevel,delete t.requirementLevel,delete t.customerSource,delete t.firstAreaKey,delete t.secondAreaKey,delete t.thirdAreaKey,delete t.businessChance),t}var u=n(92),d=n(1302),p=n(0),h=n.n(p),f=n(46),m=n(1721),y=(n.n(m),n(1335),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),E=(f.j.Group,f.g.Group,f.A.Option),v=function(e){function t(){var e,n,o,i;a(this,t);for(var l=arguments.length,u=Array(l),p=0;p<l;p++)u[p]=arguments[p];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={searchType:"1"},o.handleSearch=function(){var e=(o.props.searchInfo||{}).activeMenu,t=Object.assign({},o.props.condition);t.keyWord=o.props.searchInfo.searchKeyWord,"0"!==o.props.searchInfo.activeOrg.id&&(t.departmentId=o.props.searchInfo.activeOrg.id),t.searchSourceType=c(e),t.searchType=o.state.searchType;var n=s(t);console.log("\u6700\u7ec8\u641c\u7d22\u6761\u4ef6:",n),o.props.dispatch(Object(d.y)(n)),o.props.dispatch(Object(d.A)(!0)),o.props.dispatch(Object(d.z)(n))},o.selectBefore=function(){return"menu_public_pool"!==o.props.searchInfo.activeMenu?h.a.createElement(f.A,{defaultValue:"1",style:{width:80},onChange:o.handleSearchTypeChange},h.a.createElement(E,{value:"0",style:{color:"#000"}},"\u5ba2\u6237"),h.a.createElement(E,{value:"1",style:{color:"#000"}},"\u4e1a\u52a1\u5458")):null},o.handleKeyWordChange=function(e){o.props.dispatch(Object(d.d)(e.target.value))},o.handleSearchTypeChange=function(e){console.log("searchtype change:",e),o.setState({searchType:e})},i=n,r(o,i)}return o(t,e),y(t,[{key:"componentWillMount",value:function(){this.props.willMountCallback&&this.props.willMountCallback(this.handleSearch)}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props.searchInfo.searchKeyWord;return h.a.createElement("div",null,h.a.createElement("div",{className:"searchBox"},h.a.createElement("p",null,h.a.createElement(f.q,{style:{width:"450px"},addonBefore:this.selectBefore(),placeholder:"1"===this.state.searchType?"\u8bf7\u8f93\u5165\u4e1a\u52a1\u5458\u59d3\u540d\u6216\u7535\u8bdd\u53f7\u7801":"\u8bf7\u8f93\u5165\u5ba2\u6237\u59d3\u540d\u6216\u7535\u8bdd\u53f7\u7801",value:e,onChange:this.handleKeyWordChange}),h.a.createElement(f.g,{type:"primary",className:"searchButton",onClick:this.handleSearch},"\u641c\u7d22"))))}}]),t}(p.Component);t.a=Object(u.b)(i,l)(v)},2158:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{searchResult:e.search.searchResult,showLoading:e.search.showLoading,searchCondition:e.search.searchCondition}}function l(e){return{dispatch:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(92),s=n(1302),u=n(0),d=n.n(u),p=n(46),h=n(2159),f=n(2161),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),y=function(e){function t(){var e,n,o,i;a(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.state={},i=n,r(o,i)}return o(t,e),m(t,[{key:"componentWillMount",value:function(){this.props.dispatch(Object(s.A)(!0))}},{key:"render",value:function(){return d.a.createElement("div",{id:"customerManager"},d.a.createElement(p.B,{spinning:this.props.showLoading},d.a.createElement(h.a,null),d.a.createElement(f.a,null)))}}]),t}(u.Component);t.default=Object(c.b)(i,l)(y)},2159:function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{searchResult:e.search.searchResult,basicData:e.basicData,activeMenu:e.search.activeMenu,user:(e.oidc.user||{}).profile||{}}}function c(e){return{dispatch:e}}var s=n(92),u=n(1302),d=n(0),p=n.n(d),h=n(46),f=n(1721),m=(n.n(f),n(27)),y=n.n(m),E=n(1846),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),b=h.A.Option,g=[{value:"0",key:"\u5df2\u62a5\u5907"},{value:"1",key:"\u5df2\u5e26\u770b"}],C=null,O=function(e){function t(){var e,n,i,l;r(this,t);for(var c=arguments.length,s=Array(c),u=0;u<c;u++)s[u]=arguments[u];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.state={expandSearchCondition:!0,filterTags:[],condition:{keyWord:"",tradePlannings:[],businessTypes:[],isCooperate:!1,customerLevel:null,requirementLevel:null,businessChance:[],customerSource:[],invalidTypes:[],followUpStart:null,followUpEnd:null,createDateStart:null,createDateEnd:null,acreageStart:null,acreageEnd:null,priceStart:null,priceEnd:null,firstAreaKey:"0",secondAreaKey:"0",thirdAreaKey:"0",orderRule:!1,isOnlyRepeat:!1,pageIndex:0,pageSize:10},firstAreaOption:[],secondAreaOption:[],thirdAreaOption:[],selectedMenuKey:"menu_index",searchHandleMethod:null},i.handleSearchBoxToggle=function(e){var t=!i.state.expandSearchCondition;i.setState({expandSearchCondition:t})},i.handleAreaChange=function(e,t){console.log("value:"+e+",level:"+t);var n=Object.assign({},i.state.condition,{pageIndex:0});if("1"===t){var a=i.state.firstAreaOption.find(function(t){return t.value===e});console.log(i.state.firstAreaOption,123),n=Object.assign({},n,{firstAreaKey:e,secondAreaKey:"0",thirdAreaKey:"0"}),a?i.setState({condition:n,secondAreaOption:a.children},function(){i.handleSearch()}):i.setState({condition:n,secondAreaOption:[]},function(){i.handleSearch()})}else if("2"===t){var r=i.state.secondAreaOption.find(function(t){return t.value===e});n=Object.assign({},n,{secondAreaKey:e,thirdAreaKey:"0"}),r?i.setState({condition:n,thirdAreaOption:r.children},function(){i.handleSearch()}):i.setState({condition:n,thirdAreaOption:[]},function(){i.handleSearch()})}else"3"===t&&(n=Object.assign({},n,{thirdAreaKey:e}),i.setState({condition:n},function(){i.handleSearch()}))},i.searchBoxWillMount=function(e){e&&i.setState({searchHandleMethod:e},function(){i.handleSearch()})},i.handleSearch=function(){var e=i.state.searchHandleMethod;e&&e()},i.handleCheckChange=function(e,t){console.log("checked:",e,t);for(var n=i.props.basicData.tradePlannings,r=i.props.basicData.businessTypes,o=i.props.basicData.customerSource,l=i.props.basicData.invalidResions,c=Object.assign({},i.state.condition),s=[].concat(a(i.state.filterTags)),u=s.length-1;u>-1;u--)s[u].type===t&&s.splice(u,1);c[t]=e,e.map(function(e){if("tradePlannings"===t){var a=n.find(function(t){return t.value===e});a&&s.push({value:a.value,label:a.key,type:t})}else if("businessTypes"===t){var i=r.find(function(t){return t.value===e});i&&s.push({value:i.value,label:i.key,type:t})}else if("businessChance"===t){var c=g.find(function(t){return t.value===e});c&&s.push({value:c.value,label:c.key,type:t})}else if("customerSource"===t){var u=o.find(function(t){return t.value===e});u&&s.push({value:u.value,label:u.key,type:t})}else if("invalidTypes"===t){var d=l.find(function(t){return t.value===e});d&&s.push({value:d.value,label:d.key,type:t})}}),i.setState({filterTags:s,condition:c},function(){i.handleSearch()})},i.handleCooperateChange=function(e){console.log("\u6218\u7565\u5408\u4f5c\u65b9\u5f0f\u66f4\u6539",e.target.value),i.setState({condition:Object.assign({},i.state.condition,{isCooperate:e.target.value})})},i.handleCustomerLevelChange=function(e,t){console.log("\u5ba2\u6237\u7b49\u7ea7:",e);var n=Object.assign({},i.state.condition);"customerLevel"===t?(n.customerLevel=""===e.value?null:e.value,"1"!==e.value&&(n.requirementLevel=""),i.setState({condition:n},function(){i.handleSearch()})):(n.requirementLevel=e.value,i.setState({condition:n},function(){i.handleSearch()}))},i.handleTagClose=function(e,t){var n=[].concat(a(i.state.filterTags)),r=[].concat(a(i.state.condition.tradePlannings)),o=[].concat(a(i.state.condition.businessTypes)),l=[].concat(a(i.state.condition.customerSource)),c=[].concat(a(i.state.condition.businessChance)),s=[].concat(a(i.state.condition.invalidTypes));if(n.splice(t,1),"tradePlannings"===e.type)for(var u=r.length-1;u>-1;u--)r[u]===e.value&&r.splice(u,1);else if("businessTypes"===e.type)for(var d=o.length-1;d>-1;d--)o[d]===e.value&&o.splice(d,1);else if("customerSource"===e.type)for(var p=l.length-1;p>-1;p--)l[p]===e.value&&l.splice(p,1);else if("businessChance"===e.type)for(var h=c.length-1;h>-1;h--)c[h]===e.value&&c.splice(h,1);else if("invalidTypes"===e.type)for(var f=s.length-1;f>-1;f--)s[f]===e.value&&s.splice(f,1);i.setState({filterTags:n,condition:Object.assign({},i.state.condition,{tradePlannings:r,businessTypes:o,customerSource:l,businessChance:c,invalidTypes:s})},function(){i.handleSearch()})},i.handleFollowChange=function(e){var t="",n="";e.key.includes("-")&&(t=e.key.split("-")[0],n=e.key.split("-")[1]);var a=Object.assign({},i.state.condition);a.followUpStart=t,a.followUpEnd=n,i.setState({condition:a},function(){i.handleSearch()})},i.handleNumberChange=function(e,t){var n=Object.assign({},i.state.condition);n[t]=e,i.setState({condition:n},function(){C&&clearTimeout(C),C=setTimeout(function(){return i.handleSearch()},1e3)})},i.handleCreateTime=function(e,t){var n=Object.assign({},i.state.condition);n[t]=""===e?null:e,i.setState({condition:n},function(){i.handleSearch()})},i.handleOrderChange=function(e){console.log("\u6392\u5e8f:",e.target.value);var t=Object.assign({},i.state.condition);t.orderRule=e.target.value,i.setState({condition:t},function(){i.handleSearch()})},i.handleViewRepeatChange=function(e){console.log("\u67e5\u770b\u91cd\u5ba2\u72b6\u6001\u53d8\u66f4:",e.target.checked);var t=Object.assign({},i.state.condition);t.pageIndex=0,t.isOnlyRepeat=e.target.checked,i.setState({condition:t},function(){i.handleSearch()})},l=n,o(i,l)}return i(t,e),v(t,[{key:"componentWillMount",value:function(){this.props.dispatch(Object(u.p)(["CUSTOMER_LEVEL","REQUIREMENT_LEVEL","CUSTOMER_SOURCE","INVALID_REASON","RATE_PROGRESS","REQUIREMENT_TYPE"])),this.props.dispatch(Object(u.j)())}},{key:"componentDidMount",value:function(){console.log(this.props.user,"\u7528\u6237\u4fe1\u606f")}},{key:"componentWillReceiveProps",value:function(e){var t=this;if(e.activeMenu){var n=Object.assign({},this.state.condition);e.activeMenu!==this.state.selectedMenuKey&&(n={keyWord:"",tradePlannings:[],businessTypes:[],isCooperate:!1,customerLevel:null,requirementLevel:null,businessChance:[],customerSource:[],invalidTypes:[],followUpStart:null,followUpEnd:null,createDateStart:null,createDateEnd:null,acreageStart:null,acreageEnd:null,priceStart:null,priceEnd:null,firstAreaKey:"0",secondAreaKey:"0",thirdAreaKey:"0",pageIndex:0,pageSize:10},this.setState({filterTags:[]},function(){t.handleSearch()})),this.setState({selectedMenuKey:e.activeMenu,condition:n})}var a=e.basicData.areaList.slice();this.props.user&&""!==this.props.user.City&&(a=a.filter(function(e){return e.value===t.props.user.City})),this.setState({firstAreaOption:a})}},{key:"disabledDate",value:function(e){return e&&e.valueOf()>Date.now()}},{key:"render",value:function(){var e=this,t=this.state.expandSearchCondition,n=(this.props.basicData.tradePlannings,this.props.basicData.businessTypes,this.props.basicData.customerLevels),a=this.props.basicData.requirementLevels,r=this.props.basicData.customerSource,o=this.props.basicData.invalidResions,i=(this.props.basicData.areaList,null===this.state.condition.createDateStart?null:y()(this.state.condition.createDateStart)),l=null===this.state.condition.createDateEnd?null:y()(this.state.condition.createDateEnd),c=null===this.state.condition.followUpStart?null:y()(this.state.condition.followUpStart),s=null===this.state.condition.followUpEnd?null:y()(this.state.condition.followUpEnd),u=this.props.activeMenu,d=this.props.searchResult.validityCustomerCount||0;return p.a.createElement("div",null,p.a.createElement(E.a,{condition:this.state.condition,willMountCallback:this.searchBoxWillMount}),p.a.createElement("div",{className:"searchCondition"},p.a.createElement(h.z,null,p.a.createElement(h.k,{span:12},p.a.createElement("span",null,"\u6240\u6709\u5ba2\u6237>"),p.a.createElement("span",null," ",this.state.filterTags.map(function(t,n){return p.a.createElement(h.F,{closable:!0,onClose:function(a){return e.handleTagClose(t,n)},key:t.label+n},t.label)}))),p.a.createElement(h.k,{span:4},p.a.createElement(h.g,{onClick:this.handleSearchBoxToggle},t?"\u6536\u8d77\u7b5b\u9009":"\u5c55\u5f00\u7b5b\u9009",p.a.createElement(h.p,{type:t?"up-square-o":"down-square-o"})))),p.a.createElement("div",{style:{display:t?"block":"none"}},p.a.createElement(h.z,{className:"normalInfo"},p.a.createElement(h.k,{span:24},p.a.createElement("label",null,"\u5ba2\u6237\u7b49\u7ea7\uff1a"),p.a.createElement(h.g,{key:"-1",size:"small",type:"primary",className:null===this.state.condition.customerLevel?"levelBtnActive":"levelBtnDefault",onClick:function(t){return e.handleCustomerLevelChange({value:""},"customerLevel")}},"\u4e0d\u9650"),n.map(function(t){return p.a.createElement(h.g,{key:t.key,size:"small",type:"primary",className:e.state.condition.customerLevel===t.value?"levelBtnActive":"levelBtnDefault",onClick:function(n){return e.handleCustomerLevelChange(t,"customerLevel")}},t.key)}),"1"===this.state.condition.customerLevel?p.a.createElement("label",null,"\u9700\u6c42\u7b49\u7ea7\uff1a"):null,"1"===this.state.condition.customerLevel?a.map(function(t,n){return p.a.createElement(h.g,{key:t.key+n,size:"small",type:"primary",className:e.state.condition.requirementLevel===t.value?"levelBtnActive":"levelBtnDefault",onClick:function(n){return e.handleCustomerLevelChange(t,"requirementLevel")}},t.key)}):null)),"menu_have_deal"!==u&&"menu_invalid"!==u?p.a.createElement(h.z,{className:"normalInfo"},p.a.createElement(h.k,{span:24},p.a.createElement("label",null,"\u5546\u673a\u9636\u6bb5\uff1a"),p.a.createElement(h.j.Group,{onChange:function(t){return e.handleCheckChange(t,"businessChance")},value:this.state.condition.businessChance},g.map(function(e){return p.a.createElement(h.j,{key:e.key,value:e.value},e.key)})))):null,"menu_invalid"===u?p.a.createElement(h.z,{className:"normalInfo"},p.a.createElement(h.k,{span:24},p.a.createElement("label",null,"\u65e0\u6548\u7c7b\u578b\uff1a"),p.a.createElement(h.j.Group,{onChange:function(t){return e.handleCheckChange(t,"invalidTypes")},value:this.state.condition.invalidTypes},o.map(function(e){return p.a.createElement(h.j,{key:e.key,value:e.value},e.key)})))):null,p.a.createElement(h.z,{className:"normalInfo"},p.a.createElement(h.k,{span:24},p.a.createElement("label",null,"\u5ba2\u6237\u6765\u6e90\uff1a"),p.a.createElement(h.j.Group,{onChange:function(t){return e.handleCheckChange(t,"customerSource")},value:this.state.condition.customerSource},r.map(function(e){return p.a.createElement(h.j,{key:e.key,value:e.value},e.key)})))),p.a.createElement(h.z,{className:"normalInfo"},p.a.createElement(h.k,{span:24},p.a.createElement("label",null,"\u610f\u5411\u533a\u57df\uff1a "),p.a.createElement(h.A,{value:this.state.condition.firstAreaKey,onChange:function(t){return e.handleAreaChange(t,"1")}},p.a.createElement(b,{key:"0"},"\u4e0d\u9650"),this.state.firstAreaOption.map(function(e){return p.a.createElement(b,{key:e.value},e.label)})),p.a.createElement(h.A,{value:this.state.condition.secondAreaKey,onChange:function(t){return e.handleAreaChange(t,"2")}},p.a.createElement(b,{key:"0"},"\u4e0d\u9650"),this.state.secondAreaOption.map(function(e){return p.a.createElement(b,{key:e.value},e.label)})),p.a.createElement(h.A,{value:this.state.condition.thirdAreaKey,onChange:function(t){return e.handleAreaChange(t,"3")}},p.a.createElement(b,{key:"0"},"\u4e0d\u9650"),this.state.thirdAreaOption.map(function(e){return p.a.createElement(b,{key:e.value},e.label)})))),p.a.createElement(h.z,{className:"normalInfo"},p.a.createElement(h.k,null,p.a.createElement("label",null,"\u610f\u5411\u4ef7\u683c\uff1a"),p.a.createElement(h.r,{min:0,max:100,formatter:function(e){return"\xa5"+e},value:this.state.condition.priceStart,onChange:function(t){return e.handleNumberChange(t,"priceStart")}}),"-",p.a.createElement(h.r,{min:0,max:100,formatter:function(e){return"\xa5"+e},value:this.state.condition.priceEnd,onChange:function(t){return e.handleNumberChange(t,"priceEnd")}}),p.a.createElement("label",null,"\u610f\u5411\u9762\u79ef\uff1a"),p.a.createElement(h.r,{min:0,max:100,formatter:function(e){return e+"\u33a1"},value:this.state.condition.acreageStart,onChange:function(t){return e.handleNumberChange(t,"acreageStart")}}),"-",p.a.createElement(h.r,{min:0,max:100,formatter:function(e){return e+"\u33a1"},value:this.state.condition.acreageEnd,onChange:function(t){return e.handleNumberChange(t,"acreageEnd")}}),"menu_invalid"!==u?p.a.createElement("label",null,p.a.createElement("span",{style:{marginRight:"10px"}},"\u8ddf\u8fdb\u65e5\u671f\uff1a"),p.a.createElement(h.m,{disabledDate:this.disabledDate,value:c,onChange:function(t,n){return e.handleCreateTime(n,"followUpStart")}}),"- ",p.a.createElement(h.m,{disabledDate:this.disabledDate,value:s,onChange:function(t,n){return e.handleCreateTime(n,"followUpEnd")}})):null)),p.a.createElement(h.z,{className:"normalInfo"},p.a.createElement(h.k,null,"menu_index"===u||"menu_invalid"===u?p.a.createElement("label",null,p.a.createElement("span",{style:{marginRight:"10px"}},"\u5f55\u5165\u65f6\u95f4\uff1a"),p.a.createElement(h.m,{disabledDate:this.disabledDate,value:i,onChange:function(t,n){return e.handleCreateTime(n,"createDateStart")}}),"- ",p.a.createElement(h.m,{disabledDate:this.disabledDate,value:l,onChange:function(t,n){return e.handleCreateTime(n,"createDateEnd")}})):null,"menu_invalid"!==u?p.a.createElement("label",null,p.a.createElement("span",{style:{marginRight:"10px"}},"\u672a\u8ddf\u5929\u6570\u8fdb\u6392\u5e8f\uff1a"),p.a.createElement(h.y.Group,{onChange:this.handleOrderChange,defaultValue:!1,value:this.state.condition.orderRule},p.a.createElement(h.y.Button,{value:!0},p.a.createElement(h.p,{type:"arrow-up"}),"\u7531\u5c11\u81f3\u591a"),p.a.createElement(h.y.Button,{value:!1},p.a.createElement(h.p,{type:"arrow-down"}),"\u7531\u591a\u81f3\u5c11"))):null)))),"menu_index"===u?p.a.createElement("p",{style:{marginBottom:"10px"}},"\u76ee\u524d\u5df2\u4e3a\u4f60\u7b5b\u9009\u51fa",p.a.createElement("b",null,d),"\u6761\u5ba2\u6237\u4fe1\u606f\uff08\u5df2\u4e3a\u4f60\u53bb\u6389\u91cd\u5ba2\uff09",p.a.createElement(h.j,{onChange:this.handleViewRepeatChange},p.a.createElement("b",null,"\u67e5\u770b\u91cd\u5ba2"))):null)}}]),t}(d.Component);t.a=Object(s.b)(l,c)(O)},2161:function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{searchInfo:e.search,basicData:e.basicData}}function c(e){return{dispatch:e}}var s=n(92),u=n(1302),d=n(0),p=n.n(d),h=n(46),f=n(27),m=n.n(f),y=n(1897),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),v=function(e){function t(){var e,n,a,i;r(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.state={pagination:{pageSize:10,current:0,total:0},checkList:[]},a.dateTimeRender=function(e,t){var n=e;return e&&(n=m()(e).format("YYYY-MM-DD HH:mm:ss")),p.a.createElement("span",null,n)},a.handleChangePage=function(e){console.log("\u5206\u9875\u4fe1\u606f:",e);var t=Object.assign({},a.props.searchInfo.searchCondition);t.pageIndex=e.current-1,t.pageSize=e.pageSize,a.props.dispatch(Object(u.A)(!0)),a.props.dispatch(Object(u.y)(t)),a.props.dispatch(Object(u.z)(t))},a.handleCustomerDetail=function(e){a.props.dispatch(Object(u.o)(e))},a.handleAdjustCustomer=function(e){a.props.dispatch(Object(u.u)([e]))},a.handleMultiAdjust=function(){a.props.dispatch(Object(u.u)(a.state.checkList))},i=n,o(a,i)}return i(t,e),E(t,[{key:"getCustomerInfoColumns",value:function(){return[{title:"\u59d3\u540d",dataIndex:"customerName",key:"customerName"},{title:"\u7535\u8bdd",dataIndex:"mainPhone",key:"mainPhone"}]}},{key:"getDealInfoColumns",value:function(){return{title:"\u5ba2\u6237\u6210\u4ea4\u4fe1\u606f",children:[{title:"\u6210\u4ea4\u623f\u6e90",dataIndex:"customerDealResponse.housingResourcesNo",key:"customerDealResponse.housingResourcesNo"},{title:"\u6210\u4ea4\u91d1\u989d",dataIndex:"customerDealResponse.totalPrice",key:"customerDealResponse.totalPrice"},{title:"\u6210\u4ea4\u4f63\u91d1",dataIndex:"customerDealResponse.commission",key:"customerDealResponse.commission"},{title:"\u6210\u4ea4\u65f6\u95f4",dataIndex:"customerDealResponse.createTime",key:"customerDealResponse.createTime",render:this.dateTimeRender}]}}},{key:"getOtherInfoColumns",value:function(){var e=this,t={title:"\u5176\u4ed6",children:[{title:"\u5ba2\u6237\u8be6\u60c5",dataIndex:"customerDetail",key:"customerDetail",render:function(t,n){return p.a.createElement(h.g,{type:"primary",size:"small",onClick:function(t){return e.handleCustomerDetail(n)}},"\u5ba2\u6237\u8be6\u60c5")}}]},n=this.props.searchInfo.activeMenu,r=this.props.basicData.rateProgress||[];if("menu_index"===n){var o=[{title:"\u5546\u673a\u9636\u6bb5",dataIndex:"rateProgress",key:"rateProgress",render:function(e,t){var n=(e||"").toString(),a=r.find(function(e){return e.value===n});return a&&(n=a.key),n}},{title:"\u8ddf\u8fdb\u60c5\u51b5",dataIndex:"followupTime",key:"followupTime",render:function(e,t){var n=0;return e&&(n=m()().diff(m()(e),"days")),p.a.createElement("span",null,0===n?"\u5f53\u5929\u8ddf\u8fdb":n+"\u5929\u672a\u8ddf\u8fdb")}},{title:"\u8ddf\u8fdb\u603b\u6570",dataIndex:"followUpNum",key:"followUpNum"},{title:"\u6700\u8fd1\u8ddf\u8fdb\u623f\u6e90",dataIndex:"followHouse",key:"followHouse"},{title:"\u8c03\u5ba2",dataIndex:"adjustCustomer",key:"adjustCustomer",render:function(t,n){return p.a.createElement(h.g,{type:"primary",size:"small",onClick:function(t){return e.handleAdjustCustomer(n)}},"\u8c03\u5ba2")}}];t.children=[].concat(o,a(t.children))}else if("menu_public_pool"===n){var i=[{title:"\u8f6c\u5165\u516c\u5ba2\u65f6\u95f4",dataIndex:"transferTime",key:"transferTime"}];t.children=[].concat(i,a(t.children))}else if("menu_have_deal"===n){var l=[{title:"\u662f\u5426\u4ecd\u6709\u8d2d\u4e70\u610f\u5411",dataIndex:"isSellIntention",key:"isSellIntention",render:function(e,t){return p.a.createElement("span",null,e?"\u6709":"\u65e0")}}];t.children=[].concat(l,a(t.children))}else if("menu_invalid"===n){var c=[{title:"\u65e0\u6548\u7c7b\u578b",dataIndex:"customerLossResponse.lossTypeId",key:"customerLossResponse.lossTypeId",render:function(t,n){var a=t,r=e.props.basicData.invalidResions.find(function(e){return e.value==t});return a=r?r.key:a,p.a.createElement("span",null,a)}},{title:"\u65e0\u6548\u539f\u56e0",dataIndex:"customerLossResponse.lossRemark",key:"customerLossResponse.lossRemark"},{title:"\u65e0\u6548\u65f6\u95f4",dataIndex:"customerLossResponse.lossTime",key:"customerLossResponse.lossTime",render:this.dateTimeRender}];t.children=[].concat(c,a(t.children))}return t}},{key:"getTableColumns",value:function(){console.log("basicData:",this.props.basicData);var e=this.getCustomerInfoColumns(),t=[{title:"\u5ba2\u6237\u57fa\u672c\u4fe1\u606f",children:e},{title:"\u5ba2\u6237\u5f52\u5c5e\u4fe1\u606f",children:[{title:"\u5f52\u5c5e\u90e8\u95e8",dataIndex:"departmentName",key:"departmentName"},{title:"\u4e1a\u52a1\u5458",dataIndex:"userName",key:"userName"}]}],n=this.props.searchInfo.activeMenu;return"menu_index"!==n&&"menu_have_deal"!==n||t.push(this.getDealInfoColumns()),t.push(this.getOtherInfoColumns()),t}},{key:"componentWillReceiveProps",value:function(e){var t=e.searchInfo.searchResult,n=t.pageIndex,a=t.pageSize,r=t.totalCount;e.searchInfo.searchResult&&n&&this.setState({pagination:{current:n,pageSize:a,total:r}})}},{key:"render",value:function(){var e=this,t=this.props.searchInfo.searchResult.extension,n={onChange:function(t,n){e.setState({checkList:n})}},a=!1;return["menu_index"].includes(this.props.searchInfo.activeMenu)&&(a=!0),p.a.createElement("div",{id:"searchResult"},p.a.createElement(h.D,{columns:this.getTableColumns(),pagination:this.state.pagination,onChange:this.handleChangePage,dataSource:t,bordered:!0,size:"middle",rowSelection:a?n:null}),a?p.a.createElement("div",{id:"adjustCustomer"},p.a.createElement(h.g,{type:"primary",disabled:0===this.state.checkList.length,onClick:this.handleMultiAdjust},"\u8c03\u5ba2")):null,p.a.createElement(y.a,null))}}]),t}(d.Component);t.a=Object(s.b)(l,c)(v)}});
//# sourceMappingURL=27.5a5920b8.chunk.js.map