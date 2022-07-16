var Aa=Object.defineProperty;var Ca=(a,e,t)=>e in a?Aa(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var ct=(a,e,t)=>(Ca(a,typeof e!="symbol"?e+"":e,t),t);const La=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}};La();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tr="142",vn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Da=0,zr=1,Ra=2,Ks=1,Pa=2,Kn=3,Qn=0,Mt=1,ft=2,Ia=1,jt=0,On=1,Or=2,Ur=3,Br=4,Fa=5,Nn=100,Na=101,za=102,Gr=103,kr=104,Oa=200,Ua=201,Ba=202,Ga=203,Js=204,Qs=205,ka=206,Va=207,Ha=208,Wa=209,qa=210,Xa=0,Ya=1,ja=2,xr=3,Za=4,$a=5,Ka=6,Ja=7,ea=0,Qa=1,eo=2,Ut=0,to=1,no=2,io=3,ro=4,so=5,ta=300,Bn=301,Gn=302,vr=303,Mr=304,Ri=306,yr=1e3,vt=1001,br=1002,tt=1003,Vr=1004,Hr=1005,dt=1006,ao=1007,Pi=1008,cn=1009,oo=1010,lo=1011,na=1012,co=1013,nn=1014,rn=1015,ei=1016,ho=1017,uo=1018,Un=1020,fo=1021,po=1022,Ct=1023,mo=1024,go=1025,an=1026,kn=1027,_o=1028,xo=1029,vo=1030,Mo=1031,yo=1033,Ui=33776,Bi=33777,Gi=33778,ki=33779,Wr=35840,qr=35841,Xr=35842,Yr=35843,bo=36196,jr=37492,Zr=37496,$r=37808,Kr=37809,Jr=37810,Qr=37811,es=37812,ts=37813,ns=37814,is=37815,rs=37816,ss=37817,as=37818,os=37819,ls=37820,cs=37821,hs=36492,hn=3e3,ze=3001,So=3200,wo=3201,Eo=0,To=1,Nt="srgb",sn="srgb-linear",Vi=7680,Ao=519,us=35044,fs="300 es",Sr=1035;class pn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hi=Math.PI/180,ds=180/Math.PI;function ti(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[a&255]+je[a>>8&255]+je[a>>16&255]+je[a>>24&255]+"-"+je[e&255]+je[e>>8&255]+"-"+je[e>>16&15|64]+je[e>>24&255]+"-"+je[t&63|128]+je[t>>8&255]+"-"+je[t>>16&255]+je[t>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function nt(a,e,t){return Math.max(e,Math.min(t,a))}function Co(a,e){return(a%e+e)%e}function Wi(a,e,t){return(1-t)*a+t*e}function ps(a){return(a&a-1)===0&&a!==0}function wr(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,s,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],m=n[5],x=n[8],p=i[0],h=i[3],_=i[6],E=i[1],C=i[4],T=i[7],b=i[2],L=i[5],F=i[8];return r[0]=o*p+s*E+c*b,r[3]=o*h+s*C+c*L,r[6]=o*_+s*T+c*F,r[1]=l*p+u*E+f*b,r[4]=l*h+u*C+f*L,r[7]=l*_+u*T+f*F,r[2]=d*p+m*E+x*b,r[5]=d*h+m*C+x*L,r[8]=d*_+m*T+x*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*s*l-n*r*u+n*s*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],f=u*o-s*l,d=s*c-u*r,m=l*r-o*c,x=t*f+n*d+i*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=f*p,e[1]=(i*l-u*n)*p,e[2]=(s*n-i*o)*p,e[3]=d*p,e[4]=(u*t-i*c)*p,e[5]=(i*r-s*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,s){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*s)+o+e,-i*l,i*c,-i*(-l*o+c*s)+s+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],s=i[6],c=i[1],l=i[4],u=i[7];return i[0]=t*r+n*c,i[3]=t*o+n*l,i[6]=t*s+n*u,i[1]=-n*r+t*c,i[4]=-n*o+t*l,i[7]=-n*s+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function ia(a){for(let e=a.length-1;e>=0;--e)if(a[e]>65535)return!0;return!1}function Ci(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function on(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ti(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const qi={[Nt]:{[sn]:on},[sn]:{[Nt]:Ti}},mt={legacyMode:!0,get workingColorSpace(){return sn},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(qi[e]&&qi[e][t]!==void 0){const n=qi[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},ra={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ve={r:0,g:0,b:0},gt={h:0,s:0,l:0},si={h:0,s:0,l:0};function Xi(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function ai(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=sn){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=sn){if(e=Co(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Xi(o,r,e+1/3),this.g=Xi(o,r,e),this.b=Xi(o,r,e-1/3)}return mt.toWorkingColorSpace(this,i),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],s=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,mt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,mt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const c=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(c,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,mt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,mt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Nt){const n=ra[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=on(e.r),this.g=on(e.g),this.b=on(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return mt.fromWorkingColorSpace(ai(this,Ve),e),nt(Ve.r*255,0,255)<<16^nt(Ve.g*255,0,255)<<8^nt(Ve.b*255,0,255)<<0}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=sn){mt.fromWorkingColorSpace(ai(this,Ve),t);const n=Ve.r,i=Ve.g,r=Ve.b,o=Math.max(n,i,r),s=Math.min(n,i,r);let c,l;const u=(s+o)/2;if(s===o)c=0,l=0;else{const f=o-s;switch(l=u<=.5?f/(o+s):f/(2-o-s),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=sn){return mt.fromWorkingColorSpace(ai(this,Ve),t),e.r=Ve.r,e.g=Ve.g,e.b=Ve.b,e}getStyle(e=Nt){return mt.fromWorkingColorSpace(ai(this,Ve),e),e!==Nt?`color(${e} ${Ve.r} ${Ve.g} ${Ve.b})`:`rgb(${Ve.r*255|0},${Ve.g*255|0},${Ve.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(gt),gt.h+=e,gt.s+=t,gt.l+=n,this.setHSL(gt.h,gt.s,gt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gt),e.getHSL(si);const n=Wi(gt.h,si.h,t),i=Wi(gt.s,si.s,t),r=Wi(gt.l,si.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Fe.NAMES=ra;let yn;class sa{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yn===void 0&&(yn=Ci("canvas")),yn.width=e.width,yn.height=e.height;const n=yn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=yn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Ci("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=on(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(on(t[n]/255)*255):t[n]=on(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class aa{constructor(e=null){this.isSource=!0,this.uuid=ti(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,s=i.length;o<s;o++)i[o].isDataTexture?r.push(Yi(i[o].image)):r.push(Yi(i[o]))}else r=Yi(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Yi(a){return typeof HTMLImageElement!="undefined"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&a instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&a instanceof ImageBitmap?sa.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lo=0;class yt extends pn{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=vt,i=vt,r=dt,o=Pi,s=Ct,c=cn,l=1,u=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lo++}),this.uuid=ti(),this.name="",this.source=new aa(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ta)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yr:e.x=e.x-Math.floor(e.x);break;case vt:e.x=e.x<0?0:1;break;case br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yr:e.y=e.y-Math.floor(e.y);break;case vt:e.y=e.y<0?0:1;break;case br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=ta;class qe{constructor(e=0,t=0,n=0,i=1){qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],m=c[5],x=c[9],p=c[2],h=c[6],_=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-p)<.01&&Math.abs(x-h)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+p)<.1&&Math.abs(x+h)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(l+1)/2,T=(m+1)/2,b=(_+1)/2,L=(u+d)/4,F=(f+p)/4,y=(x+h)/4;return C>T&&C>b?C<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(C),i=L/n,r=F/n):T>b?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=L/i,r=y/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=F/r,i=y/r),this.set(n,i,r,t),this}let E=Math.sqrt((h-x)*(h-x)+(f-p)*(f-p)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(h-x)/E,this.y=(f-p)/E,this.z=(d-u)/E,this.w=Math.acos((l+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class un extends pn{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:dt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new aa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oa extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,o,s){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3];const d=r[o+0],m=r[o+1],x=r[o+2],p=r[o+3];if(s===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=p;return}if(f!==p||c!==d||l!==m||u!==x){let h=1-s;const _=c*d+l*m+u*x+f*p,E=_>=0?1:-1,C=1-_*_;if(C>Number.EPSILON){const b=Math.sqrt(C),L=Math.atan2(b,_*E);h=Math.sin(h*L)/b,s=Math.sin(s*L)/b}const T=s*E;if(c=c*h+d*T,l=l*h+m*T,u=u*h+x*T,f=f*h+p*T,h===1-s){const b=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=b,l*=b,u*=b,f*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){const s=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=r[o],d=r[o+1],m=r[o+2],x=r[o+3];return e[t]=s*x+u*f+c*m-l*d,e[t+1]=c*x+u*d+l*f-s*m,e[t+2]=l*x+u*m+s*d-c*f,e[t+3]=u*x-s*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,o=e._order,s=Math.cos,c=Math.sin,l=s(n/2),u=s(i/2),f=s(r/2),d=c(n/2),m=c(i/2),x=c(r/2);switch(o){case"XYZ":this._x=d*u*f+l*m*x,this._y=l*m*f-d*u*x,this._z=l*u*x+d*m*f,this._w=l*u*f-d*m*x;break;case"YXZ":this._x=d*u*f+l*m*x,this._y=l*m*f-d*u*x,this._z=l*u*x-d*m*f,this._w=l*u*f+d*m*x;break;case"ZXY":this._x=d*u*f-l*m*x,this._y=l*m*f+d*u*x,this._z=l*u*x+d*m*f,this._w=l*u*f-d*m*x;break;case"ZYX":this._x=d*u*f-l*m*x,this._y=l*m*f+d*u*x,this._z=l*u*x-d*m*f,this._w=l*u*f+d*m*x;break;case"YZX":this._x=d*u*f+l*m*x,this._y=l*m*f+d*u*x,this._z=l*u*x-d*m*f,this._w=l*u*f-d*m*x;break;case"XZY":this._x=d*u*f-l*m*x,this._y=l*m*f-d*u*x,this._z=l*u*x+d*m*f,this._w=l*u*f+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],s=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+s+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>s&&n>f){const m=2*Math.sqrt(1+n-s-f);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(s>f){const m=2*Math.sqrt(1+s-n-f);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-s);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,s=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*s+i*l-r*c,this._y=i*u+o*c+r*s-n*l,this._z=r*u+o*l+n*c-i*s,this._w=o*u-n*s-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let s=o*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-s*s;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,s),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ms.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ms.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,s=e.z,c=e.w,l=c*t+o*i-s*n,u=c*n+s*t-r*i,f=c*i+r*n-o*t,d=-r*t-o*n-s*i;return this.x=l*c+d*-r+u*-s-f*-o,this.y=u*c+d*-o+f*-r-l*-s,this.z=f*c+d*-s+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,s=t.y,c=t.z;return this.x=i*c-r*s,this.y=r*o-n*c,this.z=n*s-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ji.copy(this).projectOnVector(e),this.sub(ji)}reflect(e){return this.sub(ji.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ji=new D,ms=new fn;class ni{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],f=e[c+1],d=e[c+2];u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>r&&(r=u),f>o&&(o=f),d>s&&(s=d)}return this.min.set(t,n,i),this.max.set(r,o,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),f=e.getY(c),d=e.getZ(c);u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>r&&(r=u),f>o&&(o=f),d>s&&(s=d)}return this.min.set(t,n,i),this.max.set(r,o,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,s=r.count;o<s;o++)$t.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint($t)}else n.boundingBox===null&&n.computeBoundingBox(),Zi.copy(n.boundingBox),Zi.applyMatrix4(e.matrixWorld),this.union(Zi);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jn),oi.subVectors(this.max,jn),bn.subVectors(e.a,jn),Sn.subVectors(e.b,jn),wn.subVectors(e.c,jn),Gt.subVectors(Sn,bn),kt.subVectors(wn,Sn),Kt.subVectors(bn,wn);let t=[0,-Gt.z,Gt.y,0,-kt.z,kt.y,0,-Kt.z,Kt.y,Gt.z,0,-Gt.x,kt.z,0,-kt.x,Kt.z,0,-Kt.x,-Gt.y,Gt.x,0,-kt.y,kt.x,0,-Kt.y,Kt.x,0];return!$i(t,bn,Sn,wn,oi)||(t=[1,0,0,0,1,0,0,0,1],!$i(t,bn,Sn,wn,oi))?!1:(li.crossVectors(Gt,kt),t=[li.x,li.y,li.z],$i(t,bn,Sn,wn,oi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return $t.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize($t).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dt=[new D,new D,new D,new D,new D,new D,new D,new D],$t=new D,Zi=new ni,bn=new D,Sn=new D,wn=new D,Gt=new D,kt=new D,Kt=new D,jn=new D,oi=new D,li=new D,Jt=new D;function $i(a,e,t,n,i){for(let r=0,o=a.length-3;r<=o;r+=3){Jt.fromArray(a,r);const s=i.x*Math.abs(Jt.x)+i.y*Math.abs(Jt.y)+i.z*Math.abs(Jt.z),c=e.dot(Jt),l=t.dot(Jt),u=n.dot(Jt);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>s)return!1}return!0}const Ro=new ni,gs=new D,ci=new D,Ki=new D;class Ar{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ro.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ki.subVectors(e,this.center);const t=Ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Ki.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?ci.set(0,0,1).multiplyScalar(e.radius):ci.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(gs.copy(e.center).add(ci)),this.expandByPoint(gs.copy(e.center).sub(ci)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rt=new D,Ji=new D,hi=new D,Vt=new D,Qi=new D,ui=new D,er=new D;class Po{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rt.copy(this.direction).multiplyScalar(t).add(this.origin),Rt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ji.copy(e).add(t).multiplyScalar(.5),hi.copy(t).sub(e).normalize(),Vt.copy(this.origin).sub(Ji);const r=e.distanceTo(t)*.5,o=-this.direction.dot(hi),s=Vt.dot(this.direction),c=-Vt.dot(hi),l=Vt.lengthSq(),u=Math.abs(1-o*o);let f,d,m,x;if(u>0)if(f=o*c-s,d=o*s-c,x=r*u,f>=0)if(d>=-x)if(d<=x){const p=1/u;f*=p,d*=p,m=f*(f+o*d+2*s)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+s)),m=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+s)),m=-f*f+d*(d+2*c)+l;else d<=-x?(f=Math.max(0,-(-o*r+s)),d=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l):d<=x?(f=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(f=Math.max(0,-(o*r+s)),d=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+s)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(hi).multiplyScalar(d).add(Ji),m}intersectSphere(e,t){Rt.subVectors(e.center,this.origin);const n=Rt.dot(this.direction),i=Rt.dot(Rt)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),s=n-o,c=n+o;return s<0&&c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,s,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),f>=0?(s=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(s=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||s>i)||((s>n||n!==n)&&(n=s),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Rt)!==null}intersectTriangle(e,t,n,i,r){Qi.subVectors(t,e),ui.subVectors(n,e),er.crossVectors(Qi,ui);let o=this.direction.dot(er),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Vt.subVectors(this.origin,e);const c=s*this.direction.dot(ui.crossVectors(Vt,ui));if(c<0)return null;const l=s*this.direction.dot(Qi.cross(Vt));if(l<0||c+l>o)return null;const u=-s*Vt.dot(er);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,s,c,l,u,f,d,m,x,p,h){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=s,_[13]=c,_[2]=l,_[6]=u,_[10]=f,_[14]=d,_[3]=m,_[7]=x,_[11]=p,_[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/En.setFromMatrixColumn(e,0).length(),r=1/En.setFromMatrixColumn(e,1).length(),o=1/En.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),s=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,m=o*f,x=s*u,p=s*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+x*l,t[5]=d-p*l,t[9]=-s*c,t[2]=p-d*l,t[6]=x+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,m=c*f,x=l*u,p=l*f;t[0]=d+p*s,t[4]=x*s-m,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-s,t[2]=m*s-x,t[6]=p+d*s,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,m=c*f,x=l*u,p=l*f;t[0]=d-p*s,t[4]=-o*f,t[8]=x+m*s,t[1]=m+x*s,t[5]=o*u,t[9]=p-d*s,t[2]=-o*l,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,m=o*f,x=s*u,p=s*f;t[0]=c*u,t[4]=x*l-m,t[8]=d*l+p,t[1]=c*f,t[5]=p*l+d,t[9]=m*l-x,t[2]=-l,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,x=s*c,p=s*l;t[0]=c*u,t[4]=p-d*f,t[8]=x*f+m,t[1]=f,t[5]=o*u,t[9]=-s*u,t[2]=-l*u,t[6]=m*f+x,t[10]=d-p*f}else if(e.order==="XZY"){const d=o*c,m=o*l,x=s*c,p=s*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+p,t[5]=o*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=s*u,t[10]=p*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Io,e,Fo)}lookAt(e,t,n){const i=this.elements;return rt.subVectors(e,t),rt.lengthSq()===0&&(rt.z=1),rt.normalize(),Ht.crossVectors(n,rt),Ht.lengthSq()===0&&(Math.abs(n.z)===1?rt.x+=1e-4:rt.z+=1e-4,rt.normalize(),Ht.crossVectors(n,rt)),Ht.normalize(),fi.crossVectors(rt,Ht),i[0]=Ht.x,i[4]=fi.x,i[8]=rt.x,i[1]=Ht.y,i[5]=fi.y,i[9]=rt.y,i[2]=Ht.z,i[6]=fi.z,i[10]=rt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],m=n[13],x=n[2],p=n[6],h=n[10],_=n[14],E=n[3],C=n[7],T=n[11],b=n[15],L=i[0],F=i[4],y=i[8],A=i[12],G=i[1],N=i[5],ae=i[9],J=i[13],P=i[2],W=i[6],U=i[10],q=i[14],X=i[3],O=i[7],V=i[11],K=i[15];return r[0]=o*L+s*G+c*P+l*X,r[4]=o*F+s*N+c*W+l*O,r[8]=o*y+s*ae+c*U+l*V,r[12]=o*A+s*J+c*q+l*K,r[1]=u*L+f*G+d*P+m*X,r[5]=u*F+f*N+d*W+m*O,r[9]=u*y+f*ae+d*U+m*V,r[13]=u*A+f*J+d*q+m*K,r[2]=x*L+p*G+h*P+_*X,r[6]=x*F+p*N+h*W+_*O,r[10]=x*y+p*ae+h*U+_*V,r[14]=x*A+p*J+h*q+_*K,r[3]=E*L+C*G+T*P+b*X,r[7]=E*F+C*N+T*W+b*O,r[11]=E*y+C*ae+T*U+b*V,r[15]=E*A+C*J+T*q+b*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],s=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],m=e[14],x=e[3],p=e[7],h=e[11],_=e[15];return x*(+r*c*f-i*l*f-r*s*d+n*l*d+i*s*m-n*c*m)+p*(+t*c*m-t*l*d+r*o*d-i*o*m+i*l*u-r*c*u)+h*(+t*l*f-t*s*m-r*o*f+n*o*m+r*s*u-n*l*u)+_*(-i*s*u-t*c*f+t*s*d+i*o*f-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],m=e[11],x=e[12],p=e[13],h=e[14],_=e[15],E=f*h*l-p*d*l+p*c*m-s*h*m-f*c*_+s*d*_,C=x*d*l-u*h*l-x*c*m+o*h*m+u*c*_-o*d*_,T=u*p*l-x*f*l+x*s*m-o*p*m-u*s*_+o*f*_,b=x*f*c-u*p*c-x*s*d+o*p*d+u*s*h-o*f*h,L=t*E+n*C+i*T+r*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return e[0]=E*F,e[1]=(p*d*r-f*h*r-p*i*m+n*h*m+f*i*_-n*d*_)*F,e[2]=(s*h*r-p*c*r+p*i*l-n*h*l-s*i*_+n*c*_)*F,e[3]=(f*c*r-s*d*r-f*i*l+n*d*l+s*i*m-n*c*m)*F,e[4]=C*F,e[5]=(u*h*r-x*d*r+x*i*m-t*h*m-u*i*_+t*d*_)*F,e[6]=(x*c*r-o*h*r-x*i*l+t*h*l+o*i*_-t*c*_)*F,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*m+t*c*m)*F,e[8]=T*F,e[9]=(x*f*r-u*p*r-x*n*m+t*p*m+u*n*_-t*f*_)*F,e[10]=(o*p*r-x*s*r+x*n*l-t*p*l-o*n*_+t*s*_)*F,e[11]=(u*s*r-o*f*r-u*n*l+t*f*l+o*n*m-t*s*m)*F,e[12]=b*F,e[13]=(u*p*i-x*f*i+x*n*d-t*p*d-u*n*h+t*f*h)*F,e[14]=(x*s*i-o*p*i-x*n*c+t*p*c+o*n*h-t*s*h)*F,e[15]=(o*f*i-u*s*i+u*n*c-t*f*c-o*n*d+t*s*d)*F,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,s=e.y,c=e.z,l=r*o,u=r*s;return this.set(l*o+n,l*s-i*c,l*c+i*s,0,l*s+i*c,u*s+n,u*c-i*o,0,l*c-i*s,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,s=t._z,c=t._w,l=r+r,u=o+o,f=s+s,d=r*l,m=r*u,x=r*f,p=o*u,h=o*f,_=s*f,E=c*l,C=c*u,T=c*f,b=n.x,L=n.y,F=n.z;return i[0]=(1-(p+_))*b,i[1]=(m+T)*b,i[2]=(x-C)*b,i[3]=0,i[4]=(m-T)*L,i[5]=(1-(d+_))*L,i[6]=(h+E)*L,i[7]=0,i[8]=(x+C)*F,i[9]=(h-E)*F,i[10]=(1-(d+p))*F,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=En.set(i[0],i[1],i[2]).length();const o=En.set(i[4],i[5],i[6]).length(),s=En.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],_t.copy(this);const l=1/r,u=1/o,f=1/s;return _t.elements[0]*=l,_t.elements[1]*=l,_t.elements[2]*=l,_t.elements[4]*=u,_t.elements[5]*=u,_t.elements[6]*=u,_t.elements[8]*=f,_t.elements[9]*=f,_t.elements[10]*=f,t.setFromRotationMatrix(_t),n.x=r,n.y=o,n.z=s,this}makePerspective(e,t,n,i,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const s=this.elements,c=2*r/(t-e),l=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d=-(o+r)/(o-r),m=-2*o*r/(o-r);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=f,s[13]=0,s[2]=0,s[6]=0,s[10]=d,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,o){const s=this.elements,c=1/(t-e),l=1/(n-i),u=1/(o-r),f=(t+e)*c,d=(n+i)*l,m=(o+r)*u;return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-f,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-d,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const En=new D,_t=new Ye,Io=new D(0,0,0),Fo=new D(1,1,1),Ht=new D,fi=new D,rt=new D,_s=new Ye,xs=new fn;class ii{constructor(e=0,t=0,n=0,i=ii.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],s=i[8],c=i[1],l=i[5],u=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(nt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _s.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_s,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xs.setFromEuler(this),this.setFromQuaternion(xs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ii.DefaultOrder="XYZ";ii.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class la{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let No=0;const vs=new D,Tn=new fn,Pt=new Ye,di=new D,Zn=new D,zo=new D,Oo=new fn,Ms=new D(1,0,0),ys=new D(0,1,0),bs=new D(0,0,1),Uo={type:"added"},Ss={type:"removed"};class bt extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:No++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DefaultUp.clone();const e=new D,t=new ii,n=new fn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new at}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=bt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tn.setFromAxisAngle(e,t),this.quaternion.multiply(Tn),this}rotateOnWorldAxis(e,t){return Tn.setFromAxisAngle(e,t),this.quaternion.premultiply(Tn),this}rotateX(e){return this.rotateOnAxis(Ms,e)}rotateY(e){return this.rotateOnAxis(ys,e)}rotateZ(e){return this.rotateOnAxis(bs,e)}translateOnAxis(e,t){return vs.copy(e).applyQuaternion(this.quaternion),this.position.add(vs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ms,e)}translateY(e){return this.translateOnAxis(ys,e)}translateZ(e){return this.translateOnAxis(bs,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Pt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?di.copy(e):di.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pt.lookAt(Zn,di,this.up):Pt.lookAt(di,Zn,this.up),this.quaternion.setFromRotationMatrix(Pt),i&&(Pt.extractRotation(i.matrixWorld),Tn.setFromRotationMatrix(Pt),this.quaternion.premultiply(Tn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Uo)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ss)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ss)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Pt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zn,e,zo),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zn,Oo,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(r(e.materials,this.material[c]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];i.animations.push(r(e.animations,c))}}if(t){const s=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),x=o(e.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(s){const c=[];for(const l in s){const u=s[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bt.DefaultUp=new D(0,1,0);bt.DefaultMatrixAutoUpdate=!0;const xt=new D,It=new D,tr=new D,Ft=new D,An=new D,Cn=new D,ws=new D,nr=new D,ir=new D,rr=new D;class zt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xt.subVectors(e,t),i.cross(xt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){xt.subVectors(i,t),It.subVectors(n,t),tr.subVectors(e,t);const o=xt.dot(xt),s=xt.dot(It),c=xt.dot(tr),l=It.dot(It),u=It.dot(tr),f=o*l-s*s;if(f===0)return r.set(-2,-1,-1);const d=1/f,m=(l*c-s*u)*d,x=(o*u-s*c)*d;return r.set(1-m-x,x,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ft),Ft.x>=0&&Ft.y>=0&&Ft.x+Ft.y<=1}static getUV(e,t,n,i,r,o,s,c){return this.getBarycoord(e,t,n,i,Ft),c.set(0,0),c.addScaledVector(r,Ft.x),c.addScaledVector(o,Ft.y),c.addScaledVector(s,Ft.z),c}static isFrontFacing(e,t,n,i){return xt.subVectors(n,t),It.subVectors(e,t),xt.cross(It).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xt.subVectors(this.c,this.b),It.subVectors(this.a,this.b),xt.cross(It).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return zt.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,s;An.subVectors(i,n),Cn.subVectors(r,n),nr.subVectors(e,n);const c=An.dot(nr),l=Cn.dot(nr);if(c<=0&&l<=0)return t.copy(n);ir.subVectors(e,i);const u=An.dot(ir),f=Cn.dot(ir);if(u>=0&&f<=u)return t.copy(i);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(An,o);rr.subVectors(e,r);const m=An.dot(rr),x=Cn.dot(rr);if(x>=0&&m<=x)return t.copy(r);const p=m*l-c*x;if(p<=0&&l>=0&&x<=0)return s=l/(l-x),t.copy(n).addScaledVector(Cn,s);const h=u*x-m*f;if(h<=0&&f-u>=0&&m-x>=0)return ws.subVectors(r,i),s=(f-u)/(f-u+(m-x)),t.copy(i).addScaledVector(ws,s);const _=1/(h+p+d);return o=p*_,s=d*_,t.copy(n).addScaledVector(An,o).addScaledVector(Cn,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Bo=0;class Ii extends pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bo++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=On,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Js,this.blendDst=Qs,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Ia;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==On&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const s in r){const c=r[s];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yt extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Be=new D,pi=new Ee;class Lt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=us,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new Fe),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new Ee),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new D),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new qe),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.applyMatrix3(e),this.setXY(t,pi.x,pi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Be.fromBufferAttribute(this,t),Be.applyMatrix3(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Be.fromBufferAttribute(this,t),Be.applyMatrix4(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Be.fromBufferAttribute(this,t),Be.applyNormalMatrix(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Be.fromBufferAttribute(this,t),Be.transformDirection(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==us&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ca extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ha extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ln extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Go=0;const ht=new Ye,sr=new bt,Ln=new D,st=new ni,$n=new ni,We=new D;class mn extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Go++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ia(e)?ha:ca)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ht.makeRotationFromQuaternion(e),this.applyMatrix4(ht),this}rotateX(e){return ht.makeRotationX(e),this.applyMatrix4(ht),this}rotateY(e){return ht.makeRotationY(e),this.applyMatrix4(ht),this}rotateZ(e){return ht.makeRotationZ(e),this.applyMatrix4(ht),this}translate(e,t,n){return ht.makeTranslation(e,t,n),this.applyMatrix4(ht),this}scale(e,t,n){return ht.makeScale(e,t,n),this.applyMatrix4(ht),this}lookAt(e){return sr.lookAt(e),sr.updateMatrix(),this.applyMatrix4(sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ln).negate(),this.translate(Ln.x,Ln.y,Ln.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];st.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,st.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,st.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(st.min),this.boundingBox.expandByPoint(st.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(st.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const s=t[r];$n.setFromBufferAttribute(s),this.morphTargetsRelative?(We.addVectors(st.min,$n.min),st.expandByPoint(We),We.addVectors(st.max,$n.max),st.expandByPoint(We)):(st.expandByPoint($n.min),st.expandByPoint($n.max))}st.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)We.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(We));if(t)for(let r=0,o=t.length;r<o;r++){const s=t[r],c=this.morphTargetsRelative;for(let l=0,u=s.count;l<u;l++)We.fromBufferAttribute(s,l),c&&(Ln.fromBufferAttribute(e,l),We.add(Ln)),i=Math.max(i,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let G=0;G<s;G++)l[G]=new D,u[G]=new D;const f=new D,d=new D,m=new D,x=new Ee,p=new Ee,h=new Ee,_=new D,E=new D;function C(G,N,ae){f.fromArray(i,G*3),d.fromArray(i,N*3),m.fromArray(i,ae*3),x.fromArray(o,G*2),p.fromArray(o,N*2),h.fromArray(o,ae*2),d.sub(f),m.sub(f),p.sub(x),h.sub(x);const J=1/(p.x*h.y-h.x*p.y);!isFinite(J)||(_.copy(d).multiplyScalar(h.y).addScaledVector(m,-p.y).multiplyScalar(J),E.copy(m).multiplyScalar(p.x).addScaledVector(d,-h.x).multiplyScalar(J),l[G].add(_),l[N].add(_),l[ae].add(_),u[G].add(E),u[N].add(E),u[ae].add(E))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let G=0,N=T.length;G<N;++G){const ae=T[G],J=ae.start,P=ae.count;for(let W=J,U=J+P;W<U;W+=3)C(n[W+0],n[W+1],n[W+2])}const b=new D,L=new D,F=new D,y=new D;function A(G){F.fromArray(r,G*3),y.copy(F);const N=l[G];b.copy(N),b.sub(F.multiplyScalar(F.dot(N))).normalize(),L.crossVectors(y,N);const J=L.dot(u[G])<0?-1:1;c[G*4]=b.x,c[G*4+1]=b.y,c[G*4+2]=b.z,c[G*4+3]=J}for(let G=0,N=T.length;G<N;++G){const ae=T[G],J=ae.start,P=ae.count;for(let W=J,U=J+P;W<U;W+=3)A(n[W+0]),A(n[W+1]),A(n[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,o=new D,s=new D,c=new D,l=new D,u=new D,f=new D;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),p=e.getX(d+1),h=e.getX(d+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),s.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,h),s.add(u),c.add(u),l.add(u),n.setXYZ(x,s.x,s.y,s.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(h,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,s=e.attributes[i],c=s.array,l=s.itemSize*t,u=Math.min(c.length,o.length-l);for(let f=0,d=l;f<u;f++,d++)o[d]=c[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)We.fromBufferAttribute(e,t),We.normalize(),e.setXYZ(t,We.x,We.y,We.z)}toNonIndexed(){function e(s,c){const l=s.array,u=s.itemSize,f=s.normalized,d=new l.constructor(c.length*u);let m=0,x=0;for(let p=0,h=c.length;p<h;p++){s.isInterleavedBufferAttribute?m=c[p]*s.data.stride+s.offset:m=c[p]*u;for(let _=0;_<u;_++)d[x++]=l[m++]}return new Lt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,n=this.index.array,i=this.attributes;for(const s in i){const c=i[s],l=e(c,n);t.setAttribute(s,l)}const r=this.morphAttributes;for(const s in r){const c=[],l=r[s];for(let u=0,f=l.length;u<f;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const l=o[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],f=r[l];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Es=new Ye,Dn=new Po,ar=new Ar,Wt=new D,qt=new D,Xt=new D,or=new D,lr=new D,cr=new D,mi=new D,gi=new D,_i=new D,xi=new Ee,vi=new Ee,Mi=new Ee,hr=new D,yi=new D;class Ot extends bt{constructor(e=new mn,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(r),e.ray.intersectsSphere(ar)===!1)||(Es.copy(r).invert(),Dn.copy(e.ray).applyMatrix4(Es),n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1))return;let o;const s=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,d=n.attributes.uv2,m=n.groups,x=n.drawRange;if(s!==null)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const _=m[p],E=i[_.materialIndex],C=Math.max(_.start,x.start),T=Math.min(s.count,Math.min(_.start+_.count,x.start+x.count));for(let b=C,L=T;b<L;b+=3){const F=s.getX(b),y=s.getX(b+1),A=s.getX(b+2);o=bi(this,E,e,Dn,c,l,u,f,d,F,y,A),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),h=Math.min(s.count,x.start+x.count);for(let _=p,E=h;_<E;_+=3){const C=s.getX(_),T=s.getX(_+1),b=s.getX(_+2);o=bi(this,i,e,Dn,c,l,u,f,d,C,T,b),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const _=m[p],E=i[_.materialIndex],C=Math.max(_.start,x.start),T=Math.min(c.count,Math.min(_.start+_.count,x.start+x.count));for(let b=C,L=T;b<L;b+=3){const F=b,y=b+1,A=b+2;o=bi(this,E,e,Dn,c,l,u,f,d,F,y,A),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),h=Math.min(c.count,x.start+x.count);for(let _=p,E=h;_<E;_+=3){const C=_,T=_+1,b=_+2;o=bi(this,i,e,Dn,c,l,u,f,d,C,T,b),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function ko(a,e,t,n,i,r,o,s){let c;if(e.side===Mt?c=n.intersectTriangle(o,r,i,!0,s):c=n.intersectTriangle(i,r,o,e.side!==ft,s),c===null)return null;yi.copy(s),yi.applyMatrix4(a.matrixWorld);const l=t.ray.origin.distanceTo(yi);return l<t.near||l>t.far?null:{distance:l,point:yi.clone(),object:a}}function bi(a,e,t,n,i,r,o,s,c,l,u,f){Wt.fromBufferAttribute(i,l),qt.fromBufferAttribute(i,u),Xt.fromBufferAttribute(i,f);const d=a.morphTargetInfluences;if(r&&d){mi.set(0,0,0),gi.set(0,0,0),_i.set(0,0,0);for(let x=0,p=r.length;x<p;x++){const h=d[x],_=r[x];h!==0&&(or.fromBufferAttribute(_,l),lr.fromBufferAttribute(_,u),cr.fromBufferAttribute(_,f),o?(mi.addScaledVector(or,h),gi.addScaledVector(lr,h),_i.addScaledVector(cr,h)):(mi.addScaledVector(or.sub(Wt),h),gi.addScaledVector(lr.sub(qt),h),_i.addScaledVector(cr.sub(Xt),h)))}Wt.add(mi),qt.add(gi),Xt.add(_i)}a.isSkinnedMesh&&(a.boneTransform(l,Wt),a.boneTransform(u,qt),a.boneTransform(f,Xt));const m=ko(a,e,t,n,Wt,qt,Xt,hr);if(m){s&&(xi.fromBufferAttribute(s,l),vi.fromBufferAttribute(s,u),Mi.fromBufferAttribute(s,f),m.uv=zt.getUV(hr,Wt,qt,Xt,xi,vi,Mi,new Ee)),c&&(xi.fromBufferAttribute(c,l),vi.fromBufferAttribute(c,u),Mi.fromBufferAttribute(c,f),m.uv2=zt.getUV(hr,Wt,qt,Xt,xi,vi,Mi,new Ee));const x={a:l,b:u,c:f,normal:new D,materialIndex:0};zt.getNormal(Wt,qt,Xt,x.normal),m.face=x}return m}class Hn extends mn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const s=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,m=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ln(l,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(f,2));function x(p,h,_,E,C,T,b,L,F,y,A){const G=T/F,N=b/y,ae=T/2,J=b/2,P=L/2,W=F+1,U=y+1;let q=0,X=0;const O=new D;for(let V=0;V<U;V++){const K=V*N-J;for(let j=0;j<W;j++){const Z=j*G-ae;O[p]=Z*E,O[h]=K*C,O[_]=P,l.push(O.x,O.y,O.z),O[p]=0,O[h]=0,O[_]=L>0?1:-1,u.push(O.x,O.y,O.z),f.push(j/F),f.push(1-V/y),q+=1}}for(let V=0;V<y;V++)for(let K=0;K<F;K++){const j=d+K+W*V,Z=d+K+W*(V+1),he=d+(K+1)+W*(V+1),ue=d+(K+1)+W*V;c.push(j,Z,ue),c.push(Z,he,ue),X+=6}s.addGroup(m,X,A),m+=X,d+=q}}static fromJSON(e){return new Hn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vn(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ze(a){const e={};for(let t=0;t<a.length;t++){const n=Vn(a[t]);for(const i in n)e[i]=n[i]}return e}const Vo={clone:Vn,merge:Ze};var Ho=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Ho,this.fragmentShader=Wo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vn(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ua extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pt extends ua{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Rn=90,Pn=1;class qo extends bt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new pt(Rn,Pn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new D(1,0,0)),this.add(i);const r=new pt(Rn,Pn,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(-1,0,0)),this.add(r);const o=new pt(Rn,Pn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const s=new pt(Rn,Pn,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new D(0,-1,0)),this.add(s);const c=new pt(Rn,Pn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,1)),this.add(c);const l=new pt(Rn,Pn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,s,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Ut,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class fa extends yt{constructor(e,t,n,i,r,o,s,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Bn,super(e,t,n,i,r,o,s,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xo extends un{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new fa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Hn(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:Vn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mt,blending:jt});r.uniforms.tEquirect.value=t;const o=new Ot(i,r),s=t.minFilter;return t.minFilter===Pi&&(t.minFilter=dt),new qo(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const ur=new D,Yo=new D,jo=new at;class Qt{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ur.subVectors(n,t).cross(Yo.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ur),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jo.getNormalMatrix(e),i=this.coplanarPoint(ur).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Ar,Si=new D;class da{constructor(e=new Qt,t=new Qt,n=new Qt,i=new Qt,r=new Qt,o=new Qt){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],s=n[3],c=n[4],l=n[5],u=n[6],f=n[7],d=n[8],m=n[9],x=n[10],p=n[11],h=n[12],_=n[13],E=n[14],C=n[15];return t[0].setComponents(s-i,f-c,p-d,C-h).normalize(),t[1].setComponents(s+i,f+c,p+d,C+h).normalize(),t[2].setComponents(s+r,f+l,p+m,C+_).normalize(),t[3].setComponents(s-r,f-l,p-m,C-_).normalize(),t[4].setComponents(s-o,f-u,p-x,C-E).normalize(),t[5].setComponents(s+o,f+u,p+x,C+E).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Si.x=i.normal.x>0?e.max.x:e.min.x,Si.y=i.normal.y>0?e.max.y:e.min.y,Si.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Si)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pa(){let a=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function Zo(a,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const f=l.array,d=l.usage,m=a.createBuffer();a.bindBuffer(u,m),a.bufferData(u,f,d),l.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,f){const d=u.array,m=u.updateRange;a.bindBuffer(f,l),m.count===-1?a.bufferSubData(f,0,d):(t?a.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):a.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(a.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,i(l,u)):f.version<l.version&&(r(f.buffer,l,u),f.version=l.version)}return{get:o,remove:s,update:c}}class Cr extends mn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,s=Math.floor(n),c=Math.floor(i),l=s+1,u=c+1,f=e/s,d=t/c,m=[],x=[],p=[],h=[];for(let _=0;_<u;_++){const E=_*d-o;for(let C=0;C<l;C++){const T=C*f-r;x.push(T,-E,0),p.push(0,0,1),h.push(C/s),h.push(1-_/c)}}for(let _=0;_<c;_++)for(let E=0;E<s;E++){const C=E+l*_,T=E+l*(_+1),b=E+1+l*(_+1),L=E+1+l*_;m.push(C,T,L),m.push(T,b,L)}this.setIndex(m),this.setAttribute("position",new ln(x,3)),this.setAttribute("normal",new ln(p,3)),this.setAttribute("uv",new ln(h,2))}static fromJSON(e){return new Cr(e.width,e.height,e.widthSegments,e.heightSegments)}}var $o=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ko=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jo=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Qo=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,el=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nl="vec3 transformed = vec3( position );",il=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,sl=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,al=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ol=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ll=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ul=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ml=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,gl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_l=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ml=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sl=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,El=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Al=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ll=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Il=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Fl=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zl=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Ol=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ul=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Bl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gl=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,kl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vl=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Hl=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Wl=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ql=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xl=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yl=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,jl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$l=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Kl=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jl=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ql=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ec=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ic=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ac=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,oc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,lc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,cc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,pc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,mc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,gc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,_c=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Mc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ec=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tc=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ac=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cc=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Lc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Pc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ic=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Oc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uc=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Bc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Gc=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,kc=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Vc=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Hc=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Wc=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,qc=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Xc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jc=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$c=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kc=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jc=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Qc=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ih=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ah=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oh=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lh=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ch=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ph=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_h=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Sh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,we={alphamap_fragment:$o,alphamap_pars_fragment:Ko,alphatest_fragment:Jo,alphatest_pars_fragment:Qo,aomap_fragment:el,aomap_pars_fragment:tl,begin_vertex:nl,beginnormal_vertex:il,bsdfs:rl,iridescence_fragment:sl,bumpmap_pars_fragment:al,clipping_planes_fragment:ol,clipping_planes_pars_fragment:ll,clipping_planes_pars_vertex:cl,clipping_planes_vertex:hl,color_fragment:ul,color_pars_fragment:fl,color_pars_vertex:dl,color_vertex:pl,common:ml,cube_uv_reflection_fragment:gl,defaultnormal_vertex:_l,displacementmap_pars_vertex:xl,displacementmap_vertex:vl,emissivemap_fragment:Ml,emissivemap_pars_fragment:yl,encodings_fragment:bl,encodings_pars_fragment:Sl,envmap_fragment:wl,envmap_common_pars_fragment:El,envmap_pars_fragment:Tl,envmap_pars_vertex:Al,envmap_physical_pars_fragment:Ul,envmap_vertex:Cl,fog_vertex:Ll,fog_pars_vertex:Dl,fog_fragment:Rl,fog_pars_fragment:Pl,gradientmap_pars_fragment:Il,lightmap_fragment:Fl,lightmap_pars_fragment:Nl,lights_lambert_vertex:zl,lights_pars_begin:Ol,lights_toon_fragment:Bl,lights_toon_pars_fragment:Gl,lights_phong_fragment:kl,lights_phong_pars_fragment:Vl,lights_physical_fragment:Hl,lights_physical_pars_fragment:Wl,lights_fragment_begin:ql,lights_fragment_maps:Xl,lights_fragment_end:Yl,logdepthbuf_fragment:jl,logdepthbuf_pars_fragment:Zl,logdepthbuf_pars_vertex:$l,logdepthbuf_vertex:Kl,map_fragment:Jl,map_pars_fragment:Ql,map_particle_fragment:ec,map_particle_pars_fragment:tc,metalnessmap_fragment:nc,metalnessmap_pars_fragment:ic,morphcolor_vertex:rc,morphnormal_vertex:sc,morphtarget_pars_vertex:ac,morphtarget_vertex:oc,normal_fragment_begin:lc,normal_fragment_maps:cc,normal_pars_fragment:hc,normal_pars_vertex:uc,normal_vertex:fc,normalmap_pars_fragment:dc,clearcoat_normal_fragment_begin:pc,clearcoat_normal_fragment_maps:mc,clearcoat_pars_fragment:gc,iridescence_pars_fragment:_c,output_fragment:xc,packing:vc,premultiplied_alpha_fragment:Mc,project_vertex:yc,dithering_fragment:bc,dithering_pars_fragment:Sc,roughnessmap_fragment:wc,roughnessmap_pars_fragment:Ec,shadowmap_pars_fragment:Tc,shadowmap_pars_vertex:Ac,shadowmap_vertex:Cc,shadowmask_pars_fragment:Lc,skinbase_vertex:Dc,skinning_pars_vertex:Rc,skinning_vertex:Pc,skinnormal_vertex:Ic,specularmap_fragment:Fc,specularmap_pars_fragment:Nc,tonemapping_fragment:zc,tonemapping_pars_fragment:Oc,transmission_fragment:Uc,transmission_pars_fragment:Bc,uv_pars_fragment:Gc,uv_pars_vertex:kc,uv_vertex:Vc,uv2_pars_fragment:Hc,uv2_pars_vertex:Wc,uv2_vertex:qc,worldpos_vertex:Xc,background_vert:Yc,background_frag:jc,cube_vert:Zc,cube_frag:$c,depth_vert:Kc,depth_frag:Jc,distanceRGBA_vert:Qc,distanceRGBA_frag:eh,equirect_vert:th,equirect_frag:nh,linedashed_vert:ih,linedashed_frag:rh,meshbasic_vert:sh,meshbasic_frag:ah,meshlambert_vert:oh,meshlambert_frag:lh,meshmatcap_vert:ch,meshmatcap_frag:hh,meshnormal_vert:uh,meshnormal_frag:fh,meshphong_vert:dh,meshphong_frag:ph,meshphysical_vert:mh,meshphysical_frag:gh,meshtoon_vert:_h,meshtoon_frag:xh,points_vert:vh,points_frag:Mh,shadow_vert:yh,shadow_frag:bh,sprite_vert:Sh,sprite_frag:wh},se={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new at},uv2Transform:{value:new at},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new at}}},At={basic:{uniforms:Ze([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:Ze([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.fog,se.lights,{emissive:{value:new Fe(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:Ze([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:Ze([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:Ze([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Fe(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:Ze([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:Ze([se.points,se.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:Ze([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:Ze([se.common,se.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:Ze([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:Ze([se.sprite,se.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null}},vertexShader:we.background_vert,fragmentShader:we.background_frag},cube:{uniforms:Ze([se.envmap,{opacity:{value:1}}]),vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:Ze([se.common,se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:Ze([se.lights,se.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};At.physical={uniforms:Ze([At.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};function Eh(a,e,t,n,i,r){const o=new Fe(0);let s=i===!0?0:1,c,l,u=null,f=0,d=null;function m(p,h){let _=!1,E=h.isScene===!0?h.background:null;E&&E.isTexture&&(E=e.get(E));const C=a.xr,T=C.getSession&&C.getSession();T&&T.environmentBlendMode==="additive"&&(E=null),E===null?x(o,s):E&&E.isColor&&(x(E,1),_=!0),(a.autoClear||_)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Ri)?(l===void 0&&(l=new Ot(new Hn(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Vn(At.cube.uniforms),vertexShader:At.cube.vertexShader,fragmentShader:At.cube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,(u!==E||f!==E.version||d!==a.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,d=a.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ot(new Cr(2,2),new dn({name:"BackgroundMaterial",uniforms:Vn(At.background.uniforms),vertexShader:At.background.vertexShader,fragmentShader:At.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=a.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,h){t.buffers.color.setClear(p.r,p.g,p.b,h,r)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),s=h,x(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(p){s=p,x(o,s)},render:m}}function Th(a,e,t,n){const i=a.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,s={},c=h(null);let l=c,u=!1;function f(P,W,U,q,X){let O=!1;if(o){const V=p(q,U,W);l!==V&&(l=V,m(l.object)),O=_(P,q,U,X),O&&E(P,q,U,X)}else{const V=W.wireframe===!0;(l.geometry!==q.id||l.program!==U.id||l.wireframe!==V)&&(l.geometry=q.id,l.program=U.id,l.wireframe=V,O=!0)}X!==null&&t.update(X,34963),(O||u)&&(u=!1,y(P,W,U,q),X!==null&&a.bindBuffer(34963,t.get(X).buffer))}function d(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?a.bindVertexArray(P):r.bindVertexArrayOES(P)}function x(P){return n.isWebGL2?a.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function p(P,W,U){const q=U.wireframe===!0;let X=s[P.id];X===void 0&&(X={},s[P.id]=X);let O=X[W.id];O===void 0&&(O={},X[W.id]=O);let V=O[q];return V===void 0&&(V=h(d()),O[q]=V),V}function h(P){const W=[],U=[],q=[];for(let X=0;X<i;X++)W[X]=0,U[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:U,attributeDivisors:q,object:P,attributes:{},index:null}}function _(P,W,U,q){const X=l.attributes,O=W.attributes;let V=0;const K=U.getAttributes();for(const j in K)if(K[j].location>=0){const he=X[j];let ue=O[j];if(ue===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),he===void 0||he.attribute!==ue||ue&&he.data!==ue.data)return!0;V++}return l.attributesNum!==V||l.index!==q}function E(P,W,U,q){const X={},O=W.attributes;let V=0;const K=U.getAttributes();for(const j in K)if(K[j].location>=0){let he=O[j];he===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(he=P.instanceColor));const ue={};ue.attribute=he,he&&he.data&&(ue.data=he.data),X[j]=ue,V++}l.attributes=X,l.attributesNum=V,l.index=q}function C(){const P=l.newAttributes;for(let W=0,U=P.length;W<U;W++)P[W]=0}function T(P){b(P,0)}function b(P,W){const U=l.newAttributes,q=l.enabledAttributes,X=l.attributeDivisors;U[P]=1,q[P]===0&&(a.enableVertexAttribArray(P),q[P]=1),X[P]!==W&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,W),X[P]=W)}function L(){const P=l.newAttributes,W=l.enabledAttributes;for(let U=0,q=W.length;U<q;U++)W[U]!==P[U]&&(a.disableVertexAttribArray(U),W[U]=0)}function F(P,W,U,q,X,O){n.isWebGL2===!0&&(U===5124||U===5125)?a.vertexAttribIPointer(P,W,U,X,O):a.vertexAttribPointer(P,W,U,q,X,O)}function y(P,W,U,q){if(n.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const X=q.attributes,O=U.getAttributes(),V=W.defaultAttributeValues;for(const K in O){const j=O[K];if(j.location>=0){let Z=X[K];if(Z===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){const he=Z.normalized,ue=Z.itemSize,k=t.get(Z);if(k===void 0)continue;const Oe=k.buffer,ye=k.type,xe=k.bytesPerElement;if(Z.isInterleavedBufferAttribute){const ce=Z.data,Ce=ce.stride,Se=Z.offset;if(ce.isInstancedInterleavedBuffer){for(let pe=0;pe<j.locationSize;pe++)b(j.location+pe,ce.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let pe=0;pe<j.locationSize;pe++)T(j.location+pe);a.bindBuffer(34962,Oe);for(let pe=0;pe<j.locationSize;pe++)F(j.location+pe,ue/j.locationSize,ye,he,Ce*xe,(Se+ue/j.locationSize*pe)*xe)}else{if(Z.isInstancedBufferAttribute){for(let ce=0;ce<j.locationSize;ce++)b(j.location+ce,Z.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ce=0;ce<j.locationSize;ce++)T(j.location+ce);a.bindBuffer(34962,Oe);for(let ce=0;ce<j.locationSize;ce++)F(j.location+ce,ue/j.locationSize,ye,he,ue*xe,ue/j.locationSize*ce*xe)}}else if(V!==void 0){const he=V[K];if(he!==void 0)switch(he.length){case 2:a.vertexAttrib2fv(j.location,he);break;case 3:a.vertexAttrib3fv(j.location,he);break;case 4:a.vertexAttrib4fv(j.location,he);break;default:a.vertexAttrib1fv(j.location,he)}}}}L()}function A(){ae();for(const P in s){const W=s[P];for(const U in W){const q=W[U];for(const X in q)x(q[X].object),delete q[X];delete W[U]}delete s[P]}}function G(P){if(s[P.id]===void 0)return;const W=s[P.id];for(const U in W){const q=W[U];for(const X in q)x(q[X].object),delete q[X];delete W[U]}delete s[P.id]}function N(P){for(const W in s){const U=s[W];if(U[P.id]===void 0)continue;const q=U[P.id];for(const X in q)x(q[X].object),delete q[X];delete U[P.id]}}function ae(){J(),u=!0,l!==c&&(l=c,m(l.object))}function J(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:ae,resetDefaultState:J,dispose:A,releaseStatesOfGeometry:G,releaseStatesOfProgram:N,initAttributes:C,enableAttribute:T,disableUnusedAttributes:L}}function Ah(a,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function s(l,u){a.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,f){if(f===0)return;let d,m;if(i)d=a,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,l,u,f),t.update(u,r,f)}this.setMode=o,this.render=s,this.renderInstances=c}function Ch(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(F){if(F==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&a instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const c=r(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=a.getParameter(34930),d=a.getParameter(35660),m=a.getParameter(3379),x=a.getParameter(34076),p=a.getParameter(34921),h=a.getParameter(36347),_=a.getParameter(36348),E=a.getParameter(36349),C=d>0,T=o||e.has("OES_texture_float"),b=C&&T,L=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:h,maxVaryings:_,maxFragmentUniforms:E,vertexTextures:C,floatFragmentTextures:T,floatVertexTextures:b,maxSamples:L}}function Lh(a){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Qt,s=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){const x=f.length!==0||d||n!==0||i;return i=d,t=u(f,m,0),n=f.length,x},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,l()},this.setState=function(f,d,m){const x=f.clippingPlanes,p=f.clipIntersection,h=f.clipShadows,_=a.get(f);if(!i||x===null||x.length===0||r&&!h)r?u(null):l();else{const E=r?0:n,C=E*4;let T=_.clippingState||null;c.value=T,T=u(x,d,C,m);for(let b=0;b!==C;++b)T[b]=t[b];_.clippingState=T,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,x){const p=f!==null?f.length:0;let h=null;if(p!==0){if(h=c.value,x!==!0||h===null){const _=m+p*4,E=d.matrixWorldInverse;s.getNormalMatrix(E),(h===null||h.length<_)&&(h=new Float32Array(_));for(let C=0,T=m;C!==p;++C,T+=4)o.copy(f[C]).applyMatrix4(E,s),o.normal.toArray(h,T),h[T+3]=o.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function Dh(a){let e=new WeakMap;function t(o,s){return s===vr?o.mapping=Bn:s===Mr&&(o.mapping=Gn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===vr||s===Mr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Xo(c.height/2);return l.fromEquirectangularTexture(a,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const s=o.target;s.removeEventListener("dispose",i);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Rh extends ua{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,s=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,s-=u*this.view.offsetY,c=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zn=4,Ts=[.125,.215,.35,.446,.526,.582],tn=20,fr=new Rh,As=new Fe;let dr=null;const en=(1+Math.sqrt(5))/2,Fn=1/en,Cs=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,en,Fn),new D(0,en,-Fn),new D(Fn,0,en),new D(-Fn,0,en),new D(en,Fn,0),new D(-en,Fn,0)];class Ls{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){dr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ps(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dr),e.scissorTest=!1,wi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bn||e.mapping===Gn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dt,minFilter:dt,generateMipmaps:!1,type:ei,format:Ct,encoding:hn,depthBuffer:!1},i=Ds(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ds(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ph(r)),this._blurMaterial=Ih(r,e,t)}return i}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,fr)}_sceneToCubeUV(e,t,n,i){const s=new pt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(As),u.toneMapping=Ut,u.autoClear=!1;const m=new Yt({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),x=new Ot(new Hn,m);let p=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,p=!0):(m.color.copy(As),p=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(s.up.set(0,c[_],0),s.lookAt(l[_],0,0)):E===1?(s.up.set(0,0,c[_]),s.lookAt(0,l[_],0)):(s.up.set(0,c[_],0),s.lookAt(0,0,l[_]));const C=this._cubeSize;wi(i,E*C,_>2?C:0,C,C),u.setRenderTarget(i),p&&u.render(x,s),u.render(e,s)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Bn||e.mapping===Gn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ps()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rs());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ot(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const c=this._cubeSize;wi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,fr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Cs[(i-1)%Cs.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,s){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ot(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*tn-1),p=r/x,h=isFinite(r)?1+Math.floor(u*p):tn;h>tn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${tn}`);const _=[];let E=0;for(let F=0;F<tn;++F){const y=F/p,A=Math.exp(-y*y/2);_.push(A),F===0?E+=A:F<h&&(E+=2*A)}for(let F=0;F<_.length;F++)_[F]=_[F]/E;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=_,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:C}=this;d.dTheta.value=x,d.mipInt.value=C-n;const T=this._sizeLods[i],b=3*T*(i>C-zn?i-C+zn:0),L=4*(this._cubeSize-T);wi(t,b,L,3*T,2*T),c.setRenderTarget(t),c.render(f,fr)}}function Ph(a){const e=[],t=[],n=[];let i=a;const r=a-zn+1+Ts.length;for(let o=0;o<r;o++){const s=Math.pow(2,i);t.push(s);let c=1/s;o>a-zn?c=Ts[o-a+zn-1]:o===0&&(c=0),n.push(c);const l=1/(s-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,p=3,h=2,_=1,E=new Float32Array(p*x*m),C=new Float32Array(h*x*m),T=new Float32Array(_*x*m);for(let L=0;L<m;L++){const F=L%3*2/3-1,y=L>2?0:-1,A=[F,y,0,F+2/3,y,0,F+2/3,y+1,0,F,y,0,F+2/3,y+1,0,F,y+1,0];E.set(A,p*x*L),C.set(d,h*x*L);const G=[L,L,L,L,L,L];T.set(G,_*x*L)}const b=new mn;b.setAttribute("position",new Lt(E,p)),b.setAttribute("uv",new Lt(C,h)),b.setAttribute("faceIndex",new Lt(T,_)),e.push(b),i>zn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ds(a,e,t){const n=new un(a,e,t);return n.texture.mapping=Ri,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wi(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Ih(a,e,t){const n=new Float32Array(tn),i=new D(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:tn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Rs(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Ps(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Lr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fh(a){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const c=s.mapping,l=c===vr||c===Mr,u=c===Bn||c===Gn;if(l||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new Ls(a)),f=l?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(l&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Ls(a));const d=l?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",r),d.texture}else return null}}}return s}function i(s){let c=0;const l=6;for(let u=0;u<l;u++)s[u]!==void 0&&c++;return c===l}function r(s){const c=s.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Nh(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zh(a,e,t,n){const i={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const x in d)e.update(d[x],34962);const m=f.morphAttributes;for(const x in m){const p=m[x];for(let h=0,_=p.length;h<_;h++)e.update(p[h],34962)}}function l(f){const d=[],m=f.index,x=f.attributes.position;let p=0;if(m!==null){const E=m.array;p=m.version;for(let C=0,T=E.length;C<T;C+=3){const b=E[C+0],L=E[C+1],F=E[C+2];d.push(b,L,L,F,F,b)}}else{const E=x.array;p=x.version;for(let C=0,T=E.length/3-1;C<T;C+=3){const b=C+0,L=C+1,F=C+2;d.push(b,L,L,F,F,b)}}const h=new(ia(d)?ha:ca)(d,1);h.version=p;const _=r.get(f);_&&e.remove(_),r.set(f,h)}function u(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:s,update:c,getWireframeAttribute:u}}function Oh(a,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let s,c;function l(d){s=d.type,c=d.bytesPerElement}function u(d,m){a.drawElements(r,m,s,d*c),t.update(m,r,1)}function f(d,m,x){if(x===0)return;let p,h;if(i)p=a,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](r,m,s,d*c,x),t.update(m,r,x)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function Uh(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,s){switch(t.calls++,o){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Bh(a,e){return a[0]-e[0]}function Gh(a,e){return Math.abs(e[1])-Math.abs(a[1])}function pr(a,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),a.divideScalar(t)}function kh(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new qe,s=[];for(let l=0;l<8;l++)s[l]=[l,0];function c(l,u,f,d){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,h=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==h){let U=function(){P.dispose(),r.delete(u),u.removeEventListener("dispose",U)};var x=U;_!==void 0&&_.texture.dispose();const T=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,F=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let G=0;T===!0&&(G=1),b===!0&&(G=2),L===!0&&(G=3);let N=u.attributes.position.count*G,ae=1;N>e.maxTextureSize&&(ae=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const J=new Float32Array(N*ae*4*h),P=new oa(J,N,ae,h);P.type=rn,P.needsUpdate=!0;const W=G*4;for(let q=0;q<h;q++){const X=F[q],O=y[q],V=A[q],K=N*ae*4*q;for(let j=0;j<X.count;j++){const Z=j*W;T===!0&&(o.fromBufferAttribute(X,j),X.normalized===!0&&pr(o,X),J[K+Z+0]=o.x,J[K+Z+1]=o.y,J[K+Z+2]=o.z,J[K+Z+3]=0),b===!0&&(o.fromBufferAttribute(O,j),O.normalized===!0&&pr(o,O),J[K+Z+4]=o.x,J[K+Z+5]=o.y,J[K+Z+6]=o.z,J[K+Z+7]=0),L===!0&&(o.fromBufferAttribute(V,j),V.normalized===!0&&pr(o,V),J[K+Z+8]=o.x,J[K+Z+9]=o.y,J[K+Z+10]=o.z,J[K+Z+11]=V.itemSize===4?o.w:1)}}_={count:h,texture:P,size:new Ee(N,ae)},r.set(u,_),u.addEventListener("dispose",U)}let E=0;for(let T=0;T<m.length;T++)E+=m[T];const C=u.morphTargetsRelative?1:1-E;d.getUniforms().setValue(a,"morphTargetBaseInfluence",C),d.getUniforms().setValue(a,"morphTargetInfluences",m),d.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let h=n[u.id];if(h===void 0||h.length!==p){h=[];for(let b=0;b<p;b++)h[b]=[b,0];n[u.id]=h}for(let b=0;b<p;b++){const L=h[b];L[0]=b,L[1]=m[b]}h.sort(Gh);for(let b=0;b<8;b++)b<p&&h[b][1]?(s[b][0]=h[b][0],s[b][1]=h[b][1]):(s[b][0]=Number.MAX_SAFE_INTEGER,s[b][1]=0);s.sort(Bh);const _=u.morphAttributes.position,E=u.morphAttributes.normal;let C=0;for(let b=0;b<8;b++){const L=s[b],F=L[0],y=L[1];F!==Number.MAX_SAFE_INTEGER&&y?(_&&u.getAttribute("morphTarget"+b)!==_[F]&&u.setAttribute("morphTarget"+b,_[F]),E&&u.getAttribute("morphNormal"+b)!==E[F]&&u.setAttribute("morphNormal"+b,E[F]),i[b]=y,C+=y):(_&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),E&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),i[b]=0)}const T=u.morphTargetsRelative?1:1-C;d.getUniforms().setValue(a,"morphTargetBaseInfluence",T),d.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:c}}function Vh(a,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);return i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function o(){i=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const ma=new yt,ga=new oa,_a=new Do,xa=new fa,Is=[],Fs=[],Ns=new Float32Array(16),zs=new Float32Array(9),Os=new Float32Array(4);function Wn(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=Is[i];if(r===void 0&&(r=new Float32Array(i),Is[i]=r),e!==0){n.toArray(r,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(r,s)}return r}function Je(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Qe(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Fi(a,e){let t=Fs[e];t===void 0&&(t=new Int32Array(e),Fs[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Hh(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Wh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Je(t,e))return;a.uniform2fv(this.addr,e),Qe(t,e)}}function qh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Je(t,e))return;a.uniform3fv(this.addr,e),Qe(t,e)}}function Xh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Je(t,e))return;a.uniform4fv(this.addr,e),Qe(t,e)}}function Yh(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Je(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Qe(t,e)}else{if(Je(t,n))return;Os.set(n),a.uniformMatrix2fv(this.addr,!1,Os),Qe(t,n)}}function jh(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Je(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Qe(t,e)}else{if(Je(t,n))return;zs.set(n),a.uniformMatrix3fv(this.addr,!1,zs),Qe(t,n)}}function Zh(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Je(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Qe(t,e)}else{if(Je(t,n))return;Ns.set(n),a.uniformMatrix4fv(this.addr,!1,Ns),Qe(t,n)}}function $h(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Kh(a,e){const t=this.cache;Je(t,e)||(a.uniform2iv(this.addr,e),Qe(t,e))}function Jh(a,e){const t=this.cache;Je(t,e)||(a.uniform3iv(this.addr,e),Qe(t,e))}function Qh(a,e){const t=this.cache;Je(t,e)||(a.uniform4iv(this.addr,e),Qe(t,e))}function eu(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function tu(a,e){const t=this.cache;Je(t,e)||(a.uniform2uiv(this.addr,e),Qe(t,e))}function nu(a,e){const t=this.cache;Je(t,e)||(a.uniform3uiv(this.addr,e),Qe(t,e))}function iu(a,e){const t=this.cache;Je(t,e)||(a.uniform4uiv(this.addr,e),Qe(t,e))}function ru(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ma,i)}function su(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||_a,i)}function au(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||xa,i)}function ou(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ga,i)}function lu(a){switch(a){case 5126:return Hh;case 35664:return Wh;case 35665:return qh;case 35666:return Xh;case 35674:return Yh;case 35675:return jh;case 35676:return Zh;case 5124:case 35670:return $h;case 35667:case 35671:return Kh;case 35668:case 35672:return Jh;case 35669:case 35673:return Qh;case 5125:return eu;case 36294:return tu;case 36295:return nu;case 36296:return iu;case 35678:case 36198:case 36298:case 36306:case 35682:return ru;case 35679:case 36299:case 36307:return su;case 35680:case 36300:case 36308:case 36293:return au;case 36289:case 36303:case 36311:case 36292:return ou}}function cu(a,e){a.uniform1fv(this.addr,e)}function hu(a,e){const t=Wn(e,this.size,2);a.uniform2fv(this.addr,t)}function uu(a,e){const t=Wn(e,this.size,3);a.uniform3fv(this.addr,t)}function fu(a,e){const t=Wn(e,this.size,4);a.uniform4fv(this.addr,t)}function du(a,e){const t=Wn(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function pu(a,e){const t=Wn(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function mu(a,e){const t=Wn(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function gu(a,e){a.uniform1iv(this.addr,e)}function _u(a,e){a.uniform2iv(this.addr,e)}function xu(a,e){a.uniform3iv(this.addr,e)}function vu(a,e){a.uniform4iv(this.addr,e)}function Mu(a,e){a.uniform1uiv(this.addr,e)}function yu(a,e){a.uniform2uiv(this.addr,e)}function bu(a,e){a.uniform3uiv(this.addr,e)}function Su(a,e){a.uniform4uiv(this.addr,e)}function wu(a,e,t){const n=e.length,i=Fi(t,n);a.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||ma,i[r])}function Eu(a,e,t){const n=e.length,i=Fi(t,n);a.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||_a,i[r])}function Tu(a,e,t){const n=e.length,i=Fi(t,n);a.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||xa,i[r])}function Au(a,e,t){const n=e.length,i=Fi(t,n);a.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||ga,i[r])}function Cu(a){switch(a){case 5126:return cu;case 35664:return hu;case 35665:return uu;case 35666:return fu;case 35674:return du;case 35675:return pu;case 35676:return mu;case 5124:case 35670:return gu;case 35667:case 35671:return _u;case 35668:case 35672:return xu;case 35669:case 35673:return vu;case 5125:return Mu;case 36294:return yu;case 36295:return bu;case 36296:return Su;case 35678:case 36198:case 36298:case 36306:case 35682:return wu;case 35679:case 36299:case 36307:return Eu;case 35680:case 36300:case 36308:case 36293:return Tu;case 36289:case 36303:case 36311:case 36292:return Au}}class Lu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=lu(t.type)}}class Du{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Cu(t.type)}}class Ru{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const mr=/(\w+)(\])?(\[|\.)?/g;function Us(a,e){a.seq.push(e),a.map[e.id]=e}function Pu(a,e,t){const n=a.name,i=n.length;for(mr.lastIndex=0;;){const r=mr.exec(n),o=mr.lastIndex;let s=r[1];const c=r[2]==="]",l=r[3];if(c&&(s=s|0),l===void 0||l==="["&&o+2===i){Us(t,l===void 0?new Lu(s,a,e):new Du(s,a,e));break}else{let f=t.map[s];f===void 0&&(f=new Ru(s),Us(t,f)),t=f}}}class Ai{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Pu(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const s=t[r],c=n[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Bs(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let Iu=0;function Fu(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function Nu(a){switch(a){case hn:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Gs(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Fu(a.getShaderSource(e),o)}else return i}function zu(a,e){const t=Nu(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ou(a,e){let t;switch(e){case to:t="Linear";break;case no:t="Reinhard";break;case io:t="OptimizedCineon";break;case ro:t="ACESFilmic";break;case so:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Uu(a){return[a.extensionDerivatives||!!a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Jn).join(`
`)}function Bu(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gu(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),o=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[o]={type:r.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function Jn(a){return a!==""}function ks(a,e){return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vs(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ku=/^[ \t]*#include +<([\w\d./]+)>/gm;function Er(a){return a.replace(ku,Vu)}function Vu(a,e){const t=we[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Er(t)}const Hu=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Wu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hs(a){return a.replace(Wu,va).replace(Hu,qu)}function qu(a,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),va(a,e,t,n)}function va(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ws(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xu(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Ks?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Pa?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function Yu(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Bn:case Gn:e="ENVMAP_TYPE_CUBE";break;case Ri:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ju(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Gn:e="ENVMAP_MODE_REFRACTION";break}return e}function Zu(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case ea:e="ENVMAP_BLENDING_MULTIPLY";break;case Qa:e="ENVMAP_BLENDING_MIX";break;case eo:e="ENVMAP_BLENDING_ADD";break}return e}function $u(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ku(a,e,t,n){const i=a.getContext(),r=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=Xu(t),l=Yu(t),u=ju(t),f=Zu(t),d=$u(t),m=t.isWebGL2?"":Uu(t),x=Bu(r),p=i.createProgram();let h,_,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[x].filter(Jn).join(`
`),h.length>0&&(h+=`
`),_=[m,x].filter(Jn).join(`
`),_.length>0&&(_+=`
`)):(h=[Ws(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jn).join(`
`),_=[m,Ws(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ut?"#define TONE_MAPPING":"",t.toneMapping!==Ut?we.tonemapping_pars_fragment:"",t.toneMapping!==Ut?Ou("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",we.encodings_pars_fragment,zu("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jn).join(`
`)),o=Er(o),o=ks(o,t),o=Vs(o,t),s=Er(s),s=ks(s,t),s=Vs(s,t),o=Hs(o),s=Hs(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,_=["#define varying in",t.glslVersion===fs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=E+h+o,T=E+_+s,b=Bs(i,35633,C),L=Bs(i,35632,T);if(i.attachShader(p,b),i.attachShader(p,L),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),a.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),G=i.getShaderInfoLog(b).trim(),N=i.getShaderInfoLog(L).trim();let ae=!0,J=!0;if(i.getProgramParameter(p,35714)===!1){ae=!1;const P=Gs(i,b,"vertex"),W=Gs(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+P+`
`+W)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(G===""||N==="")&&(J=!1);J&&(this.diagnostics={runnable:ae,programLog:A,vertexShader:{log:G,prefix:h},fragmentShader:{log:N,prefix:_}})}i.deleteShader(b),i.deleteShader(L);let F;this.getUniforms=function(){return F===void 0&&(F=new Ai(i,p)),F};let y;return this.getAttributes=function(){return y===void 0&&(y=Gu(i,p)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Iu++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=L,this}let Ju=0;class Qu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new ef(e);t.set(e,n)}return t.get(e)}}class ef{constructor(e){this.id=Ju++,this.code=e,this.usedTimes=0}}function tf(a,e,t,n,i,r,o){const s=new la,c=new Qu,l=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,A,G,N,ae){const J=N.fog,P=ae.geometry,W=y.isMeshStandardMaterial?N.environment:null,U=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),q=!!U&&U.mapping===Ri?U.image.height:null,X=x[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const O=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,V=O!==void 0?O.length:0;let K=0;P.morphAttributes.position!==void 0&&(K=1),P.morphAttributes.normal!==void 0&&(K=2),P.morphAttributes.color!==void 0&&(K=3);let j,Z,he,ue;if(X){const Ce=At[X];j=Ce.vertexShader,Z=Ce.fragmentShader}else j=y.vertexShader,Z=y.fragmentShader,c.update(y),he=c.getVertexShaderID(y),ue=c.getFragmentShaderID(y);const k=a.getRenderTarget(),Oe=y.alphaTest>0,ye=y.clearcoat>0,xe=y.iridescence>0;return{isWebGL2:u,shaderID:X,shaderName:y.type,vertexShader:j,fragmentShader:Z,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:ae.isInstancedMesh===!0,instancingColor:ae.isInstancedMesh===!0&&ae.instanceColor!==null,supportsVertexTextures:d,outputEncoding:k===null?a.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:hn,map:!!y.map,matcap:!!y.matcap,envMap:!!U,envMapMode:U&&U.mapping,envMapCubeUVHeight:q,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===To,tangentSpaceNormalMap:y.normalMapType===Eo,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===ze,clearcoat:ye,clearcoatMap:ye&&!!y.clearcoatMap,clearcoatRoughnessMap:ye&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!y.clearcoatNormalMap,iridescence:xe,iridescenceMap:xe&&!!y.iridescenceMap,iridescenceThicknessMap:xe&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===On,alphaMap:!!y.alphaMap,alphaTest:Oe,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!P.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!J,useFog:y.fog===!0,fogExp2:J&&J.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ae.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:K,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:a.shadowMap.enabled&&G.length>0,shadowMapType:a.shadowMap.type,toneMapping:y.toneMapped?a.toneMapping:Ut,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ft,flipSided:y.side===Mt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const G in y.defines)A.push(G),A.push(y.defines[G]);return y.isRawShaderMaterial===!1&&(_(A,y),E(A,y),A.push(a.outputEncoding)),A.push(y.customProgramCacheKey),A.join()}function _(y,A){y.push(A.precision),y.push(A.outputEncoding),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.combine),y.push(A.vertexUvs),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function E(y,A){s.disableAll(),A.isWebGL2&&s.enable(0),A.supportsVertexTextures&&s.enable(1),A.instancing&&s.enable(2),A.instancingColor&&s.enable(3),A.map&&s.enable(4),A.matcap&&s.enable(5),A.envMap&&s.enable(6),A.lightMap&&s.enable(7),A.aoMap&&s.enable(8),A.emissiveMap&&s.enable(9),A.bumpMap&&s.enable(10),A.normalMap&&s.enable(11),A.objectSpaceNormalMap&&s.enable(12),A.tangentSpaceNormalMap&&s.enable(13),A.clearcoat&&s.enable(14),A.clearcoatMap&&s.enable(15),A.clearcoatRoughnessMap&&s.enable(16),A.clearcoatNormalMap&&s.enable(17),A.iridescence&&s.enable(18),A.iridescenceMap&&s.enable(19),A.iridescenceThicknessMap&&s.enable(20),A.displacementMap&&s.enable(21),A.specularMap&&s.enable(22),A.roughnessMap&&s.enable(23),A.metalnessMap&&s.enable(24),A.gradientMap&&s.enable(25),A.alphaMap&&s.enable(26),A.alphaTest&&s.enable(27),A.vertexColors&&s.enable(28),A.vertexAlphas&&s.enable(29),A.vertexUvs&&s.enable(30),A.vertexTangents&&s.enable(31),A.uvsVertexOnly&&s.enable(32),A.fog&&s.enable(33),y.push(s.mask),s.disableAll(),A.useFog&&s.enable(0),A.flatShading&&s.enable(1),A.logarithmicDepthBuffer&&s.enable(2),A.skinning&&s.enable(3),A.morphTargets&&s.enable(4),A.morphNormals&&s.enable(5),A.morphColors&&s.enable(6),A.premultipliedAlpha&&s.enable(7),A.shadowMapEnabled&&s.enable(8),A.physicallyCorrectLights&&s.enable(9),A.doubleSided&&s.enable(10),A.flipSided&&s.enable(11),A.useDepthPacking&&s.enable(12),A.dithering&&s.enable(13),A.specularIntensityMap&&s.enable(14),A.specularColorMap&&s.enable(15),A.transmission&&s.enable(16),A.transmissionMap&&s.enable(17),A.thicknessMap&&s.enable(18),A.sheen&&s.enable(19),A.sheenColorMap&&s.enable(20),A.sheenRoughnessMap&&s.enable(21),A.decodeVideoTexture&&s.enable(22),A.opaque&&s.enable(23),y.push(s.mask)}function C(y){const A=x[y.type];let G;if(A){const N=At[A];G=Vo.clone(N.uniforms)}else G=y.uniforms;return G}function T(y,A){let G;for(let N=0,ae=l.length;N<ae;N++){const J=l[N];if(J.cacheKey===A){G=J,++G.usedTimes;break}}return G===void 0&&(G=new Ku(a,A,y,r),l.push(G)),G}function b(y){if(--y.usedTimes===0){const A=l.indexOf(y);l[A]=l[l.length-1],l.pop(),y.destroy()}}function L(y){c.remove(y)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:C,acquireProgram:T,releaseProgram:b,releaseShaderCache:L,programs:l,dispose:F}}function nf(){let a=new WeakMap;function e(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function t(r){a.delete(r)}function n(r,o,s){a.get(r)[o]=s}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function rf(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function qs(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Xs(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,m,x,p,h){let _=a[e];return _===void 0?(_={id:f.id,object:f,geometry:d,material:m,groupOrder:x,renderOrder:f.renderOrder,z:p,group:h},a[e]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=m,_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=p,_.group=h),e++,_}function s(f,d,m,x,p,h){const _=o(f,d,m,x,p,h);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function c(f,d,m,x,p,h){const _=o(f,d,m,x,p,h);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function l(f,d){t.length>1&&t.sort(f||rf),n.length>1&&n.sort(d||qs),i.length>1&&i.sort(d||qs)}function u(){for(let f=e,d=a.length;f<d;f++){const m=a[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:c,finish:u,sort:l}}function sf(){let a=new WeakMap;function e(n,i){let r;return a.has(n)===!1?(r=new Xs,a.set(n,[r])):i>=a.get(n).length?(r=new Xs,a.get(n).push(r)):r=a.get(n)[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function af(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Fe};break;case"SpotLight":t={position:new D,direction:new D,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new D,halfWidth:new D,halfHeight:new D};break}return a[e.id]=t,t}}}function of(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let lf=0;function cf(a,e){return(e.castShadow?1:0)-(a.castShadow?1:0)}function hf(a,e){const t=new af,n=of(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new D);const r=new D,o=new Ye,s=new Ye;function c(u,f){let d=0,m=0,x=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,h=0,_=0,E=0,C=0,T=0,b=0,L=0;u.sort(cf);const F=f!==!0?Math.PI:1;for(let A=0,G=u.length;A<G;A++){const N=u[A],ae=N.color,J=N.intensity,P=N.distance,W=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=ae.r*J*F,m+=ae.g*J*F,x+=ae.b*J*F;else if(N.isLightProbe)for(let U=0;U<9;U++)i.probe[U].addScaledVector(N.sh.coefficients[U],J);else if(N.isDirectionalLight){const U=t.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity*F),N.castShadow){const q=N.shadow,X=n.get(N);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=N.shadow.matrix,T++}i.directional[p]=U,p++}else if(N.isSpotLight){const U=t.get(N);if(U.position.setFromMatrixPosition(N.matrixWorld),U.color.copy(ae).multiplyScalar(J*F),U.distance=P,U.coneCos=Math.cos(N.angle),U.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),U.decay=N.decay,N.castShadow){const q=N.shadow,X=n.get(N);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=W,i.spotShadowMatrix[_]=N.shadow.matrix,L++}i.spot[_]=U,_++}else if(N.isRectAreaLight){const U=t.get(N);U.color.copy(ae).multiplyScalar(J),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),i.rectArea[E]=U,E++}else if(N.isPointLight){const U=t.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity*F),U.distance=N.distance,U.decay=N.decay,N.castShadow){const q=N.shadow,X=n.get(N);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,i.pointShadow[h]=X,i.pointShadowMap[h]=W,i.pointShadowMatrix[h]=N.shadow.matrix,b++}i.point[h]=U,h++}else if(N.isHemisphereLight){const U=t.get(N);U.skyColor.copy(N.color).multiplyScalar(J*F),U.groundColor.copy(N.groundColor).multiplyScalar(J*F),i.hemi[C]=U,C++}}E>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=x;const y=i.hash;(y.directionalLength!==p||y.pointLength!==h||y.spotLength!==_||y.rectAreaLength!==E||y.hemiLength!==C||y.numDirectionalShadows!==T||y.numPointShadows!==b||y.numSpotShadows!==L)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=E,i.point.length=h,i.hemi.length=C,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=b,i.spotShadowMatrix.length=L,y.directionalLength=p,y.pointLength=h,y.spotLength=_,y.rectAreaLength=E,y.hemiLength=C,y.numDirectionalShadows=T,y.numPointShadows=b,y.numSpotShadows=L,i.version=lf++)}function l(u,f){let d=0,m=0,x=0,p=0,h=0;const _=f.matrixWorldInverse;for(let E=0,C=u.length;E<C;E++){const T=u[E];if(T.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),d++}else if(T.isSpotLight){const b=i.spot[x];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),x++}else if(T.isRectAreaLight){const b=i.rectArea[p];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(_),s.identity(),o.copy(T.matrixWorld),o.premultiply(_),s.extractRotation(o),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),p++}else if(T.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(_),m++}else if(T.isHemisphereLight){const b=i.hemi[h];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(_),h++}}}return{setup:c,setupView:l,state:i}}function Ys(a,e){const t=new hf(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function s(f){i.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function uf(a,e){let t=new WeakMap;function n(r,o=0){let s;return t.has(r)===!1?(s=new Ys(a,e),t.set(r,[s])):o>=t.get(r).length?(s=new Ys(a,e),t.get(r).push(s)):s=t.get(r)[o],s}function i(){t=new WeakMap}return{get:n,dispose:i}}class ff extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=So,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class df extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gf(a,e,t){let n=new da;const i=new Ee,r=new Ee,o=new qe,s=new ff({depthPacking:wo}),c=new df,l={},u=t.maxTextureSize,f={0:Mt,1:Qn,2:ft},d=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:pf,fragmentShader:mf}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new mn;x.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ot(x,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ks,this.render=function(T,b,L){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||T.length===0)return;const F=a.getRenderTarget(),y=a.getActiveCubeFace(),A=a.getActiveMipmapLevel(),G=a.state;G.setBlending(jt),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);for(let N=0,ae=T.length;N<ae;N++){const J=T[N],P=J.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const W=P.getFrameExtents();if(i.multiply(W),r.copy(P.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/W.x),i.x=r.x*W.x,P.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/W.y),i.y=r.y*W.y,P.mapSize.y=r.y)),P.map===null){const q=this.type!==Kn?{minFilter:tt,magFilter:tt}:{};P.map=new un(i.x,i.y,q),P.map.texture.name=J.name+".shadowMap",P.camera.updateProjectionMatrix()}a.setRenderTarget(P.map),a.clear();const U=P.getViewportCount();for(let q=0;q<U;q++){const X=P.getViewport(q);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),G.viewport(o),P.updateMatrices(J,q),n=P.getFrustum(),C(b,L,P.camera,J,this.type)}P.isPointLightShadow!==!0&&this.type===Kn&&_(P,L),P.needsUpdate=!1}h.needsUpdate=!1,a.setRenderTarget(F,y,A)};function _(T,b){const L=e.update(p);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new un(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,a.setRenderTarget(T.mapPass),a.clear(),a.renderBufferDirect(b,null,L,d,p,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,a.setRenderTarget(T.map),a.clear(),a.renderBufferDirect(b,null,L,m,p,null)}function E(T,b,L,F,y,A){let G=null;const N=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0?G=N:G=L.isPointLight===!0?c:s,a.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const ae=G.uuid,J=b.uuid;let P=l[ae];P===void 0&&(P={},l[ae]=P);let W=P[J];W===void 0&&(W=G.clone(),P[J]=W),G=W}return G.visible=b.visible,G.wireframe=b.wireframe,A===Kn?G.side=b.shadowSide!==null?b.shadowSide:b.side:G.side=b.shadowSide!==null?b.shadowSide:f[b.side],G.alphaMap=b.alphaMap,G.alphaTest=b.alphaTest,G.clipShadows=b.clipShadows,G.clippingPlanes=b.clippingPlanes,G.clipIntersection=b.clipIntersection,G.displacementMap=b.displacementMap,G.displacementScale=b.displacementScale,G.displacementBias=b.displacementBias,G.wireframeLinewidth=b.wireframeLinewidth,G.linewidth=b.linewidth,L.isPointLight===!0&&G.isMeshDistanceMaterial===!0&&(G.referencePosition.setFromMatrixPosition(L.matrixWorld),G.nearDistance=F,G.farDistance=y),G}function C(T,b,L,F,y){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const N=e.update(T),ae=T.material;if(Array.isArray(ae)){const J=N.groups;for(let P=0,W=J.length;P<W;P++){const U=J[P],q=ae[U.materialIndex];if(q&&q.visible){const X=E(T,q,F,L.near,L.far,y);a.renderBufferDirect(L,null,N,X,T,U)}}}else if(ae.visible){const J=E(T,ae,F,L.near,L.far,y);a.renderBufferDirect(L,null,N,J,T,null)}}const G=T.children;for(let N=0,ae=G.length;N<ae;N++)C(G[N],b,L,F,y)}}function _f(a,e,t){const n=t.isWebGL2;function i(){let w=!1;const te=new qe;let Q=null;const de=new qe(0,0,0,0);return{setMask:function(oe){Q!==oe&&!w&&(a.colorMask(oe,oe,oe,oe),Q=oe)},setLocked:function(oe){w=oe},setClear:function(oe,fe,ne,_e,Re){Re===!0&&(oe*=_e,fe*=_e,ne*=_e),te.set(oe,fe,ne,_e),de.equals(te)===!1&&(a.clearColor(oe,fe,ne,_e),de.copy(te))},reset:function(){w=!1,Q=null,de.set(-1,0,0,0)}}}function r(){let w=!1,te=null,Q=null,de=null;return{setTest:function(oe){oe?ue(2929):k(2929)},setMask:function(oe){te!==oe&&!w&&(a.depthMask(oe),te=oe)},setFunc:function(oe){if(Q!==oe){if(oe)switch(oe){case Xa:a.depthFunc(512);break;case Ya:a.depthFunc(519);break;case ja:a.depthFunc(513);break;case xr:a.depthFunc(515);break;case Za:a.depthFunc(514);break;case $a:a.depthFunc(518);break;case Ka:a.depthFunc(516);break;case Ja:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);Q=oe}},setLocked:function(oe){w=oe},setClear:function(oe){de!==oe&&(a.clearDepth(oe),de=oe)},reset:function(){w=!1,te=null,Q=null,de=null}}}function o(){let w=!1,te=null,Q=null,de=null,oe=null,fe=null,ne=null,_e=null,Re=null;return{setTest:function(Pe){w||(Pe?ue(2960):k(2960))},setMask:function(Pe){te!==Pe&&!w&&(a.stencilMask(Pe),te=Pe)},setFunc:function(Pe,$e,St){(Q!==Pe||de!==$e||oe!==St)&&(a.stencilFunc(Pe,$e,St),Q=Pe,de=$e,oe=St)},setOp:function(Pe,$e,St){(fe!==Pe||ne!==$e||_e!==St)&&(a.stencilOp(Pe,$e,St),fe=Pe,ne=$e,_e=St)},setLocked:function(Pe){w=Pe},setClear:function(Pe){Re!==Pe&&(a.clearStencil(Pe),Re=Pe)},reset:function(){w=!1,te=null,Q=null,de=null,oe=null,fe=null,ne=null,_e=null,Re=null}}}const s=new i,c=new r,l=new o;let u={},f={},d=new WeakMap,m=[],x=null,p=!1,h=null,_=null,E=null,C=null,T=null,b=null,L=null,F=!1,y=null,A=null,G=null,N=null,ae=null;const J=a.getParameter(35661);let P=!1,W=0;const U=a.getParameter(7938);U.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(U)[1]),P=W>=1):U.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),P=W>=2);let q=null,X={};const O=a.getParameter(3088),V=a.getParameter(2978),K=new qe().fromArray(O),j=new qe().fromArray(V);function Z(w,te,Q){const de=new Uint8Array(4),oe=a.createTexture();a.bindTexture(w,oe),a.texParameteri(w,10241,9728),a.texParameteri(w,10240,9728);for(let fe=0;fe<Q;fe++)a.texImage2D(te+fe,0,6408,1,1,0,6408,5121,de);return oe}const he={};he[3553]=Z(3553,3553,1),he[34067]=Z(34067,34069,6),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ue(2929),c.setFunc(xr),Ge(!1),He(zr),ue(2884),Se(jt);function ue(w){u[w]!==!0&&(a.enable(w),u[w]=!0)}function k(w){u[w]!==!1&&(a.disable(w),u[w]=!1)}function Oe(w,te){return f[w]!==te?(a.bindFramebuffer(w,te),f[w]=te,n&&(w===36009&&(f[36160]=te),w===36160&&(f[36009]=te)),!0):!1}function ye(w,te){let Q=m,de=!1;if(w)if(Q=d.get(te),Q===void 0&&(Q=[],d.set(te,Q)),w.isWebGLMultipleRenderTargets){const oe=w.texture;if(Q.length!==oe.length||Q[0]!==36064){for(let fe=0,ne=oe.length;fe<ne;fe++)Q[fe]=36064+fe;Q.length=oe.length,de=!0}}else Q[0]!==36064&&(Q[0]=36064,de=!0);else Q[0]!==1029&&(Q[0]=1029,de=!0);de&&(t.isWebGL2?a.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function xe(w){return x!==w?(a.useProgram(w),x=w,!0):!1}const ce={[Nn]:32774,[Na]:32778,[za]:32779};if(n)ce[Gr]=32775,ce[kr]=32776;else{const w=e.get("EXT_blend_minmax");w!==null&&(ce[Gr]=w.MIN_EXT,ce[kr]=w.MAX_EXT)}const Ce={[Oa]:0,[Ua]:1,[Ba]:768,[Js]:770,[qa]:776,[Ha]:774,[ka]:772,[Ga]:769,[Qs]:771,[Wa]:775,[Va]:773};function Se(w,te,Q,de,oe,fe,ne,_e){if(w===jt){p===!0&&(k(3042),p=!1);return}if(p===!1&&(ue(3042),p=!0),w!==Fa){if(w!==h||_e!==F){if((_!==Nn||T!==Nn)&&(a.blendEquation(32774),_=Nn,T=Nn),_e)switch(w){case On:a.blendFuncSeparate(1,771,1,771);break;case Or:a.blendFunc(1,1);break;case Ur:a.blendFuncSeparate(0,769,0,1);break;case Br:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case On:a.blendFuncSeparate(770,771,1,771);break;case Or:a.blendFunc(770,1);break;case Ur:a.blendFuncSeparate(0,769,0,1);break;case Br:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}E=null,C=null,b=null,L=null,h=w,F=_e}return}oe=oe||te,fe=fe||Q,ne=ne||de,(te!==_||oe!==T)&&(a.blendEquationSeparate(ce[te],ce[oe]),_=te,T=oe),(Q!==E||de!==C||fe!==b||ne!==L)&&(a.blendFuncSeparate(Ce[Q],Ce[de],Ce[fe],Ce[ne]),E=Q,C=de,b=fe,L=ne),h=w,F=null}function pe(w,te){w.side===ft?k(2884):ue(2884);let Q=w.side===Mt;te&&(Q=!Q),Ge(Q),w.blending===On&&w.transparent===!1?Se(jt):Se(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.premultipliedAlpha),c.setFunc(w.depthFunc),c.setTest(w.depthTest),c.setMask(w.depthWrite),s.setMask(w.colorWrite);const de=w.stencilWrite;l.setTest(de),de&&(l.setMask(w.stencilWriteMask),l.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),l.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),it(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?ue(32926):k(32926)}function Ge(w){y!==w&&(w?a.frontFace(2304):a.frontFace(2305),y=w)}function He(w){w!==Da?(ue(2884),w!==A&&(w===zr?a.cullFace(1029):w===Ra?a.cullFace(1028):a.cullFace(1032))):k(2884),A=w}function Xe(w){w!==G&&(P&&a.lineWidth(w),G=w)}function it(w,te,Q){w?(ue(32823),(N!==te||ae!==Q)&&(a.polygonOffset(te,Q),N=te,ae=Q)):k(32823)}function ke(w){w?ue(3089):k(3089)}function De(w){w===void 0&&(w=33984+J-1),q!==w&&(a.activeTexture(w),q=w)}function ot(w,te){q===null&&De();let Q=X[q];Q===void 0&&(Q={type:void 0,texture:void 0},X[q]=Q),(Q.type!==w||Q.texture!==te)&&(a.bindTexture(w,te||he[w]),Q.type=w,Q.texture=te)}function lt(){const w=X[q];w!==void 0&&w.type!==void 0&&(a.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function S(){try{a.compressedTexImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function g(){try{a.texSubImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function B(){try{a.texSubImage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function $(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ie(){try{a.texStorage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function le(){try{a.texStorage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function me(){try{a.texImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function v(){try{a.texImage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Y(w){K.equals(w)===!1&&(a.scissor(w.x,w.y,w.z,w.w),K.copy(w))}function re(w){j.equals(w)===!1&&(a.viewport(w.x,w.y,w.z,w.w),j.copy(w))}function ee(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},q=null,X={},f={},d=new WeakMap,m=[],x=null,p=!1,h=null,_=null,E=null,C=null,T=null,b=null,L=null,F=!1,y=null,A=null,G=null,N=null,ae=null,K.set(0,0,a.canvas.width,a.canvas.height),j.set(0,0,a.canvas.width,a.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:ue,disable:k,bindFramebuffer:Oe,drawBuffers:ye,useProgram:xe,setBlending:Se,setMaterial:pe,setFlipSided:Ge,setCullFace:He,setLineWidth:Xe,setPolygonOffset:it,setScissorTest:ke,activeTexture:De,bindTexture:ot,unbindTexture:lt,compressedTexImage2D:S,texImage2D:me,texImage3D:v,texStorage2D:ie,texStorage3D:le,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:$,scissor:Y,viewport:re,reset:ee}}function xf(a,e,t,n,i,r,o){const s=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(S,g){return _?new OffscreenCanvas(S,g):Ci("canvas")}function C(S,g,B,$){let ie=1;if((S.width>$||S.height>$)&&(ie=$/Math.max(S.width,S.height)),ie<1||g===!0)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap){const le=g?wr:Math.floor,me=le(ie*S.width),v=le(ie*S.height);p===void 0&&(p=E(me,v));const Y=B?E(me,v):p;return Y.width=me,Y.height=v,Y.getContext("2d").drawImage(S,0,0,me,v),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+me+"x"+v+")."),Y}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function T(S){return ps(S.width)&&ps(S.height)}function b(S){return s?!1:S.wrapS!==vt||S.wrapT!==vt||S.minFilter!==tt&&S.minFilter!==dt}function L(S,g){return S.generateMipmaps&&g&&S.minFilter!==tt&&S.minFilter!==dt}function F(S){a.generateMipmap(S)}function y(S,g,B,$,ie=!1){if(s===!1)return g;if(S!==null){if(a[S]!==void 0)return a[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let le=g;return g===6403&&(B===5126&&(le=33326),B===5131&&(le=33325),B===5121&&(le=33321)),g===33319&&(B===5126&&(le=33328),B===5131&&(le=33327),B===5121&&(le=33323)),g===6408&&(B===5126&&(le=34836),B===5131&&(le=34842),B===5121&&(le=$===ze&&ie===!1?35907:32856),B===32819&&(le=32854),B===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function A(S,g,B){return L(S,B)===!0||S.isFramebufferTexture&&S.minFilter!==tt&&S.minFilter!==dt?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function G(S){return S===tt||S===Vr||S===Hr?9728:9729}function N(S){const g=S.target;g.removeEventListener("dispose",N),J(g),g.isVideoTexture&&x.delete(g)}function ae(S){const g=S.target;g.removeEventListener("dispose",ae),W(g)}function J(S){const g=n.get(S);if(g.__webglInit===void 0)return;const B=S.source,$=h.get(B);if($){const ie=$[g.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(S),Object.keys($).length===0&&h.delete(B)}n.remove(S)}function P(S){const g=n.get(S);a.deleteTexture(g.__webglTexture);const B=S.source,$=h.get(B);delete $[g.__cacheKey],o.memory.textures--}function W(S){const g=S.texture,B=n.get(S),$=n.get(g);if($.__webglTexture!==void 0&&(a.deleteTexture($.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)a.deleteFramebuffer(B.__webglFramebuffer[ie]),B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer[ie]);else{if(a.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&a.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ie=0;ie<B.__webglColorRenderbuffer.length;ie++)B.__webglColorRenderbuffer[ie]&&a.deleteRenderbuffer(B.__webglColorRenderbuffer[ie]);B.__webglDepthRenderbuffer&&a.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ie=0,le=g.length;ie<le;ie++){const me=n.get(g[ie]);me.__webglTexture&&(a.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(g[ie])}n.remove(g),n.remove(S)}let U=0;function q(){U=0}function X(){const S=U;return S>=c&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+c),U+=1,S}function O(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.encoding),g.join()}function V(S,g){const B=n.get(S);if(S.isVideoTexture&&ot(S),S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){const $=S.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(B,S,g);return}}t.activeTexture(33984+g),t.bindTexture(3553,B.__webglTexture)}function K(S,g){const B=n.get(S);if(S.version>0&&B.__version!==S.version){ye(B,S,g);return}t.activeTexture(33984+g),t.bindTexture(35866,B.__webglTexture)}function j(S,g){const B=n.get(S);if(S.version>0&&B.__version!==S.version){ye(B,S,g);return}t.activeTexture(33984+g),t.bindTexture(32879,B.__webglTexture)}function Z(S,g){const B=n.get(S);if(S.version>0&&B.__version!==S.version){xe(B,S,g);return}t.activeTexture(33984+g),t.bindTexture(34067,B.__webglTexture)}const he={[yr]:10497,[vt]:33071,[br]:33648},ue={[tt]:9728,[Vr]:9984,[Hr]:9986,[dt]:9729,[ao]:9985,[Pi]:9987};function k(S,g,B){if(B?(a.texParameteri(S,10242,he[g.wrapS]),a.texParameteri(S,10243,he[g.wrapT]),(S===32879||S===35866)&&a.texParameteri(S,32882,he[g.wrapR]),a.texParameteri(S,10240,ue[g.magFilter]),a.texParameteri(S,10241,ue[g.minFilter])):(a.texParameteri(S,10242,33071),a.texParameteri(S,10243,33071),(S===32879||S===35866)&&a.texParameteri(S,32882,33071),(g.wrapS!==vt||g.wrapT!==vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(S,10240,G(g.magFilter)),a.texParameteri(S,10241,G(g.minFilter)),g.minFilter!==tt&&g.minFilter!==dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(g.type===rn&&e.has("OES_texture_float_linear")===!1||s===!1&&g.type===ei&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||n.get(g).__currentAnisotropy)&&(a.texParameterf(S,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy)}}function Oe(S,g){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",N));const $=g.source;let ie=h.get($);ie===void 0&&(ie={},h.set($,ie));const le=O(g);if(le!==S.__cacheKey){ie[le]===void 0&&(ie[le]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ie[le].usedTimes++;const me=ie[S.__cacheKey];me!==void 0&&(ie[S.__cacheKey].usedTimes--,me.usedTimes===0&&P(g)),S.__cacheKey=le,S.__webglTexture=ie[le].texture}return B}function ye(S,g,B){let $=3553;g.isDataArrayTexture&&($=35866),g.isData3DTexture&&($=32879);const ie=Oe(S,g),le=g.source;if(t.activeTexture(33984+B),t.bindTexture($,S.__webglTexture),le.version!==le.__currentVersion||ie===!0){a.pixelStorei(37440,g.flipY),a.pixelStorei(37441,g.premultiplyAlpha),a.pixelStorei(3317,g.unpackAlignment),a.pixelStorei(37443,0);const me=b(g)&&T(g.image)===!1;let v=C(g.image,me,!1,u);v=lt(g,v);const Y=T(v)||s,re=r.convert(g.format,g.encoding);let ee=r.convert(g.type),w=y(g.internalFormat,re,ee,g.encoding,g.isVideoTexture);k($,g,Y);let te;const Q=g.mipmaps,de=s&&g.isVideoTexture!==!0,oe=le.__currentVersion===void 0||ie===!0,fe=A(g,v,Y);if(g.isDepthTexture)w=6402,s?g.type===rn?w=36012:g.type===nn?w=33190:g.type===Un?w=35056:w=33189:g.type===rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===an&&w===6402&&g.type!==na&&g.type!==nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=nn,ee=r.convert(g.type)),g.format===kn&&w===6402&&(w=34041,g.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Un,ee=r.convert(g.type))),oe&&(de?t.texStorage2D(3553,1,w,v.width,v.height):t.texImage2D(3553,0,w,v.width,v.height,0,re,ee,null));else if(g.isDataTexture)if(Q.length>0&&Y){de&&oe&&t.texStorage2D(3553,fe,w,Q[0].width,Q[0].height);for(let ne=0,_e=Q.length;ne<_e;ne++)te=Q[ne],de?t.texSubImage2D(3553,ne,0,0,te.width,te.height,re,ee,te.data):t.texImage2D(3553,ne,w,te.width,te.height,0,re,ee,te.data);g.generateMipmaps=!1}else de?(oe&&t.texStorage2D(3553,fe,w,v.width,v.height),t.texSubImage2D(3553,0,0,0,v.width,v.height,re,ee,v.data)):t.texImage2D(3553,0,w,v.width,v.height,0,re,ee,v.data);else if(g.isCompressedTexture){de&&oe&&t.texStorage2D(3553,fe,w,Q[0].width,Q[0].height);for(let ne=0,_e=Q.length;ne<_e;ne++)te=Q[ne],g.format!==Ct?re!==null?de?t.compressedTexSubImage2D(3553,ne,0,0,te.width,te.height,re,te.data):t.compressedTexImage2D(3553,ne,w,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?t.texSubImage2D(3553,ne,0,0,te.width,te.height,re,ee,te.data):t.texImage2D(3553,ne,w,te.width,te.height,0,re,ee,te.data)}else if(g.isDataArrayTexture)de?(oe&&t.texStorage3D(35866,fe,w,v.width,v.height,v.depth),t.texSubImage3D(35866,0,0,0,0,v.width,v.height,v.depth,re,ee,v.data)):t.texImage3D(35866,0,w,v.width,v.height,v.depth,0,re,ee,v.data);else if(g.isData3DTexture)de?(oe&&t.texStorage3D(32879,fe,w,v.width,v.height,v.depth),t.texSubImage3D(32879,0,0,0,0,v.width,v.height,v.depth,re,ee,v.data)):t.texImage3D(32879,0,w,v.width,v.height,v.depth,0,re,ee,v.data);else if(g.isFramebufferTexture){if(oe)if(de)t.texStorage2D(3553,fe,w,v.width,v.height);else{let ne=v.width,_e=v.height;for(let Re=0;Re<fe;Re++)t.texImage2D(3553,Re,w,ne,_e,0,re,ee,null),ne>>=1,_e>>=1}}else if(Q.length>0&&Y){de&&oe&&t.texStorage2D(3553,fe,w,Q[0].width,Q[0].height);for(let ne=0,_e=Q.length;ne<_e;ne++)te=Q[ne],de?t.texSubImage2D(3553,ne,0,0,re,ee,te):t.texImage2D(3553,ne,w,re,ee,te);g.generateMipmaps=!1}else de?(oe&&t.texStorage2D(3553,fe,w,v.width,v.height),t.texSubImage2D(3553,0,0,0,re,ee,v)):t.texImage2D(3553,0,w,re,ee,v);L(g,Y)&&F($),le.__currentVersion=le.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function xe(S,g,B){if(g.image.length!==6)return;const $=Oe(S,g),ie=g.source;if(t.activeTexture(33984+B),t.bindTexture(34067,S.__webglTexture),ie.version!==ie.__currentVersion||$===!0){a.pixelStorei(37440,g.flipY),a.pixelStorei(37441,g.premultiplyAlpha),a.pixelStorei(3317,g.unpackAlignment),a.pixelStorei(37443,0);const le=g.isCompressedTexture||g.image[0].isCompressedTexture,me=g.image[0]&&g.image[0].isDataTexture,v=[];for(let ne=0;ne<6;ne++)!le&&!me?v[ne]=C(g.image[ne],!1,!0,l):v[ne]=me?g.image[ne].image:g.image[ne],v[ne]=lt(g,v[ne]);const Y=v[0],re=T(Y)||s,ee=r.convert(g.format,g.encoding),w=r.convert(g.type),te=y(g.internalFormat,ee,w,g.encoding),Q=s&&g.isVideoTexture!==!0,de=ie.__currentVersion===void 0||$===!0;let oe=A(g,Y,re);k(34067,g,re);let fe;if(le){Q&&de&&t.texStorage2D(34067,oe,te,Y.width,Y.height);for(let ne=0;ne<6;ne++){fe=v[ne].mipmaps;for(let _e=0;_e<fe.length;_e++){const Re=fe[_e];g.format!==Ct?ee!==null?Q?t.compressedTexSubImage2D(34069+ne,_e,0,0,Re.width,Re.height,ee,Re.data):t.compressedTexImage2D(34069+ne,_e,te,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?t.texSubImage2D(34069+ne,_e,0,0,Re.width,Re.height,ee,w,Re.data):t.texImage2D(34069+ne,_e,te,Re.width,Re.height,0,ee,w,Re.data)}}}else{fe=g.mipmaps,Q&&de&&(fe.length>0&&oe++,t.texStorage2D(34067,oe,te,v[0].width,v[0].height));for(let ne=0;ne<6;ne++)if(me){Q?t.texSubImage2D(34069+ne,0,0,0,v[ne].width,v[ne].height,ee,w,v[ne].data):t.texImage2D(34069+ne,0,te,v[ne].width,v[ne].height,0,ee,w,v[ne].data);for(let _e=0;_e<fe.length;_e++){const Pe=fe[_e].image[ne].image;Q?t.texSubImage2D(34069+ne,_e+1,0,0,Pe.width,Pe.height,ee,w,Pe.data):t.texImage2D(34069+ne,_e+1,te,Pe.width,Pe.height,0,ee,w,Pe.data)}}else{Q?t.texSubImage2D(34069+ne,0,0,0,ee,w,v[ne]):t.texImage2D(34069+ne,0,te,ee,w,v[ne]);for(let _e=0;_e<fe.length;_e++){const Re=fe[_e];Q?t.texSubImage2D(34069+ne,_e+1,0,0,ee,w,Re.image[ne]):t.texImage2D(34069+ne,_e+1,te,ee,w,Re.image[ne])}}}L(g,re)&&F(34067),ie.__currentVersion=ie.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function ce(S,g,B,$,ie){const le=r.convert(B.format,B.encoding),me=r.convert(B.type),v=y(B.internalFormat,le,me,B.encoding);n.get(g).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,v,g.width,g.height,g.depth,0,le,me,null):t.texImage2D(ie,0,v,g.width,g.height,0,le,me,null)),t.bindFramebuffer(36160,S),De(g)?d.framebufferTexture2DMultisampleEXT(36160,$,ie,n.get(B).__webglTexture,0,ke(g)):a.framebufferTexture2D(36160,$,ie,n.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ce(S,g,B){if(a.bindRenderbuffer(36161,S),g.depthBuffer&&!g.stencilBuffer){let $=33189;if(B||De(g)){const ie=g.depthTexture;ie&&ie.isDepthTexture&&(ie.type===rn?$=36012:ie.type===nn&&($=33190));const le=ke(g);De(g)?d.renderbufferStorageMultisampleEXT(36161,le,$,g.width,g.height):a.renderbufferStorageMultisample(36161,le,$,g.width,g.height)}else a.renderbufferStorage(36161,$,g.width,g.height);a.framebufferRenderbuffer(36160,36096,36161,S)}else if(g.depthBuffer&&g.stencilBuffer){const $=ke(g);B&&De(g)===!1?a.renderbufferStorageMultisample(36161,$,35056,g.width,g.height):De(g)?d.renderbufferStorageMultisampleEXT(36161,$,35056,g.width,g.height):a.renderbufferStorage(36161,34041,g.width,g.height),a.framebufferRenderbuffer(36160,33306,36161,S)}else{const $=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let ie=0;ie<$.length;ie++){const le=$[ie],me=r.convert(le.format,le.encoding),v=r.convert(le.type),Y=y(le.internalFormat,me,v,le.encoding),re=ke(g);B&&De(g)===!1?a.renderbufferStorageMultisample(36161,re,Y,g.width,g.height):De(g)?d.renderbufferStorageMultisampleEXT(36161,re,Y,g.width,g.height):a.renderbufferStorage(36161,Y,g.width,g.height)}}a.bindRenderbuffer(36161,null)}function Se(S,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),V(g.depthTexture,0);const $=n.get(g.depthTexture).__webglTexture,ie=ke(g);if(g.depthTexture.format===an)De(g)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,ie):a.framebufferTexture2D(36160,36096,3553,$,0);else if(g.depthTexture.format===kn)De(g)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,ie):a.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function pe(S){const g=n.get(S),B=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!g.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Se(g.__webglFramebuffer,S)}else if(B){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]=a.createRenderbuffer(),Ce(g.__webglDepthbuffer[$],S,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=a.createRenderbuffer(),Ce(g.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function Ge(S,g,B){const $=n.get(S);g!==void 0&&ce($.__webglFramebuffer,S,S.texture,36064,3553),B!==void 0&&pe(S)}function He(S){const g=S.texture,B=n.get(S),$=n.get(g);S.addEventListener("dispose",ae),S.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=a.createTexture()),$.__version=g.version,o.memory.textures++);const ie=S.isWebGLCubeRenderTarget===!0,le=S.isWebGLMultipleRenderTargets===!0,me=T(S)||s;if(ie){B.__webglFramebuffer=[];for(let v=0;v<6;v++)B.__webglFramebuffer[v]=a.createFramebuffer()}else{if(B.__webglFramebuffer=a.createFramebuffer(),le)if(i.drawBuffers){const v=S.texture;for(let Y=0,re=v.length;Y<re;Y++){const ee=n.get(v[Y]);ee.__webglTexture===void 0&&(ee.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&S.samples>0&&De(S)===!1){const v=le?g:[g];B.__webglMultisampledFramebuffer=a.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let Y=0;Y<v.length;Y++){const re=v[Y];B.__webglColorRenderbuffer[Y]=a.createRenderbuffer(),a.bindRenderbuffer(36161,B.__webglColorRenderbuffer[Y]);const ee=r.convert(re.format,re.encoding),w=r.convert(re.type),te=y(re.internalFormat,ee,w,re.encoding),Q=ke(S);a.renderbufferStorageMultisample(36161,Q,te,S.width,S.height),a.framebufferRenderbuffer(36160,36064+Y,36161,B.__webglColorRenderbuffer[Y])}a.bindRenderbuffer(36161,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=a.createRenderbuffer(),Ce(B.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,$.__webglTexture),k(34067,g,me);for(let v=0;v<6;v++)ce(B.__webglFramebuffer[v],S,g,36064,34069+v);L(g,me)&&F(34067),t.unbindTexture()}else if(le){const v=S.texture;for(let Y=0,re=v.length;Y<re;Y++){const ee=v[Y],w=n.get(ee);t.bindTexture(3553,w.__webglTexture),k(3553,ee,me),ce(B.__webglFramebuffer,S,ee,36064+Y,3553),L(ee,me)&&F(3553)}t.unbindTexture()}else{let v=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(s?v=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(v,$.__webglTexture),k(v,g,me),ce(B.__webglFramebuffer,S,g,36064,v),L(g,me)&&F(v),t.unbindTexture()}S.depthBuffer&&pe(S)}function Xe(S){const g=T(S)||s,B=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let $=0,ie=B.length;$<ie;$++){const le=B[$];if(L(le,g)){const me=S.isWebGLCubeRenderTarget?34067:3553,v=n.get(le).__webglTexture;t.bindTexture(me,v),F(me),t.unbindTexture()}}}function it(S){if(s&&S.samples>0&&De(S)===!1){const g=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],B=S.width,$=S.height;let ie=16384;const le=[],me=S.stencilBuffer?33306:36096,v=n.get(S),Y=S.isWebGLMultipleRenderTargets===!0;if(Y)for(let re=0;re<g.length;re++)t.bindFramebuffer(36160,v.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+re,36161,null),t.bindFramebuffer(36160,v.__webglFramebuffer),a.framebufferTexture2D(36009,36064+re,3553,null,0);t.bindFramebuffer(36008,v.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,v.__webglFramebuffer);for(let re=0;re<g.length;re++){le.push(36064+re),S.depthBuffer&&le.push(me);const ee=v.__ignoreDepthValues!==void 0?v.__ignoreDepthValues:!1;if(ee===!1&&(S.depthBuffer&&(ie|=256),S.stencilBuffer&&(ie|=1024)),Y&&a.framebufferRenderbuffer(36008,36064,36161,v.__webglColorRenderbuffer[re]),ee===!0&&(a.invalidateFramebuffer(36008,[me]),a.invalidateFramebuffer(36009,[me])),Y){const w=n.get(g[re]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,w,0)}a.blitFramebuffer(0,0,B,$,0,0,B,$,ie,9728),m&&a.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let re=0;re<g.length;re++){t.bindFramebuffer(36160,v.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+re,36161,v.__webglColorRenderbuffer[re]);const ee=n.get(g[re]).__webglTexture;t.bindFramebuffer(36160,v.__webglFramebuffer),a.framebufferTexture2D(36009,36064+re,3553,ee,0)}t.bindFramebuffer(36009,v.__webglMultisampledFramebuffer)}}function ke(S){return Math.min(f,S.samples)}function De(S){const g=n.get(S);return s&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ot(S){const g=o.render.frame;x.get(S)!==g&&(x.set(S,g),S.update())}function lt(S,g){const B=S.encoding,$=S.format,ie=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Sr||B!==hn&&(B===ze?s===!1?e.has("EXT_sRGB")===!0&&$===Ct?(S.format=Sr,S.minFilter=dt,S.generateMipmaps=!1):g=sa.sRGBToLinear(g):($!==Ct||ie!==cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),g}this.allocateTextureUnit=X,this.resetTextureUnits=q,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=j,this.setTextureCube=Z,this.rebindTextures=Ge,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=De}function vf(a,e,t){const n=t.isWebGL2;function i(r,o=null){let s;if(r===cn)return 5121;if(r===ho)return 32819;if(r===uo)return 32820;if(r===oo)return 5120;if(r===lo)return 5122;if(r===na)return 5123;if(r===co)return 5124;if(r===nn)return 5125;if(r===rn)return 5126;if(r===ei)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===fo)return 6406;if(r===Ct)return 6408;if(r===mo)return 6409;if(r===go)return 6410;if(r===an)return 6402;if(r===kn)return 34041;if(r===_o)return 6403;if(r===po)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Sr)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===xo)return 36244;if(r===vo)return 33319;if(r===Mo)return 33320;if(r===yo)return 36249;if(r===Ui||r===Bi||r===Gi||r===ki)if(o===ze)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Ui)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bi)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gi)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ki)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Ui)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bi)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gi)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ki)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wr||r===qr||r===Xr||r===Yr)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Wr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bo)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===jr||r===Zr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===jr)return o===ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Zr)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$r||r===Kr||r===Jr||r===Qr||r===es||r===ts||r===ns||r===is||r===rs||r===ss||r===as||r===os||r===ls||r===cs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===$r)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kr)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jr)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qr)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===es)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ts)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ns)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===is)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rs)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ss)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===as)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===os)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ls)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cs)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===hs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===hs)return o===ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Un?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class Mf extends pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ei extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yf={type:"move"};class gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,n);if(l.joints[p.jointName]===void 0){const E=new Ei;E.matrixAutoUpdate=!1,E.visible=!1,l.joints[p.jointName]=E,l.add(E)}const _=l.joints[p.jointName];h!==null&&(_.matrix.fromArray(h.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=h.radius),_.visible=h!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,x=.005;l.inputState.pinching&&d>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(yf)))}return s!==null&&(s.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}}class bf extends yt{constructor(e,t,n,i,r,o,s,c,l,u){if(u=u!==void 0?u:an,u!==an&&u!==kn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===an&&(n=nn),n===void 0&&u===kn&&(n=Un),super(null,i,r,o,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:tt,this.minFilter=c!==void 0?c:tt,this.flipY=!1,this.generateMipmaps=!1}}class Sf extends pn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,s="local-floor",c=null,l=null,u=null,f=null,d=null,m=null;const x=t.getContextAttributes();let p=null,h=null;const _=[],E=[],C=new pt;C.layers.enable(1),C.viewport=new qe;const T=new pt;T.layers.enable(2),T.viewport=new qe;const b=[C,T],L=new Mf;L.layers.enable(1),L.layers.enable(2);let F=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let V=_[O];return V===void 0&&(V=new gr,_[O]=V),V.getTargetRaySpace()},this.getControllerGrip=function(O){let V=_[O];return V===void 0&&(V=new gr,_[O]=V),V.getGripSpace()},this.getHand=function(O){let V=_[O];return V===void 0&&(V=new gr,_[O]=V),V.getHandSpace()};function A(O){const V=E.indexOf(O.inputSource);if(V===-1)return;const K=_[V];K!==void 0&&K.dispatchEvent({type:O.type,data:O.inputSource})}function G(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",N);for(let O=0;O<_.length;O++){const V=E[O];V!==null&&(E[O]=null,_[O].disconnect(V))}F=null,y=null,e.setRenderTarget(p),d=null,f=null,u=null,i=null,h=null,X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",G),i.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:d}),h=new un(d.framebufferWidth,d.framebufferHeight,{format:Ct,type:cn,encoding:e.outputEncoding})}else{let V=null,K=null,j=null;x.depth&&(j=x.stencil?35056:33190,V=x.stencil?kn:an,K=x.stencil?Un:nn);const Z={colorFormat:32856,depthFormat:j,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Z),i.updateRenderState({layers:[f]}),h=new un(f.textureWidth,f.textureHeight,{format:Ct,type:cn,depthTexture:new bf(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const he=e.properties.get(h);he.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(s),X.setContext(i),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(O){for(let V=0;V<O.removed.length;V++){const K=O.removed[V],j=E.indexOf(K);j>=0&&(E[j]=null,_[j].dispatchEvent({type:"disconnected",data:K}))}for(let V=0;V<O.added.length;V++){const K=O.added[V];let j=E.indexOf(K);if(j===-1){for(let he=0;he<_.length;he++)if(he>=E.length){E.push(K),j=he;break}else if(E[he]===null){E[he]=K,j=he;break}if(j===-1)break}const Z=_[j];Z&&Z.dispatchEvent({type:"connected",data:K})}}const ae=new D,J=new D;function P(O,V,K){ae.setFromMatrixPosition(V.matrixWorld),J.setFromMatrixPosition(K.matrixWorld);const j=ae.distanceTo(J),Z=V.projectionMatrix.elements,he=K.projectionMatrix.elements,ue=Z[14]/(Z[10]-1),k=Z[14]/(Z[10]+1),Oe=(Z[9]+1)/Z[5],ye=(Z[9]-1)/Z[5],xe=(Z[8]-1)/Z[0],ce=(he[8]+1)/he[0],Ce=ue*xe,Se=ue*ce,pe=j/(-xe+ce),Ge=pe*-xe;V.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ge),O.translateZ(pe),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const He=ue+pe,Xe=k+pe,it=Ce-Ge,ke=Se+(j-Ge),De=Oe*k/Xe*He,ot=ye*k/Xe*He;O.projectionMatrix.makePerspective(it,ke,De,ot,He,Xe)}function W(O,V){V===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(V.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;L.near=T.near=C.near=O.near,L.far=T.far=C.far=O.far,(F!==L.near||y!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,y=L.far);const V=O.parent,K=L.cameras;W(L,V);for(let Z=0;Z<K.length;Z++)W(K[Z],V);L.matrixWorld.decompose(L.position,L.quaternion,L.scale),O.position.copy(L.position),O.quaternion.copy(L.quaternion),O.scale.copy(L.scale),O.matrix.copy(L.matrix),O.matrixWorld.copy(L.matrixWorld);const j=O.children;for(let Z=0,he=j.length;Z<he;Z++)j[Z].updateMatrixWorld(!0);K.length===2?P(L,C,T):L.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return L},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(O){f!==null&&(f.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)};let U=null;function q(O,V){if(l=V.getViewerPose(c||o),m=V,l!==null){const K=l.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let j=!1;K.length!==L.cameras.length&&(L.cameras.length=0,j=!0);for(let Z=0;Z<K.length;Z++){const he=K[Z];let ue=null;if(d!==null)ue=d.getViewport(he);else{const Oe=u.getViewSubImage(f,he);ue=Oe.viewport,Z===0&&(e.setRenderTargetTextures(h,Oe.colorTexture,f.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(h))}let k=b[Z];k===void 0&&(k=new pt,k.layers.enable(Z),k.viewport=new qe,b[Z]=k),k.matrix.fromArray(he.transform.matrix),k.projectionMatrix.fromArray(he.projectionMatrix),k.viewport.set(ue.x,ue.y,ue.width,ue.height),Z===0&&L.matrix.copy(k.matrix),j===!0&&L.cameras.push(k)}}for(let K=0;K<_.length;K++){const j=E[K],Z=_[K];j!==null&&Z!==void 0&&Z.update(j,V,c||o)}U&&U(O,V),m=null}const X=new pa;X.setAnimationLoop(q),this.setAnimationLoop=function(O){U=O},this.dispose=function(){}}}function wf(a,e){function t(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function n(p,h,_,E,C){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(p,h):h.isMeshToonMaterial?(i(p,h),u(p,h)):h.isMeshPhongMaterial?(i(p,h),l(p,h)):h.isMeshStandardMaterial?(i(p,h),f(p,h),h.isMeshPhysicalMaterial&&d(p,h,C)):h.isMeshMatcapMaterial?(i(p,h),m(p,h)):h.isMeshDepthMaterial?i(p,h):h.isMeshDistanceMaterial?(i(p,h),x(p,h)):h.isMeshNormalMaterial?i(p,h):h.isLineBasicMaterial?(r(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?s(p,h,_,E):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===Mt&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===Mt&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const T=a.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*T}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let E;h.map?E=h.map:h.specularMap?E=h.specularMap:h.displacementMap?E=h.displacementMap:h.normalMap?E=h.normalMap:h.bumpMap?E=h.bumpMap:h.roughnessMap?E=h.roughnessMap:h.metalnessMap?E=h.metalnessMap:h.alphaMap?E=h.alphaMap:h.emissiveMap?E=h.emissiveMap:h.clearcoatMap?E=h.clearcoatMap:h.clearcoatNormalMap?E=h.clearcoatNormalMap:h.clearcoatRoughnessMap?E=h.clearcoatRoughnessMap:h.iridescenceMap?E=h.iridescenceMap:h.iridescenceThicknessMap?E=h.iridescenceThicknessMap:h.specularIntensityMap?E=h.specularIntensityMap:h.specularColorMap?E=h.specularColorMap:h.transmissionMap?E=h.transmissionMap:h.thicknessMap?E=h.thicknessMap:h.sheenColorMap?E=h.sheenColorMap:h.sheenRoughnessMap&&(E=h.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix));let C;h.aoMap?C=h.aoMap:h.lightMap&&(C=h.lightMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),p.uv2Transform.value.copy(C.matrix))}function r(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function s(p,h,_,E){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*_,p.scale.value=E*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let C;h.map?C=h.map:h.alphaMap&&(C=h.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),p.uvTransform.value.copy(C.matrix))}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let _;h.map?_=h.map:h.alphaMap&&(_=h.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function d(p,h,_){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===Mt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Ef(){const a=Ci("canvas");return a.style.display="block",a}function Ma(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:Ef(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,r=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,s=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,c=a.powerPreference!==void 0?a.powerPreference:"default",l=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let f=null,d=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=hn,this.physicallyCorrectLights=!1,this.toneMapping=Ut,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,_=0,E=0,C=null,T=-1,b=null;const L=new qe,F=new qe;let y=null,A=e.width,G=e.height,N=1,ae=null,J=null;const P=new qe(0,0,A,G),W=new qe(0,0,A,G);let U=!1;const q=new da;let X=!1,O=!1,V=null;const K=new Ye,j=new Ee,Z=new D,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return C===null?N:1}let k=t;function Oe(M,R){for(let z=0;z<M.length;z++){const I=M[z],H=e.getContext(I,R);if(H!==null)return H}return null}try{const M={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:s,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tr}`),e.addEventListener("webglcontextlost",w,!1),e.addEventListener("webglcontextrestored",te,!1),e.addEventListener("webglcontextcreationerror",Q,!1),k===null){const R=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&R.shift(),k=Oe(R,M),k===null)throw Oe(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ye,xe,ce,Ce,Se,pe,Ge,He,Xe,it,ke,De,ot,lt,S,g,B,$,ie,le,me,v,Y;function re(){ye=new Nh(k),xe=new Ch(k,ye,a),ye.init(xe),v=new vf(k,ye,xe),ce=new _f(k,ye,xe),Ce=new Uh,Se=new nf,pe=new xf(k,ye,ce,Se,xe,v,Ce),Ge=new Dh(p),He=new Fh(p),Xe=new Zo(k,xe),Y=new Th(k,ye,Xe,xe),it=new zh(k,Xe,Ce,Y),ke=new Vh(k,it,Xe,Ce),ie=new kh(k,xe,pe),g=new Lh(Se),De=new tf(p,Ge,He,ye,xe,Y,g),ot=new wf(p,Se),lt=new sf,S=new uf(ye,xe),$=new Eh(p,Ge,ce,ke,u,o),B=new gf(p,ke,xe),le=new Ah(k,ye,Ce,xe),me=new Oh(k,ye,Ce,xe),Ce.programs=De.programs,p.capabilities=xe,p.extensions=ye,p.properties=Se,p.renderLists=lt,p.shadowMap=B,p.state=ce,p.info=Ce}re();const ee=new Sf(p,k);this.xr=ee,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const M=ye.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ye.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(M){M!==void 0&&(N=M,this.setSize(A,G,!1))},this.getSize=function(M){return M.set(A,G)},this.setSize=function(M,R,z){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=M,G=R,e.width=Math.floor(M*N),e.height=Math.floor(R*N),z!==!1&&(e.style.width=M+"px",e.style.height=R+"px"),this.setViewport(0,0,M,R)},this.getDrawingBufferSize=function(M){return M.set(A*N,G*N).floor()},this.setDrawingBufferSize=function(M,R,z){A=M,G=R,N=z,e.width=Math.floor(M*z),e.height=Math.floor(R*z),this.setViewport(0,0,M,R)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(P)},this.setViewport=function(M,R,z,I){M.isVector4?P.set(M.x,M.y,M.z,M.w):P.set(M,R,z,I),ce.viewport(L.copy(P).multiplyScalar(N).floor())},this.getScissor=function(M){return M.copy(W)},this.setScissor=function(M,R,z,I){M.isVector4?W.set(M.x,M.y,M.z,M.w):W.set(M,R,z,I),ce.scissor(F.copy(W).multiplyScalar(N).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(M){ce.setScissorTest(U=M)},this.setOpaqueSort=function(M){ae=M},this.setTransparentSort=function(M){J=M},this.getClearColor=function(M){return M.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(M=!0,R=!0,z=!0){let I=0;M&&(I|=16384),R&&(I|=256),z&&(I|=1024),k.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",w,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),lt.dispose(),S.dispose(),Se.dispose(),Ge.dispose(),He.dispose(),ke.dispose(),Y.dispose(),De.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Re),ee.removeEventListener("sessionend",Pe),V&&(V.dispose(),V=null),$e.stop()};function w(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const M=Ce.autoReset,R=B.enabled,z=B.autoUpdate,I=B.needsUpdate,H=B.type;re(),Ce.autoReset=M,B.enabled=R,B.autoUpdate=z,B.needsUpdate=I,B.type=H}function Q(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function de(M){const R=M.target;R.removeEventListener("dispose",de),oe(R)}function oe(M){fe(M),Se.remove(M)}function fe(M){const R=Se.get(M).programs;R!==void 0&&(R.forEach(function(z){De.releaseProgram(z)}),M.isShaderMaterial&&De.releaseShaderCache(M))}this.renderBufferDirect=function(M,R,z,I,H,ge){R===null&&(R=he);const ve=H.isMesh&&H.matrixWorld.determinant()<0,be=wa(M,R,z,I,H);ce.setMaterial(I,ve);let Me=z.index;const Ie=z.attributes.position;if(Me===null){if(Ie===void 0||Ie.count===0)return}else if(Me.count===0)return;let Te=1;I.wireframe===!0&&(Me=it.getWireframeAttribute(z),Te=2),Y.setup(H,I,be,z,Me);let Ae,Ne=le;Me!==null&&(Ae=Xe.get(Me),Ne=me,Ne.setIndex(Ae));const Zt=Me!==null?Me.count:Ie.count,gn=z.drawRange.start*Te,_n=z.drawRange.count*Te,wt=ge!==null?ge.start*Te:0,Le=ge!==null?ge.count*Te:1/0,xn=Math.max(gn,wt),Ue=Math.min(Zt,gn+_n,wt+Le)-1,Et=Math.max(0,Ue-xn+1);if(Et!==0){if(H.isMesh)I.wireframe===!0?(ce.setLineWidth(I.wireframeLinewidth*ue()),Ne.setMode(1)):Ne.setMode(4);else if(H.isLine){let Bt=I.linewidth;Bt===void 0&&(Bt=1),ce.setLineWidth(Bt*ue()),H.isLineSegments?Ne.setMode(1):H.isLineLoop?Ne.setMode(2):Ne.setMode(3)}else H.isPoints?Ne.setMode(0):H.isSprite&&Ne.setMode(4);if(H.isInstancedMesh)Ne.renderInstances(xn,Et,H.count);else if(z.isInstancedBufferGeometry){const Bt=Math.min(z.instanceCount,z._maxInstanceCount);Ne.renderInstances(xn,Et,Bt)}else Ne.render(xn,Et)}},this.compile=function(M,R){d=S.get(M),d.init(),x.push(d),M.traverseVisible(function(z){z.isLight&&z.layers.test(R.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights(p.physicallyCorrectLights),M.traverse(function(z){const I=z.material;if(I)if(Array.isArray(I))for(let H=0;H<I.length;H++){const ge=I[H];Ni(ge,M,z)}else Ni(I,M,z)}),x.pop(),d=null};let ne=null;function _e(M){ne&&ne(M)}function Re(){$e.stop()}function Pe(){$e.start()}const $e=new pa;$e.setAnimationLoop(_e),typeof self!="undefined"&&$e.setContext(self),this.setAnimationLoop=function(M){ne=M,ee.setAnimationLoop(M),M===null?$e.stop():$e.start()},ee.addEventListener("sessionstart",Re),ee.addEventListener("sessionend",Pe),this.render=function(M,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;M.autoUpdate===!0&&M.updateMatrixWorld(),R.parent===null&&R.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(R),R=ee.getCamera()),M.isScene===!0&&M.onBeforeRender(p,M,R,C),d=S.get(M,x.length),d.init(),x.push(d),K.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),q.setFromProjectionMatrix(K),O=this.localClippingEnabled,X=g.init(this.clippingPlanes,O,R),f=lt.get(M,m.length),f.init(),m.push(f),St(M,R,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ae,J),X===!0&&g.beginShadows();const z=d.state.shadowsArray;if(B.render(z,M,R),X===!0&&g.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(f,M),d.setupLights(p.physicallyCorrectLights),R.isArrayCamera){const I=R.cameras;for(let H=0,ge=I.length;H<ge;H++){const ve=I[H];Fr(f,M,ve,ve.viewport)}}else Fr(f,M,R);C!==null&&(pe.updateMultisampleRenderTarget(C),pe.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(p,M,R),Y.resetDefaultState(),T=-1,b=null,x.pop(),x.length>0?d=x[x.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function St(M,R,z,I){if(M.visible===!1)return;if(M.layers.test(R.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(R);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){I&&Z.setFromMatrixPosition(M.matrixWorld).applyMatrix4(K);const ve=ke.update(M),be=M.material;be.visible&&f.push(M,ve,be,z,Z.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Ce.render.frame&&(M.skeleton.update(),M.skeleton.frame=Ce.render.frame),!M.frustumCulled||q.intersectsObject(M))){I&&Z.setFromMatrixPosition(M.matrixWorld).applyMatrix4(K);const ve=ke.update(M),be=M.material;if(Array.isArray(be)){const Me=ve.groups;for(let Ie=0,Te=Me.length;Ie<Te;Ie++){const Ae=Me[Ie],Ne=be[Ae.materialIndex];Ne&&Ne.visible&&f.push(M,ve,Ne,z,Z.z,Ae)}}else be.visible&&f.push(M,ve,be,z,Z.z,null)}}const ge=M.children;for(let ve=0,be=ge.length;ve<be;ve++)St(ge[ve],R,z,I)}function Fr(M,R,z,I){const H=M.opaque,ge=M.transmissive,ve=M.transparent;d.setupLightsView(z),ge.length>0&&ba(H,R,z),I&&ce.viewport(L.copy(I)),H.length>0&&ri(H,R,z),ge.length>0&&ri(ge,R,z),ve.length>0&&ri(ve,R,z),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function ba(M,R,z){const I=xe.isWebGL2;V===null&&(V=new un(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?ei:cn,minFilter:Pi,samples:I&&r===!0?4:0})),p.getDrawingBufferSize(j),I?V.setSize(j.x,j.y):V.setSize(wr(j.x),wr(j.y));const H=p.getRenderTarget();p.setRenderTarget(V),p.clear();const ge=p.toneMapping;p.toneMapping=Ut,ri(M,R,z),p.toneMapping=ge,pe.updateMultisampleRenderTarget(V),pe.updateRenderTargetMipmap(V),p.setRenderTarget(H)}function ri(M,R,z){const I=R.isScene===!0?R.overrideMaterial:null;for(let H=0,ge=M.length;H<ge;H++){const ve=M[H],be=ve.object,Me=ve.geometry,Ie=I===null?ve.material:I,Te=ve.group;be.layers.test(z.layers)&&Sa(be,R,z,Me,Ie,Te)}}function Sa(M,R,z,I,H,ge){M.onBeforeRender(p,R,z,I,H,ge),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(p,R,z,I,M,ge),H.transparent===!0&&H.side===ft?(H.side=Mt,H.needsUpdate=!0,p.renderBufferDirect(z,R,I,H,M,ge),H.side=Qn,H.needsUpdate=!0,p.renderBufferDirect(z,R,I,H,M,ge),H.side=ft):p.renderBufferDirect(z,R,I,H,M,ge),M.onAfterRender(p,R,z,I,H,ge)}function Ni(M,R,z){R.isScene!==!0&&(R=he);const I=Se.get(M),H=d.state.lights,ge=d.state.shadowsArray,ve=H.state.version,be=De.getParameters(M,H.state,ge,R,z),Me=De.getProgramCacheKey(be);let Ie=I.programs;I.environment=M.isMeshStandardMaterial?R.environment:null,I.fog=R.fog,I.envMap=(M.isMeshStandardMaterial?He:Ge).get(M.envMap||I.environment),Ie===void 0&&(M.addEventListener("dispose",de),Ie=new Map,I.programs=Ie);let Te=Ie.get(Me);if(Te!==void 0){if(I.currentProgram===Te&&I.lightsStateVersion===ve)return Nr(M,be),Te}else be.uniforms=De.getUniforms(M),M.onBuild(z,be,p),M.onBeforeCompile(be,p),Te=De.acquireProgram(be,Me),Ie.set(Me,Te),I.uniforms=be.uniforms;const Ae=I.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ae.clippingPlanes=g.uniform),Nr(M,be),I.needsLights=Ta(M),I.lightsStateVersion=ve,I.needsLights&&(Ae.ambientLightColor.value=H.state.ambient,Ae.lightProbe.value=H.state.probe,Ae.directionalLights.value=H.state.directional,Ae.directionalLightShadows.value=H.state.directionalShadow,Ae.spotLights.value=H.state.spot,Ae.spotLightShadows.value=H.state.spotShadow,Ae.rectAreaLights.value=H.state.rectArea,Ae.ltc_1.value=H.state.rectAreaLTC1,Ae.ltc_2.value=H.state.rectAreaLTC2,Ae.pointLights.value=H.state.point,Ae.pointLightShadows.value=H.state.pointShadow,Ae.hemisphereLights.value=H.state.hemi,Ae.directionalShadowMap.value=H.state.directionalShadowMap,Ae.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ae.spotShadowMap.value=H.state.spotShadowMap,Ae.spotShadowMatrix.value=H.state.spotShadowMatrix,Ae.pointShadowMap.value=H.state.pointShadowMap,Ae.pointShadowMatrix.value=H.state.pointShadowMatrix);const Ne=Te.getUniforms(),Zt=Ai.seqWithValue(Ne.seq,Ae);return I.currentProgram=Te,I.uniformsList=Zt,Te}function Nr(M,R){const z=Se.get(M);z.outputEncoding=R.outputEncoding,z.instancing=R.instancing,z.skinning=R.skinning,z.morphTargets=R.morphTargets,z.morphNormals=R.morphNormals,z.morphColors=R.morphColors,z.morphTargetsCount=R.morphTargetsCount,z.numClippingPlanes=R.numClippingPlanes,z.numIntersection=R.numClipIntersection,z.vertexAlphas=R.vertexAlphas,z.vertexTangents=R.vertexTangents,z.toneMapping=R.toneMapping}function wa(M,R,z,I,H){R.isScene!==!0&&(R=he),pe.resetTextureUnits();const ge=R.fog,ve=I.isMeshStandardMaterial?R.environment:null,be=C===null?p.outputEncoding:C.isXRRenderTarget===!0?C.texture.encoding:hn,Me=(I.isMeshStandardMaterial?He:Ge).get(I.envMap||ve),Ie=I.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Te=!!I.normalMap&&!!z.attributes.tangent,Ae=!!z.morphAttributes.position,Ne=!!z.morphAttributes.normal,Zt=!!z.morphAttributes.color,gn=I.toneMapped?p.toneMapping:Ut,_n=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,wt=_n!==void 0?_n.length:0,Le=Se.get(I),xn=d.state.lights;if(X===!0&&(O===!0||M!==b)){const Tt=M===b&&I.id===T;g.setState(I,M,Tt)}let Ue=!1;I.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==xn.state.version||Le.outputEncoding!==be||H.isInstancedMesh&&Le.instancing===!1||!H.isInstancedMesh&&Le.instancing===!0||H.isSkinnedMesh&&Le.skinning===!1||!H.isSkinnedMesh&&Le.skinning===!0||Le.envMap!==Me||I.fog===!0&&Le.fog!==ge||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==g.numPlanes||Le.numIntersection!==g.numIntersection)||Le.vertexAlphas!==Ie||Le.vertexTangents!==Te||Le.morphTargets!==Ae||Le.morphNormals!==Ne||Le.morphColors!==Zt||Le.toneMapping!==gn||xe.isWebGL2===!0&&Le.morphTargetsCount!==wt)&&(Ue=!0):(Ue=!0,Le.__version=I.version);let Et=Le.currentProgram;Ue===!0&&(Et=Ni(I,R,H));let Bt=!1,Xn=!1,zi=!1;const Ke=Et.getUniforms(),Yn=Le.uniforms;if(ce.useProgram(Et.program)&&(Bt=!0,Xn=!0,zi=!0),I.id!==T&&(T=I.id,Xn=!0),Bt||b!==M){if(Ke.setValue(k,"projectionMatrix",M.projectionMatrix),xe.logarithmicDepthBuffer&&Ke.setValue(k,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),b!==M&&(b=M,Xn=!0,zi=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Tt=Ke.map.cameraPosition;Tt!==void 0&&Tt.setValue(k,Z.setFromMatrixPosition(M.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Ke.setValue(k,"isOrthographic",M.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||H.isSkinnedMesh)&&Ke.setValue(k,"viewMatrix",M.matrixWorldInverse)}if(H.isSkinnedMesh){Ke.setOptional(k,H,"bindMatrix"),Ke.setOptional(k,H,"bindMatrixInverse");const Tt=H.skeleton;Tt&&(xe.floatVertexTextures?(Tt.boneTexture===null&&Tt.computeBoneTexture(),Ke.setValue(k,"boneTexture",Tt.boneTexture,pe),Ke.setValue(k,"boneTextureSize",Tt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Oi=z.morphAttributes;return(Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0&&xe.isWebGL2===!0)&&ie.update(H,z,I,Et),(Xn||Le.receiveShadow!==H.receiveShadow)&&(Le.receiveShadow=H.receiveShadow,Ke.setValue(k,"receiveShadow",H.receiveShadow)),Xn&&(Ke.setValue(k,"toneMappingExposure",p.toneMappingExposure),Le.needsLights&&Ea(Yn,zi),ge&&I.fog===!0&&ot.refreshFogUniforms(Yn,ge),ot.refreshMaterialUniforms(Yn,I,N,G,V),Ai.upload(k,Le.uniformsList,Yn,pe)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Ai.upload(k,Le.uniformsList,Yn,pe),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Ke.setValue(k,"center",H.center),Ke.setValue(k,"modelViewMatrix",H.modelViewMatrix),Ke.setValue(k,"normalMatrix",H.normalMatrix),Ke.setValue(k,"modelMatrix",H.matrixWorld),Et}function Ea(M,R){M.ambientLightColor.needsUpdate=R,M.lightProbe.needsUpdate=R,M.directionalLights.needsUpdate=R,M.directionalLightShadows.needsUpdate=R,M.pointLights.needsUpdate=R,M.pointLightShadows.needsUpdate=R,M.spotLights.needsUpdate=R,M.spotLightShadows.needsUpdate=R,M.rectAreaLights.needsUpdate=R,M.hemisphereLights.needsUpdate=R}function Ta(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,R,z){Se.get(M.texture).__webglTexture=R,Se.get(M.depthTexture).__webglTexture=z;const I=Se.get(M);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=z===void 0,I.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,R){const z=Se.get(M);z.__webglFramebuffer=R,z.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(M,R=0,z=0){C=M,_=R,E=z;let I=!0;if(M){const Me=Se.get(M);Me.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),I=!1):Me.__webglFramebuffer===void 0?pe.setupRenderTarget(M):Me.__hasExternalTextures&&pe.rebindTextures(M,Se.get(M.texture).__webglTexture,Se.get(M.depthTexture).__webglTexture)}let H=null,ge=!1,ve=!1;if(M){const Me=M.texture;(Me.isData3DTexture||Me.isDataArrayTexture)&&(ve=!0);const Ie=Se.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(H=Ie[R],ge=!0):xe.isWebGL2&&M.samples>0&&pe.useMultisampledRTT(M)===!1?H=Se.get(M).__webglMultisampledFramebuffer:H=Ie,L.copy(M.viewport),F.copy(M.scissor),y=M.scissorTest}else L.copy(P).multiplyScalar(N).floor(),F.copy(W).multiplyScalar(N).floor(),y=U;if(ce.bindFramebuffer(36160,H)&&xe.drawBuffers&&I&&ce.drawBuffers(M,H),ce.viewport(L),ce.scissor(F),ce.setScissorTest(y),ge){const Me=Se.get(M.texture);k.framebufferTexture2D(36160,36064,34069+R,Me.__webglTexture,z)}else if(ve){const Me=Se.get(M.texture),Ie=R||0;k.framebufferTextureLayer(36160,36064,Me.__webglTexture,z||0,Ie)}T=-1},this.readRenderTargetPixels=function(M,R,z,I,H,ge,ve){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){ce.bindFramebuffer(36160,be);try{const Me=M.texture,Ie=Me.format,Te=Me.type;if(Ie!==Ct&&v.convert(Ie)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ae=Te===ei&&(ye.has("EXT_color_buffer_half_float")||xe.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Te!==cn&&v.convert(Te)!==k.getParameter(35738)&&!(Te===rn&&(xe.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=M.width-I&&z>=0&&z<=M.height-H&&k.readPixels(R,z,I,H,v.convert(Ie),v.convert(Te),ge)}finally{const Me=C!==null?Se.get(C).__webglFramebuffer:null;ce.bindFramebuffer(36160,Me)}}},this.copyFramebufferToTexture=function(M,R,z=0){const I=Math.pow(2,-z),H=Math.floor(R.image.width*I),ge=Math.floor(R.image.height*I);pe.setTexture2D(R,0),k.copyTexSubImage2D(3553,z,0,0,M.x,M.y,H,ge),ce.unbindTexture()},this.copyTextureToTexture=function(M,R,z,I=0){const H=R.image.width,ge=R.image.height,ve=v.convert(z.format),be=v.convert(z.type);pe.setTexture2D(z,0),k.pixelStorei(37440,z.flipY),k.pixelStorei(37441,z.premultiplyAlpha),k.pixelStorei(3317,z.unpackAlignment),R.isDataTexture?k.texSubImage2D(3553,I,M.x,M.y,H,ge,ve,be,R.image.data):R.isCompressedTexture?k.compressedTexSubImage2D(3553,I,M.x,M.y,R.mipmaps[0].width,R.mipmaps[0].height,ve,R.mipmaps[0].data):k.texSubImage2D(3553,I,M.x,M.y,ve,be,R.image),I===0&&z.generateMipmaps&&k.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(M,R,z,I,H=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=M.max.x-M.min.x+1,ve=M.max.y-M.min.y+1,be=M.max.z-M.min.z+1,Me=v.convert(I.format),Ie=v.convert(I.type);let Te;if(I.isData3DTexture)pe.setTexture3D(I,0),Te=32879;else if(I.isDataArrayTexture)pe.setTexture2DArray(I,0),Te=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,I.flipY),k.pixelStorei(37441,I.premultiplyAlpha),k.pixelStorei(3317,I.unpackAlignment);const Ae=k.getParameter(3314),Ne=k.getParameter(32878),Zt=k.getParameter(3316),gn=k.getParameter(3315),_n=k.getParameter(32877),wt=z.isCompressedTexture?z.mipmaps[0]:z.image;k.pixelStorei(3314,wt.width),k.pixelStorei(32878,wt.height),k.pixelStorei(3316,M.min.x),k.pixelStorei(3315,M.min.y),k.pixelStorei(32877,M.min.z),z.isDataTexture||z.isData3DTexture?k.texSubImage3D(Te,H,R.x,R.y,R.z,ge,ve,be,Me,Ie,wt.data):z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Te,H,R.x,R.y,R.z,ge,ve,be,Me,wt.data)):k.texSubImage3D(Te,H,R.x,R.y,R.z,ge,ve,be,Me,Ie,wt),k.pixelStorei(3314,Ae),k.pixelStorei(32878,Ne),k.pixelStorei(3316,Zt),k.pixelStorei(3315,gn),k.pixelStorei(32877,_n),H===0&&I.generateMipmaps&&k.generateMipmap(Te),ce.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?pe.setTextureCube(M,0):M.isData3DTexture?pe.setTexture3D(M,0):M.isDataArrayTexture?pe.setTexture2DArray(M,0):pe.setTexture2D(M,0),ce.unbindTexture()},this.resetState=function(){_=0,E=0,C=null,ce.reset(),Y.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Tf extends Ma{}Tf.prototype.isWebGL1Renderer=!0;class Af extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class js{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tr}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tr);const Zs={type:"change"},_r={type:"start"},$s={type:"end"};class Cf extends pn{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vn.ROTATE,MIDDLE:vn.DOLLY,RIGHT:vn.PAN},this.touches={ONE:Mn.ROTATE,TWO:Mn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",lt),this._domElementKeyEvents=v},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Zs),n.update(),r=i.NONE},this.update=function(){const v=new D,Y=new fn().setFromUnitVectors(e.up,new D(0,1,0)),re=Y.clone().invert(),ee=new D,w=new fn,te=2*Math.PI;return function(){const de=n.object.position;v.copy(de).sub(n.target),v.applyQuaternion(Y),s.setFromVector3(v),n.autoRotate&&r===i.NONE&&A(F()),n.enableDamping?(s.theta+=c.theta*n.dampingFactor,s.phi+=c.phi*n.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let oe=n.minAzimuthAngle,fe=n.maxAzimuthAngle;return isFinite(oe)&&isFinite(fe)&&(oe<-Math.PI?oe+=te:oe>Math.PI&&(oe-=te),fe<-Math.PI?fe+=te:fe>Math.PI&&(fe-=te),oe<=fe?s.theta=Math.max(oe,Math.min(fe,s.theta)):s.theta=s.theta>(oe+fe)/2?Math.max(oe,s.theta):Math.min(fe,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=l,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),v.setFromSpherical(s),v.applyQuaternion(re),de.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,f||ee.distanceToSquared(n.object.position)>o||8*(1-w.dot(n.object.quaternion))>o?(n.dispatchEvent(Zs),ee.copy(n.object.position),w.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",B),n.domElement.removeEventListener("pointerdown",Ge),n.domElement.removeEventListener("pointercancel",it),n.domElement.removeEventListener("wheel",ot),n.domElement.removeEventListener("pointermove",He),n.domElement.removeEventListener("pointerup",Xe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",lt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,s=new js,c=new js;let l=1;const u=new D;let f=!1;const d=new Ee,m=new Ee,x=new Ee,p=new Ee,h=new Ee,_=new Ee,E=new Ee,C=new Ee,T=new Ee,b=[],L={};function F(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function A(v){c.theta-=v}function G(v){c.phi-=v}const N=function(){const v=new D;return function(re,ee){v.setFromMatrixColumn(ee,0),v.multiplyScalar(-re),u.add(v)}}(),ae=function(){const v=new D;return function(re,ee){n.screenSpacePanning===!0?v.setFromMatrixColumn(ee,1):(v.setFromMatrixColumn(ee,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(re),u.add(v)}}(),J=function(){const v=new D;return function(re,ee){const w=n.domElement;if(n.object.isPerspectiveCamera){const te=n.object.position;v.copy(te).sub(n.target);let Q=v.length();Q*=Math.tan(n.object.fov/2*Math.PI/180),N(2*re*Q/w.clientHeight,n.object.matrix),ae(2*ee*Q/w.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(re*(n.object.right-n.object.left)/n.object.zoom/w.clientWidth,n.object.matrix),ae(ee*(n.object.top-n.object.bottom)/n.object.zoom/w.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(v){n.object.isPerspectiveCamera?l/=v:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*v)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(v){n.object.isPerspectiveCamera?l*=v:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/v)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(v){d.set(v.clientX,v.clientY)}function q(v){E.set(v.clientX,v.clientY)}function X(v){p.set(v.clientX,v.clientY)}function O(v){m.set(v.clientX,v.clientY),x.subVectors(m,d).multiplyScalar(n.rotateSpeed);const Y=n.domElement;A(2*Math.PI*x.x/Y.clientHeight),G(2*Math.PI*x.y/Y.clientHeight),d.copy(m),n.update()}function V(v){C.set(v.clientX,v.clientY),T.subVectors(C,E),T.y>0?P(y()):T.y<0&&W(y()),E.copy(C),n.update()}function K(v){h.set(v.clientX,v.clientY),_.subVectors(h,p).multiplyScalar(n.panSpeed),J(_.x,_.y),p.copy(h),n.update()}function j(v){v.deltaY<0?W(y()):v.deltaY>0&&P(y()),n.update()}function Z(v){let Y=!1;switch(v.code){case n.keys.UP:J(0,n.keyPanSpeed),Y=!0;break;case n.keys.BOTTOM:J(0,-n.keyPanSpeed),Y=!0;break;case n.keys.LEFT:J(n.keyPanSpeed,0),Y=!0;break;case n.keys.RIGHT:J(-n.keyPanSpeed,0),Y=!0;break}Y&&(v.preventDefault(),n.update())}function he(){if(b.length===1)d.set(b[0].pageX,b[0].pageY);else{const v=.5*(b[0].pageX+b[1].pageX),Y=.5*(b[0].pageY+b[1].pageY);d.set(v,Y)}}function ue(){if(b.length===1)p.set(b[0].pageX,b[0].pageY);else{const v=.5*(b[0].pageX+b[1].pageX),Y=.5*(b[0].pageY+b[1].pageY);p.set(v,Y)}}function k(){const v=b[0].pageX-b[1].pageX,Y=b[0].pageY-b[1].pageY,re=Math.sqrt(v*v+Y*Y);E.set(0,re)}function Oe(){n.enableZoom&&k(),n.enablePan&&ue()}function ye(){n.enableZoom&&k(),n.enableRotate&&he()}function xe(v){if(b.length==1)m.set(v.pageX,v.pageY);else{const re=me(v),ee=.5*(v.pageX+re.x),w=.5*(v.pageY+re.y);m.set(ee,w)}x.subVectors(m,d).multiplyScalar(n.rotateSpeed);const Y=n.domElement;A(2*Math.PI*x.x/Y.clientHeight),G(2*Math.PI*x.y/Y.clientHeight),d.copy(m)}function ce(v){if(b.length===1)h.set(v.pageX,v.pageY);else{const Y=me(v),re=.5*(v.pageX+Y.x),ee=.5*(v.pageY+Y.y);h.set(re,ee)}_.subVectors(h,p).multiplyScalar(n.panSpeed),J(_.x,_.y),p.copy(h)}function Ce(v){const Y=me(v),re=v.pageX-Y.x,ee=v.pageY-Y.y,w=Math.sqrt(re*re+ee*ee);C.set(0,w),T.set(0,Math.pow(C.y/E.y,n.zoomSpeed)),P(T.y),E.copy(C)}function Se(v){n.enableZoom&&Ce(v),n.enablePan&&ce(v)}function pe(v){n.enableZoom&&Ce(v),n.enableRotate&&xe(v)}function Ge(v){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",He),n.domElement.addEventListener("pointerup",Xe)),$(v),v.pointerType==="touch"?S(v):ke(v))}function He(v){n.enabled!==!1&&(v.pointerType==="touch"?g(v):De(v))}function Xe(v){ie(v),b.length===0&&(n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",He),n.domElement.removeEventListener("pointerup",Xe)),n.dispatchEvent($s),r=i.NONE}function it(v){ie(v)}function ke(v){let Y;switch(v.button){case 0:Y=n.mouseButtons.LEFT;break;case 1:Y=n.mouseButtons.MIDDLE;break;case 2:Y=n.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case vn.DOLLY:if(n.enableZoom===!1)return;q(v),r=i.DOLLY;break;case vn.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;X(v),r=i.PAN}else{if(n.enableRotate===!1)return;U(v),r=i.ROTATE}break;case vn.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;U(v),r=i.ROTATE}else{if(n.enablePan===!1)return;X(v),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(_r)}function De(v){if(n.enabled!==!1)switch(r){case i.ROTATE:if(n.enableRotate===!1)return;O(v);break;case i.DOLLY:if(n.enableZoom===!1)return;V(v);break;case i.PAN:if(n.enablePan===!1)return;K(v);break}}function ot(v){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(v.preventDefault(),n.dispatchEvent(_r),j(v),n.dispatchEvent($s))}function lt(v){n.enabled===!1||n.enablePan===!1||Z(v)}function S(v){switch(le(v),b.length){case 1:switch(n.touches.ONE){case Mn.ROTATE:if(n.enableRotate===!1)return;he(),r=i.TOUCH_ROTATE;break;case Mn.PAN:if(n.enablePan===!1)return;ue(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Mn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Oe(),r=i.TOUCH_DOLLY_PAN;break;case Mn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(_r)}function g(v){switch(le(v),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;xe(v),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ce(v),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(v),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(v),n.update();break;default:r=i.NONE}}function B(v){n.enabled!==!1&&v.preventDefault()}function $(v){b.push(v)}function ie(v){delete L[v.pointerId];for(let Y=0;Y<b.length;Y++)if(b[Y].pointerId==v.pointerId){b.splice(Y,1);return}}function le(v){let Y=L[v.pointerId];Y===void 0&&(Y=new Ee,L[v.pointerId]=Y),Y.set(v.pageX,v.pageY)}function me(v){const Y=v.pointerId===b[0].pointerId?b[1]:b[0];return L[Y.pointerId]}n.domElement.addEventListener("contextmenu",B),n.domElement.addEventListener("pointerdown",Ge),n.domElement.addEventListener("pointercancel",it),n.domElement.addEventListener("wheel",ot,{passive:!1}),this.update()}}class Lf{constructor(e,t,n,i,r,o){ct(this,"instructions");ct(this,"y");ct(this,"w");ct(this,"g");ct(this,"b");ct(this,"r");ct(this,"o");ct(this,"solve_state");ct(this,"finished");ct(this,"solving");ct(this,"sides");this.y=e,this.w=t,this.g=n,this.b=i,this.r=r,this.o=o,this.instructions=[],this.solve_state=1,this.finished=!1,this.solving=!1,this.sides=[this.y,this.w,this.g,this.b,this.r,this.o]}parseCubeString(){let e="";for(let t=0;t<6;t++)for(let n=0;n<9;n++)e+=this.sides[t][n];return e}solve(){for(this.solving=!0;this.finished===!1;)this.cube_decide_cross(),this.cube_decide_fix_cross();console.log(this.instructions),this.solving=!1,this.finished=!1,this.instructions=[]}left(){const e=this.y.slice(),t=this.w.slice(),n=this.g.slice(),i=this.b.slice(),r=this.r.slice();this.y[0]=i[0],this.y[3]=i[3],this.y[6]=i[6],this.b[0]=t[0],this.b[3]=t[3],this.b[6]=t[6],this.w[0]=n[8],this.w[3]=n[5],this.w[6]=n[2],this.g[8]=e[0],this.g[5]=e[3],this.g[2]=e[6],this.r[0]=r[6],this.r[1]=r[3],this.r[2]=r[0],this.r[3]=r[7],this.r[5]=r[1],this.r[6]=r[8],this.r[7]=r[5],this.r[8]=r[2],this.solving&&this.instructions.push("left")}left_i(){const e=this.y.slice(),t=this.w.slice(),n=this.g.slice(),i=this.b.slice(),r=this.r.slice();this.y[0]=n[8],this.y[3]=n[5],this.y[6]=n[2],this.b[0]=e[0],this.b[3]=e[3],this.b[6]=e[6],this.w[0]=i[0],this.w[3]=i[3],this.w[6]=i[6],this.g[8]=t[0],this.g[5]=t[3],this.g[2]=t[6],this.r[0]=r[2],this.r[1]=r[5],this.r[2]=r[8],this.r[3]=r[1],this.r[5]=r[7],this.r[6]=r[0],this.r[7]=r[3],this.r[8]=r[6],this.solving&&this.instructions.push("left_i")}right(){const e=this.y.slice(),t=this.w.slice(),n=this.g.slice(),i=this.b.slice(),r=this.o.slice();this.y[2]=n[6],this.y[5]=n[3],this.y[8]=n[0],this.b[2]=e[2],this.b[5]=e[5],this.b[8]=e[8],this.w[2]=i[2],this.w[5]=i[5],this.w[8]=i[8],this.g[6]=t[2],this.g[3]=t[5],this.g[0]=t[8],this.o[0]=r[6],this.o[1]=r[3],this.o[2]=r[0],this.o[3]=r[7],this.o[5]=r[1],this.o[6]=r[8],this.o[7]=r[5],this.o[8]=r[2],this.solving&&this.instructions.push("right")}right_i(){const e=this.y.slice(),t=this.w.slice(),n=this.g.slice(),i=this.b.slice(),r=this.o.slice();this.y[2]=i[2],this.y[5]=i[5],this.y[8]=i[8],this.b[2]=t[2],this.b[5]=t[5],this.b[8]=t[8],this.w[2]=n[6],this.w[5]=n[3],this.w[8]=n[0],this.g[6]=e[2],this.g[3]=e[5],this.g[0]=e[8],this.o[0]=r[2],this.o[1]=r[5],this.o[2]=r[8],this.o[3]=r[1],this.o[5]=r[7],this.o[6]=r[0],this.o[7]=r[3],this.o[8]=r[6],this.solving&&this.instructions.push("right_i")}down(){const e=this.o.slice(),t=this.b.slice(),n=this.r.slice(),i=this.y.slice(),r=this.g.slice();this.b[6]=n[6],this.b[7]=n[7],this.b[8]=n[8],this.r[6]=r[6],this.r[7]=r[7],this.r[8]=r[8],this.g[6]=e[6],this.g[7]=e[7],this.g[8]=e[8],this.o[6]=t[6],this.o[7]=t[7],this.o[8]=t[8],this.y[0]=i[6],this.y[1]=i[3],this.y[2]=i[0],this.y[3]=i[7],this.y[5]=i[1],this.y[6]=i[8],this.y[7]=i[5],this.y[8]=i[2],this.solving&&this.instructions.push("down")}down_i(){const e=this.o.slice(),t=this.b.slice(),n=this.r.slice(),i=this.y.slice(),r=this.g.slice();this.b[6]=e[6],this.b[7]=e[7],this.b[8]=e[8],this.r[6]=t[6],this.r[7]=t[7],this.r[8]=t[8],this.g[6]=n[6],this.g[7]=n[7],this.g[8]=n[8],this.o[6]=r[6],this.o[7]=r[7],this.o[8]=r[8],this.y[0]=i[2],this.y[1]=i[5],this.y[2]=i[8],this.y[3]=i[1],this.y[5]=i[7],this.y[6]=i[0],this.y[7]=i[3],this.y[8]=i[6],this.solving&&this.instructions.push("down_i")}up(){const e=this.o.slice(),t=this.b.slice(),n=this.r.slice(),i=this.w.slice(),r=this.g.slice();this.b[0]=e[0],this.b[1]=e[1],this.b[2]=e[2],this.r[0]=t[0],this.r[1]=t[1],this.r[2]=t[2],this.g[0]=n[0],this.g[1]=n[1],this.g[2]=n[2],this.o[0]=r[0],this.o[1]=r[1],this.o[2]=r[2],this.w[0]=i[6],this.w[1]=i[3],this.w[2]=i[0],this.w[3]=i[7],this.w[5]=i[1],this.w[6]=i[8],this.w[7]=i[5],this.w[8]=i[2],this.solving&&this.instructions.push("up")}up_i(){const e=this.o.slice(),t=this.b.slice(),n=this.r.slice(),i=this.w.slice(),r=this.g.slice();this.b[0]=n[0],this.b[1]=n[1],this.b[2]=n[2],this.r[0]=r[0],this.r[1]=r[1],this.r[2]=r[2],this.g[0]=e[0],this.g[1]=e[1],this.g[2]=e[2],this.o[0]=t[0],this.o[1]=t[1],this.o[2]=t[2],this.w[0]=i[2],this.w[1]=i[5],this.w[2]=i[8],this.w[3]=i[1],this.w[5]=i[7],this.w[6]=i[0],this.w[7]=i[3],this.w[8]=i[6],this.solving&&this.instructions.push("up_i")}front(){const e=this.o.slice(),t=this.b.slice(),n=this.r.slice(),i=this.w.slice(),r=this.y.slice();this.y[0]=e[6],this.y[1]=e[3],this.y[2]=e[0],this.r[2]=r[0],this.r[5]=r[1],this.r[8]=r[2],this.w[6]=n[8],this.w[7]=n[5],this.w[8]=n[2],this.o[0]=i[6],this.o[3]=i[7],this.o[6]=i[8],this.b[0]=t[6],this.b[1]=t[3],this.b[2]=t[0],this.b[3]=t[7],this.b[5]=t[1],this.b[6]=t[8],this.b[7]=t[5],this.b[8]=t[2],this.instructions.push("front")}front_i(){const e=this.o.slice(),t=this.b.slice(),n=this.r.slice(),i=this.w.slice(),r=this.y.slice();this.o[6]=r[0],this.o[3]=r[1],this.o[0]=r[2],this.y[0]=n[2],this.y[1]=n[5],this.y[2]=n[8],this.r[2]=i[8],this.r[5]=i[7],this.r[8]=i[6],this.w[8]=e[6],this.w[7]=e[3],this.w[6]=e[0],this.b[0]=t[2],this.b[1]=t[5],this.b[2]=t[8],this.b[3]=t[1],this.b[5]=t[7],this.b[6]=t[0],this.b[7]=t[3],this.b[8]=t[6],this.solving&&this.instructions.push("front_i")}back(){const e=this.o.slice(),t=this.g.slice(),n=this.r.slice(),i=this.w.slice(),r=this.y.slice();this.o[8]=r[6],this.o[7]=r[7],this.o[6]=r[8],this.y[6]=n[0],this.y[7]=n[3],this.y[8]=n[6],this.r[0]=i[2],this.r[3]=i[1],this.r[6]=i[0],this.w[0]=e[2],this.w[1]=e[5],this.w[2]=e[8],this.g[0]=t[6],this.g[1]=t[3],this.g[2]=t[0],this.g[3]=t[7],this.g[5]=t[1],this.g[6]=t[8],this.g[7]=t[5],this.g[8]=t[2],this.instructions.push("back")}back_i(){const e=this.o.slice(),t=this.g.slice(),n=this.r.slice(),i=this.w.slice(),r=this.y.slice();this.y[6]=e[8],this.y[7]=e[5],this.y[8]=e[2],this.r[0]=r[6],this.r[3]=r[7],this.r[6]=r[8],this.w[0]=n[6],this.w[1]=n[3],this.w[2]=n[0],this.o[2]=i[0],this.o[5]=i[1],this.o[8]=i[2],this.g[0]=t[2],this.g[1]=t[5],this.g[2]=t[8],this.g[3]=t[1],this.g[5]=t[7],this.g[6]=t[0],this.g[7]=t[3],this.g[8]=t[6],this.solving&&this.instructions.push("back_i")}cube_decide_cross(){if(this.w[1]==="w"&&this.w[5]==="w"&&this.w[3]==="w"&&this.w[7]==="w")this.solve_state=2,this.finished=!0;else if(this.solve_state===1){if(this.b[3]==="w")for(let e=0;e<3;e++)this.w[3]!=="w"?(this.left_i(),e=3):this.up();else if(this.b[5]==="w")for(let e=0;e<3;e++)this.w[5]!=="w"?(this.right(),e=3):this.up();else if(this.r[5]==="w")for(let e=0;e<3;e++)this.w[1]!=="w"?(this.front(),e=3):this.up();else if(this.r[3]==="w")for(let e=0;e<3;e++)this.w[1]!=="w"?(this.back_i(),e=3):this.up();else if(this.g[5]==="w")for(let e=0;e<3;e++)this.w[3]!=="w"?(this.left(),e=3):this.up();else if(this.g[3]==="w")for(let e=0;e<3;e++)this.w[5]!=="w"?(this.right_i(),e=3):this.up();else if(this.o[5]==="w")for(let e=0;e<3;e++)this.w[1]!=="w"?(this.back(),e=3):this.up();else if(this.o[3]==="w")for(let e=0;e<3;e++)this.w[1]!=="w"?(this.front_i(),e=3):this.up();else if(this.y[1]==="w")for(let e=0;e<3;e++)this.w[7]!=="w"?(this.front(),this.front(),e=3):this.up();else if(this.y[7]==="w")for(let e=0;e<3;e++)this.w[1]!=="w"?(this.back(),this.back(),e=3):this.up();else if(this.y[5]==="w")for(let e=0;e<3;e++)this.w[5]!=="w"?(this.right(),this.right(),e=3):this.up();else if(this.y[3]==="w")for(let e=0;e<3;e++)this.w[3]!=="w"?(this.left(),this.left(),e=3):this.up();else if(this.b[1]==="w")this.front(),this.up_i(),this.right();else if(this.b[7]==="w")for(let e=0;e<3;e++)this.w[7]!=="w"?(this.front_i(),this.up_i(),this.right(),e=3):this.up();else if(this.o[2]==="w")this.right(),this.up_i(),this.back();else if(this.o[7]==="w")for(let e=0;e<3;e++)this.w[5]!=="w"?(this.right_i(),this.up_i(),this.back(),e=3):this.up();else if(this.g[1]==="w")this.back(),this.up_i(),this.left();else if(this.g[7]==="w")for(let e=0;e<3;e++)this.w[1]!=="w"?(this.back_i(),this.up_i(),this.left(),e=3):this.up();else if(this.r[1]==="w")this.left(),this.up_i(),this.front();else if(this.r[7]==="w")for(let e=0;e<3;e++)this.w[3]!=="w"?(this.left_i(),this.up_i(),this.front(),e=3):this.up()}}cube_decide_fix_cross(){this.solve_state===2&&(this.o[1]==="o"&&this.b[1]==="b"&&this.r[1]==="w"&&this.g[1]==="g"?this.solve_state=3:this.b[1]==="o"?(this.front(),this.front(),this.down(),this.right(),this.right(),this.down_i(),this.front(),this.front()):this.b[1]==="g"?(this.front(),this.front(),this.down(),this.down(),this.back(),this.back(),this.down(),this.down(),this.front(),this.front()):this.b[1]==="r"?(this.front(),this.front(),this.down_i(),this.left(),this.left(),this.down_i(),this.front(),this.front()):this.o[1]==="g"?(this.right(),this.right(),this.down(),this.back(),this.back(),this.down_i(),this.right(),this.right()):this.o[1]==="r"?(this.right(),this.right(),this.down(),this.down(),this.left(),this.left(),this.down(),this.down(),this.right(),this.right()):this.o[1]==="b"?(this.right(),this.right(),this.down_i(),this.front(),this.front(),this.down(),this.right(),this.right()):this.g[1]==="r"?(this.back(),this.back(),this.down(),this.left(),this.left(),this.down_i(),this.back(),this.back()):this.g[1]==="b"?(this.back(),this.back(),this.down(),this.down(),this.front(),this.front(),this.down(),this.down(),this.back(),this.back()):this.g[1]==="o"&&(this.back(),this.back(),this.down_i(),this.left(),this.left(),this.down(),this.back(),this.back()))}print(){console.log(this.parseCubeString())}}const Li={width:800,height:800},et=new Lf(["y","y","y","y","y","y","y","y","y"],["w","w","w","w","w","w","w","w","w"],["g","g","g","g","g","g","g","g","g"],["b","b","b","b","b","b","b","b","b"],["r","r","r","r","r","r","r","r","r"],["o","o","o","o","o","o","o","o","o"]),Di={antiClockwise:1,clockwise:-1},ut={front:255,back:65280,top:16777215,bottom:16776960,left:16711680,right:16737280,internal:10526880},Dr={cubes:[]};function Df(a,e,t){return[new Yt({color:a==1?ut.right:ut.internal,transparent:!0,opacity:1,side:ft}),new Yt({color:a==-1?ut.left:ut.internal,transparent:!0,opacity:1,side:ft}),new Yt({color:e==1?ut.top:ut.internal,transparent:!0,opacity:1,side:ft}),new Yt({color:e==-1?ut.bottom:ut.internal,transparent:!0,opacity:1,side:ft}),new Yt({color:t==1?ut.front:ut.internal,transparent:!0,opacity:1,side:ft}),new Yt({color:t==-1?ut.back:ut.internal,transparent:!0,opacity:1,side:ft})]}function Rf(){const a={q:{axis:"x",level:-1},z:{axis:"x",level:1},w:{axis:"y",level:1},x:{axis:"y",level:-1},e:{axis:"z",level:1},c:{axis:"z",level:-1}};document.addEventListener("keydown",e=>{const t=e.key;if(console.log(t),"qzwxecQZWXEC".indexOf(t)>=0){const i=t.toLowerCase()===t?Di.antiClockwise:Di.clockwise,r=t.toLowerCase();Pf(a[r].axis,i,a[r].level)}})}Rf();function Pf(a,e,t){const n=e===Di.antiClockwise?1:-1,i=0,r=new D(0,0,0);r[a]=1;const o=new at;o.set(i+r.x**2*(1-i),r.x*r.y*(1-i)-r.z*n,r.x*r.z*(1-i)+r.y*n,r.y*r.x*(1-i)+r.z*n,i+r.y**2*(1-i),r.y*r.z*(1-i)-r.x*n,r.z*r.x*(1-i)-r.y*n,r.z*r.y*(1-i)+r.x*n,i+r.z**2*(1-i));for(const s of Dr.cubes)if(s.position[a]===t){s.rotateOnWorldAxis(r,(e===Di.antiClockwise?1:-1)*Math.PI/2);const c=new D(s.position.x,s.position.y,s.position.z);c.applyMatrix3(o),s.position.x=c.x,s.position.y=c.y,s.position.z=c.z}switch(a){case"x":if(e===-1)if(t===-1){et.left_i();break}else{et.right();break}else if(t===-1){et.left();break}else{et.right_i();break}case"y":if(e===-1)if(t===-1){et.down_i();break}else{et.up();break}else if(t===-1){et.down();break}else{et.up_i();break}case"z":if(e===-1)if(t===-1){et.back();break}else{et.front();break}else if(t===-1){et.back_i();break}else{et.front_i();break}}et.print()}const Rr=new Af,qn=new pt(75,Li.width/Li.height,.1,1e3),Pr=new Ma({canvas:document.querySelector("#c"),antialias:!0,alpha:!0});Rr.background=new Fe(10526880);const Ir=new Cf(qn,Pr.domElement);Ir.enablePan=!1;Ir.enableZoom=!1;Pr.setSize(Li.width,Li.height);qn.position.x=3;qn.position.y=4;qn.position.z=5;qn.lookAt(0,0,0);const If=new Hn(1,1,1);Dr.cubes=[];for(let a of[-1,0,1])for(let e of[-1,0,1])for(let t of[-1,0,1]){const n=new Ot(If,Df(a,e,t));n.position.x=a,n.position.y=e,n.position.z=t,Dr.cubes.push(n),Rr.add(n)}function ya(){Ir.update(),Pr.render(Rr,qn),requestAnimationFrame(ya)}ya();const Ff=document.querySelector("#solve");Ff.addEventListener("click",et.solve);
