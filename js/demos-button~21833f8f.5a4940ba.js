(window.webpackJsonp=window.webpackJsonp||[]).push([["demos-button~21833f8f"],{"28b5":function(e,t,o){"use strict";o("be70")},"6a30":function(e,t,o){"use strict";o("720b")},"6cf3":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),c=Object(n.withScopeId)("data-v-0051b952");Object(n.pushScopeId)("data-v-0051b952");var a={class:"btn-rows"},r=Object(n.createTextVNode)("primary"),i=Object(n.createTextVNode)("warning"),l=Object(n.createTextVNode)("success");Object(n.popScopeId)();var u,d=c((function(e,t,o,u,d,s){var b=Object(n.resolveComponent)("a-alert"),m=Object(n.resolveComponent)("a-button"),p=Object(n.resolveComponent)("a-card");return Object(n.openBlock)(),Object(n.createBlock)("div",null,[Object(n.createVNode)(b,{message:"可扩展antd按钮样式功能",description:"继承自原ant-design-vue的a-button，轻易扩展按钮的type定制不同颜色，详细看@/components/button/button.vue",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),Object(n.createVNode)(p,null,{default:c((function(){return[Object(n.createVNode)("div",a,[Object(n.createVNode)(m,{type:"primary"},{default:c((function(){return[r]})),_:1}),Object(n.createVNode)(m,{type:"warning"},{default:c((function(){return[i]})),_:1}),Object(n.createVNode)(m,{type:"success"},{default:c((function(){return[l]})),_:1})])]})),_:1})])})),s=(o("b0c0"),o("ade3")),b=o("2c92"),m=o("cdeb"),p=o("b95b"),f=Object(n.defineComponent)({name:"custom-button",components:(u={},Object(s.a)(u,b.a.name,b.a),Object(s.a)(u,m.a.name,m.a),Object(s.a)(u,"AButton",p.a),u)});o("ba6d"),f.render=d,f.__scopeId="data-v-0051b952",t.default=f},"720b":function(e,t,o){},9634:function(e,t,o){"use strict";o.r(t);var n=o("7a23"),c=Object(n.withScopeId)("data-v-6de5f68e");Object(n.pushScopeId)("data-v-6de5f68e");var a=Object(n.createTextVNode)(" 示意图："),r=Object(n.createTextVNode)(" (例如：//at.alicdn.com/t/font_1166867_7zdsgx6x88l.js) "),i=Object(n.createTextVNode)(" （例如：icon-huanfu1、icon-zhutipifu、icon-xinwendongtai1） "),l={key:1};Object(n.popScopeId)();var u=c((function(e,t,o,u,d,s){var b=Object(n.resolveComponent)("a-alert"),m=Object(n.resolveComponent)("preview-modal"),p=Object(n.resolveComponent)("a-input"),f=Object(n.resolveComponent)("a-form-item"),O=Object(n.resolveComponent)("icon-font"),v=Object(n.resolveComponent)("a-form"),j=Object(n.resolveComponent)("a-card");return Object(n.openBlock)(),Object(n.createBlock)("div",null,[Object(n.createVNode)(b,{message:"自定义图标",description:"使用阿里图标库，可以有效减小项目的体积，支持离线本地图标和在线图标",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),Object(n.createVNode)(j,null,{default:c((function(){return[a,Object(n.createVNode)("img",{onClick:t[1]||(t[1]=function(){return e.showPreview&&e.showPreview.apply(e,arguments)}),class:"image-demo",src:"http://ww1.sinaimg.cn/large/005IOlAWgy1gl8bm4ot9dj314r0opabq.jpg"}),e.visible?(Object(n.openBlock)(),Object(n.createBlock)(m,{key:0,type:"image",visible:e.visible,"onUpdate:visible":t[2]||(t[2]=function(t){return e.visible=t}),url:e.imageUrl},null,8,["visible","url"])):Object(n.createCommentVNode)("",!0),Object(n.createVNode)(v,null,{default:c((function(){return[Object(n.createVNode)(f,{label:"阿里图标路径"},{default:c((function(){return[Object(n.createVNode)(p,{value:e.scriptUrl,"onUpdate:value":t[3]||(t[3]=function(t){return e.scriptUrl=t}),style:{width:"400px"},placeholder:"请输入你的阿里巴巴矢量图标库项目图标的路径"},null,8,["value"]),r]})),_:1}),Object(n.createVNode)(f,{label:"图标名字"},{default:c((function(){return[Object(n.createVNode)(p,{value:e.iconName,"onUpdate:value":t[4]||(t[4]=function(t){return e.iconName=t}),placeholder:"请输入图标的名字",style:{width:"200px"}},null,8,["value"]),i]})),_:1}),Object(n.createVNode)(f,{label:"效果"},{default:c((function(){return[e.scriptUrl&&e.iconName?(Object(n.openBlock)(),Object(n.createBlock)(O,{key:0,"script-url":e.scriptUrl,type:e.iconName,size:"30"},null,8,["script-url","type"])):(Object(n.openBlock)(),Object(n.createBlock)("span",l,"可以复制示例的地址和图标查看效果"))]})),_:1})]})),_:1})]})),_:1})])})),d=(o("b0c0"),o("5530")),s=o("ade3"),b=o("2c92"),m=o("7d88"),p={key:0,class:"toolbar"},f=o("8592"),O=o("c124"),v=o("c4bc"),j=o("1212"),g=o("56ae"),h=o("411c"),w=o("a54f");function y(e){var t=e.lastIndexOf("/")+1,o=e.substring(t);return decodeURI(o.split("?")[0])}o("c975"),o("baa5"),o("d3b7"),o("ac1f"),o("3ca3"),o("1276"),o("ddb0"),o("2b3d");var k=Object(n.defineComponent)({name:"preview-modal",emits:["update:visible"],components:Object(s.a)({ZoomInOutlined:O.a,ZoomOutOutlined:v.a,RedoOutlined:j.a,DownloadOutlined:g.a,CloseCircleOutlined:h.a,OneToOneOutlined:w.a},f.a.name,f.a),props:{visible:{type:Boolean,default:!1},type:{type:String,default:"image"},url:{type:String,default:""}},setup:function(e,t){var o,c=t.emit,a=Object(n.ref)(null),r=Object(n.reactive)({timer:null,loading:!1,rotateDeg:0,imgScale:1,scaleCV:.07,initWidth:0,initHeight:0,contentStyle:{width:"60vw",height:"60vh"},imgStyle:{width:"",height:"",transform:"rotate(0)"}}),i=Object(n.computed)({get:function(){return e.visible},set:function(e){return c("update:visible",e)}}),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"scale";r.imgStyle.width=r.initWidth*r.imgScale+"px",r.imgStyle.height=r.initHeight*r.imgScale+"px","init"===e?(r.imgStyle.maxWidth="",r.imgStyle.maxHeight=""):(r.imgStyle.maxWidth="none!important",r.imgStyle.maxHeight="none!important"),clearTimeout(o),o=setTimeout((function(){return a.value.classList.remove("active")}),1400),a.value.classList.add("active"),r.contentStyle={}};return Object(d.a)(Object(d.a)({},Object(n.toRefs)(r)),{},{imgScaleMask:a,isVisible:i,rotateImg:function(){r.rotateDeg-=90,r.imgStyle.transform="rotate(".concat(r.rotateDeg,"deg)")},saveImg:function(e){!function(e){var t=e.url,o=e.target,n=void 0===o?"_blank":o,c=e.fileName,a=new URL(t).host==location.host;new Promise((function(e,o){if(a){var r=document.createElement("a");if(r.href=t,r.target=n,void 0!==r.download&&(r.download=c||y(t)),document.createEvent){var i=document.createEvent("MouseEvents");return i.initEvent("click",!0,!0),r.dispatchEvent(i),e(!0)}return-1===t.indexOf("?")&&(t+="?download"),window.open(t,n),e(!0)}var l=document.createElement("canvas"),u=document.createElement("img");u.setAttribute("crossOrigin","Anonymous"),u.src=t,u.onload=function(o){l.width=u.width,l.height=u.height,l.getContext("2d").drawImage(u,0,0,u.width,u.height),l.toBlob((function(o){var n=document.createElement("a");n.href=window.URL.createObjectURL(o),n.download=y(t),n.click(),URL.revokeObjectURL(n.href),e(!0)}),"image/jpeg")},u.onerror=function(e){return o(e)}}))}({url:e})},zoomInImg:function(){r.imgScale+=r.scaleCV,l()},zoomOutImg:function(){r.imgScale-=r.scaleCV,l()},handZoom:l,imgLoaded:function(e){var t;if(null!==(t=e.currentTarget)&&void 0!==t&&t.complete){var o=getComputedStyle(e.currentTarget),n=o.width,c=o.height;r.imgStyle.width=n,r.imgStyle.height=c,r.initWidth=parseFloat(n),r.initHeight=parseFloat(c)}},resetImg:function(){r.imgScale=1,l()}})}});o("28b5"),k.render=function(e,t,o,c,a,r){var i=Object(n.resolveComponent)("close-circle-outlined"),l=Object(n.resolveComponent)("a-spin"),u=Object(n.resolveComponent)("zoom-in-outlined"),d=Object(n.resolveComponent)("zoom-out-outlined"),s=Object(n.resolveComponent)("one-to-one-outlined"),b=Object(n.resolveComponent)("redo-outlined"),m=Object(n.resolveComponent)("download-outlined");return Object(n.openBlock)(),Object(n.createBlock)(n.Teleport,{to:"body"},[e.isVisible?(Object(n.openBlock)(),Object(n.createBlock)("div",{key:0,onClick:t[6]||(t[6]=Object(n.withModifiers)((function(t){return e.isVisible=!1}),["self"])),class:"preview-modal"},[Object(n.createVNode)(i,{onClick:t[1]||(t[1]=function(t){return e.isVisible=!1}),class:"close-icon"}),Object(n.createVNode)("div",{class:"preview-content",style:e.contentStyle},[Object(n.createVNode)(l,{spinning:e.loading},{default:Object(n.withCtx)((function(){return["image"===e.type?(Object(n.openBlock)(),Object(n.createBlock)("img",{key:0,onLoad:t[2]||(t[2]=Object(n.withModifiers)((function(){return e.imgLoaded&&e.imgLoaded.apply(e,arguments)}),["stop"])),ref:"img",style:e.imgStyle,src:e.url,alt:""},null,44,["src"])):Object(n.createCommentVNode)("",!0),"video"===e.type?(Object(n.openBlock)(),Object(n.createBlock)("video",{key:1,ref:"video",onCanplay:t[3]||(t[3]=function(t){return e.loading=!1}),onLoadstart:t[4]||(t[4]=function(t){return e.loading=!0}),src:e.url,controls:"",autoplay:""},null,40,["src"])):Object(n.createCommentVNode)("",!0),Object(n.createVNode)("div",{ref:"imgScaleMask",class:"img-scale-mask"},Object(n.toDisplayString)(~~(100*e.imgScale)+"%"),513)]})),_:1},8,["spinning"])],4),"image"===e.type?(Object(n.openBlock)(),Object(n.createBlock)("div",p,[Object(n.createVNode)(u,{onClick:e.zoomInImg,title:"放大"},null,8,["onClick"]),Object(n.createVNode)(d,{onClick:e.zoomOutImg,title:"缩放"},null,8,["onClick"]),Object(n.createVNode)(s,{onClick:e.resetImg,title:"原始比例"},null,8,["onClick"]),Object(n.createVNode)(b,{onClick:e.rotateImg,title:"旋转"},null,8,["onClick"]),Object(n.createVNode)(m,{onClick:t[5]||(t[5]=function(t){return e.saveImg(e.url)}),title:"下载"})])):Object(n.createCommentVNode)("",!0)])):Object(n.createCommentVNode)("",!0)])};var C,V=k,N=Object(n.defineComponent)({name:"custom-modal",components:(C={},Object(s.a)(C,b.a.name,b.a),Object(s.a)(C,"IconFont",m.a),Object(s.a)(C,"PreviewModal",V),C),setup:function(){var e=Object(n.reactive)({scriptUrl:"",iconName:"",visible:!1,imageUrl:""});return Object(d.a)(Object(d.a)({},Object(n.toRefs)(e)),{},{showPreview:function(t){e.imageUrl=t.target.currentSrc,e.visible=!0}})}});o("c3f1"),N.render=u,N.__scopeId="data-v-6de5f68e",t.default=N},ba6d:function(e,t,o){"use strict";o("cb8a")},be70:function(e,t,o){},c3f1:function(e,t,o){"use strict";o("e220")},ca23:function(e,t,o){"use strict";o.r(t);var n=o("7a23"),c=Object(n.withScopeId)("data-v-ccf4baa8");Object(n.pushScopeId)("data-v-ccf4baa8");var a=Object(n.createTextVNode)(" 确定 ");Object(n.popScopeId)();var r,i=c((function(e,t,o,r,i,l){var u=Object(n.resolveComponent)("a-alert"),d=Object(n.resolveComponent)("a-button"),s=Object(n.resolveComponent)("schema-form"),b=Object(n.resolveComponent)("a-card");return Object(n.openBlock)(),Object(n.createBlock)("div",null,[Object(n.createVNode)(u,{message:"验证表单",description:"动态验证表单",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),Object(n.createVNode)(b,null,{default:c((function(){return[Object(n.createVNode)(s,{ref:"dynamicForm","form-schema":e.formSchema},{"operate-button":c((function(){return[Object(n.createVNode)(d,{onClick:e.confirm,type:"primary"},{default:c((function(){return[a]})),_:1},8,["onClick"])]})),_:1},8,["form-schema"])]})),_:1})])})),l=(o("b0c0"),o("d3b7"),o("96cf"),o("1da1")),u=o("ade3"),d=o("2c92"),s=o("cdeb"),b=o("b95b"),m=o("5f73"),p=Object(n.defineComponent)({name:"rule-form",components:(r={},Object(u.a)(r,d.a.name,d.a),Object(u.a)(r,s.a.name,s.a),Object(u.a)(r,"AButton",b.a),Object(u.a)(r,"SchemaForm",m.a),r),setup:function(){var e,t,o=Object(n.ref)(null),c={formItemLayout:{labelCol:{span:4},wrapperCol:{span:14}},formItem:[{type:"input",label:"密码",field:"password",value:"",props:{"has-feedback":!0,placeholder:"请输入密码"},rules:[{required:!0,message:"密码不能为空",validator:(t=Object(l.a)(regeneratorRuntime.mark((function e(t,n){var c,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=o.value.modelRef,a=c.confirmPassword,""!==c.password){e.next=5;break}return e.abrupt("return",Promise.reject("请输入密码"));case 5:return""!==a&&o.value.validateField("confirmPassword"),e.abrupt("return",Promise.resolve());case 7:case"end":return e.stop()}}),e)}))),function(e,o){return t.apply(this,arguments)})}]},{type:"input",label:"确认密码",field:"confirmPassword",value:"",props:{"has-feedback":!0,placeholder:"请输入确认密码"},rules:[{required:!0,validator:(e=Object(l.a)(regeneratorRuntime.mark((function e(t,n,c,a,r){var i,l,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=o.value.modelRef,l=i.confirmPassword,u=i.password,""!==l){e.next=6;break}return e.abrupt("return",Promise.reject("请重新输入密码"));case 6:if(l===u){e.next=10;break}return e.abrupt("return",Promise.reject("两次输入的密码不匹配!"));case 10:return e.abrupt("return",Promise.resolve());case 11:case"end":return e.stop()}}),e)}))),function(t,o,n,c,a){return e.apply(this,arguments)})}]}]};return{dynamicForm:o,confirm:function(){return o.value.validate()},formSchema:c}}});o("6a30"),p.render=i,p.__scopeId="data-v-ccf4baa8",t.default=p},cb8a:function(e,t,o){},e220:function(e,t,o){}}]);