;(function(omidGlobal) {
  'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function p(a){var b='undefined'!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function q(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var ba='function'==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ca;
if('function'==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={S:!0},fa={};try{fa.__proto__=ea;da=fa.S;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+' is not extensible');return a}:null}var ha=ca;
function r(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if('prototype'!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ca=b.prototype}var t='undefined'!=typeof window&&window===this?this:'undefined'!=typeof global&&null!=global?global:this;function u(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ia='function'==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)u(d,e)&&(a[e]=d[e])}return a},w='function'==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function y(a,b){if(b){var c=t;a=a.split('.');for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&w(c,a,{configurable:!0,writable:!0,value:b})}}y('Object.assign',function(a){return a||ia});function ja(){ja=function(){};t.Symbol||(t.Symbol=ka)}function la(a,b){this.a=a;w(this,'description',{configurable:!0,writable:!0,value:b})}la.prototype.toString=function(){return this.a};
var ka=function(){function a(c){if(this instanceof a)throw new TypeError('Symbol is not a constructor');return new la('jscomp_symbol_'+(c||'')+'_'+b++,c)}var b=0;return a}();function ma(){ja();var a=t.Symbol.iterator;a||(a=t.Symbol.iterator=t.Symbol('Symbol.iterator'));'function'!=typeof Array.prototype[a]&&w(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return na(aa(this))}});ma=function(){}}function na(a){ma();a={next:a};a[t.Symbol.iterator]=function(){return this};return a}
y('WeakMap',function(a){function b(g){this.a=(l+=Math.random()+1).toString();if(g){g=p(g);for(var h;!(h=g.next()).done;)h=h.value,this.set(h[0],h[1])}}function c(){}function d(g){if(!u(g,f)){var h=new c;w(g,f,{value:h})}}function e(g){var h=Object[g];h&&(Object[g]=function(k){if(k instanceof c)return k;d(k);return h(k)})}if(function(){if(!a||!Object.seal)return!1;try{var g=Object.seal({}),h=Object.seal({}),k=new a([[g,2],[h,3]]);if(2!=k.get(g)||3!=k.get(h))return!1;k.delete(g);k.set(h,4);return!k.has(g)&&
4==k.get(h)}catch(m){return!1}}())return a;var f='$jscomp_hidden_'+Math.random();e('freeze');e('preventExtensions');e('seal');var l=0;b.prototype.set=function(g,h){d(g);if(!u(g,f))throw Error('WeakMap key fail: '+g);g[f][this.a]=h;return this};b.prototype.get=function(g){return u(g,f)?g[f][this.a]:void 0};b.prototype.has=function(g){return u(g,f)&&u(g[f],this.a)};b.prototype.delete=function(g){return u(g,f)&&u(g[f],this.a)?delete g[f][this.a]:!1};return b});
y('Map',function(a){function b(){var g={};return g.A=g.next=g.head=g}function c(g,h){var k=g.a;return na(function(){if(k){for(;k.head!=g.a;)k=k.A;for(;k.next!=k.head;)return k=k.next,{done:!1,value:h(k)};k=null}return{done:!0,value:void 0}})}function d(g,h){var k=h&&typeof h;'object'==k||'function'==k?f.has(h)?k=f.get(h):(k=''+ ++l,f.set(h,k)):k='p_'+h;var m=g.b[k];if(m&&u(g.b,k))for(g=0;g<m.length;g++){var v=m[g];if(h!==h&&v.key!==v.key||h===v.key)return{id:k,list:m,index:g,s:v}}return{id:k,list:m,
index:-1,s:void 0}}function e(g){this.b={};this.a=b();this.size=0;if(g){g=p(g);for(var h;!(h=g.next()).done;)h=h.value,this.set(h[0],h[1])}}if(function(){if(!a||'function'!=typeof a||!a.prototype.entries||'function'!=typeof Object.seal)return!1;try{var g=Object.seal({x:4}),h=new a(p([[g,'s']]));if('s'!=h.get(g)||1!=h.size||h.get({x:4})||h.set({x:4},'t')!=h||2!=h.size)return!1;var k=h.entries(),m=k.next();if(m.done||m.value[0]!=g||'s'!=m.value[1])return!1;m=k.next();return m.done||4!=m.value[0].x||
't'!=m.value[1]||!k.next().done?!1:!0}catch(v){return!1}}())return a;ma();var f=new WeakMap;e.prototype.set=function(g,h){g=0===g?0:g;var k=d(this,g);k.list||(k.list=this.b[k.id]=[]);k.s?k.s.value=h:(k.s={next:this.a,A:this.a.A,head:this.a,key:g,value:h},k.list.push(k.s),this.a.A.next=k.s,this.a.A=k.s,this.size++);return this};e.prototype.delete=function(g){g=d(this,g);return g.s&&g.list?(g.list.splice(g.index,1),g.list.length||delete this.b[g.id],g.s.A.next=g.s.next,g.s.next.A=g.s.A,g.s.head=null,
this.size--,!0):!1};e.prototype.clear=function(){this.b={};this.a=this.a.A=b();this.size=0};e.prototype.has=function(g){return!!d(this,g).s};e.prototype.get=function(g){return(g=d(this,g).s)&&g.value};e.prototype.entries=function(){return c(this,function(g){return[g.key,g.value]})};e.prototype.keys=function(){return c(this,function(g){return g.key})};e.prototype.values=function(){return c(this,function(g){return g.value})};e.prototype.forEach=function(g,h){for(var k=this.entries(),m;!(m=k.next()).done;)m=
m.value,g.call(h,m[1],m[0],this)};e.prototype[Symbol.iterator]=e.prototype.entries;var l=0;return e});y('Object.values',function(a){return a?a:function(b){var c=[],d;for(d in b)u(b,d)&&c.push(b[d]);return c}});
y('Set',function(a){function b(c){this.a=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.a.size}if(function(){if(!a||'function'!=typeof a||!a.prototype.entries||'function'!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||
f.value[1]!=f.value[0]?!1:e.next().done}catch(l){return!1}}())return a;ma();b.prototype.add=function(c){c=0===c?0:c;this.a.set(c,c);this.size=this.a.size;return this};b.prototype.delete=function(c){c=this.a.delete(c);this.size=this.a.size;return c};b.prototype.clear=function(){this.a.clear();this.size=0};b.prototype.has=function(c){return this.a.has(c)};b.prototype.entries=function(){return this.a.entries()};b.prototype.values=function(){return this.a.values()};b.prototype.keys=b.prototype.values;
b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.a.forEach(function(f){return c.call(d,f,f,e)})};return b});y('Object.is',function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});y('Array.prototype.includes',function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
y('Object.entries',function(a){return a?a:function(b){var c=[],d;for(d in b)u(b,d)&&c.push([d,b[d]]);return c}});
var z={qa:'loaded',xa:'start',ka:'firstQuartile',sa:'midpoint',ya:'thirdQuartile',ia:'complete',ta:'pause',va:'resume',ha:'bufferStart',ga:'bufferFinish',wa:'skipped',Aa:'volumeChange',ua:'playerStateChange',da:'adUserInteraction'},oa={na:'generic',za:'video',ra:'media'},qa={R:'native',oa:'html',P:'javascript'},ra={R:'native',P:'javascript',NONE:'none'},sa={ma:'full',ja:'domain',pa:'limited'},ta={fa:'backgrounded',la:'foregrounded'},ua={ea:'app',Ba:'web'};function A(a,b){this.x=null!=a.x?a.x:a.left;this.y=null!=a.y?a.y:a.top;this.width=a.width;this.height=a.height;this.endX=this.x+this.width;this.endY=this.y+this.height;this.adSessionId=a.adSessionId||void 0;this.isFriendlyObstructionFor=a.isFriendlyObstructionFor||[];this.b=a.friendlyObstructionClass||void 0;this.c=a.friendlyObstructionPurpose||void 0;this.f=a.friendlyObstructionReason||void 0;this.clipsToBounds=void 0!==a.clipsToBounds?!0===a.clipsToBounds:!0;this.notVisibleReason=a.notVisibleReason||
void 0;this.childViews=a.childViews||[];this.isCreative=a.isCreative||!1;this.a=b}function va(a){var b={};return b.width=a.width,b.height=a.height,b}function C(a){var b={};return Object.assign({},va(a),(b.x=a.x,b.y=a.y,b))}function wa(a){var b=C(a),c={};return Object.assign({},b,(c.endX=a.endX,c.endY=a.endY,c))}function xa(a,b,c){a.x+=b;a.y+=c;a.endX+=b;a.endY+=c}
A.prototype.J=function(a){if(null==a)return!1;a=C(a);var b=a.y,c=a.width,d=a.height;return this.x===a.x&&this.y===b&&this.width===c&&this.height===d};function ya(a){return a.width*a.height};function za(a,b){a=C(a);for(var c=[],d=[],e=0;e<b.length;e++){var f=C(b[e]);f=Aa(a,f);Ba(c,f.x);Ba(c,f.endX);Ba(d,f.y);Ba(d,f.endY)}c=c.sort(function(l,g){return l-g});d=d.sort(function(l,g){return l-g});return{ba:c,ca:d}}function Aa(a,b){return{x:Math.max(a.x,b.x),y:Math.max(a.y,b.y),endX:Math.min(a.x+a.width,b.x+b.width),endY:Math.min(a.y+a.height,b.y+b.height)}}function Ba(a,b){-1===a.indexOf(b)&&a.push(b)};function Ca(){this.b=this.a=this.v=this.l=this.g=this.j=void 0;this.m=0;this.h=[];this.o=[];this.u=0;this.i=[];this.c=[];this.f=[]}Ca.prototype.J=function(a){return null==a?!1:JSON.stringify(Da(this))===JSON.stringify(Da(a))};
function Da(a){var b=[],c=[],d={viewport:a.j,adView:{percentageInView:a.m,reasons:a.f},declaredFriendlyObstructions:a.h.length};if(void 0!==a.a){d.adView.geometry=C(a.a);d.adView.geometry.pixels=ya(a.a);d.adView.onScreenGeometry=C(a.b);d.adView.onScreenGeometry.pixels=a.u;for(var e=0;e<a.c.length;e++)b.push(C(a.c[e]));for(e=0;e<a.o.length;e++){var f=a.o[e],l=f,g={};l.b&&(g.obstructionClass=l.b);l.c&&(g.obstructionPurpose=l.c);l.f&&(g.obstructionReason=l.f);f=Aa(a.a,f);c.push(Object.assign({},{x:f.x,
y:f.y,width:f.endX-f.x,height:f.endY-f.y},g))}d.adView.onScreenGeometry.obstructions=b;d.adView.onScreenGeometry.friendlyObstructions=c;void 0!==a.l&&void 0!==a.v&&(d.adView.containerGeometry=C(a.l),d.adView.onScreenContainerGeometry=C(a.v),d.adView.measuringElement=!0)}return d}function Ea(a,b){b=va(b);a.j={};a.j.width=b.width;a.j.height=b.height;a.g={};a.g.x=0;a.g.y=0;a.g.width=b.width;a.g.height=b.height;a.g.endX=b.width;a.g.endY=b.height}
function Fa(){return{x:0,y:0,endX:0,endY:0,width:0,height:0}}function Ga(a,b){var c={};c.x=Math.max(a.x,b.x);c.y=Math.max(a.y,b.y);c.endX=Math.min(a.endX,b.endX);c.endY=Math.min(a.endY,b.endY);c.width=Math.max(0,c.endX-c.x);c.height=Math.max(0,c.endY-c.y);return c}function Ha(a,b){return a.width<b.width||a.height<b.height}
function Ia(a){if(-1!==a.f.indexOf('backgrounded'))a.m=0,a.u=0;else{var b=ya(a.a);if(0!==b){var c=ya(a.b);var d=a.c,e=0;if(0<d.length){var f=za(a.b,d),l=f.ba;f=f.ca;for(var g=0;g<l.length-1;g++)for(var h=(l[g]+(l[g]+1))/2,k=l[g+1]-l[g],m=0;m<f.length-1;m++){for(var v=(f[m]+(f[m]+1))/2,B=f[m+1]-f[m],x=!1,F=0;F<d.length;F++){var K=C(d[F]);if(K.x<h&&K.x+K.width>h&&K.y<v&&K.y+K.height>v){x=!0;break}}x&&(e+=Math.round(k)*Math.round(B))}}c-=e;b=Math.round(c/b*100);a.m=Math.max(b,0);a.u=Math.max(c,0)}}}
function Ja(a,b){if(0!==b.width&&0!==b.height&&a.b){a=wa(a.b);var c=a.y,d=a.endX,e=a.endY;b=!(b.endX<=a.x||b.x>=d||b.endY<=c||b.y>=e)}else b=!1;return b}function D(a,b){for(var c=!1,d=0;d<a.f.length;d++)a.f[d]===b&&(c=!0);c||a.f.push(b)};function Ka(a,b,c,d,e){var f=new Ca;b=new A(b,!1);Ea(f,b);La(a,b,f,d);if(!e)return f.f=['unmeasurable'],f.j=void 0,f.m=0,f.c=[],f.a&&(a=f.a,c={},a=new A((c.x=0,c.y=0,c.width=a.width,c.height=a.height,c),a.a),f.a=a),f.b=Fa(),f;if('backgrounded'===c)D(f,'backgrounded');else if(void 0!==f.a){for(a=0;a<f.h.length;a++)Ja(f,f.h[a])&&f.o.push(f.h[a]);for(a=0;a<f.i.length;a++){if(c=Ja(f,f.i[a])){a:{c=f.i[a];for(d=0;d<f.c.length;d++)if(f.c[d].J(c)){c=!0;break a}c=!1}c=!c}c&&(D(f,'obstructed'),f.c.push(f.i[a]))}Ia(f)}else D(f,
'notFound');return f}
function La(a,b,c,d){var e=b.isCreative?!0:b.adSessionId===d;if(e){c.a=b;var f=wa(c.a);a=Ga(c.g,f);var l=c.a;'notAttached'===l.notVisibleReason||'noWindowFocus'===l.notVisibleReason||'noAdView'===l.notVisibleReason?(D(c,'notFound'),c.b=new A(Fa(),!1)):(l=c.a,'viewInvisible'===l.notVisibleReason||'viewGone'===l.notVisibleReason||'viewNotVisible'===l.notVisibleReason||'viewAlphaZero'===l.notVisibleReason||'viewHidden'===l.notVisibleReason||void 0!==c.a.notVisibleReason?(D(c,'hidden'),c.b=new A(Fa(),
!1)):(Ha(a,f)&&D(c,'clipped'),c.b=new A(a,!1)))}else if(f=!0,b.a&&(f=-1!==b.isFriendlyObstructionFor.indexOf(d)?!1:!1===b.clipsToBounds),f){l=b.childViews;for(var g=0;g<l.length;g++)f=void 0!==c.a,La(a,new A(l[g],f),c,d)}e||void 0===c.a||(b.a?-1!==b.isFriendlyObstructionFor.indexOf(d)?c.h.push(b):c.i.push(b):(e=wa(b),d=wa(c.b),C(c.b),a=c.b,0!==a.width&&0!==a.height&&b.clipsToBounds&&(b=Ga(d,e),Ha(b,d)&&(D(c,'clipped'),c.b=new A(b,!1)))))};function Ma(a,b){this.y=this.x=0;this.width=a;this.height=b};function Na(){return{apiVersion:'1.0',accessMode:'limited',environment:'app',omidJsInfo:{omidImplementer:'omsdk',serviceVersion:'1.3.20-Vrtcal'}}}function Oa(){this.adSessionId=null;this.c=Na();this.o=null;this.m='foregrounded';this.l=this.i='none';this.j=this.g=this.f=this.h=this.a=this.b=this.B=this.u=null;this.C=!0;this.v=new Map}var G;function H(){G||(G=new Oa);return G};var Pa=eval('this'),I=function(){if('undefined'!==typeof omidGlobal&&omidGlobal)return omidGlobal;if('undefined'!==typeof global&&global)return global;if('undefined'!==typeof window&&window)return window;if('undefined'!==typeof Pa&&Pa)return Pa;throw Error('Could not determine global object context.');}();function Qa(a,b){this.a=a;this.b=b}t.Object.defineProperties(Qa.prototype,{event:{configurable:!0,enumerable:!0,get:function(){return this.a}},origin:{configurable:!0,enumerable:!0,get:function(){return this.b}}});function J(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];Ra(function(){throw new (Function.prototype.bind.apply(Error,[null,'Could not complete the test successfully - '].concat(q(b))));},function(){return console.error.apply(console,q(b))})}function Sa(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];Ra(function(){},function(){return console.error.apply(console,q(b))})}
function Ra(a,b){'undefined'!==typeof jasmine&&jasmine?a():'undefined'!==typeof console&&console&&console.error&&b()};function Ta(){this.f=[];this.b=[];this.c=[];this.g=[];this.i={};this.a=H()}function Ua(a){a.f=[];a.b=[];a.c=[];a.g=[];a.i={};G.adSessionId=null;G.c=Na();G.o=null;G.G=void 0;G.K=void 0;G.H=null;G.I=null;G.D=null;G.m='foregrounded';G.i='none';G.l='none';G.u=null;G.B=null;G.b=null;G.a=null;G.h=null;G.f=null;G.g=null;G.j=null;G.C=!0;G.v=new Map}
function Va(a,b){void 0!==a.a&&a.a.adSessionId&&!1!==Wa(a,b)&&a.c.filter(function(c){return c.type===b.event.type}).forEach(function(c){return a.h(c.F,b.event)})}function Xa(a,b){a.f.push(b);Va(a,b)}function Ya(a,b,c){void 0!==a.a&&a.a.adSessionId&&a.f.filter(function(d){return d.event.type===b&&Wa(a,d)}).map(function(d){return d.event}).forEach(c)}
function Wa(a,b){var c=b.event.type,d=-1!==Object.values(z).indexOf(c)&&'volumeChange'!==c;return'impression'===c||'loaded'===c&&a.a.a?b.origin===H().l:d?b.origin===H().i:!0}function Za(a,b,c){'media'===b||'video'===b?$a(a,c):(a.c.push({type:b,F:c}),Ya(a,b,c))}function $a(a,b){Object.keys(z).forEach(function(c){c=z[c];a.c.push({type:c,F:b});Ya(a,c,b)})}function ab(a,b,c,d){var e={O:c,L:d,F:b};a.g.push(e);a.b.forEach(function(f){var l=bb(f);'sessionStart'===f.event.type&&cb(a,l,e);a.h(b,l)})}
function db(a,b,c){var d=L(a,'sessionError','native',{errorType:b,message:c});a.b.push(d);a.g.forEach(function(e){a.h(e.F,d.event)})}function eb(a,b){a.i=Object.assign(a.i,b);b=a.a.c;if(void 0!==b){b=Object.assign({},fb(a,gb(a,{context:b}),!0),{supportsLoadedEvent:!!a.a.a||'video'==a.a.b});Object.assign(b,{pageUrl:null,contentUrl:a.a.o});var c=L(a,'sessionStart','native',b);a.b.push(c);a.g.forEach(function(d){var e=d.F,f=bb(c);cb(a,f,d);a.h(e,f)},a);hb(a)}}
function cb(a,b,c){c.O&&(b.data.verificationParameters=a.i[c.O]);c.L&&(c=a.a.v.get(c.L))&&(b.data.verificationParameters=c.verificationParameters,b.data.context.accessMode=c.accessMode,'full'===c.accessMode&&(a.a.g&&(b.data.context.videoElement=a.a.g),a.a.f&&(b.data.context.slotElement=a.a.f)))}function ib(a){var b=a.g,c=L(a,'sessionFinish','native');a.b.push(c);var d=a.a.c;d&&'native'==d.adSessionType||Ua(a);b.forEach(function(e){return a.h(e.F,c.event)})}
Ta.prototype.h=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];try{a.apply(null,q(c))}catch(e){Sa(e)}};function jb(a,b){var c=(c=H().D)?Da(c):void 0;c=fb(a,gb(a,c));Xa(a,L(a,'impression',b,c))}function kb(a,b,c){if(a.a.a||'display'!=a.a.b)b=L(a,'loaded',b,fb(a,gb(a,void 0===c?null:c))),Xa(a,b)}
function lb(a,b,c,d){'start'!==b&&'volumeChange'!==b||null!=(d&&d.deviceVolume)||(d.deviceVolume=a.a.u);if(d&&('start'===b||'volumeChange'===b)){var e=d.videoPlayerVolume,f=d.mediaPlayerVolume;null!=e?(Object.assign(d,{mediaPlayerVolume:e}),a.a.B=e):null!=f&&(Object.assign(d,{videoPlayerVolume:f}),a.a.B=f)}Xa(a,L(a,b,c,d))}
function hb(a){var b=a.f.filter(function(f){return Object.values(z).includes(f.event.type)&&'video'==a.a.b&&f.origin===a.a.i||'loaded'==f.event.type&&'display'==a.a.b&&f.origin===a.a.l?!0:!1}).map(function(f){return f.event}),c=a.a.adSessionId||'',d={};b=p(b);for(var e=b.next();!e.done;d={w:d.w},e=b.next()){d.w=e.value;d.w.adSessionId||(d.w.adSessionId=c);if('loaded'==d.w.type){if(!a.a.a&&'display'==a.a.b)continue;d.w.data=fb(a,gb(a,d.w.data))}a.c.filter(function(f){return function(l){return l.type===
f.w.type}}(d)).forEach(function(f){return function(l){return l.F(f.w)}}(d))}}function mb(a,b,c){a:{c=new Set(c);a=p(a.f.concat(a.b));for(var d=a.next();!d.done;d=a.next())if(d=d.value,c.has(d.event.type)&&d.origin!=b){b=!0;break a}b=!1}return b?(J('Event owner cannot be registered after its events have already been published.'),!1):!0}function nb(a,b){mb(a,b,Object.values(z))&&M(a,b)&&(a.a.i=b)}function ob(a,b){mb(a,b,['impression'])&&pb(a,b)&&(a.a.l=b)}
function pb(a,b){var c=a.a.l;return'none'!=c&&c!=b?(J('Impression event is owned by '+(a.a.l+', not ')+(b+'.')),!1):!0}function M(a,b){var c=a.a.i;return'none'!=c&&c!=b?(J('Media events are owned by '+(a.a.i+', not '+b+'.')),!1):!0}function fb(a,b,c){c=void 0===c?!1:c;b=Object.assign({},b);a.a.b&&Object.assign(b,{mediaType:a.a.b});a.a.a&&(c||'definedByJavaScript'!==a.a.a)&&Object.assign(b,{creativeType:a.a.a});return b}function gb(a,b){return a.a.h?Object.assign({},b,{impressionType:a.a.h}):b}
function L(a,b,c,d){return new Qa({adSessionId:a.a.adSessionId||'',timestamp:(new Date).getTime(),type:b,data:d},c)}function bb(a){a=a.event;return{adSessionId:a.adSessionId,timestamp:a.timestamp,type:a.type,data:a.data}};function qb(a,b,c){'container'===b&&void 0!==a.a.G&&void 0!==a.a&&null!=a.a.adSessionId&&(a.a.H=Ka(a.c,a.a.G,a.a.m,a.a.adSessionId,!0));b=a.a;var d=b.H,e=b.I;if(d)if(e){b=new Ca;var f=d.j,l=d.a,g=d.b,h=e.a;e=e.b;f&&l&&g&&h&&e&&(Ea(b,f),b.l=new A(l,!1),b.v=new A(g,!1),b.i=Object.assign([],d.i),b.c=Object.assign([],d.c),b.h=Object.assign([],d.h),b.o=Object.assign([],d.o),b.f=Object.assign([],d.f),d=b.l.x,f=b.l.y,h=new A(h,!1),e=new A(e,!1),xa(h,d,f),xa(e,d,f),b.a=h,b.b=Ga(e,g),Ia(b))}else b=d;else b=
null;g=a.a.D;if(b&&!b.J(g)||c)g=Da(b),c&&(g.adView.reasons=g.adView.reasons||[c]),c=a.b,'audio'!=c.a.a&&Xa(c,L(c,'geometryChange','native',g)),a.a.D=b};function N(a){return'object'===typeof a}function rb(a){return'number'===typeof a&&!isNaN(a)&&0<=a}function O(a){return'string'===typeof a}function P(a,b){return O(a)&&-1!==Object.values(b).indexOf(a)}function sb(a){var b=a&&a.tagName&&'iframe'===a.tagName.toLowerCase();try{b=b&&a instanceof HTMLIFrameElement}catch(c){}return b}function tb(a){var b=a&&a.tagName;try{b=b&&a instanceof a.ownerDocument.defaultView.HTMLElement}catch(c){}return b}
function ub(a){var b=a&&a.tagName&&'video'===a.tagName.toLowerCase();try{b=b&&a instanceof a.ownerDocument.defaultView.HTMLVideoElement}catch(c){}return b};function Q(a,b,c){this.f=a;this.K=b;this.G=c;this.c=H();this.b=null;this.a=this.g=this.u=void 0;this.I=!0;this.B=void 0;R(this)}function R(a){if(!a.b){var b;a:{if((b=a.f.document)&&b.getElementsByClassName&&(b=b.getElementsByClassName('omid-element'))){if(1==b.length){b=b[0];break a}1<b.length&&a.I&&(db(a.G,'generic',"More than one element with 'omid-element' class name."),a.I=!1)}b=null}if(ub(b))a.c.g=b;else if(tb(b))a.c.f=b;else return;vb(a)}}
function vb(a){a.c.g?(a.b=a.c.g,a.i()):a.c.f&&(a.b=a.c.f,sb(a.b)?a.c.j&&a.i():a.i())}function wb(a){a.a&&(sb(a.b)?a.c.j&&(a.D(),xb(a)):(a.D(),xb(a)))}Q.prototype.m=function(){this.B&&(this.f.document.removeEventListener('visibilitychange',this.B),this.B=void 0)};Q.prototype.i=function(){};function xb(a){a.u&&(a.c.I=a.u,qb(a.K,'creative'))}function yb(a){if(a.a&&a.c.j){var b=new A(a.c.j,!1);xa(b,a.a.x,a.a.y);b.clipsToBounds=!0;return b}};function zb(a,b,c){return Ab(a,'setInterval')(b,c)}function Bb(a,b){Ab(a,'clearInterval')(b)}function Cb(a,b){Ab(a,'clearTimeout')(b)}function Ab(a,b){return a.a&&a.a[b]?a.a[b]:Db(a,b)}
function Eb(a,b,c,d){if(a.a.document&&a.a.document.body){var e=a.a.document.createElement('img');e.width=1;e.height=1;e.style.display='none';e.src=b;c&&e.addEventListener('load',function(){return c()});d&&e.addEventListener('error',function(){return d()});a.a.document.body.appendChild(e)}else Db(a,'sendUrl')(b,c,d)}function Db(a,b){if(a.a&&a.a.omidNative&&a.a.omidNative[b])return a.a.omidNative[b].bind(a.a.omidNative);throw Error('Native interface method "'+b+'" not found.');};function S(a,b,c,d,e){Q.call(this,a,c,e);this.l=b;this.h=void 0;this.j=d}r(S,Q);S.prototype.m=function(){void 0!==this.h&&(Bb(this.j,this.h),this.h=void 0);Q.prototype.m.call(this)};S.prototype.i=function(){var a=this;Q.prototype.i.call(this);null==this.b?this.h=void 0:void 0===this.h&&(this.h=zb(this.j,function(){return Fb(a)},200),Fb(this))};
S.prototype.D=function(){if(this.g){var a=yb(this);if(a){this.a.isCreative=!1;a.isCreative=!0;for(var b=!1,c=0;c<this.a.childViews.length;c++)if(this.a.childViews[c].isCreative){this.a.childViews[c]=a;b=!0;break}b||this.a.childViews.push(a)}else this.a.isCreative=!0;this.u=Ka(this.l,this.g,this.c.m,this.c.adSessionId,this.C())}};S.prototype.C=function(){return!0};
function Fb(a){if(void 0!==a.h){b:{try{var b=a.f.top;var c=0<=b.innerHeight&&0<=b.innerWidth;break b}catch(d){}c=!1}c?(c=a.f.top,c=new A(new Ma(c.innerWidth,c.innerHeight),!1)):c=new A(new Ma(0,0),!1);b=a.b.getBoundingClientRect();if(null==b.x||isNaN(b.x))b.x=b.left;if(null==b.y||isNaN(b.y))b.y=b.top;b=new A(b,!1);c.J(a.g)&&b.J(a.a)||(a.a=b,a.a.clipsToBounds=!0,a.g=c,a.g.childViews.push(a.a),wb(a))}};function T(a,b,c,d){Q.call(this,a,c,d);this.o=this.j=this.l=this.h=void 0;this.H=!1;this.v=void 0}r(T,Q);T.prototype.m=function(){this.h&&this.h.disconnect();Gb(this);Q.prototype.m.call(this)};T.prototype.i=function(){Q.prototype.i.call(this);this.b&&(this.h||(this.h=Hb(this)),Ib(this),Jb(this.b)&&Kb(this))};
T.prototype.D=function(){if(this.a&&this.v){var a=yb(this);if(a){var b=a;var c=this.v;var d=Math.max(a.x,c.x);var e=Math.max(a.y,c.y),f=Math.min(a.endX,c.endX);a=Math.min(a.endY,c.endY);f<=d||a<=e?d=null:(c={},d=new A((c.x=d,c.y=e,c.width=Math.abs(f-d),c.height=Math.abs(a-e),c),!1));d||(d=new A({x:0,y:0,width:0,height:0},!1))}else b=this.a,d=this.v;e=new Ca;this.g&&Ea(e,this.g);e.a=b;e.b=d;Ia(e);this.H?100===e.m||D(e,'clipped'):D(e,'viewport');this.u=e}};T.prototype.C=function(){return!0};
function Gb(a){a.l&&(a.l.disconnect(),a.l=void 0);a.j&&(a.j.disconnect(),a.j=void 0);a.o&&((0,a.f.removeEventListener)('resize',a.o),a.o=void 0)}function Ib(a){a.h&&a.b&&(a.h.unobserve(a.b),a.h.observe(a.b))}function Jb(a){a=a.getBoundingClientRect();return 0==a.width||0==a.height}
function Hb(a){return new a.f.IntersectionObserver(function(b){try{if(b.length){for(var c,d=b[0],e=1;e<b.length;e++)b[e].time>d.time&&(d=b[e]);c=d;a.g=Lb(c.rootBounds);a.a=Lb(c.boundingClientRect);a.v=Lb(c.intersectionRect);a.H=!!c.isIntersecting;wb(a)}}catch(f){a.m(),db(a.G,'generic','Problem handling IntersectionObserver callback: '+f.message)}},{root:null,rootMargin:'0px',threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]})}
function Kb(a){a.f.ResizeObserver?a.l||(a.l=Mb(a,function(){return Ob(a)}),a.l.observe(a.b)):(a.o||(a.o=function(){return Ob(a)},(0,a.f.addEventListener)('resize',a.o)),a.j||(a.j=new MutationObserver(function(){return Ob(a)}),a.j.observe(a.b,{childList:!1,attributes:!0,subtree:!1})))}function Ob(a){a.b&&!Jb(a.b)&&(Ib(a),Gb(a))}function Mb(a,b){return new a.f.ResizeObserver(b)}function Lb(a){if(a&&null!==a.x&&null!==a.y&&null!==a.width&&null!==a.height)return new A(a,!1)};function Pb(a){return a&&N(a)?Object.entries(a).reduce(function(b,c){var d=p(c);c=d.next().value;d=d.next().value;return b&&O(c)&&null!=d&&N(d)&&O(d.resourceUrl)},!0):!1};function U(a,b,c,d){this.b=a;this.method=b;this.version=c;this.a=d}function Qb(a){return!!a&&void 0!==a.omid_message_guid&&void 0!==a.omid_message_method&&void 0!==a.omid_message_version&&'string'===typeof a.omid_message_guid&&'string'===typeof a.omid_message_method&&'string'===typeof a.omid_message_version&&(void 0===a.omid_message_args||void 0!==a.omid_message_args)}function Rb(a){return new U(a.omid_message_guid,a.omid_message_method,a.omid_message_version,a.omid_message_args)}
function Sb(a){var b={};b=(b.omid_message_guid=a.b,b.omid_message_method=a.method,b.omid_message_version=a.version,b);void 0!==a.a&&(b.omid_message_args=a.a);return b};function Tb(a){this.c=a};function V(a){this.c=a;this.handleExportedMessage=V.prototype.f.bind(this)}r(V,Tb);V.prototype.b=function(a,b){b=void 0===b?this.c:b;if(!b)throw Error('Message destination must be defined at construction time or when sending the message.');b.handleExportedMessage(Sb(a),this)};V.prototype.f=function(a,b){Qb(a)&&this.a&&this.a(Rb(a),b)};function Ub(a,b){this.c=b=void 0===b?I:b;var c=this;a.addEventListener('message',function(d){if('object'===typeof d.data){var e=d.data;Qb(e)&&d.source&&c.a&&c.a(Rb(e),d.source)}})}r(Ub,Tb);Ub.prototype.b=function(a,b){b=void 0===b?this.c:b;if(!b)throw Error('Message destination must be defined at construction time or when sending the message.');b.postMessage(Sb(a),'*')};function Vb(){return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(a){var b=16*Math.random()|0;return'y'===a?(b&3|8).toString(16):b.toString(16)})};function Wb(a){if(!a.a||!a.a.document)throw Error('OMID Service Script is not running within a window.');var b=a.b;a.b=[];b.forEach(function(c){try{var d=a.c.C?'limited':'full',e=P(c.accessMode,sa)?c.accessMode:null;var f=e?'full'==e&&'limited'==d?d:'domain'==e?'limited':e:d;c.accessMode=f;a:{var l=c.resourceUrl,g=a.a.location.origin;try{var h=new URL(l,g);break a}catch(F){}try{h=new URL(l);break a}catch(F){}h=null}if(d=h){var k=Vb(),m=a.a.document,v=m.createElement('iframe');v.id='omid-verification-script-frame-'+
k;v.style.display='none';['full','limited'].includes(f)?v.srcdoc="<html><head>\n<script type=\"text/javascript\">window['omidVerificationProperties'] = {\n'serviceWindow': window.parent,\n'injectionSource': 'app',\n'injectionId': '"+(k+'\',\n};\x3c/script>\n<script type="text/javascript" src="')+d.href+'">\x3c/script>\n</head><body></body></html>':'domain'==f&&(v.src=Xb(a,k,d).href);['domain','limited'].includes(f)&&(v.sandbox='allow-scripts');m.body.appendChild(v);var B=c.vendorKey,x=c.verificationParameters;
B=void 0===B?'':B;x=void 0===x?'':x;B&&'string'===typeof B&&''!==B&&x&&'string'===typeof x&&''!==x&&(a.f.i[B]=x);a.c.v.set(k,c)}}catch(F){Sa('OMID verification script '+c.resourceUrl+' failed to load: '+F)}})}
function Xb(a,b,c){var d='/.well-known/omid/omloader-v1.html#';(new Map([['verificationScriptUrl',c.href],['injectionId',b]])).forEach(function(e,f){d+=encodeURIComponent(f)+'='+encodeURIComponent(e)+'&'});b=null;try{b=new URL(d,a.a.parent.location.origin)}catch(e){throw Error('OMID Service Script cannot access the parent window.');}return b};function Yb(){var a=Zb,b=$b,c=this;this.c=W;this.b=a;this.a=H();this.g=b;this.f=!1;this.registerSessionObserver(function(d){return ac(c,d)})}n=Yb.prototype;n.registerSessionObserver=function(a){ab(this.c,a)};n.setSlotElement=function(a){tb(a)?(this.a.f=a,this.b&&vb(this.b)):J('setSlotElement called with a non-HTMLElement.  It will be ignored.')};n.setElementBounds=function(a){this.a.j=a;this.b&&vb(this.b);this.b&&wb(this.b)};n.error=function(a,b){db(this.c,a,b)};
n.registerAdEvents=function(){ob(this.c,'javascript')};n.registerMediaEvents=function(){nb(this.c,'javascript')};function Y(a,b,c){'impression'==b?pb(a.c,'javascript')&&(jb(a.c,'javascript'),a.b&&R(a.b)):('loaded'==b?(c=void 0===c?null:c,M(a.c,'javascript')&&kb(a.c,'javascript',c)):M(a.c,'javascript')&&lb(a.c,b,'javascript',c),['loaded','start'].includes(b)&&a.b&&R(a.b))}n.injectVerificationScriptResources=function(a){var b=this.g;b.b.push.apply(b.b,q(a));if(this.f)try{Wb(this.g)}catch(c){J(c.message)}};
n.setCreativeType=function(a,b){b=void 0===b?null:b;if(!this.a.b||this.a.a)this.a.a=a,'video'==a||'audio'==a?this.a.b='video':'htmlDisplay'==a||'nativeDisplay'==a?this.a.b='display':'definedByJavaScript'==a&&b&&(this.a.b='none'==b?'display':'video')};n.setImpressionType=function(a){if(!this.a.b||this.a.a)this.a.h=a};
function ac(a,b){if('sessionStart'===b.type){a.f=!0;try{Wb(a.g)}catch(c){J(c.message)}}'sessionFinish'===b.type&&(a.f=!1,(b=H().c)&&'native'==b.adSessionType||a.registerSessionObserver(function(c){return ac(a,c)}))}n.setClientInfo=function(a,b,c){var d=this.a.c||{};d.omidJsInfo=Object.assign({},d.omidJsInfo,{sessionClientVersion:a,partnerName:b,partnerVersion:c});this.a.c=d;return this.a.c.omidJsInfo.serviceVersion};function bc(a){return/\d+\.\d+\.\d+(-.*)?/.test(a)}function cc(a){a=a.split('-')[0].split('.');for(var b=['1','0','3'],c=0;3>c;c++){var d=parseInt(a[c],10),e=parseInt(b[c],10);if(d>e)break;else if(d<e)return!1}return!0};function dc(a,b){return bc(a)&&cc(a)?b?b:[]:b&&'string'===typeof b?JSON.parse(b):[]};function ec(){var a=fc;var b=void 0===b?omidGlobal:b;this.a=a;this.f=b;this.b=new V;this.f.omid=this.f.omid||{};this.f.omid.v1_SessionServiceCommunication=this.b;this.c=b&&b.addEventListener&&b.postMessage?new Ub(b):null;this.g=null;this.b.a=this.h.bind(this);this.c&&(this.c.a=this.i.bind(this))}ec.prototype.h=function(a,b){gc(this,a,b,this.b)};
ec.prototype.i=function(a,b){this.g||(this.g=b);this.g!=b?J('The source window of session client post messages cannot be changed from the source of the first message.'):gc(this,a,b,this.c)};
function gc(a,b,c,d){function e(h){for(var k=[],m=0;m<arguments.length;++m)k[m]=arguments[m];k=new U(f,'response',g,bc(g)&&cc(g)?k:JSON.stringify(k));d.b(k,c)}var f=b.b,l=b.method,g=b.version;b=dc(g,b.a);try{hc(a,l,e,b)}catch(h){d.b(new U(f,'error',g,'\n        name: '+h.name+'\n        message: '+h.message+'\n        filename: '+h.filename+'\n        lineNumber: '+h.lineNumber+'\n        columnNumber: '+h.columnNumber+'\n        stack: '+h.stack+'\n        toString(): '+h.toString()),c)}}
function hc(a,b,c,d){switch(b){case 'SessionService.registerAdEvents':a.a.registerAdEvents();break;case 'SessionService.registerMediaEvents':a.a.registerMediaEvents();break;case 'SessionService.registerSessionObserver':a.a.registerSessionObserver(c);break;case 'SessionService.setSlotElement':c=p(d).next().value;a.a.setSlotElement(c);break;case 'SessionService.setVideoElement':c=p(d).next().value;a=a.a;ub(c)?(a.a.g=c,a.b&&vb(a.b)):J('setVideoElement called with a non-HTMLVideoElement. It will be ignored.');
break;case 'SessionService.setElementBounds':c=p(d).next().value;a.a.setElementBounds(c);break;case 'SessionService.startSession':J('Session start from JS is not supported in mobile app.');break;case 'SessionService.finishSession':J('Session finish from JS is not supported in mobile app.');break;case 'SessionService.impressionOccurred':Y(a.a,'impression');break;case 'SessionService.loaded':(c=p(d).next().value)?(b={skippable:c.isSkippable,autoPlay:c.isAutoPlay,position:c.position},c.isSkippable&&
(b.skipOffset=c.skipOffset),Y(a.a,'loaded',b)):Y(a.a,'loaded');break;case 'SessionService.start':b=p(d);c=b.next().value;b=b.next().value;Y(a.a,'start',{duration:c,mediaPlayerVolume:b});break;case 'SessionService.firstQuartile':Y(a.a,'firstQuartile');break;case 'SessionService.midpoint':Y(a.a,'midpoint');break;case 'SessionService.thirdQuartile':Y(a.a,'thirdQuartile');break;case 'SessionService.complete':Y(a.a,'complete');break;case 'SessionService.pause':Y(a.a,'pause');break;case 'SessionService.resume':Y(a.a,
'resume');break;case 'SessionService.bufferStart':Y(a.a,'bufferStart');break;case 'SessionService.bufferFinish':Y(a.a,'bufferFinish');break;case 'SessionService.skipped':Y(a.a,'skipped');break;case 'SessionService.volumeChange':c={mediaPlayerVolume:p(d).next().value};Y(a.a,'volumeChange',c);break;case 'SessionService.playerStateChange':c={state:p(d).next().value};Y(a.a,'playerStateChange',c);break;case 'SessionService.adUserInteraction':c={interactionType:p(d).next().value};Y(a.a,'adUserInteraction',
c);break;case 'SessionService.setClientInfo':var e=p(d);b=e.next().value;d=e.next().value;e=e.next().value;a=a.a.setClientInfo(b,d,e);c(a);break;case 'SessionService.injectVerificationScriptResources':c=p(d).next().value;a.a.injectVerificationScriptResources(c);break;case 'SessionService.setCreativeType':c=p(d).next().value;a.a.setCreativeType(c);break;case 'SessionService.setImpressionType':c=p(d).next().value;a.a.setImpressionType(c);break;case 'SessionService.setContentUrl':c=p(d).next().value;
a.a.a.o=c;break;case 'SessionService.sessionError':b=p(d),c=b.next().value,b=b.next().value,a.a.error(c,b)}};function Z(){var a=W,b=ic,c=jc,d=Zb;this.f=fc;this.a=a;this.c=b;this.h=c;this.g=d;this.b=H()}n=Z.prototype;
n.T=function(a){if(!(!(a&&N(a)&&P(a.impressionOwner,ra))||'videoEventsOwner'in a&&null!=a.videoEventsOwner&&!P(a.videoEventsOwner,ra)||'mediaEventsOwner'in a&&null!=a.mediaEventsOwner&&!P(a.mediaEventsOwner,ra))){if(a.creativeType&&a.impressionType){var b=a.mediaEventsOwner;null==this.b.a&&this.f.setCreativeType(a.creativeType,b);null==this.b.h&&(this.b.h=a.impressionType);nb(this.a,b)}else b=a.videoEventsOwner,this.b.b=null==b||'none'===b?'display':'video',this.b.a=null,this.b.h=null,nb(this.a,b);
ob(this.a,a.impressionOwner);a&&null!=a.isolateVerificationScripts&&'boolean'===typeof a.isolateVerificationScripts&&(this.b.C=a.isolateVerificationScripts)}};
n.W=function(a,b,c,d){var e;if(N(b)){if(e=P(b.environment,ua)&&P(b.adSessionType,qa))e=b.omidNativeInfo,e=N(e)?O(e.partnerName)&&O(e.partnerVersion):!1;e&&(e=b.app,e=N(e)?O(e.libraryVersion)&&O(e.appId):!1)}else e=!1;e&&(Pb(d)&&(this.b.v=new Map(Object.entries(d))),d=this.f,c=void 0===c?null:c,null==a&&(a=Vb()),b.canMeasureVisibility=d.b.C(),d.a.adSessionId=a,a=d.a,e=b,void 0!==e.contentUrl&&(a.o=e.contentUrl,e.contentUrl=void 0),e=a.c||{},b.omidJsInfo=Object.assign({},e.omidJsInfo||{},b.omidJsInfo||
{}),e=b=Object.assign({},e,b),a.C||(null!=a.g?(e.videoElement=a.g,e.accessMode='full'):null!=a.f&&(e.slotElement=a.f,e.accessMode='full')),a.c=b,eb(d.c,c),d.b&&R(d.b))};n.U=function(){var a=this.f;ib(a.c);a.b.m()};n.$=function(a){N(a)&&rb(a.x)&&rb(a.y)&&rb(a.width)&&rb(a.height)&&(this.b.G=a,qb(this.c,'container'))};n.aa=function(a){P(a,ta)&&(this.b.m=a,'backgrounded'===a?qb(this.c,'container','backgrounded'):qb(this.c,'container'))};n.X=function(a){'impression'===a&&(this.M(),this.g&&R(this.g))};
n.M=function(){pb(this.a,'native')&&jb(this.a,'native')};n.V=function(a){a=void 0===a?null:a;M(this.a,'native')&&kb(this.a,'native',a)};n.error=function(a,b){P(a,oa)&&db(this.a,a,b)};n.Y=function(a,b){this.N(a,b)};n.N=function(a,b){M(this.a,'native')&&P(a,z)&&(void 0===b||N(b))&&('loaded'==a?kb(this.a,'native',b):lb(this.a,a,'native',b))};
n.Z=function(a){if('none'!==this.a.a.i&&'number'===typeof a&&!isNaN(a)){this.b.u=a;a=this.h;var b=a.a.B;null!=b&&lb(a.b,'volumeChange','native',{mediaPlayerVolume:b,deviceVolume:a.a.u})}};Z.prototype.startSession=Z.prototype.W;Z.prototype.error=Z.prototype.error;Z.prototype.finishSession=Z.prototype.U;Z.prototype.publishAdEvent=Z.prototype.X;Z.prototype.publishImpressionEvent=Z.prototype.M;Z.prototype.publishVideoEvent=Z.prototype.Y;Z.prototype.publishMediaEvent=Z.prototype.N;
Z.prototype.publishLoadedEvent=Z.prototype.V;Z.prototype.setNativeViewHierarchy=Z.prototype.$;Z.prototype.setState=Z.prototype.aa;Z.prototype.setDeviceVolume=Z.prototype.Z;Z.prototype.init=Z.prototype.T;function kc(){var a=W,b=lc;var c=void 0===c?I:c;this.g=a;this.a=b;this.h={};this.f={};this.c=new V;c.omid=c.omid||{};c.omid.v1_VerificationServiceCommunication=this.c;this.b=null;c&&c.addEventListener&&c.postMessage&&(this.b=new Ub(c));this.c.a=this.i.bind(this);this.b&&(this.b.a=this.j.bind(this))}function mc(a,b,c,d){Eb(a.a,b,c,d)}function nc(a,b,c,d){Db(a.a,'downloadJavaScriptResource')(b,c,d)}kc.prototype.j=function(a,b){this.b&&oc(this,a,b,this.b)};kc.prototype.i=function(a,b){oc(this,a,b,this.c)};
function oc(a,b,c,d){function e(E){for(var X=[],pa=0;pa<arguments.length;++pa)X[pa]=arguments[pa];X=new U(f,'response',g,bc(g)&&cc(g)?X:JSON.stringify(X));d.b(X,c)}var f=b.b,l=b.method,g=b.version;b=dc(g,b.a);try{switch(l){case 'VerificationService.addEventListener':var h=p(b).next().value;Za(a.g,h,e);break;case 'VerificationService.addSessionListener':var k=p(b),m=k.next().value,v=k.next().value;ab(a.g,e,m,v);break;case 'VerificationService.sendUrl':var B=p(b).next().value;mc(a,B,function(){return e(!0)},
function(){return e(!1)});break;case 'VerificationService.setTimeout':var x=p(b),F=x.next().value,K=x.next().value;a.h[F]=Ab(a.a,'setTimeout')(e,K);break;case 'VerificationService.clearTimeout':var tc=p(b).next().value;Cb(a.a,a.h[tc]);break;case 'VerificationService.setInterval':var Nb=p(b),uc=Nb.next().value,vc=Nb.next().value;a.f[uc]=zb(a.a,e,vc);break;case 'VerificationService.clearInterval':var wc=p(b).next().value;Bb(a.a,a.f[wc]);break;case 'VerificationService.injectJavaScriptResource':var xc=
p(b).next().value;nc(a,xc,function(E){return e(!0,E)},function(){return e(!1)});break;case 'VerificationService.getVersion':p(b).next();var yc=H().c.omidJsInfo;e(yc.serviceVersion)}}catch(E){d.b(new U(f,'error',g,'\n              name: '+E.name+'\n              message: '+E.message+'\n              filename: '+E.filename+'\n              lineNumber: '+E.lineNumber+'\n              columnNumber: '+E.columnNumber+'\n              stack: '+E.stack+'\n              toString(): '+E.toString()+'\n          '),
c)}};function pc(){var a=I.document.createElement('iframe');a.id='omid_v1_present';a.name='omid_v1_present';a.style.display='none';I.document.body.appendChild(a)}function qc(){var a=new MutationObserver(function(b){b.forEach(function(c){'BODY'===c.addedNodes[0].nodeName&&(pc(),a.disconnect())})});a.observe(I.document.documentElement,{childList:!0})};var W=new Ta,lc=new function(){var a;this.a=a=void 0===a?omidGlobal:a};new kc;var rc=new function(){},sc=new function(){},ic=new function(){this.b=W;this.c=sc;this.a=H()},zc;I?zc=I.IntersectionObserver&&(I.MutationObserver||I.ResizeObserver)?new T(I,rc,ic,W):new S(I,sc,ic,lc,W):zc=null;var Zb=zc,$b=new function(){var a=W;var b=void 0===b?I:b;this.f=a;this.a=b;this.c=H();this.b=[]},fc=new Yb,jc=new function(){var a=W,b=H();this.b=a;this.a=b};I.omidBridge=new Z;new ec;
if(I.frames&&I.document&&!('omid_v1_present'in I.frames)){var Ac;if(Ac=null==I.document.body)Ac='MutationObserver'in I;Ac?qc():I.document.body?pc():I.document.write('<iframe style="display:none" id="omid_v1_present" name="omid_v1_present"></iframe>')};
}).call(this, this);


;(function(omidGlobal, factory, exports) {
  // CommonJS support
  if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    factory(omidGlobal, exports);

  // If neither AMD nor CommonJS are used, export to a versioned name in the
  // global context.
  } else {
    var exports = {};
    var versions = ['1.3.20-Vrtcal'];
    var additionalVersionString = 'default';
    if (!!additionalVersionString) {
       versions.push(additionalVersionString);
    }

    factory(omidGlobal, exports);

    function deepFreeze(object) {
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          object[key] = deepFreeze(object[key]);
        }
      }
      return Object.freeze(object);
    }

    // Inject and freeze the exported components of omid.
    for (var key in exports) {
      if (exports.hasOwnProperty(key)) {
        if (Object.getOwnPropertyDescriptor(omidGlobal, key) == null) {
          // Define the top level property in the global scope
          Object.defineProperty(omidGlobal, key, {
            value: {},
          });
        }
        versions.forEach(function(version) {
          if (Object.getOwnPropertyDescriptor(omidGlobal[key], version) == null) {
            var frozenObject = deepFreeze(exports[key]);
            // Define the object exports keyed-off versions
            Object.defineProperty(omidGlobal[key], version, {
              get: function () {
                return frozenObject;
              },
              enumerable: true,
            });
          }
        });
      }
    }
  }
}(typeof global === 'undefined' ? this : global, function(omidGlobal, omidExports) {
  'use strict';
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(a) {
  var b = 0;
  return function() {
    return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
  };
};
$jscomp.arrayIterator = function(a) {
  return {next:$jscomp.arrayIteratorImpl(a)};
};
$jscomp.makeIterator = function(a) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return b ? b.call(a) : $jscomp.arrayIterator(a);
};
$jscomp.arrayFromIterator = function(a) {
  for (var b, c = []; !(b = a.next()).done;) {
    c.push(b.value);
  }
  return c;
};
$jscomp.arrayFromIterable = function(a) {
  return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a));
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(a) {
  var b = function() {
  };
  b.prototype = a;
  return new b;
};
$jscomp.underscoreProtoCanBeSet = function() {
  var a = {a:!0}, b = {};
  try {
    return b.__proto__ = a, b.a;
  } catch (c) {
  }
  return !1;
};
$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) {
  a.__proto__ = b;
  if (a.__proto__ !== b) {
    throw new TypeError(a + " is not extensible");
  }
  return a;
} : null;
$jscomp.inherits = function(a, b) {
  a.prototype = $jscomp.objectCreate(b.prototype);
  a.prototype.constructor = a;
  if ($jscomp.setPrototypeOf) {
    var c = $jscomp.setPrototypeOf;
    c(a, b);
  } else {
    for (c in b) {
      if ("prototype" != c) {
        if (Object.defineProperties) {
          var d = Object.getOwnPropertyDescriptor(b, c);
          d && Object.defineProperty(a, c, d);
        } else {
          a[c] = b[c];
        }
      }
    }
  }
  a.superClass_ = b.prototype;
};
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  a != Array.prototype && a != Object.prototype && (a[b] = c.value);
};
$jscomp.getGlobal = function(a) {
  return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
  $jscomp.initSymbol = function() {
  };
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};
$jscomp.SymbolClass = function(a, b) {
  this.$jscomp$symbol$id_ = a;
  $jscomp.defineProperty(this, "description", {configurable:!0, writable:!0, value:b});
};
$jscomp.SymbolClass.prototype.toString = function() {
  return this.$jscomp$symbol$id_;
};
$jscomp.Symbol = function() {
  function a(c) {
    if (this instanceof a) {
      throw new TypeError("Symbol is not a constructor");
    }
    return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (c || "") + "_" + b++, c);
  }
  var b = 0;
  return a;
}();
$jscomp.initSymbolIterator = function() {
  $jscomp.initSymbol();
  var a = $jscomp.global.Symbol.iterator;
  a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
  "function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, {configurable:!0, writable:!0, value:function() {
    return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
  }});
  $jscomp.initSymbolIterator = function() {
  };
};
$jscomp.initSymbolAsyncIterator = function() {
  $jscomp.initSymbol();
  var a = $jscomp.global.Symbol.asyncIterator;
  a || (a = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
  $jscomp.initSymbolAsyncIterator = function() {
  };
};
$jscomp.iteratorPrototype = function(a) {
  $jscomp.initSymbolIterator();
  a = {next:a};
  a[$jscomp.global.Symbol.iterator] = function() {
    return this;
  };
  return a;
};
$jscomp.iteratorFromArray = function(a, b) {
  $jscomp.initSymbolIterator();
  a instanceof String && (a += "");
  var c = 0, d = {next:function() {
    if (c < a.length) {
      var e = c++;
      return {value:b(e, a[e]), done:!1};
    }
    d.next = function() {
      return {done:!0, value:void 0};
    };
    return d.next();
  }};
  d[Symbol.iterator] = function() {
    return d;
  };
  return d;
};
$jscomp.polyfill = function(a, b, c, d) {
  if (b) {
    c = $jscomp.global;
    a = a.split(".");
    for (d = 0; d < a.length - 1; d++) {
      var e = a[d];
      e in c || (c[e] = {});
      c = c[e];
    }
    a = a[a.length - 1];
    d = c[a];
    b = b(d);
    b != d && null != b && $jscomp.defineProperty(c, a, {configurable:!0, writable:!0, value:b});
  }
};
var module$exports$omid$common$constants = {AdEventType:{IMPRESSION:"impression", LOADED:"loaded", GEOMETRY_CHANGE:"geometryChange", SESSION_START:"sessionStart", SESSION_ERROR:"sessionError", SESSION_FINISH:"sessionFinish", MEDIA:"media", VIDEO:"video", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange",
PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction", STATE_CHANGE:"stateChange"}, MediaEventType:{LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange", PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, ImpressionType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript",
UNSPECIFIED:"unspecified", LOADED:"loaded", BEGIN_TO_RENDER:"beginToRender", ONE_PIXEL:"onePixel", VIEWABLE:"viewable", AUDIBLE:"audible", OTHER:"other"}, ErrorType:{GENERIC:"generic", VIDEO:"video", MEDIA:"media"}, AdSessionType:{NATIVE:"native", HTML:"html", JAVASCRIPT:"javascript"}, EventOwner:{NATIVE:"native", JAVASCRIPT:"javascript", NONE:"none"}, AccessMode:{FULL:"full", DOMAIN:"domain", LIMITED:"limited"}, AppState:{BACKGROUNDED:"backgrounded", FOREGROUNDED:"foregrounded"}, Environment:{APP:"app",
WEB:"web"}, InteractionType:{CLICK:"click", INVITATION_ACCEPT:"invitationAccept"}, CreativeType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript", HTML_DISPLAY:"htmlDisplay", NATIVE_DISPLAY:"nativeDisplay", VIDEO:"video", AUDIO:"audio"}, MediaType:{DISPLAY:"display", VIDEO:"video"}, Reason:{NOT_FOUND:"notFound", HIDDEN:"hidden", BACKGROUNDED:"backgrounded", VIEWPORT:"viewport", OBSTRUCTED:"obstructed", CLIPPED:"clipped", UNMEASURABLE:"unmeasurable"}, SupportedFeatures:{CONTAINER:"clid", VIDEO:"vlid"},
VideoPosition:{PREROLL:"preroll", MIDROLL:"midroll", POSTROLL:"postroll", STANDALONE:"standalone"}, VideoPlayerState:{MINIMIZED:"minimized", COLLAPSED:"collapsed", NORMAL:"normal", EXPANDED:"expanded", FULLSCREEN:"fullscreen"}, NativeViewKeys:{X:"x", LEFT:"left", Y:"y", TOP:"top", WIDTH:"width", HEIGHT:"height", AD_SESSION_ID:"adSessionId", IS_FRIENDLY_OBSTRUCTION_FOR:"isFriendlyObstructionFor", CLIPS_TO_BOUNDS:"clipsToBounds", CHILD_VIEWS:"childViews", END_X:"endX", END_Y:"endY", OBSTRUCTIONS:"obstructions",
OBSTRUCTION_CLASS:"obstructionClass", OBSTRUCTION_PURPOSE:"obstructionPurpose", OBSTRUCTION_REASON:"obstructionReason", PIXELS:"pixels"}, MeasurementStateChangeSource:{CONTAINER:"container", CREATIVE:"creative"}, ElementMarkup:{OMID_ELEMENT_CLASS_NAME:"omid-element"}, CommunicationType:{NONE:"NONE", DIRECT:"DIRECT", POST_MESSAGE:"POST_MESSAGE"}, OmidImplementer:{OMSDK:"omsdk"}};
var module$contents$omid$common$InternalMessage_GUID_KEY = "omid_message_guid", module$contents$omid$common$InternalMessage_METHOD_KEY = "omid_message_method", module$contents$omid$common$InternalMessage_VERSION_KEY = "omid_message_version", module$contents$omid$common$InternalMessage_ARGS_KEY = "omid_message_args", module$exports$omid$common$InternalMessage = function(a, b, c, d) {
  this.guid = a;
  this.method = b;
  this.version = c;
  this.args = d;
};
module$exports$omid$common$InternalMessage.isValidSerializedMessage = function(a) {
  return !!a && void 0 !== a[module$contents$omid$common$InternalMessage_GUID_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_METHOD_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_VERSION_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_GUID_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_METHOD_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_VERSION_KEY] && (void 0 === a[module$contents$omid$common$InternalMessage_ARGS_KEY] ||
  void 0 !== a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
};
module$exports$omid$common$InternalMessage.deserialize = function(a) {
  return new module$exports$omid$common$InternalMessage(a[module$contents$omid$common$InternalMessage_GUID_KEY], a[module$contents$omid$common$InternalMessage_METHOD_KEY], a[module$contents$omid$common$InternalMessage_VERSION_KEY], a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
};
module$exports$omid$common$InternalMessage.prototype.serialize = function() {
  var a = {};
  a = (a[module$contents$omid$common$InternalMessage_GUID_KEY] = this.guid, a[module$contents$omid$common$InternalMessage_METHOD_KEY] = this.method, a[module$contents$omid$common$InternalMessage_VERSION_KEY] = this.version, a);
  void 0 !== this.args && (a[module$contents$omid$common$InternalMessage_ARGS_KEY] = this.args);
  return a;
};
var module$exports$omid$common$Communication = function(a) {
  this.to = a;
  this.communicationType_ = module$exports$omid$common$constants.CommunicationType.NONE;
};
module$exports$omid$common$Communication.prototype.sendMessage = function(a, b) {
};
module$exports$omid$common$Communication.prototype.handleMessage = function(a, b) {
  if (this.onMessage) {
    this.onMessage(a, b);
  }
};
module$exports$omid$common$Communication.prototype.serialize = function(a) {
  return JSON.stringify(a);
};
module$exports$omid$common$Communication.prototype.deserialize = function(a) {
  return JSON.parse(a);
};
module$exports$omid$common$Communication.prototype.isDirectCommunication = function() {
  return this.communicationType_ === module$exports$omid$common$constants.CommunicationType.DIRECT;
};
module$exports$omid$common$Communication.prototype.isCrossOrigin = function() {
};
var module$exports$omid$common$argsChecker = {assertTruthyString:function(a, b) {
  if (!b) {
    throw Error("Value for " + a + " is undefined, null or blank.");
  }
  if ("string" !== typeof b && !(b instanceof String)) {
    throw Error("Value for " + a + " is not a string.");
  }
  if ("" === b.trim()) {
    throw Error("Value for " + a + " is empty string.");
  }
}, assertNotNullObject:function(a, b) {
  if (null == b) {
    throw Error("Value for " + a + " is undefined or null");
  }
}, assertNumber:function(a, b) {
  if (null == b) {
    throw Error(a + " must not be null or undefined.");
  }
  if ("number" !== typeof b || isNaN(b)) {
    throw Error("Value for " + a + " is not a number");
  }
}, assertNumberBetween:function(a, b, c, d) {
  (0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
  if (b < c || b > d) {
    throw Error("Value for " + a + " is outside the range [" + c + "," + d + "]");
  }
}, assertFunction:function(a, b) {
  if (!b) {
    throw Error(a + " must not be truthy.");
  }
}, assertPositiveNumber:function(a, b) {
  (0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
  if (0 > b) {
    throw Error(a + " must be a positive number.");
  }
}};
var module$exports$omid$common$exporter = {};
function module$contents$omid$common$exporter_getOmidExports() {
  return "undefined" === typeof omidExports ? null : omidExports;
}
function module$contents$omid$common$exporter_getOrCreateName(a, b) {
  return a && (a[b] || (a[b] = {}));
}
module$exports$omid$common$exporter.packageExport = function(a, b, c) {
  if (c = void 0 === c ? module$contents$omid$common$exporter_getOmidExports() : c) {
    a = a.split("."), a.slice(0, a.length - 1).reduce(module$contents$omid$common$exporter_getOrCreateName, c)[a[a.length - 1]] = b;
  }
};
var module$exports$omid$sessionClient$Partner = function(a, b) {
  module$exports$omid$common$argsChecker.assertTruthyString("Partner.name", a);
  module$exports$omid$common$argsChecker.assertTruthyString("Partner.version", b);
  this.name = a;
  this.version = b;
};
(0,module$exports$omid$common$exporter.packageExport)("OmidSessionClient.Partner", module$exports$omid$sessionClient$Partner);
var module$exports$omid$sessionClient$VerificationScriptResource = function(a, b, c, d) {
  d = void 0 === d ? module$exports$omid$common$constants.AccessMode.FULL : d;
  module$exports$omid$common$argsChecker.assertTruthyString("VerificationScriptResource.resourceUrl", a);
  this.resourceUrl = a;
  this.vendorKey = b;
  this.verificationParameters = c;
  this.accessMode = d;
};
module$exports$omid$sessionClient$VerificationScriptResource.prototype.toJSON = function() {
  return {accessMode:this.accessMode, resourceUrl:this.resourceUrl, vendorKey:this.vendorKey, verificationParameters:this.verificationParameters};
};
(0,module$exports$omid$common$exporter.packageExport)("OmidSessionClient.VerificationScriptResource", module$exports$omid$sessionClient$VerificationScriptResource);
var module$exports$omid$sessionClient$Context = function(a, b, c, d) {
  c = void 0 === c ? null : c;
  d = void 0 === d ? null : d;
  module$exports$omid$common$argsChecker.assertNotNullObject("Context.partner", a);
  this.partner = a;
  this.verificationScriptResources = b;
  this.videoElement = this.slotElement = null;
  this.contentUrl = c;
  this.customReferenceData = d;
  this.underEvaluation = !1;
  this.serviceWindow = null;
};
module$exports$omid$sessionClient$Context.prototype.setVideoElement = function(a) {
  module$exports$omid$common$argsChecker.assertNotNullObject("Context.videoElement", a);
  this.videoElement = a;
};
module$exports$omid$sessionClient$Context.prototype.setSlotElement = function(a) {
  module$exports$omid$common$argsChecker.assertNotNullObject("Context.slotElement", a);
  this.slotElement = a;
};
module$exports$omid$sessionClient$Context.prototype.setServiceWindow = function(a) {
  module$exports$omid$common$argsChecker.assertNotNullObject("Context.serviceWindow", a);
  this.serviceWindow = a;
};
(0,module$exports$omid$common$exporter.packageExport)("OmidSessionClient.Context", module$exports$omid$sessionClient$Context);
var module$exports$omid$common$OmidGlobalProvider = {}, module$contents$omid$common$OmidGlobalProvider_globalThis = eval("this");
function module$contents$omid$common$OmidGlobalProvider_getOmidGlobal() {
  if ("undefined" !== typeof omidGlobal && omidGlobal) {
    return omidGlobal;
  }
  if ("undefined" !== typeof global && global) {
    return global;
  }
  if ("undefined" !== typeof window && window) {
    return window;
  }
  if ("undefined" !== typeof module$contents$omid$common$OmidGlobalProvider_globalThis && module$contents$omid$common$OmidGlobalProvider_globalThis) {
    return module$contents$omid$common$OmidGlobalProvider_globalThis;
  }
  throw Error("Could not determine global object context.");
}
module$exports$omid$common$OmidGlobalProvider.omidGlobal = module$contents$omid$common$OmidGlobalProvider_getOmidGlobal();
var module$contents$omid$sessionClient$OmidJsSessionInterface_ExportedNodeKeys = {ROOT:"omidSessionInterface", AD_EVENTS:"adEvents", MEDIA_EVENTS:"mediaEvents"}, module$contents$omid$sessionClient$OmidJsSessionInterface_MethodNameMap = {sessionError:"reportError"}, module$contents$omid$sessionClient$OmidJsSessionInterface_MediaEventMethodNames = Object.keys(module$exports$omid$common$constants.MediaEventType).map(function(a) {
  return module$exports$omid$common$constants.MediaEventType[a];
}), module$contents$omid$sessionClient$OmidJsSessionInterface_AdEventMethodNames = ["impressionOccurred"], module$exports$omid$sessionClient$OmidJsSessionInterface = function(a) {
  a = void 0 === a ? module$exports$omid$common$OmidGlobalProvider.omidGlobal : a;
  this.interfaceRoot_ = a[module$contents$omid$sessionClient$OmidJsSessionInterface_ExportedNodeKeys.ROOT];
};
module$exports$omid$sessionClient$OmidJsSessionInterface.prototype.isSupported = function() {
  return null != this.interfaceRoot_;
};
module$exports$omid$sessionClient$OmidJsSessionInterface.prototype.sendMessage = function(a, b, c) {
  "registerSessionObserver" == a && (c = [b]);
  module$contents$omid$sessionClient$OmidJsSessionInterface_MethodNameMap[a] && (a = module$contents$omid$sessionClient$OmidJsSessionInterface_MethodNameMap[a]);
  b = this.interfaceRoot_;
  0 <= module$contents$omid$sessionClient$OmidJsSessionInterface_AdEventMethodNames.indexOf(a) && (b = b[module$contents$omid$sessionClient$OmidJsSessionInterface_ExportedNodeKeys.AD_EVENTS]);
  0 <= module$contents$omid$sessionClient$OmidJsSessionInterface_MediaEventMethodNames.indexOf(a) && (b = b[module$contents$omid$sessionClient$OmidJsSessionInterface_ExportedNodeKeys.MEDIA_EVENTS]);
  b = b[a];
  if (!b) {
    throw Error("Unrecognized method name: " + a + ".");
  }
  b.apply(null, $jscomp.arrayFromIterable(c));
};
var module$exports$omid$common$Rectangle = function(a, b, c, d) {
  this.x = a;
  this.y = b;
  this.width = c;
  this.height = d;
};
var module$exports$omid$common$logger = {error:function(a) {
  for (var b = [], c = 0; c < arguments.length; ++c) {
    b[c - 0] = arguments[c];
  }
  module$contents$omid$common$logger_executeLog(function() {
    throw new (Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat($jscomp.arrayFromIterable(b))));
  }, function() {
    return console.error.apply(console, $jscomp.arrayFromIterable(b));
  });
}, debug:function(a) {
  for (var b = [], c = 0; c < arguments.length; ++c) {
    b[c - 0] = arguments[c];
  }
  module$contents$omid$common$logger_executeLog(function() {
  }, function() {
    return console.error.apply(console, $jscomp.arrayFromIterable(b));
  });
}};
function module$contents$omid$common$logger_executeLog(a, b) {
  "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b();
}
;var module$exports$omid$common$eventTypedefs = {};
var module$exports$omid$common$version = {ApiVersion:"1.0", Version:"1.3.20-Vrtcal"};
var module$exports$omid$common$VersionUtils = {}, module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER = 3;
module$exports$omid$common$VersionUtils.isValidVersion = function(a) {
  return /\d+\.\d+\.\d+(-.*)?/.test(a);
};
module$exports$omid$common$VersionUtils.versionGreaterOrEqual = function(a, b) {
  a = a.split("-")[0].split(".");
  b = b.split("-")[0].split(".");
  for (var c = 0; c < module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER; c++) {
    var d = parseInt(a[c], 10), e = parseInt(b[c], 10);
    if (d > e) {
      break;
    } else {
      if (d < e) {
        return !1;
      }
    }
  }
  return !0;
};
var module$exports$omid$common$ArgsSerDe = {}, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION = "1.0.3";
module$exports$omid$common$ArgsSerDe.serializeMessageArgs = function(a, b) {
  return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b : JSON.stringify(b);
};
module$exports$omid$common$ArgsSerDe.deserializeMessageArgs = function(a, b) {
  return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b ? b : [] : b && "string" === typeof b ? JSON.parse(b) : [];
};
var module$exports$omid$common$guid = {generateGuid:function() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
    var b = 16 * Math.random() | 0;
    a = "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
    return a;
  });
}};
var module$exports$omid$common$windowUtils = {};
function module$contents$omid$common$windowUtils_isValidWindow(a) {
  return null != a && "undefined" !== typeof a.top && null != a.top;
}
module$exports$omid$common$windowUtils.isCrossOrigin = function(a) {
  if (a === module$exports$omid$common$OmidGlobalProvider.omidGlobal) {
    return !1;
  }
  try {
    if ("undefined" === typeof a.location.hostname) {
      return !0;
    }
    module$contents$omid$common$windowUtils_isSameOriginForIE(a);
  } catch (b) {
    return !0;
  }
  return !1;
};
function module$contents$omid$common$windowUtils_isSameOriginForIE(a) {
  return "" === a.x || "" !== a.x;
}
module$exports$omid$common$windowUtils.resolveGlobalContext = function(a) {
  "undefined" === typeof a && "undefined" !== typeof window && window && (a = window);
  return module$contents$omid$common$windowUtils_isValidWindow(a) ? a : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
};
module$exports$omid$common$windowUtils.resolveTopWindowContext = function(a) {
  return module$contents$omid$common$windowUtils_isValidWindow(a) ? a.top : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
};
module$exports$omid$common$windowUtils.evaluatePageUrl = function(a) {
  if (!module$contents$omid$common$windowUtils_isValidWindow(a)) {
    return null;
  }
  try {
    var b = a.top;
    return (0,module$exports$omid$common$windowUtils.isCrossOrigin)(b) ? null : b.location.href;
  } catch (c) {
    return null;
  }
};
var module$exports$omid$common$DirectCommunication = function(a) {
  module$exports$omid$common$Communication.call(this, a);
  this.communicationType_ = module$exports$omid$common$constants.CommunicationType.DIRECT;
  this.handleExportedMessage = module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage.bind(this);
};
$jscomp.inherits(module$exports$omid$common$DirectCommunication, module$exports$omid$common$Communication);
module$exports$omid$common$DirectCommunication.prototype.sendMessage = function(a, b) {
  b = void 0 === b ? this.to : b;
  if (!b) {
    throw Error("Message destination must be defined at construction time or when sending the message.");
  }
  b.handleExportedMessage(a.serialize(), this);
};
module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage = function(a, b) {
  module$exports$omid$common$InternalMessage.isValidSerializedMessage(a) && this.handleMessage(module$exports$omid$common$InternalMessage.deserialize(a), b);
};
module$exports$omid$common$DirectCommunication.prototype.isCrossOrigin = function() {
  return !1;
};
var module$exports$omid$common$PostMessageCommunication = function(a, b) {
  b = void 0 === b ? module$exports$omid$common$OmidGlobalProvider.omidGlobal : b;
  module$exports$omid$common$Communication.call(this, b);
  var c = this;
  this.communicationType_ = module$exports$omid$common$constants.CommunicationType.POST_MESSAGE;
  a.addEventListener("message", function(a) {
    if ("object" === typeof a.data) {
      var b = a.data;
      module$exports$omid$common$InternalMessage.isValidSerializedMessage(b) && (b = module$exports$omid$common$InternalMessage.deserialize(b), a.source && c.handleMessage(b, a.source));
    }
  });
};
$jscomp.inherits(module$exports$omid$common$PostMessageCommunication, module$exports$omid$common$Communication);
module$exports$omid$common$PostMessageCommunication.isCompatibleContext = function(a) {
  return !!(a && a.addEventListener && a.postMessage);
};
module$exports$omid$common$PostMessageCommunication.prototype.sendMessage = function(a, b) {
  b = void 0 === b ? this.to : b;
  if (!b) {
    throw Error("Message destination must be defined at construction time or when sending the message.");
  }
  b.postMessage(a.serialize(), "*");
};
module$exports$omid$common$PostMessageCommunication.prototype.isCrossOrigin = function() {
  return this.to ? (0,module$exports$omid$common$windowUtils.isCrossOrigin)(this.to) : !0;
};
var module$exports$omid$common$DetectOmid = {OMID_PRESENT_FRAME_NAME:"omid_v1_present", isOmidPresent:function(a) {
  try {
    return a.frames ? !!a.frames[module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME] : !1;
  } catch (b) {
    return !1;
  }
}, declareOmidPresence:function(a) {
  a.frames && a.document && (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME in a.frames || (null == a.document.body && module$exports$omid$common$DetectOmid.isMutationObserverAvailable_(a) ? module$exports$omid$common$DetectOmid.registerMutationObserver_(a) : a.document.body ? module$exports$omid$common$DetectOmid.appendPresenceIframe_(a) : a.document.write('<iframe style="display:none" id="' + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + '" name="') + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME +
  '"></iframe>'))));
}, appendPresenceIframe_:function(a) {
  var b = a.document.createElement("iframe");
  b.id = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
  b.name = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
  b.style.display = "none";
  a.document.body.appendChild(b);
}, isMutationObserverAvailable_:function(a) {
  return "MutationObserver" in a;
}, registerMutationObserver_:function(a) {
  var b = new MutationObserver(function(c) {
    c.forEach(function(c) {
      "BODY" === c.addedNodes[0].nodeName && (module$exports$omid$common$DetectOmid.appendPresenceIframe_(a), b.disconnect());
    });
  });
  b.observe(a.document.documentElement, {childList:!0});
}};
var module$exports$omid$common$serviceCommunication = {}, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME = ["omid", "v1_SessionServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME = ["omid", "v1_VerificationServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME = ["omidVerificationProperties", "serviceWindow"];
function module$contents$omid$common$serviceCommunication_getValueForKeypath(a, b) {
  return b.reduce(function(a, b) {
    return a && a[b];
  }, a);
}
function module$contents$omid$common$serviceCommunication_startServiceCommunication(a, b, c, d) {
  if (!(0,module$exports$omid$common$windowUtils.isCrossOrigin)(b)) {
    try {
      var e = module$contents$omid$common$serviceCommunication_getValueForKeypath(b, c);
      if (e) {
        return new module$exports$omid$common$DirectCommunication(e);
      }
    } catch (f) {
    }
  }
  return d(b) ? new module$exports$omid$common$PostMessageCommunication(a, b) : null;
}
function module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, b, c, d) {
  b = $jscomp.makeIterator(b);
  for (var e = b.next(); !e.done; e = b.next()) {
    if (e = module$contents$omid$common$serviceCommunication_startServiceCommunication(a, e.value, c, d)) {
      return e;
    }
  }
  return null;
}
module$exports$omid$common$serviceCommunication.startSessionServiceCommunication = function(a, b, c) {
  c = void 0 === c ? module$exports$omid$common$DetectOmid.isOmidPresent : c;
  var d = [a, (0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(a)];
  b && d.unshift(b);
  return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, d, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME, c);
};
module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication = function(a, b) {
  b = void 0 === b ? module$exports$omid$common$DetectOmid.isOmidPresent : b;
  var c = [], d = module$contents$omid$common$serviceCommunication_getValueForKeypath(a, module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME);
  d && c.push(d);
  c.push((0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(a));
  return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, c, module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME, b);
};
var module$contents$omid$sessionClient$AdSession_SESSION_CLIENT_VERSION = module$exports$omid$common$version.Version, module$exports$omid$sessionClient$AdSession = function(a, b, c) {
  module$exports$omid$common$argsChecker.assertNotNullObject("AdSession.context", a);
  this.context_ = a;
  this.impressionOccurred_ = !1;
  var d = this.context_.serviceWindow || void 0;
  this.communication_ = b || (0,module$exports$omid$common$serviceCommunication.startSessionServiceCommunication)((0,module$exports$omid$common$windowUtils.resolveGlobalContext)(), d);
  this.sessionInterface_ = c || new module$exports$omid$sessionClient$OmidJsSessionInterface;
  this.isSessionRunning_ = this.hasMediaEvents_ = this.hasAdEvents_ = !1;
  this.impressionType_ = this.creativeType_ = null;
  this.creativeLoaded_ = !1;
  this.callbackMap_ = {};
  this.communication_ && (this.communication_.onMessage = this.handleInternalMessage_.bind(this));
  this.setClientInfo_();
  this.injectVerificationScripts_(a.verificationScriptResources);
  this.sendSlotElement_(a.slotElement);
  this.sendVideoElement_(a.videoElement);
  this.sendContentUrl_(a.contentUrl);
  this.watchSessionEvents_();
};
module$exports$omid$sessionClient$AdSession.prototype.setCreativeType = function(a) {
  if (a === module$exports$omid$common$constants.CreativeType.DEFINED_BY_JAVASCRIPT) {
    throw Error("Creative type cannot be redefined with value " + module$exports$omid$common$constants.CreativeType.DEFINED_BY_JAVASCRIPT);
  }
  if (this.impressionOccurred_) {
    throw Error("Impression has already occurred");
  }
  if (this.creativeLoaded_) {
    throw Error("Creative has already loaded");
  }
  if (this.creativeType_ && this.creativeType_ !== module$exports$omid$common$constants.CreativeType.DEFINED_BY_JAVASCRIPT) {
    throw Error("Creative type cannot be redefined");
  }
  if (void 0 === this.creativeType_) {
    throw Error("Native integration is using OMID 1.2 or earlier");
  }
  this.sendOneWayMessage("setCreativeType", a);
  this.creativeType_ = a;
};
module$exports$omid$sessionClient$AdSession.prototype.setImpressionType = function(a) {
  if (a === module$exports$omid$common$constants.ImpressionType.DEFINED_BY_JAVASCRIPT) {
    throw Error("Impression type cannot be redefined with value " + module$exports$omid$common$constants.ImpressionType.DEFINED_BY_JAVASCRIPT);
  }
  if (this.impressionOccurred_) {
    throw Error("Impression has already occurred");
  }
  if (this.creativeLoaded_) {
    throw Error("Creative has already loaded");
  }
  if (this.impressionType_ && this.impressionType_ !== module$exports$omid$common$constants.ImpressionType.DEFINED_BY_JAVASCRIPT) {
    throw Error("Impression type cannot be redefined");
  }
  if (void 0 === this.impressionType_) {
    throw Error("Native integration is using OMID 1.2 or earlier");
  }
  this.sendOneWayMessage("setImpressionType", a);
  this.impressionType_ = a;
};
module$exports$omid$sessionClient$AdSession.prototype.isSupported = function() {
  return !!this.communication_ || this.sessionInterface_.isSupported();
};
module$exports$omid$sessionClient$AdSession.prototype.isSendingElementsSupported_ = function() {
  return this.communication_ ? this.communication_.isDirectCommunication() : this.sessionInterface_.isSupported();
};
module$exports$omid$sessionClient$AdSession.prototype.registerSessionObserver = function(a) {
  this.sendMessage("registerSessionObserver", a);
};
module$exports$omid$sessionClient$AdSession.prototype.start = function() {
  this.sendOneWayMessage("startSession", {customReferenceData:this.context_.customReferenceData, underEvaluation:this.context_.underEvaluation});
};
module$exports$omid$sessionClient$AdSession.prototype.finish = function() {
  this.sendOneWayMessage("finishSession");
};
module$exports$omid$sessionClient$AdSession.prototype.error = function(a, b) {
  this.sendOneWayMessage("sessionError", a, b);
};
module$exports$omid$sessionClient$AdSession.prototype.registerAdEvents = function() {
  if (this.hasAdEvents_) {
    throw Error("AdEvents already registered.");
  }
  this.hasAdEvents_ = !0;
  this.sendOneWayMessage("registerAdEvents");
};
module$exports$omid$sessionClient$AdSession.prototype.registerMediaEvents = function() {
  if (this.hasMediaEvents_) {
    throw Error("MediaEvents already registered.");
  }
  this.hasMediaEvents_ = !0;
  this.sendOneWayMessage("registerMediaEvents");
};
module$exports$omid$sessionClient$AdSession.prototype.sendOneWayMessage = function(a, b) {
  for (var c = [], d = 1; d < arguments.length; ++d) {
    c[d - 1] = arguments[d];
  }
  this.sendMessage.apply(this, [a, null].concat($jscomp.arrayFromIterable(c)));
};
module$exports$omid$sessionClient$AdSession.prototype.sendMessage = function(a, b, c) {
  for (var d = [], e = 2; e < arguments.length; ++e) {
    d[e - 2] = arguments[e];
  }
  this.communication_ ? this.sendInternalMessage_(a, b, d) : this.sessionInterface_.isSupported() && this.sendInterfaceMessage_(a, b, d);
};
module$exports$omid$sessionClient$AdSession.prototype.sendInternalMessage_ = function(a, b, c) {
  var d = (0,module$exports$omid$common$guid.generateGuid)();
  b && (this.callbackMap_[d] = b);
  a = new module$exports$omid$common$InternalMessage(d, "SessionService." + a, module$contents$omid$sessionClient$AdSession_SESSION_CLIENT_VERSION, (0,module$exports$omid$common$ArgsSerDe.serializeMessageArgs)(module$contents$omid$sessionClient$AdSession_SESSION_CLIENT_VERSION, c));
  this.communication_.sendMessage(a);
};
module$exports$omid$sessionClient$AdSession.prototype.handleInternalMessage_ = function(a, b) {
  b = a.method;
  var c = a.guid;
  a = a.args;
  if ("response" === b && this.callbackMap_[c]) {
    var d = (0,module$exports$omid$common$ArgsSerDe.deserializeMessageArgs)(module$contents$omid$sessionClient$AdSession_SESSION_CLIENT_VERSION, a);
    this.callbackMap_[c].apply(this, d);
  }
  "error" === b && window.console && module$exports$omid$common$logger.error(a);
};
module$exports$omid$sessionClient$AdSession.prototype.sendInterfaceMessage_ = function(a, b, c) {
  try {
    this.sessionInterface_.sendMessage(a, b, c);
  } catch (d) {
    module$exports$omid$common$logger.error("Failed to communicate with SessionInterface with error:"), module$exports$omid$common$logger.error(d);
  }
};
module$exports$omid$sessionClient$AdSession.prototype.assertSessionRunning = function() {
  if (!this.isSessionRunning_) {
    throw Error("Session not started.");
  }
};
module$exports$omid$sessionClient$AdSession.prototype.impressionOccurred = function() {
  if (this.creativeType_ === module$exports$omid$common$constants.CreativeType.DEFINED_BY_JAVASCRIPT) {
    throw Error("Creative type has not been redefined");
  }
  if (this.impressionType_ === module$exports$omid$common$constants.ImpressionType.DEFINED_BY_JAVASCRIPT) {
    throw Error("Impression type has not been redefined");
  }
  this.impressionOccurred_ = !0;
};
module$exports$omid$sessionClient$AdSession.prototype.creativeLoaded = function() {
  if (this.creativeType_ === module$exports$omid$common$constants.CreativeType.DEFINED_BY_JAVASCRIPT) {
    throw Error("Creative type has not been redefined");
  }
  if (this.impressionType_ === module$exports$omid$common$constants.ImpressionType.DEFINED_BY_JAVASCRIPT) {
    throw Error("Impression type has not been redefined");
  }
  this.creativeLoaded_ = !0;
};
module$exports$omid$sessionClient$AdSession.prototype.setClientInfo_ = function() {
  this.sendOneWayMessage("setClientInfo", module$contents$omid$sessionClient$AdSession_SESSION_CLIENT_VERSION, this.context_.partner.name, this.context_.partner.version);
};
module$exports$omid$sessionClient$AdSession.prototype.injectVerificationScripts_ = function(a) {
  a && (a = a.map(function(a) {
    return a.toJSON();
  }), this.sendOneWayMessage("injectVerificationScriptResources", a));
};
module$exports$omid$sessionClient$AdSession.prototype.sendSlotElement_ = function(a) {
  this.sendElement_(a, "setSlotElement");
};
module$exports$omid$sessionClient$AdSession.prototype.sendVideoElement_ = function(a) {
  this.sendElement_(a, "setVideoElement");
};
module$exports$omid$sessionClient$AdSession.prototype.sendElement_ = function(a, b) {
  a && (this.isSendingElementsSupported_() ? this.sendOneWayMessage(b, a) : this.error(module$exports$omid$common$constants.ErrorType.GENERIC, "Session Client " + b + " called when communication is cross-origin"));
};
module$exports$omid$sessionClient$AdSession.prototype.sendContentUrl_ = function(a) {
  a && this.sendOneWayMessage("setContentUrl", a);
};
module$exports$omid$sessionClient$AdSession.prototype.setElementBounds = function(a) {
  module$exports$omid$common$argsChecker.assertNotNullObject("AdSession.elementBounds", a);
  this.sendOneWayMessage("setElementBounds", a);
};
module$exports$omid$sessionClient$AdSession.prototype.watchSessionEvents_ = function() {
  var a = this;
  this.registerSessionObserver(function(b) {
    b.type === module$exports$omid$common$constants.AdEventType.SESSION_START && (a.isSessionRunning_ = !0, a.creativeType_ = b.data.creativeType, a.impressionType_ = b.data.impressionType);
    b.type === module$exports$omid$common$constants.AdEventType.SESSION_FINISH && (a.isSessionRunning_ = !1);
  });
};
(0,module$exports$omid$common$exporter.packageExport)("OmidSessionClient.AdSession", module$exports$omid$sessionClient$AdSession);
var module$exports$omid$common$VastProperties = function(a, b, c, d) {
  this.isSkippable = a;
  this.skipOffset = b;
  this.isAutoPlay = c;
  this.position = d;
};
module$exports$omid$common$VastProperties.prototype.toJSON = function() {
  return {isSkippable:this.isSkippable, skipOffset:this.skipOffset, isAutoPlay:this.isAutoPlay, position:this.position};
};
var module$exports$omid$sessionClient$AdEvents = function(a) {
  module$exports$omid$common$argsChecker.assertNotNullObject("AdEvents.adSession", a);
  try {
    a.registerAdEvents(), this.adSession = a;
  } catch (b) {
    throw Error("AdSession already has an ad events instance registered");
  }
};
module$exports$omid$sessionClient$AdEvents.prototype.impressionOccurred = function() {
  this.adSession.assertSessionRunning();
  this.adSession.impressionOccurred();
  this.adSession.sendOneWayMessage("impressionOccurred");
};
module$exports$omid$sessionClient$AdEvents.prototype.loaded = function(a) {
  a = void 0 === a ? null : a;
  this.adSession.creativeLoaded();
  a ? this.adSession.sendOneWayMessage("loaded", a.toJSON()) : this.adSession.sendOneWayMessage("loaded");
};
(0,module$exports$omid$common$exporter.packageExport)("OmidSessionClient.AdEvents", module$exports$omid$sessionClient$AdEvents);
var module$exports$omid$sessionClient$MediaEvents = function(a) {
  module$exports$omid$common$argsChecker.assertNotNullObject("MediaEvents.adSession", a);
  try {
    a.registerMediaEvents(), this.adSession = a;
  } catch (b) {
    throw Error("AdSession already has a media events instance registered");
  }
};
module$exports$omid$sessionClient$MediaEvents.prototype.start = function(a, b) {
  module$exports$omid$common$argsChecker.assertNumber("MediaEvents.start.duration", a);
  module$exports$omid$common$argsChecker.assertNumberBetween("MediaEvents.start.mediaPlayerVolume", b, 0, 1);
  this.adSession.sendOneWayMessage("start", a, b);
};
module$exports$omid$sessionClient$MediaEvents.prototype.firstQuartile = function() {
  this.adSession.sendOneWayMessage("firstQuartile");
};
module$exports$omid$sessionClient$MediaEvents.prototype.midpoint = function() {
  this.adSession.sendOneWayMessage("midpoint");
};
module$exports$omid$sessionClient$MediaEvents.prototype.thirdQuartile = function() {
  this.adSession.sendOneWayMessage("thirdQuartile");
};
module$exports$omid$sessionClient$MediaEvents.prototype.complete = function() {
  this.adSession.sendOneWayMessage("complete");
};
module$exports$omid$sessionClient$MediaEvents.prototype.pause = function() {
  this.adSession.sendOneWayMessage("pause");
};
module$exports$omid$sessionClient$MediaEvents.prototype.resume = function() {
  this.adSession.sendOneWayMessage("resume");
};
module$exports$omid$sessionClient$MediaEvents.prototype.bufferStart = function() {
  this.adSession.sendOneWayMessage("bufferStart");
};
module$exports$omid$sessionClient$MediaEvents.prototype.bufferFinish = function() {
  this.adSession.sendOneWayMessage("bufferFinish");
};
module$exports$omid$sessionClient$MediaEvents.prototype.skipped = function() {
  this.adSession.sendOneWayMessage("skipped");
};
module$exports$omid$sessionClient$MediaEvents.prototype.volumeChange = function(a) {
  module$exports$omid$common$argsChecker.assertNumberBetween("MediaEvents.volumeChange.mediaPlayerVolume", a, 0, 1);
  this.adSession.sendOneWayMessage("volumeChange", a);
};
module$exports$omid$sessionClient$MediaEvents.prototype.playerStateChange = function(a) {
  module$exports$omid$common$argsChecker.assertNotNullObject("MediaEvents.playerStateChange.playerState", a);
  this.adSession.sendOneWayMessage("playerStateChange", a);
};
module$exports$omid$sessionClient$MediaEvents.prototype.adUserInteraction = function(a) {
  module$exports$omid$common$argsChecker.assertNotNullObject("MediaEvents.adUserInteraction.interactionType", a);
  this.adSession.sendOneWayMessage("adUserInteraction", a);
};
(0,module$exports$omid$common$exporter.packageExport)("OmidSessionClient.MediaEvents", module$exports$omid$sessionClient$MediaEvents);
var module$exports$omid$sessionClient$OmidVersion = function(a, b) {
  module$exports$omid$common$argsChecker.assertTruthyString("OmidVersion.semanticVersion", a);
  module$exports$omid$common$argsChecker.assertTruthyString("OmidVersion.apiLevel", b);
};
(0,module$exports$omid$common$exporter.packageExport)("OmidSessionClient.OmidVersion", module$exports$omid$sessionClient$OmidVersion);
var module$exports$omid$sessionClient$VastPropertiesExports = {};
(0,module$exports$omid$common$exporter.packageExport)("OmidSessionClient.VastProperties", module$exports$omid$common$VastProperties);

}, typeof exports === 'undefined' ? undefined : exports));
