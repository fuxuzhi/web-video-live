(function(t){function e(e){for(var a,s,l=e[0],o=e[1],u=e[2],p=0,f=[];p<l.length;p++)s=l[p],n[s]&&f.push(n[s][0]),n[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,l=1;l<r.length;l++){var o=r[l];0!==n[o]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},i=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=o;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},1:function(t,e){},"2a8e":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],s=(r("7c55"),r("2877")),l={},o=Object(s["a"])(l,n,i,!1,null,null,null),u=o.exports,c=r("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"title"},[t._v(t._s(t.title))]),r("div",{staticClass:"subtitle"},[t._v(t._s(t.subtitle))]),r("div",{staticClass:"subtitle"},[t._v("如果没有播放，请检查是否已允许浏览器使用 Flash 播放")]),r("div",{staticClass:"actions"},[r("Button",{attrs:{type:"success",size:"large"}},[r("a",{attrs:{href:"https://github.com/fuyi501/web-video-live"}},[t._v("VIEW ON GITHUB")])]),r("Button",{staticStyle:{"margin-left":"2em"},attrs:{type:"error",size:"large"}},[r("a",{attrs:{href:"https://github.com/fuyi501/web-video-live/issues"}},[t._v("ISSUES")])])],1),r("div",{staticClass:"example-title"},[t._v(" # vue-video-player 播放 RTMP 流 ")]),r("Row",{attrs:{type:"flex",justify:"center",gutter:20}},[r("Col",{attrs:{span:18}},[r("Row",{attrs:{type:"flex",justify:"start",gutter:20}},t._l(t.videoInfo,function(e,a){return r("i-col",{key:"info-"+a,staticStyle:{"margin-bottom":"30px"},attrs:{span:12}},[r("Card",[r("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))]),r("div",[r("RtmpLive",{attrs:{src:e.videoSrc}})],1)])],1)}),1)],1)],1),r("div",{staticClass:"example-title"},[t._v(" # vue-video-player 播放 HLS 流 ")]),r("Row",{attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{span:18}},[r("HlsLive")],1)],1),r("div",{staticClass:"example-title"},[t._v(" # flv.js 播放 flv 视频流 ")]),r("Row",{attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{span:18}},[r("Flvjs")],1)],1),r("div",{staticClass:"example-title"})],1)},f=[],d=r("e878"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("video-player",{ref:"videoPlayer",staticClass:"vjs-custom-skin",attrs:{options:t.playerOptions,playsinline:!0,customEventName:"customstatechangedeventname"}})},y=[],h=(r("b5c1"),{name:"rtmp-live",props:{src:{type:String,default:"rtmp://live.hkstv.hk.lxdns.com/live/hks2"}},data:function(){return{playerOptions:{sources:[{type:"rtmp/mp4",src:this.src}],techOrder:["flash"],autoplay:!0,fluid:!0,aspectRatio:"16:9"}}}}),m=h,b=Object(s["a"])(m,v,y,!1,null,null,null),g=b.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("video-player",{ref:"videoPlayer",staticClass:"vjs-custom-skin",attrs:{options:t.playerOptions},on:{ready:t.playerReadied}})},w=[],x=(r("a151"),{name:"hls-live",props:{src:{type:String,default:"http://gcqq450f71eywn6bv7u.exp.bcevod.com/mda-hiup6h1qdymgf3fe/mda-hiup6h1qdymgf3fe.m3u8"}},data:function(){return{playerOptions:{sources:[{withCredentials:!1,type:"application/x-mpegURL",src:this.src}],controlBar:{timeDivider:!1,durationDisplay:!1},flash:{hls:{withCredentials:!1}},html5:{hls:{withCredentials:!1}},autoplay:!0,fluid:!0,aspectRatio:"16:9"}}},methods:{playerReadied:function(t){t.tech({IWillNotUseThisInPlugins:!0}).hls;t.tech_.hls.xhr.beforeRequest=function(t){return t}}}}),j=x,S=Object(s["a"])(j,_,w,!1,null,null,null),O=S.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("video",{staticStyle:{"background-color":"#fff",height:"600px",width:"100%"},attrs:{id:"videoElement"}})},k=[],R=r("1947"),P={name:"flvjs",props:{src:{type:String,default:"http://cyberplayerplay.kaywang.cn/cyberplayer/demo201711-L1.flv"}},data:function(){return{}},mounted:function(){if(R["a"].isSupported()){var t=document.getElementById("videoElement"),e=R["a"].createPlayer({type:"flv",url:"http://cyberplayerplay.kaywang.cn/cyberplayer/demo201711-L1.flv"});e.attachMediaElement(t),e.load(),e.play()}}},E=P,L=Object(s["a"])(E,C,k,!1,null,"f54aa67c",null),T=L.exports,I={name:"home",components:{GithubButton:d["a"],RtmpLive:g,HlsLive:O,Flvjs:T},data:function(){return{title:"web 播放视频流/直播",subtitle:"使用 vue-video-player、flv.js 播放 RTMP、HLS、HTTP-FLV 视频流",videoInfo:[{title:"香港卫视",videoSrc:"rtmp://live.hkstv.hk.lxdns.com/live/hks1"},{title:"香港财经",videoSrc:"rtmp://202.69.69.180:443/webcast/bshdlive-pc"},{title:"湖南卫视",videoSrc:"rtmp://58.200.131.2:1935/livetv/hunantv"},{title:"美国中文电视",videoSrc:"rtmp://media3.sinovision.net:1935/live/livestream"}]}}},M=I,B=(r("f940"),Object(s["a"])(M,p,f,!1,null,"cd3d3d3c",null)),H=B.exports;a["default"].use(c["a"]);var $=new c["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:H}]}),q=r("2f62");a["default"].use(q["a"]);var F=new q["a"].Store({state:{},mutations:{},actions:{}}),U=r("e069"),N=r.n(U),z=(r("dcad"),r("d6d3")),D=r.n(z);r("fda2");a["default"].use(D.a),a["default"].use(N.a),a["default"].config.productionTip=!1,new a["default"]({router:$,store:F,render:function(t){return t(u)}}).$mount("#app")},"5c48":function(t,e,r){},"7c55":function(t,e,r){"use strict";var a=r("5c48"),n=r.n(a);n.a},f940:function(t,e,r){"use strict";var a=r("2a8e"),n=r.n(a);n.a}});
//# sourceMappingURL=app.b3a25860.js.map