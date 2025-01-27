/*
 * SceneJS WebGL Scene Graph Library for JavaScript
 * http://scenejs.org/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://scenejs.org/license
 * Copyright 2010, Lindsay Kay
 *
 *
 */// Only define RequireJS if not already present
if (undefined === require) {/*
 RequireJS 2.1.6 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
 */
var requirejs,require,define;
(function(ba){function J(b){return"[object Function]"===N.call(b)}function K(b){return"[object Array]"===N.call(b)}function z(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function O(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function t(b,c){return ha.call(b,c)}function m(b,c){return t(b,c)&&b[c]}function H(b,c){for(var d in b)if(t(b,d)&&c(b[d],d))break}function S(b,c,d,m){c&&H(c,function(c,l){if(d||!t(b,l))m&&"string"!==typeof c?(b[l]||(b[l]={}),S(b[l],
    c,d,m)):b[l]=c});return b}function v(b,c){return function(){return c.apply(b,arguments)}}function ca(b){throw b;}function da(b){if(!b)return b;var c=ba;z(b.split("."),function(b){c=c[b]});return c}function B(b,c,d,m){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=m;d&&(c.originalError=d);return c}function ia(b){function c(a,f,C){var e,n,b,c,d,T,k,g=f&&f.split("/");e=g;var l=j.map,h=l&&l["*"];if(a&&"."===a.charAt(0))if(f){e=m(j.pkgs,f)?g=[f]:g.slice(0,g.length-
    1);f=a=e.concat(a.split("/"));for(e=0;f[e];e+=1)if(n=f[e],"."===n)f.splice(e,1),e-=1;else if(".."===n)if(1===e&&(".."===f[2]||".."===f[0]))break;else 0<e&&(f.splice(e-1,2),e-=2);e=m(j.pkgs,f=a[0]);a=a.join("/");e&&a===f+"/"+e.main&&(a=f)}else 0===a.indexOf("./")&&(a=a.substring(2));if(C&&l&&(g||h)){f=a.split("/");for(e=f.length;0<e;e-=1){b=f.slice(0,e).join("/");if(g)for(n=g.length;0<n;n-=1)if(C=m(l,g.slice(0,n).join("/")))if(C=m(C,b)){c=C;d=e;break}if(c)break;!T&&(h&&m(h,b))&&(T=m(h,b),k=e)}!c&&
    T&&(c=T,d=k);c&&(f.splice(0,d,c),a=f.join("/"))}return a}function d(a){A&&z(document.getElementsByTagName("script"),function(f){if(f.getAttribute("data-requiremodule")===a&&f.getAttribute("data-requirecontext")===k.contextName)return f.parentNode.removeChild(f),!0})}function p(a){var f=m(j.paths,a);if(f&&K(f)&&1<f.length)return d(a),f.shift(),k.require.undef(a),k.require([a]),!0}function g(a){var f,b=a?a.indexOf("!"):-1;-1<b&&(f=a.substring(0,b),a=a.substring(b+1,a.length));return[f,a]}function l(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          f,b,e){var n,D,i=null,d=f?f.name:null,l=a,h=!0,j="";a||(h=!1,a="_@r"+(N+=1));a=g(a);i=a[0];a=a[1];i&&(i=c(i,d,e),D=m(r,i));a&&(i?j=D&&D.normalize?D.normalize(a,function(a){return c(a,d,e)}):c(a,d,e):(j=c(a,d,e),a=g(j),i=a[0],j=a[1],b=!0,n=k.nameToUrl(j)));b=i&&!D&&!b?"_unnormalized"+(O+=1):"";return{prefix:i,name:j,parentMap:f,unnormalized:!!b,url:n,originalName:l,isDefine:h,id:(i?i+"!"+j:j)+b}}function s(a){var f=a.id,b=m(q,f);b||(b=q[f]=new k.Module(a));return b}function u(a,f,b){var e=a.id,n=m(q,
    e);if(t(r,e)&&(!n||n.defineEmitComplete))"defined"===f&&b(r[e]);else if(n=s(a),n.error&&"error"===f)b(n.error);else n.on(f,b)}function w(a,f){var b=a.requireModules,e=!1;if(f)f(a);else if(z(b,function(f){if(f=m(q,f))f.error=a,f.events.error&&(e=!0,f.emit("error",a))}),!e)h.onError(a)}function x(){U.length&&(ja.apply(I,[I.length-1,0].concat(U)),U=[])}function y(a){delete q[a];delete W[a]}function G(a,f,b){var e=a.map.id;a.error?a.emit("error",a.error):(f[e]=!0,z(a.depMaps,function(e,c){var d=e.id,
    g=m(q,d);g&&(!a.depMatched[c]&&!b[d])&&(m(f,d)?(a.defineDep(c,r[d]),a.check()):G(g,f,b))}),b[e]=!0)}function E(){var a,f,b,e,n=(b=1E3*j.waitSeconds)&&k.startTime+b<(new Date).getTime(),c=[],i=[],g=!1,l=!0;if(!X){X=!0;H(W,function(b){a=b.map;f=a.id;if(b.enabled&&(a.isDefine||i.push(b),!b.error))if(!b.inited&&n)p(f)?g=e=!0:(c.push(f),d(f));else if(!b.inited&&(b.fetched&&a.isDefine)&&(g=!0,!a.prefix))return l=!1});if(n&&c.length)return b=B("timeout","Load timeout for modules: "+c,null,c),b.contextName=
    k.contextName,w(b);l&&z(i,function(a){G(a,{},{})});if((!n||e)&&g)if((A||ea)&&!Y)Y=setTimeout(function(){Y=0;E()},50);X=!1}}function F(a){t(r,a[0])||s(l(a[0],null,!0)).init(a[1],a[2])}function L(a){var a=a.currentTarget||a.srcElement,b=k.onScriptLoad;a.detachEvent&&!Z?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=k.onScriptError;(!a.detachEvent||Z)&&a.removeEventListener("error",b,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}function M(){var a;for(x();I.length;){a=
    I.shift();if(null===a[0])return w(B("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));F(a)}}var X,$,k,P,Y,j={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},config:{}},q={},W={},aa={},I=[],r={},V={},N=1,O=1;P={require:function(a){return a.require?a.require:a.require=k.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?a.exports:a.exports=r[a.map.id]={}},module:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){var b=
    m(j.pkgs,a.map.id);return(b?m(j.config,a.map.id+"/"+b.main):m(j.config,a.map.id))||{}},exports:r[a.map.id]}}};$=function(a){this.events=m(aa,a.id)||{};this.map=a;this.shim=m(j.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};$.prototype={init:function(a,b,c,e){e=e||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&&(c=v(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.errback=c;this.inited=
    !0;this.ignore=e.ignore;e.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;k.startTime=(new Date).getTime();var a=this.map;if(this.shim)k.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],v(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()}},load:function(){var a=
    this.map.url;V[a]||(V[a]=!0,k.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var e=this.exports,n=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(J(n)){if(this.events.error&&this.map.isDefine||h.onError!==ca)try{e=k.execCb(c,n,b,e)}catch(d){a=d}else e=k.execCb(c,n,b,e);this.map.isDefine&&((b=this.module)&&void 0!==b.exports&&b.exports!==
    this.exports?e=b.exports:void 0===e&&this.usingExports&&(e=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",w(this.error=a)}else e=n;this.exports=e;if(this.map.isDefine&&!this.ignore&&(r[c]=e,h.onResourceLoad))h.onResourceLoad(k,this.map,this.depMaps);y(c);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=
    !0)}}else this.fetch()}},callPlugin:function(){var a=this.map,b=a.id,d=l(a.prefix);this.depMaps.push(d);u(d,"defined",v(this,function(e){var n,d;d=this.map.name;var g=this.map.parentMap?this.map.parentMap.name:null,C=k.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(e.normalize&&(d=e.normalize(d,function(a){return c(a,g,!0)})||""),e=l(a.prefix+"!"+d,this.map.parentMap),u(e,"defined",v(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),
    d=m(q,e.id)){this.depMaps.push(e);if(this.events.error)d.on("error",v(this,function(a){this.emit("error",a)}));d.enable()}}else n=v(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),n.error=v(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];H(q,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&y(a.map.id)});w(a)}),n.fromText=v(this,function(e,c){var d=a.name,g=l(d),i=Q;c&&(e=c);i&&(Q=!1);s(g);t(j.config,b)&&(j.config[d]=j.config[b]);try{h.exec(e)}catch(D){return w(B("fromtexteval",
    "fromText eval for "+b+" failed: "+D,D,[b]))}i&&(Q=!0);this.depMaps.push(g);k.completeLoad(d);C([d],n)}),e.load(a.name,C,n,j)}));k.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){W[this.map.id]=this;this.enabling=this.enabled=!0;z(this.depMaps,v(this,function(a,b){var c,e;if("string"===typeof a){a=l(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=m(P,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;u(a,"defined",v(this,function(a){this.defineDep(b,
    a);this.check()}));this.errback&&u(a,"error",v(this,this.errback))}c=a.id;e=q[c];!t(P,c)&&(e&&!e.enabled)&&k.enable(a,this)}));H(this.pluginMaps,v(this,function(a){var b=m(q,a.id);b&&!b.enabled&&k.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){z(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};k={config:j,contextName:b,registry:q,defined:r,urlFetched:V,defQueue:I,Module:$,makeModuleMap:l,
    nextTick:h.nextTick,onError:w,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=j.pkgs,c=j.shim,e={paths:!0,config:!0,map:!0};H(a,function(a,b){e[b]?"map"===b?(j.map||(j.map={}),S(j[b],a,!0,!0)):S(j[b],a,!0):j[b]=a});a.shim&&(H(a.shim,function(a,b){K(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=k.makeShimExports(a);c[b]=a}),j.shim=c);a.packages&&(z(a.packages,function(a){a="string"===typeof a?{name:a}:a;b[a.name]={name:a.name,
        location:a.location||a.name,main:(a.main||"main").replace(ka,"").replace(fa,"")}}),j.pkgs=b);H(q,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=l(b))});if(a.deps||a.callback)k.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;a.init&&(b=a.init.apply(ba,arguments));return b||a.exports&&da(a.exports)}},makeRequire:function(a,f){function d(e,c,g){var i,j;f.enableBuildCallback&&(c&&J(c))&&(c.__requireJsBuild=!0);if("string"===typeof e){if(J(c))return w(B("requireargs",
        "Invalid require call"),g);if(a&&t(P,e))return P[e](q[a.id]);if(h.get)return h.get(k,e,a,d);i=l(e,a,!1,!0);i=i.id;return!t(r,i)?w(B("notloaded",'Module name "'+i+'" has not been loaded yet for context: '+b+(a?"":". Use require([])"))):r[i]}M();k.nextTick(function(){M();j=s(l(null,a));j.skipMap=f.skipMap;j.init(e,c,g,{enabled:!0});E()});return d}f=f||{};S(d,{isBrowser:A,toUrl:function(b){var d,f=b.lastIndexOf("."),g=b.split("/")[0];if(-1!==f&&(!("."===g||".."===g)||1<f))d=b.substring(f,b.length),b=
        b.substring(0,f);return k.nameToUrl(c(b,a&&a.id,!0),d,!0)},defined:function(b){return t(r,l(b,a,!1,!0).id)},specified:function(b){b=l(b,a,!1,!0).id;return t(r,b)||t(q,b)}});a||(d.undef=function(b){x();var c=l(b,a,!0),d=m(q,b);delete r[b];delete V[c.url];delete aa[b];d&&(d.events.defined&&(aa[b]=d.events),y(b))});return d},enable:function(a){m(q,a.id)&&s(a).enable()},completeLoad:function(a){var b,c,e=m(j.shim,a)||{},d=e.exports;for(x();I.length;){c=I.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===
        a&&(b=!0);F(c)}c=m(q,a);if(!b&&!t(r,a)&&c&&!c.inited){if(j.enforceDefine&&(!d||!da(d)))return p(a)?void 0:w(B("nodefine","No define call for "+a,null,[a]));F([a,e.deps||[],e.exportsFn])}E()},nameToUrl:function(a,b,c){var d,g,l,i,k,p;if(h.jsExtRegExp.test(a))i=a+(b||"");else{d=j.paths;g=j.pkgs;i=a.split("/");for(k=i.length;0<k;k-=1)if(p=i.slice(0,k).join("/"),l=m(g,p),p=m(d,p)){K(p)&&(p=p[0]);i.splice(0,k,p);break}else if(l){a=a===l.name?l.location+"/"+l.main:l.location;i.splice(0,k,a);break}i=i.join("/");
        i+=b||(/\?/.test(i)||c?"":".js");i=("/"===i.charAt(0)||i.match(/^[\w\+\.\-]+:/)?"":j.baseUrl)+i}return j.urlArgs?i+((-1===i.indexOf("?")?"?":"&")+j.urlArgs):i},load:function(a,b){h.load(k,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||la.test((a.currentTarget||a.srcElement).readyState))R=null,a=L(a),k.completeLoad(a.id)},onScriptError:function(a){var b=L(a);if(!p(b.id))return w(B("scripterror","Script error for: "+b.id,a,[b.id]))}};k.require=k.makeRequire();
    return k}var h,x,y,E,L,F,R,M,s,ga,ma=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,na=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,fa=/\.js$/,ka=/^\.\//;x=Object.prototype;var N=x.toString,ha=x.hasOwnProperty,ja=Array.prototype.splice,A=!!("undefined"!==typeof window&&navigator&&window.document),ea=!A&&"undefined"!==typeof importScripts,la=A&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,Z="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),G={},u={},U=[],Q=
    !1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(J(requirejs))return;u=requirejs;requirejs=void 0}"undefined"!==typeof require&&!J(require)&&(u=require,require=void 0);h=requirejs=function(b,c,d,p){var g,l="_";!K(b)&&"string"!==typeof b&&(g=b,K(c)?(b=c,c=d,d=p):b=[]);g&&g.context&&(l=g.context);(p=m(G,l))||(p=G[l]=h.s.newContext(l));g&&p.configure(g);return p.require(b,c,d)};h.config=function(b){return h(b)};h.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,
    4)}:function(b){b()};require||(require=h);h.version="2.1.6";h.jsExtRegExp=/^\/|:|\?|\.js$/;h.isBrowser=A;x=h.s={contexts:G,newContext:ia};h({});z(["toUrl","undef","defined","specified"],function(b){h[b]=function(){var c=G._;return c.require[b].apply(c,arguments)}});if(A&&(y=x.head=document.getElementsByTagName("head")[0],E=document.getElementsByTagName("base")[0]))y=x.head=E.parentNode;h.onError=ca;h.load=function(b,c,d){var h=b&&b.config||{},g;if(A)return g=h.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml",
    "html:script"):document.createElement("script"),g.type=h.scriptType||"text/javascript",g.charset="utf-8",g.async=!0,g.setAttribute("data-requirecontext",b.contextName),g.setAttribute("data-requiremodule",c),g.attachEvent&&!(g.attachEvent.toString&&0>g.attachEvent.toString().indexOf("[native code"))&&!Z?(Q=!0,g.attachEvent("onreadystatechange",b.onScriptLoad)):(g.addEventListener("load",b.onScriptLoad,!1),g.addEventListener("error",b.onScriptError,!1)),g.src=d,M=g,E?y.insertBefore(g,E):y.appendChild(g),
    M=null,g;if(ea)try{importScripts(d),b.completeLoad(c)}catch(l){b.onError(B("importscripts","importScripts failed for "+c+" at "+d,l,[c]))}};A&&O(document.getElementsByTagName("script"),function(b){y||(y=b.parentNode);if(L=b.getAttribute("data-main"))return s=L,u.baseUrl||(F=s.split("/"),s=F.pop(),ga=F.length?F.join("/")+"/":"./",u.baseUrl=ga),s=s.replace(fa,""),h.jsExtRegExp.test(s)&&(s=L),u.deps=u.deps?u.deps.concat(s):[s],!0});define=function(b,c,d){var h,g;"string"!==typeof b&&(d=c,c=b,b=null);
    K(c)||(d=c,c=null);!c&&J(d)&&(c=[],d.length&&(d.toString().replace(ma,"").replace(na,function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));if(Q){if(!(h=M))R&&"interactive"===R.readyState||O(document.getElementsByTagName("script"),function(b){if("interactive"===b.readyState)return R=b}),h=R;h&&(b||(b=h.getAttribute("data-requiremodule")),g=G[h.getAttribute("data-requirecontext")])}(g?g.defQueue:U).push([b,c,d])};define.amd={jQuery:!0};h.exec=function(b){return eval(b)};
    h(u)}})(this);}
WebGLDebugUtils = function() {

/**
 * Wrapped logging function.
 * @param {string} msg Message to log.
 */
var log = function(msg) {
  if (window.console && window.console.log) {
    window.console.log(msg);
  }
};

/**
 * Which arguements are enums.
 * @type {!Object.<number, string>}
 */
var glValidEnumContexts = {

  // Generic setters and getters

  'enable': { 0:true },
  'disable': { 0:true },
  'getParameter': { 0:true },

  // Rendering

  'drawArrays': { 0:true },
  'drawElements': { 0:true, 2:true },

  // Shaders

  'createShader': { 0:true },
  'getShaderParameter': { 1:true },
  'getProgramParameter': { 1:true },

  // Vertex attributes

  'getVertexAttrib': { 1:true },
  'vertexAttribPointer': { 2:true },

  // Textures

  'bindTexture': { 0:true },
  'activeTexture': { 0:true },
  'getTexParameter': { 0:true, 1:true },
  'texParameterf': { 0:true, 1:true },
  'texParameteri': { 0:true, 1:true, 2:true },
  'texImage2D': { 0:true, 2:true, 6:true, 7:true },
  'texSubImage2D': { 0:true, 6:true, 7:true },
  'copyTexImage2D': { 0:true, 2:true },
  'copyTexSubImage2D': { 0:true },
  'generateMipmap': { 0:true },

  // Buffer objects

  'bindBuffer': { 0:true },
  'bufferData': { 0:true, 2:true },
  'bufferSubData': { 0:true },
  'getBufferParameter': { 0:true, 1:true },

  // Renderbuffers and framebuffers

  'pixelStorei': { 0:true, 1:true },
  'readPixels': { 4:true, 5:true },
  'bindRenderbuffer': { 0:true },
  'bindFramebuffer': { 0:true },
  'checkFramebufferStatus': { 0:true },
  'framebufferRenderbuffer': { 0:true, 1:true, 2:true },
  'framebufferTexture2D': { 0:true, 1:true, 2:true },
  'getFramebufferAttachmentParameter': { 0:true, 1:true, 2:true },
  'getRenderbufferParameter': { 0:true, 1:true },
  'renderbufferStorage': { 0:true, 1:true },

  // Frame buffer operations (clear, blend, depth test, stencil)

  'clear': { 0:true },
  'depthFunc': { 0:true },
  'blendFunc': { 0:true, 1:true },
  'blendFuncSeparate': { 0:true, 1:true, 2:true, 3:true },
  'blendEquation': { 0:true },
  'blendEquationSeparate': { 0:true, 1:true },
  'stencilFunc': { 0:true },
  'stencilFuncSeparate': { 0:true, 1:true },
  'stencilMaskSeparate': { 0:true },
  'stencilOp': { 0:true, 1:true, 2:true },
  'stencilOpSeparate': { 0:true, 1:true, 2:true, 3:true },

  // Culling

  'cullFace': { 0:true },
  'frontFace': { 0:true },
};

/**
 * Map of numbers to names.
 * @type {Object}
 */
var glEnums = null;

/**
 * Initializes this module. Safe to call more than once.
 * @param {!WebGLRenderingContext} ctx A WebGL context. If
 *    you have more than one context it doesn't matter which one
 *    you pass in, it is only used to pull out constants.
 */
function init(ctx) {
  if (glEnums == null) {
    glEnums = { };
    for (var propertyName in ctx) {
      if (typeof ctx[propertyName] == 'number') {
        glEnums[ctx[propertyName]] = propertyName;
      }
    }
  }
}

/**
 * Checks the utils have been initialized.
 */
function checkInit() {
  if (glEnums == null) {
    throw 'WebGLDebugUtils.init(ctx) not called';
  }
}

/**
 * Returns true or false if value matches any WebGL enum
 * @param {*} value Value to check if it might be an enum.
 * @return {boolean} True if value matches one of the WebGL defined enums
 */
function mightBeEnum(value) {
  checkInit();
  return (glEnums[value] !== undefined);
}

/**
 * Gets an string version of an WebGL enum.
 *
 * Example:
 *   var str = WebGLDebugUtil.glEnumToString(ctx.getError());
 *
 * @param {number} value Value to return an enum for
 * @return {string} The string version of the enum.
 */
function glEnumToString(value) {
  checkInit();
  var name = glEnums[value];
  return (name !== undefined) ? name :
      ("*UNKNOWN WebGL ENUM (0x" + value.toString(16) + ")");
}

/**
 * Returns the string version of a WebGL argument.
 * Attempts to convert enum arguments to strings.
 * @param {string} functionName the name of the WebGL function.
 * @param {number} argumentIndx the index of the argument.
 * @param {*} value The value of the argument.
 * @return {string} The value as a string.
 */
function glFunctionArgToString(functionName, argumentIndex, value) {
  var funcInfo = glValidEnumContexts[functionName];
  if (funcInfo !== undefined) {
    if (funcInfo[argumentIndex]) {
      return glEnumToString(value);
    }
  }
  if (value === null) {
    return "null";
  } else if (value === undefined) {
    return "undefined";
  } else {
    return value.toString();
  }
}

/**
 * Converts the arguments of a WebGL function to a string.
 * Attempts to convert enum arguments to strings.
 *
 * @param {string} functionName the name of the WebGL function.
 * @param {number} args The arguments.
 * @return {string} The arguments as a string.
 */
function glFunctionArgsToString(functionName, args) {
  // apparently we can't do args.join(",");
  var argStr = "";
  for (var ii = 0; ii < args.length; ++ii) {
    argStr += ((ii == 0) ? '' : ', ') +
        glFunctionArgToString(functionName, ii, args[ii]);
  }
  return argStr;
};


function makePropertyWrapper(wrapper, original, propertyName) {
  //log("wrap prop: " + propertyName);
  wrapper.__defineGetter__(propertyName, function() {
    return original[propertyName];
  });
  // TODO(gmane): this needs to handle properties that take more than
  // one value?
  wrapper.__defineSetter__(propertyName, function(value) {
    //log("set: " + propertyName);
    original[propertyName] = value;
  });
}

// Makes a function that calls a function on another object.
function makeFunctionWrapper(original, functionName) {
  //log("wrap fn: " + functionName);
  var f = original[functionName];
  return function() {
    //log("call: " + functionName);
    var result = f.apply(original, arguments);
    return result;
  };
}

/**
 * Given a WebGL context returns a wrapped context that calls
 * gl.getError after every command and calls a function if the
 * result is not gl.NO_ERROR.
 *
 * @param {!WebGLRenderingContext} ctx The webgl context to
 *        wrap.
 * @param {!function(err, funcName, args): void} opt_onErrorFunc
 *        The function to call when gl.getError returns an
 *        error. If not specified the default function calls
 *        console.log with a message.
 * @param {!function(funcName, args): void} opt_onFunc The
 *        function to call when each webgl function is called.
 *        You can use this to log all calls for example.
 */
function makeDebugContext(ctx, opt_onErrorFunc, opt_onFunc) {
  init(ctx);
  opt_onErrorFunc = opt_onErrorFunc || function(err, functionName, args) {
        // apparently we can't do args.join(",");
        var argStr = "";
        for (var ii = 0; ii < args.length; ++ii) {
          argStr += ((ii == 0) ? '' : ', ') +
              glFunctionArgToString(functionName, ii, args[ii]);
        }
        log("WebGL error "+ glEnumToString(err) + " in "+ functionName +
            "(" + argStr + ")");
      };

  // Holds booleans for each GL error so after we get the error ourselves
  // we can still return it to the client app.
  var glErrorShadow = { };

  // Makes a function that calls a WebGL function and then calls getError.
  function makeErrorWrapper(ctx, functionName) {
    return function() {
      if (opt_onFunc) {
        opt_onFunc(functionName, arguments);
      }
      var result = ctx[functionName].apply(ctx, arguments);
      var err = ctx.getError();
      if (err != 0) {
        glErrorShadow[err] = true;
        opt_onErrorFunc(err, functionName, arguments);
      }
      return result;
    };
  }

  // Make a an object that has a copy of every property of the WebGL context
  // but wraps all functions.
  var wrapper = {};
  for (var propertyName in ctx) {
    if (typeof ctx[propertyName] == 'function') {
       wrapper[propertyName] = makeErrorWrapper(ctx, propertyName);
     } else {
       makePropertyWrapper(wrapper, ctx, propertyName);
     }
  }

  // Override the getError function with one that returns our saved results.
  wrapper.getError = function() {
    for (var err in glErrorShadow) {
      if (glErrorShadow.hasOwnProperty(err)) {
        if (glErrorShadow[err]) {
          glErrorShadow[err] = false;
          return err;
        }
      }
    }
    return ctx.NO_ERROR;
  };

  return wrapper;
}

function resetToInitialState(ctx) {
  var numAttribs = ctx.getParameter(ctx.MAX_VERTEX_ATTRIBS);
  var tmp = ctx.createBuffer();
  ctx.bindBuffer(ctx.ARRAY_BUFFER, tmp);
  for (var ii = 0; ii < numAttribs; ++ii) {
    ctx.disableVertexAttribArray(ii);
    ctx.vertexAttribPointer(ii, 4, ctx.FLOAT, false, 0, 0);
    ctx.vertexAttrib1f(ii, 0);
  }
  ctx.deleteBuffer(tmp);

  var numTextureUnits = ctx.getParameter(ctx.MAX_TEXTURE_IMAGE_UNITS);
  for (var ii = 0; ii < numTextureUnits; ++ii) {
    ctx.activeTexture(ctx.TEXTURE0 + ii);
    ctx.bindTexture(ctx.TEXTURE_CUBE_MAP, null);
    ctx.bindTexture(ctx.TEXTURE_2D, null);
  }

  ctx.activeTexture(ctx.TEXTURE0);
  ctx.useProgram(null);
  ctx.bindBuffer(ctx.ARRAY_BUFFER, null);
  ctx.bindBuffer(ctx.ELEMENT_ARRAY_BUFFER, null);
  ctx.bindFramebuffer(ctx.FRAMEBUFFER, null);
  ctx.bindRenderbuffer(ctx.RENDERBUFFER, null);
  ctx.disable(ctx.BLEND);
  ctx.disable(ctx.CULL_FACE);
  ctx.disable(ctx.DEPTH_TEST);
  ctx.disable(ctx.DITHER);
  ctx.disable(ctx.SCISSOR_TEST);
  ctx.blendColor(0, 0, 0, 0);
  ctx.blendEquation(ctx.FUNC_ADD);
  ctx.blendFunc(ctx.ONE, ctx.ZERO);
  ctx.clearColor(0, 0, 0, 0);
  ctx.clearDepth(1);
  ctx.clearStencil(-1);
  ctx.colorMask(true, true, true, true);
  ctx.cullFace(ctx.BACK);
  ctx.depthFunc(ctx.LESS);
  ctx.depthMask(true);
  ctx.depthRange(0, 1);
  ctx.frontFace(ctx.CCW);
  ctx.hint(ctx.GENERATE_MIPMAP_HINT, ctx.DONT_CARE);
  ctx.lineWidth(1);
  ctx.pixelStorei(ctx.PACK_ALIGNMENT, 4);
  ctx.pixelStorei(ctx.UNPACK_ALIGNMENT, 4);
  ctx.pixelStorei(ctx.UNPACK_FLIP_Y_WEBGL, false);
  ctx.pixelStorei(ctx.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
  // TODO: Delete this IF.
  if (ctx.UNPACK_COLORSPACE_CONVERSION_WEBGL) {
    ctx.pixelStorei(ctx.UNPACK_COLORSPACE_CONVERSION_WEBGL, ctx.BROWSER_DEFAULT_WEBGL);
  }
  ctx.polygonOffset(0, 0);
  ctx.sampleCoverage(1, false);
  ctx.scissor(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.stencilFunc(ctx.ALWAYS, 0, 0xFFFFFFFF);
  ctx.stencilMask(0xFFFFFFFF);
  ctx.stencilOp(ctx.KEEP, ctx.KEEP, ctx.KEEP);
  ctx.viewport(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.clear(ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT | ctx.STENCIL_BUFFER_BIT);

  // TODO: This should NOT be needed but Firefox fails with 'hint'
  while(ctx.getError());
}

function makeLostContextSimulatingCanvas(canvas) {
  var unwrappedContext_;
  var wrappedContext_;
  var onLost_ = [];
  var onRestored_ = [];
  var wrappedContext_ = {};
  var contextId_ = 1;
  var contextLost_ = false;
  var resourceId_ = 0;
  var resourceDb_ = [];
  var numCallsToLoseContext_ = 0;
  var numCalls_ = 0;
  var canRestore_ = false;
  var restoreTimeout_ = 0;

  // Holds booleans for each GL error so can simulate errors.
  var glErrorShadow_ = { };

  canvas.getContext = function(f) {
    return function() {
      var ctx = f.apply(canvas, arguments);
      // Did we get a context and is it a WebGL context?
      if (ctx instanceof WebGLRenderingContext) {
        if (ctx != unwrappedContext_) {
          if (unwrappedContext_) {
            throw "got different context"
          }
          unwrappedContext_ = ctx;
          wrappedContext_ = makeLostContextSimulatingContext(unwrappedContext_);
        }
        return wrappedContext_;
      }
      return ctx;
    }
  }(canvas.getContext);

  function wrapEvent(listener) {
    if (typeof(listener) == "function") {
      return listener;
    } else {
      return function(info) {
        listener.handleEvent(info);
      }
    }
  }

  var addOnContextLostListener = function(listener) {
    onLost_.push(wrapEvent(listener));
  };

  var addOnContextRestoredListener = function(listener) {
    onRestored_.push(wrapEvent(listener));
  };


  function wrapAddEventListener(canvas) {
    var f = canvas.addEventListener;
    canvas.addEventListener = function(type, listener, bubble) {
      switch (type) {
        case 'webglcontextlost':
          addOnContextLostListener(listener);
          break;
        case 'webglcontextrestored':
          addOnContextRestoredListener(listener);
          break;
        default:
          f.apply(canvas, arguments);
      }
    };
  }

  wrapAddEventListener(canvas);

  canvas.loseContext = function() {
    if (!contextLost_) {
      contextLost_ = true;
      numCallsToLoseContext_ = 0;
      ++contextId_;
      while (unwrappedContext_.getError());
      clearErrors();
      glErrorShadow_[unwrappedContext_.CONTEXT_LOST_WEBGL] = true;
      var event = makeWebGLContextEvent("context lost");
      var callbacks = onLost_.slice();
      setTimeout(function() {
          //log("numCallbacks:" + callbacks.length);
          for (var ii = 0; ii < callbacks.length; ++ii) {
            //log("calling callback:" + ii);
            callbacks[ii](event);
          }
          if (restoreTimeout_ >= 0) {
            setTimeout(function() {
                canvas.restoreContext();
              }, restoreTimeout_);
          }
        }, 0);
    }
  };

  canvas.restoreContext = function() {
    if (contextLost_) {
      if (onRestored_.length) {
        setTimeout(function() {
            if (!canRestore_) {
              throw "can not restore. webglcontestlost listener did not call event.preventDefault";
            }
            freeResources();
            resetToInitialState(unwrappedContext_);
            contextLost_ = false;
            numCalls_ = 0;
            canRestore_ = false;
            var callbacks = onRestored_.slice();
            var event = makeWebGLContextEvent("context restored");
            for (var ii = 0; ii < callbacks.length; ++ii) {
              callbacks[ii](event);
            }
          }, 0);
      }
    }
  };

  canvas.loseContextInNCalls = function(numCalls) {
    if (contextLost_) {
      throw "You can not ask a lost contet to be lost";
    }
    numCallsToLoseContext_ = numCalls_ + numCalls;
  };

  canvas.getNumCalls = function() {
    return numCalls_;
  };

  canvas.setRestoreTimeout = function(timeout) {
    restoreTimeout_ = timeout;
  };

  function isWebGLObject(obj) {
    //return false;
    return (obj instanceof WebGLBuffer ||
            obj instanceof WebGLFramebuffer ||
            obj instanceof WebGLProgram ||
            obj instanceof WebGLRenderbuffer ||
            obj instanceof WebGLShader ||
            obj instanceof WebGLTexture);
  }

  function checkResources(args) {
    for (var ii = 0; ii < args.length; ++ii) {
      var arg = args[ii];
      if (isWebGLObject(arg)) {
        return arg.__webglDebugContextLostId__ == contextId_;
      }
    }
    return true;
  }

  function clearErrors() {
    var k = Object.keys(glErrorShadow_);
    for (var ii = 0; ii < k.length; ++ii) {
      delete glErrorShadow_[k];
    }
  }

  function loseContextIfTime() {
    ++numCalls_;
    if (!contextLost_) {
      if (numCallsToLoseContext_ == numCalls_) {
        canvas.loseContext();
      }
    }
  }

  // Makes a function that simulates WebGL when out of context.
  function makeLostContextFunctionWrapper(ctx, functionName) {
    var f = ctx[functionName];
    return function() {
      // log("calling:" + functionName);
      // Only call the functions if the context is not lost.
      loseContextIfTime();
      if (!contextLost_) {
        //if (!checkResources(arguments)) {
        //  glErrorShadow_[wrappedContext_.INVALID_OPERATION] = true;
        //  return;
        //}

        var result = f.apply(ctx, arguments);
        return result;
      }
    };
  }

  function freeResources() {
    for (var ii = 0; ii < resourceDb_.length; ++ii) {
      var resource = resourceDb_[ii];
      if (resource instanceof WebGLBuffer) {
        unwrappedContext_.deleteBuffer(resource);
      } else if (resource instanceof WebGLFramebuffer) {
        unwrappedContext_.deleteFramebuffer(resource);
      } else if (resource instanceof WebGLProgram) {
        unwrappedContext_.deleteProgram(resource);
      } else if (resource instanceof WebGLRenderbuffer) {
        unwrappedContext_.deleteRenderbuffer(resource);
      } else if (resource instanceof WebGLShader) {
        unwrappedContext_.deleteShader(resource);
      } else if (resource instanceof WebGLTexture) {
        unwrappedContext_.deleteTexture(resource);
      }
    }
  }

  function makeWebGLContextEvent(statusMessage) {
    return {
      statusMessage: statusMessage,
      preventDefault: function() {
          canRestore_ = true;
        }
    };
  }

  return canvas;

  function makeLostContextSimulatingContext(ctx) {
    // copy all functions and properties to wrapper
    for (var propertyName in ctx) {
      if (typeof ctx[propertyName] == 'function') {
         wrappedContext_[propertyName] = makeLostContextFunctionWrapper(
             ctx, propertyName);
       } else {
         makePropertyWrapper(wrappedContext_, ctx, propertyName);
       }
    }

    // Wrap a few functions specially.
    wrappedContext_.getError = function() {
      loseContextIfTime();
      if (!contextLost_) {
        var err;
        while (err = unwrappedContext_.getError()) {
          glErrorShadow_[err] = true;
        }
      }
      for (var err in glErrorShadow_) {
        if (glErrorShadow_[err]) {
          delete glErrorShadow_[err];
          return err;
        }
      }
      return wrappedContext_.NO_ERROR;
    };

    var creationFunctions = [
      "createBuffer",
      "createFramebuffer",
      "createProgram",
      "createRenderbuffer",
      "createShader",
      "createTexture"
    ];
    for (var ii = 0; ii < creationFunctions.length; ++ii) {
      var functionName = creationFunctions[ii];
      wrappedContext_[functionName] = function(f) {
        return function() {
          loseContextIfTime();
          if (contextLost_) {
            return null;
          }
          var obj = f.apply(ctx, arguments);
          obj.__webglDebugContextLostId__ = contextId_;
          resourceDb_.push(obj);
          return obj;
        };
      }(ctx[functionName]);
    }

    var functionsThatShouldReturnNull = [
      "getActiveAttrib",
      "getActiveUniform",
      "getBufferParameter",
      "getContextAttributes",
      "getAttachedShaders",
      "getFramebufferAttachmentParameter",
      "getParameter",
      "getProgramParameter",
      "getProgramInfoLog",
      "getRenderbufferParameter",
      "getShaderParameter",
      "getShaderInfoLog",
      "getShaderSource",
      "getTexParameter",
      "getUniform",
      "getUniformLocation",
      "getVertexAttrib"
    ];
    for (var ii = 0; ii < functionsThatShouldReturnNull.length; ++ii) {
      var functionName = functionsThatShouldReturnNull[ii];
      wrappedContext_[functionName] = function(f) {
        return function() {
          loseContextIfTime();
          if (contextLost_) {
            return null;
          }
          return f.apply(ctx, arguments);
        }
      }(wrappedContext_[functionName]);
    }

    var isFunctions = [
      "isBuffer",
      "isEnabled",
      "isFramebuffer",
      "isProgram",
      "isRenderbuffer",
      "isShader",
      "isTexture"
    ];
    for (var ii = 0; ii < isFunctions.length; ++ii) {
      var functionName = isFunctions[ii];
      wrappedContext_[functionName] = function(f) {
        return function() {
          loseContextIfTime();
          if (contextLost_) {
            return false;
          }
          return f.apply(ctx, arguments);
        }
      }(wrappedContext_[functionName]);
    }

    wrappedContext_.checkFramebufferStatus = function(f) {
      return function() {
        loseContextIfTime();
        if (contextLost_) {
          return wrappedContext_.FRAMEBUFFER_UNSUPPORTED;
        }
        return f.apply(ctx, arguments);
      };
    }(wrappedContext_.checkFramebufferStatus);

    wrappedContext_.getAttribLocation = function(f) {
      return function() {
        loseContextIfTime();
        if (contextLost_) {
          return -1;
        }
        return f.apply(ctx, arguments);
      };
    }(wrappedContext_.getAttribLocation);

    wrappedContext_.getVertexAttribOffset = function(f) {
      return function() {
        loseContextIfTime();
        if (contextLost_) {
          return 0;
        }
        return f.apply(ctx, arguments);
      };
    }(wrappedContext_.getVertexAttribOffset);

    wrappedContext_.isContextLost = function() {
      return contextLost_;
    };

    return wrappedContext_;
  }
}

return {
    /**
     * Initializes this module. Safe to call more than once.
     * @param {!WebGLRenderingContext} ctx A WebGL context. If
    }
   *    you have more than one context it doesn't matter which one
   *    you pass in, it is only used to pull out constants.
   */
  'init': init,

  /**
   * Returns true or false if value matches any WebGL enum
   * @param {*} value Value to check if it might be an enum.
   * @return {boolean} True if value matches one of the WebGL defined enums
   */
  'mightBeEnum': mightBeEnum,

  /**
   * Gets an string version of an WebGL enum.
   *
   * Example:
   *   WebGLDebugUtil.init(ctx);
   *   var str = WebGLDebugUtil.glEnumToString(ctx.getError());
   *
   * @param {number} value Value to return an enum for
   * @return {string} The string version of the enum.
   */
  'glEnumToString': glEnumToString,

  /**
   * Converts the argument of a WebGL function to a string.
   * Attempts to convert enum arguments to strings.
   *
   * Example:
   *   WebGLDebugUtil.init(ctx);
   *   var str = WebGLDebugUtil.glFunctionArgToString('bindTexture', 0, gl.TEXTURE_2D);
   *
   * would return 'TEXTURE_2D'
   *
   * @param {string} functionName the name of the WebGL function.
   * @param {number} argumentIndx the index of the argument.
   * @param {*} value The value of the argument.
   * @return {string} The value as a string.
   */
  'glFunctionArgToString': glFunctionArgToString,

  /**
   * Converts the arguments of a WebGL function to a string.
   * Attempts to convert enum arguments to strings.
   *
   * @param {string} functionName the name of the WebGL function.
   * @param {number} args The arguments.
   * @return {string} The arguments as a string.
   */
  'glFunctionArgsToString': glFunctionArgsToString,

  /**
   * Given a WebGL context returns a wrapped context that calls
   * gl.getError after every command and calls a function if the
   * result is not NO_ERROR.
   *
   * You can supply your own function if you want. For example, if you'd like
   * an exception thrown on any GL error you could do this
   *
   *    function throwOnGLError(err, funcName, args) {
   *      throw WebGLDebugUtils.glEnumToString(err) +
   *            " was caused by call to " + funcName;
   *    };
   *
   *    ctx = WebGLDebugUtils.makeDebugContext(
   *        canvas.getContext("webgl"), throwOnGLError);
   *
   * @param {!WebGLRenderingContext} ctx The webgl context to wrap.
   * @param {!function(err, funcName, args): void} opt_onErrorFunc The function
   *     to call when gl.getError returns an error. If not specified the default
   *     function calls console.log with a message.
   * @param {!function(funcName, args): void} opt_onFunc The
   *     function to call when each webgl function is called. You
   *     can use this to log all calls for example.
   */
  'makeDebugContext': makeDebugContext,

  /**
   * Given a canvas element returns a wrapped canvas element that will
   * simulate lost context. The canvas returned adds the following functions.
   *
   * loseContext:
   *   simulates a lost context event.
   *
   * restoreContext:
   *   simulates the context being restored.
   *
   * lostContextInNCalls:
   *   loses the context after N gl calls.
   *
   * getNumCalls:
   *   tells you how many gl calls there have been so far.
   *
   * setRestoreTimeout:
   *   sets the number of milliseconds until the context is restored
   *   after it has been lost. Defaults to 0. Pass -1 to prevent
   *   automatic restoring.
   *
   * @param {!Canvas} canvas The canvas element to wrap.
   */
  'makeLostContextSimulatingCanvas': makeLostContextSimulatingCanvas,

  /**
   * Resets a context to the initial state.
   * @param {!WebGLRenderingContext} ctx The webgl context to
   *     reset.
   */
  'resetToInitialState': resetToInitialState
};

}();
/**
 * @class Generic map of IDs to items - can generate own IDs or accept given IDs. IDs should be strings in order to not
 * clash with internally generated IDs, which are numbers.
 * @private
 */
var SceneJS_Map = function(items, _baseId) {

    /**
     * @property Items in this map
     */
    this.items = items || [];


    var baseId = _baseId || 0;
    var lastUniqueId = baseId + 1;

    /**
     * Adds an item to the map and returns the ID of the item in the map. If an ID is given, the item is
     * mapped to that ID. Otherwise, the map automatically generates the ID and maps to that.
     *
     * id = myMap.addItem("foo") // ID internally generated
     *
     * id = myMap.addItem("foo", "bar") // ID is "foo"
     *
     */
    this.addItem = function() {

        var item;

        if (arguments.length == 2) {

            var id = arguments[0];

            item = arguments[1];

            if (this.items[id]) { // Won't happen if given ID is string
                throw SceneJS_error.fatalError(SceneJS.errors.ID_CLASH, "ID clash: '" + id + "'");
            }

            this.items[id] = item;

            return id;

        } else {

            while (true) {

                item = arguments[0];
                var findId = lastUniqueId++;

                if (!this.items[findId]) {
                    this.items[findId] = item;
                    return findId;
                }
            }
        }
    };

    /**
     * Removes the item of the given ID from the map
     */
    this.removeItem = function(id) {
        delete this.items[id];
    };
};/**
 * The SceneJS object.
 */
var SceneJS = new (function () {

    /**
     * This SceneJS version
     */
    this.VERSION = '3.2';

    this._baseStateId = 0;

    // Pub/sub support
    this._handleMap = new SceneJS_Map(); // Subscription handle pool
    this._topicSubs = {}; // A [handle -> callback] map for each topic name
    this._handleTopics = {}; // Maps handles to topic names
    this._topicPubs = {}; // Maps topics to publications

    /**
     * @property {SceneJS_Engine} Engines currently in existance
     */
    this._engines = {};

    this._engineIds = new SceneJS_Map();


    /**
     * Publishes to a topic.
     *
     * Immediately notifies existing subscriptions to that topic, retains the publication to give to
     * any subsequent notifications on that topic as they are made.
     *
     * @param {String} topic Publication topic
     * @param {Object} pub The publication
     * @param {Boolean} [forget] When true, the publication will be sent to subscribers then forgotten, so that any
     * subsequent subscribers will not receive it
     * @private
     */
    this.publish = function (topic, pub, forget) {
        if (!forget) {
            this._topicPubs[topic] = pub; // Save notification
        }
        var subsForTopic = this._topicSubs[topic];
        if (subsForTopic) { // Notify subscriptions
            for (var handle in subsForTopic) {
                if (subsForTopic.hasOwnProperty(handle)) {
                    subsForTopic[handle].call(this, pub);
                }
            }
        }
    };

    /**
     * Removes a topic publication
     *
     * Immediately notifies existing subscriptions to that topic, sending them each a null publication.
     *
     * @param topic Publication topic
     * @private
     */
    this.unpublish = function (topic) {
        var subsForTopic = this._topicSubs[topic];
        if (subsForTopic) { // Notify subscriptions
            for (var handle in subsForTopic) {
                if (subsForTopic.hasOwnProperty(handle)) {
                    subsForTopic[handle].call(this, null);
                }
            }
        }
        delete this._topicPubs[topic];
    };


    /**
     * Listen for data changes at a particular location
     *
     * <p>Your callback will be triggered for
     * the initial data and again whenever the data changes. Use {@link #off} to stop receiving updates.</p>
     *
     * <p>The callback is be called with SceneJS as scope.</p>
     *
     * @param {String} location Publication location
     * @param {Function(data)} callback Called when fresh data is available at the location
     * @return {String} Handle to the subscription, which may be used to unsubscribe with {@link #off}.
     */
    this.on = function (topic, callback) {
        var subsForTopic = this._topicSubs[topic];
        if (!subsForTopic) {
            subsForTopic = {};
            this._topicSubs[topic] = subsForTopic;
        }
        var handle = this._handleMap.addItem(); // Create unique handle
        subsForTopic[handle] = callback;
        this._handleTopics[handle] = topic;
        var pub = this._topicPubs[topic];
        if (pub) { // A publication exists, notify callback immediately
            callback.call(this, pub);
        }
        return handle;
    };

    /**
     * Unsubscribes from a publication that was previously made with {@link #on}.
     * @param handle Publication handle
     */
    this.off = function (handle) {
        var topic = this._handleTopics[handle];
        if (topic) {
            delete this._handleTopics[handle];
            var topicSubs = this._topicSubs[topic];
            if (topicSubs) {
                delete topicSubs[handle];
            }
            this._handleMap.removeItem(handle); // Release handle
            if (topic == "rendered") {
                this._engine.branchDirty(this);
            }
        }
    };

    /**
     * Listens for exactly one data update at the specified location, and then stops listening.
     * <p>This is equivalent to calling {@link #on}, and then calling {@link #off} inside the callback function.</p>
     * @param {String} location Data location to listen to
     * @param {Function(data)} callback Called when fresh data is available at the location
     */
    this.once = function (topic, callback) {
        var self = this;
        var sub = this.on(topic,
            function (pub) {
                self.off(sub);
                callback(pub);
            });
    };

    /**
     * Creates a new scene from the given JSON description and begins rendering it
     *
     * @param {String} json JSON scene description
     * @param {*} options Optional options
     * @param {Boolean} options.simulateWebGLContextLost Set true to enable simulation of lost WebGL context (has performance impact)
     * @returns {SceneJS.Scene} New scene
     */
    this.createScene = function (json, options) {

       json = json || {};

        if (json.id) {
            if (this._engines[json.id]) {
                throw SceneJS_error.fatalError(
                    SceneJS.errors.ILLEGAL_NODE_CONFIG,
                    "Scene already exists with this ID: '" + json.id + "'");
            }
            this._engineIds.addItem(json.id, {});
        } else {
            json.id = this._engineIds.addItem({});
        }

        var engine = new SceneJS_Engine(json, options);

        this._engines[json.id] = engine;

        SceneJS_events.fireEvent(SceneJS_events.SCENE_CREATED, {    // Notify modules that need to know about new scene
            engine:engine
        });

        engine.scene.start(options);

        return engine.scene;
    };

    /**
     * Gets an existing scene
     *
     * @param {String} sceneId ID of target scene
     * @deprecated
     * @returns {SceneJS.Scene} The selected scene
     */
    this.scene = function (sceneId) {

        var engine = this._engines[sceneId];

        return engine ? engine.scene : null;
    };

    /**
     * Gets an existing scene.
     *
     * When no scene ID is given, the first scene found is returned. This is a shorthand convenience for
     * easy scripting when only one scene is defined.
     *
     * @param {String} [sceneId] ID of target scene
     * @returns {SceneJS.Scene} The selected scene
     */
    this.getScene = function (sceneId) {

        if (!sceneId) {
            for (var sceneId in this._engines) {
                if (this._engines.hasOwnProperty(sceneId)) {
                    return this._engines[sceneId].scene;
                }
            }
        }

        var engine = this._engines[sceneId];

        return engine ? engine.scene : null;
    };

    /**
     * Gets existing scenes
     *
     * @returns  Existing scenes, mapped to their IDs
     */
    this.getScenes = function () {

        var scenes = {};

        for (var sceneId in this._engines) {
            if (this._engines.hasOwnProperty(sceneId)) {
                scenes[sceneId] = this._engines[sceneId].scene;
            }
        }

        return scenes;
    };

    /**
     * Tests if the given object is an array
     * @private
     */
    this._isArray = function (testObject) {
        return testObject && !(testObject.propertyIsEnumerable('length'))
            && typeof testObject === 'object' && typeof testObject.length === 'number';
    };

    /**
     *
     */
    this._shallowClone = function (o) {
        var o2 = {};
        for (var name in o) {
            if (o.hasOwnProperty(name)) {
                o2[name] = o[name];
            }
        }
        return o2;
    };

    /**
     * Add properties of o to o2 where undefined or null on o2
     * @private
     */
    this._applyIf = function (o, o2) {
        for (var name in o) {
            if (o.hasOwnProperty(name)) {
                if (o2[name] == undefined || o2[name] == null) {
                    o2[name] = o[name];
                }
            }
        }
        return o2;
    };

    /**
     * Add properties of o to o2, overwriting them on o2 if already there.
     * The optional clear flag causes properties on o2 to be cleared first
     * @private
     */
    this._apply = function (o, o2, clear) {
        var name;
        if (clear) {
            for (name in o2) {
                if (o2.hasOwnProperty(name)) {
                    delete o2[name];
                }
            }
        }
        for (name in o) {
            if (o.hasOwnProperty(name)) {
                o2[name] = o[name];
            }
        }
        return o2;
    };


    /**
     * Resets SceneJS, destroying all existing scenes
     */
    this.reset = function () {

        var temp = [];

        for (var id in this._engines) { // Collect engines to destroy
            if (this._engines.hasOwnProperty(id)) {

                temp.push(this._engines[id]);

                delete this._engines[id];

                this._engineIds.removeItem(id);
            }
        }

        while (temp.length > 0) { // Destroy the engines
            temp.pop().destroy();
        }

        SceneJS_events.fireEvent(SceneJS_events.RESET);
    };

})();
// Configure RequireJS to find plugins relative to plugins location
(function () {

    var pluginPath;

    SceneJS.on("configs",
        function (configs) {
            if (configs.pluginPath != pluginPath) {
                pluginPath = configs.pluginPath;
                var libPath = pluginPath + "/lib";
                require.config({
                    paths:{
                        "scenejsPluginDeps":libPath
                    }
                });
            }
        });
})();/**
 *  @private
 */
var SceneJS_eventManager = function () {

    this._handlerIds = new SceneJS_Map();

    this.typeHandlers = {};
};

/**
 *
 */
SceneJS_eventManager.prototype.createEvent = function (type) {

    if (this.typeHandlers[type]) {
        return;
    }

    this.typeHandlers[type] = {
        handlers:{},
        numSubs:0
    };
};

/**
 * Subscribes to an event defined on this event manager
 *
 * @param {String} type Event type one of the values in SceneJS_events
 * @param {Function} callback Handler function that will accept whatever parameter object accompanies the event
 * @return {String} handle Handle to the event binding
 */
SceneJS_eventManager.prototype.onEvent = function (type, callback) {

    var handlersForType = this.typeHandlers[type] || (this.typeHandlers[type] = {
        handlers:{},
        numSubs:0
    });

    var handlerId = this._handlerIds.addItem(type);

    var handlers = handlersForType.handlers;
    handlers[handlerId] = callback;
    handlersForType.numSubs++;

    return handlerId;
};

/**
 *
 */
SceneJS_eventManager.prototype.fireEvent = function (type, params) {

    var handlersForType = this.typeHandlers[type] || (this.typeHandlers[type] = {
        handlers:{},
        numSubs:0
    });

    if (handlersForType.numSubs > 0) {

        var handlers = handlersForType.handlers;

        for (var handlerId in handlers) {
            if (handlers.hasOwnProperty(handlerId)) {
                handlers[handlerId](params);
            }
        }
    }
};

/**
 * Unsubscribes to an event previously subscribed to on this manager
 *
 * @param {String} handlerId Subscription handle
 */
SceneJS_eventManager.prototype.unEvent = function (handlerId) {

    var type = this._handlerIds.items[handlerId];
    if (!type) {
        return;
    }

    this._handlerIds.removeItem(handlerId);

    var handlers = this.typeHandlers[type];

    if (!handlers) {
        return;
    }

    delete handlers[handlerId];
    this.typeHandlers[type].numSubs--;
};
/**
 * SceneJS plugin registry
 */
SceneJS.Plugins = new (function () {

    // Plugin map for each node type
    var nodePlugins = {};

    // Subscribers to plugins
    var pluginSubs = {};

    /**
     * Installs a plugin into SceneJS
     * @param {String} nodeType Node type name
     * @param {String} pluginType Plugin type name
     * @param [{String}] deps List of URLs of JavaScript files that the plugin depends on
     * @param {Function} plugin Plugin constructor
     */
    this.addPlugin = function () {
        var nodeType = arguments[0];
        var pluginType = arguments[1];
        var deps;
        var plugin;
        if (arguments.length == 4) {
            deps = arguments[2];
            plugin = arguments[3];
        } else {
            plugin = arguments[2];
        }
        addPlugin(nodeType, pluginType, deps, plugin);
    };

    function addPlugin(nodeType, pluginType, deps, plugin) {
        var plugins = nodePlugins[nodeType] || (nodePlugins[nodeType] = {});
        plugins[pluginType] = plugin;
        // Load dependencies, if any
        loadDeps(deps,
            0,
            function () {
                // Notify and unsubscribe subscribers
                var subId = nodeType + pluginType;
                var subs = pluginSubs[subId] || (pluginSubs[subId] = []);
                while (subs.length > 0) {
                    subs.pop()(plugin);
                }
                delete pluginSubs[subId];
            });
    }

    // Loads list of dependencies, synchronously and in order
    function loadDeps(deps, i, ok) {
        if (!deps || i >= deps.length) {
            ok();
            return;
        }
        var src = deps[i];
        var pluginPath = SceneJS_configsModule.configs.pluginPath;
        if (!pluginPath) {
            throw "no pluginPath config"; // Build script error - should create this config
        }
        src = pluginPath + "/" + src;
        loadScript(src,
            function () {
                loadDeps(deps, i + 1, ok);
            });
    }

    /**
     * Tests if given plugin is installed
     */
    this.hasPlugin = function (nodeType, pluginType) {
        var plugins = nodePlugins[nodeType];
        return (plugins && !!plugins[pluginType]);
    };

    /**
     * Returns installed plugin of given type and ID
     */
    this.getPlugin = function (nodeType, pluginType, ok) {
        var plugins = nodePlugins[nodeType];
        if (plugins) {
            var plugin = plugins[pluginType];
            if (plugin) {
                ok(plugin);
                return;
            }
        }
        var subId = nodeType + pluginType;
        var subs = pluginSubs[subId] || (pluginSubs[subId] = []);
        subs.push(ok);
        if (subs.length > 1) { // Not first sub
            return;
        }
        var self = this;
        var pluginPath = SceneJS_configsModule.configs.pluginPath;
        if (!pluginPath) {
            throw "no pluginPath config"; // Build script error - should create this config
        }
        var pluginFilePath = pluginPath + "/" + nodeType + "/" + pluginType + ".js";
        loadScript(pluginFilePath);
    };

    function loadScript(src, ok) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (script.readyState) {  //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" ||
                    script.readyState == "complete") {
                    script.onreadystatechange = null;
                    if (ok) {
                        ok();
                    }
                }
            };
        } else {  //Others
            script.onload = function () {
                if (ok) {
                    ok();
                }
            };
        }
        script.src = src;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

})();/**
 *  @private
 */
var SceneJS_events = new (function () {

    this.ERROR = 0;
    this.RESET = 1;                         // SceneJS framework reset
    this.NODE_CREATED = 2;                 // Scene has just been created
    this.SCENE_CREATED = 3;                 // Scene has just been created
    this.SCENE_COMPILING = 4;               // Scene about to be compiled and drawn
    this.SCENE_DESTROYED = 5;               // Scene just been destroyed
    this.OBJECT_COMPILING = 6;
    this.WEBGL_CONTEXT_LOST = 7;
    this.WEBGL_CONTEXT_RESTORED = 8;

    /* Priority queue for each type of event
     */
    var events = [];

    /**
     * Registers a handler for the given event and returns a subscription handle
     *
     * The handler can be registered with an optional priority number which specifies the order it is
     * called among the other handler already registered for the event.
     *
     * So, with n being the number of commands registered for the given event:
     *
     * (priority <= 0)      - command will be the first called
     * (priority >= n)      - command will be the last called
     * (0 < priority < n)   - command will be called at the order given by the priority
     * @private
     * @param type Event type - one of the values in SceneJS_events
     * @param command - Handler function that will accept whatever parameter object accompanies the event
     * @param priority - Optional priority number (see above)
     * @return {String} - Subscription handle
     */
    this.addListener = function (type, command, priority) {

        var list = events[type];

        if (!list) {
            list = [];
            events[type] = list;
        }

        var handler = {
            command:command,
            priority:(priority == undefined) ? list.length : priority
        };

        var index = -1;

        for (var i = 0, len = list.length; i < len; i++) {
            if (!list[i]) {
                index = i;
                break;
            }
        }

        if (index < 0) {
            list.push(handler);
            index = list.length - 1;
        }

//
//        for (var i = 0; i < list.length; i++) {
//            if (list[i].priority > handler.priority) {
//                list.splice(i, 0, handler);
//                return i;
//            }
//        }


        var handle = type + "." + index;

        return handle;
    };

    /**
     * Removes a listener
     * @param handle Subscription handle
     */
    this.removeListener = function (handle) {

        var lastIdx = handle.lastIndexOf(".");

        var type = parseInt(handle.substr(0, lastIdx));
        var index = parseInt(handle.substr(lastIdx + 1));

        var list = events[type];

        if (!list) {
            return;
        }

        delete list[index];
    };

    /**
     * @private
     */
    this.fireEvent = function (type, params) {

        var list = events[type];

        if (list) {
            params = params || {};
            for (var i = 0; i < list.length; i++) {
                if (list[i]) {
                    list[i].command(params);
                }
            }
        }
    };

})();


/**
 * Subscribe to SceneJS events
 * @deprecated
 */
SceneJS.bind = function (name, func) {
    switch (name) {

        case "error" :

            return SceneJS_events.addListener(SceneJS_events.ERROR, func);
            break;

        case "reset" :

            return SceneJS_events.addListener(
                SceneJS_events.RESET,
                function () {
                    func();
                });
            break;

        case "webglcontextlost" :

            return SceneJS_events.addListener(
                SceneJS_events.WEBGL_CONTEXT_LOST,
                function (params) {
                    func(params);
                });
            break;

        case "webglcontextrestored" :

            return SceneJS_events.addListener(
                SceneJS_events.WEBGL_CONTEXT_RESTORED,
                function (params) {
                    func(params);
                });
            break;

        default:
            throw SceneJS_error.fatalError("SceneJS.bind - this event type not supported: '" + name + "'");
    }
};

/* Subscribe to SceneJS events
 * @deprecated
 */
SceneJS.onEvent = SceneJS.bind;

/* Unsubscribe from event
 */
SceneJS.unEvent = function (handle) {
    return SceneJS_events.removeListener(handle);
};

SceneJS.subscribe = SceneJS.addListener = SceneJS.onEvent = SceneJS.bind;

SceneJS.unsubscribe = SceneJS.unEvent;


SceneJS.on = SceneJS.onEvent;
SceneJS.off = SceneJS.unEvent;



/**
 *
 */
var SceneJS_Canvas = function (id, canvasId, contextAttr, options) {

    /**
     * ID of this canvas
     */
    this.canvasId;

    if (!canvasId) {
        // Automatic default canvas
        canvasId = "canvas-" + id;
        var body = document.getElementsByTagName("body")[0];
        var div = document.createElement('div');
        var style = div.style;
        style.height = "100%";
        style.width = "100%";
        style.padding = "0";
        style.margin = "0";
        style.left = "0";
        style.top = "0";
        style.position = "absolute";
        // style["z-index"] = "10000";
        div.innerHTML += '<canvas id="' + canvasId + '" style="width: 100%; height: 100%; margin: 0; padding: 0;"></canvas>';
        body.appendChild(div);
    }

    // Bind to canvas
    var canvas = document.getElementById(canvasId);
    if (!canvas) {
        throw SceneJS_error.fatalError(SceneJS.errors.CANVAS_NOT_FOUND,
            "SceneJS.Scene attribute 'canvasId' does not match any elements in the page");
    }
    this.canvasId = canvasId;

    /**
     * WebGL context options
     */
    this.options = options || {};

    this.canvas = (this.options.simulateWebGLContextLost)
        ? WebGLDebugUtils.makeLostContextSimulatingCanvas(canvas)
        : canvas;

    // If the canvas uses css styles to specify the sizes make sure the basic
    // width and height attributes match or the WebGL context will use 300 x 150

    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;

    /**
     * Attributes given when initialising the WebGL context
     */
    this.contextAttr = contextAttr;

    /**
     * The WebGL context
     */
    this.gl = null;

    this.initWebGL();
};

/**
 * Names of recognised WebGL contexts
 */
SceneJS_Canvas.prototype._WEBGL_CONTEXT_NAMES = [
    "webgl",
    "experimental-webgl",
    "webkit-3d",
    "moz-webgl",
    "moz-glweb20"
];

/**
 * Initialise the WebGL context

 */
SceneJS_Canvas.prototype.initWebGL = function () {

    for (var i = 0; !this.gl && i < this._WEBGL_CONTEXT_NAMES.length; i++) {
        try {
            this.gl = this.canvas.getContext(this._WEBGL_CONTEXT_NAMES[i], this.contextAttr);

        } catch (e) { // Try with next context name
        }
    }

    if (!this.gl) {
        throw SceneJS_error.fatalError(
            SceneJS.errors.WEBGL_NOT_SUPPORTED,
            'Failed to get a WebGL context');
    }

//    this.gl.clearColor(1.0, 1.0, 1.0, 1.0);
    this.gl.clearDepth(1.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.disable(this.gl.CULL_FACE);
    this.gl.depthRange(0, 1);
    this.gl.disable(this.gl.SCISSOR_TEST);
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
};


/**
 * Simulate a lost WebGL context.
 * Only works if the simulateWebGLContextLost was given as an option to the canvas' constructor.
 */
SceneJS_Canvas.prototype.loseWebGLContext = function () {
    if (this.options.simulateWebGLContextLost) {
        this.canvas.loseContext();
    }
};


/**
 * @class A container for a scene graph and its display
 *
 *
 * @private
 */
var SceneJS_Engine = function (json, options) {

    json.type = "scene"; // The type property supplied by user on the root JSON node is ignored - would always be 'scene'

    /**
     * ID of this engine, also the ID of this engine's {@link SceneJS.Scene}
     * @type String
     */
    this.id = json.id;

    /**
     * Canvas and GL context for this engine
     */
    this.canvas = new SceneJS_Canvas(this.id, json.canvasId, json.contextAttr, options);

    /**
     * Manages firing of and subscription to events
     */
    this.events = new SceneJS_eventManager();

    /**
     * State core factory - creates, stores, shares and destroys cores
     */
    this._coreFactory = new SceneJS_CoreFactory();

    /**
     * Manages creation, recycle and destruction of {@link SceneJS.Node} instances for this engine's scene graph
     */
    this._nodeFactory = new SceneJS_NodeFactory();

    /**
     * The engine's scene renderer
     * @type SceneJS_Display
     */
    this.display = new SceneJS_Display({
        canvas:this.canvas
    });

    /**
     * Flags the entirety of the scene graph as needing to be (re)compiled into the display
     */
    this.sceneDirty = false;

    /**
     * Flag set when at least one branch of the scene graph needs recompilation
     */
    this._sceneBranchesDirty = false;

    /**
     * List of nodes scheduled for destruction by #destroyNode
     * Destructions are done in a batch at the end of each render so as not to disrupt the render.
     */
    this._nodesToDestroy = [];

    /**
     * Number of nodes in destruction list
     */
    this._numNodesToDestroy = 0;

    /**
     * Flag which is set while this engine is running - set after call to #start, unset after #stop or #pause
     */
    this.running = false;

    /**
     * Flag which is set while this engine is paused - set after call to #pause, unset after #stop or #start
     */
    this.paused = false;

    /**
     * Flag set once this engine has been destroyed
     */
    this.destroyed = false;

    /**
     * The current scene graph status
     */
    this.sceneStatus = {
        nodes:{}, // Status for each node
        numTasks:0  // Number of loads currently in progress
    };

    var self = this;


    // Create scene root first, then create its subnodes
    // This way nodes can access the scene in their constructors
    var nodes = json.nodes;
    json.nodes = null;
    this.scene = this.createNode(json); // Create scene root

    if (nodes) {
        json.nodes = nodes;
        this.scene.addNodes(nodes); // then create sub-nodes
    }

    this.canvas.canvas.addEventListener(// WebGL context lost
        "webglcontextlost",
        function (event) {
            event.preventDefault();
            self.stop();
            SceneJS_events.fireEvent(SceneJS_events.WEBGL_CONTEXT_LOST, { scene:self.scene });
        },
        false);

    this.canvas.canvas.addEventListener(// WebGL context recovered
        "webglcontextrestored",
        function (event) {
            self.canvas.initWebGL();
            self._coreFactory.webglRestored();  // Reallocate WebGL resources for node state cores
            self.display.webglRestored(); // Reallocate shaders and re-cache shader var locations for display state chunks
            SceneJS_events.fireEvent(SceneJS_events.WEBGL_CONTEXT_RESTORED, { scene:self.scene });
            self.start();
        },
        false);
};


/**
 * Simulate a lost WebGL context.
 * Only works if the simulateWebGLContextLost was given as an option to the engine's constructor.
 */
SceneJS_Engine.prototype.loseWebGLContext = function () {
    this.canvas.loseWebGLContext();
};

/**
 * Gets/loads the given node type
 *
 * @param {String} type Node type name
 * @param {Function(Function)} ok Callback fired when type loaded, returns the type constructor
 */
SceneJS_Engine.prototype.getNodeType = function (type, ok) {
    SceneJS_NodeFactory.getNodeType(type, ok);
};

/**
 * Returns true if the given node type is currently loaded (ie. load not required)
 * @param type
 */
SceneJS_Engine.prototype.hasNodeType = function (type) {
    return !!SceneJS_NodeFactory.nodeTypes[type];
};

/**
 * Recursively parse the given JSON scene graph representation and return a scene (sub)graph.
 *
 * @param {Object} json JSON definition of a scene graph or subgraph
 * @param {Function} ok Callback fired when node created, with the node as argument
 */
SceneJS_Engine.prototype.createNode = function (json, ok) {

    // Do buffered node destroys - don't want olds nodes
    // hanging around whose IDs may clash with the new node
    this._doDestroyNodes();

    json.type = json.type || "node"; // Nodes are SceneJS.Node type by default
    var core = this._coreFactory.getCore(json.type, json.coreId); // Create or share a core
    var self = this;

    return this._nodeFactory.getNode(
        this,
        json,
        core,
        function (node) {

            // Create child nodes
            if (!node._fromPlugin && json.nodes) {
                var numNodes = 0;
                for (var i = 0, len = json.nodes.length; i < len; i++) {
                    self.createNode(
                        json.nodes[i],
                        function (childNode) {
                            node.addNode(childNode);
                            if (++numNodes == len) {
                                if (ok) {
                                    ok(node);
                                }
                                self.scene.publish("nodes/" + node.id, node);
                            }
                        });
                }
            } else {
                if (ok) {
                    ok(node);
                    self.scene.publish("nodes/" + node.id, node);
                }
            }
        });
};

/**
 * Performs pending node destructions. When destroyed, each node and its core is released back to the
 * node and core pools for reuse, respectively.
 */
SceneJS_Engine.prototype._doDestroyNodes = function () {

    var node;

    while (this._numNodesToDestroy > 0) {

        node = this._nodesToDestroy[--this._numNodesToDestroy];

        node._doDestroy();

        this._coreFactory.putCore(node._core);    // Release state core for reuse

        this._nodeFactory.putNode(node);         // Release node for reuse
    }
};

/**
 * Finds the node with the given ID in this engine's scene graph
 * @return {SceneJS.Node} The node if found, else null
 */
SceneJS_Engine.prototype.findNode = function (nodeId) {
    return this._nodeFactory.nodes.items[nodeId];
};

/** Finds nodes in this engine's scene graph that have nodes IDs matching the given regular expression
 * @param {String} nodeIdRegex Regular expression to match on node IDs
 * @return {[SceneJS.Node]} Array of nodes whose IDs match the given regex
 */
SceneJS_Engine.prototype.findNodes = function (nodeIdRegex) {

    var regex = new RegExp(nodeIdRegex);
    var nodes = [];
    var nodeMap = this._nodeFactory.nodes.items;

    for (var nodeId in nodeMap) {
        if (nodeMap.hasOwnProperty(nodeId)) {

            if (regex.test(nodeId)) {
                nodes.push(nodeMap[nodeId]);
            }
        }
    }

    return nodes;
};

/**
 * Tests whether a core of the given ID exists for the given node type
 * @param {String} type Node type
 * @param {String} coreId
 * @returns Boolean
 */
SceneJS_Engine.prototype.hasCore = function (type, coreId) {
    return this._coreFactory.hasCore(type, coreId);
};

/**
 * Schedules the given subtree of this engine's {@link SceneJS.Scene} for recompilation
 *
 * @param {SceneJS.Node} node Root node of the subtree to recompile
 */
SceneJS_Engine.prototype.branchDirty = function (node) {

    if (this.sceneDirty) {
        return; // Whole scene will recompile anyway
    }

    /* Dealing with some weirdness with the embedded window and iframe / window fascism.
     */
    if (node == window) {
        return;
    }

    node.branchDirty = true;
    node.dirty = true;

    for (var n = node.parent; n && !(n.dirty || n.branchDirty); n = n.parent) { // Flag path down to this node
        n.dirty = true;
    }

    this._sceneBranchesDirty = true;
};

/**
 * Renders a single frame. Does any pending scene compilations or draw graph updates first.
 * Ordinarily the frame is rendered only if compilations or draw graph updates were performed,
 * but may be forced to render the frame regardless.
 *
 * @param {{String:String}} params Rendering parameters
 */
SceneJS_Engine.prototype.renderFrame = function (params) {

    if (this._tryCompile() || (params && params.force)) { // Do any pending (re)compilations

        this.display.render(params);

        return true;
    }

    return false;
};

/**
 * Starts the render loop on this engine.
 */
SceneJS_Engine.prototype.start = function () {

    if (!this.running) {

        this.running = true;
        this.paused = false;

        var self = this;
        var fnName = "__scenejs_sceneLoop" + this.id;

        var sleeping = false;

        this.sceneDirty = true;

        var tick = {
            sceneId:this.id,
            startTime:(new Date()).getTime()
        };

        self.events.fireEvent("started", tick);

        var time = (new Date()).getTime();

        var scene = this.scene;

        window[fnName] = function () {

            if (self.running && !self.paused) {  // idleFunc may have paused scene

                tick.prevTime = time;
                time = (new Date()).getTime();
                tick.time = time;

                scene.publish("tick", tick);

                if (!self.running) { // idleFunc may have destroyed scene
                    return;
                }

                if (self._tryCompile()) {         // Attempt pending compile and redraw

                    sleeping = false;

                    self.display.render();

                    scene.publish("rendered", tick);

                    if (self.running) {
                        window.requestAnimationFrame(window[fnName]);
                    }

                } else {

                    if (!sleeping) {
                        scene.publish("sleep", tick);
                    }

                    sleeping = true;

                    if (self.running) {
                        window.requestAnimationFrame(window[fnName]);
                    }
                }
            } else {

                if (self.running) {
                    window.requestAnimationFrame(window[fnName]);
                }
            }
        };

        if (self.running) {
            window.requestAnimationFrame(window[fnName]);
        }
    }
};

/**
 * Performs a pick on this engine and returns a hit record containing at least the name of the picked
 * scene object (as configured by SceneJS.Name nodes) and the canvas pick coordinates. Ordinarily, picking
 * is the simple GPU color-name mapped method, but this method can instead perform a ray-intersect pick
 * when the 'rayPick' flag is set on the options parameter for this method. For that mode, this method will
 * also find the intersection point on the picked object's near surface with a ray cast from the eye that passes
 * through the mouse position on the projection plane.
 *
 * @param {Number} canvasX X-axis canvas pick coordinate
 * @param {Number} canvasY Y-axis canvas pick coordinate
 * @param options Pick options
 * @param options.rayPick Performs additional ray-intersect pick when true
 * @returns The pick record
 */
SceneJS_Engine.prototype.pick = function (canvasX, canvasY, options) {

    this._tryCompile();  // Do any pending scene compilations

    var hit = this.display.pick({
        canvasX:canvasX,
        canvasY:canvasY,
        rayPick:options ? options.rayPick : false
    });

    return hit;
};

/**
 * Performs any pending scene compilations or display rebuilds, returns true if any of those were done,
 * in which case a display re-render is then needed
 *
 * @returns {Boolean} True when any compilations or display rebuilds were done
 */
SceneJS_Engine.prototype._tryCompile = function () {

    // this._doAddNodes();

    if (this.display.imageDirty // Frame buffer needs redraw
        || this.display.drawListDirty // Draw list needs rebuild
        || this.display.stateSortDirty // Draw list needs to redetermine state order
        || this.display.stateOrderDirty // Draw list needs state sort
        || this.display.objectListDirty // Draw list needs to be rebuilt
        || this._sceneBranchesDirty // One or more branches in scene graph need (re)compilation
        || this.sceneDirty) { // Whole scene needs recompilation

        if (this._sceneBranchesDirty || this.sceneDirty) { // Need scene graph compilation

            this._sceneBranchesDirty = false;
            this.sceneDirty = false;

            SceneJS_events.fireEvent(SceneJS_events.SCENE_COMPILING, {  // Notify compilation support start
                engine:this                                            // Compilation support modules get ready
            });

            this.pubSubProxy = new SceneJS_PubSubProxy(this.scene, null);
            var ctx = {
                pubSubProxy : this.pubSubProxy
            };

            this.scene._compileNodes(ctx); // Begin depth-first compilation descent into scene sub-nodes
        }

        this._doDestroyNodes(); // Garbage collect destroyed nodes - node destructions set imageDirty true

        return true; // Compilation was performed, need frame redraw now
    }

    return false;
};

/**
 * Pauses/unpauses the render loop
 * @param {Boolean} doPause Pauses or unpauses the render loop
 */
SceneJS_Engine.prototype.pause = function (doPause) {
    this.paused = doPause;
};

/**
 * Stops the render loop
 */
SceneJS_Engine.prototype.stop = function () {

    if (this.running) {

        this.running = false;
        this.paused = false;

        window["__scenejs_sceneLoop" + this.id] = null;

        //   this.events.fireEvent("stopped", { sceneId: this.id });
    }
};

/**
 * Destroys a node within this engine's {@link SceneJS.Scene}
 *
 * @param {SceneJS.Node} node Node to destroy
 */
SceneJS_Engine.prototype.destroyNode = function (node) {

    /* The node is actually scheduled for lazy destruction within the next invocation of #_tryCompile
     */
    this._nodesToDestroy[this._numNodesToDestroy++] = node;

    /* Stop tracking node's status
     */
    var nodeStatus = this.sceneStatus.nodes[node.id];

    if (nodeStatus) {
        this.sceneStatus.numTasks -= nodeStatus.numTasks;
        delete this.sceneStatus.nodes[node.id];
    }
};

/**
 * Destroys this engine
 */
SceneJS_Engine.prototype.destroy = function () {

    this.destroyed = true;

    // this.events.fireEvent("destroyed", { sceneId: this.id });
};

/*---------------------------------------------------------------------------------------------------------------------
 * JavaScript augmentations to support render loop
 *--------------------------------------------------------------------------------------------------------------------*/

if (!self.Int32Array) {
    self.Int32Array = Array;
    self.Float32Array = Array;
}

// Ripped off from THREE.js - https://github.com/mrdoob/three.js/blob/master/src/Three.js
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
            || window[vendors[x] + 'RequestCancelAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());
/**
 * Backend module that provides single point through which exceptions may be raised
 *
 * @class SceneJS_error
 * @private
 */
var SceneJS_error = new (function() {

    var activeSceneId;

    SceneJS_events.addListener(
            SceneJS_events.SCENE_COMPILING, // Set default logging for scene root
            function(params) {
                activeSceneId = params.engine.id;
            });

    SceneJS_events.addListener(
            SceneJS_events.RESET,
            function() {
                activeSceneId = null;
            },
            100000);  // Really low priority - must be reset last

    this.fatalError = function(code, message) {
        if (typeof code == "string") {
            message = code;
            code = SceneJS.errors.ERROR;
        }
        var error = {
            errorName: SceneJS.errors._getErrorName(code) || "ERROR",
            code: code,
            exception: message,
            fatal: true
        };
        if (activeSceneId) {
            error.sceneId = activeSceneId;
        }
        SceneJS_events.fireEvent(SceneJS_events.ERROR, error);
        return message;
    };

    this.error = function(code, message) {
        var error = {
            errorName: SceneJS.errors._getErrorName(code) || "ERROR",
            code: code,
            exception: message,
            fatal: false
        };
        if (activeSceneId) {
            error.sceneId = activeSceneId;
        }
        SceneJS_events.fireEvent(SceneJS_events.ERROR, error);
    };
})();

(function() {
    SceneJS.errors = {};

    var n = 0;
    SceneJS.errors.ERROR = n++;
    SceneJS.errors.WEBGL_NOT_SUPPORTED = n++;
    SceneJS.errors.WEBGL_CONTEXT_LOST = n++;
    SceneJS.errors.NODE_CONFIG_EXPECTED = n++;
    SceneJS.errors.ILLEGAL_NODE_CONFIG = n++;
    SceneJS.errors.SHADER_COMPILATION_FAILURE = n++;
    SceneJS.errors.SHADER_LINK_FAILURE = n++;
    SceneJS.errors.CANVAS_NOT_FOUND = n++;
    SceneJS.errors.OUT_OF_VRAM = n++;
    SceneJS.errors.WEBGL_UNSUPPORTED_NODE_CONFIG = n++;
    SceneJS.errors.NODE_NOT_FOUND = n++;
    SceneJS.errors.NODE_ILLEGAL_STATE = n++;
    SceneJS.errors.ID_CLASH = n++;
    SceneJS.errors.PLUGIN_INVALID = n++;
})();

SceneJS.errors._getErrorName = function(code) {
    for (var key in SceneJS.errors) {
        if (SceneJS.errors.hasOwnProperty(key) && SceneJS.errors[key] == code) {
            return key;
        }
    }
    return null;
};

/**
 * Backend that manages configurations.
 *
 * @class SceneJS_configsModule
 * @private
 */
var SceneJS_configsModule = new (function () {

    this.configs = {};
    var subs = {};

    /**
     * Set a config
     * @param path
     * @param data
     */
    this.setConfigs = function (path, data) {
        // Update configs
        if (!path) {
            this.configs = data;
        } else {
            var parts = path.split(".");
            var cfg = this.configs;
            var subCfg;
            var name;
            for (var i = 0; i < parts.length - 1; i++) {
                name = parts[i];
                subCfg = cfg[name];
                if (!subCfg) {
                    subCfg = cfg[name] = {};
                }
                cfg = subCfg;
            }
            cfg[parts.length - 1] = data;
        }
        // Notify subscribers
        var list = subs[path || "_all"];
        if (list) {
            for (var i = 0, len = list.length; i < len; i++) {
                list[i](cfg);
            }
        }

        SceneJS.publish("configs", this.configs);
    };

    /**
     * Get a config
     * @param path
     * @return {*}
     */
    this.getConfigs = function (path) {
        if (!path) {
            return this.configs;
        } else {
            var cfg = this.configs;
            var parts = path.split(".");
            for (var i = 0; cfg && i < parts.length; i++) {
                cfg = cfg[parts[i]];
            }
            return cfg || {};
        }
    };

    /**
     * Subscribe to updates to a config
     * @param path
     * @param ok
     */
    this.on = function (path, ok) {
        path = path || "_all";
        (subs[path] || (subs[path] = [])).push(ok);
        ok(this.getConfigs(path));
    };

})();

/** Sets configurations.
 */
SceneJS.configure = SceneJS.setConfigs = SceneJS.setDebugConfigs = function () {
    if (arguments.length == 1) {
        SceneJS_configsModule.setConfigs(null, arguments[0]);
    } else if (arguments.length == 2) {
        SceneJS_configsModule.setConfigs(arguments[0], arguments[1]);
    } else {
        throw SceneJS_error.fatalError("Illegal arguments given to SceneJS.setDebugs - should be either ({String}:name, {Object}:cfg) or ({Object}:cfg)");
    }
};

/** Gets configurations
 */
SceneJS.getConfigs = SceneJS.getDebugConfigs = function (path) {
    return SceneJS_configsModule.getConfigs(path);
};

/**
 * @class Manages logging
 *  @private
 */
SceneJS.log = new (function() {

    var activeSceneId;
    var funcs = null;
    var queues = {};
    var indent = 0;
    var indentStr = "";

    SceneJS_events.addListener(
            SceneJS_events.SCENE_COMPILING, // Set default logging for scene root
            function(params) {
                activeSceneId = params.engine.id;
            });

    SceneJS_events.addListener(
            SceneJS_events.RESET,
            function() {
                queues = {};
                funcs = null;
                activeSceneId = null;
            },
            100000);  // Really low priority - must be reset last

    this._setIndent = function(_indent) {
        indent = _indent;
        var indentArray = [];
        for (var i = 0; i < indent; i++) {
            indentArray.push("----");
        }
        indentStr = indentArray.join("");
    };

    this.error = function(msg) {
        this._log("error", msg);
    };

    this.warn = function(msg) {
        this._log("warn", msg);
    };

    this.info = function(msg) {
        this._log("info", msg);
    };

    this.debug = function(msg) {
        this._log("debug", msg);
    };

    this.setFuncs = function(l) {
        if (l) {
            funcs = l;
            for (var channel in queues) {
                this._flush(channel);
            }
        }
    };

    this._flush = function(channel) {
        var queue = queues[channel];
        if (queue) {
            var func = funcs ? funcs[channel] : null;
            if (func) {
                for (var i = 0; i < queue.length; i++) {
                    func(queue[i]);
                }
                queues[channel] = [];
            }
        }
    };

    this._log = function(channel, message) {
        if (SceneJS._isArray(message)) {
            for (var i = 0; i < message.length; i++) {
                this.__log(channel, message[i]);
            }
        } else {
            this.__log(channel, message);
        }
    };

    this.__log = function(channel, message) {
        message = activeSceneId
                ? indentStr + activeSceneId + ": " + message
                : indentStr + message;

        if (funcs && funcs[channel]) {
            funcs[channel](message);

        } else if (console && console[channel]) {
            console[channel](message);
        }
    };

    this.getFuncs = function() {
        return funcs;
    };

})();/* 
 * Optimizations made based on glMatrix by Brandon Jones
 */

/*
 * Copyright (c) 2010 Brandon Jones
 *
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 *    1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 *
 *    2. Altered source versions must be plainly marked as such, and must not
 *    be misrepresented as being the original software.
 *
 *    3. This notice may not be removed or altered from any source
 *    distribution.
 */


/**
 * @param u vec3
 * @param v vec3
 * @param dest vec3 - optional destination
 * @return {vec3} dest if specified, u otherwise
 * @private
 */
var SceneJS_math_divVec3 = function(u, v, dest) {
    if (!dest) {
        dest = u;
    }

    dest[0] = u[0] / v[0];
    dest[1] = u[1] / v[1];
    dest[2] = u[2] / v[2];

    return dest;
};

/**
 * @param v vec4
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, v otherwise
 * @private
 */
var SceneJS_math_negateVector4 = function(v, dest) {
    if (!dest) {
        dest = v;
    }
    dest[0] = -v[0];
    dest[1] = -v[1];
    dest[2] = -v[2];
    dest[3] = -v[3];

    return dest;
};

/**
 * @param u vec4
 * @param v vec4
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, u otherwise
 * @private
 */
var SceneJS_math_addVec4 = function(u, v, dest) {
    if (!dest) {
        dest = u;
    }

    dest[0] = u[0] + v[0];
    dest[1] = u[1] + v[1];
    dest[2] = u[2] + v[2];
    dest[3] = u[3] + v[3];

    return dest;
};


/**
 * @param v vec4
 * @param s scalar
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, v otherwise
 * @private
 */
var SceneJS_math_addVec4s = function(v, s, dest) {
    if (!dest) {
        dest = v;
    }

    dest[0] = v[0] + s;
    dest[1] = v[1] + s;
    dest[2] = v[2] + s;
    dest[3] = v[3] + s;

    return dest;
};

/**
 * @param u vec3
 * @param v vec3
 * @param dest vec3 - optional destination
 * @return {vec3} dest if specified, u otherwise
 * @private
 */
var SceneJS_math_addVec3 = function(u, v, dest) {
    if (!dest) {
        dest = u;
    }

    dest[0] = u[0] + v[0];
    dest[1] = u[1] + v[1];
    dest[2] = u[2] + v[2];

    return dest;
};

/**
 * @param v vec3
 * @param s scalar
 * @param dest vec3 - optional destination
 * @return {vec3} dest if specified, v otherwise
 * @private
 */
var SceneJS_math_addVec3s = function(v, s, dest) {
    if (!dest) {
        dest = v;
    }

    dest[0] = v[0] + s;
    dest[1] = v[1] + s;
    dest[2] = v[2] + s;

    return dest;
};

/** @private */
var SceneJS_math_addScalarVec4 = function(s, v, dest) {
    return SceneJS_math_addVec4s(v, s, dest);
};

/**
 * @param u vec4
 * @param v vec4
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, u otherwise
 * @private
 */
var SceneJS_math_subVec4 = function(u, v, dest) {
    if (!dest) {
        dest = u;
    }

    dest[0] = u[0] - v[0];
    dest[1] = u[1] - v[1];
    dest[2] = u[2] - v[2];
    dest[3] = u[3] - v[3];

    return dest;
};

/**
 * @param u vec3
 * @param v vec3
 * @param dest vec3 - optional destination
 * @return {vec3} dest if specified, v otherwise
 * @private
 */
var SceneJS_math_subVec3 = function(u, v, dest) {
    if (!dest) {
        dest = u;
    }

    dest[0] = u[0] - v[0];
    dest[1] = u[1] - v[1];
    dest[2] = u[2] - v[2];

    return dest;
};

var SceneJS_math_lerpVec3 = function(t, t1, t2, p1, p2) {
    var f2 = (t - t1) / (t2 - t1);
    var f1 = 1.0 - f2;
    return  {
        x: p1.x * f1 + p2.x * f2,
        y: p1.y * f1 + p2.y * f2,
        z: p1.z * f1 + p2.z * f2
    };
};


/**
 * @param u vec2
 * @param v vec2
 * @param dest vec2 - optional destination
 * @return {vec2} dest if specified, u otherwise
 * @private
 */
var SceneJS_math_subVec2 = function(u, v, dest) {
    if (!dest) {
        dest = u;
    }

    dest[0] = u[0] - v[0];
    dest[1] = u[1] - v[1];

    return dest;
};

/**
 * @param v vec4
 * @param s scalar
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, v otherwise
 * @private
 */
var SceneJS_math_subVec4Scalar = function(v, s, dest) {
    if (!dest) {
        dest = v;
    }

    dest[0] = v[0] - s;
    dest[1] = v[1] - s;
    dest[2] = v[2] - s;
    dest[3] = v[3] - s;

    return dest;
};

/**
 * @param v vec4
 * @param s scalar
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, v otherwise
 * @private
 */
var SceneJS_math_subScalarVec4 = function(v, s, dest) {
    if (!dest) {
        dest = v;
    }

    dest[0] = s - v[0];
    dest[1] = s - v[1];
    dest[2] = s - v[2];
    dest[3] = s - v[3];

    return dest;
};

/**
 * @param u vec4
 * @param v vec4
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, u otherwise
 * @private
 */
var SceneJS_math_mulVec4 = function(u, v, dest) {
    if (!dest) {
        dest = u;
    }

    dest[0] = u[0] * v[0];
    dest[1] = u[1] * v[1];
    dest[2] = u[2] * v[2];
    dest[3] = u[3] * v[3];

    return dest;
};

/**
 * @param v vec4
 * @param s scalar
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, v otherwise
 * @private
 */
var SceneJS_math_mulVec4Scalar = function(v, s, dest) {
    if (!dest) {
        dest = v;
    }

    dest[0] = v[0] * s;
    dest[1] = v[1] * s;
    dest[2] = v[2] * s;
    dest[3] = v[3] * s;

    return dest;
};


/**
 * @param v vec3
 * @param s scalar
 * @param dest vec3 - optional destination
 * @return {vec3} dest if specified, v otherwise
 * @private
 */
var SceneJS_math_mulVec3Scalar = function(v, s, dest) {
    if (!dest) {
        dest = v;
    }

    dest[0] = v[0] * s;
    dest[1] = v[1] * s;
    dest[2] = v[2] * s;

    return dest;
};

/**
 * @param v vec2
 * @param s scalar
 * @param dest vec2 - optional destination
 * @return {vec2} dest if specified, v otherwise
 * @private
 */
var SceneJS_math_mulVec2Scalar = function(v, s, dest) {
    if (!dest) {
        dest = v;
    }

    dest[0] = v[0] * s;
    dest[1] = v[1] * s;

    return dest;
};


/**
 * @param u vec4
 * @param v vec4
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, u otherwise
 * @private
 */
var SceneJS_math_divVec4 = function(u, v, dest) {
    if (!dest) {
        dest = u;
    }

    dest[0] = u[0] / v[0];
    dest[1] = u[1] / v[1];
    dest[2] = u[2] / v[2];
    dest[3] = u[3] / v[3];

    return dest;
};

/**
 * @param v vec3
 * @param s scalar
 * @param dest vec3 - optional destination
 * @return {vec3} dest if specified, v otherwise
 * @private
 */
var SceneJS_math_divScalarVec3 = function(s, v, dest) {
    if (!dest) {
        dest = v;
    }

    dest[0] = s / v[0];
    dest[1] = s / v[1];
    dest[2] = s / v[2];

    return dest;
};

/**
 * @param v vec3
 * @param s scalar
 * @param dest vec3 - optional destination
 * @return {vec3} dest if specified, v otherwise
 * @private
 */
var SceneJS_math_divVec3s = function(v, s, dest) {
    if (!dest) {
        dest = v;
    }

    dest[0] = v[0] / s;
    dest[1] = v[1] / s;
    dest[2] = v[2] / s;

    return dest;
};

/**
 * @param v vec4
 * @param s scalar
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, v otherwise
 * @private
 */
var SceneJS_math_divVec4s = function(v, s, dest) {
    if (!dest) {
        dest = v;
    }

    dest[0] = v[0] / s;
    dest[1] = v[1] / s;
    dest[2] = v[2] / s;
    dest[3] = v[3] / s;

    return dest;
};


/**
 * @param s scalar
 * @param v vec4
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, v otherwise
 * @private
 */
var SceneJS_math_divScalarVec4 = function(s, v, dest) {
    if (!dest) {
        dest = v;
    }

    dest[0] = s / v[0];
    dest[1] = s / v[1];
    dest[2] = s / v[2];
    dest[3] = s / v[3];

    return dest;
};


/** @private */
var SceneJS_math_dotVector4 = function(u, v) {
    return (u[0] * v[0] + u[1] * v[1] + u[2] * v[2] + u[3] * v[3]);
};

/** @private */
var SceneJS_math_cross3Vec4 = function(u, v) {
    var u0 = u[0], u1 = u[1], u2 = u[2];
    var v0 = v[0], v1 = v[1], v2 = v[2];
    return [
        u1 * v2 - u2 * v1,
        u2 * v0 - u0 * v2,
        u0 * v1 - u1 * v0,
        0.0];
};

/**
 * @param u vec3
 * @param v vec3
 * @param dest vec3 - optional destination
 * @return {vec3} dest if specified, u otherwise
 * @private
 */
var SceneJS_math_cross3Vec3 = function(u, v, dest) {
    if (!dest) {
        dest = u;
    }

    var x = u[0], y = u[1], z = u[2];
    var x2 = v[0], y2 = v[1], z2 = v[2];

    dest[0] = y * z2 - z * y2;
    dest[1] = z * x2 - x * z2;
    dest[2] = x * y2 - y * x2;

    return dest;
};

/** @private */
var SceneJS_math_sqLenVec4 = function(v) {
    return SceneJS_math_dotVector4(v, v);
};

/** @private */
var SceneJS_math_lenVec4 = function(v) {
    return Math.sqrt(SceneJS_math_sqLenVec4(v));
};

/** @private */
var SceneJS_math_dotVector3 = function(u, v) {
    return (u[0] * v[0] + u[1] * v[1] + u[2] * v[2]);
};

/** @private */
var SceneJS_math_dotVector2 = function(u, v) {
    return (u[0] * v[0] + u[1] * v[1]);
};

/** @private */
var SceneJS_math_sqLenVec3 = function(v) {
    return SceneJS_math_dotVector3(v, v);
};

/** @private */
var SceneJS_math_sqLenVec2 = function(v) {
    return SceneJS_math_dotVector2(v, v);
};

/** @private */
var SceneJS_math_lenVec3 = function(v) {
    return Math.sqrt(SceneJS_math_sqLenVec3(v));
};

/** @private */
var SceneJS_math_lenVec2 = function(v) {
    return Math.sqrt(SceneJS_math_sqLenVec2(v));
};

/**
 * @param v vec3
 * @param dest vec3 - optional destination
 * @return {vec3} dest if specified, v otherwise
 * @private
 */
var SceneJS_math_rcpVec3 = function(v, dest) {
    return SceneJS_math_divScalarVec3(1.0, v, dest);
};

/**
 * @param v vec4
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, v otherwise
 * @private
 */
var SceneJS_math_normalizeVec4 = function(v, dest) {
    var f = 1.0 / SceneJS_math_lenVec4(v);
    return SceneJS_math_mulVec4Scalar(v, f, dest);
};

/** @private */
var SceneJS_math_normalizeVec3 = function(v, dest) {
    var f = 1.0 / SceneJS_math_lenVec3(v);
    return SceneJS_math_mulVec3Scalar(v, f, dest);
};

// @private
var SceneJS_math_normalizeVec2 = function(v, dest) {
    var f = 1.0 / SceneJS_math_lenVec2(v);
    return SceneJS_math_mulVec2Scalar(v, f, dest);
};

/** @private */
var SceneJS_math_mat4 = function() {
    return new Array(16);
};

/** @private */
var SceneJS_math_dupMat4 = function(m) {
    return m.slice(0, 16);
};

/** @private */
var SceneJS_math_getCellMat4 = function(m, row, col) {
    return m[row + col * 4];
};

/** @private */
var SceneJS_math_setCellMat4 = function(m, row, col, s) {
    m[row + col * 4] = s;
};

/** @private */
var SceneJS_math_getRowMat4 = function(m, r) {
    return [m[r], m[r + 4], m[r + 8], m[r + 12]];
};

/** @private */
var SceneJS_math_setRowMat4 = function(m, r, v) {
    m[r] = v[0];
    m[r + 4] = v[1];
    m[r + 8] = v[2];
    m[r + 12] = v[3];
};

/** @private */
var SceneJS_math_setRowMat4c = function(m, r, x, y, z, w) {
    SceneJS_math_setRowMat4(m, r, [x,y,z,w]);
};

/** @private */
var SceneJS_math_setRowMat4s = function(m, r, s) {
    SceneJS_math_setRowMat4c(m, r, s, s, s, s);
};

/** @private */
var SceneJS_math_getColMat4 = function(m, c) {
    var i = c * 4;
    return [m[i], m[i + 1],m[i + 2],m[i + 3]];
};

/** @private */
var SceneJS_math_setColMat4v = function(m, c, v) {
    var i = c * 4;
    m[i] = v[0];
    m[i + 1] = v[1];
    m[i + 2] = v[2];
    m[i + 3] = v[3];
};

/** @private */
var SceneJS_math_setColMat4c = function(m, c, x, y, z, w) {
    SceneJS_math_setColMat4v(m, c, [x,y,z,w]);
};

/** @private */
var SceneJS_math_setColMat4Scalar = function(m, c, s) {
    SceneJS_math_setColMat4c(m, c, s, s, s, s);
};

/** @private */
var SceneJS_math_mat4To3 = function(m) {
    return [
        m[0],m[1],m[2],
        m[4],m[5],m[6],
        m[8],m[9],m[10]
    ];
};

/** @private */
var SceneJS_math_m4s = function(s) {
    return [
        s,s,s,s,
        s,s,s,s,
        s,s,s,s,
        s,s,s,s
    ];
};

/** @private */
var SceneJS_math_setMat4ToZeroes = function() {
    return SceneJS_math_m4s(0.0);
};

/** @private */
var SceneJS_math_setMat4ToOnes = function() {
    return SceneJS_math_m4s(1.0);
};

/** @private */
var SceneJS_math_diagonalMat4v = function(v) {
    return [
        v[0], 0.0, 0.0, 0.0,
        0.0,v[1], 0.0, 0.0,
        0.0, 0.0, v[2],0.0,
        0.0, 0.0, 0.0, v[3]
    ];
};

/** @private */
var SceneJS_math_diagonalMat4c = function(x, y, z, w) {
    return SceneJS_math_diagonalMat4v([x,y,z,w]);
};

/** @private */
var SceneJS_math_diagonalMat4s = function(s) {
    return SceneJS_math_diagonalMat4c(s, s, s, s);
};

/** @private */
var SceneJS_math_identityMat4 = function() {
    return SceneJS_math_diagonalMat4v([1.0,1.0,1.0,1.0]);
};

/** @private */
var SceneJS_math_isIdentityMat4 = function(m) {
    if (m[0] !== 1.0 || m[1] !== 0.0 || m[2] !== 0.0 || m[3] !== 0.0 ||
        m[4] !== 0.0 || m[5] !== 1.0 || m[6] !== 0.0 || m[7] !== 0.0 ||
        m[8] !== 0.0 || m[9] !== 0.0 || m[10] !== 1.0 || m[11] !== 0.0 ||
        m[12] !== 0.0 || m[13] !== 0.0 || m[14] !== 0.0 || m[15] !== 1.0)
    {
        return false;
    }

    return true;
};

/**
 * @param m mat4
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, m otherwise
 * @private
 */
var SceneJS_math_negateMat4 = function(m, dest) {
    if (!dest) {
        dest = m;
    }

    dest[0] = -m[0];
    dest[1] = -m[1];
    dest[2] = -m[2];
    dest[3] = -m[3];
    dest[4] = -m[4];
    dest[5] = -m[5];
    dest[6] = -m[6];
    dest[7] = -m[7];
    dest[8] = -m[8];
    dest[9] = -m[9];
    dest[10] = -m[10];
    dest[11] = -m[11];
    dest[12] = -m[12];
    dest[13] = -m[13];
    dest[14] = -m[14];
    dest[15] = -m[15];

    return dest;
};

/**
 * @param a mat4
 * @param b mat4
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, a otherwise
 * @private
 */
var SceneJS_math_addMat4 = function(a, b, dest) {
    if (!dest) {
        dest = a;
    }

    dest[0] = a[0] + b[0];
    dest[1] = a[1] + b[1];
    dest[2] = a[2] + b[2];
    dest[3] = a[3] + b[3];
    dest[4] = a[4] + b[4];
    dest[5] = a[5] + b[5];
    dest[6] = a[6] + b[6];
    dest[7] = a[7] + b[7];
    dest[8] = a[8] + b[8];
    dest[9] = a[9] + b[9];
    dest[10] = a[10] + b[10];
    dest[11] = a[11] + b[11];
    dest[12] = a[12] + b[12];
    dest[13] = a[13] + b[13];
    dest[14] = a[14] + b[14];
    dest[15] = a[15] + b[15];

    return dest;
};

/**
 * @param m mat4
 * @param s scalar
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, m otherwise
 * @private
 */
var SceneJS_math_addMat4Scalar = function(m, s, dest) {
    if (!dest) {
        dest = m;
    }

    dest[0] = m[0] + s;
    dest[1] = m[1] + s;
    dest[2] = m[2] + s;
    dest[3] = m[3] + s;
    dest[4] = m[4] + s;
    dest[5] = m[5] + s;
    dest[6] = m[6] + s;
    dest[7] = m[7] + s;
    dest[8] = m[8] + s;
    dest[9] = m[9] + s;
    dest[10] = m[10] + s;
    dest[11] = m[11] + s;
    dest[12] = m[12] + s;
    dest[13] = m[13] + s;
    dest[14] = m[14] + s;
    dest[15] = m[15] + s;

    return dest;
};

/** @private */
var SceneJS_math_addScalarMat4 = function(s, m, dest) {
    return SceneJS_math_addMat4Scalar(m, s, dest);
};

/**
 * @param a mat4
 * @param b mat4
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, a otherwise
 * @private
 */
var SceneJS_math_subMat4 = function(a, b, dest) {
    if (!dest) {
        dest = a;
    }

    dest[0] = a[0] - b[0];
    dest[1] = a[1] - b[1];
    dest[2] = a[2] - b[2];
    dest[3] = a[3] - b[3];
    dest[4] = a[4] - b[4];
    dest[5] = a[5] - b[5];
    dest[6] = a[6] - b[6];
    dest[7] = a[7] - b[7];
    dest[8] = a[8] - b[8];
    dest[9] = a[9] - b[9];
    dest[10] = a[10] - b[10];
    dest[11] = a[11] - b[11];
    dest[12] = a[12] - b[12];
    dest[13] = a[13] - b[13];
    dest[14] = a[14] - b[14];
    dest[15] = a[15] - b[15];

    return dest;
};

/**
 * @param m mat4
 * @param s scalar
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, m otherwise
 * @private
 */
var SceneJS_math_subMat4Scalar = function(m, s, dest) {
    if (!dest) {
        dest = m;
    }

    dest[0] = m[0] - s;
    dest[1] = m[1] - s;
    dest[2] = m[2] - s;
    dest[3] = m[3] - s;
    dest[4] = m[4] - s;
    dest[5] = m[5] - s;
    dest[6] = m[6] - s;
    dest[7] = m[7] - s;
    dest[8] = m[8] - s;
    dest[9] = m[9] - s;
    dest[10] = m[10] - s;
    dest[11] = m[11] - s;
    dest[12] = m[12] - s;
    dest[13] = m[13] - s;
    dest[14] = m[14] - s;
    dest[15] = m[15] - s;

    return dest;
};

/**
 * @param s scalar
 * @param m mat4
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, m otherwise
 * @private
 */
var SceneJS_math_subScalarMat4 = function(s, m, dest) {
    if (!dest) {
        dest = m;
    }

    dest[0] = s - m[0];
    dest[1] = s - m[1];
    dest[2] = s - m[2];
    dest[3] = s - m[3];
    dest[4] = s - m[4];
    dest[5] = s - m[5];
    dest[6] = s - m[6];
    dest[7] = s - m[7];
    dest[8] = s - m[8];
    dest[9] = s - m[9];
    dest[10] = s - m[10];
    dest[11] = s - m[11];
    dest[12] = s - m[12];
    dest[13] = s - m[13];
    dest[14] = s - m[14];
    dest[15] = s - m[15];

    return dest;
};

/**
 * @param a mat4
 * @param b mat4
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, a otherwise
 * @private
 */
var SceneJS_math_mulMat4 = function(a, b, dest) {
    if (!dest) {
        dest = a;
    }

    // Cache the matrix values (makes for huge speed increases!)
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    var b00 = b[0], b01 = b[1], b02 = b[2], b03 = b[3];
    var b10 = b[4], b11 = b[5], b12 = b[6], b13 = b[7];
    var b20 = b[8], b21 = b[9], b22 = b[10], b23 = b[11];
    var b30 = b[12], b31 = b[13], b32 = b[14], b33 = b[15];

    dest[0] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
    dest[1] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
    dest[2] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
    dest[3] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
    dest[4] = b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30;
    dest[5] = b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31;
    dest[6] = b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32;
    dest[7] = b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33;
    dest[8] = b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30;
    dest[9] = b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31;
    dest[10] = b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32;
    dest[11] = b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33;
    dest[12] = b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30;
    dest[13] = b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31;
    dest[14] = b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32;
    dest[15] = b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33;

    return dest;
};

/**
 * @param m mat4
 * @param s scalar
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, m otherwise
 * @private
 */
var SceneJS_math_mulMat4s = function(m, s, dest)
{
    if (!dest) {
        dest = m;
    }

    dest[0] = m[0] * s;
    dest[1] = m[1] * s;
    dest[2] = m[2] * s;
    dest[3] = m[3] * s;
    dest[4] = m[4] * s;
    dest[5] = m[5] * s;
    dest[6] = m[6] * s;
    dest[7] = m[7] * s;
    dest[8] = m[8] * s;
    dest[9] = m[9] * s;
    dest[10] = m[10] * s;
    dest[11] = m[11] * s;
    dest[12] = m[12] * s;
    dest[13] = m[13] * s;
    dest[14] = m[14] * s;
    dest[15] = m[15] * s;

    return dest;
};

/**
 * @param m mat4
 * @param v vec4
 * @return {vec4}
 * @private
 */
var SceneJS_math_mulMat4v4 = function(m, v) {
    var v0 = v[0], v1 = v[1], v2 = v[2], v3 = v[3];

    return [
        m[0] * v0 + m[4] * v1 + m[8] * v2 + m[12] * v3,
        m[1] * v0 + m[5] * v1 + m[9] * v2 + m[13] * v3,
        m[2] * v0 + m[6] * v1 + m[10] * v2 + m[14] * v3,
        m[3] * v0 + m[7] * v1 + m[11] * v2 + m[15] * v3
    ];
};

/**
 * @param mat mat4
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, mat otherwise
 * @private
 */
var SceneJS_math_transposeMat4 = function(mat, dest) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    var m4 = mat[4], m14 = mat[14], m8 = mat[8];
    var m13 = mat[13], m12 = mat[12], m9 = mat[9];
    if (!dest || mat == dest) {
        var a01 = mat[1], a02 = mat[2], a03 = mat[3];
        var a12 = mat[6], a13 = mat[7];
        var a23 = mat[11];

        mat[1] = m4;
        mat[2] = m8;
        mat[3] = m12;
        mat[4] = a01;
        mat[6] = m9;
        mat[7] = m13;
        mat[8] = a02;
        mat[9] = a12;
        mat[11] = m14;
        mat[12] = a03;
        mat[13] = a13;
        mat[14] = a23;
        return mat;
    }

    dest[0] = mat[0];
    dest[1] = m4;
    dest[2] = m8;
    dest[3] = m12;
    dest[4] = mat[1];
    dest[5] = mat[5];
    dest[6] = m9;
    dest[7] = m13;
    dest[8] = mat[2];
    dest[9] = mat[6];
    dest[10] = mat[10];
    dest[11] = m14;
    dest[12] = mat[3];
    dest[13] = mat[7];
    dest[14] = mat[11];
    dest[15] = mat[15];
    return dest;
};

/** @private */
var SceneJS_math_determinantMat4 = function(mat) {
    // Cache the matrix values (makes for huge speed increases!)
    var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3];
    var a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7];
    var a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11];
    var a30 = mat[12], a31 = mat[13], a32 = mat[14], a33 = mat[15];

    return a30 * a21 * a12 * a03 - a20 * a31 * a12 * a03 - a30 * a11 * a22 * a03 + a10 * a31 * a22 * a03 +
           a20 * a11 * a32 * a03 - a10 * a21 * a32 * a03 - a30 * a21 * a02 * a13 + a20 * a31 * a02 * a13 +
           a30 * a01 * a22 * a13 - a00 * a31 * a22 * a13 - a20 * a01 * a32 * a13 + a00 * a21 * a32 * a13 +
           a30 * a11 * a02 * a23 - a10 * a31 * a02 * a23 - a30 * a01 * a12 * a23 + a00 * a31 * a12 * a23 +
           a10 * a01 * a32 * a23 - a00 * a11 * a32 * a23 - a20 * a11 * a02 * a33 + a10 * a21 * a02 * a33 +
           a20 * a01 * a12 * a33 - a00 * a21 * a12 * a33 - a10 * a01 * a22 * a33 + a00 * a11 * a22 * a33;
};

/**
 * @param mat mat4
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, mat otherwise
 * @private
 */
var SceneJS_math_inverseMat4 = function(mat, dest) {
    if (!dest) {
        dest = mat;
    }

    // Cache the matrix values (makes for huge speed increases!)
    var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3];
    var a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7];
    var a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11];
    var a30 = mat[12], a31 = mat[13], a32 = mat[14], a33 = mat[15];

    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant (inlined to avoid double-caching)
    var invDet = 1 / (b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06);

    dest[0] = (a11 * b11 - a12 * b10 + a13 * b09) * invDet;
    dest[1] = (-a01 * b11 + a02 * b10 - a03 * b09) * invDet;
    dest[2] = (a31 * b05 - a32 * b04 + a33 * b03) * invDet;
    dest[3] = (-a21 * b05 + a22 * b04 - a23 * b03) * invDet;
    dest[4] = (-a10 * b11 + a12 * b08 - a13 * b07) * invDet;
    dest[5] = (a00 * b11 - a02 * b08 + a03 * b07) * invDet;
    dest[6] = (-a30 * b05 + a32 * b02 - a33 * b01) * invDet;
    dest[7] = (a20 * b05 - a22 * b02 + a23 * b01) * invDet;
    dest[8] = (a10 * b10 - a11 * b08 + a13 * b06) * invDet;
    dest[9] = (-a00 * b10 + a01 * b08 - a03 * b06) * invDet;
    dest[10] = (a30 * b04 - a31 * b02 + a33 * b00) * invDet;
    dest[11] = (-a20 * b04 + a21 * b02 - a23 * b00) * invDet;
    dest[12] = (-a10 * b09 + a11 * b07 - a12 * b06) * invDet;
    dest[13] = (a00 * b09 - a01 * b07 + a02 * b06) * invDet;
    dest[14] = (-a30 * b03 + a31 * b01 - a32 * b00) * invDet;
    dest[15] = (a20 * b03 - a21 * b01 + a22 * b00) * invDet;

    return dest;
};

/** @private */
var SceneJS_math_traceMat4 = function(m) {
    return (m[0] + m[5] + m[10] + m[15]);
};

/** @private */
var SceneJS_math_translationMat4v = function(v) {
    var m = SceneJS_math_identityMat4();
    m[12] = v[0];
    m[13] = v[1];
    m[14] = v[2];
    return m;
};

/** @private */
var SceneJS_math_translationMat4c = function(x, y, z) {
    return SceneJS_math_translationMat4v([x,y,z]);
};

/** @private */
var SceneJS_math_translationMat4s = function(s) {
    return SceneJS_math_translationMat4c(s, s, s);
};

/** @private */
var SceneJS_math_rotationMat4v = function(anglerad, axis) {
    var ax = SceneJS_math_normalizeVec4([axis[0],axis[1],axis[2],0.0]);
    var s = Math.sin(anglerad);
    var c = Math.cos(anglerad);
    var q = 1.0 - c;

    var x = ax[0];
    var y = ax[1];
    var z = ax[2];

    var xy,yz,zx,xs,ys,zs;

    //xx = x * x; used once
    //yy = y * y; used once
    //zz = z * z; used once
    xy = x * y;
    yz = y * z;
    zx = z * x;
    xs = x * s;
    ys = y * s;
    zs = z * s;

    var m = SceneJS_math_mat4();

    m[0] = (q * x * x) + c;
    m[1] = (q * xy) + zs;
    m[2] = (q * zx) - ys;
    m[3] = 0.0;

    m[4] = (q * xy) - zs;
    m[5] = (q * y * y) + c;
    m[6] = (q * yz) + xs;
    m[7] = 0.0;

    m[8] = (q * zx) + ys;
    m[9] = (q * yz) - xs;
    m[10] = (q * z * z) + c;
    m[11] = 0.0;

    m[12] = 0.0;
    m[13] = 0.0;
    m[14] = 0.0;
    m[15] = 1.0;

    return m;
};

/** @private */
var SceneJS_math_rotationMat4c = function(anglerad, x, y, z) {
    return SceneJS_math_rotationMat4v(anglerad, [x,y,z]);
};

/** @private */
var SceneJS_math_scalingMat4v = function(v) {
    var m = SceneJS_math_identityMat4();
    m[0] = v[0];
    m[5] = v[1];
    m[10] = v[2];
    return m;
};

/** @private */
var SceneJS_math_scalingMat4c = function(x, y, z) {
    return SceneJS_math_scalingMat4v([x,y,z]);
};

/** @private */
var SceneJS_math_scalingMat4s = function(s) {
    return SceneJS_math_scalingMat4c(s, s, s);
};

/**
 * Default lookat properties - eye at 0,0,1, looking at 0,0,0, up vector pointing up Y-axis
 */
var SceneJS_math_LOOKAT_OBJ = {
    eye:    {x: 0, y:0, z:10.0 },
    look:   {x:0, y:0, z:0.0 },
    up:     {x:0, y:1, z:0.0 }
};

/**
 * Default lookat properties in array form - eye at 0,0,1, looking at 0,0,0, up vector pointing up Y-axis
 */
var SceneJS_math_LOOKAT_ARRAYS = {
    eye:    [0, 0, 10.0],
    look:   [0, 0, 0.0 ],
    up:     [0, 1, 0.0 ]
};

/**
 * Default orthographic projection properties
 */
var SceneJS_math_ORTHO_OBJ = {
    left: -1.0,
    right: 1.0,
    bottom: -1.0,
    near: 0.1,
    top: 1.0,
    far: 5000.0
};

/**
 * @param pos vec3 position of the viewer
 * @param target vec3 point the viewer is looking at
 * @param up vec3 pointing "up"
 * @param dest mat4 Optional, mat4 frustum matrix will be written into
 *
 * @return {mat4} dest if specified, a new mat4 otherwise
 */
var SceneJS_math_lookAtMat4v = function(pos, target, up, dest) {
    if (!dest) {
        dest = SceneJS_math_mat4();
    }

    var posx = pos[0],
            posy = pos[1],
            posz = pos[2],
            upx = up[0],
            upy = up[1],
            upz = up[2],
            targetx = target[0],
            targety = target[1],
            targetz = target[2];

    if (posx == targetx && posy == targety && posz == targetz) {
        return SceneJS_math_identityMat4();
    }

    var z0,z1,z2,x0,x1,x2,y0,y1,y2,len;

    //vec3.direction(eye, center, z);
    z0 = posx - targetx;
    z1 = posy - targety;
    z2 = posz - targetz;

    // normalize (no check needed for 0 because of early return)
    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    //vec3.normalize(vec3.cross(up, z, x));
    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    //vec3.normalize(vec3.cross(z, x, y));
    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    dest[0] = x0;
    dest[1] = y0;
    dest[2] = z0;
    dest[3] = 0;
    dest[4] = x1;
    dest[5] = y1;
    dest[6] = z1;
    dest[7] = 0;
    dest[8] = x2;
    dest[9] = y2;
    dest[10] = z2;
    dest[11] = 0;
    dest[12] = -(x0 * posx + x1 * posy + x2 * posz);
    dest[13] = -(y0 * posx + y1 * posy + y2 * posz);
    dest[14] = -(z0 * posx + z1 * posy + z2 * posz);
    dest[15] = 1;

    return dest;
};

/** @private */
var SceneJS_math_lookAtMat4c = function(posx, posy, posz, targetx, targety, targetz, upx, upy, upz) {
    return SceneJS_math_lookAtMat4v([posx,posy,posz], [targetx,targety,targetz], [upx,upy,upz]);
};

/** @private */
var SceneJS_math_orthoMat4c = function(left, right, bottom, top, near, far, dest) {
    if (!dest) {
        dest = SceneJS_math_mat4();
    }
    var rl = (right - left);
    var tb = (top - bottom);
    var fn = (far - near);

    dest[0] = 2.0 / rl;
    dest[1] = 0.0;
    dest[2] = 0.0;
    dest[3] = 0.0;

    dest[4] = 0.0;
    dest[5] = 2.0 / tb;
    dest[6] = 0.0;
    dest[7] = 0.0;

    dest[8] = 0.0;
    dest[9] = 0.0;
    dest[10] = -2.0 / fn;
    dest[11] = 0.0;

    dest[12] = -(left + right) / rl;
    dest[13] = -(top + bottom) / tb;
    dest[14] = -(far + near) / fn;
    dest[15] = 1.0;

    return dest;
};

/** @private */
var SceneJS_math_frustumMat4v = function(fmin, fmax) {
    var fmin4 = [fmin[0],fmin[1],fmin[2],0.0];
    var fmax4 = [fmax[0],fmax[1],fmax[2],0.0];
    var vsum = SceneJS_math_mat4();
    SceneJS_math_addVec4(fmax4, fmin4, vsum);
    var vdif = SceneJS_math_mat4();
    SceneJS_math_subVec4(fmax4, fmin4, vdif);
    var t = 2.0 * fmin4[2];

    var m = SceneJS_math_mat4();
    var vdif0 = vdif[0], vdif1 = vdif[1], vdif2 = vdif[2];

    m[0] = t / vdif0;
    m[1] = 0.0;
    m[2] = 0.0;
    m[3] = 0.0;

    m[4] = 0.0;
    m[5] = t / vdif1;
    m[6] = 0.0;
    m[7] = 0.0;

    m[8] = vsum[0] / vdif0;
    m[9] = vsum[1] / vdif1;
    m[10] = -vsum[2] / vdif2;
    m[11] = -1.0;

    m[12] = 0.0;
    m[13] = 0.0;
    m[14] = -t * fmax4[2] / vdif2;
    m[15] = 0.0;

    return m;
};

/** @private */
var SceneJS_math_frustumMatrix4 = function(left, right, bottom, top, near, far, dest) {
    if (!dest) {
        dest = SceneJS_math_mat4();
    }
    var rl = (right - left);
    var tb = (top - bottom);
    var fn = (far - near);
    dest[0] = (near * 2) / rl;
    dest[1] = 0;
    dest[2] = 0;
    dest[3] = 0;
    dest[4] = 0;
    dest[5] = (near * 2) / tb;
    dest[6] = 0;
    dest[7] = 0;
    dest[8] = (right + left) / rl;
    dest[9] = (top + bottom) / tb;
    dest[10] = -(far + near) / fn;
    dest[11] = -1;
    dest[12] = 0;
    dest[13] = 0;
    dest[14] = -(far * near * 2) / fn;
    dest[15] = 0;
    return dest;
};


/** @private */
var SceneJS_math_perspectiveMatrix4 = function(fovyrad, aspectratio, znear, zfar) {
    var pmin = [];
    var pmax = [];

    pmin[2] = znear;
    pmax[2] = zfar;

    pmax[1] = pmin[2] * Math.tan(fovyrad / 2.0);
    pmin[1] = -pmax[1];

    pmax[0] = pmax[1] * aspectratio;
    pmin[0] = -pmax[0];

    return SceneJS_math_frustumMat4v(pmin, pmax);
};

/** @private */
var SceneJS_math_transformPoint3 = function(m, p) {
    var p0 = p[0], p1 = p[1], p2 = p[2];
    return [
        (m[0] * p0) + (m[4] * p1) + (m[8] * p2) + m[12],
        (m[1] * p0) + (m[5] * p1) + (m[9] * p2) + m[13],
        (m[2] * p0) + (m[6] * p1) + (m[10] * p2) + m[14],
        (m[3] * p0) + (m[7] * p1) + (m[11] * p2) + m[15]
    ];
};


/** @private */
var SceneJS_math_transformPoints3 = function(m, points) {
    var result = new Array(points.length);
    var len = points.length;
    var p0, p1, p2;
    var pi;

    // cache values
    var m0 = m[0], m1 = m[1], m2 = m[2], m3 = m[3];
    var m4 = m[4], m5 = m[5], m6 = m[6], m7 = m[7];
    var m8 = m[8], m9 = m[9], m10 = m[10], m11 = m[11];
    var m12 = m[12], m13 = m[13], m14 = m[14], m15 = m[15];

    for (var i = 0; i < len; ++i) {
        // cache values
        pi = points[i];
        p0 = pi[0];
        p1 = pi[1];
        p2 = pi[2];

        result[i] = [
            (m0 * p0) + (m4 * p1) + (m8 * p2) + m12,
            (m1 * p0) + (m5 * p1) + (m9 * p2) + m13,
            (m2 * p0) + (m6 * p1) + (m10 * p2) + m14,
            (m3 * p0) + (m7 * p1) + (m11 * p2) + m15
        ];
    }

    return result;
};

/** @private */
var SceneJS_math_transformVector3 = function(m, v) {
    var v0 = v[0], v1 = v[1], v2 = v[2];
    return [
        (m[0] * v0) + (m[4] * v1) + (m[8] * v2),
        (m[1] * v0) + (m[5] * v1) + (m[9] * v2),
        (m[2] * v0) + (m[6] * v1) + (m[10] * v2)
    ];
};

var SceneJS_math_transformVector4 = function(m, v) {
    var v0 = v[0], v1 = v[1], v2 = v[2], v3 = v[3];
    return [
        m[ 0] * v0 + m[ 4] * v1 + m[ 8] * v2 + m[12] * v3,
        m[ 1] * v0 + m[ 5] * v1 + m[ 9] * v2 + m[13] * v3,
        m[ 2] * v0 + m[ 6] * v1 + m[10] * v2 + m[14] * v3,
        m[ 3] * v0 + m[ 7] * v1 + m[11] * v2 + m[15] * v3
    ];
};

/** @private */
var SceneJS_math_projectVec4 = function(v) {
    var f = 1.0 / v[3];
    return [v[0] * f, v[1] * f, v[2] * f, 1.0];
};


/** @private */
var SceneJS_math_Plane3 = function (normal, offset, normalize) {
    this.normal = [0.0, 0.0, 1.0 ];

    this.offset = 0.0;
    if (normal && offset) {
        var normal0 = normal[0], normal1 = normal[1], normal2 = normal[2];
        this.offset = offset;

        if (normalize) {
            var s = Math.sqrt(
                    normal0 * normal0 +
                    normal1 * normal1 +
                    normal2 * normal2
                    );
            if (s > 0.0) {
                s = 1.0 / s;
                this.normal[0] = normal0 * s;
                this.normal[1] = normal1 * s;
                this.normal[2] = normal2 * s;
                this.offset *= s;
            }
        }
    }
};

/** @private */
var SceneJS_math_MAX_DOUBLE = Number.POSITIVE_INFINITY;
/** @private */
var SceneJS_math_MIN_DOUBLE = Number.NEGATIVE_INFINITY;

/** @private
 *
 */
var SceneJS_math_Box3 = function(min, max) {
    this.min = min || [ SceneJS_math_MAX_DOUBLE,SceneJS_math_MAX_DOUBLE,SceneJS_math_MAX_DOUBLE ];
    this.max = max || [ SceneJS_math_MIN_DOUBLE,SceneJS_math_MIN_DOUBLE,SceneJS_math_MIN_DOUBLE ];

    /** @private */
    this.init = function(min, max) {
        this.min[0] = min[0];
        this.min[1] = min[1];
        this.min[2] = min[2];
        this.max[0] = max[0];
        this.max[1] = max[1];
        this.max[2] = max[2];
        return this;
    };

    /** @private */
    this.fromPoints = function(points) {
        var pointsLength = points.length;

        for (var i = 0; i < pointsLength; ++i) {
            var points_i3 = points[i][3];
            var pDiv0 = points[i][0] / points_i3;
            var pDiv1 = points[i][1] / points_i3;
            var pDiv2 = points[i][2] / points_i3;

            if (pDiv0 < this.min[0]) {
                this.min[0] = pDiv0;
            }
            if (pDiv1 < this.min[1]) {
                this.min[1] = pDiv1;
            }
            if (pDiv2 < this.min[2]) {
                this.min[2] = pDiv2;
            }

            if (pDiv0 > this.max[0]) {
                this.max[0] = pDiv0;
            }
            if (pDiv1 > this.max[1]) {
                this.max[1] = pDiv1;
            }
            if (pDiv2 > this.max[2]) {
                this.max[2] = pDiv2;
            }
        }
        return this;
    };

    /** @private */
    this.isEmpty = function() {
        return (
                (this.min[0] >= this.max[0]) &&
                (this.min[1] >= this.max[1]) &&
                (this.min[2] >= this.max[2])
                );
    };

    /** @private */
    this.getCenter = function() {
        return [
            (this.max[0] + this.min[0]) / 2.0,
            (this.max[1] + this.min[1]) / 2.0,
            (this.max[2] + this.min[2]) / 2.0
        ];
    };

    /** @private */
    this.getSize = function() {
        return [
            (this.max[0] - this.min[0]),
            (this.max[1] - this.min[1]),
            (this.max[2] - this.min[2])
        ];
    };

    /** @private */
    this.getFacesAreas = function() {
        var s = this.size;
        return [
            (s[1] * s[2]),
            (s[0] * s[2]),
            (s[0] * s[1])
        ];
    };

    /** @private */
    this.getSurfaceArea = function() {
        var a = this.getFacesAreas();
        return ((a[0] + a[1] + a[2]) * 2.0);
    };

    /** @private */
    this.getVolume = function() {
        var s = this.size;
        return (s[0] * s[1] * s[2]);
    };

    /** @private */
    this.getOffset = function(half_delta) {
        this.min[0] -= half_delta;
        this.min[1] -= half_delta;
        this.min[2] -= half_delta;
        this.max[0] += half_delta;
        this.max[1] += half_delta;
        this.max[2] += half_delta;
        return this;
    };
};

/** @private
 *
 * @param min
 * @param max
 */
var SceneJS_math_AxisBox3 = function(min, max) {
    var min0 = min[0], min1 = min[1], min2 = min[2];
    var max0 = max[0], max1 = max[1], max2 = max[2];

    this.verts = [
        [min0, min1, min2],
        [max0, min1, min2],
        [max0, max1, min2],
        [min0, max1, min2],

        [min0, min1, max2],
        [max0, min1, max2],
        [max0, max1, max2],
        [min0, max1, max2]
    ];

    /** @private */
    this.toBox3 = function() {
        var box = new SceneJS_math_Box3();
        for (var i = 0; i < 8; ++i) {
            var v = this.verts[i];
            for (var j = 0; j < 3; ++j) {
                if (v[j] < box.min[j]) {
                    box.min[j] = v[j];
                }
                if (v[j] > box.max[j]) {
                    box.max[j] = v[j];
                }
            }
        }
    };
};

/** @private
 *
 * @param center
 * @param radius
 */
var SceneJS_math_Sphere3 = function(center, radius) {
    this.center = [center[0], center[1], center[2] ];
    this.radius = radius;

    /** @private */
    this.isEmpty = function() {
        return (this.radius === 0.0);
    };

    /** @private */
    this.surfaceArea = function() {
        return (4.0 * Math.PI * this.radius * this.radius);
    };

    /** @private */
    this.getVolume = function() {
        var thisRadius = this.radius;
        return ((4.0 / 3.0) * Math.PI * thisRadius * thisRadius * thisRadius);
    };
};

/** Creates billboard matrix from given view matrix
 * @private
 */
var SceneJS_math_billboardMat = function(viewMatrix) {
    var rotVec = [
        SceneJS_math_getColMat4(viewMatrix, 0),
        SceneJS_math_getColMat4(viewMatrix, 1),
        SceneJS_math_getColMat4(viewMatrix, 2)
    ];

    var scaleVec = [
        SceneJS_math_lenVec4(rotVec[0]),
        SceneJS_math_lenVec4(rotVec[1]),
        SceneJS_math_lenVec4(rotVec[2])
    ];

    var scaleVecRcp = SceneJS_math_mat4();
    SceneJS_math_rcpVec3(scaleVec, scaleVecRcp);
    var sMat = SceneJS_math_scalingMat4v(scaleVec);
    //var sMatInv = SceneJS_math_scalingMat4v(scaleVecRcp);

    SceneJS_math_mulVec4Scalar(rotVec[0], scaleVecRcp[0]);
    SceneJS_math_mulVec4Scalar(rotVec[1], scaleVecRcp[1]);
    SceneJS_math_mulVec4Scalar(rotVec[2], scaleVecRcp[2]);

    var rotMatInverse = SceneJS_math_identityMat4();

    SceneJS_math_setRowMat4(rotMatInverse, 0, rotVec[0]);
    SceneJS_math_setRowMat4(rotMatInverse, 1, rotVec[1]);
    SceneJS_math_setRowMat4(rotMatInverse, 2, rotVec[2]);

    //return rotMatInverse;
    //return SceneJS_math_mulMat4(sMatInv, SceneJS_math_mulMat4(rotMatInverse, sMat));
    return SceneJS_math_mulMat4(rotMatInverse, sMat);
    // return SceneJS_math_mulMat4(sMat, SceneJS_math_mulMat4(rotMatInverse, sMat));
    //return SceneJS_math_mulMat4(sMatInv, SceneJS_math_mulMat4(rotMatInverse, sMat));
};

/** @private */
var SceneJS_math_FrustumPlane = function(nx, ny, nz, offset) {
    var s = 1.0 / Math.sqrt(nx * nx + ny * ny + nz * nz);
    this.normal = [nx * s, ny * s, nz * s];
    this.offset = offset * s;
    this.testVertex = [
        (this.normal[0] >= 0.0) ? (1) : (0),
        (this.normal[1] >= 0.0) ? (1) : (0),
        (this.normal[2] >= 0.0) ? (1) : (0)];
};

/** @private */
var SceneJS_math_OUTSIDE_FRUSTUM = 3;
/** @private */
var SceneJS_math_INTERSECT_FRUSTUM = 4;
/** @private */
var SceneJS_math_INSIDE_FRUSTUM = 5;

/** @private */
var SceneJS_math_Frustum = function(viewMatrix, projectionMatrix, viewport) {
    var m = SceneJS_math_mat4();
    SceneJS_math_mulMat4(projectionMatrix, viewMatrix, m);

    // cache m indexes
    var m0 = m[0], m1 = m[1], m2 = m[2], m3 = m[3];
    var m4 = m[4], m5 = m[5], m6 = m[6], m7 = m[7];
    var m8 = m[8], m9 = m[9], m10 = m[10], m11 = m[11];
    var m12 = m[12], m13 = m[13], m14 = m[14], m15 = m[15];

    //var q = [ m[3], m[7], m[11] ]; just reuse m indexes instead of making new var
    var planes = [
        new SceneJS_math_FrustumPlane(m3 - m0, m7 - m4, m11 - m8, m15 - m12),
        new SceneJS_math_FrustumPlane(m3 + m0, m7 + m4, m11 + m8, m15 + m12),
        new SceneJS_math_FrustumPlane(m3 - m1, m7 - m5, m11 - m9, m15 - m13),
        new SceneJS_math_FrustumPlane(m3 + m1, m7 + m5, m11 + m9, m15 + m13),
        new SceneJS_math_FrustumPlane(m3 - m2, m7 - m6, m11 - m10, m15 - m14),
        new SceneJS_math_FrustumPlane(m3 + m2, m7 + m6, m11 + m10, m15 + m14)
    ];

    /* Resources for LOD
     */
    var rotVec = [
        SceneJS_math_getColMat4(viewMatrix, 0),
        SceneJS_math_getColMat4(viewMatrix, 1),
        SceneJS_math_getColMat4(viewMatrix, 2)
    ];

    var scaleVec = [
        SceneJS_math_lenVec4(rotVec[0]),
        SceneJS_math_lenVec4(rotVec[1]),
        SceneJS_math_lenVec4(rotVec[2])
    ];

    var scaleVecRcp = SceneJS_math_rcpVec3(scaleVec);
    var sMat = SceneJS_math_scalingMat4v(scaleVec);
    var sMatInv = SceneJS_math_scalingMat4v(scaleVecRcp);

    SceneJS_math_mulVec4Scalar(rotVec[0], scaleVecRcp[0]);
    SceneJS_math_mulVec4Scalar(rotVec[1], scaleVecRcp[1]);
    SceneJS_math_mulVec4Scalar(rotVec[2], scaleVecRcp[2]);

    var rotMatInverse = SceneJS_math_identityMat4();

    SceneJS_math_setRowMat4(rotMatInverse, 0, rotVec[0]);
    SceneJS_math_setRowMat4(rotMatInverse, 1, rotVec[1]);
    SceneJS_math_setRowMat4(rotMatInverse, 2, rotVec[2]);

    if (!this.matrix) {
        this.matrix = SceneJS_math_mat4();
    }
    SceneJS_math_mulMat4(projectionMatrix, viewMatrix, this.matrix);
    if (!this.billboardMatrix) {
        this.billboardMatrix = SceneJS_math_mat4();
    }
    SceneJS_math_mulMat4(sMatInv, SceneJS_math_mulMat4(rotMatInverse, sMat), this.billboardMatrix);
    this.viewport = viewport.slice(0, 4);

    /** @private */
    this.textAxisBoxIntersection = function(box) {
        var ret = SceneJS_math_INSIDE_FRUSTUM;
        var bminmax = [ box.min, box.max ];
        var plane = null;

        for (var i = 0; i < 6; ++i) {
            plane = planes[i];
            if (((plane.normal[0] * bminmax[plane.testVertex[0]][0]) +
                 (plane.normal[1] * bminmax[plane.testVertex[1]][1]) +
                 (plane.normal[2] * bminmax[plane.testVertex[2]][2]) +
                 (plane.offset)) < 0.0) {
                return SceneJS_math_OUTSIDE_FRUSTUM;
            }
            if (((plane.normal[0] * bminmax[1 - plane.testVertex[0]][0]) +
                 (plane.normal[1] * bminmax[1 - plane.testVertex[1]][1]) +
                 (plane.normal[2] * bminmax[1 - plane.testVertex[2]][2]) +
                 (plane.offset)) < 0.0) {
                ret = SceneJS_math_INTERSECT_FRUSTUM;
            }
        }
        return ret;
    };

    /** @private */
    this.getProjectedSize = function(box) {
        var diagVec = SceneJS_math_mat4();
        SceneJS_math_subVec3(box.max, box.min, diagVec);

        var diagSize = SceneJS_math_lenVec3(diagVec);

        var size = Math.abs(diagSize);

        var p0 = [
            (box.min[0] + box.max[0]) * 0.5,
            (box.min[1] + box.max[1]) * 0.5,
            (box.min[2] + box.max[2]) * 0.5,
            0.0];

        var halfSize = size * 0.5;
        var p1 = [ -halfSize, 0.0, 0.0, 1.0 ];
        var p2 = [  halfSize, 0.0, 0.0, 1.0 ];

        p1 = SceneJS_math_mulMat4v4(this.billboardMatrix, p1);
        p1 = SceneJS_math_addVec4(p1, p0);
        p1 = SceneJS_math_projectVec4(SceneJS_math_mulMat4v4(this.matrix, p1));

        p2 = SceneJS_math_mulMat4v4(this.billboardMatrix, p2);
        p2 = SceneJS_math_addVec4(p2, p0);
        p2 = SceneJS_math_projectVec4(SceneJS_math_mulMat4v4(this.matrix, p2));

        return viewport[2] * Math.abs(p2[0] - p1[0]);
    };


    this.getProjectedState = function(modelCoords) {
        var viewCoords = SceneJS_math_transformPoints3(this.matrix, modelCoords);

        //var canvasBox = {
        //    min: [10000000, 10000000 ],
        //    max: [-10000000, -10000000]
        //};
        // separate variables instead of indexing an array
        var canvasBoxMin0 = 10000000, canvasBoxMin1 = 10000000;
        var canvasBoxMax0 = -10000000, canvasBoxMax1 = -10000000;

        var v, x, y;

        var arrLen = viewCoords.length;
        for (var i = 0; i < arrLen; ++i) {
            v = SceneJS_math_projectVec4(viewCoords[i]);
            x = v[0];
            y = v[1];

            if (x < -0.5) {
                x = -0.5;
            }

            if (y < -0.5) {
                y = -0.5;
            }

            if (x > 0.5) {
                x = 0.5;
            }

            if (y > 0.5) {
                y = 0.5;
            }


            if (x < canvasBoxMin0) {
                canvasBoxMin0 = x;
            }
            if (y < canvasBoxMin1) {
                canvasBoxMin1 = y;
            }

            if (x > canvasBoxMax0) {
                canvasBoxMax0 = x;
            }
            if (y > canvasBoxMax1) {
                canvasBoxMax1 = y;
            }
        }

        canvasBoxMin0 += 0.5;
        canvasBoxMin1 += 0.5;
        canvasBoxMax0 += 0.5;
        canvasBoxMax1 += 0.5;

        // cache viewport indexes
        var viewport2 = viewport[2], viewport3 = viewport[3];

        canvasBoxMin0 = (canvasBoxMin0 * (viewport2 + 15));
        canvasBoxMin1 = (canvasBoxMin1 * (viewport3 + 15));
        canvasBoxMax0 = (canvasBoxMax0 * (viewport2 + 15));
        canvasBoxMax1 = (canvasBoxMax1 * (viewport3 + 15));

        var diagCanvasBoxVec = SceneJS_math_mat4();
        SceneJS_math_subVec2([canvasBoxMax0, canvasBoxMax1],
                [canvasBoxMin0, canvasBoxMin1],
                diagCanvasBoxVec);
        var diagCanvasBoxSize = SceneJS_math_lenVec2(diagCanvasBoxVec);

        if (canvasBoxMin0 < 0) {
            canvasBoxMin0 = 0;
        }
        if (canvasBoxMax0 > viewport2) {
            canvasBoxMax0 = viewport2;
        }

        if (canvasBoxMin1 < 0) {
            canvasBoxMin1 = 0;
        }
        if (canvasBoxMax1 > viewport3) {
            canvasBoxMax1 = viewport3;
        }
        return {
            canvasBox:  {
                min: [canvasBoxMin0, canvasBoxMin1 ],
                max: [canvasBoxMax0, canvasBoxMax1 ]
            },
            canvasSize: diagCanvasBoxSize
        };
    };
};

var SceneJS_math_identityQuaternion = function() {
    return [ 0.0, 0.0, 0.0, 1.0 ];
};

var SceneJS_math_angleAxisQuaternion = function(x, y, z, degrees) {
    var angleRad = (degrees / 180.0) * Math.PI;
    var halfAngle = angleRad / 2.0;
    var fsin = Math.sin(halfAngle);
    return [
        fsin * x,
        fsin * y,
        fsin * z,
        Math.cos(halfAngle)
    ];
};

var SceneJS_math_mulQuaternions = function(p, q) {
    var p0 = p[0], p1 = p[1], p2 = p[2], p3 = p[3];
    var q0 = q[0], q1 = q[1], q2 = q[2], q3 = q[3];
    return [
        p3 * q0 + p0 * q3 + p1 * q2 - p2 * q1,
        p3 * q1 + p1 * q3 + p2 * q0 - p0 * q2,
        p3 * q2 + p2 * q3 + p0 * q1 - p1 * q0,
        p3 * q3 - p0 * q0 - p1 * q1 - p2 * q2
    ];
};

var SceneJS_math_newMat4FromQuaternion = function(q) {
    var q0 = q[0], q1 = q[1], q2 = q[2], q3 = q[3];
    var tx = 2.0 * q0;
    var ty = 2.0 * q1;
    var tz = 2.0 * q2;
    var twx = tx * q3;
    var twy = ty * q3;
    var twz = tz * q3;
    var txx = tx * q0;
    var txy = ty * q0;
    var txz = tz * q0;
    var tyy = ty * q1;
    var tyz = tz * q1;
    var tzz = tz * q2;
    var m = SceneJS_math_identityMat4();
    SceneJS_math_setCellMat4(m, 0, 0, 1.0 - (tyy + tzz));
    SceneJS_math_setCellMat4(m, 0, 1, txy - twz);
    SceneJS_math_setCellMat4(m, 0, 2, txz + twy);
    SceneJS_math_setCellMat4(m, 1, 0, txy + twz);
    SceneJS_math_setCellMat4(m, 1, 1, 1.0 - (txx + tzz));
    SceneJS_math_setCellMat4(m, 1, 2, tyz - twx);
    SceneJS_math_setCellMat4(m, 2, 0, txz - twy);
    SceneJS_math_setCellMat4(m, 2, 1, tyz + twx);
    SceneJS_math_setCellMat4(m, 2, 2, 1.0 - (txx + tyy));
    return m;
};


//var SceneJS_math_slerp(t, q1, q2) {
//    var result = SceneJS_math_identityQuaternion();
//    var cosHalfAngle = q1[3] * q2[3] + q1[0] * q2[0] + q1[1] * q2[1] + q1[2] * q2[2];
//    if (Math.abs(cosHalfAngle) >= 1) {
//        return [ q1[0],q1[1], q1[2], q1[3] ];
//    } else {
//        var halfAngle = Math.acos(cosHalfAngle);
//        var sinHalfAngle = Math.sqrt(1 - cosHalfAngle * cosHalfAngle);
//        if (Math.abs(sinHalfAngle) < 0.001) {
//            return [
//                q1[0] * 0.5 + q2[0] * 0.5,
//                q1[1] * 0.5 + q2[1] * 0.5,
//                q1[2] * 0.5 + q2[2] * 0.5,
//                q1[3] * 0.5 + q2[3] * 0.5
//            ];
//        } else {
//            var a = Math.sin((1 - t) * halfAngle) / sinHalfAngle;
//            var b = Math.sin(t * halfAngle) / sinHalfAngle;
//            return [
//                q1[0] * a + q2[0] * b,
//                q1[1] * a + q2[1] * b,
//                q1[2] * a + q2[2] * b,
//                q1[3] * a + q2[3] * b
//            ];
//        }
//    }
//}

var SceneJS_math_slerp = function(t, q1, q2) {
    //var result = SceneJS_math_identityQuaternion();
    var q13 = q1[3] * 0.0174532925;
    var q23 = q2[3] * 0.0174532925;
    var cosHalfAngle = q13 * q23 + q1[0] * q2[0] + q1[1] * q2[1] + q1[2] * q2[2];
    if (Math.abs(cosHalfAngle) >= 1) {
        return [ q1[0],q1[1], q1[2], q1[3] ];
    } else {
        var halfAngle = Math.acos(cosHalfAngle);
        var sinHalfAngle = Math.sqrt(1 - cosHalfAngle * cosHalfAngle);
        if (Math.abs(sinHalfAngle) < 0.001) {
            return [
                q1[0] * 0.5 + q2[0] * 0.5,
                q1[1] * 0.5 + q2[1] * 0.5,
                q1[2] * 0.5 + q2[2] * 0.5,
                q1[3] * 0.5 + q2[3] * 0.5
            ];
        } else {
            var a = Math.sin((1 - t) * halfAngle) / sinHalfAngle;
            var b = Math.sin(t * halfAngle) / sinHalfAngle;
            return [
                q1[0] * a + q2[0] * b,
                q1[1] * a + q2[1] * b,
                q1[2] * a + q2[2] * b,
                (q13 * a + q23 * b) * 57.295779579
            ];
        }
    }
};

var SceneJS_math_normalizeQuaternion = function(q) {
    var len = SceneJS_math_lenVec4([q[0], q[1], q[2], q[3]]);
    return [ q[0] / len, q[1] / len, q[2] / len, q[3] / len ];
};

var SceneJS_math_conjugateQuaternion = function(q) {
    return[-q[0],-q[1],-q[2],q[3]];
};

var SceneJS_math_angleAxisFromQuaternion = function(q) {
    q = SceneJS_math_normalizeQuaternion(q);
    var q3 = q[3];
    var angle = 2 * Math.acos(q3);
    var s = Math.sqrt(1 - q3 * q3);
    if (s < 0.001) { // test to avoid divide by zero, s is always positive due to sqrt
        return {
            x : q[0],
            y : q[1],
            z : q[2],
            angle: angle * 57.295779579
        };
    } else {
        return {
            x : q[0] / s,
            y : q[1] / s,
            z : q[2] / s,
            angle: angle * 57.295779579
        };
    }
};
/** Maps SceneJS node parameter names to WebGL enum names
 * @private
 */
var SceneJS_webgl_enumMap = {
    funcAdd:"FUNC_ADD",
    funcSubtract:"FUNC_SUBTRACT",
    funcReverseSubtract:"FUNC_REVERSE_SUBTRACT",
    zero:"ZERO",
    one:"ONE",
    srcColor:"SRC_COLOR",
    oneMinusSrcColor:"ONE_MINUS_SRC_COLOR",
    dstColor:"DST_COLOR",
    oneMinusDstColor:"ONE_MINUS_DST_COLOR",
    srcAlpha:"SRC_ALPHA",
    oneMinusSrcAlpha:"ONE_MINUS_SRC_ALPHA",
    dstAlpha:"DST_ALPHA",
    oneMinusDstAlpha:"ONE_MINUS_DST_ALPHA",
    contantColor:"CONSTANT_COLOR",
    oneMinusConstantColor:"ONE_MINUS_CONSTANT_COLOR",
    constantAlpha:"CONSTANT_ALPHA",
    oneMinusConstantAlpha:"ONE_MINUS_CONSTANT_ALPHA",
    srcAlphaSaturate:"SRC_ALPHA_SATURATE",
    front:"FRONT",
    back:"BACK",
    frontAndBack:"FRONT_AND_BACK",
    never:"NEVER",
    less:"LESS",
    equal:"EQUAL",
    lequal:"LEQUAL",
    greater:"GREATER",
    notequal:"NOTEQUAL",
    gequal:"GEQUAL",
    always:"ALWAYS",
    cw:"CW",
    ccw:"CCW",
    linear:"LINEAR",
    nearest:"NEAREST",
    linearMipMapNearest:"LINEAR_MIPMAP_NEAREST",
    nearestMipMapNearest:"NEAREST_MIPMAP_NEAREST",
    nearestMipMapLinear:"NEAREST_MIPMAP_LINEAR",
    linearMipMapLinear:"LINEAR_MIPMAP_LINEAR",
    repeat:"REPEAT",
    clampToEdge:"CLAMP_TO_EDGE",
    mirroredRepeat:"MIRRORED_REPEAT",
    alpha:"ALPHA",
    rgb:"RGB",
    rgba:"RGBA",
    luminance:"LUMINANCE",
    luminanceAlpha:"LUMINANCE_ALPHA",
    textureBinding2D:"TEXTURE_BINDING_2D",
    textureBindingCubeMap:"TEXTURE_BINDING_CUBE_MAP",
    compareRToTexture:"COMPARE_R_TO_TEXTURE", // Hardware Shadowing Z-depth,
    unsignedByte:"UNSIGNED_BYTE"
};

var SceneJS_webgl_ProgramUniform = function (gl, program, name, type, size, location, logging) {

    var func = null;
    if (type == gl.BOOL) {
        func = function (v) {
            gl.uniform1i(location, v);
        };
    } else if (type == gl.BOOL_VEC2) {
        func = function (v) {
            gl.uniform2iv(location, v);
        };
    } else if (type == gl.BOOL_VEC3) {
        func = function (v) {
            gl.uniform3iv(location, v);
        };
    } else if (type == gl.BOOL_VEC4) {
        func = function (v) {
            gl.uniform4iv(location, v);
        };
    } else if (type == gl.INT) {
        func = function (v) {
            gl.uniform1iv(location, v);
        };
    } else if (type == gl.INT_VEC2) {
        func = function (v) {
            gl.uniform2iv(location, v);
        };
    } else if (type == gl.INT_VEC3) {
        func = function (v) {
            gl.uniform3iv(location, v);
        };
    } else if (type == gl.INT_VEC4) {
        func = function (v) {
            gl.uniform4iv(location, v);
        };
    } else if (type == gl.FLOAT) {
        func = function (v) {
            gl.uniform1f(location, v);
        };
    } else if (type == gl.FLOAT_VEC2) {
        func = function (v) {
            gl.uniform2fv(location, v);
        };
    } else if (type == gl.FLOAT_VEC3) {
        func = function (v) {
            gl.uniform3fv(location, v);
        };
    } else if (type == gl.FLOAT_VEC4) {
        func = function (v) {
            gl.uniform4fv(location, v);
        };
    } else if (type == gl.FLOAT_MAT2) {
        func = function (v) {
            gl.uniformMatrix2fv(location, gl.FALSE, v);
        };
    } else if (type == gl.FLOAT_MAT3) {
        func = function (v) {
            gl.uniformMatrix3fv(location, gl.FALSE, v);
        };
    } else if (type == gl.FLOAT_MAT4) {
        func = function (v) {
            gl.uniformMatrix4fv(location, gl.FALSE, v);
        };
    } else {
        throw "Unsupported shader uniform type: " + type;
    }

    this.setValue = func;


    this.getValue = function () {
        return gl.getUniform(program, location);
    };

    this.getLocation = function () {
        return location;
    };
};

var SceneJS_webgl_ProgramSampler = function (gl, program, name, type, size, location) {
    this.bindTexture = function (texture, unit) {
        if (texture.bind(unit)) {
            gl.uniform1i(location, unit);
            return true;
        }
        return false;
    };
};

/** An attribute within a shader
 */
var SceneJS_webgl_ProgramAttribute = function (gl, program, name, type, size, location) {
    this.bindFloatArrayBuffer = function (buffer) {
        if (buffer) {
            buffer.bind();
            gl.enableVertexAttribArray(location);
            gl.vertexAttribPointer(location, buffer.itemSize, gl.FLOAT, false, 0, 0);   // Vertices are not homogeneous - no w-element
        }
    };

};

/**
 * A vertex/fragment shader in a program
 *
 * @private
 * @param gl WebGL gl
 * @param gl.VERTEX_SHADER | gl.FRAGMENT_SHADER
 * @param source Source code for shader
 * @param logging Shader will write logging's debug channel as it compiles
 */
var SceneJS_webgl_Shader = function (gl, type, source) {

    this.handle = gl.createShader(type);

    gl.shaderSource(this.handle, source);
    gl.compileShader(this.handle);

    this.valid = (gl.getShaderParameter(this.handle, gl.COMPILE_STATUS) != 0);

    if (!this.valid) {

        if (!gl.isContextLost()) { // Handled explicitely elsewhere, so wont rehandle here

            SceneJS.log.error("Shader program failed to compile: " + gl.getShaderInfoLog(this.handle));
            SceneJS.log.error("Shader source:");
            var lines = source.split('\n');
            for (var j = 0; j < lines.length; j++) {
                SceneJS.log.error(lines[j]);
            }

            throw SceneJS_error.fatalError(
                SceneJS.errors.SHADER_COMPILATION_FAILURE, "Shader program failed to compile");
        }
    }
};

/**
 * @class Wrapper for a WebGL program
 *
 * @param hash SceneJS-managed ID for program
 * @param gl WebGL gl
 * @param vertexSources Source codes for vertex shaders
 * @param fragmentSources Source codes for fragment shaders
 * @param logging Program and shaders will write to logging's debug channel as they compile and link
 */
var SceneJS_webgl_Program = function (gl, vertexSources, fragmentSources) {

    var a, i, u, u_name, location, shader;

    this._uniforms = {};
    this._samplers = {};
    this._attributes = {};

    /* Create shaders from sources
     */
    this._shaders = [];
    for (i = 0; i < vertexSources.length; i++) {
        this._shaders.push(new SceneJS_webgl_Shader(gl, gl.VERTEX_SHADER, vertexSources[i]));
    }
    for (i = 0; i < fragmentSources.length; i++) {
        this._shaders.push(new SceneJS_webgl_Shader(gl, gl.FRAGMENT_SHADER, fragmentSources[i]));
    }

    /* Create program, attach shaders, link and validate program
     */
    var handle = gl.createProgram();

    for (i = 0; i < this._shaders.length; i++) {
        shader = this._shaders[i];
        if (shader.valid) {
            gl.attachShader(handle, shader.handle);
        }
    }
    gl.linkProgram(handle);

    this.valid = (gl.getProgramParameter(handle, gl.LINK_STATUS) != 0);

    var debugCfg = SceneJS_configsModule.getConfigs("shading");
    if (debugCfg.validate !== false) {
        gl.validateProgram(handle);
        this.valid = this.valid && (gl.getProgramParameter(handle, gl.VALIDATE_STATUS) != 0);
    }

    if (!this.valid) {

        if (!gl.isContextLost()) { // Handled explicitely elsewhere, so wont rehandle here

            SceneJS.log.error("Shader program failed to link: " + gl.getProgramInfoLog(handle));

            SceneJS.log.error("Vertex shader(s):");
            for (i = 0; i < vertexSources.length; i++) {
                SceneJS.log.error("Vertex shader #" + i + ":");
                var lines = vertexSources[i].split('\n');
                for (var j = 0; j < lines.length; j++) {
                    SceneJS.log.error(lines[j]);

                }
            }

            SceneJS.log.error("Fragment shader(s):");
            for (i = 0; i < fragmentSources.length; i++) {
                SceneJS.log.error("Fragment shader #" + i + ":");
                var lines = fragmentSources[i].split('\n');
                for (var j = 0; j < lines.length; j++) {
                    SceneJS.log.error(lines[j]);
                }
            }

            throw SceneJS_error.fatalError(
                SceneJS.errors.SHADER_LINK_FAILURE, "Shader program failed to link");
        }
    }

    /* Discover active uniforms and samplers
     */

    var numUniforms = gl.getProgramParameter(handle, gl.ACTIVE_UNIFORMS);

    for (i = 0; i < numUniforms; ++i) {
        u = gl.getActiveUniform(handle, i);
        if (u) {
            u_name = u.name;
            if (u_name[u_name.length - 1] == "\u0000") {
                u_name = u_name.substr(0, u_name.length - 1);
            }
            location = gl.getUniformLocation(handle, u_name);
            if ((u.type == gl.SAMPLER_2D) || (u.type == gl.SAMPLER_CUBE) || (u.type == 35682)) {

                this._samplers[u_name] = new SceneJS_webgl_ProgramSampler(
                    gl,
                    handle,
                    u_name,
                    u.type,
                    u.size,
                    location);
            } else {
                this._uniforms[u_name] = new SceneJS_webgl_ProgramUniform(
                    gl,
                    handle,
                    u_name,
                    u.type,
                    u.size,
                    location);
            }
        }
    }

    /* Discover attributes
     */

    var numAttribs = gl.getProgramParameter(handle, gl.ACTIVE_ATTRIBUTES);
    for (i = 0; i < numAttribs; i++) {
        a = gl.getActiveAttrib(handle, i);
        if (a) {
            location = gl.getAttribLocation(handle, a.name);
            this._attributes[a.name] = new SceneJS_webgl_ProgramAttribute(
                gl,
                handle,
                a.name,
                a.type,
                a.size,
                location);
        }
    }

    this.setProfile = function (profile) {
        this._profile = profile;
    };

    this.bind = function () {
        gl.useProgram(handle);
        if (this._profile) {
            this._profile.program++;
        }
    };

    this.getUniformLocation = function (name) {
        var u = this._uniforms[name];
        if (u) {
            return u.getLocation();
        } else {
            // SceneJS.log.warn("Uniform not found in shader : " + name);
        }
    };

    this.getUniform = function (name) {
        var u = this._uniforms[name];
        if (u) {
            return u;
        } else {
            //      SceneJS.log.warn("Shader uniform load failed - uniform not found in shader : " + name);
        }
    };

    this.setUniform = function (name, value) {
        var u = this._uniforms[name];
        if (u) {
            u.setValue(value);
            if (this._profile) {
                this._profile.uniform++;
            }
        } else {
            //      SceneJS.log.warn("Shader uniform load failed - uniform not found in shader : " + name);
        }
    };

    this.getAttribute = function (name) {
        var attr = this._attributes[name];
        if (attr) {
            return attr;
        } else {
            //  logging.warn("Shader attribute bind failed - attribute not found in shader : " + name);
        }
    };

    this.bindFloatArrayBuffer = function (name, buffer) {
        var attr = this._attributes[name];
        if (attr) {
            attr.bindFloatArrayBuffer(buffer);
            if (this._profile) {
                this._profile.varying++;
            }
        } else {
            //  logging.warn("Shader attribute bind failed - attribute not found in shader : " + name);
        }
    };

    this.bindTexture = function (name, texture, unit) {
        var sampler = this._samplers[name];
        if (sampler) {
            if (this._profile) {
                this._profile.texture++;
            }
            return sampler.bindTexture(texture, unit);
        } else {
            return false;
        }
    };

    this.unbind = function () {
        //     gl.useProgram(0);
    };

    this.destroy = function () {

        if (this.valid) {

            //   SceneJS.log.debug("Destroying shader program: '" + hash + "'");
            gl.deleteProgram(handle);
            for (var s in this._shaders) {
                gl.deleteShader(this._shaders[s].handle);
            }
            this._attributes = null;
            this._uniforms = null;
            this._samplers = null;
            this.valid = false;
        }
    };
};

var SceneJS_webgl_Texture2D = function (gl, cfg) {

    this.target = gl.TEXTURE_2D;
    this.minFilter = cfg.minFilter;
    this.magFilter = cfg.magFilter;
    this.wrapS = cfg.wrapS;
    this.wrapT = cfg.wrapT;
    this.update = cfg.update;  // For dynamically-sourcing textures (ie movies etc)
    this.texture = cfg.texture;
    this.format = gl.RGBA;
    this.isDepth = false;
    this.depthMode = 0;
    this.depthCompareMode = 0;
    this.depthCompareFunc = 0;

    try {
        gl.bindTexture(this.target, this.texture);

        if (cfg.minFilter) {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, cfg.minFilter);
        }

        if (cfg.magFilter) {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, cfg.magFilter);
        }

        if (cfg.wrapS) {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, cfg.wrapS);
        }

        if (cfg.wrapT) {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, cfg.wrapT);
        }

        if (cfg.minFilter == gl.NEAREST_MIPMAP_NEAREST ||
            cfg.minFilter == gl.LINEAR_MIPMAP_NEAREST ||
            cfg.minFilter == gl.NEAREST_MIPMAP_LINEAR ||
            cfg.minFilter == gl.LINEAR_MIPMAP_LINEAR) {
            gl.generateMipmap(gl.TEXTURE_2D);
        }

        gl.bindTexture(this.target, null);

    } catch (e) {
        throw SceneJS_error.fatalError(SceneJS.errors.ERROR, "Failed to create texture: " + e.message || e);
    }

    this.bind = function (unit) {
        if (this.texture) {
            gl.activeTexture(gl["TEXTURE" + unit]);
            gl.bindTexture(this.target, this.texture);
            if (this.update) {
                this.update(gl);
            }
            return true;
        }
        return false;
    };

    this.unbind = function (unit) {
        if (this.texture) {
            gl.activeTexture(gl["TEXTURE" + unit]);
            gl.bindTexture(this.target, null);
        }
    };

    this.destroy = function () {
        if (this.texture) {
            gl.deleteTexture(this.texture);
            this.texture = null;
        }
    };
};


function SceneJS_webgl_ensureImageSizePowerOfTwo(image) {
    if (!SceneJS_webgl_isPowerOfTwo(image.width) || !SceneJS_webgl_isPowerOfTwo(image.height)) {
        var canvas = document.createElement("canvas");
        canvas.width = SceneJS_webgl_nextHighestPowerOfTwo(image.width);
        canvas.height = SceneJS_webgl_nextHighestPowerOfTwo(image.height);
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image,
            0, 0, image.width, image.height,
            0, 0, canvas.width, canvas.height);
        image = canvas;
    }
    return image;
}

function SceneJS_webgl_isPowerOfTwo(x) {
    return (x & (x - 1)) == 0;
}

function SceneJS_webgl_nextHighestPowerOfTwo(x) {
    --x;
    for (var i = 1; i < 32; i <<= 1) {
        x = x | x >> i;
    }
    return x + 1;
}

/** Buffer for vertices and indices
 *
 * @private
 * @param gl  WebGL gl
 * @param type     Eg. ARRAY_BUFFER, ELEMENT_ARRAY_BUFFER
 * @param values   WebGL array wrapper
 * @param numItems Count of items in array wrapper
 * @param itemSize Size of each item
 * @param usage    Eg. STATIC_DRAW
 */

var SceneJS_webgl_ArrayBuffer = function (gl, type, values, numItems, itemSize, usage) {


    this.type = type;
    this.itemSize = itemSize;

    this._allocate = function (values, numItems) {
        this.handle = gl.createBuffer();
        this.handle.numItems = numItems;
        this.handle.itemSize = itemSize;
        gl.bindBuffer(type, this.handle);
        gl.bufferData(type, values, usage);
        this.handle.numItems = numItems;
        gl.bindBuffer(type, null);
        this.numItems = numItems;
        this.length = values.length;
    };

    this._allocate(values, numItems);

    this.bind = function () {
        gl.bindBuffer(type, this.handle);
    };

    this.setData = function (data, offset) {

        if (data.length > this.length) {
            this.destroy();
            this._allocate(data, data.length);

        } else {

            if (offset || offset === 0) {
                gl.bufferSubData(type, offset, data);
            } else {
                gl.bufferData(type, data);
            }
        }
    };

    this.unbind = function () {
        gl.bindBuffer(type, null);
    };

    this.destroy = function () {
        gl.deleteBuffer(this.handle);
    };
};


var SceneJS_PickBuffer = function (cfg) {

    var canvas = cfg.canvas;
    var gl = canvas.gl;

    var pickBuf;
    var bound = false;

    /**
     * Called when WebGL context restored
     */
    this.webglRestored = function (_gl) {
        gl = _gl;
        pickBuf = null;
    };

    this._touch = function () {

        var width = canvas.canvas.width;
        var height = canvas.canvas.height;

        if (pickBuf) { // Currently have a pick buffer
            if (pickBuf.width == width && pickBuf.height == height) { // Canvas size unchanged, buffer still good
                return;
            } else { // Buffer needs reallocation for new canvas size

                gl.deleteTexture(pickBuf.texture);
                gl.deleteFramebuffer(pickBuf.framebuf);
                gl.deleteRenderbuffer(pickBuf.renderbuf);
            }
        }

        pickBuf = {
            framebuf:gl.createFramebuffer(),
            renderbuf:gl.createRenderbuffer(),
            texture:gl.createTexture(),
            width:width,
            height:height
        };

        gl.bindFramebuffer(gl.FRAMEBUFFER, pickBuf.framebuf);

        gl.bindTexture(gl.TEXTURE_2D, pickBuf.texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

        try {
            // Do it the way the spec requires
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        } catch (exception) {
            // Workaround for what appears to be a Minefield bug.
            var textureStorage = new WebGLUnsignedByteArray(width * height * 3);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, textureStorage);
        }
        gl.bindRenderbuffer(gl.RENDERBUFFER, pickBuf.renderbuf);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pickBuf.texture, 0);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, pickBuf.renderbuf);
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        /* Verify framebuffer is OK
         */
        gl.bindFramebuffer(gl.FRAMEBUFFER, pickBuf.framebuf);
        if (!gl.isFramebuffer(pickBuf.framebuf)) {
            throw SceneJS_error.fatalError(SceneJS.errors.ERROR, "Invalid framebuffer");
        }
        var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        switch (status) {
            case gl.FRAMEBUFFER_COMPLETE:
                break;
            case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                throw SceneJS_error.fatalError(SceneJS.errors.ERROR, "Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
            case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                throw SceneJS_error.fatalError(SceneJS.errors.ERROR, "Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
            case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                throw SceneJS_error.fatalError(SceneJS.errors.ERROR, "Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
            case gl.FRAMEBUFFER_UNSUPPORTED:
                throw SceneJS_error.fatalError(SceneJS.errors.ERROR, "Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");
            default:
                throw SceneJS_error.fatalError(SceneJS.errors.ERROR, "Incomplete framebuffer: " + status);
        }

        bound = false;
    };

    this.bind = function () {

        this._touch();

        if (bound) {
            return;
        }

        gl.bindFramebuffer(gl.FRAMEBUFFER, pickBuf.framebuf);

        bound = true;
    };

    this.clear = function () {

        if (!bound) {
            throw "Pick buffer not bound";
        }

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.disable(gl.BLEND);
    };


    /** Reads pick buffer pixel at given coordinates, returns index of associated object else (-1)
     */
    this.read = function (pickX, pickY) {
        var x = pickX;
        var y = canvas.canvas.height - pickY;
        var pix = new Uint8Array(4);
        gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pix);
        return pix;
    };

    this.unbind = function () {
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        bound = false;
    };
};

var SceneJS_PickBufferOLD = function (cfg) {

    var canvas = cfg.canvas;
    var gl = cfg.canvas.gl;

    var pickBuf;
    this.bound = false;

    /**
     * Initialises the pick buffer
     * @param _gl WebGL context
     */
    this.init = function (_gl) {

        gl = _gl;
        pickBuf = null;

        var width = canvas.canvas.width;
        var height = canvas.canvas.height;

        if (pickBuf) { // Currently have a pick buffer

            if (pickBuf.width == width && pickBuf.height == height) { // Canvas size unchanged, buffer still good
                return;

            } else { // Buffer needs reallocation for new canvas size

                gl.deleteTexture(pickBuf.texture);
                gl.deleteFramebuffer(pickBuf.framebuf);
                gl.deleteRenderbuffer(pickBuf.renderbuf);
            }
        }

        pickBuf = {
            framebuf:gl.createFramebuffer(),
            renderbuf:gl.createRenderbuffer(),
            texture:gl.createTexture(),
            width:width,
            height:height
        };

        gl.bindFramebuffer(gl.FRAMEBUFFER, pickBuf.framebuf);

        gl.bindTexture(gl.TEXTURE_2D, pickBuf.texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

        try {
            // Do it the way the spec requires
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        } catch (exception) {
            // Workaround for what appears to be a Minefield bug.
            var textureStorage = new WebGLUnsignedByteArray(width * height * 3);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, textureStorage);
        }

        gl.bindRenderbuffer(gl.RENDERBUFFER, pickBuf.renderbuf);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pickBuf.texture, 0);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, pickBuf.renderbuf);

        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        /* Verify framebuffer is OK
         */
        gl.bindFramebuffer(gl.FRAMEBUFFER, pickBuf.framebuf);
        if (!gl.isFramebuffer(pickBuf.framebuf)) {
            throw  SceneJS_error.fatalError("Invalid framebuffer");
        }

        var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);

        switch (status) {
            case gl.FRAMEBUFFER_COMPLETE:
                break;
            case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                throw  SceneJS_error.fatalError("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
            case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                throw  SceneJS_error.fatalError("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
            case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                throw  SceneJS_error.fatalError("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
            case gl.FRAMEBUFFER_UNSUPPORTED:
                throw  SceneJS_error.fatalError("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");
            default:
                throw  SceneJS_error.fatalError("Incomplete framebuffer: " + status);
        }

        this.bound = false;
    };

    this.bind = function () {
        if (this.bound) {
            return;
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, pickBuf.framebuf);
        this.bound = true;
    };

    this.clear = function () {
        if (this.bound) {
            return;
        }
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.disable(gl.BLEND);
    };


    /** Reads pick buffer pixel at given coordinates, returns index of associated object else (-1)
     */
    this.read = function (pickX, pickY) {
        var x = pickX;
        var y = canvas.canvas.height - pickY;
        var pix = new Uint8Array(4);
        gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pix);
        return pix;
    };

    this.unbind = function () {
        if (this.bound) {
            return;
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        this.bound = false;
    };

    this.init(cfg.canvas.gl);
};
/**
 * Backend that tracks statistics on loading states of nodes during scene traversal.
 *
 * This supports the "loading-status" events that we can listen for on scene nodes.
 *
 * When a node with that listener is pre-visited, it will call getStatus on this module to
 * save a copy of the status. Then when it is post-visited, it will call diffStatus on this
 * module to find the status for its sub-nodes, which it then reports through the "loading-status" event.
 *
 * @private
 */
var SceneJS_sceneStatusModule = new (function () {

    // Public activity summary
    this.sceneStatus = {};

    // IDs of all tasks
    var taskIds = new SceneJS_Map();
    var tasks = {};

    var sceneStates = {};

    var self = this;

    SceneJS_events.addListener(
        SceneJS_events.SCENE_DESTROYED,
        function (params) {
            var sceneId = params.engine.id;
            delete self.sceneStatus[sceneId];
            delete sceneStates[sceneId];
        });

    /** Notifies that a node has begun loading some data
     */
    this.taskStarted = function (node, description) {
        if (false === SceneJS_configsModule.configs.statusPopups) {
            return -1;
        }
        var scene = node.getScene();
        var sceneId = scene.getId();
        var nodeId = node.getId();
        var canvas = scene.getCanvas();

        var taskId = taskIds.addItem();

        // Update public info
        var status = this.sceneStatus[sceneId];
        if (!status) {
            status = this.sceneStatus[sceneId] = {
                numTasks:0
            };
        }
        status.numTasks++;

        // Track node
        var sceneState = sceneStates[sceneId];
        if (!sceneState) {
            sceneState = sceneStates[sceneId] = {
                sceneId:sceneId,
                nodeStates:{},
                scene:scene,
                popupContainer:createPopupContainer(canvas),
                descCounts:{}
            };
        }
        var descCount = sceneState.descCounts[description];
        if (descCount == undefined) {
            descCount = sceneState.descCounts[description] = 0;
        }
        sceneState.descCounts[description]++;
        var nodeState = sceneState.nodeStates[nodeId];
        if (!nodeState) {
            nodeState = sceneState.nodeStates[nodeId] = {
                nodeId:nodeId,
                numTasks:0,
                tasks:{}
            };
        }
        description = description + " " + sceneState.descCounts[description] + "...";
        nodeState.numTasks++;
        var task = {
            sceneState:sceneState,
            nodeState:nodeState,
            description:description,
            element:createPopup(sceneState.popupContainer, description)
        };
        nodeState.tasks[taskId] = task;
        tasks[taskId] = task;
        return taskId;
    };

    function createPopupContainer(canvas) {
        var body = document.getElementsByTagName("body")[0];
        var div = document.createElement('div');
        var style = div.style;
        style.position = "absolute";
        style.width = "200px";
        style.right = "10px";
        style.top = "0";
        style.padding = "10px";
        style["z-index"] = "10000";
        body.appendChild(div);
        return div;
    }

    function createPopup(popupContainer, description) {
        var div = document.createElement('div');
        var style = div.style;
        style["font-family"] = "Helvetica";
        style["font-size"] = "14px";
        style.padding = "5px";
        style.margin = "4px";
        style["padding-left"] = "12px";
        style["border"] = "1px solid #000055";
        style.color = "black";
        style.background = "#AAAAAA";
        style.opacity = "0.8";
        style["border-radius"] = "3px";
        style["-moz-border-radius"] = "3px";
        style["box-shadow"] = "3px 3px 3px #444444";
        div.innerHTML = description;
        popupContainer.appendChild(div);
        return div;
    }

    /** Notifies that a load has finished loading some data
     */
    this.taskFinished = function (taskId) {
        if (taskId == -1 || taskId == null) {
            return null;
        }
        var task = tasks[taskId];
        if (!task) {
            return null;
        }
        var sceneState = task.sceneState;
        this.sceneStatus[sceneState.sceneId].numTasks--;
        dismissPopup(task.element);
        var nodeState = task.nodeState;
        nodeState.numTasks--;
        delete nodeState.tasks[taskId];
        if (nodeState.numTasks == 0) {
            delete sceneState.nodeStates[nodeState.nodeId];
        }
        return null;
    };

    function dismissPopup(element) {
        element.style.background = "#AAFFAA";
        var opacity = 0.8;
        var interval = setInterval(function () {
            if (opacity <= 0) {
                element.parentNode.removeChild(element);
                clearInterval(interval);
            } else {
                element.style.opacity = opacity;
                opacity -= 0.1;
            }
        }, 100);
    }

    /** Notifies that a task has failed
     */
    this.taskFailed = function (taskId) {
        if (taskId == -1 || taskId == null) {
            return null;
        }
        var task = tasks[taskId];
        if (!task) {
            return null;
        }
        failPopup(task.element);
        return null;
    };

    function failPopup(element) {
        element.style.background = "#FFAAAA";
    }
})();

/**
 * Manages scene node event listeners
 * @private
 */
var SceneJS_nodeEventsModule = new (function () {

    var idStack = [];
    var listenerStack = [];
    var stackLen = 0;
    var dirty;

    var defaultCore = {
        type:"listeners",
        stateId:SceneJS._baseStateId++,
        empty:true,
        listeners:[]
    };

    SceneJS_events.addListener(
        SceneJS_events.SCENE_COMPILING,
        function () {
            stackLen = 0;
            dirty = true;
        });

    SceneJS_events.addListener(
        SceneJS_events.OBJECT_COMPILING,
        function (params) {
            if (dirty) {
                if (stackLen > 0) {
                    var core = {
                        type:"listeners",
                        stateId:idStack[stackLen - 1],
                        listeners:listenerStack.slice(0, stackLen)
                    };
                    params.display.renderListeners = core;
                } else {
                    params.display.renderListeners = defaultCore;
                }
                dirty = false;
            }
        });


    this.preVisitNode = function (node) {

        var renderedSubs = node._topicSubs["rendered"]; // DEPRECATED in V3.2
        var worldPosSubs = node._topicSubs["worldPos"];
        var viewPosSubs = node._topicSubs["viewPos"];
        var cameraPosSubs = node._topicSubs["cameraPos"];
        var projPosSubs = node._topicSubs["projPos"];
        var canvasPosSubs = node._topicSubs["canvasPos"];

        if (renderedSubs || worldPosSubs || viewPosSubs || cameraPosSubs || projPosSubs || canvasPosSubs) {
            idStack[stackLen] = node.id;

            listenerStack[stackLen] = function (event) {

                // Don't retain - callback must get positions for
                // required coordinate via methods on the event object.
                // That's dirty, therefore deprecated.
                if (renderedSubs) {
                    node.publish("rendered", event, true); // DEPRECATED in V3.2
                }

                // Publish retained positions for coordinate systems where subscribed
                if (worldPosSubs) {
                    node.publish("worldPos", event.getWorldPos());
                }
                if (viewPosSubs) {
                    node.publish("viewPos", event.getViewPos());
                }
                if (cameraPosSubs) {
                    node.publish("cameraPos", event.getCameraPos());
                }
                if (projPosSubs) {
                    node.publish("projPos", event.getProjPos());
                }
                if (canvasPosSubs) {
                    node.publish("canvasPos", event.getCanvasPos());
                }
            };

            stackLen++;
            dirty = true;
        }
    };

    this.postVisitNode = function (node) {
        if (node.id == idStack[stackLen - 1]) {
            stackLen--;
            dirty = true;
        }
    };

})();

/**
 * @class Holds state for one or more {@link SceneJS.Node}s.
 *
 * <p>Each {@link SceneJS.Node} has a state core to hold its state, and the core may be shared by other
 * {@link SceneJS.Nodes}s of the same type.</p>
 *
 * <p>The state held by core is rendered by a {@link SceneJS_Chunk}  
 *
 * @private
 */
var SceneJS_Core = function(type) {

    /**
     * The state core type, which will be the same value as the type property on the {@link SceneJS.Node}s that use the core
     * @type String
     * @see SceneJS.Node#type
     */
    this.type = type;

    /**
     * The state core ID, unique within the scene. This ID may be either a string assigned by the application layer via
     * scene node configs, or a number that is automatically generated by the {@link SceneJS_CoreFactory} managing
     * this core instance.
     * @type String|Number
     */
    this.coreId = null;

    /**
     * Uniquely identifies this state core within a {@link SceneJS_Display}.
     *
     * This ID is used by a {@link SceneJS_Display} to reduce redundant state changes when rendering a sequence of cores, 
     * where as a {@link SceneJS_Display} renders a frame it avoids applying consecutive cores that have the
     * same value for this ID.
     *
     * @type Number
     */
    this.stateId = null;

    /**
     * Count of {@link SceneJS.Node} instances this core holds state for
     */
    this.useCount = 0;
};/**
 * @class Manages creation, recycle and destruction of {@link SceneJS_Core} instances
 * @private
 */
var SceneJS_CoreFactory = function () {

    this._stateMap = new SceneJS_Map(null, SceneJS._baseStateId);  // For creating unique state IDs for cores

    this._cores = {}; // Map of cores for each type
};

/**
 * State core classes provided by this factory
 * @type {SceneJS.Core}
 */
SceneJS_CoreFactory.coreTypes = {};    // Supported core classes, installed by #createCoreType

/**
 * Creates a core class for instantiation by this factory
 * @param {String} type Name of type, eg. "camera"
 * @param {Node} [superType] Class of super type - SceneJS.Node by default
 * @returns The new node class
 */
SceneJS_CoreFactory.createCoreType = function (type, superType) {
    //
    //    var supa = SceneJS_CoreFactory.coreTypes[superType];
    //
    //    if (!supa) {
    //        supa = SceneJS.Core; // Super class is Core by default
    //    }
    //
    //    var nodeType = function() { // Create the class
    //        supa.apply(this, arguments);
    //        this.type = type;
    //    };
    //
    //    nodeType.prototype = new supa();            // Inherit from base class
    //    nodeType.prototype.constructor = nodeType;
    //
    //    SceneJS_CoreFactory.nodeTypes[type] = nodeType;
    //
    //    return nodeType;
};

SceneJS_CoreFactory.addCoreBuilder = function (type, factory) {

};

/* HACK - allows different types of node to have same type of core, eg. "rotate" and "translate" nodes can both have an "xform" core    
 */
SceneJS_CoreFactory.coreAliases = {
    "rotate":"xform",
    "translate":"xform",
    "scale":"xform",
    "matrix":"xform",
    "xform":"xform"
};

/**
 * Gets a core of the given type from this factory. Reuses any existing existing core of the same type and ID.
 *
 * The caller (a scene node) will then augment the core with type-specific attributes and methods.
 *
 * @param {String} type Type name of core, e.g. "material", "texture"
 * @param {String} coreId ID for the core, unique among all cores of the given type within this factory
 * @returns {Core} The core
 */
SceneJS_CoreFactory.prototype.getCore = function (type, coreId) {

    /* HACK - allows different types of node to have same type of core, eg. "rotate" and "translate" nodes can both have an "xform" core    
     */
    var alias = SceneJS_CoreFactory.coreAliases[type];
    if (alias) {
        type = alias;
    }

    var cores = this._cores[type];

    if (!cores) {
        cores = this._cores[type] = {};
    }

    var core;

    if (coreId) { // Attempt to reuse a core

        core = cores[coreId];

        if (core) {
            core.useCount++;
            return core;
        }
    }

    core = new SceneJS_Core(type);
    core.useCount = 1;  // One user so far

    core.stateId = this._stateMap.addItem(core);
    core.coreId = (coreId != undefined && coreId != null) ? coreId : core.stateId; // Use state ID as core ID by default

    cores[core.coreId] = core;

    return core;
};


/**
 * Tests if a core of the given type and ID currently exists within this factory.
 *
 * @param {String} type Type name of core, e.g. "material", "texture"
 * @param {String} coreId ID for the core, unique among all cores of the given type within this factory
 * @returns {Boolean} True if the core exists
 */
SceneJS_CoreFactory.prototype.hasCore = function (type, coreId) {
    // HACK - allows different types of node to have same type of core, eg. "rotate" and "translate" nodes can both have an "xform" core
    var alias = SceneJS_CoreFactory.coreAliases[type];
    if (alias) {
        type = alias;
    }
    var cores = this._cores[type];
    return cores && cores[coreId];
};

/**
 * Releases a state core back to this factory, destroying it if the core's use count is then zero.
 * @param {Core} core Core to release
 */
SceneJS_CoreFactory.prototype.putCore = function (core) {

    if (core.useCount == 0) {
        return; // In case of excess puts
    }

    if (--core.useCount <= 0) {                    // Release shared core if use count now zero

        var cores = this._cores[core.type];

        cores[core.coreId] = null;

        this._stateMap.removeItem(core.stateId);  // Release state ID for reuse
    }
};

/**
 * Reallocates WebGL resources for cores within this factory
 */
SceneJS_CoreFactory.prototype.webglRestored = function () {

    var cores;
    var core;

    for (var type in this._cores) {
        if (this._cores.hasOwnProperty(type)) {

            cores = this._cores[type];

            if (cores) {

                for (var coreId in cores) {
                    if (cores.hasOwnProperty(coreId)) {

                        core = cores[coreId];

                        if (core.webglRestored) { // Method augmented on core by user
                            core.webglRestored();
                        }
                    }
                }
            }
        }
    }
};
/**
 * @class The basic scene graph node type
 */
SceneJS.Node = function () {
};

/**
 * @class Basic scene graph node
 */
SceneJS.Node.prototype.constructor = SceneJS.Node;

/**
 * Called by SceneJS_Engine after it has instantiated the node
 *
 * @param {SceneJS_Engine} engine The engine which will manage this node
 * @param {SceneJS_Core} core The core which will hold state for this node, may be shared with other nodes of the same type
 * @param cfg Configuration for this node
 * @param {String} cfg.id ID for the node, unique among all nodes in the scene
 * @param {String} cfg.type type Type of this node (eg. "material", "texture" etc)
 * @param {Object} cfg.data Optional arbitrary JSON object to attach to node
 * @param {String} nodeId Optional ID for node
 */
SceneJS.Node.prototype._construct = function (engine, core, cfg, nodeId) {

    /**
     * Engine that manages this node
     * @type SceneJS_Engine
     */
    this._engine = engine;

    /**
     * The core which holds state for this node, may be shared with other nodes of the same type
     * @type SceneJS_Core
     */
    this._core = core;

    /**
     * ID of this node, unique within its scene. The ID is a string if it was defined by the application
     * via the node's JSON configuration, otherwise it is a number if it was left to SceneJS to automatically create.
     * @type String|Number
     */
    this.id = cfg.id || cfg.nodeId || nodeId;

    /**
     * Type of this node (eg. "material", "texture" etc)
     * @type String
     */
    this.type = cfg.type || "node";

    /**
     * Optional arbitrary JSON object attached to this node
     * @type JSON
     */
    this.data = cfg.data;

    /**
     * Parent node
     * @type SceneJS.Node
     */
    this.parent = null;

    /**
     * Child nodes
     * @type SceneJS.Node[]
     */
    this.nodes = [];

    // Pub/sub support
    this._handleMap = new SceneJS_Map(); // Subscription handle pool
    this._topicSubs = {}; // A [handle -> callback] map for each topic name
    this._handleTopics = {}; // Maps handles to topic names
    this._topicPubs = {}; // Maps topics to publications

    /**
     *
     */
    this._listeners = {};

    /**
     *
     */
    this._numListeners = 0; // Useful for quick check whether node observes any events

    /**
     *
     */
    this.dirty = false;

    /**
     *
     */
    this.branchDirty = false;

    if (this._init) {
        this._init(cfg);
    }
};

/**
 * Notifies that an asynchronous task has started on this node
 * @param {String} [description] Description - will be "Task" by default
 * @return {String} Unique ID for the task, which may be given to {@link #taskFinished} or {@link #taskFailed}
 */
SceneJS.Node.prototype.taskStarted = function (description) {
    return SceneJS_sceneStatusModule.taskStarted(this, description || "Task");
};

/**
 * Notifies that a task, whose initiation was previously notified with {@link #taskStarted},
 * has now completed successfully.
 * @param {String} taskId Unique ID for the task, which was got with {@link #taskStarted}
 * @return null
 */
SceneJS.Node.prototype.taskFinished = function (taskId) {
    return SceneJS_sceneStatusModule.taskFinished(taskId);
};

/**
 * Notifies that a task, whose initiation was previously notified with {@link #taskStarted},
 * has failed.
 * @param {String} taskId Unique ID for the task, which was got with {@link #taskStarted}
 * @return null
 */
SceneJS.Node.prototype.taskFailed = function (taskId) {
    return SceneJS_sceneStatusModule.taskFailed(taskId);
};

/**
 * Logs a message in the context of this node
 * @param {String} [channel] Logging channel - "error", "warn" or "info" (default)
 * @param {String} msg Message to log
 */
SceneJS.Node.prototype.log = function () {
    var channel;
    var msg;
    if (arguments.length == 1) {
        channel = "info";
        msg = arguments[0];
    } else if (arguments.length == 2) {
        channel = arguments[0];
        msg = arguments[1];
    }
    switch (channel) {
        case "warn":
            msg = "WARN;  [SceneJS.Node type=" + this.type + ", id=" + this.id + "] : " + msg;
            break;
        case "error":
            msg = "ERROR; [SceneJS.Node type=" + this.type + ", id=" + this.id + "] : " + msg;
            break;
        default:
            msg = "INFO;  [SceneJS.Node type=" + this.type + ", id=" + this.id + "] : " + msg;
            break;
    }

    if (console[channel]) {
        console[channel](msg);
    } else {
        console.log(msg);
    }
};

/**
 * Publishes to a topic on this node.
 *
 * Immediately notifies existing subscriptions to that topic, and unless the "forget' parameter is
 * true, retains the publication to give to any subsequent notifications on that topic as they are made.
 *
 * @param {String} topic Publication topic
 * @param {Object} pub The publication
 * @param {Boolean} [forget] When true, the publication will be sent to subscribers then forgotten, so that any
 * subsequent subscribers will not receive it
 */
SceneJS.Node.prototype.publish = function (topic, pub, forget) {
    if (!forget) {
        this._topicPubs[topic] = pub; // Save notification
    }
    if (this._topicSubs[topic]) { // Notify subscriptions
        var subsForTopic = this._topicSubs[topic];
        for (var handle in subsForTopic) {
            if (subsForTopic.hasOwnProperty(handle)) {
                subsForTopic[handle].call(this, pub);
            }
        }
    }
};

/**
 * Removes a topic publication
 *
 * Immediately notifies existing subscriptions to that topic, sending them each a null publication.
 *
 * @param topic Publication topic
 * @private
 */
SceneJS.Node.prototype.unpublish = function (topic) {
    var subsForTopic = this._topicSubs[topic];
    if (subsForTopic) { // Notify subscriptions
        for (var handle in subsForTopic) {
            if (subsForTopic.hasOwnProperty(handle)) {
                subsForTopic[handle].call(this, null);
            }
        }
    }
    delete this._topicPubs[topic];
};


/**
 * Listen for data changes at a particular location on this node
 *
 * <p>Your callback will be triggered for
 * the initial data and again whenever the data changes. Use {@link #off} to stop receiving updates.</p>
 *
 * <p>The callback is be called with this node as scope.</p>
 *
 * @param {String} location Publication location
 * @param {Function(data)} callback Called when fresh data is available at the location
 * @return {String} Handle to the subscription, which may be used to unsubscribe with {@link #off}.
 */
SceneJS.Node.prototype.on = function (topic, callback) {
    var subsForTopic = this._topicSubs[topic];
    if (!subsForTopic) {
        subsForTopic = {};
        this._topicSubs[topic] = subsForTopic;
    }
    var handle = this._handleMap.addItem(); // Create unique handle
    subsForTopic[handle] = callback;
    this._handleTopics[handle] = topic;
    var pub = this._topicPubs[topic];
    if (pub) { // A publication exists, notify callback immediately
        callback.call(this, pub);
    }
    //else {
    if (topic == "rendered") {
        this._engine.branchDirty(this);
    }
//    if (topic == "tick") {
//        this._engine.scene.on("tick",callback);
//    }
    // }
    return handle;
};

/**
 * Unsubscribes from a publication on this node that was previously made with {@link #on}.
 * @param handle Publication handle
 */
SceneJS.Node.prototype.off = function (handle) {
    var topic = this._handleTopics[handle];
    if (topic) {
        delete this._handleTopics[handle];
        var topicSubs = this._topicSubs[topic];
        if (topicSubs) {
            delete topicSubs[handle];
        }
        this._handleMap.removeItem(handle); // Release handle
        if (topic == "rendered") {
            this._engine.branchDirty(this);
        }
    }
//    else {
//        this._engine.scene.off(handle);
//    }
};

/**
 * Listens for exactly one data update at the specified location on this node, and then stops listening.
 * <p>This is equivalent to calling {@link #on}, and then calling {@link #off} inside the callback function.</p>
 * @param {String} location Data location to listen to
 * @param {Function(data)} callback Called when fresh data is available at the location
 */
SceneJS.Node.prototype.once = function (topic, callback) {
    var self = this;
    var sub = this.on(topic,
        function (pub) {
            self.off(sub);
            callback(pub);
        });
};

/**
 * Returns this node's {@link SceneJS.Scene}
 */
SceneJS.Node.prototype.getScene = function () {
    return this._engine.scene;
};

/**
 * Returns the ID of this node's core
 */
SceneJS.Node.prototype.getCoreId = function () {
    return this._core.coreId;
};

/**
 * Get the node's ID
 *
 */
SceneJS.Node.prototype.getID = function () {
    return this.id;
};

/**
 * Alias for getID
 *  @function
 */
SceneJS.Node.prototype.getId = function () {
    return this.id;
};

/**
 * Alias for getID
 *  @function
 */
SceneJS.Node.prototype.getNodeId = function () {
    return this.id;
};


/**
 * Returns the node's type. For the Node base class, it is "node", overridden in sub-classes.
 */
SceneJS.Node.prototype.getType = function () {
    return this.type;
};

/**
 * Returns the data object attached to this node.
 */
SceneJS.Node.prototype.getData = function () {
    return this.data;
};

/**
 * Sets a data object on this node.
 */
SceneJS.Node.prototype.setData = function (data) {
    this.data = data;
    return this;
};

/**
 * Returns the number of child nodes
 */
SceneJS.Node.prototype.getNumNodes = function () {
    return this.nodes.length;
};

/** Returns child nodes
 * @returns {Array} Child nodes
 */
SceneJS.Node.prototype.getNodes = function () {
    return this.nodes.slice(0);
};

/** Returns child node at given index. Returns null if no node at that index.
 * @param {Number} index The child index
 * @returns {Node} Child node, or null if not found
 */
SceneJS.Node.prototype.getNodeAt = function (index) {
    if (index < 0 || index >= this.nodes.length) {
        return null;
    }
    return this.nodes[index];
};

/** Returns first child node. Returns null if no child nodes.
 * @returns {Node} First child node, or null if not found
 */
SceneJS.Node.prototype.getFirstNode = function () {
    if (this.nodes.length == 0) {
        return null;
    }
    return this.nodes[0];
};

/** Returns last child node. Returns null if no child nodes.
 * @returns {Node} Last child node, or null if not found
 */
SceneJS.Node.prototype.getLastNode = function () {
    if (this.nodes.length == 0) {
        return null;
    }
    return this.nodes[this.nodes.length - 1];
};

/** Returns child node with the given ID.
 * Returns null if no such child node found.
 */
SceneJS.Node.prototype.getNode = function (id) {
    for (var i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i].id == id) {
            return this.nodes[i];
        }
    }
    return null;
};

/** Disconnects the child node at the given index from its parent node
 * @param {int} index Child node index
 * @returns {Node} The disconnected child node if located, else null
 */
SceneJS.Node.prototype.disconnectNodeAt = function (index) {
    var r = this.nodes.splice(index, 1);
    if (r.length > 0) {
        r[0].parent = null;
        this._engine.display.objectListDirty = true;
        return r[0];
    } else {
        return null;
    }
};

/** Disconnects the child node from its parent, given as a node object
 * @param {String | Node} id The target child node, or its ID
 * @returns {Node} The removed child node if located
 */
SceneJS.Node.prototype.disconnect = function () {
    if (this.parent) {
        for (var i = 0; i < this.parent.nodes.length; i++) {
            if (this.parent.nodes[i] === this) {
                return this.parent.disconnectNodeAt(i);
            }
        }
    }
    return null;
};

/** Removes the child node at the given index
 * @param {int} index Child node index
 */
SceneJS.Node.prototype.removeNodeAt = function (index) {
    var child = this.disconnectNodeAt(index);
    if (child) {
        child.destroy();
        this._engine.display.objectListDirty = true;
    }
};

/** Removes the child node, given as either a node object or an ID string.
 * @param {String | Node} id The target child node, or its ID
 * @returns {Node} The removed child node if located
 */
SceneJS.Node.prototype.removeNode = function (node) {

    if (!node) {
        throw SceneJS_error.fatalError(
            SceneJS.errors.ILLEGAL_NODE_CONFIG,
            "Node#removeNode - node argument undefined");
    }

    if (!node._compile) {
        if (typeof node == "string") {
            var gotNode = this._engine.findNode(node);
            if (!gotNode) {
                throw SceneJS_error.fatalError(
                    SceneJS.errors.NODE_NOT_FOUND,
                    "Node#removeNode - node not found anywhere: '" + node + "'");
            }
            node = gotNode;
        }
    }

    if (node._compile) { //  instance of node
        for (var i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i] === node) {
                var removedNode = this.removeNodeAt(i);
                this._engine.display.objectListDirty = true;
                return removedNode;
            }
        }
    }

    throw SceneJS_error.fatalError(
        SceneJS.errors.NODE_NOT_FOUND,
        "Node#removeNode - child node not found: " + (node._compile ? ": " + node.id : node));
};

/** Disconnects all child nodes from their parent node and returns them in an array.
 */
SceneJS.Node.prototype.disconnectNodes = function () {

    var len = this.nodes.length;

    for (var i = 0; i < len; i++) {  // Unlink nodes from this
        this.nodes[i].parent = null;
    }

    var nodes = this.nodes;

    this.nodes = [];

    this._engine.display.objectListDirty = true;

    return nodes;
};

/** Removes all child nodes and returns them in an array.
 */
SceneJS.Node.prototype.removeNodes = function () {
    var nodes = this.disconnectNodes();
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].destroy();
        this._engine.display.objectListDirty = true;
    }
};

/** Destroys this node and moves children up to parent, inserting them where this node resided.
 */
SceneJS.Node.prototype.splice = function () {

    var i, len;

    if (this.parent == null) {
        return null;
    }
    var parent = this.parent;
    var nodes = this.disconnectNodes();
    for (i = 0, len = nodes.length; i < len; i++) {  // Link this node's nodes to new parent
        nodes[i].parent = this.parent;
    }
    for (i = 0, len = parent.nodes.length; i < len; i++) { // Replace node on parent's nodes with this node's nodes
        if (parent.nodes[i] === this) {

            parent.nodes.splice.apply(parent.nodes, [i, 1].concat(nodes));

            this.nodes = [];
            this.parent = null;

            this.destroy();

            this._engine.branchDirty(parent);

            return parent;
        }
    }
};

/** Appends multiple child nodes
 */
SceneJS.Node.prototype.addNodes = function (nodes, ok) {

    if (!nodes) {
        throw SceneJS_error.fatalError(
            SceneJS.errors.ILLEGAL_NODE_CONFIG,
            "Node#addNodes - nodes argument is undefined");
    }

    var node;
    var result = [];
    var numNodes = nodes.length;

    for (var i = nodes.length - 1; i >= 0; i--) {
        var nodeAttr = nodes[i];
        if (nodeAttr.type == "node" || this._engine.hasNodeType(nodeAttr.type)) {

            // Add loaded node type synchronously

            node = this.addNode(nodeAttr);
            result[i] = node;
            if (--numNodes == 0) {
                if (ok) {
                    ok(nodes);
                }
                return nodes;
            }
        } else {

            // Load node type and instantiate it asynchronously

            var self = this;
            (function () {
                var nodei = i;
                self.addNode(nodeAttr,
                    function (node) {
                        result[nodei] = node;
                        if (--numNodes == 0) {
                            if (ok) {
                                ok(nodes);
                            }
                        }
                    });
            })();
        }
    }
    return null;
};

/** Appends a child node
 */
SceneJS.Node.prototype.addNode = function (node, ok) {

    node = node || {};

    // Graft node object
    if (node._compile) {
        if (node.parent != null) {
            throw SceneJS_error.fatalError(
                SceneJS.errors.ILLEGAL_NODE_CONFIG,
                "Node#addNode - node argument is still attached to another parent");
        }
        this.nodes.push(node);
        node.parent = this;
        this._engine.branchDirty(node);
        if (ok) {
            ok(node);
        }
        return node;
    }

    // Graft node object by ID reference
    if (typeof node == "string") {
        var gotNode = this._engine.findNode(node);
        if (!gotNode) {
            throw SceneJS_error.fatalError(
                SceneJS.errors.ILLEGAL_NODE_CONFIG,
                "Node#addNode - node not found: '" + node + "'");
        }
        node = gotNode;
        if (node.parent != null) {
            throw SceneJS_error.fatalError(
                SceneJS.errors.ILLEGAL_NODE_CONFIG,
                "Node#addNode - node argument is still attached to another parent");
        }
        this.nodes.push(node);
        node.parent = this;
        this._engine.branchDirty(node);
        if (ok) {
            ok(node);
        }
        return node;
    }

    // Create node

    node.type = node.type || "node";

    if (node.type == "node" || this._engine.hasNodeType(node.type)) {

        // Root node's type is already loaded, so we are able
        // to create the root synchronously. When the caller
        // is creating a core node type, then by this contract
        // it can rely on the return value

        node = this._engine.createNode(node);
        this.nodes.push(node);
        node.parent = this;
        this._engine.branchDirty(node);
        if (ok) {
            ok(node);
        }
        return node;

    } else {

        // Otherwise the root node's type needs to be loaded,
        // so we need to create it asynchronously. By this contract,
        // the Caller would not rely on synchronous creation of
        // non-core types.
        var self = this;
        this._engine.createNode(node,
            function (node) {
                self.nodes.push(node);
                node.parent = self;
                self._engine.branchDirty(node);
                if (ok) {
                    ok(node);
                }
            });
        return null;
    }
};

/** Inserts a subgraph into child nodes
 * @param {Node} node Child node
 * @param {int} i Index for new child node
 * @return {Node} The child node
 */
SceneJS.Node.prototype.insertNode = function (node, i) {

    if (!node) {
        throw SceneJS_error.fatalError(
            SceneJS.errors.ILLEGAL_NODE_CONFIG,
            "SceneJS.Node#insertNode - node argument is undefined");
    }

    if (!node._compile) { // JSON node definition
        node = this._engine.createNode(node); // Create node
    }

    if (!node._compile) {
        throw SceneJS_error.fatalError(
            SceneJS.errors.ILLEGAL_NODE_CONFIG,
            "SceneJS.Node#insertNode - node argument is not a SceneJS.Node");
    }

    if (node.parent != null) {
        throw SceneJS_error.fatalError(
            SceneJS.errors.ILLEGAL_NODE_CONFIG,
            "SceneJS.Node#insertNode - node argument is still attached to another parent");
    }

    if (i === undefined || i === null) {
        node.addNodes(this.disconnectNodes());
        this.addNode(node);

    } else if (i < 0) {

        throw SceneJS_error.fatalError(
            SceneJS.errors.ILLEGAL_NODE_CONFIG,
            "SceneJS.Node#insertNode - node index out of range: -1");

    } else if (i >= this.nodes.length) {
        this.nodes.push(node);
    } else {
        this.nodes.splice(i, 0, node);
    }

    node.parent = this;
    return node;
};

/** Calls the given function on each node in the subgraph rooted by this node, including this node.
 * The callback takes each node as it's sole argument and traversal stops as soon as the function returns
 * true and returns the node.
 * @param {function(Node)} func The function
 */
SceneJS.Node.prototype.mapNodes = function (func) {
    if (func(this)) {
        return this;
    }
    var result;
    for (var i = 0; i < this.nodes.length; i++) {
        result = this.nodes[i].mapNodes(func);
        if (result) {
            return result;
        }
    }
    return null;
};

/**
 * Registers a listener for a given event on this node. If the event type
 * is not supported by this node type, then the listener will never be called.
 * <p><b>Example:</b>
 * <pre><code>
 * var node = new Node();
 *
 * node.addListener(
 *
 *              // eventName
 *              "some-event",
 *
 *              // handler
 *              function(node,      // Node we are listening to
 *                       params) {  // Whatever params accompany the event type
 *
 *                     // ...
 *              }
 * );
 *
 *
 * </code></pre>
 *
 * @param {String} eventName One of the event types supported by this node
 * @param {Function} fn - Handler function that be called as specified
 * @param options - Optional options for the handler as specified
 * @return {Node} this
 */
SceneJS.Node.prototype.addListener = function (eventName, fn, options) {
    var list = this._listeners[eventName];
    if (!list) {
        list = [];
        this._listeners[eventName] = list;
    }
    list.push({
        eventName:eventName,
        fn:fn,
        options:options || {}
    });
    this._numListeners++;
    return this;
};

/**
 * Fires an event at this node, immediately calling listeners registered for the event
 */
SceneJS.Node.prototype._fireEvent = function (eventName, params, options) {
    var list = this._listeners[eventName];
    if (list) {
        if (!params) {
            params = {};
        }
        var event = {
            name:eventName,
            params:params,
            options:options || {}
        };
        var listener;
        for (var i = 0, len = list.length; i < len; i++) {
            listener = list[i];
            if (listener.options.scope) {
                listener.fn.call(listener.options.scope, event);
            } else {
                listener.fn.call(this, event);
            }
        }
    }
};

/**
 * Removes a handler that is registered for the given event on this node.
 * Does nothing if no such handler registered.
 */
SceneJS.Node.prototype.removeListener = function (eventName, fn) {
    var list = this._listeners[eventName];
    if (!list) {
        return null;
    }
    for (var i = 0; i < list.length; i++) {
        if (list[i].fn == fn) {
            list.splice(i, 1);
            return fn;
        }
    }
    this._numListeners--;
    return null;
};

/**
 * Returns true if this node has any listeners for the given event
 */
SceneJS.Node.prototype.hasListener = function (eventName) {
    return this._listeners[eventName];
};

/**
 * Returns true if this node has any listeners at all.
 */
SceneJS.Node.prototype.hasListeners = function () {
    return (this._numListeners > 0);
};

/** Removes all listeners registered on this node.
 */
SceneJS.Node.prototype.removeListeners = function () {
    this._listeners = {};
    this._numListeners = 0;
    return this;
};

/**
 * Returns the parent node
 * @return {SceneJS.Node}
 */
SceneJS.Node.prototype.getParent = function (type) {
    return this.parent;
};

/**
 * Finds the first node of given type on path to root.
 * @param {String} type Parent type to find on path to root
 * @return {SceneJS.Node}
 */
SceneJS.Node.prototype.getParentOfType = function (type) {
    var parent = this.parent;
    while (parent && parent.type != type) {
        parent = parent.parent;
    }
    return parent;
};

/**
 * Iterates over parent nodes on the path from the selected node to the root, executing a function
 * for each.
 * If the function returns true at any node, then traversal stops and a selector is
 * returned for that node.
 * @param {Function(node, index)} fn Function to execute on each instance node
 * @return {Object} Selector for selected node, if any
 */
SceneJS.Node.prototype.eachParent = function (fn) {

    if (!fn) {
        throw "SceneJS.Node.eachParent param 'fn' is null or undefined";
    }

    var count = 0;
    var node = this;

    while (node.parent) {
        if (fn.call(node.parent, count++) === true) {
            return node.parent;
        }
        node = node.parent;
    }

    return null;
};

/** Returns true if a child node matching given ID or index exists on this node
 * @param {Number|String} node Child node index or ID
 */
SceneJS.Node.prototype.hasNode = function (node) {

    if (node === null || node === undefined) {
        throw "SceneJS.Node.hasNode param 'node' is null or undefined";
    }

    var type = typeof node;
    var nodeGot;

    if (type == "number") {
        nodeGot = this.getNodeAt(node);

    } else if (type == "string") {
        nodeGot = this.getNode(node);

    } else {
        throw "SceneJS.Node.hasNode param 'node' should be either an index number or an ID string";
    }

    return (nodeGot != undefined && nodeGot != null);
};

/** Selects a child node matching given ID or index
 * @param {Number|String} node Child node index or ID
 */
SceneJS.Node.prototype.node = function (node) {

    if (node === null || node === undefined) {
        throw "SceneJS.Node.node param 'node' is null or undefined";
    }

    var type = typeof node;
    var nodeGot;

    if (type == "number") {
        nodeGot = this.getNodeAt(node);

    } else if (type == "string") {
        nodeGot = this.getNode(node);

    } else {
        throw "SceneJS.Node.node param 'node' should be either an index number or an ID string";
    }

    if (!nodeGot) {
        throw "SceneJS.Node.node - node not found: '" + node + "'";
    }

    return nodeGot;
};

/**
 * Iterates over sub-nodes of the selected node, executing a function
 * for each. With the optional options object we can configure is depth-first or breadth-first order.
 * If neither, then only the child nodes are iterated.
 * If the function returns true at any node, then traversal stops and a selector is
 * returned for that node.
 * @param {Function(index, node)} fn Function to execute on each child node
 * @return {Object} Selector for selected node, if any
 */
SceneJS.Node.prototype.eachNode = function (fn, options) {

    if (!fn) {
        throw "SceneJS.Node.eachNode param 'fn' is null or undefined";
    }

    if (typeof fn != "function") {
        throw "SceneJS.Node.eachNode param 'fn' should be a function";
    }

    var stoppedNode;
    options = options || {};
    var count = 0;

    if (options.andSelf) {
        if (fn.call(this, count++) === true) {
            return this;
        }
    }

    if (!options.depthFirst && !options.breadthFirst) {
        stoppedNode = this._iterateEachNode(fn, this, count);

    } else if (options.depthFirst) {
        stoppedNode = this._iterateEachNodeDepthFirst(fn, this, count, false); // Not below root yet

    } else {
        // TODO: breadth-first
    }

    if (stoppedNode) {
        return stoppedNode;
    }

    return undefined; // IDE happy now
};

SceneJS.Node.prototype.numNodes = function () {
    return this.nodes.length;
};

SceneJS.Node.prototype._iterateEachNode = function (fn, node, count) {

    var len = node.nodes.length;
    var child;

    for (var i = 0; i < len; i++) {
        child = node.nodes[i];

        if (fn.call(child, count++) === true) {
            return child;
        }
    }

    return null;
};

SceneJS.Node.prototype._iterateEachNodeDepthFirst = function (fn, node, count, belowRoot) {

    if (belowRoot) {

        /* Visit this node - if we are below root, because entry point visits the root
         */
        if (fn.call(node, count++) === true) {
            return node;
        }
    }

    belowRoot = true;

    /* Iterate nodes
     */
    var len = node.nodes.length;
    var child;
    for (var i = 0; i < len; i++) {
        child = this._iterateEachNodeDepthFirst(fn, node.nodes[i], count, belowRoot);
        if (child) {
            return child;
        }
    }

    return null;
};

/** Returns either all child or all sub-nodes of the given type, depending on whether search is recursive or not.
 */
SceneJS.Node.prototype.findNodesByType = function (type, recursive) {
    return this._findNodesByType(type, [], recursive);
};

SceneJS.Node.prototype._findNodesByType = function (type, list, recursive) {
    var i;
    for (i = 0; i < this.nodes; i++) {
        var node = this.nodes[i];
        if (node.type == type) {
            list.add(node);
        }
    }
    if (recursive) {
        for (i = 0; i < this.nodes; i++) {
            this.nodes[i]._findNodesByType(type, list, recursive);
        }
    }
    return list;
};

/** Finds the first node on path up to root whose type equals that given
 */
SceneJS.Node.prototype.findParentByType = function (type) {
    var parent = this.parent;
    while (parent && parent.type != type) {
        parent = parent.parent;
    }
    return parent;
};


/**
 * Given a map of name-value pairs, calls a getter method for each name,
 * feeding into it the corresponding value.
 *
 * @param attr
 * @param value
 * @return {*}
 */
SceneJS.Node.prototype.set = function (attr, value) {

    if (typeof attr == "object") { // Attribute map - recurse for each attribute
        for (var subAttr in attr) {
            if (attr.hasOwnProperty(subAttr)) {
                this.set(subAttr, attr[subAttr]);
            }
        }
        return;
    }

    if (this._set) {
        var method = this._set[attr];
        if (method) {
            return method.call(this, value);
        }
    }

    return this._createAccessor("set", attr, value);
};

SceneJS.Node.prototype.get = function (attr) {

    if (this._get) {
        var method = this._get[attr];
        if (method) {
            return method.call(this);
        }
    }

    return this._createAccessor("get", attr);
};

SceneJS.Node.prototype.add = function (attr, value) {

    if (typeof attr == "object") { // Attribute map - recurse for each attribute
        for (var subAttr in attr) {
            if (attr.hasOwnProperty(subAttr)) {
                this.add(subAttr, attr[subAttr]);
            }
        }
        return;
    }

    if (this._add) {
        var method = this._add[attr];
        if (method) {
            return method.call(this, value);
        }
    }

    return this._createAccessor("add", attr, value);
};

SceneJS.Node.prototype.inc = function (attr, value) {

    if (typeof attr == "object") { // Attribute map - recurse for each attribute
        for (var subAttr in attr) {
            if (attr.hasOwnProperty(subAttr)) {
                this.inc(subAttr, attr[subAttr]);
            }
        }
        return;
    }

    if (this._inc) {
        var method = this._inc[attr];
        if (method) {
            return method.call(this, value);
        }
    }

    return this._createAccessor("inc", attr, value);
};

SceneJS.Node.prototype.insert = function (attr, value) {

    if (typeof attr == "object") { // Attribute map - recurse for each attribute
        for (var subAttr in attr) {
            if (attr.hasOwnProperty(subAttr)) {
                this.insert(subAttr, attr[subAttr]);
            }
        }
        return;
    }

    if (this._set) {
        var method = this._set[attr];
        if (method) {
            return method.call(this, value);
        }
    }

    return this._createAccessor("insert", attr, value);
};

SceneJS.Node.prototype.remove = function (attr, value) {

    if (typeof attr == "object") { // Attribute map - recurse for each attribute
        for (var subAttr in attr) {
            if (attr.hasOwnProperty(subAttr)) {
                this.remove(subAttr, attr[subAttr]);
            }
        }
        return;
    }

    if (this._remove) {
        var method = this._remove[attr];
        if (method) {
            return method.call(this, value);
        }
    }

    return this._createAccessor("remove", attr, value);
};

SceneJS.Node.prototype._createAccessor = function (op, attr, value) {

    var methodName = op + attr.substr(0, 1).toUpperCase() + attr.substr(1);

    var method = this[methodName];

    if (!method) {
        throw "Method not found on node: '" + methodName + "'";
    }

    //var proto = (this.type == "node") ? SceneJS.Node.prototype : this._engine.nodeTypes[this.type].prototype;

    var proto = this.__proto__;

    var accessors;
    switch (op) {
        case "set":
            accessors = (proto._set || (proto._set = {}));
            break;

        case "get":
            accessors = (proto._get || (proto._get = {}));
            break;

        case "inc":
            accessors = (proto._inc || (proto._inc = {}));
            break;

        case "add":
            accessors = (proto._add || (proto._add = {}));
            break;

        case "insert":
            accessors = (proto._insert || (proto._insert = {}));
            break;

        case "remove":
            accessors = (proto._remove || (proto._remove = {}));
            break;
    }

    accessors[attr] = method;

    return method.call(this, value); // value can be undefined
};

/** Binds a listener to an event on the selected node
 *
 * @param {String} name Event name
 * @param {Function} handler Event handler
 */
SceneJS.Node.prototype.bind = function (name, handler) {

    if (!name) {
        throw "SceneJS.Node.bind param 'name' null or undefined";
    }

    if (typeof name != "string") {
        throw "SceneJS.Node.bind param 'name' should be a string";
    }

    if (!handler) {
        throw "SceneJS.Node.bind param 'handler' null or undefined";
    }

    if (typeof handler != "function") {
        throw "SceneJS.Node.bind param 'handler' should be a function";
    }

    this.addListener(name, handler, { scope:this });

    this._engine.branchDirty(this);

    return handler;
};

/**
 * Returns an object containing the attributes that were given when creating the node. Obviously, the map will have
 * the current values, plus any attributes that were later added through set/add methods on the node
 *
 */
SceneJS.Node.prototype.getJSON = function () {
    return this;
};


SceneJS.Node.prototype._compile = function (ctx) {
    if (this.preCompile) {
        this.preCompile();
    }
    this._compileNodes(ctx);
    if (this.postCompile) {
        this.postCompile();
    }
};

SceneJS.Node.prototype._compileNodes = function (ctx) {

    var renderSubs = this._topicSubs["rendered"];

    if (renderSubs) {
        SceneJS_nodeEventsModule.preVisitNode(this);
    }

//    var tickSubs = this._topicSubs["tick"];
//
//    if (tickSubs) {
//        ctx.pubSubProxy.on("tick", function(event) {
//            this.publish("tick", event);
//        });
//    }

    var child;

    for (var i = 0, len = this.nodes.length; i < len; i++) {

        child = this.nodes[i];

        child.branchDirty = child.branchDirty || this.branchDirty; // Compile subnodes if scene branch dirty

        if (child.dirty || child.branchDirty || this._engine.sceneDirty) {  // Compile nodes that are flagged dirty
            child._compile(ctx);
            child.dirty = false;
            child.branchDirty = false;
        }
    }

    if (renderSubs) {
        SceneJS_nodeEventsModule.postVisitNode(this);
    }
};



/**
 * Destroys this node. It is marked for destruction; when the next scene traversal begins (or the current one ends)
 * it will be destroyed and removed from it's parent.
 */
SceneJS.Node.prototype.destroy = function () {

    if (!this.destroyed) {

        if (this.parent) {

            /* Remove from parent's child node list
             */
            for (var i = 0; i < this.nodes.length; i++) {
                if (this.parent.nodes[i].id === this.id) {
                    this.parent.nodes.splice(i, 1);
                    break;
                }
            }
        }

        // Remove publication
        this._engine.scene.unpublish("nodes/" + this.id);

        /* Recusrsively destroy child nodes without
         * bothering to remove them from their parents
         */
        this._destroyTree();

        /* Need object list recompilation on display
         */
        this._engine.display.objectListDirty = true;
    }

    return this;
};

SceneJS.Node.prototype._destroyTree = function () {

    this.destroyed = true;

    this._engine.destroyNode(this); // Release node object

    for (var i = 0, len = this.nodes.length; i < len; i++) {
        this.nodes[i]._destroyTree();
    }
};

/**
 * Performs the actual destruction of this node, calling the node's optional template destroy method
 */
SceneJS.Node.prototype._doDestroy = function () {

    if (this._destroy) {  // Call destruction handler for each node subclass
        this._destroy();
    }

    return this;
};SceneJS_PubSubProxy = function (scene, proxy) {
    this.scene = scene;
    this.proxy = proxy;

};



/**
 * @class Manages creation, recycle and destruction of {@link SceneJS.Node} instances
 * @private
 */
var SceneJS_NodeFactory = function () {

    /** Nodes created by this factory
     * @type {SceneJS_Map}
     */
    this.nodes = new SceneJS_Map({});
};

/**
 * Scene graph node classes provided by the SceneJS_NodeFactory class
 *
 * @type {[SceneJS.Node]}
 */
SceneJS_NodeFactory.nodeTypes = {};

/**
 * Subscribers waiting for node types
 * @type {Object}
 * @private
 */
SceneJS_NodeFactory._subs = {};

/**
 * Creates a node class for instantiation by this factory
 *
 * @param {String} typeName Name of type, eg. "rotate"
 * @param {String} coreTypeName Optional name of core type for the node, eg. "xform" - defaults to type name of node
 * @param {Function} [augment] Augments the basic node type with our custom node methods
 * @returns The new node class
 */
SceneJS_NodeFactory.createNodeType = function (typeName, coreTypeName, augment) {
    if (SceneJS_NodeFactory.nodeTypes[typeName]) {
        throw "Node type already defined: " + typeName;
    }
    var nodeType = function () { // Create the class
        SceneJS.Node.apply(this, arguments);
        this.type = typeName;
    };
    nodeType.prototype = new SceneJS.Node();            // Inherit from base class
    nodeType.prototype.constructor = nodeType;
    SceneJS_NodeFactory.nodeTypes[typeName] = nodeType;

    var type = SceneJS_NodeFactory.nodeTypes[typeName]; // Type has installed itself
    if (!type) {
        throw "Node type plugin did not install itself correctly";
    }
    // Augment the basic node type
    if (augment) {
        augment(nodeType);
    }
    // Notify subscribers waiting for the type
    var subs = SceneJS_NodeFactory._subs[typeName];
    if (subs) {
        while (subs.length > 0) {
            subs.pop()(type);
        }
        delete subs[typeName];
    }
    return nodeType;
};

/**
 *
 */
SceneJS_NodeFactory.prototype.getNode = function (engine, json, core, ok) {
    json.type = json.type || "node"; // Nodes are SceneJS.Node type by default
    var nodeType;
    if (json.type == "node") {
        nodeType = SceneJS.Node;
    } else {
        nodeType = SceneJS_NodeFactory.nodeTypes[json.type];
    }
    if (nodeType) {
        return this._createNode(nodeType, engine, json, core, ok);
    } else {
        var self = this;
        this._getType(
            engine,
            json.type,
            function (nodeType) {
                self._createNode(nodeType, engine, json, core, ok);
            });
    }
};

SceneJS_NodeFactory.prototype._createNode = function (nodeType, engine, json, core, ok) {
    var node = new nodeType();
    var id = json.id || json.nodeId; // 'id' and 'nodeId' are aliases
    if (id) {
        this.nodes.addItem(id, node);
    } else {
        id = this.nodes.addItem(node);
    }
    node._construct(engine, core, json, id); // Instantiate node
    if (ok) {
        ok(node);
    }
    return node;
};

/**
 * Returns installed type of given type and ID
 */
SceneJS_NodeFactory.prototype._getType = function (engine, typeName, ok) {
    var type = SceneJS_NodeFactory.nodeTypes[typeName];
    if (type) {
        ok(type);
        return;
    }
    var subs = SceneJS_NodeFactory._subs[typeName] || (SceneJS_NodeFactory._subs[typeName] = []);
    subs.push(ok);
    if (subs.length > 1) { // Not first sub
        return;
    }
    var taskId = SceneJS_sceneStatusModule.taskStarted(engine.scene, "Loading plugin");
    subs.push(function () {
        SceneJS_sceneStatusModule.taskFinished(taskId);
    });
    var self = this;
    var typePath = SceneJS_configsModule.configs.pluginPath;
    if (!typePath) {
        throw "no typePath config"; // Build script error - should create this config
    }
    this._loadScript(typePath + "/node/" + typeName + ".js",
        function () {
            SceneJS_sceneStatusModule.taskFailed(taskId);
        });
};

SceneJS_NodeFactory.prototype._loadScript = function (url, error) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.onerror = error;
    document.getElementsByTagName("head")[0].appendChild(script);
};

/**
 * Releases a node back to this factory
 */
SceneJS_NodeFactory.prototype.putNode = function (node) {
    this.nodes.removeItem(node.id);
};
(function () {

    var defaultMatrix = SceneJS_math_perspectiveMatrix4(
        45, // fovy
        1, // aspect
        0.1, // near
        10000); // far

    var defaultMat = new Float32Array(defaultMatrix);

    // The default state core singleton for {@link SceneJS.Camera} nodes
    var defaultCore = {
        type:"camera",
        stateId:SceneJS._baseStateId++,
        matrix:defaultMatrix,
        mat:defaultMat,
        optics:{
            type:"perspective",
            fovy:45.0,
            aspect:1.0,
            near:0.1,
            far:10000.0
        }
    };

    var coreStack = [];
    var stackLen = 0;

    // Set default core on the display at the start of each new scene compilation
    SceneJS_events.addListener(
        SceneJS_events.SCENE_COMPILING,
        function (params) {
            params.engine.display.projTransform = defaultCore;
            stackLen = 0;
        });

    /**
     * @class Scene graph node which defines the projection transform to apply to the {@link SceneJS.Geometry} nodes in its subgraph
     * @extends SceneJS.Node
     */
    SceneJS.Camera = SceneJS_NodeFactory.createNodeType("camera");

    SceneJS.Camera.prototype._init = function (params) {
        if (this._core.useCount == 1) {
            this.setOptics(params.optics); // Can be undefined

            // Rebuild on every scene tick
            // https://github.com/xeolabs/scenejs/issues/277
            var self = this;
            this._tick = this.getScene().on("tick", function () {
                if (self._core.dirty) {
                    self._core.rebuild();
                }
            });
        }
    };

    /**
     * Returns the default camera projection matrix
     * @return {Float32Array}
     */
    SceneJS.Camera.getDefaultMatrix = function () {
        return defaultMat;
    };

    SceneJS.Camera.prototype.setOptics = function (optics) {
        var core = this._core;
        if (!optics) {
            core.optics = {
                type:"perspective",
                fovy:60.0,
                aspect:1.0,
                near:0.1,
                far:10000.0
            };
        } else {
            var type = optics.type || core.optics.type;
            if (type == "ortho") {
                core.optics = SceneJS._applyIf(SceneJS_math_ORTHO_OBJ, {
                    type:type,
                    left:optics.left,
                    bottom:optics.bottom,
                    near:optics.near,
                    right:optics.right,
                    top:optics.top,
                    far:optics.far
                });
            } else if (type == "frustum") {
                core.optics = {
                    type:type,
                    left:optics.left || -1.0,
                    bottom:optics.bottom || -1.0,
                    near:optics.near || 0.1,
                    right:optics.right || 1.00,
                    top:optics.top || 1.0,
                    far:optics.far || 10000.0
                };
            } else if (type == "perspective") {
                core.optics = {
                    type:type,
                    fovy:optics.fovy || 60.0,
                    aspect:optics.aspect == undefined ? 1.0 : optics.aspect,
                    near:optics.near || 0.1,
                    far:optics.far || 10000.0
                };
            } else if (!optics.type) {
                throw SceneJS_error.fatalError(
                    SceneJS.errors.ILLEGAL_NODE_CONFIG,
                    "SceneJS.Camera configuration invalid: optics type not specified - " +
                        "supported types are 'perspective', 'frustum' and 'ortho'");
            } else {
                throw SceneJS_error.fatalError(
                    SceneJS.errors.ILLEGAL_NODE_CONFIG,
                    "SceneJS.Camera configuration invalid: optics type not supported - " +
                        "supported types are 'perspective', 'frustum' and 'ortho'");
            }
        }
        this._rebuild();
        this._engine.display.imageDirty = true;
    };

    SceneJS.Camera.prototype._rebuild = function () {
        var optics = this._core.optics;
        if (optics.type == "ortho") {
            this._core.matrix = SceneJS_math_orthoMat4c(
                optics.left,
                optics.right,
                optics.bottom,
                optics.top,
                optics.near,
                optics.far);

        } else if (optics.type == "frustum") {
            this._core.matrix = SceneJS_math_frustumMatrix4(
                optics.left,
                optics.right,
                optics.bottom,
                optics.top,
                optics.near,
                optics.far);

        } else if (optics.type == "perspective") {
            this._core.matrix = SceneJS_math_perspectiveMatrix4(
                optics.fovy * Math.PI / 180.0,
                optics.aspect,
                optics.near,
                optics.far);
        }
        if (!this._core.mat) {
            this._core.mat = new Float32Array(this._core.matrix);
        } else {
            this._core.mat.set(this._core.matrix);
        }
        this.publish("matrix", this._core.matrix);
    };

    SceneJS.Camera.prototype.getOptics = function () {
        var optics = {};
        for (var key in this._core.optics) {
            if (this._core.optics.hasOwnProperty(key)) {
                optics[key] = this._core.optics[key];
            }
        }
        return optics;
    };

    SceneJS.Camera.prototype.getMatrix = function () {
        return this._core.matrix.slice(0);
    };

    /**
     * Compiles this camera node, setting this node's state core on the display, compiling sub-nodes,
     * then restoring the previous camera state core back onto the display on exit.
     */
    SceneJS.Camera.prototype._compile = function (ctx) {
        this._engine.display.projTransform = coreStack[stackLen++] = this._core;
        this._compileNodes(ctx);
        this._engine.display.projTransform = (--stackLen > 0) ? coreStack[stackLen - 1] : defaultCore;
    };

    SceneJS.Camera.prototype._destroy = function () {
        // Stop publishing matrix on each tick
        this.getScene().off(this._tick);
    };
})();(function() {

    /**
     * The default state core singleton for {@link SceneJS.Clips} nodes
     */
    var defaultCore = {
        type: "clips",
        stateId: SceneJS._baseStateId++,
        empty: true,        
        hash: "",
        clips : []
    };

    var coreStack = [];
    var stackLen = 0;

    SceneJS_events.addListener(
            SceneJS_events.SCENE_COMPILING,
            function(params) {
                params.engine.display.clips = defaultCore;
                stackLen = 0;
            });

    /**
     * @class Scene graph node which defines one or more arbitrarily-aligned clip planes to clip the {@link SceneJS.Geometry} nodes in its subgraph
     * @extends SceneJS.Node
     */
    SceneJS.Clips = SceneJS_NodeFactory.createNodeType("clips");

    SceneJS.Clips.prototype._init = function(params) {

        if (this._core.useCount == 1) { // This node defines the resource

            var clips = params.clips;

            if (!clips) {
                throw SceneJS_error.fatalError(
                        SceneJS.errors.NODE_CONFIG_EXPECTED,
                        "clips node attribute missing : 'clips'");
            }

            this._core.clips = this._core.clips || [];

            for (var i = 0, len = clips.length; i < len; i++) {
                this._setClip(i, clips[i]);
            }
        }
    };

    SceneJS.Clips.prototype.setClips = function(clips) {
        var indexNum;
        for (var index in clips) {
            if (clips.hasOwnProperty(index)) {
                if (index != undefined || index != null) {
                    indexNum = parseInt(index);
                    if (indexNum < 0 || indexNum >= this._core.clips.length) {
                        throw SceneJS_error.fatalError(
                                SceneJS.errors.ILLEGAL_NODE_CONFIG,
                                "Invalid argument to set 'clips': index out of range (" + this._core.clips.length + " clips defined)");
                    }
                    this._setClip(indexNum, clips[index] || {});
                }
            }
        }
        this._engine.display.imageDirty = true;
    };

    SceneJS.Clips.prototype._setClip = function(index, cfg) {

        var clip = this._core.clips[index] || (this._core.clips[index] = {});

        clip.normalAndDist = [cfg.x || 0,  cfg.y || 0, cfg.z || 0, cfg.dist || 0];

        var mode = cfg.mode || clip.mode || "disabled";

        if (mode != "inside" && mode != "outside" && mode != "disabled") {
            throw SceneJS_error.fatalError(
                    SceneJS.errors.ILLEGAL_NODE_CONFIG,
                    "clips node invalid value for property 'mode': should be 'inside' or 'outside' or 'disabled'");
        }
        clip.mode = mode;

        this._core.hash = null;
    };

    SceneJS.Clips.prototype._compile = function(ctx) {

        if (!this._core.hash) {
            this._core.hash = this._core.clips.length;
        }

        this._engine.display.clips = coreStack[stackLen++] = this._core;
        this._compileNodes(ctx);
        this._engine.display.clips = (--stackLen > 0) ? coreStack[stackLen - 1] : defaultCore;
    };


})();(function () {

    // The default state core singleton for {@link SceneJS.Enable} nodes
    var defaultCore = {
        stateId:SceneJS._baseStateId++,
        type:"enable",
        enabled:true
    };

    var coreStack = [];
    var stackLen = 0;

    SceneJS_events.addListener(
        SceneJS_events.SCENE_COMPILING,
        function (params) {
            params.engine.display.enable = defaultCore;
            stackLen = 0;
        });

    /**
     * @class Scene graph node which enables or disables rendering for its subgraph
     * @extends SceneJS.Node
     */
    SceneJS.Enable = SceneJS_NodeFactory.createNodeType("enable");

    SceneJS.Enable.prototype._init = function (params) {
        if (this._core.useCount == 1) {   // This node is first to reference the state core, so sets it up
            this._core.enabled = true;
            if (params.enabled != undefined) {
                this.setEnabled(params.enabled);
            }
        }
    };

    SceneJS.Enable.prototype.setEnabled = function (enabled) {
        if (enabled !== this._core.enabled) {
            this._core.enabled = enabled;
            this._engine.display.drawListDirty = true;
            this.publish("enabled", enabled);
        }
        return this;
    };

    SceneJS.Enable.prototype.getEnabled = function () {
        return this._core.enabled;
    };

    SceneJS.Enable.prototype._compile = function (ctx) {
        this._engine.display.enable = coreStack[stackLen++] = this._core;
        this._compileNodes(ctx);
        this._engine.display.enable = (--stackLen > 0) ? coreStack[stackLen - 1] : defaultCore;
    };

})();(function() {

    /**
     * The default state core singleton for {@link SceneJS.Flags} nodes
     */
    var defaultCore = {

        stateId: SceneJS._baseStateId++,
        type: "flags",

        picking : true,             // Picking enabled
        clipping : true,            // User-defined clipping enabled
        enabled : true,             // Node not culled from traversal
        transparent: false,         // Node transparent - works in conjunction with matarial alpha properties
        backfaces: true,            // Show backfaces
        frontface: "ccw",           // Default vertex winding for front face
        backfaceLighting: true,     // Shading enabled for backfaces
        backfaceTexturing: true,    // Texturing enabled for backfaces
        diffuse: true,              // Diffuse lighting enabled
        specular: true,             // Specular lighting enabled
        ambient: true               // Ambient lighting enabled
    };

    var coreStack = [];
    var stackLen = 0;

    SceneJS_events.addListener(
            SceneJS_events.SCENE_COMPILING,
            function(params) {
                params.engine.display.flags = defaultCore;
                stackLen = 0;
            });

    /**
     * @class Scene graph node which sets rendering mode flags for its subgraph
     * @extends SceneJS.Node
     */
    SceneJS.Flags = SceneJS_NodeFactory.createNodeType("flags");

    SceneJS.Flags.prototype._init = function(params) {

        if (this._core.useCount == 1) {         // This node is first to reference the state core, so sets it up

            this._core.picking = true;           // Picking enabled
            this._core.clipping = true;          // User-defined clipping enabled
            this._core.enabled = true;           // Node not culled from traversal
            this._core.transparent = false;      // Node transparent - works in conjunction with matarial alpha properties
            this._core.backfaces = true;         // Show backfaces
            this._core.frontface = "ccw";        // Default vertex winding for front face
            this._core.backfaceLighting = true;  // Shading enabled for backfaces
            this._core.backfaceTexturing = true; // Texturing enabled for backfaces
            this._core.diffuse = true;           // Diffuse lighting enabled by default
            this._core.specular = true;          // Specular lighting enabled by default
            this._core.ambient = true;           // Ambient lighting enabled by default

            if (params.flags) {                 // 'flags' property is actually optional in the node definition
                this.setFlags(params.flags);
            }
        }
    };

    SceneJS.Flags.prototype.setFlags = function(flags) {

        var core = this._core;

        if (flags.picking != undefined) {
            core.picking = !!flags.picking;
            this._engine.display.drawListDirty = true;
        }

        if (flags.clipping != undefined) {
            core.clipping = !!flags.clipping;
            this._engine.display.imageDirty = true;
        }

        if (flags.enabled != undefined) {
            core.enabled = !!flags.enabled;
            this._engine.display.drawListDirty = true;
        }

        if (flags.transparent != undefined) {
            core.transparent = !!flags.transparent;
            this._engine.display.drawListDirty = true;
        }

        if (flags.backfaces != undefined) {
            core.backfaces = !!flags.backfaces;
            this._engine.display.imageDirty = true;
        }

        if (flags.frontface != undefined) {
            core.frontface = flags.frontface;
            this._engine.display.imageDirty = true;
        }

        if (flags.backfaceLighting != undefined) {
            core.backfaceLighting = !!flags.backfaceLighting;
            this._engine.display.imageDirty = true;
        }

        if (flags.backfaceTexturing != undefined) {
            core.backfaceTexturing = !!flags.backfaceTexturing;
            this._engine.display.imageDirty = true;
        }

        if (flags.diffuse != undefined) {
            core.diffuse = !!flags.diffuse;
            this._engine.display.imageDirty = true;
        }

        if (flags.specular != undefined) {
            core.specular = !!flags.specular;
            this._engine.display.imageDirty = true;
        }

        if (flags.ambient != undefined) {
            core.ambient = !!flags.ambient;
            this._engine.display.imageDirty = true;
        }

        return this;
    };

    SceneJS.Flags.prototype.addFlags = function(flags) {
        return this.setFlags(flags);
        //        var core = this._core;
        //        if (flags.picking != undefined) core.picking = flags.picking;
        //        if (flags.clipping != undefined) core.clipping = flags.clipping;
        //        if (flags.enabled != undefined) core.enabled = flags.enabled;
        //        if (flags.transparent != undefined) core.transparent = flags.transparent;
        //        if (flags.backfaces != undefined) core.backfaces = flags.backfaces;
        //        if (flags.frontface != undefined) core.frontface = flags.frontface;
        //        if (flags.backfaceLighting != undefined) core.backfaceLighting = flags.backfaceLighting;
        //        if (flags.backfaceTexturing != undefined) core.backfaceTexturing = flags.backfaceTexturing;
        //        return this;
    };

    SceneJS.Flags.prototype.getFlags = function() {
        var core = this._core;
        return {
            picking : core.picking,
            clipping : core.clipping,
            enabled : core.enabled,
            transparent: core.transparent,
            backfaces: core.backfaces,
            frontface: core.frontface,
            diffuse: core.diffuse,
            specular: core.specular,
            ambient: core.ambient,
            backfaceLighting: core.backfaceLighting,
            backfaceTexturing: core.backfaceTexturing
        };
    };

    SceneJS.Flags.prototype.setPicking = function(picking) {
        picking = !!picking;
        if (this._core.picking != picking) {
            this._core.picking = picking;
            this._engine.display.drawListDirty = true;
        }
        return this;
    };

    SceneJS.Flags.prototype.getPicking = function() {
        return this._core.picking;
    };

    SceneJS.Flags.prototype.setClipping = function(clipping) {
        clipping = !!clipping;
        if (this._core.clipping != clipping) {
            this._core.clipping = clipping;
            this._engine.display.imageDirty = true;
        }
        return this;
    };

    SceneJS.Flags.prototype.getClipping = function() {
        return this._core.clipping;
    };

    SceneJS.Flags.prototype.setEnabled = function(enabled) {
        enabled = !!enabled;
        if (this._core.enabled != enabled) {
            this._core.enabled = enabled;
            this._engine.display.drawListDirty = true;
        }
        return this;
    };

    SceneJS.Flags.prototype.getEnabled = function() {
        return this._core.enabled;
    };

    SceneJS.Flags.prototype.setTransparent = function(transparent) {
        transparent = !!transparent;
        if (this._core.transparent != transparent) {
            this._core.transparent = transparent;
            this._engine.display.drawListDirty = true;
        }
        return this;
    };

    SceneJS.Flags.prototype.getTransparent = function() {
        return this._core.transparent;
    };

    SceneJS.Flags.prototype.setBackfaces = function(backfaces) {
        backfaces = !!backfaces;
        if (this._core.backfaces != backfaces) {
            this._core.backfaces = backfaces;
            this._engine.display.imageDirty = true;
        }
        return this;
    };

    SceneJS.Flags.prototype.getBackfaces = function() {
        return this._core.backfaces;
    };

    SceneJS.Flags.prototype.setFrontface = function(frontface) {
        if (this._core.frontface != frontface) {
            this._core.frontface = frontface;
            this._engine.display.imageDirty = true;
        }
        return this;
    };

    SceneJS.Flags.prototype.getFrontface = function() {
        return this._core.frontface;
    };

    SceneJS.Flags.prototype.setBackfaceLighting = function(backfaceLighting) {
        backfaceLighting = !!backfaceLighting;
        if (this._core.backfaceLighting != backfaceLighting) {
            this._core.backfaceLighting = backfaceLighting;
            this._engine.display.imageDirty = true;
        }
        return this;
    };

    SceneJS.Flags.prototype.getBackfaceLighting = function() {
        return this._core.backfaceLighting;
    };

    SceneJS.Flags.prototype.setBackfaceTexturing = function(backfaceTexturing) {
        backfaceTexturing = !!backfaceTexturing;
        if (this._core.backfaceTexturing != backfaceTexturing) {
            this._core.backfaceTexturing = backfaceTexturing;
            this._engine.display.imageDirty = true;
        }
        return this;
    };

    SceneJS.Flags.prototype.getBackfaceTexturing = function() {
        return this._core.backfaceTexturing;
    };

    SceneJS.Flags.prototype.setDiffuse = function(diffuse) {
        diffuse = !!diffuse;
        if (this._core.diffuse != diffuse) {
            this._core.diffuse = diffuse;
            this._engine.display.imageDirty = true;
        }
        return this;
    };

    SceneJS.Flags.prototype.getDiffuse = function() {
        return this._core.diffuse;
    };

    SceneJS.Flags.prototype.setSpecular = function(specular) {
        specular = !!specular;
        if (this._core.specular != specular) {
            this._core.specular = specular;
            this._engine.display.imageDirty = true;
        }
        return this;
    };

    SceneJS.Flags.prototype.getSpecular = function() {
        return this._core.specular;
    };
    
    SceneJS.Flags.prototype.setAmbient = function(ambient) {
        ambient = !!ambient;
        if (this._core.ambient != ambient) {
            this._core.ambient = ambient;
            this._engine.display.imageDirty = true;
        }
        return this;
    };

    SceneJS.Flags.prototype.getAmbient = function() {
        return this._core.ambient;
    };

    SceneJS.Flags.prototype.setAmbient = function(ambient) {
        ambient = !!ambient;
        if (this._core.ambient != ambient) {
            this._core.ambient = ambient;
            this._engine.display.imageDirty = true;
        }
        return this;
    };

    SceneJS.Flags.prototype.getAmbient = function() {
        return this._core.ambient;
    };

    SceneJS.Flags.prototype._compile = function(ctx) {
        this._engine.display.flags = coreStack[stackLen++] = this._core;
        this._compileNodes(ctx);
        this._engine.display.flags = (--stackLen > 0) ? coreStack[stackLen - 1] : defaultCore;
    };

})();new (function() {

    /**
     * The default state core singleton for {@link SceneJS.Framebuf} nodes
     */
    var defaultCore = {

        type: "framebuf",
        stateId: SceneJS._baseStateId++,
        empty: true,

        framebuf: null
    };

    var nodeCoreMap = {}; // Map of framebuf nodes to cores, for reallocation on WebGL context restore

    var coreStack = [];
    var stackLen = 0;

    SceneJS_events.addListener(
            SceneJS_events.SCENE_COMPILING,
            function(params) {
                params.engine.display.framebuf = defaultCore;
                stackLen = 0;
            });

    SceneJS_events.addListener(// Reallocate VBOs when context restored after loss
            SceneJS_events.WEBGL_CONTEXT_RESTORED,
            function() {

                var node;

                for (var nodeId in nodeCoreMap) {
                    if (nodeCoreMap.hasOwnProperty(nodeId)) {

                        node = nodeCoreMap[nodeId];

                        if (!node._core._loading) {
                            node._buildNodeCore();
                        }
                    }
                }
            });

    SceneJS_events.addListener(
            SceneJS_events.SCENE_DESTROYED,
            function(params) {
                //     sceneBufs[params.sceneId] = null;
            });

    /**
     * @class Scene graph node which sets up a frame buffer to which the {@link SceneJS.Geometry} nodes in its subgraph will be rendered.
     * The frame buffer may be referenced as an image source by successive {@link SceneJS.Texture} nodes.
     * @extends SceneJS.Node
     */
    SceneJS.Framebuf = SceneJS_NodeFactory.createNodeType("framebuf");

    SceneJS.Framebuf.prototype._init = function() {

        nodeCoreMap[this._core.coreId] = this; // Register for core rebuild on WEBGL_CONTEXT_RESTORED

        this._buildNodeCore();
    };

    SceneJS.Framebuf.prototype._buildNodeCore = function() {

        var canvas = this._engine.canvas;
        var gl = canvas.gl;
        var width = canvas.canvas.width;
        var height = canvas.canvas.height;

        var framebuf = gl.createFramebuffer();
        var renderbuf = gl.createRenderbuffer();
        var texture = gl.createTexture() ;

        var rendered = false;

        if (!this._core) {
            this._core = {};
        }

        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuf);

        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

        try {
            // Do it the way the spec requires
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        } catch (exception) {
            // Workaround for what appears to be a Minefield bug.
            var textureStorage = new WebGLUnsignedByteArray(width * height * 4);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, textureStorage);
        }
        gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuf);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuf);
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        /* Verify framebuffer is OK
         */
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuf);

        if (!gl.isFramebuffer(framebuf)) {
            throw SceneJS_error.fatalError("Invalid framebuffer");
        }

        var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);

        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        switch (status) {
            case gl.FRAMEBUFFER_COMPLETE:
                break;
            case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                throw SceneJS_error.fatalError("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
            case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                throw SceneJS_error.fatalError("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
            case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                throw SceneJS_error.fatalError("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
            case gl.FRAMEBUFFER_UNSUPPORTED:
                throw SceneJS_error.fatalError("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");
            default:
                throw SceneJS_error.fatalError("Incomplete framebuffer: " + status);
        }

        this._core.framebuf = {

            id: this.id, // TODO: maybe unused?

            /** Binds the image buffer as target for subsequent geometry renders
             */
            bind: function() {
             //   gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuf);
                gl.bindFramebuffer(gl.FRAMEBUFFER, framebuf);
                gl.clearColor(0.0, 0.0, 0.0, 1.0);
                gl.clearDepth(1.0);
                gl.enable(gl.DEPTH_TEST);
                gl.disable(gl.CULL_FACE);
                gl.depthRange(0, 1);
                gl.disable(gl.SCISSOR_TEST);
                //  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
                gl.disable(gl.BLEND);
            },

            /** Unbinds image buffer, the default buffer then becomes the rendering target
             */
            unbind:function() {
                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
               // gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
                gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuf);
                rendered = true;
            },

            /** Returns true if this texture has been rendered
             */
            isRendered: function() {
                return rendered;
            },

            /** Gets the texture from this image buffer
             */
            getTexture: function() {

                return {

                    bind: function(unit) {
                        gl.activeTexture(gl["TEXTURE" + unit]);
                        gl.bindTexture(gl.TEXTURE_2D, texture);
                    },

                    unbind : function(unit) {
                        gl.activeTexture(gl["TEXTURE" + unit]);
                        gl.bindTexture(gl.TEXTURE_2D, null);
                    }
                };
            }
        };
    };

    SceneJS.Framebuf.prototype._compile = function(ctx) {
        this._engine.display.framebuf = coreStack[stackLen++] = this._core;
        this._compileNodes(ctx);
        this._engine.display.framebuf = (--stackLen > 0) ? coreStack[stackLen - 1] : defaultCore;
    };

    SceneJS.Framebuf.prototype._destroy = function() {
        if (this._core) {
            //destroyFrameBuffer(this._buf);
        }
    };


})();new (function () {

    var coreStack = [];
    var stackLen = 0;

    SceneJS_events.addListener(
        SceneJS_events.SCENE_COMPILING,
        function () {
            stackLen = 0;
        });

    /**
     * @class Scene graph node that defines geometry.
     * @extends SceneJS.Node
     * When this node is at a leaf, it defines a scene object which inherits the state set up by all the nodes above it
     * on the path up to the root. These nodes can be nested, so that child geometries inherit arrays
     * defined by parent geometries.
     */
    SceneJS.Geometry = SceneJS_NodeFactory.createNodeType("geometry");

    SceneJS.Geometry.prototype._init = function (params) {

        if (this._core.useCount == 1) { // This node defines the core

            var taskId;

            var options = {
                origin:params.origin,
                scale:params.scale,
                autoNormals:params.normals == "auto"
            };

            var self = this;

            this._sourceConfigs = null;
            this._source = null;

            if (params.plugin) {
                this._sourceConfigs = SceneJS._apply({ type:params.plugin }, params);
            } else if (params.source) {
                this._sourceConfigs = params.source;
            }

            if (this._sourceConfigs) {

                /*---------------------------------------------------------------------------------------------------
                 * Build node core (possibly asynchronously) using a factory object
                 *--------------------------------------------------------------------------------------------------*/

                this._core._loading = true;

                if (!this._sourceConfigs.type) {
                    throw SceneJS_error.fatalError(
                        SceneJS.errors.ILLEGAL_NODE_CONFIG,
                        "geometry config expected: source.type");
                }

                SceneJS.Plugins.getPlugin(
                    "geometry",
                    this._sourceConfigs.type,
                    function (plugin) {

                        if (!plugin.getSource) {
                            throw SceneJS_error.fatalError(
                                SceneJS.errors.PLUGIN_INVALID,
                                "geometry: 'getSource' method missing on plugin for geometry source type '" + self._sourceConfigs.type + "'.");
                        }

                        self._source = plugin.getSource();

                        if (!self._source.subscribe) {
                            throw SceneJS_error.fatalError(
                                SceneJS.errors.PLUGIN_INVALID,
                                "geometry: 'subscribe' method missing on plugin for geometry source type '" + self._sourceConfigs.type + "'");
                        }

                        var created = false;

                        self._source.subscribe(// Get notification when source configurees the geometry
                            function (data) { // Data contains both typed arrays and primitive name

                                if (!created) {
                                    if (options) { // HACK - should apply this on GPU
                                        data.positions = data.positions
                                            ? new Float32Array((options.scale || options.origin)
                                            ? self._applyOptions(data.positions, options)
                                            : data.positions) : undefined;
                                    }
                                    self._initNodeCore(data, options);
                                    SceneJS.Geometry._buildNodeCore(self._engine.canvas.gl, self._core);
                                    self._core._loading = false;
                                    //self._fireEvent("loaded");
                                    self._engine.display.imageDirty = true;
                                    self._engine.branchDirty(self); // TODO
                                    created = true;
                                } else {

                                    var core = self._core;

                                    if (data.positions && core.vertexBuf) {

//                                    if (data.positions.length > core.vertexBuf.length) {
//                                        alert("too long");
//                                    }

                                        core.vertexBuf.bind();
                                        core.vertexBuf.setData(data.positions, data.positionsOffset || 0);

                                        if (data.positions.length > core.arrays.positions.length) {
                                            core.arrays.positions = data.positions;

                                        } else {
                                            core.arrays.positions.set(data.positions, data.positionsOffset || 0);
                                        }
                                    }

                                    if (data.normals && core.normalBuf) {

                                        core.normalBuf.bind();
                                        core.normalBuf.setData(data.normals, data.normalsOffset || 0);

                                        if (data.normals.length > core.arrays.normals.length) {
                                            core.arrays.normals = data.normals;

                                        } else {
                                            core.arrays.normals.set(data.normals, data.normalsOffset || 0);
                                        }
                                    }

                                    if (data.uv && core.uvBuf) {

                                        core.uvBuf.bind();
                                        core.uvBuf.setData(data.uv, data.uvOffset || 0);

                                        if (data.uv.length > core.arrays.uv.length) {
                                            core.arrays.uv = data.uv;

                                        } else {
                                            core.arrays.uv.set(data.uv, data.uvOffset || 0);
                                        }
                                    }

                                    if (data.uv2 && core.uvBuf2) {

                                        core.uvBuf2.bind();
                                        core.uvBuf2.setData(data.uv2, data.uv2Offset || 0);

                                        if (data.uv2.length > core.arrays.uv2.length) {
                                            core.arrays.uv2 = data.uv2;

                                        } else {
                                            core.arrays.uv2.set(data.uv2, data.uv2Offset || 0);
                                        }
                                    }

                                    if (data.colors && core.colorBuf) {

                                        if (data.colors.length > core.arrays.colors.length) {
                                            core.arrays.colors = data.colors;

                                        } else {
                                            core.arrays.colors.set(data.colors, data.colorsOffset || 0);
                                        }

                                        core.colorBuf.bind();
                                        core.colorBuf.setData(data.colors, data.colorsOffset || 0);
                                    }

                                    if (data.indices && core.indexBuf) {

                                        if (data.indices.length > core.arrays.indices.length) {
                                            core.arrays.indices = data.indices;

                                        } else {
                                            core.arrays.indices.set(data.indices, data.indicesOffset || 0);
                                        }

                                        core.indexBuf.bind();
                                        core.indexBuf.setData(data.indices, data.indicesOffset || 0);

                                        for (var i = 0; i < data.indices.length; i++) {
                                            var idx = data.indices[i];
                                            if (idx < 0 || idx >= core.arrays.positions.length) {
                                                alert("out of range ");
                                            }
                                            if (core.arrays.normals && (idx < 0 || idx >= core.arrays.normals.length)) {
                                                alert("out of range ");
                                            }
                                            if (core.arrays.uv && (idx < 0 || idx >= core.arrays.uv.length)) {
                                                alert("out of range ");
                                            }
                                            if (core.arrays.uv2 && (idx < 0 || idx >= core.arrays.uv2.length)) {
                                                alert("out of range ");
                                            }
                                            if (core.arrays.colors && (idx < 0 || idx >= core.arrays.colors.length)) {
                                                alert("out of range ");
                                            }
                                        }
                                    }

                                    self._engine.display.imageDirty = true;
                                }
                            }
                        );

                        if (self._source.configure) {
                            self._source.configure(self._sourceConfigs);
                        }
                    });

            } else {

                // Build node core from JSON arrays and primitive name given in node properties

                this._initNodeCore(params, options);

                SceneJS.Geometry._buildNodeCore(this._engine.canvas.gl, this._core);
            }

            this._core.webglRestored = function () {
                SceneJS.Geometry._buildNodeCore(self._engine.canvas.gl, self._core);
            };

        }
    };

    /**
     * Convert JSON arrays into typed arrays,
     * apply optional baked Model-space transforms to positions
     */
    SceneJS.Geometry.prototype._initNodeCore = function (data, options) {

        options = options || {};

        var primitive = data.primitive || "triangles";
        this._core.primitive = this._getPrimitiveType(primitive);

        var normals;

        if (data.normals) {
            if (data.normals == "auto" && primitive == "triangles") {
                if (data.positions && data.indices) {
                    // Auto normal generation
                    normals = this._buildNormals(data.positions, data.indices);
                } else {
                    // TODO: log warning?
                }
            } else {
                normals = data.normals;
            }
        }

        this._core.arrays = {
            positions:data.positions
                ? new Float32Array((options.scale || options.origin)
                ? this._applyOptions(data.positions, options)
                : data.positions) : undefined,

            normals:normals ? new Float32Array(normals) : undefined,
            uv:data.uv ? new Float32Array(data.uv) : undefined,
            uv2:data.uv2 ? new Float32Array(data.uv2) : undefined,
            colors:data.colors ? new Float32Array(data.colors) : undefined,
            indices:data.indices ? new Uint16Array(data.indices) : undefined
        };
    };

    /**
     * Returns WebGL constant for primitive name
     */
    SceneJS.Geometry.prototype._getPrimitiveType = function (primitive) {

        var gl = this._engine.canvas.gl;

        switch (primitive) {

            case "points":
                return gl.POINTS;

            case "lines":
                return gl.LINES;

            case "line-loop":
                return gl.LINE_LOOP;

            case "line-strip":
                return gl.LINE_STRIP;

            case "triangles":
                return gl.TRIANGLES;

            case "triangle-strip":
                return gl.TRIANGLE_STRIP;

            case "triangle-fan":
                return gl.TRIANGLE_FAN;

            default:
                throw SceneJS_error.fatalError(
                    SceneJS.errors.ILLEGAL_NODE_CONFIG,
                    "geometry primitive unsupported: '" +
                        primitive +
                        "' - supported types are: 'points', 'lines', 'line-loop', " +
                        "'line-strip', 'triangles', 'triangle-strip' and 'triangle-fan'");
        }
    };

    /**
     * Apply baked Model-space transformations to give position array
     */
    SceneJS.Geometry.prototype._applyOptions = function (positions, options) {

        var positions2 = positions.slice ? positions.slice(0) : new Float32Array(positions);  // HACK

        if (options.scale) {

            var scaleX = options.scale.x != undefined ? options.scale.x : 1.0;
            var scaleY = options.scale.y != undefined ? options.scale.y : 1.0;
            var scaleZ = options.scale.z != undefined ? options.scale.z : 1.0;

            for (var i = 0, len = positions2.length; i < len; i += 3) {
                positions2[i    ] *= scaleX;
                positions2[i + 1] *= scaleY;
                positions2[i + 2] *= scaleZ;
            }
        }

        if (options.origin) {

            var originX = options.origin.x != undefined ? options.origin.x : 0.0;
            var originY = options.origin.y != undefined ? options.origin.y : 0.0;
            var originZ = options.origin.z != undefined ? options.origin.z : 0.0;

            for (var i = 0, len = positions2.length; i < len; i += 3) {
                positions2[i    ] -= originX;
                positions2[i + 1] -= originY;
                positions2[i + 2] -= originZ;
            }
        }

        return positions2;
    };

    /**
     * Allocates WebGL buffers for geometry arrays
     *
     * In addition to initially allocating those, this is called to reallocate them after
     * WebGL context is regained after being lost.
     */
    SceneJS.Geometry._buildNodeCore = function (gl, core) {

        var usage = gl.STATIC_DRAW; //var usage = (!arrays.fixed) ? gl.STREAM_DRAW : gl.STATIC_DRAW;

        try { // TODO: Modify usage flags in accordance with how often geometry is evicted

            var arrays = core.arrays;

            if (arrays.positions) {
                core.vertexBuf = new SceneJS_webgl_ArrayBuffer(gl, gl.ARRAY_BUFFER, arrays.positions, arrays.positions.length, 3, usage);
            }

            if (arrays.normals) {
                core.normalBuf = new SceneJS_webgl_ArrayBuffer(gl, gl.ARRAY_BUFFER, arrays.normals, arrays.normals.length, 3, usage);
            }

            if (arrays.uv) {
                core.uvBuf = new SceneJS_webgl_ArrayBuffer(gl, gl.ARRAY_BUFFER, arrays.uv, arrays.uv.length, 2, usage);
            }

            if (arrays.uv2) {
                core.uvBuf2 = new SceneJS_webgl_ArrayBuffer(gl, gl.ARRAY_BUFFER, arrays.uv2, arrays.uv2.length, 2, usage);
            }

            if (arrays.colors) {
                core.colorBuf = new SceneJS_webgl_ArrayBuffer(gl, gl.ARRAY_BUFFER, arrays.colors, arrays.colors.length, 4, usage);
            }

            if (arrays.indices) {
                core.indexBuf = new SceneJS_webgl_ArrayBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, arrays.indices, arrays.indices.length, 1, usage);
            }

        } catch (e) { // Allocation failure - delete whatever buffers got allocated

            if (core.vertexBuf) {
                core.vertexBuf.destroy();
                core.vertexBuf = null;
            }

            if (core.normalBuf) {
                core.normalBuf.destroy();
                core.normalBuf = null;
            }

            if (core.uvBuf) {
                core.uvBuf.destroy();
                core.uvBuf = null;
            }

            if (core.uvBuf2) {
                core.uvBuf2.destroy();
                core.uvBuf2 = null;
            }

            if (core.colorBuf) {
                core.colorBuf.destroy();
                core.colorBuf = null;
            }

            if (core.indexBuf) {
                core.indexBuf.destroy();
                core.indexBuf = null;
            }

            throw SceneJS_error.fatalError(
                SceneJS.errors.ERROR,
                "Failed to allocate geometry: " + e);
        }
    };

    SceneJS.Geometry.prototype._updateArray = function (array, items, offset) {

        var arrayLen = array.length;
        var itemsLen = items.length;

        if (itemsLen + offset > arrayLen) {
            itemsLen -= (itemsLen + offset) - arrayLen;
        }

        for (var i = offset, j = 0; j < itemsLen; i++, j++) {
            array[i] = items[j];
        }

    };

    /** (re)builds normal vectors from vertices
     * @private
     */
    SceneJS.Geometry.prototype._buildNormals = function (positions, indices) {

        var nvecs = new Array(positions.length / 3);
        var j0;
        var j1;
        var j2;
        var v1;
        var v2;
        var v3;

        for (var i = 0, len = indices.length - 3; i < len; i += 3) {
            j0 = indices[i + 0];
            j1 = indices[i + 1];
            j2 = indices[i + 2];

            v1 = [positions[j0 * 3 + 0], positions[j0 * 3 + 1], positions[j0 * 3 + 2]];
            v2 = [positions[j1 * 3 + 0], positions[j1 * 3 + 1], positions[j1 * 3 + 2]];
            v3 = [positions[j2 * 3 + 0], positions[j2 * 3 + 1], positions[j2 * 3 + 2]];

            v2 = SceneJS_math_subVec4(v2, v1, [0, 0, 0, 0]);
            v3 = SceneJS_math_subVec4(v3, v1, [0, 0, 0, 0]);

            var n = SceneJS_math_normalizeVec4(SceneJS_math_cross3Vec4(v2, v3, [0, 0, 0, 0]), [0, 0, 0, 0]);

            if (!nvecs[j0]) nvecs[j0] = [];
            if (!nvecs[j1]) nvecs[j1] = [];
            if (!nvecs[j2]) nvecs[j2] = [];

            nvecs[j0].push(n);
            nvecs[j1].push(n);
            nvecs[j2].push(n);
        }

        var normals = new Array(positions.length);

        // now go through and average out everything
        for (var i = 0, len = nvecs.length; i < len; i++) {
            var count = nvecs[i].length;
            var x = 0;
            var y = 0;
            var z = 0;
            for (var j = 0; j < count; j++) {
                x += nvecs[i][j][0];
                y += nvecs[i][j][1];
                z += nvecs[i][j][2];
            }
            normals[i * 3 + 0] = (x / count);
            normals[i * 3 + 1] = (y / count);
            normals[i * 3 + 2] = (z / count);
        }
        return normals;
    };

    SceneJS.Geometry.prototype.setSource = function (sourceConfigs) {
        this._sourceConfigs = sourceConfigs;
        var source = this._source;
        if (source && source.configure) {
            source.configure(sourceConfigs);
        }
    };

    SceneJS.Geometry.prototype.getSource = function () {
        return this._sourceConfigs || {};
    };

    SceneJS.Geometry.prototype.setPositions = function (data) {
        if (data.positions && this._core.vertexBuf) {
            var core = this._core;
            core.vertexBuf.bind();
            core.vertexBuf.setData(new Float32Array(data.positions), data.positionsOffset || 0);
            core.arrays.positions.set(data.positions, data.positionsOffset || 0);
            this._engine.display.imageDirty = true;
        }
    };

    SceneJS.Geometry.prototype.getPositions = function () {
        return this._core.arrays ? this._core.arrays.positions : null;
    };

    SceneJS.Geometry.prototype.setNormals = function (data) {
        if (data.normals && this._core.normalBuf) {
            var core = this._core;
            core.normalBuf.bind();
            core.normalBuf.setData(new Float32Array(data.normals), data.normalsOffset || 0);
            core.arrays.normals.set(data.normals, data.normalsOffset || 0);
            this._engine.display.imageDirty = true;
        }
    };

    SceneJS.Geometry.prototype.getNormals = function () {
        return this._core.arrays ? this._core.arrays.normals : null;
    };

    SceneJS.Geometry.prototype.setColors = function (data) {
        if (data.colors && this._core.colorBuf) {
            var core = this._core;
            core.colorBuf.bind();
            core.colorBuf.setData(new Float32Array(data.colors), data.colorsOffset || 0);
            core.arrays.colors.set(data.colors, data.colorsOffset || 0);
            this._engine.display.imageDirty = true;
        }
    };

    SceneJS.Geometry.prototype.getColors = function () {
        return this._core.arrays ? this._core.arrays.colors : null;
    };

    SceneJS.Geometry.prototype.getIndices = function () {
        return this._core.arrays ? this._core.arrays.indices : null;
    };

    SceneJS.Geometry.prototype.setUV = function (data) {
        if (data.uv && this._core.colorBuf) {
            var core = this._core;
            core.colorBuf.bind();
            core.colorBuf.setData(new Float32Array(data.uv), data.uvOffset || 0);
            core.arrays.uv.set(data.uv, data.uvOffset || 0);
            this._engine.display.imageDirty = true;
        }
    };

    SceneJS.Geometry.prototype.getUV = function () {
        return this._core.arrays ? this._core.arrays.uv : null;
    };

    SceneJS.Geometry.prototype.setUV2 = function (data) {
        if (data.uv2 && this._core.colorBuf) {
            var core = this._core;
            core.colorBuf.bind();
            core.colorBuf.setData(new Float32Array(data.uv2), data.uv2Offset || 0);
            core.arrays.uv2.set(data.uv2, data.uv2Offset || 0);
            this._engine.display.imageDirty = true;
        }
    };

    SceneJS.Geometry.prototype.getUV2 = function () {
        return this._core.arrays ? this._core.arrays.uv2 : null;
    };

    SceneJS.Geometry.prototype.getPrimitive = function () {
        return this.primitive;
    };

    SceneJS.Geometry.prototype.getBoundary = function () {
        if (this._boundary) {
            return this._boundary;
        }

        var arrays = this._core.arrays;

        if (!arrays) {
            return null;
        }

        var positions = arrays.positions;

        if (!positions) {
            return null;
        }

        this._boundary = {
            xmin:SceneJS_math_MAX_DOUBLE,
            ymin:SceneJS_math_MAX_DOUBLE,
            zmin:SceneJS_math_MAX_DOUBLE,
            xmax:SceneJS_math_MIN_DOUBLE,
            ymax:SceneJS_math_MIN_DOUBLE,
            zmax:SceneJS_math_MIN_DOUBLE
        };

        var x, y, z;

        for (var i = 0, len = positions.length - 2; i < len; i += 3) {

            x = positions[i];
            y = positions[i + 1];
            z = positions[i + 2];

            if (x < this._boundary.xmin) {
                this._boundary.xmin = x;
            }
            if (y < this._boundary.ymin) {
                this._boundary.ymin = y;
            }
            if (z < this._boundary.zmin) {
                this._boundary.zmin = z;
            }
            if (x > this._boundary.xmax) {
                this._boundary.xmax = x;
            }
            if (y > this._boundary.ymax) {
                this._boundary.ymax = y;
            }
            if (z > this._boundary.zmax) {
                this._boundary.zmax = z;
            }
        }

        return this._boundary;
    };

    SceneJS.Geometry.prototype._compile = function (ctx) {

        if (this._core._loading) { // TODO: Breaks with asynch loaded cores - this node needs to recompile when target core is loaded
            this._compileNodes(ctx);
            return;
        }

        var core = this._core;

        if (!core.vertexBuf) {

            /* SceneJS.Geometry has no vertex buffer - it must be therefore be indexing a vertex/uv buffers defined
             * by a higher Geometry, as part of a composite geometry:
             *
             * It must therefore inherit the vertex buffer, along with UV coord buffers.
             *
             * We'll leave it to the render state graph traversal to ensure that the
             * vertex and UV buffers are not needlessly rebound for this geometry.
             */
            core = this._inheritVBOs(core);
        }

        if (core.indexBuf) { // Can only render when we have indices

            core.hash = ([                           // Safe to build geometry hash here - geometry is immutable
                core.normalBuf ? "t" : "f",
                core.uvBuf ? "t" : "f",
                core.uvBuf2 ? "t" : "f",
                core.colorBuf ? "t" : "f",
                core.primitive
            ]).join("");

            core.stateId = this._core.stateId;
            core.type = "geometry";

            this._engine.display.geometry = coreStack[stackLen++] = core;

            SceneJS_events.fireEvent(SceneJS_events.OBJECT_COMPILING, { // Pull in state updates from scenes nodes
                display:this._engine.display
            });

            this._engine.display.buildObject(this.id); // Use node ID since we may inherit from many cores

        } else {
            coreStack[stackLen++] = this._core;
        }

        this._compileNodes(ctx);

        stackLen--;
    };

    SceneJS.Geometry.prototype._inheritVBOs = function (core) {

        var core2 = {
            primitive:core.primitive,
            boundary:core.boundary,
            normalBuf:core.normalBuf,
            uvBuf:core.uvBuf,
            uvBuf2:core.uvBuf2,
            colorBuf:core.colorBuf,
            indexBuf:core.indexBuf
        };

        for (var i = stackLen - 1; i >= 0; i--) {
            if (coreStack[i].vertexBuf) {
                core2.vertexBuf = coreStack[i].vertexBuf;
                core2.boundary = coreStack[i].boundary;
                core2.normalBuf = coreStack[i].normalBuf;
                core2.uvBuf = coreStack[i].uvBuf;           // Vertex and UVs are a package
                core2.uvBuf2 = coreStack[i].uvBuf2;
                core2.colorBuf = coreStack[i].colorBuf;
                return core2;
            }
        }

        return core2;
    };

    SceneJS.Geometry.prototype._destroy = function () {

        this._engine.display.removeObject(this.id);

        /* Destroy core if no other references
         */
        if (this._core.useCount == 1) {

            this._destroyNodeCore();

            if (this._source && this._source.destroy) {
                this._source.destroy();
            }
        }
    };

    SceneJS.Geometry.prototype._destroyNodeCore = function () {

        if (document.getElementById(this._engine.canvas.canvasId)) { // Context won't exist if canvas has disappeared

            var core = this._core;

            if (core.vertexBuf) {
                core.vertexBuf.destroy();
            }
            if (core.normalBuf) {
                core.normalBuf.destroy();
            }
            if (core.uvBuf) {
                core.uvBuf.destroy();
            }
            if (core.uvBuf2) {
                core.uvBuf2.destroy();
            }
            if (core.colorBuf) {
                core.colorBuf.destroy();
            }
            if (core.indexBuf) {
                core.indexBuf.destroy();
            }
        }
    };

})
    ();(function() {

    /**
     * The default state core singleton for {@link SceneJS.Layer} nodes
     */
    var defaultCore = {
        type: "layer",
        stateId: SceneJS._baseStateId++,
        priority: 0,
        enabled: true
    };

    var coreStack = [];
    var stackLen = 0;

    SceneJS_events.addListener(
            SceneJS_events.SCENE_COMPILING,
            function(params) {
                params.engine.display.layer = defaultCore;
                stackLen = 0;
            });

    /**
     * @class Scene graph node which assigns the {@link SceneJS.Geometry}s within its subgraph to a prioritised render bin
     * @extends SceneJS.Node
     */
    SceneJS.Layer = SceneJS_NodeFactory.createNodeType("layer");

    SceneJS.Layer.prototype._init = function(params) {
        if (this._core.useCount == 1) { // This node defines the resource
            this._core.priority = params.priority || 0;
            this._core.enabled = params.enabled !== false;
        }
    };

    SceneJS.Layer.prototype.setPriority = function(priority) {
        priority = priority || 0;
        if (this._core.priority != priority) {
            this._core.priority = priority;
            this._engine.display.stateOrderDirty = true;
        }
    };

    SceneJS.Layer.prototype.getPriority = function() {
        return this._core.priority;
    };

    SceneJS.Layer.prototype.setEnabled = function(enabled) {
        enabled = !!enabled;
        if (this._core.enabled != enabled) {
            this._core.enabled = enabled;
            this._engine.display.drawListDirty = true;
        }
    };

    SceneJS.Layer.prototype.getEnabled = function() {
        return this._core.enabled;
    };

    SceneJS.Layer.prototype.getEnabled = function() {
        return this._core.enabled;
    };

    SceneJS.Layer.prototype.setClearDepth = function(clearDepth) {
        clearDepth = clearDepth || 0;
        if (this._core.clearDepth != clearDepth) {
            this._core.clearDepth = clearDepth;
            this._engine.display.drawListDirty = true;
        }
    };

    SceneJS.Layer.prototype.getClearDepth = function() {
        return this._core.clearDepth;
    };

    SceneJS.Layer.prototype._compile = function(ctx) {
        this._engine.display.layer = coreStack[stackLen++] = this._core;
        this._compileNodes(ctx);
        this._engine.display.layer = (--stackLen > 0) ? coreStack[stackLen - 1] : defaultCore;
    };

})();

/**
 * @class Scene graph node which assigns nodes in its subgraph to a library
 * @extends SceneJS.Node
 */
SceneJS.Library = SceneJS_NodeFactory.createNodeType("library");
SceneJS.Library.prototype._compile = function(ctx) { // Bypass child nodes
};

(function () {

    /**
     * The default state core singleton for {@link SceneJS.Lights} nodes
     */
    var defaultCore = {
        type:"lights",
        stateId:SceneJS._baseStateId++,
        hash:null,
        empty:false,
        lights:[
            {
                mode:"ambient",
                color:[0.7, 0.7, 0.8 ],
                diffuse:true,
                specular:false
            },
            {
                mode:"dir",
                color:[1.0, 1.0, 1.0 ],
                diffuse:true,
                specular:true,
                dir:[-0.5, -0.5, -1.0 ],
                space:"view"
            },
            {
                mode:"dir",
                color:[1.0, 1.0, 1.0 ],
                diffuse:false,
                specular:true,
                dir:[1.0, -0.9, -0.7 ],
                space:"view"
            }
        ]
    };

    makeHash(defaultCore);

    function makeHash(core) {
        if (core.lights && core.lights.length > 0) {
            var lights = core.lights;
            var parts = [];
            var light;
            for (var i = 0, len = lights.length; i < len; i++) {
                light = lights[i];
                parts.push(light.mode);
                if (light.specular) {
                    parts.push("s");
                }
                if (light.diffuse) {
                    parts.push("d");
                }
                parts.push((light.space == "world") ? "w" : "v");
            }
            core.hash = parts.join("");

        } else {
            core.hash = "";
        }
    }

    var coreStack = [];
    var stackLen = 0;

    SceneJS_events.addListener(
        SceneJS_events.SCENE_COMPILING,
        function (params) {
            params.engine.display.lights = defaultCore;
            stackLen = 0;
        });

    /**
     * @class Scene graph node which defines light sources to illuminate the {@link SceneJS.Geometry}s within its subgraph
     * @extends SceneJS.Node
     */
    SceneJS.Lights = SceneJS_NodeFactory.createNodeType("lights");

    SceneJS.Lights.prototype._init = function (params) {

        if (this._core.useCount == 1) { // This node defines the resource

            var lights = params.lights;

            if (!lights) {
                throw SceneJS_error.fatalError(
                    SceneJS.errors.NODE_CONFIG_EXPECTED,
                    "lights node attribute missing : 'lights'");
            }

            this._core.lights = this._core.lights || [];

            for (var i = 0, len = lights.length; i < len; i++) {
                this._initLight(i, lights[i]);
            }
        }
    };

    SceneJS.Lights.prototype._initLight = function (index, cfg) {

        var light = [];
        this._core.lights[index] = light;

        var mode = cfg.mode || "dir";
        if (mode != "dir" && mode != "point" && mode != "ambient") {
            throw SceneJS_error.fatalError(
                SceneJS.errors.ILLEGAL_NODE_CONFIG,
                "Light mode not supported - should be 'dir' or 'point' or 'ambient'");
        }

        var pos = cfg.pos;
        var dir = cfg.dir;

        var color = cfg.color;
        light.color = [
            color.r != undefined ? color.r : 1.0,
            color.g != undefined ? color.g : 1.0,
            color.b != undefined ? color.b : 1.0
        ];

        // Ambient lights hardwired to contribute to diffuse lighting
        light.mode = mode;
        light.diffuse = (mode == "ambient") ? true : ((cfg.diffuse != undefined) ? cfg.diffuse : true);
        light.specular = (mode == "ambient") ? false : ((cfg.specular != undefined) ? cfg.specular : true);
        light.pos = cfg.pos ? [ pos.x || 0, pos.y || 0, pos.z || 0 ] : undefined;
        light.dir = cfg.dir ? [dir.x || 0, dir.y || 0, dir.z || 0] : undefined;
        light.attenuation = [
            cfg.constantAttenuation != undefined ? cfg.constantAttenuation : 0.0,
            cfg.linearAttenuation || 0.0,
            cfg.quadraticAttenuation || 0.0
        ];

        var space = cfg.space;

        if (!space) {

            space = "world";

        } else if (space != "view" && space != "world") {

            throw SceneJS_error.fatalError(
                SceneJS.errors.ILLEGAL_NODE_CONFIG,
                "lights node invalid value for property 'space': '" + space + "' - should be 'view' or 'world'");
        }

        light.space = space;

        this._core.hash = null;
    };


    SceneJS.Lights.prototype.setLights = function (lights) {
        var indexNum;
        for (var index in lights) {
            if (lights.hasOwnProperty(index)) {
                if (index != undefined || index != null) {
                    indexNum = parseInt(index);
                    if (indexNum < 0 || indexNum >= this._core.lights.length) {
                        throw SceneJS_error.fatalError(
                            SceneJS.errors.ILLEGAL_NODE_CONFIG,
                            "Invalid argument to set 'lights': index out of range (" + this._core.lights.length + " lights defined)");
                    }
                    this._setLight(indexNum, lights[index] || {});
                }
            }
        }
        this._engine.branchDirty(this); // Schedule recompilation of this subgraph
    };

    SceneJS.Lights.prototype._setLight = function (index, cfg) {

        var light = this._core.lights[index];

        // Impact of light update
        var imageDirty = false; // Redraw display list?
        var branchDirty = false; // Recompile scene branch?

        if (cfg.mode && cfg.mode != light.mode) {
            var mode = cfg.mode;
            if (mode != "dir" && mode != "point" && mode != "ambient") {
                throw SceneJS_error.fatalError(
                    SceneJS.errors.ILLEGAL_NODE_CONFIG,
                    "Light mode not supported - should be 'dir' or 'point' or 'ambient'");
            }
            light.mode = mode;
            light.diffuse = (mode == "ambient") ? true : ((cfg.diffuse != undefined) ? cfg.diffuse : true);
            light.specular = (mode == "ambient") ? false : ((cfg.specular != undefined) ? cfg.specular : true);
            branchDirty = true;
        }

        if (cfg.color) {
            var color = cfg.color;
            light.color = [
                color.r != undefined ? color.r : 1.0,
                color.g != undefined ? color.g : 1.0,
                color.b != undefined ? color.b : 1.0
            ];
            imageDirty = true;
        }

        var pos = cfg.pos;
        if (pos) {
            light.pos = [ pos.x || 0, pos.y || 0, pos.z || 0 ];
            imageDirty = true;
        }

        var dir = cfg.dir;
        if (dir) {
            light.dir = [dir.x || 0, dir.y || 0, dir.z || 0];
            imageDirty = true;
        }

        if (cfg.constantAttenuation != undefined) {
            light.attenuation[0] = cfg.constantAttenuation;
            imageDirty = true;
        }
        if (cfg.linearAttenuation != undefined) {
            light.attenuation[1] = cfg.linearAttenuation;
            imageDirty = true;
        }
        if (cfg.quadraticAttenuation != undefined) {
            light.attenuation[2] = cfg.quadraticAttenuation;
            imageDirty = true;
        }

        if (cfg.space && cfg.space != light.space) {
            var space = cfg.space;
            if (space != "view" && space != "world") {
                throw SceneJS_error.fatalError(
                    SceneJS.errors.ILLEGAL_NODE_CONFIG,
                    "lights node invalid value for property 'space': '" + space + "' - should be 'view' or 'world'");
            }
            light.space = space;
            this._core.hash = null;
            branchDirty = true;
        }

        if (cfg.specular != light.specular) {
            light.specular = cfg.specular;
            branchDirty = true;
        }
        if (cfg.diffuse != light.diffuse) {
            light.diffuse = cfg.diffuse;
            branchDirty = true;
        }

        if (branchDirty) {
            this._engine.branchDirty(this); // Schedule recompilation of this subgraph
        } else if (imageDirty) {
            this._engine.display.imageDirty = true;
        }

        this._core.hash = null;
    };

    SceneJS.Lights.prototype._compile = function (ctx) {

        if (!this._core.hash) {
            makeHash(this._core);
        }

        this._engine.display.lights = coreStack[stackLen++] = this._core;
        this._compileNodes(ctx);
        this._engine.display.lights = (--stackLen > 0) ? coreStack[stackLen - 1] : defaultCore;
    };

})();(function () {

    var defaultMatrix = SceneJS_math_lookAtMat4c(0, 0, 10, 0, 0, 0, 0, 1, 0);
    var defaultMat = new Float32Array(defaultMatrix);
    var normalMat = SceneJS_math_transposeMat4(SceneJS_math_inverseMat4(defaultMat, SceneJS_math_mat4()));
    var defaultNormalMat = new Float32Array(normalMat);

    /**
     * The default state core singleton for {@link SceneJS.Lookat} nodes
     */
    var defaultCore = {
        type:"lookAt",
        stateId:SceneJS._baseStateId++,
        matrix:defaultMatrix,
        mat:defaultMat,
        normalMatrix:normalMat,
        normalMat:defaultNormalMat,
        lookAt:SceneJS_math_LOOKAT_ARRAYS
    };

    var coreStack = [];
    var stackLen = 0;

    SceneJS_events.addListener(
        SceneJS_events.SCENE_COMPILING,
        function (params) {
            params.engine.display.viewTransform = defaultCore;
            stackLen = 0;
        });

    /**
     * @class Scene graph node which defines the viewing transform for the {@link SceneJS.Geometry}s within its subgraph
     * @extends SceneJS.Node
     */
    SceneJS.Lookat = SceneJS_NodeFactory.createNodeType("lookAt");

    SceneJS.Lookat.prototype._init = function (params) {

        this._mat = null;

        this._xf = {
            type:"lookat"
        };

        if (this._core.useCount == 1) { // This node is the resource definer

            this._core.eyeX = 0;
            this._core.eyeY = 0;
            this._core.eyeZ = 10.0;

            this._core.lookX = 0;
            this._core.lookY = 0;
            this._core.lookZ = 0;

            this._core.upX = 0;
            this._core.upY = 1;
            this._core.upZ = 0;

            if (!params.eye && !params.look && !params.up) {
                this.setEye({x:0, y:0, z:10.0 });
                this.setLook({x:0, y:0, z:0 });
                this.setUp({x:0, y:1.0, z:0 });
            } else {
                this.setEye(params.eye);
                this.setLook(params.look);
                this.setUp(params.up);
            }

            var core = this._core;

            var self = this;

            this._core.rebuild = function () {

                core.matrix = SceneJS_math_lookAtMat4c(
                    core.eyeX, core.eyeY, core.eyeZ,
                    core.lookX, core.lookY, core.lookZ,
                    core.upX, core.upY, core.upZ);

                core.lookAt = {
                    eye:[core.eyeX, core.eyeY, core.eyeZ ],
                    look:[core.lookX, core.lookY, core.lookZ ],
                    up:[core.upX, core.upY, core.upZ ]
                };

                if (!core.mat) { // Lazy-create arrays
                    core.mat = new Float32Array(core.matrix);
                    core.normalMat = new Float32Array(
                        SceneJS_math_transposeMat4(SceneJS_math_inverseMat4(core.matrix, SceneJS_math_mat4())));

                } else { // Insert into arrays
                    core.mat.set(core.matrix);
                    core.normalMat.set(SceneJS_math_transposeMat4(SceneJS_math_inverseMat4(core.matrix, SceneJS_math_mat4())));
                }

                self.publish("matrix", core.matrix);

                core.dirty = false;
            };

            this._core.dirty = true;

            // Rebuild on every scene tick
            // https://github.com/xeolabs/scenejs/issues/277
            this._tick = this.getScene().on("tick", function () {
                if (self._core.dirty) {
                    self._core.rebuild();
                }
            });
        }
    };

    /**
     * Returns the default view transformation matrix
     * @return {Float32Array}
     */
    SceneJS.Lookat.getDefaultMatrix = function () {
        return defaultMat;
    };

    SceneJS.Lookat.prototype.setEye = function (eye) {

        eye = eye || {};

        if (eye.x != undefined && eye.x != null) {
            this._core.eyeX = eye.x;
        }

        if (eye.y != undefined && eye.y != null) {
            this._core.eyeY = eye.y;
        }

        if (eye.z != undefined && eye.z != null) {
            this._core.eyeZ = eye.z;
        }

        this._core.dirty = true;
        this._engine.display.imageDirty = true;

        return this;
    };

    SceneJS.Lookat.prototype.incEye = function (eye) {
        eye = eye || {};
        this._core.eyeX += (eye.x != undefined && eye.x != null) ? eye.x : 0;
        this._core.eyeY += (eye.y != undefined && eye.y != null) ? eye.y : 0;
        this._core.eyeZ += (eye.z != undefined && eye.z != null) ? eye.z : 0;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.setEyeX = function (x) {
        this._core.eyeX = x || 0;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.setEyeY = function (y) {
        this._core.eyeY = y || 0;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.setEyeZ = function (z) {
        this._core.eyeZ = z || 0;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.incEyeX = function (x) {
        this._core.eyeX += x;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.incEyeY = function (y) {
        this._core.eyeY += y;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.incEyeZ = function (z) {
        this._core.eyeZ += z;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.getEye = function () {
        return {
            x:this._core.eyeX,
            y:this._core.eyeY,
            z:this._core.eyeZ
        };
    };

    SceneJS.Lookat.prototype.setLook = function (look) {
        look = look || {};

        if (look.x != undefined && look.x != null) {
            this._core.lookX = look.x;
        }

        if (look.y != undefined && look.y != null) {
            this._core.lookY = look.y;
        }

        if (look.z != undefined && look.z != null) {
            this._core.lookZ = look.z;
        }

        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.incLook = function (look) {
        look = look || {};
        this._core.lookX += (look.x != undefined && look.x != null) ? look.x : 0;
        this._core.lookY += (look.y != undefined && look.y != null) ? look.y : 0;
        this._core.lookZ += (look.z != undefined && look.z != null) ? look.z : 0;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.setLookX = function (x) {
        this._core.lookX = x || 0;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.setLookY = function (y) {
        this._core.lookY = y || 0;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.setLookZ = function (z) {
        this._core.lookZ = z || 0;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.incLookX = function (x) {
        this._core.lookX += x;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.incLookY = function (y) {
        this._core.lookY += y;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.incLookZ = function (z) {
        this._core.lookZ += z;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.getLook = function () {
        return {
            x:this._core.lookX,
            y:this._core.lookY,
            z:this._core.lookZ
        };
    };

    SceneJS.Lookat.prototype.setUp = function (up) {
        up = up || {};

        if (up.x != undefined && up.x != null) {
            this._core.upX = up.x;
        }

        if (up.y != undefined && up.y != null) {
            this._core.upY = up.y;
        }

        if (up.z != undefined && up.z != null) {
            this._core.upZ = up.z;
        }

        this._core.dirty = true;
        this._engine.display.imageDirty = true;

        return this;
    };

    SceneJS.Lookat.prototype.incUp = function (up) {
        up = up || {};
        this._core.upX += (up.x != undefined && up.x != null) ? up.x : 0;
        this._core.upY += (up.y != undefined && up.y != null) ? up.y : 0;
        this._core.upZ += (up.z != undefined && up.z != null) ? up.z : 0;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.setUpX = function (x) {
        this._core.upX = x || 0;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.setUpY = function (y) {
        this._core.upY = y || 0;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.setUpZ = function (z) {
        this._core.upZ = z || 0;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.incUpX = function (x) {
        this._core.upX += x;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.incUpY = function (y) {
        this._core.upY += y;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.incUpZ = function (z) {
        this._core.upZ += z;
        this._core.dirty = true;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Lookat.prototype.getUp = function () {
        return {
            x:this._core.upX,
            y:this._core.upY,
            z:this._core.upZ
        };
    };

    /**
     * Returns a copy of the matrix as a 1D array of 16 elements
     * @returns {Number[16]}
     */
    SceneJS.Lookat.prototype.getMatrix = function () {

        if (this._core.dirty) {
            this._core.rebuild();
        }

        return  this._mat.slice(0);
    };

    SceneJS.Lookat.prototype.getAttributes = function () {
        return {
            look:{
                x:this._core.lookX,
                y:this._core.lookY,
                z:this._core.lookZ
            },
            eye:{
                x:this._core.eyeX,
                y:this._core.eyeY,
                z:this._core.eyeZ
            },
            up:{
                x:this._core.upX,
                y:this._core.upY,
                z:this._core.upZ
            }
        };
    };

    SceneJS.Lookat.prototype._compile = function (ctx) {
        this._engine.display.viewTransform = coreStack[stackLen++] = this._core;
        this._compileNodes(ctx);
        this._engine.display.viewTransform = (--stackLen > 0) ? coreStack[stackLen - 1] : defaultCore;
    };

    SceneJS.Lookat.prototype._destroy = function () {
        // Stop publishing matrix on each tick
        this.getScene().off(this._tick);
    };

})();/*

 TODO: material system from virtualworldframework:

 "color":
 "ambient":
 "specColor":
 "shininess":
 "reflect":
 "specular":
 "emit":
 "alpha":
 "binaryAlpha":
 */
new (function () {

    /**
     * The default state core singleton for {@link SceneJS.Material} nodes
     */
    var defaultCore = {
        type:"material",
        stateId:SceneJS._baseStateId++,
        baseColor:[ 1.0, 1.0, 1.0 ],
        specularColor:[ 1.0, 1.0, 1.0 ],
        specular:1.0,
        shine:70.0,
        alpha:1.0,
        emit:0.0
    };

    var coreStack = [];
    var stackLen = 0;

    SceneJS_events.addListener(
        SceneJS_events.SCENE_COMPILING,
        function (params) {
            params.engine.display.material = defaultCore;
            stackLen = 0;
        });

    /**
     * @class Scene graph node which defines surface material properties for the {@link SceneJS.Geometry}s within its subgraph
     * @extends SceneJS.Node
     */
    SceneJS.Material = SceneJS_NodeFactory.createNodeType("material");

    SceneJS.Material.prototype._init = function (params) {
        if (this._core.useCount == 1) {
            this.setBaseColor(params.color || params.baseColor);
            this.setSpecularColor(params.specularColor);
            this.setSpecular(params.specular);
            this.setShine(params.shine);
            this.setEmit(params.emit);
            this.setAlpha(params.alpha);
        }
    };

    /**
     * @deprecated
     * @param color
     * @return {*}
     */
    SceneJS.Material.prototype.setBaseColor = function (color) {
        var defaultBaseColor = defaultCore.baseColor;
        this._core.baseColor = color ? [
            color.r != undefined && color.r != null ? color.r : defaultBaseColor[0],
            color.g != undefined && color.g != null ? color.g : defaultBaseColor[1],
            color.b != undefined && color.b != null ? color.b : defaultBaseColor[2]
        ] : defaultCore.baseColor;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Material.prototype.setColor = SceneJS.Material.prototype.setBaseColor;

    /**
     * @deprecated
     * @return {Object}
     */
    SceneJS.Material.prototype.getBaseColor = function () {
        return {
            r:this._core.baseColor[0],
            g:this._core.baseColor[1],
            b:this._core.baseColor[2]
        };
    };

    SceneJS.Material.prototype.getColor = SceneJS.Material.prototype.getBaseColor;

    SceneJS.Material.prototype.setSpecularColor = function (color) {
        var defaultSpecularColor = defaultCore.specularColor;
        this._core.specularColor = color ? [
            color.r != undefined && color.r != null ? color.r : defaultSpecularColor[0],
            color.g != undefined && color.g != null ? color.g : defaultSpecularColor[1],
            color.b != undefined && color.b != null ? color.b : defaultSpecularColor[2]
        ] : defaultCore.specularColor;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Material.prototype.getSpecularColor = function () {
        return {
            r:this._core.specularColor[0],
            g:this._core.specularColor[1],
            b:this._core.specularColor[2]
        };
    };

    SceneJS.Material.prototype.setSpecular = function (specular) {
        this._core.specular = (specular != undefined && specular != null) ? specular : defaultCore.specular;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Material.prototype.getSpecular = function () {
        return this._core.specular;
    };

    SceneJS.Material.prototype.setShine = function (shine) {
        this._core.shine = (shine != undefined && shine != null) ? shine : defaultCore.shine;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Material.prototype.getShine = function () {
        return this._core.shine;
    };

    SceneJS.Material.prototype.setEmit = function (emit) {
        this._core.emit = (emit != undefined && emit != null) ? emit : defaultCore.emit;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Material.prototype.getEmit = function () {
        return this._core.emit;
    };

    SceneJS.Material.prototype.setAlpha = function (alpha) {
        this._core.alpha = (alpha != undefined && alpha != null) ? alpha : defaultCore.alpha;
        this._engine.display.imageDirty = true;
        return this;
    };

    SceneJS.Material.prototype.getAlpha = function () {
        return this._core.alpha;
    };

    SceneJS.Material.prototype._compile = function (ctx) {
        this._engine.display.material = coreStack[stackLen++] = this._core;
        this._compileNodes(ctx);
        this._engine.display.material = (--stackLen > 0) ? coreStack[stackLen - 1] : defaultCore;
    };

})();new (function () {

    /**
     * The default state core singleton for {@link SceneJS.MorphGeometry} nodes
     */
    var defaultCore = {
        type:"morphGeometry",
        stateId:SceneJS._baseStateId++,
        hash:"",
        //         empty: true,
        morph:null
    };

    var coreStack = [];
    var stackLen = 0;

    SceneJS_events.addListener(
        SceneJS_events.SCENE_COMPILING,
        function (params) {
            params.engine.display.morphGeometry = defaultCore;
            stackLen = 0;
        });

    /**
     * @class Scene graph node which defines morphing behaviour for the {@link SceneJS.Geometry}s within its subgraph
     * @extends SceneJS.Node
     */
    SceneJS.MorphGeometry = SceneJS_NodeFactory.createNodeType("morphGeometry");

    SceneJS.MorphGeometry.prototype._init = function (params) {

        if (this._core.useCount == 1) { // This node defines the resource

            this._sourceConfigs = params.source;
            this._source = null;

            if (params.source) {

                /*---------------------------------------------------------------------------------------------------
                 * Build node core (possibly asynchronously) using a factory object
                 *--------------------------------------------------------------------------------------------------*/

                if (!params.source.type) {
                    throw SceneJS_error.fatalError(
                        SceneJS.errors.ILLEGAL_NODE_CONFIG,
                        "morphGeometry config expected: source.type");
                }

                var self = this;

                SceneJS.Plugins.getPlugin(
                    "morphGeometry",
                    this._sourceConfigs.type,
                    function (sourceService) {

                        if (!sourceService) {
                            throw SceneJS_error.fatalError(
                                SceneJS.errors.PLUGIN_INVALID,
                                "morphGeometry: no support for source type '" + self._sourceConfigs.type + "' - need to include plugin for self source type, " +
                                    "or install a custom source service with SceneJS.Plugins.addPlugin(SceneJS.Plugins.MORPH_GEO_SOURCE_PLUGIN, '" + self._sourceConfigs.type + "', <your service>).");
                        }

                        if (!sourceService.getSource) {
                            throw SceneJS_error.fatalError(
                                SceneJS.errors.PLUGIN_INVALID,
                                "morphGeometry: 'getSource' method not found on MorphGeoFactoryService (SceneJS.Plugins.MORPH_GEO_SOURCE_PLUGIN)");
                        }

                        self._source = sourceService.getSource();

                        if (!self._source.subscribe) {
                            throw SceneJS_error.fatalError(
                                SceneJS.errors.PLUGIN_INVALID,
                                "morphGeometry: 'subscribe' method not found on source provided by plugin type '" + params.source.type + "'");
                        }

                        var created = false;

                        self._source.subscribe(// Get notification when factory creates the morph
                            function (data) {

                                if (!created) {
                                    self._buildNodeCore(data);

                                    self._core._loading = false;
                                    self._fireEvent("loaded");

                                    self._engine.branchDirty(self); // TODO

                                    created = true;

                                } else {

                                    if (data.targets) {

                                        var dataTargets = data.targets;
                                        var dataTarget;
                                        var index;
                                        var morphTargets = self._core.targets;
                                        var morphTarget;

                                        for (var i = 0, len = dataTargets.length; i < len; i++) {
                                            dataTarget = dataTargets[i];
                                            index = dataTarget.targetIndex;
                                            morphTarget = morphTargets[index];

                                            if (dataTarget.positions && morphTarget.vertexBuf) {
                                                morphTarget.vertexBuf.bind();
                                                morphTarget.vertexBuf.setData(dataTarget.positions, 0);
                                            }
                                        }
                                    }

                                    // TODO: factory can update factor?
                                    // self.setFactor(params.factor);

                                    self._display.imageDirty = true;
                                }
                            });

                        self._core._loading = true;

                        self._fireEvent("loading");

                        self._source.configure(self._sourceConfigs);
                    });

            } else if (params.create instanceof Function) {

                /*---------------------------------------------------------------------------------------------------
                 * Build node core from JSON arrays and primitive name returned by factory function
                 *--------------------------------------------------------------------------------------------------*/

                this._buildNodeCore(params.create());

            } else {

                /*---------------------------------------------------------------------------------------------------
                 * Build node core from JSON arrays and primitive name given in node properties
                 *--------------------------------------------------------------------------------------------------*/

                this._buildNodeCore(params);
            }

            this._core.webglRestored = function () {
                //self._buildNodeCore(self._engine.canvas.gl, self._core);
            };

            this.setFactor(params.factor);
        }

        // TODO: factor shared on cores?
        this._core.factor = params.factor || 0;
        this._core.clamp = !!params.clamp;
    };

    SceneJS.MorphGeometry.prototype._buildNodeCore = function (data) {

        var targetsData = data.targets || [];
        if (targetsData.length < 2) {
            throw SceneJS_error.fatalError(
                SceneJS.errors.ILLEGAL_NODE_CONFIG,
                "morphGeometry node should have at least two targets");
        }

        var keysData = data.keys || [];
        if (keysData.length != targetsData.length) {
            throw SceneJS_error.fatalError(
                SceneJS.errors.ILLEGAL_NODE_CONFIG,
                "morphGeometry node mismatch in number of keys and targets");
        }

        var core = this._core;
        var gl = this._engine.canvas.gl;
        var usage = gl.STATIC_DRAW; //var usage = (!arrays.fixed) ? gl.STREAM_DRAW : gl.STATIC_DRAW;

        core.keys = keysData;
        core.targets = [];
        core.key1 = 0;
        core.key2 = 1;

        /* First target's arrays are defaults for where not given on previous and subsequent targets.
         * When target does have array, subsequent targets without array inherit it.
         */

        var positions;
        var normals;
        var uv;
        var uv2;

        var targetData;

        for (var i = 0, len = targetsData.length; i < len; i++) {
            targetData = targetsData[i];
            if (!positions && targetData.positions) {
                positions = targetData.positions;
            }
            if (!normals && targetData.normals) {
                normals = targetData.normals;
            }
            if (!uv && targetData.uv) {
                uv = targetData.uv;
            }
            if (!uv2 && targetData.uv2) {
                uv2 = targetData.uv2;
            }
        }

        try {
            var target;
            var arry;

            for (var i = 0, len = targetsData.length; i < len; i++) {
                targetData = targetsData[i];
                target = {};

                arry = targetData.positions || positions;
                if (arry) {
                    target.positions = (typeof arry == "Float32Array") ? arry : new Float32Array(arry);
                    target.vertexBuf = new SceneJS_webgl_ArrayBuffer(gl, gl.ARRAY_BUFFER, target.positions, arry.length, 3, usage);
                    positions = arry;
                }

                arry = targetData.normals || normals;
                if (arry) {
                    target.normals = (typeof arry == "Float32Array") ? arry : new Float32Array(arry);
                    target.normalBuf = new SceneJS_webgl_ArrayBuffer(gl, gl.ARRAY_BUFFER, target.normals, arry.length, 3, usage);
                    normals = arry;
                }

                arry = targetData.uv || uv;
                if (arry) {
                    target.uv = (typeof arry == "Float32Array") ? arry : new Float32Array(arry);
                    target.uvBuf = new SceneJS_webgl_ArrayBuffer(gl, gl.ARRAY_BUFFER, target.uv, arry.length, 2, usage);
                    uv = arry;
                }

                arry = targetData.uv2 || uv2;
                if (arry) {
                    target.uv2 = (typeof arry == "Float32Array") ? arry : new Float32Array(arry);
                    target.uvBuf2 = new SceneJS_webgl_ArrayBuffer(gl, gl.ARRAY_BUFFER, target.uv2, arry.length, 2, usage);
                    uv2 = arry;
                }

                core.targets.push(target);  // We'll iterate this to destroy targets when we recover from error
            }

        } catch (e) {

            /* Allocation failure - deallocate target VBOs
             */
            for (var i = 0, len = core.targets.length; i < len; i++) {

                target = core.targets[i];

                if (target.vertexBuf) {
                    target.vertexBuf.destroy();
                }
                if (target.normalBuf) {
                    target.normalBuf.destroy();
                }
                if (target.uvBuf) {
                    target.uvBuf.destroy();
                }
                if (target.uvBuf2) {
                    target.uvBuf2.destroy();
                }
            }

            throw SceneJS_error.fatalError(
                SceneJS.errors.ERROR,
                "Failed to allocate VBO(s) for morphGeometry: " + e);
        }
    };

    SceneJS.MorphGeometry.prototype.setSource = function (sourceConfigs) {
        this._sourceConfigs = sourceConfigs;
        var source = this._source;
        if (source) {
            source.configure(sourceConfigs);
        }
    };

    SceneJS.MorphGeometry.prototype.getSource = function () {
        return this._sourceConfigs;
    };

    SceneJS.MorphGeometry.prototype.setFactor = function (factor) {
        factor = factor || 0.0;

        var core = this._core;

        var keys = core.keys;
        var key1 = core.key1;
        var key2 = core.key2;

        if (factor < keys[0]) {
            key1 = 0;
            key2 = 1;

        } else if (factor > keys[keys.length - 1]) {
            key1 = keys.length - 2;
            key2 = key1 + 1;

        } else {
            while (keys[key1] > factor) {
                key1--;
                key2--;
            }
            while (keys[key2] < factor) {
                key1++;
                key2++;
            }
        }

        /* Normalise factor to range [0.0..1.0] for the target frame
         */
        core.factor = (factor - keys[key1]) / (keys[key2] - keys[key1]);
        core.key1 = key1;
        core.key2 = key2;

        this._engine.display.imageDirty = true;
    };

    SceneJS.MorphGeometry.prototype.getFactor = function () {
        return this._core.factor;
    };

    SceneJS.MorphGeometry.prototype.getKeys = function () {
        return this._core.keys;
    };

    SceneJS.MorphGeometry.prototype.getTargets = function () {
        return this._core.targets;
    };

    SceneJS.MorphGeometry.prototype._compile = function (ctx) {

        if (!this._core.hash) {
            this._makeHash();
        }

        this._engine.display.morphGeometry = coreStack[stackLen++] = this._core;
        this._compileNodes(ctx);
        this._engine.display.morphGeometry = (--stackLen > 0) ? coreStack[stackLen - 1] : defaultCore;
    };

    SceneJS.MorphGeometry.prototype._makeHash = function () {
        var core = this._core;
        if (core.targets.length > 0) {
            var target0 = core.targets[0];  // All targets have same arrays
            var t = "t";
            var f = "f";
            core.hash = ([
                target0.vertexBuf ? t : f,
                target0.normalBuf ? t : f,
                target0.uvBuf ? t : f,
                target0.uvBuf2 ? t : f
            ]).join("");
        } else {
            core.hash = "";
        }
    };

    SceneJS.MorphGeometry.prototype._destroy = function () {
        if (this._core.useCount == 1) { // Destroy core if no other references
            if (document.getElementById(this._engine.canvas.canvasId)) { // Context won't exist if canvas has disappeared
                var core = this._core;
                var target;
                for (var i = 0, len = core.targets.length; i < len; i++) {
                    target = core.targets[i];
                    if (target.vertexBuf) {
                        target.vertexBuf.destroy();
                    }
                    if (target.normalBuf) {
                        target.normalBuf.destroy();
                    }
                    if (target.uvBuf) {
                        target.uvBuf.destroy();
                    }
                    if (target.uvBuf2) {
                        target.uvBuf2.destroy();
                    }
                }
            }
            if (this._source && this._source.destroy) {
                this._source.destroy();
            }
        }
    };

})();(function () {

    /**
     * The default state core singleton for {@link SceneJS.Name} nodes
     */
    var defaultCore = {
        type:"name",
        stateId:SceneJS._baseStateId++,
        name:null
    };

    var coreStack = [];
    var stackLen = 0;

    SceneJS_events.addListener(
        SceneJS_events.SCENE_COMPILING,
        function (params) {
            params.engine.display.name = defaultCore;
            stackLen = 0;
        });

    /**
     * @class Scene graph node which assigns a pick name to the {@link SceneJS.Geometry} nodes in its subgraph.
     * @extends SceneJS.Node
     */
    SceneJS.Name = SceneJS_NodeFactory.createNodeType("name");

    SceneJS.Name.prototype._init = function (params) {
        this.setName(params.name);
        this._core.nodeId = this.id;
    };

    SceneJS.Name.prototype.setName = function (name) {
        this._core.name = name || "unnamed";
        this._engine.display.imageDirty = true;
    };

    SceneJS.Name.prototype.getName = function () {
        return this._core.name;
    };

    SceneJS.Name.prototype._compile = function (ctx) {

        this._engine.display.name = coreStack[stackLen++] = this._core;

        // (Re)build name path
        var path = [];
        var name;
        for (var i = 0; i < stackLen; i++) {
            name = coreStack[i].name;
            if (name) {
                path.push(name);
            }
        }
        this._core.path = path.join(".");

        this._compileNodes(ctx);
        this._engine.display.name = (--stackLen > 0) ? coreStack[stackLen - 1] : defaultCore;
    };
})();new (function() {

    /**
     * The default state core singleton for {@link SceneJS.Renderer} nodes
     */
    var defaultCore = {
        type: "renderer",
        stateId: SceneJS._baseStateId++,
        props: null
    };

    var canvas;         // Currently active canvas
    var coreStack = [];
    var stackLen = 0;

    SceneJS_events.addListener(
            SceneJS_events.SCENE_COMPILING,
            function(params) {

                canvas = params.engine.canvas;

//                // TODO: Below is a HACK
//
//                defaultCore.props = createProps({  // Dont set props - just define for restoring to on props pop
//                    clear: {
//                        depth : true,
//                        color : true
//                    },
//                    // clearColor: {r: 0, g : 0, b : 0 },
//                    clearDepth: 1.0,
//                    enableDepthTest:true,
//                    enableCullFace: false,
//                    frontFace: "ccw",
//                    cullFace: "back",
//                    depthFunc: "less",
//                    depthRange: {
//                        zNear: 0,
//                        zFar: 1
//                    },
//                    enableScissorTest: false,
//                    viewport:{
//                        x : 1,
//                        y : 1,
//                        width: canvas.canvas.width,
//                        height: canvas.canvas.height
//                    },
//                    enableClip: undefined,
//                    enableBlend: false,
//                    blendFunc: {
//                        sfactor: "srcAlpha",
//                        dfactor: "one"
//                    }
//                });

                stackLen = 0;

                params.engine.display.renderer = coreStack[stackLen++] = defaultCore;
            });

    function createProps(props) {

        var restore;
        if (stackLen > 0) {  // can't restore when no previous props set
            restore = {};
            for (var name in props) {
                if (props.hasOwnProperty(name)) {
                    if (!(props[name] == undefined)) {
                        restore[name] = getSuperProperty(name);
                    }
                }
            }
        }

        processProps(props.props);

        return {

            props: props,

            setProps: function(gl) {
                setProperties(gl, props);
            },

            restoreProps : function(gl) {
                if (restore) {
                    restoreProperties(gl, restore);
                }
            }
        };
    }

    var getSuperProperty = function(name) {
        var props;
        var prop;
        for (var i = stackLen - 1; i >= 0; i--) {
            props = coreStack[i].props;
            prop = props[name];
            if (prop != undefined && prop != null) {
                return props[name];
            }
        }
        return null; // Cause default to be set
    };

    function processProps(props) {
        var prop;
        for (var name in props) {
            if (props.hasOwnProperty(name)) {
                prop = props[name];
                if (prop != undefined && prop != null) {
                    if (glModeSetters[name]) {
                        props[name] = glModeSetters[name](null, prop);
                    } else if (glStateSetters[name]) {
                        props[name] = glStateSetters[name](null, prop);
                    }
                }
            }
        }
    }

    var setProperties = function(gl, props) {

        for (var key in props) {        // Set order-insensitive properties (modes)
            if (props.hasOwnProperty(key)) {
                var setter = glModeSetters[key];
                if (setter) {
                    setter(gl, props[key]);
                }
            }
        }

        if (props.viewport) {           // Set order-sensitive properties (states)
            glStateSetters.viewport(gl, props.viewport);
        }

        if (props.scissor) {
            glStateSetters.clear(gl, props.scissor);
        }

        if (props.clear) {
            glStateSetters.clear(gl, props.clear);
        }
    };

    /**
     * Restores previous renderer properties, except for clear - that's the reason we
     * have a seperate set and restore semantic - we don't want to keep clearing the buffer.
     */
    var restoreProperties = function(gl, props) {

        var value;

        for (var key in props) {            // Set order-insensitive properties (modes)
            if (props.hasOwnProperty(key)) {
                value = props[key];
                if (value != undefined && value != null) {
                    var setter = glModeSetters[key];
                    if (setter) {
                        setter(gl, value);
                    }
                }
            }
        }

        if (props.viewport) {               //  Set order-sensitive properties (states)
            glStateSetters.viewport(gl, props.viewport);
        }

        if (props.scissor) {
            glStateSetters.clear(gl, props.scissor);
        }
    };


    /**
     * Maps renderer node properties to WebGL gl enums
     * @private
     */
    var glEnum = function(gl, name) {
        if (!name) {
            throw SceneJS_error.fatalError(
                    SceneJS.errors.ILLEGAL_NODE_CONFIG,
                    "Null SceneJS.State node config: \"" + name + "\"");
        }
        var result = SceneJS_webgl_enumMap[name];
        if (!result) {
            throw SceneJS_error.fatalError(
                    SceneJS.errors.ILLEGAL_NODE_CONFIG,
                    "Unrecognised SceneJS.State node config value: \"" + name + "\"");
        }
        var value = gl[result];
        if (!value) {
            throw SceneJS_error.fatalError(
                    SceneJS.errors.ILLEGAL_NODE_CONFIG,
                    "This browser's WebGL does not support renderer node config value: \"" + name + "\"");
        }
        return value;
    };


    /**
     * Order-insensitive functions that set WebGL modes ie. not actually causing an
     * immediate change.
     *
     * These map to renderer properties and are called in whatever order their
     * property is found on the renderer config.
     *
     * Each of these wrap a state-setter function on the WebGL gl. Each function
     * also uses the glEnum map to convert its renderer node property argument to the
     * WebGL enum constant required by its wrapped function.
     *
     * When called with undefined/null gl, will condition and return the value given
     * ie. set it to default if value is undefined. When called with a gl, will
     * set the value on the gl using the wrapped function.
     *
     * @private
     */
    var glModeSetters = {

        enableBlend: function(gl, flag) {
            if (!gl) {
                if (flag == null || flag == undefined) {
                    flag = false;
                }
                return flag;
            }
            if (flag) {
                gl.enable(gl.BLEND);
            } else {
                gl.disable(gl.BLEND);
            }
        },

        blendColor: function(gl, color) {
            if (!gl) {
                color = color || {};
                return {
                    r: color.r || 0,
                    g: color.g || 0,
                    b: color.b || 0,
                    a: (color.a == undefined || color.a == null) ? 1 : color.a
                };
            }
            gl.blendColor(color.r, color.g, color.b, color.a);
        },

        blendEquation: function(gl, eqn) {
            if (!gl) {
                return eqn || "funcAdd";
            }
            gl.blendEquation(gl, glEnum(gl, eqn));
        },

        /** Sets the RGB blend equation and the alpha blend equation separately
         */
        blendEquationSeparate: function(gl, eqn) {
            if (!gl) {
                eqn = eqn || {};
                return {
                    rgb : eqn.rgb || "funcAdd",
                    alpha : eqn.alpha || "funcAdd"
                };
            }
            gl.blendEquation(glEnum(gl, eqn.rgb), glEnum(gl, eqn.alpha));
        },

        blendFunc: function(gl, funcs) {
            if (!gl) {
                funcs = funcs || {};
                return  {
                    sfactor : funcs.sfactor || "srcAlpha",
                    dfactor : funcs.dfactor || "oneMinusSrcAlpha"
                };
            }
            gl.blendFunc(glEnum(gl, funcs.sfactor || "srcAlpha"), glEnum(gl, funcs.dfactor || "oneMinusSrcAlpha"));
        },

        blendFuncSeparate: function(gl, func) {
            if (!gl) {
                func = func || {};
                return {
                    srcRGB : func.srcRGB || "zero",
                    dstRGB : func.dstRGB || "zero",
                    srcAlpha : func.srcAlpha || "zero",
                    dstAlpha :  func.dstAlpha || "zero"
                };
            }
            gl.blendFuncSeparate(
                    glEnum(gl, func.srcRGB || "zero"),
                    glEnum(gl, func.dstRGB || "zero"),
                    glEnum(gl, func.srcAlpha || "zero"),
                    glEnum(gl, func.dstAlpha || "zero"));
        },

        clearColor: function(gl, color) {
            if (!gl) {
                color = color || {};
                return {
                    r : color.r || 0,
                    g : color.g || 0,
                    b : color.b || 0,
                    a : (color.a == undefined || color.a == null) ? 1 : color.a
                };
            }
            gl.clearColor(color.r, color.g, color.b, color.a);
        },

        clearDepth: function(gl, depth) {
            if (!gl) {
                return (depth == null || depth == undefined) ? 1 : depth;
            }
            gl.clearDepth(depth);
        },

        clearStencil: function(gl, clearValue) {
            if (!gl) {
                return  clearValue || 0;
            }
            gl.clearStencil(clearValue);
        },

        colorMask: function(gl, color) {
            if (!gl) {
                color = color || {};
                return {
                    r : color.r || 0,
                    g : color.g || 0,
                    b : color.b || 0,
                    a : (color.a == undefined || color.a == null) ? 1 : color.a
                };

            }
            gl.colorMask(color.r, color.g, color.b, color.a);
        },

        enableCullFace: function(gl, flag) {
            if (!gl) {
                return flag;
            }
            if (flag) {
                gl.enable(gl.CULL_FACE);
            } else {
                gl.disable(gl.CULL_FACE);
            }
        },

        cullFace: function(gl, mode) {
            if (!gl) {
                return mode || "back";
            }
            gl.cullFace(glEnum(gl, mode));
        },

        enableDepthTest: function(gl, flag) {
            if (!gl) {
                if (flag == null || flag == undefined) {
                    flag = true;
                }
                return flag;
            }
            if (flag) {
                gl.enable(gl.DEPTH_TEST);
            } else {
                gl.disable(gl.DEPTH_TEST);
            }
        },

        depthFunc: function(gl, func) {
            if (!gl) {
                return func || "less";
            }
            gl.depthFunc(glEnum(gl, func));
        },

        enableDepthMask: function(gl, flag) {
            if (!gl) {
                if (flag == null || flag == undefined) {
                    flag = true;
                }
                return flag;
            }
            gl.depthMask(flag);
        },

        depthRange: function(gl, range) {
            if (!gl) {
                range = range || {};
                return {
                    zNear : (range.zNear == undefined || range.zNear == null) ? 0 : range.zNear,
                    zFar : (range.zFar == undefined || range.zFar == null) ? 1 : range.zFar
                };
            }
            gl.depthRange(range.zNear, range.zFar);
        } ,

        frontFace: function(gl, mode) {
            if (!gl) {
                return mode || "ccw";
            }
            gl.frontFace(glEnum(gl, mode));
        },

        lineWidth: function(gl, width) {
            if (!gl) {
                return width || 1;
            }
            gl.lineWidth(width);
        },

        enableScissorTest: function(gl, flag) {
            if (!gl) {
                return flag;
            }
            if (flag) {
                gl.enable(gl.SCISSOR_TEST);
            } else {
                flag = false;
                gl.disable(gl.SCISSOR_TEST);
            }
        }
    };

    /**
     * Order-sensitive functions that immediately effect WebGL state change.
     *
     * These map to renderer properties and are called in a particular order since they
     * affect one another.
     *
     * Each of these wrap a state-setter function on the WebGL gl. Each function
     * also uses the glEnum map to convert its renderer node property argument to the
     * WebGL enum constant required by its wrapped function.
     *
     * @private
     */
    var glStateSetters = {

        /** Set viewport on the given gl
         */
        viewport: function(gl, v) {
            if (!gl) {
                v = v || {};
                return {
                    x : v.x || 1,
                    y : v.y || 1,
                    width: v.width || canvas.canvas.width,
                    height: v.height || canvas.canvas.height
                };
            }
            gl.viewport(v.x, v.y, v.width, v.height);
        },

        /** Sets scissor region on the given gl
         */
        scissor: function(gl, s) {
            if (!gl) {
                s = s || {};
                return {
                    x : s.x || 0,
                    y : s.y || 0,
                    width: s.width || 1.0,
                    height: s.height || 1.0
                };
            }
            gl.scissor(s.x, s.y, s.width, s.height);
        },

        /** Clears buffers on the given gl as specified in mask
         */
        clear:function(gl, mask) {
            if (!gl) {
                mask = mask || {};
                return mask;
            }
            var m;
            if (mask.color) {
                m = gl.COLOR_BUFFER_BIT;
            }
            if (mask.depth) {
                m = m | gl.DEPTH_BUFFER_BIT;
            }
            if (mask.stencil) {
                m = m | gl.STENCIL_BUFFER_BIT;
            }
            if (m) {
                //    gl.clear(m);
            }
        }
    };

    SceneJS.Renderer = SceneJS_NodeFactory.createNodeType("renderer");

    SceneJS.Renderer.prototype._init = function(params) {
        if (this._core.useCount == 1) { // This node defines the resource
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    this._core[key] = params[key];
                }
            }
            this._core.dirty = true;
        }
    };

    SceneJS.Renderer.prototype.setViewport = function(viewport) {
        this._core.viewport = viewport ? {
            x : viewport.x || 1,
            y : viewport.y || 1,
            width: viewport.width || 1000,
            height: viewport.height || 1000
        } : undefined;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getViewport = function() {
        return this._core.viewport ? {
            x : this._core.viewport.x,
            y : this._core.viewport.y,
            width: this._core.viewport.width,
            height: this._core.viewport.height
        } : undefined;
    };

    SceneJS.Renderer.prototype.setScissor = function(scissor) {
        this._core.scissor = scissor ? {
            x : scissor.x || 1,
            y : scissor.y || 1,
            width: scissor.width || 1000,
            height: scissor.height || 1000
        } : undefined;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getScissor = function() {
        return this._core.scissor ? {
            x : this._core.scissor.x,
            y : this._core.scissor.y,
            width: this._core.scissor.width,
            height: this._core.scissor.height
        } : undefined;
    };

    SceneJS.Renderer.prototype.setClear = function(clear) {
        this._core.clear = clear ? {
            r : clear.r || 0,
            g : clear.g || 0,
            b : clear.b || 0
        } : undefined;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getClear = function() {
        return this._core.clear ? {
            r : this._core.clear.r,
            g : this._core.clear.g,
            b : this._core.clear.b
        } : null;
    };

    SceneJS.Renderer.prototype.setEnableBlend = function(enableBlend) {
        this._core.enableBlend = enableBlend;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getEnableBlend = function() {
        return this._core.enableBlend;
    };

    SceneJS.Renderer.prototype.setBlendColor = function(color) {
        this._core.blendColor = color ? {
            r : color.r || 0,
            g : color.g || 0,
            b : color.b || 0,
            a : (color.a == undefined || color.a == null) ? 1 : color.a
        } : undefined;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getBlendColor = function() {
        return this._core.blendColor ? {
            r : this._core.blendColor.r,
            g : this._core.blendColor.g,
            b : this._core.blendColor.b,
            a : this._core.blendColor.a
        } : undefined;
    };

    SceneJS.Renderer.prototype.setBlendEquation = function(eqn) {
        this._core.blendEquation = eqn;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getBlendEquation = function() {
        return this._core.blendEquation;
    };

    SceneJS.Renderer.prototype.setBlendEquationSeparate = function(eqn) {
        this._core.blendEquationSeparate = eqn ? {
            rgb : eqn.rgb || "funcAdd",
            alpha : eqn.alpha || "funcAdd"
        } : undefined;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getBlendEquationSeparate = function() {
        return this._core.blendEquationSeparate ? {
            rgb : this._core.rgb,
            alpha : this._core.alpha
        } : undefined;
    };

    SceneJS.Renderer.prototype.setBlendFunc = function(funcs) {
        this._core.blendFunc = funcs ? {
            sfactor : funcs.sfactor || "srcAlpha",
            dfactor : funcs.dfactor || "one"
        } : undefined;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getBlendFunc = function() {
        return this._core.blendFunc ? {
            sfactor : this._core.sfactor,
            dfactor : this._core.dfactor
        } : undefined;
    };

    SceneJS.Renderer.prototype.setBlendFuncSeparate = function(eqn) {
        this._core.blendFuncSeparate = eqn ? {
            srcRGB : eqn.srcRGB || "zero",
            dstRGB : eqn.dstRGB || "zero",
            srcAlpha : eqn.srcAlpha || "zero",
            dstAlpha : eqn.dstAlpha || "zero"
        } : undefined;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getBlendFuncSeparate = function() {
        return this._core.blendFuncSeparate ? {
            srcRGB : this._core.blendFuncSeparate.srcRGB,
            dstRGB : this._core.blendFuncSeparate.dstRGB,
            srcAlpha : this._core.blendFuncSeparate.srcAlpha,
            dstAlpha : this._core.blendFuncSeparate.dstAlpha
        } : undefined;
    };

    SceneJS.Renderer.prototype.setEnableCullFace = function(enableCullFace) {
        this._core.enableCullFace = enableCullFace;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getEnableCullFace = function() {
        return this._core.enableCullFace;
    };


    SceneJS.Renderer.prototype.setCullFace = function(cullFace) {
        this._core.cullFace = cullFace;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getCullFace = function() {
        return this._core.cullFace;
    };

    SceneJS.Renderer.prototype.setEnableDepthTest = function(enableDepthTest) {
        this._core.enableDepthTest = enableDepthTest;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getEnableDepthTest = function() {
        return this._core.enableDepthTest;
    };

    SceneJS.Renderer.prototype.setDepthFunc = function(depthFunc) {
        this._core.depthFunc = depthFunc;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getDepthFunc = function() {
        return this._core.depthFunc;
    };

    SceneJS.Renderer.prototype.setEnableDepthMask = function(enableDepthMask) {
        this._core.enableDepthMask = enableDepthMask;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getEnableDepthMask = function() {
        return this._core.enableDepthMask;
    };

    SceneJS.Renderer.prototype.setClearDepth = function(clearDepth) {
        this._core.clearDepth = clearDepth;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getClearDepth = function() {
        return this._core.clearDepth;
    };

    SceneJS.Renderer.prototype.setDepthRange = function(range) {
        this._core.depthRange = range ? {
            zNear : (range.zNear == undefined || range.zNear == null) ? 0 : range.zNear,
            zFar : (range.zFar == undefined || range.zFar == null) ? 1 : range.zFar
        } : undefined;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getDepthRange = function() {
        return this._core.depthRange ? {
            zNear : this._core.depthRange.zNear,
            zFar : this._core.depthRange.zFar
        } : undefined;
    };

    SceneJS.Renderer.prototype.setFrontFace = function(frontFace) {
        this._core.frontFace = frontFace;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getFrontFace = function() {
        return this._core.frontFace;
    };

    SceneJS.Renderer.prototype.setLineWidth = function(lineWidth) {
        this._core.lineWidth = lineWidth;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getLineWidth = function() {
        return this._core.lineWidth;
    };

    SceneJS.Renderer.prototype.setEnableScissorTest = function(enableScissorTest) {
        this._core.enableScissorTest = enableScissorTest;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getEnableScissorTest = function() {
        return this._core.enableScissorTest;
    };

    SceneJS.Renderer.prototype.setClearStencil = function(clearStencil) {
        this._core.clearStencil = clearStencil;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getClearStencil = function() {
        return this._core.clearStencil;
    };

    SceneJS.Renderer.prototype.setColorMask = function(color) {
        this._core.colorMask = color ? {
            r : color.r || 0,
            g : color.g || 0,
            b : color.b || 0,
            a : (color.a == undefined || color.a == null) ? 1 : color.a
        } : undefined;
        this._core.dirty = true;
    };

    SceneJS.Renderer.prototype.getColorMask = function() {
        return this._core.colorMask ? {
            r : this._core.colorMask.r,
            g : this._core.colorMask.g,
            b : this._core.colorMask.b,
            a : this._core.colorMask.a
        } : undefined;
    };

    SceneJS.Renderer.prototype._compile = function(ctx) {

//        if (this._core.dirty) {
//            this._core.props = createProps(this._core);
//            this._core.dirty = false;
//        }
//
//        this._engine.display.renderer = coreStack[stackLen++] = this._core;
        this._compileNodes(ctx);
        //this._engine.display.renderer = (--stackLen > 0) ? coreStack[stackLen - 1] : defaultCore;
    };
})();(function () {

    var lookup = {
        less:"LESS",
        equal:"EQUAL",
        lequal:"LEQUAL",
        greater:"GREATER",
        notequal:"NOTEQUAL",
        gequal:"GEQUAL"
    };

    // The default state core singleton for {@link SceneJS.DepthBuf} nodes
    var defaultCore = {
        type:"depthbuf",
        stateId:SceneJS._baseStateId++,
        enabled:true,
        clearDepth:1,
        depthFunc:null, // Lazy init depthFunc when we can get a context
        _depthFuncName:"less"
    };

    var coreStack = [];
    var stackLen = 0;

    SceneJS_events.addListener(
        SceneJS_events.SCENE_COMPILING,
        function (params) {
            if (defaultCore.depthFunc === null) { // Lazy-init depthFunc now we can get a context
                defaultCore.depthFunc = params.engine.canvas.gl.LESS;
            }
            params.engine.display.depthbuf = defaultCore;
            stackLen = 0;
        });

    /**
     * @class Scene graph node which configures the depth buffer for its subgraph
     * @extends SceneJS.Node
     */
    SceneJS.DepthBuf = SceneJS_NodeFactory.createNodeType("depthbuf");

    SceneJS.DepthBuf.prototype._init = function (params) {

        if (params.enabled != undefined) {
            this.setEnabled(params.enabled);
        } else if (this._core.useCount == 1) { // This node defines the core
            this.setEnabled(true);
        }

        if (params.clearDepth != undefined) {
            this.setClearDepth(params.clearDepth);
        } else if (this._core.useCount == 1) {
            this.setClearDepth(1);
        }

        if (params.depthFunc != undefined) {
            this.setDepthFunc(params.depthFunc);
        } else if (this._core.useCount == 1) {
            this.setDepthFunc("less");
        }
    };

    /**
     * Enable or disable the depth buffer
     *
     * @param enabled Specifies whether depth buffer is enabled or not
     * @return {*}
     */
    SceneJS.DepthBuf.prototype.setEnabled = function (enabled) {
        if (this._core.enabled != enabled) {
            this._core.enabled = enabled;
            this._engine.display.imageDirty = true;
        }
        return this;
    };

    /**
     * Get whether or not the depth buffer is enabled
     *
     * @return Boolean
     */
    SceneJS.DepthBuf.prototype.getEnabled = function () {
        return this._core.enabled;
    };

    /**
     * Specify the clear value for the depth buffer.
     * Initial value is 1, and the given value will be clamped to [0..1].
     * @param clearDepth
     * @return {*}
     */
    SceneJS.DepthBuf.prototype.setClearDepth = function (clearDepth) {
        if (this._core.clearDepth != clearDepth) {
            this._core.clearDepth = clearDepth;
            this._engine.display.imageDirty = true;
        }
        return this;
    };

    /**
     * Get the clear value for the depth buffer
     *
     * @return Number
     */
    SceneJS.DepthBuf.prototype.getClearDepth = function () {
        return this._core.clearDepth;
    };

    /**
     * Sets the depth comparison function.
     * Supported values are 'less', 'equal', 'lequal', 'greater', 'notequal' and 'gequal'
     * @param {String} depthFunc The depth comparison function
     * @return {*}
     */
    SceneJS.DepthBuf.prototype.setDepthFunc = function (depthFunc) {
        if (this._core._depthFuncName != depthFunc) {
            var enumName = lookup[depthFunc];
            if (enumName == undefined) {
                throw "unsupported value for 'clearFunc' attribute on depthbuf node: '" + depthFunc
                    + "' - supported values are 'less', 'equal', 'lequal', 'greater', 'notequal' and 'gequal'";
            }
            this._core.depthFunc = this._engine.canvas.gl[enumName];
            this._core._depthFuncName = depthFunc;
            this._engine.display.imageDirty = true;
        }
        return this;
    };

    /**
     * Returns the depth comparison function
     * @return {*}
     */
    SceneJS.DepthBuf.prototype.getDepthFunc = function () {
        return this._core._depthFuncName;
    };

    SceneJS.DepthBuf.prototype._compile = function (ctx) {
        this._engine.display.depthbuf = coreStack[stackLen++] = this._core;
        this._compileNodes(ctx);
        this._engine.display.depthbuf = (--stackLen > 0) ? coreStack[stackLen - 1] : defaultCore;
    };

})();(function () {

    // The default state core singleton for {@link SceneJS.ColorBuf} nodes
    var defaultCore = {
        type:"colorbuf",
        stateId:SceneJS._baseStateId++,
        blendEnabled:false
    };

    var coreStack = [];
    var stackLen = 0;

    SceneJS_events.addListener(
        SceneJS_events.SCENE_COMPILING,
        function (params) {
            params.engine.display.colorbuf = defaultCore;
            stackLen = 0;
        });

    /**
     * @class Scene graph node which configures the color buffer for its subgraph
     * @extends SceneJS.Node
     */
    SceneJS.ColorBuf = SceneJS_NodeFactory.createNodeType("colorbuf");

    SceneJS.ColorBuf.prototype._init = function (params) {

        if (params.blendEnabled != undefined) {
            this.setBlendEnabled(params.blendEnabled);
        } else if (this._core.useCount == 1) { // This node defines the core
            this.setBlendEnabled(false);
        }
    };

    /**
     * Enable or disable blending
     *
     * @param blendEnabled Specifies whether depth buffer is blendEnabled or not
     * @return {*}
     */
    SceneJS.ColorBuf.prototype.setBlendEnabled = function (blendEnabled) {
        if (this._core.blendEnabled != blendEnabled) {
            this._core.blendEnabled = blendEnabled;
            this._engine.display.imageDirty = true;
        }
        return this;
    };

    /**
     * Get whether or not blending is enabled
     *
     * @return Boolean
     */
    SceneJS.ColorBuf.prototype.getBlendEnabled = function () {
        return this._core.blendEnabled;
    };

    SceneJS.ColorBuf.prototype._compile = function (ctx) {
        this._engine.display.colorbuf = coreStack[stackLen++] = this._core;
        this._compileNodes(ctx);
        this._engine.display.colorbuf = (--stackLen > 0) ? coreStack[stackLen - 1] : defaultCore;
    };

})();(function () {

    // The default state core singleton for {@link SceneJS.View} nodes
    var defaultCore = {
        type:"view",
        stateId:SceneJS._baseStateId++,
        scissorTestEnabled:false
    };

    var coreStack = [];
    var stackLen = 0;

    SceneJS_events.addListener(
        SceneJS_events.SCENE_COMPILING,
        function (params) {
            params.engine.display.view = defaultCore;
            stackLen = 0;
        });

    /**
     * @class Scene graph node which configures view parameters such as depth range, scissor test and viewport
     * @extends SceneJS.Node
     * void depthRange(floatzNear, floatzFar)
     zNear: Clamped to the range 0 to 1 Must be <= zFar
     zFar: Clamped to the range 0 to 1.
     void scissor(int x, int y, long width, long height)
     void viewport(int x, int y, long width, long height)
     */
    SceneJS.View = SceneJS_NodeFactory.createNodeType("view");

    SceneJS.View.prototype._init = function (params) {

        if (params.scissorTestEnabled != undefined) {
            this.setScissorTestEnabled(params.scissorTestEnabled);
        } else if (this._core.useCount == 1) { // This node defines the core
            this.setScissorTestEnabled(false);
        }
    };

    /**
     * Enable or disables scissor test.
     *
     * When enabled, the scissor test will discards fragments that are outside the scissor box.
     *
     * Scissor test is initially disabled.
     *
     * @param scissorTestEnabled Specifies whether scissor test is enabled or not
     * @return {*}
     */
    SceneJS.View.prototype.setScissorTestEnabled = function (scissorTestEnabled) {
        if (this._core.scissorTestEnabled != scissorTestEnabled) {
            this._core.scissorTestEnabled = scissorTestEnabled;
            this._engine.display.imageDirty = true;
        }
        return this;
    };

    /**
     * Get whether or not scissor test is enabled.
     * Initial value will be false.
     *
     * @return Boolean
     */
    SceneJS.View.prototype.getScissorTestEnabled = function () {
        return this._core.scissorTestEnabled;
    };

    SceneJS.View.prototype._compile = function (ctx) {
        this._engine.display.view = coreStack[stackLen++] = this._core;
        this._compileNodes(ctx);
        this._engine.display.view = (--stackLen > 0) ? coreStack[stackLen - 1] : defaultCore;
    };

})();/**
 * @class The root node of a scenegraph
 * @extends SceneJS.Node
 *
 */

SceneJS.Scene = SceneJS_NodeFactory.createNodeType("scene");

SceneJS.Scene.prototype._init = function (params) {

    if (params.tagMask) {
        this.setTagMask(params.tagMask);
    }

    this._tagSelector = null;
};


/**
 * Simulate a lost WebGL context for testing purposes.
 * Only works if the simulateWebGLLost was given as an option to {@link SceneJS.createScene}.
 */
SceneJS.Scene.prototype.loseWebGLContext = function () {
    this._engine.loseWebGLContext();
};


/**
 * Returns the HTML canvas for this scene
 * @return {HTMLCanvas} The canvas
 */
SceneJS.Scene.prototype.getCanvas = function () {
    return this._engine.canvas.canvas;
};

/**
 * Returns the WebGL context for this scene
 */
SceneJS.Scene.prototype.getGL = function () {
    return this._engine.canvas.gl;
};

/** Returns the Z-buffer depth in bits of the webgl context that this scene is to bound to.
 */
SceneJS.Scene.prototype.getZBufferDepth = function () {

    var gl = this._engine.canvas.gl;

    return gl.getParameter(gl.DEPTH_BITS);
};

/**
 * Sets a regular expression to select which of the scene subgraphs that are rooted by {@link SceneJS.Tag} nodes are included in scene renders
 * @param {String} [tagMask] Regular expression string to match on the tag attributes of {@link SceneJS.Tag} nodes. Nothing is selected when this is omitted.
 * @see #getTagMask
 * @see SceneJS.Tag
 */
SceneJS.Scene.prototype.setTagMask = function (tagMask) {

    tagMask = tagMask || "XXXXXXXXXXXXXXXXXXXXXXXXXX"; // HACK to select nothing by default

    if (!this._tagSelector) {
        this._tagSelector = {};
    }

    this._tagSelector.mask = tagMask;
    this._tagSelector.regex = tagMask ? new RegExp(tagMask) : null;

    this._engine.display.selectTags(this._tagSelector);
};

/**
 * Gets the regular expression which will select which of the scene subgraphs that are rooted by {@link SceneJS.Tag} nodes are included in scene renders
 * @see #setTagMask
 * @see SceneJS.Tag
 * @returns {String} Regular expression string that will be matched on the tag attributes of {@link SceneJS.Tag} nodes
 */
SceneJS.Scene.prototype.getTagMask = function () {
    return this._tagSelector ? this._tagSelector.mask : null;
};

/**
 * Render a single frame if new frame pending, or force a new frame
 * Returns true if frame rendered
 */
SceneJS.Scene.prototype.renderFrame = function (params) {
    return this._engine.renderFrame(params);
};

/**
 * Starts the render loop for this scene
 */
SceneJS.Scene.prototype.start = function (params) {
    this._engine.start(params);
};

/**
 * Pauses/unpauses current render loop that was started with {@link #start}. After this, {@link #isRunning} will return false.
 * @param {Boolean} doPause Indicates whether to pause or unpause the render loop
 */
SceneJS.Scene.prototype.pause = function (doPause) {
    this._engine.pause(doPause);
};

/**
 * Returns true if the scene's render loop is currently running.
 * @returns {Boolean} True when scene render loop is running
 */
SceneJS.Scene.prototype.isRunning = function () {
    return this._engine.running;
};

/**
 * Picks whatever geometry will be rendered at the given canvas coordinates.
 */
SceneJS.Scene.prototype.pick = function (canvasX, canvasY, options) {
    var result = this._engine.pick(canvasX, canvasY, options);
    this.renderFrame({force:true }); // HACK: canvas blanks after picking
    if (result) {
        this.publish("pick", result);
        return result;
    } else {
        this.publish("nopick");
    }
};

/**
 * Scene node's destroy handler, called by {@link SceneJS_node#destroy}
 * @private
 */
SceneJS.Scene.prototype._destroy = function () {

    if (!this.destroyed) {

        delete SceneJS._engines[this.id];  // HACK: circular dependency
        SceneJS._engineIds.removeItem(this.id); // HACK: circular dependency

        this.destroyed = true;
    }
};

/**
 * Returns true if scene active, ie. not destroyed. A destroyed scene becomes active again
 * when you render it.
 */
SceneJS.Scene.prototype.isActive = function () {
    return !this._engine.destroyed;
};

/**
 * Stops current render loop that was started with {@link #start}. After this, {@link #isRunning} will return false.
 */
SceneJS.Scene.prototype.stop = function () {
    this._engine.stop();
};

/** Determines if node exists in this scene
 * @deprecated
 */
SceneJS.Scene.prototype.containsNode = function (nodeId) {
    return !!this._engine.findNode(nodeId);
};

/**
 * Finds nodes in this scene that have nodes IDs matching the given regular expression
 *
 * @param {String} nodeIdRegex Regular expression to match on node IDs
 * @return {[SceneJS.Node]} Array of nodes whose IDs match the given regex
 */
SceneJS.Scene.prototype.findNodes = function (nodeIdRegex) {
    return this._engine.findNodes(nodeIdRegex);
};

/**
 * Finds the node with the given ID in this scene
 * @deprecated
 * @param {String} nodeId Node ID
 * @param {Function} callback Callback through which we'll get the node asynchronously if it's being instantiated on-demand from a node type plugin
 * @return {SceneJS.Node} The node if found, else null
 */
SceneJS.Scene.prototype.findNode = function (nodeId, callback) {
    return this.getNode(nodeId, callback);
};

/**
 * @function Finds the node with the given ID in this scene
 * @param {String} nodeId Node ID
 * @param {Function} callback Callback through which we'll get the node asynchronously if it's being instantiated on-demand from a node type plugin
 * @return {SceneJS.Node} The node if found, else null
 */
SceneJS.Scene.prototype.getNode = function (nodeId, callback) {
    var node = this._engine.findNode(nodeId);
    if (node) {
        if (callback) {
            callback(node);
        }
        return node;
    } else {
        if (!callback) {
            return null;
        }
        // Subscribe to instantiation of node from plugin
        this.once("nodes/" + nodeId, callback);
    }
};

/**
 * Tests whether a node core of the given ID exists for the given node type
 * @param {String} type Node type
 * @param {String} coreId
 * @returns Boolean
 */
SceneJS.Scene.prototype.hasCore = function (type, coreId) {
    return this._engine.hasCore(type, coreId);
};

/**
 * Returns the current status of this scene.
 *
 * When the scene has been destroyed, the returned status will be a map like this:
 *
 * {
 *      destroyed: true
 * }
 *
 * Otherwise, the status will be:
 *
 * {
 *      numTasks: Total number of asset loads (eg. texture, geometry stream etc.) currently in progress for this scene
 * }
 *
 */
SceneJS.Scene.prototype.getStatus = function () {
    var sceneStatus = SceneJS_sceneStatusModule.sceneStatus[this.id];
    if (!sceneStatus) {
        return {
            destroyed:true
        };
    }
    return SceneJS._shallowClone(sceneStatus);
};
new (function() {

    /**
     * The default state core singleton for {@link SceneJS.Shader} nodes
     */
    var defaultCore = {
        type: "shader",
        stateId: SceneJS._baseStateId++,
        hash: "",
        empty: true,
        shader : {}
    };

    var idStack = [];
    var shaderVertexCodeStack = [];
    var shaderVertexHooksStack = [];
    var shaderFragmentCodeStack = [];
    var shaderFragmentHooksStack = [];
    var shaderParamsStack = [];

    var stackLen = 0;

    var dirty = true;

    SceneJS_events.addListener(
            SceneJS_events.SCENE_COMPILING,
            function(params) {

                params.engine.display.shader = defaultCore;

                stackLen = 0;

                dirty = true;
            });

    SceneJS_events.addListener(
            SceneJS_events.OBJECT_COMPILING,
            function(params) {
                if (dirty) {

                    if (stackLen > 0) {

                        var core = {
                            type: "shader",
                            stateId: idStack[stackLen - 1],
                            hash: idStack.slice(0, stackLen).join("."),

                            shaders: {
                                fragment: {
                                    code: shaderFragmentCodeStack.slice(0, stackLen).join("\n"),
                                    hooks: combineMapStack(shaderFragmentHooksStack)
                                },
                                vertex: {
                                    code: shaderVertexCodeStack.slice(0, stackLen).join("\n"),
                                    hooks: combineMapStack(shaderVertexHooksStack)
                                }
                            },

                            paramsStack: shaderParamsStack.slice(0, stackLen)
                        };

                        params.display.shader = core;

                    } else {

                        params.display.shader = defaultCore;
                    }

                    dirty = false;
                }
            });

    function combineMapStack(maps) {
        var map1;
        var map2 = {};
        var name;
        for (var i = 0; i < stackLen; i++) {
            map1 = maps[i];
            for (name in map1) {
                if (map1.hasOwnProperty(name)) {
                    map2[name] = map1[name];
                }
            }
        }
        return map2;
    }

    function pushHooks(hooks, hookStacks) {
        var stack;
        for (var key in hooks) {
            if (hooks.hasOwnProperty(key)) {
                stack = hookStacks[key];
                if (!stack) {
                    stack = hookStacks[key] = [];
                }
                stack.push(hooks[key]);
            }
        }
    }

    SceneJS.Shader = SceneJS_NodeFactory.createNodeType("shader");

    SceneJS.Shader.prototype._init = function(params) {
        if (this._core.useCount == 1) { // This node is the resource definer
            this._setShaders(params.shaders);
            this.setParams(params.params);
        }
    };

    SceneJS.Shader.prototype._setShaders = function(shaders) {
        shaders = shaders || [];
        this._core.shaders = {};
        var shader;

        for (var i = 0, len = shaders.length; i < len; i++) {
            shader = shaders[i];

            if (!shader.stage) {
                throw SceneJS_error.fatalError(
                        SceneJS.errors.ILLEGAL_NODE_CONFIG,
                        "shader 'stage' attribute expected");
            }

            var code;
            if (shader.code) {
                if (SceneJS._isArray(shader.code)) {
                    code = shader.code.join("");
                } else {
                    code = shader.code;
                }
            }

            this._core.shaders[shader.stage] = {
                code: code,
                hooks: shader.hooks
            };
        }
    };

    SceneJS.Shader.prototype.setParams = function(params) {
        params = params || {};
        var coreParams = this._core.params;
        if (!coreParams) {
            coreParams = this._core.params = {};
        }
        for (var name in params) {
            if (params.hasOwnProperty(name)) {
                coreParams[name] = params[name];
            }
        }
        this._engine.display.imageDirty = true;
    };

    SceneJS.Shader.prototype.getParams = function() {
        var coreParams = this._core.params;
        if (!coreParams) {
            return {};
        }
        var params = {};
        for (var name in coreParams) {
            if (coreParams.hasOwnProperty(name)) {
                params[name] = coreParams[name];
            }
        }
        return params;
    };

    SceneJS.Shader.prototype._compile = function(ctx) {

        idStack[stackLen] = this._core.coreId; // Draw list node tied to core, not node

        var shaders = this._core.shaders;

        var fragment = shaders.fragment || {};
        var vertex = shaders.vertex || {};

        shaderFragmentCodeStack[stackLen] = fragment.code || "";
        shaderFragmentHooksStack[stackLen] = fragment.hooks || {};

        shaderVertexCodeStack[stackLen] = vertex.code || "";
        shaderVertexHooksStack[stackLen] = vertex.hooks || {};

        shaderParamsStack[stackLen] = this._core.params || {};

        stackLen++;
        dirty = true;

        this._compileNodes(ctx);

        stackLen--;
        dirty = true;
    };

})();new (function() {

    /**
     * The default state core singleton for {@link SceneJS.ShaderParams} nodes
     */
    var defaultCore = {
        type: "shaderParams",
        stateId: SceneJS._baseStateId++,
        empty: true
    };

    var idStack = [];
    var shaderParamsStack = [];
    var stackLen = 0;
    var dirty;

    SceneJS_events.addListener(
            SceneJS_events.SCENE_COMPILING,
            function(params) {

                params.engine.display.shaderParams = defaultCore;

                stackLen = 0;
                dirty = true;
            });

    SceneJS_events.addListener(
            SceneJS_events.OBJECT_COMPILING,
            function(params) {
                if (dirty) {

                    if (stackLen > 0) {
                        var core = {
                            type: "shaderParams",
                            stateId: idStack[stackLen - 1],
                            paramsStack: shaderParamsStack.slice(0, stackLen)
                        };
                        params.display.shaderParams = core;

                    } else {
                        params.display.shaderParams = defaultCore;
                    }

                    dirty = false;
                }
            });

    SceneJS.ShaderParams = SceneJS_NodeFactory.createNodeType("shaderParams");

    SceneJS.ShaderParams.prototype._init = function(params) {
        if (this._core.useCount == 1) { // This node is the resource definer
            this.setParams(params.params);
        }
    };

    SceneJS.ShaderParams.prototype.setParams = function(params) {
        params = params || {};
        var core = this._core;
        if (!core.params) {
            core.params = {};
        }
        for (var name in params) {
            if (params.hasOwnProperty(name)) {
                core.params[name] = params[name];
            }
        }
        this._engine.display.imageDirty = true;
    };

    SceneJS.ShaderParams.prototype.getParams = function() {
        var coreParams = this._core.params;
        if (!coreParams) {
            return {};
        }
        var params = {};
        for (var name in coreParams) {
            if (coreParams.hasOwnProperty(name)) {
                params[name] = coreParams[name];
            }
        }
        return params;
    };

    SceneJS.ShaderParams.prototype._compile = function(ctx) {

        idStack[stackLen] = this._core.coreId; // Tie draw list state to core, not to scene node
        shaderParamsStack[stackLen] = this._core.params;
        stackLen++;
        dirty = true;

        this._compileNodes(ctx);

        stackLen--;
        dirty = true;
    };

})();(function () {

    // The default state core singleton for {@link SceneJS.Line} nodes
    var defaultCore = {
        type:"style",
        stateId:SceneJS._baseStateId++,
        lineWidth:1.0
    };

    var coreStack = [];
    var stackLen = 0;

    SceneJS_events.addListener(
        SceneJS_events.SCENE_COMPILING,
        function (params) {
            params.engine.display.style = defaultCore;
            stackLen = 0;
        });

    /**
     * @class Scene graph node which configures style parameters such as line width for subnodes
     * @extends SceneJS.Node
     */
    SceneJS.Style = SceneJS_NodeFactory.createNodeType("style");

    SceneJS.Style.prototype._init = function (params) {
        if (params.lineWidth != undefined) {
            this.setLineWidth(params.lineWidth);
        }
    };

    /**
     * Sets the line width
     *
     * Line width is initially 1.
     *
     * @param lineWidth The line width
     * @return {*}
     */
    SceneJS.Style.prototype.setLineWidth = function (lineWidth) {
        if (this._core.lineWidth != lineWidth) {
            this._core.lineWidth = lineWidth;
            this._engine.display.imageDirty = true;
        }
        return this;
    };

    /**
     * Gets the line width
     * Initial value will be 1.
     *
     * @return Boolean
     */
    SceneJS.Style.prototype.getLineWidth = function () {
        return this._core.lineWidth;
    };

    SceneJS.Style.prototype._compile = function (ctx) {
        this._engine.display.style = coreStack[stackLen++] = this._core;
        this._compileNodes(ctx);
        this._engine.display.style = (--stackLen > 0) ? coreStack[stackLen - 1] : defaultCore;
    };

})();(function() {

    /**
     * The default state core singleton for {@link SceneJS.Tag} nodes
     */
    var defaultCore = {
        type: "tag",
        stateId: SceneJS._baseStateId++,
        tag : null
    };

    var coreStack = [];
    var stackLen = 0;

    SceneJS_events.addListener(
            SceneJS_events.SCENE_COMPILING,
            function(params) {
                params.engine.display.tag = defaultCore;
                stackLen = 0;
            });

    /**
     * @class Scene graph node which assigns a symbolic tag name to the {@link SceneJS.Geometry} nodes in its subgraph.
     * The subgraph can then be included or excluded from scene rendering using {@link SceneJS.Scene#setTagMask}.
     * @extends SceneJS.Node
     */
    SceneJS.Tag = SceneJS_NodeFactory.createNodeType("tag");

    SceneJS.Tag.prototype._init = function(params) {
        if (this._core.useCount == 1) { // This node defines the resource
            if (!params.tag) {
                throw SceneJS_error.fatalError(
                        SceneJS.errors.NODE_CONFIG_EXPECTED,
                        "tag node attribute missing : 'tag'");
            }
            this.setTag(params.tag);
        }
    };

    SceneJS.Tag.prototype.setTag = function(tag) {

        var core = this._core;

        core.tag = tag;
        core.pattern = null;    // To be recomputed
        core.matched = false;   // To be rematched

        this._engine.display.drawListDirty = true;
    };

    SceneJS.Tag.prototype.getTag = function() {
        return this._core.tag;
    };

    SceneJS.Tag.prototype._compile = function(ctx) {
        this._engine.display.tag = coreStack[stackLen++] = this._core;
        this._compileNodes(ctx);
        this._engine.display.tag = (--stackLen > 0) ? coreStack[stackLen - 1] : defaultCore;
    };
})();/**
 * @class Scene graph node which defines textures to apply to the objects in its subgraph
 * @extends SceneJS.Node
 */
new (function () {

    var imageBasePath = window.location.hostname + window.location.pathname;

    // The default state core singleton for {@link SceneJS.Texture} nodes
    var defaultCore = {
        type:"texture",
        stateId:SceneJS._baseStateId++,
        empty:true,
        hash:""
    };

    var coreStack = [];
    var stackLen = 0;

    SceneJS_events.addListener(
        SceneJS_events.SCENE_COMPILING,
        function (params) {
            params.engine.display.texture = defaultCore;
            stackLen = 0;
        });

    /**
     * @class Scene graph node which defines one or more textures to apply to the {@link SceneJS.Geometry} nodes in its subgraph
     * @extends SceneJS.Node
     */
    SceneJS.Texture = SceneJS_NodeFactory.createNodeType("texture");

    SceneJS.Texture.prototype._init = function (params) {

        if (this._core.useCount == 1) { // This node is the resource definer

            this._core.layers = [];
            this._core.params = {};

            // By default, wait for texture to load before building subgraph
            var waitForLoad = params.waitForLoad == undefined ? true : params.waitForLoad;

            if (!params.layers) {
                throw SceneJS_error.fatalError(
                    SceneJS.errors.NODE_CONFIG_EXPECTED,
                    "texture layers missing");
            }

            if (!SceneJS._isArray(params.layers)) {
                throw SceneJS_error.fatalError(
                    SceneJS.errors.NODE_CONFIG_EXPECTED,
                    "texture layers should be an array");
            }

            var layerParams;
            var gl = this._engine.canvas.gl;

            for (var i = 0; i < params.layers.length; i++) {

                layerParams = params.layers[i];

                if (!layerParams.source && !layerParams.uri && !layerParams.src && !layerParams.framebuf && !layerParams.video) {

                    throw SceneJS_error.fatalError(
                        SceneJS.errors.NODE_CONFIG_EXPECTED,
                        "texture layer " + i + "  has no uri, src, source, framebuf, video or canvasId specified");
                }

                if (layerParams.applyFrom) {
                    if (layerParams.applyFrom != "uv" &&
                        layerParams.applyFrom != "uv2" &&
                        layerParams.applyFrom != "normal" &&
                        layerParams.applyFrom != "geometry") {
                        throw SceneJS_error.fatalError(
                            SceneJS.errors.NODE_CONFIG_EXPECTED,
                            "texture layer " + i + "  applyFrom value is unsupported - " +
                                "should be either 'uv', 'uv2', 'normal' or 'geometry'");
                    }
                }

                if (layerParams.applyTo) {
                    if (layerParams.applyTo != "baseColor" && // Colour map (deprecated)
                        layerParams.applyTo != "color" && // Colour map
                        layerParams.applyTo != "specular" && // Specular map
                        layerParams.applyTo != "emit" && // Emission map
                        layerParams.applyTo != "alpha" && // Alpha map
                        layerParams.applyTo != "normals") {
                        throw SceneJS_error.fatalError(
                            SceneJS.errors.NODE_CONFIG_EXPECTED,
                            "texture layer " + i + " applyTo value is unsupported - " +
                                "should be either 'color', 'baseColor', 'specular' or 'normals'");
                    }
                }

                if (layerParams.blendMode) {
                    if (layerParams.blendMode != "add" && layerParams.blendMode != "multiply") {
                        throw SceneJS_error.fatalError(
                            SceneJS.errors.NODE_CONFIG_EXPECTED,
                            "texture layer " + i + " blendMode value is unsupported - " +
                                "should be either 'add' or 'multiply'");
                    }
                }

                if (layerParams.applyTo == "color") {
                    layerParams.applyTo = "baseColor";
                }

                var layer = SceneJS._apply(layerParams, {
                    waitForLoad:waitForLoad,
                    texture:null,
                    applyFrom:layerParams.applyFrom || "uv",
                    applyTo:layerParams.applyTo || "baseColor",
                    blendMode:layerParams.blendMode || "multiply",
                    blendFactor:(layerParams.blendFactor != undefined && layerParams.blendFactor != null) ? layerParams.blendFactor : 1.0,
                    translate:{ x:0, y:0},
                    scale:{ x:1, y:1 },
                    rotate:{ z:0.0 }
                });

                this._core.layers.push(layer);

                this._setLayerTransform(layerParams, layer);

                if (layer.framebuf) { // Create from a framebuf node preceeding this texture in the scene graph
                    var targetNode = this._engine.findNode(layer.framebuf);
                    if (targetNode && targetNode.type == "framebuf") {
                        layer.texture = targetNode._core.framebuf.getTexture(); // TODO: what happens when the framebuf is destroyed?
                    }
                } else { // Create from texture node's layer configs
                    this._loadLayerTexture(gl, layer);
                }
            }

            var self = this;

            // WebGL restored handler - rebuilds the texture layers
            this._core.webglRestored = function () {

                var layers = self._core.layers;
                var gl = self._engine.canvas.gl;

                for (var i = 0, len = layers.length; i < len; i++) {
                    self._loadLayerTexture(gl, layers[i]);
                }
            };
        }
    };

    SceneJS.Texture.prototype._loadLayerTexture = function (gl, layer) {

        var self = this;

        var sourceConfigs = layer.source;

        if (sourceConfigs) {

            if (!sourceConfigs.type) {
                throw SceneJS_error.fatalError(
                    SceneJS.errors.ILLEGAL_NODE_CONFIG,
                    "texture layer config expected: source.type");
            }

            SceneJS.Plugins.getPlugin(
                "texture",
                sourceConfigs.type,
                function (plugin) {

                    if (!plugin.getSource) {
                        throw SceneJS_error.fatalError(
                            SceneJS.errors.PLUGIN_INVALID,
                            "texture: 'getSource' method missing on plugin for texture source type '" + sourceConfigs.type + "'.");
                    }

                    var source = plugin.getSource({ gl:gl });

                    if (!source.subscribe) {
                        throw SceneJS_error.fatalError(
                            SceneJS.errors.PLUGIN_INVALID,
                            "texture: 'subscribe' method missing on plugin for texture source type '" + sourceConfigs.type + "'");
                    }

                    var taskId = SceneJS_sceneStatusModule.taskStarted(self, "Loading texture");

                    source.subscribe(// Get notification whenever source updates the texture
                        (function () {
                            var loaded = false;
                            return function (texture) {
                                if (!loaded) { // Texture first initialised - create layer
                                    loaded = true;
                                    self._setLayerTexture(gl, layer, texture);
                                    SceneJS_sceneStatusModule.taskFinished(taskId);
                                } else { // Texture updated - layer already has the handle to it, so just signal a redraw
                                    self._engine.display.imageDirty = true;
                                }
                            };
                        })());

                    if (source.configure) {
                        source.configure(sourceConfigs); // Configure the source, which may cause it to update the texture
                    }

                    layer._source = source;
                });

        } else {

            /* Load from URL
             */

            var src = layer.uri || layer.src;

            var taskId = SceneJS_sceneStatusModule.taskStarted(this, "Loading texture");

            var image = new Image();

            image.onload = function () {
                var texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, self._ensureImageSizePowerOfTwo(image));
                self._setLayerTexture(gl, layer, texture);
                SceneJS_sceneStatusModule.taskFinished(taskId);
            };

            image.onerror = function () {
                SceneJS_sceneStatusModule.taskFailed(taskId);
            };

            if (src.indexOf("data") == 0) {  // Image data
                image.src = src;
            } else { // Image file
                image.crossOrigin = "Anonymous";
                image.src = src;
            }
        }
    };

    SceneJS.Texture.prototype._ensureImageSizePowerOfTwo = function (image) {

        if (!this._isPowerOfTwo(image.width) || !this._isPowerOfTwo(image.height)) {

            var canvas = document.createElement("canvas");
            canvas.width = this._nextHighestPowerOfTwo(image.width);
            canvas.height = this._nextHighestPowerOfTwo(image.height);

            var ctx = canvas.getContext("2d");

            ctx.drawImage(image,
                0, 0, image.width, image.height,
                0, 0, canvas.width, canvas.height);

            image = canvas;
            image.crossOrigin = "";
        }
        return image;
    };

    SceneJS.Texture.prototype._isPowerOfTwo = function (x) {
        return (x & (x - 1)) == 0;
    };

    SceneJS.Texture.prototype._nextHighestPowerOfTwo = function (x) {
        --x;
        for (var i = 1; i < 32; i <<= 1) {
            x = x | x >> i;
        }
        return x + 1;
    };

    SceneJS.Texture.prototype._setLayerTexture = function (gl, layer, texture) {

        layer.texture = new SceneJS_webgl_Texture2D(gl, {
            texture:texture, // WebGL texture object
            minFilter:this._getGLOption("minFilter", gl, layer, gl.LINEAR_MIPMAP_NEAREST),
            magFilter:this._getGLOption("magFilter", gl, layer, gl.LINEAR),
            wrapS:this._getGLOption("wrapS", gl, layer, gl.REPEAT),
            wrapT:this._getGLOption("wrapT", gl, layer, gl.REPEAT),
            isDepth:this._getOption(layer.isDepth, false),
            depthMode:this._getGLOption("depthMode", gl, layer, gl.LUMINANCE),
            depthCompareMode:this._getGLOption("depthCompareMode", gl, layer, gl.COMPARE_R_TO_TEXTURE),
            depthCompareFunc:this._getGLOption("depthCompareFunc", gl, layer, gl.LEQUAL),
            flipY:this._getOption(layer.flipY, true),
            width:this._getOption(layer.width, 1),
            height:this._getOption(layer.height, 1),
            internalFormat:this._getGLOption("internalFormat", gl, layer, gl.LEQUAL),
            sourceFormat:this._getGLOption("sourceType", gl, layer, gl.ALPHA),
            sourceType:this._getGLOption("sourceType", gl, layer, gl.UNSIGNED_BYTE),
            update:null
        });

        if (this.destroyed) { // Node was destroyed while loading
            layer.texture.destroy();
        }

        this._engine.display.imageDirty = true;
    };

    SceneJS.Texture.prototype._getGLOption = function (name, gl, layer, defaultVal) {
        var value = layer[name];
        if (value == undefined) {
            return defaultVal;
        }
        var glName = SceneJS_webgl_enumMap[value];
        if (glName == undefined) {
            throw SceneJS_error.fatalError(
                SceneJS.errors.ILLEGAL_NODE_CONFIG,
                "Unrecognised value for texture node property '" + name + "' value: '" + value + "'");
        }
        var glValue = gl[glName];
        //                if (!glValue) {
        //                    throw new SceneJS.errors.WebGLUnsupportedNodeConfigException(
        //                            "This browser's WebGL does not support value of SceneJS.texture node property '" + name + "' value: '" + value + "'");
        //                }
        return glValue;
    };

    SceneJS.Texture.prototype._getOption = function (value, defaultVal) {
        return (value == undefined) ? defaultVal : value;
    };

    /**
     * Set some writeable properties on a layer
     */
    SceneJS.Texture.prototype.setLayer = function (cfg) {

        if (cfg.index == undefined || cfg.index == null) {
            throw SceneJS_error.fatalError(
                SceneJS.errors.ILLEGAL_NODE_CONFIG,
                "Invalid texture set layer argument: index null or undefined");
        }

        if (cfg.index < 0 || cfg.index >= this._core.layers.length) {
            throw SceneJS_error.fatalError(
                SceneJS.errors.ILLEGAL_NODE_CONFIG,
                "Invalid texture set layer argument: index out of range (" + this._core.layers.length + " layers defined)");
        }

        this._setLayer(parseInt(cfg.index), cfg);

        this._engine.display.imageDirty = true;
    };

    /**
     * Set some writeable properties on multiple layers
     */
    SceneJS.Texture.prototype.setLayers = function (layers) {
        var indexNum;
        for (var index in layers) {
            if (layers.hasOwnProperty(index)) {
                if (index != undefined || index != null) {
                    indexNum = parseInt(index);
                    if (indexNum < 0 || indexNum >= this._core.layers.length) {
                        throw SceneJS_error.fatalError(
                            SceneJS.errors.ILLEGAL_NODE_CONFIG,
                            "Invalid texture set layer argument: index out of range (" + this._core.layers.length + " layers defined)");
                    }
                    this._setLayer(indexNum, layers[index] || {});
                }
            }
        }
        this._engine.display.imageDirty = true;
    };

    SceneJS.Texture.prototype._setLayer = function (index, cfg) {

        cfg = cfg || {};

        var layer = this._core.layers[index];

        if (cfg.blendFactor != undefined && cfg.blendFactor != null) {
            layer.blendFactor = cfg.blendFactor;
        }

        if (cfg.source) {
            var source = layer._source;
            if (source && source.configure) {
                source.configure(cfg.source);
            }
        }

        if (cfg.translate || cfg.rotate || cfg.scale) {
            this._setLayerTransform(cfg, layer);
        }
    };

    SceneJS.Texture.prototype._setLayerTransform = function (cfg, layer) {

        var matrix;
        var t;

        if (cfg.translate) {
            var translate = cfg.translate;
            if (translate.x != undefined) {
                layer.translate.x = translate.x;
            }
            if (translate.y != undefined) {
                layer.translate.y = translate.y;
            }
            matrix = SceneJS_math_translationMat4v([ translate.x || 0, translate.y || 0, 0]);
        }

        if (cfg.scale) {
            var scale = cfg.scale;
            if (scale.x != undefined) {
                layer.scale.x = scale.x;
            }
            if (scale.y != undefined) {
                layer.scale.y = scale.y;
            }
            t = SceneJS_math_scalingMat4v([ scale.x || 1, scale.y || 1, 1]);
            matrix = matrix ? SceneJS_math_mulMat4(matrix, t) : t;
        }

        if (cfg.rotate) {
            var rotate = cfg.rotate;
            if (rotate.z != undefined) {
                layer.rotate.z = rotate.z || 0;
            }
            t = SceneJS_math_rotationMat4v(rotate.z * 0.0174532925, [0, 0, 1]);
            matrix = matrix ? SceneJS_math_mulMat4(matrix, t) : t;
        }

        if (matrix) {
            layer.matrix = matrix;
            if (!layer.matrixAsArray) {
                layer.matrixAsArray = new Float32Array(layer.matrix);
            } else {
                layer.matrixAsArray.set(layer.matrix);
            }

            layer.matrixAsArray = new Float32Array(layer.matrix); // TODO - reinsert into array
        }
    };

    SceneJS.Texture.prototype._compile = function (ctx) {
        if (!this._core.hash) {
            this._makeHash();
        }
        this._engine.display.texture = coreStack[stackLen++] = this._core;
        this._compileNodes(ctx);
        this._engine.display.texture = (--stackLen > 0) ? coreStack[stackLen - 1] : defaultCore;
    };

    SceneJS.Texture.prototype._makeHash = function () {
        var core = this._core;
        var hash;
        if (core.layers && core.layers.length > 0) {
            var layers = core.layers;
            var hashParts = [];
            var texLayer;
            for (var i = 0, len = layers.length; i < len; i++) {
                texLayer = layers[i];
                hashParts.push("/");
                hashParts.push(texLayer.applyFrom);
                hashParts.push("/");
                hashParts.push(texLayer.applyTo);
                hashParts.push("/");
                hashParts.push(texLayer.blendMode);
                if (texLayer.matrix) {
                    hashParts.push("/anim");
                }
            }
            hash = hashParts.join("");
        } else {
            hash = "";
        }
        if (core.hash != hash) {
            core.hash = hash;
        }
    };

    SceneJS.Texture.prototype._destroy = function () {
        if (this._core.useCount == 1) { // Last resource user
            var layers = this._core.layers;
            var layer;
            var source;
            for (var i = 0, len = layers.length; i < len; i++) {
                layer = layers[i];
                if (layer.texture) {
                    layer.texture.destroy();
                }
                source = layer._source;
                if (source && source.destroy) {
                    source.destroy();
                }
            }
        }
    };

})();/**
 * @class Scene graph node which defines the modelling transform to apply to the objects in its subgraph
 * @extends SceneJS.Node
 */
SceneJS.XForm = SceneJS_NodeFactory.createNodeType("xform");

SceneJS.XForm.prototype._init = function (params) {

    if (this._core.useCount == 1) { // This node is the resource definer

        SceneJS_modelXFormStack.buildCore(this._core);

        this.setElements(params.elements);
    }
};

/**
 * Get Model matrix
 * @return {*}
 */
SceneJS.XForm.prototype.getModelMatrix = function() {
    if (this._core.dirty) {
        this._core.build();
    }
    return this._core.matrix;
};

/**
 * Get World matrix. That's the multiplication of this node's Model matrix by the World matrix of the the next
 * tranform (scale, XForm, translate etc) node on the path to the scene root.
 * @return {*}
 */
SceneJS.XForm.prototype.getWorldMatrix = function() {
    if (this._core.dirty) {
        this._core.build();
    }
    return Array.apply( [], this._core.mat);
};


SceneJS.XForm.prototype.setElements = function (elements) {

    elements = elements || SceneJS_math_identityMat4();

    if (elements.length != 16) {
        throw SceneJS_error.fatalError(
            SceneJS.errors.ILLEGAL_NODE_CONFIG,
            "SceneJS.XForm elements should number 16");
    }

    var core = this._core;

    if (!core.matrix) {
        core.matrix = elements;

    } else {

        for (var i = 0; i < 16; i++) {
            core.matrix[i] = elements[i];
        }
    }

//    core.mat.set(core.matrix);
//    core.normalMat.set(
//        SceneJS_math_transposeMat4(
//            SceneJS_math_inverseMat4(core.matrix, SceneJS_math_mat4())));


    core.setDirty();

    this._engine.display.imageDirty = true;

    return this;
};

SceneJS.XForm.prototype._compile = function (ctx) {
    SceneJS_modelXFormStack.push(this._core);
    this._compileNodes(ctx);
    SceneJS_modelXFormStack.pop();
};

/**
 * @class Scene graph node which defines a modelling transform matrix to apply to the objects in its subgraph
 * @extends SceneJS.Node
 */
SceneJS.Matrix = SceneJS_NodeFactory.createNodeType("matrix");

SceneJS.Matrix.prototype._init = function(params) {

    if (this._core.useCount == 1) { // This node is the resource definer

        SceneJS_modelXFormStack.buildCore(this._core);

        this.setElements(params.elements);
    }
};

/**
 * Get Model matrix
 * @return {*}
 */
SceneJS.Matrix.prototype.getModelMatrix = function() {
    if (this._core.dirty) {
        this._core.build();
    }
    return this._core.matrix;
};

/**
 * Get World matrix. That's the multiplication of this node's Model matrix by the World matrix of the the next
 * tranform (scale, matrix, translate etc) node on the path to the scene root.
 * @return {*}
 */
SceneJS.Matrix.prototype.getWorldMatrix = function() {
    if (this._core.dirty) {
        this._core.build();
    }
    return Array.apply( [], this._core.mat);
};

/**
 * Sets the matrix elements
 * @type {Function}
 */
SceneJS.Matrix.prototype.setMatrix = function(elements) {

    elements = elements || SceneJS_math_identityMat4();

    if (elements.length != 16) {
        throw SceneJS_error.fatalError(
                SceneJS.errors.ILLEGAL_NODE_CONFIG,
                "SceneJS.Matrix elements should number 16");
    }

    var core = this._core;

    if (!core.matrix) {
        core.matrix = elements;

    } else {

        for (var i = 0; i < 16; i++) {
            core.matrix[i] = elements[i];
        }
    }

    core.setDirty();

    this._engine.display.imageDirty = true;

    return this;
};

/**
 * Sets the matrix elements
 * @deprecated
 * @type {Function}
 */
SceneJS.Matrix.prototype.setElements = SceneJS.Matrix.prototype.setMatrix;

SceneJS.Matrix.prototype._compile = function(ctx) {
    SceneJS_modelXFormStack.push(this._core);
    this._compileNodes(ctx);
    SceneJS_modelXFormStack.pop();
};
/**
 * @class Scene graph node which defines a rotation modelling transform to apply to the objects in its subgraph
 * @extends SceneJS.Node
 */
SceneJS.Rotate = SceneJS_NodeFactory.createNodeType("rotate");

SceneJS.Rotate.prototype._init = function(params) {

    if (this._core.useCount == 1) { // This node is the resource definer

        SceneJS_modelXFormStack.buildCore(this._core);
        
        this.setMultOrder(params.multOrder);

        this.setAngle(params.angle);

        this.setXYZ({
            x: params.x,
            y: params.y,
            z: params.z
        });

        var core = this._core;

        this._core.buildMatrix = function() {
            core.matrix = SceneJS_math_rotationMat4v(core.angle * Math.PI / 180.0, [core.x, core.y, core.z]);
        };
    }
};

/**
 * Get Model matrix
 * @return {*}
 */
SceneJS.Rotate.prototype.getModelMatrix = function() {
    if (this._core.dirty) {
        this._core.build();
    }
    return this._core.matrix;
};

/**
 * Get World matrix. That's the multiplication of this node's Model matrix by the World matrix of the the next
 * tranform (scale, rotate, translate etc) node on the path to the scene root.
 * @return {*}
 */
SceneJS.Rotate.prototype.getWorldMatrix = function() {
    if (this._core.dirty) {
        this._core.build();
    }
    return Array.apply( [], this._core.mat);
};

/**
 * Sets the multiplication order of this node's transform matrix with respect to the parent modeling transform
 * in the scene graph.
 *
 * @param {String} multOrder Mulplication order - "post" and "pre"
 */
SceneJS.Rotate.prototype.setMultOrder = function(multOrder) {

    multOrder = multOrder || "post";

    if (multOrder != "post" && multOrder != "pre") {

        throw SceneJS_error.fatalError(
                SceneJS.errors.NODE_CONFIG_EXPECTED,
                "Illegal multOrder for rotate node - '" + multOrder + "' should be 'pre' or 'post'");
    }

    this._core.multOrder = multOrder;

    this._core.setDirty();
    this._engine.display.imageDirty = true;
};

SceneJS.Rotate.prototype.setAngle = function(angle) {
    this._core.angle = angle || 0;
    this._core.setDirty();
    this._engine.display.imageDirty = true;
};

SceneJS.Rotate.prototype.getAngle = function() {
    return this._core.angle;
};

SceneJS.Rotate.prototype.setXYZ = function(xyz) {

    xyz = xyz || {};

    this._core.x = xyz.x || 0;
    this._core.y = xyz.y || 0;
    this._core.z = xyz.z || 0;

    this._core.setDirty();

    this._engine.display.imageDirty = true;
};

SceneJS.Rotate.prototype.getXYZ = function() {
    return {
        x: this._core.x,
        y: this._core.y,
        z: this._core.z
    };
};

SceneJS.Rotate.prototype.setX = function(x) {
    this._core.x = x;
    this._core.setDirty();
    this._engine.display.imageDirty = true;
};

SceneJS.Rotate.prototype.getX = function() {
    return this._core.x;
};

SceneJS.Rotate.prototype.setY = function(y) {
    this._core.y = y;
    this._core.setDirty();
    this._engine.display.imageDirty = true;
};

SceneJS.Rotate.prototype.getY = function() {
    return this._core.y;
};

SceneJS.Rotate.prototype.setZ = function(z) {
    this._core.z = z;
    this._core.setDirty();
    this._engine.display.imageDirty = true;
};

SceneJS.Rotate.prototype.getZ = function() {
    return this._core.z;
};

SceneJS.Rotate.prototype.incAngle = function(angle) {
    this._core.angle += angle;
    this._core.setDirty();
    this._engine.display.imageDirty = true;
};

SceneJS.Rotate.prototype._compile = function(ctx) {
    SceneJS_modelXFormStack.push(this._core);
    this._compileNodes(ctx);
    SceneJS_modelXFormStack.pop();
};
/**
 * @class Scene graph node which defines a translation modelling transform to apply to the objects in its subgraph
 * @extends SceneJS.Node
 */
SceneJS.Translate = SceneJS_NodeFactory.createNodeType("translate");

SceneJS.Translate.prototype._init = function(params) {

    if (this._core.useCount == 1) { // This node is the resource definer

        SceneJS_modelXFormStack.buildCore(this._core);
        
        this.setMultOrder(params.multOrder);

        this.setXYZ({
            x: params.x,
            y: params.y,
            z: params.z
        });

        var core = this._core;

        this._core.buildMatrix = function() {
            core.matrix = SceneJS_math_translationMat4v([core.x, core.y, core.z], core.matrix);
        };
    }
};

/**
 * Get Model matrix
 * @return {*}
 */
SceneJS.Translate.prototype.getModelMatrix = function() {
    if (this._core.dirty) {
        this._core.build();
    }
    return this._core.matrix;
};

/**
 * Get World matrix. That's the multiplication of this node's Model matrix by the World matrix of the the next
 * tranform (scale, translate, translate etc) node on the path to the scene root.
 * @return {*}
 */
SceneJS.Translate.prototype.getWorldMatrix = function() {
    if (this._core.dirty) {
        this._core.build();
    }
    return Array.apply( [], this._core.mat);
};


/**
 * Sets the multiplication order of this node's transform matrix with respect to the parent modeling transform
 * in the scene graph.
 *
 * @param {String} multOrder Mulplication order - "post" and "pre"
 */
SceneJS.Translate.prototype.setMultOrder = function(multOrder) {

    multOrder = multOrder || "post";

    if (multOrder != "post" && multOrder != "pre") {

        throw SceneJS_error.fatalError(
                SceneJS.errors.NODE_CONFIG_EXPECTED,
                "Illegal multOrder for translate node - '" + multOrder + "' should be 'pre' or 'post'");
    }

    this._core.multOrder = multOrder;

    this._core.setDirty();

    this._engine.display.imageDirty = true;
};

SceneJS.Translate.prototype.setXYZ = function(xyz) {

    xyz = xyz || {};

    this._core.x = xyz.x || 0;
    this._core.y = xyz.y || 0;
    this._core.z = xyz.z || 0;

    this._core.setDirty();

    this._engine.display.imageDirty = true;

    return this;
};

SceneJS.Translate.prototype.getXYZ = function() {
    return {
        x: this._core.x,
        y: this._core.y,
        z: this._core.z
    };
};

SceneJS.Translate.prototype.setX = function(x) {
    this._core.x = x;
    this._core.setDirty();
    this._engine.display.imageDirty = true;
    return this;
};

SceneJS.Translate.prototype.getX = function() {
    return this._core.x;
};

SceneJS.Translate.prototype.setY = function(y) {
    this._core.y = y;
    this._core.setDirty();
    this._engine.display.imageDirty = true;
    return this;
};

SceneJS.Translate.prototype.getY = function() {
    return this._core.y;
};

SceneJS.Translate.prototype.setZ = function(z) {
    this._core.z = z;
    this._core.setDirty();
    this._engine.display.imageDirty = true;
    return this;
};

SceneJS.Translate.prototype.getZ = function() {
    return this._core.z;
};

SceneJS.Translate.prototype.incX = function(x) {
    this._core.x += x;
    this._core.setDirty();
    this._engine.display.imageDirty = true;
    return this;
};

SceneJS.Translate.prototype.incY = function(y) {
    this._core.y += y;
    this._core.setDirty();
    this._engine.display.imageDirty = true;
    return this;
};

SceneJS.Translate.prototype.incZ = function(z) {
    this._core.z += z;
    this._core.setDirty();
    this._engine.display.imageDirty = true;
    return this;
};

SceneJS.Translate.prototype._compile = function(ctx) {
    SceneJS_modelXFormStack.push(this._core);
    this._compileNodes(ctx);
    SceneJS_modelXFormStack.pop();
};
/**
 * @class Scene graph node which defines a rotation modelling transform to apply to the objects in its subgraph
 * @extends SceneJS.Node
 */
SceneJS.Scale = SceneJS_NodeFactory.createNodeType("scale");

SceneJS.Scale.prototype._init = function (params) {

    if (this._core.useCount == 1) { // This node is the resource definer

        SceneJS_modelXFormStack.buildCore(this._core);

        this.setMultOrder(params.multOrder);

        this.setXYZ({
            x:params.x,
            y:params.y,
            z:params.z
        });

        var core = this._core;

        this._core.buildMatrix = function () {
            core.matrix = SceneJS_math_scalingMat4v([core.x, core.y, core.z]);
        };
    }
};

/**
 * Get Model matrix
 * @return {*}
 */
SceneJS.Scale.prototype.getModelMatrix = function () {
    if (this._core.dirty) {
        this._core.build();
    }
    return this._core.matrix;
};

/**
 * Get World matrix. That's the multiplication of this node's Model matrix by the World matrix of the the next
 * tranform (scale, scale, translate etc) node on the path to the scene root.
 * @return {*}
 */
SceneJS.Scale.prototype.getWorldMatrix = function () {
    if (this._core.dirty) {
        this._core.build();
    }
    return Array.apply([], this._core.mat);
};


/**
 * Sets the multiplication order of this node's transform matrix with respect to the parent modeling transform
 * in the scene graph.
 *
 * @param {String} multOrder Mulplication order - "post" and "pre"
 */
SceneJS.Scale.prototype.setMultOrder = function (multOrder) {

    multOrder = multOrder || "post";

    if (multOrder != "post" && multOrder != "pre") {

        throw SceneJS_error.fatalError(
            SceneJS.errors.NODE_CONFIG_EXPECTED,
            "Illegal multOrder for scale node - '" + multOrder + "' should be 'pre' or 'post'");
    }

    this._core.multOrder = multOrder;

    this._core.setDirty();
    this._engine.display.imageDirty = true;
};

SceneJS.Scale.prototype.getAngle = function () {
    return this._core.angle;
};

SceneJS.Scale.prototype.setXYZ = function (xyz) {

    xyz = xyz || {};

    this._core.x = xyz.x == undefined ? 1 : xyz.x;
    this._core.y = xyz.y == undefined ? 1 : xyz.y;
    this._core.z = xyz.z == undefined ? 1 : xyz.z;

    this._core.setDirty();

    this._engine.display.imageDirty = true;
};

SceneJS.Scale.prototype.getXYZ = function () {
    return {
        x:this._core.x,
        y:this._core.y,
        z:this._core.z
    };
};

SceneJS.Scale.prototype.setX = function (x) {
    this._core.x = x;
    this._core.setDirty();
    this._engine.display.imageDirty = true;
};

SceneJS.Scale.prototype.getX = function () {
    return this._core.x;
};

SceneJS.Scale.prototype.setY = function (y) {
    this._core.y = y;
    this._core.setDirty();
    this._engine.display.imageDirty = true;
};

SceneJS.Scale.prototype.getY = function () {
    return this._core.y;
};

SceneJS.Scale.prototype.setZ = function (z) {
    this._core.z = z;
    this._core.setDirty();
    this._engine.display.imageDirty = true;
};

SceneJS.Scale.prototype.getZ = function () {
    return this._core.z;
};

SceneJS.Scale.prototype.incX = function (x) {
    this._core.x += x;
    this._core.setDirty();
    this._engine.display.imageDirty = true;
};

SceneJS.Scale.prototype.incY = function (y) {
    this._core.y += y;
    this._core.matrixDirty = true;
};

SceneJS.Scale.prototype.incZ = function (z) {
    this._core.z += z;
    this._core.setDirty();
    this._engine.display.imageDirty = true;
};

SceneJS.Scale.prototype._compile = function (ctx) {
    SceneJS_modelXFormStack.push(this._core);
    this._compileNodes(ctx);
    SceneJS_modelXFormStack.pop();
};
/**
 * Provides a model transform stack in front of the renderer.
 * Nodes peek push and pop to the stack, while the renderer peeks at
 * the transform on the top of the stack whenever it builds a renderer node.
 *
 */
var SceneJS_modelXFormStack = new (function () {

    var defaultMatrix = SceneJS_math_identityMat4();
    var defaultMat = new Float32Array(defaultMatrix);

    var defaultNormalMatrix = SceneJS_math_transposeMat4(
        SceneJS_math_inverseMat4(
            SceneJS_math_identityMat4(),
            SceneJS_math_mat4()));
    var defaultNormalMat = new Float32Array(defaultNormalMatrix);

    var defaultCore = {
        type:"xform",
        stateId:SceneJS._baseStateId++,

        matrix:defaultMatrix,
        mat:defaultMat,

        normalMatrix:defaultNormalMatrix,
        normalMat:defaultNormalMat,

        parent:null, // Parent transform core
        cores:[], // Child transform cores
        numCores:0, // Number of child transform cores
        dirty:false, // Does this subtree need matrices rebuilt
        matrixDirty:false
    };

    var transformStack = [];
    var stackLen = 0;

    this.top = defaultCore;

    var dirty;

    var self = this;

    SceneJS_events.addListener(
        SceneJS_events.SCENE_COMPILING,
        function () {
            stackLen = 0;
            self.top = defaultCore;
            dirty = true;
        });

    SceneJS_events.addListener(
        SceneJS_events.OBJECT_COMPILING,
        function (params) {

            if (dirty) {

                if (stackLen > 0) {

                    params.display.modelTransform = transformStack[stackLen - 1];

                } else {

                    params.display.modelTransform = defaultCore;
                }

                dirty = false;
            }
        });

    /**
     * Creates a fresh transformation core
     * @param core
     */
    this.buildCore = function (core) {

        /*
         * Transform tree node properties
         */
        core.parent = null;         // Parent transform core
        core.cores = [];            // Child transform cores
        core.numCores = 0;          // Number of child transform cores
        core.matrixDirty = false;

        core.matrix = SceneJS_math_identityMat4();

        core.mat = new Float32Array(core.matrix);
        core.normalMat = new Float32Array(
            SceneJS_math_transposeMat4(
                SceneJS_math_inverseMat4(core.matrix, SceneJS_math_mat4())));

        core.dirty = false;         // Does this subtree need matrices rebuilt

        core.setDirty = function () {

            core.matrixDirty = true;

            if (core.dirty) {
                // return;
            }

            setDirty(core);
        };

        /**
         * Recursively flag this subtree of transforms cores as dirty,
         * ie. needing their matrices rebuilt.
         */
        function setDirty(core) {

            core.dirty = true;
            core.matrixDirty = true;

            for (var i = 0, len = core.numCores; i < len; i++) {
                setDirty(core.cores[i]);
            }
        }

        /**
         * Pre-multiply matrices at cores on path up to root into matrix at this core
         */
        core.build = function () {

            if (core.matrixDirty) {
                if (core.buildMatrix) { // Matrix might be explicit property on some transform node types
                    core.buildMatrix();
                }
                core.matrixDirty = false;
            }

            var parent = core.parent;

            var matrix;

            if (parent) {

                matrix = core.matrix.slice(0);

                while (parent) {

                    if (parent.matrixDirty) {

                        if (parent.buildMatrix) { // Matrix might be explicit property on some transform node types
                            parent.buildMatrix();
                        }
                        parent.mat.set(parent.matrix);
                        parent.normalMat.set(
                            SceneJS_math_transposeMat4(
                                SceneJS_math_inverseMat4(parent.matrix, SceneJS_math_mat4())));

                        parent.matrixDirty = false;
                    }

                    SceneJS_math_mulMat4(parent.matrix, matrix, matrix);

                    if (!parent.dirty) {
                        //   break;
                    }

                    //  parent.dirty = false;

                    parent = parent.parent;
                }

            } else {

                matrix = core.matrix;
            }

            //            if (!core.mat) {
            //
            //                core.mat = new Float32Array(matrix);
            //
            //                core.normalMat = new Float32Array(
            //                        SceneJS_math_transposeMat4(
            //                                SceneJS_math_inverseMat4(matrix, SceneJS_math_mat4())));
            //            } else {

            core.mat.set(matrix);

            core.normalMat.set(
                SceneJS_math_transposeMat4(
                    SceneJS_math_inverseMat4(matrix, SceneJS_math_mat4())));
            //}

           core.dirty = false;
        };
    };

    this.push = function (core) {

        transformStack[stackLen++] = core;

        core.parent = this.top;
        core.dirty = true;

        if (this.top) {
            this.top.cores[this.top.numCores++] = core;
        }

        core.numCores = 0;

        this.top = core;

        dirty = true;
    };

    this.pop = function () {

        this.top = (--stackLen > 0) ? transformStack[stackLen - 1] : defaultCore;


        dirty = true;
    };

})();
/**
 * Container for custom node types
 */
SceneJS.Types = new (function () {

    /**
     * Installs a node type
     * @param typeName
     * @param methods
     */
    this.addType = function (typeName, methods) {
        SceneJS_NodeFactory.createNodeType(typeName, methods,
            // Augments the basic node type with our custom type's methods
            function (type) {
                var method;
                for (var methodName in methods) {
                    if (methods.hasOwnProperty(methodName)) {
                        method = methods[methodName];
                        switch (methodName) {
                            case "init": // Deprecated
                            case "construct":
                                (function () {
                                    var _method = methods[methodName];
                                    type.prototype._init = function (params) {
                                        _method.call(this, params);
                                    };

                                    // Mark node type as a plugin
                                    type.prototype._fromPlugin = true;
                                })();
                                break;
                            case "destroy": // Deprecated
                            case "destruct":
                                type.prototype._destroy = method;
                                break;
                            default:
                                type.prototype[methodName] = method;
                        }
                    }
                }
            });
    };

    /**
     * Tests if given node type is installed
     * @param typeName
     * @param methods
     */
    this.hasType = function (typeName) {
        return !!SceneJS_NodeFactory.nodeTypes[typeName];
    };
})();

/**
 * @class Renders and picks a {@link SceneJS.Scene}
 * @private
 *
 * <p>A Display is a container of {@link SceneJS_Object}s which are created (or updated) by a depth-first
 * <b>compilation traversal</b> of the nodes within a {@link SceneJS.Scene}.</b>
 *
 * <h2>Rendering Pipeline</h2>
 *
 * <p>Conceptually, a Display implements a pipeline with the following stages:</p>
 *
 * <ol>
 * <li>Create or update {@link SceneJS_Object}s during scene compilation</li>
 * <li>Organise the {@link SceneJS_Object} into an <b>object list</b></li>
 * <li>Determine the GL state sort order for the object list</li>
 * <li>State sort the object list</li>
 * <li>Create a <b>draw list</b> containing {@link SceneJS_Chunk}s belonging to the {@link SceneJS_Object}s in the object list</li>
 * <li>Render the draw list to draw the image</li>
 * </ol>
 *
 * <p>An update to the scene causes the pipeline to be re-executed from one of these stages, and SceneJS is designed
 * so that the pipeline is always re-executed from the latest stage possible to avoid redoing work.</p>
 *
 * <p>For example:</p>
 *
 * <ul>
 * <li>when an object is created or updated, we need to (re)do stages 2, 3, 4, 5 and 6</li>
 * <li>when an object is made invisible, we need to redo stages 5 and 6</li>
 * <li>when an object is assigned to a different scene render layer (works like a render bin), we need to redo
 *   stages 3, 4, 5, and 6</li>
 *<li>when the colour of an object changes, or maybe when the viewpoint changes, we simplt redo stage 6</li>
 * </ul>
 *
 * <h2>Object Creation</h2>
 * <p>The object soup (stage 1) is constructed by a depth-first traversal of the scene graph, which we think of as
 * "compiling" the scene graph into the Display. As traversal visits each scene node, the node's state core is
 * set on the Display (such as {@link #flags}, {@link #layer}, {@link #renderer} etc), which we think of as the
 * cores that are active at that instant during compilation. Each of the scene's leaf nodes is always
 * a {@link SceneJS.Geometry}, and when traversal visits one of those it calls {@link #buildObject} to create an
 * object in the soup. For each of the currently active cores, the object is given a {@link SceneJS_Chunk}
 * containing the WebGL calls for rendering it.</p>
 *
 * <p>The object also gets a shader (implemented by {@link SceneJS_Program}), taylored to render those state cores.</p>
 *
 * <p>Limited re-compilation may also be done on portions of a scene that have been added or sufficiently modified. When
 * traversal visits a {@link SceneJS.Geometry} for which an object already exists in the display, {@link #buildObject}
 * may update the {@link SceneJS_Chunk}s on the object as required for any changes in the core soup since the
 * last time the object was built. If differences among the cores require it, then {@link #buildObject} may also replace
 * the object's {@link SceneJS_Program} in order to render the new core soup configuration.</p>
 *
 * <p>So in summary, to each {@link SceneJS_Object} it builds, {@link #buildObject} creates a list of
 * {@link SceneJS_Chunk}s to render the set of node state cores that are currently set on the {@link SceneJS_Display}.
 * When {@link #buildObject} is re-building an existing object, it may replace one or more {@link SceneJS_Chunk}s
 * for state cores that have changed from the last time the object was built or re-built.</p>

 * <h2>Object Destruction</h2>
 * <p>Destruction of a scene graph branch simply involves a call to {@link #removeObject} for each {@link SceneJS.Geometry}
 * in the branch.</p>
 *
 * <h2>Draw List</h2>
 * <p>The draw list is actually comprised of three lists of state chunks: a "pick" list to render a pick buffer
 * for colour-indexed GPU picking, along with an "opaque" list and "transparent" list for normal image rendering.
 * For normal rendering the opaque list is rendered, then blending is enabled and the transparent list is rendered.
 * The chunks in these lists are held in the state-sorted order of their objects in #_objectList, with runs of
 * duplicate states removed, as mentioned.</p>
 *
 * <p>After a scene update, we set a flag on the display to indicate the stage we will need to redo from. The pipeline is
 * then lazy-redone on the next call to #render or #pick.</p>
 */
var SceneJS_Display = function (cfg) {

    /* Display is bound to the lifetime of an HTML5 canvas
     */
    this._canvas = cfg.canvas;

    /* Factory which creates and recycles {@link SceneJS_Program} instances
     */
    this._programFactory = new SceneJS_ProgramFactory({
        canvas:cfg.canvas
    });

    /* Factory which creates and recycles {@link SceneJS.Chunk} instances
     */
    this._chunkFactory = new SceneJS_ChunkFactory();

    /**
     * Node state core for the last {@link SceneJS.Enable} visited during scene graph compilation traversal
     * @type Object
     */
    this.enable = null;

    /**
     * Node state core for the last {@link SceneJS.Flags} visited during scene graph compilation traversal
     * @type Object
     */
    this.flags = null;

    /**
     * Node state core for the last {@link SceneJS.Layer} visited during scene graph compilation traversal
     * @type Object
     */
    this.layer = null;

    /**
     * Node state core for the last {@link SceneJS.Renderer} visited during scene graph compilation traversal
     * @type Object
     */
    this.renderer = null;

    /**
     * Node state core for the last {@link SceneJS.DepthBuf} visited during scene graph compilation traversal
     * @type Object
     */
    this.depthbuf = null;

    /**
     * Node state core for the last {@link SceneJS.ColorBuf} visited during scene graph compilation traversal
     * @type Object
     */
    this.colorbuf = null;

    /**
     * Node state core for the last {@link SceneJS.View} visited during scene graph compilation traversal
     * @type Object
     */
    this.view = null;

    /**
     * Node state core for the last {@link SceneJS.Lights} visited during scene graph compilation traversal
     * @type Object
     */
    this.lights = null;

    /**
     * Node state core for the last {@link SceneJS.Material} visited during scene graph compilation traversal
     * @type Object
     */
    this.material = null;

    /**
     * Node state core for the last {@link SceneJS.Texture} visited during scene graph compilation traversal
     * @type Object
     */
    this.texture = null;

    /**
     * Node state core for the last {@link SceneJS.XForm} visited during scene graph compilation traversal
     * @type Object
     */
    this.modelTransform = null;

    /**
     * Node state core for the last {@link SceneJS.LookAt} visited during scene graph compilation traversal
     * @type Object
     */
    this.viewTransform = null;

    /**
     * Node state core for the last {@link SceneJS.Camera} visited during scene graph compilation traversal
     * @type Object
     */
    this.projTransform = null;

    /**
     * Node state core for the last {@link SceneJS.Framebuf} visited during scene graph compilation traversal
     * @type Object
     */
    this.framebuf = null;

    /**
     * Node state core for the last {@link SceneJS.Clips} visited during scene graph compilation traversal
     * @type Object
     */
    this.clips = null;

    /**
     * Node state core for the last {@link SceneJS.MorphGeometry} visited during scene graph compilation traversal
     * @type Object
     */
    this.morphGeometry = null;

    /**
     * Node state core for the last {@link SceneJS.Name} visited during scene graph compilation traversal
     * @type Object
     */
    this.name = null;

    /**
     * Node state core for the last {@link SceneJS.Tag} visited during scene graph compilation traversal
     * @type Object
     */
    this.tag = null;

    /**
     * Node state core for the last render {@link SceneJS.Node} listener encountered during scene graph compilation traversal
     * @type Object
     */
    this.renderListeners = null;

    /**
     * Node state core for the last {@link SceneJS.Shader} visited during scene graph compilation traversal
     * @type Object
     */
    this.shader = null;

    /**
     * Node state core for the last {@link SceneJS.ShaderParams} visited during scene graph compilation traversal
     * @type Object
     */
    this.shaderParams = null;

    /**
     * Node state core for the last {@link SceneJS.Style} visited during scene graph compilation traversal
     * @type Object
     */
    this.style = null;

    /**
     * Node state core for the last {@link SceneJS.Geometry} visited during scene graph compilation traversal
     * @type Object
     */
    this.geometry = null;

    /* Factory which creates and recycles {@link SceneJS_Object} instances
     */
    this._objectFactory = new SceneJS_ObjectFactory();

    /**
     * The objects in the display
     */
    this._objects = {};

    /**
     * Ambient color, which must be given to gl.clearColor before draw list iteration
     */
    this._ambientColor = [0, 0, 0];

    /**
     * The object list, containing all elements of #_objects, kept in GL state-sorted order
     */
    this._objectList = [];
    this._objectListLen = 0;

    /* The "draw list", comprised collectively of three lists of state chunks belong to visible objects
     * within #_objectList: a "pick" list to render a pick buffer for colour-indexed GPU picking, along with an
     * "opaque" list and "transparent" list for normal image rendering. For normal rendering the opaque list is
     * rendered, then blending is enabled and the transparent list is rendered. The chunks in these lists
     * are held in the state-sorted order of their objects in #_objectList, with runs of duplicate states removed.
     */
    this._opaqueDrawList = [];         // State chunk list to render opaque objects
    this._opaqueDrawListLen = 0;

    this._transparentDrawList = [];    // State chunk list to render transparent objects
    this._transparentDrawListLen = 0;

    this._pickDrawList = [];           // State chunk list to render scene to pick buffer
    this._pickDrawListLen = 0;

    /* The frame context holds state shared across a single render of the draw list, along with any results of
     * the render, such as pick hits
     */
    this._frameCtx = {
        pickNames:[], // Pick names of objects hit during pick render
        canvas:this._canvas            // The canvas
    };

    /* The frame context has this facade which is given to scene node "rendered" listeners
     * to allow application code to access things like transform matrices from within those listeners.
     */
    this._frameCtx.renderListenerCtx = new SceneJS.RenderContext(this._frameCtx);

    /*-------------------------------------------------------------------------------------
     * Flags which schedule what the display is to do when #render is next called.
     *------------------------------------------------------------------------------------*/

    /**
     * Flags the object list as needing to be rebuilt from existing objects on the next call to {@link #render} or {@link #pick}.
     * Setting this will cause the rendering pipeline to be executed from stage #2 (see class comment),
     * causing object list rebuild, state order determination, state sort, draw list construction and image render.
     * @type Boolean
     */
    this.objectListDirty = true;

    /**
     * Flags the object list as needing state orders to be computed on the next call to {@link #render} or {@link #pick}.
     * Setting this will cause the rendering pipeline to be executed from stage #3 (see class comment),
     * causing state order determination, state sort, draw list construction and image render.
     * @type Boolean
     */
    this.stateOrderDirty = true;

    /**
     * Flags the object list as needing to be state sorted on the next call to {@link #render} or {@link #pick}.
     * Setting this will cause the rendering pipeline to be executed from stage #4 (see class comment),
     * causing state sort, draw list construction and image render.
     * @type Boolean
     */
    this.stateSortDirty = true;

    /**
     * Flags the draw list as needing to be rebuilt from the object list on the next call to {@link #render} or {@link #pick}.
     * Setting this will cause the rendering pipeline to be executed from stage #5 (see class comment),
     * causing draw list construction and image render.
     * @type Boolean
     */
    this.drawListDirty = true;

    /**
     * Flags the image as needing to be redrawn from the draw list on the next call to {@link #render} or {@link #pick}.
     * Setting this will cause the rendering pipeline to be executed from stage #6 (see class comment),
     * causing the image render.
     * @type Boolean
     */
    this.imageDirty = true;

    /**
     * Flags the neccessity for the image buffer to be re-rendered from the draw list.
     * @type Boolean
     */
    this.pickBufDirty = true;           // Redraw pick buffer
    this.rayPickBufDirty = true;        // Redraw raypick buffer
};

/**
 * Reallocates WebGL resources for objects within this display
 */
SceneJS_Display.prototype.webglRestored = function () {

    this._programFactory.webglRestored();// Reallocate programs

    this._chunkFactory.webglRestored(); // Recache shader var locations

    var gl = this._canvas.gl;

    if (this.pickBuf) {
        this.pickBuf.webglRestored(gl);          // Rebuild pick buffers
    }

    if (this.rayPickBuf) {
        this.rayPickBuf.webglRestored(gl);
    }

    this.imageDirty = true;             // Need redraw
};

/**
 * Internally creates (or updates) a {@link SceneJS_Object} of the given ID from whatever node state cores are currently set
 * on this {@link SceneJS_Display}. The object is created if it does not already exist in the display, otherwise it is
 * updated with the current state cores, possibly replacing cores already referenced by the object.
 *
 * @param {String} objectId ID of object to create or update
 */
SceneJS_Display.prototype.buildObject = function (objectId) {

    var object = this._objects[objectId];

    if (!object) { // Create object

        object = this._objects[objectId] = this._objectFactory.getObject(objectId);

        this.objectListDirty = true;
    }

    object.layer = this.layer;
    object.texture = this.texture;
    object.geometry = this.geometry;
    object.enable = this.enable;
    object.flags = this.flags;
    object.tag = this.tag;

    //if (!object.hash) {

    var hash = ([                   // Build current state hash
        this.geometry.hash,
        this.shader.hash,
        this.clips.hash,
        this.morphGeometry.hash,
        this.texture.hash,
        this.lights.hash

    ]).join(";");

    if (!object.program || hash != object.hash) {

        /* Get new program for object if no program or hash mismatch
         */

        if (object.program) {
            this._programFactory.putProgram(object.program);
        }

        object.program = this._programFactory.getProgram(hash, this);
        object.hash = hash;
    }
    //}

    /* Build draw chunks for object
     */
    this._setChunk(object, 0, "program");          // Must be first
    this._setChunk(object, 1, "xform", this.modelTransform);
    this._setChunk(object, 2, "lookAt", this.viewTransform);
    this._setChunk(object, 3, "camera", this.projTransform);
    this._setChunk(object, 4, "flags", this.flags);
    this._setChunk(object, 5, "shader", this.shader);
    this._setChunk(object, 6, "shaderParams", this.shaderParams);
    this._setChunk(object, 7, "style", this.style);
    this._setChunk(object, 8, "depthbuf", this.depthbuf);
    this._setChunk(object, 9, "colorbuf", this.colorbuf);
    this._setChunk(object, 10, "view", this.view);
    this._setChunk(object, 11, "name", this.name);
    this._setChunk(object, 12, "lights", this.lights);
    this._setChunk(object, 13, "material", this.material);
    this._setChunk(object, 14, "texture", this.texture);
    this._setChunk(object, 15, "framebuf", this.framebuf);
    this._setChunk(object, 16, "clips", this.clips);
    this._setChunk(object, 17, "morphGeometry", this.morphGeometry);
    this._setChunk(object, 18, "listeners", this.renderListeners);      // Must be after the above chunks
    this._setChunk(object, 19, "geometry", this.geometry); // Must be last
};

SceneJS_Display.prototype._setChunk = function (object, order, chunkType, core, unique) {

    var chunkId;
    var chunkClass = this._chunkFactory.chunkTypes[chunkType];

    if (chunkClass.unique) {

        // Suppress run culling for this core type
        chunkId = core.stateId + 1;

    } else if (core) {

        // Core supplied
        if (core.empty) { // Only set default cores for state types that have them

            var oldChunk = object.chunks[order];

            if (oldChunk) {
                this._chunkFactory.putChunk(oldChunk); // Release previous chunk to pool
            }

            object.chunks[order] = null;

            return;
        }

        chunkId = chunkClass.programGlobal
            ? core.stateId + 1
            : ((object.program.id + 1) * 50000) + core.stateId + 1;

    } else {

        // No core supplied, probably a program.
        // Only one chunk of this type per program.
        chunkId = ((object.program.id + 1) * 50000);
    }

    var oldChunk = object.chunks[order];

    if (oldChunk) {

        if (oldChunk.id == chunkId) { // Avoid needless chunk reattachment
            return;
        }

        this._chunkFactory.putChunk(oldChunk); // Release previous chunk to pool
    }

    object.chunks[order] = this._chunkFactory.getChunk(chunkId, chunkType, object.program, core); // Attach new chunk

    // Ambient light is global across everything in display, and
    // can never be disabled, so grab it now because we want to
    // feed it to gl.clearColor before each display list render
    if (chunkType == "lights") {
        this._setAmbient(core);
    }
};

SceneJS_Display.prototype._setAmbient = function (core) {
    var lights = core.lights;
    var light;
    for (var i = 0, len = lights.length; i < len; i++) {
        light = lights[i];
        if (light.mode == "ambient") {
            this._ambientColor = light.color;
        }
    }
};

/**
 * Removes an object from this display
 *
 * @param {String} objectId ID of object to remove
 */
SceneJS_Display.prototype.removeObject = function (objectId) {

    var object = this._objects[objectId];

    if (!object) {
        return;
    }

    this._programFactory.putProgram(object.program);

    object.program = null;
    object.hash = null;

    this._objectFactory.putObject(object);

    delete this._objects[objectId];

    this.objectListDirty = true;
};

/**
 * Set a tag selector to selectively activate objects that have matching SceneJS.Tag nodes
 */
SceneJS_Display.prototype.selectTags = function (tagSelector) {
    this._tagSelector = tagSelector;
    this.drawListDirty = true;
};

/**
 * Render this display. What actually happens in the method depends on what flags are set.
 */
SceneJS_Display.prototype.render = function (params) {

    params = params || {};

    if (this.objectListDirty) {

        this._buildObjectList();          // Build object render bin

        this.objectListDirty = false;
        this.stateOrderDirty = true;        // Now needs state ordering
    }

    if (this.stateOrderDirty) {

        this._makeStateSortKeys();       // Compute state sort order

        this.stateOrderDirty = false;
        this.stateSortDirty = true;     // Now needs state sorting
    }

    if (this.stateSortDirty) {

        this._stateSort();              // State sort the object render bin

        this.stateSortDirty = false;
        this.drawListDirty = true;      // Now needs new visible object bin
    }

    if (this.drawListDirty) {           // Render visible list while building transparent list

        this._buildDrawList();

        this.imageDirty = true;
    }

    if (this.imageDirty || params.force) {

        this._doDrawList(false);        // Render, no pick

        this.imageDirty = false;
        this.pickBufDirty = true;       // Pick buff will now need rendering on next pick
    }
};

SceneJS_Display.prototype._buildObjectList = function () {
    this._objectListLen = 0;
    for (var objectId in this._objects) {
        if (this._objects.hasOwnProperty(objectId)) {
            this._objectList[this._objectListLen++] = this._objects[objectId];
        }
    }
};

SceneJS_Display.prototype._makeStateSortKeys = function () { // TODO: state sort for sound objects?
    var object;
    for (var i = 0, len = this._objectListLen; i < len; i++) {
        object = this._objectList[i];
        object.sortKey = object.program
            ? (((object.layer.priority + 1) * 100000000)
            + ((object.program.id + 1) * 100000)
            + (object.texture.stateId * 1000))
            //    + i // Force stability among same-priority objects across multiple sorts
            : -1;   // Non-visual object (eg. sound)
    }
};

//SceneJS_Display.prototype._makeStateSortKeys = function () { // TODO: state sort for sound objects?
//    var object;
//    for (var i = 0, len = this._objectListLen; i < len; i++) {
//        object = this._objectList[i];
//        object.sortKey = object.program
//            ? (((object.layer.priority + 1) * 1000000000)
//            + ((object.program.id + 1) * 1000000)
//            + (object.texture.stateId * 10000)
//            + (object.geometry.stateId))
//            //    + i // Force stability among same-priority objects across multiple sorts
//            : -1;   // Non-visual object (eg. sound)
//    }
//};

SceneJS_Display.prototype._stateSort = function () {
    this._objectList.length = this._objectListLen;
    this._objectList.sort(this._stateSortObjects);
};

SceneJS_Display.prototype._stateSortObjects = function (a, b) {
    return a.sortKey - b.sortKey;
};

SceneJS_Display.prototype._buildDrawList = function () {

    this._lastStateId = this._lastStateId || [];
    this._lastPickStateId = this._lastPickStateId || [];

    for (var i = 0; i < 22; i++) {
        this._lastStateId[i] = null;
        this._lastPickStateId[i] = null;
    }

    this._opaqueDrawListLen = 0;
    this._pickDrawListLen = 0;
    this._transparentDrawListLen = 0;

    var object;
    var tagMask;
    var tagRegex;
    var tagCore;
    var flags;
    var chunks;
    var chunk;
    var transparent;
    var picking;

    if (this._tagSelector) {
        tagMask = this._tagSelector.mask;
        tagRegex = this._tagSelector.regex;
    }

    if (!this._xpBuf) {
        this._xpBuf = [];
    }
    this._xpBufLen = 0;

    for (var i = 0, len = this._objectListLen; i < len; i++) {

        object = this._objectList[i];

        // Cull invisible objects
        if (object.enable.enabled === false) {
            continue;
        }

        flags = object.flags;

        // Cull invisible objects
        if (flags.enabled === false) {
            continue;
        }

        if (!object.layer.enabled) { // Skip disabled layers
            continue;
        }

        if (tagMask) { // Skip unmatched tags. No tag matching in visible bin prevent this being done on every frame.

            tagCore = object.tag;

            if (tagCore.tag) {

                if (tagCore.mask != tagMask) { // Scene tag mask was updated since last render
                    tagCore.mask = tagMask;
                    tagCore.matches = tagRegex.test(tagCore.tag);
                }

                if (!tagCore.matches) {
                    continue;
                }
            }
        }

        transparent = flags.transparent;

        if (transparent) {
            this._xpBuf[this._xpBufLen++] = object;
        }

        /* Add object's chunks to appropriate chunk list
         */

        chunks = object.chunks;

        picking = flags.picking;

        for (var j = 0, lenj = chunks.length; j < lenj; j++) {

            chunk = chunks[j];

            if (chunk) {

                // As we apply the state chunk lists we track the ID of most types of chunk in order
                // to cull redundant re-applications of runs of the same chunk - except for those chunks with a
                // 'unique' flag. We don't want to cull runs of geometry chunks because they contain the GL
                // drawElements calls which render the objects.

                // Chunk IDs are only considered unique within the same program. Therefore, whenever we do a
                // program switch, we'll be applying all the different types of chunk again.

                if (!transparent && chunk.draw) {
                    if (chunk.unique || this._lastStateId[j] != chunk.id) {
                        this._opaqueDrawList[this._opaqueDrawListLen++] = chunk;
                        this._lastStateId[j] = chunk.id;
                    }
                }

                if (chunk.pick) { // Transparent objects are pickable
                    if (picking) { // Don't pick unpickable objects
                        if (chunk.unique || this._lastPickStateId[j] != chunk.id) {
                            this._pickDrawList[this._pickDrawListLen++] = chunk;
                            this._lastPickStateId[j] = chunk.id;
                        }
                    }
                }
            }
        }
    }

    if (this._xpBufLen > 0) {

        for (var i = 0; i < 22; i++) {  // TODO: magic number!
            this._lastStateId[i] = null;
        }

        for (var i = 0; i < this._xpBufLen; i++) {

            object = this._xpBuf[i];
            chunks = object.chunks;

            for (var j = 0, lenj = chunks.length; j < lenj; j++) {

                chunk = chunks[j];

                if (chunk && chunk.draw) {

                    if (chunk.unique || this._lastStateId[j] != chunk.id) {
                        this._transparentDrawList[this._transparentDrawListLen++] = chunk;
                        this._lastStateId[j] = chunk.id;
                    }
                }
            }
        }
    }

    this.drawListDirty = false;
};

SceneJS_Display.prototype.pick = function (params) {

    //  return null;

    var canvas = this._canvas.canvas;

    var hit = null;

    var canvasX = params.canvasX;
    var canvasY = params.canvasY;

    /*-------------------------------------------------------------
     * Pick object using normal GPU colour-indexed pick
     *-----------------------------------------------------------*/

    var pickBuf = this.pickBuf;                                                   // Lazy-create pick buffer

    if (!pickBuf) {
        pickBuf = this.pickBuf = new SceneJS_PickBuffer({ canvas:this._canvas });
        this.pickBufDirty = true;                                                 // Freshly-created pick buffer is dirty
    }

    this.render(); // Do any pending visible render

    pickBuf.bind();                                                                 // Bind pick buffer

    if (this.pickBufDirty) {                          // Render pick buffer

        pickBuf.clear();

        this._doDrawList(true);

        this._canvas.gl.finish();

        this.pickBufDirty = false;                                                  // Pick buffer up to date
        this.rayPickBufDirty = true;                                                // Ray pick buffer now dirty
    }

    var pix = pickBuf.read(canvasX, canvasY);                                       // Read pick buffer
    var pickedObjectIndex = pix[0] + pix[1] * 256 + pix[2] * 65536;
    var pickIndex = (pickedObjectIndex >= 1) ? pickedObjectIndex - 1 : -1;

    pickBuf.unbind();                                                               // Unbind pick buffer

    var pickName = this._frameCtx.pickNames[pickIndex];                                   // Map pixel to name

    if (pickName) {

        hit = {
            name:pickName.name,
            path:pickName.path,
            nodeId:pickName.nodeId,
            canvasPos:[canvasX, canvasY]
        };

        if (params.rayPick) { // Ray pick to find position

            var rayPickBuf = this.rayPickBuf; // Lazy-create Z-pick buffer
            if (!rayPickBuf) {
                rayPickBuf = this.rayPickBuf = new SceneJS_PickBuffer({ canvas:this._canvas });
            }

            rayPickBuf.bind();

            if (this.rayPickBufDirty) {

                rayPickBuf.clear();

                this._doDrawList(true, true); // pick, rayPick

                this.rayPickBufDirty = false;
            }

            pix = rayPickBuf.read(canvasX, canvasY);

            rayPickBuf.unbind();

            /* Read normalised device Z coordinate, which will be
             * in range of [0..1] with z=0 at front
             */
            var screenZ = this._unpackDepth(pix);

            var w = canvas.width;
            var h = canvas.height;

            /* Calculate clip space coordinates, which will be in range
             * of x=[-1..1] and y=[-1..1], with y=(+1) at top
             */
            var x = (canvasX - w / 2) / (w / 2);           // Calculate clip space coordinates
            var y = -(canvasY - h / 2) / (h / 2);

            var projMat = this._frameCtx.cameraMat;
            var viewMat = this._frameCtx.viewMat;

            var pvMat = SceneJS_math_mulMat4(projMat, viewMat, []);
            var pvMatInverse = SceneJS_math_inverseMat4(pvMat, []);

            var world1 = SceneJS_math_transformVector4(pvMatInverse, [x, y, -1, 1]);
            world1 = SceneJS_math_mulVec4Scalar(world1, 1 / world1[3]);

            var world2 = SceneJS_math_transformVector4(pvMatInverse, [x, y, 1, 1]);
            world2 = SceneJS_math_mulVec4Scalar(world2, 1 / world2[3]);

            var dir = SceneJS_math_subVec3(world2, world1, []);

            var vWorld = SceneJS_math_addVec3(world1, SceneJS_math_mulVec4Scalar(dir, screenZ, []), []);

            hit.worldPos = vWorld;
        }
    }

    return hit;
};

SceneJS_Display.prototype._unpackDepth = function (depthZ) {
    var vec = [depthZ[0] / 256.0, depthZ[1] / 256.0, depthZ[2] / 256.0, depthZ[3] / 256.0];
    var bitShift = [1.0 / (256.0 * 256.0 * 256.0), 1.0 / (256.0 * 256.0), 1.0 / 256.0, 1.0];
    return SceneJS_math_dotVector4(vec, bitShift);
};

SceneJS_Display.prototype._doDrawList = function (pick, rayPick) {

    var frameCtx = this._frameCtx;                                                // Reset rendering context

    var gl = this._canvas.gl;

    frameCtx.program = null;
    frameCtx.framebuf = null;
    frameCtx.viewMat = null;
    frameCtx.modelMat = null;
    frameCtx.cameraMat = null;
    frameCtx.renderer = null;

    frameCtx.depthbufEnabled = null;
    frameCtx.clearDepth = null;
    frameCtx.depthFunc = gl.LESS;

    frameCtx.scissorTestEnabled = false;

    frameCtx.blendEnabled = false;

    frameCtx.vertexBuf = false;
    frameCtx.normalBuf = false;
    frameCtx.uvBuf = false;
    frameCtx.uvBuf2 = false;
    frameCtx.colorBuf = false;
    frameCtx.backfaces = true;
    frameCtx.frontface = "ccw";
    frameCtx.pick = !!pick;

    frameCtx.lineWidth = 1;

    frameCtx.transparencyPass = false;

    gl.viewport(0, 0, this._canvas.canvas.width, this._canvas.canvas.height);
    gl.clearColor(this._ambientColor[0], this._ambientColor[1], this._ambientColor[2], 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
    gl.frontFace(gl.CCW);
    gl.disable(gl.CULL_FACE);

    if (pick) { // Pick

        frameCtx.pickIndex = 0;
        frameCtx.rayPick = !!rayPick;

        for (var i = 0, len = this._pickDrawListLen; i < len; i++) {        // Push picking chunks
            this._pickDrawList[i].pick(frameCtx);
        }

    } else { // Draw

        for (var i = 0, len = this._opaqueDrawListLen; i < len; i++) {      // Push opaque rendering chunks
            this._opaqueDrawList[i].draw(frameCtx);
        }

        if (this._transparentDrawListLen > 0) {

            // Disables some types of state changes during
            // transparency pass, such as blending disable
            frameCtx.transparencyPass = true;

            //  Enable blending
            gl.enable(gl.BLEND);
            frameCtx.blendEnabled = true;

            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

            for (var i = 0, len = this._transparentDrawListLen; i < len; i++) { // Push transparent rendering chunks
                this._transparentDrawList[i].draw(frameCtx);
            }

            //  Disable blending
            gl.disable(gl.BLEND);
            frameCtx.blendEnabled = false;

            frameCtx.transparencyPass = false;
        }
    }

    gl.flush();                                                         // Flush GL

    if (frameCtx.program) {                                                  // Unbind remaining program
        //frameCtx.program.unbind();
    }

    if (frameCtx.framebuf) {                                                 // Unbind remaining frame buffer
        gl.finish();
        // frameCtx.framebuf.unbind();
    }

    if (frameCtx.renderer) {                           // Forget last call-time renderer properties
        //     frameCtx.renderer.props.restoreProps(gl);
    }
};

SceneJS_Display.prototype.destroy = function () {
    this._programFactory.destroy();
};

/**
 * @class Manages creation, sharing and recycle of {@link SceneJS_ProgramSource} instances
 * @private
 */
var SceneJS_ProgramSourceFactory = new (function () {

    this._sourceCache = {}; // Source codes are shared across all scenes


    /**
     * Get sourcecode for a program to render the given states
     */
    this.getSource = function (hash, states) {

        var source = this._sourceCache[hash];
        if (source) {
            source.useCount++;
            return source;
        }

        return this._sourceCache[hash] = new SceneJS_ProgramSource(

            hash,

            this._composePickingVertexShader(states), // pickVertexSrc
            this._composePickingFragmentShader(states), // pickFragmentSrc
            this._composeRenderingVertexShader(states), // drawVertexSrc
            this._composeRenderingFragmentShader(states)  // drawfragmentSrc
        );
    };

    /**
     * Releases program source code
     */
    this.putSource = function (hash) {
        var source = this._sourceCache[hash];
        if (source) {
            if (--source.useCount == 0) {
                this._sourceCache[source.hash] = null;
            }
        }
    };

    this._composePickingVertexShader = function (states) {

        var customShaders = states.shader.shaders || {};

        var customVertexShader = customShaders.vertex || {};
        var vertexHooks = customVertexShader.hooks || {};

        var customFragmentShader = customShaders.fragment || {};
        var fragmentHooks = customFragmentShader.hooks || {};

        var clipping = states.clips.clips.length > 0;
        var morphing = !!states.morphGeometry.targets;
        var normals = this._hasNormals(states);

        var src = [
            "precision mediump float;",
            "attribute vec3 SCENEJS_aVertex;",
            "uniform mat4 SCENEJS_uMMatrix;",
            "uniform mat4 SCENEJS_uMNMatrix;",
            "uniform mat4 SCENEJS_uVMatrix;",
            "uniform mat4 SCENEJS_uVNMatrix;",
            "uniform mat4 SCENEJS_uPMatrix;"
        ];

        if (normals) {
            src.push("attribute vec3 SCENEJS_aNormal;");
        }

        if (normals && (fragmentHooks.worldNormal || fragmentHooks.viewNormal)) {
            src.push("varying   vec3 SCENEJS_vWorldNormal;");   // Output world-space vertex normal
            src.push("varying   vec3 SCENEJS_vViewNormal;");   // Output world-space vertex normal
        }

        // if (clipping || fragmentHooks.worldPosClip) {
        src.push("varying vec4 SCENEJS_vWorldVertex;");
        // }


        src.push("varying vec4 SCENEJS_vViewVertex;\n");
        src.push("varying vec4 SCENEJS_vProjVertex;\n");

        src.push("uniform vec3 SCENEJS_uWorldEye;");                     // World-space eye position
        src.push("varying vec3 SCENEJS_vWorldEyeVec;");

        if (customVertexShader.code) {
            src.push("\n" + customVertexShader.code + "\n");
        }

        if (morphing) {
            src.push("uniform float SCENEJS_uMorphFactor;");       // LERP factor for morph
            if (states.morphGeometry.targets[0].vertexBuf) {      // target2 has these arrays also
                src.push("attribute vec3 SCENEJS_aMorphVertex;");
            }
        }

        src.push("void main(void) {");
        src.push("   vec4 tmpVertex=vec4(SCENEJS_aVertex, 1.0); ");

        if (normals) {
            src.push("  vec4 modelNormal = vec4(SCENEJS_aNormal, 0.0); ");
        }

        if (vertexHooks.modelPos) {
            src.push("tmpVertex=" + vertexHooks.modelPos + "(tmpVertex);");
        }

        if (morphing) {
            if (states.morphGeometry.targets[0].vertexBuf) {
                src.push("  vec4 vMorphVertex = vec4(SCENEJS_aMorphVertex, 1.0); ");

                if (vertexHooks.modelPos) {
                    src.push("vMorphVertex=" + vertexHooks.modelPos + "(vMorphVertex);");
                }

                src.push("  tmpVertex = vec4(mix(tmpVertex.xyz, vMorphVertex.xyz, SCENEJS_uMorphFactor), 1.0); ");
            }
        }


        src.push("  tmpVertex = SCENEJS_uMMatrix * tmpVertex; ");

        if (vertexHooks.worldPos) {
            src.push("tmpVertex=" + vertexHooks.worldPos + "(tmpVertex);");
        }

        // if (clipping || fragmentHooks.worldPosClip) {
        src.push("  SCENEJS_vWorldVertex = tmpVertex; ");
        //    }

        src.push("SCENEJS_vWorldEyeVec = normalize(SCENEJS_uWorldEye - tmpVertex.xyz);");

        src.push("  tmpVertex = SCENEJS_uVMatrix * tmpVertex; ");

        if (vertexHooks.viewPos) {
            src.push("tmpVertex=" + vertexHooks.viewPos + "(tmpVertex);");
        }

        src.push("  SCENEJS_vViewVertex = tmpVertex;");

        if (normals && (fragmentHooks.worldNormal || fragmentHooks.viewNormal)) {
            src.push("  vec3 worldNormal = normalize((SCENEJS_uMNMatrix * modelNormal).xyz); ");
            src.push("  SCENEJS_vWorldNormal = worldNormal;");
            src.push("  SCENEJS_vViewNormal = (SCENEJS_uVNMatrix * vec4(worldNormal, 1.0)).xyz;");
        }

        src.push("  SCENEJS_vProjVertex = SCENEJS_uPMatrix * tmpVertex;");


        src.push("  gl_Position = SCENEJS_vProjVertex;");
        src.push("}");

        if (false && debugCfg.logScripts == true) {
            SceneJS.log.info(src);
        }
        return src;
    };

    /**
     * Composes a fragment shader script for rendering mode in current scene state
     * @private
     */
    this._composePickingFragmentShader = function (states) {

        var customShaders = states.shader.shaders || {};
        var customFragmentShader = customShaders.fragment || {};
        var fragmentHooks = customFragmentShader.hooks || {};

        var clipping = states.clips.clips.length > 0;

        var normals = this._hasNormals(states);

        var src = [
            "precision mediump float;"
        ];

        src.push("vec4 packDepth(const in float depth) {");
        src.push("  const vec4 bitShift = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);");
        src.push("  const vec4 bitMask  = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);");
        src.push("  vec4 res = fract(depth * bitShift);");
        src.push("  res -= res.xxyz * bitMask;");
        src.push("  return res;");
        src.push("}");


        src.push("varying vec4 SCENEJS_vWorldVertex;");
        src.push("varying vec4 SCENEJS_vViewVertex;");                  // View-space vertex
        src.push("varying vec4 SCENEJS_vProjVertex;");

        src.push("uniform bool SCENEJS_uRayPickMode;");                   // Z-pick mode when true else colour-pick

        src.push("uniform vec3 SCENEJS_uPickColor;");                   // Used in colour-pick mode

        src.push("uniform float SCENEJS_uZNear;");                      // Used in Z-pick mode
        src.push("uniform float SCENEJS_uZFar;");                       // Used in Z-pick mode

        src.push("varying vec3 SCENEJS_vWorldEyeVec;");                          // Direction of view-space vertex from eye

        src.push("uniform bool  SCENEJS_uClipping;");

        if (normals && (fragmentHooks.worldNormal || fragmentHooks.viewNormal)) {

            src.push("varying vec3 SCENEJS_vWorldNormal;");                  // World-space normal
            src.push("varying vec3 SCENEJS_vViewNormal;");                   // View-space normal
        }
        /*-----------------------------------------------------------------------------------
         * Variables - Clipping
         *----------------------------------------------------------------------------------*/

        if (clipping) {
            for (var i = 0; i < states.clips.clips.length; i++) {
                src.push("uniform float SCENEJS_uClipMode" + i + ";");
                src.push("uniform vec4  SCENEJS_uClipNormalAndDist" + i + ";");
            }
        }

        /*-----------------------------------------------------------------------------------
         * Custom GLSL
         *----------------------------------------------------------------------------------*/

        if (customFragmentShader.code) {
            src.push("\n" + customFragmentShader.code + "\n");
        }

        src.push("void main(void) {");

        if (fragmentHooks.worldPosClip) {
            src.push("if (" + fragmentHooks.worldPosClip + "(SCENEJS_vWorldVertex) == false) { discard; };");
        }
        if (fragmentHooks.viewPosClip) {
            src.push("if (!" + fragmentHooks.viewPosClip + "(SCENEJS_vViewVertex) == false) { discard; };");
        }

        if (clipping) {
            src.push("if (SCENEJS_uClipping) {");
            src.push("  float   dist;");
            for (var i = 0; i < states.clips.clips.length; i++) {
                src.push("    if (SCENEJS_uClipMode" + i + " != 0.0) {");
                src.push("        dist = dot(SCENEJS_vWorldVertex.xyz, SCENEJS_uClipNormalAndDist" + i + ".xyz) - SCENEJS_uClipNormalAndDist" + i + ".w;");
                src.push("        if (SCENEJS_uClipMode" + i + " == 1.0) {");
                src.push("            if (dist > 0.0) { discard; }");
                src.push("        }");
                src.push("        if (SCENEJS_uClipMode" + i + " == 2.0) {");
                src.push("            if (dist > 0.0) { discard; }");
                src.push("        }");
                src.push("    }");
            }
            src.push("}");
        }

        if (fragmentHooks.worldPos) {
            src.push(fragmentHooks.worldPos + "(SCENEJS_vWorldVertex);");
        }

        if (fragmentHooks.viewPos) {
            src.push(fragmentHooks.viewPos + "(SCENEJS_vViewVertex);");
        }

        if (fragmentHooks.worldEyeVec) {
            src.push(fragmentHooks.worldEyeVec + "(SCENEJS_vWorldEyeVec);");
        }

        if (normals && fragmentHooks.worldNormal) {
            src.push(fragmentHooks.worldNormal + "(SCENEJS_vWorldNormal);");
        }

        if (normals && fragmentHooks.viewNormal) {
            src.push(fragmentHooks.viewNormal + "(SCENEJS_vViewNormal);");
        }

        src.push("    if (SCENEJS_uRayPickMode) {");
        src.push("          float zNormalizedDepth = abs((SCENEJS_uZNear + SCENEJS_vViewVertex.z) / (SCENEJS_uZFar - SCENEJS_uZNear));");
        src.push("          gl_FragColor = packDepth(zNormalizedDepth); ");

        src.push("    } else {");
        src.push("          gl_FragColor = vec4(SCENEJS_uPickColor.rgb, 1.0);  ");
        src.push("    }");
        src.push("}");


        if (false && debugCfg.logScripts == true) {
            SceneJS.log.info(src);
        }
        return src;
    };


    /*===================================================================================================================
     *
     * Rendering vertex shader
     *
     *==================================================================================================================*/

    this._isTexturing = function (states) {
        if (states.texture.layers && states.texture.layers.length > 0) {
            if (states.geometry.uvBuf || states.geometry.uvBuf2) {
                return true;
            }
            if (states.morphGeometry.targets && (states.morphGeometry.targets[0].uvBuf || states.morphGeometry.targets[0].uvBuf2)) {
                return true;
            }
        }
        return false;
    };

    this._hasNormals = function (states) {
        if (states.geometry.normalBuf) {
            return true;
        }
        if (states.morphGeometry.targets && states.morphGeometry.targets[0].normalBuf) {
            return true;
        }
        return false;
    };

    this._composeRenderingVertexShader = function (states) {

        var customShaders = states.shader.shaders || {};

        /* Do a full custom shader replacement if code supplied without hooks
         */
        if (customShaders.vertex && customShaders.vertex.code && !customShaders.vertex.hooks) {
            return customShaders.vertex.code;
        }

        var customVertexShader = customShaders.vertex || {};
        var vertexHooks = customVertexShader.hooks || {};

        var customFragmentShader = customShaders.fragment || {};
        var fragmentHooks = customFragmentShader.hooks || {};

        var texturing = this._isTexturing(states);
        var normals = this._hasNormals(states);
        var clipping = states.clips.clips.length > 0;
        var morphing = !!states.morphGeometry.targets;

        var src = [
            "precision mediump float;"
        ];

        src.push("attribute vec3 SCENEJS_aVertex;");                // Model coordinates

        src.push("uniform vec3 SCENEJS_uWorldEye;");                     // World-space eye position
        src.push("varying vec3 SCENEJS_vWorldEyeVec;");                  // Output world-space eye vector

        /*-----------------------------------------------------------------------------------
         * Variables - normals
         *----------------------------------------------------------------------------------*/

        if (normals) {

            src.push("attribute vec3 SCENEJS_aNormal;");        // Normal vectors
            src.push("uniform   mat4 SCENEJS_uMNMatrix;");      // Model normal matrix
            src.push("uniform   mat4 SCENEJS_uVNMatrix;");      // View normal matrix

            src.push("varying   vec3 SCENEJS_vWorldNormal;");   // Output world-space vertex normal
            src.push("varying   vec3 SCENEJS_vViewNormal;");    // Output view-space vertex normal

            for (var i = 0; i < states.lights.lights.length; i++) {
                var light = states.lights.lights[i];
                if (light.mode == "ambient") {
                    continue;
                }
                if (light.mode == "dir") {
                    src.push("uniform vec3 SCENEJS_uLightDir" + i + ";");
                }
                if (light.mode == "point") {
                    src.push("uniform vec3 SCENEJS_uLightPos" + i + ";");
                }
                if (light.mode == "spot") {
                    src.push("uniform vec3 SCENEJS_uLightPos" + i + ";");
                }

                /* Vector from vertex to light, packaged with the pre-computed length of that vector
                 */
                src.push("varying vec4 SCENEJS_vViewLightVecAndDist" + i + ";");    // varying for fragment lighting
            }
        }

        if (texturing) {
            if (states.geometry.uvBuf) {
                src.push("attribute vec2 SCENEJS_aUVCoord;");      // UV coords
            }
            if (states.geometry.uvBuf2) {
                src.push("attribute vec2 SCENEJS_aUVCoord2;");     // UV2 coords
            }
        }

        /* Vertex color variables
         */
        if (states.geometry.colorBuf) {
            src.push("attribute vec4 SCENEJS_aVertexColor;");       // UV2 coords
            src.push("varying vec4 SCENEJS_vColor;");               // Varying for fragment texturing
        }

        src.push("uniform mat4 SCENEJS_uMMatrix;");                 // Model matrix
        src.push("uniform mat4 SCENEJS_uVMatrix;");                 // View matrix
        src.push("uniform mat4 SCENEJS_uPMatrix;");                 // Projection matrix

        if (clipping || fragmentHooks.worldPos) {
            src.push("varying vec4 SCENEJS_vWorldVertex;");         // Varying for fragment clip or world pos hook
        }

        if (fragmentHooks.viewPos) {
            src.push("varying vec4 SCENEJS_vViewVertex;");          // Varying for fragment view clip hook
        }

        if (texturing) {                                            // Varyings for fragment texturing
            if (states.geometry.uvBuf) {
                src.push("varying vec2 SCENEJS_vUVCoord;");
            }
            if (states.geometry.uvBuf2) {
                src.push("varying vec2 SCENEJS_vUVCoord2;");
            }
        }

        /*-----------------------------------------------------------------------------------
         * Variables - Morphing
         *----------------------------------------------------------------------------------*/

        if (morphing) {
            src.push("uniform float SCENEJS_uMorphFactor;");       // LERP factor for morph
            if (states.morphGeometry.targets[0].vertexBuf) {      // target2 has these arrays also
                src.push("attribute vec3 SCENEJS_aMorphVertex;");
            }
            if (normals) {
                if (states.morphGeometry.targets[0].normalBuf) {
                    src.push("attribute vec3 SCENEJS_aMorphNormal;");
                }
            }
        }

        if (customVertexShader.code) {
            src.push("\n" + customVertexShader.code + "\n");
        }


        src.push("void main(void) {");
        src.push("vec4 tmpVertex=vec4(SCENEJS_aVertex, 1.0); ");

        if (vertexHooks.modelPos) {
            src.push("tmpVertex=" + vertexHooks.modelPos + "(tmpVertex);");
        }

        src.push("  vec4 modelVertex = tmpVertex; ");
        if (normals) {
            src.push("  vec4 modelNormal = vec4(SCENEJS_aNormal, 0.0); ");
        }

        /*
         * Morphing - morph targets are in same model space as the geometry
         */
        if (morphing) {
            if (states.morphGeometry.targets[0].vertexBuf) {
                src.push("  vec4 vMorphVertex = vec4(SCENEJS_aMorphVertex, 1.0); ");
                src.push("  modelVertex = vec4(mix(modelVertex.xyz, vMorphVertex.xyz, SCENEJS_uMorphFactor), 1.0); ");
            }
            if (normals) {
                if (states.morphGeometry.targets[0].normalBuf) {
                    src.push("  vec4 vMorphNormal = vec4(SCENEJS_aMorphNormal, 1.0); ");
                    src.push("  modelNormal = vec4( mix(modelNormal.xyz, vMorphNormal.xyz, SCENEJS_uMorphFactor), 1.0); ");
                }
            }
        }

        src.push("  vec4 worldVertex = SCENEJS_uMMatrix * modelVertex; ");

        if (vertexHooks.worldPos) {
            src.push("worldVertex=" + vertexHooks.worldPos + "(worldVertex);");
        }

        if (vertexHooks.viewMatrix) {
            src.push("vec4 viewVertex = " + vertexHooks.viewMatrix + "(SCENEJS_uVMatrix) * worldVertex;");
        } else {
            src.push("vec4 viewVertex  = SCENEJS_uVMatrix * worldVertex; ");
        }

        if (vertexHooks.viewPos) {
            src.push("viewVertex=" + vertexHooks.viewPos + "(viewVertex);");    // Vertex hook function
        }

        if (normals) {
            src.push("  vec3 worldNormal = normalize((SCENEJS_uMNMatrix * modelNormal).xyz); ");
            src.push("  SCENEJS_vWorldNormal = worldNormal;");
            src.push("  SCENEJS_vViewNormal = (SCENEJS_uVNMatrix * vec4(worldNormal, 1.0)).xyz;");
        }

        if (clipping || fragmentHooks.worldPos) {
            src.push("  SCENEJS_vWorldVertex = worldVertex;");                  // Varying for fragment world clip or hooks
        }

        if (fragmentHooks.viewPos) {
            src.push("  SCENEJS_vViewVertex = viewVertex;");                    // Varying for fragment hooks
        }

        if (vertexHooks.projMatrix) {
            src.push("gl_Position = " + vertexHooks.projMatrix + "(SCENEJS_uPMatrix) * viewVertex;");
        } else {
            src.push("  gl_Position = SCENEJS_uPMatrix * viewVertex;");
        }

        /*-----------------------------------------------------------------------------------
         * Logic - normals
         *
         * Transform the world-space lights into view space
         *----------------------------------------------------------------------------------*/

        src.push("  vec3 tmpVec3;");
        if (normals) {

            for (var i = 0; i < states.lights.lights.length; i++) {

                light = states.lights.lights[i];

                if (light.mode == "ambient") {
                    continue;
                }

                if (light.mode == "dir") {

                    /* Directional light
                     */
                    if (light.space == "world") {

                        /* World space light - transform vector to View space
                         */
                        src.push("SCENEJS_vViewLightVecAndDist" + i + " = vec4(-normalize((SCENEJS_uVMatrix * vec4(SCENEJS_uLightDir" + i + ", 0.0)).xyz), 0.0);");

                    } else {

                        /* View space light
                         */
                        src.push("SCENEJS_vViewLightVecAndDist" + i + " = vec4(-normalize(SCENEJS_uLightDir" + i + "), 0.0);");
                    }
                }

                if (light.mode == "point") {

                    /* Positional light
                     */
                    if (light.space == "world") {

                        /* World space light - transform position to View space
                         */
                        src.push("tmpVec3 = ((SCENEJS_uVMatrix * vec4(SCENEJS_uLightPos" + i + ", 1.0)).xyz - worldVertex.xyz);");
                        src.push("SCENEJS_vViewLightVecAndDist" + i + " = vec4(normalize(tmpVec3), length(tmpVec3));");

                    } else {

                        /* View space light
                         */
                        src.push("tmpVec3 = (SCENEJS_uLightPos" + i + ".xyz - worldVertex.xyz);");
                        src.push("SCENEJS_vViewLightVecAndDist" + i + " = vec4(normalize(tmpVec3), length(tmpVec3));");
                    }
                }
            }
        }

        src.push("SCENEJS_vWorldEyeVec = normalize(SCENEJS_uWorldEye - worldVertex.xyz);");

        if (texturing) {                                                        // varyings for fragment texturing
            if (states.geometry.uvBuf) {
                src.push("SCENEJS_vUVCoord = SCENEJS_aUVCoord;");
            }
            if (states.geometry.uvBuf2) {
                src.push("SCENEJS_vUVCoord2 = SCENEJS_aUVCoord2;");
            }
        }

        if (states.geometry.colorBuf) {
            src.push("SCENEJS_vColor = SCENEJS_aVertexColor;");                 // Varyings for fragment interpolated vertex coloring
        }
        src.push("}");


        if (false && debugCfg.logScripts === true) {
            SceneJS.log.info(src);
        }
        return src;
    };

    /*-----------------------------------------------------------------------------------------------------------------
     * Rendering Fragment shader
     *---------------------------------------------------------------------------------------------------------------*/

    this._composeRenderingFragmentShader = function (states) {

        var customShaders = states.shader.shaders || {};

        /* Do a full custom shader replacement if code supplied without hooks
         */
        if (customShaders.fragment && customShaders.fragment.code && !customShaders.fragment.hooks) {
            return customShaders.fragment.code;
        }

        var customFragmentShader = customShaders.fragment || {};
        var fragmentHooks = customFragmentShader.hooks || {};

        var texturing = this._isTexturing(states);
        var normals = this._hasNormals(states);
        var clipping = states.clips.clips.length > 0;

        var src = ["\n"];

        src.push("precision mediump float;");


        if (clipping || fragmentHooks.worldPos) {
            src.push("varying vec4 SCENEJS_vWorldVertex;");             // World-space vertex
        }

        if (fragmentHooks.viewPos) {
            src.push("varying vec4 SCENEJS_vViewVertex;");              // View-space vertex
        }

        /*-----------------------------------------------------------------------------------
         * Variables - Clipping
         *----------------------------------------------------------------------------------*/

        if (clipping) {
            for (var i = 0; i < states.clips.clips.length; i++) {
                src.push("uniform float SCENEJS_uClipMode" + i + ";");
                src.push("uniform vec4  SCENEJS_uClipNormalAndDist" + i + ";");
            }
        }

        if (texturing) {
            if (states.geometry.uvBuf) {
                src.push("varying vec2 SCENEJS_vUVCoord;");
            }
            if (states.geometry.uvBuf2) {
                src.push("varying vec2 SCENEJS_vUVCoord2;");
            }
            var layer;
            for (var i = 0, len = states.texture.layers.length; i < len; i++) {
                layer = states.texture.layers[i];
                src.push("uniform sampler2D SCENEJS_uSampler" + i + ";");
                if (layer.matrix) {
                    src.push("uniform mat4 SCENEJS_uLayer" + i + "Matrix;");
                }
                src.push("uniform float SCENEJS_uLayer" + i + "BlendFactor;");
            }
        }

        /* True when lighting
         */
        src.push("uniform bool  SCENEJS_uBackfaceTexturing;");
        src.push("uniform bool  SCENEJS_uBackfaceLighting;");
        src.push("uniform bool  SCENEJS_uSpecularLighting;");
        src.push("uniform bool  SCENEJS_uClipping;");
        src.push("uniform bool  SCENEJS_uAmbient;");
        src.push("uniform bool  SCENEJS_uDiffuse;");

        /* True when rendering transparency
         */
        src.push("uniform bool  SCENEJS_uTransparent;");

        /* Vertex color variable
         */
        if (states.geometry.colorBuf) {
            src.push("varying vec4 SCENEJS_vColor;");
        }

        src.push("uniform vec3  SCENEJS_uAmbientColor;");                         // Scene ambient colour - taken from clear colour

        src.push("uniform vec3  SCENEJS_uMaterialBaseColor;");
        src.push("uniform float SCENEJS_uMaterialAlpha;");
        src.push("uniform float SCENEJS_uMaterialEmit;");
        src.push("uniform vec3  SCENEJS_uMaterialSpecularColor;");
        src.push("uniform float SCENEJS_uMaterialSpecular;");
        src.push("uniform float SCENEJS_uMaterialShine;");

        src.push("varying vec3 SCENEJS_vWorldEyeVec;");                          // Direction of view-space vertex from eye

        if (normals) {

            src.push("varying vec3 SCENEJS_vWorldNormal;");                  // World-space normal
            src.push("varying vec3 SCENEJS_vViewNormal;");                   // View-space normal

            var light;
            for (var i = 0; i < states.lights.lights.length; i++) {
                light = states.lights.lights[i];
                if (light.mode == "ambient") {
                    continue;
                }
                src.push("uniform vec3  SCENEJS_uLightColor" + i + ";");
                if (light.mode == "point") {
                    src.push("uniform vec3  SCENEJS_uLightAttenuation" + i + ";");
                }
                src.push("varying vec4  SCENEJS_vViewLightVecAndDist" + i + ";");         // Vector from light to vertex
            }
        }

        if (customFragmentShader.code) {
            src.push("\n" + customFragmentShader.code + "\n");
        }

        src.push("void main(void) {");

        src.push("  vec3    ambient= SCENEJS_uAmbient ? SCENEJS_uAmbientColor : vec3(0.0, 0.0, 0.0);");

        /*-----------------------------------------------------------------------------------
         * Logic - Clipping
         *----------------------------------------------------------------------------------*/

        if (clipping) {
            src.push("if (SCENEJS_uClipping) {");
            src.push("  float   dist;");
            for (var i = 0; i < states.clips.clips.length; i++) {
                src.push("    if (SCENEJS_uClipMode" + i + " != 0.0) {");
                src.push("        dist = dot(SCENEJS_vWorldVertex.xyz, SCENEJS_uClipNormalAndDist" + i + ".xyz) - SCENEJS_uClipNormalAndDist" + i + ".w;");
                src.push("        if (SCENEJS_uClipMode" + i + " == 1.0) {");
                src.push("            if (dist > 0.0) { discard; }");
                src.push("        }");
                src.push("        if (SCENEJS_uClipMode" + i + " == 2.0) {");
                src.push("            if (dist > 0.0) { discard; }");
                src.push("        }");
                src.push("    }");
            }
            src.push("}");
        }

        if (texturing && states.geometry.uvBuf && fragmentHooks.texturePos) {
            src.push(fragmentHooks.texturePos + "(SCENEJS_vUVCoord);");
        }

        if (fragmentHooks.worldPos) {
            src.push(fragmentHooks.worldPos + "(SCENEJS_vWorldVertex);");
        }

        if (fragmentHooks.viewPos) {
            src.push(fragmentHooks.viewPos + "(SCENEJS_vViewVertex);");
        }

        if (fragmentHooks.worldEyeVec) {
            src.push(fragmentHooks.worldEyeVec + "(SCENEJS_vWorldEyeVec);");
        }

        if (normals && fragmentHooks.worldNormal) {
            src.push(fragmentHooks.worldNormal + "(SCENEJS_vWorldNormal);");
        }

        if (normals && fragmentHooks.viewNormal) {
            src.push(fragmentHooks.viewNormal + "(SCENEJS_vViewNormal);");
        }

        if (states.geometry.colorBuf) {
            src.push("  vec3    color   = SCENEJS_vColor.rgb;");
        } else {
            src.push("  vec3    color   = SCENEJS_uMaterialBaseColor;")
        }

        src.push("  float alpha         = SCENEJS_uMaterialAlpha;");
        src.push("  float emit          = SCENEJS_uMaterialEmit;");
        src.push("  float specular      = SCENEJS_uMaterialSpecular;");
        src.push("  vec3  specularColor = SCENEJS_uMaterialSpecularColor;");
        src.push("  float shine         = SCENEJS_uMaterialShine;");

        if (fragmentHooks.materialBaseColor) {
            src.push("color=" + fragmentHooks.materialBaseColor + "(color);");
        }
        if (fragmentHooks.materialAlpha) {
            src.push("alpha=" + fragmentHooks.materialAlpha + "(alpha);");
        }
        if (fragmentHooks.materialEmit) {
            src.push("emit=" + fragmentHooks.materialEmit + "(emit);");
        }
        if (fragmentHooks.materialSpecular) {
            src.push("specular=" + fragmentHooks.materialSpecular + "(specular);");
        }
        if (fragmentHooks.materialSpecularColor) {
            src.push("specularColor=" + fragmentHooks.materialSpecularColor + "(specularColor);");
        }
        if (fragmentHooks.materialShine) {
            src.push("shine=" + fragmentHooks.materialShine + "(shine);");
        }

        if (normals) {
            src.push("  float   attenuation = 1.0;");
            src.push("  vec3    viewNormalVec = SCENEJS_vViewNormal;");
        }

        var layer;
        if (texturing) {

            if (normals) {
                src.push("if (SCENEJS_uBackfaceTexturing || dot(SCENEJS_vWorldNormal, SCENEJS_vWorldEyeVec) > 0.0) {");
            }

            src.push("  vec4    texturePos;");
            src.push("  vec2    textureCoord=vec2(0.0,0.0);");

            for (var i = 0, len = states.texture.layers.length; i < len; i++) {
                layer = states.texture.layers[i];

                /* Texture input
                 */
                if (layer.applyFrom == "normal" && normals) {
                    if (states.geometry.normalBuf) {
                        src.push("texturePos=vec4(viewNormalVec.xyz, 1.0);");
                    } else {
                        SceneJS.log.warn("Texture layer applyFrom='normal' but geo has no normal vectors");
                        continue;
                    }
                }
                if (layer.applyFrom == "uv") {
                    if (states.geometry.uvBuf) {
                        src.push("texturePos = vec4(SCENEJS_vUVCoord.s, SCENEJS_vUVCoord.t, 1.0, 1.0);");
                    } else {
                        SceneJS.log.warn("Texture layer applyTo='uv' but geometry has no UV coordinates");
                        continue;
                    }
                }
                if (layer.applyFrom == "uv2") {
                    if (states.geometry.uvBuf2) {
                        src.push("texturePos = vec4(SCENEJS_vUVCoord2.s, SCENEJS_vUVCoord2.t, 1.0, 1.0);");
                    } else {
                        SceneJS.log.warn("Texture layer applyTo='uv2' but geometry has no UV2 coordinates");
                        continue;
                    }
                }

                /* Texture matrix
                 */
                if (layer.matrix) {
                    src.push("textureCoord=(SCENEJS_uLayer" + i + "Matrix * texturePos).xy;");
                } else {
                    src.push("textureCoord=texturePos.xy;");
                }

                /* Alpha from Texture
                 * */
                if (layer.applyTo == "alpha") {
                    if (layer.blendMode == "multiply") {
                        src.push("alpha = alpha * (SCENEJS_uLayer" + i + "BlendFactor * texture2D(SCENEJS_uSampler" + i + ", vec2(textureCoord.x, 1.0 - textureCoord.y)).b);");
                    } else if (layer.blendMode == "add") {
                        src.push("alpha = ((1.0 - SCENEJS_uLayer" + i + "BlendFactor) * alpha) + (SCENEJS_uLayer" + i + "BlendFactor * texture2D(SCENEJS_uSampler" + i + ", vec2(textureCoord.x, 1.0 - textureCoord.y)).b);");
                    }
                }

                /* Texture output
                 */
                if (layer.applyTo == "baseColor") {
                    if (layer.blendMode == "multiply") {
                        src.push("color = color * (SCENEJS_uLayer" + i + "BlendFactor * texture2D(SCENEJS_uSampler" + i + ", vec2(textureCoord.x, 1.0 - textureCoord.y)).rgb);");
                    } else {
                        src.push("color = ((1.0 - SCENEJS_uLayer" + i + "BlendFactor) * color) + (SCENEJS_uLayer" + i + "BlendFactor * texture2D(SCENEJS_uSampler" + i + ", vec2(textureCoord.x, 1.0 - textureCoord.y)).rgb);");
                    }
                }

                if (layer.applyTo == "emit") {
                    if (layer.blendMode == "multiply") {
                        src.push("emit  = emit * (SCENEJS_uLayer" + i + "BlendFactor * texture2D(SCENEJS_uSampler" + i + ", vec2(textureCoord.x, 1.0 - textureCoord.y)).r);");
                    } else {
                        src.push("emit = ((1.0 - SCENEJS_uLayer" + i + "BlendFactor) * emit) + (SCENEJS_uLayer" + i + "BlendFactor * texture2D(SCENEJS_uSampler" + i + ", vec2(textureCoord.x, 1.0 - textureCoord.y)).r);");
                    }
                }

                if (layer.applyTo == "specular" && normals) {
                    if (layer.blendMode == "multiply") {
                        src.push("specular  = specular * (SCENEJS_uLayer" + i + "BlendFactor * texture2D(SCENEJS_uSampler" + i + ", vec2(textureCoord.x, 1.0 - textureCoord.y)).r);");
                    } else {
                        src.push("specular = ((1.0 - SCENEJS_uLayer" + i + "BlendFactor) * specular) + (SCENEJS_uLayer" + i + "BlendFactor * texture2D(SCENEJS_uSampler" + i + ", vec2(textureCoord.x, 1.0 - textureCoord.y)).r);");
                    }
                }

                if (layer.applyTo == "normals" && normals) {
                    src.push("vec3 bump = normalize(texture2D(SCENEJS_uSampler" + i + ", vec2(textureCoord.x, -textureCoord.y)).xyz * 2.0 - 1.0);");
                    src.push("viewNormalVec *= -bump;");
                }
            }
            if (normals) {
                src.push("}");
            }
        }

        src.push("  vec4    fragColor;");

        if (normals) {

            src.push("if (SCENEJS_uBackfaceLighting || dot(SCENEJS_vWorldNormal, SCENEJS_vWorldEyeVec) > 0.0) {");

            src.push("  vec3    lightValue      = vec3(0.0, 0.0, 0.0);");
            src.push("  vec3    specularValue   = vec3(0.0, 0.0, 0.0);");
            src.push("  vec3    viewLightVec;");
            src.push("  float   dotN;");
            src.push("  float   lightDist;");

            var light;

            for (var i = 0, len = states.lights.lights.length; i < len; i++) {
                light = states.lights.lights[i];

                if (light.mode == "ambient") {
                    continue;
                }

                src.push("viewLightVec = SCENEJS_vViewLightVecAndDist" + i + ".xyz;");

                if (light.mode == "point") {

                    src.push("dotN = max(dot(viewNormalVec, viewLightVec), 0.0);");

                    //src.push("if (dotN > 0.0) {");

                    src.push("lightDist = SCENEJS_vViewLightVecAndDist" + i + ".w;");

                    src.push("attenuation = 1.0 - (" +
                        "  SCENEJS_uLightAttenuation" + i + "[0] + " +
                        "  SCENEJS_uLightAttenuation" + i + "[1] * lightDist + " +
                        "  SCENEJS_uLightAttenuation" + i + "[2] * lightDist * lightDist);");

                    if (light.diffuse) {
                        src.push("if (SCENEJS_uDiffuse) {");
                        src.push("      lightValue += dotN * SCENEJS_uLightColor" + i + " * attenuation;");
                        src.push("}");
                    }

                    if (light.specular) {
                        src.push("if (SCENEJS_uSpecularLighting) {");
                        src.push("    specularValue += specularColor * SCENEJS_uLightColor" + i +
                            " * specular * pow(max(dot(reflect(-viewLightVec, -viewNormalVec), vec3(0.0,0.0,1.0)), 0.0), shine) * attenuation;");
                        src.push("}");
                    }
                    //src.push("}");
                }

                if (light.mode == "dir") {

                    src.push("dotN = max(dot(viewNormalVec, viewLightVec), 0.0);");

                    //src.push("if (dotN > 0.0) {");
                    if (light.diffuse) {
                        src.push("if (SCENEJS_uDiffuse) {");
                        src.push("      lightValue += dotN * SCENEJS_uLightColor" + i + ";");
                        src.push("}");
                    }

                    if (light.specular) {
                        src.push("if (SCENEJS_uSpecularLighting) {");
                        src.push("    specularValue += specularColor * SCENEJS_uLightColor" + i +
                            " * specular * pow(max(dot(reflect(-viewLightVec, -viewNormalVec), vec3(0.0,0.0,1.0)), 0.0), shine);");
                        src.push("}");
                    }
                    // src.push("}");
                }
            }

            src.push("      fragColor = vec4((specularValue.rgb + color.rgb * (lightValue.rgb + ambient.rgb)) + (emit * color.rgb), alpha);");
            src.push("   } else {");
            src.push("      fragColor = vec4((color.rgb + (emit * color.rgb)) *  (vec3(1.0, 1.0, 1.0) + ambient.rgb), alpha);");
            src.push("   }");

        } else { // No normals
            src.push("fragColor = vec4((color.rgb + (emit * color.rgb)) *  (vec3(1.0, 1.0, 1.0) + ambient.rgb), alpha);");
        }

        if (fragmentHooks.pixelColor) {
            src.push("fragColor=" + fragmentHooks.pixelColor + "(fragColor);");
        }

        if (false && debugCfg.whitewash === true) {
            src.push("    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);");
        } else {
            src.push("    gl_FragColor = fragColor;");
        }
        src.push("}");

        return src;
    };

})();/**
 * @class Source code for pick and draw shader programs, to be compiled into one or more {@link SceneJS_Program}s
 * @private
 * 
 * @param {String} hash Hash code identifying the rendering capabilities of the programs
 * @param {String} pickVertexSrc Source code of the pick vertex shader
 * @param {String} pickFragmentSrc Source code of the pick fragment shader
 * @param {String} drawVertexSrc Source code of the draw vertex shader
 * @param {String} drawFragmentSrc Source code of the draw fragment shader
 */
var SceneJS_ProgramSource = function(hash, pickVertexSrc, pickFragmentSrc, drawVertexSrc, drawFragmentSrc) {

    /**
     * Hash code identifying the capabilities of the {@link SceneJS_Program} that is compiled from this source
     * @type String
     */
    this.hash = hash;

    /**
     * Source code for pick vertex shader
     * @type String
     */
    this.pickVertexSrc = pickVertexSrc;

    /**
     * Source code for pick fragment shader
     * @type String
     */
    this.pickFragmentSrc = pickFragmentSrc;

    /**
     * Source code for draw vertex shader
     * @type String
     */
    this.drawVertexSrc = drawVertexSrc;

    /**
     * Source code for draw fragment shader
     * @type String
     */
    this.drawFragmentSrc = drawFragmentSrc;

    /**
     * Count of {@link SceneJS_Program}s compiled from this program source code
     * @type Number
     */
    this.useCount = 0;
};

/**  
 * @class Manages creation, sharing and recycle of {@link SceneJS_Program} instances
 * @private
 */
var SceneJS_ProgramFactory = function(cfg) {

    this._canvas = cfg.canvas;

    this._programs = {};

    this._nextProgramId = 0;
};

/**
 * Gets a program to render the given states
 */
SceneJS_ProgramFactory.prototype.getProgram = function(hash, states) {

    var program = this._programs[hash];

    if (!program) {

        var source = SceneJS_ProgramSourceFactory.getSource(hash, states);

        program = new SceneJS_Program(this._nextProgramId++, hash, source, this._canvas.gl);

        this._programs[hash] = program;
    }

    program.useCount++;

    return program;
};

/**
 * Releases a program back to the shader factory
 */
SceneJS_ProgramFactory.prototype.putProgram = function(program) {

    if (--program.useCount <= 0) {

        program.draw.destroy();
        program.pick.destroy();

        SceneJS_ProgramSourceFactory.putSource(program.hash);

        this._programs[program.hash] = null;
    }
};

/**
 * Notifies this shader factory that the WebGL context has been restored after previously being lost
 */
SceneJS_ProgramFactory.prototype.webglRestored = function() {

    var gl = this._canvas.gl;

    for (var id in this._programs) {
        if (this._programs.hasOwnProperty(id)) {
            this._programs[id].build(gl);
        }
    }
};

/**
 * Destroys this shader factory
 */
SceneJS_ProgramFactory.prototype.destroy = function() {
};
/**
 * @class Vertex and fragment shaders for pick and draw
 * @private
 *
 * @param {Number} id ID unique among all programs in the owner {@link SceneJS_ProgramFactory}
 * @param {String} hash Hash code which uniquely identifies the capabilities of the program, computed from hashes on the {@link Scene_Core}s that the {@link SceneJS_ProgramSource} composed to render
 * @param {SceneJS_ProgramSource} source Sourcecode from which the the program is compiled in {@link #build}
 * @param {WebGLRenderingContext} gl WebGL context 
 */
var SceneJS_Program = function(id, hash, source, gl) {

    /**
     * ID for this program, unique among all programs in the display
     * @type Number
     */
    this.id = id;

    /**
     * Hash code for this program's capabilities, same as the hash on {@link #source}
     * @type String
     */
    this.hash = source.hash;

    /**
     * Source code for this program's shaders
     * @type SceneJS_ProgramSource
     */
    this.source = source;

    /**
     * WebGL context on which this program's shaders are allocated
     * @type WebGLRenderingContext
     */
    this.gl = gl;

    /**
     * The drawing program
     * @type SceneJS_webgl_Program
     */
    this.draw = null;

    /**
     * The picking program
     * @type SceneJS_webgl_Program
     */
    this.pick = null;

    /**
     * The count of display objects using this program
     * @type Number
     */
    this.useCount = 0;

    this.build(gl);
};

/**
 *  Creates the render and pick programs.
 * This is also re-called to re-create them after WebGL context loss.
 */
SceneJS_Program.prototype.build = function(gl) {
    this.gl = gl;
    this.draw = new SceneJS_webgl_Program(gl, [this.source.drawVertexSrc.join("\n")], [this.source.drawFragmentSrc.join("\n")]);
    this.pick = new SceneJS_webgl_Program(gl, [this.source.pickVertexSrc.join("\n")], [this.source.pickFragmentSrc.join("\n")]);
};/**
 * @class Manages creation and recycle of {@link SceneJS_Object} instances
 * @private
 */
var SceneJS_ObjectFactory = function() {

};

/**
 * @property {[SceneJS_Object]} _freeObjects Pool of free display objects, shared by all object factories
 */
SceneJS_ObjectFactory.prototype._freeObjects = [];

/**
 * @property {Number} _numFreeObjects Number of free objects
 */
SceneJS_ObjectFactory.prototype._numFreeObjects = 0;

/**
 * Gets a display object from this factory
 *
 * @param {String} id ID to assign to the object
 * @returns {SceneJS_Object} The object
 */
SceneJS_ObjectFactory.prototype.getObject = function(id) {

    var object;

    if (this._numFreeObjects > 0) {

        object = this._freeObjects[--this._numFreeObjects];
        object.id = id;

        return object;
    }

    return new SceneJS_Object(id);
};

/**
 * Releases a display object back to this factory
 * @param {SceneJS_Object} object Object to release
 */
SceneJS_ObjectFactory.prototype.putObject = function (object) {

    this._freeObjects[this._numFreeObjects++] = object;
};/**
 * @class An object within a {@link SceneJS_Display}
 * @private
 */
var SceneJS_Object = function(id) {

    /**
     * ID for this objects, unique among all objects in the display
     * @type Number
     */
    this.id = id;

    /**
     * Hash code for this object, unique among all objects in the display
     * @type String
     */
    this.hash = null;

    /**
     * State sort key, computed from {@link #layer}, {@link #program} and {@link #texture}
     * @type Number
     */
    this.sortKey = null;

    /**
     * Sequence of state chunks applied to render this object
     * @type {[SceneJS_Chunk]} chunks
     */
    this.chunks = [];

    /**
     * Number of state chunks applied to render this object
     * @type Number
     */
    this.chunksLen = 0;

    /**
     * Shader programs that render this object, also used for (re)computing {@link #sortKey}
     * @type SceneJS_Program
     */
    this.program = null;

    /**
     * State core for the {@link SceneJS.Layer} that this object was compiled from, used for (re)computing {@link #sortKey} and visibility cull
     */
    this.layer = null;

     /**
     * State core for the {@link SceneJS.Texture} that this object was compiled from, used for (re)computing {@link #sortKey}
     */
    this.texture = null;

    /**
     * State core for the {@link SceneJS.Flags} that this object was compiled from, used for visibility cull
     */
    this.flags = null;

    /**
     * State core for the {@link SceneJS.Tag} that this object was compiled from, used for visibility cull
     */
    this.tag = null;
};/**
 * @class A facade which exposes internal scene rendering state to "rendered" event listeners bound to scene graph nodes with {@link SceneJS.Node#bind}.
 *
 * <p>The listener is fired for each {@link SceneJS.Geometry} that is rendered within the subgraph of the bound node.
 * An instance of this facade is passed into the listener's handler, enabling the listener to obtain the various transform
 * matrices that are active at that {@link SceneJS.Geometry}.</p>
 *
 * <p>The facade instance is only valid within the callback's execution; internally, SceneJS reuses the same instance of the
 * facade with each scene.</p>
 */
SceneJS.RenderContext = function(frameCtx) {
    this._frameCtx = frameCtx;
};

/**
 * Get the projection matrix, as defined by the active {@link SceneJS.Camera} node.
 */
SceneJS.RenderContext.prototype.getCameraMatrix = function() {
    return this._frameCtx.cameraMat;
};

/**
 * Get the view matrix, as defined by the active {@link SceneJS.LookAt} node.
 */
SceneJS.RenderContext.prototype.getViewMatrix = function() {
    return this._frameCtx.viewMat;
};

/**
 * Get the model matrix, as defined by the active {@link SceneJS.XForm} node.
 */
SceneJS.RenderContext.prototype.getModelMatrix = function() {
    return this._frameCtx.modelMat;
};

/**
 * Transforms the given world coordinate by the model, view and projection matrices defined by the active {@link SceneJS.XForm}, {@link SceneJS.LookAt} and {@link SceneJS.Camera} nodes.
 * @returns [Number] The 2D Canvas-space coordinate
 */
SceneJS.RenderContext.prototype.getCanvasPos = function(offset) {

    this.getProjPos(offset);

    var canvas = this._frameCtx.canvas.canvas;
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;

    /* Projection division and map to canvas
     */
    var pc = this._pc;

    var x = (pc[0] / pc[3]) * canvasWidth * 0.5;
    var y = (pc[1] / pc[3]) * canvasHeight * 0.5;

    return {
        x: x + (canvasWidth * 0.5),
        y: canvasHeight - y - (canvasHeight * 0.5)
    };
};

/**
 * Transforms the given world coordinate by the model and view matrices defined by the active {@link SceneJS.XForm} and {@link SceneJS.LookAt} nodes.
 * @returns [Number] The 3D Projection-space coordinate
 */
SceneJS.RenderContext.prototype.getCameraPos = function(offset) {
    this.getProjPos(offset);
    this._camPos = SceneJS_math_normalizeVec3(this._pc, [0,0,0]);
    return { x: this._camPos[0], y: this._camPos[1], z: this._camPos[2] }; // TODO: return _camPos and lose the temp object
};


SceneJS.RenderContext.prototype.getProjPos = function(offset) {
    this.getViewPos(offset);
    this._pc = SceneJS_math_transformPoint3(this._frameCtx.cameraMat, this._vc);
    return { x: this._pc[0], y: this._pc[1], z: this._pc[2],  w: this._pc[3] };
};

SceneJS.RenderContext.prototype.getViewPos = function(offset) {
    this.getWorldPos(offset);
    this._vc = SceneJS_math_transformPoint3(this._frameCtx.viewMat, this._wc);
    return { x: this._vc[0], y: this._vc[1], z: this._vc[2],  w: this._vc[3] };
};

SceneJS.RenderContext.prototype.getWorldPos = function(offset) {
    this._wc = SceneJS_math_transformPoint3(this._frameCtx.modelMat, offset || [0,0,0]);
    return { x: this._wc[0], y: this._wc[1], z: this._wc[2],  w: this._wc[3] };
};
/**
 * @class A chunk of WebGL state changes to render a {@link SceneJS_Core} for drawing and picking (if applicable to the core type).
 *
 * <p>Instances of this class are created and recycled by a {@link SceneJS_ChunkFactory}.</p>
 *
 * <p>Each {@link SceneJS_Object} has a list of chunks to render it's {@link SceneJS_Core}s</p>
 *
 * @private
 */
var SceneJS_Chunk = function(id, type, program, core) {

    /**
     * The type of the corresponding {@link SceneJS_Core}
     * @type String
     * @see {SceneJS_Core#type}
     */
    this.type = type;

    /**
     * The chunk ID
     * @type Number
     */
    this.id = id;

    /**
     * The program this chunk will render with
     * @type {SceneJS_Program}
     */
    this.program = program;

    /**
     * The state core rendered by this chunk
     * @type {SceneJS_Core}
     */
    this.core = core;

    /**
     * Count of {@link SceneJS_Object} instances using this chunk
     * @type Number
     */
    this.useCount = 0;

    if (this.build) {
        this.build();
    }
};

/**
 * Initialises the chunk. This is called within the constructor, and also to by the owner {@link SceneJS_ChunkFactory}
 * when recycling a chunk from its free chunk pool. This method sets the given properties on the chunk, then calls the
 * chunk instance's <b>build</b> method if the chunk has been augmented with one.
 *
 * @param {Number} id Chunk ID
 * @param {SceneJS_Program} program Program to render the chunk
 * @param {SceneJS_Core} core The state core rendered by this chunk
 */
SceneJS_Chunk.prototype.init = function(id, program, core) {

    this.id = id;
    this.program = program;
    this.core = core;

    if (this.build) {
        this.build();
    }
};
/**
 * @class Manages creation, reuse and destruction of {@link SceneJS_Chunk}s for the nodes within a single {@link SceneJS_Display}.
 * @private
 */
var SceneJS_ChunkFactory = function() {

    this._chunks = {};
    this.chunkTypes = SceneJS_ChunkFactory.chunkTypes;
};

/**
 * Sub-classes of {@link SceneJS_Chunk} provided by this factory
 */
SceneJS_ChunkFactory.chunkTypes = {};    // Supported chunk classes, installed by #createChunkType

/**
 * Free pool of unused {@link SceneJS_Chunk} instances
 */
SceneJS_ChunkFactory._freeChunks = {};    // Free chunk pool for each type

/**
 * Creates a chunk class for instantiation by this factory
 *
 * @param params Members to augment the chunk class prototype with
 * @param params.type Type name for the new chunk class
 * @param params.draw Method to render the chunk in draw render
 * @param params.pick Method to render the chunk in pick render
 * @param params.drawAndPick Method to render the chunk in both draw and pick renders
 */
SceneJS_ChunkFactory.createChunkType = function(params) {

    if (!params.type) {
        throw "'type' expected in params";
    }

    var supa = SceneJS_Chunk;

    var chunkClass = function() { // Create the class
        supa.apply(this, arguments);
        this.type = params.type;
    };

    chunkClass.prototype = new supa();              // Inherit from base class
    chunkClass.prototype.constructor = chunkClass;

    if (params.drawAndPick) {                       // Common method for draw and pick render
        params.draw = params.pick = params.drawAndPick;
    }

    SceneJS_ChunkFactory.chunkTypes[params.type] = chunkClass;

    SceneJS._apply(params, chunkClass.prototype);   // Augment subclass

    SceneJS_ChunkFactory._freeChunks[params.type] = { // Set up free chunk pool for this type
        chunks: [],
        chunksLen: 0
    };

    return chunkClass;
};

/**
 *
 */
SceneJS_ChunkFactory.prototype.getChunk = function(chunkId, type, program, core) {

    var chunkClass = SceneJS_ChunkFactory.chunkTypes[type]; // Check type supported

    if (!chunkClass) {
        throw "chunk type not supported: '" + type + "'";
    }

    var chunk = this._chunks[chunkId];  // Try to reference an existing chunk

    if (chunk) {
        chunk.useCount++;
        return chunk;
    }

    var freeChunks = SceneJS_ChunkFactory._freeChunks[type]; // Try to recycle a free chunk

    if (freeChunks.chunksLen > 0) {
        chunk = freeChunks.chunks[--freeChunks.chunksLen];
    }

    if (chunk) {    // Reinitialise the recycled chunk

        chunk.init(chunkId, program, core);

    } else {        // Instantiate a fresh chunk

        chunk = new chunkClass(chunkId, type, program, core); // Create new chunk
    }

    chunk.useCount = 1;

    this._chunks[chunkId] = chunk;

    return chunk;
};

/**
 * Releases a display state chunk back to this factory, destroying it if the chunk's use count is then zero.
 *
 * @param {SceneJS_Chunk} chunk Chunk to release
 */
SceneJS_ChunkFactory.prototype.putChunk = function (chunk) {

    if (chunk.useCount == 0) {
        return; // In case of excess puts
    }

    if (--chunk.useCount <= 0) {    // Release shared core if use count now zero

        this._chunks[chunk.id] = null;

        var freeChunks = SceneJS_ChunkFactory._freeChunks[chunk.type];

        freeChunks.chunks[freeChunks.chunksLen++] = chunk;
    }
};

/**
 * Re-cache shader variable locations for each active chunk
 */
SceneJS_ChunkFactory.prototype.webglRestored = function () {

    var chunk;

    for (var chunkId in this._chunks) {

        if (this._chunks.hasOwnProperty(chunkId)) {

            chunk = this._chunks[chunkId]; // Re-cache chunk's shader variable locations

            if (chunk.build) {
                chunk.build();
            }
        }
    }
};
SceneJS_ChunkFactory.createChunkType({

    type: "camera",

    build : function() {

        this._uPMatrixDraw = this.program.draw.getUniformLocation("SCENEJS_uPMatrix");

        this._uPMatrixPick = this.program.pick.getUniformLocation("SCENEJS_uPMatrix");
        this._uZNearPick = this.program.pick.getUniformLocation("SCENEJS_uZNear");
        this._uZFarPick = this.program.pick.getUniformLocation("SCENEJS_uZFar");
    },

    draw : function(ctx) {

        if (this.core.dirty) {
            this.core.rebuild();
        }

        var gl = this.program.gl;

        if (this._uPMatrixDraw) {
            gl.uniformMatrix4fv(this._uPMatrixDraw, gl.FALSE, this.core.mat);
        }

        ctx.cameraMat = this.core.mat; // Query only in draw pass
    },


    pick : function(ctx) {

        var gl = this.program.gl;

        if (this._uPMatrixPick) {
            gl.uniformMatrix4fv(this._uPMatrixPick, gl.FALSE, this.core.mat);
        }

        if (ctx.rayPick) { // Z-pick pass: feed near and far clip planes into shader

            if (this._uZNearPick) {
                gl.uniform1f(this._uZNearPick, this.core.optics.near);
            }

            if (this._uZFarPick) {
                gl.uniform1f(this._uZFarPick, this.core.optics.far);
            }
        }

        ctx.cameraMat = this.core.mat; // Query only in draw pass
    }
});/**
 * Create display state chunk type for draw and pick render of user clipping planes
 */
SceneJS_ChunkFactory.createChunkType({

    type: "clips",

    build : function() {

        this._draw = this._draw || [];

        var draw = this.program.draw;

        for (var i = 0, len = this.core.clips.length; i < len; i++) {
            this._draw[i] = {
                uClipMode :draw.getUniformLocation("SCENEJS_uClipMode" + i),
                uClipNormalAndDist: draw.getUniformLocation("SCENEJS_uClipNormalAndDist" + i)
            };
        }

        this._pick = this._pick || [];

        var pick = this.program.pick;

        for (var i = 0, len = this.core.clips.length; i < len; i++) {
            this._pick[i] = {
                uClipMode :pick.getUniformLocation("SCENEJS_uClipMode" + i),
                uClipNormalAndDist: pick.getUniformLocation("SCENEJS_uClipNormalAndDist" + i)
            };
        }
    },

    drawAndPick: function(ctx) {

        var vars = (ctx.pick) ? this._pick : this._draw;

        var mode;
        var normalAndDist;
        var clips = this.core.clips;
        var clip;
        var gl = this.program.gl;

        for (var i = 0, len = clips.length; i < len; i++) {

            if (ctx.pick) {
                mode = vars[i].uClipMode;
                normalAndDist = vars[i].uClipNormalAndDist;
            } else {
                mode = vars[i].uClipMode;
                normalAndDist = vars[i].uClipNormalAndDist;
            }

            if (mode && normalAndDist) {

                clip = clips[i];

                if (clip.mode == "inside") {

                    gl.uniform1f(mode, 2);
                    gl.uniform4fv(normalAndDist, clip.normalAndDist);

                } else if (clip.mode == "outside") {

                    gl.uniform1f(mode, 1);
                    gl.uniform4fv(normalAndDist, clip.normalAndDist);

                } else { // disabled
                    gl.uniform1f(mode, 0);
                }
            }
        }
    }
});/**
 *
 */
SceneJS_ChunkFactory.createChunkType({

    type:"draw",

    /**
     * As we apply a list of state chunks in a {@link SceneJS_Display}, we track the ID of each chunk
     * in order to avoid redundantly re-applying the same chunk.
     *
     * We don't want that for draw chunks however, because they contain GL drawElements calls,
     * which we need to do for each object.
     */
    unique:true,

    build:function () {},

    drawAndPick:function (ctx) {

        var gl = this.program.gl;

        gl.drawElements(this.core.primitive, this.core.indexBuf.numItems, gl.UNSIGNED_SHORT, 0);
    }
});/**
 *  Create display state chunk type for draw and pick render of flags
 */
SceneJS_ChunkFactory.createChunkType({

    type:"flags",

    build:function () {

        var draw = this.program.draw;

        this._uBackfaceTexturingDraw = draw.getUniformLocation("SCENEJS_uBackfaceTexturing");
        this._uBackfaceLightingDraw = draw.getUniformLocation("SCENEJS_uBackfaceLighting");
        this._uSpecularLightingDraw = draw.getUniformLocation("SCENEJS_uSpecularLighting");
        this._uClippingDraw = draw.getUniformLocation("SCENEJS_uClipping");
        this._uAmbientDraw = draw.getUniformLocation("SCENEJS_uAmbient");
        this._uDiffuseDraw = draw.getUniformLocation("SCENEJS_uDiffuse");

        var pick = this.program.pick;

        this._uClippingPick = pick.getUniformLocation("SCENEJS_uClipping");
    },

    drawAndPick:function (ctx) {

        var gl = this.program.gl;

        var backfaces = this.core.backfaces;

        if (ctx.backfaces != backfaces) {
            if (backfaces) {
                gl.disable(gl.CULL_FACE);
            } else {
                gl.enable(gl.CULL_FACE);
            }
            ctx.backfaces = backfaces;
        }

        var frontface = this.core.frontface;

        if (ctx.frontface != frontface) {
            if (frontface == "ccw") {
                gl.frontFace(gl.CCW);
            } else {
                gl.frontFace(gl.CW);
            }
            ctx.frontface = frontface;
        }

        if (ctx.pick) {
            gl.uniform1i(this._uClippingPick, this.core.clipping);

        } else {
            gl.uniform1i(this._uBackfaceTexturingDraw, this.core.backfaceTexturing);
            gl.uniform1i(this._uBackfaceLightingDraw, this.core.backfaceLighting);
            gl.uniform1i(this._uSpecularLightingDraw, this.core.specular);
            gl.uniform1i(this._uClippingDraw, this.core.clipping);
            gl.uniform1i(this._uAmbientDraw, this.core.ambient);
            gl.uniform1i(this._uDiffuseDraw, this.core.diffuse);
        }
    }
});/**
 *   Create display state chunk type for draw and pick render of framebuf
 */
SceneJS_ChunkFactory.createChunkType({

    type: "framebuf",

    // Avoid reapplication of a chunk after a program switch.
    programGlobal:true,

    build: function() {
    },

    drawAndPick: function(ctx) {

        if (ctx.framebuf) {

            this.program.gl.finish(); // Force framebuf to complete

            ctx.framebuf.unbind();
        }

        var framebuf = this.core.framebuf;

        if (framebuf) {

            framebuf.bind();

            ctx.framebuf = framebuf;  // Must flush on cleanup
        }
    }
});/**
 *  Create display state chunk type for draw and pick render of geometry
 */
SceneJS_ChunkFactory.createChunkType({

    type:"geometry",

    /**
     * As we apply a list of state chunks in a {@link SceneJS_Display}, we track the ID of each chunk
     * in order to avoid redundantly re-applying the same chunk.
     *
     * We don't want that for draw chunks however, because they contain GL drawElements calls,
     * which we need to do for each object.
     */
    unique:true,

    build:function () {

        var draw = this.program.draw;

        this._aVertexDraw = draw.getAttribute("SCENEJS_aVertex");
        this._aNormalDraw = draw.getAttribute("SCENEJS_aNormal");
        this._aUVDraw = draw.getAttribute("SCENEJS_aUVCoord");
        this._aUV2Draw = draw.getAttribute("SCENEJS_aUVCoord2");
        this._aColorDraw = draw.getAttribute("SCENEJS_aVertexColor");

        var pick = this.program.pick;

        this._aVertexPick = pick.getAttribute("SCENEJS_aVertex");
        this._aNormalPick = pick.getAttribute("SCENEJS_aNormal");
        this._aUVPick = pick.getAttribute("SCENEJS_aUVCoord");
        this._aUV2Pick = pick.getAttribute("SCENEJS_aUVCoord2");
        this._aColorPick = pick.getAttribute("SCENEJS_aVertexColor");
    },

    draw:function (ctx) {

        var gl = this.program.gl;

        if (ctx.geoChunkId != this.id) { // HACK until we have distinct state chunks for VBOs and draw call

            if (this._aVertexDraw && !ctx.vertexBuf) {
                this._aVertexDraw.bindFloatArrayBuffer(this.core.vertexBuf);
            }

            if (this._aNormalDraw && !ctx.normalBuf) {
                this._aNormalDraw.bindFloatArrayBuffer(this.core.normalBuf);
            }

            if (this._aUVDraw && !ctx.uvBuf) {
                this._aUVDraw.bindFloatArrayBuffer(this.core.uvBuf);
            }

            if (this._aUV2Draw && !ctx.uvBuf2) {
                this._aUV2Draw.bindFloatArrayBuffer(this.core.uvBuf2);
            }

            if (this._aColorDraw && !ctx.colorBuf) {
                this._aColorDraw.bindFloatArrayBuffer(this.core.colorBuf);
            }

            this.core.indexBuf.bind();

            ctx.geoChunkId = this.id;
        }

        gl.drawElements(this.core.primitive, this.core.indexBuf.numItems, gl.UNSIGNED_SHORT, 0);
    },

    pick:function (ctx) {

        var gl = this.program.gl;

        if (ctx.geoChunkId != this.id) { // HACK until we have distinct state chunks for VBOs and draw call

            if (this._aVertexPick && !ctx.vertexBuf) {
                this._aVertexPick.bindFloatArrayBuffer(this.core.vertexBuf);
            }

            if (this._aNormalPick && !ctx.normalBuf) {
                this._aNormalPick.bindFloatArrayBuffer(this.core.normalBuf);
            }

            if (this._aUVPick && !ctx.uvBuf) {
                this._aUVPick.bindFloatArrayBuffer(this.core.uvBuf);
            }

            if (this._aUV2Pick && !ctx.uvBuf2) {
                this._aUV2Pick.bindFloatArrayBuffer(this.core.uvBuf2);
            }

            this.core.indexBuf.bind();

            ctx.geoChunkId = this.id;
        }

        gl.drawElements(this.core.primitive, this.core.indexBuf.numItems, gl.UNSIGNED_SHORT, 0);
    }
});/**
 *  Create display state chunk type for draw render of lights projection
 */
SceneJS_ChunkFactory.createChunkType({

    type:"lights",

    build:function () {

        this._uAmbientColor = this._uAmbientColor || [];
        this._uLightColor = this._uLightColor || [];
        this._uLightDir = this._uLightDir || [];
        this._uLightPos = this._uLightPos || [];
        this._uLightCutOff = this._uLightCutOff || [];
        this._uLightSpotExp = this._uLightSpotExp || [];
        this._uLightAttenuation = this._uLightAttenuation || [];

        var lights = this.core.lights;
        var program = this.program;

        for (var i = 0, len = lights.length; i < len; i++) {

            switch (lights[i].mode) {

                case "ambient":
                    this._uAmbientColor[i] = (program.draw.getUniformLocation("SCENEJS_uAmbientColor"));
                    break;

                case "dir":
                    this._uLightColor[i] = program.draw.getUniformLocation("SCENEJS_uLightColor" + i);
                    this._uLightPos[i] = null;
                    this._uLightDir[i] = program.draw.getUniformLocation("SCENEJS_uLightDir" + i);
                    break;

                case "point":
                    this._uLightColor[i] = program.draw.getUniformLocation("SCENEJS_uLightColor" + i);
                    this._uLightPos[i] = program.draw.getUniformLocation("SCENEJS_uLightPos" + i);
                    this._uLightDir[i] = null;
                    this._uLightAttenuation[i] = program.draw.getUniformLocation("SCENEJS_uLightAttenuation" + i);
                    break;
            }
        }
    },

    draw:function (ctx) {

        if (ctx.dirty) {
            this.build();
        }

        var lights = this.core.lights;
        var light;

        var gl = this.program.gl;

        for (var i = 0, len = lights.length; i < len; i++) {

            light = lights[i];

            if (this._uAmbientColor[i]) {
                gl.uniform3fv(this._uAmbientColor[i], light.color);

            } else {

                if (this._uLightColor[i]) {
                    gl.uniform3fv(this._uLightColor[i], light.color);
                }

                if (this._uLightPos[i]) {
                    gl.uniform3fv(this._uLightPos[i], light.pos);

                    if (this._uLightAttenuation[i]) {
                        gl.uniform3fv(this._uLightAttenuation[i], light.attenuation);
                    }
                }

                if (this._uLightDir[i]) {
                    gl.uniform3fv(this._uLightDir[i], light.dir);
                }
            }
        }
    }
});/**
 *
 */
SceneJS_ChunkFactory.createChunkType({

    type: "listeners",

    // Avoid reapplication of a chunk after a program switch.
    programGlobal:true,

    build : function() {
    },

    draw : function(ctx) {

        var listeners = this.core.listeners;
        var renderListenerCtx = ctx.renderListenerCtx;

        for (var i = listeners.length - 1; i >= 0; i--) { // Child listeners first
            if (listeners[i](renderListenerCtx) === true) { // Call listener with query facade object as scope
                return true;
            }
        }
    }
});/**
 * Create display state chunk type for draw and pick render of lookAt transform
 */
SceneJS_ChunkFactory.createChunkType({

    type: "lookAt",

    build : function() {

        this._uvMatrixDraw = this.program.draw.getUniformLocation("SCENEJS_uVMatrix");
        this._uVNMatrixDraw = this.program.draw.getUniformLocation("SCENEJS_uVNMatrix");
        this._uWorldEyeDraw = this.program.draw.getUniformLocation("SCENEJS_uWorldEye");

        this._uvMatrixPick = this.program.pick.getUniformLocation("SCENEJS_uVMatrix");
    },

    draw : function(ctx) {

        if (this.core.dirty) {
            this.core.rebuild();
        }

        var gl = this.program.gl;

        if (this._uvMatrixDraw) {
            gl.uniformMatrix4fv(this._uvMatrixDraw, gl.FALSE, this.core.mat);
        }

        if (this._uVNMatrixDraw) {
            gl.uniformMatrix4fv(this._uVNMatrixDraw, gl.FALSE, this.core.normalMat);
        }

        if (this._uWorldEyeDraw) {
            gl.uniform3fv(this._uWorldEyeDraw, this.core.lookAt.eye);
        }

        ctx.viewMat = this.core.mat;
    },

    pick : function(ctx) {

        var gl = this.program.gl;

        if (this._uvMatrixPick) {
            gl.uniformMatrix4fv(this._uvMatrixPick, gl.FALSE, this.core.mat);
        }

        ctx.viewMat = this.core.mat;
    }
});/**
 * Create display state chunk type for draw render of material transform
 */
SceneJS_ChunkFactory.createChunkType({

    type: "material",

    build : function() {

        var draw = this.program.draw;

        this._uMaterialBaseColor = draw.getUniformLocation("SCENEJS_uMaterialBaseColor");
        this._uMaterialSpecularColor = draw.getUniformLocation("SCENEJS_uMaterialSpecularColor");
        this._uMaterialSpecular = draw.getUniformLocation("SCENEJS_uMaterialSpecular");
        this._uMaterialShine = draw.getUniformLocation("SCENEJS_uMaterialShine");
        this._uMaterialEmit = draw.getUniformLocation("SCENEJS_uMaterialEmit");
        this._uMaterialAlpha = draw.getUniformLocation("SCENEJS_uMaterialAlpha");
    },

    draw : function() {

        var gl = this.program.gl;

        if (this._uMaterialBaseColor) {
            gl.uniform3fv(this._uMaterialBaseColor, this.core.baseColor);
        }

        if (this._uMaterialSpecularColor) {
            gl.uniform3fv(this._uMaterialSpecularColor, this.core.specularColor);
        }

        if (this._uMaterialSpecular) {
            gl.uniform1f(this._uMaterialSpecular, this.core.specular);
        }

        if (this._uMaterialShine) {
            gl.uniform1f(this._uMaterialShine, this.core.shine);
        }

        if (this._uMaterialEmit) {
            gl.uniform1f(this._uMaterialEmit, this.core.emit);
        }

        if (this._uMaterialAlpha) {
            gl.uniform1f(this._uMaterialAlpha, this.core.alpha);
        }
    }
});/**
 * Create display state chunk type for draw render of material transform
 */
SceneJS_ChunkFactory.createChunkType({

    type:"morphGeometry",

    build:function () {

        var draw = this.program.draw;

        this._aVertexDraw = draw.getAttribute("SCENEJS_aVertex");
        this._aNormalDraw = draw.getAttribute("SCENEJS_aNormal");
        this._aUVDraw = draw.getAttribute("SCENEJS_aUVCoord");
        this._aUV2Draw = draw.getAttribute("SCENEJS_aUVCoord2");
        this._aColorDraw = draw.getAttribute("SCENEJS_aVertexColor");

        this._aMorphVertexDraw = draw.getAttribute("SCENEJS_aMorphVertex");
        this._aMorphNormalDraw = draw.getAttribute("SCENEJS_aMorphNormal");
        this._aMorphUVDraw = draw.getAttribute("SCENEJS_aMorphUVCoord");
        this._aMorphUV2Draw = draw.getAttribute("SCENEJS_aMorphUVCoord2");
        this._aMorphColorDraw = draw.getAttribute("SCENEJS_aMorphColor");
        this._uMorphFactorDraw = draw.getUniformLocation("SCENEJS_uMorphFactor");

        var pick = this.program.pick;

        this._aVertexPick = pick.getAttribute("SCENEJS_aVertex");
        this._aNormalPick = pick.getAttribute("SCENEJS_aNormal");
        this._aUVPick = pick.getAttribute("SCENEJS_aUVCoord");
        this._aUV2Pick = pick.getAttribute("SCENEJS_aUVCoord2");
        this._aColorPick = pick.getAttribute("SCENEJS_aVertexColor");

        this._aMorphVertexPick = pick.getAttribute("SCENEJS_aMorphVertex");
        this._aMorphNormalPick = pick.getAttribute("SCENEJS_aMorphNormal");
        this._aMorphUVPick = pick.getAttribute("SCENEJS_aMorphUVCoord");
        this._aMorphUV2Pick = pick.getAttribute("SCENEJS_aMorphUVCoord2");
        this._aMorphColorPick = pick.getAttribute("SCENEJS_aMorphColor");
        this._uMorphFactorPick = pick.getUniformLocation("SCENEJS_uMorphFactor");
    },

    draw:function (ctx) {

        var targets = this.core.targets;

        if (!targets || targets.length == 0) {
            ctx.vertexBuf = false;
            ctx.normalBuf = false;
            ctx.uvBuf = false;
            ctx.uvBuf2 = false;
            ctx.colorBuf = false;
            return;
        }

        var gl = this.program.gl;

        var target1 = this.core.targets[this.core.key1]; // Keys will update
        var target2 = this.core.targets[this.core.key2];

        if (this._aMorphVertexDraw) {
            this._aVertexDraw.bindFloatArrayBuffer(target1.vertexBuf);
            this._aMorphVertexDraw.bindFloatArrayBuffer(target2.vertexBuf);
            ctx.vertexBuf = true;
        } else {
            ctx.vertexBuf = false;
        }

        if (this._aMorphNormalDraw) {
            this._aNormalDraw.bindFloatArrayBuffer(target1.normalBuf);
            this._aMorphNormalDraw.bindFloatArrayBuffer(target2.normalBuf);
            ctx.normalBuf = true;
        } else {
            ctx.normalBuf = false;
        }

        if (this._aMorphUVDraw) {
            this._aUVDraw.bindFloatArrayBuffer(target1.uvBuf);
            this._aMorphUVDraw.bindFloatArrayBuffer(target2.uvBuf);
            ctx.uvBuf = true;
        } else {
            ctx.uvBuf = false;
        }

        if (this._aMorphUV2Draw) {
            this._aUV2Draw.bindFloatArrayBuffer(target1.uvBuf2);
            this._aMorphUV2Draw.bindFloatArrayBuffer(target2.uvBuf2);
            ctx.uvBuf2 = true;
        } else {
            ctx.uvBuf2 = false;
        }

        if (this._aMorphColorDraw) {
            this._aColorDraw.bindFloatArrayBuffer(target1.colorBuf);
            this._aMorphColorDraw.bindFloatArrayBuffer(target2.colorBuf);
            ctx.colorBuf = true;
        } else {
            ctx.colorBuf = false;
        }

        if (this._uMorphFactorDraw) {
            gl.uniform1f(this._uMorphFactorDraw, this.core.factor); // Bind LERP factor
        }
    },

    pick:function (ctx) {

        var targets = this.core.targets;

        if (!targets || targets.length == 0) {
            ctx.vertexBuf = false;
            ctx.normalBuf = false;
            ctx.uvBuf = false;
            ctx.uvBuf2 = false;
            ctx.colorBuf = false;
            return;
        }

        var gl = this.program.gl;

        var target1 = targets[this.core.key1]; // Keys will update
        var target2 = targets[this.core.key2];

        if (this._aMorphVertexPick) {
            this._aVertexPick.bindFloatArrayBuffer(target1.vertexBuf);
            this._aMorphVertexPick.bindFloatArrayBuffer(target2.vertexBuf);
            ctx.vertexBuf = true;
        } else {
            ctx.vertexBuf = false;
        }

        if (this._aMorphNormalPick) {
            this._aNormalPick.bindFloatArrayBuffer(target1.normalBuf);
            this._aMorphNormalPick.bindFloatArrayBuffer(target2.normalBuf);
            ctx.normalBuf = true;
        } else {
            ctx.normalBuf = false;
        }

        if (this._aMorphUVPick) {
            this._aUVPick.bindFloatArrayBuffer(target1.uvBuf);
            this._aMorphUVPick.bindFloatArrayBuffer(target2.uvBuf);
            ctx.uvBuf = true;
        } else {
            ctx.uvBuf = false;
        }

        if (this._aMorphUV2Pick) {
            this._aUV2Pick.bindFloatArrayBuffer(target1.uvBuf2);
            this._aMorphUV2Pick.bindFloatArrayBuffer(target2.uvBuf2);
            ctx.uvBuf2 = true;
        } else {
            ctx.uvBuf2 = false;
        }

        if (this._aMorphColorPick) {
            this._aColorPick.bindFloatArrayBuffer(target1.colorBuf);
            this._aMorphColorPick.bindFloatArrayBuffer(target2.colorBuf);
            ctx.colorBuf = true;
        } else {
            ctx.colorBuf = false;
        }

        if (this._uMorphFactorPick) {
            gl.uniform1f(this._uMorphFactorPick, this.core.factor); // Bind LERP factor
        }
    }
});
/**
 * Create display state chunk type for draw render of material transform
 */
SceneJS_ChunkFactory.createChunkType({

    type: "name",

    build : function() {
        this._uPickColor = this.program.pick.getUniformLocation("SCENEJS_uPickColor");
    },

    pick : function(ctx) {

        if (this._uPickColor && this.core.name) {

            ctx.pickNames[ctx.pickIndex++] = this.core;

            var b = ctx.pickIndex >> 16 & 0xFF;
            var g = ctx.pickIndex >> 8 & 0xFF;
            var r = ctx.pickIndex & 0xFF;

            this.program.gl.uniform3fv(this._uPickColor, [r / 255, g / 255, b / 255]);
        }
    }
});SceneJS_ChunkFactory.createChunkType({

    type: "program",

    build : function() {
        this._rayPickMode = this.program.pick.getUniformLocation("SCENEJS_uRayPickMode");
    },

    draw : function(frameCtx) {

        var drawProgram = this.program.draw;

        if (frameCtx.program) {
            frameCtx.program.unbind();
        }

        drawProgram.bind();

        frameCtx.program = drawProgram;

        /*
         * HACK until we have distinct chunk for each VBO (maybe)
         */
        frameCtx.vertexBuf = false;
        frameCtx.normalBuf = false;
        frameCtx.uvBuf = false;
        frameCtx.uvBuf2 = false;
        frameCtx.colorBuf = false;

        frameCtx.geoChunkId = null; // HACK until we have distinct state chunks for VBOs and draw call

        var gl = this.program.gl;

        for (var i = 0; i < 10; i++) {
            gl.disableVertexAttribArray(i);
        }
    },

    pick : function(frameCtx) {

        var pickProgram = this.program.pick;

        if (frameCtx.program) {
            frameCtx.program.unbind();
        }

        pickProgram.bind();

        var gl = this.program.gl;

        gl.uniform1i(this._rayPickMode, frameCtx.rayPick);

        frameCtx.program = pickProgram;

        /*
        * HACK until we have distinct chunk for each VBO (maybe)
         */
        frameCtx.vertexBuf = false;
        frameCtx.normalBuf = false;
        frameCtx.uvBuf = false;
        frameCtx.uvBuf2 = false;
        frameCtx.colorBuf = false;

        frameCtx.geoChunkId = null; // HACK until we have distinct state chunks for VBOs and draw call

        for (var i = 0; i < 10; i++) {
            gl.disableVertexAttribArray(i);
        }
    }
});



/**
 *
 */
SceneJS_ChunkFactory.createChunkType({
    
    type: "renderer",

    build : function() {
    },

    drawAndPick : function(ctx) {

        if (this.core.props) {

            var gl = this.program.gl;

            if (ctx.renderer) {
                ctx.renderer.props.restoreProps(gl);
                ctx.renderer = this.core;
            }

            this.core.props.setProps(gl);
        }
    }
});
/**
 *
 */
SceneJS_ChunkFactory.createChunkType({

    type:"depthbuf",

    // Avoid reapplication of a chunk after a program switch.
    programGlobal:true,

    drawAndPick:function (ctx) {

        var enabled = this.core.enabled;

        if (ctx.depthbufEnabled != enabled) {
            var gl = this.program.gl;
            if (enabled) {
                gl.enable(gl.DEPTH_TEST);
            } else {
                gl.disable(gl.DEPTH_TEST);
            }
            ctx.depthbufEnabled = enabled;
        }

        var clearDepth = this.core.clearDepth;

        if (ctx.clearDepth != clearDepth) {
            gl.clearDepth(clearDepth);
            ctx.clearDepth = clearDepth;
        }

        var depthFunc = this.core.depthFunc;

        if (ctx.depthFunc != depthFunc) {
            gl.depthFunc(depthFunc);
            ctx.depthFunc = depthFunc;
        }
    }
});
/**
 *
 */
SceneJS_ChunkFactory.createChunkType({

    type:"colorbuf",

    // Avoid reapplication of a chunk after a program switch.
    programGlobal:true,

    build:function () {
    },

    drawAndPick:function (ctx) {

        if (!ctx.transparencyPass) { // Blending forced when rendering transparent bin

            var blendEnabled = this.core.blendEnabled;

            if (ctx.blendEnabled != blendEnabled) {
                var gl = this.program.gl;
                if (blendEnabled) {
                    gl.enable(gl.BLEND);
                } else {
                    gl.disable(gl.BLEND);
                }
                ctx.blendEnabled = blendEnabled;
            }
        }
    }
});
/**
 *
 */
SceneJS_ChunkFactory.createChunkType({

    type:"view",

    // Avoid reapplication of a chunk after a program switch.
    programGlobal:true,

    build:function () {
    },

    drawAndPick:function (ctx) {

        var scissorTestEnabled = this.core.scissorTestEnabled;

        if (ctx.scissorTestEnabled != scissorTestEnabled) {
            var gl = this.program.gl;
            if (scissorTestEnabled) {
                gl.enable(gl.SCISSOR_TEST);
            } else {
                gl.disable(gl.SCISSOR_TEST);
            }
            ctx.scissorTestEnabled = scissorTestEnabled;
        }
    }
});
/**
 *
 */
SceneJS_ChunkFactory.createChunkType({

    type: "shader",

    build : function() {
    },

    drawAndPick : function(ctx) {

        var paramsStack = this.core.paramsStack;

        if (paramsStack) {

            var program = ctx.pick ? this.program.pick : this.program.draw;
            var params;
            var name;

            for (var i = 0, len = paramsStack.length; i < len; i++) {
                params = paramsStack[i];
                for (name in params) {
                    if (params.hasOwnProperty(name)) {
                        program.setUniform(name, params[name]);  // TODO: cache locations
                    }
                }
            }
        }
    }
});/**
 *
 */
SceneJS_ChunkFactory.createChunkType({

    type: "shaderParams",

    build : function() {
    },

    drawAndPick: function(ctx) {

        var paramsStack = this.core.paramsStack;

        if (paramsStack) {

            var program = ctx.pick ? this.program.pick : this.program.draw;
            var params;
            var name;

            for (var i = 0, len = paramsStack.length; i < len; i++) {
                params = paramsStack[i];
                for (name in params) {
                    if (params.hasOwnProperty(name)) {
                        program.setUniform(name, params[name]);  // TODO: cache locations
                    }
                }
            }
        }
    }
});/**
 *
 */
SceneJS_ChunkFactory.createChunkType({

    type:"style",

    // Avoid reapplication of a chunk after a program switch.
    programGlobal:true,

    drawAndPick:function (ctx) {

        var lineWidth = this.core.lineWidth;

        if (ctx.lineWidth != lineWidth) {
            var gl = this.program.gl;
            gl.lineWidth(lineWidth);
            ctx.lineWidth = lineWidth;
        }
    }
});
SceneJS_ChunkFactory.createChunkType({

    type: "texture",

    build : function() {

        this._uTexSampler = this._uTexSampler || [];
        this._uTexMatrix = this._uTexMatrix || [];
        this._uTexBlendFactor = this._uTexBlendFactor || [];

        var layers = this.core.layers;

        if (layers) {

            var layer;
            var draw = this.program.draw;

            for (var i = 0, len = layers.length; i < len; i++) {

                layer = layers[i];

                this._uTexSampler[i] = "SCENEJS_uSampler" + i;

                this._uTexMatrix[i] = layer.matrixAsArray
                        ? draw.getUniform("SCENEJS_uLayer" + i + "Matrix")
                        : null;

                this._uTexBlendFactor[i] = draw.getUniform("SCENEJS_uLayer" + i + "BlendFactor");
            }
        }
    },

    draw : function() {

        var layers = this.core.layers;

        if (layers) {

            var draw = this.program.draw;
            var layer;

            for (var i = 0, len = layers.length; i < len; i++) {

                layer = layers[i];

                if (this._uTexSampler[i] && layer.texture) {    // Lazy-loads

                    draw.bindTexture(this._uTexSampler[i], layer.texture, i);

                    if (this._uTexMatrix[i]) {
                        this._uTexMatrix[i].setValue(layer.matrixAsArray);
                    }

                    if (this._uTexBlendFactor[i]) {
                        this._uTexBlendFactor[i].setValue(layer.blendFactor);
                    }

                } else {
                   //   draw.bindTexture(this._uTexSampler[i], null, i); // Unbind
                }
            }
        }
    }
});SceneJS_ChunkFactory.createChunkType({

    type: "xform",

    build : function() {

        var draw = this.program.draw;

        this._uMatLocationDraw = draw.getUniformLocation("SCENEJS_uMMatrix");
        this._uNormalMatLocationDraw = draw.getUniformLocation("SCENEJS_uMNMatrix");

        var pick = this.program.pick;

        this._uMatLocationPick = pick.getUniformLocation("SCENEJS_uMMatrix");
        this._uNormalMatLocationPick = pick.getUniformLocation("SCENEJS_uMNMatrix");
    },

    draw : function(ctx) {

        /* Rebuild core's matrix from matrices at cores on path up to root
         */
        if (SceneJS_configsModule.configs.forceXFormCoreRebuild === true || this.core.dirty && this.core.build) {
            this.core.build();
        }

        var gl = this.program.gl;

        if (this._uMatLocationDraw) {
            gl.uniformMatrix4fv(this._uMatLocationDraw, gl.FALSE, this.core.mat);
        }

        if (this._uNormalMatLocationDraw) {
            gl.uniformMatrix4fv(this._uNormalMatLocationDraw, gl.FALSE, this.core.normalMat);
        }

        ctx.modelMat = this.core.mat;
    },

    pick : function(ctx) {

        /* Rebuild core's matrix from matrices at cores on path up to root
         */
        if (this.core.dirty) {
            this.core.build();
        }

        var gl = this.program.gl;

        if (this._uMatLocationPick) {
            gl.uniformMatrix4fv(this._uMatLocationPick, gl.FALSE, this.core.mat);
        }

        if (this._uNormalMatLocationPick) {
            gl.uniformMatrix4fv(this._uNormalMatLocationPick, gl.FALSE, this.core.normalMat);
        }

        ctx.modelMat = this.core.mat;
    }
});
SceneJS.configure({ pluginPath: "http://xeolabs.github.com/scenejs/api/latestplugins" });

/**
 * Box geometry node type
 *
 * Usage example:
 *
 * someNode.addNode({
 *      type: "prims/box",
 *      xSize: 10,
 *      ySize: 20,
 *      zSize: 1.5,
 *      wire: false // Default
 *  });
 */
(function () {

    SceneJS.Types.addType("prims/box", {

        construct:function (params) {
            this.addNode(build.call(this, params));
        }
    });

    function build(params) {

        var x, y, z;
        if (params.size) {
            x = params.size[0];
            y = params.size[1];
            z = params.size[2];
        } else {
            // Deprecated
            x = params.xSize || 1;
            y = params.ySize || 1;
            z = params.zSize || 1;
        }

        var coreId = "prims/box_" + x + "_" + y + "_" + z + (params.wire ? "wire" : "_solid");

        // If a node core already exists for a prim with the given properties,
        // then for efficiency we'll share that core rather than create another geometry
        if (this.getScene().hasCore("geometry", coreId)) {
            return {
                type:"geometry",
                coreId:coreId
            };
        }

        // Otherwise, create a new geometry
        return {
            type:"geometry",
            primitive:params.wire ? "lines" : "triangles",
            coreId:coreId,
            positions:new Float32Array([
                x, y, z, -x, y, z, -x, -y, z, x, -y, z, // v0-v1-v2-v3 front
                x, y, z, x, -y, z, x, -y, -z, x, y, -z, // v0-v3-v4-v5 right
                x, y, z, x, y, -z, -x, y, -z, -x, y, z, // v0-v5-v6-v1 top
                -x, y, z, -x, y, -z, -x, -y, -z, -x, -y, z, // v1-v6-v7-v2 left
                -x, -y, -z, x, -y, -z, x, -y, z, -x, -y, z, // v7-v4-v3-v2 bottom
                x, -y, -z, -x, -y, -z, -x, y, -z, x, y, -z // v4-v7-v6-v5 back
            ]),
            normals:new Float32Array([
                0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, // v0-v1-v2-v3 front
                1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, // v0-v3-v4-v5 right
                0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, // v0-v5-v6-v1 top
                -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, // v1-v6-v7-v2 left
                0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, // v7-v4-v3-v2 bottom
                0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1     // v4-v7-v6-v5 back
            ]),
            uv:new Float32Array([
                x, y, 0, y, 0, 0, x, 0, // v0-v1-v2-v3 front
                0, y, 0, 0, x, 0, x, y, // v0-v3-v4-v5 right
                x, 0, x, y, 0, y, 0, 0, // v0-v5-v6-v1 top
                x, y, 0, y, 0, 0, x, 0, // v1-v6-v7-v2 left
                0, 0, x, 0, x, y, 0, y, // v7-v4-v3-v2 bottom
                0, 0, x, 0, x, y, 0, y    // v4-v7-v6-v5 back
            ]),
            indices:new Uint16Array([
                0, 1, 2, 0, 2, 3, // front
                4, 5, 6, 4, 6, 7, // right
                8, 9, 10, 8, 10, 11, // top
                12, 13, 14, 12, 14, 15, // left
                16, 17, 18, 16, 18, 19, // bottom
                20, 21, 22, 20, 22, 23   // back
            ])
        };
    }
})();


/**
 * Torus geometry node type
 *
 * Usage example:
 *
 * someNode.addNode({
 *      type: "prims/torus",
 *      tube: 0.3;
 *      segmentsR :  32,
 *      segmentsT :24,
 *      arc: Math.PI * 2,
 *      wire: false
 *  });
 */
(function () {

    SceneJS.Types.addType("prims/torus", {

        construct:function (params) {
            this.addNode(build.call(this, params));
        }
    });

    function build(params) {

        var radius = params.radius || 1;
        var tube = params.tube || 0.3;
        var segmentsR = params.segmentsR || 32;
        var segmentsT = params.segmentsT || 24;
        var arc = params.arc || Math.PI * 2;

        var coreId = "prims/torus_" + (params.wire == true ? "wire_" : "") + radius + "_" + tube + "_" + segmentsR + "_" + segmentsT + "_" + arc;

        // If a node core already exists for a prim with the given properties,
        // then for efficiency we'll share that core rather than create another geometry
        if (this.getScene().hasCore("geometry", coreId)) {
            return {
                type:"geometry",
                coreId:coreId
            };
        }

        // Otherwise, create a new geometry

        var positions = [];
        var normals = [];
        var uvs = [];
        var indices = [];

        var u;
        var v;
        var centerX;
        var centerY;
        var centerZ = 0;
        var x;
        var y;
        var z;
        var vec;

        for (var j = 0; j <= segmentsR; j++) {
            for (var i = 0; i <= segmentsT; i++) {

                u = i / segmentsT * arc;
                v = j / segmentsR * Math.PI * 2;

                centerX = radius * Math.cos(u);
                centerY = radius * Math.sin(u);

                x = (radius + tube * Math.cos(v) ) * Math.cos(u);
                y = (radius + tube * Math.cos(v) ) * Math.sin(u);
                z = tube * Math.sin(v);

                positions.push(x);
                positions.push(y);
                positions.push(z);

                uvs.push(i / segmentsT);
                uvs.push(1 - j / segmentsR);

                vec = normalize(sub([x, y, z], [centerX, centerY, centerZ], []), []);

                normals.push(vec[0]);
                normals.push(vec[1]);
                normals.push(vec[2]);
            }
        }

        var a;
        var b;
        var c;
        var d;

        for (var j = 1; j <= segmentsR; j++) {
            for (var i = 1; i <= segmentsT; i++) {

                a = ( segmentsT + 1 ) * j + i - 1;
                b = ( segmentsT + 1 ) * ( j - 1 ) + i - 1;
                c = ( segmentsT + 1 ) * ( j - 1 ) + i;
                d = ( segmentsT + 1 ) * j + i;

                indices.push(a);
                indices.push(b);
                indices.push(c);

                indices.push(c);
                indices.push(d);
                indices.push(a);
            }
        }

        return {
            type:"geometry",
            primitive:params.wire ? "lines" : "triangles",
            coreId:coreId,
            positions:new Float32Array(positions),
            normals:new Float32Array(normals),
            uv:new Float32Array(uvs),
            indices:new Uint16Array(indices)
        };
    }

    function normalize(v, dest) {
        var f = 1.0 / len(v);
        return mul(v, f, dest);
    }

    function len(v) {
        return Math.sqrt(sqLen(v));
    }

    function sqLen(v) {
        return dot(v, v);
    }

    function dot(u, v) {
        return (u[0] * v[0] + u[1] * v[1] + u[2] * v[2]);
    }

    function mul(v, s, dest) {
        dest[0] = v[0] * s;
        dest[1] = v[1] * s;
        dest[2] = v[2] * s;
        return dest;
    }

    function sub(u, v, dest) {
        dest[0] = u[0] - v[0];
        dest[1] = u[1] - v[1];
        dest[2] = u[2] - v[2];
        return dest;
    }
})();


/**
 * Sphere geometry node type
 *
 * Usage example:
 *
 * someNode.addNode({
 *      type: "prims/sphere",
 *      latitudeBands: 30, // Default
 *      longitudeBands: 30, // Default
 *      radius: 1, // Default
 *      wire: false // Default
 *  });
 */
(function () {

    SceneJS.Types.addType("prims/sphere", {

        construct:function (params) {
            this.addNode(build.call(this, params));
        }
    });

    function build(params) {

        // Thanks awfully to: http://learningwebgl.com/cookbook/index.php/How_to_draw_a_sphere

        var latitudeBands = params.latitudeBands || 30;
        var longitudeBands = params.longitudeBands || 30;
        var radius = params.radius || 1;

        var coreId = "prims/sphere_" + (params.wire ? "wire" : "_solid") + radius + "_" + longitudeBands + "_" + latitudeBands;

        // If a node core already exists for a prim with the given properties,
        // then for efficiency we'll share that core rather than create another geometry
        if (this.getScene().hasCore("geometry", coreId)) {
            return {
                type: "geometry",
                coreId:coreId
            };
        }

        // Otherwise, create a new geometry

        var positions = [];
        var normals = [];
        var uvs = [];
        for (var latNumber = 0; latNumber <= latitudeBands; latNumber++) {
            var theta = latNumber * Math.PI / latitudeBands;
            var sinTheta = Math.sin(theta);
            var cosTheta = Math.cos(theta);

            for (var longNumber = 0; longNumber <= longitudeBands; longNumber++) {
                var phi = longNumber * 2 * Math.PI / longitudeBands;
                var sinPhi = Math.sin(phi);
                var cosPhi = Math.cos(phi);

                var x = cosPhi * sinTheta;
                var y = cosTheta;
                var z = sinPhi * sinTheta;
                var u = 1- (longNumber / longitudeBands);
                var v = latNumber / latitudeBands;

                normals.push(x);
                normals.push(y);
                normals.push(z);
                uvs.push(u);
                uvs.push(v);
                positions.push(radius * x);
                positions.push(radius * y);
                positions.push(radius * z);
            }
        }

        var indices = [];
        for (var latNumber = 0; latNumber < latitudeBands; latNumber++) {
            for (var longNumber = 0; longNumber < longitudeBands; longNumber++) {
                var first = (latNumber * (longitudeBands + 1)) + longNumber;
                var second = first + longitudeBands + 1;
                indices.push(first + 1);
                indices.push(second + 1);
                indices.push(second);
                indices.push(first + 1);
                indices.push(second);
                indices.push(first);
            }
        }

        return {
            type: "geometry",
            primitive:params.wire ? "lines" : "triangles",
            coreId : coreId,
            positions : new Float32Array(positions),
            normals: new Float32Array(normals),
            uv : new Float32Array(uvs),
            indices : new Uint16Array(indices)
        };
    }
})();


/**
 * Sphere geometry node type
 *
 * @author Moritz Kornher
 *
 * Usage example:
 *
 * someNode.addNode({
 *      type: "prims/cylinder",
 *      radiusTop: 20, // Default
 *      radiusBottom: 20, // Default
 *      height: 100, // Default
 *      radialSegments: 8, // Default
 *      heightSegments: 1, // Default
 *      openEnded: false // Default
 *  });
 */

(function () {

    SceneJS.Types.addType("prims/cylinder", {

        init:function (params) {
            this.addNode(build.call(this, params));
        }
    });

    function build(params) {

        // Thanks awfully to: http://www.e-reading-lib.com/bookreader.php/143437/Pike_-_DirectX_8_Programming_Tutorial.html

        /* config */
        var radiusTop = params.radiusTop !== undefined ? params.radiusTop : 20;
        var radiusBottom = params.radiusBottom !== undefined ? params.radiusBottom : 20;
        var height = params.height !== undefined ? params.height : 100;

        var radialSegments   = params.radialSegments  || 8;
        var heightSegments   = params.heightSegments  || 1;

        var openEnded = params.openEnded || false;
        /* config end */

        var heightHalf = height / 2;
        var heightLength = height / heightSegments;

        var radialAngle = (2.0 * Math.PI / radialSegments);
        var radialLength = 1.0 / radialSegments;

        var nextRadius = this.radiusBottom;
        var radiusChange = (radiusTop-radiusBottom)/heightSegments;

        var positions = [];
        var normals = [];
        var uvs = [];
        var indices = [];

        // create vertices
        var normalY = (90.0 - (Math.atan(height / (radiusBottom - radiusTop))) * 180/Math.PI) / 90.0;

        for (var h = 0; h <= heightSegments; h++) {
            var currentRadius = radiusTop - h*radiusChange;
            var currentHeight = heightHalf - h*heightLength

            for (var i=0; i <= radialSegments; i++) {
                var x = Math.sin(i * radialAngle);
                var z = Math.cos(i * radialAngle);

                normals.push(currentRadius * x);
                normals.push(normalY); //todo
                normals.push(currentRadius * z);
                uvs.push(1 - (i*radialLength));
                uvs.push(0 + h*1/heightSegments);
                positions.push(currentRadius * x);
                positions.push(currentHeight);
                positions.push(currentRadius * z);
            }
        }

        // create faces
        for (var h = 0; h < heightSegments; h++) {
            for (var i=0; i <= radialSegments; i++) {
                var first = h * (radialSegments + 1) + i;
                var second = first + radialSegments;
                indices.push(first);
                indices.push(second);
                indices.push(second + 1);

                indices.push(first);
                indices.push(second + 1);
                indices.push(first + 1);
            }
        }

        // create top cap
        if (!openEnded && radiusTop > 0) {
            var startIndex = (positions.length/3);

            // top center
            normals.push(0.0);
            normals.push(1.0);
            normals.push(0.0);
            uvs.push(0.5);
            uvs.push(0.5);
            positions.push(0);
            positions.push(heightHalf);
            positions.push(0);

            // top triangle fan
            for (var i=0; i <= radialSegments; i++) {
                var x = Math.sin(i * radialAngle);
                var z = Math.cos(i * radialAngle);
                var tu = (0.5 * Math.sin(i * radialAngle)) + 0.5;
                var tv = (0.5 * Math.cos(i * radialAngle)) + 0.5;

                normals.push(radiusTop * x);
                normals.push(1.0);
                normals.push(radiusTop * z);
                uvs.push(tu);
                uvs.push(tv);
                positions.push(radiusTop * x);
                positions.push(heightHalf);
                positions.push(radiusTop * z);
            }

            for (var i=0; i < radialSegments; i++) {
                var center = startIndex;
                var first = startIndex + 1 + i;
                indices.push(first);
                indices.push(first + 1);
                indices.push(center);
            }
        }

        // create bottom cap
        if (!openEnded && radiusBottom > 0) {
            var startIndex = (positions.length/3);

            // top center
            normals.push(0.0);
            normals.push(-1.0);
            normals.push(0.0);
            uvs.push(0.5);
            uvs.push(0.5);
            positions.push(0);
            positions.push(0-heightHalf);
            positions.push(0);

            // top triangle fan
            for (var i=0; i <= radialSegments; i++) {
                var x = Math.sin(i * radialAngle);
                var z = Math.cos(i * radialAngle);
                var tu = (0.5 * Math.sin(i * radialAngle)) + 0.5;
                var tv = (0.5 * Math.cos(i * radialAngle)) + 0.5;

                normals.push(radiusBottom * x);
                normals.push(-1.0);
                normals.push(radiusBottom * z);
                uvs.push(tu);
                uvs.push(tv);
                positions.push(radiusBottom * x);
                positions.push(0-heightHalf);
                positions.push(radiusBottom * z);
            }

            for (var i=0; i < radialSegments; i++) {
                var center = startIndex;
                var first = startIndex + 1 + i;
                indices.push(first);
                indices.push(first + 1);
                indices.push(center);
            }
        }

        return {
            type: "geometry",
            primitive:params.wire ? "lines" : "triangles",
            coreId : "cylinder_" + (params.wire ? "wire" : "solid") + "_" + (params.openEnded ? "open" : "closed") + "_"
                + radiusTop + "_" + radiusBottom + "_" + radialSegments + "_"
                + height + "_" + heightSegments,
            positions : new Float32Array(positions),
            normals: new Float32Array(normals),
            uv : new Float32Array(uvs),
            indices : new Uint16Array(indices)
        };
    }
})();



/**
 * Orbiting camera node type
 *
 * Usage example
 * -------------
 *
 * someNode.addNode({
 *      type: "cameras/orbit",
 *      eye:{ x: y:0 },
 *      look:{ y:0 },
 *      yaw: 340,,
 *      pitch: -20,
 *      zoom: 350,
 *      zoomSensitivity:10.0,
 * });
 *
 * The camera is initially positioned at the given 'eye' and 'look', then the distance of 'eye' is zoomed out
 * away from 'look' by the amount given in 'zoom', and then 'eye' is rotated by 'yaw' and 'pitch'.
 *
 */
SceneJS.Types.addType("cameras/orbit", {

    construct:function (params) {

        var lookat = this.addNode({
            type:"lookAt",

            // A plugin node type is responsible for attaching specified
            // child nodes within itself
            nodes:params.nodes
        });

        var yaw = params.yaw || 0;
        var pitch = params.pitch || 0;
        var zoom = params.zoom || 10;
        var minPitch = params.minPitch;
        var maxPitch = params.maxPitch;
        var zoomSensitivity = params.zoomSensitivity || 1.0;

        var lastX;
//        var lastY;
        var dragging = false;

        var eye = params.eye || { x:0, y:0, z:0 };
        var look = params.look || { x:0, y:0, z:0};

        lookat.set({
            eye:{ x:eye.x, y:eye.y, z:-zoom },
            look:{ x:look.x, y:look.y, z:look.z },
            up:{ x:0, y:1, z:0 }
        });

        update();

        var canvas = this.getScene().getCanvas();

        canvas.addEventListener('mousedown', mouseDown, true);
        canvas.addEventListener('mousemove', mouseMove, true);
        canvas.addEventListener('mouseup', mouseUp, true);
        canvas.addEventListener('touchstart', touchStart, true);
        canvas.addEventListener('touchmove', touchMove, true);
        canvas.addEventListener('touchend', touchEnd, true);
        canvas.addEventListener('mousewheel', mouseWheel, true);
        canvas.addEventListener('DOMMouseScroll', mouseWheel, true);

        function mouseDown(event) {
            lastX = event.clientX;
//            lastY = event.clientY;
            dragging = true;
        }

        function touchStart(event) {
            lastX = event.targetTouches[0].clientX;
//            lastY = event.targetTouches[0].clientY;
            dragging = true;
        }

        function mouseUp() {
            dragging = false;
        }

        function touchEnd() {
            dragging = false;
        }

        function mouseMove(event) {
            var posX = event.clientX;
//            var posY = event.clientY;
            actionMove(posX );
        }

        function touchMove(event) {
            var posX = event.targetTouches[0].clientX;
//            var posY = event.targetTouches[0].clientY;
            actionMove(posX );
        }

        function actionMove(posX) {
            if (dragging) {

                yaw -= (posX - lastX) * 0.1;
//                pitch -= (posY - lastY) * 0.1;

                update();

                lastX = posX;
//                lastY = posY;
            }
        }

        function mouseWheel(event) {
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } else if (event.detail) {
                delta = -event.detail / 3;
            }
            if (delta) {
                if (delta < 0) {
                    zoom -= zoomSensitivity;
                } else {
                    zoom += zoomSensitivity;
                }
            }
            if (event.preventDefault) {
                event.preventDefault();
            }
            event.returnValue = false;
            update();

        }

        function update() {

//            if (minPitch != undefined && pitch < minPitch) {
//                pitch = minPitch;
//            }
//
//            if (maxPitch != undefined && pitch > maxPitch) {
//                pitch = maxPitch;
//            }

            var eye = [0, 0, zoom];
            var look = [0, 0, 0];
            var up = [0, 1, 0];

            // TODO: These references are to private SceneJS math methods, which are not part of API

            var eyeVec = SceneJS_math_subVec3(eye, look, []);
            var axis = SceneJS_math_cross3Vec3(up, eyeVec, []);

//            var pitchMat = SceneJS_math_rotationMat4v(pitch * 0.0174532925, axis);
            var yawMat = SceneJS_math_rotationMat4v(yaw * 0.0174532925, up);

//            var eye3 = SceneJS_math_transformPoint3(pitchMat, eye);
            var eye3 = SceneJS_math_transformPoint3(yawMat, eye);

            lookat.setEye({x:eye3[0], y:eye3[1], z:eye3[2] });
        }
    },

    setLook: function(l) {


    },

    destruct:function () {
        // TODO: remove mouse handlers
    }
});



/**
 * Plane geometry node type
 *
 * Usage example:
 *
 * someNode.addNode({
 *      type: "prims/plane",
 *      width: 10,
 *      height: 20,
 *      wire: false // Default
 *  });
 */
(function () {

    SceneJS.Types.addType("prims/plane", {

        construct:function (params) {
            this.addNode(build.call(this, params));
        }
    });

    function build(params) {

        var width = params.width || 1.0;
        var height = params.height || 1.0;

        var widthSegments = params.widthSegments || 1;
        var heightSegments = params.heightSegments || 1;

        var coreId = "prims/plane_" + (params.wire == true ? "wire_" : "") + height + "_" + widthSegments + "_" + heightSegments;

        // If a node core already exists for a prim with the given properties,
        // then for efficiency we'll share that core rather than create another geometry
        if (this.getScene().hasCore("geometry", coreId)) {
            return {
                type: "geometry",
                coreId:coreId
            };
        }

        // Otherwise, create a new geometry

        var positions = [];
        var normals = [];
        var uvs = [];
        var indices = [];

        var ix, iz;
        var halfWidth = width / 2;
        var halfHeight = height / 2;

        var gridX = widthSegments;
        var gridZ = heightSegments;

        var gridX1 = gridX + 1;
        var gridZ1 = gridZ + 1;

        var segWidth = width / gridX;
        var segHeight = height / gridZ;

        var x;
        var y;

        for (iz = 0; iz < gridZ1; iz++) {
            for (ix = 0; ix < gridX1; ix++) {

                x = ix * segWidth - halfWidth;
                y = iz * segHeight - halfHeight;

                positions.push(x);
                positions.push(-y);
                positions.push(0);

                normals.push(0);
                normals.push(0);
                normals.push(1);
            }
        }

        var a;
        var b;
        var c;
        var d;

        for (iz = 0; iz < gridZ; iz++) {
            for (ix = 0; ix < gridX; ix++) {

                a = ix + gridX1 * iz;
                b = ix + gridX1 * ( iz + 1 );
                c = ( ix + 1 ) + gridX1 * ( iz + 1 );
                d = ( ix + 1 ) + gridX1 * iz;

                indices.push(a);
                indices.push(b);
                indices.push(c);

                indices.push(c);
                indices.push(d);
                indices.push(a);

                // a
                uvs.push(ix / gridX);
                uvs.push(1 - iz / gridZ);

                //b
                uvs.push(ix / gridX);
                uvs.push(1 - ( iz + 1 ) / gridZ);

                //c
                uvs.push(( ix + 1 ) / gridX);
                uvs.push(1 - ( iz + 1 ) / gridZ);

                //c
                uvs.push(( ix + 1 ) / gridX);
                uvs.push(1 - ( iz + 1 ) / gridZ);

                //d
                uvs.push(( ix + 1 ) / gridX, 1 - iz / gridZ);
                uvs.push(1 - iz / gridZ);

                //a
                uvs.push(ix / gridX);
                uvs.push(1 - iz / gridZ);
            }
        }

        return {
            type: "geometry",
            primitive:params.wire ? "lines" : "triangles",
            coreId:coreId,
            positions:new Float32Array(positions),
            normals:new Float32Array(normals),
            uv:new Float32Array(uvs),
            indices:new Uint16Array(indices)
        };
    }
})();



SceneJS.Types.addType("prims/grid", {

    construct:function (params) {

        this._translate = this.addNode({
            type:"translate"
        });

        this._scale = this._translate.addNode({
            type:"scale",
            x:1000,
            y:.5,
            z:1000,
            nodes:[
                {
                    type:"rotate",
                    x:1,
                    angle:90,
                    nodes:[
                        {
                            type:"prims/plane",
                            wire:params.wire != false,
                            widthSegments:params.xSegments || 200,
                            heightSegments:params.zSegments || 200
                        }
                    ]
                }
            ]
        });

        if (params.pos) {
            this.setPos(params.pos);
        }

        if (params.size) {
            this.setSize(params.size);
        }
    },

    setPos:function (pos) {
        this._translate.setXYZ(pos);
    },

    setSize:function (size) {
        this._scale.setXYZ(size);
    }
});



/**
 * Teapot geometry node type
 *
 * Usage example:
 *
 * someNode.addNode({
 *      type: "prims/teapot",
 *      wire: false // Default
 *  });
 */
(function () {

    SceneJS.Types.addType("prims/teapot", {

        construct:function (params) {
            this.addNode(build.call(this, params));
        }
    });

    function build(params) {

        var coreId = "prims/teapot_" + (params.wire ? "wire" : "_solid");

        // If a node core already exists for a prim with the given properties,
        // then for efficiency we'll share that core rather than create another geometry
        if (this.getScene().hasCore("geometry", coreId)) {
            return {
                type: "geometry",
                coreId:coreId
            };
        }

        // Otherwise, create a new geometry

        var positions = [
            [-3.000000, 1.650000, 0.000000],
            [-2.987110, 1.650000, -0.098438],
            [-2.987110, 1.650000, 0.098438],
            [-2.985380, 1.567320, -0.049219],
            [-2.985380, 1.567320, 0.049219],
            [-2.983500, 1.483080, 0.000000],
            [-2.981890, 1.723470, -0.049219],
            [-2.981890, 1.723470, 0.049219],
            [-2.976560, 1.798530, 0.000000],
            [-2.970900, 1.486210, -0.098438],
            [-2.970900, 1.486210, 0.098438],
            [-2.963880, 1.795340, -0.098438],
            [-2.963880, 1.795340, 0.098438],
            [-2.962210, 1.570170, -0.133594],
            [-2.962210, 1.570170, 0.133594],
            [-2.958640, 1.720570, -0.133594],
            [-2.958640, 1.720570, 0.133594],
            [-2.953130, 1.650000, -0.168750],
            [-2.953130, 1.650000, 0.168750],
            [-2.952470, 1.403740, -0.049219],
            [-2.952470, 1.403740, 0.049219],
            [-2.937700, 1.494470, -0.168750],
            [-2.937700, 1.494470, 0.168750],
            [-2.935230, 1.852150, -0.049219],
            [-2.935230, 1.852150, 0.049219],
            [-2.933590, 1.320120, 0.000000],
            [-2.930450, 1.786930, -0.168750],
            [-2.930450, 1.786930, 0.168750],
            [-2.930370, 1.411500, -0.133594],
            [-2.930370, 1.411500, 0.133594],
            [-2.921880, 1.325530, -0.098438],
            [-2.921880, 1.325530, 0.098438],
            [-2.912780, 1.844170, -0.133594],
            [-2.912780, 1.844170, 0.133594],
            [-2.906250, 1.910160, 0.000000],
            [-2.894230, 1.904570, -0.098438],
            [-2.894230, 1.904570, 0.098438],
            [-2.891380, 1.579100, -0.196875],
            [-2.891380, 1.579100, 0.196875],
            [-2.890990, 1.339800, -0.168750],
            [-2.890990, 1.339800, 0.168750],
            [-2.890650, 1.712080, -0.196875],
            [-2.890650, 1.712080, 0.196875],
            [-2.883460, 1.245790, -0.048343],
            [-2.883460, 1.245790, 0.048343],
            [-2.863460, 1.257130, -0.132718],
            [-2.863460, 1.257130, 0.132718],
            [-2.862660, 1.434830, -0.196875],
            [-2.862660, 1.434830, 0.196875],
            [-2.862550, 1.889830, -0.168750],
            [-2.862550, 1.889830, 0.168750],
            [-2.850000, 1.650000, -0.225000],
            [-2.850000, 1.650000, 0.225000],
            [-2.849710, 1.161550, 0.000000],
            [-2.847100, 1.820820, -0.196875],
            [-2.847100, 1.820820, 0.196875],
            [-2.841940, 1.946920, -0.049219],
            [-2.841940, 1.946920, 0.049219],
            [-2.829000, 1.761400, -0.225000],
            [-2.829000, 1.761400, 0.225000],
            [-2.828670, 1.175980, -0.094933],
            [-2.828670, 1.175980, 0.094933],
            [-2.824700, 1.521940, -0.225000],
            [-2.824700, 1.521940, 0.225000],
            [-2.821150, 1.935200, -0.133594],
            [-2.821150, 1.935200, 0.133594],
            [-2.812310, 1.187190, -0.168750],
            [-2.812310, 1.187190, 0.168750],
            [-2.805010, 1.289970, -0.196875],
            [-2.805010, 1.289970, 0.196875],
            [-2.797270, 1.383110, -0.225000],
            [-2.797270, 1.383110, 0.225000],
            [-2.789060, 1.990140, 0.000000],
            [-2.788360, 1.699320, -0.196875],
            [-2.788360, 1.699320, 0.196875],
            [-2.778210, 1.982830, -0.098438],
            [-2.778210, 1.982830, 0.098438],
            [-2.774420, 1.527380, -0.196875],
            [-2.774420, 1.527380, 0.196875],
            [-2.773560, 1.098600, -0.084375],
            [-2.773560, 1.098600, 0.084375],
            [-2.766410, 1.845120, -0.225000],
            [-2.766410, 1.845120, 0.225000],
            [-2.760340, 1.900900, -0.196875],
            [-2.760340, 1.900900, 0.196875],
            [-2.749600, 1.963560, -0.168750],
            [-2.749600, 1.963560, 0.168750],
            [-2.748310, 1.785700, -0.196875],
            [-2.748310, 1.785700, 0.196875],
            [-2.746880, 1.650000, -0.168750],
            [-2.746880, 1.650000, 0.168750],
            [-2.731250, 1.007810, 0.000000],
            [-2.727560, 1.735870, -0.168750],
            [-2.727560, 1.735870, 0.168750],
            [-2.720360, 1.690830, -0.133594],
            [-2.720360, 1.690830, 0.133594],
            [-2.719480, 1.249770, -0.225000],
            [-2.719480, 1.249770, 0.225000],
            [-2.716780, 1.144680, -0.196875],
            [-2.716780, 1.144680, 0.196875],
            [-2.712890, 1.650000, -0.098438],
            [-2.712890, 1.650000, 0.098438],
            [-2.708990, 1.541770, -0.133594],
            [-2.708990, 1.541770, 0.133594],
            [-2.703540, 1.426410, -0.168750],
            [-2.703540, 1.426410, 0.168750],
            [-2.700980, 1.037840, -0.168750],
            [-2.700980, 1.037840, 0.168750],
            [-2.700000, 1.650000, 0.000000],
            [-2.699650, 2.010790, -0.048346],
            [-2.699650, 2.010790, 0.048346],
            [-2.697120, 1.687930, -0.049219],
            [-2.697120, 1.687930, 0.049219],
            [-2.694130, 1.727460, -0.098438],
            [-2.694130, 1.727460, 0.098438],
            [-2.686620, 1.546690, -0.049219],
            [-2.686620, 1.546690, 0.049219],
            [-2.682630, 1.762350, -0.133594],
            [-2.682630, 1.762350, 0.133594],
            [-2.681480, 1.996460, -0.132721],
            [-2.681480, 1.996460, 0.132721],
            [-2.681440, 1.724270, 0.000000],
            [-2.675740, 1.270850, -0.196875],
            [-2.675740, 1.270850, 0.196875],
            [-2.672650, 1.440680, -0.098438],
            [-2.672650, 1.440680, 0.098438],
            [-2.670260, 1.800400, -0.168750],
            [-2.670260, 1.800400, 0.168750],
            [-2.667800, 1.846230, -0.196875],
            [-2.667800, 1.846230, 0.196875],
            [-2.662790, 1.905100, -0.225000],
            [-2.662790, 1.905100, 0.225000],
            [-2.660940, 1.446090, 0.000000],
            [-2.660180, 1.754370, -0.049219],
            [-2.660180, 1.754370, 0.049219],
            [-2.638580, 1.785670, -0.098438],
            [-2.638580, 1.785670, 0.098438],
            [-2.634380, 1.103910, -0.225000],
            [-2.634380, 1.103910, 0.225000],
            [-2.630740, 1.956740, -0.196875],
            [-2.630740, 1.956740, 0.196875],
            [-2.626560, 1.780080, 0.000000],
            [-2.625000, 2.043750, 0.000000],
            [-2.624640, 1.305020, -0.132813],
            [-2.624640, 1.305020, 0.132813],
            [-2.606420, 1.317450, -0.048438],
            [-2.606420, 1.317450, 0.048438],
            [-2.606320, 2.026440, -0.094945],
            [-2.606320, 2.026440, 0.094945],
            [-2.591800, 2.012990, -0.168750],
            [-2.591800, 2.012990, 0.168750],
            [-2.571730, 1.834290, -0.168750],
            [-2.571730, 1.834290, 0.168750],
            [-2.567770, 1.169970, -0.168750],
            [-2.567770, 1.169970, 0.168750],
            [-2.554600, 1.183040, -0.095315],
            [-2.554600, 1.183040, 0.095315],
            [-2.549750, 1.890590, -0.196875],
            [-2.549750, 1.890590, 0.196875],
            [-2.549540, 0.878984, -0.084375],
            [-2.549540, 0.878984, 0.084375],
            [-2.546430, 1.831970, -0.132721],
            [-2.546430, 1.831970, 0.132721],
            [-2.537500, 1.200000, 0.000000],
            [-2.527210, 1.819200, -0.048346],
            [-2.527210, 1.819200, 0.048346],
            [-2.518750, 1.945310, -0.225000],
            [-2.518750, 1.945310, 0.225000],
            [-2.516830, 0.932671, -0.196875],
            [-2.516830, 0.932671, 0.196875],
            [-2.471840, 1.006490, -0.196875],
            [-2.471840, 1.006490, 0.196875],
            [-2.445700, 1.877640, -0.168750],
            [-2.445700, 1.877640, 0.168750],
            [-2.439130, 1.060180, -0.084375],
            [-2.439130, 1.060180, 0.084375],
            [-2.431180, 1.864180, -0.094945],
            [-2.431180, 1.864180, 0.094945],
            [-2.412500, 1.846870, 0.000000],
            [-2.388280, 0.716602, 0.000000],
            [-2.382250, 0.737663, -0.095854],
            [-2.382250, 0.737663, 0.095854],
            [-2.378840, 2.052020, -0.084375],
            [-2.378840, 2.052020, 0.084375],
            [-2.377660, 0.753680, -0.168750],
            [-2.377660, 0.753680, 0.168750],
            [-2.364750, 0.798761, -0.199836],
            [-2.364750, 0.798761, 0.199836],
            [-2.354300, 0.835254, -0.225000],
            [-2.354300, 0.835254, 0.225000],
            [-2.343840, 0.871747, -0.199836],
            [-2.343840, 0.871747, 0.199836],
            [-2.341150, 1.999720, -0.196875],
            [-2.341150, 1.999720, 0.196875],
            [-2.330930, 0.916827, -0.168750],
            [-2.330930, 0.916827, 0.168750],
            [-2.320310, 0.953906, 0.000000],
            [-2.289320, 1.927820, -0.196875],
            [-2.289320, 1.927820, 0.196875],
            [-2.251620, 1.875520, -0.084375],
            [-2.251620, 1.875520, 0.084375],
            [-2.247410, 0.882285, -0.084375],
            [-2.247410, 0.882285, 0.084375],
            [-2.173630, 0.844043, 0.000000],
            [-2.168530, 0.826951, -0.097184],
            [-2.168530, 0.826951, 0.097184],
            [-2.164770, 0.814364, -0.168750],
            [-2.164770, 0.814364, 0.168750],
            [-2.156880, 0.786694, -0.187068],
            [-2.156880, 0.786694, 0.187068],
            [-2.156250, 2.092970, 0.000000],
            [-2.154120, 0.740520, -0.215193],
            [-2.154120, 0.740520, 0.215193],
            [-2.150170, 0.694734, -0.215193],
            [-2.150170, 0.694734, 0.215193],
            [-2.147420, 0.648560, -0.187068],
            [-2.147420, 0.648560, 0.187068],
            [-2.144960, 0.612777, -0.132948],
            [-2.144960, 0.612777, 0.132948],
            [-2.143710, 0.591789, -0.048573],
            [-2.143710, 0.591789, 0.048573],
            [-2.142330, 2.058360, -0.168750],
            [-2.142330, 2.058360, 0.168750],
            [-2.111720, 1.982230, -0.225000],
            [-2.111720, 1.982230, 0.225000],
            [-2.084470, 0.789526, -0.048905],
            [-2.084470, 0.789526, 0.048905],
            [-2.081100, 1.906090, -0.168750],
            [-2.081100, 1.906090, 0.168750],
            [-2.078340, 0.770387, -0.133280],
            [-2.078340, 0.770387, 0.133280],
            [-2.067190, 1.871480, 0.000000],
            [-2.000000, 0.750000, 0.000000],
            [-1.995700, 0.737109, -0.098438],
            [-1.995700, 0.737109, 0.098438],
            [-1.984380, 0.703125, -0.168750],
            [-1.984380, 0.703125, 0.168750],
            [-1.978520, 0.591650, 0.000000],
            [-1.969370, 0.670825, -0.202656],
            [-1.969370, 0.670825, 0.202656],
            [-1.968360, 0.655078, -0.210938],
            [-1.968360, 0.655078, 0.210938],
            [-1.960000, 0.750000, -0.407500],
            [-1.960000, 0.750000, 0.407500],
            [-1.958730, 0.925195, -0.201561],
            [-1.958730, 0.925195, 0.201561],
            [-1.957030, 1.100390, 0.000000],
            [-1.950000, 0.600000, -0.225000],
            [-1.950000, 0.600000, 0.225000],
            [-1.938950, 0.591650, -0.403123],
            [-1.938950, 0.591650, 0.403123],
            [-1.931640, 0.544922, -0.210938],
            [-1.931640, 0.544922, 0.210938],
            [-1.930690, 0.522583, -0.198676],
            [-1.930690, 0.522583, 0.198676],
            [-1.921880, 0.453516, 0.000000],
            [-1.917890, 1.100390, -0.398745],
            [-1.917890, 1.100390, 0.398745],
            [-1.915620, 0.496875, -0.168750],
            [-1.915620, 0.496875, 0.168750],
            [-1.904300, 0.462891, -0.098438],
            [-1.904300, 0.462891, 0.098438],
            [-1.900000, 0.450000, 0.000000],
            [-1.892280, 0.670825, -0.593047],
            [-1.892280, 0.670825, 0.593047],
            [-1.883440, 0.453516, -0.391582],
            [-1.883440, 0.453516, 0.391582],
            [-1.882060, 0.925195, -0.589845],
            [-1.882060, 0.925195, 0.589845],
            [-1.881390, 1.286130, -0.193602],
            [-1.881390, 1.286130, 0.193602],
            [-1.855120, 0.522583, -0.581402],
            [-1.855120, 0.522583, 0.581402],
            [-1.845000, 0.750000, -0.785000],
            [-1.845000, 0.750000, 0.785000],
            [-1.843750, 1.471870, 0.000000],
            [-1.833170, 1.890680, -0.084375],
            [-1.833170, 1.890680, 0.084375],
            [-1.831800, 1.946490, -0.196875],
            [-1.831800, 1.946490, 0.196875],
            [-1.829920, 2.023230, -0.196875],
            [-1.829920, 2.023230, 0.196875],
            [-1.828550, 2.079040, -0.084375],
            [-1.828550, 2.079040, 0.084375],
            [-1.825180, 0.591650, -0.776567],
            [-1.825180, 0.591650, 0.776567],
            [-1.817580, 0.343945, -0.187036],
            [-1.817580, 0.343945, 0.187036],
            [-1.807750, 1.286130, -0.566554],
            [-1.807750, 1.286130, 0.566554],
            [-1.806870, 1.471870, -0.375664],
            [-1.806870, 1.471870, 0.375664],
            [-1.805360, 1.100390, -0.768135],
            [-1.805360, 1.100390, 0.768135],
            [-1.772930, 0.453516, -0.754336],
            [-1.772930, 0.453516, 0.754336],
            [-1.750000, 0.234375, 0.000000],
            [-1.746440, 0.343945, -0.547339],
            [-1.746440, 0.343945, 0.547339],
            [-1.744330, 0.670825, -0.949871],
            [-1.744330, 0.670825, 0.949871],
            [-1.734910, 0.925195, -0.944741],
            [-1.734910, 0.925195, 0.944741],
            [-1.715000, 0.234375, -0.356563],
            [-1.715000, 0.234375, 0.356562],
            [-1.710080, 0.522583, -0.931218],
            [-1.710080, 0.522583, 0.931218],
            [-1.700860, 1.471870, -0.723672],
            [-1.700860, 1.471870, 0.723672],
            [-1.666400, 1.286130, -0.907437],
            [-1.666400, 1.286130, 0.907437],
            [-1.662500, 0.750000, -1.125000],
            [-1.662500, 0.750000, 1.125000],
            [-1.655160, 1.860940, -0.170322],
            [-1.655160, 1.860940, 0.170322],
            [-1.647420, 0.159961, -0.169526],
            [-1.647420, 0.159961, 0.169526],
            [-1.644640, 0.591650, -1.112920],
            [-1.644640, 0.591650, 1.112920],
            [-1.626780, 1.100390, -1.100830],
            [-1.626780, 1.100390, 1.100830],
            [-1.614370, 0.234375, -0.686875],
            [-1.614370, 0.234375, 0.686875],
            [-1.609890, 0.343945, -0.876660],
            [-1.609890, 0.343945, 0.876660],
            [-1.600000, 1.875000, 0.000000],
            [-1.597560, 0.453516, -1.081060],
            [-1.597560, 0.453516, 1.081060],
            [-1.590370, 1.860940, -0.498428],
            [-1.590370, 1.860940, 0.498428],
            [-1.584380, 1.910160, -0.168750],
            [-1.584380, 1.910160, 0.168750],
            [-1.582940, 0.159961, -0.496099],
            [-1.582940, 0.159961, 0.496099],
            [-1.578130, 0.085547, 0.000000],
            [-1.550000, 1.987500, -0.225000],
            [-1.550000, 1.987500, 0.225000],
            [-1.546560, 0.085547, -0.321543],
            [-1.546560, 0.085547, 0.321543],
            [-1.532970, 0.670825, -1.265670],
            [-1.532970, 0.670825, 1.265670],
            [-1.532620, 1.471870, -1.037110],
            [-1.532620, 1.471870, 1.037110],
            [-1.524690, 0.925195, -1.258830],
            [-1.524690, 0.925195, 1.258830],
            [-1.523670, 0.042773, -0.156792],
            [-1.523670, 0.042773, 0.156792],
            [-1.515630, 2.064840, -0.168750],
            [-1.515630, 2.064840, 0.168750],
            [-1.502870, 0.522583, -1.240810],
            [-1.502870, 0.522583, 1.240810],
            [-1.500000, 0.000000, 0.000000],
            [-1.500000, 2.100000, 0.000000],
            [-1.500000, 2.250000, 0.000000],
            [-1.470000, 0.000000, -0.305625],
            [-1.470000, 0.000000, 0.305625],
            [-1.470000, 2.250000, -0.305625],
            [-1.470000, 2.250000, 0.305625],
            [-1.466020, 1.860940, -0.798320],
            [-1.466020, 1.860940, 0.798320],
            [-1.464490, 1.286130, -1.209120],
            [-1.464490, 1.286130, 1.209120],
            [-1.464030, 0.042773, -0.458833],
            [-1.464030, 0.042773, 0.458833],
            [-1.459860, 2.286910, -0.150226],
            [-1.459860, 2.286910, 0.150226],
            [-1.459170, 0.159961, -0.794590],
            [-1.459170, 0.159961, 0.794590],
            [-1.455820, 0.085547, -0.619414],
            [-1.455820, 0.085547, 0.619414],
            [-1.454690, 0.234375, -0.984375],
            [-1.454690, 0.234375, 0.984375],
            [-1.449220, 2.323830, 0.000000],
            [-1.420230, 2.323830, -0.295278],
            [-1.420230, 2.323830, 0.295278],
            [-1.420000, 0.750000, -1.420000],
            [-1.420000, 0.750000, 1.420000],
            [-1.414820, 0.343945, -1.168120],
            [-1.414820, 0.343945, 1.168120],
            [-1.411910, 2.336130, -0.145291],
            [-1.411910, 2.336130, 0.145291],
            [-1.404750, 0.591650, -1.404750],
            [-1.404750, 0.591650, 1.404750],
            [-1.403130, 2.348440, 0.000000],
            [-1.402720, 2.286910, -0.439618],
            [-1.402720, 2.286910, 0.439618],
            [-1.400000, 2.250000, 0.000000],
            [-1.389490, 1.100390, -1.389490],
            [-1.389490, 1.100390, 1.389490],
            [-1.383750, 0.000000, -0.588750],
            [-1.383750, 0.000000, 0.588750],
            [-1.383750, 2.250000, -0.588750],
            [-1.383750, 2.250000, 0.588750],
            [-1.380470, 2.323830, 0.000000],
            [-1.377880, 2.336130, -0.141789],
            [-1.377880, 2.336130, 0.141789],
            [-1.376330, 2.286910, -0.141630],
            [-1.376330, 2.286910, 0.141630],
            [-1.375060, 2.348440, -0.285887],
            [-1.375060, 2.348440, 0.285887],
            [-1.372000, 2.250000, -0.285250],
            [-1.372000, 2.250000, 0.285250],
            [-1.364530, 0.453516, -1.364530],
            [-1.364530, 0.453516, 1.364530],
            [-1.356650, 2.336130, -0.425177],
            [-1.356650, 2.336130, 0.425177],
            [-1.352860, 2.323830, -0.281271],
            [-1.352860, 2.323830, 0.281271],
            [-1.349570, 0.042773, -0.734902],
            [-1.349570, 0.042773, 0.734902],
            [-1.336900, 2.323830, -0.568818],
            [-1.336900, 2.323830, 0.568818],
            [-1.323950, 2.336130, -0.414929],
            [-1.323950, 2.336130, 0.414929],
            [-1.322460, 2.286910, -0.414464],
            [-1.322460, 2.286910, 0.414464],
            [-1.311820, 0.085547, -0.887695],
            [-1.311820, 0.085547, 0.887695],
            [-1.309060, 1.471870, -1.309060],
            [-1.309060, 1.471870, 1.309060],
            [-1.300000, 2.250000, 0.000000],
            [-1.294380, 2.348440, -0.550727],
            [-1.294380, 2.348440, 0.550727],
            [-1.293050, 2.286910, -0.704126],
            [-1.293050, 2.286910, 0.704126],
            [-1.291500, 2.250000, -0.549500],
            [-1.291500, 2.250000, 0.549500],
            [-1.288390, 1.860940, -1.063730],
            [-1.288390, 1.860940, 1.063730],
            [-1.282370, 0.159961, -1.058760],
            [-1.282370, 0.159961, 1.058760],
            [-1.274000, 2.250000, -0.264875],
            [-1.274000, 2.250000, 0.264875],
            [-1.273480, 2.323830, -0.541834],
            [-1.273480, 2.323830, 0.541834],
            [-1.267660, 2.274900, -0.130448],
            [-1.267660, 2.274900, 0.130448],
            [-1.265670, 0.670825, -1.532970],
            [-1.265670, 0.670825, 1.532970],
            [-1.260940, 2.299800, 0.000000],
            [-1.258830, 0.925195, -1.524690],
            [-1.258830, 0.925195, 1.524690],
            [-1.250570, 2.336130, -0.680997],
            [-1.250570, 2.336130, 0.680997],
            [-1.246880, 0.000000, -0.843750],
            [-1.246880, 0.000000, 0.843750],
            [-1.246880, 2.250000, -0.843750],
            [-1.246880, 2.250000, 0.843750],
            [-1.242500, 0.234375, -1.242500],
            [-1.242500, 0.234375, 1.242500],
            [-1.240810, 0.522583, -1.502870],
            [-1.240810, 0.522583, 1.502870],
            [-1.235720, 2.299800, -0.256916],
            [-1.235720, 2.299800, 0.256916],
            [-1.220430, 2.336130, -0.664583],
            [-1.220430, 2.336130, 0.664583],
            [-1.219060, 2.286910, -0.663837],
            [-1.219060, 2.286910, 0.663837],
            [-1.218050, 2.274900, -0.381740],
            [-1.218050, 2.274900, 0.381740],
            [-1.209120, 1.286130, -1.464490],
            [-1.209120, 1.286130, 1.464490],
            [-1.204660, 2.323830, -0.815186],
            [-1.204660, 2.323830, 0.815186],
            [-1.199250, 2.250000, -0.510250],
            [-1.199250, 2.250000, 0.510250],
            [-1.196510, 2.319430, -0.123125],
            [-1.196510, 2.319430, 0.123125],
            [-1.186040, 0.042773, -0.979229],
            [-1.186040, 0.042773, 0.979229],
            [-1.168120, 0.343945, -1.414820],
            [-1.168120, 0.343945, 1.414820],
            [-1.166350, 2.348440, -0.789258],
            [-1.166350, 2.348440, 0.789258],
            [-1.163750, 2.250000, -0.787500],
            [-1.163750, 2.250000, 0.787500],
            [-1.163220, 2.299800, -0.494918],
            [-1.163220, 2.299800, 0.494918],
            [-1.156250, 2.339060, 0.000000],
            [-1.149680, 2.319430, -0.360312],
            [-1.149680, 2.319430, 0.360312],
            [-1.147520, 2.323830, -0.776514],
            [-1.147520, 2.323830, 0.776514],
            [-1.136370, 2.286910, -0.938220],
            [-1.136370, 2.286910, 0.938220],
            [-1.133120, 2.339060, -0.235586],
            [-1.133120, 2.339060, 0.235586],
            [-1.125000, 0.750000, -1.662500],
            [-1.125000, 0.750000, 1.662500],
            [-1.122810, 2.274900, -0.611424],
            [-1.122810, 2.274900, 0.611424],
            [-1.120470, 0.085547, -1.120470],
            [-1.120470, 0.085547, 1.120470],
            [-1.112920, 0.591650, -1.644640],
            [-1.112920, 0.591650, 1.644640],
            [-1.100830, 1.100390, -1.626780],
            [-1.100830, 1.100390, 1.626780],
            [-1.099040, 2.336130, -0.907402],
            [-1.099040, 2.336130, 0.907402],
            [-1.081060, 0.453516, -1.597560],
            [-1.081060, 0.453516, 1.597560],
            [-1.080630, 2.250000, -0.731250],
            [-1.080630, 2.250000, 0.731250],
            [-1.072550, 2.336130, -0.885531],
            [-1.072550, 2.336130, 0.885531],
            [-1.071350, 2.286910, -0.884537],
            [-1.071350, 2.286910, 0.884537],
            [-1.066640, 2.339060, -0.453828],
            [-1.066640, 2.339060, 0.453828],
            [-1.065000, 0.000000, -1.065000],
            [-1.065000, 0.000000, 1.065000],
            [-1.065000, 2.250000, -1.065000],
            [-1.065000, 2.250000, 1.065000],
            [-1.063730, 1.860940, -1.288390],
            [-1.063730, 1.860940, 1.288390],
            [-1.059790, 2.319430, -0.577104],
            [-1.059790, 2.319430, 0.577104],
            [-1.058760, 0.159961, -1.282370],
            [-1.058760, 0.159961, 1.282370],
            [-1.048150, 2.299800, -0.709277],
            [-1.048150, 2.299800, 0.709277],
            [-1.037110, 1.471870, -1.532620],
            [-1.037110, 1.471870, 1.532620],
            [-1.028940, 2.323830, -1.028940],
            [-1.028940, 2.323830, 1.028940],
            [-0.996219, 2.348440, -0.996219],
            [-0.996219, 2.348440, 0.996219],
            [-0.994000, 2.250000, -0.994000],
            [-0.994000, 2.250000, 0.994000],
            [-0.986761, 2.274900, -0.814698],
            [-0.986761, 2.274900, 0.814698],
            [-0.984375, 0.234375, -1.454690],
            [-0.984375, 0.234375, 1.454690],
            [-0.980719, 2.369530, -0.100920],
            [-0.980719, 2.369530, 0.100920],
            [-0.980133, 2.323830, -0.980133],
            [-0.980133, 2.323830, 0.980133],
            [-0.979229, 0.042773, -1.186040],
            [-0.979229, 0.042773, 1.186040],
            [-0.961133, 2.339060, -0.650391],
            [-0.961133, 2.339060, 0.650391],
            [-0.949871, 0.670825, -1.744330],
            [-0.949871, 0.670825, 1.744330],
            [-0.944741, 0.925195, -1.734910],
            [-0.944741, 0.925195, 1.734910],
            [-0.942332, 2.369530, -0.295330],
            [-0.942332, 2.369530, 0.295330],
            [-0.938220, 2.286910, -1.136370],
            [-0.938220, 2.286910, 1.136370],
            [-0.931373, 2.319430, -0.768968],
            [-0.931373, 2.319430, 0.768968],
            [-0.931218, 0.522583, -1.710080],
            [-0.931218, 0.522583, 1.710080],
            [-0.923000, 2.250000, -0.923000],
            [-0.923000, 2.250000, 0.923000],
            [-0.907437, 1.286130, -1.666400],
            [-0.907437, 1.286130, 1.666400],
            [-0.907402, 2.336130, -1.099040],
            [-0.907402, 2.336130, 1.099040],
            [-0.895266, 2.299800, -0.895266],
            [-0.895266, 2.299800, 0.895266],
            [-0.887695, 0.085547, -1.311820],
            [-0.887695, 0.085547, 1.311820],
            [-0.885531, 2.336130, -1.072550],
            [-0.885531, 2.336130, 1.072550],
            [-0.884537, 2.286910, -1.071350],
            [-0.884537, 2.286910, 1.071350],
            [-0.876660, 0.343945, -1.609890],
            [-0.876660, 0.343945, 1.609890],
            [-0.868654, 2.369530, -0.473023],
            [-0.868654, 2.369530, 0.473023],
            [-0.843750, 0.000000, -1.246880],
            [-0.843750, 0.000000, 1.246880],
            [-0.843750, 2.250000, -1.246880],
            [-0.843750, 2.250000, 1.246880],
            [-0.825000, 2.400000, 0.000000],
            [-0.820938, 2.339060, -0.820938],
            [-0.820938, 2.339060, 0.820938],
            [-0.815186, 2.323830, -1.204660],
            [-0.815186, 2.323830, 1.204660],
            [-0.814698, 2.274900, -0.986761],
            [-0.814698, 2.274900, 0.986761],
            [-0.808500, 2.400000, -0.168094],
            [-0.808500, 2.400000, 0.168094],
            [-0.798320, 1.860940, -1.466020],
            [-0.798320, 1.860940, 1.466020],
            [-0.794590, 0.159961, -1.459170],
            [-0.794590, 0.159961, 1.459170],
            [-0.789258, 2.348440, -1.166350],
            [-0.789258, 2.348440, 1.166350],
            [-0.787500, 2.250000, -1.163750],
            [-0.787500, 2.250000, 1.163750],
            [-0.785000, 0.750000, -1.845000],
            [-0.785000, 0.750000, 1.845000],
            [-0.776567, 0.591650, -1.825180],
            [-0.776567, 0.591650, 1.825180],
            [-0.776514, 2.323830, -1.147520],
            [-0.776514, 2.323830, 1.147520],
            [-0.768968, 2.319430, -0.931373],
            [-0.768968, 2.319430, 0.931373],
            [-0.768135, 1.100390, -1.805360],
            [-0.768135, 1.100390, 1.805360],
            [-0.763400, 2.369530, -0.630285],
            [-0.763400, 2.369530, 0.630285],
            [-0.761063, 2.400000, -0.323813],
            [-0.761063, 2.400000, 0.323813],
            [-0.754336, 0.453516, -1.772930],
            [-0.754336, 0.453516, 1.772930],
            [-0.734902, 0.042773, -1.349570],
            [-0.734902, 0.042773, 1.349570],
            [-0.731250, 2.250000, -1.080630],
            [-0.731250, 2.250000, 1.080630],
            [-0.723672, 1.471870, -1.700860],
            [-0.723672, 1.471870, 1.700860],
            [-0.709277, 2.299800, -1.048150],
            [-0.709277, 2.299800, 1.048150],
            [-0.704126, 2.286910, -1.293050],
            [-0.704126, 2.286910, 1.293050],
            [-0.686875, 0.234375, -1.614370],
            [-0.686875, 0.234375, 1.614370],
            [-0.685781, 2.400000, -0.464063],
            [-0.685781, 2.400000, 0.464063],
            [-0.680997, 2.336130, -1.250570],
            [-0.680997, 2.336130, 1.250570],
            [-0.664583, 2.336130, -1.220430],
            [-0.664583, 2.336130, 1.220430],
            [-0.663837, 2.286910, -1.219060],
            [-0.663837, 2.286910, 1.219060],
            [-0.650391, 2.339060, -0.961133],
            [-0.650391, 2.339060, 0.961133],
            [-0.631998, 2.430470, -0.064825],
            [-0.631998, 2.430470, 0.064825],
            [-0.630285, 2.369530, -0.763400],
            [-0.630285, 2.369530, 0.763400],
            [-0.619414, 0.085547, -1.455820],
            [-0.619414, 0.085547, 1.455820],
            [-0.611424, 2.274900, -1.122810],
            [-0.611424, 2.274900, 1.122810],
            [-0.607174, 2.430470, -0.190548],
            [-0.607174, 2.430470, 0.190548],
            [-0.593047, 0.670825, -1.892280],
            [-0.593047, 0.670825, 1.892280],
            [-0.589845, 0.925195, -1.882060],
            [-0.589845, 0.925195, 1.882060],
            [-0.588750, 0.000000, -1.383750],
            [-0.588750, 0.000000, 1.383750],
            [-0.588750, 2.250000, -1.383750],
            [-0.588750, 2.250000, 1.383750],
            [-0.585750, 2.400000, -0.585750],
            [-0.585750, 2.400000, 0.585750],
            [-0.581402, 0.522583, -1.855120],
            [-0.581402, 0.522583, 1.855120],
            [-0.577104, 2.319430, -1.059790],
            [-0.577104, 2.319430, 1.059790],
            [-0.568818, 2.323830, -1.336900],
            [-0.568818, 2.323830, 1.336900],
            [-0.566554, 1.286130, -1.807750],
            [-0.566554, 1.286130, 1.807750],
            [-0.559973, 2.430470, -0.304711],
            [-0.559973, 2.430470, 0.304711],
            [-0.550727, 2.348440, -1.294380],
            [-0.550727, 2.348440, 1.294380],
            [-0.549500, 2.250000, -1.291500],
            [-0.549500, 2.250000, 1.291500],
            [-0.547339, 0.343945, -1.746440],
            [-0.547339, 0.343945, 1.746440],
            [-0.541834, 2.323830, -1.273480],
            [-0.541834, 2.323830, 1.273480],
            [-0.510250, 2.250000, -1.199250],
            [-0.510250, 2.250000, 1.199250],
            [-0.498428, 1.860940, -1.590370],
            [-0.498428, 1.860940, 1.590370],
            [-0.496099, 0.159961, -1.582940],
            [-0.496099, 0.159961, 1.582940],
            [-0.494918, 2.299800, -1.163220],
            [-0.494918, 2.299800, 1.163220],
            [-0.491907, 2.430470, -0.406410],
            [-0.491907, 2.430470, 0.406410],
            [-0.473023, 2.369530, -0.868654],
            [-0.473023, 2.369530, 0.868654],
            [-0.464063, 2.400000, -0.685781],
            [-0.464063, 2.400000, 0.685781],
            [-0.458833, 0.042773, -1.464030],
            [-0.458833, 0.042773, 1.464030],
            [-0.456250, 2.460940, 0.000000],
            [-0.453828, 2.339060, -1.066640],
            [-0.453828, 2.339060, 1.066640],
            [-0.439618, 2.286910, -1.402720],
            [-0.439618, 2.286910, 1.402720],
            [-0.438241, 2.460940, -0.091207],
            [-0.438241, 2.460940, 0.091207],
            [-0.425177, 2.336130, -1.356650],
            [-0.425177, 2.336130, 1.356650],
            [-0.420891, 2.460940, -0.179078],
            [-0.420891, 2.460940, 0.179078],
            [-0.414929, 2.336130, -1.323950],
            [-0.414929, 2.336130, 1.323950],
            [-0.414464, 2.286910, -1.322460],
            [-0.414464, 2.286910, 1.322460],
            [-0.407500, 0.750000, -1.960000],
            [-0.407500, 0.750000, 1.960000],
            [-0.406410, 2.430470, -0.491907],
            [-0.406410, 2.430470, 0.491907],
            [-0.403123, 0.591650, -1.938950],
            [-0.403123, 0.591650, 1.938950],
            [-0.398745, 1.100390, -1.917890],
            [-0.398745, 1.100390, 1.917890],
            [-0.391582, 0.453516, -1.883440],
            [-0.391582, 0.453516, 1.883440],
            [-0.381740, 2.274900, -1.218050],
            [-0.381740, 2.274900, 1.218050],
            [-0.375664, 1.471870, -1.806870],
            [-0.375664, 1.471870, 1.806870],
            [-0.372159, 2.460940, -0.251889],
            [-0.372159, 2.460940, 0.251889],
            [-0.362109, 2.897170, 0.000000],
            [-0.360312, 2.319430, -1.149680],
            [-0.360312, 2.319430, 1.149680],
            [-0.356563, 0.234375, 1.715000],
            [-0.356562, 0.234375, -1.715000],
            [-0.340625, 2.950780, 0.000000],
            [-0.337859, 2.923970, -0.069278],
            [-0.337859, 2.923970, 0.069278],
            [-0.334238, 2.897170, -0.142705],
            [-0.334238, 2.897170, 0.142705],
            [-0.330325, 2.864210, -0.067672],
            [-0.330325, 2.864210, 0.067672],
            [-0.325000, 2.831250, 0.000000],
            [-0.323938, 2.460940, -0.323938],
            [-0.323938, 2.460940, 0.323938],
            [-0.323813, 2.400000, -0.761063],
            [-0.323813, 2.400000, 0.761063],
            [-0.321543, 0.085547, -1.546560],
            [-0.321543, 0.085547, 1.546560],
            [-0.315410, 2.505470, -0.064395],
            [-0.315410, 2.505470, 0.064395],
            [-0.314464, 2.950780, -0.134407],
            [-0.314464, 2.950780, 0.134407],
            [-0.305625, 0.000000, -1.470000],
            [-0.305625, 0.000000, 1.470000],
            [-0.305625, 2.250000, -1.470000],
            [-0.305625, 2.250000, 1.470000],
            [-0.304711, 2.430470, -0.559973],
            [-0.304711, 2.430470, 0.559973],
            [-0.299953, 2.831250, -0.127984],
            [-0.299953, 2.831250, 0.127984],
            [-0.295330, 2.369530, -0.942332],
            [-0.295330, 2.369530, 0.942332],
            [-0.295278, 2.323830, -1.420230],
            [-0.295278, 2.323830, 1.420230],
            [-0.287197, 2.923970, -0.194300],
            [-0.287197, 2.923970, 0.194300],
            [-0.285887, 2.348440, -1.375060],
            [-0.285887, 2.348440, 1.375060],
            [-0.285250, 2.250000, -1.372000],
            [-0.285250, 2.250000, 1.372000],
            [-0.281271, 2.323830, -1.352860],
            [-0.281271, 2.323830, 1.352860],
            [-0.280732, 2.864210, -0.189856],
            [-0.280732, 2.864210, 0.189856],
            [-0.274421, 2.968800, -0.056380],
            [-0.274421, 2.968800, 0.056380],
            [-0.267832, 2.505470, -0.180879],
            [-0.267832, 2.505470, 0.180879],
            [-0.264875, 2.250000, -1.274000],
            [-0.264875, 2.250000, 1.274000],
            [-0.257610, 2.897170, -0.257610],
            [-0.257610, 2.897170, 0.257610],
            [-0.256916, 2.299800, -1.235720],
            [-0.256916, 2.299800, 1.235720],
            [-0.251889, 2.460940, -0.372159],
            [-0.251889, 2.460940, 0.372159],
            [-0.250872, 2.757420, -0.051347],
            [-0.250872, 2.757420, 0.051347],
            [-0.242477, 2.950780, -0.242477],
            [-0.242477, 2.950780, 0.242477],
            [-0.235586, 2.339060, -1.133120],
            [-0.235586, 2.339060, 1.133120],
            [-0.233382, 2.968800, -0.158018],
            [-0.233382, 2.968800, 0.158018],
            [-0.231125, 2.831250, -0.231125],
            [-0.231125, 2.831250, 0.231125],
            [-0.230078, 2.986820, 0.000000],
            [-0.213159, 2.757420, -0.144103],
            [-0.213159, 2.757420, 0.144103],
            [-0.212516, 2.986820, -0.091113],
            [-0.212516, 2.986820, 0.091113],
            [-0.202656, 0.670825, -1.969370],
            [-0.202656, 0.670825, 1.969370],
            [-0.201561, 0.925195, -1.958730],
            [-0.201561, 0.925195, 1.958730],
            [-0.200000, 2.550000, 0.000000],
            [-0.198676, 0.522583, -1.930690],
            [-0.198676, 0.522583, 1.930690],
            [-0.196875, 2.683590, 0.000000],
            [-0.194300, 2.923970, -0.287197],
            [-0.194300, 2.923970, 0.287197],
            [-0.193602, 1.286130, -1.881390],
            [-0.193602, 1.286130, 1.881390],
            [-0.190548, 2.430470, -0.607174],
            [-0.190548, 2.430470, 0.607174],
            [-0.189856, 2.864210, -0.280732],
            [-0.189856, 2.864210, 0.280732],
            [-0.187036, 0.343945, -1.817580],
            [-0.187036, 0.343945, 1.817580],
            [-0.184500, 2.550000, -0.078500],
            [-0.184500, 2.550000, 0.078500],
            [-0.181661, 2.683590, -0.077405],
            [-0.181661, 2.683590, 0.077405],
            [-0.180879, 2.505470, -0.267832],
            [-0.180879, 2.505470, 0.267832],
            [-0.179078, 2.460940, -0.420891],
            [-0.179078, 2.460940, 0.420891],
            [-0.176295, 2.581200, -0.036001],
            [-0.176295, 2.581200, 0.036001],
            [-0.174804, 2.648000, -0.035727],
            [-0.174804, 2.648000, 0.035727],
            [-0.170322, 1.860940, -1.655160],
            [-0.170322, 1.860940, 1.655160],
            [-0.169526, 0.159961, -1.647420],
            [-0.169526, 0.159961, 1.647420],
            [-0.168094, 2.400000, -0.808500],
            [-0.168094, 2.400000, 0.808500],
            [-0.166797, 2.612400, 0.000000],
            [-0.164073, 2.986820, -0.164073],
            [-0.164073, 2.986820, 0.164073],
            [-0.158018, 2.968800, -0.233382],
            [-0.158018, 2.968800, 0.233382],
            [-0.156792, 0.042773, -1.523670],
            [-0.156792, 0.042773, 1.523670],
            [-0.153882, 2.612400, -0.065504],
            [-0.153882, 2.612400, 0.065504],
            [-0.150226, 2.286910, -1.459860],
            [-0.150226, 2.286910, 1.459860],
            [-0.149710, 2.581200, -0.101116],
            [-0.149710, 2.581200, 0.101116],
            [-0.148475, 2.648000, -0.100316],
            [-0.148475, 2.648000, 0.100316],
            [-0.145291, 2.336130, -1.411910],
            [-0.145291, 2.336130, 1.411910],
            [-0.144103, 2.757420, -0.213159],
            [-0.144103, 2.757420, 0.213159],
            [-0.142705, 2.897170, -0.334238],
            [-0.142705, 2.897170, 0.334238],
            [-0.142000, 2.550000, -0.142000],
            [-0.142000, 2.550000, 0.142000],
            [-0.141789, 2.336130, -1.377880],
            [-0.141789, 2.336130, 1.377880],
            [-0.141630, 2.286910, -1.376330],
            [-0.141630, 2.286910, 1.376330],
            [-0.139898, 2.683590, -0.139898],
            [-0.139898, 2.683590, 0.139898],
            [-0.134407, 2.950780, -0.314464],
            [-0.134407, 2.950780, 0.314464],
            [-0.130448, 2.274900, -1.267660],
            [-0.130448, 2.274900, 1.267660],
            [-0.127984, 2.831250, -0.299953],
            [-0.127984, 2.831250, 0.299953],
            [-0.123125, 2.319430, -1.196510],
            [-0.123125, 2.319430, 1.196510],
            [-0.118458, 2.612400, -0.118458],
            [-0.118458, 2.612400, 0.118458],
            [-0.110649, 2.993410, -0.022778],
            [-0.110649, 2.993410, 0.022778],
            [-0.101116, 2.581200, -0.149710],
            [-0.101116, 2.581200, 0.149710],
            [-0.100920, 2.369530, -0.980719],
            [-0.100920, 2.369530, 0.980719],
            [-0.100316, 2.648000, -0.148475],
            [-0.100316, 2.648000, 0.148475],
            [-0.094147, 2.993410, -0.063797],
            [-0.094147, 2.993410, 0.063797],
            [-0.091207, 2.460940, -0.438241],
            [-0.091207, 2.460940, 0.438241],
            [-0.091113, 2.986820, -0.212516],
            [-0.091113, 2.986820, 0.212516],
            [-0.078500, 2.550000, -0.184500],
            [-0.078500, 2.550000, 0.184500],
            [-0.077405, 2.683590, -0.181661],
            [-0.077405, 2.683590, 0.181661],
            [-0.069278, 2.923970, -0.337859],
            [-0.069278, 2.923970, 0.337859],
            [-0.067672, 2.864210, -0.330325],
            [-0.067672, 2.864210, 0.330325],
            [-0.065504, 2.612400, -0.153882],
            [-0.065504, 2.612400, 0.153882],
            [-0.064825, 2.430470, -0.631998],
            [-0.064825, 2.430470, 0.631998],
            [-0.064395, 2.505470, -0.315410],
            [-0.064395, 2.505470, 0.315410],
            [-0.063797, 2.993410, -0.094147],
            [-0.063797, 2.993410, 0.094147],
            [-0.056380, 2.968800, -0.274421],
            [-0.056380, 2.968800, 0.274421],
            [-0.051347, 2.757420, -0.250872],
            [-0.051347, 2.757420, 0.250872],
            [-0.036001, 2.581200, -0.176295],
            [-0.036001, 2.581200, 0.176295],
            [-0.035727, 2.648000, -0.174804],
            [-0.035727, 2.648000, 0.174804],
            [-0.022778, 2.993410, -0.110649],
            [-0.022778, 2.993410, 0.110649],
            [0.000000, 0.000000, -1.500000],
            [0.000000, 0.000000, 1.500000],
            [0.000000, 0.085547, -1.578130],
            [0.000000, 0.085547, 1.578130],
            [0.000000, 0.234375, -1.750000],
            [0.000000, 0.234375, 1.750000],
            [0.000000, 0.453516, -1.921880],
            [0.000000, 0.453516, 1.921880],
            [0.000000, 0.591650, -1.978520],
            [0.000000, 0.591650, 1.978520],
            [0.000000, 0.750000, -2.000000],
            [0.000000, 0.750000, 2.000000],
            [0.000000, 1.100390, -1.957030],
            [0.000000, 1.100390, 1.957030],
            [0.000000, 1.471870, -1.843750],
            [0.000000, 1.471870, 1.843750],
            [0.000000, 2.250000, -1.500000],
            [0.000000, 2.250000, -1.400000],
            [0.000000, 2.250000, -1.300000],
            [0.000000, 2.250000, 1.300000],
            [0.000000, 2.250000, 1.400000],
            [0.000000, 2.250000, 1.500000],
            [0.000000, 2.299800, -1.260940],
            [0.000000, 2.299800, 1.260940],
            [0.000000, 2.323830, -1.449220],
            [0.000000, 2.323830, -1.380470],
            [0.000000, 2.323830, 1.380470],
            [0.000000, 2.323830, 1.449220],
            [0.000000, 2.339060, -1.156250],
            [0.000000, 2.339060, 1.156250],
            [0.000000, 2.348440, -1.403130],
            [0.000000, 2.348440, 1.403130],
            [0.000000, 2.400000, -0.825000],
            [0.000000, 2.400000, 0.825000],
            [0.000000, 2.460940, -0.456250],
            [0.000000, 2.460940, 0.456250],
            [0.000000, 2.550000, -0.200000],
            [0.000000, 2.550000, 0.200000],
            [0.000000, 2.612400, -0.166797],
            [0.000000, 2.612400, 0.166797],
            [0.000000, 2.683590, -0.196875],
            [0.000000, 2.683590, 0.196875],
            [0.000000, 2.831250, -0.325000],
            [0.000000, 2.831250, 0.325000],
            [0.000000, 2.897170, -0.362109],
            [0.000000, 2.897170, 0.362109],
            [0.000000, 2.950780, -0.340625],
            [0.000000, 2.950780, 0.340625],
            [0.000000, 2.986820, -0.230078],
            [0.000000, 2.986820, 0.230078],
            [0.000000, 3.000000, 0.000000],
            [0.022778, 2.993410, -0.110649],
            [0.022778, 2.993410, 0.110649],
            [0.035727, 2.648000, -0.174804],
            [0.035727, 2.648000, 0.174804],
            [0.036001, 2.581200, -0.176295],
            [0.036001, 2.581200, 0.176295],
            [0.051347, 2.757420, -0.250872],
            [0.051347, 2.757420, 0.250872],
            [0.056380, 2.968800, -0.274421],
            [0.056380, 2.968800, 0.274421],
            [0.063797, 2.993410, -0.094147],
            [0.063797, 2.993410, 0.094147],
            [0.064395, 2.505470, -0.315410],
            [0.064395, 2.505470, 0.315410],
            [0.064825, 2.430470, -0.631998],
            [0.064825, 2.430470, 0.631998],
            [0.065504, 2.612400, -0.153882],
            [0.065504, 2.612400, 0.153882],
            [0.067672, 2.864210, -0.330325],
            [0.067672, 2.864210, 0.330325],
            [0.069278, 2.923970, -0.337859],
            [0.069278, 2.923970, 0.337859],
            [0.077405, 2.683590, -0.181661],
            [0.077405, 2.683590, 0.181661],
            [0.078500, 2.550000, -0.184500],
            [0.078500, 2.550000, 0.184500],
            [0.091113, 2.986820, -0.212516],
            [0.091113, 2.986820, 0.212516],
            [0.091207, 2.460940, -0.438241],
            [0.091207, 2.460940, 0.438241],
            [0.094147, 2.993410, -0.063797],
            [0.094147, 2.993410, 0.063797],
            [0.100316, 2.648000, -0.148475],
            [0.100316, 2.648000, 0.148475],
            [0.100920, 2.369530, -0.980719],
            [0.100920, 2.369530, 0.980719],
            [0.101116, 2.581200, -0.149710],
            [0.101116, 2.581200, 0.149710],
            [0.110649, 2.993410, -0.022778],
            [0.110649, 2.993410, 0.022778],
            [0.118458, 2.612400, -0.118458],
            [0.118458, 2.612400, 0.118458],
            [0.123125, 2.319430, -1.196510],
            [0.123125, 2.319430, 1.196510],
            [0.127984, 2.831250, -0.299953],
            [0.127984, 2.831250, 0.299953],
            [0.130448, 2.274900, -1.267660],
            [0.130448, 2.274900, 1.267660],
            [0.134407, 2.950780, -0.314464],
            [0.134407, 2.950780, 0.314464],
            [0.139898, 2.683590, -0.139898],
            [0.139898, 2.683590, 0.139898],
            [0.141630, 2.286910, -1.376330],
            [0.141630, 2.286910, 1.376330],
            [0.141789, 2.336130, -1.377880],
            [0.141789, 2.336130, 1.377880],
            [0.142000, 2.550000, -0.142000],
            [0.142000, 2.550000, 0.142000],
            [0.142705, 2.897170, -0.334238],
            [0.142705, 2.897170, 0.334238],
            [0.144103, 2.757420, -0.213159],
            [0.144103, 2.757420, 0.213159],
            [0.145291, 2.336130, -1.411910],
            [0.145291, 2.336130, 1.411910],
            [0.148475, 2.648000, -0.100316],
            [0.148475, 2.648000, 0.100316],
            [0.149710, 2.581200, -0.101116],
            [0.149710, 2.581200, 0.101116],
            [0.150226, 2.286910, -1.459860],
            [0.150226, 2.286910, 1.459860],
            [0.153882, 2.612400, -0.065504],
            [0.153882, 2.612400, 0.065504],
            [0.156792, 0.042773, -1.523670],
            [0.156792, 0.042773, 1.523670],
            [0.158018, 2.968800, -0.233382],
            [0.158018, 2.968800, 0.233382],
            [0.164073, 2.986820, -0.164073],
            [0.164073, 2.986820, 0.164073],
            [0.166797, 2.612400, 0.000000],
            [0.168094, 2.400000, -0.808500],
            [0.168094, 2.400000, 0.808500],
            [0.169526, 0.159961, -1.647420],
            [0.169526, 0.159961, 1.647420],
            [0.170322, 1.860940, -1.655160],
            [0.170322, 1.860940, 1.655160],
            [0.174804, 2.648000, -0.035727],
            [0.174804, 2.648000, 0.035727],
            [0.176295, 2.581200, -0.036001],
            [0.176295, 2.581200, 0.036001],
            [0.179078, 2.460940, -0.420891],
            [0.179078, 2.460940, 0.420891],
            [0.180879, 2.505470, -0.267832],
            [0.180879, 2.505470, 0.267832],
            [0.181661, 2.683590, -0.077405],
            [0.181661, 2.683590, 0.077405],
            [0.184500, 2.550000, -0.078500],
            [0.184500, 2.550000, 0.078500],
            [0.187036, 0.343945, -1.817580],
            [0.187036, 0.343945, 1.817580],
            [0.189856, 2.864210, -0.280732],
            [0.189856, 2.864210, 0.280732],
            [0.190548, 2.430470, -0.607174],
            [0.190548, 2.430470, 0.607174],
            [0.193602, 1.286130, -1.881390],
            [0.193602, 1.286130, 1.881390],
            [0.194300, 2.923970, -0.287197],
            [0.194300, 2.923970, 0.287197],
            [0.196875, 2.683590, 0.000000],
            [0.198676, 0.522583, -1.930690],
            [0.198676, 0.522583, 1.930690],
            [0.200000, 2.550000, 0.000000],
            [0.201561, 0.925195, -1.958730],
            [0.201561, 0.925195, 1.958730],
            [0.202656, 0.670825, -1.969370],
            [0.202656, 0.670825, 1.969370],
            [0.212516, 2.986820, -0.091113],
            [0.212516, 2.986820, 0.091113],
            [0.213159, 2.757420, -0.144103],
            [0.213159, 2.757420, 0.144103],
            [0.230078, 2.986820, 0.000000],
            [0.231125, 2.831250, -0.231125],
            [0.231125, 2.831250, 0.231125],
            [0.233382, 2.968800, -0.158018],
            [0.233382, 2.968800, 0.158018],
            [0.235586, 2.339060, -1.133120],
            [0.235586, 2.339060, 1.133120],
            [0.242477, 2.950780, -0.242477],
            [0.242477, 2.950780, 0.242477],
            [0.250872, 2.757420, -0.051347],
            [0.250872, 2.757420, 0.051347],
            [0.251889, 2.460940, -0.372159],
            [0.251889, 2.460940, 0.372159],
            [0.256916, 2.299800, -1.235720],
            [0.256916, 2.299800, 1.235720],
            [0.257610, 2.897170, -0.257610],
            [0.257610, 2.897170, 0.257610],
            [0.264875, 2.250000, -1.274000],
            [0.264875, 2.250000, 1.274000],
            [0.267832, 2.505470, -0.180879],
            [0.267832, 2.505470, 0.180879],
            [0.274421, 2.968800, -0.056380],
            [0.274421, 2.968800, 0.056380],
            [0.280732, 2.864210, -0.189856],
            [0.280732, 2.864210, 0.189856],
            [0.281271, 2.323830, -1.352860],
            [0.281271, 2.323830, 1.352860],
            [0.285250, 2.250000, -1.372000],
            [0.285250, 2.250000, 1.372000],
            [0.285887, 2.348440, -1.375060],
            [0.285887, 2.348440, 1.375060],
            [0.287197, 2.923970, -0.194300],
            [0.287197, 2.923970, 0.194300],
            [0.295278, 2.323830, -1.420230],
            [0.295278, 2.323830, 1.420230],
            [0.295330, 2.369530, -0.942332],
            [0.295330, 2.369530, 0.942332],
            [0.299953, 2.831250, -0.127984],
            [0.299953, 2.831250, 0.127984],
            [0.304711, 2.430470, -0.559973],
            [0.304711, 2.430470, 0.559973],
            [0.305625, 0.000000, -1.470000],
            [0.305625, 0.000000, 1.470000],
            [0.305625, 2.250000, -1.470000],
            [0.305625, 2.250000, 1.470000],
            [0.314464, 2.950780, -0.134407],
            [0.314464, 2.950780, 0.134407],
            [0.315410, 2.505470, -0.064395],
            [0.315410, 2.505470, 0.064395],
            [0.321543, 0.085547, -1.546560],
            [0.321543, 0.085547, 1.546560],
            [0.323813, 2.400000, -0.761063],
            [0.323813, 2.400000, 0.761063],
            [0.323938, 2.460940, -0.323938],
            [0.323938, 2.460940, 0.323938],
            [0.325000, 2.831250, 0.000000],
            [0.330325, 2.864210, -0.067672],
            [0.330325, 2.864210, 0.067672],
            [0.334238, 2.897170, -0.142705],
            [0.334238, 2.897170, 0.142705],
            [0.337859, 2.923970, -0.069278],
            [0.337859, 2.923970, 0.069278],
            [0.340625, 2.950780, 0.000000],
            [0.356562, 0.234375, 1.715000],
            [0.356563, 0.234375, -1.715000],
            [0.360312, 2.319430, -1.149680],
            [0.360312, 2.319430, 1.149680],
            [0.362109, 2.897170, 0.000000],
            [0.372159, 2.460940, -0.251889],
            [0.372159, 2.460940, 0.251889],
            [0.375664, 1.471870, -1.806870],
            [0.375664, 1.471870, 1.806870],
            [0.381740, 2.274900, -1.218050],
            [0.381740, 2.274900, 1.218050],
            [0.391582, 0.453516, -1.883440],
            [0.391582, 0.453516, 1.883440],
            [0.398745, 1.100390, -1.917890],
            [0.398745, 1.100390, 1.917890],
            [0.403123, 0.591650, -1.938950],
            [0.403123, 0.591650, 1.938950],
            [0.406410, 2.430470, -0.491907],
            [0.406410, 2.430470, 0.491907],
            [0.407500, 0.750000, -1.960000],
            [0.407500, 0.750000, 1.960000],
            [0.414464, 2.286910, -1.322460],
            [0.414464, 2.286910, 1.322460],
            [0.414929, 2.336130, -1.323950],
            [0.414929, 2.336130, 1.323950],
            [0.420891, 2.460940, -0.179078],
            [0.420891, 2.460940, 0.179078],
            [0.425177, 2.336130, -1.356650],
            [0.425177, 2.336130, 1.356650],
            [0.438241, 2.460940, -0.091207],
            [0.438241, 2.460940, 0.091207],
            [0.439618, 2.286910, -1.402720],
            [0.439618, 2.286910, 1.402720],
            [0.453828, 2.339060, -1.066640],
            [0.453828, 2.339060, 1.066640],
            [0.456250, 2.460940, 0.000000],
            [0.458833, 0.042773, -1.464030],
            [0.458833, 0.042773, 1.464030],
            [0.464063, 2.400000, -0.685781],
            [0.464063, 2.400000, 0.685781],
            [0.473023, 2.369530, -0.868654],
            [0.473023, 2.369530, 0.868654],
            [0.491907, 2.430470, -0.406410],
            [0.491907, 2.430470, 0.406410],
            [0.494918, 2.299800, -1.163220],
            [0.494918, 2.299800, 1.163220],
            [0.496099, 0.159961, -1.582940],
            [0.496099, 0.159961, 1.582940],
            [0.498428, 1.860940, -1.590370],
            [0.498428, 1.860940, 1.590370],
            [0.510250, 2.250000, -1.199250],
            [0.510250, 2.250000, 1.199250],
            [0.541834, 2.323830, -1.273480],
            [0.541834, 2.323830, 1.273480],
            [0.547339, 0.343945, -1.746440],
            [0.547339, 0.343945, 1.746440],
            [0.549500, 2.250000, -1.291500],
            [0.549500, 2.250000, 1.291500],
            [0.550727, 2.348440, -1.294380],
            [0.550727, 2.348440, 1.294380],
            [0.559973, 2.430470, -0.304711],
            [0.559973, 2.430470, 0.304711],
            [0.566554, 1.286130, -1.807750],
            [0.566554, 1.286130, 1.807750],
            [0.568818, 2.323830, -1.336900],
            [0.568818, 2.323830, 1.336900],
            [0.577104, 2.319430, -1.059790],
            [0.577104, 2.319430, 1.059790],
            [0.581402, 0.522583, -1.855120],
            [0.581402, 0.522583, 1.855120],
            [0.585750, 2.400000, -0.585750],
            [0.585750, 2.400000, 0.585750],
            [0.588750, 0.000000, -1.383750],
            [0.588750, 0.000000, 1.383750],
            [0.588750, 2.250000, -1.383750],
            [0.588750, 2.250000, 1.383750],
            [0.589845, 0.925195, -1.882060],
            [0.589845, 0.925195, 1.882060],
            [0.593047, 0.670825, -1.892280],
            [0.593047, 0.670825, 1.892280],
            [0.607174, 2.430470, -0.190548],
            [0.607174, 2.430470, 0.190548],
            [0.611424, 2.274900, -1.122810],
            [0.611424, 2.274900, 1.122810],
            [0.619414, 0.085547, -1.455820],
            [0.619414, 0.085547, 1.455820],
            [0.630285, 2.369530, -0.763400],
            [0.630285, 2.369530, 0.763400],
            [0.631998, 2.430470, -0.064825],
            [0.631998, 2.430470, 0.064825],
            [0.650391, 2.339060, -0.961133],
            [0.650391, 2.339060, 0.961133],
            [0.663837, 2.286910, -1.219060],
            [0.663837, 2.286910, 1.219060],
            [0.664583, 2.336130, -1.220430],
            [0.664583, 2.336130, 1.220430],
            [0.680997, 2.336130, -1.250570],
            [0.680997, 2.336130, 1.250570],
            [0.685781, 2.400000, -0.464063],
            [0.685781, 2.400000, 0.464063],
            [0.686875, 0.234375, -1.614370],
            [0.686875, 0.234375, 1.614370],
            [0.704126, 2.286910, -1.293050],
            [0.704126, 2.286910, 1.293050],
            [0.709277, 2.299800, -1.048150],
            [0.709277, 2.299800, 1.048150],
            [0.723672, 1.471870, -1.700860],
            [0.723672, 1.471870, 1.700860],
            [0.731250, 2.250000, -1.080630],
            [0.731250, 2.250000, 1.080630],
            [0.734902, 0.042773, -1.349570],
            [0.734902, 0.042773, 1.349570],
            [0.754336, 0.453516, -1.772930],
            [0.754336, 0.453516, 1.772930],
            [0.761063, 2.400000, -0.323813],
            [0.761063, 2.400000, 0.323813],
            [0.763400, 2.369530, -0.630285],
            [0.763400, 2.369530, 0.630285],
            [0.768135, 1.100390, -1.805360],
            [0.768135, 1.100390, 1.805360],
            [0.768968, 2.319430, -0.931373],
            [0.768968, 2.319430, 0.931373],
            [0.776514, 2.323830, -1.147520],
            [0.776514, 2.323830, 1.147520],
            [0.776567, 0.591650, -1.825180],
            [0.776567, 0.591650, 1.825180],
            [0.785000, 0.750000, -1.845000],
            [0.785000, 0.750000, 1.845000],
            [0.787500, 2.250000, -1.163750],
            [0.787500, 2.250000, 1.163750],
            [0.789258, 2.348440, -1.166350],
            [0.789258, 2.348440, 1.166350],
            [0.794590, 0.159961, -1.459170],
            [0.794590, 0.159961, 1.459170],
            [0.798320, 1.860940, -1.466020],
            [0.798320, 1.860940, 1.466020],
            [0.808500, 2.400000, -0.168094],
            [0.808500, 2.400000, 0.168094],
            [0.814698, 2.274900, -0.986761],
            [0.814698, 2.274900, 0.986761],
            [0.815186, 2.323830, -1.204660],
            [0.815186, 2.323830, 1.204660],
            [0.820938, 2.339060, -0.820938],
            [0.820938, 2.339060, 0.820938],
            [0.825000, 2.400000, 0.000000],
            [0.843750, 0.000000, -1.246880],
            [0.843750, 0.000000, 1.246880],
            [0.843750, 2.250000, -1.246880],
            [0.843750, 2.250000, 1.246880],
            [0.868654, 2.369530, -0.473023],
            [0.868654, 2.369530, 0.473023],
            [0.876660, 0.343945, -1.609890],
            [0.876660, 0.343945, 1.609890],
            [0.884537, 2.286910, -1.071350],
            [0.884537, 2.286910, 1.071350],
            [0.885531, 2.336130, -1.072550],
            [0.885531, 2.336130, 1.072550],
            [0.887695, 0.085547, -1.311820],
            [0.887695, 0.085547, 1.311820],
            [0.895266, 2.299800, -0.895266],
            [0.895266, 2.299800, 0.895266],
            [0.907402, 2.336130, -1.099040],
            [0.907402, 2.336130, 1.099040],
            [0.907437, 1.286130, -1.666400],
            [0.907437, 1.286130, 1.666400],
            [0.923000, 2.250000, -0.923000],
            [0.923000, 2.250000, 0.923000],
            [0.931218, 0.522583, -1.710080],
            [0.931218, 0.522583, 1.710080],
            [0.931373, 2.319430, -0.768968],
            [0.931373, 2.319430, 0.768968],
            [0.938220, 2.286910, -1.136370],
            [0.938220, 2.286910, 1.136370],
            [0.942332, 2.369530, -0.295330],
            [0.942332, 2.369530, 0.295330],
            [0.944741, 0.925195, -1.734910],
            [0.944741, 0.925195, 1.734910],
            [0.949871, 0.670825, -1.744330],
            [0.949871, 0.670825, 1.744330],
            [0.961133, 2.339060, -0.650391],
            [0.961133, 2.339060, 0.650391],
            [0.979229, 0.042773, -1.186040],
            [0.979229, 0.042773, 1.186040],
            [0.980133, 2.323830, -0.980133],
            [0.980133, 2.323830, 0.980133],
            [0.980719, 2.369530, -0.100920],
            [0.980719, 2.369530, 0.100920],
            [0.984375, 0.234375, -1.454690],
            [0.984375, 0.234375, 1.454690],
            [0.986761, 2.274900, -0.814698],
            [0.986761, 2.274900, 0.814698],
            [0.994000, 2.250000, -0.994000],
            [0.994000, 2.250000, 0.994000],
            [0.996219, 2.348440, -0.996219],
            [0.996219, 2.348440, 0.996219],
            [1.028940, 2.323830, -1.028940],
            [1.028940, 2.323830, 1.028940],
            [1.037110, 1.471870, -1.532620],
            [1.037110, 1.471870, 1.532620],
            [1.048150, 2.299800, -0.709277],
            [1.048150, 2.299800, 0.709277],
            [1.058760, 0.159961, -1.282370],
            [1.058760, 0.159961, 1.282370],
            [1.059790, 2.319430, -0.577104],
            [1.059790, 2.319430, 0.577104],
            [1.063730, 1.860940, -1.288390],
            [1.063730, 1.860940, 1.288390],
            [1.065000, 0.000000, -1.065000],
            [1.065000, 0.000000, 1.065000],
            [1.065000, 2.250000, -1.065000],
            [1.065000, 2.250000, 1.065000],
            [1.066640, 2.339060, -0.453828],
            [1.066640, 2.339060, 0.453828],
            [1.071350, 2.286910, -0.884537],
            [1.071350, 2.286910, 0.884537],
            [1.072550, 2.336130, -0.885531],
            [1.072550, 2.336130, 0.885531],
            [1.080630, 2.250000, -0.731250],
            [1.080630, 2.250000, 0.731250],
            [1.081060, 0.453516, -1.597560],
            [1.081060, 0.453516, 1.597560],
            [1.099040, 2.336130, -0.907402],
            [1.099040, 2.336130, 0.907402],
            [1.100830, 1.100390, -1.626780],
            [1.100830, 1.100390, 1.626780],
            [1.112920, 0.591650, -1.644640],
            [1.112920, 0.591650, 1.644640],
            [1.120470, 0.085547, -1.120470],
            [1.120470, 0.085547, 1.120470],
            [1.122810, 2.274900, -0.611424],
            [1.122810, 2.274900, 0.611424],
            [1.125000, 0.750000, -1.662500],
            [1.125000, 0.750000, 1.662500],
            [1.133120, 2.339060, -0.235586],
            [1.133120, 2.339060, 0.235586],
            [1.136370, 2.286910, -0.938220],
            [1.136370, 2.286910, 0.938220],
            [1.147520, 2.323830, -0.776514],
            [1.147520, 2.323830, 0.776514],
            [1.149680, 2.319430, -0.360312],
            [1.149680, 2.319430, 0.360312],
            [1.156250, 2.339060, 0.000000],
            [1.163220, 2.299800, -0.494918],
            [1.163220, 2.299800, 0.494918],
            [1.163750, 2.250000, -0.787500],
            [1.163750, 2.250000, 0.787500],
            [1.166350, 2.348440, -0.789258],
            [1.166350, 2.348440, 0.789258],
            [1.168120, 0.343945, -1.414820],
            [1.168120, 0.343945, 1.414820],
            [1.186040, 0.042773, -0.979229],
            [1.186040, 0.042773, 0.979229],
            [1.196510, 2.319430, -0.123125],
            [1.196510, 2.319430, 0.123125],
            [1.199250, 2.250000, -0.510250],
            [1.199250, 2.250000, 0.510250],
            [1.204660, 2.323830, -0.815186],
            [1.204660, 2.323830, 0.815186],
            [1.209120, 1.286130, -1.464490],
            [1.209120, 1.286130, 1.464490],
            [1.218050, 2.274900, -0.381740],
            [1.218050, 2.274900, 0.381740],
            [1.219060, 2.286910, -0.663837],
            [1.219060, 2.286910, 0.663837],
            [1.220430, 2.336130, -0.664583],
            [1.220430, 2.336130, 0.664583],
            [1.235720, 2.299800, -0.256916],
            [1.235720, 2.299800, 0.256916],
            [1.240810, 0.522583, -1.502870],
            [1.240810, 0.522583, 1.502870],
            [1.242500, 0.234375, -1.242500],
            [1.242500, 0.234375, 1.242500],
            [1.246880, 0.000000, -0.843750],
            [1.246880, 0.000000, 0.843750],
            [1.246880, 2.250000, -0.843750],
            [1.246880, 2.250000, 0.843750],
            [1.250570, 2.336130, -0.680997],
            [1.250570, 2.336130, 0.680997],
            [1.258830, 0.925195, -1.524690],
            [1.258830, 0.925195, 1.524690],
            [1.260940, 2.299800, 0.000000],
            [1.265670, 0.670825, -1.532970],
            [1.265670, 0.670825, 1.532970],
            [1.267660, 2.274900, -0.130448],
            [1.267660, 2.274900, 0.130448],
            [1.273480, 2.323830, -0.541834],
            [1.273480, 2.323830, 0.541834],
            [1.274000, 2.250000, -0.264875],
            [1.274000, 2.250000, 0.264875],
            [1.282370, 0.159961, -1.058760],
            [1.282370, 0.159961, 1.058760],
            [1.288390, 1.860940, -1.063730],
            [1.288390, 1.860940, 1.063730],
            [1.291500, 2.250000, -0.549500],
            [1.291500, 2.250000, 0.549500],
            [1.293050, 2.286910, -0.704126],
            [1.293050, 2.286910, 0.704126],
            [1.294380, 2.348440, -0.550727],
            [1.294380, 2.348440, 0.550727],
            [1.300000, 2.250000, 0.000000],
            [1.309060, 1.471870, -1.309060],
            [1.309060, 1.471870, 1.309060],
            [1.311820, 0.085547, -0.887695],
            [1.311820, 0.085547, 0.887695],
            [1.322460, 2.286910, -0.414464],
            [1.322460, 2.286910, 0.414464],
            [1.323950, 2.336130, -0.414929],
            [1.323950, 2.336130, 0.414929],
            [1.336900, 2.323830, -0.568818],
            [1.336900, 2.323830, 0.568818],
            [1.349570, 0.042773, -0.734902],
            [1.349570, 0.042773, 0.734902],
            [1.352860, 2.323830, -0.281271],
            [1.352860, 2.323830, 0.281271],
            [1.356650, 2.336130, -0.425177],
            [1.356650, 2.336130, 0.425177],
            [1.364530, 0.453516, -1.364530],
            [1.364530, 0.453516, 1.364530],
            [1.372000, 2.250000, -0.285250],
            [1.372000, 2.250000, 0.285250],
            [1.375060, 2.348440, -0.285887],
            [1.375060, 2.348440, 0.285887],
            [1.376330, 2.286910, -0.141630],
            [1.376330, 2.286910, 0.141630],
            [1.377880, 2.336130, -0.141789],
            [1.377880, 2.336130, 0.141789],
            [1.380470, 2.323830, 0.000000],
            [1.383750, 0.000000, -0.588750],
            [1.383750, 0.000000, 0.588750],
            [1.383750, 2.250000, -0.588750],
            [1.383750, 2.250000, 0.588750],
            [1.389490, 1.100390, -1.389490],
            [1.389490, 1.100390, 1.389490],
            [1.400000, 2.250000, 0.000000],
            [1.402720, 2.286910, -0.439618],
            [1.402720, 2.286910, 0.439618],
            [1.403130, 2.348440, 0.000000],
            [1.404750, 0.591650, -1.404750],
            [1.404750, 0.591650, 1.404750],
            [1.411910, 2.336130, -0.145291],
            [1.411910, 2.336130, 0.145291],
            [1.414820, 0.343945, -1.168120],
            [1.414820, 0.343945, 1.168120],
            [1.420000, 0.750000, -1.420000],
            [1.420000, 0.750000, 1.420000],
            [1.420230, 2.323830, -0.295278],
            [1.420230, 2.323830, 0.295278],
            [1.449220, 2.323830, 0.000000],
            [1.454690, 0.234375, -0.984375],
            [1.454690, 0.234375, 0.984375],
            [1.455820, 0.085547, -0.619414],
            [1.455820, 0.085547, 0.619414],
            [1.459170, 0.159961, -0.794590],
            [1.459170, 0.159961, 0.794590],
            [1.459860, 2.286910, -0.150226],
            [1.459860, 2.286910, 0.150226],
            [1.464030, 0.042773, -0.458833],
            [1.464030, 0.042773, 0.458833],
            [1.464490, 1.286130, -1.209120],
            [1.464490, 1.286130, 1.209120],
            [1.466020, 1.860940, -0.798320],
            [1.466020, 1.860940, 0.798320],
            [1.470000, 0.000000, -0.305625],
            [1.470000, 0.000000, 0.305625],
            [1.470000, 2.250000, -0.305625],
            [1.470000, 2.250000, 0.305625],
            [1.500000, 0.000000, 0.000000],
            [1.500000, 2.250000, 0.000000],
            [1.502870, 0.522583, -1.240810],
            [1.502870, 0.522583, 1.240810],
            [1.523670, 0.042773, -0.156792],
            [1.523670, 0.042773, 0.156792],
            [1.524690, 0.925195, -1.258830],
            [1.524690, 0.925195, 1.258830],
            [1.532620, 1.471870, -1.037110],
            [1.532620, 1.471870, 1.037110],
            [1.532970, 0.670825, -1.265670],
            [1.532970, 0.670825, 1.265670],
            [1.546560, 0.085547, -0.321543],
            [1.546560, 0.085547, 0.321543],
            [1.578130, 0.085547, 0.000000],
            [1.582940, 0.159961, -0.496099],
            [1.582940, 0.159961, 0.496099],
            [1.590370, 1.860940, -0.498428],
            [1.590370, 1.860940, 0.498428],
            [1.597560, 0.453516, -1.081060],
            [1.597560, 0.453516, 1.081060],
            [1.609890, 0.343945, -0.876660],
            [1.609890, 0.343945, 0.876660],
            [1.614370, 0.234375, -0.686875],
            [1.614370, 0.234375, 0.686875],
            [1.626780, 1.100390, -1.100830],
            [1.626780, 1.100390, 1.100830],
            [1.644640, 0.591650, -1.112920],
            [1.644640, 0.591650, 1.112920],
            [1.647420, 0.159961, -0.169526],
            [1.647420, 0.159961, 0.169526],
            [1.655160, 1.860940, -0.170322],
            [1.655160, 1.860940, 0.170322],
            [1.662500, 0.750000, -1.125000],
            [1.662500, 0.750000, 1.125000],
            [1.666400, 1.286130, -0.907437],
            [1.666400, 1.286130, 0.907437],
            [1.700000, 0.450000, 0.000000],
            [1.700000, 0.485449, -0.216563],
            [1.700000, 0.485449, 0.216563],
            [1.700000, 0.578906, -0.371250],
            [1.700000, 0.578906, 0.371250],
            [1.700000, 0.711035, -0.464063],
            [1.700000, 0.711035, 0.464063],
            [1.700000, 0.862500, -0.495000],
            [1.700000, 0.862500, 0.495000],
            [1.700000, 1.013970, -0.464063],
            [1.700000, 1.013970, 0.464063],
            [1.700000, 1.146090, -0.371250],
            [1.700000, 1.146090, 0.371250],
            [1.700000, 1.239550, -0.216563],
            [1.700000, 1.239550, 0.216563],
            [1.700000, 1.275000, 0.000000],
            [1.700860, 1.471870, -0.723672],
            [1.700860, 1.471870, 0.723672],
            [1.710080, 0.522583, -0.931218],
            [1.710080, 0.522583, 0.931218],
            [1.715000, 0.234375, -0.356562],
            [1.715000, 0.234375, 0.356563],
            [1.734910, 0.925195, -0.944741],
            [1.734910, 0.925195, 0.944741],
            [1.744330, 0.670825, -0.949871],
            [1.744330, 0.670825, 0.949871],
            [1.746440, 0.343945, -0.547339],
            [1.746440, 0.343945, 0.547339],
            [1.750000, 0.234375, 0.000000],
            [1.772930, 0.453516, -0.754336],
            [1.772930, 0.453516, 0.754336],
            [1.805360, 1.100390, -0.768135],
            [1.805360, 1.100390, 0.768135],
            [1.806870, 1.471870, -0.375664],
            [1.806870, 1.471870, 0.375664],
            [1.807750, 1.286130, -0.566554],
            [1.807750, 1.286130, 0.566554],
            [1.808680, 0.669440, -0.415335],
            [1.808680, 0.669440, 0.415335],
            [1.815230, 0.556498, -0.292881],
            [1.815230, 0.556498, 0.292881],
            [1.817580, 0.343945, -0.187036],
            [1.817580, 0.343945, 0.187036],
            [1.818500, 0.493823, -0.107904],
            [1.818500, 0.493823, 0.107904],
            [1.825180, 0.591650, -0.776567],
            [1.825180, 0.591650, 0.776567],
            [1.843750, 1.471870, 0.000000],
            [1.844080, 1.273110, -0.106836],
            [1.844080, 1.273110, 0.106836],
            [1.845000, 0.750000, -0.785000],
            [1.845000, 0.750000, 0.785000],
            [1.849890, 1.212450, -0.289984],
            [1.849890, 1.212450, 0.289984],
            [1.855120, 0.522583, -0.581402],
            [1.855120, 0.522583, 0.581402],
            [1.860070, 1.106280, -0.412082],
            [1.860070, 1.106280, 0.412082],
            [1.872860, 0.972820, -0.473131],
            [1.872860, 0.972820, 0.473131],
            [1.881390, 1.286130, -0.193602],
            [1.881390, 1.286130, 0.193602],
            [1.882060, 0.925195, -0.589845],
            [1.882060, 0.925195, 0.589845],
            [1.883440, 0.453516, -0.391582],
            [1.883440, 0.453516, 0.391582],
            [1.886520, 0.830257, -0.473131],
            [1.886520, 0.830257, 0.473131],
            [1.892280, 0.670825, -0.593047],
            [1.892280, 0.670825, 0.593047],
            [1.908980, 0.762851, -0.457368],
            [1.908980, 0.762851, 0.457368],
            [1.917890, 1.100390, -0.398745],
            [1.917890, 1.100390, 0.398745],
            [1.921880, 0.453516, 0.000000],
            [1.925720, 0.624968, -0.368660],
            [1.925720, 0.624968, 0.368660],
            [1.930690, 0.522583, -0.198676],
            [1.930690, 0.522583, 0.198676],
            [1.935200, 0.536667, -0.215052],
            [1.935200, 0.536667, 0.215052],
            [1.938790, 0.503174, 0.000000],
            [1.938950, 0.591650, -0.403123],
            [1.938950, 0.591650, 0.403123],
            [1.957030, 1.100390, 0.000000],
            [1.958730, 0.925195, -0.201561],
            [1.958730, 0.925195, 0.201561],
            [1.960000, 0.750000, -0.407500],
            [1.960000, 0.750000, 0.407500],
            [1.969370, 0.670825, -0.202656],
            [1.969370, 0.670825, 0.202656],
            [1.978520, 0.591650, 0.000000],
            [1.984960, 1.304590, 0.000000],
            [1.991360, 1.273310, -0.210782],
            [1.991360, 1.273310, 0.210782],
            [2.000000, 0.750000, 0.000000],
            [2.007990, 0.721263, -0.409761],
            [2.007990, 0.721263, 0.409761],
            [2.008210, 1.190840, -0.361340],
            [2.008210, 1.190840, 0.361340],
            [2.024710, 0.614949, -0.288958],
            [2.024710, 0.614949, 0.288958],
            [2.032050, 1.074240, -0.451675],
            [2.032050, 1.074240, 0.451675],
            [2.033790, 0.556062, -0.106458],
            [2.033790, 0.556062, 0.106458],
            [2.059380, 0.940576, -0.481787],
            [2.059380, 0.940576, 0.481787],
            [2.086440, 1.330480, -0.101581],
            [2.086440, 1.330480, 0.101581],
            [2.086700, 0.806915, -0.451675],
            [2.086700, 0.806915, 0.451675],
            [2.101410, 1.278150, -0.275720],
            [2.101410, 1.278150, 0.275720],
            [2.110530, 0.690317, -0.361340],
            [2.110530, 0.690317, 0.361340],
            [2.127390, 0.607845, -0.210782],
            [2.127390, 0.607845, 0.210782],
            [2.127600, 1.186560, -0.391812],
            [2.127600, 1.186560, 0.391812],
            [2.133790, 0.576563, 0.000000],
            [2.160540, 1.071430, -0.449859],
            [2.160540, 1.071430, 0.449859],
            [2.169220, 0.790259, -0.399360],
            [2.169220, 0.790259, 0.399360],
            [2.179690, 1.385160, 0.000000],
            [2.189760, 1.358870, -0.195542],
            [2.189760, 1.358870, 0.195542],
            [2.194810, 0.691761, -0.281559],
            [2.194810, 0.691761, 0.281559],
            [2.195710, 0.948444, -0.449859],
            [2.195710, 0.948444, 0.449859],
            [2.208370, 0.637082, -0.103732],
            [2.208370, 0.637082, 0.103732],
            [2.216310, 1.289570, -0.335215],
            [2.216310, 1.289570, 0.335215],
            [2.220200, 0.891314, -0.434457],
            [2.220200, 0.891314, 0.434457],
            [2.248570, 1.433000, -0.092384],
            [2.248570, 1.433000, 0.092384],
            [2.253840, 1.191600, -0.419019],
            [2.253840, 1.191600, 0.419019],
            [2.259440, 0.772489, -0.349967],
            [2.259440, 0.772489, 0.349967],
            [2.268570, 1.390160, -0.250758],
            [2.268570, 1.390160, 0.250758],
            [2.281890, 0.696393, -0.204147],
            [2.281890, 0.696393, 0.204147],
            [2.290410, 0.667529, 0.000000],
            [2.296880, 1.079300, -0.446953],
            [2.296880, 1.079300, 0.446953],
            [2.299250, 0.874953, -0.384664],
            [2.299250, 0.874953, 0.384664],
            [2.303580, 1.315200, -0.356340],
            [2.303580, 1.315200, 0.356340],
            [2.306440, 1.504400, 0.000000],
            [2.318380, 1.483560, -0.173996],
            [2.318380, 1.483560, 0.173996],
            [2.330690, 0.784406, -0.271218],
            [2.330690, 0.784406, 0.271218],
            [2.339910, 0.966989, -0.419019],
            [2.339910, 0.966989, 0.419019],
            [2.347590, 0.734271, -0.099922],
            [2.347590, 0.734271, 0.099922],
            [2.347590, 1.220960, -0.409131],
            [2.347590, 1.220960, 0.409131],
            [2.349840, 1.428640, -0.298279],
            [2.349840, 1.428640, 0.298279],
            [2.353180, 1.568160, -0.080823],
            [2.353180, 1.568160, 0.080823],
            [2.375750, 1.535310, -0.219377],
            [2.375750, 1.535310, 0.219377],
            [2.377440, 0.869019, -0.335215],
            [2.377440, 0.869019, 0.335215],
            [2.387500, 1.650000, 0.000000],
            [2.394320, 1.350980, -0.372849],
            [2.394320, 1.350980, 0.372849],
            [2.394600, 1.120300, -0.409131],
            [2.394600, 1.120300, 0.409131],
            [2.400390, 1.634690, -0.149297],
            [2.400390, 1.634690, 0.149297],
            [2.403990, 0.799722, -0.195542],
            [2.403990, 0.799722, 0.195542],
            [2.414060, 0.773438, 0.000000],
            [2.415240, 1.477810, -0.311747],
            [2.415240, 1.477810, 0.311747],
            [2.434380, 1.594340, -0.255938],
            [2.434380, 1.594340, 0.255938],
            [2.438610, 1.026060, -0.356340],
            [2.438610, 1.026060, 0.356340],
            [2.445310, 1.261960, -0.397705],
            [2.445310, 1.261960, 0.397705],
            [2.451680, 1.805340, -0.063087],
            [2.451680, 1.805340, 0.063087],
            [2.464890, 1.405520, -0.357931],
            [2.464890, 1.405520, 0.357931],
            [2.473620, 0.951099, -0.250758],
            [2.473620, 0.951099, 0.250758],
            [2.477680, 1.786380, -0.171237],
            [2.477680, 1.786380, 0.171237],
            [2.482420, 1.537280, -0.319922],
            [2.482420, 1.537280, 0.319922],
            [2.493620, 0.908264, -0.092384],
            [2.493620, 0.908264, 0.092384],
            [2.496300, 1.172950, -0.372849],
            [2.496300, 1.172950, 0.372849],
            [2.501560, 1.971090, 0.000000],
            [2.517270, 1.965550, -0.103052],
            [2.517270, 1.965550, 0.103052],
            [2.517920, 1.328310, -0.357931],
            [2.517920, 1.328310, 0.357931],
            [2.523180, 1.753220, -0.243336],
            [2.523180, 1.753220, 0.243336],
            [2.537500, 1.471870, -0.341250],
            [2.537500, 1.471870, 0.341250],
            [2.540780, 1.095290, -0.298279],
            [2.540780, 1.095290, 0.298279],
            [2.549110, 2.044640, -0.047716],
            [2.549110, 2.044640, 0.047716],
            [2.558690, 1.950950, -0.176660],
            [2.558690, 1.950950, 0.176660],
            [2.567570, 1.256030, -0.311747],
            [2.567570, 1.256030, 0.311747],
            [2.572250, 1.040360, -0.173996],
            [2.572250, 1.040360, 0.173996],
            [2.579100, 2.121970, 0.000000],
            [2.580390, 1.711530, -0.279386],
            [2.580390, 1.711530, 0.279386],
            [2.581010, 2.037730, -0.129515],
            [2.581010, 2.037730, 0.129515],
            [2.584180, 1.019530, 0.000000],
            [2.592580, 1.406470, -0.319922],
            [2.592580, 1.406470, 0.319922],
            [2.598490, 2.119920, -0.087812],
            [2.598490, 2.119920, 0.087812],
            [2.601780, 1.554720, -0.304019],
            [2.601780, 1.554720, 0.304019],
            [2.607070, 1.198530, -0.219377],
            [2.607070, 1.198530, 0.219377],
            [2.611620, 1.691280, -0.287908],
            [2.611620, 1.691280, 0.287908],
            [2.617250, 1.930310, -0.220825],
            [2.617250, 1.930310, 0.220825],
            [2.629630, 1.165680, -0.080823],
            [2.629630, 1.165680, 0.080823],
            [2.637880, 2.025550, -0.180818],
            [2.637880, 2.025550, 0.180818],
            [2.640630, 1.349410, -0.255938],
            [2.640630, 1.349410, 0.255938],
            [2.649600, 2.114510, -0.150535],
            [2.649600, 2.114510, 0.150535],
            [2.650840, 2.185470, -0.042461],
            [2.650840, 2.185470, 0.042461],
            [2.653910, 1.504200, -0.264113],
            [2.653910, 1.504200, 0.264113],
            [2.665420, 1.649250, -0.266995],
            [2.665420, 1.649250, 0.266995],
            [2.674610, 1.309060, -0.149297],
            [2.674610, 1.309060, 0.149297],
            [2.678230, 1.782540, -0.252819],
            [2.678230, 1.782540, 0.252819],
            [2.684380, 1.906640, -0.235547],
            [2.684380, 1.906640, 0.235547],
            [2.687500, 1.293750, 0.000000],
            [2.691900, 2.183610, -0.115251],
            [2.691900, 2.183610, 0.115251],
            [2.696450, 1.463800, -0.185857],
            [2.696450, 1.463800, 0.185857],
            [2.700000, 2.250000, 0.000000],
            [2.708080, 2.010370, -0.208084],
            [2.708080, 2.010370, 0.208084],
            [2.717030, 1.611670, -0.213596],
            [2.717030, 1.611670, 0.213596],
            [2.720760, 1.440720, -0.068474],
            [2.720760, 1.440720, 0.068474],
            [2.725780, 2.250000, -0.082031],
            [2.725780, 2.250000, 0.082031],
            [2.725990, 2.106430, -0.175250],
            [2.725990, 2.106430, 0.175250],
            [2.736000, 1.751550, -0.219519],
            [2.736000, 1.751550, 0.219519],
            [2.750210, 2.269190, -0.039734],
            [2.750210, 2.269190, 0.039734],
            [2.751500, 1.882970, -0.220825],
            [2.751500, 1.882970, 0.220825],
            [2.753540, 1.585080, -0.124598],
            [2.753540, 1.585080, 0.124598],
            [2.767380, 1.575000, 0.000000],
            [2.775560, 2.284000, 0.000000],
            [2.780990, 1.994370, -0.208084],
            [2.780990, 1.994370, 0.208084],
            [2.783030, 1.726700, -0.154476],
            [2.783030, 1.726700, 0.154476],
            [2.793750, 2.250000, -0.140625],
            [2.793750, 2.250000, 0.140625],
            [2.797820, 2.271750, -0.107849],
            [2.797820, 2.271750, 0.107849],
            [2.799490, 2.292750, -0.076904],
            [2.799490, 2.292750, 0.076904],
            [2.800000, 2.250000, 0.000000],
            [2.804690, 2.098100, -0.200713],
            [2.804690, 2.098100, 0.200713],
            [2.809900, 1.712500, -0.056912],
            [2.809900, 1.712500, 0.056912],
            [2.810060, 1.862330, -0.176660],
            [2.810060, 1.862330, 0.176660],
            [2.812010, 2.178150, -0.169843],
            [2.812010, 2.178150, 0.169843],
            [2.812740, 2.297540, -0.035632],
            [2.812740, 2.297540, 0.035632],
            [2.817190, 2.250000, -0.049219],
            [2.817190, 2.250000, 0.049219],
            [2.825000, 2.306250, 0.000000],
            [2.830110, 2.271290, -0.025891],
            [2.830110, 2.271290, 0.025891],
            [2.840630, 2.292190, 0.000000],
            [2.844790, 2.299640, -0.029993],
            [2.844790, 2.299640, 0.029993],
            [2.850920, 2.307160, -0.065625],
            [2.850920, 2.307160, 0.065625],
            [2.851180, 1.979190, -0.180818],
            [2.851180, 1.979190, 0.180818],
            [2.851480, 1.847730, -0.103052],
            [2.851480, 1.847730, 0.103052],
            [2.860480, 2.300930, -0.096716],
            [2.860480, 2.300930, 0.096716],
            [2.862500, 2.250000, -0.084375],
            [2.862500, 2.250000, 0.084375],
            [2.862630, 2.292980, -0.054346],
            [2.862630, 2.292980, 0.054346],
            [2.865740, 2.272010, -0.070276],
            [2.865740, 2.272010, 0.070276],
            [2.867190, 1.842190, 0.000000],
            [2.872280, 2.294250, -0.131836],
            [2.872280, 2.294250, 0.131836],
            [2.883390, 2.089770, -0.175250],
            [2.883390, 2.089770, 0.175250],
            [2.888360, 2.301190, -0.081409],
            [2.888360, 2.301190, 0.081409],
            [2.898270, 2.170880, -0.194382],
            [2.898270, 2.170880, 0.194382],
            [2.908050, 1.967000, -0.129515],
            [2.908050, 1.967000, 0.129515],
            [2.919240, 2.309550, -0.112500],
            [2.919240, 2.309550, 0.112500],
            [2.920640, 2.295070, -0.093164],
            [2.920640, 2.295070, 0.093164],
            [2.932790, 2.131030, -0.172211],
            [2.932790, 2.131030, 0.172211],
            [2.939800, 2.273260, -0.158936],
            [2.939800, 2.273260, 0.158936],
            [2.939960, 1.960100, -0.047716],
            [2.939960, 1.960100, 0.047716],
            [2.959780, 2.081680, -0.150535],
            [2.959780, 2.081680, 0.150535],
            [2.969950, 2.274120, -0.103564],
            [2.969950, 2.274120, 0.103564],
            [3.000000, 2.250000, -0.187500],
            [3.000000, 2.250000, -0.112500],
            [3.000000, 2.250000, 0.112500],
            [3.000000, 2.250000, 0.187500],
            [3.002810, 2.304840, -0.142529],
            [3.002810, 2.304840, 0.142529],
            [3.010890, 2.076270, -0.087812],
            [3.010890, 2.076270, 0.087812],
            [3.015780, 2.305710, -0.119971],
            [3.015780, 2.305710, 0.119971],
            [3.030270, 2.074220, 0.000000],
            [3.041500, 2.125670, -0.116276],
            [3.041500, 2.125670, 0.116276],
            [3.043230, 2.211080, -0.166431],
            [3.043230, 2.211080, 0.166431],
            [3.068420, 2.173450, -0.143215],
            [3.068420, 2.173450, 0.143215],
            [3.079290, 2.123060, -0.042838],
            [3.079290, 2.123060, 0.042838],
            [3.093160, 2.298780, -0.175781],
            [3.093160, 2.298780, 0.175781],
            [3.096680, 2.301420, -0.124219],
            [3.096680, 2.301420, 0.124219],
            [3.126560, 2.316800, -0.150000],
            [3.126560, 2.316800, 0.150000],
            [3.126720, 2.277290, -0.103564],
            [3.126720, 2.277290, 0.103564],
            [3.126910, 2.171280, -0.083542],
            [3.126910, 2.171280, 0.083542],
            [3.137500, 2.250000, -0.084375],
            [3.137500, 2.250000, 0.084375],
            [3.149100, 2.170460, 0.000000],
            [3.153370, 2.275520, -0.158936],
            [3.153370, 2.275520, 0.158936],
            [3.168950, 2.211180, -0.112353],
            [3.168950, 2.211180, 0.112353],
            [3.182810, 2.250000, -0.049219],
            [3.182810, 2.250000, 0.049219],
            [3.200000, 2.250000, 0.000000],
            [3.206250, 2.250000, -0.140625],
            [3.206250, 2.250000, 0.140625],
            [3.207460, 2.312510, -0.119971],
            [3.207460, 2.312510, 0.119971],
            [3.212560, 2.210430, -0.041393],
            [3.212560, 2.210430, 0.041393],
            [3.216920, 2.310730, -0.142529],
            [3.216920, 2.310730, 0.142529],
            [3.230940, 2.279400, -0.070276],
            [3.230940, 2.279400, 0.070276],
            [3.267240, 2.278140, -0.025891],
            [3.267240, 2.278140, 0.025891],
            [3.272720, 2.307760, -0.093164],
            [3.272720, 2.307760, 0.093164],
            [3.274220, 2.250000, -0.082031],
            [3.274220, 2.250000, 0.082031],
            [3.295340, 2.277030, -0.107849],
            [3.295340, 2.277030, 0.107849],
            [3.300000, 2.250000, 0.000000],
            [3.314050, 2.303310, -0.131836],
            [3.314050, 2.303310, 0.131836],
            [3.330730, 2.309850, -0.054346],
            [3.330730, 2.309850, 0.054346],
            [3.333890, 2.324050, -0.112500],
            [3.333890, 2.324050, 0.112500],
            [3.334890, 2.317020, -0.081409],
            [3.334890, 2.317020, 0.081409],
            [3.342360, 2.280060, -0.039734],
            [3.342360, 2.280060, 0.039734],
            [3.355430, 2.302700, 0.000000],
            [3.359250, 2.314650, -0.096716],
            [3.359250, 2.314650, 0.096716],
            [3.379120, 2.316580, -0.029993],
            [3.379120, 2.316580, 0.029993],
            [3.386840, 2.304810, -0.076904],
            [3.386840, 2.304810, 0.076904],
            [3.402210, 2.326440, -0.065625],
            [3.402210, 2.326440, 0.065625],
            [3.406390, 2.318500, -0.035632],
            [3.406390, 2.318500, 0.035632],
            [3.408380, 2.315430, 0.000000],
            [3.428120, 2.327340, 0.000000]
        ];

        var indices = [
            [1454, 1468, 1458],
            [1448, 1454, 1458],
            [1461, 1448, 1458],
            [1468, 1461, 1458],
            [1429, 1454, 1440],
            [1421, 1429, 1440],
            [1448, 1421, 1440],
            [1454, 1448, 1440],
            [1380, 1429, 1398],
            [1373, 1380, 1398],
            [1421, 1373, 1398],
            [1429, 1421, 1398],
            [1327, 1380, 1349],
            [1319, 1327, 1349],
            [1373, 1319, 1349],
            [1380, 1373, 1349],
            [1448, 1461, 1460],
            [1456, 1448, 1460],
            [1471, 1456, 1460],
            [1461, 1471, 1460],
            [1421, 1448, 1442],
            [1433, 1421, 1442],
            [1456, 1433, 1442],
            [1448, 1456, 1442],
            [1373, 1421, 1400],
            [1382, 1373, 1400],
            [1433, 1382, 1400],
            [1421, 1433, 1400],
            [1319, 1373, 1351],
            [1329, 1319, 1351],
            [1382, 1329, 1351],
            [1373, 1382, 1351],
            [1264, 1327, 1289],
            [1258, 1264, 1289],
            [1319, 1258, 1289],
            [1327, 1319, 1289],
            [1192, 1264, 1228],
            [1188, 1192, 1228],
            [1258, 1188, 1228],
            [1264, 1258, 1228],
            [1100, 1192, 1157],
            [1098, 1100, 1157],
            [1188, 1098, 1157],
            [1192, 1188, 1157],
            [922, 1100, 1006],
            [928, 922, 1006],
            [1098, 928, 1006],
            [1100, 1098, 1006],
            [1258, 1319, 1291],
            [1266, 1258, 1291],
            [1329, 1266, 1291],
            [1319, 1329, 1291],
            [1188, 1258, 1230],
            [1194, 1188, 1230],
            [1266, 1194, 1230],
            [1258, 1266, 1230],
            [1098, 1188, 1159],
            [1102, 1098, 1159],
            [1194, 1102, 1159],
            [1188, 1194, 1159],
            [928, 1098, 1008],
            [933, 928, 1008],
            [1102, 933, 1008],
            [1098, 1102, 1008],
            [1456, 1471, 1475],
            [1481, 1456, 1475],
            [1482, 1481, 1475],
            [1471, 1482, 1475],
            [1433, 1456, 1450],
            [1444, 1433, 1450],
            [1481, 1444, 1450],
            [1456, 1481, 1450],
            [1382, 1433, 1412],
            [1392, 1382, 1412],
            [1444, 1392, 1412],
            [1433, 1444, 1412],
            [1329, 1382, 1357],
            [1331, 1329, 1357],
            [1392, 1331, 1357],
            [1382, 1392, 1357],
            [1481, 1482, 1490],
            [1500, 1481, 1490],
            [1502, 1500, 1490],
            [1482, 1502, 1490],
            [1444, 1481, 1470],
            [1465, 1444, 1470],
            [1500, 1465, 1470],
            [1481, 1500, 1470],
            [1392, 1444, 1431],
            [1410, 1392, 1431],
            [1465, 1410, 1431],
            [1444, 1465, 1431],
            [1331, 1392, 1371],
            [1345, 1331, 1371],
            [1410, 1345, 1371],
            [1392, 1410, 1371],
            [1266, 1329, 1297],
            [1276, 1266, 1297],
            [1331, 1276, 1297],
            [1329, 1331, 1297],
            [1194, 1266, 1232],
            [1200, 1194, 1232],
            [1276, 1200, 1232],
            [1266, 1276, 1232],
            [1102, 1194, 1163],
            [1106, 1102, 1163],
            [1200, 1106, 1163],
            [1194, 1200, 1163],
            [933, 1102, 1016],
            [929, 933, 1016],
            [1106, 929, 1016],
            [1102, 1106, 1016],
            [1276, 1331, 1307],
            [1283, 1276, 1307],
            [1345, 1283, 1307],
            [1331, 1345, 1307],
            [1200, 1276, 1238],
            [1210, 1200, 1238],
            [1283, 1210, 1238],
            [1276, 1283, 1238],
            [1106, 1200, 1167],
            [1116, 1106, 1167],
            [1210, 1116, 1167],
            [1200, 1210, 1167],
            [929, 1106, 1022],
            [923, 929, 1022],
            [1116, 923, 1022],
            [1106, 1116, 1022],
            [755, 922, 849],
            [757, 755, 849],
            [928, 757, 849],
            [922, 928, 849],
            [663, 755, 698],
            [667, 663, 698],
            [757, 667, 698],
            [755, 757, 698],
            [591, 663, 627],
            [597, 591, 627],
            [667, 597, 627],
            [663, 667, 627],
            [528, 591, 566],
            [536, 528, 566],
            [597, 536, 566],
            [591, 597, 566],
            [757, 928, 847],
            [753, 757, 847],
            [933, 753, 847],
            [928, 933, 847],
            [667, 757, 696],
            [661, 667, 696],
            [753, 661, 696],
            [757, 753, 696],
            [597, 667, 625],
            [589, 597, 625],
            [661, 589, 625],
            [667, 661, 625],
            [536, 597, 564],
            [526, 536, 564],
            [589, 526, 564],
            [597, 589, 564],
            [475, 528, 506],
            [482, 475, 506],
            [536, 482, 506],
            [528, 536, 506],
            [426, 475, 457],
            [434, 426, 457],
            [482, 434, 457],
            [475, 482, 457],
            [401, 426, 415],
            [407, 401, 415],
            [434, 407, 415],
            [426, 434, 415],
            [386, 401, 397],
            [393, 386, 397],
            [407, 393, 397],
            [401, 407, 397],
            [482, 536, 504],
            [473, 482, 504],
            [526, 473, 504],
            [536, 526, 504],
            [434, 482, 455],
            [422, 434, 455],
            [473, 422, 455],
            [482, 473, 455],
            [407, 434, 413],
            [399, 407, 413],
            [422, 399, 413],
            [434, 422, 413],
            [393, 407, 395],
            [383, 393, 395],
            [399, 383, 395],
            [407, 399, 395],
            [753, 933, 839],
            [749, 753, 839],
            [929, 749, 839],
            [933, 929, 839],
            [661, 753, 692],
            [655, 661, 692],
            [749, 655, 692],
            [753, 749, 692],
            [589, 661, 623],
            [579, 589, 623],
            [655, 579, 623],
            [661, 655, 623],
            [526, 589, 558],
            [524, 526, 558],
            [579, 524, 558],
            [589, 579, 558],
            [749, 929, 833],
            [741, 749, 833],
            [923, 741, 833],
            [929, 923, 833],
            [655, 749, 688],
            [647, 655, 688],
            [741, 647, 688],
            [749, 741, 688],
            [579, 655, 617],
            [574, 579, 617],
            [647, 574, 617],
            [655, 647, 617],
            [524, 579, 548],
            [512, 524, 548],
            [574, 512, 548],
            [579, 574, 548],
            [473, 526, 498],
            [463, 473, 498],
            [524, 463, 498],
            [526, 524, 498],
            [422, 473, 443],
            [411, 422, 443],
            [463, 411, 443],
            [473, 463, 443],
            [399, 422, 405],
            [374, 399, 405],
            [411, 374, 405],
            [422, 411, 405],
            [383, 399, 380],
            [372, 383, 380],
            [374, 372, 380],
            [399, 374, 380],
            [463, 524, 484],
            [447, 463, 484],
            [512, 447, 484],
            [524, 512, 484],
            [411, 463, 424],
            [392, 411, 424],
            [447, 392, 424],
            [463, 447, 424],
            [374, 411, 385],
            [357, 374, 385],
            [392, 357, 385],
            [411, 392, 385],
            [372, 374, 365],
            [353, 372, 365],
            [357, 353, 365],
            [374, 357, 365],
            [400, 386, 396],
            [406, 400, 396],
            [393, 406, 396],
            [386, 393, 396],
            [425, 400, 414],
            [433, 425, 414],
            [406, 433, 414],
            [400, 406, 414],
            [474, 425, 456],
            [481, 474, 456],
            [433, 481, 456],
            [425, 433, 456],
            [527, 474, 505],
            [535, 527, 505],
            [481, 535, 505],
            [474, 481, 505],
            [406, 393, 394],
            [398, 406, 394],
            [383, 398, 394],
            [393, 383, 394],
            [433, 406, 412],
            [421, 433, 412],
            [398, 421, 412],
            [406, 398, 412],
            [481, 433, 454],
            [472, 481, 454],
            [421, 472, 454],
            [433, 421, 454],
            [535, 481, 503],
            [525, 535, 503],
            [472, 525, 503],
            [481, 472, 503],
            [590, 527, 565],
            [596, 590, 565],
            [535, 596, 565],
            [527, 535, 565],
            [662, 590, 626],
            [666, 662, 626],
            [596, 666, 626],
            [590, 596, 626],
            [754, 662, 697],
            [756, 754, 697],
            [666, 756, 697],
            [662, 666, 697],
            [919, 754, 848],
            [927, 919, 848],
            [756, 927, 848],
            [754, 756, 848],
            [596, 535, 563],
            [588, 596, 563],
            [525, 588, 563],
            [535, 525, 563],
            [666, 596, 624],
            [660, 666, 624],
            [588, 660, 624],
            [596, 588, 624],
            [756, 666, 695],
            [752, 756, 695],
            [660, 752, 695],
            [666, 660, 695],
            [927, 756, 846],
            [932, 927, 846],
            [752, 932, 846],
            [756, 752, 846],
            [398, 383, 379],
            [373, 398, 379],
            [372, 373, 379],
            [383, 372, 379],
            [421, 398, 404],
            [410, 421, 404],
            [373, 410, 404],
            [398, 373, 404],
            [472, 421, 442],
            [462, 472, 442],
            [410, 462, 442],
            [421, 410, 442],
            [525, 472, 497],
            [523, 525, 497],
            [462, 523, 497],
            [472, 462, 497],
            [373, 372, 364],
            [356, 373, 364],
            [353, 356, 364],
            [372, 353, 364],
            [410, 373, 384],
            [391, 410, 384],
            [356, 391, 384],
            [373, 356, 384],
            [462, 410, 423],
            [446, 462, 423],
            [391, 446, 423],
            [410, 391, 423],
            [523, 462, 483],
            [511, 523, 483],
            [446, 511, 483],
            [462, 446, 483],
            [588, 525, 557],
            [578, 588, 557],
            [523, 578, 557],
            [525, 523, 557],
            [660, 588, 622],
            [654, 660, 622],
            [578, 654, 622],
            [588, 578, 622],
            [752, 660, 691],
            [748, 752, 691],
            [654, 748, 691],
            [660, 654, 691],
            [932, 752, 838],
            [926, 932, 838],
            [748, 926, 838],
            [752, 748, 838],
            [578, 523, 547],
            [573, 578, 547],
            [511, 573, 547],
            [523, 511, 547],
            [654, 578, 616],
            [646, 654, 616],
            [573, 646, 616],
            [578, 573, 616],
            [748, 654, 687],
            [740, 748, 687],
            [646, 740, 687],
            [654, 646, 687],
            [926, 748, 832],
            [918, 926, 832],
            [740, 918, 832],
            [748, 740, 832],
            [1099, 919, 1005],
            [1097, 1099, 1005],
            [927, 1097, 1005],
            [919, 927, 1005],
            [1191, 1099, 1156],
            [1187, 1191, 1156],
            [1097, 1187, 1156],
            [1099, 1097, 1156],
            [1263, 1191, 1227],
            [1257, 1263, 1227],
            [1187, 1257, 1227],
            [1191, 1187, 1227],
            [1326, 1263, 1288],
            [1318, 1326, 1288],
            [1257, 1318, 1288],
            [1263, 1257, 1288],
            [1097, 927, 1007],
            [1101, 1097, 1007],
            [932, 1101, 1007],
            [927, 932, 1007],
            [1187, 1097, 1158],
            [1193, 1187, 1158],
            [1101, 1193, 1158],
            [1097, 1101, 1158],
            [1257, 1187, 1229],
            [1265, 1257, 1229],
            [1193, 1265, 1229],
            [1187, 1193, 1229],
            [1318, 1257, 1290],
            [1328, 1318, 1290],
            [1265, 1328, 1290],
            [1257, 1265, 1290],
            [1379, 1326, 1348],
            [1372, 1379, 1348],
            [1318, 1372, 1348],
            [1326, 1318, 1348],
            [1428, 1379, 1397],
            [1420, 1428, 1397],
            [1372, 1420, 1397],
            [1379, 1372, 1397],
            [1453, 1428, 1439],
            [1447, 1453, 1439],
            [1420, 1447, 1439],
            [1428, 1420, 1439],
            [1468, 1453, 1457],
            [1461, 1468, 1457],
            [1447, 1461, 1457],
            [1453, 1447, 1457],
            [1372, 1318, 1350],
            [1381, 1372, 1350],
            [1328, 1381, 1350],
            [1318, 1328, 1350],
            [1420, 1372, 1399],
            [1432, 1420, 1399],
            [1381, 1432, 1399],
            [1372, 1381, 1399],
            [1447, 1420, 1441],
            [1455, 1447, 1441],
            [1432, 1455, 1441],
            [1420, 1432, 1441],
            [1461, 1447, 1459],
            [1471, 1461, 1459],
            [1455, 1471, 1459],
            [1447, 1455, 1459],
            [1101, 932, 1015],
            [1105, 1101, 1015],
            [926, 1105, 1015],
            [932, 926, 1015],
            [1193, 1101, 1162],
            [1199, 1193, 1162],
            [1105, 1199, 1162],
            [1101, 1105, 1162],
            [1265, 1193, 1231],
            [1275, 1265, 1231],
            [1199, 1275, 1231],
            [1193, 1199, 1231],
            [1328, 1265, 1296],
            [1330, 1328, 1296],
            [1275, 1330, 1296],
            [1265, 1275, 1296],
            [1105, 926, 1021],
            [1115, 1105, 1021],
            [918, 1115, 1021],
            [926, 918, 1021],
            [1199, 1105, 1166],
            [1209, 1199, 1166],
            [1115, 1209, 1166],
            [1105, 1115, 1166],
            [1275, 1199, 1237],
            [1282, 1275, 1237],
            [1209, 1282, 1237],
            [1199, 1209, 1237],
            [1330, 1275, 1306],
            [1344, 1330, 1306],
            [1282, 1344, 1306],
            [1275, 1282, 1306],
            [1381, 1328, 1356],
            [1391, 1381, 1356],
            [1330, 1391, 1356],
            [1328, 1330, 1356],
            [1432, 1381, 1411],
            [1443, 1432, 1411],
            [1391, 1443, 1411],
            [1381, 1391, 1411],
            [1455, 1432, 1449],
            [1480, 1455, 1449],
            [1443, 1480, 1449],
            [1432, 1443, 1449],
            [1471, 1455, 1474],
            [1482, 1471, 1474],
            [1480, 1482, 1474],
            [1455, 1480, 1474],
            [1391, 1330, 1370],
            [1409, 1391, 1370],
            [1344, 1409, 1370],
            [1330, 1344, 1370],
            [1443, 1391, 1430],
            [1464, 1443, 1430],
            [1409, 1464, 1430],
            [1391, 1409, 1430],
            [1480, 1443, 1469],
            [1499, 1480, 1469],
            [1464, 1499, 1469],
            [1443, 1464, 1469],
            [1482, 1480, 1489],
            [1502, 1482, 1489],
            [1499, 1502, 1489],
            [1480, 1499, 1489],
            [1500, 1502, 1533],
            [1572, 1500, 1533],
            [1585, 1572, 1533],
            [1502, 1585, 1533],
            [1465, 1500, 1519],
            [1555, 1465, 1519],
            [1572, 1555, 1519],
            [1500, 1572, 1519],
            [1410, 1465, 1496],
            [1510, 1410, 1496],
            [1555, 1510, 1496],
            [1465, 1555, 1496],
            [1345, 1410, 1427],
            [1436, 1345, 1427],
            [1510, 1436, 1427],
            [1410, 1510, 1427],
            [1283, 1345, 1341],
            [1333, 1283, 1341],
            [1436, 1333, 1341],
            [1345, 1436, 1341],
            [1210, 1283, 1270],
            [1242, 1210, 1270],
            [1333, 1242, 1270],
            [1283, 1333, 1270],
            [1116, 1210, 1184],
            [1143, 1116, 1184],
            [1242, 1143, 1184],
            [1210, 1242, 1184],
            [923, 1116, 1037],
            [917, 923, 1037],
            [1143, 917, 1037],
            [1116, 1143, 1037],
            [1572, 1585, 1599],
            [1611, 1572, 1599],
            [1622, 1611, 1599],
            [1585, 1622, 1599],
            [1555, 1572, 1574],
            [1570, 1555, 1574],
            [1611, 1570, 1574],
            [1572, 1611, 1574],
            [1510, 1555, 1537],
            [1527, 1510, 1537],
            [1570, 1527, 1537],
            [1555, 1570, 1537],
            [1436, 1510, 1494],
            [1467, 1436, 1494],
            [1527, 1467, 1494],
            [1510, 1527, 1494],
            [1611, 1622, 1624],
            [1626, 1611, 1624],
            [1633, 1626, 1624],
            [1622, 1633, 1624],
            [1570, 1611, 1601],
            [1589, 1570, 1601],
            [1626, 1589, 1601],
            [1611, 1626, 1601],
            [1527, 1570, 1561],
            [1535, 1527, 1561],
            [1589, 1535, 1561],
            [1570, 1589, 1561],
            [1467, 1527, 1508],
            [1479, 1467, 1508],
            [1535, 1479, 1508],
            [1527, 1535, 1508],
            [1333, 1436, 1394],
            [1359, 1333, 1394],
            [1467, 1359, 1394],
            [1436, 1467, 1394],
            [1242, 1333, 1299],
            [1254, 1242, 1299],
            [1359, 1254, 1299],
            [1333, 1359, 1299],
            [1143, 1242, 1198],
            [1149, 1143, 1198],
            [1254, 1149, 1198],
            [1242, 1254, 1198],
            [917, 1143, 1057],
            [915, 917, 1057],
            [1149, 915, 1057],
            [1143, 1149, 1057],
            [1359, 1467, 1414],
            [1367, 1359, 1414],
            [1479, 1367, 1414],
            [1467, 1479, 1414],
            [1254, 1359, 1311],
            [1262, 1254, 1311],
            [1367, 1262, 1311],
            [1359, 1367, 1311],
            [1149, 1254, 1212],
            [1155, 1149, 1212],
            [1262, 1155, 1212],
            [1254, 1262, 1212],
            [915, 1149, 1065],
            [913, 915, 1065],
            [1155, 913, 1065],
            [1149, 1155, 1065],
            [741, 923, 818],
            [712, 741, 818],
            [917, 712, 818],
            [923, 917, 818],
            [647, 741, 671],
            [613, 647, 671],
            [712, 613, 671],
            [741, 712, 671],
            [574, 647, 585],
            [522, 574, 585],
            [613, 522, 585],
            [647, 613, 585],
            [512, 574, 514],
            [419, 512, 514],
            [522, 419, 514],
            [574, 522, 514],
            [447, 512, 428],
            [342, 447, 428],
            [419, 342, 428],
            [512, 419, 428],
            [392, 447, 359],
            [308, 392, 359],
            [342, 308, 359],
            [447, 342, 359],
            [357, 392, 329],
            [291, 357, 329],
            [308, 291, 329],
            [392, 308, 329],
            [353, 357, 314],
            [275, 353, 314],
            [291, 275, 314],
            [357, 291, 314],
            [712, 917, 798],
            [706, 712, 798],
            [915, 706, 798],
            [917, 915, 798],
            [613, 712, 657],
            [601, 613, 657],
            [706, 601, 657],
            [712, 706, 657],
            [522, 613, 556],
            [496, 522, 556],
            [601, 496, 556],
            [613, 601, 556],
            [419, 522, 461],
            [388, 419, 461],
            [496, 388, 461],
            [522, 496, 461],
            [706, 915, 790],
            [700, 706, 790],
            [913, 700, 790],
            [915, 913, 790],
            [601, 706, 643],
            [593, 601, 643],
            [700, 593, 643],
            [706, 700, 643],
            [496, 601, 544],
            [488, 496, 544],
            [593, 488, 544],
            [601, 593, 544],
            [388, 496, 441],
            [376, 388, 441],
            [488, 376, 441],
            [496, 488, 441],
            [342, 419, 361],
            [320, 342, 361],
            [388, 320, 361],
            [419, 388, 361],
            [308, 342, 310],
            [293, 308, 310],
            [320, 293, 310],
            [342, 320, 310],
            [291, 308, 289],
            [257, 291, 289],
            [293, 257, 289],
            [308, 293, 289],
            [275, 291, 270],
            [246, 275, 270],
            [257, 246, 270],
            [291, 257, 270],
            [320, 388, 344],
            [312, 320, 344],
            [376, 312, 344],
            [388, 376, 344],
            [293, 320, 302],
            [274, 293, 302],
            [312, 274, 302],
            [320, 312, 302],
            [257, 293, 268],
            [243, 257, 268],
            [274, 243, 268],
            [293, 274, 268],
            [246, 257, 245],
            [232, 246, 245],
            [243, 232, 245],
            [257, 243, 245],
            [356, 353, 313],
            [290, 356, 313],
            [275, 290, 313],
            [353, 275, 313],
            [391, 356, 328],
            [307, 391, 328],
            [290, 307, 328],
            [356, 290, 328],
            [446, 391, 358],
            [341, 446, 358],
            [307, 341, 358],
            [391, 307, 358],
            [511, 446, 427],
            [418, 511, 427],
            [341, 418, 427],
            [446, 341, 427],
            [573, 511, 513],
            [521, 573, 513],
            [418, 521, 513],
            [511, 418, 513],
            [646, 573, 584],
            [612, 646, 584],
            [521, 612, 584],
            [573, 521, 584],
            [740, 646, 670],
            [711, 740, 670],
            [612, 711, 670],
            [646, 612, 670],
            [918, 740, 817],
            [916, 918, 817],
            [711, 916, 817],
            [740, 711, 817],
            [290, 275, 269],
            [256, 290, 269],
            [246, 256, 269],
            [275, 246, 269],
            [307, 290, 288],
            [292, 307, 288],
            [256, 292, 288],
            [290, 256, 288],
            [341, 307, 309],
            [319, 341, 309],
            [292, 319, 309],
            [307, 292, 309],
            [418, 341, 360],
            [387, 418, 360],
            [319, 387, 360],
            [341, 319, 360],
            [256, 246, 244],
            [242, 256, 244],
            [232, 242, 244],
            [246, 232, 244],
            [292, 256, 267],
            [273, 292, 267],
            [242, 273, 267],
            [256, 242, 267],
            [319, 292, 301],
            [311, 319, 301],
            [273, 311, 301],
            [292, 273, 301],
            [387, 319, 343],
            [375, 387, 343],
            [311, 375, 343],
            [319, 311, 343],
            [521, 418, 460],
            [495, 521, 460],
            [387, 495, 460],
            [418, 387, 460],
            [612, 521, 555],
            [600, 612, 555],
            [495, 600, 555],
            [521, 495, 555],
            [711, 612, 656],
            [705, 711, 656],
            [600, 705, 656],
            [612, 600, 656],
            [916, 711, 797],
            [914, 916, 797],
            [705, 914, 797],
            [711, 705, 797],
            [495, 387, 440],
            [487, 495, 440],
            [375, 487, 440],
            [387, 375, 440],
            [600, 495, 543],
            [592, 600, 543],
            [487, 592, 543],
            [495, 487, 543],
            [705, 600, 642],
            [699, 705, 642],
            [592, 699, 642],
            [600, 592, 642],
            [914, 705, 789],
            [912, 914, 789],
            [699, 912, 789],
            [705, 699, 789],
            [1115, 918, 1036],
            [1142, 1115, 1036],
            [916, 1142, 1036],
            [918, 916, 1036],
            [1209, 1115, 1183],
            [1241, 1209, 1183],
            [1142, 1241, 1183],
            [1115, 1142, 1183],
            [1282, 1209, 1269],
            [1332, 1282, 1269],
            [1241, 1332, 1269],
            [1209, 1241, 1269],
            [1344, 1282, 1340],
            [1435, 1344, 1340],
            [1332, 1435, 1340],
            [1282, 1332, 1340],
            [1409, 1344, 1426],
            [1509, 1409, 1426],
            [1435, 1509, 1426],
            [1344, 1435, 1426],
            [1464, 1409, 1495],
            [1554, 1464, 1495],
            [1509, 1554, 1495],
            [1409, 1509, 1495],
            [1499, 1464, 1518],
            [1571, 1499, 1518],
            [1554, 1571, 1518],
            [1464, 1554, 1518],
            [1502, 1499, 1532],
            [1585, 1502, 1532],
            [1571, 1585, 1532],
            [1499, 1571, 1532],
            [1142, 916, 1056],
            [1148, 1142, 1056],
            [914, 1148, 1056],
            [916, 914, 1056],
            [1241, 1142, 1197],
            [1253, 1241, 1197],
            [1148, 1253, 1197],
            [1142, 1148, 1197],
            [1332, 1241, 1298],
            [1358, 1332, 1298],
            [1253, 1358, 1298],
            [1241, 1253, 1298],
            [1435, 1332, 1393],
            [1466, 1435, 1393],
            [1358, 1466, 1393],
            [1332, 1358, 1393],
            [1148, 914, 1064],
            [1154, 1148, 1064],
            [912, 1154, 1064],
            [914, 912, 1064],
            [1253, 1148, 1211],
            [1261, 1253, 1211],
            [1154, 1261, 1211],
            [1148, 1154, 1211],
            [1358, 1253, 1310],
            [1366, 1358, 1310],
            [1261, 1366, 1310],
            [1253, 1261, 1310],
            [1466, 1358, 1413],
            [1478, 1466, 1413],
            [1366, 1478, 1413],
            [1358, 1366, 1413],
            [1509, 1435, 1493],
            [1526, 1509, 1493],
            [1466, 1526, 1493],
            [1435, 1466, 1493],
            [1554, 1509, 1536],
            [1569, 1554, 1536],
            [1526, 1569, 1536],
            [1509, 1526, 1536],
            [1571, 1554, 1573],
            [1610, 1571, 1573],
            [1569, 1610, 1573],
            [1554, 1569, 1573],
            [1585, 1571, 1598],
            [1622, 1585, 1598],
            [1610, 1622, 1598],
            [1571, 1610, 1598],
            [1526, 1466, 1507],
            [1534, 1526, 1507],
            [1478, 1534, 1507],
            [1466, 1478, 1507],
            [1569, 1526, 1560],
            [1588, 1569, 1560],
            [1534, 1588, 1560],
            [1526, 1534, 1560],
            [1610, 1569, 1600],
            [1625, 1610, 1600],
            [1588, 1625, 1600],
            [1569, 1588, 1600],
            [1622, 1610, 1623],
            [1633, 1622, 1623],
            [1625, 1633, 1623],
            [1610, 1625, 1623],
            [1626, 1633, 1628],
            [1621, 1626, 1628],
            [1629, 1621, 1628],
            [1633, 1629, 1628],
            [1589, 1626, 1607],
            [1584, 1589, 1607],
            [1621, 1584, 1607],
            [1626, 1621, 1607],
            [1621, 1629, 1616],
            [1603, 1621, 1616],
            [1612, 1603, 1616],
            [1629, 1612, 1616],
            [1584, 1621, 1593],
            [1568, 1584, 1593],
            [1603, 1568, 1593],
            [1621, 1603, 1593],
            [1535, 1589, 1563],
            [1529, 1535, 1563],
            [1584, 1529, 1563],
            [1589, 1584, 1563],
            [1479, 1535, 1512],
            [1473, 1479, 1512],
            [1529, 1473, 1512],
            [1535, 1529, 1512],
            [1529, 1584, 1557],
            [1521, 1529, 1557],
            [1568, 1521, 1557],
            [1584, 1568, 1557],
            [1473, 1529, 1504],
            [1452, 1473, 1504],
            [1521, 1452, 1504],
            [1529, 1521, 1504],
            [1603, 1612, 1580],
            [1559, 1603, 1580],
            [1566, 1559, 1580],
            [1612, 1566, 1580],
            [1568, 1603, 1565],
            [1525, 1568, 1565],
            [1559, 1525, 1565],
            [1603, 1559, 1565],
            [1521, 1568, 1523],
            [1484, 1521, 1523],
            [1525, 1484, 1523],
            [1568, 1525, 1523],
            [1452, 1521, 1477],
            [1406, 1452, 1477],
            [1484, 1406, 1477],
            [1521, 1484, 1477],
            [1367, 1479, 1417],
            [1361, 1367, 1417],
            [1473, 1361, 1417],
            [1479, 1473, 1417],
            [1262, 1367, 1313],
            [1260, 1262, 1313],
            [1361, 1260, 1313],
            [1367, 1361, 1313],
            [1361, 1473, 1404],
            [1355, 1361, 1404],
            [1452, 1355, 1404],
            [1473, 1452, 1404],
            [1260, 1361, 1303],
            [1248, 1260, 1303],
            [1355, 1248, 1303],
            [1361, 1355, 1303],
            [1155, 1262, 1214],
            [1151, 1155, 1214],
            [1260, 1151, 1214],
            [1262, 1260, 1214],
            [913, 1155, 1067],
            [911, 913, 1067],
            [1151, 911, 1067],
            [1155, 1151, 1067],
            [1151, 1260, 1204],
            [1147, 1151, 1204],
            [1248, 1147, 1204],
            [1260, 1248, 1204],
            [911, 1151, 1062],
            [909, 911, 1062],
            [1147, 909, 1062],
            [1151, 1147, 1062],
            [1355, 1452, 1384],
            [1323, 1355, 1384],
            [1406, 1323, 1384],
            [1452, 1406, 1384],
            [1248, 1355, 1287],
            [1236, 1248, 1287],
            [1323, 1236, 1287],
            [1355, 1323, 1287],
            [1147, 1248, 1190],
            [1135, 1147, 1190],
            [1236, 1135, 1190],
            [1248, 1236, 1190],
            [909, 1147, 1051],
            [907, 909, 1051],
            [1135, 907, 1051],
            [1147, 1135, 1051],
            [1559, 1566, 1531],
            [1514, 1559, 1531],
            [1515, 1514, 1531],
            [1566, 1515, 1531],
            [1525, 1559, 1517],
            [1486, 1525, 1517],
            [1514, 1486, 1517],
            [1559, 1514, 1517],
            [1484, 1525, 1488],
            [1438, 1484, 1488],
            [1486, 1438, 1488],
            [1525, 1486, 1488],
            [1406, 1484, 1425],
            [1363, 1406, 1425],
            [1438, 1363, 1425],
            [1484, 1438, 1425],
            [1514, 1515, 1506],
            [1498, 1514, 1506],
            [1501, 1498, 1506],
            [1515, 1501, 1506],
            [1486, 1514, 1492],
            [1463, 1486, 1492],
            [1498, 1463, 1492],
            [1514, 1498, 1492],
            [1438, 1486, 1446],
            [1408, 1438, 1446],
            [1463, 1408, 1446],
            [1486, 1463, 1446],
            [1363, 1438, 1386],
            [1343, 1363, 1386],
            [1408, 1343, 1386],
            [1438, 1408, 1386],
            [1323, 1406, 1337],
            [1293, 1323, 1337],
            [1363, 1293, 1337],
            [1406, 1363, 1337],
            [1236, 1323, 1268],
            [1220, 1236, 1268],
            [1293, 1220, 1268],
            [1323, 1293, 1268],
            [1135, 1236, 1182],
            [1122, 1135, 1182],
            [1220, 1122, 1182],
            [1236, 1220, 1182],
            [907, 1135, 1035],
            [905, 907, 1035],
            [1122, 905, 1035],
            [1135, 1122, 1035],
            [1293, 1363, 1317],
            [1281, 1293, 1317],
            [1343, 1281, 1317],
            [1363, 1343, 1317],
            [1220, 1293, 1246],
            [1208, 1220, 1246],
            [1281, 1208, 1246],
            [1293, 1281, 1246],
            [1122, 1220, 1172],
            [1114, 1122, 1172],
            [1208, 1114, 1172],
            [1220, 1208, 1172],
            [905, 1122, 1026],
            [903, 905, 1026],
            [1114, 903, 1026],
            [1122, 1114, 1026],
            [700, 913, 788],
            [704, 700, 788],
            [911, 704, 788],
            [913, 911, 788],
            [593, 700, 641],
            [595, 593, 641],
            [704, 595, 641],
            [700, 704, 641],
            [704, 911, 793],
            [708, 704, 793],
            [909, 708, 793],
            [911, 909, 793],
            [595, 704, 651],
            [607, 595, 651],
            [708, 607, 651],
            [704, 708, 651],
            [488, 593, 542],
            [494, 488, 542],
            [595, 494, 542],
            [593, 595, 542],
            [376, 488, 438],
            [382, 376, 438],
            [494, 382, 438],
            [488, 494, 438],
            [494, 595, 552],
            [500, 494, 552],
            [607, 500, 552],
            [595, 607, 552],
            [382, 494, 451],
            [403, 382, 451],
            [500, 403, 451],
            [494, 500, 451],
            [708, 909, 804],
            [718, 708, 804],
            [907, 718, 804],
            [909, 907, 804],
            [607, 708, 665],
            [619, 607, 665],
            [718, 619, 665],
            [708, 718, 665],
            [500, 607, 568],
            [532, 500, 568],
            [619, 532, 568],
            [607, 619, 568],
            [403, 500, 471],
            [449, 403, 471],
            [532, 449, 471],
            [500, 532, 471],
            [312, 376, 340],
            [318, 312, 340],
            [382, 318, 340],
            [376, 382, 340],
            [274, 312, 300],
            [285, 274, 300],
            [318, 285, 300],
            [312, 318, 300],
            [318, 382, 350],
            [327, 318, 350],
            [403, 327, 350],
            [382, 403, 350],
            [285, 318, 306],
            [295, 285, 306],
            [327, 295, 306],
            [318, 327, 306],
            [243, 274, 264],
            [250, 243, 264],
            [285, 250, 264],
            [274, 285, 264],
            [232, 243, 239],
            [237, 232, 239],
            [250, 237, 239],
            [243, 250, 239],
            [250, 285, 272],
            [266, 250, 272],
            [295, 266, 272],
            [285, 295, 272],
            [237, 250, 254],
            [255, 237, 254],
            [266, 255, 254],
            [250, 266, 254],
            [327, 403, 378],
            [371, 327, 378],
            [449, 371, 378],
            [403, 449, 378],
            [295, 327, 324],
            [322, 295, 324],
            [371, 322, 324],
            [327, 371, 324],
            [266, 295, 298],
            [304, 266, 298],
            [322, 304, 298],
            [295, 322, 298],
            [255, 266, 287],
            [296, 255, 287],
            [304, 296, 287],
            [266, 304, 287],
            [718, 907, 820],
            [733, 718, 820],
            [905, 733, 820],
            [907, 905, 820],
            [619, 718, 673],
            [635, 619, 673],
            [733, 635, 673],
            [718, 733, 673],
            [532, 619, 587],
            [562, 532, 587],
            [635, 562, 587],
            [619, 635, 587],
            [449, 532, 518],
            [492, 449, 518],
            [562, 492, 518],
            [532, 562, 518],
            [733, 905, 829],
            [739, 733, 829],
            [903, 739, 829],
            [905, 903, 829],
            [635, 733, 683],
            [645, 635, 683],
            [739, 645, 683],
            [733, 739, 683],
            [562, 635, 609],
            [572, 562, 609],
            [645, 572, 609],
            [635, 645, 609],
            [492, 562, 538],
            [510, 492, 538],
            [572, 510, 538],
            [562, 572, 538],
            [371, 449, 430],
            [417, 371, 430],
            [492, 417, 430],
            [449, 492, 430],
            [322, 371, 367],
            [369, 322, 367],
            [417, 369, 367],
            [371, 417, 367],
            [304, 322, 333],
            [338, 304, 333],
            [369, 338, 333],
            [322, 369, 333],
            [296, 304, 316],
            [334, 296, 316],
            [338, 334, 316],
            [304, 338, 316],
            [417, 492, 469],
            [445, 417, 469],
            [510, 445, 469],
            [492, 510, 469],
            [369, 417, 409],
            [390, 369, 409],
            [445, 390, 409],
            [417, 445, 409],
            [338, 369, 363],
            [355, 338, 363],
            [390, 355, 363],
            [369, 390, 363],
            [334, 338, 346],
            [351, 334, 346],
            [355, 351, 346],
            [338, 355, 346],
            [242, 232, 238],
            [249, 242, 238],
            [237, 249, 238],
            [232, 237, 238],
            [273, 242, 263],
            [284, 273, 263],
            [249, 284, 263],
            [242, 249, 263],
            [249, 237, 253],
            [265, 249, 253],
            [255, 265, 253],
            [237, 255, 253],
            [284, 249, 271],
            [294, 284, 271],
            [265, 294, 271],
            [249, 265, 271],
            [311, 273, 299],
            [317, 311, 299],
            [284, 317, 299],
            [273, 284, 299],
            [375, 311, 339],
            [381, 375, 339],
            [317, 381, 339],
            [311, 317, 339],
            [317, 284, 305],
            [326, 317, 305],
            [294, 326, 305],
            [284, 294, 305],
            [381, 317, 349],
            [402, 381, 349],
            [326, 402, 349],
            [317, 326, 349],
            [265, 255, 286],
            [303, 265, 286],
            [296, 303, 286],
            [255, 296, 286],
            [294, 265, 297],
            [321, 294, 297],
            [303, 321, 297],
            [265, 303, 297],
            [326, 294, 323],
            [370, 326, 323],
            [321, 370, 323],
            [294, 321, 323],
            [402, 326, 377],
            [448, 402, 377],
            [370, 448, 377],
            [326, 370, 377],
            [487, 375, 437],
            [493, 487, 437],
            [381, 493, 437],
            [375, 381, 437],
            [592, 487, 541],
            [594, 592, 541],
            [493, 594, 541],
            [487, 493, 541],
            [493, 381, 450],
            [499, 493, 450],
            [402, 499, 450],
            [381, 402, 450],
            [594, 493, 551],
            [606, 594, 551],
            [499, 606, 551],
            [493, 499, 551],
            [699, 592, 640],
            [703, 699, 640],
            [594, 703, 640],
            [592, 594, 640],
            [912, 699, 787],
            [910, 912, 787],
            [703, 910, 787],
            [699, 703, 787],
            [703, 594, 650],
            [707, 703, 650],
            [606, 707, 650],
            [594, 606, 650],
            [910, 703, 792],
            [908, 910, 792],
            [707, 908, 792],
            [703, 707, 792],
            [499, 402, 470],
            [531, 499, 470],
            [448, 531, 470],
            [402, 448, 470],
            [606, 499, 567],
            [618, 606, 567],
            [531, 618, 567],
            [499, 531, 567],
            [707, 606, 664],
            [719, 707, 664],
            [618, 719, 664],
            [606, 618, 664],
            [908, 707, 803],
            [906, 908, 803],
            [719, 906, 803],
            [707, 719, 803],
            [303, 296, 315],
            [337, 303, 315],
            [334, 337, 315],
            [296, 334, 315],
            [321, 303, 332],
            [368, 321, 332],
            [337, 368, 332],
            [303, 337, 332],
            [370, 321, 366],
            [416, 370, 366],
            [368, 416, 366],
            [321, 368, 366],
            [448, 370, 429],
            [491, 448, 429],
            [416, 491, 429],
            [370, 416, 429],
            [337, 334, 345],
            [354, 337, 345],
            [351, 354, 345],
            [334, 351, 345],
            [368, 337, 362],
            [389, 368, 362],
            [354, 389, 362],
            [337, 354, 362],
            [416, 368, 408],
            [444, 416, 408],
            [389, 444, 408],
            [368, 389, 408],
            [491, 416, 468],
            [509, 491, 468],
            [444, 509, 468],
            [416, 444, 468],
            [531, 448, 517],
            [561, 531, 517],
            [491, 561, 517],
            [448, 491, 517],
            [618, 531, 586],
            [634, 618, 586],
            [561, 634, 586],
            [531, 561, 586],
            [719, 618, 672],
            [732, 719, 672],
            [634, 732, 672],
            [618, 634, 672],
            [906, 719, 819],
            [904, 906, 819],
            [732, 904, 819],
            [719, 732, 819],
            [561, 491, 537],
            [571, 561, 537],
            [509, 571, 537],
            [491, 509, 537],
            [634, 561, 608],
            [644, 634, 608],
            [571, 644, 608],
            [561, 571, 608],
            [732, 634, 682],
            [738, 732, 682],
            [644, 738, 682],
            [634, 644, 682],
            [904, 732, 828],
            [902, 904, 828],
            [738, 902, 828],
            [732, 738, 828],
            [1154, 912, 1066],
            [1150, 1154, 1066],
            [910, 1150, 1066],
            [912, 910, 1066],
            [1261, 1154, 1213],
            [1259, 1261, 1213],
            [1150, 1259, 1213],
            [1154, 1150, 1213],
            [1150, 910, 1061],
            [1146, 1150, 1061],
            [908, 1146, 1061],
            [910, 908, 1061],
            [1259, 1150, 1203],
            [1247, 1259, 1203],
            [1146, 1247, 1203],
            [1150, 1146, 1203],
            [1366, 1261, 1312],
            [1360, 1366, 1312],
            [1259, 1360, 1312],
            [1261, 1259, 1312],
            [1478, 1366, 1416],
            [1472, 1478, 1416],
            [1360, 1472, 1416],
            [1366, 1360, 1416],
            [1360, 1259, 1302],
            [1354, 1360, 1302],
            [1247, 1354, 1302],
            [1259, 1247, 1302],
            [1472, 1360, 1403],
            [1451, 1472, 1403],
            [1354, 1451, 1403],
            [1360, 1354, 1403],
            [1146, 908, 1050],
            [1136, 1146, 1050],
            [906, 1136, 1050],
            [908, 906, 1050],
            [1247, 1146, 1189],
            [1235, 1247, 1189],
            [1136, 1235, 1189],
            [1146, 1136, 1189],
            [1354, 1247, 1286],
            [1322, 1354, 1286],
            [1235, 1322, 1286],
            [1247, 1235, 1286],
            [1451, 1354, 1383],
            [1405, 1451, 1383],
            [1322, 1405, 1383],
            [1354, 1322, 1383],
            [1534, 1478, 1511],
            [1528, 1534, 1511],
            [1472, 1528, 1511],
            [1478, 1472, 1511],
            [1588, 1534, 1562],
            [1583, 1588, 1562],
            [1528, 1583, 1562],
            [1534, 1528, 1562],
            [1528, 1472, 1503],
            [1520, 1528, 1503],
            [1451, 1520, 1503],
            [1472, 1451, 1503],
            [1583, 1528, 1556],
            [1567, 1583, 1556],
            [1520, 1567, 1556],
            [1528, 1520, 1556],
            [1625, 1588, 1606],
            [1620, 1625, 1606],
            [1583, 1620, 1606],
            [1588, 1583, 1606],
            [1633, 1625, 1627],
            [1629, 1633, 1627],
            [1620, 1629, 1627],
            [1625, 1620, 1627],
            [1620, 1583, 1592],
            [1602, 1620, 1592],
            [1567, 1602, 1592],
            [1583, 1567, 1592],
            [1629, 1620, 1615],
            [1612, 1629, 1615],
            [1602, 1612, 1615],
            [1620, 1602, 1615],
            [1520, 1451, 1476],
            [1483, 1520, 1476],
            [1405, 1483, 1476],
            [1451, 1405, 1476],
            [1567, 1520, 1522],
            [1524, 1567, 1522],
            [1483, 1524, 1522],
            [1520, 1483, 1522],
            [1602, 1567, 1564],
            [1558, 1602, 1564],
            [1524, 1558, 1564],
            [1567, 1524, 1564],
            [1612, 1602, 1579],
            [1566, 1612, 1579],
            [1558, 1566, 1579],
            [1602, 1558, 1579],
            [1136, 906, 1034],
            [1121, 1136, 1034],
            [904, 1121, 1034],
            [906, 904, 1034],
            [1235, 1136, 1181],
            [1219, 1235, 1181],
            [1121, 1219, 1181],
            [1136, 1121, 1181],
            [1322, 1235, 1267],
            [1292, 1322, 1267],
            [1219, 1292, 1267],
            [1235, 1219, 1267],
            [1405, 1322, 1336],
            [1362, 1405, 1336],
            [1292, 1362, 1336],
            [1322, 1292, 1336],
            [1121, 904, 1025],
            [1113, 1121, 1025],
            [902, 1113, 1025],
            [904, 902, 1025],
            [1219, 1121, 1171],
            [1207, 1219, 1171],
            [1113, 1207, 1171],
            [1121, 1113, 1171],
            [1292, 1219, 1245],
            [1280, 1292, 1245],
            [1207, 1280, 1245],
            [1219, 1207, 1245],
            [1362, 1292, 1316],
            [1342, 1362, 1316],
            [1280, 1342, 1316],
            [1292, 1280, 1316],
            [1483, 1405, 1424],
            [1437, 1483, 1424],
            [1362, 1437, 1424],
            [1405, 1362, 1424],
            [1524, 1483, 1487],
            [1485, 1524, 1487],
            [1437, 1485, 1487],
            [1483, 1437, 1487],
            [1558, 1524, 1516],
            [1513, 1558, 1516],
            [1485, 1513, 1516],
            [1524, 1485, 1516],
            [1566, 1558, 1530],
            [1515, 1566, 1530],
            [1513, 1515, 1530],
            [1558, 1513, 1530],
            [1437, 1362, 1385],
            [1407, 1437, 1385],
            [1342, 1407, 1385],
            [1362, 1342, 1385],
            [1485, 1437, 1445],
            [1462, 1485, 1445],
            [1407, 1462, 1445],
            [1437, 1407, 1445],
            [1513, 1485, 1491],
            [1497, 1513, 1491],
            [1462, 1497, 1491],
            [1485, 1462, 1491],
            [1515, 1513, 1505],
            [1501, 1515, 1505],
            [1497, 1501, 1505],
            [1513, 1497, 1505],
            [331, 325, 277],
            [228, 331, 277],
            [231, 228, 277],
            [325, 231, 277],
            [336, 331, 279],
            [224, 336, 279],
            [228, 224, 279],
            [331, 228, 279],
            [228, 231, 200],
            [173, 228, 200],
            [178, 173, 200],
            [231, 178, 200],
            [224, 228, 198],
            [167, 224, 198],
            [173, 167, 198],
            [228, 173, 198],
            [348, 336, 281],
            [222, 348, 281],
            [224, 222, 281],
            [336, 224, 281],
            [352, 348, 283],
            [210, 352, 283],
            [222, 210, 283],
            [348, 222, 283],
            [222, 224, 193],
            [150, 222, 193],
            [167, 150, 193],
            [224, 167, 193],
            [210, 222, 183],
            [142, 210, 183],
            [150, 142, 183],
            [222, 150, 183],
            [177, 178, 165],
            [136, 177, 165],
            [141, 136, 165],
            [178, 141, 165],
            [173, 177, 162],
            [127, 173, 162],
            [136, 127, 162],
            [177, 136, 162],
            [167, 173, 158],
            [131, 167, 158],
            [152, 131, 158],
            [173, 152, 158],
            [131, 152, 129],
            [82, 131, 129],
            [127, 82, 129],
            [152, 127, 129],
            [136, 141, 134],
            [114, 136, 134],
            [121, 114, 134],
            [141, 121, 134],
            [127, 136, 118],
            [93, 127, 118],
            [114, 93, 118],
            [136, 114, 118],
            [114, 121, 112],
            [101, 114, 112],
            [108, 101, 112],
            [121, 108, 112],
            [93, 114, 95],
            [90, 93, 95],
            [101, 90, 95],
            [114, 101, 95],
            [82, 127, 88],
            [59, 82, 88],
            [93, 59, 88],
            [127, 93, 88],
            [59, 93, 74],
            [52, 59, 74],
            [90, 52, 74],
            [93, 90, 74],
            [150, 167, 140],
            [86, 150, 140],
            [131, 86, 140],
            [167, 131, 140],
            [86, 131, 84],
            [50, 86, 84],
            [82, 50, 84],
            [131, 82, 84],
            [148, 150, 120],
            [76, 148, 120],
            [86, 76, 120],
            [150, 86, 120],
            [142, 148, 110],
            [72, 142, 110],
            [76, 72, 110],
            [148, 76, 110],
            [76, 86, 65],
            [36, 76, 65],
            [50, 36, 65],
            [86, 50, 65],
            [72, 76, 57],
            [34, 72, 57],
            [36, 34, 57],
            [76, 36, 57],
            [50, 82, 55],
            [27, 50, 55],
            [59, 27, 55],
            [82, 59, 55],
            [27, 59, 42],
            [18, 27, 42],
            [52, 18, 42],
            [59, 52, 42],
            [36, 50, 33],
            [12, 36, 33],
            [27, 12, 33],
            [50, 27, 33],
            [34, 36, 24],
            [8, 34, 24],
            [12, 8, 24],
            [36, 12, 24],
            [12, 27, 16],
            [2, 12, 16],
            [18, 2, 16],
            [27, 18, 16],
            [8, 12, 7],
            [0, 8, 7],
            [2, 0, 7],
            [12, 2, 7],
            [347, 352, 282],
            [221, 347, 282],
            [210, 221, 282],
            [352, 210, 282],
            [335, 347, 280],
            [223, 335, 280],
            [221, 223, 280],
            [347, 221, 280],
            [221, 210, 182],
            [149, 221, 182],
            [142, 149, 182],
            [210, 142, 182],
            [223, 221, 192],
            [166, 223, 192],
            [149, 166, 192],
            [221, 149, 192],
            [330, 335, 278],
            [227, 330, 278],
            [223, 227, 278],
            [335, 223, 278],
            [325, 330, 276],
            [231, 325, 276],
            [227, 231, 276],
            [330, 227, 276],
            [227, 223, 197],
            [172, 227, 197],
            [166, 172, 197],
            [223, 166, 197],
            [231, 227, 199],
            [178, 231, 199],
            [172, 178, 199],
            [227, 172, 199],
            [147, 142, 109],
            [75, 147, 109],
            [72, 75, 109],
            [142, 72, 109],
            [149, 147, 119],
            [85, 149, 119],
            [75, 85, 119],
            [147, 75, 119],
            [75, 72, 56],
            [35, 75, 56],
            [34, 35, 56],
            [72, 34, 56],
            [85, 75, 64],
            [49, 85, 64],
            [35, 49, 64],
            [75, 35, 64],
            [166, 149, 139],
            [130, 166, 139],
            [85, 130, 139],
            [149, 85, 139],
            [130, 85, 83],
            [81, 130, 83],
            [49, 81, 83],
            [85, 49, 83],
            [35, 34, 23],
            [11, 35, 23],
            [8, 11, 23],
            [34, 8, 23],
            [49, 35, 32],
            [26, 49, 32],
            [11, 26, 32],
            [35, 11, 32],
            [11, 8, 6],
            [1, 11, 6],
            [0, 1, 6],
            [8, 0, 6],
            [26, 11, 15],
            [17, 26, 15],
            [1, 17, 15],
            [11, 1, 15],
            [81, 49, 54],
            [58, 81, 54],
            [26, 58, 54],
            [49, 26, 54],
            [58, 26, 41],
            [51, 58, 41],
            [17, 51, 41],
            [26, 17, 41],
            [172, 166, 157],
            [151, 172, 157],
            [130, 151, 157],
            [166, 130, 157],
            [151, 130, 128],
            [126, 151, 128],
            [81, 126, 128],
            [130, 81, 128],
            [176, 172, 161],
            [135, 176, 161],
            [126, 135, 161],
            [172, 126, 161],
            [178, 176, 164],
            [141, 178, 164],
            [135, 141, 164],
            [176, 135, 164],
            [126, 81, 87],
            [92, 126, 87],
            [58, 92, 87],
            [81, 58, 87],
            [92, 58, 73],
            [89, 92, 73],
            [51, 89, 73],
            [58, 51, 73],
            [135, 126, 117],
            [113, 135, 117],
            [92, 113, 117],
            [126, 92, 117],
            [141, 135, 133],
            [121, 141, 133],
            [113, 121, 133],
            [135, 113, 133],
            [113, 92, 94],
            [100, 113, 94],
            [89, 100, 94],
            [92, 89, 94],
            [121, 113, 111],
            [108, 121, 111],
            [100, 108, 111],
            [113, 100, 111],
            [101, 108, 116],
            [125, 101, 116],
            [132, 125, 116],
            [108, 132, 116],
            [90, 101, 103],
            [105, 90, 103],
            [125, 105, 103],
            [101, 125, 103],
            [52, 90, 78],
            [71, 52, 78],
            [105, 71, 78],
            [90, 105, 78],
            [125, 132, 146],
            [156, 125, 146],
            [163, 156, 146],
            [132, 163, 146],
            [105, 125, 144],
            [154, 105, 144],
            [156, 154, 144],
            [125, 156, 144],
            [71, 105, 123],
            [138, 71, 123],
            [154, 138, 123],
            [105, 154, 123],
            [18, 52, 38],
            [22, 18, 38],
            [63, 22, 38],
            [52, 63, 38],
            [22, 63, 48],
            [40, 22, 48],
            [71, 40, 48],
            [63, 71, 48],
            [2, 18, 14],
            [10, 2, 14],
            [22, 10, 14],
            [18, 22, 14],
            [0, 2, 4],
            [5, 0, 4],
            [10, 5, 4],
            [2, 10, 4],
            [10, 22, 29],
            [31, 10, 29],
            [40, 31, 29],
            [22, 40, 29],
            [5, 10, 20],
            [25, 5, 20],
            [31, 25, 20],
            [10, 31, 20],
            [40, 71, 69],
            [67, 40, 69],
            [97, 67, 69],
            [71, 97, 69],
            [67, 97, 99],
            [107, 67, 99],
            [138, 107, 99],
            [97, 138, 99],
            [31, 40, 46],
            [61, 31, 46],
            [67, 61, 46],
            [40, 67, 46],
            [25, 31, 44],
            [53, 25, 44],
            [61, 53, 44],
            [31, 61, 44],
            [53, 67, 80],
            [91, 53, 80],
            [107, 91, 80],
            [67, 107, 80],
            [154, 163, 175],
            [195, 154, 175],
            [196, 195, 175],
            [163, 196, 175],
            [138, 154, 171],
            [189, 138, 171],
            [195, 189, 171],
            [154, 195, 171],
            [195, 196, 202],
            [207, 195, 202],
            [203, 207, 202],
            [196, 203, 202],
            [205, 203, 226],
            [234, 205, 226],
            [232, 234, 226],
            [203, 232, 226],
            [207, 205, 230],
            [236, 207, 230],
            [234, 236, 230],
            [205, 234, 230],
            [191, 195, 209],
            [241, 191, 209],
            [236, 241, 209],
            [195, 236, 209],
            [189, 191, 212],
            [248, 189, 212],
            [241, 248, 212],
            [191, 241, 212],
            [107, 138, 169],
            [185, 107, 169],
            [189, 185, 169],
            [138, 189, 169],
            [91, 107, 160],
            [179, 91, 160],
            [185, 179, 160],
            [107, 185, 160],
            [187, 189, 214],
            [252, 187, 214],
            [248, 252, 214],
            [189, 248, 214],
            [185, 187, 216],
            [259, 185, 216],
            [252, 259, 216],
            [187, 252, 216],
            [181, 185, 218],
            [261, 181, 218],
            [259, 261, 218],
            [185, 259, 218],
            [179, 181, 220],
            [262, 179, 220],
            [261, 262, 220],
            [181, 261, 220],
            [1, 0, 3],
            [9, 1, 3],
            [5, 9, 3],
            [0, 5, 3],
            [17, 1, 13],
            [21, 17, 13],
            [9, 21, 13],
            [1, 9, 13],
            [9, 5, 19],
            [30, 9, 19],
            [25, 30, 19],
            [5, 25, 19],
            [21, 9, 28],
            [39, 21, 28],
            [30, 39, 28],
            [9, 30, 28],
            [51, 17, 37],
            [62, 51, 37],
            [21, 62, 37],
            [17, 21, 37],
            [62, 21, 47],
            [70, 62, 47],
            [39, 70, 47],
            [21, 39, 47],
            [30, 25, 43],
            [60, 30, 43],
            [53, 60, 43],
            [25, 53, 43],
            [39, 30, 45],
            [66, 39, 45],
            [60, 66, 45],
            [30, 60, 45],
            [66, 53, 79],
            [106, 66, 79],
            [91, 106, 79],
            [53, 91, 79],
            [70, 39, 68],
            [96, 70, 68],
            [66, 96, 68],
            [39, 66, 68],
            [96, 66, 98],
            [137, 96, 98],
            [106, 137, 98],
            [66, 106, 98],
            [89, 51, 77],
            [104, 89, 77],
            [70, 104, 77],
            [51, 70, 77],
            [100, 89, 102],
            [124, 100, 102],
            [104, 124, 102],
            [89, 104, 102],
            [108, 100, 115],
            [132, 108, 115],
            [124, 132, 115],
            [100, 124, 115],
            [104, 70, 122],
            [153, 104, 122],
            [137, 153, 122],
            [70, 137, 122],
            [124, 104, 143],
            [155, 124, 143],
            [153, 155, 143],
            [104, 153, 143],
            [132, 124, 145],
            [163, 132, 145],
            [155, 163, 145],
            [124, 155, 145],
            [106, 91, 159],
            [184, 106, 159],
            [179, 184, 159],
            [91, 179, 159],
            [137, 106, 168],
            [188, 137, 168],
            [184, 188, 168],
            [106, 184, 168],
            [180, 179, 219],
            [260, 180, 219],
            [262, 260, 219],
            [179, 262, 219],
            [184, 180, 217],
            [258, 184, 217],
            [260, 258, 217],
            [180, 260, 217],
            [186, 184, 215],
            [251, 186, 215],
            [258, 251, 215],
            [184, 258, 215],
            [188, 186, 213],
            [247, 188, 213],
            [251, 247, 213],
            [186, 251, 213],
            [153, 137, 170],
            [194, 153, 170],
            [188, 194, 170],
            [137, 188, 170],
            [163, 153, 174],
            [196, 163, 174],
            [194, 196, 174],
            [153, 194, 174],
            [190, 188, 211],
            [240, 190, 211],
            [247, 240, 211],
            [188, 247, 211],
            [194, 190, 208],
            [235, 194, 208],
            [240, 235, 208],
            [190, 240, 208],
            [196, 194, 201],
            [203, 196, 201],
            [206, 203, 201],
            [194, 206, 201],
            [204, 206, 229],
            [233, 204, 229],
            [235, 233, 229],
            [206, 235, 229],
            [203, 204, 225],
            [232, 203, 225],
            [233, 232, 225],
            [204, 233, 225],
            [1552, 1553, 1587],
            [1632, 1552, 1587],
            [1630, 1632, 1587],
            [1553, 1630, 1587],
            [1550, 1552, 1591],
            [1637, 1550, 1591],
            [1632, 1637, 1591],
            [1552, 1632, 1591],
            [1632, 1630, 1647],
            [1665, 1632, 1647],
            [1663, 1665, 1647],
            [1630, 1663, 1647],
            [1637, 1632, 1651],
            [1673, 1637, 1651],
            [1665, 1673, 1651],
            [1632, 1665, 1651],
            [1548, 1550, 1595],
            [1641, 1548, 1595],
            [1637, 1641, 1595],
            [1550, 1637, 1595],
            [1546, 1548, 1597],
            [1645, 1546, 1597],
            [1641, 1645, 1597],
            [1548, 1641, 1597],
            [1641, 1637, 1657],
            [1679, 1641, 1657],
            [1673, 1679, 1657],
            [1637, 1673, 1657],
            [1645, 1641, 1660],
            [1688, 1645, 1660],
            [1679, 1688, 1660],
            [1641, 1679, 1660],
            [1665, 1663, 1677],
            [1695, 1665, 1677],
            [1693, 1695, 1677],
            [1663, 1693, 1677],
            [1673, 1665, 1683],
            [1705, 1673, 1683],
            [1695, 1705, 1683],
            [1665, 1695, 1683],
            [1695, 1693, 1707],
            [1718, 1695, 1707],
            [1712, 1718, 1707],
            [1693, 1712, 1707],
            [1705, 1695, 1709],
            [1725, 1705, 1709],
            [1718, 1725, 1709],
            [1695, 1718, 1709],
            [1679, 1673, 1692],
            [1714, 1679, 1692],
            [1705, 1714, 1692],
            [1673, 1705, 1692],
            [1688, 1679, 1703],
            [1729, 1688, 1703],
            [1714, 1729, 1703],
            [1679, 1714, 1703],
            [1714, 1705, 1723],
            [1739, 1714, 1723],
            [1725, 1739, 1723],
            [1705, 1725, 1723],
            [1729, 1714, 1733],
            [1752, 1729, 1733],
            [1739, 1752, 1733],
            [1714, 1739, 1733],
            [1544, 1546, 1605],
            [1649, 1544, 1605],
            [1645, 1649, 1605],
            [1546, 1645, 1605],
            [1542, 1544, 1576],
            [1614, 1542, 1576],
            [1609, 1614, 1576],
            [1544, 1609, 1576],
            [1614, 1609, 1635],
            [1653, 1614, 1635],
            [1649, 1653, 1635],
            [1609, 1649, 1635],
            [1649, 1645, 1669],
            [1699, 1649, 1669],
            [1688, 1699, 1669],
            [1645, 1688, 1669],
            [1653, 1649, 1662],
            [1681, 1653, 1662],
            [1675, 1681, 1662],
            [1649, 1675, 1662],
            [1681, 1675, 1690],
            [1711, 1681, 1690],
            [1699, 1711, 1690],
            [1675, 1699, 1690],
            [1540, 1542, 1578],
            [1618, 1540, 1578],
            [1614, 1618, 1578],
            [1542, 1614, 1578],
            [1618, 1614, 1639],
            [1655, 1618, 1639],
            [1653, 1655, 1639],
            [1614, 1653, 1639],
            [1538, 1540, 1582],
            [1619, 1538, 1582],
            [1618, 1619, 1582],
            [1540, 1618, 1582],
            [1619, 1618, 1643],
            [1658, 1619, 1643],
            [1655, 1658, 1643],
            [1618, 1655, 1643],
            [1655, 1653, 1667],
            [1685, 1655, 1667],
            [1681, 1685, 1667],
            [1653, 1681, 1667],
            [1685, 1681, 1697],
            [1720, 1685, 1697],
            [1711, 1720, 1697],
            [1681, 1711, 1697],
            [1658, 1655, 1671],
            [1686, 1658, 1671],
            [1685, 1686, 1671],
            [1655, 1685, 1671],
            [1686, 1685, 1701],
            [1721, 1686, 1701],
            [1720, 1721, 1701],
            [1685, 1720, 1701],
            [1699, 1688, 1716],
            [1743, 1699, 1716],
            [1729, 1743, 1716],
            [1688, 1729, 1716],
            [1711, 1699, 1727],
            [1754, 1711, 1727],
            [1743, 1754, 1727],
            [1699, 1743, 1727],
            [1743, 1729, 1748],
            [1770, 1743, 1748],
            [1752, 1770, 1748],
            [1729, 1752, 1748],
            [1754, 1743, 1760],
            [1786, 1754, 1760],
            [1770, 1786, 1760],
            [1743, 1770, 1760],
            [1720, 1711, 1735],
            [1762, 1720, 1735],
            [1754, 1762, 1735],
            [1711, 1754, 1735],
            [1721, 1720, 1741],
            [1768, 1721, 1741],
            [1762, 1768, 1741],
            [1720, 1762, 1741],
            [1762, 1754, 1776],
            [1796, 1762, 1776],
            [1786, 1796, 1776],
            [1754, 1786, 1776],
            [1768, 1762, 1782],
            [1801, 1768, 1782],
            [1796, 1801, 1782],
            [1762, 1796, 1782],
            [1718, 1712, 1731],
            [1746, 1718, 1731],
            [1744, 1746, 1731],
            [1712, 1744, 1731],
            [1725, 1718, 1737],
            [1758, 1725, 1737],
            [1746, 1758, 1737],
            [1718, 1746, 1737],
            [1739, 1725, 1750],
            [1780, 1739, 1750],
            [1758, 1780, 1750],
            [1725, 1758, 1750],
            [1752, 1739, 1765],
            [1800, 1752, 1765],
            [1780, 1800, 1765],
            [1739, 1780, 1765],
            [1746, 1744, 1756],
            [1772, 1746, 1756],
            [1763, 1772, 1756],
            [1744, 1763, 1756],
            [1758, 1746, 1767],
            [1788, 1758, 1767],
            [1772, 1788, 1767],
            [1746, 1772, 1767],
            [1772, 1763, 1790],
            [1814, 1772, 1790],
            [1806, 1814, 1790],
            [1763, 1806, 1790],
            [1788, 1772, 1803],
            [1832, 1788, 1803],
            [1814, 1832, 1803],
            [1772, 1814, 1803],
            [1780, 1758, 1784],
            [1816, 1780, 1784],
            [1788, 1816, 1784],
            [1758, 1788, 1784],
            [1800, 1780, 1808],
            [1839, 1800, 1808],
            [1816, 1839, 1808],
            [1780, 1816, 1808],
            [1839, 1788, 1845],
            [1898, 1839, 1845],
            [1832, 1898, 1845],
            [1788, 1832, 1845],
            [1770, 1752, 1774],
            [1794, 1770, 1774],
            [1778, 1794, 1774],
            [1752, 1778, 1774],
            [1786, 1770, 1792],
            [1810, 1786, 1792],
            [1794, 1810, 1792],
            [1770, 1794, 1792],
            [1794, 1778, 1798],
            [1822, 1794, 1798],
            [1800, 1822, 1798],
            [1778, 1800, 1798],
            [1810, 1794, 1818],
            [1843, 1810, 1818],
            [1822, 1843, 1818],
            [1794, 1822, 1818],
            [1796, 1786, 1805],
            [1824, 1796, 1805],
            [1810, 1824, 1805],
            [1786, 1810, 1805],
            [1801, 1796, 1812],
            [1825, 1801, 1812],
            [1824, 1825, 1812],
            [1796, 1824, 1812],
            [1824, 1810, 1830],
            [1861, 1824, 1830],
            [1843, 1861, 1830],
            [1810, 1843, 1830],
            [1825, 1824, 1841],
            [1870, 1825, 1841],
            [1861, 1870, 1841],
            [1824, 1861, 1841],
            [1822, 1800, 1828],
            [1874, 1822, 1828],
            [1839, 1874, 1828],
            [1800, 1839, 1828],
            [1843, 1822, 1859],
            [1892, 1843, 1859],
            [1874, 1892, 1859],
            [1822, 1874, 1859],
            [1892, 1839, 1886],
            [1911, 1892, 1886],
            [1878, 1911, 1886],
            [1839, 1878, 1886],
            [1911, 1878, 1909],
            [1935, 1911, 1909],
            [1898, 1935, 1909],
            [1878, 1898, 1909],
            [1861, 1843, 1880],
            [1902, 1861, 1880],
            [1892, 1902, 1880],
            [1843, 1892, 1880],
            [1870, 1861, 1890],
            [1905, 1870, 1890],
            [1902, 1905, 1890],
            [1861, 1902, 1890],
            [1902, 1892, 1907],
            [1923, 1902, 1907],
            [1911, 1923, 1907],
            [1892, 1911, 1907],
            [1923, 1911, 1930],
            [1949, 1923, 1930],
            [1935, 1949, 1930],
            [1911, 1935, 1930],
            [1905, 1902, 1913],
            [1926, 1905, 1913],
            [1923, 1926, 1913],
            [1902, 1923, 1913],
            [1926, 1923, 1939],
            [1952, 1926, 1939],
            [1949, 1952, 1939],
            [1923, 1949, 1939],
            [1539, 1538, 1581],
            [1617, 1539, 1581],
            [1619, 1617, 1581],
            [1538, 1619, 1581],
            [1617, 1619, 1642],
            [1654, 1617, 1642],
            [1658, 1654, 1642],
            [1619, 1658, 1642],
            [1541, 1539, 1577],
            [1613, 1541, 1577],
            [1617, 1613, 1577],
            [1539, 1617, 1577],
            [1613, 1617, 1638],
            [1652, 1613, 1638],
            [1654, 1652, 1638],
            [1617, 1654, 1638],
            [1654, 1658, 1670],
            [1684, 1654, 1670],
            [1686, 1684, 1670],
            [1658, 1686, 1670],
            [1684, 1686, 1700],
            [1719, 1684, 1700],
            [1721, 1719, 1700],
            [1686, 1721, 1700],
            [1652, 1654, 1666],
            [1680, 1652, 1666],
            [1684, 1680, 1666],
            [1654, 1684, 1666],
            [1680, 1684, 1696],
            [1710, 1680, 1696],
            [1719, 1710, 1696],
            [1684, 1719, 1696],
            [1543, 1541, 1575],
            [1608, 1543, 1575],
            [1613, 1608, 1575],
            [1541, 1613, 1575],
            [1608, 1613, 1634],
            [1648, 1608, 1634],
            [1652, 1648, 1634],
            [1613, 1652, 1634],
            [1545, 1543, 1604],
            [1644, 1545, 1604],
            [1648, 1644, 1604],
            [1543, 1648, 1604],
            [1648, 1652, 1661],
            [1674, 1648, 1661],
            [1680, 1674, 1661],
            [1652, 1680, 1661],
            [1674, 1680, 1689],
            [1698, 1674, 1689],
            [1710, 1698, 1689],
            [1680, 1710, 1689],
            [1644, 1648, 1668],
            [1687, 1644, 1668],
            [1698, 1687, 1668],
            [1648, 1698, 1668],
            [1719, 1721, 1740],
            [1761, 1719, 1740],
            [1768, 1761, 1740],
            [1721, 1768, 1740],
            [1710, 1719, 1734],
            [1753, 1710, 1734],
            [1761, 1753, 1734],
            [1719, 1761, 1734],
            [1761, 1768, 1781],
            [1795, 1761, 1781],
            [1801, 1795, 1781],
            [1768, 1801, 1781],
            [1753, 1761, 1775],
            [1785, 1753, 1775],
            [1795, 1785, 1775],
            [1761, 1795, 1775],
            [1698, 1710, 1726],
            [1742, 1698, 1726],
            [1753, 1742, 1726],
            [1710, 1753, 1726],
            [1687, 1698, 1715],
            [1728, 1687, 1715],
            [1742, 1728, 1715],
            [1698, 1742, 1715],
            [1742, 1753, 1759],
            [1769, 1742, 1759],
            [1785, 1769, 1759],
            [1753, 1785, 1759],
            [1728, 1742, 1747],
            [1751, 1728, 1747],
            [1769, 1751, 1747],
            [1742, 1769, 1747],
            [1547, 1545, 1596],
            [1640, 1547, 1596],
            [1644, 1640, 1596],
            [1545, 1644, 1596],
            [1549, 1547, 1594],
            [1636, 1549, 1594],
            [1640, 1636, 1594],
            [1547, 1640, 1594],
            [1640, 1644, 1659],
            [1678, 1640, 1659],
            [1687, 1678, 1659],
            [1644, 1687, 1659],
            [1636, 1640, 1656],
            [1672, 1636, 1656],
            [1678, 1672, 1656],
            [1640, 1678, 1656],
            [1551, 1549, 1590],
            [1631, 1551, 1590],
            [1636, 1631, 1590],
            [1549, 1636, 1590],
            [1553, 1551, 1586],
            [1630, 1553, 1586],
            [1631, 1630, 1586],
            [1551, 1631, 1586],
            [1631, 1636, 1650],
            [1664, 1631, 1650],
            [1672, 1664, 1650],
            [1636, 1672, 1650],
            [1630, 1631, 1646],
            [1663, 1630, 1646],
            [1664, 1663, 1646],
            [1631, 1664, 1646],
            [1678, 1687, 1702],
            [1713, 1678, 1702],
            [1728, 1713, 1702],
            [1687, 1728, 1702],
            [1672, 1678, 1691],
            [1704, 1672, 1691],
            [1713, 1704, 1691],
            [1678, 1713, 1691],
            [1713, 1728, 1732],
            [1738, 1713, 1732],
            [1751, 1738, 1732],
            [1728, 1751, 1732],
            [1704, 1713, 1722],
            [1724, 1704, 1722],
            [1738, 1724, 1722],
            [1713, 1738, 1722],
            [1664, 1672, 1682],
            [1694, 1664, 1682],
            [1704, 1694, 1682],
            [1672, 1704, 1682],
            [1663, 1664, 1676],
            [1693, 1663, 1676],
            [1694, 1693, 1676],
            [1664, 1694, 1676],
            [1694, 1704, 1708],
            [1717, 1694, 1708],
            [1724, 1717, 1708],
            [1704, 1724, 1708],
            [1693, 1694, 1706],
            [1712, 1693, 1706],
            [1717, 1712, 1706],
            [1694, 1717, 1706],
            [1795, 1801, 1811],
            [1823, 1795, 1811],
            [1825, 1823, 1811],
            [1801, 1825, 1811],
            [1785, 1795, 1804],
            [1809, 1785, 1804],
            [1823, 1809, 1804],
            [1795, 1823, 1804],
            [1823, 1825, 1840],
            [1860, 1823, 1840],
            [1870, 1860, 1840],
            [1825, 1870, 1840],
            [1809, 1823, 1829],
            [1842, 1809, 1829],
            [1860, 1842, 1829],
            [1823, 1860, 1829],
            [1769, 1785, 1791],
            [1793, 1769, 1791],
            [1809, 1793, 1791],
            [1785, 1809, 1791],
            [1751, 1769, 1773],
            [1777, 1751, 1773],
            [1793, 1777, 1773],
            [1769, 1793, 1773],
            [1793, 1809, 1817],
            [1821, 1793, 1817],
            [1842, 1821, 1817],
            [1809, 1842, 1817],
            [1777, 1793, 1797],
            [1799, 1777, 1797],
            [1821, 1799, 1797],
            [1793, 1821, 1797],
            [1860, 1870, 1889],
            [1901, 1860, 1889],
            [1905, 1901, 1889],
            [1870, 1905, 1889],
            [1842, 1860, 1879],
            [1891, 1842, 1879],
            [1901, 1891, 1879],
            [1860, 1901, 1879],
            [1901, 1905, 1912],
            [1922, 1901, 1912],
            [1926, 1922, 1912],
            [1905, 1926, 1912],
            [1922, 1926, 1938],
            [1948, 1922, 1938],
            [1952, 1948, 1938],
            [1926, 1952, 1938],
            [1891, 1901, 1906],
            [1910, 1891, 1906],
            [1922, 1910, 1906],
            [1901, 1922, 1906],
            [1910, 1922, 1929],
            [1934, 1910, 1929],
            [1948, 1934, 1929],
            [1922, 1948, 1929],
            [1821, 1842, 1858],
            [1873, 1821, 1858],
            [1891, 1873, 1858],
            [1842, 1891, 1858],
            [1799, 1821, 1827],
            [1838, 1799, 1827],
            [1873, 1838, 1827],
            [1821, 1873, 1827],
            [1838, 1891, 1885],
            [1877, 1838, 1885],
            [1910, 1877, 1885],
            [1891, 1910, 1885],
            [1877, 1910, 1908],
            [1895, 1877, 1908],
            [1934, 1895, 1908],
            [1910, 1934, 1908],
            [1738, 1751, 1764],
            [1779, 1738, 1764],
            [1799, 1779, 1764],
            [1751, 1799, 1764],
            [1724, 1738, 1749],
            [1757, 1724, 1749],
            [1779, 1757, 1749],
            [1738, 1779, 1749],
            [1717, 1724, 1736],
            [1745, 1717, 1736],
            [1757, 1745, 1736],
            [1724, 1757, 1736],
            [1712, 1717, 1730],
            [1744, 1712, 1730],
            [1745, 1744, 1730],
            [1717, 1745, 1730],
            [1779, 1799, 1807],
            [1815, 1779, 1807],
            [1838, 1815, 1807],
            [1799, 1838, 1807],
            [1757, 1779, 1783],
            [1787, 1757, 1783],
            [1815, 1787, 1783],
            [1779, 1815, 1783],
            [1787, 1838, 1844],
            [1831, 1787, 1844],
            [1895, 1831, 1844],
            [1838, 1895, 1844],
            [1745, 1757, 1766],
            [1771, 1745, 1766],
            [1787, 1771, 1766],
            [1757, 1787, 1766],
            [1744, 1745, 1755],
            [1763, 1744, 1755],
            [1771, 1763, 1755],
            [1745, 1771, 1755],
            [1771, 1787, 1802],
            [1813, 1771, 1802],
            [1831, 1813, 1802],
            [1787, 1831, 1802],
            [1763, 1771, 1789],
            [1806, 1763, 1789],
            [1813, 1806, 1789],
            [1771, 1813, 1789],
            [1814, 1806, 1820],
            [1836, 1814, 1820],
            [1826, 1836, 1820],
            [1806, 1826, 1820],
            [1832, 1814, 1834],
            [1872, 1832, 1834],
            [1836, 1872, 1834],
            [1814, 1836, 1834],
            [1898, 1832, 1888],
            [1915, 1898, 1888],
            [1872, 1915, 1888],
            [1832, 1872, 1888],
            [1836, 1826, 1847],
            [1857, 1836, 1847],
            [1850, 1857, 1847],
            [1826, 1850, 1847],
            [1872, 1836, 1863],
            [1882, 1872, 1863],
            [1857, 1882, 1863],
            [1836, 1857, 1863],
            [1915, 1872, 1900],
            [1919, 1915, 1900],
            [1882, 1919, 1900],
            [1872, 1882, 1900],
            [1935, 1898, 1928],
            [1954, 1935, 1928],
            [1915, 1954, 1928],
            [1898, 1915, 1928],
            [1949, 1935, 1951],
            [1969, 1949, 1951],
            [1954, 1969, 1951],
            [1935, 1954, 1951],
            [1952, 1949, 1962],
            [1974, 1952, 1962],
            [1969, 1974, 1962],
            [1949, 1969, 1962],
            [1954, 1915, 1941],
            [1958, 1954, 1941],
            [1919, 1958, 1941],
            [1915, 1919, 1941],
            [1969, 1954, 1965],
            [1971, 1969, 1965],
            [1958, 1971, 1965],
            [1954, 1958, 1965],
            [1974, 1969, 1973],
            [1975, 1974, 1973],
            [1971, 1975, 1973],
            [1969, 1971, 1973],
            [1857, 1850, 1855],
            [1867, 1857, 1855],
            [1853, 1867, 1855],
            [1850, 1853, 1855],
            [1882, 1857, 1876],
            [1884, 1882, 1876],
            [1867, 1884, 1876],
            [1857, 1867, 1876],
            [1919, 1882, 1904],
            [1917, 1919, 1904],
            [1884, 1917, 1904],
            [1882, 1884, 1904],
            [1867, 1853, 1852],
            [1849, 1867, 1852],
            [1837, 1849, 1852],
            [1853, 1837, 1852],
            [1884, 1867, 1869],
            [1865, 1884, 1869],
            [1849, 1865, 1869],
            [1867, 1849, 1869],
            [1917, 1884, 1894],
            [1897, 1917, 1894],
            [1865, 1897, 1894],
            [1884, 1865, 1894],
            [1958, 1919, 1937],
            [1947, 1958, 1937],
            [1917, 1947, 1937],
            [1919, 1917, 1937],
            [1971, 1958, 1960],
            [1956, 1971, 1960],
            [1947, 1956, 1960],
            [1958, 1947, 1960],
            [1975, 1971, 1967],
            [1963, 1975, 1967],
            [1956, 1963, 1967],
            [1971, 1956, 1967],
            [1947, 1917, 1921],
            [1925, 1947, 1921],
            [1897, 1925, 1921],
            [1917, 1897, 1921],
            [1956, 1947, 1943],
            [1932, 1956, 1943],
            [1925, 1932, 1943],
            [1947, 1925, 1943],
            [1963, 1956, 1945],
            [1933, 1963, 1945],
            [1932, 1933, 1945],
            [1956, 1932, 1945],
            [1948, 1952, 1961],
            [1968, 1948, 1961],
            [1974, 1968, 1961],
            [1952, 1974, 1961],
            [1934, 1948, 1950],
            [1953, 1934, 1950],
            [1968, 1953, 1950],
            [1948, 1968, 1950],
            [1895, 1934, 1927],
            [1914, 1895, 1927],
            [1953, 1914, 1927],
            [1934, 1953, 1927],
            [1968, 1974, 1972],
            [1970, 1968, 1972],
            [1975, 1970, 1972],
            [1974, 1975, 1972],
            [1953, 1968, 1964],
            [1957, 1953, 1964],
            [1970, 1957, 1964],
            [1968, 1970, 1964],
            [1914, 1953, 1940],
            [1918, 1914, 1940],
            [1957, 1918, 1940],
            [1953, 1957, 1940],
            [1831, 1895, 1887],
            [1871, 1831, 1887],
            [1914, 1871, 1887],
            [1895, 1914, 1887],
            [1813, 1831, 1833],
            [1835, 1813, 1833],
            [1871, 1835, 1833],
            [1831, 1871, 1833],
            [1806, 1813, 1819],
            [1826, 1806, 1819],
            [1835, 1826, 1819],
            [1813, 1835, 1819],
            [1871, 1914, 1899],
            [1881, 1871, 1899],
            [1918, 1881, 1899],
            [1914, 1918, 1899],
            [1835, 1871, 1862],
            [1856, 1835, 1862],
            [1881, 1856, 1862],
            [1871, 1881, 1862],
            [1826, 1835, 1846],
            [1850, 1826, 1846],
            [1856, 1850, 1846],
            [1835, 1856, 1846],
            [1970, 1975, 1966],
            [1955, 1970, 1966],
            [1963, 1955, 1966],
            [1975, 1963, 1966],
            [1957, 1970, 1959],
            [1946, 1957, 1959],
            [1955, 1946, 1959],
            [1970, 1955, 1959],
            [1918, 1957, 1936],
            [1916, 1918, 1936],
            [1946, 1916, 1936],
            [1957, 1946, 1936],
            [1955, 1963, 1944],
            [1931, 1955, 1944],
            [1933, 1931, 1944],
            [1963, 1933, 1944],
            [1946, 1955, 1942],
            [1924, 1946, 1942],
            [1931, 1924, 1942],
            [1955, 1931, 1942],
            [1916, 1946, 1920],
            [1896, 1916, 1920],
            [1924, 1896, 1920],
            [1946, 1924, 1920],
            [1881, 1918, 1903],
            [1883, 1881, 1903],
            [1916, 1883, 1903],
            [1918, 1916, 1903],
            [1856, 1881, 1875],
            [1866, 1856, 1875],
            [1883, 1866, 1875],
            [1881, 1883, 1875],
            [1850, 1856, 1854],
            [1853, 1850, 1854],
            [1866, 1853, 1854],
            [1856, 1866, 1854],
            [1883, 1916, 1893],
            [1864, 1883, 1893],
            [1896, 1864, 1893],
            [1916, 1896, 1893],
            [1866, 1883, 1868],
            [1848, 1866, 1868],
            [1864, 1848, 1868],
            [1883, 1864, 1868],
            [1853, 1866, 1851],
            [1837, 1853, 1851],
            [1848, 1837, 1851],
            [1866, 1848, 1851],
            [1069, 952, 992],
            [1072, 1069, 992],
            [952, 1072, 992],
            [1069, 1072, 1094],
            [1118, 1069, 1094],
            [1134, 1118, 1094],
            [1072, 1134, 1094],
            [1030, 952, 984],
            [1069, 1030, 984],
            [952, 1069, 984],
            [1030, 1069, 1076],
            [1080, 1030, 1076],
            [1118, 1080, 1076],
            [1069, 1118, 1076],
            [1118, 1134, 1133],
            [1131, 1118, 1133],
            [1139, 1131, 1133],
            [1134, 1139, 1133],
            [1131, 1139, 1129],
            [1110, 1131, 1129],
            [1127, 1110, 1129],
            [1139, 1127, 1129],
            [1080, 1118, 1104],
            [1088, 1080, 1104],
            [1131, 1088, 1104],
            [1118, 1131, 1104],
            [1088, 1131, 1096],
            [1074, 1088, 1096],
            [1110, 1074, 1096],
            [1131, 1110, 1096],
            [980, 952, 964],
            [1030, 980, 964],
            [952, 1030, 964],
            [980, 1030, 1028],
            [1002, 980, 1028],
            [1080, 1002, 1028],
            [1030, 1080, 1028],
            [951, 952, 954],
            [980, 951, 954],
            [952, 980, 954],
            [951, 980, 962],
            [949, 951, 962],
            [1002, 949, 962],
            [980, 1002, 962],
            [1002, 1080, 1059],
            [1012, 1002, 1059],
            [1088, 1012, 1059],
            [1080, 1088, 1059],
            [1012, 1088, 1053],
            [998, 1012, 1053],
            [1074, 998, 1053],
            [1088, 1074, 1053],
            [949, 1002, 974],
            [947, 949, 974],
            [1012, 947, 974],
            [1002, 1012, 974],
            [947, 1012, 972],
            [945, 947, 972],
            [998, 945, 972],
            [1012, 998, 972],
            [1110, 1127, 1082],
            [1047, 1110, 1082],
            [1060, 1047, 1082],
            [1127, 1060, 1082],
            [1074, 1110, 1071],
            [1004, 1074, 1071],
            [1047, 1004, 1071],
            [1110, 1047, 1071],
            [1047, 1060, 1039],
            [1024, 1047, 1039],
            [1031, 1024, 1039],
            [1060, 1031, 1039],
            [1024, 1031, 1041],
            [1049, 1024, 1041],
            [1063, 1049, 1041],
            [1031, 1063, 1041],
            [1004, 1047, 1018],
            [994, 1004, 1018],
            [1024, 994, 1018],
            [1047, 1024, 1018],
            [994, 1024, 1020],
            [1010, 994, 1020],
            [1049, 1010, 1020],
            [1024, 1049, 1020],
            [998, 1074, 1014],
            [976, 998, 1014],
            [1004, 976, 1014],
            [1074, 1004, 1014],
            [945, 998, 960],
            [943, 945, 960],
            [976, 943, 960],
            [998, 976, 960],
            [976, 1004, 986],
            [970, 976, 986],
            [994, 970, 986],
            [1004, 994, 986],
            [970, 994, 990],
            [978, 970, 990],
            [1010, 978, 990],
            [994, 1010, 990],
            [943, 976, 956],
            [941, 943, 956],
            [970, 941, 956],
            [976, 970, 956],
            [941, 970, 958],
            [939, 941, 958],
            [978, 939, 958],
            [970, 978, 958],
            [875, 952, 901],
            [951, 875, 901],
            [952, 951, 901],
            [875, 951, 893],
            [853, 875, 893],
            [949, 853, 893],
            [951, 949, 893],
            [825, 952, 891],
            [875, 825, 891],
            [952, 875, 891],
            [825, 875, 827],
            [775, 825, 827],
            [853, 775, 827],
            [875, 853, 827],
            [853, 949, 881],
            [843, 853, 881],
            [947, 843, 881],
            [949, 947, 881],
            [843, 947, 883],
            [857, 843, 883],
            [945, 857, 883],
            [947, 945, 883],
            [775, 853, 796],
            [767, 775, 796],
            [843, 767, 796],
            [853, 843, 796],
            [767, 843, 802],
            [781, 767, 802],
            [857, 781, 802],
            [843, 857, 802],
            [786, 952, 871],
            [825, 786, 871],
            [952, 825, 871],
            [786, 825, 779],
            [737, 786, 779],
            [775, 737, 779],
            [825, 775, 779],
            [782, 952, 863],
            [786, 782, 863],
            [952, 786, 863],
            [782, 786, 761],
            [720, 782, 761],
            [737, 720, 761],
            [786, 737, 761],
            [737, 775, 751],
            [724, 737, 751],
            [767, 724, 751],
            [775, 767, 751],
            [724, 767, 759],
            [745, 724, 759],
            [781, 745, 759],
            [767, 781, 759],
            [720, 737, 722],
            [715, 720, 722],
            [724, 715, 722],
            [737, 724, 722],
            [715, 724, 726],
            [727, 715, 726],
            [745, 727, 726],
            [724, 745, 726],
            [857, 945, 895],
            [879, 857, 895],
            [943, 879, 895],
            [945, 943, 895],
            [781, 857, 841],
            [851, 781, 841],
            [879, 851, 841],
            [857, 879, 841],
            [879, 943, 899],
            [885, 879, 899],
            [941, 885, 899],
            [943, 941, 899],
            [885, 941, 897],
            [877, 885, 897],
            [939, 877, 897],
            [941, 939, 897],
            [851, 879, 869],
            [861, 851, 869],
            [885, 861, 869],
            [879, 885, 869],
            [861, 885, 865],
            [845, 861, 865],
            [877, 845, 865],
            [885, 877, 865],
            [745, 781, 784],
            [808, 745, 784],
            [851, 808, 784],
            [781, 851, 784],
            [727, 745, 773],
            [794, 727, 773],
            [808, 794, 773],
            [745, 808, 773],
            [808, 851, 837],
            [831, 808, 837],
            [861, 831, 837],
            [851, 861, 837],
            [831, 861, 835],
            [806, 831, 835],
            [845, 806, 835],
            [861, 845, 835],
            [794, 808, 816],
            [823, 794, 816],
            [831, 823, 816],
            [808, 831, 816],
            [823, 831, 814],
            [791, 823, 814],
            [806, 791, 814],
            [831, 806, 814],
            [785, 952, 862],
            [782, 785, 862],
            [952, 782, 862],
            [785, 782, 760],
            [736, 785, 760],
            [720, 736, 760],
            [782, 720, 760],
            [824, 952, 870],
            [785, 824, 870],
            [952, 785, 870],
            [824, 785, 778],
            [774, 824, 778],
            [736, 774, 778],
            [785, 736, 778],
            [736, 720, 721],
            [723, 736, 721],
            [715, 723, 721],
            [720, 715, 721],
            [723, 715, 725],
            [744, 723, 725],
            [727, 744, 725],
            [715, 727, 725],
            [774, 736, 750],
            [766, 774, 750],
            [723, 766, 750],
            [736, 723, 750],
            [766, 723, 758],
            [780, 766, 758],
            [744, 780, 758],
            [723, 744, 758],
            [874, 952, 890],
            [824, 874, 890],
            [952, 824, 890],
            [874, 824, 826],
            [852, 874, 826],
            [774, 852, 826],
            [824, 774, 826],
            [950, 952, 900],
            [874, 950, 900],
            [952, 874, 900],
            [950, 874, 892],
            [948, 950, 892],
            [852, 948, 892],
            [874, 852, 892],
            [852, 774, 795],
            [842, 852, 795],
            [766, 842, 795],
            [774, 766, 795],
            [842, 766, 801],
            [856, 842, 801],
            [780, 856, 801],
            [766, 780, 801],
            [948, 852, 880],
            [946, 948, 880],
            [842, 946, 880],
            [852, 842, 880],
            [946, 842, 882],
            [944, 946, 882],
            [856, 944, 882],
            [842, 856, 882],
            [744, 727, 772],
            [807, 744, 772],
            [794, 807, 772],
            [727, 794, 772],
            [780, 744, 783],
            [850, 780, 783],
            [807, 850, 783],
            [744, 807, 783],
            [807, 794, 815],
            [830, 807, 815],
            [823, 830, 815],
            [794, 823, 815],
            [830, 823, 813],
            [805, 830, 813],
            [791, 805, 813],
            [823, 791, 813],
            [850, 807, 836],
            [860, 850, 836],
            [830, 860, 836],
            [807, 830, 836],
            [860, 830, 834],
            [844, 860, 834],
            [805, 844, 834],
            [830, 805, 834],
            [856, 780, 840],
            [878, 856, 840],
            [850, 878, 840],
            [780, 850, 840],
            [944, 856, 894],
            [942, 944, 894],
            [878, 942, 894],
            [856, 878, 894],
            [878, 850, 868],
            [884, 878, 868],
            [860, 884, 868],
            [850, 860, 868],
            [884, 860, 864],
            [876, 884, 864],
            [844, 876, 864],
            [860, 844, 864],
            [942, 878, 898],
            [940, 942, 898],
            [884, 940, 898],
            [878, 884, 898],
            [940, 884, 896],
            [938, 940, 896],
            [876, 938, 896],
            [884, 876, 896],
            [979, 952, 953],
            [950, 979, 953],
            [952, 950, 953],
            [979, 950, 961],
            [1001, 979, 961],
            [948, 1001, 961],
            [950, 948, 961],
            [1029, 952, 963],
            [979, 1029, 963],
            [952, 979, 963],
            [1029, 979, 1027],
            [1079, 1029, 1027],
            [1001, 1079, 1027],
            [979, 1001, 1027],
            [1001, 948, 973],
            [1011, 1001, 973],
            [946, 1011, 973],
            [948, 946, 973],
            [1011, 946, 971],
            [997, 1011, 971],
            [944, 997, 971],
            [946, 944, 971],
            [1079, 1001, 1058],
            [1087, 1079, 1058],
            [1011, 1087, 1058],
            [1001, 1011, 1058],
            [1087, 1011, 1052],
            [1073, 1087, 1052],
            [997, 1073, 1052],
            [1011, 997, 1052],
            [1068, 952, 983],
            [1029, 1068, 983],
            [952, 1029, 983],
            [1068, 1029, 1075],
            [1117, 1068, 1075],
            [1079, 1117, 1075],
            [1029, 1079, 1075],
            [1072, 952, 991],
            [1068, 1072, 991],
            [952, 1068, 991],
            [1072, 1068, 1093],
            [1134, 1072, 1093],
            [1117, 1134, 1093],
            [1068, 1117, 1093],
            [1117, 1079, 1103],
            [1130, 1117, 1103],
            [1087, 1130, 1103],
            [1079, 1087, 1103],
            [1130, 1087, 1095],
            [1109, 1130, 1095],
            [1073, 1109, 1095],
            [1087, 1073, 1095],
            [1134, 1117, 1132],
            [1139, 1134, 1132],
            [1130, 1139, 1132],
            [1117, 1130, 1132],
            [1139, 1130, 1128],
            [1127, 1139, 1128],
            [1109, 1127, 1128],
            [1130, 1109, 1128],
            [997, 944, 959],
            [975, 997, 959],
            [942, 975, 959],
            [944, 942, 959],
            [1073, 997, 1013],
            [1003, 1073, 1013],
            [975, 1003, 1013],
            [997, 975, 1013],
            [975, 942, 955],
            [969, 975, 955],
            [940, 969, 955],
            [942, 940, 955],
            [969, 940, 957],
            [977, 969, 957],
            [938, 977, 957],
            [940, 938, 957],
            [1003, 975, 985],
            [993, 1003, 985],
            [969, 993, 985],
            [975, 969, 985],
            [993, 969, 989],
            [1009, 993, 989],
            [977, 1009, 989],
            [969, 977, 989],
            [1109, 1073, 1070],
            [1046, 1109, 1070],
            [1003, 1046, 1070],
            [1073, 1003, 1070],
            [1127, 1109, 1081],
            [1060, 1127, 1081],
            [1046, 1060, 1081],
            [1109, 1046, 1081],
            [1046, 1003, 1017],
            [1023, 1046, 1017],
            [993, 1023, 1017],
            [1003, 993, 1017],
            [1023, 993, 1019],
            [1048, 1023, 1019],
            [1009, 1048, 1019],
            [993, 1009, 1019],
            [1060, 1046, 1038],
            [1031, 1060, 1038],
            [1023, 1031, 1038],
            [1046, 1023, 1038],
            [1031, 1023, 1040],
            [1063, 1031, 1040],
            [1048, 1063, 1040],
            [1023, 1048, 1040],
            [1049, 1063, 1120],
            [1161, 1049, 1120],
            [1170, 1161, 1120],
            [1063, 1170, 1120],
            [1010, 1049, 1092],
            [1126, 1010, 1092],
            [1161, 1126, 1092],
            [1049, 1161, 1092],
            [1165, 1170, 1224],
            [1272, 1165, 1224],
            [1279, 1272, 1224],
            [1170, 1279, 1224],
            [1161, 1165, 1216],
            [1250, 1161, 1216],
            [1272, 1250, 1216],
            [1165, 1272, 1216],
            [1141, 1161, 1196],
            [1234, 1141, 1196],
            [1250, 1234, 1196],
            [1161, 1250, 1196],
            [1126, 1141, 1178],
            [1206, 1126, 1178],
            [1234, 1206, 1178],
            [1141, 1234, 1178],
            [978, 1010, 1045],
            [1043, 978, 1045],
            [1126, 1043, 1045],
            [1010, 1126, 1045],
            [939, 978, 966],
            [937, 939, 966],
            [1043, 937, 966],
            [978, 1043, 966],
            [1084, 1126, 1153],
            [1174, 1084, 1153],
            [1206, 1174, 1153],
            [1126, 1206, 1153],
            [1043, 1084, 1112],
            [1124, 1043, 1112],
            [1174, 1124, 1112],
            [1084, 1174, 1112],
            [982, 1043, 1055],
            [1033, 982, 1055],
            [1124, 1033, 1055],
            [1043, 1124, 1055],
            [937, 982, 968],
            [935, 937, 968],
            [1033, 935, 968],
            [982, 1033, 968],
            [1272, 1279, 1321],
            [1369, 1272, 1321],
            [1376, 1369, 1321],
            [1279, 1376, 1321],
            [1250, 1272, 1309],
            [1347, 1250, 1309],
            [1369, 1347, 1309],
            [1272, 1369, 1309],
            [1234, 1250, 1285],
            [1315, 1234, 1285],
            [1347, 1315, 1285],
            [1250, 1347, 1285],
            [1206, 1234, 1252],
            [1278, 1206, 1252],
            [1315, 1278, 1252],
            [1234, 1315, 1252],
            [1369, 1376, 1388],
            [1402, 1369, 1388],
            [1415, 1402, 1388],
            [1376, 1415, 1388],
            [1347, 1369, 1375],
            [1378, 1347, 1375],
            [1402, 1378, 1375],
            [1369, 1402, 1375],
            [1402, 1415, 1419],
            [1423, 1402, 1419],
            [1434, 1423, 1419],
            [1415, 1434, 1419],
            [1378, 1402, 1396],
            [1390, 1378, 1396],
            [1423, 1390, 1396],
            [1402, 1423, 1396],
            [1315, 1347, 1339],
            [1335, 1315, 1339],
            [1378, 1335, 1339],
            [1347, 1378, 1339],
            [1278, 1315, 1305],
            [1295, 1278, 1305],
            [1335, 1295, 1305],
            [1315, 1335, 1305],
            [1335, 1378, 1365],
            [1353, 1335, 1365],
            [1390, 1353, 1365],
            [1378, 1390, 1365],
            [1295, 1335, 1325],
            [1301, 1295, 1325],
            [1353, 1301, 1325],
            [1335, 1353, 1325],
            [1174, 1206, 1222],
            [1226, 1174, 1222],
            [1278, 1226, 1222],
            [1206, 1278, 1222],
            [1124, 1174, 1176],
            [1169, 1124, 1176],
            [1226, 1169, 1176],
            [1174, 1226, 1176],
            [1033, 1124, 1108],
            [1078, 1033, 1108],
            [1169, 1078, 1108],
            [1124, 1169, 1108],
            [935, 1033, 988],
            [931, 935, 988],
            [1078, 931, 988],
            [1033, 1078, 988],
            [1226, 1278, 1256],
            [1240, 1226, 1256],
            [1295, 1240, 1256],
            [1278, 1295, 1256],
            [1169, 1226, 1202],
            [1180, 1169, 1202],
            [1240, 1180, 1202],
            [1226, 1240, 1202],
            [1240, 1295, 1274],
            [1244, 1240, 1274],
            [1301, 1244, 1274],
            [1295, 1301, 1274],
            [1180, 1240, 1218],
            [1186, 1180, 1218],
            [1244, 1186, 1218],
            [1240, 1244, 1218],
            [1078, 1169, 1138],
            [1086, 1078, 1138],
            [1180, 1086, 1138],
            [1169, 1180, 1138],
            [931, 1078, 996],
            [925, 931, 996],
            [1086, 925, 996],
            [1078, 1086, 996],
            [1086, 1180, 1145],
            [1090, 1086, 1145],
            [1186, 1090, 1145],
            [1180, 1186, 1145],
            [925, 1086, 1000],
            [921, 925, 1000],
            [1090, 921, 1000],
            [1086, 1090, 1000],
            [877, 939, 889],
            [812, 877, 889],
            [937, 812, 889],
            [939, 937, 889],
            [845, 877, 810],
            [729, 845, 810],
            [812, 729, 810],
            [877, 812, 810],
            [873, 937, 887],
            [822, 873, 887],
            [935, 822, 887],
            [937, 935, 887],
            [812, 873, 800],
            [731, 812, 800],
            [822, 731, 800],
            [873, 822, 800],
            [771, 812, 743],
            [681, 771, 743],
            [731, 681, 743],
            [812, 731, 743],
            [729, 771, 702],
            [649, 729, 702],
            [681, 649, 702],
            [771, 681, 702],
            [806, 845, 763],
            [694, 806, 763],
            [729, 694, 763],
            [845, 729, 763],
            [791, 806, 735],
            [684, 791, 735],
            [694, 684, 735],
            [806, 694, 735],
            [714, 729, 677],
            [621, 714, 677],
            [649, 621, 677],
            [729, 649, 677],
            [694, 714, 659],
            [605, 694, 659],
            [621, 605, 659],
            [714, 621, 659],
            [690, 694, 639],
            [583, 690, 639],
            [605, 583, 639],
            [694, 605, 639],
            [684, 690, 631],
            [575, 684, 631],
            [583, 575, 631],
            [690, 583, 631],
            [822, 935, 867],
            [777, 822, 867],
            [931, 777, 867],
            [935, 931, 867],
            [731, 822, 747],
            [686, 731, 747],
            [777, 686, 747],
            [822, 777, 747],
            [681, 731, 679],
            [629, 681, 679],
            [686, 629, 679],
            [731, 686, 679],
            [649, 681, 633],
            [577, 649, 633],
            [629, 577, 633],
            [681, 629, 633],
            [777, 931, 859],
            [769, 777, 859],
            [925, 769, 859],
            [931, 925, 859],
            [686, 777, 717],
            [675, 686, 717],
            [769, 675, 717],
            [777, 769, 717],
            [769, 925, 855],
            [765, 769, 855],
            [921, 765, 855],
            [925, 921, 855],
            [675, 769, 710],
            [669, 675, 710],
            [765, 669, 710],
            [769, 765, 710],
            [629, 686, 653],
            [615, 629, 653],
            [675, 615, 653],
            [686, 675, 653],
            [577, 629, 599],
            [560, 577, 599],
            [615, 560, 599],
            [629, 615, 599],
            [615, 675, 637],
            [611, 615, 637],
            [669, 611, 637],
            [675, 669, 637],
            [560, 615, 581],
            [554, 560, 581],
            [611, 554, 581],
            [615, 611, 581],
            [621, 649, 603],
            [540, 621, 603],
            [577, 540, 603],
            [649, 577, 603],
            [605, 621, 570],
            [508, 605, 570],
            [540, 508, 570],
            [621, 540, 570],
            [583, 605, 546],
            [486, 583, 546],
            [508, 486, 546],
            [605, 508, 546],
            [575, 583, 534],
            [478, 575, 534],
            [486, 478, 534],
            [583, 486, 534],
            [540, 577, 550],
            [520, 540, 550],
            [560, 520, 550],
            [577, 560, 550],
            [508, 540, 516],
            [477, 508, 516],
            [520, 477, 516],
            [540, 520, 516],
            [520, 560, 530],
            [502, 520, 530],
            [554, 502, 530],
            [560, 554, 530],
            [477, 520, 490],
            [465, 477, 490],
            [502, 465, 490],
            [520, 502, 490],
            [486, 508, 480],
            [453, 486, 480],
            [477, 453, 480],
            [508, 477, 480],
            [478, 486, 467],
            [439, 478, 467],
            [453, 439, 467],
            [486, 453, 467],
            [453, 477, 459],
            [432, 453, 459],
            [465, 432, 459],
            [477, 465, 459],
            [439, 453, 436],
            [420, 439, 436],
            [432, 420, 436],
            [453, 432, 436],
            [805, 791, 734],
            [693, 805, 734],
            [684, 693, 734],
            [791, 684, 734],
            [844, 805, 762],
            [728, 844, 762],
            [693, 728, 762],
            [805, 693, 762],
            [689, 684, 630],
            [582, 689, 630],
            [575, 582, 630],
            [684, 575, 630],
            [693, 689, 638],
            [604, 693, 638],
            [582, 604, 638],
            [689, 582, 638],
            [713, 693, 658],
            [620, 713, 658],
            [604, 620, 658],
            [693, 604, 658],
            [728, 713, 676],
            [648, 728, 676],
            [620, 648, 676],
            [713, 620, 676],
            [876, 844, 809],
            [811, 876, 809],
            [728, 811, 809],
            [844, 728, 809],
            [938, 876, 888],
            [936, 938, 888],
            [811, 936, 888],
            [876, 811, 888],
            [770, 728, 701],
            [680, 770, 701],
            [648, 680, 701],
            [728, 648, 701],
            [811, 770, 742],
            [730, 811, 742],
            [680, 730, 742],
            [770, 680, 742],
            [872, 811, 799],
            [821, 872, 799],
            [730, 821, 799],
            [811, 730, 799],
            [936, 872, 886],
            [934, 936, 886],
            [821, 934, 886],
            [872, 821, 886],
            [582, 575, 533],
            [485, 582, 533],
            [478, 485, 533],
            [575, 478, 533],
            [604, 582, 545],
            [507, 604, 545],
            [485, 507, 545],
            [582, 485, 545],
            [620, 604, 569],
            [539, 620, 569],
            [507, 539, 569],
            [604, 507, 569],
            [648, 620, 602],
            [576, 648, 602],
            [539, 576, 602],
            [620, 539, 602],
            [485, 478, 466],
            [452, 485, 466],
            [439, 452, 466],
            [478, 439, 466],
            [507, 485, 479],
            [476, 507, 479],
            [452, 476, 479],
            [485, 452, 479],
            [452, 439, 435],
            [431, 452, 435],
            [420, 431, 435],
            [439, 420, 435],
            [476, 452, 458],
            [464, 476, 458],
            [431, 464, 458],
            [452, 431, 458],
            [539, 507, 515],
            [519, 539, 515],
            [476, 519, 515],
            [507, 476, 515],
            [576, 539, 549],
            [559, 576, 549],
            [519, 559, 549],
            [539, 519, 549],
            [519, 476, 489],
            [501, 519, 489],
            [464, 501, 489],
            [476, 464, 489],
            [559, 519, 529],
            [553, 559, 529],
            [501, 553, 529],
            [519, 501, 529],
            [680, 648, 632],
            [628, 680, 632],
            [576, 628, 632],
            [648, 576, 632],
            [730, 680, 678],
            [685, 730, 678],
            [628, 685, 678],
            [680, 628, 678],
            [821, 730, 746],
            [776, 821, 746],
            [685, 776, 746],
            [730, 685, 746],
            [934, 821, 866],
            [930, 934, 866],
            [776, 930, 866],
            [821, 776, 866],
            [628, 576, 598],
            [614, 628, 598],
            [559, 614, 598],
            [576, 559, 598],
            [685, 628, 652],
            [674, 685, 652],
            [614, 674, 652],
            [628, 614, 652],
            [614, 559, 580],
            [610, 614, 580],
            [553, 610, 580],
            [559, 553, 580],
            [674, 614, 636],
            [668, 674, 636],
            [610, 668, 636],
            [614, 610, 636],
            [776, 685, 716],
            [768, 776, 716],
            [674, 768, 716],
            [685, 674, 716],
            [930, 776, 858],
            [924, 930, 858],
            [768, 924, 858],
            [776, 768, 858],
            [768, 674, 709],
            [764, 768, 709],
            [668, 764, 709],
            [674, 668, 709],
            [924, 768, 854],
            [920, 924, 854],
            [764, 920, 854],
            [768, 764, 854],
            [977, 938, 965],
            [1042, 977, 965],
            [936, 1042, 965],
            [938, 936, 965],
            [1009, 977, 1044],
            [1125, 1009, 1044],
            [1042, 1125, 1044],
            [977, 1042, 1044],
            [981, 936, 967],
            [1032, 981, 967],
            [934, 1032, 967],
            [936, 934, 967],
            [1042, 981, 1054],
            [1123, 1042, 1054],
            [1032, 1123, 1054],
            [981, 1032, 1054],
            [1083, 1042, 1111],
            [1173, 1083, 1111],
            [1123, 1173, 1111],
            [1042, 1123, 1111],
            [1125, 1083, 1152],
            [1205, 1125, 1152],
            [1173, 1205, 1152],
            [1083, 1173, 1152],
            [1048, 1009, 1091],
            [1160, 1048, 1091],
            [1125, 1160, 1091],
            [1009, 1125, 1091],
            [1063, 1048, 1119],
            [1170, 1063, 1119],
            [1160, 1170, 1119],
            [1048, 1160, 1119],
            [1140, 1125, 1177],
            [1233, 1140, 1177],
            [1205, 1233, 1177],
            [1125, 1205, 1177],
            [1160, 1140, 1195],
            [1249, 1160, 1195],
            [1233, 1249, 1195],
            [1140, 1233, 1195],
            [1164, 1160, 1215],
            [1271, 1164, 1215],
            [1249, 1271, 1215],
            [1160, 1249, 1215],
            [1170, 1164, 1223],
            [1279, 1170, 1223],
            [1271, 1279, 1223],
            [1164, 1271, 1223],
            [1032, 934, 987],
            [1077, 1032, 987],
            [930, 1077, 987],
            [934, 930, 987],
            [1123, 1032, 1107],
            [1168, 1123, 1107],
            [1077, 1168, 1107],
            [1032, 1077, 1107],
            [1173, 1123, 1175],
            [1225, 1173, 1175],
            [1168, 1225, 1175],
            [1123, 1168, 1175],
            [1205, 1173, 1221],
            [1277, 1205, 1221],
            [1225, 1277, 1221],
            [1173, 1225, 1221],
            [1077, 930, 995],
            [1085, 1077, 995],
            [924, 1085, 995],
            [930, 924, 995],
            [1168, 1077, 1137],
            [1179, 1168, 1137],
            [1085, 1179, 1137],
            [1077, 1085, 1137],
            [1085, 924, 999],
            [1089, 1085, 999],
            [920, 1089, 999],
            [924, 920, 999],
            [1179, 1085, 1144],
            [1185, 1179, 1144],
            [1089, 1185, 1144],
            [1085, 1089, 1144],
            [1225, 1168, 1201],
            [1239, 1225, 1201],
            [1179, 1239, 1201],
            [1168, 1179, 1201],
            [1277, 1225, 1255],
            [1294, 1277, 1255],
            [1239, 1294, 1255],
            [1225, 1239, 1255],
            [1239, 1179, 1217],
            [1243, 1239, 1217],
            [1185, 1243, 1217],
            [1179, 1185, 1217],
            [1294, 1239, 1273],
            [1300, 1294, 1273],
            [1243, 1300, 1273],
            [1239, 1243, 1273],
            [1233, 1205, 1251],
            [1314, 1233, 1251],
            [1277, 1314, 1251],
            [1205, 1277, 1251],
            [1249, 1233, 1284],
            [1346, 1249, 1284],
            [1314, 1346, 1284],
            [1233, 1314, 1284],
            [1271, 1249, 1308],
            [1368, 1271, 1308],
            [1346, 1368, 1308],
            [1249, 1346, 1308],
            [1279, 1271, 1320],
            [1376, 1279, 1320],
            [1368, 1376, 1320],
            [1271, 1368, 1320],
            [1314, 1277, 1304],
            [1334, 1314, 1304],
            [1294, 1334, 1304],
            [1277, 1294, 1304],
            [1346, 1314, 1338],
            [1377, 1346, 1338],
            [1334, 1377, 1338],
            [1314, 1334, 1338],
            [1334, 1294, 1324],
            [1352, 1334, 1324],
            [1300, 1352, 1324],
            [1294, 1300, 1324],
            [1377, 1334, 1364],
            [1389, 1377, 1364],
            [1352, 1389, 1364],
            [1334, 1352, 1364],
            [1368, 1346, 1374],
            [1401, 1368, 1374],
            [1377, 1401, 1374],
            [1346, 1377, 1374],
            [1376, 1368, 1387],
            [1415, 1376, 1387],
            [1401, 1415, 1387],
            [1368, 1401, 1387],
            [1401, 1377, 1395],
            [1422, 1401, 1395],
            [1389, 1422, 1395],
            [1377, 1389, 1395],
            [1415, 1401, 1418],
            [1434, 1415, 1418],
            [1422, 1434, 1418],
            [1401, 1422, 1418]
        ];


        return {
            type: "geometry",
            coreId:coreId,
            primitive:params.wire ? "lines" : "triangles",
            positions:new Float32Array(flatten(positions, 3)),
            indices:new Uint16Array(flatten(reverse(indices))),
            normals:new Float32Array(flatten(calculateNormals(positions, indices), 3))
        };
    }

    function calculateNormals (positions, indices) {
        var nvecs = new Array(positions.length);

        for (var i = 0; i < indices.length; i++) {
            var j0 = indices[i][0];
            var j1 = indices[i][1];
            var j2 = indices[i][2];

            var v1 = positions[j0];
            var v2 = positions[j1];
            var v3 = positions[j2];

            v2 = SceneJS_math_subVec4(v2, v1, [0, 0, 0, 0]);
            v3 = SceneJS_math_subVec4(v3, v1, [0, 0, 0, 0]);

            var n = SceneJS_math_normalizeVec4(SceneJS_math_cross3Vec4(v2, v3, [0, 0, 0, 0]), [0, 0, 0, 0]);

            if (!nvecs[j0]) nvecs[j0] = [];
            if (!nvecs[j1]) nvecs[j1] = [];
            if (!nvecs[j2]) nvecs[j2] = [];

            nvecs[j0].push(n);
            nvecs[j1].push(n);
            nvecs[j2].push(n);
        }

        var normals = new Array(positions.length);

        // now go through and average out everything
        for (var i = 0; i < nvecs.length; i++) {
            var count = nvecs[i].length;
            var x = 0;
            var y = 0;
            var z = 0;
            for (var j = 0; j < count; j++) {
                x += nvecs[i][j][0];
                y += nvecs[i][j][1];
                z += nvecs[i][j][2];
            }
            normals[i] = [-(x / count), -(y / count), -(z / count)];
        }
        return normals;
    }

    function flatten(ar, numPerElement) {
        var result = [];
        for (var i = 0; i < ar.length; i++) {
            if (numPerElement && ar[i].length != numPerElement)
                throw SceneJS_error.fatalError("Bad geometry array element");
            for (var j = 0; j < ar[i].length; j++)
                result.push(ar[i][j]);
        }
        return result;
    }

    function reverse(ar) {
        var result = [];
        for (var i = 0; i < ar.length; i++) {
            var temp = [];
            for (var j = ar[i].length - 1; j >= 0; j--) {
                temp.push(ar[i][j]);
            }
            result.push(temp);
        }
        return result;
    }
})();



/**
 * Vector text node type
 *
 * Usage example:
 *
 * someNode.addNode({
 *      type: "prims/vectorText",
 *      text: "Fiery the angels fell, deep thunder rolled around their shores, burning with the fires of Ork.",
 *      xPos: 10,
 *      yPos: -20,
 *      size: 1.5
 *  });
 */
(function () {

    SceneJS.Types.addType("prims/vectorText", {
        construct:function (params) {
            this.addNode(buildText.call(this, params));
        }
    });

    // Letter stroke data, initialised below
    var letters;

    function buildText(params) {

        if (!letters) {
            letters = buildStrokeData();
        }

        var positions = [];
        var indices = [];
        var lines = params.text ? params.text.split("\n") : [];
        var countVerts = 0;
        var y = params.yPos || 0;
        var x;
        var str;
        var len;
        var c;
        var mag = (params.size || 1) / 25.0;
        var penUp;
        var p1;
        var p2;
        var needLine;
        var pointsLen;
        var a;

        for (var iLine = 0; iLine < lines.length; iLine++) {

            x = params.xPos || 0;
            str = lines[iLine];
            len = str.length;

            for (var i = 0; i < len; i++) {

                c = letters[str.charAt(i)];

                if (c == '\n') {
                    //alert("newline");
                }

                if (!c) {
                    continue;
                }

                penUp = 1;
                p1 = -1;
                p2 = -1;
                needLine = false;

                pointsLen = c.points.length;

                for (var j = 0; j < pointsLen; j++) {
                    a = c.points[j];

                    if (a[0] == -1 && a[1] == -1) {
                        penUp = 1;
                        needLine = false;
                        continue;
                    }

                    positions.push(x + a[0] * mag);
                    positions.push(y + a[1] * mag);
                    positions.push(0);

                    if (p1 == -1) {
                        p1 = countVerts;
                    } else if (p2 == -1) {
                        p2 = countVerts;
                    } else {
                        p1 = p2;
                        p2 = countVerts;
                    }
                    countVerts++;

                    if (penUp) {
                        penUp = false;

                    } else {
                        indices.push(p1);
                        indices.push(p2);
                    }

                    needLine = true;
                }
                x += c.width * mag;

            }
            y += 25 * mag;
        }

        return {
            type:"geometry",
            primitive:"lines",
            positions:new Float32Array(positions),
            indices:new Uint16Array(indices)
        };
    }

    function buildStrokeData() {
        return {
            ' ':{ width:16, points:[] },
            '!':{ width:10, points:[
                [5, 21],
                [5, 7],
                [-1, -1],
                [5, 2],
                [4, 1],
                [5, 0],
                [6, 1],
                [5, 2]
            ] },
            '"':{ width:16, points:[
                [4, 21],
                [4, 14],
                [-1, -1],
                [12, 21],
                [12, 14]
            ] },
            '#':{ width:21, points:[
                [11, 25],
                [4, -7],
                [-1, -1],
                [17, 25],
                [10, -7],
                [-1, -1],
                [4, 12],
                [18, 12],
                [-1, -1],
                [3, 6],
                [17, 6]
            ] },
            '$':{ width:20, points:[
                [8, 25],
                [8, -4],
                [-1, -1],
                [12, 25],
                [12, -4],
                [-1, -1],
                [17, 18],
                [15, 20],
                [12, 21],
                [8, 21],
                [5, 20],
                [3, 18],
                [3, 16],
                [4, 14],
                [5, 13],
                [7, 12],
                [13, 10],
                [15, 9],
                [16, 8],
                [17, 6],
                [17, 3],
                [15, 1],
                [12, 0],
                [8, 0],
                [5, 1],
                [3, 3]
            ] },
            '%':{ width:24, points:[
                [21, 21],
                [3, 0],
                [-1, -1],
                [8, 21],
                [10, 19],
                [10, 17],
                [9, 15],
                [7, 14],
                [5, 14],
                [3, 16],
                [3, 18],
                [4, 20],
                [6, 21],
                [8, 21],
                [10, 20],
                [13, 19],
                [16, 19],
                [19, 20],
                [21, 21],
                [-1, -1],
                [17, 7],
                [15, 6],
                [14, 4],
                [14, 2],
                [16, 0],
                [18, 0],
                [20, 1],
                [21, 3],
                [21, 5],
                [19, 7],
                [17, 7]
            ] },
            '&':{ width:26, points:[
                [23, 12],
                [23, 13],
                [22, 14],
                [21, 14],
                [20, 13],
                [19, 11],
                [17, 6],
                [15, 3],
                [13, 1],
                [11, 0],
                [7, 0],
                [5, 1],
                [4, 2],
                [3, 4],
                [3, 6],
                [4, 8],
                [5, 9],
                [12, 13],
                [13, 14],
                [14, 16],
                [14, 18],
                [13, 20],
                [11, 21],
                [9, 20],
                [8, 18],
                [8, 16],
                [9, 13],
                [11, 10],
                [16, 3],
                [18, 1],
                [20, 0],
                [22, 0],
                [23, 1],
                [23, 2]
            ] },
            '\'':{ width:10, points:[
                [5, 19],
                [4, 20],
                [5, 21],
                [6, 20],
                [6, 18],
                [5, 16],
                [4, 15]
            ] },
            '(':{ width:14, points:[
                [11, 25],
                [9, 23],
                [7, 20],
                [5, 16],
                [4, 11],
                [4, 7],
                [5, 2],
                [7, -2],
                [9, -5],
                [11, -7]
            ] },
            ')':{ width:14, points:[
                [3, 25],
                [5, 23],
                [7, 20],
                [9, 16],
                [10, 11],
                [10, 7],
                [9, 2],
                [7, -2],
                [5, -5],
                [3, -7]
            ] },
            '*':{ width:16, points:[
                [8, 21],
                [8, 9],
                [-1, -1],
                [3, 18],
                [13, 12],
                [-1, -1],
                [13, 18],
                [3, 12]
            ] },
            '+':{ width:26, points:[
                [13, 18],
                [13, 0],
                [-1, -1],
                [4, 9],
                [22, 9]
            ] },
            ',':{ width:10, points:[
                [6, 1],
                [5, 0],
                [4, 1],
                [5, 2],
                [6, 1],
                [6, -1],
                [5, -3],
                [4, -4]
            ] },
            '-':{ width:26, points:[
                [4, 9],
                [22, 9]
            ] },
            '.':{ width:10, points:[
                [5, 2],
                [4, 1],
                [5, 0],
                [6, 1],
                [5, 2]
            ] },
            '/':{ width:22, points:[
                [20, 25],
                [2, -7]
            ] },
            '0':{ width:20, points:[
                [9, 21],
                [6, 20],
                [4, 17],
                [3, 12],
                [3, 9],
                [4, 4],
                [6, 1],
                [9, 0],
                [11, 0],
                [14, 1],
                [16, 4],
                [17, 9],
                [17, 12],
                [16, 17],
                [14, 20],
                [11, 21],
                [9, 21]
            ] },
            '1':{ width:20, points:[
                [6, 17],
                [8, 18],
                [11, 21],
                [11, 0]
            ] },
            '2':{ width:20, points:[
                [4, 16],
                [4, 17],
                [5, 19],
                [6, 20],
                [8, 21],
                [12, 21],
                [14, 20],
                [15, 19],
                [16, 17],
                [16, 15],
                [15, 13],
                [13, 10],
                [3, 0],
                [17, 0]
            ] },
            '3':{ width:20, points:[
                [5, 21],
                [16, 21],
                [10, 13],
                [13, 13],
                [15, 12],
                [16, 11],
                [17, 8],
                [17, 6],
                [16, 3],
                [14, 1],
                [11, 0],
                [8, 0],
                [5, 1],
                [4, 2],
                [3, 4]
            ] },
            '4':{ width:20, points:[
                [13, 21],
                [3, 7],
                [18, 7],
                [-1, -1],
                [13, 21],
                [13, 0]
            ] },
            '5':{ width:20, points:[
                [15, 21],
                [5, 21],
                [4, 12],
                [5, 13],
                [8, 14],
                [11, 14],
                [14, 13],
                [16, 11],
                [17, 8],
                [17, 6],
                [16, 3],
                [14, 1],
                [11, 0],
                [8, 0],
                [5, 1],
                [4, 2],
                [3, 4]
            ] },
            '6':{ width:20, points:[
                [16, 18],
                [15, 20],
                [12, 21],
                [10, 21],
                [7, 20],
                [5, 17],
                [4, 12],
                [4, 7],
                [5, 3],
                [7, 1],
                [10, 0],
                [11, 0],
                [14, 1],
                [16, 3],
                [17, 6],
                [17, 7],
                [16, 10],
                [14, 12],
                [11, 13],
                [10, 13],
                [7, 12],
                [5, 10],
                [4, 7]
            ] },
            '7':{ width:20, points:[
                [17, 21],
                [7, 0],
                [-1, -1],
                [3, 21],
                [17, 21]
            ] },
            '8':{ width:20, points:[
                [8, 21],
                [5, 20],
                [4, 18],
                [4, 16],
                [5, 14],
                [7, 13],
                [11, 12],
                [14, 11],
                [16, 9],
                [17, 7],
                [17, 4],
                [16, 2],
                [15, 1],
                [12, 0],
                [8, 0],
                [5, 1],
                [4, 2],
                [3, 4],
                [3, 7],
                [4, 9],
                [6, 11],
                [9, 12],
                [13, 13],
                [15, 14],
                [16, 16],
                [16, 18],
                [15, 20],
                [12, 21],
                [8, 21]
            ] },
            '9':{ width:20, points:[
                [16, 14],
                [15, 11],
                [13, 9],
                [10, 8],
                [9, 8],
                [6, 9],
                [4, 11],
                [3, 14],
                [3, 15],
                [4, 18],
                [6, 20],
                [9, 21],
                [10, 21],
                [13, 20],
                [15, 18],
                [16, 14],
                [16, 9],
                [15, 4],
                [13, 1],
                [10, 0],
                [8, 0],
                [5, 1],
                [4, 3]
            ] },
            ':':{ width:10, points:[
                [5, 14],
                [4, 13],
                [5, 12],
                [6, 13],
                [5, 14],
                [-1, -1],
                [5, 2],
                [4, 1],
                [5, 0],
                [6, 1],
                [5, 2]
            ] },
            ';':{ width:10, points:[
                [5, 14],
                [4, 13],
                [5, 12],
                [6, 13],
                [5, 14],
                [-1, -1],
                [6, 1],
                [5, 0],
                [4, 1],
                [5, 2],
                [6, 1],
                [6, -1],
                [5, -3],
                [4, -4]
            ] },
            '<':{ width:24, points:[
                [20, 18],
                [4, 9],
                [20, 0]
            ] },
            '=':{ width:26, points:[
                [4, 12],
                [22, 12],
                [-1, -1],
                [4, 6],
                [22, 6]
            ] },
            '>':{ width:24, points:[
                [4, 18],
                [20, 9],
                [4, 0]
            ] },
            '?':{ width:18, points:[
                [3, 16],
                [3, 17],
                [4, 19],
                [5, 20],
                [7, 21],
                [11, 21],
                [13, 20],
                [14, 19],
                [15, 17],
                [15, 15],
                [14, 13],
                [13, 12],
                [9, 10],
                [9, 7],
                [-1, -1],
                [9, 2],
                [8, 1],
                [9, 0],
                [10, 1],
                [9, 2]
            ] },
            '@':{ width:27, points:[
                [18, 13],
                [17, 15],
                [15, 16],
                [12, 16],
                [10, 15],
                [9, 14],
                [8, 11],
                [8, 8],
                [9, 6],
                [11, 5],
                [14, 5],
                [16, 6],
                [17, 8],
                [-1, -1],
                [12, 16],
                [10, 14],
                [9, 11],
                [9, 8],
                [10, 6],
                [11, 5],
                [-1, -1],
                [18, 16],
                [17, 8],
                [17, 6],
                [19, 5],
                [21, 5],
                [23, 7],
                [24, 10],
                [24, 12],
                [23, 15],
                [22, 17],
                [20, 19],
                [18, 20],
                [15, 21],
                [12, 21],
                [9, 20],
                [7, 19],
                [5, 17],
                [4, 15],
                [3, 12],
                [3, 9],
                [4, 6],
                [5, 4],
                [7, 2],
                [9, 1],
                [12, 0],
                [15, 0],
                [18, 1],
                [20, 2],
                [21, 3],
                [-1, -1],
                [19, 16],
                [18, 8],
                [18, 6],
                [19, 5]
            ] },
            'A':{ width:18, points:[
                [9, 21],
                [1, 0],
                [-1, -1],
                [9, 21],
                [17, 0],
                [-1, -1],
                [4, 7],
                [14, 7]
            ] },
            'B':{ width:21, points:[
                [4, 21],
                [4, 0],
                [-1, -1],
                [4, 21],
                [13, 21],
                [16, 20],
                [17, 19],
                [18, 17],
                [18, 15],
                [17, 13],
                [16, 12],
                [13, 11],
                [-1, -1],
                [4, 11],
                [13, 11],
                [16, 10],
                [17, 9],
                [18, 7],
                [18, 4],
                [17, 2],
                [16, 1],
                [13, 0],
                [4, 0]
            ] },
            'C':{ width:21, points:[
                [18, 16],
                [17, 18],
                [15, 20],
                [13, 21],
                [9, 21],
                [7, 20],
                [5, 18],
                [4, 16],
                [3, 13],
                [3, 8],
                [4, 5],
                [5, 3],
                [7, 1],
                [9, 0],
                [13, 0],
                [15, 1],
                [17, 3],
                [18, 5]
            ] },
            'D':{ width:21, points:[
                [4, 21],
                [4, 0],
                [-1, -1],
                [4, 21],
                [11, 21],
                [14, 20],
                [16, 18],
                [17, 16],
                [18, 13],
                [18, 8],
                [17, 5],
                [16, 3],
                [14, 1],
                [11, 0],
                [4, 0]
            ] },
            'E':{ width:19, points:[
                [4, 21],
                [4, 0],
                [-1, -1],
                [4, 21],
                [17, 21],
                [-1, -1],
                [4, 11],
                [12, 11],
                [-1, -1],
                [4, 0],
                [17, 0]
            ] },
            'F':{ width:18, points:[
                [4, 21],
                [4, 0],
                [-1, -1],
                [4, 21],
                [17, 21],
                [-1, -1],
                [4, 11],
                [12, 11]
            ] },
            'G':{ width:21, points:[
                [18, 16],
                [17, 18],
                [15, 20],
                [13, 21],
                [9, 21],
                [7, 20],
                [5, 18],
                [4, 16],
                [3, 13],
                [3, 8],
                [4, 5],
                [5, 3],
                [7, 1],
                [9, 0],
                [13, 0],
                [15, 1],
                [17, 3],
                [18, 5],
                [18, 8],
                [-1, -1],
                [13, 8],
                [18, 8]
            ] },
            'H':{ width:22, points:[
                [4, 21],
                [4, 0],
                [-1, -1],
                [18, 21],
                [18, 0],
                [-1, -1],
                [4, 11],
                [18, 11]
            ] },
            'I':{ width:8, points:[
                [4, 21],
                [4, 0]
            ] },
            'J':{ width:16, points:[
                [12, 21],
                [12, 5],
                [11, 2],
                [10, 1],
                [8, 0],
                [6, 0],
                [4, 1],
                [3, 2],
                [2, 5],
                [2, 7]
            ] },
            'K':{ width:21, points:[
                [4, 21],
                [4, 0],
                [-1, -1],
                [18, 21],
                [4, 7],
                [-1, -1],
                [9, 12],
                [18, 0]
            ] },
            'L':{ width:17, points:[
                [4, 21],
                [4, 0],
                [-1, -1],
                [4, 0],
                [16, 0]
            ] },
            'M':{ width:24, points:[
                [4, 21],
                [4, 0],
                [-1, -1],
                [4, 21],
                [12, 0],
                [-1, -1],
                [20, 21],
                [12, 0],
                [-1, -1],
                [20, 21],
                [20, 0]
            ] },
            'N':{ width:22, points:[
                [4, 21],
                [4, 0],
                [-1, -1],
                [4, 21],
                [18, 0],
                [-1, -1],
                [18, 21],
                [18, 0]
            ] },
            'O':{ width:22, points:[
                [9, 21],
                [7, 20],
                [5, 18],
                [4, 16],
                [3, 13],
                [3, 8],
                [4, 5],
                [5, 3],
                [7, 1],
                [9, 0],
                [13, 0],
                [15, 1],
                [17, 3],
                [18, 5],
                [19, 8],
                [19, 13],
                [18, 16],
                [17, 18],
                [15, 20],
                [13, 21],
                [9, 21]
            ] },
            'P':{ width:21, points:[
                [4, 21],
                [4, 0],
                [-1, -1],
                [4, 21],
                [13, 21],
                [16, 20],
                [17, 19],
                [18, 17],
                [18, 14],
                [17, 12],
                [16, 11],
                [13, 10],
                [4, 10]
            ] },
            'Q':{ width:22, points:[
                [9, 21],
                [7, 20],
                [5, 18],
                [4, 16],
                [3, 13],
                [3, 8],
                [4, 5],
                [5, 3],
                [7, 1],
                [9, 0],
                [13, 0],
                [15, 1],
                [17, 3],
                [18, 5],
                [19, 8],
                [19, 13],
                [18, 16],
                [17, 18],
                [15, 20],
                [13, 21],
                [9, 21],
                [-1, -1],
                [12, 4],
                [18, -2]
            ] },
            'R':{ width:21, points:[
                [4, 21],
                [4, 0],
                [-1, -1],
                [4, 21],
                [13, 21],
                [16, 20],
                [17, 19],
                [18, 17],
                [18, 15],
                [17, 13],
                [16, 12],
                [13, 11],
                [4, 11],
                [-1, -1],
                [11, 11],
                [18, 0]
            ] },
            'S':{ width:20, points:[
                [17, 18],
                [15, 20],
                [12, 21],
                [8, 21],
                [5, 20],
                [3, 18],
                [3, 16],
                [4, 14],
                [5, 13],
                [7, 12],
                [13, 10],
                [15, 9],
                [16, 8],
                [17, 6],
                [17, 3],
                [15, 1],
                [12, 0],
                [8, 0],
                [5, 1],
                [3, 3]
            ] },
            'T':{ width:16, points:[
                [8, 21],
                [8, 0],
                [-1, -1],
                [1, 21],
                [15, 21]
            ] },
            'U':{ width:22, points:[
                [4, 21],
                [4, 6],
                [5, 3],
                [7, 1],
                [10, 0],
                [12, 0],
                [15, 1],
                [17, 3],
                [18, 6],
                [18, 21]
            ] },
            'V':{ width:18, points:[
                [1, 21],
                [9, 0],
                [-1, -1],
                [17, 21],
                [9, 0]
            ] },
            'W':{ width:24, points:[
                [2, 21],
                [7, 0],
                [-1, -1],
                [12, 21],
                [7, 0],
                [-1, -1],
                [12, 21],
                [17, 0],
                [-1, -1],
                [22, 21],
                [17, 0]
            ] },
            'X':{ width:20, points:[
                [3, 21],
                [17, 0],
                [-1, -1],
                [17, 21],
                [3, 0]
            ] },
            'Y':{ width:18, points:[
                [1, 21],
                [9, 11],
                [9, 0],
                [-1, -1],
                [17, 21],
                [9, 11]
            ] },
            'Z':{ width:20, points:[
                [17, 21],
                [3, 0],
                [-1, -1],
                [3, 21],
                [17, 21],
                [-1, -1],
                [3, 0],
                [17, 0]
            ] },
            '[':{ width:14, points:[
                [4, 25],
                [4, -7],
                [-1, -1],
                [5, 25],
                [5, -7],
                [-1, -1],
                [4, 25],
                [11, 25],
                [-1, -1],
                [4, -7],
                [11, -7]
            ] },
            '\\':{ width:14, points:[
                [0, 21],
                [14, -3]
            ] },
            ']':{ width:14, points:[
                [9, 25],
                [9, -7],
                [-1, -1],
                [10, 25],
                [10, -7],
                [-1, -1],
                [3, 25],
                [10, 25],
                [-1, -1],
                [3, -7],
                [10, -7]
            ] },
            '^':{ width:16, points:[
                [6, 15],
                [8, 18],
                [10, 15],
                [-1, -1],
                [3, 12],
                [8, 17],
                [13, 12],
                [-1, -1],
                [8, 17],
                [8, 0]
            ] },
            '_':{ width:16, points:[
                [0, -2],
                [16, -2]
            ] },
            '`':{ width:10, points:[
                [6, 21],
                [5, 20],
                [4, 18],
                [4, 16],
                [5, 15],
                [6, 16],
                [5, 17]
            ] },
            'a':{ width:19, points:[
                [15, 14],
                [15, 0],
                [-1, -1],
                [15, 11],
                [13, 13],
                [11, 14],
                [8, 14],
                [6, 13],
                [4, 11],
                [3, 8],
                [3, 6],
                [4, 3],
                [6, 1],
                [8, 0],
                [11, 0],
                [13, 1],
                [15, 3]
            ] },
            'b':{ width:19, points:[
                [4, 21],
                [4, 0],
                [-1, -1],
                [4, 11],
                [6, 13],
                [8, 14],
                [11, 14],
                [13, 13],
                [15, 11],
                [16, 8],
                [16, 6],
                [15, 3],
                [13, 1],
                [11, 0],
                [8, 0],
                [6, 1],
                [4, 3]
            ] },
            'c':{ width:18, points:[
                [15, 11],
                [13, 13],
                [11, 14],
                [8, 14],
                [6, 13],
                [4, 11],
                [3, 8],
                [3, 6],
                [4, 3],
                [6, 1],
                [8, 0],
                [11, 0],
                [13, 1],
                [15, 3]
            ] },
            'd':{ width:19, points:[
                [15, 21],
                [15, 0],
                [-1, -1],
                [15, 11],
                [13, 13],
                [11, 14],
                [8, 14],
                [6, 13],
                [4, 11],
                [3, 8],
                [3, 6],
                [4, 3],
                [6, 1],
                [8, 0],
                [11, 0],
                [13, 1],
                [15, 3]
            ] },
            'e':{ width:18, points:[
                [3, 8],
                [15, 8],
                [15, 10],
                [14, 12],
                [13, 13],
                [11, 14],
                [8, 14],
                [6, 13],
                [4, 11],
                [3, 8],
                [3, 6],
                [4, 3],
                [6, 1],
                [8, 0],
                [11, 0],
                [13, 1],
                [15, 3]
            ] },
            'f':{ width:12, points:[
                [10, 21],
                [8, 21],
                [6, 20],
                [5, 17],
                [5, 0],
                [-1, -1],
                [2, 14],
                [9, 14]
            ] },
            'g':{ width:19, points:[
                [15, 14],
                [15, -2],
                [14, -5],
                [13, -6],
                [11, -7],
                [8, -7],
                [6, -6],
                [-1, -1],
                [15, 11],
                [13, 13],
                [11, 14],
                [8, 14],
                [6, 13],
                [4, 11],
                [3, 8],
                [3, 6],
                [4, 3],
                [6, 1],
                [8, 0],
                [11, 0],
                [13, 1],
                [15, 3]
            ] },
            'h':{ width:19, points:[
                [4, 21],
                [4, 0],
                [-1, -1],
                [4, 10],
                [7, 13],
                [9, 14],
                [12, 14],
                [14, 13],
                [15, 10],
                [15, 0]
            ] },
            'i':{ width:8, points:[
                [3, 21],
                [4, 20],
                [5, 21],
                [4, 22],
                [3, 21],
                [-1, -1],
                [4, 14],
                [4, 0]
            ] },
            'j':{ width:10, points:[
                [5, 21],
                [6, 20],
                [7, 21],
                [6, 22],
                [5, 21],
                [-1, -1],
                [6, 14],
                [6, -3],
                [5, -6],
                [3, -7],
                [1, -7]
            ] },
            'k':{ width:17, points:[
                [4, 21],
                [4, 0],
                [-1, -1],
                [14, 14],
                [4, 4],
                [-1, -1],
                [8, 8],
                [15, 0]
            ] },
            'l':{ width:8, points:[
                [4, 21],
                [4, 0]
            ] },
            'm':{ width:30, points:[
                [4, 14],
                [4, 0],
                [-1, -1],
                [4, 10],
                [7, 13],
                [9, 14],
                [12, 14],
                [14, 13],
                [15, 10],
                [15, 0],
                [-1, -1],
                [15, 10],
                [18, 13],
                [20, 14],
                [23, 14],
                [25, 13],
                [26, 10],
                [26, 0]
            ] },
            'n':{ width:19, points:[
                [4, 14],
                [4, 0],
                [-1, -1],
                [4, 10],
                [7, 13],
                [9, 14],
                [12, 14],
                [14, 13],
                [15, 10],
                [15, 0]
            ] },
            'o':{ width:19, points:[
                [8, 14],
                [6, 13],
                [4, 11],
                [3, 8],
                [3, 6],
                [4, 3],
                [6, 1],
                [8, 0],
                [11, 0],
                [13, 1],
                [15, 3],
                [16, 6],
                [16, 8],
                [15, 11],
                [13, 13],
                [11, 14],
                [8, 14]
            ] },
            'p':{ width:19, points:[
                [4, 14],
                [4, -7],
                [-1, -1],
                [4, 11],
                [6, 13],
                [8, 14],
                [11, 14],
                [13, 13],
                [15, 11],
                [16, 8],
                [16, 6],
                [15, 3],
                [13, 1],
                [11, 0],
                [8, 0],
                [6, 1],
                [4, 3]
            ] },
            'q':{ width:19, points:[
                [15, 14],
                [15, -7],
                [-1, -1],
                [15, 11],
                [13, 13],
                [11, 14],
                [8, 14],
                [6, 13],
                [4, 11],
                [3, 8],
                [3, 6],
                [4, 3],
                [6, 1],
                [8, 0],
                [11, 0],
                [13, 1],
                [15, 3]
            ] },
            'r':{ width:13, points:[
                [4, 14],
                [4, 0],
                [-1, -1],
                [4, 8],
                [5, 11],
                [7, 13],
                [9, 14],
                [12, 14]
            ] },
            's':{ width:17, points:[
                [14, 11],
                [13, 13],
                [10, 14],
                [7, 14],
                [4, 13],
                [3, 11],
                [4, 9],
                [6, 8],
                [11, 7],
                [13, 6],
                [14, 4],
                [14, 3],
                [13, 1],
                [10, 0],
                [7, 0],
                [4, 1],
                [3, 3]
            ] },
            't':{ width:12, points:[
                [5, 21],
                [5, 4],
                [6, 1],
                [8, 0],
                [10, 0],
                [-1, -1],
                [2, 14],
                [9, 14]
            ] },
            'u':{ width:19, points:[
                [4, 14],
                [4, 4],
                [5, 1],
                [7, 0],
                [10, 0],
                [12, 1],
                [15, 4],
                [-1, -1],
                [15, 14],
                [15, 0]
            ] },
            'v':{ width:16, points:[
                [2, 14],
                [8, 0],
                [-1, -1],
                [14, 14],
                [8, 0]
            ] },
            'w':{ width:22, points:[
                [3, 14],
                [7, 0],
                [-1, -1],
                [11, 14],
                [7, 0],
                [-1, -1],
                [11, 14],
                [15, 0],
                [-1, -1],
                [19, 14],
                [15, 0]
            ] },
            'x':{ width:17, points:[
                [3, 14],
                [14, 0],
                [-1, -1],
                [14, 14],
                [3, 0]
            ] },
            'y':{ width:16, points:[
                [2, 14],
                [8, 0],
                [-1, -1],
                [14, 14],
                [8, 0],
                [6, -4],
                [4, -6],
                [2, -7],
                [1, -7]
            ] },
            'z':{ width:17, points:[
                [14, 14],
                [3, 0],
                [-1, -1],
                [3, 14],
                [14, 14],
                [-1, -1],
                [3, 0],
                [14, 0]
            ] },
            '{':{ width:14, points:[
                [9, 25],
                [7, 24],
                [6, 23],
                [5, 21],
                [5, 19],
                [6, 17],
                [7, 16],
                [8, 14],
                [8, 12],
                [6, 10],
                [-1, -1],
                [7, 24],
                [6, 22],
                [6, 20],
                [7, 18],
                [8, 17],
                [9, 15],
                [9, 13],
                [8, 11],
                [4, 9],
                [8, 7],
                [9, 5],
                [9, 3],
                [8, 1],
                [7, 0],
                [6, -2],
                [6, -4],
                [7, -6],
                [-1, -1],
                [6, 8],
                [8, 6],
                [8, 4],
                [7, 2],
                [6, 1],
                [5, -1],
                [5, -3],
                [6, -5],
                [7, -6],
                [9, -7]
            ] },
            '|':{ width:8, points:[
                [4, 25],
                [4, -7]
            ] },
            '}':{ width:14, points:[
                [5, 25],
                [7, 24],
                [8, 23],
                [9, 21],
                [9, 19],
                [8, 17],
                [7, 16],
                [6, 14],
                [6, 12],
                [8, 10],
                [-1, -1],
                [7, 24],
                [8, 22],
                [8, 20],
                [7, 18],
                [6, 17],
                [5, 15],
                [5, 13],
                [6, 11],
                [10, 9],
                [6, 7],
                [5, 5],
                [5, 3],
                [6, 1],
                [7, 0],
                [8, -2],
                [8, -4],
                [7, -6],
                [-1, -1],
                [8, 8],
                [6, 6],
                [6, 4],
                [7, 2],
                [8, 1],
                [9, -1],
                [9, -3],
                [8, -5],
                [7, -6],
                [5, -7]
            ] },
            '~':{ width:24, points:[
                [3, 6],
                [3, 8],
                [4, 11],
                [6, 12],
                [8, 12],
                [10, 11],
                [14, 8],
                [16, 7],
                [18, 7],
                [20, 8],
                [21, 10],
                [-1, -1],
                [3, 8],
                [4, 10],
                [6, 11],
                [8, 11],
                [10, 10],
                [14, 7],
                [16, 6],
                [18, 6],
                [20, 7],
                [21, 10],
                [21, 12]
            ] }
        };
    }

})();





/**
 *
 * Quaternion-based viewing transform with pan, zoom and rotate, plus separate orbit and first-person modes.
 *
 * @author xeolabs / http://xeolabs.com
 *
 * <p>Example #1</p>
 * <pre>
 * someNode.addNode({
 *      type: "cameras/trackball",
 *
 *      // Initial params
 *      eye:{ x: y:0 },
 *      look:{ y:0 },
 *      up: { y: 1 },
 *
 *      // Will orbit about the 'look' point (default)
 *      // otherwise will orbit about 'eye'
 *      orbit:true,
 *
 *      // Will bind to mouse drag for rotate and wheel for zoom (default),
 *      // otherwise you'll need to hok up your own mouse handlers
 *      input: true,
 *
 *      // Zoomed in to half-way between initial 'eye' and 'look'
 *      zoom: 0.5,
 *
 *      // Sensitivity of mouse wheel in controlling zoom
 *      zoomSensitivity:10.0,
 * });
 * </pre>
 *
 * <p>The camera is initially positioned at the given 'eye' and 'look', then the distance of 'eye' is zoomed out
 * away from 'look' by the amount given in 'zoom', and then 'eye' is rotated by 'yaw' and 'pitch'.</p>
 *
 */
SceneJS.Types.addType("cameras/trackball", {

    construct: function (params) {

        var self = this;

        this._zoom = params.zoom || 1.0;
        this._zoomRange = params.zoomRange; // Can be undefined, then lazy-calculated in _update

        this._pan = params.pan || [0, 0, 0];

        this._q = null;
        this._mat = SceneJS_math_identityMat4();

        this._lookat = this.addNode({
            type: "lookAt",
            eye: params.eye,
            look: params.look,
            up: params.up,
            nodes: params.nodes
        });

        this._orbit = params.orbit !== false;

        if (params.input !== false) {

            // Internally-managed default input handling

            var x;
            var y;
            var lastX;
            var lastY;
            var dragging = false;

            var rotateSensitivity = params.rotateSensitivity || 0.1;
            var zoomSensitivity = params.zoomSensitivity || 1.0;

            var canvas = this.getScene().getCanvas();

            function mouseDown(event) {
                x = event.clientX;
                y = event.clientY;
                lastX = x;
                lastY = y;
                dragging = true;
            }

            function touchStart(event) {
                x = event.targetTouches[0].clientX;
                y = event.targetTouches[0].clientY;
                lastX = x;
                lastY = y;
                dragging = true;
            }

            function mouseUp() {
                dragging = false;
            }

            function touchEnd() {
                dragging = false;
            }

            function mouseMove(event) {
                x = event.clientX;
                y = event.clientY;
                if (dragging) {
                    drag(x - lastX, y - lastY, 0);
                }
                lastX = x;
                lastY = y;
            }

            function touchMove(event) {
                x = event.targetTouches[0].clientX;
                y = event.targetTouches[0].clientY;
                if (dragging) {
                    drag(x - lastX, y - lastY, 0);
                }
                lastX = x;
                lastY = y;
            }

            function drag(x, y) {
                self._update([
                    SceneJS_math_angleAxisQuaternion(0.0, 1.0, 0.0, -x * rotateSensitivity),
                    SceneJS_math_angleAxisQuaternion(1.0, 0.0, 0.0, y * rotateSensitivity)
                ]);
            }

            function mouseWheel(event) {
                var delta = 0;
                if (!event) event = window.event;
                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120;
                    if (window.opera) delta = -delta;
                } else if (event.detail) {
                    delta = -event.detail / 3;
                }
                if (delta) {
                    var deltaZoom = 0;
                    if (delta < 0) {
                        deltaZoom = -zoomSensitivity;
                    } else {
                        deltaZoom = zoomSensitivity;
                    }
                    self.addZoom(deltaZoom);
                }
                if (event.preventDefault) {
                    event.preventDefault();
                }
                event.returnValue = false;
            }

            canvas.addEventListener('mousedown', mouseDown, true);
            canvas.addEventListener('mousemove', mouseMove, true);
            canvas.addEventListener('mouseup', mouseUp, true);
            canvas.addEventListener('touchstart', touchStart, true);
            canvas.addEventListener('touchmove', touchMove, true);
            canvas.addEventListener('touchend', touchEnd, true);
            canvas.addEventListener('mousewheel', mouseWheel, true);
            canvas.addEventListener('DOMMouseScroll', mouseWheel, true);

            this._removeCanvasListeners = function() {
                canvas.removeEventListener('mousedown', mouseDown, true);
                canvas.removeEventListener('mousemove', mouseMove, true);
                canvas.removeEventListener('mouseup', mouseUp, true);
                canvas.removeEventListener('touchstart', touchStart, true);
                canvas.removeEventListener('touchmove', touchMove, true);
                canvas.removeEventListener('touchend', touchEnd, true);
                canvas.removeEventListener('mousewheel', mouseWheel, true);
                canvas.removeEventListener('DOMMouseScroll', mouseWheel, true);
            }
        }

        this._update();
    },

    setOrbit: function (orbit) {
        this._orbit = orbit;
        this._update();
    },

    getOrbit: function () {
        return this._orbit
    },

    setLookat: function (params) {
        this._lookat.set(params); // Update scene
        this._q = null; // Reset quaternion rotation
        this._pan = [0, 0, 0];
        this._zoomRange = null;
    },

    getLookat: function () {
        return {
            eye: this._lookat.getEye(),
            look: this._lookat.getLook(),
            up: this._lookat.getUp()
        };
    },

    addRotation: function (rotation) {
        this._update([
            SceneJS_math_angleAxisQuaternion(rotation.x || 0, rotation.y || 0, rotation.z || 0, rotation.angle || 0)
        ]);
    },

    addRotations: function (rotations) {
        var q = [];
        var rotation;
        for (var i = 0, len = rotations.length; i < len; i++) {
            rotation = rotations[i];
            q.push(SceneJS_math_angleAxisQuaternion(rotation.x || 0, rotation.y || 0, rotation.z || 0, rotation.angle || 0))
        }
        this._update(q);
    },

    setZoomRange: function (zoomRange) {
        this._zoomRange = zoomRange;
        this._update();
    },

    getZoomRange: function () {
        return this._zoomRange;
    },

    setZoom: function (zoom) {
        this._zoom = zoom < 0 ? 0 : (zoom > 1.0 ? 1.0 : zoom);
        this._update();
    },

    addZoom: function (zoom) {
        this.setZoom(this._zoom + zoom);
    },

    getZoom: function () {
        return this._zoom;
    },

    setPan: function (pan) {
        this._pan = pan;
        this._update();
    },

    addPan: function (pan) {
        this._update(null, pan);
    },

    getPan: function () {
        return this._pan;
    },

    _update: function (rotations, pan) {

        if (!this._q) {
            this._q = SceneJS_math_identityQuaternion();
            this._eye = this._objToArray(this._lookat.getEye());
            this._look = this._objToArray(this._lookat.getLook());
            this._up = this._objToArray(this._lookat.getUp());
        }

        if (!this._zoomRange) {
            // Set zoom range to distance between current eye and look
            var eyeLookVec = SceneJS_math_subVec3(this._eye, this._look, []);
            this._zoomRange = [0, Math.abs(SceneJS_math_lenVec3(eyeLookVec))];
        }

        if (rotations) {
            for (var i = 0, len = rotations.length; i < len; i++) {
                this._q = SceneJS_math_mulQuaternions(this._q, rotations[i]);
            }
            this._mat = SceneJS_math_newMat4FromQuaternion(this._q);
        }

        var eye2;
        var look2;
        var up2;

        if (this._orbit) {

            var zoom = this._zoomRange[0] + (this._zoom * (this._zoomRange[1] - this._zoomRange[0]));

            eye2 = SceneJS_math_subVec3(this._eye, this._look, []);
            eye2 = SceneJS_math_transformVector3(this._mat, eye2, []);
            eye2 = SceneJS_math_normalizeVec3(eye2);
            eye2 = SceneJS_math_mulVec3Scalar(eye2, zoom);
            eye2 = SceneJS_math_addVec3(eye2, this._look, []);
            look2 = this._look;

        } else {

            look2 = SceneJS_math_subVec3(this._look, this._eye, []);
            look2 = SceneJS_math_transformVector3(this._mat, look2, []);
            look2 = SceneJS_math_addVec3(look2, this._eye, []);
            eye2 = this._eye;
        }

        if (pan) {
            pan = SceneJS_math_transformVector3(this._mat, pan, []);
            SceneJS_math_addVec3(this._pan, pan);
        }

        eye2 = SceneJS_math_addVec3(eye2, this._pan, []);
        look2 = SceneJS_math_addVec3(look2, this._pan, []);
        up2 = SceneJS_math_transformVector3(this._mat, this._up, []);

        this._lookat.setEye({x: eye2[0], y: eye2[1], z: eye2[2] });
        this._lookat.setLook({x: look2[0], y: look2[1], z: look2[2] });
        this._lookat.setUp({x: up2[0], y: up2[1], z: up2[2] });
    },

    _objToArray: function (v) {
        return [v.x, v.y, v.z];
    },

    _arrayToObj: function (v) {
        return { x: v[0], y: v[1], z: v[2] };
    },

    destruct: function () {
        if (this._removeCanvasListeners) {
            this._removeCanvasListeners();
        }
    }
});



/**
 *
 * @param scene
 * @param nodeIds
 * @constructor
 */
SceneJS.GUI = function (scene, nodeIds) {

    var gui = new dat.GUI();

    this.createMenu = function (nodeId) {
        var node = scene.getNode(nodeId,
            function (node) {
                var type = node.getType();
                switch (type) {
                    case "lookAt":
                        lookat(node);
                        break;
                    case "lights":
                        pointLight(node, 0);
                        break;
                    case "material":
                        material(node);
                        break;
                    case "rotate":
                        rotate(node);
                        break;
                    case "translate":
                        translate(node);
                        break;
                    case "flags":
                        flags(node);
                        break;
                    case "scale":
                        scale(node);
                        break;
                }
            });
    };

    if (nodeIds) {
        for (var i = 0, len = nodeIds.length; i < len; i++) {
            this.createMenu(nodeIds[i]);
        }
    }

    function lookat(lookat) {
        var Menu = function () {
            var eye = lookat.getEye();
            var look = lookat.getLook();
            var up = lookat.getUp();
            this["eye.x"] = eye.x;
            this["eye.y"] = eye.y;
            this["eye.z"] = eye.z;
            this["look.x"] = look.x;
            this["look.y"] = look.y;
            this["look.z"] = look.z;
            this["up.x"] = up.x;
            this["up.y"] = up.y;
            this["up.z"] = up.z;

            var self = this;
            var update = function () {
                lookat.setEye({
                    x:self["eye.x"],
                    y:self["eye.y"],
                    z:self["eye.z"]
                });
                lookat.setLook({
                    x:self["look.x"],
                    y:self["look.y"],
                    z:self["look.z"]
                });
                lookat.setUp({
                    x:self["up.x"],
                    y:self["up.y"],
                    z:self["up.z"]
                });
                requestAnimationFrame(update);
            };
            update();
        };
        var folder = gui.addFolder("lookAt '" + lookat.getId() + "'");
        var menu = new Menu();
        folder.add(menu, 'eye.x', -20.0, 20.0);
        folder.add(menu, 'eye.y', -20.0, 20.0);
        folder.add(menu, 'eye.z', -20.0, 20.0);
        folder.add(menu, 'look.x', -20.0, 20.0);
        folder.add(menu, 'look.y', -20.0, 20.0);
        folder.add(menu, 'look.z', -20.0, 20.0);
        folder.add(menu, 'up.x', -20.0, 20.0);
        folder.add(menu, 'up.y', -20.0, 20.0);
        folder.add(menu, 'up.z', -20.0, 20.0);
        folder.open();
    }

    function lights(lights, cfg) {
        var lights = [];
    }

    function pointLight(lights, index, cfg) {
        var Menu = function () {
            this["pos.x"] = 10.0;
            this["pos.y"] = 10.0;
            this["pos.z"] = 10.0;
            this["color.r"] = 1.0;
            this["color.g"] = 1.0;
            this["color.b"] = 1.0;
            this.constantAttenuation = 0.0;
            this.linearAttenuation = 0.0;
            this.quadraticAttenuation = 0.0;
            this.specular = true;
            this.diffuse = true;

            var self = this;

            var update = function () {
                lights.setLights({
                    "0":{
                        pos:{
                            x:self["pos.x"],
                            y:self["pos.y"],
                            z:self["pos.z"]
                        },
                        color:{
                            r:self["color.r"],
                            g:self["color.g"],
                            b:self["color.b"]
                        },
                        constantAttenuation:self.constantAttenuation,
                        linearAttenuation:self.linearAttenuation,
                        quadraticAttenuation:self.quadraticAttenuation,
                        specular:self.specular,
                        diffuse:self.diffuse
                    }
                });
                requestAnimationFrame(update);
            };
            update();
        };

        var folder = gui.addFolder('Light ' + index);
        var menu = new Menu();
        folder.add(menu, 'pos.x', -10.0, 10.0);
        folder.add(menu, 'pos.y', -10.0, 10.0);
        folder.add(menu, 'pos.z', -10.0, 10.0);
        folder.add(menu, 'color.r', 0.0, 1.0);
        folder.add(menu, 'color.g', 0.0, 1.0);
        folder.add(menu, 'color.b', 0.0, 1.0);
        folder.add(menu, 'specular');
        folder.add(menu, 'diffuse');
        folder.add(menu, 'constantAttenuation', 0.0, 1.0);
        folder.add(menu, 'linearAttenuation', 0.0, 1.0);
        folder.add(menu, 'quadraticAttenuation', 0.0, 1.0);
        folder.open();
    }

    function dirLight(lights, index, cfg) {

        var Menu = function () {

            this["dir.x"] = 5.0;
            this["dir.y"] = -5.0;
            this["dir.z"] = -5.0;
            this["color.r"] = 1.0;
            this["color.g"] = 1.0;
            this["color.b"] = 1.0;
            this.specular = true;
            this.diffuse = true;

            var self = this;

            var update = function () {
                lights.setLights({
                    "0":{
                        dir:{
                            x:self["dir.x"],
                            y:self["dir.y"],
                            z:self["dir.z"]
                        },
                        color:{
                            r:self["color.r"],
                            g:self["color.g"],
                            b:self["color.b"]
                        },
                        specular:self.specular,
                        diffuse:self.diffuse
                    }
                });

                requestAnimationFrame(update);
            };

            update();
        };

        var folder = gui.addFolder('Light ' + index);
        var menu = new Menu();
        folder.add(menu, 'dir.x', -10.0, 10.0);
        folder.add(menu, 'dir.y', -10.0, 10.0);
        folder.add(menu, 'dir.z', -10.0, 10.0);
        folder.add(menu, 'color.r', 0.0, 1.0);
        folder.add(menu, 'color.g', 0.0, 1.0);
        folder.add(menu, 'color.b', 0.0, 1.0);
        folder.add(menu, 'specular');
        folder.add(menu, 'diffuse');
        folder.open();
    }


    function material(material) {

        var Menu = function () {
            this["color.r"] = 1.0;
            this["color.g"] = 1.0;
            this["color.b"] = 1.0;
            this["specularColor.r"] = 1.0;
            this["specularColor.g"] = 1.0;
            this["specularColor.b"] = 1.0;
            this.specular = 1.0;
            this.shine = 70.0;
            this.emit = 0;
            this.alpha = 1.0;

            var self = this;

            var update = function () {
                material.set({
                    color:{
                        r:self["color.r"],
                        g:self["color.g"],
                        b:self["color.b"]
                    },
                    specularColor:{
                        r:self["specularColor.r"],
                        g:self["specularColor.g"],
                        b:self["specularColor.b"]
                    },
                    specular:self.specular,
                    shine:self.shine,
                    emit:self.emit,
                    alpha:self.alpha
                });
                requestAnimationFrame(update);
            };
            update();
        };

        var folder = gui.addFolder("material \"" + material.getId() + "\"");
        var menu = new Menu();
        folder.add(menu, 'color.r', 0.0, 1.0);
        folder.add(menu, 'color.g', 0.0, 1.0);
        folder.add(menu, 'color.b', 0.0, 1.0);
        folder.add(menu, 'specularColor.r', 0.0, 1.0);
        folder.add(menu, 'specularColor.g', 0.0, 1.0);
        folder.add(menu, 'specularColor.b', 0.0, 1.0);
        folder.add(menu, 'specular', 0.0, 1.0);
        folder.add(menu, 'shine', 0.0, 1000.0);
        folder.add(menu, 'emit', 0.0, 10.0);
        folder.add(menu, 'alpha', 0.0, 1.0);
        folder.open();
    }

    function rotate(rotate) {
        var Menu = function () {
            this.x = 0.0;
            this.y = 1.0;
            this.z = 0.0;
            this.angle = 0.0;
            var self = this;
            var update = function () {
                rotate.set({
                    x:self.x,
                    y:self.y,
                    z:self.z,
                    angle:self.angle
                });
                requestAnimationFrame(update);
            };
            update();
        };
        var folder = gui.addFolder("Rotate '" + rotate.getId() + "'");
        var menu = new Menu();
        folder.add(menu, 'x', -1.0, 1.0);
        folder.add(menu, 'y', -1.0, 1.0);
        folder.add(menu, 'z', -1.0, 1.0);
        folder.add(menu, 'angle', 0, 360.0);
        folder.open();
    }

    function scale(scale) {
        var Menu = function () {
            this.x = 0.0;
            this.y = 1.0;
            this.z = 0.0;
            var self = this;
            var update = function () {
                scale.set({
                    x:self.x,
                    y:self.y,
                    z:self.z
                });
                requestAnimationFrame(update);
            };
            update();
        };
        var folder = gui.addFolder("Scale '" + scale.getId() + "'");
        var menu = new Menu();
        folder.add(menu, 'x', -1.0, 1.0);
        folder.add(menu, 'y', -1.0, 1.0);
        folder.add(menu, 'z', -1.0, 1.0);
        folder.open();
    }

    function translate(translate) {
        var Menu = function () {
            this.x = 0.0;
            this.y = 1.0;
            this.z = 0.0;
            var self = this;
            var update = function () {
                translate.set({
                    x:self.x,
                    y:self.y,
                    z:self.z
                });
                requestAnimationFrame(update);
            };
            update();
        };
        var folder = gui.addFolder("Translate '" + translate.getId() + "'");
        var menu = new Menu();
        folder.add(menu, 'x', -1.0, 1.0);
        folder.add(menu, 'y', -1.0, 1.0);
        folder.add(menu, 'z', -1.0, 1.0);
        folder.open();
    }

    function flags(flags) {
        var Menu = function () {
            var attr = flags.getFlags();
            this.picking = attr.picking;
            this.enabled = attr.enabled;
            this.transparent = attr.transparent;
            this.backfaces = attr.backfaces;
            this.frontface = attr.frontface;
            this.backfaceLighting = attr.backfaceLighting;
            this.backfaceTexturing = attr.backfaceTexturing;
            this.specular = attr.specular;
            this.ambient = attr.ambient;
            this.reflection = attr.reflection;

            var self = this;
            var update = function () {
                flags.set({
                    picking:self.picking,
                    enabled:self.enabled,
                    transparent:self.transparent,
                    backfaces:self.backfaces,
                    frontface:self.frontface,
                    backfaceLighting:self.backfaceLighting,
                    backfaceTexturing:self.backfaceTexturing,
                    specular:self.specular,
                    ambient:self.ambient,
                    reflection: self.reflection
                });
                requestAnimationFrame(update);
            };
            update();
        };
        var folder = gui.addFolder("Flags '" + flags.getId() + "'");
        var menu = new Menu();
        folder.add(menu, 'picking');
        folder.add(menu, 'enabled');
        folder.add(menu, 'transparent');
        folder.add(menu, 'backfaces');
        folder.add(menu, 'frontface', [ 'ccw', 'cw' ]);
        folder.add(menu, 'backfaceLighting');
        folder.add(menu, 'backfaceTexturing');
        folder.add(menu, 'specular');
        folder.add(menu, 'ambient');
        folder.add(menu, 'reflection');
        folder.open();
    }
};



/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */
var dat=dat||{};dat.gui=dat.gui||{};dat.utils=dat.utils||{};dat.controllers=dat.controllers||{};dat.dom=dat.dom||{};dat.color=dat.color||{};dat.utils.css=function(){return{load:function(e,a){var a=a||document,c=a.createElement("link");c.type="text/css";c.rel="stylesheet";c.href=e;a.getElementsByTagName("head")[0].appendChild(c)},inject:function(e,a){var a=a||document,c=document.createElement("style");c.type="text/css";c.innerHTML=e;a.getElementsByTagName("head")[0].appendChild(c)}}}();
dat.utils.common=function(){var e=Array.prototype.forEach,a=Array.prototype.slice;return{BREAK:{},extend:function(c){this.each(a.call(arguments,1),function(a){for(var f in a)this.isUndefined(a[f])||(c[f]=a[f])},this);return c},defaults:function(c){this.each(a.call(arguments,1),function(a){for(var f in a)this.isUndefined(c[f])&&(c[f]=a[f])},this);return c},compose:function(){var c=a.call(arguments);return function(){for(var d=a.call(arguments),f=c.length-1;f>=0;f--)d=[c[f].apply(this,d)];return d[0]}},
each:function(a,d,f){if(e&&a.forEach===e)a.forEach(d,f);else if(a.length===a.length+0)for(var b=0,n=a.length;b<n;b++){if(b in a&&d.call(f,a[b],b)===this.BREAK)break}else for(b in a)if(d.call(f,a[b],b)===this.BREAK)break},defer:function(a){setTimeout(a,0)},toArray:function(c){return c.toArray?c.toArray():a.call(c)},isUndefined:function(a){return a===void 0},isNull:function(a){return a===null},isNaN:function(a){return a!==a},isArray:Array.isArray||function(a){return a.constructor===Array},isObject:function(a){return a===
Object(a)},isNumber:function(a){return a===a+0},isString:function(a){return a===a+""},isBoolean:function(a){return a===false||a===true},isFunction:function(a){return Object.prototype.toString.call(a)==="[object Function]"}}}();
dat.controllers.Controller=function(e){var a=function(a,d){this.initialValue=a[d];this.domElement=document.createElement("div");this.object=a;this.property=d;this.__onFinishChange=this.__onChange=void 0};e.extend(a.prototype,{onChange:function(a){this.__onChange=a;return this},onFinishChange:function(a){this.__onFinishChange=a;return this},setValue:function(a){this.object[this.property]=a;this.__onChange&&this.__onChange.call(this,a);this.updateDisplay();return this},getValue:function(){return this.object[this.property]},
updateDisplay:function(){return this},isModified:function(){return this.initialValue!==this.getValue()}});return a}(dat.utils.common);
dat.dom.dom=function(e){function a(b){if(b==="0"||e.isUndefined(b))return 0;b=b.match(d);return!e.isNull(b)?parseFloat(b[1]):0}var c={};e.each({HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},function(b,a){e.each(b,function(b){c[b]=a})});var d=/(\d+(\.\d+)?)px/,f={makeSelectable:function(b,a){if(!(b===void 0||b.style===void 0))b.onselectstart=a?function(){return false}:function(){},b.style.MozUserSelect=a?"auto":"none",b.style.KhtmlUserSelect=
a?"auto":"none",b.unselectable=a?"on":"off"},makeFullscreen:function(b,a,d){e.isUndefined(a)&&(a=true);e.isUndefined(d)&&(d=true);b.style.position="absolute";if(a)b.style.left=0,b.style.right=0;if(d)b.style.top=0,b.style.bottom=0},fakeEvent:function(b,a,d,f){var d=d||{},m=c[a];if(!m)throw Error("Event type "+a+" not supported.");var l=document.createEvent(m);switch(m){case "MouseEvents":l.initMouseEvent(a,d.bubbles||false,d.cancelable||true,window,d.clickCount||1,0,0,d.x||d.clientX||0,d.y||d.clientY||
0,false,false,false,false,0,null);break;case "KeyboardEvents":m=l.initKeyboardEvent||l.initKeyEvent;e.defaults(d,{cancelable:true,ctrlKey:false,altKey:false,shiftKey:false,metaKey:false,keyCode:void 0,charCode:void 0});m(a,d.bubbles||false,d.cancelable,window,d.ctrlKey,d.altKey,d.shiftKey,d.metaKey,d.keyCode,d.charCode);break;default:l.initEvent(a,d.bubbles||false,d.cancelable||true)}e.defaults(l,f);b.dispatchEvent(l)},bind:function(b,a,d,c){b.addEventListener?b.addEventListener(a,d,c||false):b.attachEvent&&
b.attachEvent("on"+a,d);return f},unbind:function(b,a,d,c){b.removeEventListener?b.removeEventListener(a,d,c||false):b.detachEvent&&b.detachEvent("on"+a,d);return f},addClass:function(b,a){if(b.className===void 0)b.className=a;else if(b.className!==a){var d=b.className.split(/ +/);if(d.indexOf(a)==-1)d.push(a),b.className=d.join(" ").replace(/^\s+/,"").replace(/\s+$/,"")}return f},removeClass:function(b,a){if(a){if(b.className!==void 0)if(b.className===a)b.removeAttribute("class");else{var d=b.className.split(/ +/),
c=d.indexOf(a);if(c!=-1)d.splice(c,1),b.className=d.join(" ")}}else b.className=void 0;return f},hasClass:function(a,d){return RegExp("(?:^|\\s+)"+d+"(?:\\s+|$)").test(a.className)||false},getWidth:function(b){b=getComputedStyle(b);return a(b["border-left-width"])+a(b["border-right-width"])+a(b["padding-left"])+a(b["padding-right"])+a(b.width)},getHeight:function(b){b=getComputedStyle(b);return a(b["border-top-width"])+a(b["border-bottom-width"])+a(b["padding-top"])+a(b["padding-bottom"])+a(b.height)},
getOffset:function(a){var d={left:0,top:0};if(a.offsetParent){do d.left+=a.offsetLeft,d.top+=a.offsetTop;while(a=a.offsetParent)}return d},isActive:function(a){return a===document.activeElement&&(a.type||a.href)}};return f}(dat.utils.common);
dat.controllers.OptionController=function(e,a,c){var d=function(f,b,e){d.superclass.call(this,f,b);var h=this;this.__select=document.createElement("select");if(c.isArray(e)){var j={};c.each(e,function(a){j[a]=a});e=j}c.each(e,function(a,b){var d=document.createElement("option");d.innerHTML=b;d.setAttribute("value",a);h.__select.appendChild(d)});this.updateDisplay();a.bind(this.__select,"change",function(){h.setValue(this.options[this.selectedIndex].value)});this.domElement.appendChild(this.__select)};
d.superclass=e;c.extend(d.prototype,e.prototype,{setValue:function(a){a=d.superclass.prototype.setValue.call(this,a);this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue());return a},updateDisplay:function(){this.__select.value=this.getValue();return d.superclass.prototype.updateDisplay.call(this)}});return d}(dat.controllers.Controller,dat.dom.dom,dat.utils.common);
dat.controllers.NumberController=function(e,a){var c=function(d,f,b){c.superclass.call(this,d,f);b=b||{};this.__min=b.min;this.__max=b.max;this.__step=b.step;d=this.__impliedStep=a.isUndefined(this.__step)?this.initialValue==0?1:Math.pow(10,Math.floor(Math.log(this.initialValue)/Math.LN10))/10:this.__step;d=d.toString();this.__precision=d.indexOf(".")>-1?d.length-d.indexOf(".")-1:0};c.superclass=e;a.extend(c.prototype,e.prototype,{setValue:function(a){if(this.__min!==void 0&&a<this.__min)a=this.__min;
else if(this.__max!==void 0&&a>this.__max)a=this.__max;this.__step!==void 0&&a%this.__step!=0&&(a=Math.round(a/this.__step)*this.__step);return c.superclass.prototype.setValue.call(this,a)},min:function(a){this.__min=a;return this},max:function(a){this.__max=a;return this},step:function(a){this.__step=a;return this}});return c}(dat.controllers.Controller,dat.utils.common);
dat.controllers.NumberControllerBox=function(e,a,c){var d=function(f,b,e){function h(){var a=parseFloat(l.__input.value);c.isNaN(a)||l.setValue(a)}function j(a){var b=o-a.clientY;l.setValue(l.getValue()+b*l.__impliedStep);o=a.clientY}function m(){a.unbind(window,"mousemove",j);a.unbind(window,"mouseup",m)}this.__truncationSuspended=false;d.superclass.call(this,f,b,e);var l=this,o;this.__input=document.createElement("input");this.__input.setAttribute("type","text");a.bind(this.__input,"change",h);
a.bind(this.__input,"blur",function(){h();l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())});a.bind(this.__input,"mousedown",function(b){a.bind(window,"mousemove",j);a.bind(window,"mouseup",m);o=b.clientY});a.bind(this.__input,"keydown",function(a){if(a.keyCode===13)l.__truncationSuspended=true,this.blur(),l.__truncationSuspended=false});this.updateDisplay();this.domElement.appendChild(this.__input)};d.superclass=e;c.extend(d.prototype,e.prototype,{updateDisplay:function(){var a=this.__input,
b;if(this.__truncationSuspended)b=this.getValue();else{b=this.getValue();var c=Math.pow(10,this.__precision);b=Math.round(b*c)/c}a.value=b;return d.superclass.prototype.updateDisplay.call(this)}});return d}(dat.controllers.NumberController,dat.dom.dom,dat.utils.common);
dat.controllers.NumberControllerSlider=function(e,a,c,d,f){var b=function(d,c,f,e,l){function o(b){b.preventDefault();var d=a.getOffset(g.__background),c=a.getWidth(g.__background);g.setValue(g.__min+(g.__max-g.__min)*((b.clientX-d.left)/(d.left+c-d.left)));return false}function y(){a.unbind(window,"mousemove",o);a.unbind(window,"mouseup",y);g.__onFinishChange&&g.__onFinishChange.call(g,g.getValue())}b.superclass.call(this,d,c,{min:f,max:e,step:l});var g=this;this.__background=document.createElement("div");
this.__foreground=document.createElement("div");a.bind(this.__background,"mousedown",function(b){a.bind(window,"mousemove",o);a.bind(window,"mouseup",y);o(b)});a.addClass(this.__background,"slider");a.addClass(this.__foreground,"slider-fg");this.updateDisplay();this.__background.appendChild(this.__foreground);this.domElement.appendChild(this.__background)};b.superclass=e;b.useDefaultStyles=function(){c.inject(f)};d.extend(b.prototype,e.prototype,{updateDisplay:function(){this.__foreground.style.width=
(this.getValue()-this.__min)/(this.__max-this.__min)*100+"%";return b.superclass.prototype.updateDisplay.call(this)}});return b}(dat.controllers.NumberController,dat.dom.dom,dat.utils.css,dat.utils.common,".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}");
dat.controllers.FunctionController=function(e,a,c){var d=function(c,b,e){d.superclass.call(this,c,b);var h=this;this.__button=document.createElement("div");this.__button.innerHTML=e===void 0?"Fire":e;a.bind(this.__button,"click",function(a){a.preventDefault();h.fire();return false});a.addClass(this.__button,"button");this.domElement.appendChild(this.__button)};d.superclass=e;c.extend(d.prototype,e.prototype,{fire:function(){this.__onChange&&this.__onChange.call(this);this.__onFinishChange&&this.__onFinishChange.call(this,
this.getValue());this.getValue().call(this.object)}});return d}(dat.controllers.Controller,dat.dom.dom,dat.utils.common);
dat.controllers.BooleanController=function(e,a,c){var d=function(c,b){d.superclass.call(this,c,b);var e=this;this.__prev=this.getValue();this.__checkbox=document.createElement("input");this.__checkbox.setAttribute("type","checkbox");a.bind(this.__checkbox,"change",function(){e.setValue(!e.__prev)},false);this.domElement.appendChild(this.__checkbox);this.updateDisplay()};d.superclass=e;c.extend(d.prototype,e.prototype,{setValue:function(a){a=d.superclass.prototype.setValue.call(this,a);this.__onFinishChange&&
this.__onFinishChange.call(this,this.getValue());this.__prev=this.getValue();return a},updateDisplay:function(){this.getValue()===true?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=true):this.__checkbox.checked=false;return d.superclass.prototype.updateDisplay.call(this)}});return d}(dat.controllers.Controller,dat.dom.dom,dat.utils.common);
dat.color.toString=function(e){return function(a){if(a.a==1||e.isUndefined(a.a)){for(a=a.hex.toString(16);a.length<6;)a="0"+a;return"#"+a}else return"rgba("+Math.round(a.r)+","+Math.round(a.g)+","+Math.round(a.b)+","+a.a+")"}}(dat.utils.common);
dat.color.interpret=function(e,a){var c,d,f=[{litmus:a.isString,conversions:{THREE_CHAR_HEX:{read:function(a){a=a.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return a===null?false:{space:"HEX",hex:parseInt("0x"+a[1].toString()+a[1].toString()+a[2].toString()+a[2].toString()+a[3].toString()+a[3].toString())}},write:e},SIX_CHAR_HEX:{read:function(a){a=a.match(/^#([A-F0-9]{6})$/i);return a===null?false:{space:"HEX",hex:parseInt("0x"+a[1].toString())}},write:e},CSS_RGB:{read:function(a){a=a.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
return a===null?false:{space:"RGB",r:parseFloat(a[1]),g:parseFloat(a[2]),b:parseFloat(a[3])}},write:e},CSS_RGBA:{read:function(a){a=a.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);return a===null?false:{space:"RGB",r:parseFloat(a[1]),g:parseFloat(a[2]),b:parseFloat(a[3]),a:parseFloat(a[4])}},write:e}}},{litmus:a.isNumber,conversions:{HEX:{read:function(a){return{space:"HEX",hex:a,conversionName:"HEX"}},write:function(a){return a.hex}}}},{litmus:a.isArray,conversions:{RGB_ARRAY:{read:function(a){return a.length!=
3?false:{space:"RGB",r:a[0],g:a[1],b:a[2]}},write:function(a){return[a.r,a.g,a.b]}},RGBA_ARRAY:{read:function(a){return a.length!=4?false:{space:"RGB",r:a[0],g:a[1],b:a[2],a:a[3]}},write:function(a){return[a.r,a.g,a.b,a.a]}}}},{litmus:a.isObject,conversions:{RGBA_OBJ:{read:function(b){return a.isNumber(b.r)&&a.isNumber(b.g)&&a.isNumber(b.b)&&a.isNumber(b.a)?{space:"RGB",r:b.r,g:b.g,b:b.b,a:b.a}:false},write:function(a){return{r:a.r,g:a.g,b:a.b,a:a.a}}},RGB_OBJ:{read:function(b){return a.isNumber(b.r)&&
a.isNumber(b.g)&&a.isNumber(b.b)?{space:"RGB",r:b.r,g:b.g,b:b.b}:false},write:function(a){return{r:a.r,g:a.g,b:a.b}}},HSVA_OBJ:{read:function(b){return a.isNumber(b.h)&&a.isNumber(b.s)&&a.isNumber(b.v)&&a.isNumber(b.a)?{space:"HSV",h:b.h,s:b.s,v:b.v,a:b.a}:false},write:function(a){return{h:a.h,s:a.s,v:a.v,a:a.a}}},HSV_OBJ:{read:function(b){return a.isNumber(b.h)&&a.isNumber(b.s)&&a.isNumber(b.v)?{space:"HSV",h:b.h,s:b.s,v:b.v}:false},write:function(a){return{h:a.h,s:a.s,v:a.v}}}}}];return function(){d=
false;var b=arguments.length>1?a.toArray(arguments):arguments[0];a.each(f,function(e){if(e.litmus(b))return a.each(e.conversions,function(e,f){c=e.read(b);if(d===false&&c!==false)return d=c,c.conversionName=f,c.conversion=e,a.BREAK}),a.BREAK});return d}}(dat.color.toString,dat.utils.common);
dat.GUI=dat.gui.GUI=function(e,a,c,d,f,b,n,h,j,m,l,o,y,g,i){function q(a,b,r,c){if(b[r]===void 0)throw Error("Object "+b+' has no property "'+r+'"');c.color?b=new l(b,r):(b=[b,r].concat(c.factoryArgs),b=d.apply(a,b));if(c.before instanceof f)c.before=c.before.__li;t(a,b);g.addClass(b.domElement,"c");r=document.createElement("span");g.addClass(r,"property-name");r.innerHTML=b.property;var e=document.createElement("div");e.appendChild(r);e.appendChild(b.domElement);c=s(a,e,c.before);g.addClass(c,k.CLASS_CONTROLLER_ROW);
g.addClass(c,typeof b.getValue());p(a,c,b);a.__controllers.push(b);return b}function s(a,b,d){var c=document.createElement("li");b&&c.appendChild(b);d?a.__ul.insertBefore(c,params.before):a.__ul.appendChild(c);a.onResize();return c}function p(a,d,c){c.__li=d;c.__gui=a;i.extend(c,{options:function(b){if(arguments.length>1)return c.remove(),q(a,c.object,c.property,{before:c.__li.nextElementSibling,factoryArgs:[i.toArray(arguments)]});if(i.isArray(b)||i.isObject(b))return c.remove(),q(a,c.object,c.property,
{before:c.__li.nextElementSibling,factoryArgs:[b]})},name:function(a){c.__li.firstElementChild.firstElementChild.innerHTML=a;return c},listen:function(){c.__gui.listen(c);return c},remove:function(){c.__gui.remove(c);return c}});if(c instanceof j){var e=new h(c.object,c.property,{min:c.__min,max:c.__max,step:c.__step});i.each(["updateDisplay","onChange","onFinishChange"],function(a){var b=c[a],H=e[a];c[a]=e[a]=function(){var a=Array.prototype.slice.call(arguments);b.apply(c,a);return H.apply(e,a)}});
g.addClass(d,"has-slider");c.domElement.insertBefore(e.domElement,c.domElement.firstElementChild)}else if(c instanceof h){var f=function(b){return i.isNumber(c.__min)&&i.isNumber(c.__max)?(c.remove(),q(a,c.object,c.property,{before:c.__li.nextElementSibling,factoryArgs:[c.__min,c.__max,c.__step]})):b};c.min=i.compose(f,c.min);c.max=i.compose(f,c.max)}else if(c instanceof b)g.bind(d,"click",function(){g.fakeEvent(c.__checkbox,"click")}),g.bind(c.__checkbox,"click",function(a){a.stopPropagation()});
else if(c instanceof n)g.bind(d,"click",function(){g.fakeEvent(c.__button,"click")}),g.bind(d,"mouseover",function(){g.addClass(c.__button,"hover")}),g.bind(d,"mouseout",function(){g.removeClass(c.__button,"hover")});else if(c instanceof l)g.addClass(d,"color"),c.updateDisplay=i.compose(function(a){d.style.borderLeftColor=c.__color.toString();return a},c.updateDisplay),c.updateDisplay();c.setValue=i.compose(function(b){a.getRoot().__preset_select&&c.isModified()&&B(a.getRoot(),true);return b},c.setValue)}
function t(a,b){var c=a.getRoot(),d=c.__rememberedObjects.indexOf(b.object);if(d!=-1){var e=c.__rememberedObjectIndecesToControllers[d];e===void 0&&(e={},c.__rememberedObjectIndecesToControllers[d]=e);e[b.property]=b;if(c.load&&c.load.remembered){c=c.load.remembered;if(c[a.preset])c=c[a.preset];else if(c[w])c=c[w];else return;if(c[d]&&c[d][b.property]!==void 0)d=c[d][b.property],b.initialValue=d,b.setValue(d)}}}function I(a){var b=a.__save_row=document.createElement("li");g.addClass(a.domElement,
"has-save");a.__ul.insertBefore(b,a.__ul.firstChild);g.addClass(b,"save-row");var c=document.createElement("span");c.innerHTML="&nbsp;";g.addClass(c,"button gears");var d=document.createElement("span");d.innerHTML="Save";g.addClass(d,"button");g.addClass(d,"save");var e=document.createElement("span");e.innerHTML="New";g.addClass(e,"button");g.addClass(e,"save-as");var f=document.createElement("span");f.innerHTML="Revert";g.addClass(f,"button");g.addClass(f,"revert");var m=a.__preset_select=document.createElement("select");
a.load&&a.load.remembered?i.each(a.load.remembered,function(b,c){C(a,c,c==a.preset)}):C(a,w,false);g.bind(m,"change",function(){for(var b=0;b<a.__preset_select.length;b++)a.__preset_select[b].innerHTML=a.__preset_select[b].value;a.preset=this.value});b.appendChild(m);b.appendChild(c);b.appendChild(d);b.appendChild(e);b.appendChild(f);if(u){var b=document.getElementById("dg-save-locally"),l=document.getElementById("dg-local-explain");b.style.display="block";b=document.getElementById("dg-local-storage");
localStorage.getItem(document.location.href+".isLocal")==="true"&&b.setAttribute("checked","checked");var o=function(){l.style.display=a.useLocalStorage?"block":"none"};o();g.bind(b,"change",function(){a.useLocalStorage=!a.useLocalStorage;o()})}var h=document.getElementById("dg-new-constructor");g.bind(h,"keydown",function(a){a.metaKey&&(a.which===67||a.keyCode==67)&&x.hide()});g.bind(c,"click",function(){h.innerHTML=JSON.stringify(a.getSaveObject(),void 0,2);x.show();h.focus();h.select()});g.bind(d,
"click",function(){a.save()});g.bind(e,"click",function(){var b=prompt("Enter a new preset name.");b&&a.saveAs(b)});g.bind(f,"click",function(){a.revert()})}function J(a){function b(f){f.preventDefault();e=f.clientX;g.addClass(a.__closeButton,k.CLASS_DRAG);g.bind(window,"mousemove",c);g.bind(window,"mouseup",d);return false}function c(b){b.preventDefault();a.width+=e-b.clientX;a.onResize();e=b.clientX;return false}function d(){g.removeClass(a.__closeButton,k.CLASS_DRAG);g.unbind(window,"mousemove",
c);g.unbind(window,"mouseup",d)}a.__resize_handle=document.createElement("div");i.extend(a.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});var e;g.bind(a.__resize_handle,"mousedown",b);g.bind(a.__closeButton,"mousedown",b);a.domElement.insertBefore(a.__resize_handle,a.domElement.firstElementChild)}function D(a,b){a.domElement.style.width=b+"px";if(a.__save_row&&a.autoPlace)a.__save_row.style.width=b+"px";if(a.__closeButton)a.__closeButton.style.width=
b+"px"}function z(a,b){var c={};i.each(a.__rememberedObjects,function(d,e){var f={};i.each(a.__rememberedObjectIndecesToControllers[e],function(a,c){f[c]=b?a.initialValue:a.getValue()});c[e]=f});return c}function C(a,b,c){var d=document.createElement("option");d.innerHTML=b;d.value=b;a.__preset_select.appendChild(d);if(c)a.__preset_select.selectedIndex=a.__preset_select.length-1}function B(a,b){var c=a.__preset_select[a.__preset_select.selectedIndex];c.innerHTML=b?c.value+"*":c.value}function E(a){a.length!=
0&&o(function(){E(a)});i.each(a,function(a){a.updateDisplay()})}e.inject(c);var w="Default",u;try{u="localStorage"in window&&window.localStorage!==null}catch(K){u=false}var x,F=true,v,A=false,G=[],k=function(a){function b(){localStorage.setItem(document.location.href+".gui",JSON.stringify(d.getSaveObject()))}function c(){var a=d.getRoot();a.width+=1;i.defer(function(){a.width-=1})}var d=this;this.domElement=document.createElement("div");this.__ul=document.createElement("ul");this.domElement.appendChild(this.__ul);
g.addClass(this.domElement,"dg");this.__folders={};this.__controllers=[];this.__rememberedObjects=[];this.__rememberedObjectIndecesToControllers=[];this.__listening=[];a=a||{};a=i.defaults(a,{autoPlace:true,width:k.DEFAULT_WIDTH});a=i.defaults(a,{resizable:a.autoPlace,hideable:a.autoPlace});if(i.isUndefined(a.load))a.load={preset:w};else if(a.preset)a.load.preset=a.preset;i.isUndefined(a.parent)&&a.hideable&&G.push(this);a.resizable=i.isUndefined(a.parent)&&a.resizable;if(a.autoPlace&&i.isUndefined(a.scrollable))a.scrollable=
true;var e=u&&localStorage.getItem(document.location.href+".isLocal")==="true";Object.defineProperties(this,{parent:{get:function(){return a.parent}},scrollable:{get:function(){return a.scrollable}},autoPlace:{get:function(){return a.autoPlace}},preset:{get:function(){return d.parent?d.getRoot().preset:a.load.preset},set:function(b){d.parent?d.getRoot().preset=b:a.load.preset=b;for(b=0;b<this.__preset_select.length;b++)if(this.__preset_select[b].value==this.preset)this.__preset_select.selectedIndex=
b;d.revert()}},width:{get:function(){return a.width},set:function(b){a.width=b;D(d,b)}},name:{get:function(){return a.name},set:function(b){a.name=b;if(m)m.innerHTML=a.name}},closed:{get:function(){return a.closed},set:function(b){a.closed=b;a.closed?g.addClass(d.__ul,k.CLASS_CLOSED):g.removeClass(d.__ul,k.CLASS_CLOSED);this.onResize();if(d.__closeButton)d.__closeButton.innerHTML=b?k.TEXT_OPEN:k.TEXT_CLOSED}},load:{get:function(){return a.load}},useLocalStorage:{get:function(){return e},set:function(a){u&&
((e=a)?g.bind(window,"unload",b):g.unbind(window,"unload",b),localStorage.setItem(document.location.href+".isLocal",a))}}});if(i.isUndefined(a.parent)){a.closed=false;g.addClass(this.domElement,k.CLASS_MAIN);g.makeSelectable(this.domElement,false);if(u&&e){d.useLocalStorage=true;var f=localStorage.getItem(document.location.href+".gui");if(f)a.load=JSON.parse(f)}this.__closeButton=document.createElement("div");this.__closeButton.innerHTML=k.TEXT_CLOSED;g.addClass(this.__closeButton,k.CLASS_CLOSE_BUTTON);
this.domElement.appendChild(this.__closeButton);g.bind(this.__closeButton,"click",function(){d.closed=!d.closed})}else{if(a.closed===void 0)a.closed=true;var m=document.createTextNode(a.name);g.addClass(m,"controller-name");f=s(d,m);g.addClass(this.__ul,k.CLASS_CLOSED);g.addClass(f,"title");g.bind(f,"click",function(a){a.preventDefault();d.closed=!d.closed;return false});if(!a.closed)this.closed=false}a.autoPlace&&(i.isUndefined(a.parent)&&(F&&(v=document.createElement("div"),g.addClass(v,"dg"),g.addClass(v,
k.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(v),F=false),v.appendChild(this.domElement),g.addClass(this.domElement,k.CLASS_AUTO_PLACE)),this.parent||D(d,a.width));g.bind(window,"resize",function(){d.onResize()});g.bind(this.__ul,"webkitTransitionEnd",function(){d.onResize()});g.bind(this.__ul,"transitionend",function(){d.onResize()});g.bind(this.__ul,"oTransitionEnd",function(){d.onResize()});this.onResize();a.resizable&&J(this);d.getRoot();a.parent||c()};k.toggleHide=function(){A=!A;i.each(G,
function(a){a.domElement.style.zIndex=A?-999:999;a.domElement.style.opacity=A?0:1})};k.CLASS_AUTO_PLACE="a";k.CLASS_AUTO_PLACE_CONTAINER="ac";k.CLASS_MAIN="main";k.CLASS_CONTROLLER_ROW="cr";k.CLASS_TOO_TALL="taller-than-window";k.CLASS_CLOSED="closed";k.CLASS_CLOSE_BUTTON="close-button";k.CLASS_DRAG="drag";k.DEFAULT_WIDTH=245;k.TEXT_CLOSED="Close Controls";k.TEXT_OPEN="Open Controls";g.bind(window,"keydown",function(a){document.activeElement.type!=="text"&&(a.which===72||a.keyCode==72)&&k.toggleHide()},
false);i.extend(k.prototype,{add:function(a,b){return q(this,a,b,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(a,b){return q(this,a,b,{color:true})},remove:function(a){this.__ul.removeChild(a.__li);this.__controllers.slice(this.__controllers.indexOf(a),1);var b=this;i.defer(function(){b.onResize()})},destroy:function(){this.autoPlace&&v.removeChild(this.domElement)},addFolder:function(a){if(this.__folders[a]!==void 0)throw Error('You already have a folder in this GUI by the name "'+
a+'"');var b={name:a,parent:this};b.autoPlace=this.autoPlace;if(this.load&&this.load.folders&&this.load.folders[a])b.closed=this.load.folders[a].closed,b.load=this.load.folders[a];b=new k(b);this.__folders[a]=b;a=s(this,b.domElement);g.addClass(a,"folder");return b},open:function(){this.closed=false},close:function(){this.closed=true},onResize:function(){var a=this.getRoot();if(a.scrollable){var b=g.getOffset(a.__ul).top,c=0;i.each(a.__ul.childNodes,function(b){a.autoPlace&&b===a.__save_row||(c+=
g.getHeight(b))});window.innerHeight-b-20<c?(g.addClass(a.domElement,k.CLASS_TOO_TALL),a.__ul.style.height=window.innerHeight-b-20+"px"):(g.removeClass(a.domElement,k.CLASS_TOO_TALL),a.__ul.style.height="auto")}a.__resize_handle&&i.defer(function(){a.__resize_handle.style.height=a.__ul.offsetHeight+"px"});if(a.__closeButton)a.__closeButton.style.width=a.width+"px"},remember:function(){if(i.isUndefined(x))x=new y,x.domElement.innerHTML=a;if(this.parent)throw Error("You can only call remember on a top level GUI.");
var b=this;i.each(Array.prototype.slice.call(arguments),function(a){b.__rememberedObjects.length==0&&I(b);b.__rememberedObjects.indexOf(a)==-1&&b.__rememberedObjects.push(a)});this.autoPlace&&D(this,this.width)},getRoot:function(){for(var a=this;a.parent;)a=a.parent;return a},getSaveObject:function(){var a=this.load;a.closed=this.closed;if(this.__rememberedObjects.length>0){a.preset=this.preset;if(!a.remembered)a.remembered={};a.remembered[this.preset]=z(this)}a.folders={};i.each(this.__folders,function(b,
c){a.folders[c]=b.getSaveObject()});return a},save:function(){if(!this.load.remembered)this.load.remembered={};this.load.remembered[this.preset]=z(this);B(this,false)},saveAs:function(a){if(!this.load.remembered)this.load.remembered={},this.load.remembered[w]=z(this,true);this.load.remembered[a]=z(this);this.preset=a;C(this,a,true)},revert:function(a){i.each(this.__controllers,function(b){this.getRoot().load.remembered?t(a||this.getRoot(),b):b.setValue(b.initialValue)},this);i.each(this.__folders,
function(a){a.revert(a)});a||B(this.getRoot(),false)},listen:function(a){var b=this.__listening.length==0;this.__listening.push(a);b&&E(this.__listening)}});return k}(dat.utils.css,'<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>',
".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n",
dat.controllers.factory=function(e,a,c,d,f,b,n){return function(h,j,m,l){var o=h[j];if(n.isArray(m)||n.isObject(m))return new e(h,j,m);if(n.isNumber(o))return n.isNumber(m)&&n.isNumber(l)?new c(h,j,m,l):new a(h,j,{min:m,max:l});if(n.isString(o))return new d(h,j);if(n.isFunction(o))return new f(h,j,"");if(n.isBoolean(o))return new b(h,j)}}(dat.controllers.OptionController,dat.controllers.NumberControllerBox,dat.controllers.NumberControllerSlider,dat.controllers.StringController=function(e,a,c){var d=
function(c,b){function e(){h.setValue(h.__input.value)}d.superclass.call(this,c,b);var h=this;this.__input=document.createElement("input");this.__input.setAttribute("type","text");a.bind(this.__input,"keyup",e);a.bind(this.__input,"change",e);a.bind(this.__input,"blur",function(){h.__onFinishChange&&h.__onFinishChange.call(h,h.getValue())});a.bind(this.__input,"keydown",function(a){a.keyCode===13&&this.blur()});this.updateDisplay();this.domElement.appendChild(this.__input)};d.superclass=e;c.extend(d.prototype,
e.prototype,{updateDisplay:function(){if(!a.isActive(this.__input))this.__input.value=this.getValue();return d.superclass.prototype.updateDisplay.call(this)}});return d}(dat.controllers.Controller,dat.dom.dom,dat.utils.common),dat.controllers.FunctionController,dat.controllers.BooleanController,dat.utils.common),dat.controllers.Controller,dat.controllers.BooleanController,dat.controllers.FunctionController,dat.controllers.NumberControllerBox,dat.controllers.NumberControllerSlider,dat.controllers.OptionController,
dat.controllers.ColorController=function(e,a,c,d,f){function b(a,b,c,d){a.style.background="";f.each(j,function(e){a.style.cssText+="background: "+e+"linear-gradient("+b+", "+c+" 0%, "+d+" 100%); "})}function n(a){a.style.background="";a.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);";a.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
a.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";a.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";a.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var h=function(e,l){function o(b){q(b);a.bind(window,"mousemove",q);a.bind(window,
"mouseup",j)}function j(){a.unbind(window,"mousemove",q);a.unbind(window,"mouseup",j)}function g(){var a=d(this.value);a!==false?(p.__color.__state=a,p.setValue(p.__color.toOriginal())):this.value=p.__color.toString()}function i(){a.unbind(window,"mousemove",s);a.unbind(window,"mouseup",i)}function q(b){b.preventDefault();var c=a.getWidth(p.__saturation_field),d=a.getOffset(p.__saturation_field),e=(b.clientX-d.left+document.body.scrollLeft)/c,b=1-(b.clientY-d.top+document.body.scrollTop)/c;b>1?b=
1:b<0&&(b=0);e>1?e=1:e<0&&(e=0);p.__color.v=b;p.__color.s=e;p.setValue(p.__color.toOriginal());return false}function s(b){b.preventDefault();var c=a.getHeight(p.__hue_field),d=a.getOffset(p.__hue_field),b=1-(b.clientY-d.top+document.body.scrollTop)/c;b>1?b=1:b<0&&(b=0);p.__color.h=b*360;p.setValue(p.__color.toOriginal());return false}h.superclass.call(this,e,l);this.__color=new c(this.getValue());this.__temp=new c(0);var p=this;this.domElement=document.createElement("div");a.makeSelectable(this.domElement,
false);this.__selector=document.createElement("div");this.__selector.className="selector";this.__saturation_field=document.createElement("div");this.__saturation_field.className="saturation-field";this.__field_knob=document.createElement("div");this.__field_knob.className="field-knob";this.__field_knob_border="2px solid ";this.__hue_knob=document.createElement("div");this.__hue_knob.className="hue-knob";this.__hue_field=document.createElement("div");this.__hue_field.className="hue-field";this.__input=
document.createElement("input");this.__input.type="text";this.__input_textShadow="0 1px 1px ";a.bind(this.__input,"keydown",function(a){a.keyCode===13&&g.call(this)});a.bind(this.__input,"blur",g);a.bind(this.__selector,"mousedown",function(){a.addClass(this,"drag").bind(window,"mouseup",function(){a.removeClass(p.__selector,"drag")})});var t=document.createElement("div");f.extend(this.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"});
f.extend(this.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:this.__field_knob_border+(this.__color.v<0.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1});f.extend(this.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1});f.extend(this.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"});f.extend(t.style,
{width:"100%",height:"100%",background:"none"});b(t,"top","rgba(0,0,0,0)","#000");f.extend(this.__hue_field.style,{width:"15px",height:"100px",display:"inline-block",border:"1px solid #555",cursor:"ns-resize"});n(this.__hue_field);f.extend(this.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:this.__input_textShadow+"rgba(0,0,0,0.7)"});a.bind(this.__saturation_field,"mousedown",o);a.bind(this.__field_knob,"mousedown",o);a.bind(this.__hue_field,"mousedown",
function(b){s(b);a.bind(window,"mousemove",s);a.bind(window,"mouseup",i)});this.__saturation_field.appendChild(t);this.__selector.appendChild(this.__field_knob);this.__selector.appendChild(this.__saturation_field);this.__selector.appendChild(this.__hue_field);this.__hue_field.appendChild(this.__hue_knob);this.domElement.appendChild(this.__input);this.domElement.appendChild(this.__selector);this.updateDisplay()};h.superclass=e;f.extend(h.prototype,e.prototype,{updateDisplay:function(){var a=d(this.getValue());
if(a!==false){var e=false;f.each(c.COMPONENTS,function(b){if(!f.isUndefined(a[b])&&!f.isUndefined(this.__color.__state[b])&&a[b]!==this.__color.__state[b])return e=true,{}},this);e&&f.extend(this.__color.__state,a)}f.extend(this.__temp.__state,this.__color.__state);this.__temp.a=1;var h=this.__color.v<0.5||this.__color.s>0.5?255:0,j=255-h;f.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toString(),border:this.__field_knob_border+
"rgb("+h+","+h+","+h+")"});this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px";this.__temp.s=1;this.__temp.v=1;b(this.__saturation_field,"left","#fff",this.__temp.toString());f.extend(this.__input.style,{backgroundColor:this.__input.value=this.__color.toString(),color:"rgb("+h+","+h+","+h+")",textShadow:this.__input_textShadow+"rgba("+j+","+j+","+j+",.7)"})}});var j=["-moz-","-o-","-webkit-","-ms-",""];return h}(dat.controllers.Controller,dat.dom.dom,dat.color.Color=function(e,a,c,d){function f(a,
b,c){Object.defineProperty(a,b,{get:function(){if(this.__state.space==="RGB")return this.__state[b];n(this,b,c);return this.__state[b]},set:function(a){if(this.__state.space!=="RGB")n(this,b,c),this.__state.space="RGB";this.__state[b]=a}})}function b(a,b){Object.defineProperty(a,b,{get:function(){if(this.__state.space==="HSV")return this.__state[b];h(this);return this.__state[b]},set:function(a){if(this.__state.space!=="HSV")h(this),this.__state.space="HSV";this.__state[b]=a}})}function n(b,c,e){if(b.__state.space===
"HEX")b.__state[c]=a.component_from_hex(b.__state.hex,e);else if(b.__state.space==="HSV")d.extend(b.__state,a.hsv_to_rgb(b.__state.h,b.__state.s,b.__state.v));else throw"Corrupted color state";}function h(b){var c=a.rgb_to_hsv(b.r,b.g,b.b);d.extend(b.__state,{s:c.s,v:c.v});if(d.isNaN(c.h)){if(d.isUndefined(b.__state.h))b.__state.h=0}else b.__state.h=c.h}var j=function(){this.__state=e.apply(this,arguments);if(this.__state===false)throw"Failed to interpret color arguments";this.__state.a=this.__state.a||
1};j.COMPONENTS="r,g,b,h,s,v,hex,a".split(",");d.extend(j.prototype,{toString:function(){return c(this)},toOriginal:function(){return this.__state.conversion.write(this)}});f(j.prototype,"r",2);f(j.prototype,"g",1);f(j.prototype,"b",0);b(j.prototype,"h");b(j.prototype,"s");b(j.prototype,"v");Object.defineProperty(j.prototype,"a",{get:function(){return this.__state.a},set:function(a){this.__state.a=a}});Object.defineProperty(j.prototype,"hex",{get:function(){if(!this.__state.space!=="HEX")this.__state.hex=
a.rgb_to_hex(this.r,this.g,this.b);return this.__state.hex},set:function(a){this.__state.space="HEX";this.__state.hex=a}});return j}(dat.color.interpret,dat.color.math=function(){var e;return{hsv_to_rgb:function(a,c,d){var e=a/60-Math.floor(a/60),b=d*(1-c),n=d*(1-e*c),c=d*(1-(1-e)*c),a=[[d,c,b],[n,d,b],[b,d,c],[b,n,d],[c,b,d],[d,b,n]][Math.floor(a/60)%6];return{r:a[0]*255,g:a[1]*255,b:a[2]*255}},rgb_to_hsv:function(a,c,d){var e=Math.min(a,c,d),b=Math.max(a,c,d),e=b-e;if(b==0)return{h:NaN,s:0,v:0};
a=a==b?(c-d)/e:c==b?2+(d-a)/e:4+(a-c)/e;a/=6;a<0&&(a+=1);return{h:a*360,s:e/b,v:b/255}},rgb_to_hex:function(a,c,d){a=this.hex_with_component(0,2,a);a=this.hex_with_component(a,1,c);return a=this.hex_with_component(a,0,d)},component_from_hex:function(a,c){return a>>c*8&255},hex_with_component:function(a,c,d){return d<<(e=c*8)|a&~(255<<e)}}}(),dat.color.toString,dat.utils.common),dat.color.interpret,dat.utils.common),dat.utils.requestAnimationFrame=function(){return window.webkitRequestAnimationFrame||
window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1E3/60)}}(),dat.dom.CenteredDiv=function(e,a){var c=function(){this.backgroundElement=document.createElement("div");a.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear"});e.makeFullscreen(this.backgroundElement);this.backgroundElement.style.position="fixed";this.domElement=
document.createElement("div");a.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear"});document.body.appendChild(this.backgroundElement);document.body.appendChild(this.domElement);var c=this;e.bind(this.backgroundElement,"click",function(){c.hide()})};c.prototype.show=function(){var c=this;this.backgroundElement.style.display="block";this.domElement.style.display="block";this.domElement.style.opacity=
0;this.domElement.style.webkitTransform="scale(1.1)";this.layout();a.defer(function(){c.backgroundElement.style.opacity=1;c.domElement.style.opacity=1;c.domElement.style.webkitTransform="scale(1)"})};c.prototype.hide=function(){var a=this,c=function(){a.domElement.style.display="none";a.backgroundElement.style.display="none";e.unbind(a.domElement,"webkitTransitionEnd",c);e.unbind(a.domElement,"transitionend",c);e.unbind(a.domElement,"oTransitionEnd",c)};e.bind(this.domElement,"webkitTransitionEnd",
c);e.bind(this.domElement,"transitionend",c);e.bind(this.domElement,"oTransitionEnd",c);this.backgroundElement.style.opacity=0;this.domElement.style.opacity=0;this.domElement.style.webkitTransform="scale(1.1)"};c.prototype.layout=function(){this.domElement.style.left=window.innerWidth/2-e.getWidth(this.domElement)/2+"px";this.domElement.style.top=window.innerHeight/2-e.getHeight(this.domElement)/2+"px"};return c}(dat.dom.dom,dat.utils.common),dat.dom.dom,dat.utils.common);






