const cl="124",ll=0,Bo=1,hl=2,Uo=1,ul=2,Mi=3,rr=0,Zt=1,sr=2,zo=1,wi=0,Si=1,Ho=2,Go=3,ko=4,fl=5,Dn=100,dl=101,pl=102,Vo=103,Wo=104,ml=200,gl=201,yl=202,vl=203,jo=204,qo=205,xl=206,_l=207,bl=208,Ml=209,wl=210,Sl=0,El=1,Tl=2,ls=3,Al=4,Ll=5,Cl=6,Rl=7,or=0,Pl=1,Il=2,Ei=0,Dl=1,Nl=2,Ol=3,Fl=4,Bl=5,Xo=300,hs=301,us=302,Yo=303,Zo=304,fs=306,ds=307,ps=1e3,he=1001,ms=1002,re=1003,Jo=1004,Qo=1005,Kt=1006,Ul=1007,ar=1008,gs=1009,zl=1010,Hl=1011,cr=1012,Gl=1013,lr=1014,Ke=1015,hr=1016,kl=1017,Vl=1018,Wl=1019,Ti=1020,jl=1021,vn=1022,Me=1023,ql=1024,Xl=1025,Nn=1026,Ai=1027,Yl=1028,Zl=1029,Jl=1030,Ql=1031,$l=1032,Kl=1033,$o=33776,Ko=33777,ta=33778,ea=33779,na=35840,ia=35841,ra=35842,sa=35843,th=36196,oa=37492,aa=37496,eh=37808,nh=37809,ih=37810,rh=37811,sh=37812,oh=37813,ah=37814,ch=37815,lh=37816,hh=37817,uh=37818,fh=37819,dh=37820,ph=37821,mh=36492,gh=37840,yh=37841,vh=37842,xh=37843,_h=37844,bh=37845,Mh=37846,wh=37847,Sh=37848,Eh=37849,Th=37850,Ah=37851,Lh=37852,Ch=37853,Rh=2200,Ph=2201,Ih=2202,ur=2300,fr=2301,ys=2302,On=2400,Fn=2401,dr=2402,vs=2500,ca=2501,Dh=0,Li=3e3,la=3001,Nh=3007,Oh=3002,Fh=3003,Bh=3004,Uh=3005,zh=3006,Hh=3200,Gh=3201,Bn=0,kh=1,xs=7680,Vh=519,pr=35044,Ci=35048,ha="300 es";function Ge(){}Object.assign(Ge.prototype,{addEventListener:function(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)},hasEventListener:function(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1},removeEventListener:function(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}},dispatchEvent:function(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e)}}});const Jt=[];for(let e=0;e<256;e++)Jt[e]=(e<16?"0":"")+e.toString(16);let mr=1234567;const bt={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[e&255]+Jt[e>>8&255]+Jt[e>>16&255]+Jt[e>>24&255]+"-"+Jt[t&255]+Jt[t>>8&255]+"-"+Jt[t>>16&15|64]+Jt[t>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toUpperCase()},clamp:function(e,t,n){return Math.max(t,Math.min(n,e))},euclideanModulo:function(e,t){return(e%t+t)%t},mapLinear:function(e,t,n,i,r){return i+(e-t)*(r-i)/(n-t)},lerp:function(e,t,n){return(1-n)*e+n*t},smoothstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))},smootherstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))},randInt:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randFloat:function(e,t){return e+Math.random()*(t-e)},randFloatSpread:function(e){return e*(.5-Math.random())},seededRandom:function(e){return e!==void 0&&(mr=e%2147483647),mr=mr*16807%2147483647,(mr-1)/2147483646},degToRad:function(e){return e*bt.DEG2RAD},radToDeg:function(e){return e*bt.RAD2DEG},isPowerOfTwo:function(e){return(e&e-1)==0&&e!==0},ceilPowerOfTwo:function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))},floorPowerOfTwo:function(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))},setQuaternionFromProperEuler:function(e,t,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),c=o(n/2),l=s((t+i)/2),f=o((t+i)/2),h=s((t-i)/2),d=o((t-i)/2),u=s((i-t)/2),p=o((i-t)/2);switch(r){case"XYX":e.set(a*f,c*h,c*d,a*l);break;case"YZY":e.set(c*d,a*f,c*h,a*l);break;case"ZXZ":e.set(c*h,c*d,a*f,a*l);break;case"XZX":e.set(a*f,c*p,c*u,a*l);break;case"YXY":e.set(c*u,a*f,c*p,a*l);break;case"ZYZ":e.set(c*p,c*u,a*f,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};class G{constructor(t=0,n=0){Object.defineProperty(this,"isVector2",{value:!0}),this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,n){return n!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,n)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t,n){return n!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,n)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}class ce{constructor(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,n,i,r,s,o,a,c,l){const f=this.elements;return f[0]=t,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=c,f[6]=i,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}clone(){return new this.constructor().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],f=i[4],h=i[7],d=i[2],u=i[5],p=i[8],y=r[0],v=r[3],g=r[6],m=r[1],E=r[4],T=r[7],w=r[2],x=r[5],A=r[8];return s[0]=o*y+a*m+c*w,s[3]=o*v+a*E+c*x,s[6]=o*g+a*T+c*A,s[1]=l*y+f*m+h*w,s[4]=l*v+f*E+h*x,s[7]=l*g+f*T+h*A,s[2]=d*y+u*m+p*w,s[5]=d*v+u*E+p*x,s[8]=d*g+u*T+p*A,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],f=t[8];return n*o*f-n*a*l-i*s*f+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],f=t[8],h=f*o-a*l,d=a*c-f*s,u=l*s-o*c,p=n*h+i*d+r*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/p;return t[0]=h*y,t[1]=(r*l-f*i)*y,t[2]=(a*i-r*o)*y,t[3]=d*y,t[4]=(f*n-r*c)*y,t[5]=(r*s-a*n)*y,t[6]=u*y,t[7]=(i*c-l*n)*y,t[8]=(o*n-i*s)*y,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).copy(this).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1),this}scale(t,n){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(t){const n=Math.cos(t),i=Math.sin(t),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],f=r[7];return r[0]=n*s+i*c,r[3]=n*o+i*l,r[6]=n*a+i*f,r[1]=-i*s+n*c,r[4]=-i*o+n*l,r[7]=-i*a+n*f,this}translate(t,n){const i=this.elements;return i[0]+=t*i[2],i[3]+=t*i[5],i[6]+=t*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}}let Un;const zn={getDataURL:function(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Un===void 0&&(Un=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Un.width=e.width,Un.height=e.height;const n=Un.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Un}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}};let Wh=0;function Ut(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=he,i=he,r=Kt,s=ar,o=Me,a=gs,c=1,l=Li){Object.defineProperty(this,"id",{value:Wh++}),this.uuid=bt.generateUUID(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.version=0,this.onUpdate=null}Ut.DEFAULT_IMAGE=void 0;Ut.DEFAULT_MAPPING=Xo;Ut.prototype=Object.assign(Object.create(Ge.prototype),{constructor:Ut,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this},toJSON:function(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=bt.generateUUID()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(_s(i[s].image)):r.push(_s(i[s]))}else r=_s(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(e){if(this.mapping!==Xo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case he:e.x=e.x<0?0:1;break;case ms:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case he:e.y=e.y<0?0:1;break;case ms:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}});Object.defineProperty(Ut.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});function _s(e){return typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap?zn.getDataURL(e):e.data?{data:Array.prototype.slice.call(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Dt{constructor(t=0,n=0,i=0,r=1){Object.defineProperty(this,"isVector4",{value:!0}),this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,n){return n!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,n)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t,n){return n!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,n)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s;const o=.01,a=.1,c=t.elements,l=c[0],f=c[4],h=c[8],d=c[1],u=c[5],p=c[9],y=c[2],v=c[6],g=c[10];if(Math.abs(f-d)<o&&Math.abs(h-y)<o&&Math.abs(p-v)<o){if(Math.abs(f+d)<a&&Math.abs(h+y)<a&&Math.abs(p+v)<a&&Math.abs(l+u+g-3)<a)return this.set(1,0,0,0),this;n=Math.PI;const E=(l+1)/2,T=(u+1)/2,w=(g+1)/2,x=(f+d)/4,A=(h+y)/4,H=(p+v)/4;return E>T&&E>w?E<o?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=x/i,s=A/i):T>w?T<o?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=x/r,s=H/r):w<o?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=A/s,r=H/s),this.set(i,r,s,n),this}let m=Math.sqrt((v-p)*(v-p)+(h-y)*(h-y)+(d-f)*(d-f));return Math.abs(m)<.001&&(m=1),this.x=(v-p)/m,this.y=(h-y)/m,this.z=(d-f)/m,this.w=Math.acos((l+u+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}function we(e,t,n){this.width=e,this.height=t,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),n=n||{},this.texture=new Ut(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}we.prototype=Object.assign(Object.create(Ge.prototype),{constructor:we,isWebGLRenderTarget:!0,setSize:function(e,t){(this.width!==e||this.height!==t)&&(this.width=e,this.height=t,this.texture.image.width=e,this.texture.image.height=t,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.width=e.width,this.height=e.height,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function ua(e,t,n){we.call(this,e,t,n),this.samples=4}ua.prototype=Object.assign(Object.create(we.prototype),{constructor:ua,isWebGLMultisampleRenderTarget:!0,copy:function(e){return we.prototype.copy.call(this,e),this.samples=e.samples,this}});class ue{constructor(t=0,n=0,i=0,r=1){Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=t,this._y=n,this._z=i,this._w=r}static slerp(t,n,i,r){return i.copy(t).slerp(n,r)}static slerpFlat(t,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],u=s[o+1],p=s[o+2],y=s[o+3];if(h!==y||c!==d||l!==u||f!==p){let v=1-a;const g=c*d+l*u+f*p+h*y,m=g>=0?1:-1,E=1-g*g;if(E>Number.EPSILON){const w=Math.sqrt(E),x=Math.atan2(w,g*m);v=Math.sin(v*x)/w,a=Math.sin(a*x)/w}const T=a*m;if(c=c*v+d*T,l=l*v+u*T,f=f*v+p*T,h=h*v+y*T,v===1-a){const w=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=w,l*=w,f*=w,h*=w}}t[n]=c,t[n+1]=l,t[n+2]=f,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],f=i[r+3],h=s[o],d=s[o+1],u=s[o+2],p=s[o+3];return t[n]=a*p+f*h+c*u-l*d,t[n+1]=c*p+f*d+l*h-a*u,t[n+2]=l*p+f*u+a*d-c*h,t[n+3]=f*p-a*h-c*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),f=a(r/2),h=a(s/2),d=c(i/2),u=c(r/2),p=c(s/2);switch(o){case"XYZ":this._x=d*f*h+l*u*p,this._y=l*u*h-d*f*p,this._z=l*f*p+d*u*h,this._w=l*f*h-d*u*p;break;case"YXZ":this._x=d*f*h+l*u*p,this._y=l*u*h-d*f*p,this._z=l*f*p-d*u*h,this._w=l*f*h+d*u*p;break;case"ZXY":this._x=d*f*h-l*u*p,this._y=l*u*h+d*f*p,this._z=l*f*p+d*u*h,this._w=l*f*h-d*u*p;break;case"ZYX":this._x=d*f*h-l*u*p,this._y=l*u*h+d*f*p,this._z=l*f*p-d*u*h,this._w=l*f*h+d*u*p;break;case"YZX":this._x=d*f*h+l*u*p,this._y=l*u*h+d*f*p,this._z=l*f*p-d*u*h,this._w=l*f*h-d*u*p;break;case"XZY":this._x=d*f*h-l*u*p,this._y=l*u*h-d*f*p,this._z=l*f*p+d*u*h,this._w=l*f*h+d*u*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(f-c)*u,this._y=(s-l)*u,this._z=(o-r)*u}else if(i>a&&i>h){const u=2*Math.sqrt(1+i-a-h);this._w=(f-c)/u,this._x=.25*u,this._y=(r+o)/u,this._z=(s+l)/u}else if(a>h){const u=2*Math.sqrt(1+a-i-h);this._w=(s-l)/u,this._x=(r+o)/u,this._y=.25*u,this._z=(c+f)/u}else{const u=2*Math.sqrt(1+h-i-a);this._w=(o-r)/u,this._x=(s+l)/u,this._y=(c+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,n){const i=1e-6;let r=t.dot(n)+1;return r<i?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(bt.clamp(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,n){return n!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,n)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,s=t._z,o=t._w,a=n._x,c=n._y,l=n._z,f=n._w;return this._x=i*f+o*a+r*l-s*c,this._y=r*f+o*c+s*a-i*l,this._z=s*f+o*l+i*c-r*a,this._w=o*f-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const u=1-n;return this._w=u*o+n*this._w,this._x=u*i+n*this._x,this._y=u*r+n*this._y,this._z=u*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),f=Math.atan2(l,a),h=Math.sin((1-n)*f)/l,d=Math.sin(n*f)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}class S{constructor(t=0,n=0,i=0){Object.defineProperty(this,"isVector3",{value:!0}),this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,n){return n!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,n)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t,n){return n!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,n)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t,n){return n!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,n)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(fa.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(fa.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=c*n+o*r-a*i,f=c*i+a*n-s*r,h=c*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=l*c+d*-s+f*-a-h*-o,this.y=f*c+d*-o+h*-s-l*-a,this.z=h*c+d*-a+l*-o-f*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t,n){return n!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,n)):this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,s=t.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return bs.copy(this).projectOnVector(t),this.sub(bs)}reflect(t){return this.sub(bs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(bt.clamp(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}const bs=new S,fa=new ue;class tn{constructor(t,n){Object.defineProperty(this,"isBox3",{value:!0}),this.min=t!==void 0?t:new S(1/0,1/0,1/0),this.max=n!==void 0?n:new S(-1/0,-1/0,-1/0)}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const f=t[c],h=t[c+1],d=t[c+2];f<n&&(n=f),h<i&&(i=h),d<r&&(r=d),f>s&&(s=f),h>o&&(o=h),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(t){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const f=t.getX(c),h=t.getY(c),d=t.getZ(c);f<n&&(n=f),h<i&&(i=h),d<r&&(r=d),f>s&&(s=f),h>o&&(o=h),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Ri.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t){return this.makeEmpty(),this.expandByObject(t)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return t===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),t=new S),this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return t===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),t=new S),this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t){t.updateWorldMatrix(!1,!1);const n=t.geometry;n!==void 0&&(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox),ws.applyMatrix4(t.matrixWorld),this.union(ws));const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),n=new S),n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pi),gr.subVectors(this.max,Pi),Hn.subVectors(t.a,Pi),Gn.subVectors(t.b,Pi),kn.subVectors(t.c,Pi),en.subVectors(Gn,Hn),nn.subVectors(kn,Gn),xn.subVectors(Hn,kn);let n=[0,-en.z,en.y,0,-nn.z,nn.y,0,-xn.z,xn.y,en.z,0,-en.x,nn.z,0,-nn.x,xn.z,0,-xn.x,-en.y,en.x,0,-nn.y,nn.x,0,-xn.y,xn.x,0];return!Ms(n,Hn,Gn,kn,gr)||(n=[1,0,0,0,1,0,0,0,1],!Ms(n,Hn,Gn,kn,gr))?!1:(yr.crossVectors(en,nn),n=[yr.x,yr.y,yr.z],Ms(n,Hn,Gn,kn,gr))}clampPoint(t,n){return n===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),n=new S),n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Ri.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return t===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ke[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ke[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ke[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ke[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ke[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ke[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ke[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ke[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ke),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}function Ms(e,t,n,i,r){for(let s=0,o=e.length-3;s<=o;s+=3){_n.fromArray(e,s);const a=r.x*Math.abs(_n.x)+r.y*Math.abs(_n.y)+r.z*Math.abs(_n.z),c=t.dot(_n),l=n.dot(_n),f=i.dot(_n);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}const ke=[new S,new S,new S,new S,new S,new S,new S,new S],Ri=new S,ws=new tn,Hn=new S,Gn=new S,kn=new S,en=new S,nn=new S,xn=new S,Pi=new S,gr=new S,yr=new S,_n=new S,jh=new tn;class rn{constructor(t,n){this.center=t!==void 0?t:new S,this.radius=n!==void 0?n:-1}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):jh.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),n=new S),n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return t===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),t=new tn),this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}}const Ve=new S,Ss=new S,vr=new S,sn=new S,Es=new S,xr=new S,Ts=new S;class Ii{constructor(t,n){this.origin=t!==void 0?t:new S,this.direction=n!==void 0?n:new S(0,0,-1)}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n===void 0&&(console.warn("THREE.Ray: .at() target is now required"),n=new S),n.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ve)),this}closestPointToPoint(t,n){n===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),n=new S),n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ve.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ve.copy(this.direction).multiplyScalar(n).add(this.origin),Ve.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){Ss.copy(t).add(n).multiplyScalar(.5),vr.copy(n).sub(t).normalize(),sn.copy(this.origin).sub(Ss);const s=t.distanceTo(n)*.5,o=-this.direction.dot(vr),a=sn.dot(this.direction),c=-sn.dot(vr),l=sn.lengthSq(),f=Math.abs(1-o*o);let h,d,u,p;if(f>0)if(h=o*c-a,d=o*a-c,p=s*f,h>=0)if(d>=-p)if(d<=p){const y=1/f;h*=y,d*=y,u=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),u=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-s,-c),s),u=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),u=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(vr).multiplyScalar(d).add(Ss),u}intersectSphere(t,n){Ve.subVectors(t.center,this.origin);const i=Ve.dot(this.direction),r=Ve.dot(Ve)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,s,o,a,c;const l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),f>=0?(s=(t.min.y-d.y)*f,o=(t.max.y-d.y)*f):(s=(t.max.y-d.y)*f,o=(t.min.y-d.y)*f),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,Ve)!==null}intersectTriangle(t,n,i,r,s){Es.subVectors(n,t),xr.subVectors(i,t),Ts.crossVectors(Es,xr);let o=this.direction.dot(Ts),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sn.subVectors(this.origin,t);const c=a*this.direction.dot(xr.crossVectors(sn,xr));if(c<0)return null;const l=a*this.direction.dot(Es.cross(sn));if(l<0||c+l>o)return null;const f=-a*sn.dot(Ts);return f<0?null:this.at(f/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}}class wt{constructor(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,n,i,r,s,o,a,c,l,f,h,d,u,p,y,v){const g=this.elements;return g[0]=t,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=f,g[10]=h,g[14]=d,g[3]=u,g[7]=p,g[11]=y,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/Vn.setFromMatrixColumn(t,0).length(),s=1/Vn.setFromMatrixColumn(t,1).length(),o=1/Vn.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const n=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*f,u=o*h,p=a*f,y=a*h;n[0]=c*f,n[4]=-c*h,n[8]=l,n[1]=u+p*l,n[5]=d-y*l,n[9]=-a*c,n[2]=y-d*l,n[6]=p+u*l,n[10]=o*c}else if(t.order==="YXZ"){const d=c*f,u=c*h,p=l*f,y=l*h;n[0]=d+y*a,n[4]=p*a-u,n[8]=o*l,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=u*a-p,n[6]=y+d*a,n[10]=o*c}else if(t.order==="ZXY"){const d=c*f,u=c*h,p=l*f,y=l*h;n[0]=d-y*a,n[4]=-o*h,n[8]=p+u*a,n[1]=u+p*a,n[5]=o*f,n[9]=y-d*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(t.order==="ZYX"){const d=o*f,u=o*h,p=a*f,y=a*h;n[0]=c*f,n[4]=p*l-u,n[8]=d*l+y,n[1]=c*h,n[5]=y*l+d,n[9]=u*l-p,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(t.order==="YZX"){const d=o*c,u=o*l,p=a*c,y=a*l;n[0]=c*f,n[4]=y-d*h,n[8]=p*h+u,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-l*f,n[6]=u*h+p,n[10]=d-y*h}else if(t.order==="XZY"){const d=o*c,u=o*l,p=a*c,y=a*l;n[0]=c*f,n[4]=-h,n[8]=l*f,n[1]=d*h+y,n[5]=o*f,n[9]=u*h-p,n[2]=p*h-u,n[6]=a*f,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qh,t,Xh)}lookAt(t,n,i){const r=this.elements;return fe.subVectors(t,n),fe.lengthSq()===0&&(fe.z=1),fe.normalize(),on.crossVectors(i,fe),on.lengthSq()===0&&(Math.abs(i.z)===1?fe.x+=1e-4:fe.z+=1e-4,fe.normalize(),on.crossVectors(i,fe)),on.normalize(),_r.crossVectors(fe,on),r[0]=on.x,r[4]=_r.x,r[8]=fe.x,r[1]=on.y,r[5]=_r.y,r[9]=fe.y,r[2]=on.z,r[6]=_r.z,r[10]=fe.z,this}multiply(t,n){return n!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,n)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],f=i[1],h=i[5],d=i[9],u=i[13],p=i[2],y=i[6],v=i[10],g=i[14],m=i[3],E=i[7],T=i[11],w=i[15],x=r[0],A=r[4],H=r[8],B=r[12],et=r[1],P=r[5],F=r[9],D=r[13],R=r[2],C=r[6],O=r[10],V=r[14],X=r[3],K=r[7],rt=r[11],it=r[15];return s[0]=o*x+a*et+c*R+l*X,s[4]=o*A+a*P+c*C+l*K,s[8]=o*H+a*F+c*O+l*rt,s[12]=o*B+a*D+c*V+l*it,s[1]=f*x+h*et+d*R+u*X,s[5]=f*A+h*P+d*C+u*K,s[9]=f*H+h*F+d*O+u*rt,s[13]=f*B+h*D+d*V+u*it,s[2]=p*x+y*et+v*R+g*X,s[6]=p*A+y*P+v*C+g*K,s[10]=p*H+y*F+v*O+g*rt,s[14]=p*B+y*D+v*V+g*it,s[3]=m*x+E*et+T*R+w*X,s[7]=m*A+E*P+T*C+w*K,s[11]=m*H+E*F+T*O+w*rt,s[15]=m*B+E*D+T*V+w*it,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],f=t[2],h=t[6],d=t[10],u=t[14],p=t[3],y=t[7],v=t[11],g=t[15];return p*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*u-i*c*u)+y*(+n*c*u-n*l*d+s*o*d-r*o*u+r*l*f-s*c*f)+v*(+n*l*h-n*a*u-s*o*h+i*o*u+s*a*f-i*l*f)+g*(-r*a*f-n*c*h+n*a*d+r*o*h-i*o*d+i*c*f)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],f=t[8],h=t[9],d=t[10],u=t[11],p=t[12],y=t[13],v=t[14],g=t[15],m=h*v*l-y*d*l+y*c*u-a*v*u-h*c*g+a*d*g,E=p*d*l-f*v*l-p*c*u+o*v*u+f*c*g-o*d*g,T=f*y*l-p*h*l+p*a*u-o*y*u-f*a*g+o*h*g,w=p*h*c-f*y*c-p*a*d+o*y*d+f*a*v-o*h*v,x=n*m+i*E+r*T+s*w;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/x;return t[0]=m*A,t[1]=(y*d*s-h*v*s-y*r*u+i*v*u+h*r*g-i*d*g)*A,t[2]=(a*v*s-y*c*s+y*r*l-i*v*l-a*r*g+i*c*g)*A,t[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*u-i*c*u)*A,t[4]=E*A,t[5]=(f*v*s-p*d*s+p*r*u-n*v*u-f*r*g+n*d*g)*A,t[6]=(p*c*s-o*v*s-p*r*l+n*v*l+o*r*g-n*c*g)*A,t[7]=(o*d*s-f*c*s+f*r*l-n*d*l-o*r*u+n*c*u)*A,t[8]=T*A,t[9]=(p*h*s-f*y*s-p*i*u+n*y*u+f*i*g-n*h*g)*A,t[10]=(o*y*s-p*a*s+p*i*l-n*y*l-o*i*g+n*a*g)*A,t[11]=(f*a*s-o*h*s-f*i*l+n*h*l+o*i*u-n*a*u)*A,t[12]=w*A,t[13]=(f*y*r-p*h*r+p*i*d-n*y*d-f*i*v+n*h*v)*A,t[14]=(p*a*r-o*y*r-p*i*c+n*y*c+o*i*v-n*a*v)*A,t[15]=(o*h*r-f*a*r+f*i*c-n*h*c-o*i*d+n*a*d)*A,this}scale(t){const n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,f=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,f*a+i,f*c-r*o,0,l*c-r*a,f*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i){return this.set(1,n,i,0,t,1,i,0,t,n,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,f=o+o,h=a+a,d=s*l,u=s*f,p=s*h,y=o*f,v=o*h,g=a*h,m=c*l,E=c*f,T=c*h,w=i.x,x=i.y,A=i.z;return r[0]=(1-(y+g))*w,r[1]=(u+T)*w,r[2]=(p-E)*w,r[3]=0,r[4]=(u-T)*x,r[5]=(1-(d+g))*x,r[6]=(v+m)*x,r[7]=0,r[8]=(p+E)*A,r[9]=(v-m)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let s=Vn.set(r[0],r[1],r[2]).length();const o=Vn.set(r[4],r[5],r[6]).length(),a=Vn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Se.copy(this);const l=1/s,f=1/o,h=1/a;return Se.elements[0]*=l,Se.elements[1]*=l,Se.elements[2]*=l,Se.elements[4]*=f,Se.elements[5]*=f,Se.elements[6]*=f,Se.elements[8]*=h,Se.elements[9]*=h,Se.elements[10]*=h,n.setFromRotationMatrix(Se),i.x=s,i.y=o,i.z=a,this}makePerspective(t,n,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*s/(n-t),l=2*s/(i-r),f=(n+t)/(n-t),h=(i+r)/(i-r),d=-(o+s)/(o-s),u=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=u,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,n,i,r,s,o){const a=this.elements,c=1/(n-t),l=1/(i-r),f=1/(o-s),h=(n+t)*c,d=(i+r)*l,u=(o+s)*f;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-u,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Vn=new S,Se=new wt,qh=new S(0,0,0),Xh=new S(1,1,1),on=new S,_r=new S,fe=new S;class Di{constructor(t=0,n=0,i=0,r=Di.DefaultOrder){Object.defineProperty(this,"isEuler",{value:!0}),this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n,i){const r=bt.clamp,s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],f=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(n=n||this._order,n){case"XYZ":this._y=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(u,f),this._z=0);break;case"YXZ":this._x=Math.asin(-r(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,p),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-r(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,p));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,f),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return da.makeRotationFromQuaternion(t),this.setFromRotationMatrix(da,n,i)}setFromVector3(t,n){return this.set(t.x,t.y,t.z,n||this._order)}reorder(t){return pa.setFromEuler(this),this.setFromQuaternion(pa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}toVector3(t){return t?t.set(this._x,this._y,this._z):new S(this._x,this._y,this._z)}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}Di.DefaultOrder="XYZ";Di.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];const da=new wt,pa=new ue;class ma{constructor(){this.mask=1|0}set(t){this.mask=1<<t|0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=4294967295|0}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!=0}}let Yh=0;const ga=new S,Wn=new ue,We=new wt,br=new S,Ni=new S,Zh=new S,Jh=new ue,ya=new S(1,0,0),va=new S(0,1,0),xa=new S(0,0,1),Qh={type:"added"},_a={type:"removed"};function ft(){Object.defineProperty(this,"id",{value:Yh++}),this.uuid=bt.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DefaultUp.clone();const e=new S,t=new Di,n=new ue,i=new S(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new wt},normalMatrix:{value:new ce}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=ft.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}ft.DefaultUp=new S(0,1,0);ft.DefaultMatrixAutoUpdate=!0;ft.prototype=Object.assign(Object.create(Ge.prototype),{constructor:ft,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(e){return this.quaternion.premultiply(e),this},setRotationFromAxisAngle:function(e,t){this.quaternion.setFromAxisAngle(e,t)},setRotationFromEuler:function(e){this.quaternion.setFromEuler(e,!0)},setRotationFromMatrix:function(e){this.quaternion.setFromRotationMatrix(e)},setRotationFromQuaternion:function(e){this.quaternion.copy(e)},rotateOnAxis:function(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.multiply(Wn),this},rotateOnWorldAxis:function(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.premultiply(Wn),this},rotateX:function(e){return this.rotateOnAxis(ya,e)},rotateY:function(e){return this.rotateOnAxis(va,e)},rotateZ:function(e){return this.rotateOnAxis(xa,e)},translateOnAxis:function(e,t){return ga.copy(e).applyQuaternion(this.quaternion),this.position.add(ga.multiplyScalar(t)),this},translateX:function(e){return this.translateOnAxis(ya,e)},translateY:function(e){return this.translateOnAxis(va,e)},translateZ:function(e){return this.translateOnAxis(xa,e)},localToWorld:function(e){return e.applyMatrix4(this.matrixWorld)},worldToLocal:function(e){return e.applyMatrix4(We.copy(this.matrixWorld).invert())},lookAt:function(e,t,n){e.isVector3?br.copy(e):br.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?We.lookAt(Ni,br,this.up):We.lookAt(br,Ni,this.up),this.quaternion.setFromRotationMatrix(We),i&&(We.extractRotation(i.matrixWorld),Wn.setFromRotationMatrix(We),this.quaternion.premultiply(Wn.invert()))},add:function(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)},remove:function(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_a)),this},clear:function(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(_a)}return this.children.length=0,this},attach:function(e){return this.updateWorldMatrix(!0,!1),We.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),We.multiply(e.parent.matrixWorld)),e.applyMatrix4(We),e.updateWorldMatrix(!1,!1),this.add(e),this},getObjectById:function(e){return this.getObjectByProperty("id",e)},getObjectByName:function(e){return this.getObjectByProperty("name",e)},getObjectByProperty:function(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}},getWorldPosition:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new S),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new ue),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,Zh),e},getWorldScale:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new S),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,Jh,e),e},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new S),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()},raycast:function(){},traverse:function(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)},traverseVisible:function(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)},traverseAncestors:function(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)},updateWorldMatrix:function(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(e)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){const f=a[c];r(e.shapes,f)}else r(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(e.materials,this.material[a]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(r(e.animations,a))}}if(t){const o=s(e.geometries),a=s(e.materials),c=s(e.textures),l=s(e.images),f=s(e.shapes),h=s(e.skeletons),d=s(e.animations);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d)}return n.object=i,n;function s(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(e){return new this.constructor().copy(this,e)},copy:function(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}});const As=new S,$h=new S,Kh=new ce;class je{constructor(t,n){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=t!==void 0?t:new S(1,0,0),this.constant=n!==void 0?n:0}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=As.subVectors(i,n).cross($h.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}clone(){return new this.constructor().copy(this)}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),n=new S),n.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,n){n===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),n=new S);const i=t.delta(As),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):void 0;const s=-(t.start.dot(this.normal)+this.constant)/r;if(!(s<0||s>1))return n.copy(i).multiplyScalar(s).add(t.start)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),t=new S),t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||Kh.getNormalMatrix(t),r=this.coplanarPoint(As).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}}const Ee=new S,qe=new S,Ls=new S,Xe=new S,jn=new S,qn=new S,ba=new S,Cs=new S,Rs=new S,Ps=new S;class te{constructor(t,n,i){this.a=t!==void 0?t:new S,this.b=n!==void 0?n:new S,this.c=i!==void 0?i:new S}static getNormal(t,n,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new S),r.subVectors(i,n),Ee.subVectors(t,n),r.cross(Ee);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){Ee.subVectors(r,n),qe.subVectors(i,n),Ls.subVectors(t,n);const o=Ee.dot(Ee),a=Ee.dot(qe),c=Ee.dot(Ls),l=qe.dot(qe),f=qe.dot(Ls),h=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new S),h===0)return s.set(-2,-1,-1);const d=1/h,u=(l*c-a*f)*d,p=(o*f-a*c)*d;return s.set(1-u-p,p,u)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,Xe),Xe.x>=0&&Xe.y>=0&&Xe.x+Xe.y<=1}static getUV(t,n,i,r,s,o,a,c){return this.getBarycoord(t,n,i,r,Xe),c.set(0,0),c.addScaledVector(s,Xe.x),c.addScaledVector(o,Xe.y),c.addScaledVector(a,Xe.z),c}static isFrontFacing(t,n,i,r){return Ee.subVectors(i,n),qe.subVectors(t,n),Ee.cross(qe).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ee.subVectors(this.c,this.b),qe.subVectors(this.a,this.b),Ee.cross(qe).length()*.5}getMidpoint(t){return t===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),t=new S),t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return te.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),t=new je),t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return te.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,i,r,s){return te.getUV(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return te.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return te.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){n===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),n=new S);const i=this.a,r=this.b,s=this.c;let o,a;jn.subVectors(r,i),qn.subVectors(s,i),Cs.subVectors(t,i);const c=jn.dot(Cs),l=qn.dot(Cs);if(c<=0&&l<=0)return n.copy(i);Rs.subVectors(t,r);const f=jn.dot(Rs),h=qn.dot(Rs);if(f>=0&&h<=f)return n.copy(r);const d=c*h-f*l;if(d<=0&&c>=0&&f<=0)return o=c/(c-f),n.copy(i).addScaledVector(jn,o);Ps.subVectors(t,s);const u=jn.dot(Ps),p=qn.dot(Ps);if(p>=0&&u<=p)return n.copy(s);const y=u*l-c*p;if(y<=0&&l>=0&&p<=0)return a=l/(l-p),n.copy(i).addScaledVector(qn,a);const v=f*p-u*h;if(v<=0&&h-f>=0&&u-p>=0)return ba.subVectors(s,r),a=(h-f)/(h-f+(u-p)),n.copy(r).addScaledVector(ba,a);const g=1/(v+y+d);return o=y*g,a=d*g,n.copy(i).addScaledVector(jn,o).addScaledVector(qn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ma={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Te={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Is(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function Ds(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Ns(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}class ct{constructor(t,n,i){return Object.defineProperty(this,"isColor",{value:!0}),n===void 0&&i===void 0?this.set(t):this.setRGB(t,n,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,this}setRGB(t,n,i){return this.r=t,this.g=n,this.b=i,this}setHSL(t,n,i){if(t=bt.euclideanModulo(t,1),n=bt.clamp(n,0,1),i=bt.clamp(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Is(s,r,t+1/3),this.g=Is(s,r,t),this.b=Is(s,r,t-1/3)}return this}setStyle(t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,n(r[4]),this;if(r=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,n(r[4]),this;break;case"hsl":case"hsla":if(r=/^(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return t&&t.length>0?this.setColorName(t):this}setColorName(t){const n=Ma[t];return n!==void 0?this.setHex(n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copyGammaToLinear(t,n=2){return this.r=Math.pow(t.r,n),this.g=Math.pow(t.g,n),this.b=Math.pow(t.b,n),this}copyLinearToGamma(t,n=2){const i=n>0?1/n:1;return this.r=Math.pow(t.r,i),this.g=Math.pow(t.g,i),this.b=Math.pow(t.b,i),this}convertGammaToLinear(t){return this.copyGammaToLinear(this,t),this}convertLinearToGamma(t){return this.copyLinearToGamma(this,t),this}copySRGBToLinear(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(t){t===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),t={h:0,s:0,l:0});const n=this.r,i=this.g,r=this.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let a,c;const l=(o+s)/2;if(o===s)a=0,c=0;else{const f=s-o;switch(c=l<=.5?f/(s+o):f/(2-s-o),s){case n:a=(i-r)/f+(i<r?6:0);break;case i:a=(r-n)/f+2;break;case r:a=(n-i)/f+4;break}a/=6}return t.h=a,t.s=c,t.l=l,t}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(t,n,i){return this.getHSL(Te),Te.h+=t,Te.s+=n,Te.l+=i,this.setHSL(Te.h,Te.s,Te.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpHSL(t,n){this.getHSL(Te),t.getHSL(Mr);const i=bt.lerp(Te.h,Mr.h,n),r=bt.lerp(Te.s,Mr.s,n),s=bt.lerp(Te.l,Mr.l,n);return this.setHSL(i,r,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ct.NAMES=Ma;ct.prototype.r=1;ct.prototype.g=1;ct.prototype.b=1;class Os{constructor(t,n,i,r,s,o=0){this.a=t,this.b=n,this.c=i,this.normal=r&&r.isVector3?r:new S,this.vertexNormals=Array.isArray(r)?r:[],this.color=s&&s.isColor?s:new ct,this.vertexColors=Array.isArray(s)?s:[],this.materialIndex=o}clone(){return new this.constructor().copy(this)}copy(t){this.a=t.a,this.b=t.b,this.c=t.c,this.normal.copy(t.normal),this.color.copy(t.color),this.materialIndex=t.materialIndex;for(let n=0,i=t.vertexNormals.length;n<i;n++)this.vertexNormals[n]=t.vertexNormals[n].clone();for(let n=0,i=t.vertexColors.length;n<i;n++)this.vertexColors[n]=t.vertexColors[n].clone();return this}}let tu=0;function pt(){Object.defineProperty(this,"id",{value:tu++}),this.uuid=bt.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=Si,this.side=rr,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=jo,this.blendDst=qo,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}pt.prototype=Object.assign(Object.create(Ge.prototype),{constructor:pt,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===zo;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}},toJSON:function(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==rr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.flatShading=e.flatShading,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(pt.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});function bn(e){pt.call(this),this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}bn.prototype=Object.create(pt.prototype);bn.prototype.constructor=bn;bn.prototype.isMeshBasicMaterial=!0;bn.prototype.copy=function(e){return pt.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this};const zt=new S,wr=new G;function gt(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=pr,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(gt.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(gt.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this},copyAt:function(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this},copyArray:function(e){return this.array.set(e),this},copyColorsArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new ct),t[n++]=s.r,t[n++]=s.g,t[n++]=s.b}return this},copyVector2sArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new G),t[n++]=s.x,t[n++]=s.y}return this},copyVector3sArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new S),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z}return this},copyVector4sArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new Dt),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z,t[n++]=s.w}return this},applyMatrix3:function(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this},applyMatrix4:function(e){for(let t=0,n=this.count;t<n;t++)zt.x=this.getX(t),zt.y=this.getY(t),zt.z=this.getZ(t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this},applyNormalMatrix:function(e){for(let t=0,n=this.count;t<n;t++)zt.x=this.getX(t),zt.y=this.getY(t),zt.z=this.getZ(t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this},transformDirection:function(e){for(let t=0,n=this.count;t<n;t++)zt.x=this.getX(t),zt.y=this.getY(t),zt.z=this.getZ(t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this},set:function(e,t=0){return this.array.set(e,t),this},getX:function(e){return this.array[e*this.itemSize]},setX:function(e,t){return this.array[e*this.itemSize]=t,this},getY:function(e){return this.array[e*this.itemSize+1]},setY:function(e,t){return this.array[e*this.itemSize+1]=t,this},getZ:function(e){return this.array[e*this.itemSize+2]},setZ:function(e,t){return this.array[e*this.itemSize+2]=t,this},getW:function(e){return this.array[e*this.itemSize+3]},setW:function(e,t){return this.array[e*this.itemSize+3]=t,this},setXY:function(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this},onUpload:function(e){return this.onUploadCallback=e,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function Fs(e,t,n){gt.call(this,new Int8Array(e),t,n)}Fs.prototype=Object.create(gt.prototype);Fs.prototype.constructor=Fs;function Bs(e,t,n){gt.call(this,new Uint8Array(e),t,n)}Bs.prototype=Object.create(gt.prototype);Bs.prototype.constructor=Bs;function Us(e,t,n){gt.call(this,new Uint8ClampedArray(e),t,n)}Us.prototype=Object.create(gt.prototype);Us.prototype.constructor=Us;function zs(e,t,n){gt.call(this,new Int16Array(e),t,n)}zs.prototype=Object.create(gt.prototype);zs.prototype.constructor=zs;function Oi(e,t,n){gt.call(this,new Uint16Array(e),t,n)}Oi.prototype=Object.create(gt.prototype);Oi.prototype.constructor=Oi;function Hs(e,t,n){gt.call(this,new Int32Array(e),t,n)}Hs.prototype=Object.create(gt.prototype);Hs.prototype.constructor=Hs;function Fi(e,t,n){gt.call(this,new Uint32Array(e),t,n)}Fi.prototype=Object.create(gt.prototype);Fi.prototype.constructor=Fi;function Sr(e,t,n){gt.call(this,new Uint16Array(e),t,n)}Sr.prototype=Object.create(gt.prototype);Sr.prototype.constructor=Sr;Sr.prototype.isFloat16BufferAttribute=!0;function Pt(e,t,n){gt.call(this,new Float32Array(e),t,n)}Pt.prototype=Object.create(gt.prototype);Pt.prototype.constructor=Pt;function Gs(e,t,n){gt.call(this,new Float64Array(e),t,n)}Gs.prototype=Object.create(gt.prototype);Gs.prototype.constructor=Gs;class eu{constructor(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}computeGroups(t){const n=[];let i,r,s;const o=t.faces;for(r=0;r<o.length;r++){const a=o[r];a.materialIndex!==s&&(s=a.materialIndex,i!==void 0&&(i.count=r*3-i.start,n.push(i)),i={start:r*3,materialIndex:s})}i!==void 0&&(i.count=r*3-i.start,n.push(i)),this.groups=n}fromGeometry(t){const n=t.faces,i=t.vertices,r=t.faceVertexUvs,s=r[0]&&r[0].length>0,o=r[1]&&r[1].length>0,a=t.morphTargets,c=a.length;let l;if(c>0){l=[];for(let g=0;g<c;g++)l[g]={name:a[g].name,data:[]};this.morphTargets.position=l}const f=t.morphNormals,h=f.length;let d;if(h>0){d=[];for(let g=0;g<h;g++)d[g]={name:f[g].name,data:[]};this.morphTargets.normal=d}const u=t.skinIndices,p=t.skinWeights,y=u.length===i.length,v=p.length===i.length;i.length>0&&n.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let g=0;g<n.length;g++){const m=n[g];this.vertices.push(i[m.a],i[m.b],i[m.c]);const E=m.vertexNormals;if(E.length===3)this.normals.push(E[0],E[1],E[2]);else{const w=m.normal;this.normals.push(w,w,w)}const T=m.vertexColors;if(T.length===3)this.colors.push(T[0],T[1],T[2]);else{const w=m.color;this.colors.push(w,w,w)}if(s===!0){const w=r[0][g];w!==void 0?this.uvs.push(w[0],w[1],w[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",g),this.uvs.push(new G,new G,new G))}if(o===!0){const w=r[1][g];w!==void 0?this.uvs2.push(w[0],w[1],w[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",g),this.uvs2.push(new G,new G,new G))}for(let w=0;w<c;w++){const x=a[w].vertices;l[w].data.push(x[m.a],x[m.b],x[m.c])}for(let w=0;w<h;w++){const x=f[w].vertexNormals[g];d[w].data.push(x.a,x.b,x.c)}y&&this.skinIndices.push(u[m.a],u[m.b],u[m.c]),v&&this.skinWeights.push(p[m.a],p[m.b],p[m.c])}return this.computeGroups(t),this.verticesNeedUpdate=t.verticesNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),this}}function wa(e){if(e.length===0)return-1/0;let t=e[0];for(let n=1,i=e.length;n<i;++n)e[n]>t&&(t=e[n]);return t}const nu={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray!="undefined"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Er(e,t){return new nu[e](t)}let iu=1;const Re=new wt,ks=new ft,Xn=new S,de=new tn,Bi=new tn,Yt=new S;function Nt(){Object.defineProperty(this,"id",{value:iu+=2}),this.uuid=bt.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}Nt.prototype=Object.assign(Object.create(Ge.prototype),{constructor:Nt,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(e){return Array.isArray(e)?this.index=new(wa(e)>65535?Fi:Oi)(e,1):this.index=e,this},getAttribute:function(e){return this.attributes[e]},setAttribute:function(e,t){return this.attributes[e]=t,this},deleteAttribute:function(e){return delete this.attributes[e],this},hasAttribute:function(e){return this.attributes[e]!==void 0},addGroup:function(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})},clearGroups:function(){this.groups=[]},setDrawRange:function(e,t){this.drawRange.start=e,this.drawRange.count=t},applyMatrix4:function(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ce().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(e){return Re.makeRotationX(e),this.applyMatrix4(Re),this},rotateY:function(e){return Re.makeRotationY(e),this.applyMatrix4(Re),this},rotateZ:function(e){return Re.makeRotationZ(e),this.applyMatrix4(Re),this},translate:function(e,t,n){return Re.makeTranslation(e,t,n),this.applyMatrix4(Re),this},scale:function(e,t,n){return Re.makeScale(e,t,n),this.applyMatrix4(Re),this},lookAt:function(e){return ks.lookAt(e),ks.updateMatrix(),this.applyMatrix4(ks.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this},setFromObject:function(e){const t=e.geometry;if(e.isPoints||e.isLine){const n=new Pt(t.vertices.length*3,3),i=new Pt(t.colors.length*3,3);if(this.setAttribute("position",n.copyVector3sArray(t.vertices)),this.setAttribute("color",i.copyColorsArray(t.colors)),t.lineDistances&&t.lineDistances.length===t.vertices.length){const r=new Pt(t.lineDistances.length,1);this.setAttribute("lineDistance",r.copyArray(t.lineDistances))}t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone())}else e.isMesh&&t&&t.isGeometry&&this.fromGeometry(t);return this},setFromPoints:function(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pt(t,3)),this},updateFromObject:function(e){let t=e.geometry;if(e.isMesh){let n=t.__directGeometry;if(t.elementsNeedUpdate===!0&&(n=void 0,t.elementsNeedUpdate=!1),n===void 0)return this.fromGeometry(t);n.verticesNeedUpdate=t.verticesNeedUpdate,n.normalsNeedUpdate=t.normalsNeedUpdate,n.colorsNeedUpdate=t.colorsNeedUpdate,n.uvsNeedUpdate=t.uvsNeedUpdate,n.groupsNeedUpdate=t.groupsNeedUpdate,t.verticesNeedUpdate=!1,t.normalsNeedUpdate=!1,t.colorsNeedUpdate=!1,t.uvsNeedUpdate=!1,t.groupsNeedUpdate=!1,t=n}if(t.verticesNeedUpdate===!0){const n=this.attributes.position;n!==void 0&&(n.copyVector3sArray(t.vertices),n.needsUpdate=!0),t.verticesNeedUpdate=!1}if(t.normalsNeedUpdate===!0){const n=this.attributes.normal;n!==void 0&&(n.copyVector3sArray(t.normals),n.needsUpdate=!0),t.normalsNeedUpdate=!1}if(t.colorsNeedUpdate===!0){const n=this.attributes.color;n!==void 0&&(n.copyColorsArray(t.colors),n.needsUpdate=!0),t.colorsNeedUpdate=!1}if(t.uvsNeedUpdate){const n=this.attributes.uv;n!==void 0&&(n.copyVector2sArray(t.uvs),n.needsUpdate=!0),t.uvsNeedUpdate=!1}if(t.lineDistancesNeedUpdate){const n=this.attributes.lineDistance;n!==void 0&&(n.copyArray(t.lineDistances),n.needsUpdate=!0),t.lineDistancesNeedUpdate=!1}return t.groupsNeedUpdate&&(t.computeGroups(e.geometry),this.groups=t.groups,t.groupsNeedUpdate=!1),this},fromGeometry:function(e){return e.__directGeometry=new eu().fromGeometry(e),this.fromDirectGeometry(e.__directGeometry)},fromDirectGeometry:function(e){const t=new Float32Array(e.vertices.length*3);if(this.setAttribute("position",new gt(t,3).copyVector3sArray(e.vertices)),e.normals.length>0){const n=new Float32Array(e.normals.length*3);this.setAttribute("normal",new gt(n,3).copyVector3sArray(e.normals))}if(e.colors.length>0){const n=new Float32Array(e.colors.length*3);this.setAttribute("color",new gt(n,3).copyColorsArray(e.colors))}if(e.uvs.length>0){const n=new Float32Array(e.uvs.length*2);this.setAttribute("uv",new gt(n,2).copyVector2sArray(e.uvs))}if(e.uvs2.length>0){const n=new Float32Array(e.uvs2.length*2);this.setAttribute("uv2",new gt(n,2).copyVector2sArray(e.uvs2))}this.groups=e.groups;for(const n in e.morphTargets){const i=[],r=e.morphTargets[n];for(let s=0,o=r.length;s<o;s++){const a=r[s],c=new Pt(a.data.length*3,3);c.name=a.name,i.push(c.copyVector3sArray(a.data))}this.morphAttributes[n]=i}if(e.skinIndices.length>0){const n=new Pt(e.skinIndices.length*4,4);this.setAttribute("skinIndex",n.copyVector4sArray(e.skinIndices))}if(e.skinWeights.length>0){const n=new Pt(e.skinWeights.length*4,4);this.setAttribute("skinWeight",n.copyVector4sArray(e.skinWeights))}return e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];de.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,de.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,de.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(de.min),this.boundingBox.expandByPoint(de.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){const n=this.boundingSphere.center;if(de.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Bi.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(de.min,Bi.min),de.expandByPoint(Yt),Yt.addVectors(de.max,Bi.max),de.expandByPoint(Yt)):(de.expandByPoint(Bi.min),de.expandByPoint(Bi.max))}de.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Yt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Yt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)Yt.fromBufferAttribute(o,c),a&&(Xn.fromBufferAttribute(e,c),Yt.add(Xn)),i=Math.max(i,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new S,r=new S,s=new S,o=new S,a=new S,c=new S,l=new S,f=new S;if(e)for(let h=0,d=e.count;h<d;h+=3){const u=e.getX(h+0),p=e.getX(h+1),y=e.getX(h+2);i.fromBufferAttribute(t,u),r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,y),l.subVectors(s,r),f.subVectors(i,r),l.cross(f),o.fromBufferAttribute(n,u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,y),o.add(l),a.add(l),c.add(l),n.setXYZ(u,o.x,o.y,o.z),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),l.subVectors(s,r),f.subVectors(i,r),l.cross(f),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const s=n[i].array,o=e.attributes[i],a=o.array,c=o.itemSize*t,l=Math.min(a.length,s.length-c);for(let f=0,h=c;f<l;f++,h++)s[h]=a[f]}return this},normalizeNormals:function(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)},toNonIndexed:function(){function e(o,a){const c=o.array,l=o.itemSize,f=o.normalized,h=new c.constructor(a.length*l);let d=0,u=0;for(let p=0,y=a.length;p<y;p++){d=a[p]*l;for(let v=0;v<l;v++)h[u++]=c[d++]}return new gt(h,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;const t=new Nt,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],c=e(a,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const a=[],c=r[o];for(let l=0,f=c.length;l<f;l++){const h=c[l],d=e(h,n);a.push(d)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t},toJSON:function(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(e[c]=a[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const c=n[a],l=c.toJSON(e.data);c.name!==""&&(l.name=c.name),e.data.attributes[a]=l}const i={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],l=[];for(let f=0,h=c.length;f<h;f++){const d=c[f],u=d.toJSON(e.data);d.name!==""&&(u.name=d.name),l.push(u)}l.length>0&&(i[a]=l,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e},clone:function(){return new Nt().copy(this)},copy:function(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const l=i[c];this.setAttribute(c,l.clone(t))}const r=e.morphAttributes;for(const c in r){const l=[],f=r[c];for(let h=0,d=f.length;h<d;h++)l.push(f[h].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,l=s.length;c<l;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const Sa=new wt,Mn=new Ii,Vs=new rn,an=new S,cn=new S,ln=new S,Ws=new S,js=new S,qs=new S,Tr=new S,Ar=new S,Lr=new S,Yn=new G,Zn=new G,Jn=new G,Ui=new S,Cr=new S;function ee(e=new Nt,t=new bn){ft.call(this),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}ee.prototype=Object.assign(Object.create(ft.prototype),{constructor:ee,isMesh:!0,copy:function(e){return ft.prototype.copy.call(this,e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this},updateMorphTargets:function(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),e.ray.intersectsSphere(Vs)===!1)||(Sa.copy(r).invert(),Mn.copy(e.ray).applyMatrix4(Sa),n.boundingBox!==null&&Mn.intersectsBox(n.boundingBox)===!1))return;let s;if(n.isBufferGeometry){const o=n.index,a=n.attributes.position,c=n.morphAttributes.position,l=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,y=d.length;p<y;p++){const v=d[p],g=i[v.materialIndex],m=Math.max(v.start,u.start),E=Math.min(v.start+v.count,u.start+u.count);for(let T=m,w=E;T<w;T+=3){const x=o.getX(T),A=o.getX(T+1),H=o.getX(T+2);s=Rr(this,g,e,Mn,a,c,l,f,h,x,A,H),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const p=Math.max(0,u.start),y=Math.min(o.count,u.start+u.count);for(let v=p,g=y;v<g;v+=3){const m=o.getX(v),E=o.getX(v+1),T=o.getX(v+2);s=Rr(this,i,e,Mn,a,c,l,f,h,m,E,T),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let p=0,y=d.length;p<y;p++){const v=d[p],g=i[v.materialIndex],m=Math.max(v.start,u.start),E=Math.min(v.start+v.count,u.start+u.count);for(let T=m,w=E;T<w;T+=3){const x=T,A=T+1,H=T+2;s=Rr(this,g,e,Mn,a,c,l,f,h,x,A,H),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const p=Math.max(0,u.start),y=Math.min(a.count,u.start+u.count);for(let v=p,g=y;v<g;v+=3){const m=v,E=v+1,T=v+2;s=Rr(this,i,e,Mn,a,c,l,f,h,m,E,T),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}else if(n.isGeometry){const o=Array.isArray(i),a=n.vertices,c=n.faces;let l;const f=n.faceVertexUvs[0];f.length>0&&(l=f);for(let h=0,d=c.length;h<d;h++){const u=c[h],p=o?i[u.materialIndex]:i;if(p===void 0)continue;const y=a[u.a],v=a[u.b],g=a[u.c];if(s=Ea(this,p,e,Mn,y,v,g,Ui),s){if(l&&l[h]){const m=l[h];Yn.copy(m[0]),Zn.copy(m[1]),Jn.copy(m[2]),s.uv=te.getUV(Ui,y,v,g,Yn,Zn,Jn,new G)}s.face=u,s.faceIndex=h,t.push(s)}}}}});function Ea(e,t,n,i,r,s,o,a){let c;if(t.side===Zt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side!==sr,a),c===null)return null;Cr.copy(a),Cr.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(Cr);return l<n.near||l>n.far?null:{distance:l,point:Cr.clone(),object:e}}function Rr(e,t,n,i,r,s,o,a,c,l,f,h){an.fromBufferAttribute(r,l),cn.fromBufferAttribute(r,f),ln.fromBufferAttribute(r,h);const d=e.morphTargetInfluences;if(t.morphTargets&&s&&d){Tr.set(0,0,0),Ar.set(0,0,0),Lr.set(0,0,0);for(let p=0,y=s.length;p<y;p++){const v=d[p],g=s[p];v!==0&&(Ws.fromBufferAttribute(g,l),js.fromBufferAttribute(g,f),qs.fromBufferAttribute(g,h),o?(Tr.addScaledVector(Ws,v),Ar.addScaledVector(js,v),Lr.addScaledVector(qs,v)):(Tr.addScaledVector(Ws.sub(an),v),Ar.addScaledVector(js.sub(cn),v),Lr.addScaledVector(qs.sub(ln),v)))}an.add(Tr),cn.add(Ar),ln.add(Lr)}e.isSkinnedMesh&&(e.boneTransform(l,an),e.boneTransform(f,cn),e.boneTransform(h,ln));const u=Ea(e,t,n,i,an,cn,ln,Ui);if(u){a&&(Yn.fromBufferAttribute(a,l),Zn.fromBufferAttribute(a,f),Jn.fromBufferAttribute(a,h),u.uv=te.getUV(Ui,an,cn,ln,Yn,Zn,Jn,new G)),c&&(Yn.fromBufferAttribute(c,l),Zn.fromBufferAttribute(c,f),Jn.fromBufferAttribute(c,h),u.uv2=te.getUV(Ui,an,cn,ln,Yn,Zn,Jn,new G));const p=new Os(l,f,h);te.getNormal(an,cn,ln,p.normal),u.face=p}return u}class Ta extends Nt{constructor(t=1,n=1,i=1,r=1,s=1,o=1){super();this.type="BoxBufferGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],f=[],h=[];let d=0,u=0;p("z","y","x",-1,-1,i,n,t,o,s,0),p("z","y","x",1,-1,i,n,-t,o,s,1),p("x","z","y",1,1,t,i,n,r,o,2),p("x","z","y",1,-1,t,i,-n,r,o,3),p("x","y","z",1,-1,t,n,i,r,s,4),p("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(h,2));function p(y,v,g,m,E,T,w,x,A,H,B){const et=T/A,P=w/H,F=T/2,D=w/2,R=x/2,C=A+1,O=H+1;let V=0,X=0;const K=new S;for(let rt=0;rt<O;rt++){const it=rt*P-D;for(let yt=0;yt<C;yt++){const Mt=yt*et-F;K[y]=Mt*m,K[v]=it*E,K[g]=R,l.push(K.x,K.y,K.z),K[y]=0,K[v]=0,K[g]=x>0?1:-1,f.push(K.x,K.y,K.z),h.push(yt/A),h.push(1-rt/H),V+=1}}for(let rt=0;rt<H;rt++)for(let it=0;it<A;it++){const yt=d+it+C*rt,Mt=d+it+C*(rt+1),kt=d+(it+1)+C*(rt+1),z=d+(it+1)+C*rt;c.push(yt,Mt,z),c.push(Mt,kt,z),X+=6}a.addGroup(u,X,B),u+=X,d+=V}}}function Qn(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function ne(e){const t={};for(let n=0;n<e.length;n++){const i=Qn(e[n]);for(const r in i)t[r]=i[r]}return t}const ru={clone:Qn,merge:ne};var su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ou=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function le(e){pt.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=su,this.fragmentShader=ou,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}le.prototype=Object.create(pt.prototype);le.prototype.constructor=le;le.prototype.isShaderMaterial=!0;le.prototype.copy=function(e){return pt.prototype.copy.call(this,e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qn(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this};le.prototype.toJSON=function(e){const t=pt.prototype.toJSON.call(this,e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t};function hn(){ft.call(this),this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt}hn.prototype=Object.assign(Object.create(ft.prototype),{constructor:hn,isCamera:!0,copy:function(e,t){return ft.prototype.copy.call(this,e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new S),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()},updateMatrixWorld:function(e){ft.prototype.updateMatrixWorld.call(this,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(e,t){ft.prototype.updateWorldMatrix.call(this,e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return new this.constructor().copy(this)}});function Qt(e=50,t=1,n=.1,i=2e3){hn.call(this),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}Qt.prototype=Object.assign(Object.create(hn.prototype),{constructor:Qt,isPerspectiveCamera:!0,copy:function(e,t){return hn.prototype.copy.call(this,e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this},setFocalLength:function(e){const t=.5*this.getFilmHeight()/e;this.fov=bt.RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()},getFocalLength:function(){const e=Math.tan(bt.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e},getEffectiveFOV:function(){return bt.RAD2DEG*2*Math.atan(Math.tan(bt.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const e=this.near;let t=e*Math.tan(bt.DEG2RAD*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,t-=s.offsetY*n/c,i*=s.width/a,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(e){const t=ft.prototype.toJSON.call(this,e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}});const $n=90,Kn=1;function ti(e,t,n){if(ft.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Qt($n,Kn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new S(1,0,0)),this.add(i);const r=new Qt($n,Kn,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new S(-1,0,0)),this.add(r);const s=new Qt($n,Kn,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new S(0,1,0)),this.add(s);const o=new Qt($n,Kn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new S(0,-1,0)),this.add(o);const a=new Qt($n,Kn,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new S(0,0,1)),this.add(a);const c=new Qt($n,Kn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new S(0,0,-1)),this.add(c),this.update=function(l,f){this.parent===null&&this.updateMatrixWorld();const h=l.xr.enabled,d=l.getRenderTarget();l.xr.enabled=!1;const u=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,l.setRenderTarget(n,0),l.render(f,i),l.setRenderTarget(n,1),l.render(f,r),l.setRenderTarget(n,2),l.render(f,s),l.setRenderTarget(n,3),l.render(f,o),l.setRenderTarget(n,4),l.render(f,a),n.texture.generateMipmaps=u,l.setRenderTarget(n,5),l.render(f,c),l.setRenderTarget(d),l.xr.enabled=h}}ti.prototype=Object.create(ft.prototype);ti.prototype.constructor=ti;function un(e,t,n,i,r,s,o,a,c,l){e=e!==void 0?e:[],t=t!==void 0?t:hs,o=o!==void 0?o:vn,Ut.call(this,e,t,n,i,r,s,o,a,c,l),this.flipY=!1,this._needsFlipEnvMap=!0}un.prototype=Object.create(Ut.prototype);un.prototype.constructor=un;un.prototype.isCubeTexture=!0;Object.defineProperty(un.prototype,"images",{get:function(){return this.image},set:function(e){this.image=e}});function wn(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),we.call(this,e,e,t),t=t||{},this.texture=new un(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture._needsFlipEnvMap=!1}wn.prototype=Object.create(we.prototype);wn.prototype.constructor=wn;wn.prototype.isWebGLCubeRenderTarget=!0;wn.prototype.fromEquirectangularTexture=function(e,t){this.texture.type=t.type,this.texture.format=Me,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
		`},i=new Ta(5,5,5),r=new le({name:"CubemapFromEquirect",uniforms:Qn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:wi});r.uniforms.tEquirect.value=t;const s=new ee(i,r),o=t.minFilter;return t.minFilter===ar&&(t.minFilter=Kt),new ti(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this};wn.prototype.clear=function(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)};function ei(e,t,n,i,r,s,o,a,c,l,f,h){Ut.call(this,null,s,o,a,c,l,i,r,f,h),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=c!==void 0?c:re,this.minFilter=l!==void 0?l:re,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}ei.prototype=Object.create(Ut.prototype);ei.prototype.constructor=ei;ei.prototype.isDataTexture=!0;const ni=new rn,Pr=new S;class Ir{constructor(t,n,i,r,s,o){this.planes=[t!==void 0?t:new je,n!==void 0?n:new je,i!==void 0?i:new je,r!==void 0?r:new je,s!==void 0?s:new je,o!==void 0?o:new je]}set(t,n,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}clone(){return new this.constructor().copy(this)}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const n=this.planes,i=t.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],f=i[6],h=i[7],d=i[8],u=i[9],p=i[10],y=i[11],v=i[12],g=i[13],m=i[14],E=i[15];return n[0].setComponents(a-r,h-c,y-d,E-v).normalize(),n[1].setComponents(a+r,h+c,y+d,E+v).normalize(),n[2].setComponents(a+s,h+l,y+u,E+g).normalize(),n[3].setComponents(a-s,h-l,y-u,E-g).normalize(),n[4].setComponents(a-o,h-f,y-p,E-m).normalize(),n[5].setComponents(a+o,h+f,y+p,E+m).normalize(),this}intersectsObject(t){const n=t.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),ni.copy(n.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSprite(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Pr.x=r.normal.x>0?t.max.x:t.min.x,Pr.y=r.normal.y>0?t.max.y:t.min.y,Pr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}}function Aa(){let e=null,t=!1,n=null,i=null;function r(s,o){n(s,o),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function au(e,t){const n=t.isWebGL2,i=new WeakMap;function r(l,f){const h=l.array,d=l.usage,u=e.createBuffer();e.bindBuffer(f,u),e.bufferData(f,h,d),l.onUploadCallback();let p=5126;return h instanceof Float32Array?p=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?l.isFloat16BufferAttribute?n?p=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):p=5123:h instanceof Int16Array?p=5122:h instanceof Uint32Array?p=5125:h instanceof Int32Array?p=5124:h instanceof Int8Array?p=5120:h instanceof Uint8Array&&(p=5121),{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,f,h){const d=f.array,u=f.updateRange;e.bindBuffer(h,l),u.count===-1?e.bufferSubData(h,0,d):(n?e.bufferSubData(h,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count):e.bufferSubData(h,u.offset*d.BYTES_PER_ELEMENT,d.subarray(u.offset,u.offset+u.count)),u.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f&&(e.deleteBuffer(f.buffer),i.delete(l))}function c(l,f){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h===void 0?i.set(l,r(l,f)):h.version<l.version&&(s(h.buffer,l,f),h.version=l.version)}return{get:o,remove:a,update:c}}class La extends Nt{constructor(t=1,n=1,i=1,r=1){super();this.type="PlaneBufferGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const s=t/2,o=n/2,a=Math.floor(i),c=Math.floor(r),l=a+1,f=c+1,h=t/a,d=n/c,u=[],p=[],y=[],v=[];for(let g=0;g<f;g++){const m=g*d-o;for(let E=0;E<l;E++){const T=E*h-s;p.push(T,-m,0),y.push(0,0,1),v.push(E/a),v.push(1-g/c)}}for(let g=0;g<c;g++)for(let m=0;m<a;m++){const E=m+l*g,T=m+l*(g+1),w=m+1+l*(g+1),x=m+1+l*g;u.push(E,T,x),u.push(T,w,x)}this.setIndex(u),this.setAttribute("position",new Pt(p,3)),this.setAttribute("normal",new Pt(y,3)),this.setAttribute("uv",new Pt(v,2))}}var cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,lu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hu=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,uu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,du="vec3 transformed = vec3( position );",pu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mu=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,gu=`#ifdef USE_BUMPMAP
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
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bu=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,Mu=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,wu=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Su=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Eu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
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
}`,Tu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
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
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,Au=`vec3 transformedNormal = objectNormal;
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
#endif`,Lu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ru=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Du=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Nu=`#ifdef USE_ENVMAP
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
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fu=`#ifdef USE_ENVMAP
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
#endif`,Bu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
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
#endif`,zu=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Hu=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Gu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ku=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Wu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,ju=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qu=`vec3 diffuse = vec3( 1.0 );
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
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Xu=`uniform bool receiveShadow;
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,Yu=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,Zu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ju=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Qu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$u=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Ku=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
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
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,tf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
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
		float roughness = material.specularRoughness;
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
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ef=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
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
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
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
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,rf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,sf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,of=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lf=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,df=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,gf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
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
#endif`,vf=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,xf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,_f=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,bf=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Sf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
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
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pf=`#ifdef USE_SHADOWMAP
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
#endif`,If=`#ifdef USE_SHADOWMAP
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
#endif`,Df=`#ifdef USE_SHADOWMAP
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
#endif`,Nf=`float getShadowMask() {
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
}`,Of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ff=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
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
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uf=`#ifdef USE_SKINNING
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
#endif`,zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kf=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vf=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,Wf=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,jf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,qf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Xf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Yf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Zf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Jf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$f=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,td=`#include <envmap_common_pars_fragment>
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
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
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
}`,id=`#include <common>
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
}`,rd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
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
}`,sd=`#define DISTANCE
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
}`,od=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cd=`uniform vec3 diffuse;
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ld=`uniform float scale;
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
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hd=`uniform vec3 diffuse;
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
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ud=`#include <common>
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
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fd=`uniform vec3 diffuse;
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
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dd=`#define LAMBERT
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
}`,pd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
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
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gd=`#define TOON
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
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
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,vd=`#define PHONG
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xd=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
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
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,_d=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
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
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bd=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
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
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}`,Md=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
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
}`,wd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
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
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}`,Sd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ed=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Td=`uniform vec3 color;
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
}`,Ad=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ld=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Cd=`uniform float rotation;
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
}`;const At={alphamap_fragment:cu,alphamap_pars_fragment:lu,alphatest_fragment:hu,aomap_fragment:uu,aomap_pars_fragment:fu,begin_vertex:du,beginnormal_vertex:pu,bsdfs:mu,bumpmap_pars_fragment:gu,clipping_planes_fragment:yu,clipping_planes_pars_fragment:vu,clipping_planes_pars_vertex:xu,clipping_planes_vertex:_u,color_fragment:bu,color_pars_fragment:Mu,color_pars_vertex:wu,color_vertex:Su,common:Eu,cube_uv_reflection_fragment:Tu,defaultnormal_vertex:Au,displacementmap_pars_vertex:Lu,displacementmap_vertex:Cu,emissivemap_fragment:Ru,emissivemap_pars_fragment:Pu,encodings_fragment:Iu,encodings_pars_fragment:Du,envmap_fragment:Nu,envmap_common_pars_fragment:Ou,envmap_pars_fragment:Fu,envmap_pars_vertex:Bu,envmap_physical_pars_fragment:Yu,envmap_vertex:Uu,fog_vertex:zu,fog_pars_vertex:Hu,fog_fragment:Gu,fog_pars_fragment:ku,gradientmap_pars_fragment:Vu,lightmap_fragment:Wu,lightmap_pars_fragment:ju,lights_lambert_vertex:qu,lights_pars_begin:Xu,lights_toon_fragment:Zu,lights_toon_pars_fragment:Ju,lights_phong_fragment:Qu,lights_phong_pars_fragment:$u,lights_physical_fragment:Ku,lights_physical_pars_fragment:tf,lights_fragment_begin:ef,lights_fragment_maps:nf,lights_fragment_end:rf,logdepthbuf_fragment:sf,logdepthbuf_pars_fragment:of,logdepthbuf_pars_vertex:af,logdepthbuf_vertex:cf,map_fragment:lf,map_pars_fragment:hf,map_particle_fragment:uf,map_particle_pars_fragment:ff,metalnessmap_fragment:df,metalnessmap_pars_fragment:pf,morphnormal_vertex:mf,morphtarget_pars_vertex:gf,morphtarget_vertex:yf,normal_fragment_begin:vf,normal_fragment_maps:xf,normalmap_pars_fragment:_f,clearcoat_normal_fragment_begin:bf,clearcoat_normal_fragment_maps:Mf,clearcoat_pars_fragment:wf,packing:Sf,premultiplied_alpha_fragment:Ef,project_vertex:Tf,dithering_fragment:Af,dithering_pars_fragment:Lf,roughnessmap_fragment:Cf,roughnessmap_pars_fragment:Rf,shadowmap_pars_fragment:Pf,shadowmap_pars_vertex:If,shadowmap_vertex:Df,shadowmask_pars_fragment:Nf,skinbase_vertex:Of,skinning_pars_vertex:Ff,skinning_vertex:Bf,skinnormal_vertex:Uf,specularmap_fragment:zf,specularmap_pars_fragment:Hf,tonemapping_fragment:Gf,tonemapping_pars_fragment:kf,transmissionmap_fragment:Vf,transmissionmap_pars_fragment:Wf,uv_pars_fragment:jf,uv_pars_vertex:qf,uv_vertex:Xf,uv2_pars_fragment:Yf,uv2_pars_vertex:Zf,uv2_vertex:Jf,worldpos_vertex:Qf,background_frag:$f,background_vert:Kf,cube_frag:td,cube_vert:ed,depth_frag:nd,depth_vert:id,distanceRGBA_frag:rd,distanceRGBA_vert:sd,equirect_frag:od,equirect_vert:ad,linedashed_frag:cd,linedashed_vert:ld,meshbasic_frag:hd,meshbasic_vert:ud,meshlambert_frag:fd,meshlambert_vert:dd,meshmatcap_frag:pd,meshmatcap_vert:md,meshtoon_frag:gd,meshtoon_vert:yd,meshphong_frag:vd,meshphong_vert:xd,meshphysical_frag:_d,meshphysical_vert:bd,normal_frag:Md,normal_vert:wd,points_frag:Sd,points_vert:Ed,shadow_frag:Td,shadow_vert:Ad,sprite_frag:Ld,sprite_vert:Cd},J={common:{diffuse:{value:new ct(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new ce},uv2Transform:{value:new ce},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ct(15658734)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new ce}}},Pe={basic:{uniforms:ne([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:ne([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.fog,J.lights,{emissive:{value:new ct(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:ne([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:ne([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:ne([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new ct(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:ne([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:ne([J.points,J.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:ne([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:ne([J.common,J.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:ne([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:At.normal_vert,fragmentShader:At.normal_frag},sprite:{uniforms:ne([J.sprite,J.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null}},vertexShader:At.background_vert,fragmentShader:At.background_frag},cube:{uniforms:ne([J.envmap,{opacity:{value:1}}]),vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:ne([J.common,J.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:ne([J.lights,J.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};Pe.physical={uniforms:ne([Pe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new G(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new ct(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};function Rd(e,t,n,i,r){const s=new ct(0);let o=0,a,c,l=null,f=0,h=null;function d(p,y,v,g){let m=y.isScene===!0?y.background:null;m&&m.isTexture&&(m=t.get(m));const E=e.xr,T=E.getSession&&E.getSession();T&&T.environmentBlendMode==="additive"&&(m=null),m===null?u(s,o):m&&m.isColor&&(u(m,1),g=!0),(e.autoClear||g)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),m&&(m.isCubeTexture||m.isWebGLCubeRenderTarget||m.mapping===fs)?(c===void 0&&(c=new ee(new Ta(1,1,1),new le({name:"BackgroundCubeMaterial",uniforms:Qn(Pe.cube.uniforms),vertexShader:Pe.cube.vertexShader,fragmentShader:Pe.cube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,x,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),m.isWebGLCubeRenderTarget&&(m=m.texture),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m._needsFlipEnvMap?-1:1,(l!==m||f!==m.version||h!==e.toneMapping)&&(c.material.needsUpdate=!0,l=m,f=m.version,h=e.toneMapping),p.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(a===void 0&&(a=new ee(new La(2,2),new le({name:"BackgroundMaterial",uniforms:Qn(Pe.background.uniforms),vertexShader:Pe.background.vertexShader,fragmentShader:Pe.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),a.material.uniforms.uvTransform.value.copy(m.matrix),(l!==m||f!==m.version||h!==e.toneMapping)&&(a.material.needsUpdate=!0,l=m,f=m.version,h=e.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}function u(p,y){n.buffers.color.setClear(p.r,p.g,p.b,y,r)}return{getClearColor:function(){return s},setClearColor:function(p,y=1){s.set(p),o=y,u(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,u(s,o)},render:d}}function Pd(e,t,n,i){const r=e.getParameter(34921),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=y(null);let l=c;function f(D,R,C,O,V){let X=!1;if(o){const K=p(O,C,R);l!==K&&(l=K,d(l.object)),X=v(O,V),X&&g(O,V)}else{const K=R.wireframe===!0;(l.geometry!==O.id||l.program!==C.id||l.wireframe!==K)&&(l.geometry=O.id,l.program=C.id,l.wireframe=K,X=!0)}D.isInstancedMesh===!0&&(X=!0),V!==null&&n.update(V,34963),X&&(A(D,R,C,O),V!==null&&e.bindBuffer(34963,n.get(V).buffer))}function h(){return i.isWebGL2?e.createVertexArray():s.createVertexArrayOES()}function d(D){return i.isWebGL2?e.bindVertexArray(D):s.bindVertexArrayOES(D)}function u(D){return i.isWebGL2?e.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function p(D,R,C){const O=C.wireframe===!0;let V=a[D.id];V===void 0&&(V={},a[D.id]=V);let X=V[R.id];X===void 0&&(X={},V[R.id]=X);let K=X[O];return K===void 0&&(K=y(h()),X[O]=K),K}function y(D){const R=[],C=[],O=[];for(let V=0;V<r;V++)R[V]=0,C[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:C,attributeDivisors:O,object:D,attributes:{},index:null}}function v(D,R){const C=l.attributes,O=D.attributes;let V=0;for(const X in O){const K=C[X],rt=O[X];if(K===void 0||K.attribute!==rt||K.data!==rt.data)return!0;V++}return l.attributesNum!==V||l.index!==R}function g(D,R){const C={},O=D.attributes;let V=0;for(const X in O){const K=O[X],rt={};rt.attribute=K,K.data&&(rt.data=K.data),C[X]=rt,V++}l.attributes=C,l.attributesNum=V,l.index=R}function m(){const D=l.newAttributes;for(let R=0,C=D.length;R<C;R++)D[R]=0}function E(D){T(D,0)}function T(D,R){const C=l.newAttributes,O=l.enabledAttributes,V=l.attributeDivisors;C[D]=1,O[D]===0&&(e.enableVertexAttribArray(D),O[D]=1),V[D]!==R&&((i.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,R),V[D]=R)}function w(){const D=l.newAttributes,R=l.enabledAttributes;for(let C=0,O=R.length;C<O;C++)R[C]!==D[C]&&(e.disableVertexAttribArray(C),R[C]=0)}function x(D,R,C,O,V,X){i.isWebGL2===!0&&(C===5124||C===5125)?e.vertexAttribIPointer(D,R,C,V,X):e.vertexAttribPointer(D,R,C,O,V,X)}function A(D,R,C,O){if(i.isWebGL2===!1&&(D.isInstancedMesh||O.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;m();const V=O.attributes,X=C.getAttributes(),K=R.defaultAttributeValues;for(const rt in X){const it=X[rt];if(it>=0){const yt=V[rt];if(yt!==void 0){const Mt=yt.normalized,kt=yt.itemSize,z=n.get(yt);if(z===void 0)continue;const $t=z.buffer,dt=z.type,Rt=z.bytesPerElement;if(yt.isInterleavedBufferAttribute){const vt=yt.data,It=vt.stride,Tt=yt.offset;vt&&vt.isInstancedInterleavedBuffer?(T(it,vt.meshPerAttribute),O._maxInstanceCount===void 0&&(O._maxInstanceCount=vt.meshPerAttribute*vt.count)):E(it),e.bindBuffer(34962,$t),x(it,kt,dt,Mt,It*Rt,Tt*Rt)}else yt.isInstancedBufferAttribute?(T(it,yt.meshPerAttribute),O._maxInstanceCount===void 0&&(O._maxInstanceCount=yt.meshPerAttribute*yt.count)):E(it),e.bindBuffer(34962,$t),x(it,kt,dt,Mt,0,0)}else if(rt==="instanceMatrix"){const Mt=n.get(D.instanceMatrix);if(Mt===void 0)continue;const kt=Mt.buffer,z=Mt.type;T(it+0,1),T(it+1,1),T(it+2,1),T(it+3,1),e.bindBuffer(34962,kt),e.vertexAttribPointer(it+0,4,z,!1,64,0),e.vertexAttribPointer(it+1,4,z,!1,64,16),e.vertexAttribPointer(it+2,4,z,!1,64,32),e.vertexAttribPointer(it+3,4,z,!1,64,48)}else if(rt==="instanceColor"){const Mt=n.get(D.instanceColor);if(Mt===void 0)continue;const kt=Mt.buffer,z=Mt.type;T(it,1),e.bindBuffer(34962,kt),e.vertexAttribPointer(it,3,z,!1,12,0)}else if(K!==void 0){const Mt=K[rt];if(Mt!==void 0)switch(Mt.length){case 2:e.vertexAttrib2fv(it,Mt);break;case 3:e.vertexAttrib3fv(it,Mt);break;case 4:e.vertexAttrib4fv(it,Mt);break;default:e.vertexAttrib1fv(it,Mt)}}}}w()}function H(){P();for(const D in a){const R=a[D];for(const C in R){const O=R[C];for(const V in O)u(O[V].object),delete O[V];delete R[C]}delete a[D]}}function B(D){if(a[D.id]===void 0)return;const R=a[D.id];for(const C in R){const O=R[C];for(const V in O)u(O[V].object),delete O[V];delete R[C]}delete a[D.id]}function et(D){for(const R in a){const C=a[R];if(C[D.id]===void 0)continue;const O=C[D.id];for(const V in O)u(O[V].object),delete O[V];delete C[D.id]}}function P(){F(),l!==c&&(l=c,d(l.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:P,resetDefaultState:F,dispose:H,releaseStatesOfGeometry:B,releaseStatesOfProgram:et,initAttributes:m,enableAttribute:E,disableUnusedAttributes:w}}function Id(e,t,n,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,f){e.drawArrays(s,l,f),n.update(f,s,1)}function c(l,f,h){if(h===0)return;let d,u;if(r)d=e,u="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),u="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[u](s,l,f,h),n.update(f,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Dd(e,t,n){let i;function r(){if(i!==void 0)return i;const x=t.get("EXT_texture_filter_anisotropic");return x!==null?i=e.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function s(x){if(x==="highp"){if(e.getShaderPrecisionFormat(35633,36338).precision>0&&e.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";x="mediump"}return x==="mediump"&&e.getShaderPrecisionFormat(35633,36337).precision>0&&e.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&e instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&e instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=n.logarithmicDepthBuffer===!0,f=e.getParameter(34930),h=e.getParameter(35660),d=e.getParameter(3379),u=e.getParameter(34076),p=e.getParameter(34921),y=e.getParameter(36347),v=e.getParameter(36348),g=e.getParameter(36349),m=h>0,E=o||!!t.get("OES_texture_float"),T=m&&E,w=o?e.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:u,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:E,floatVertexTextures:T,maxSamples:w}}function Nd(e){const t=this;let n=null,i=0,r=!1,s=!1;const o=new je,a=new ce,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,u){const p=h.length!==0||d||i!==0||r;return r=d,n=f(h,u,0),i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,d,u){const p=h.clippingPlanes,y=h.clipIntersection,v=h.clipShadows,g=e.get(h);if(!r||p===null||p.length===0||s&&!v)s?f(null):l();else{const m=s?0:i,E=m*4;let T=g.clippingState||null;c.value=T,T=f(p,d,E,u);for(let w=0;w!==E;++w)T[w]=n[w];g.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(h,d,u,p){const y=h!==null?h.length:0;let v=null;if(y!==0){if(v=c.value,p!==!0||v===null){const g=u+y*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<g)&&(v=new Float32Array(g));for(let E=0,T=u;E!==y;++E,T+=4)o.copy(h[E]).applyMatrix4(m,a),o.normal.toArray(v,T),v[T+3]=o.constant}c.value=v,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,v}}function Od(e){let t=new WeakMap;function n(o,a){return a===Yo?o.mapping=hs:a===Zo&&(o.mapping=us),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yo||a===Zo)if(t.has(o)){const c=t.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=e.getRenderList(),f=e.getRenderTarget(),h=new wn(c.height/2);return h.fromEquirectangularTexture(e,o),t.set(o,h),e.setRenderTarget(f),e.setRenderList(l),o.addEventListener("dispose",r),n(h.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}function Fd(e){const t={};return{has:function(n){if(t[n]!==void 0)return t[n]!==null;let i;switch(n){case"WEBGL_depth_texture":i=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=e.getExtension(n)}return t[n]=i,i!==null},get:function(n){return this.has(n)||console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),t[n]}}}function Bd(e,t,n,i){const r=new WeakMap,s=new WeakMap;function o(h){const d=h.target,u=r.get(d);u.index!==null&&t.remove(u.index);for(const y in u.attributes)t.remove(u.attributes[y]);d.removeEventListener("dispose",o),r.delete(d);const p=s.get(u);p&&(t.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){let u=r.get(d);return u||(d.addEventListener("dispose",o),d.isBufferGeometry?u=d:d.isGeometry&&(d._bufferGeometry===void 0&&(d._bufferGeometry=new Nt().setFromObject(h)),u=d._bufferGeometry),r.set(d,u),n.memory.geometries++,u)}function c(h){const d=h.attributes;for(const p in d)t.update(d[p],34962);const u=h.morphAttributes;for(const p in u){const y=u[p];for(let v=0,g=y.length;v<g;v++)t.update(y[v],34962)}}function l(h){const d=[],u=h.index,p=h.attributes.position;let y=0;if(u!==null){const m=u.array;y=u.version;for(let E=0,T=m.length;E<T;E+=3){const w=m[E+0],x=m[E+1],A=m[E+2];d.push(w,x,x,A,A,w)}}else{const m=p.array;y=p.version;for(let E=0,T=m.length/3-1;E<T;E+=3){const w=E+0,x=E+1,A=E+2;d.push(w,x,x,A,A,w)}}const v=new(wa(d)>65535?Fi:Oi)(d,1);v.version=y;const g=s.get(h);g&&t.remove(g),s.set(h,v)}function f(h){const d=s.get(h);if(d){const u=h.index;u!==null&&d.version<u.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:f}}function Ud(e,t,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function f(d,u){e.drawElements(s,u,a,d*c),n.update(u,s,1)}function h(d,u,p){if(p===0)return;let y,v;if(r)y=e,v="drawElementsInstanced";else if(y=t.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[v](s,u,a,d*c,p),n.update(u,s,p)}this.setMode=o,this.setIndex=l,this.render=f,this.renderInstances=h}function zd(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Hd(e,t){return e[0]-t[0]}function Gd(e,t){return Math.abs(t[1])-Math.abs(e[1])}function kd(e){const t={},n=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){const l=s.morphTargetInfluences,f=l===void 0?0:l.length;let h=t[o.id];if(h===void 0){h=[];for(let v=0;v<f;v++)h[v]=[v,0];t[o.id]=h}for(let v=0;v<f;v++){const g=h[v];g[0]=v,g[1]=l[v]}h.sort(Gd);for(let v=0;v<8;v++)v<f&&h[v][1]?(i[v][0]=h[v][0],i[v][1]=h[v][1]):(i[v][0]=Number.MAX_SAFE_INTEGER,i[v][1]=0);i.sort(Hd);const d=a.morphTargets&&o.morphAttributes.position,u=a.morphNormals&&o.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const g=i[v],m=g[0],E=g[1];m!==Number.MAX_SAFE_INTEGER&&E?(d&&o.getAttribute("morphTarget"+v)!==d[m]&&o.setAttribute("morphTarget"+v,d[m]),u&&o.getAttribute("morphNormal"+v)!==u[m]&&o.setAttribute("morphNormal"+v,u[m]),n[v]=E,p+=E):(d&&o.hasAttribute("morphTarget"+v)===!0&&o.deleteAttribute("morphTarget"+v),u&&o.hasAttribute("morphNormal"+v)===!0&&o.deleteAttribute("morphNormal"+v),n[v]=0)}const y=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(e,"morphTargetBaseInfluence",y),c.getUniforms().setValue(e,"morphTargetInfluences",n)}return{update:r}}function Vd(e,t,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,f=c.geometry,h=t.get(c,f);return r.get(h)!==l&&(f.isGeometry&&h.updateFromObject(c),t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),n.update(c.instanceMatrix,34962),c.instanceColor!==null&&n.update(c.instanceColor,34962)),h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:o}}function zi(e=null,t=1,n=1,i=1){Ut.call(this,null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=re,this.minFilter=re,this.wrapR=he,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}zi.prototype=Object.create(Ut.prototype);zi.prototype.constructor=zi;zi.prototype.isDataTexture2DArray=!0;function Hi(e=null,t=1,n=1,i=1){Ut.call(this,null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=re,this.minFilter=re,this.wrapR=he,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Hi.prototype=Object.create(Ut.prototype);Hi.prototype.constructor=Hi;Hi.prototype.isDataTexture3D=!0;const Ca=new Ut,Wd=new zi,jd=new Hi,Ra=new un,Pa=[],Ia=[],Da=new Float32Array(16),Na=new Float32Array(9),Oa=new Float32Array(4);function ii(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let s=Pa[r];if(s===void 0&&(s=new Float32Array(r),Pa[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(s,a)}return s}function ge(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function pe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Fa(e,t){let n=Ia[t];n===void 0&&(n=new Int32Array(t),Ia[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function qd(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Xd(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ge(n,t))return;e.uniform2fv(this.addr,t),pe(n,t)}}function Yd(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ge(n,t))return;e.uniform3fv(this.addr,t),pe(n,t)}}function Zd(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ge(n,t))return;e.uniform4fv(this.addr,t),pe(n,t)}}function Jd(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ge(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),pe(n,t)}else{if(ge(n,i))return;Oa.set(i),e.uniformMatrix2fv(this.addr,!1,Oa),pe(n,i)}}function Qd(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ge(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),pe(n,t)}else{if(ge(n,i))return;Na.set(i),e.uniformMatrix3fv(this.addr,!1,Na),pe(n,i)}}function $d(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ge(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),pe(n,t)}else{if(ge(n,i))return;Da.set(i),e.uniformMatrix4fv(this.addr,!1,Da),pe(n,i)}}function Kd(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(t||Ca,r)}function tp(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||Wd,r)}function ep(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||jd,r)}function np(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(t||Ra,r)}function ip(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function rp(e,t){const n=this.cache;ge(n,t)||(e.uniform2iv(this.addr,t),pe(n,t))}function sp(e,t){const n=this.cache;ge(n,t)||(e.uniform3iv(this.addr,t),pe(n,t))}function op(e,t){const n=this.cache;ge(n,t)||(e.uniform4iv(this.addr,t),pe(n,t))}function ap(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function cp(e){switch(e){case 5126:return qd;case 35664:return Xd;case 35665:return Yd;case 35666:return Zd;case 35674:return Jd;case 35675:return Qd;case 35676:return $d;case 5124:case 35670:return ip;case 35667:case 35671:return rp;case 35668:case 35672:return sp;case 35669:case 35673:return op;case 5125:return ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Kd;case 35679:case 36299:case 36307:return ep;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return tp}}function lp(e,t){e.uniform1fv(this.addr,t)}function hp(e,t){e.uniform1iv(this.addr,t)}function up(e,t){e.uniform2iv(this.addr,t)}function fp(e,t){e.uniform3iv(this.addr,t)}function dp(e,t){e.uniform4iv(this.addr,t)}function pp(e,t){const n=ii(t,this.size,2);e.uniform2fv(this.addr,n)}function mp(e,t){const n=ii(t,this.size,3);e.uniform3fv(this.addr,n)}function gp(e,t){const n=ii(t,this.size,4);e.uniform4fv(this.addr,n)}function yp(e,t){const n=ii(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function vp(e,t){const n=ii(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function xp(e,t){const n=ii(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function _p(e,t,n){const i=t.length,r=Fa(n,i);e.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTexture2D(t[s]||Ca,r[s])}function bp(e,t,n){const i=t.length,r=Fa(n,i);e.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTextureCube(t[s]||Ra,r[s])}function Mp(e){switch(e){case 5126:return lp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return yp;case 35675:return vp;case 35676:return xp;case 5124:case 35670:return hp;case 35667:case 35671:return up;case 35668:case 35672:return fp;case 35669:case 35673:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35680:case 36300:case 36308:case 36293:return bp}}function wp(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=cp(t.type)}function Ba(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Mp(t.type)}Ba.prototype.updateCache=function(e){const t=this.cache;e instanceof Float32Array&&t.length!==e.length&&(this.cache=new Float32Array(e.length)),pe(t,e)};function Ua(e){this.id=e,this.seq=[],this.map={}}Ua.prototype.setValue=function(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}};const Xs=/(\w+)(\])?(\[|\.)?/g;function za(e,t){e.seq.push(t),e.map[t.id]=t}function Sp(e,t,n){const i=e.name,r=i.length;for(Xs.lastIndex=0;;){const s=Xs.exec(i),o=Xs.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){za(n,l===void 0?new wp(a,e,t):new Ba(a,e,t));break}else{let h=n.map[a];h===void 0&&(h=new Ua(a),za(n,h)),n=h}}}function fn(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);Sp(r,s,this)}}fn.prototype.setValue=function(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)};fn.prototype.setOptional=function(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)};fn.upload=function(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],a=n[o.id];a.needsUpdate!==!1&&o.setValue(e,a.value,i)}};fn.seqWithValue=function(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n};function Ha(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}let Ep=0;function Tp(e){const t=e.split(`
`);for(let n=0;n<t.length;n++)t[n]=n+1+": "+t[n];return t.join(`
`)}function Ga(e){switch(e){case Li:return["Linear","( value )"];case la:return["sRGB","( value )"];case Oh:return["RGBE","( value )"];case Bh:return["RGBM","( value, 7.0 )"];case Uh:return["RGBM","( value, 16.0 )"];case zh:return["RGBD","( value, 256.0 )"];case Nh:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Fh:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}function ka(e,t,n){const i=e.getShaderParameter(t,35713),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=e.getShaderSource(t);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+Tp(s)}function Gi(e,t){const n=Ga(t);return"vec4 "+e+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function Ap(e,t){const n=Ga(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Lp(e,t){let n;switch(t){case Dl:n="Linear";break;case Nl:n="Reinhard";break;case Ol:n="OptimizedCineon";break;case Fl:n="ACESFilmic";break;case Bl:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Cp(e){return[e.extensionDerivatives||e.envMapCubeUV||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ki).join(`
`)}function Rp(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function Pp(e,t){const n={},i=e.getProgramParameter(t,35721);for(let r=0;r<i;r++){const o=e.getActiveAttrib(t,r).name;n[o]=e.getAttribLocation(t,o)}return n}function ki(e){return e!==""}function Va(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wa(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ip=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ys(e){return e.replace(Ip,Dp)}function Dp(e,t){const n=At[t];if(n===void 0)throw new Error("Can not resolve #include <"+t+">");return Ys(n)}const Np=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Op=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ja(e){return e.replace(Op,qa).replace(Np,Fp)}function Fp(e,t,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),qa(e,t,n,i)}function qa(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xa(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Bp(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Uo?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===ul?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function Up(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case hs:case us:t="ENVMAP_TYPE_CUBE";break;case fs:case ds:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zp(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case us:case ds:t="ENVMAP_MODE_REFRACTION";break}return t}function Hp(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case or:t="ENVMAP_BLENDING_MULTIPLY";break;case Pl:t="ENVMAP_BLENDING_MIX";break;case Il:t="ENVMAP_BLENDING_ADD";break}return t}function Gp(e,t,n,i){const r=e.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=Bp(n),l=Up(n),f=zp(n),h=Hp(n),d=e.gammaFactor>0?e.gammaFactor:1,u=n.isWebGL2?"":Cp(n),p=Rp(s),y=r.createProgram();let v,g,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=[p].filter(ki).join(`
`),v.length>0&&(v+=`
`),g=[u,p].filter(ki).join(`
`),g.length>0&&(g+=`
`)):(v=[Xa(n),"#define SHADER_NAME "+n.shaderName,p,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ki).join(`
`),g=[u,Xa(n),"#define SHADER_NAME "+n.shaderName,p,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ei?"#define TONE_MAPPING":"",n.toneMapping!==Ei?At.tonemapping_pars_fragment:"",n.toneMapping!==Ei?Lp("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",At.encodings_pars_fragment,n.map?Gi("mapTexelToLinear",n.mapEncoding):"",n.matcap?Gi("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?Gi("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?Gi("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?Gi("lightMapTexelToLinear",n.lightMapEncoding):"",Ap("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ki).join(`
`)),o=Ys(o),o=Va(o,n),o=Wa(o,n),a=Ys(a),a=Va(a,n),a=Wa(a,n),o=ja(o),a=ja(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",n.glslVersion===ha?"":"out highp vec4 pc_fragColor;",n.glslVersion===ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=m+v+o,T=m+g+a,w=Ha(r,35633,E),x=Ha(r,35632,T);if(r.attachShader(y,w),r.attachShader(y,x),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),e.debug.checkShaderErrors){const B=r.getProgramInfoLog(y).trim(),et=r.getShaderInfoLog(w).trim(),P=r.getShaderInfoLog(x).trim();let F=!0,D=!0;if(r.getProgramParameter(y,35714)===!1){F=!1;const R=ka(r,w,"vertex"),C=ka(r,x,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(y,35715),"gl.getProgramInfoLog",B,R,C)}else B!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",B):(et===""||P==="")&&(D=!1);D&&(this.diagnostics={runnable:F,programLog:B,vertexShader:{log:et,prefix:v},fragmentShader:{log:P,prefix:g}})}r.deleteShader(w),r.deleteShader(x);let A;this.getUniforms=function(){return A===void 0&&(A=new fn(r,y)),A};let H;return this.getAttributes=function(){return H===void 0&&(H=Pp(r,y)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=Ep++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=x,this}function kp(e,t,n,i,r,s){const o=[],a=i.isWebGL2,c=i.logarithmicDepthBuffer,l=i.floatVertexTextures,f=i.maxVertexUniforms,h=i.vertexTextures;let d=i.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},p=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function y(x){const H=x.skeleton.bones;if(l)return 1024;{const et=Math.floor((f-20)/4),P=Math.min(et,H.length);return P<H.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+H.length+" bones. This GPU supports "+P+"."),0):P}}function v(x){let A;return x&&x.isTexture?A=x.encoding:x&&x.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),A=x.texture.encoding):A=Li,A}function g(x,A,H,B,et){const P=B.fog,F=x.isMeshStandardMaterial?B.environment:null,D=t.get(x.envMap||F),R=u[x.type],C=et.isSkinnedMesh?y(et):0;x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let O,V;if(R){const rt=Pe[R];O=rt.vertexShader,V=rt.fragmentShader}else O=x.vertexShader,V=x.fragmentShader;const X=e.getRenderTarget();return{isWebGL2:a,shaderID:R,shaderName:x.type,vertexShader:O,fragmentShader:V,defines:x.defines,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:et.isInstancedMesh===!0,instancingColor:et.isInstancedMesh===!0&&et.instanceColor!==null,supportsVertexTextures:h,outputEncoding:X!==null?v(X.texture):e.outputEncoding,map:!!x.map,mapEncoding:v(x.map),matcap:!!x.matcap,matcapEncoding:v(x.matcap),envMap:!!D,envMapMode:D&&D.mapping,envMapEncoding:v(D),envMapCubeUV:!!D&&(D.mapping===fs||D.mapping===ds),lightMap:!!x.lightMap,lightMapEncoding:v(x.lightMap),aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,emissiveMapEncoding:v(x.emissiveMap),bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===kh,tangentSpaceNormalMap:x.normalMapType===Bn,clearcoatMap:!!x.clearcoatMap,clearcoatRoughnessMap:!!x.clearcoatRoughnessMap,clearcoatNormalMap:!!x.clearcoatNormalMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,alphaMap:!!x.alphaMap,gradientMap:!!x.gradientMap,sheen:!!x.sheen,transmissionMap:!!x.transmissionMap,combine:x.combine,vertexTangents:x.normalMap&&x.vertexTangents,vertexColors:x.vertexColors,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.displacementMap||!!x.transmissionMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.transmissionMap)&&!!x.displacementMap,fog:!!P,useFog:x.fog,fogExp2:P&&P.isFogExp2,flatShading:x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:c,skinning:x.skinning&&C>0,maxBones:C,useVertexTexture:l,morphTargets:x.morphTargets,morphNormals:x.morphNormals,maxMorphTargets:e.maxMorphTargets,maxMorphNormals:e.maxMorphNormals,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&H.length>0,shadowMapType:e.shadowMap.type,toneMapping:x.toneMapped?e.toneMapping:Ei,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,alphaTest:x.alphaTest,doubleSided:x.side===sr,flipSided:x.side===Zt,depthPacking:x.depthPacking!==void 0?x.depthPacking:!1,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.fragmentShader),A.push(x.vertexShader)),x.defines!==void 0)for(const H in x.defines)A.push(H),A.push(x.defines[H]);if(x.isRawShaderMaterial===!1){for(let H=0;H<p.length;H++)A.push(x[p[H]]);A.push(e.outputEncoding),A.push(e.gammaFactor)}return A.push(x.customProgramCacheKey),A.join()}function E(x){const A=u[x.type];let H;if(A){const B=Pe[A];H=ru.clone(B.uniforms)}else H=x.uniforms;return H}function T(x,A){let H;for(let B=0,et=o.length;B<et;B++){const P=o[B];if(P.cacheKey===A){H=P,++H.usedTimes;break}}return H===void 0&&(H=new Gp(e,A,x,r),o.push(H)),H}function w(x){if(--x.usedTimes==0){const A=o.indexOf(x);o[A]=o[o.length-1],o.pop(),x.destroy()}}return{getParameters:g,getProgramCacheKey:m,getUniforms:E,acquireProgram:T,releaseProgram:w,programs:o}}function Vp(){let e=new WeakMap;function t(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function n(s){e.delete(s)}function i(s,o,a){e.get(s)[o]=a}function r(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:r}}function Wp(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program!==t.program?e.program.id-t.program.id:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function jp(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Ya(e){const t=[];let n=0;const i=[],r=[],s={id:-1};function o(){n=0,i.length=0,r.length=0}function a(d,u,p,y,v,g){let m=t[n];const E=e.get(p);return m===void 0?(m={id:d.id,object:d,geometry:u,material:p,program:E.program||s,groupOrder:y,renderOrder:d.renderOrder,z:v,group:g},t[n]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=p,m.program=E.program||s,m.groupOrder=y,m.renderOrder=d.renderOrder,m.z=v,m.group=g),n++,m}function c(d,u,p,y,v,g){const m=a(d,u,p,y,v,g);(p.transparent===!0?r:i).push(m)}function l(d,u,p,y,v,g){const m=a(d,u,p,y,v,g);(p.transparent===!0?r:i).unshift(m)}function f(d,u){i.length>1&&i.sort(d||Wp),r.length>1&&r.sort(u||jp)}function h(){for(let d=n,u=t.length;d<u;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.program=null,p.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:h,sort:f}}function qp(e){let t=new WeakMap;function n(r,s){const o=t.get(r);let a;return o===void 0?(a=new Ya(e),t.set(r,new WeakMap),t.get(r).set(s,a)):(a=o.get(s),a===void 0&&(a=new Ya(e),o.set(s,a))),a}function i(){t=new WeakMap}return{get:n,dispose:i}}function Xp(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new S,color:new ct};break;case"SpotLight":n={position:new S,direction:new S,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new S,color:new ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new S,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":n={color:new ct,position:new S,halfWidth:new S,halfHeight:new S};break}return e[t.id]=n,n}}}function Yp(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let Zp=0;function Jp(e,t){return(t.castShadow?1:0)-(e.castShadow?1:0)}function Qp(e,t){const n=new Xp,i=Yp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let f=0;f<9;f++)r.probe.push(new S);const s=new S,o=new wt,a=new wt;function c(f){let h=0,d=0,u=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let p=0,y=0,v=0,g=0,m=0,E=0,T=0,w=0;f.sort(Jp);for(let A=0,H=f.length;A<H;A++){const B=f[A],et=B.color,P=B.intensity,F=B.distance,D=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=et.r*P,d+=et.g*P,u+=et.b*P;else if(B.isLightProbe)for(let R=0;R<9;R++)r.probe[R].addScaledVector(B.sh.coefficients[R],P);else if(B.isDirectionalLight){const R=n.get(B);if(R.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const C=B.shadow,O=i.get(B);O.shadowBias=C.bias,O.shadowNormalBias=C.normalBias,O.shadowRadius=C.radius,O.shadowMapSize=C.mapSize,r.directionalShadow[p]=O,r.directionalShadowMap[p]=D,r.directionalShadowMatrix[p]=B.shadow.matrix,E++}r.directional[p]=R,p++}else if(B.isSpotLight){const R=n.get(B);if(R.position.setFromMatrixPosition(B.matrixWorld),R.color.copy(et).multiplyScalar(P),R.distance=F,R.coneCos=Math.cos(B.angle),R.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),R.decay=B.decay,B.castShadow){const C=B.shadow,O=i.get(B);O.shadowBias=C.bias,O.shadowNormalBias=C.normalBias,O.shadowRadius=C.radius,O.shadowMapSize=C.mapSize,r.spotShadow[v]=O,r.spotShadowMap[v]=D,r.spotShadowMatrix[v]=B.shadow.matrix,w++}r.spot[v]=R,v++}else if(B.isRectAreaLight){const R=n.get(B);R.color.copy(et).multiplyScalar(P),R.halfWidth.set(B.width*.5,0,0),R.halfHeight.set(0,B.height*.5,0),r.rectArea[g]=R,g++}else if(B.isPointLight){const R=n.get(B);if(R.color.copy(B.color).multiplyScalar(B.intensity),R.distance=B.distance,R.decay=B.decay,B.castShadow){const C=B.shadow,O=i.get(B);O.shadowBias=C.bias,O.shadowNormalBias=C.normalBias,O.shadowRadius=C.radius,O.shadowMapSize=C.mapSize,O.shadowCameraNear=C.camera.near,O.shadowCameraFar=C.camera.far,r.pointShadow[y]=O,r.pointShadowMap[y]=D,r.pointShadowMatrix[y]=B.shadow.matrix,T++}r.point[y]=R,y++}else if(B.isHemisphereLight){const R=n.get(B);R.skyColor.copy(B.color).multiplyScalar(P),R.groundColor.copy(B.groundColor).multiplyScalar(P),r.hemi[m]=R,m++}}g>0&&(t.isWebGL2||e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=u;const x=r.hash;(x.directionalLength!==p||x.pointLength!==y||x.spotLength!==v||x.rectAreaLength!==g||x.hemiLength!==m||x.numDirectionalShadows!==E||x.numPointShadows!==T||x.numSpotShadows!==w)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=g,r.point.length=y,r.hemi.length=m,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=T,r.spotShadowMatrix.length=w,x.directionalLength=p,x.pointLength=y,x.spotLength=v,x.rectAreaLength=g,x.hemiLength=m,x.numDirectionalShadows=E,x.numPointShadows=T,x.numSpotShadows=w,r.version=Zp++)}function l(f,h){let d=0,u=0,p=0,y=0,v=0;const g=h.matrixWorldInverse;for(let m=0,E=f.length;m<E;m++){const T=f[m];if(T.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),d++}else if(T.isSpotLight){const w=r.spot[p];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),p++}else if(T.isRectAreaLight){const w=r.rectArea[y];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(g),a.identity(),o.copy(T.matrixWorld),o.premultiply(g),a.extractRotation(o),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(T.isPointLight){const w=r.point[u];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(g),u++}else if(T.isHemisphereLight){const w=r.hemi[v];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(g),w.direction.normalize(),v++}}}return{setup:c,setupView:l,state:r}}function Za(e,t){const n=new Qp(e,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function c(){n.setup(i)}function l(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function $p(e,t){let n=new WeakMap;function i(s,o=0){let a;return n.has(s)===!1?(a=new Za(e,t),n.set(s,[]),n.get(s).push(a)):o>=n.get(s).length?(a=new Za(e,t),n.get(s).push(a)):a=n.get(s)[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}function Sn(e){pt.call(this),this.type="MeshDepthMaterial",this.depthPacking=Hh,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}Sn.prototype=Object.create(pt.prototype);Sn.prototype.constructor=Sn;Sn.prototype.isMeshDepthMaterial=!0;Sn.prototype.copy=function(e){return pt.prototype.copy.call(this,e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this};function En(e){pt.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new S,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}En.prototype=Object.create(pt.prototype);En.prototype.constructor=En;En.prototype.isMeshDistanceMaterial=!0;En.prototype.copy=function(e){return pt.prototype.copy.call(this,e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this};var Kp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Ja(e,t,n){let i=new Ir;const r=new G,s=new G,o=new Dt,a=[],c=[],l={},f={0:Zt,1:rr,2:sr},h=new le({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:tm,fragmentShader:Kp}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const u=new Nt;u.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new ee(u,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo,this.render=function(w,x,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||w.length===0)return;const H=e.getRenderTarget(),B=e.getActiveCubeFace(),et=e.getActiveMipmapLevel(),P=e.state;P.setBlending(wi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let F=0,D=w.length;F<D;F++){const R=w[F],C=R.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);const O=C.getFrameExtents();if(r.multiply(O),s.copy(C.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(s.x=Math.floor(n/O.x),r.x=s.x*O.x,C.mapSize.x=s.x),r.y>n&&(s.y=Math.floor(n/O.y),r.y=s.y*O.y,C.mapSize.y=s.y)),C.map===null&&!C.isPointLightShadow&&this.type===Mi){const X={minFilter:Kt,magFilter:Kt,format:Me};C.map=new we(r.x,r.y,X),C.map.texture.name=R.name+".shadowMap",C.mapPass=new we(r.x,r.y,X),C.camera.updateProjectionMatrix()}if(C.map===null){const X={minFilter:re,magFilter:re,format:Me};C.map=new we(r.x,r.y,X),C.map.texture.name=R.name+".shadowMap",C.camera.updateProjectionMatrix()}e.setRenderTarget(C.map),e.clear();const V=C.getViewportCount();for(let X=0;X<V;X++){const K=C.getViewport(X);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),P.viewport(o),C.updateMatrices(R,X),i=C.getFrustum(),T(x,A,C.camera,R,this.type)}!C.isPointLightShadow&&this.type===Mi&&v(C,A),C.needsUpdate=!1}y.needsUpdate=!1,e.setRenderTarget(H,B,et)};function v(w,x){const A=t.update(p);h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(x,null,A,h,p,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(x,null,A,d,p,null)}function g(w,x,A){const H=w<<0|x<<1|A<<2;let B=a[H];return B===void 0&&(B=new Sn({depthPacking:Gh,morphTargets:w,skinning:x}),a[H]=B),B}function m(w,x,A){const H=w<<0|x<<1|A<<2;let B=c[H];return B===void 0&&(B=new En({morphTargets:w,skinning:x}),c[H]=B),B}function E(w,x,A,H,B,et,P){let F=null,D=g,R=w.customDepthMaterial;if(H.isPointLight===!0&&(D=m,R=w.customDistanceMaterial),R===void 0){let C=!1;A.morphTargets===!0&&(C=x.morphAttributes&&x.morphAttributes.position&&x.morphAttributes.position.length>0);let O=!1;w.isSkinnedMesh===!0&&(A.skinning===!0?O=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",w));const V=w.isInstancedMesh===!0;F=D(C,O,V)}else F=R;if(e.localClippingEnabled&&A.clipShadows===!0&&A.clippingPlanes.length!==0){const C=F.uuid,O=A.uuid;let V=l[C];V===void 0&&(V={},l[C]=V);let X=V[O];X===void 0&&(X=F.clone(),V[O]=X),F=X}return F.visible=A.visible,F.wireframe=A.wireframe,P===Mi?F.side=A.shadowSide!==null?A.shadowSide:A.side:F.side=A.shadowSide!==null?A.shadowSide:f[A.side],F.clipShadows=A.clipShadows,F.clippingPlanes=A.clippingPlanes,F.clipIntersection=A.clipIntersection,F.wireframeLinewidth=A.wireframeLinewidth,F.linewidth=A.linewidth,H.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(H.matrixWorld),F.nearDistance=B,F.farDistance=et),F}function T(w,x,A,H,B){if(w.visible===!1)return;if(w.layers.test(x.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&B===Mi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const F=t.update(w),D=w.material;if(Array.isArray(D)){const R=F.groups;for(let C=0,O=R.length;C<O;C++){const V=R[C],X=D[V.materialIndex];if(X&&X.visible){const K=E(w,F,X,H,A.near,A.far,B);e.renderBufferDirect(A,null,F,K,w,V)}}}else if(D.visible){const R=E(w,F,D,H,A.near,A.far,B);e.renderBufferDirect(A,null,F,R,w,null)}}const P=w.children;for(let F=0,D=P.length;F<D;F++)T(P[F],x,A,H,B)}}function em(e,t,n){const i=n.isWebGL2;function r(){let L=!1;const q=new Dt;let tt=null;const at=new Dt(0,0,0,0);return{setMask:function(Z){tt!==Z&&!L&&(e.colorMask(Z,Z,Z,Z),tt=Z)},setLocked:function(Z){L=Z},setClear:function(Z,ot,ut,xt,st){st===!0&&(Z*=xt,ot*=xt,ut*=xt),q.set(Z,ot,ut,xt),at.equals(q)===!1&&(e.clearColor(Z,ot,ut,xt),at.copy(q))},reset:function(){L=!1,tt=null,at.set(-1,0,0,0)}}}function s(){let L=!1,q=null,tt=null,at=null;return{setTest:function(Z){Z?rt(2929):it(2929)},setMask:function(Z){q!==Z&&!L&&(e.depthMask(Z),q=Z)},setFunc:function(Z){if(tt!==Z){if(Z)switch(Z){case Sl:e.depthFunc(512);break;case El:e.depthFunc(519);break;case Tl:e.depthFunc(513);break;case ls:e.depthFunc(515);break;case Al:e.depthFunc(514);break;case Ll:e.depthFunc(518);break;case Cl:e.depthFunc(516);break;case Rl:e.depthFunc(517);break;default:e.depthFunc(515)}else e.depthFunc(515);tt=Z}},setLocked:function(Z){L=Z},setClear:function(Z){at!==Z&&(e.clearDepth(Z),at=Z)},reset:function(){L=!1,q=null,tt=null,at=null}}}function o(){let L=!1,q=null,tt=null,at=null,Z=null,ot=null,ut=null,xt=null,st=null;return{setTest:function(mt){L||(mt?rt(2960):it(2960))},setMask:function(mt){q!==mt&&!L&&(e.stencilMask(mt),q=mt)},setFunc:function(mt,Vt,oe){(tt!==mt||at!==Vt||Z!==oe)&&(e.stencilFunc(mt,Vt,oe),tt=mt,at=Vt,Z=oe)},setOp:function(mt,Vt,oe){(ot!==mt||ut!==Vt||xt!==oe)&&(e.stencilOp(mt,Vt,oe),ot=mt,ut=Vt,xt=oe)},setLocked:function(mt){L=mt},setClear:function(mt){st!==mt&&(e.clearStencil(mt),st=mt)},reset:function(){L=!1,q=null,tt=null,at=null,Z=null,ot=null,ut=null,xt=null,st=null}}}const a=new r,c=new s,l=new o;let f={},h=null,d=null,u=null,p=null,y=null,v=null,g=null,m=null,E=null,T=!1,w=null,x=null,A=null,H=null,B=null;const et=e.getParameter(35661);let P=!1,F=0;const D=e.getParameter(7938);D.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(D)[1]),P=F>=1):D.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),P=F>=2);let R=null,C={};const O=new Dt,V=new Dt;function X(L,q,tt){const at=new Uint8Array(4),Z=e.createTexture();e.bindTexture(L,Z),e.texParameteri(L,10241,9728),e.texParameteri(L,10240,9728);for(let ot=0;ot<tt;ot++)e.texImage2D(q+ot,0,6408,1,1,0,6408,5121,at);return Z}const K={};K[3553]=X(3553,3553,1),K[34067]=X(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),rt(2929),c.setFunc(ls),dt(!1),Rt(Bo),rt(2884),z(wi);function rt(L){f[L]!==!0&&(e.enable(L),f[L]=!0)}function it(L){f[L]!==!1&&(e.disable(L),f[L]=!1)}function yt(L){return h!==L?(e.useProgram(L),h=L,!0):!1}const Mt={[Dn]:32774,[dl]:32778,[pl]:32779};if(i)Mt[Vo]=32775,Mt[Wo]=32776;else{const L=t.get("EXT_blend_minmax");L!==null&&(Mt[Vo]=L.MIN_EXT,Mt[Wo]=L.MAX_EXT)}const kt={[ml]:0,[gl]:1,[yl]:768,[jo]:770,[wl]:776,[bl]:774,[xl]:772,[vl]:769,[qo]:771,[Ml]:775,[_l]:773};function z(L,q,tt,at,Z,ot,ut,xt){if(L===wi){d&&(it(3042),d=!1);return}if(d||(rt(3042),d=!0),L!==fl){if(L!==u||xt!==T){if((p!==Dn||g!==Dn)&&(e.blendEquation(32774),p=Dn,g=Dn),xt)switch(L){case Si:e.blendFuncSeparate(1,771,1,771);break;case Ho:e.blendFunc(1,1);break;case Go:e.blendFuncSeparate(0,0,769,771);break;case ko:e.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Si:e.blendFuncSeparate(770,771,1,771);break;case Ho:e.blendFunc(770,1);break;case Go:e.blendFunc(0,769);break;case ko:e.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,v=null,m=null,E=null,u=L,T=xt}return}Z=Z||q,ot=ot||tt,ut=ut||at,(q!==p||Z!==g)&&(e.blendEquationSeparate(Mt[q],Mt[Z]),p=q,g=Z),(tt!==y||at!==v||ot!==m||ut!==E)&&(e.blendFuncSeparate(kt[tt],kt[at],kt[ot],kt[ut]),y=tt,v=at,m=ot,E=ut),u=L,T=null}function $t(L,q){L.side===sr?it(2884):rt(2884);let tt=L.side===Zt;q&&(tt=!tt),dt(tt),L.blending===Si&&L.transparent===!1?z(wi):z(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const at=L.stencilWrite;l.setTest(at),at&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),It(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits)}function dt(L){w!==L&&(L?e.frontFace(2304):e.frontFace(2305),w=L)}function Rt(L){L!==ll?(rt(2884),L!==x&&(L===Bo?e.cullFace(1029):L===hl?e.cullFace(1028):e.cullFace(1032))):it(2884),x=L}function vt(L){L!==A&&(P&&e.lineWidth(L),A=L)}function It(L,q,tt){L?(rt(32823),(H!==q||B!==tt)&&(e.polygonOffset(q,tt),H=q,B=tt)):it(32823)}function Tt(L){L?rt(3089):it(3089)}function W(L){L===void 0&&(L=33984+et-1),R!==L&&(e.activeTexture(L),R=L)}function Y(L,q){R===null&&W();let tt=C[R];tt===void 0&&(tt={type:void 0,texture:void 0},C[R]=tt),(tt.type!==L||tt.texture!==q)&&(e.bindTexture(L,q||K[L]),tt.type=L,tt.texture=q)}function Q(){const L=C[R];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ht(){try{e.compressedTexImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{e.texImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function M(){try{e.texImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function b(L){O.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),O.copy(L))}function j(L){V.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),V.copy(L))}function k(){f={},R=null,C={},h=null,d=null,u=null,p=null,y=null,v=null,g=null,m=null,E=null,T=!1,w=null,x=null,A=null,H=null,B=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:rt,disable:it,useProgram:yt,setBlending:z,setMaterial:$t,setFlipSided:dt,setCullFace:Rt,setLineWidth:vt,setPolygonOffset:It,setScissorTest:Tt,activeTexture:W,bindTexture:Y,unbindTexture:Q,compressedTexImage2D:ht,texImage2D:nt,texImage3D:M,scissor:b,viewport:j,reset:k}}function nm(e,t,n,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,f=r.maxTextureSize,h=r.maxSamples,d=new WeakMap;let u,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function y(M,b){return p?new OffscreenCanvas(M,b):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function v(M,b,j,k){let L=1;if((M.width>k||M.height>k)&&(L=k/Math.max(M.width,M.height)),L<1||b===!0)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap){const q=b?bt.floorPowerOfTwo:Math.floor,tt=q(L*M.width),at=q(L*M.height);u===void 0&&(u=y(tt,at));const Z=j?y(tt,at):u;return Z.width=tt,Z.height=at,Z.getContext("2d").drawImage(M,0,0,tt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+tt+"x"+at+")."),Z}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function g(M){return bt.isPowerOfTwo(M.width)&&bt.isPowerOfTwo(M.height)}function m(M){return a?!1:M.wrapS!==he||M.wrapT!==he||M.minFilter!==re&&M.minFilter!==Kt}function E(M,b){return M.generateMipmaps&&b&&M.minFilter!==re&&M.minFilter!==Kt}function T(M,b,j,k){e.generateMipmap(M);const L=i.get(b);L.__maxMipLevel=Math.log(Math.max(j,k))*Math.LOG2E}function w(M,b,j){if(a===!1)return b;if(M!==null){if(e[M]!==void 0)return e[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let k=b;return b===6403&&(j===5126&&(k=33326),j===5131&&(k=33325),j===5121&&(k=33321)),b===6407&&(j===5126&&(k=34837),j===5131&&(k=34843),j===5121&&(k=32849)),b===6408&&(j===5126&&(k=34836),j===5131&&(k=34842),j===5121&&(k=32856)),(k===33325||k===33326||k===34842||k===34836)&&t.get("EXT_color_buffer_float"),k}function x(M){return M===re||M===Jo||M===Qo?9728:9729}function A(M){const b=M.target;b.removeEventListener("dispose",A),B(b),b.isVideoTexture&&d.delete(b),o.memory.textures--}function H(M){const b=M.target;b.removeEventListener("dispose",H),et(b),o.memory.textures--}function B(M){const b=i.get(M);b.__webglInit!==void 0&&(e.deleteTexture(b.__webglTexture),i.remove(M))}function et(M){const b=i.get(M),j=i.get(M.texture);if(!!M){if(j.__webglTexture!==void 0&&e.deleteTexture(j.__webglTexture),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let k=0;k<6;k++)e.deleteFramebuffer(b.__webglFramebuffer[k]),b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer[k]);else e.deleteFramebuffer(b.__webglFramebuffer),b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&e.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer&&e.deleteRenderbuffer(b.__webglColorRenderbuffer),b.__webglDepthRenderbuffer&&e.deleteRenderbuffer(b.__webglDepthRenderbuffer);i.remove(M.texture),i.remove(M)}}let P=0;function F(){P=0}function D(){const M=P;return M>=c&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+c),P+=1,M}function R(M,b){const j=i.get(M);if(M.isVideoTexture&&W(M),M.version>0&&j.__version!==M.version){const k=M.image;if(k===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(j,M,b);return}}n.activeTexture(33984+b),n.bindTexture(3553,j.__webglTexture)}function C(M,b){const j=i.get(M);if(M.version>0&&j.__version!==M.version){yt(j,M,b);return}n.activeTexture(33984+b),n.bindTexture(35866,j.__webglTexture)}function O(M,b){const j=i.get(M);if(M.version>0&&j.__version!==M.version){yt(j,M,b);return}n.activeTexture(33984+b),n.bindTexture(32879,j.__webglTexture)}function V(M,b){const j=i.get(M);if(M.version>0&&j.__version!==M.version){Mt(j,M,b);return}n.activeTexture(33984+b),n.bindTexture(34067,j.__webglTexture)}const X={[ps]:10497,[he]:33071,[ms]:33648},K={[re]:9728,[Jo]:9984,[Qo]:9986,[Kt]:9729,[Ul]:9985,[ar]:9987};function rt(M,b,j){j?(e.texParameteri(M,10242,X[b.wrapS]),e.texParameteri(M,10243,X[b.wrapT]),(M===32879||M===35866)&&e.texParameteri(M,32882,X[b.wrapR]),e.texParameteri(M,10240,K[b.magFilter]),e.texParameteri(M,10241,K[b.minFilter])):(e.texParameteri(M,10242,33071),e.texParameteri(M,10243,33071),(M===32879||M===35866)&&e.texParameteri(M,32882,33071),(b.wrapS!==he||b.wrapT!==he)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(M,10240,x(b.magFilter)),e.texParameteri(M,10241,x(b.minFilter)),b.minFilter!==re&&b.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));const k=t.get("EXT_texture_filter_anisotropic");if(k){if(b.type===Ke&&t.get("OES_texture_float_linear")===null||b.type===hr&&(a||t.get("OES_texture_half_float_linear"))===null)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(e.texParameterf(M,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function it(M,b){M.__webglInit===void 0&&(M.__webglInit=!0,b.addEventListener("dispose",A),M.__webglTexture=e.createTexture(),o.memory.textures++)}function yt(M,b,j){let k=3553;b.isDataTexture2DArray&&(k=35866),b.isDataTexture3D&&(k=32879),it(M,b),n.activeTexture(33984+j),n.bindTexture(k,M.__webglTexture),e.pixelStorei(37440,b.flipY),e.pixelStorei(37441,b.premultiplyAlpha),e.pixelStorei(3317,b.unpackAlignment);const L=m(b)&&g(b.image)===!1,q=v(b.image,L,!1,f),tt=g(q)||a,at=s.convert(b.format);let Z=s.convert(b.type),ot=w(b.internalFormat,at,Z);rt(k,b,tt);let ut;const xt=b.mipmaps;if(b.isDepthTexture)ot=6402,a?b.type===Ke?ot=36012:b.type===lr?ot=33190:b.type===Ti?ot=35056:ot=33189:b.type===Ke&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Nn&&ot===6402&&b.type!==cr&&b.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=cr,Z=s.convert(b.type)),b.format===Ai&&ot===6402&&(ot=34041,b.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ti,Z=s.convert(b.type))),n.texImage2D(3553,0,ot,q.width,q.height,0,at,Z,null);else if(b.isDataTexture)if(xt.length>0&&tt){for(let st=0,mt=xt.length;st<mt;st++)ut=xt[st],n.texImage2D(3553,st,ot,ut.width,ut.height,0,at,Z,ut.data);b.generateMipmaps=!1,M.__maxMipLevel=xt.length-1}else n.texImage2D(3553,0,ot,q.width,q.height,0,at,Z,q.data),M.__maxMipLevel=0;else if(b.isCompressedTexture){for(let st=0,mt=xt.length;st<mt;st++)ut=xt[st],b.format!==Me&&b.format!==vn?at!==null?n.compressedTexImage2D(3553,st,ot,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,st,ot,ut.width,ut.height,0,at,Z,ut.data);M.__maxMipLevel=xt.length-1}else if(b.isDataTexture2DArray)n.texImage3D(35866,0,ot,q.width,q.height,q.depth,0,at,Z,q.data),M.__maxMipLevel=0;else if(b.isDataTexture3D)n.texImage3D(32879,0,ot,q.width,q.height,q.depth,0,at,Z,q.data),M.__maxMipLevel=0;else if(xt.length>0&&tt){for(let st=0,mt=xt.length;st<mt;st++)ut=xt[st],n.texImage2D(3553,st,ot,at,Z,ut);b.generateMipmaps=!1,M.__maxMipLevel=xt.length-1}else n.texImage2D(3553,0,ot,at,Z,q),M.__maxMipLevel=0;E(b,tt)&&T(k,b,q.width,q.height),M.__version=b.version,b.onUpdate&&b.onUpdate(b)}function Mt(M,b,j){if(b.image.length!==6)return;it(M,b),n.activeTexture(33984+j),n.bindTexture(34067,M.__webglTexture),e.pixelStorei(37440,b.flipY);const k=b&&(b.isCompressedTexture||b.image[0].isCompressedTexture),L=b.image[0]&&b.image[0].isDataTexture,q=[];for(let st=0;st<6;st++)!k&&!L?q[st]=v(b.image[st],!1,!0,l):q[st]=L?b.image[st].image:b.image[st];const tt=q[0],at=g(tt)||a,Z=s.convert(b.format),ot=s.convert(b.type),ut=w(b.internalFormat,Z,ot);rt(34067,b,at);let xt;if(k){for(let st=0;st<6;st++){xt=q[st].mipmaps;for(let mt=0;mt<xt.length;mt++){const Vt=xt[mt];b.format!==Me&&b.format!==vn?Z!==null?n.compressedTexImage2D(34069+st,mt,ut,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+st,mt,ut,Vt.width,Vt.height,0,Z,ot,Vt.data)}}M.__maxMipLevel=xt.length-1}else{xt=b.mipmaps;for(let st=0;st<6;st++)if(L){n.texImage2D(34069+st,0,ut,q[st].width,q[st].height,0,Z,ot,q[st].data);for(let mt=0;mt<xt.length;mt++){const oe=xt[mt].image[st].image;n.texImage2D(34069+st,mt+1,ut,oe.width,oe.height,0,Z,ot,oe.data)}}else{n.texImage2D(34069+st,0,ut,Z,ot,q[st]);for(let mt=0;mt<xt.length;mt++){const Vt=xt[mt];n.texImage2D(34069+st,mt+1,ut,Z,ot,Vt.image[st])}}M.__maxMipLevel=xt.length}E(b,at)&&T(34067,b,tt.width,tt.height),M.__version=b.version,b.onUpdate&&b.onUpdate(b)}function kt(M,b,j,k){const L=s.convert(b.texture.format),q=s.convert(b.texture.type),tt=w(b.texture.internalFormat,L,q);n.texImage2D(k,0,tt,b.width,b.height,0,L,q,null),e.bindFramebuffer(36160,M),e.framebufferTexture2D(36160,j,k,i.get(b.texture).__webglTexture,0),e.bindFramebuffer(36160,null)}function z(M,b,j){if(e.bindRenderbuffer(36161,M),b.depthBuffer&&!b.stencilBuffer){let k=33189;if(j){const L=b.depthTexture;L&&L.isDepthTexture&&(L.type===Ke?k=36012:L.type===lr&&(k=33190));const q=Tt(b);e.renderbufferStorageMultisample(36161,q,k,b.width,b.height)}else e.renderbufferStorage(36161,k,b.width,b.height);e.framebufferRenderbuffer(36160,36096,36161,M)}else if(b.depthBuffer&&b.stencilBuffer){if(j){const k=Tt(b);e.renderbufferStorageMultisample(36161,k,35056,b.width,b.height)}else e.renderbufferStorage(36161,34041,b.width,b.height);e.framebufferRenderbuffer(36160,33306,36161,M)}else{const k=s.convert(b.texture.format),L=s.convert(b.texture.type),q=w(b.texture.internalFormat,k,L);if(j){const tt=Tt(b);e.renderbufferStorageMultisample(36161,tt,q,b.width,b.height)}else e.renderbufferStorage(36161,q,b.width,b.height)}e.bindRenderbuffer(36161,null)}function $t(M,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,M),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),R(b.depthTexture,0);const k=i.get(b.depthTexture).__webglTexture;if(b.depthTexture.format===Nn)e.framebufferTexture2D(36160,36096,3553,k,0);else if(b.depthTexture.format===Ai)e.framebufferTexture2D(36160,33306,3553,k,0);else throw new Error("Unknown depthTexture format")}function dt(M){const b=i.get(M),j=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture){if(j)throw new Error("target.depthTexture not supported in Cube render targets");$t(b.__webglFramebuffer,M)}else if(j){b.__webglDepthbuffer=[];for(let k=0;k<6;k++)e.bindFramebuffer(36160,b.__webglFramebuffer[k]),b.__webglDepthbuffer[k]=e.createRenderbuffer(),z(b.__webglDepthbuffer[k],M,!1)}else e.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=e.createRenderbuffer(),z(b.__webglDepthbuffer,M,!1);e.bindFramebuffer(36160,null)}function Rt(M){const b=i.get(M),j=i.get(M.texture);M.addEventListener("dispose",H),j.__webglTexture=e.createTexture(),o.memory.textures++;const k=M.isWebGLCubeRenderTarget===!0,L=M.isWebGLMultisampleRenderTarget===!0,q=g(M)||a;if(a&&M.texture.format===vn&&(M.texture.type===Ke||M.texture.type===hr)&&(M.texture.format=Me,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),k){b.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)b.__webglFramebuffer[tt]=e.createFramebuffer()}else if(b.__webglFramebuffer=e.createFramebuffer(),L)if(a){b.__webglMultisampledFramebuffer=e.createFramebuffer(),b.__webglColorRenderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(36161,b.__webglColorRenderbuffer);const tt=s.convert(M.texture.format),at=s.convert(M.texture.type),Z=w(M.texture.internalFormat,tt,at),ot=Tt(M);e.renderbufferStorageMultisample(36161,ot,Z,M.width,M.height),e.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064,36161,b.__webglColorRenderbuffer),e.bindRenderbuffer(36161,null),M.depthBuffer&&(b.__webglDepthRenderbuffer=e.createRenderbuffer(),z(b.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(k){n.bindTexture(34067,j.__webglTexture),rt(34067,M.texture,q);for(let tt=0;tt<6;tt++)kt(b.__webglFramebuffer[tt],M,36064,34069+tt);E(M.texture,q)&&T(34067,M.texture,M.width,M.height),n.bindTexture(34067,null)}else n.bindTexture(3553,j.__webglTexture),rt(3553,M.texture,q),kt(b.__webglFramebuffer,M,36064,3553),E(M.texture,q)&&T(3553,M.texture,M.width,M.height),n.bindTexture(3553,null);M.depthBuffer&&dt(M)}function vt(M){const b=M.texture,j=g(M)||a;if(E(b,j)){const k=M.isWebGLCubeRenderTarget?34067:3553,L=i.get(b).__webglTexture;n.bindTexture(k,L),T(k,b,M.width,M.height),n.bindTexture(k,null)}}function It(M){if(M.isWebGLMultisampleRenderTarget)if(a){const b=i.get(M);e.bindFramebuffer(36008,b.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,b.__webglFramebuffer);const j=M.width,k=M.height;let L=16384;M.depthBuffer&&(L|=256),M.stencilBuffer&&(L|=1024),e.blitFramebuffer(0,0,j,k,0,0,j,k,L,9728),e.bindFramebuffer(36160,b.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Tt(M){return a&&M.isWebGLMultisampleRenderTarget?Math.min(h,M.samples):0}function W(M){const b=o.render.frame;d.get(M)!==b&&(d.set(M,b),M.update())}let Y=!1,Q=!1;function ht(M,b){M&&M.isWebGLRenderTarget&&(Y===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Y=!0),M=M.texture),R(M,b)}function nt(M,b){M&&M.isWebGLCubeRenderTarget&&(Q===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Q=!0),M=M.texture),V(M,b)}this.allocateTextureUnit=D,this.resetTextureUnits=F,this.setTexture2D=R,this.setTexture2DArray=C,this.setTexture3D=O,this.setTextureCube=V,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=It,this.safeSetTexture2D=ht,this.safeSetTextureCube=nt}function im(e,t,n){const i=n.isWebGL2;function r(s){let o;if(s===gs)return 5121;if(s===kl)return 32819;if(s===Vl)return 32820;if(s===Wl)return 33635;if(s===zl)return 5120;if(s===Hl)return 5122;if(s===cr)return 5123;if(s===Gl)return 5124;if(s===lr)return 5125;if(s===Ke)return 5126;if(s===hr)return i?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===jl)return 6406;if(s===vn)return 6407;if(s===Me)return 6408;if(s===ql)return 6409;if(s===Xl)return 6410;if(s===Nn)return 6402;if(s===Ai)return 34041;if(s===Yl)return 6403;if(s===Zl)return 36244;if(s===Jl)return 33319;if(s===Ql)return 33320;if(s===$l)return 36248;if(s===Kl)return 36249;if(s===$o||s===Ko||s===ta||s===ea)if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===$o)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ko)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ta)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ea)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===na||s===ia||s===ra||s===sa)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===na)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ia)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ra)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===th)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===oa||s===aa)&&(o=t.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===oa)return o.COMPRESSED_RGB8_ETC2;if(s===aa)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===eh||s===nh||s===ih||s===rh||s===sh||s===oh||s===ah||s===ch||s===lh||s===hh||s===uh||s===fh||s===dh||s===ph||s===gh||s===yh||s===vh||s===xh||s===_h||s===bh||s===Mh||s===wh||s===Sh||s===Eh||s===Th||s===Ah||s===Lh||s===Ch)return o=t.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===mh)return o=t.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===Ti)return i?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function Zs(e=[]){Qt.call(this),this.cameras=e}Zs.prototype=Object.assign(Object.create(Qt.prototype),{constructor:Zs,isArrayCamera:!0});function ri(){ft.call(this),this.type="Group"}ri.prototype=Object.assign(Object.create(ft.prototype),{constructor:ri,isGroup:!0});function Vi(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(Vi.prototype,{constructor:Vi,getHandSpace:function(){if(this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints=[],this._hand.inputState={pinching:!1},window.XRHand))for(let e=0;e<=window.XRHand.LITTLE_PHALANX_TIP;e++){const t=new ri;t.matrixAutoUpdate=!1,t.visible=!1,this._hand.joints.push(t),this._hand.add(t)}return this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this},disconnect:function(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,a=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(c&&e.hand){s=!0;for(let l=0;l<=window.XRHand.LITTLE_PHALANX_TIP;l++)if(e.hand[l]){const f=t.getJointPose(e.hand[l],n),h=c.joints[l];f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=f.radius),h.visible=f!==null;const d=c.joints[window.XRHand.INDEX_PHALANX_TIP],u=c.joints[window.XRHand.THUMB_PHALANX_TIP],p=d.position.distanceTo(u.position),y=.02,v=.005;c.inputState.pinching&&p>y+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=y-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}}else o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function Qa(e,t){const n=this;let i=null,r=1,s=null,o="local-floor",a=null;const c=[],l=new Map,f=new Qt;f.layers.enable(1),f.viewport=new Dt;const h=new Qt;h.layers.enable(2),h.viewport=new Dt;const d=[f,h],u=new Zs;u.layers.enable(1),u.layers.enable(2);let p=null,y=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let F=c[P];return F===void 0&&(F=new Vi,c[P]=F),F.getTargetRaySpace()},this.getControllerGrip=function(P){let F=c[P];return F===void 0&&(F=new Vi,c[P]=F),F.getGripSpace()},this.getHand=function(P){let F=c[P];return F===void 0&&(F=new Vi,c[P]=F),F.getHandSpace()};function v(P){const F=l.get(P.inputSource);F&&F.dispatchEvent({type:P.type,data:P.inputSource})}function g(){l.forEach(function(P,F){P.disconnect(F)}),l.clear(),e.setFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),et.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function m(P){s=P,et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}this.setFramebufferScaleFactor=function(P){r=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=function(P){if(i=P,i!==null){i.addEventListener("select",v),i.addEventListener("selectstart",v),i.addEventListener("selectend",v),i.addEventListener("squeeze",v),i.addEventListener("squeezestart",v),i.addEventListener("squeezeend",v),i.addEventListener("end",g);const F=t.getContextAttributes();F.xrCompatible!==!0&&t.makeXRCompatible();const D={antialias:F.antialias,alpha:F.alpha,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:r},R=new XRWebGLLayer(i,t,D);i.updateRenderState({baseLayer:R}),i.requestReferenceSpace(o).then(m),i.addEventListener("inputsourceschange",E)}};function E(P){const F=i.inputSources;for(let D=0;D<c.length;D++)l.set(F[D],c[D]);for(let D=0;D<P.removed.length;D++){const R=P.removed[D],C=l.get(R);C&&(C.dispatchEvent({type:"disconnected",data:R}),l.delete(R))}for(let D=0;D<P.added.length;D++){const R=P.added[D],C=l.get(R);C&&C.dispatchEvent({type:"connected",data:R})}}const T=new S,w=new S;function x(P,F,D){T.setFromMatrixPosition(F.matrixWorld),w.setFromMatrixPosition(D.matrixWorld);const R=T.distanceTo(w),C=F.projectionMatrix.elements,O=D.projectionMatrix.elements,V=C[14]/(C[10]-1),X=C[14]/(C[10]+1),K=(C[9]+1)/C[5],rt=(C[9]-1)/C[5],it=(C[8]-1)/C[0],yt=(O[8]+1)/O[0],Mt=V*it,kt=V*yt,z=R/(-it+yt),$t=z*-it;F.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX($t),P.translateZ(z),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const dt=V+z,Rt=X+z,vt=Mt-$t,It=kt+(R-$t),Tt=K*X/Rt*dt,W=rt*X/Rt*dt;P.projectionMatrix.makePerspective(vt,It,Tt,W,dt,Rt)}function A(P,F){F===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(F.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.getCamera=function(P){u.near=h.near=f.near=P.near,u.far=h.far=f.far=P.far,(p!==u.near||y!==u.far)&&(i.updateRenderState({depthNear:u.near,depthFar:u.far}),p=u.near,y=u.far);const F=P.parent,D=u.cameras;A(u,F);for(let C=0;C<D.length;C++)A(D[C],F);P.matrixWorld.copy(u.matrixWorld);const R=P.children;for(let C=0,O=R.length;C<O;C++)R[C].updateMatrixWorld(!0);return D.length===2?x(u,f,h):u.projectionMatrix.copy(f.projectionMatrix),u};let H=null;function B(P,F){if(a=F.getViewerPose(s),a!==null){const R=a.views,C=i.renderState.baseLayer;e.setFramebuffer(C.framebuffer);let O=!1;R.length!==u.cameras.length&&(u.cameras.length=0,O=!0);for(let V=0;V<R.length;V++){const X=R[V],K=C.getViewport(X),rt=d[V];rt.matrix.fromArray(X.transform.matrix),rt.projectionMatrix.fromArray(X.projectionMatrix),rt.viewport.set(K.x,K.y,K.width,K.height),V===0&&u.matrix.copy(rt.matrix),O===!0&&u.cameras.push(rt)}}const D=i.inputSources;for(let R=0;R<c.length;R++){const C=c[R],O=D[R];C.update(O,F,s)}H&&H(P,F)}const et=new Aa;et.setAnimationLoop(B),this.setAnimationLoop=function(P){H=P},this.dispose=function(){}}Object.assign(Qa.prototype,Ge.prototype);function rm(e){function t(g,m){g.fogColor.value.copy(m.color),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,E,T){m.isMeshBasicMaterial?i(g,m):m.isMeshLambertMaterial?(i(g,m),c(g,m)):m.isMeshToonMaterial?(i(g,m),f(g,m)):m.isMeshPhongMaterial?(i(g,m),l(g,m)):m.isMeshStandardMaterial?(i(g,m),m.isMeshPhysicalMaterial?d(g,m):h(g,m)):m.isMeshMatcapMaterial?(i(g,m),u(g,m)):m.isMeshDepthMaterial?(i(g,m),p(g,m)):m.isMeshDistanceMaterial?(i(g,m),y(g,m)):m.isMeshNormalMaterial?(i(g,m),v(g,m)):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&s(g,m)):m.isPointsMaterial?o(g,m,E,T):m.isSpriteMaterial?a(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.specularMap&&(g.specularMap.value=m.specularMap);const E=e.get(m).envMap;if(E){g.envMap.value=E,g.flipEnvMap.value=E.isCubeTexture&&E._needsFlipEnvMap?-1:1,g.reflectivity.value=m.reflectivity,g.refractionRatio.value=m.refractionRatio;const x=e.get(E).__maxMipLevel;x!==void 0&&(g.maxMipLevel.value=x)}m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity);let T;m.map?T=m.map:m.specularMap?T=m.specularMap:m.displacementMap?T=m.displacementMap:m.normalMap?T=m.normalMap:m.bumpMap?T=m.bumpMap:m.roughnessMap?T=m.roughnessMap:m.metalnessMap?T=m.metalnessMap:m.alphaMap?T=m.alphaMap:m.emissiveMap?T=m.emissiveMap:m.clearcoatMap?T=m.clearcoatMap:m.clearcoatNormalMap?T=m.clearcoatNormalMap:m.clearcoatRoughnessMap&&(T=m.clearcoatRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uvTransform.value.copy(T.matrix));let w;m.aoMap?w=m.aoMap:m.lightMap&&(w=m.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uv2Transform.value.copy(w.matrix))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity}function s(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,E,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*E,g.scale.value=T*.5,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let w;m.map?w=m.map:m.alphaMap&&(w=m.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uvTransform.value.copy(w.matrix))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let E;m.map?E=m.map:m.alphaMap&&(E=m.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uvTransform.value.copy(E.matrix))}function c(g,m){m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap)}function l(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Zt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Zt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Zt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Zt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function h(g,m){g.roughness.value=m.roughness,g.metalness.value=m.metalness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Zt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Zt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m){h(g,m),g.reflectivity.value=m.reflectivity,g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.sheen&&g.sheen.value.copy(m.sheen),m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),g.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Zt&&g.clearcoatNormalScale.value.negate()),g.transmission.value=m.transmission,m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap)}function u(g,m){m.matcap&&(g.matcap.value=m.matcap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Zt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Zt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function p(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function y(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),g.referencePosition.value.copy(m.referencePosition),g.nearDistance.value=m.nearDistance,g.farDistance.value=m.farDistance}function v(g,m){m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Zt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Zt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function sm(){const e=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return e.style.display="block",e}function Dr(e){e=e||{};const t=e.canvas!==void 0?e.canvas:sm(),n=e.context!==void 0?e.context:null,i=e.alpha!==void 0?e.alpha:!1,r=e.depth!==void 0?e.depth:!0,s=e.stencil!==void 0?e.stencil:!0,o=e.antialias!==void 0?e.antialias:!1,a=e.premultipliedAlpha!==void 0?e.premultipliedAlpha:!0,c=e.preserveDrawingBuffer!==void 0?e.preserveDrawingBuffer:!1,l=e.powerPreference!==void 0?e.powerPreference:"default",f=e.failIfMajorPerformanceCaveat!==void 0?e.failIfMajorPerformanceCaveat:!1;let h=null,d=null;const u=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Li,this.physicallyCorrectLights=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;const p=this;let y=!1,v=null,g=0,m=0,E=null,T=null,w=-1,x=null;const A=new Dt,H=new Dt;let B=null,et=t.width,P=t.height,F=1,D=null,R=null;const C=new Dt(0,0,et,P),O=new Dt(0,0,et,P);let V=!1;const X=new Ir;let K=!1,rt=!1;const it=new wt,yt=new S,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function kt(){return E===null?F:1}let z=n;function $t(_,N){for(let I=0;I<_.length;I++){const U=_[I],$=t.getContext(U,N);if($!==null)return $}return null}try{const _={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(t.addEventListener("webglcontextlost",Vt,!1),t.addEventListener("webglcontextrestored",oe,!1),z===null){const N=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&N.shift(),z=$t(N,_),z===null)throw $t(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let dt,Rt,vt,It,Tt,W,Y,Q,ht,nt,M,b,j,k,L,q,tt,at,Z,ot,ut;function xt(){dt=new Fd(z),Rt=new Dd(z,dt,e),Rt.isWebGL2===!1&&(dt.get("WEBGL_depth_texture"),dt.get("OES_texture_float"),dt.get("OES_texture_half_float"),dt.get("OES_texture_half_float_linear"),dt.get("OES_standard_derivatives"),dt.get("OES_element_index_uint"),dt.get("OES_vertex_array_object"),dt.get("ANGLE_instanced_arrays")),dt.get("OES_texture_float_linear"),ot=new im(z,dt,Rt),vt=new em(z,dt,Rt),vt.scissor(H.copy(O).multiplyScalar(F).floor()),vt.viewport(A.copy(C).multiplyScalar(F).floor()),It=new zd(z),Tt=new Vp,W=new nm(z,dt,vt,Tt,Rt,ot,It),Y=new Od(p),Q=new au(z,Rt),ut=new Pd(z,dt,Q,Rt),ht=new Bd(z,Q,It,ut),nt=new Vd(z,ht,Q,It),tt=new kd(z),L=new Nd(Tt),M=new kp(p,Y,dt,Rt,ut,L),b=new rm(Tt),j=new qp(Tt),k=new $p(dt,Rt),q=new Rd(p,Y,vt,nt,a),at=new Id(z,dt,It,Rt),Z=new Ud(z,dt,It,Rt),It.programs=M.programs,p.capabilities=Rt,p.extensions=dt,p.properties=Tt,p.renderLists=j,p.state=vt,p.info=It}xt();const st=new Qa(p,z);this.xr=st;const mt=new Ja(p,nt,Rt.maxTextureSize);this.shadowMap=mt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const _=dt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=dt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(_){_!==void 0&&(F=_,this.setSize(et,P,!1))},this.getSize=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),_=new G),_.set(et,P)},this.setSize=function(_,N,I){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=_,P=N,t.width=Math.floor(_*F),t.height=Math.floor(N*F),I!==!1&&(t.style.width=_+"px",t.style.height=N+"px"),this.setViewport(0,0,_,N)},this.getDrawingBufferSize=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),_=new G),_.set(et*F,P*F).floor()},this.setDrawingBufferSize=function(_,N,I){et=_,P=N,F=I,t.width=Math.floor(_*I),t.height=Math.floor(N*I),this.setViewport(0,0,_,N)},this.getCurrentViewport=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),_=new Dt),_.copy(A)},this.getViewport=function(_){return _.copy(C)},this.setViewport=function(_,N,I,U){_.isVector4?C.set(_.x,_.y,_.z,_.w):C.set(_,N,I,U),vt.viewport(A.copy(C).multiplyScalar(F).floor())},this.getScissor=function(_){return _.copy(O)},this.setScissor=function(_,N,I,U){_.isVector4?O.set(_.x,_.y,_.z,_.w):O.set(_,N,I,U),vt.scissor(H.copy(O).multiplyScalar(F).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(_){vt.setScissorTest(V=_)},this.setOpaqueSort=function(_){D=_},this.setTransparentSort=function(_){R=_},this.getClearColor=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),_=new ct),_.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(_,N,I){let U=0;(_===void 0||_)&&(U|=16384),(N===void 0||N)&&(U|=256),(I===void 0||I)&&(U|=1024),z.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Vt,!1),t.removeEventListener("webglcontextrestored",oe,!1),j.dispose(),k.dispose(),Tt.dispose(),Y.dispose(),nt.dispose(),ut.dispose(),st.dispose(),xi.stop()};function Vt(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1,xt()}function Po(_){const N=_.target;N.removeEventListener("dispose",Po),il(N)}function il(_){Io(_),Tt.remove(_)}function Io(_){const N=Tt.get(_).program;N!==void 0&&M.releaseProgram(N)}function rl(_,N){_.render(function(I){p.renderBufferImmediate(I,N)})}this.renderBufferImmediate=function(_,N){ut.initAttributes();const I=Tt.get(_);_.hasPositions&&!I.position&&(I.position=z.createBuffer()),_.hasNormals&&!I.normal&&(I.normal=z.createBuffer()),_.hasUvs&&!I.uv&&(I.uv=z.createBuffer()),_.hasColors&&!I.color&&(I.color=z.createBuffer());const U=N.getAttributes();_.hasPositions&&(z.bindBuffer(34962,I.position),z.bufferData(34962,_.positionArray,35048),ut.enableAttribute(U.position),z.vertexAttribPointer(U.position,3,5126,!1,0,0)),_.hasNormals&&(z.bindBuffer(34962,I.normal),z.bufferData(34962,_.normalArray,35048),ut.enableAttribute(U.normal),z.vertexAttribPointer(U.normal,3,5126,!1,0,0)),_.hasUvs&&(z.bindBuffer(34962,I.uv),z.bufferData(34962,_.uvArray,35048),ut.enableAttribute(U.uv),z.vertexAttribPointer(U.uv,2,5126,!1,0,0)),_.hasColors&&(z.bindBuffer(34962,I.color),z.bufferData(34962,_.colorArray,35048),ut.enableAttribute(U.color),z.vertexAttribPointer(U.color,3,5126,!1,0,0)),ut.disableUnusedAttributes(),z.drawArrays(4,0,_.count),_.count=0},this.renderBufferDirect=function(_,N,I,U,$,Lt){N===null&&(N=Mt);const St=$.isMesh&&$.matrixWorld.determinant()<0,Ct=Fo(_,N,U,$);vt.setMaterial(U,St);let Et=I.index;const qt=I.attributes.position;if(Et===null){if(qt===void 0||qt.count===0)return}else if(Et.count===0)return;let jt=1;U.wireframe===!0&&(Et=ht.getWireframeAttribute(I),jt=2),(U.morphTargets||U.morphNormals)&&tt.update($,I,U,Ct),ut.setup($,U,Ct,I,Et);let _t,Ft=at;Et!==null&&(_t=Q.get(Et),Ft=Z,Ft.setIndex(_t));const He=Et!==null?Et.count:qt.count,Bt=I.drawRange.start*jt,yn=I.drawRange.count*jt,Xt=Lt!==null?Lt.start*jt:0,cs=Lt!==null?Lt.count*jt:1/0,ae=Math.max(Bt,Xt),_i=Math.min(He,Bt+yn,Xt+cs)-1,In=Math.max(0,_i-ae+1);if(In!==0){if($.isMesh)U.wireframe===!0?(vt.setLineWidth(U.wireframeLinewidth*kt()),Ft.setMode(1)):Ft.setMode(4);else if($.isLine){let bi=U.linewidth;bi===void 0&&(bi=1),vt.setLineWidth(bi*kt()),$.isLineSegments?Ft.setMode(1):$.isLineLoop?Ft.setMode(2):Ft.setMode(3)}else $.isPoints?Ft.setMode(0):$.isSprite&&Ft.setMode(4);if($.isInstancedMesh)Ft.renderInstances(ae,In,$.count);else if(I.isInstancedBufferGeometry){const bi=Math.min(I.instanceCount,I._maxInstanceCount);Ft.renderInstances(ae,In,bi)}else Ft.render(ae,In)}},this.compile=function(_,N){d=k.get(_),d.init(),_.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const I=new WeakMap;_.traverse(function(U){const $=U.material;if($)if(Array.isArray($))for(let Lt=0;Lt<$.length;Lt++){const St=$[Lt];I.has(St)===!1&&(ze(St,_,U),I.set(St))}else I.has($)===!1&&(ze($,_,U),I.set($))})};let as=null;function sl(_){st.isPresenting||as&&as(_)}const xi=new Aa;xi.setAnimationLoop(sl),typeof window!="undefined"&&xi.setContext(window),this.setAnimationLoop=function(_){as=_,st.setAnimationLoop(_),_===null?xi.stop():xi.start()},this.render=function(_,N){let I,U;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),I=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),U=arguments[3]),N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;ut.resetDefaultState(),w=-1,x=null,_.autoUpdate===!0&&_.updateMatrixWorld(),N.parent===null&&N.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(N=st.getCamera(N)),_.isScene===!0&&_.onBeforeRender(p,_,N,I||E),d=k.get(_,u.length),d.init(),u.push(d),it.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(it),rt=this.localClippingEnabled,K=L.init(this.clippingPlanes,rt,N),h=j.get(_,N),h.init(),Do(_,N,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(D,R),K===!0&&L.beginShadows();const $=d.state.shadowsArray;mt.render($,_,N),d.setupLights(),d.setupLightsView(N),K===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset(),I!==void 0&&this.setRenderTarget(I),q.render(h,_,N,U);const Lt=h.opaque,St=h.transparent;Lt.length>0&&No(Lt,_,N),St.length>0&&No(St,_,N),_.isScene===!0&&_.onAfterRender(p,_,N),E!==null&&(W.updateRenderTargetMipmap(E),W.updateMultisampleRenderTarget(E)),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1),u.pop(),u.length>0?d=u[u.length-1]:d=null,h=null};function Do(_,N,I,U){if(_.visible===!1)return;if(_.layers.test(N.layers)){if(_.isGroup)I=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(N);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||X.intersectsSprite(_)){U&&yt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(it);const St=nt.update(_),Ct=_.material;Ct.visible&&h.push(_,St,Ct,I,yt.z,null)}}else if(_.isImmediateRenderObject)U&&yt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(it),h.push(_,null,_.material,I,yt.z,null);else if((_.isMesh||_.isLine||_.isPoints)&&(_.isSkinnedMesh&&_.skeleton.frame!==It.render.frame&&(_.skeleton.update(),_.skeleton.frame=It.render.frame),!_.frustumCulled||X.intersectsObject(_))){U&&yt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(it);const St=nt.update(_),Ct=_.material;if(Array.isArray(Ct)){const Et=St.groups;for(let qt=0,jt=Et.length;qt<jt;qt++){const _t=Et[qt],Ft=Ct[_t.materialIndex];Ft&&Ft.visible&&h.push(_,St,Ft,I,yt.z,_t)}}else Ct.visible&&h.push(_,St,Ct,I,yt.z,null)}}const Lt=_.children;for(let St=0,Ct=Lt.length;St<Ct;St++)Do(Lt[St],N,I,U)}function No(_,N,I){const U=N.isScene===!0?N.overrideMaterial:null;for(let $=0,Lt=_.length;$<Lt;$++){const St=_[$],Ct=St.object,Et=St.geometry,qt=U===null?St.material:U,jt=St.group;if(I.isArrayCamera){const _t=I.cameras;for(let Ft=0,He=_t.length;Ft<He;Ft++){const Bt=_t[Ft];Ct.layers.test(Bt.layers)&&(vt.viewport(A.copy(Bt.viewport)),d.setupLightsView(Bt),Oo(Ct,N,Bt,Et,qt,jt))}}else Oo(Ct,N,I,Et,qt,jt)}}function Oo(_,N,I,U,$,Lt){if(_.onBeforeRender(p,N,I,U,$,Lt),_.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),_.isImmediateRenderObject){const St=Fo(I,N,$,_);vt.setMaterial($),ut.reset(),rl(_,St)}else p.renderBufferDirect(I,N,U,$,_,Lt);_.onAfterRender(p,N,I,U,$,Lt)}function ze(_,N,I){N.isScene!==!0&&(N=Mt);const U=Tt.get(_),$=d.state.lights,Lt=d.state.shadowsArray,St=$.state.version,Ct=M.getParameters(_,$.state,Lt,N,I),Et=M.getProgramCacheKey(Ct);let qt=U.program,jt=!0;if(qt===void 0)_.addEventListener("dispose",Po);else if(qt.cacheKey!==Et)Io(_);else if(U.lightsStateVersion!==St)jt=!1;else if(Ct.shaderID!==void 0){const Bt=_.isMeshStandardMaterial?N.environment:null;U.envMap=Y.get(_.envMap||Bt);return}else jt=!1;jt&&(Ct.uniforms=M.getUniforms(_),_.onBeforeCompile(Ct,p),qt=M.acquireProgram(Ct,Et),U.program=qt,U.uniforms=Ct.uniforms,U.outputEncoding=Ct.outputEncoding);const _t=U.uniforms;(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(U.numClippingPlanes=L.numPlanes,U.numIntersection=L.numIntersection,_t.clippingPlanes=L.uniform),U.environment=_.isMeshStandardMaterial?N.environment:null,U.fog=N.fog,U.envMap=Y.get(_.envMap||U.environment),U.needsLights=al(_),U.lightsStateVersion=St,U.needsLights&&(_t.ambientLightColor.value=$.state.ambient,_t.lightProbe.value=$.state.probe,_t.directionalLights.value=$.state.directional,_t.directionalLightShadows.value=$.state.directionalShadow,_t.spotLights.value=$.state.spot,_t.spotLightShadows.value=$.state.spotShadow,_t.rectAreaLights.value=$.state.rectArea,_t.ltc_1.value=$.state.rectAreaLTC1,_t.ltc_2.value=$.state.rectAreaLTC2,_t.pointLights.value=$.state.point,_t.pointLightShadows.value=$.state.pointShadow,_t.hemisphereLights.value=$.state.hemi,_t.directionalShadowMap.value=$.state.directionalShadowMap,_t.directionalShadowMatrix.value=$.state.directionalShadowMatrix,_t.spotShadowMap.value=$.state.spotShadowMap,_t.spotShadowMatrix.value=$.state.spotShadowMatrix,_t.pointShadowMap.value=$.state.pointShadowMap,_t.pointShadowMatrix.value=$.state.pointShadowMatrix);const Ft=U.program.getUniforms(),He=fn.seqWithValue(Ft.seq,_t);U.uniformsList=He}function Fo(_,N,I,U){N.isScene!==!0&&(N=Mt),W.resetTextureUnits();const $=N.fog,Lt=I.isMeshStandardMaterial?N.environment:null,St=E===null?p.outputEncoding:E.texture.encoding,Ct=Y.get(I.envMap||Lt),Et=Tt.get(I),qt=d.state.lights;if(K===!0&&(rt===!0||_!==x)){const Xt=_===x&&I.id===w;L.setState(I,_,Xt)}I.version===Et.__version?(I.fog&&Et.fog!==$||Et.environment!==Lt||Et.needsLights&&Et.lightsStateVersion!==qt.state.version||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==L.numPlanes||Et.numIntersection!==L.numIntersection)||Et.outputEncoding!==St||Et.envMap!==Ct)&&ze(I,N,U):(ze(I,N,U),Et.__version=I.version);let jt=!1,_t=!1,Ft=!1;const He=Et.program,Bt=He.getUniforms(),yn=Et.uniforms;if(vt.useProgram(He.program)&&(jt=!0,_t=!0,Ft=!0),I.id!==w&&(w=I.id,_t=!0),jt||x!==_){if(Bt.setValue(z,"projectionMatrix",_.projectionMatrix),Rt.logarithmicDepthBuffer&&Bt.setValue(z,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),x!==_&&(x=_,_t=!0,Ft=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Xt=Bt.map.cameraPosition;Xt!==void 0&&Xt.setValue(z,yt.setFromMatrixPosition(_.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Bt.setValue(z,"isOrthographic",_.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||I.skinning)&&Bt.setValue(z,"viewMatrix",_.matrixWorldInverse)}if(I.skinning){Bt.setOptional(z,U,"bindMatrix"),Bt.setOptional(z,U,"bindMatrixInverse");const Xt=U.skeleton;if(Xt){const cs=Xt.bones;if(Rt.floatVertexTextures){if(Xt.boneTexture===null){let ae=Math.sqrt(cs.length*4);ae=bt.ceilPowerOfTwo(ae),ae=Math.max(ae,4);const _i=new Float32Array(ae*ae*4);_i.set(Xt.boneMatrices);const In=new ei(_i,ae,ae,Me,Ke);Xt.boneMatrices=_i,Xt.boneTexture=In,Xt.boneTextureSize=ae}Bt.setValue(z,"boneTexture",Xt.boneTexture,W),Bt.setValue(z,"boneTextureSize",Xt.boneTextureSize)}else Bt.setOptional(z,Xt,"boneMatrices")}}return(_t||Et.receiveShadow!==U.receiveShadow)&&(Et.receiveShadow=U.receiveShadow,Bt.setValue(z,"receiveShadow",U.receiveShadow)),_t&&(Bt.setValue(z,"toneMappingExposure",p.toneMappingExposure),Et.needsLights&&ol(yn,Ft),$&&I.fog&&b.refreshFogUniforms(yn,$),b.refreshMaterialUniforms(yn,I,F,P),fn.upload(z,Et.uniformsList,yn,W)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(fn.upload(z,Et.uniformsList,yn,W),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Bt.setValue(z,"center",U.center),Bt.setValue(z,"modelViewMatrix",U.modelViewMatrix),Bt.setValue(z,"normalMatrix",U.normalMatrix),Bt.setValue(z,"modelMatrix",U.matrixWorld),He}function ol(_,N){_.ambientLightColor.needsUpdate=N,_.lightProbe.needsUpdate=N,_.directionalLights.needsUpdate=N,_.directionalLightShadows.needsUpdate=N,_.pointLights.needsUpdate=N,_.pointLightShadows.needsUpdate=N,_.spotLights.needsUpdate=N,_.spotLightShadows.needsUpdate=N,_.rectAreaLights.needsUpdate=N,_.hemisphereLights.needsUpdate=N}function al(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.setFramebuffer=function(_){v!==_&&E===null&&z.bindFramebuffer(36160,_),v=_},this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return m},this.getRenderList=function(){return h},this.setRenderList=function(_){h=_},this.getRenderTarget=function(){return E},this.setRenderTarget=function(_,N=0,I=0){E=_,g=N,m=I,_&&Tt.get(_).__webglFramebuffer===void 0&&W.setupRenderTarget(_);let U=v,$=!1;if(_){const Lt=Tt.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(U=Lt[N],$=!0):_.isWebGLMultisampleRenderTarget?U=Tt.get(_).__webglMultisampledFramebuffer:U=Lt,A.copy(_.viewport),H.copy(_.scissor),B=_.scissorTest}else A.copy(C).multiplyScalar(F).floor(),H.copy(O).multiplyScalar(F).floor(),B=V;if(T!==U&&(z.bindFramebuffer(36160,U),T=U),vt.viewport(A),vt.scissor(H),vt.setScissorTest(B),$){const Lt=Tt.get(_.texture);z.framebufferTexture2D(36160,36064,34069+N,Lt.__webglTexture,I)}},this.readRenderTargetPixels=function(_,N,I,U,$,Lt,St){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Tt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&St!==void 0&&(Ct=Ct[St]),Ct){let Et=!1;Ct!==T&&(z.bindFramebuffer(36160,Ct),Et=!0);try{const qt=_.texture,jt=qt.format,_t=qt.type;if(jt!==Me&&ot.convert(jt)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(_t!==gs&&ot.convert(_t)!==z.getParameter(35738)&&!(_t===Ke&&(Rt.isWebGL2||dt.get("OES_texture_float")||dt.get("WEBGL_color_buffer_float")))&&!(_t===hr&&(Rt.isWebGL2?dt.get("EXT_color_buffer_float"):dt.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z.checkFramebufferStatus(36160)===36053?N>=0&&N<=_.width-U&&I>=0&&I<=_.height-$&&z.readPixels(N,I,U,$,ot.convert(jt),ot.convert(_t),Lt):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{Et&&z.bindFramebuffer(36160,T)}}},this.copyFramebufferToTexture=function(_,N,I=0){const U=Math.pow(2,-I),$=Math.floor(N.image.width*U),Lt=Math.floor(N.image.height*U),St=ot.convert(N.format);W.setTexture2D(N,0),z.copyTexImage2D(3553,I,St,_.x,_.y,$,Lt,0),vt.unbindTexture()},this.copyTextureToTexture=function(_,N,I,U=0){const $=N.image.width,Lt=N.image.height,St=ot.convert(I.format),Ct=ot.convert(I.type);W.setTexture2D(I,0),z.pixelStorei(37440,I.flipY),z.pixelStorei(37441,I.premultiplyAlpha),z.pixelStorei(3317,I.unpackAlignment),N.isDataTexture?z.texSubImage2D(3553,U,_.x,_.y,$,Lt,St,Ct,N.image.data):N.isCompressedTexture?z.compressedTexSubImage2D(3553,U,_.x,_.y,N.mipmaps[0].width,N.mipmaps[0].height,St,N.mipmaps[0].data):z.texSubImage2D(3553,U,_.x,_.y,St,Ct,N.image),U===0&&I.generateMipmaps&&z.generateMipmap(3553),vt.unbindTexture()},this.initTexture=function(_){W.setTexture2D(_,0),vt.unbindTexture()},this.resetState=function(){vt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function $a(e){Dr.call(this,e)}$a.prototype=Object.assign(Object.create(Dr.prototype),{constructor:$a,isWebGL1Renderer:!0});class Ka{constructor(t,n,i){Object.defineProperty(this,"isFog",{value:!0}),this.name="",this.color=new ct(t),this.near=n!==void 0?n:1,this.far=i!==void 0?i:1e3}clone(){return new Ka(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class om extends ft{constructor(){super();Object.defineProperty(this,"isScene",{value:!0}),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.background!==null&&(n.object.background=this.background.toJSON(t)),this.environment!==null&&(n.object.environment=this.environment.toJSON(t)),this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}function ye(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=bt.generateUUID()}Object.defineProperty(ye.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(ye.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this},copyAt:function(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this},set:function(e,t=0){return this.array.set(e,t),this},clone:function(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bt.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new ye(t,this.stride);return n.setUsage(this.usage),n},onUpload:function(e){return this.onUploadCallback=e,this},toJSON:function(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bt.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const Tn=new S;function An(e,t,n,i){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}Object.defineProperties(An.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(e){this.data.needsUpdate=e}}});Object.assign(An.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(e){for(let t=0,n=this.data.count;t<n;t++)Tn.x=this.getX(t),Tn.y=this.getY(t),Tn.z=this.getZ(t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this},setX:function(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this},setY:function(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this},setZ:function(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this},setW:function(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this},getX:function(e){return this.data.array[e*this.data.stride+this.offset]},getY:function(e){return this.data.array[e*this.data.stride+this.offset+1]},getZ:function(e){return this.data.array[e*this.data.stride+this.offset+2]},getW:function(e){return this.data.array[e*this.data.stride+this.offset+3]},setXY:function(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this},clone:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new An(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function Ln(e){pt.call(this),this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}Ln.prototype=Object.create(pt.prototype);Ln.prototype.constructor=Ln;Ln.prototype.isSpriteMaterial=!0;Ln.prototype.copy=function(e){return pt.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this};let si;const Wi=new S,oi=new S,ai=new S,ci=new G,ji=new G,tc=new wt,Nr=new S,qi=new S,Or=new S,ec=new G,Js=new G,nc=new G;function ic(e){if(ft.call(this),this.type="Sprite",si===void 0){si=new Nt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ye(t,5);si.setIndex([0,1,2,0,2,3]),si.setAttribute("position",new An(n,3,0,!1)),si.setAttribute("uv",new An(n,2,3,!1))}this.geometry=si,this.material=e!==void 0?e:new Ln,this.center=new G(.5,.5)}ic.prototype=Object.assign(Object.create(ft.prototype),{constructor:ic,isSprite:!0,raycast:function(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),oi.setFromMatrixScale(this.matrixWorld),tc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ai.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&oi.multiplyScalar(-ai.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;Fr(Nr.set(-.5,-.5,0),ai,s,oi,i,r),Fr(qi.set(.5,-.5,0),ai,s,oi,i,r),Fr(Or.set(.5,.5,0),ai,s,oi,i,r),ec.set(0,0),Js.set(1,0),nc.set(1,1);let o=e.ray.intersectTriangle(Nr,qi,Or,!1,Wi);if(o===null&&(Fr(qi.set(-.5,.5,0),ai,s,oi,i,r),Js.set(0,1),o=e.ray.intersectTriangle(Nr,Or,qi,!1,Wi),o===null))return;const a=e.ray.origin.distanceTo(Wi);a<e.near||a>e.far||t.push({distance:a,point:Wi.clone(),uv:te.getUV(Wi,Nr,qi,Or,ec,Js,nc,new G),face:null,object:this})},copy:function(e){return ft.prototype.copy.call(this,e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}});function Fr(e,t,n,i,r,s){ci.subVectors(e,n).addScalar(.5).multiply(i),r!==void 0?(ji.x=s*ci.x-r*ci.y,ji.y=r*ci.x+s*ci.y):ji.copy(ci),e.copy(t),e.x+=ji.x,e.y+=ji.y,e.applyMatrix4(tc)}const Br=new S,rc=new S;function Qs(){ft.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}Qs.prototype=Object.assign(Object.create(ft.prototype),{constructor:Qs,isLOD:!0,copy:function(e){ft.prototype.copy.call(this,e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=e.autoUpdate,this},addLevel:function(e,t=0){t=Math.abs(t);const n=this.levels;let i;for(i=0;i<n.length&&!(t<n[i].distance);i++);return n.splice(i,0,{distance:t,object:e}),this.add(e),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object}return null},raycast:function(e,t){if(this.levels.length>0){Br.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Br);this.getObjectForDistance(i).raycast(e,t)}},update:function(e){const t=this.levels;if(t.length>1){Br.setFromMatrixPosition(e.matrixWorld),rc.setFromMatrixPosition(this.matrixWorld);const n=Br.distanceTo(rc)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r&&n>=t[i].distance;i++)t[i-1].object.visible=!1,t[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}},toJSON:function(e){const t=ft.prototype.toJSON.call(this,e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const s=n[i];t.object.levels.push({object:s.object.uuid,distance:s.distance})}return t}});const sc=new S,oc=new Dt,ac=new Dt,am=new S,cc=new wt;function $s(e,t){e&&e.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),ee.call(this,e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new wt,this.bindMatrixInverse=new wt}$s.prototype=Object.assign(Object.create(ee.prototype),{constructor:$s,isSkinnedMesh:!0,copy:function(e){return ee.prototype.copy.call(this,e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this},bind:function(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){const e=new Dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}},updateMatrixWorld:function(e){ee.prototype.updateMatrixWorld.call(this,e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(e,t){const n=this.skeleton,i=this.geometry;oc.fromBufferAttribute(i.attributes.skinIndex,e),ac.fromBufferAttribute(i.attributes.skinWeight,e),sc.fromBufferAttribute(i.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=ac.getComponent(r);if(s!==0){const o=oc.getComponent(r);cc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(am.copy(sc).applyMatrix4(cc),s)}}return t.applyMatrix4(this.bindMatrixInverse)}});function Ks(){ft.call(this),this.type="Bone"}Ks.prototype=Object.assign(Object.create(ft.prototype),{constructor:Ks,isBone:!0});const lc=new wt,cm=new wt;function to(e=[],t=[]){this.uuid=bt.generateUUID(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}Object.assign(to.prototype,{init:function(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new wt)}},calculateInverses:function(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new wt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}},pose:function(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:cm;lc.multiplyMatrices(o,t[r]),lc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)},clone:function(){return new to(this.bones,this.boneInverses)},getBoneByName:function(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}},dispose:function(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)},fromJSON:function(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Ks),this.bones.push(s),this.boneInverses.push(new wt().fromArray(e.boneInverses[n]))}return this.init(),this},toJSON:function(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}});const hc=new wt,uc=new wt,Ur=[],Xi=new ee;function fc(e,t,n){ee.call(this,e,t),this.instanceMatrix=new gt(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}fc.prototype=Object.assign(Object.create(ee.prototype),{constructor:fc,isInstancedMesh:!0,copy:function(e){return ee.prototype.copy.call(this,e),this.instanceMatrix.copy(e.instanceMatrix),this.count=e.count,this},getColorAt:function(e,t){t.fromArray(this.instanceColor.array,e*3)},getMatrixAt:function(e,t){t.fromArray(this.instanceMatrix.array,e*16)},raycast:function(e,t){const n=this.matrixWorld,i=this.count;if(Xi.geometry=this.geometry,Xi.material=this.material,Xi.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,hc),uc.multiplyMatrices(n,hc),Xi.matrixWorld=uc,Xi.raycast(e,Ur);for(let s=0,o=Ur.length;s<o;s++){const a=Ur[s];a.instanceId=r,a.object=this,t.push(a)}Ur.length=0}},setColorAt:function(e,t){this.instanceColor===null&&(this.instanceColor=new gt(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)},setMatrixAt:function(e,t){t.toArray(this.instanceMatrix.array,e*16)},updateMorphTargets:function(){},dispose:function(){this.dispatchEvent({type:"dispose"})}});function ve(e){pt.call(this),this.type="LineBasicMaterial",this.color=new ct(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}ve.prototype=Object.create(pt.prototype);ve.prototype.constructor=ve;ve.prototype.isLineBasicMaterial=!0;ve.prototype.copy=function(e){return pt.prototype.copy.call(this,e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this};const dc=new S,pc=new S,mc=new wt,zr=new Ii,Hr=new rn;function li(e=new Nt,t=new ve){ft.call(this),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}li.prototype=Object.assign(Object.create(ft.prototype),{constructor:li,isLine:!0,copy:function(e){return ft.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},computeLineDistances:function(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)dc.fromBufferAttribute(t,i-1),pc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=dc.distanceTo(pc);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(e.isGeometry){const t=e.vertices,n=e.lineDistances;n[0]=0;for(let i=1,r=t.length;i<r;i++)n[i]=n[i-1],n[i]+=t[i-1].distanceTo(t[i])}return this},raycast:function(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(i),Hr.radius+=r,e.ray.intersectsSphere(Hr)===!1)return;mc.copy(i).invert(),zr.copy(e.ray).applyMatrix4(mc);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new S,c=new S,l=new S,f=new S,h=this.isLineSegments?2:1;if(n.isBufferGeometry){const d=n.index,p=n.attributes.position;if(d!==null){const y=d.array;for(let v=0,g=y.length-1;v<g;v+=h){const m=y[v],E=y[v+1];if(a.fromBufferAttribute(p,m),c.fromBufferAttribute(p,E),zr.distanceSqToSegment(a,c,f,l)>o)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:l.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else for(let y=0,v=p.count-1;y<v;y+=h){if(a.fromBufferAttribute(p,y),c.fromBufferAttribute(p,y+1),zr.distanceSqToSegment(a,c,f,l)>o)continue;f.applyMatrix4(this.matrixWorld);const m=e.ray.origin.distanceTo(f);m<e.near||m>e.far||t.push({distance:m,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else if(n.isGeometry){const d=n.vertices,u=d.length;for(let p=0;p<u-1;p+=h){if(zr.distanceSqToSegment(d[p],d[p+1],f,l)>o)continue;f.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(f);v<e.near||v>e.far||t.push({distance:v,point:l.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});const Gr=new S,kr=new S;function Vr(e,t){li.call(this,e,t),this.type="LineSegments"}Vr.prototype=Object.assign(Object.create(li.prototype),{constructor:Vr,isLineSegments:!0,computeLineDistances:function(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Gr.fromBufferAttribute(t,i),kr.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Gr.distanceTo(kr);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(e.isGeometry){const t=e.vertices,n=e.lineDistances;for(let i=0,r=t.length;i<r;i+=2)Gr.copy(t[i]),kr.copy(t[i+1]),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Gr.distanceTo(kr)}return this}});function gc(e,t){li.call(this,e,t),this.type="LineLoop"}gc.prototype=Object.assign(Object.create(li.prototype),{constructor:gc,isLineLoop:!0});function Cn(e){pt.call(this),this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}Cn.prototype=Object.create(pt.prototype);Cn.prototype.constructor=Cn;Cn.prototype.isPointsMaterial=!0;Cn.prototype.copy=function(e){return pt.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this};const yc=new wt,eo=new Ii,Wr=new rn,jr=new S;function vc(e=new Nt,t=new Cn){ft.call(this),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}vc.prototype=Object.assign(Object.create(ft.prototype),{constructor:vc,isPoints:!0,copy:function(e){return ft.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},raycast:function(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(i),Wr.radius+=r,e.ray.intersectsSphere(Wr)===!1)return;yc.copy(i).invert(),eo.copy(e.ray).applyMatrix4(yc);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position;if(a!==null){const f=a.array;for(let h=0,d=f.length;h<d;h++){const u=f[h];jr.fromBufferAttribute(l,u),no(jr,u,o,i,e,t,this)}}else for(let f=0,h=l.count;f<h;f++)jr.fromBufferAttribute(l,f),no(jr,f,o,i,e,t,this)}else{const a=n.vertices;for(let c=0,l=a.length;c<l;c++)no(a[c],c,o,i,e,t,this)}},updateMorphTargets:function(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function no(e,t,n,i,r,s,o){const a=eo.distanceSqToPoint(e);if(a<n){const c=new S;eo.closestPointToPoint(e,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}function xc(e,t,n,i,r,s,o,a,c){Ut.call(this,e,t,n,i,r,s,o,a,c),this.format=o!==void 0?o:vn,this.minFilter=s!==void 0?s:Kt,this.magFilter=r!==void 0?r:Kt,this.generateMipmaps=!1;const l=this;function f(){l.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}xc.prototype=Object.assign(Object.create(Ut.prototype),{constructor:xc,clone:function(){return new this.constructor(this.image).copy(this)},isVideoTexture:!0,update:function(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function Yi(e,t,n,i,r,s,o,a,c,l,f,h){Ut.call(this,null,s,o,a,c,l,i,r,f,h),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}Yi.prototype=Object.create(Ut.prototype);Yi.prototype.constructor=Yi;Yi.prototype.isCompressedTexture=!0;function qr(e,t,n,i,r,s,o,a,c){Ut.call(this,e,t,n,i,r,s,o,a,c),this.needsUpdate=!0}qr.prototype=Object.create(Ut.prototype);qr.prototype.constructor=qr;qr.prototype.isCanvasTexture=!0;function Xr(e,t,n,i,r,s,o,a,c,l){if(l=l!==void 0?l:Nn,l!==Nn&&l!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Nn&&(n=cr),n===void 0&&l===Ai&&(n=Ti),Ut.call(this,null,i,r,s,o,a,l,n,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:re,this.minFilter=a!==void 0?a:re,this.flipY=!1,this.generateMipmaps=!1}Xr.prototype=Object.create(Ut.prototype);Xr.prototype.constructor=Xr;Xr.prototype.isDepthTexture=!0;let lm=0;const Ie=new wt,io=new ft,Yr=new S;function xe(){Object.defineProperty(this,"id",{value:lm+=2}),this.uuid=bt.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}xe.prototype=Object.assign(Object.create(Ge.prototype),{constructor:xe,isGeometry:!0,applyMatrix4:function(e){const t=new ce().getNormalMatrix(e);for(let n=0,i=this.vertices.length;n<i;n++)this.vertices[n].applyMatrix4(e);for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];r.normal.applyMatrix3(t).normalize();for(let s=0,o=r.vertexNormals.length;s<o;s++)r.vertexNormals[s].applyMatrix3(t).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(e){return Ie.makeRotationX(e),this.applyMatrix4(Ie),this},rotateY:function(e){return Ie.makeRotationY(e),this.applyMatrix4(Ie),this},rotateZ:function(e){return Ie.makeRotationZ(e),this.applyMatrix4(Ie),this},translate:function(e,t,n){return Ie.makeTranslation(e,t,n),this.applyMatrix4(Ie),this},scale:function(e,t,n){return Ie.makeScale(e,t,n),this.applyMatrix4(Ie),this},lookAt:function(e){return io.lookAt(e),io.updateMatrix(),this.applyMatrix4(io.matrix),this},fromBufferGeometry:function(e){const t=this,n=e.index!==null?e.index:void 0,i=e.attributes;if(i.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;const r=i.position,s=i.normal,o=i.color,a=i.uv,c=i.uv2;c!==void 0&&(this.faceVertexUvs[1]=[]);for(let h=0;h<r.count;h++)t.vertices.push(new S().fromBufferAttribute(r,h)),o!==void 0&&t.colors.push(new ct().fromBufferAttribute(o,h));function l(h,d,u,p){const y=o===void 0?[]:[t.colors[h].clone(),t.colors[d].clone(),t.colors[u].clone()],v=s===void 0?[]:[new S().fromBufferAttribute(s,h),new S().fromBufferAttribute(s,d),new S().fromBufferAttribute(s,u)],g=new Os(h,d,u,v,y,p);t.faces.push(g),a!==void 0&&t.faceVertexUvs[0].push([new G().fromBufferAttribute(a,h),new G().fromBufferAttribute(a,d),new G().fromBufferAttribute(a,u)]),c!==void 0&&t.faceVertexUvs[1].push([new G().fromBufferAttribute(c,h),new G().fromBufferAttribute(c,d),new G().fromBufferAttribute(c,u)])}const f=e.groups;if(f.length>0)for(let h=0;h<f.length;h++){const d=f[h],u=d.start,p=d.count;for(let y=u,v=u+p;y<v;y+=3)n!==void 0?l(n.getX(y),n.getX(y+1),n.getX(y+2),d.materialIndex):l(y,y+1,y+2,d.materialIndex)}else if(n!==void 0)for(let h=0;h<n.count;h+=3)l(n.getX(h),n.getX(h+1),n.getX(h+2));else for(let h=0;h<r.count;h+=3)l(h,h+1,h+2);return this.computeFaceNormals(),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this},normalize:function(){this.computeBoundingSphere();const e=this.boundingSphere.center,t=this.boundingSphere.radius,n=t===0?1:1/t,i=new wt;return i.set(n,0,0,-n*e.x,0,n,0,-n*e.y,0,0,n,-n*e.z,0,0,0,1),this.applyMatrix4(i),this},computeFaceNormals:function(){const e=new S,t=new S;for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=this.vertices[r.a],o=this.vertices[r.b],a=this.vertices[r.c];e.subVectors(a,o),t.subVectors(s,o),e.cross(t),e.normalize(),r.normal.copy(e)}},computeVertexNormals:function(e=!0){const t=new Array(this.vertices.length);for(let n=0,i=this.vertices.length;n<i;n++)t[n]=new S;if(e){const n=new S,i=new S;for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=this.vertices[o.a],c=this.vertices[o.b],l=this.vertices[o.c];n.subVectors(l,c),i.subVectors(a,c),n.cross(i),t[o.a].add(n),t[o.b].add(n),t[o.c].add(n)}}else{this.computeFaceNormals();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];t[r.a].add(r.normal),t[r.b].add(r.normal),t[r.c].add(r.normal)}}for(let n=0,i=this.vertices.length;n<i;n++)t[n].normalize();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=r.vertexNormals;s.length===3?(s[0].copy(t[r.a]),s[1].copy(t[r.b]),s[2].copy(t[r.c])):(s[0]=t[r.a].clone(),s[1]=t[r.b].clone(),s[2]=t[r.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let e=0,t=this.faces.length;e<t;e++){const n=this.faces[e],i=n.vertexNormals;i.length===3?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let t=0,n=this.faces.length;t<n;t++){const i=this.faces[t];i.__originalFaceNormal?i.__originalFaceNormal.copy(i.normal):i.__originalFaceNormal=i.normal.clone(),i.__originalVertexNormals||(i.__originalVertexNormals=[]);for(let r=0,s=i.vertexNormals.length;r<s;r++)i.__originalVertexNormals[r]?i.__originalVertexNormals[r].copy(i.vertexNormals[r]):i.__originalVertexNormals[r]=i.vertexNormals[r].clone()}const e=new xe;e.faces=this.faces;for(let t=0,n=this.morphTargets.length;t<n;t++){if(!this.morphNormals[t]){this.morphNormals[t]={},this.morphNormals[t].faceNormals=[],this.morphNormals[t].vertexNormals=[];const r=this.morphNormals[t].faceNormals,s=this.morphNormals[t].vertexNormals;for(let o=0,a=this.faces.length;o<a;o++){const c=new S,l={a:new S,b:new S,c:new S};r.push(c),s.push(l)}}const i=this.morphNormals[t];e.vertices=this.morphTargets[t].vertices,e.computeFaceNormals(),e.computeVertexNormals();for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=i.faceNormals[r],c=i.vertexNormals[r];a.copy(o.normal),c.a.copy(o.vertexNormals[0]),c.b.copy(o.vertexNormals[1]),c.c.copy(o.vertexNormals[2])}}for(let t=0,n=this.faces.length;t<n;t++){const i=this.faces[t];i.normal=i.__originalFaceNormal,i.vertexNormals=i.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new tn),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new rn),this.boundingSphere.setFromPoints(this.vertices)},merge:function(e,t,n=0){if(!(e&&e.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",e);return}let i;const r=this.vertices.length,s=this.vertices,o=e.vertices,a=this.faces,c=e.faces,l=this.colors,f=e.colors;t!==void 0&&(i=new ce().getNormalMatrix(t));for(let h=0,d=o.length;h<d;h++){const p=o[h].clone();t!==void 0&&p.applyMatrix4(t),s.push(p)}for(let h=0,d=f.length;h<d;h++)l.push(f[h].clone());for(let h=0,d=c.length;h<d;h++){const u=c[h];let p,y;const v=u.vertexNormals,g=u.vertexColors,m=new Os(u.a+r,u.b+r,u.c+r);m.normal.copy(u.normal),i!==void 0&&m.normal.applyMatrix3(i).normalize();for(let E=0,T=v.length;E<T;E++)p=v[E].clone(),i!==void 0&&p.applyMatrix3(i).normalize(),m.vertexNormals.push(p);m.color.copy(u.color);for(let E=0,T=g.length;E<T;E++)y=g[E],m.vertexColors.push(y.clone());m.materialIndex=u.materialIndex+n,a.push(m)}for(let h=0,d=e.faceVertexUvs.length;h<d;h++){const u=e.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let p=0,y=u.length;p<y;p++){const v=u[p],g=[];for(let m=0,E=v.length;m<E;m++)g.push(v[m].clone());this.faceVertexUvs[h].push(g)}}},mergeMesh:function(e){if(!(e&&e.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",e);return}e.matrixAutoUpdate&&e.updateMatrix(),this.merge(e.geometry,e.matrix)},mergeVertices:function(e=4){const t={},n=[],i=[],r=Math.pow(10,e);for(let a=0,c=this.vertices.length;a<c;a++){const l=this.vertices[a],f=Math.round(l.x*r)+"_"+Math.round(l.y*r)+"_"+Math.round(l.z*r);t[f]===void 0?(t[f]=a,n.push(this.vertices[a]),i[a]=n.length-1):i[a]=i[t[f]]}const s=[];for(let a=0,c=this.faces.length;a<c;a++){const l=this.faces[a];l.a=i[l.a],l.b=i[l.b],l.c=i[l.c];const f=[l.a,l.b,l.c];for(let h=0;h<3;h++)if(f[h]===f[(h+1)%3]){s.push(a);break}}for(let a=s.length-1;a>=0;a--){const c=s[a];this.faces.splice(c,1);for(let l=0,f=this.faceVertexUvs.length;l<f;l++)this.faceVertexUvs[l].splice(c,1)}const o=this.vertices.length-n.length;return this.vertices=n,o},setFromPoints:function(e){this.vertices=[];for(let t=0,n=e.length;t<n;t++){const i=e[t];this.vertices.push(new S(i.x,i.y,i.z||0))}return this},sortFacesByMaterialIndex:function(){const e=this.faces,t=e.length;for(let a=0;a<t;a++)e[a]._id=a;function n(a,c){return a.materialIndex-c.materialIndex}e.sort(n);const i=this.faceVertexUvs[0],r=this.faceVertexUvs[1];let s,o;i&&i.length===t&&(s=[]),r&&r.length===t&&(o=[]);for(let a=0;a<t;a++){const c=e[a]._id;s&&s.push(i[c]),o&&o.push(r[c])}s&&(this.faceVertexUvs[0]=s),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){const e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.parameters!==void 0){const u=this.parameters;for(const p in u)u[p]!==void 0&&(e[p]=u[p]);return e}const t=[];for(let u=0;u<this.vertices.length;u++){const p=this.vertices[u];t.push(p.x,p.y,p.z)}const n=[],i=[],r={},s=[],o={},a=[],c={};for(let u=0;u<this.faces.length;u++){const p=this.faces[u],y=!0,v=!1,g=this.faceVertexUvs[0][u]!==void 0,m=p.normal.length()>0,E=p.vertexNormals.length>0,T=p.color.r!==1||p.color.g!==1||p.color.b!==1,w=p.vertexColors.length>0;let x=0;if(x=l(x,0,0),x=l(x,1,y),x=l(x,2,v),x=l(x,3,g),x=l(x,4,m),x=l(x,5,E),x=l(x,6,T),x=l(x,7,w),n.push(x),n.push(p.a,p.b,p.c),n.push(p.materialIndex),g){const A=this.faceVertexUvs[0][u];n.push(d(A[0]),d(A[1]),d(A[2]))}if(m&&n.push(f(p.normal)),E){const A=p.vertexNormals;n.push(f(A[0]),f(A[1]),f(A[2]))}if(T&&n.push(h(p.color)),w){const A=p.vertexColors;n.push(h(A[0]),h(A[1]),h(A[2]))}}function l(u,p,y){return y?u|1<<p:u&~(1<<p)}function f(u){const p=u.x.toString()+u.y.toString()+u.z.toString();return r[p]!==void 0||(r[p]=i.length/3,i.push(u.x,u.y,u.z)),r[p]}function h(u){const p=u.r.toString()+u.g.toString()+u.b.toString();return o[p]!==void 0||(o[p]=s.length,s.push(u.getHex())),o[p]}function d(u){const p=u.x.toString()+u.y.toString();return c[p]!==void 0||(c[p]=a.length/2,a.push(u.x,u.y)),c[p]}return e.data={},e.data.vertices=t,e.data.normals=i,s.length>0&&(e.data.colors=s),a.length>0&&(e.data.uvs=[a]),e.data.faces=n,e},clone:function(){return new xe().copy(this)},copy:function(e){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=e.name;const t=e.vertices;for(let h=0,d=t.length;h<d;h++)this.vertices.push(t[h].clone());const n=e.colors;for(let h=0,d=n.length;h<d;h++)this.colors.push(n[h].clone());const i=e.faces;for(let h=0,d=i.length;h<d;h++)this.faces.push(i[h].clone());for(let h=0,d=e.faceVertexUvs.length;h<d;h++){const u=e.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let p=0,y=u.length;p<y;p++){const v=u[p],g=[];for(let m=0,E=v.length;m<E;m++){const T=v[m];g.push(T.clone())}this.faceVertexUvs[h].push(g)}}const r=e.morphTargets;for(let h=0,d=r.length;h<d;h++){const u={};if(u.name=r[h].name,r[h].vertices!==void 0){u.vertices=[];for(let p=0,y=r[h].vertices.length;p<y;p++)u.vertices.push(r[h].vertices[p].clone())}if(r[h].normals!==void 0){u.normals=[];for(let p=0,y=r[h].normals.length;p<y;p++)u.normals.push(r[h].normals[p].clone())}this.morphTargets.push(u)}const s=e.morphNormals;for(let h=0,d=s.length;h<d;h++){const u={};if(s[h].vertexNormals!==void 0){u.vertexNormals=[];for(let p=0,y=s[h].vertexNormals.length;p<y;p++){const v=s[h].vertexNormals[p],g={};g.a=v.a.clone(),g.b=v.b.clone(),g.c=v.c.clone(),u.vertexNormals.push(g)}}if(s[h].faceNormals!==void 0){u.faceNormals=[];for(let p=0,y=s[h].faceNormals.length;p<y;p++)u.faceNormals.push(s[h].faceNormals[p].clone())}this.morphNormals.push(u)}const o=e.skinWeights;for(let h=0,d=o.length;h<d;h++)this.skinWeights.push(o[h].clone());const a=e.skinIndices;for(let h=0,d=a.length;h<d;h++)this.skinIndices.push(a[h].clone());const c=e.lineDistances;for(let h=0,d=c.length;h<d;h++)this.lineDistances.push(c[h]);const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.elementsNeedUpdate=e.elementsNeedUpdate,this.verticesNeedUpdate=e.verticesNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.lineDistancesNeedUpdate=e.lineDistancesNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});new S;new S;new S;new te;const hm={triangulate:function(e,t,n){n=n||2;const i=t&&t.length,r=i?t[0]*n:e.length;let s=_c(e,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,f,h,d,u;if(i&&(s=mm(e,t,s,n)),e.length>80*n){a=l=e[0],c=f=e[1];for(let p=n;p<r;p+=n)h=e[p],d=e[p+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>f&&(f=d);u=Math.max(l-a,f-c),u=u!==0?1/u:0}return Zi(s,o,n,a,c,u),o}};function _c(e,t,n,i,r){let s,o;if(r===Tm(e,t,n,i)>0)for(s=t;s<n;s+=i)o=wc(s,e[s],e[s+1],o);else for(s=n-i;s>=t;s-=i)o=wc(s,e[s],e[s+1],o);return o&&Zr(o,o.next)&&(Qi(o),o=o.next),o}function dn(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(Zr(n,n.next)||Wt(n.prev,n,n.next)===0)){if(Qi(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function Zi(e,t,n,i,r,s,o){if(!e)return;!o&&s&&_m(e,i,r,s);let a=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,s?fm(e,i,r,s):um(e)){t.push(c.i/n),t.push(e.i/n),t.push(l.i/n),Qi(e),e=l.next,a=l.next;continue}if(e=l,e===a){o?o===1?(e=dm(dn(e),t,n),Zi(e,t,n,i,r,s,2)):o===2&&pm(e,t,n,i,r,s):Zi(dn(e),t,n,i,r,s,1);break}}}function um(e){const t=e.prev,n=e,i=e.next;if(Wt(t,n,i)>=0)return!1;let r=e.next.next;for(;r!==e.prev;){if(hi(t.x,t.y,n.x,n.y,i.x,i.y,r.x,r.y)&&Wt(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function fm(e,t,n,i){const r=e.prev,s=e,o=e.next;if(Wt(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,f=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=ro(a,c,t,n,i),d=ro(l,f,t,n,i);let u=e.prevZ,p=e.nextZ;for(;u&&u.z>=h&&p&&p.z<=d;){if(u!==e.prev&&u!==e.next&&hi(r.x,r.y,s.x,s.y,o.x,o.y,u.x,u.y)&&Wt(u.prev,u,u.next)>=0||(u=u.prevZ,p!==e.prev&&p!==e.next&&hi(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Wt(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;u&&u.z>=h;){if(u!==e.prev&&u!==e.next&&hi(r.x,r.y,s.x,s.y,o.x,o.y,u.x,u.y)&&Wt(u.prev,u,u.next)>=0)return!1;u=u.prevZ}for(;p&&p.z<=d;){if(p!==e.prev&&p!==e.next&&hi(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function dm(e,t,n){let i=e;do{const r=i.prev,s=i.next.next;!Zr(r,s)&&bc(r,i,i.next,s)&&Ji(r,s)&&Ji(s,r)&&(t.push(r.i/n),t.push(i.i/n),t.push(s.i/n),Qi(i),Qi(i.next),i=e=s),i=i.next}while(i!==e);return dn(i)}function pm(e,t,n,i,r,s){let o=e;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&wm(o,a)){let c=Mc(o,a);o=dn(o,o.next),c=dn(c,c.next),Zi(o,t,n,i,r,s),Zi(c,t,n,i,r,s);return}a=a.next}o=o.next}while(o!==e)}function mm(e,t,n,i){const r=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*i,c=s<o-1?t[s+1]*i:e.length,l=_c(e,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(Mm(l));for(r.sort(gm),s=0;s<r.length;s++)ym(r[s],n),n=dn(n,n.next);return n}function gm(e,t){return e.x-t.x}function ym(e,t){if(t=vm(e,t),t){const n=Mc(t,e);dn(t,t.next),dn(n,n.next)}}function vm(e,t){let n=t;const i=e.x,r=e.y;let s=-1/0,o;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const d=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>s){if(s=d,d===i){if(r===n.y)return n;if(r===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!o)return null;if(i===s)return o;const a=o,c=o.x,l=o.y;let f=1/0,h;n=o;do i>=n.x&&n.x>=c&&i!==n.x&&hi(r<l?i:s,r,c,l,r<l?s:i,r,n.x,n.y)&&(h=Math.abs(r-n.y)/(i-n.x),Ji(n,e)&&(h<f||h===f&&(n.x>o.x||n.x===o.x&&xm(o,n)))&&(o=n,f=h)),n=n.next;while(n!==a);return o}function xm(e,t){return Wt(e.prev,e,t.prev)<0&&Wt(t.next,e,e.next)<0}function _m(e,t,n,i){let r=e;do r.z===null&&(r.z=ro(r.x,r.y,t,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,bm(r)}function bm(e){let t,n,i,r,s,o,a,c,l=1;do{for(n=e,e=null,s=null,o=0;n;){for(o++,i=n,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:e=r,r.prevZ=s,s=r;n=i}s.nextZ=null,l*=2}while(o>1);return e}function ro(e,t,n,i,r){return e=32767*(e-n)*r,t=32767*(t-i)*r,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Mm(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function hi(e,t,n,i,r,s,o,a){return(r-o)*(t-a)-(e-o)*(s-a)>=0&&(e-o)*(i-a)-(n-o)*(t-a)>=0&&(n-o)*(s-a)-(r-o)*(i-a)>=0}function wm(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Sm(e,t)&&(Ji(e,t)&&Ji(t,e)&&Em(e,t)&&(Wt(e.prev,e,t.prev)||Wt(e,t.prev,t))||Zr(e,t)&&Wt(e.prev,e,e.next)>0&&Wt(t.prev,t,t.next)>0)}function Wt(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Zr(e,t){return e.x===t.x&&e.y===t.y}function bc(e,t,n,i){const r=Qr(Wt(e,t,n)),s=Qr(Wt(e,t,i)),o=Qr(Wt(n,i,e)),a=Qr(Wt(n,i,t));return!!(r!==s&&o!==a||r===0&&Jr(e,n,t)||s===0&&Jr(e,i,t)||o===0&&Jr(n,e,i)||a===0&&Jr(n,t,i))}function Jr(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Qr(e){return e>0?1:e<0?-1:0}function Sm(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&bc(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Ji(e,t){return Wt(e.prev,e,e.next)<0?Wt(e,t,e.next)>=0&&Wt(e,e.prev,t)>=0:Wt(e,t,e.prev)<0||Wt(e,e.next,t)<0}function Em(e,t){let n=e,i=!1;const r=(e.x+t.x)/2,s=(e.y+t.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function Mc(e,t){const n=new so(e.i,e.x,e.y),i=new so(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function wc(e,t,n,i){const r=new so(e,t,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Qi(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function so(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Tm(e,t,n,i){let r=0;for(let s=t,o=n-i;s<n;s+=i)r+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return r}const pn={area:function(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5},isClockWise:function(e){return pn.area(e)<0},triangulateShape:function(e,t){const n=[],i=[],r=[];Sc(e),Ec(n,e);let s=e.length;t.forEach(Sc);for(let a=0;a<t.length;a++)i.push(s),s+=t[a].length,Ec(n,t[a]);const o=hm.triangulate(n,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function Sc(e){const t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ec(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}class Tc extends Nt{constructor(t,n){super();this.type="ExtrudeBufferGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Pt(r,3)),this.setAttribute("uv",new Pt(s,2)),this.computeVertexNormals();function o(a){const c=[],l=n.curveSegments!==void 0?n.curveSegments:12,f=n.steps!==void 0?n.steps:1;let h=n.depth!==void 0?n.depth:100,d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,u=n.bevelThickness!==void 0?n.bevelThickness:6,p=n.bevelSize!==void 0?n.bevelSize:u-2,y=n.bevelOffset!==void 0?n.bevelOffset:0,v=n.bevelSegments!==void 0?n.bevelSegments:3;const g=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:Am;n.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=n.amount);let E,T=!1,w,x,A,H;g&&(E=g.getSpacedPoints(f),T=!0,d=!1,w=g.computeFrenetFrames(f,!1),x=new S,A=new S,H=new S),d||(v=0,u=0,p=0,y=0);const B=a.extractPoints(l);let et=B.shape;const P=B.holes;if(!pn.isClockWise(et)){et=et.reverse();for(let W=0,Y=P.length;W<Y;W++){const Q=P[W];pn.isClockWise(Q)&&(P[W]=Q.reverse())}}const D=pn.triangulateShape(et,P),R=et;for(let W=0,Y=P.length;W<Y;W++){const Q=P[W];et=et.concat(Q)}function C(W,Y,Q){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().multiplyScalar(Q).add(W)}const O=et.length,V=D.length;function X(W,Y,Q){let ht,nt,M;const b=W.x-Y.x,j=W.y-Y.y,k=Q.x-W.x,L=Q.y-W.y,q=b*b+j*j,tt=b*L-j*k;if(Math.abs(tt)>Number.EPSILON){const at=Math.sqrt(q),Z=Math.sqrt(k*k+L*L),ot=Y.x-j/at,ut=Y.y+b/at,xt=Q.x-L/Z,st=Q.y+k/Z,mt=((xt-ot)*L-(st-ut)*k)/(b*L-j*k);ht=ot+b*mt-W.x,nt=ut+j*mt-W.y;const Vt=ht*ht+nt*nt;if(Vt<=2)return new G(ht,nt);M=Math.sqrt(Vt/2)}else{let at=!1;b>Number.EPSILON?k>Number.EPSILON&&(at=!0):b<-Number.EPSILON?k<-Number.EPSILON&&(at=!0):Math.sign(j)===Math.sign(L)&&(at=!0),at?(ht=-j,nt=b,M=Math.sqrt(q)):(ht=b,nt=j,M=Math.sqrt(q/2))}return new G(ht/M,nt/M)}const K=[];for(let W=0,Y=R.length,Q=Y-1,ht=W+1;W<Y;W++,Q++,ht++)Q===Y&&(Q=0),ht===Y&&(ht=0),K[W]=X(R[W],R[Q],R[ht]);const rt=[];let it,yt=K.concat();for(let W=0,Y=P.length;W<Y;W++){const Q=P[W];it=[];for(let ht=0,nt=Q.length,M=nt-1,b=ht+1;ht<nt;ht++,M++,b++)M===nt&&(M=0),b===nt&&(b=0),it[ht]=X(Q[ht],Q[M],Q[b]);rt.push(it),yt=yt.concat(it)}for(let W=0;W<v;W++){const Y=W/v,Q=u*Math.cos(Y*Math.PI/2),ht=p*Math.sin(Y*Math.PI/2)+y;for(let nt=0,M=R.length;nt<M;nt++){const b=C(R[nt],K[nt],ht);dt(b.x,b.y,-Q)}for(let nt=0,M=P.length;nt<M;nt++){const b=P[nt];it=rt[nt];for(let j=0,k=b.length;j<k;j++){const L=C(b[j],it[j],ht);dt(L.x,L.y,-Q)}}}const Mt=p+y;for(let W=0;W<O;W++){const Y=d?C(et[W],yt[W],Mt):et[W];T?(A.copy(w.normals[0]).multiplyScalar(Y.x),x.copy(w.binormals[0]).multiplyScalar(Y.y),H.copy(E[0]).add(A).add(x),dt(H.x,H.y,H.z)):dt(Y.x,Y.y,0)}for(let W=1;W<=f;W++)for(let Y=0;Y<O;Y++){const Q=d?C(et[Y],yt[Y],Mt):et[Y];T?(A.copy(w.normals[W]).multiplyScalar(Q.x),x.copy(w.binormals[W]).multiplyScalar(Q.y),H.copy(E[W]).add(A).add(x),dt(H.x,H.y,H.z)):dt(Q.x,Q.y,h/f*W)}for(let W=v-1;W>=0;W--){const Y=W/v,Q=u*Math.cos(Y*Math.PI/2),ht=p*Math.sin(Y*Math.PI/2)+y;for(let nt=0,M=R.length;nt<M;nt++){const b=C(R[nt],K[nt],ht);dt(b.x,b.y,h+Q)}for(let nt=0,M=P.length;nt<M;nt++){const b=P[nt];it=rt[nt];for(let j=0,k=b.length;j<k;j++){const L=C(b[j],it[j],ht);T?dt(L.x,L.y+E[f-1].y,E[f-1].x+Q):dt(L.x,L.y,h+Q)}}}kt(),z();function kt(){const W=r.length/3;if(d){let Y=0,Q=O*Y;for(let ht=0;ht<V;ht++){const nt=D[ht];Rt(nt[2]+Q,nt[1]+Q,nt[0]+Q)}Y=f+v*2,Q=O*Y;for(let ht=0;ht<V;ht++){const nt=D[ht];Rt(nt[0]+Q,nt[1]+Q,nt[2]+Q)}}else{for(let Y=0;Y<V;Y++){const Q=D[Y];Rt(Q[2],Q[1],Q[0])}for(let Y=0;Y<V;Y++){const Q=D[Y];Rt(Q[0]+O*f,Q[1]+O*f,Q[2]+O*f)}}i.addGroup(W,r.length/3-W,0)}function z(){const W=r.length/3;let Y=0;$t(R,Y),Y+=R.length;for(let Q=0,ht=P.length;Q<ht;Q++){const nt=P[Q];$t(nt,Y),Y+=nt.length}i.addGroup(W,r.length/3-W,1)}function $t(W,Y){let Q=W.length;for(;--Q>=0;){const ht=Q;let nt=Q-1;nt<0&&(nt=W.length-1);for(let M=0,b=f+v*2;M<b;M++){const j=O*M,k=O*(M+1),L=Y+ht+j,q=Y+nt+j,tt=Y+nt+k,at=Y+ht+k;vt(L,q,tt,at)}}}function dt(W,Y,Q){c.push(W),c.push(Y),c.push(Q)}function Rt(W,Y,Q){It(W),It(Y),It(Q);const ht=r.length/3,nt=m.generateTopUV(i,r,ht-3,ht-2,ht-1);Tt(nt[0]),Tt(nt[1]),Tt(nt[2])}function vt(W,Y,Q,ht){It(W),It(Y),It(ht),It(Y),It(Q),It(ht);const nt=r.length/3,M=m.generateSideWallUV(i,r,nt-6,nt-3,nt-2,nt-1);Tt(M[0]),Tt(M[1]),Tt(M[3]),Tt(M[1]),Tt(M[2]),Tt(M[3])}function It(W){r.push(c[W*3+0]),r.push(c[W*3+1]),r.push(c[W*3+2])}function Tt(W){s.push(W.x),s.push(W.y)}}}toJSON(){const t=Nt.prototype.toJSON.call(this),n=this.parameters.shapes,i=this.parameters.options;return Lm(n,i,t)}}const Am={generateTopUV:function(e,t,n,i,r){const s=t[n*3],o=t[n*3+1],a=t[i*3],c=t[i*3+1],l=t[r*3],f=t[r*3+1];return[new G(s,o),new G(a,c),new G(l,f)]},generateSideWallUV:function(e,t,n,i,r,s){const o=t[n*3],a=t[n*3+1],c=t[n*3+2],l=t[i*3],f=t[i*3+1],h=t[i*3+2],d=t[r*3],u=t[r*3+1],p=t[r*3+2],y=t[s*3],v=t[s*3+1],g=t[s*3+2];return Math.abs(a-f)<.01?[new G(o,1-c),new G(l,1-h),new G(d,1-p),new G(y,1-g)]:[new G(a,1-c),new G(f,1-h),new G(u,1-p),new G(v,1-g)]}};function Lm(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){const s=e[i];n.shapes.push(s.uuid)}else n.shapes.push(e.uuid);return t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class Cm extends xe{constructor(t,n){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},this.fromBufferGeometry(new Tc(t,n)),this.mergeVertices()}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return Rm(n,i,t)}}function Rm(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){const s=e[i];n.shapes.push(s.uuid)}else n.shapes.push(e.uuid);return t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}function $r(e,t,n){Nt.call(this),this.type="ParametricBufferGeometry",this.parameters={func:e,slices:t,stacks:n};const i=[],r=[],s=[],o=[],a=1e-5,c=new S,l=new S,f=new S,h=new S,d=new S;e.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const u=t+1;for(let p=0;p<=n;p++){const y=p/n;for(let v=0;v<=t;v++){const g=v/t;e(g,y,l),r.push(l.x,l.y,l.z),g-a>=0?(e(g-a,y,f),h.subVectors(l,f)):(e(g+a,y,f),h.subVectors(f,l)),y-a>=0?(e(g,y-a,f),d.subVectors(l,f)):(e(g,y+a,f),d.subVectors(f,l)),c.crossVectors(h,d).normalize(),s.push(c.x,c.y,c.z),o.push(g,y)}}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const v=p*u+y,g=p*u+y+1,m=(p+1)*u+y+1,E=(p+1)*u+y;i.push(v,g,E),i.push(g,m,E)}this.setIndex(i),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(s,3)),this.setAttribute("uv",new Pt(o,2))}$r.prototype=Object.create(Nt.prototype);$r.prototype.constructor=$r;function oo(e,t,n){xe.call(this),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n},this.fromBufferGeometry(new $r(e,t,n)),this.mergeVertices()}oo.prototype=Object.create(xe.prototype);oo.prototype.constructor=oo;class mg extends xe{constructor(t,n,i,r){super();this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r},this.fromBufferGeometry(new La(t,n,i,r)),this.mergeVertices()}}class Pm extends Nt{constructor(t,n=12){super();this.type="ShapeBufferGeometry",this.parameters={shapes:t,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let f=0;f<t.length;f++)l(t[f]),this.addGroup(a,c,f),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(s,3)),this.setAttribute("uv",new Pt(o,2));function l(f){const h=r.length/3,d=f.extractPoints(n);let u=d.shape;const p=d.holes;pn.isClockWise(u)===!1&&(u=u.reverse());for(let v=0,g=p.length;v<g;v++){const m=p[v];pn.isClockWise(m)===!0&&(p[v]=m.reverse())}const y=pn.triangulateShape(u,p);for(let v=0,g=p.length;v<g;v++){const m=p[v];u=u.concat(m)}for(let v=0,g=u.length;v<g;v++){const m=u[v];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let v=0,g=y.length;v<g;v++){const m=y[v],E=m[0]+h,T=m[1]+h,w=m[2]+h;i.push(E,T,w),c+=3}}}toJSON(){const t=Nt.prototype.toJSON.call(this),n=this.parameters.shapes;return Im(n,t)}}function Im(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){const r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}class Dm extends xe{constructor(t,n){super();this.type="ShapeGeometry",typeof n=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),n=n.curveSegments),this.parameters={shapes:t,curveSegments:n},this.fromBufferGeometry(new Pm(t,n)),this.mergeVertices()}toJSON(){const t=xe.prototype.toJSON.call(this),n=this.parameters.shapes;return Nm(n,t)}}function Nm(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){const r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}function ui(e){pt.call(this),this.type="ShadowMaterial",this.color=new ct(0),this.transparent=!0,this.setValues(e)}ui.prototype=Object.create(pt.prototype);ui.prototype.constructor=ui;ui.prototype.isShadowMaterial=!0;ui.prototype.copy=function(e){return pt.prototype.copy.call(this,e),this.color.copy(e.color),this};function $i(e){le.call(this,e),this.type="RawShaderMaterial"}$i.prototype=Object.create(le.prototype);$i.prototype.constructor=$i;$i.prototype.isRawShaderMaterial=!0;function Ye(e){pt.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bn,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(e)}Ye.prototype=Object.create(pt.prototype);Ye.prototype.constructor=Ye;Ye.prototype.isMeshStandardMaterial=!0;Ye.prototype.copy=function(e){return pt.prototype.copy.call(this,e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.vertexTangents=e.vertexTangents,this};function Rn(e){Ye.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new G(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=bt.clamp(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}Rn.prototype=Object.create(Ye.prototype);Rn.prototype.constructor=Rn;Rn.prototype.isMeshPhysicalMaterial=!0;Rn.prototype.copy=function(e){return Ye.prototype.copy.call(this,e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new ct).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this};function Pn(e){pt.call(this),this.type="MeshPhongMaterial",this.color=new ct(16777215),this.specular=new ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bn,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Pn.prototype=Object.create(pt.prototype);Pn.prototype.constructor=Pn;Pn.prototype.isMeshPhongMaterial=!0;Pn.prototype.copy=function(e){return pt.prototype.copy.call(this,e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function fi(e){pt.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bn,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}fi.prototype=Object.create(pt.prototype);fi.prototype.constructor=fi;fi.prototype.isMeshToonMaterial=!0;fi.prototype.copy=function(e){return pt.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function di(e){pt.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bn,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}di.prototype=Object.create(pt.prototype);di.prototype.constructor=di;di.prototype.isMeshNormalMaterial=!0;di.prototype.copy=function(e){return pt.prototype.copy.call(this,e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function pi(e){pt.call(this),this.type="MeshLambertMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}pi.prototype=Object.create(pt.prototype);pi.prototype.constructor=pi;pi.prototype.isMeshLambertMaterial=!0;pi.prototype.copy=function(e){return pt.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function mi(e){pt.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ct(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bn,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}mi.prototype=Object.create(pt.prototype);mi.prototype.constructor=mi;mi.prototype.isMeshMatcapMaterial=!0;mi.prototype.copy=function(e){return pt.prototype.copy.call(this,e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function gi(e){ve.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}gi.prototype=Object.create(ve.prototype);gi.prototype.constructor=gi;gi.prototype.isLineDashedMaterial=!0;gi.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this};var Om=Object.freeze({__proto__:null,ShadowMaterial:ui,SpriteMaterial:Ln,RawShaderMaterial:$i,ShaderMaterial:le,PointsMaterial:Cn,MeshPhysicalMaterial:Rn,MeshStandardMaterial:Ye,MeshPhongMaterial:Pn,MeshToonMaterial:fi,MeshNormalMaterial:di,MeshLambertMaterial:pi,MeshDepthMaterial:Sn,MeshDistanceMaterial:En,MeshBasicMaterial:bn,MeshMatcapMaterial:mi,LineDashedMaterial:gi,LineBasicMaterial:ve,Material:pt});const Gt={arraySlice:function(e,t,n){return Gt.isTypedArray(e)?new e.constructor(e.subarray(t,n!==void 0?n:e.length)):e.slice(t,n)},convertArray:function(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)},isTypedArray:function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)},getKeyframeOrder:function(e){function t(r,s){return e[r]-e[s]}const n=e.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(t),i},sortedArray:function(e,t,n){const i=e.length,r=new e.constructor(i);for(let s=0,o=0;o!==i;++s){const a=n[s]*t;for(let c=0;c!==t;++c)r[o++]=e[a+c]}return r},flattenJSON:function(e,t,n,i){let r=1,s=e[0];for(;s!==void 0&&s[i]===void 0;)s=e[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(t.push(s.time),n.push.apply(n,o)),s=e[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(t.push(s.time),o.toArray(n,n.length)),s=e[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(t.push(s.time),n.push(o)),s=e[r++];while(s!==void 0)},subclip:function(e,t,n,i,r=30){const s=e.clone();s.name=t;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],f=l.getValueSize(),h=[],d=[];for(let u=0;u<l.times.length;++u){const p=l.times[u]*r;if(!(p<n||p>=i)){h.push(l.times[u]);for(let y=0;y<f;++y)d.push(l.values[u*f+y])}}h.length!==0&&(l.times=Gt.convertArray(h,l.times.constructor),l.values=Gt.convertArray(d,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(e,t=0,n=e,i=30){i<=0&&(i=30);const r=n.tracks.length,s=t/i;for(let o=0;o<r;++o){const a=n.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=e.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let f=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=h/3);let d=0;const u=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=u/3);const p=a.times.length-1;let y;if(s<=a.times[0]){const g=f,m=h-f;y=Gt.arraySlice(a.values,g,m)}else if(s>=a.times[p]){const g=p*h+f,m=g+h-f;y=Gt.arraySlice(a.values,g,m)}else{const g=a.createInterpolant(),m=f,E=h-f;g.evaluate(s),y=Gt.arraySlice(g.resultBuffer,m,E)}c==="quaternion"&&new ue().fromArray(y).normalize().conjugate().toArray(y);const v=l.times.length;for(let g=0;g<v;++g){const m=g*u+d;if(c==="quaternion")ue.multiplyQuaternionsFlat(l.values,m,y,0,l.values,m);else{const E=u-d*2;for(let T=0;T<E;++T)l.values[m+T]-=y[T]}}}return e.blendMode=ca,e}};function _e(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n}Object.assign(_e.prototype,{evaluate:function(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];t:{e:{let s;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===a)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break n}break t}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(_e.prototype,{beforeStart_:_e.prototype.copySampleValue_,afterEnd_:_e.prototype.copySampleValue_});function ao(e,t,n,i){_e.call(this,e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}ao.prototype=Object.assign(Object.create(_e.prototype),{constructor:ao,DefaultSettings_:{endingStart:On,endingEnd:On},intervalChanged_:function(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case Fn:r=e,o=2*t-n;break;case dr:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Fn:s=e,a=2*n-t;break;case dr:s=1,a=n+i[1]-i[0];break;default:s=e-1,a=t}const c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(a-n),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,c=a-o,l=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,u=(n-t)/(i-t),p=u*u,y=p*u,v=-h*y+2*h*p-h*u,g=(1+h)*y+(-1.5-2*h)*p+(-.5+h)*u+1,m=(-1-d)*y+(1.5+d)*p+.5*u,E=d*y-d*p;for(let T=0;T!==o;++T)r[T]=v*s[l+T]+g*s[c+T]+m*s[a+T]+E*s[f+T];return r}});function Kr(e,t,n,i){_e.call(this,e,t,n,i)}Kr.prototype=Object.assign(Object.create(_e.prototype),{constructor:Kr,interpolate_:function(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,c=a-o,l=(n-t)/(i-t),f=1-l;for(let h=0;h!==o;++h)r[h]=s[c+h]*f+s[a+h]*l;return r}});function co(e,t,n,i){_e.call(this,e,t,n,i)}co.prototype=Object.assign(Object.create(_e.prototype),{constructor:co,interpolate_:function(e){return this.copySampleValue_(e-1)}});function ie(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gt.convertArray(t,this.TimeBufferType),this.values=Gt.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(ie,{toJSON:function(e){const t=e.constructor;let n;if(t.toJSON!==void 0)n=t.toJSON(e);else{n={name:e.name,times:Gt.convertArray(e.times,Array),values:Gt.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}});Object.assign(ie.prototype,{constructor:ie,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:fr,InterpolantFactoryMethodDiscrete:function(e){return new co(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodLinear:function(e){return new Kr(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:function(e){return new ao(this.times,this.values,this.getValueSize(),e)},setInterpolation:function(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case fr:t=this.InterpolantFactoryMethodLinear;break;case ys:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return fr;case this.InterpolantFactoryMethodSmooth:return ys}},getValueSize:function(){return this.values.length/this.times.length},shift:function(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this},scale:function(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this},trim:function(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=Gt.arraySlice(n,r,s),this.values=Gt.arraySlice(this.values,r*o,s*o)}return this},validate:function(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(s!==null&&s>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,s),e=!1;break}s=a}if(i!==void 0&&Gt.isTypedArray(i))for(let o=0,a=i.length;o!==a;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e},optimize:function(){const e=Gt.arraySlice(this.times),t=Gt.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===ys,r=e.length-1;let s=1;for(let o=1;o<r;++o){let a=!1;const c=e[o],l=e[o+1];if(c!==l&&(o!==1||c!==c[0]))if(i)a=!0;else{const f=o*n,h=f-n,d=f+n;for(let u=0;u!==n;++u){const p=t[f+u];if(p!==t[h+u]||p!==t[d+u]){a=!0;break}}}if(a){if(o!==s){e[s]=e[o];const f=o*n,h=s*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,a=s*n,c=0;c!==n;++c)t[a+c]=t[o+c];++s}return s!==e.length?(this.times=Gt.arraySlice(e,0,s),this.values=Gt.arraySlice(t,0,s*n)):(this.times=e,this.values=t),this},clone:function(){const e=Gt.arraySlice(this.times,0),t=Gt.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}});function lo(e,t,n){ie.call(this,e,t,n)}lo.prototype=Object.assign(Object.create(ie.prototype),{constructor:lo,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:ur,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function ho(e,t,n,i){ie.call(this,e,t,n,i)}ho.prototype=Object.assign(Object.create(ie.prototype),{constructor:ho,ValueTypeName:"color"});function Ki(e,t,n,i){ie.call(this,e,t,n,i)}Ki.prototype=Object.assign(Object.create(ie.prototype),{constructor:Ki,ValueTypeName:"number"});function uo(e,t,n,i){_e.call(this,e,t,n,i)}uo.prototype=Object.assign(Object.create(_e.prototype),{constructor:uo,interpolate_:function(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(n-t)/(i-t);let c=e*o;for(let l=c+o;c!==l;c+=4)ue.slerpFlat(r,0,s,c-o,s,c,a);return r}});function ts(e,t,n,i){ie.call(this,e,t,n,i)}ts.prototype=Object.assign(Object.create(ie.prototype),{constructor:ts,ValueTypeName:"quaternion",DefaultInterpolation:fr,InterpolantFactoryMethodLinear:function(e){return new uo(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:void 0});function fo(e,t,n,i){ie.call(this,e,t,n,i)}fo.prototype=Object.assign(Object.create(ie.prototype),{constructor:fo,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:ur,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function tr(e,t,n,i){ie.call(this,e,t,n,i)}tr.prototype=Object.assign(Object.create(ie.prototype),{constructor:tr,ValueTypeName:"vector"});function Ae(e,t=-1,n,i=vs){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=bt.generateUUID(),this.duration<0&&this.resetDuration()}function Fm(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ki;case"vector":case"vector2":case"vector3":case"vector4":return tr;case"color":return ho;case"quaternion":return ts;case"bool":case"boolean":return lo;case"string":return fo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function Bm(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Fm(e.type);if(e.times===void 0){const n=[],i=[];Gt.flattenJSON(e.keys,n,i,"value"),e.times=n,e.values=i}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}Object.assign(Ae,{parse:function(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(Bm(n[s]).scale(i));const r=new Ae(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r},toJSON:function(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(ie.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(e,t,n,i){const r=t.length,s=[];for(let o=0;o<r;o++){let a=[],c=[];a.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const l=Gt.getKeyframeOrder(a);a=Gt.sortedArray(a,1,l),c=Gt.sortedArray(c,1,l),!i&&a[0]===0&&(a.push(r),c.push(c[0])),s.push(new Ki(".morphTargetInfluences["+t[o].name+"]",a,c).scale(1/n))}return new Ae(e,-1,s)},findByName:function(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null},CreateClipsFromMorphTargetSequences:function(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){const c=e[o],l=c.name.match(r);if(l&&l.length>1){const f=l[1];let h=i[f];h||(i[f]=h=[]),h.push(c)}}const s=[];for(const o in i)s.push(Ae.CreateFromMorphTargetSequence(o,i[o],t,n));return s},parseAnimation:function(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,u,p){if(d.length!==0){const y=[],v=[];Gt.flattenJSON(d,y,v,u),y.length!==0&&p.push(new f(h,y,v))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let a=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let u;for(u=0;u<h.length;u++)if(h[u].morphTargets)for(let p=0;p<h[u].morphTargets.length;p++)d[h[u].morphTargets[p]]=-1;for(const p in d){const y=[],v=[];for(let g=0;g!==h[u].morphTargets.length;++g){const m=h[u];y.push(m.time),v.push(m.morphTarget===p?1:0)}i.push(new Ki(".morphTargetInfluence["+p+"]",y,v))}a=d.length*(s||1)}else{const d=".bones["+t[f].name+"]";n(tr,d+".position",h,"pos",i),n(ts,d+".quaternion",h,"rot",i),n(tr,d+".scale",h,"scl",i)}}return i.length===0?null:new Ae(r,a,i,o)}});Object.assign(Ae.prototype,{resetDuration:function(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this},trim:function(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this},validate:function(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e},optimize:function(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this},clone:function(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new Ae(this.name,this.duration,e,this.blendMode)},toJSON:function(){return Ae.toJSON(this)}});const yi={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Um(e,t,n){const i=this;let r=!1,s=0,o=0,a;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,f){return c.push(l,f),this},this.removeHandler=function(l){const f=c.indexOf(l);return f!==-1&&c.splice(f,2),this},this.getHandler=function(l){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],u=c[f+1];if(d.global&&(d.lastIndex=0),d.test(l))return u}return null}}const zm=new Um;function Ot(e){this.manager=e!==void 0?e:zm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Ot.prototype,{load:function(){},loadAsync:function(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})},parse:function(){},setCrossOrigin:function(e){return this.crossOrigin=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setPath:function(e){return this.path=e,this},setResourcePath:function(e){return this.resourcePath=e,this},setRequestHeader:function(e){return this.requestHeader=e,this}});const Le={};function Ze(e){Ot.call(this,e)}Ze.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Ze,load:function(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=yi.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;if(Le[e]!==void 0){Le[e].push({onLoad:t,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,a=e.match(o);let c;if(a){const l=a[1],f=!!a[2];let h=a[3];h=decodeURIComponent(h),f&&(h=atob(h));try{let d;const u=(this.responseType||"").toLowerCase();switch(u){case"arraybuffer":case"blob":const p=new Uint8Array(h.length);for(let v=0;v<h.length;v++)p[v]=h.charCodeAt(v);u==="blob"?d=new Blob([p.buffer],{type:l}):d=p.buffer;break;case"document":d=new DOMParser().parseFromString(h,l);break;case"json":d=JSON.parse(h);break;default:d=h;break}setTimeout(function(){t&&t(d),r.manager.itemEnd(e)},0)}catch(d){setTimeout(function(){i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{Le[e]=[],Le[e].push({onLoad:t,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(l){const f=this.response,h=Le[e];if(delete Le[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),yi.add(e,f);for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onLoad&&p.onLoad(f)}r.manager.itemEnd(e)}else{for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onError&&p.onError(l)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(l){const f=Le[e];for(let h=0,d=f.length;h<d;h++){const u=f[h];u.onProgress&&u.onProgress(l)}},!1),c.addEventListener("error",function(l){const f=Le[e];delete Le[e];for(let h=0,d=f.length;h<d;h++){const u=f[h];u.onError&&u.onError(l)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),c.addEventListener("abort",function(l){const f=Le[e];delete Le[e];for(let h=0,d=f.length;h<d;h++){const u=f[h];u.onError&&u.onError(l)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(e),c},setResponseType:function(e){return this.responseType=e,this},setMimeType:function(e){return this.mimeType=e,this}});function Ac(e){Ot.call(this,e)}Ac.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Ac,load:function(e,t,n,i){const r=this,s=new Ze(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)},parse:function(e){const t=[];for(let n=0;n<e.length;n++){const i=Ae.parse(e[n]);t.push(i)}return t}});function Lc(e){Ot.call(this,e)}Lc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Lc,load:function(e,t,n,i){const r=this,s=[],o=new Yi,a=new Ze(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let c=0;function l(f){a.load(e[f],function(h){const d=r.parse(h,!0);s[f]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=Kt),o.image=s,o.format=d.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let f=0,h=e.length;f<h;++f)l(f);else a.load(e,function(f){const h=r.parse(f,!0);if(h.isCubemap){const d=h.mipmaps.length/h.mipmapCount;for(let u=0;u<d;u++){s[u]={mipmaps:[]};for(let p=0;p<h.mipmapCount;p++)s[u].mipmaps.push(h.mipmaps[u*h.mipmapCount+p]),s[u].format=h.format,s[u].width=h.width,s[u].height=h.height}o.image=s}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=Kt),o.format=h.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}});function es(e){Ot.call(this,e)}es.prototype=Object.assign(Object.create(Ot.prototype),{constructor:es,load:function(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=yi.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),yi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(l){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}});function po(e){Ot.call(this,e)}po.prototype=Object.assign(Object.create(Ot.prototype),{constructor:po,load:function(e,t,n,i){const r=new un,s=new es(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function a(c){s.load(e[c],function(l){r.images[c]=l,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)a(c);return r}});function Cc(e){Ot.call(this,e)}Cc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Cc,load:function(e,t,n,i){const r=this,s=new ei,o=new Ze(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(a){const c=r.parse(a);!c||(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:he,s.wrapT=c.wrapT!==void 0?c.wrapT:he,s.magFilter=c.magFilter!==void 0?c.magFilter:Kt,s.minFilter=c.minFilter!==void 0?c.minFilter:Kt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=ar),c.mipmapCount===1&&(s.minFilter=Kt),s.needsUpdate=!0,t&&t(s,c))},n,i),s}});function mo(e){Ot.call(this,e)}mo.prototype=Object.assign(Object.create(Ot.prototype),{constructor:mo,load:function(e,t,n,i){const r=new Ut,s=new es(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o;const a=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;r.format=a?vn:Me,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}});function lt(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(lt.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)},getPoints:function(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t},getSpacedPoints:function(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t},getLength:function(){const e=this.getLengths();return e[e.length-1]},getLengths:function(e){if(e===void 0&&(e=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(e,t){const n=this.getLengths();let i=0;const r=n.length;let s;t?s=t:s=e*n[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===s)return i/(r-1);const l=n[i],h=n[i+1]-l,d=(s-l)/h;return(i+d)/(r-1)},getTangent:function(e,t){const n=1e-4;let i=e-n,r=e+n;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),a=t||(s.isVector2?new G:new S);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)},computeFrenetFrames:function(e,t){const n=new S,i=[],r=[],s=[],o=new S,a=new wt;for(let d=0;d<=e;d++){const u=d/e;i[d]=this.getTangentAt(u,new S),i[d].normalize()}r[0]=new S,s[0]=new S;let c=Number.MAX_VALUE;const l=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);l<=c&&(c=l,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const u=Math.acos(bt.clamp(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(a.makeRotationAxis(o,u))}s[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(bt.clamp(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let u=1;u<=e;u++)r[u].applyMatrix4(a.makeRotationAxis(i[u],d*u)),s[u].crossVectors(i[u],r[u])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this},toJSON:function(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e},fromJSON:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}});function be(e,t,n,i,r,s,o,a){lt.call(this),this.type="EllipseCurve",this.aX=e||0,this.aY=t||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=s||2*Math.PI,this.aClockwise=o||!1,this.aRotation=a||0}be.prototype=Object.create(lt.prototype);be.prototype.constructor=be;be.prototype.isEllipseCurve=!0;be.prototype.getPoint=function(e,t){const n=t||new G,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let a=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=a-this.aX,d=c-this.aY;a=h*l-d*f+this.aX,c=h*f+d*l+this.aY}return n.set(a,c)};be.prototype.copy=function(e){return lt.prototype.copy.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};be.prototype.toJSON=function(){const e=lt.prototype.toJSON.call(this);return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e};be.prototype.fromJSON=function(e){return lt.prototype.fromJSON.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};function er(e,t,n,i,r,s){be.call(this,e,t,n,n,i,r,s),this.type="ArcCurve"}er.prototype=Object.create(be.prototype);er.prototype.constructor=er;er.prototype.isArcCurve=!0;function go(){let e=0,t=0,n=0,i=0;function r(s,o,a,c){e=s,t=a,n=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,f,h){let d=(o-s)/l-(a-s)/(l+f)+(a-o)/f,u=(a-o)/f-(c-o)/(f+h)+(c-a)/h;d*=f,u*=f,r(o,a,d,u)},calc:function(s){const o=s*s,a=o*s;return e+t*s+n*o+i*a}}}const ns=new S,yo=new go,vo=new go,xo=new go;function Ce(e=[],t=!1,n="centripetal",i=.5){lt.call(this),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}Ce.prototype=Object.create(lt.prototype);Ce.prototype.constructor=Ce;Ce.prototype.isCatmullRomCurve3=!0;Ce.prototype.getPoint=function(e,t=new S){const n=t,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),a=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:a===0&&o===r-1&&(o=r-2,a=1);let c,l;this.closed||o>0?c=i[(o-1)%r]:(ns.subVectors(i[0],i[1]).add(i[0]),c=ns);const f=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?l=i[(o+2)%r]:(ns.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=ns),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let u=Math.pow(c.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d),y=Math.pow(h.distanceToSquared(l),d);p<1e-4&&(p=1),u<1e-4&&(u=p),y<1e-4&&(y=p),yo.initNonuniformCatmullRom(c.x,f.x,h.x,l.x,u,p,y),vo.initNonuniformCatmullRom(c.y,f.y,h.y,l.y,u,p,y),xo.initNonuniformCatmullRom(c.z,f.z,h.z,l.z,u,p,y)}else this.curveType==="catmullrom"&&(yo.initCatmullRom(c.x,f.x,h.x,l.x,this.tension),vo.initCatmullRom(c.y,f.y,h.y,l.y,this.tension),xo.initCatmullRom(c.z,f.z,h.z,l.z,this.tension));return n.set(yo.calc(a),vo.calc(a),xo.calc(a)),n};Ce.prototype.copy=function(e){lt.prototype.copy.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};Ce.prototype.toJSON=function(){const e=lt.prototype.toJSON.call(this);e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e};Ce.prototype.fromJSON=function(e){lt.prototype.fromJSON.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};function Rc(e,t,n,i,r){const s=(i-t)*.5,o=(r-n)*.5,a=e*e,c=e*a;return(2*n-2*i+s+o)*c+(-3*n+3*i-2*s-o)*a+s*e+n}function Hm(e,t){const n=1-e;return n*n*t}function Gm(e,t){return 2*(1-e)*e*t}function km(e,t){return e*e*t}function nr(e,t,n,i){return Hm(e,t)+Gm(e,n)+km(e,i)}function Vm(e,t){const n=1-e;return n*n*n*t}function Wm(e,t){const n=1-e;return 3*n*n*e*t}function jm(e,t){return 3*(1-e)*e*e*t}function qm(e,t){return e*e*e*t}function ir(e,t,n,i,r){return Vm(e,t)+Wm(e,n)+jm(e,i)+qm(e,r)}function De(e=new G,t=new G,n=new G,i=new G){lt.call(this),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}De.prototype=Object.create(lt.prototype);De.prototype.constructor=De;De.prototype.isCubicBezierCurve=!0;De.prototype.getPoint=function(e,t=new G){const n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(ir(e,i.x,r.x,s.x,o.x),ir(e,i.y,r.y,s.y,o.y)),n};De.prototype.copy=function(e){return lt.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this};De.prototype.toJSON=function(){const e=lt.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e};De.prototype.fromJSON=function(e){return lt.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function Je(e=new S,t=new S,n=new S,i=new S){lt.call(this),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}Je.prototype=Object.create(lt.prototype);Je.prototype.constructor=Je;Je.prototype.isCubicBezierCurve3=!0;Je.prototype.getPoint=function(e,t=new S){const n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(ir(e,i.x,r.x,s.x,o.x),ir(e,i.y,r.y,s.y,o.y),ir(e,i.z,r.z,s.z,o.z)),n};Je.prototype.copy=function(e){return lt.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this};Je.prototype.toJSON=function(){const e=lt.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e};Je.prototype.fromJSON=function(e){return lt.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function me(e=new G,t=new G){lt.call(this),this.type="LineCurve",this.v1=e,this.v2=t}me.prototype=Object.create(lt.prototype);me.prototype.constructor=me;me.prototype.isLineCurve=!0;me.prototype.getPoint=function(e,t=new G){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n};me.prototype.getPointAt=function(e,t){return this.getPoint(e,t)};me.prototype.getTangent=function(e,t){const n=t||new G;return n.copy(this.v2).sub(this.v1).normalize(),n};me.prototype.copy=function(e){return lt.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this};me.prototype.toJSON=function(){const e=lt.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};me.prototype.fromJSON=function(e){return lt.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function Ne(e=new S,t=new S){lt.call(this),this.type="LineCurve3",this.v1=e,this.v2=t}Ne.prototype=Object.create(lt.prototype);Ne.prototype.constructor=Ne;Ne.prototype.isLineCurve3=!0;Ne.prototype.getPoint=function(e,t=new S){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n};Ne.prototype.getPointAt=function(e,t){return this.getPoint(e,t)};Ne.prototype.copy=function(e){return lt.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this};Ne.prototype.toJSON=function(){const e=lt.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};Ne.prototype.fromJSON=function(e){return lt.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function Oe(e=new G,t=new G,n=new G){lt.call(this),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}Oe.prototype=Object.create(lt.prototype);Oe.prototype.constructor=Oe;Oe.prototype.isQuadraticBezierCurve=!0;Oe.prototype.getPoint=function(e,t=new G){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(nr(e,i.x,r.x,s.x),nr(e,i.y,r.y,s.y)),n};Oe.prototype.copy=function(e){return lt.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this};Oe.prototype.toJSON=function(){const e=lt.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};Oe.prototype.fromJSON=function(e){return lt.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function Qe(e=new S,t=new S,n=new S){lt.call(this),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}Qe.prototype=Object.create(lt.prototype);Qe.prototype.constructor=Qe;Qe.prototype.isQuadraticBezierCurve3=!0;Qe.prototype.getPoint=function(e,t=new S){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(nr(e,i.x,r.x,s.x),nr(e,i.y,r.y,s.y),nr(e,i.z,r.z,s.z)),n};Qe.prototype.copy=function(e){return lt.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this};Qe.prototype.toJSON=function(){const e=lt.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};Qe.prototype.fromJSON=function(e){return lt.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function Fe(e=[]){lt.call(this),this.type="SplineCurve",this.points=e}Fe.prototype=Object.create(lt.prototype);Fe.prototype.constructor=Fe;Fe.prototype.isSplineCurve=!0;Fe.prototype.getPoint=function(e,t=new G){const n=t,i=this.points,r=(i.length-1)*e,s=Math.floor(r),o=r-s,a=i[s===0?s:s-1],c=i[s],l=i[s>i.length-2?i.length-1:s+1],f=i[s>i.length-3?i.length-1:s+2];return n.set(Rc(o,a.x,c.x,l.x,f.x),Rc(o,a.y,c.y,l.y,f.y)),n};Fe.prototype.copy=function(e){lt.prototype.copy.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this};Fe.prototype.toJSON=function(){const e=lt.prototype.toJSON.call(this);e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e};Fe.prototype.fromJSON=function(e){lt.prototype.fromJSON.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new G().fromArray(i))}return this};var Xm=Object.freeze({__proto__:null,ArcCurve:er,CatmullRomCurve3:Ce,CubicBezierCurve:De,CubicBezierCurve3:Je,EllipseCurve:be,LineCurve:me,LineCurve3:Ne,QuadraticBezierCurve:Oe,QuadraticBezierCurve3:Qe,SplineCurve:Fe});function mn(){lt.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}mn.prototype=Object.assign(Object.create(lt.prototype),{constructor:mn,add:function(e){this.curves.push(e)},closePath:function(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new me(t,e))},getPoint:function(e){const t=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=t){const r=n[i]-t,s=this.curves[i],o=s.getLength(),a=o===0?0:1-r/o;return s.getPointAt(a)}i++}return null},getLength:function(){const e=this.getCurveLengths();return e[e.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e},getSpacedPoints:function(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t},getPoints:function(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s&&s.isEllipseCurve?e*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?e*s.points.length:e,a=s.getPoints(o);for(let c=0;c<a.length;c++){const l=a[c];n&&n.equals(l)||(t.push(l),n=l)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t},copy:function(e){lt.prototype.copy.call(this,e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this},toJSON:function(){const e=lt.prototype.toJSON.call(this);e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e},fromJSON:function(e){lt.prototype.fromJSON.call(this,e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Xm[i.type]().fromJSON(i))}return this}});function Be(e){mn.call(this),this.type="Path",this.currentPoint=new G,e&&this.setFromPoints(e)}Be.prototype=Object.assign(Object.create(mn.prototype),{constructor:Be,setFromPoints:function(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this},moveTo:function(e,t){return this.currentPoint.set(e,t),this},lineTo:function(e,t){const n=new me(this.currentPoint.clone(),new G(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this},quadraticCurveTo:function(e,t,n,i){const r=new Oe(this.currentPoint.clone(),new G(e,t),new G(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(e,t,n,i,r,s){const o=new De(this.currentPoint.clone(),new G(e,t),new G(n,i),new G(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this},splineThru:function(e){const t=[this.currentPoint.clone()].concat(e),n=new Fe(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this},arc:function(e,t,n,i,r,s){const o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,n,i,r,s),this},absarc:function(e,t,n,i,r,s){return this.absellipse(e,t,n,n,i,r,s),this},ellipse:function(e,t,n,i,r,s,o,a){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,i,r,s,o,a),this},absellipse:function(e,t,n,i,r,s,o,a){const c=new be(e,t,n,i,r,s,o,a);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const l=c.getPoint(1);return this.currentPoint.copy(l),this},copy:function(e){return mn.prototype.copy.call(this,e),this.currentPoint.copy(e.currentPoint),this},toJSON:function(){const e=mn.prototype.toJSON.call(this);return e.currentPoint=this.currentPoint.toArray(),e},fromJSON:function(e){return mn.prototype.fromJSON.call(this,e),this.currentPoint.fromArray(e.currentPoint),this}});function vi(e){Be.call(this,e),this.uuid=bt.generateUUID(),this.type="Shape",this.holes=[]}vi.prototype=Object.assign(Object.create(Be.prototype),{constructor:vi,getPointsHoles:function(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t},extractPoints:function(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}},copy:function(e){Be.prototype.copy.call(this,e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this},toJSON:function(){const e=Be.prototype.toJSON.call(this);e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e},fromJSON:function(e){Be.prototype.fromJSON.call(this,e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Be().fromJSON(i))}return this}});function Ht(e,t=1){ft.call(this),this.type="Light",this.color=new ct(e),this.intensity=t}Ht.prototype=Object.assign(Object.create(ft.prototype),{constructor:Ht,isLight:!0,copy:function(e){return ft.prototype.copy.call(this,e),this.color.copy(e.color),this.intensity=e.intensity,this},toJSON:function(e){const t=ft.prototype.toJSON.call(this,e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}});function Pc(e,t,n){Ht.call(this,e,n),this.type="HemisphereLight",this.position.copy(ft.DefaultUp),this.updateMatrix(),this.groundColor=new ct(t)}Pc.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Pc,isHemisphereLight:!0,copy:function(e){return Ht.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}});function $e(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new G(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new G(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}Object.assign($e.prototype,{_projScreenMatrix:new wt,_lightPositionWorld:new S,_lookTarget:new S,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(e){const t=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,s=this._lightPositionWorld;s.setFromMatrixPosition(e.matrixWorld),t.position.copy(s),r.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(r),t.updateMatrixWorld(),i.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)},getViewport:function(e){return this._viewports[e]},getFrameExtents:function(){return this._frameExtents},copy:function(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}});function _o(){$e.call(this,new Qt(50,1,.5,500)),this.focus=1}_o.prototype=Object.assign(Object.create($e.prototype),{constructor:_o,isSpotLightShadow:!0,updateMatrices:function(e){const t=this.camera,n=bt.RAD2DEG*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),$e.prototype.updateMatrices.call(this,e)}});function Ic(e,t,n,i,r,s){Ht.call(this,e,t),this.type="SpotLight",this.position.copy(ft.DefaultUp),this.updateMatrix(),this.target=new ft,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=s!==void 0?s:1,this.shadow=new _o}Ic.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Ic,isSpotLight:!0,copy:function(e){return Ht.prototype.copy.call(this,e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function bo(){$e.call(this,new Qt(90,1,.5,500)),this._frameExtents=new G(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}bo.prototype=Object.assign(Object.create($e.prototype),{constructor:bo,isPointLightShadow:!0,updateMatrices:function(e,t=0){const n=this.camera,i=this.matrix,r=this._lightPositionWorld,s=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(e.matrixWorld),n.position.copy(r),s.copy(n.position),s.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(s),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}});function Dc(e,t,n,i){Ht.call(this,e,t),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new bo}Dc.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Dc,isPointLight:!0,copy:function(e){return Ht.prototype.copy.call(this,e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}});function Mo(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){hn.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}Mo.prototype=Object.assign(Object.create(hn.prototype),{constructor:Mo,isOrthographicCamera:!0,copy:function(e,t){return hn.prototype.copy.call(this,e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this},setViewOffset:function(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=l*this.view.offsetY,a=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(e){const t=ft.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}});function wo(){$e.call(this,new Mo(-5,5,5,-5,.5,500))}wo.prototype=Object.assign(Object.create($e.prototype),{constructor:wo,isDirectionalLightShadow:!0,updateMatrices:function(e){$e.prototype.updateMatrices.call(this,e)}});function Nc(e,t){Ht.call(this,e,t),this.type="DirectionalLight",this.position.copy(ft.DefaultUp),this.updateMatrix(),this.target=new ft,this.shadow=new wo}Nc.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Nc,isDirectionalLight:!0,copy:function(e){return Ht.prototype.copy.call(this,e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function Oc(e,t){Ht.call(this,e,t),this.type="AmbientLight"}Oc.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Oc,isAmbientLight:!0});function Fc(e,t,n,i){Ht.call(this,e,t),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}Fc.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Fc,isRectAreaLight:!0,copy:function(e){return Ht.prototype.copy.call(this,e),this.width=e.width,this.height=e.height,this},toJSON:function(e){const t=Ht.prototype.toJSON.call(this,e);return t.object.width=this.width,t.object.height=this.height,t}});class Ym{constructor(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new S)}set(t){for(let n=0;n<9;n++)this.coefficients[n].copy(t[n]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,n){const i=t.x,r=t.y,s=t.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.282095),n.addScaledVector(o[1],.488603*r),n.addScaledVector(o[2],.488603*s),n.addScaledVector(o[3],.488603*i),n.addScaledVector(o[4],1.092548*(i*r)),n.addScaledVector(o[5],1.092548*(r*s)),n.addScaledVector(o[6],.315392*(3*s*s-1)),n.addScaledVector(o[7],1.092548*(i*s)),n.addScaledVector(o[8],.546274*(i*i-r*r)),n}getIrradianceAt(t,n){const i=t.x,r=t.y,s=t.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.886227),n.addScaledVector(o[1],2*.511664*r),n.addScaledVector(o[2],2*.511664*s),n.addScaledVector(o[3],2*.511664*i),n.addScaledVector(o[4],2*.429043*i*r),n.addScaledVector(o[5],2*.429043*r*s),n.addScaledVector(o[6],.743125*s*s-.247708),n.addScaledVector(o[7],2*.429043*i*s),n.addScaledVector(o[8],.429043*(i*i-r*r)),n}add(t){for(let n=0;n<9;n++)this.coefficients[n].add(t.coefficients[n]);return this}addScaledSH(t,n){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(t.coefficients[i],n);return this}scale(t){for(let n=0;n<9;n++)this.coefficients[n].multiplyScalar(t);return this}lerp(t,n){for(let i=0;i<9;i++)this.coefficients[i].lerp(t.coefficients[i],n);return this}equals(t){for(let n=0;n<9;n++)if(!this.coefficients[n].equals(t.coefficients[n]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(t,n+r*3);return this}toArray(t=[],n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(t,n+r*3);return t}static getBasisAt(t,n){const i=t.x,r=t.y,s=t.z;n[0]=.282095,n[1]=.488603*r,n[2]=.488603*s,n[3]=.488603*i,n[4]=1.092548*i*r,n[5]=1.092548*r*s,n[6]=.315392*(3*s*s-1),n[7]=1.092548*i*s,n[8]=.546274*(i*i-r*r)}}function Ue(e,t){Ht.call(this,void 0,t),this.type="LightProbe",this.sh=e!==void 0?e:new Ym}Ue.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Ue,isLightProbe:!0,copy:function(e){return Ht.prototype.copy.call(this,e),this.sh.copy(e.sh),this},fromJSON:function(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this},toJSON:function(e){const t=Ht.prototype.toJSON.call(this,e);return t.object.sh=this.sh.toArray(),t}});function Bc(e){Ot.call(this,e),this.textures={}}Bc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Bc,load:function(e,t,n,i){const r=this,s=new Ze(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)},parse:function(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=new Om[e.type];if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=new ct().setHex(e.sheen)),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.skinning!==void 0&&(i.skinning=e.skinning),e.morphTargets!==void 0&&(i.morphTargets=e.morphTargets),e.morphNormals!==void 0&&(i.morphNormals=e.morphNormals),e.dithering!==void 0&&(i.dithering=e.dithering),e.vertexTangents!==void 0&&(i.vertexTangents=e.vertexTangents),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const s=e.uniforms[r];switch(i.uniforms[r]={},s.type){case"t":i.uniforms[r].value=n(s.value);break;case"c":i.uniforms[r].value=new ct().setHex(s.value);break;case"v2":i.uniforms[r].value=new G().fromArray(s.value);break;case"v3":i.uniforms[r].value=new S().fromArray(s.value);break;case"v4":i.uniforms[r].value=new Dt().fromArray(s.value);break;case"m3":i.uniforms[r].value=new ce().fromArray(s.value);break;case"m4":i.uniforms[r].value=new wt().fromArray(s.value);break;default:i.uniforms[r].value=s.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.shading!==void 0&&(i.flatShading=e.shading===1),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new G().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new G().fromArray(e.clearcoatNormalScale)),e.transmission!==void 0&&(i.transmission=e.transmission),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),i},setTextures:function(e){return this.textures=e,this}});const Zm={decodeText:function(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}},extractUrlBase:function(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}};function is(){Nt.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}is.prototype=Object.assign(Object.create(Nt.prototype),{constructor:is,isInstancedBufferGeometry:!0,copy:function(e){return Nt.prototype.copy.call(this,e),this.instanceCount=e.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const e=Nt.prototype.toJSON.call(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}});function So(e,t,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),gt.call(this,e,t,n),this.meshPerAttribute=i||1}So.prototype=Object.assign(Object.create(gt.prototype),{constructor:So,isInstancedBufferAttribute:!0,copy:function(e){return gt.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},toJSON:function(){const e=gt.prototype.toJSON.call(this);return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}});function Uc(e){Ot.call(this,e)}Uc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Uc,load:function(e,t,n,i){const r=this,s=new Ze(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)},parse:function(e){const t={},n={};function i(d,u){if(t[u]!==void 0)return t[u];const y=d.interleavedBuffers[u],v=r(d,y.buffer),g=Er(y.type,v),m=new ye(g,y.stride);return m.uuid=y.uuid,t[u]=m,m}function r(d,u){if(n[u]!==void 0)return n[u];const y=d.arrayBuffers[u],v=new Uint32Array(y).buffer;return n[u]=v,v}const s=e.isInstancedBufferGeometry?new is:new Nt,o=e.data.index;if(o!==void 0){const d=Er(o.type,o.array);s.setIndex(new gt(d,1))}const a=e.data.attributes;for(const d in a){const u=a[d];let p;if(u.isInterleavedBufferAttribute){const y=i(e.data,u.data);p=new An(y,u.itemSize,u.offset,u.normalized)}else{const y=Er(u.type,u.array),v=u.isInstancedBufferAttribute?So:gt;p=new v(y,u.itemSize,u.normalized)}u.name!==void 0&&(p.name=u.name),s.setAttribute(d,p)}const c=e.data.morphAttributes;if(c)for(const d in c){const u=c[d],p=[];for(let y=0,v=u.length;y<v;y++){const g=u[y];let m;if(g.isInterleavedBufferAttribute){const E=i(e.data,g.data);m=new An(E,g.itemSize,g.offset,g.normalized)}else{const E=Er(g.type,g.array);m=new gt(E,g.itemSize,g.normalized)}g.name!==void 0&&(m.name=g.name),p.push(m)}s.morphAttributes[d]=p}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const f=e.data.groups||e.data.drawcalls||e.data.offsets;if(f!==void 0)for(let d=0,u=f.length;d!==u;++d){const p=f[d];s.addGroup(p.start,p.count,p.materialIndex)}const h=e.data.boundingSphere;if(h!==void 0){const d=new S;h.center!==void 0&&d.fromArray(h.center),s.boundingSphere=new rn(d,h.radius)}return e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}});function zc(e){typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Ot.call(this,e),this.options={premultiplyAlpha:"none"}}zc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:zc,isImageBitmapLoader:!0,setOptions:function(t){return this.options=t,this},load:function(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=yi.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",fetch(e,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,r.options)}).then(function(a){yi.add(e,a),t&&t(a),r.manager.itemEnd(e)}).catch(function(a){i&&i(a),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}});function Hc(){this.type="ShapePath",this.color=new ct,this.subPaths=[],this.currentPath=null}Object.assign(Hc.prototype,{moveTo:function(e,t){return this.currentPath=new Be,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this},lineTo:function(e,t){return this.currentPath.lineTo(e,t),this},quadraticCurveTo:function(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this},bezierCurveTo:function(e,t,n,i,r,s){return this.currentPath.bezierCurveTo(e,t,n,i,r,s),this},splineThru:function(e){return this.currentPath.splineThru(e),this},toShapes:function(e,t){function n(g){const m=[];for(let E=0,T=g.length;E<T;E++){const w=g[E],x=new vi;x.curves=w.curves,m.push(x)}return m}function i(g,m){const E=m.length;let T=!1;for(let w=E-1,x=0;x<E;w=x++){let A=m[w],H=m[x],B=H.x-A.x,et=H.y-A.y;if(Math.abs(et)>Number.EPSILON){if(et<0&&(A=m[x],B=-B,H=m[w],et=-et),g.y<A.y||g.y>H.y)continue;if(g.y===A.y){if(g.x===A.x)return!0}else{const P=et*(g.x-A.x)-B*(g.y-A.y);if(P===0)return!0;if(P<0)continue;T=!T}}else{if(g.y!==A.y)continue;if(H.x<=g.x&&g.x<=A.x||A.x<=g.x&&g.x<=H.x)return!0}}return T}const r=pn.isClockWise,s=this.subPaths;if(s.length===0)return[];if(t===!0)return n(s);let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new vi,c.curves=a.curves,l.push(c),l;let f=!r(s[0].getPoints());f=e?!f:f;const h=[],d=[];let u=[],p=0,y;d[p]=void 0,u[p]=[];for(let g=0,m=s.length;g<m;g++)a=s[g],y=a.getPoints(),o=r(y),o=e?!o:o,o?(!f&&d[p]&&p++,d[p]={s:new vi,p:y},d[p].s.curves=a.curves,f&&p++,u[p]=[]):u[p].push({h:a,p:y[0]});if(!d[0])return n(s);if(d.length>1){let g=!1;const m=[];for(let E=0,T=d.length;E<T;E++)h[E]=[];for(let E=0,T=d.length;E<T;E++){const w=u[E];for(let x=0;x<w.length;x++){const A=w[x];let H=!0;for(let B=0;B<d.length;B++)i(A.p,d[B].p)&&(E!==B&&m.push({froms:E,tos:B,hole:x}),H?(H=!1,h[B].push(A)):g=!0);H&&h[E].push(A)}}m.length>0&&(g||(u=h))}let v;for(let g=0,m=d.length;g<m;g++){c=d[g].s,l.push(c),v=u[g];for(let E=0,T=v.length;E<T;E++)c.holes.push(v[E].h)}return l}});function Gc(e){this.type="Font",this.data=e}Object.assign(Gc.prototype,{isFont:!0,generateShapes:function(e,t=100){const n=[],i=Jm(e,t,this.data);for(let r=0,s=i.length;r<s;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}});function Jm(e,t,n){const i=Array.from?Array.from(e):String(e).split(""),r=t/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[];let a=0,c=0;for(let l=0;l<i.length;l++){const f=i[l];if(f===`
`)a=0,c-=s;else{const h=Qm(f,r,a,c,n);a+=h.offsetX,o.push(h.path)}}return o}function Qm(e,t,n,i,r){const s=r.glyphs[e]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+e+'" does not exists in font family '+r.familyName+".");return}const o=new Hc;let a,c,l,f,h,d,u,p;if(s.o){const y=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let v=0,g=y.length;v<g;)switch(y[v++]){case"m":a=y[v++]*t+n,c=y[v++]*t+i,o.moveTo(a,c);break;case"l":a=y[v++]*t+n,c=y[v++]*t+i,o.lineTo(a,c);break;case"q":l=y[v++]*t+n,f=y[v++]*t+i,h=y[v++]*t+n,d=y[v++]*t+i,o.quadraticCurveTo(h,d,l,f);break;case"b":l=y[v++]*t+n,f=y[v++]*t+i,h=y[v++]*t+n,d=y[v++]*t+i,u=y[v++]*t+n,p=y[v++]*t+i,o.bezierCurveTo(h,d,u,p,l,f);break}}return{offsetX:s.ha*t,path:o}}function kc(e){Ot.call(this,e)}kc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:kc,load:function(e,t,n,i){const r=this,s=new Ze(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(o){let a;try{a=JSON.parse(o)}catch(l){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(o.substring(65,o.length-2))}const c=r.parse(a);t&&t(c)},n,i)},parse:function(e){return new Gc(e)}});let rs;const $m={getContext:function(){return rs===void 0&&(rs=new(window.AudioContext||window.webkitAudioContext)),rs},setContext:function(e){rs=e}};function Eo(e){Ot.call(this,e)}Eo.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Eo,load:function(e,t,n,i){const r=this,s=new Ze(r.manager);s.setResponseType("arraybuffer"),s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(o){try{const a=o.slice(0);$m.getContext().decodeAudioData(a,function(l){t(l)})}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)}});function Vc(e,t,n){Ue.call(this,void 0,n);const i=new ct().set(e),r=new ct().set(t),s=new S(i.r,i.g,i.b),o=new S(r.r,r.g,r.b),a=Math.sqrt(Math.PI),c=a*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)}Vc.prototype=Object.assign(Object.create(Ue.prototype),{constructor:Vc,isHemisphereLightProbe:!0,copy:function(e){return Ue.prototype.copy.call(this,e),this},toJSON:function(e){return Ue.prototype.toJSON.call(this,e)}});function Wc(e,t){Ue.call(this,void 0,t);const n=new ct().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}Wc.prototype=Object.assign(Object.create(Ue.prototype),{constructor:Wc,isAmbientLightProbe:!0,copy:function(e){return Ue.prototype.copy.call(this,e),this},toJSON:function(e){return Ue.prototype.toJSON.call(this,e)}});const jc=new wt,qc=new wt;function Km(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Qt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Qt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(Km.prototype,{update:function(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep;const i=e.projectionMatrix.clone(),r=t.eyeSep/2,s=r*t.near/t.focus,o=t.near*Math.tan(bt.DEG2RAD*t.fov*.5)/t.zoom;let a,c;qc.elements[12]=-r,jc.elements[12]=r,a=-o*t.aspect+s,c=o*t.aspect+s,i.elements[0]=2*t.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(i),a=-o*t.aspect-s,c=o*t.aspect-s,i.elements[0]=2*t.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(qc),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(jc)}});class tg extends ft{constructor(t){super();this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const n=this.context.createBufferSource();return n.buffer=this.buffer,n.loop=this.loop,n.loopStart=this.loopStart,n.loopEnd=this.loopEnd,n.onended=this.onEnded.bind(this),n.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=n,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,n=this.filters.length;t<n;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,n=this.filters.length;t<n;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}function Xc(e,t,n){this.binding=e,this.valueSize=n;let i,r,s;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(Xc.prototype,{accumulate:function(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=t}else{s+=t;const o=t/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s},accumulateAdditive:function(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e},apply:function(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const a=t*this._origIndex;this._mixBufferRegion(n,i,a,1-r,t)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let a=t,c=t+t;a!==c;++a)if(n[a]!==n[a+t]){o.setValue(n,i);break}},saveOriginalState:function(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,s=i;r!==s;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)},_setAdditiveIdentityNumeric:function(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1},_setAdditiveIdentityOther:function(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]},_select:function(e,t,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)e[t+s]=e[n+s]},_slerp:function(e,t,n,i){ue.slerpFlat(e,t,e,t,e,n,i)},_slerpAdditive:function(e,t,n,i,r){const s=this._workIndex*r;ue.multiplyQuaternionsFlat(e,s,e,t,e,n),ue.slerpFlat(e,t,e,t,e,s,i)},_lerp:function(e,t,n,i,r){const s=1-i;for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]*s+e[n+o]*i}},_lerpAdditive:function(e,t,n,i,r){for(let s=0;s!==r;++s){const o=t+s;e[o]=e[o]+e[n+s]*i}}});const To="\\[\\]\\.:\\/",eg=new RegExp("["+To+"]","g"),Ao="[^"+To+"]",ng="[^"+To.replace("\\.","")+"]",ig=/((?:WC+[\/:])*)/.source.replace("WC",Ao),rg=/(WCOD+)?/.source.replace("WCOD",ng),sg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ao),og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ao),ag=new RegExp("^"+ig+rg+sg+og+"$"),cg=["material","materials","bones"];function Yc(e,t,n){const i=n||se.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}Object.assign(Yc.prototype,{getValue:function(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)},setValue:function(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)},bind:function(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()},unbind:function(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}});function se(e,t,n){this.path=t,this.parsedPath=n||se.parseTrackName(t),this.node=se.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e}Object.assign(se,{Composite:Yc,create:function(e,t,n){return e&&e.isAnimationObjectGroup?new se.Composite(e,t,n):new se(e,t,n)},sanitizeNodeName:function(e){return e.replace(/\s/g,"_").replace(eg,"")},parseTrackName:function(e){const t=ag.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);cg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n},findNode:function(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const a=n(o.children);if(a)return a}return null},i=n(e.children);if(i)return i}return null}});Object.assign(se.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,n){t[n]=this.node[this.propertyName]},function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[n++]=i[r]},function(t,n){t[n]=this.resolvedProperty[this.propertyIndex]},function(t,n){this.resolvedProperty.toArray(t,n)}],SetterByBindingTypeAndVersioning:[[function(t,n){this.targetObject[this.propertyName]=t[n]},function(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++]},function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.needsUpdate=!0},function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty[this.propertyIndex]=t[n]},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty.fromArray(t,n)},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(t,n){this.bind(),this.getValue(t,n)},setValue:function(t,n){this.bind(),this.setValue(t,n)},bind:function(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=se.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===c){c=l;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(se.prototype,{_getValue_unbound:se.prototype.getValue,_setValue_unbound:se.prototype.setValue});function lg(){this.uuid=bt.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}Object.assign(lg.prototype,{isAnimationObjectGroup:!0,add:function(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length;let o,a=e.length,c=this.nCachedObjects_;for(let l=0,f=arguments.length;l!==f;++l){const h=arguments[l],d=h.uuid;let u=t[d];if(u===void 0){u=a++,t[d]=u,e.push(h);for(let p=0,y=s;p!==y;++p)r[p].push(new se(h,n[p],i[p]))}else if(u<c){o=e[u];const p=--c,y=e[p];t[y.uuid]=u,e[u]=y,t[d]=p,e[p]=h;for(let v=0,g=s;v!==g;++v){const m=r[v],E=m[p];let T=m[u];m[u]=E,T===void 0&&(T=new se(h,n[v],i[v])),m[p]=T}}else e[u]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){const a=arguments[s],c=a.uuid,l=t[c];if(l!==void 0&&l>=r){const f=r++,h=e[f];t[h.uuid]=l,e[l]=h,t[c]=f,e[f]=a;for(let d=0,u=i;d!==u;++d){const p=n[d],y=p[f],v=p[l];p[l]=y,p[f]=v}}}this.nCachedObjects_=r},uncache:function(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,s=e.length;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,f=t[l];if(f!==void 0)if(delete t[l],f<r){const h=--r,d=e[h],u=--s,p=e[u];t[d.uuid]=f,e[f]=d,t[p.uuid]=h,e[h]=p,e.pop();for(let y=0,v=i;y!==v;++y){const g=n[y],m=g[h],E=g[u];g[f]=m,g[h]=E,g.pop()}}else{const h=--s,d=e[h];h>0&&(t[d.uuid]=f),e[f]=d,e.pop();for(let u=0,p=i;u!==p;++u){const y=n[u];y[f]=y[h],y.pop()}}}this.nCachedObjects_=r},subscribe_:function(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const s=this._paths,o=this._parsedPaths,a=this._objects,c=a.length,l=this.nCachedObjects_,f=new Array(c);i=r.length,n[e]=i,s.push(e),o.push(t),r.push(f);for(let h=l,d=a.length;h!==d;++h){const u=a[h];f[h]=new se(u,e,t)}return f},unsubscribe_:function(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length-1,a=s[o],c=e[o];t[c]=n,s[n]=a,s.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}});class hg{constructor(t,n,i=null,r=n.blendMode){this._mixer=t,this._clip=n,this._localRoot=i,this.blendMode=r;const s=n.tracks,o=s.length,a=new Array(o),c={endingStart:On,endingEnd:On};for(let l=0;l!==o;++l){const f=s[l].createInterpolant(null);a[l]=f,f.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ph,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,n){return this.loop=t,this.repetitions=n,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,n,i){if(t.fadeOut(n),this.fadeIn(n),i){const r=this._clip.duration,s=t._clip.duration,o=s/r,a=r/s;t.warp(1,o,n),this.warp(a,1,n)}return this}crossFadeTo(t,n,i){return t.crossFadeFrom(this,n,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,n,i){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=t/o,l[1]=n/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,n,i,r){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const c=(t-s)*i;if(c<0||i===0)return;this._startTime=null,n=i*c}n*=this._updateTimeScale(t);const o=this._updateTime(n),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case ca:for(let f=0,h=c.length;f!==h;++f)c[f].evaluate(o),l[f].accumulateAdditive(a);break;case vs:default:for(let f=0,h=c.length;f!==h;++f)c[f].evaluate(o),l[f].accumulate(r,a)}}}_updateWeight(t){let n=0;if(this.enabled){n=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(t)[0];n*=r,t>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=n,n}_updateTimeScale(t){let n=0;if(!this.paused){n=this.timeScale;const i=this._timeScaleInterpolant;i!==null&&(n*=i.evaluate(t)[0],t>i.parameterPositions[1]&&(this.stopWarping(),n===0?this.paused=!0:this.timeScale=n))}return this._effectiveTimeScale=n,n}_updateTime(t){const n=this._clip.duration,i=this.loop;let r=this.time+t,s=this._loopCount;const o=i===Ih;if(t===0)return s===-1?r:o&&(s&1)==1?n-r:r;if(i===Rh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(r>=n)r=n;else if(r<0)r=0;else{this.time=r;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=n||r<0){const a=Math.floor(r/n);r-=n*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=t>0?n:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)==1)return n-r}return r}_setEndings(t,n,i){const r=this._interpolantSettings;i?(r.endingStart=Fn,r.endingEnd=Fn):(t?r.endingStart=this.zeroSlopeAtStart?Fn:On:r.endingStart=dr,n?r.endingEnd=this.zeroSlopeAtEnd?Fn:On:r.endingEnd=dr)}_scheduleFading(t,n,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=n,a[1]=s+t,c[1]=i,this}}function Zc(e){this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Zc.prototype=Object.assign(Object.create(Ge.prototype),{constructor:Zc,_bindAction:function(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,s=e._propertyBindings,o=e._interpolants,a=n.uuid,c=this._bindingsByRootAndName;let l=c[a];l===void 0&&(l={},c[a]=l);for(let f=0;f!==r;++f){const h=i[f],d=h.name;let u=l[d];if(u!==void 0)s[f]=u;else{if(u=s[f],u!==void 0){u._cacheIndex===null&&(++u.referenceCount,this._addInactiveBinding(u,a,d));continue}const p=t&&t._propertyBindings[f].binding.parsedPath;u=new Xc(se.create(n,d,p),h.ValueTypeName,h.getValueSize()),++u.referenceCount,this._addInactiveBinding(u,a,d),s[f]=u}o[f].resultBuffer=u.buffer}},_activateAction:function(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++==0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}},_deactivateAction:function(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount==0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}},_isActiveAction:function(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions},_addInactiveAction:function(e,t,n){const i=this._actions,r=this._actionsByClip;let s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{const o=s.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),s.actionByRoot[n]=e},_removeInactiveAction:function(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,s=this._actionsByClip,o=s[r],a=o.knownActions,c=a[a.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,a[l]=c,a.pop(),e._byClipCacheIndex=null;const f=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete f[h],a.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)},_removeInactiveBindingsForAction:function(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount==0&&this._removeInactiveBinding(r)}},_lendAction:function(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackAction:function(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_addInactiveBinding:function(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[t];s===void 0&&(s={},i[t]=s),s[n]=e,e._cacheIndex=r.length,r.push(e)},_removeInactiveBinding:function(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],a=t[t.length-1],c=e._cacheIndex;a._cacheIndex=c,t[c]=a,t.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]},_lendBinding:function(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackBinding:function(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_lendControlInterpolant:function(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Kr(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n},_takeBackControlInterpolant:function(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(e,t,n){const i=t||this._root,r=i.uuid;let s=typeof e=="string"?Ae.findByName(i,e):e;const o=s!==null?s.uuid:e,a=this._actionsByClip[o];let c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=vs),a!==void 0){const f=a.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;c=a.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const l=new hg(this,s,t,n);return this._bindAction(l,c),this._addInactiveAction(l,o,r),l},existingAction:function(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Ae.findByName(n,e):e,s=r?r.uuid:e,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null},stopAllAction:function(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this},update:function(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,s);const o=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)o[c].apply(s);return this},setTime:function(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)},getRoot:function(){return this._root},uncacheClip:function(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let o=0,a=s.length;o!==a;++o){const c=s[o];this._deactivateAction(c);const l=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=l,t[l]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}},uncacheRoot:function(e){const t=e.uuid,n=this._actionsByClip;for(const s in n){const o=n[s].actionByRoot,a=o[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const s in r){const o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}},uncacheAction:function(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});class Lo{constructor(t){typeof t=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),t=arguments[1]),this.value=t}clone(){return new Lo(this.value.clone===void 0?this.value:this.value.clone())}}function Jc(e,t,n){ye.call(this,e,t),this.meshPerAttribute=n||1}Jc.prototype=Object.assign(Object.create(ye.prototype),{constructor:Jc,isInstancedInterleavedBuffer:!0,copy:function(e){return ye.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},clone:function(e){const t=ye.prototype.clone.call(this,e);return t.meshPerAttribute=this.meshPerAttribute,t},toJSON:function(e){const t=ye.prototype.toJSON.call(this,e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}});function Qc(e,t,n,i,r){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}Object.defineProperty(Qc.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(Qc.prototype,{isGLBufferAttribute:!0,setBuffer:function(e){return this.buffer=e,this},setType:function(e,t){return this.type=e,this.elementSize=t,this},setItemSize:function(e){return this.itemSize=e,this},setCount:function(e){return this.count=e,this}});function $c(e,t,n,i){this.ray=new Ii(e,t),this.near=n||0,this.far=i||1/0,this.camera=null,this.layers=new ma,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Kc(e,t){return e.distance-t.distance}function Co(e,t,n,i){if(e.layers.test(t.layers)&&e.raycast(t,n),i===!0){const r=e.children;for(let s=0,o=r.length;s<o;s++)Co(r[s],t,n,!0)}}Object.assign($c.prototype,{set:function(e,t){this.ray.set(e,t)},setFromCamera:function(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)},intersectObject:function(e,t,n){const i=n||[];return Co(e,this,i,t),i.sort(Kc),i},intersectObjects:function(e,t,n){const i=n||[];if(Array.isArray(e)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let r=0,s=e.length;r<s;r++)Co(e[r],this,i,t);return i.sort(Kc),i}});const tl=new G;class ug{constructor(t,n){Object.defineProperty(this,"isBox2",{value:!0}),this.min=t!==void 0?t:new G(1/0,1/0),this.max=n!==void 0?n:new G(-1/0,-1/0)}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=tl.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return t===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),t=new G),this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return t===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),t=new G),this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,n){return n===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),n=new G),n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,n){return n===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),n=new G),n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return tl.copy(t).clamp(this.min,this.max).sub(t).length()}intersect(t){return this.min.max(t.min),this.max.min(t.max),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}function ss(e){ft.call(this),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}ss.prototype=Object.create(ft.prototype);ss.prototype.constructor=ss;ss.prototype.isImmediateRenderObject=!0;const gn=new S,os=new wt,Ro=new wt;class fg extends Vr{constructor(t){const n=el(t),i=new Nt,r=[],s=[],o=new ct(0,0,1),a=new ct(0,1,0);for(let l=0;l<n.length;l++){const f=n[l];f.parent&&f.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new Pt(r,3)),i.setAttribute("color",new Pt(s,3));const c=new ve({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=t,this.bones=n,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const n=this.bones,i=this.geometry,r=i.getAttribute("position");Ro.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<n.length;s++){const a=n[s];a.parent&&a.parent.isBone&&(os.multiplyMatrices(Ro,a.matrixWorld),gn.setFromMatrixPosition(os),r.setXYZ(o,gn.x,gn.y,gn.z),os.multiplyMatrices(Ro,a.parent.matrixWorld),gn.setFromMatrixPosition(os),r.setXYZ(o+1,gn.x,gn.y,gn.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}}function el(e){const t=[];e&&e.isBone&&t.push(e);for(let n=0;n<e.children.length;n++)t.push.apply(t,el(e.children[n]));return t}class dg extends Vr{constructor(t=10,n=10,i=4473924,r=8947848){i=new ct(i),r=new ct(r);const s=n/2,o=t/n,a=t/2,c=[],l=[];for(let d=0,u=0,p=-a;d<=n;d++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const y=d===s?i:r;y.toArray(l,u),u+=3,y.toArray(l,u),u+=3,y.toArray(l,u),u+=3,y.toArray(l,u),u+=3}const f=new Nt;f.setAttribute("position",new Pt(c,3)),f.setAttribute("color",new Pt(l,3));const h=new ve({vertexColors:!0,toneMapped:!1});super(f,h);this.type="GridHelper"}}const pg=new Float32Array(1);new Int32Array(pg.buffer);lt.create=function(e,t){return console.log("THREE.Curve.create() has been deprecated"),e.prototype=Object.create(lt.prototype),e.prototype.constructor=e,e.prototype.getPoint=t,e};Object.assign(mn.prototype,{createPointsGeometry:function(e){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const t=this.getPoints(e);return this.createGeometry(t)},createSpacedPointsGeometry:function(e){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const t=this.getSpacedPoints(e);return this.createGeometry(t)},createGeometry:function(e){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const t=new xe;for(let n=0,i=e.length;n<i;n++){const r=e[n];t.vertices.push(new S(r.x,r.y,r.z||0))}return t}});Object.assign(Be.prototype,{fromPoints:function(e){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(e)}});function nl(e){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),Ce.call(this,e),this.type="catmullrom"}nl.prototype=Object.create(Ce.prototype);Object.assign(nl.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});dg.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};fg.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(Ot.prototype,{extractUrlBase:function(e){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Zm.extractUrlBase(e)}});Ot.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(ug.prototype,{center:function(e){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},size:function(e){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(e)}});Object.assign(tn.prototype,{center:function(e){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionSphere:function(e){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)},size:function(e){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(e)}});Object.assign(rn.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}});Ir.prototype.setFromMatrix=function(e){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(e)};Object.assign(bt,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(e){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),bt.floorPowerOfTwo(e)},nextPowerOfTwo:function(e){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),bt.ceilPowerOfTwo(e)}});Object.assign(ce.prototype,{flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},multiplyVector3:function(e){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},getInverse:function(e){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(e).invert()}});Object.assign(wt.prototype,{extractPosition:function(e){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)},flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new S().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(e){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(e)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(e){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector4:function(e){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(e){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),e.transformDirection(this)},crossVector:function(e){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(e,t,n,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(e,t,i,n,r,s)},getInverse:function(e){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(e).invert()}});je.prototype.isIntersectionLine=function(e){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(e)};Object.assign(ue.prototype,{multiplyVector3:function(e){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),e.applyQuaternion(this)},inverse:function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()}});Object.assign(Ii.prototype,{isIntersectionBox:function(e){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionPlane:function(e){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(e)},isIntersectionSphere:function(e){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)}});Object.assign(te.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(e,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(e,t)},midpoint:function(e){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(e)},normal:function(e){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(e)},plane:function(e){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(e)}});Object.assign(te,{barycoordFromPoint:function(e,t,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),te.getBarycoord(e,t,n,i,r)},normal:function(e,t,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),te.getNormal(e,t,n,i)}});Object.assign(vi.prototype,{extractAllPoints:function(e){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(e)},extrude:function(e){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Cm(this,e)},makeGeometry:function(e){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Dm(this,e)}});Object.assign(G.prototype,{fromAttribute:function(e,t,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},distanceToManhattan:function(e){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(S.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(e){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(e)},getScaleFromMatrix:function(e){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(e)},getColumnFromMatrix:function(e,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,e)},applyProjection:function(e){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(e)},fromAttribute:function(e,t,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},distanceToManhattan:function(e){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Dt.prototype,{fromAttribute:function(e,t,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(xe.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(e){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.assign(ft.prototype,{getChildByName:function(e){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(e)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(e,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,e)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(e){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.defineProperties(ft.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(e){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=e}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.assign(ee.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(ee.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Dh},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(Qs.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(to.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});$s.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(lt.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(e){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=e}});Qt.prototype.setLens=function(e,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(e)};Object.defineProperties(Ht.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(e){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=e}},shadowCameraLeft:{set:function(e){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=e}},shadowCameraRight:{set:function(e){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=e}},shadowCameraTop:{set:function(e){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=e}},shadowCameraBottom:{set:function(e){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=e}},shadowCameraNear:{set:function(e){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=e}},shadowCameraFar:{set:function(e){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=e}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(e){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=e}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(e){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=e}},shadowMapHeight:{set:function(e){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=e}}});Object.defineProperties(gt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Ci},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Ci)}}});Object.assign(gt.prototype,{setDynamic:function(e){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?Ci:pr),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(Nt.prototype,{addIndex:function(e){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(e)},addAttribute:function(e,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(e,new gt(arguments[1],arguments[2]))):e==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(e,t)},addDrawCall:function(e,t,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(e,t)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(e){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(e)},applyMatrix:function(e){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.defineProperties(Nt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(is.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(e){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=e}}});Object.defineProperties($c.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(e){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=e}}});Object.defineProperties(ye.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===Ci},set:function(e){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(e)}}});Object.assign(ye.prototype,{setDynamic:function(e){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?Ci:pr),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(Tc.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.assign(om.prototype,{dispose:function(){console.error("THREE.Scene: .dispose() has been removed.")}});Object.defineProperties(Lo.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(pt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ct}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(e){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=e===zo}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(e){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=e}}});Object.defineProperties(Pn.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(Rn.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(e){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=e}}});Object.defineProperties(le.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(e){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=e}}});Object.assign(Dr.prototype,{clearTarget:function(e,t,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(e),this.clear(t,n,i)},animate:function(e){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(e)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(e){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(e)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}});Object.defineProperties(Dr.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=e}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=e}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(e){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=e===!0?la:Li}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Ja.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(we.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=e}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=e}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=e}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=e}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(e){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=e}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(e){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=e}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(e){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=e}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(e){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=e}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(e){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=e}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(e){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=e}}});Object.defineProperties(tg.prototype,{load:{value:function(e){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this;return new Eo().load(e,function(i){t.setBuffer(i)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});ti.prototype.updateCubeMap=function(e,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(e,t)};ti.prototype.clear=function(e,t,n,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(e,t,n,i)};zn.crossOrigin=void 0;zn.loadTexture=function(e,t,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new mo;r.setCrossOrigin(this.crossOrigin);const s=r.load(e,n,void 0,i);return t&&(s.mapping=t),s};zn.loadTextureCube=function(e,t,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new po;r.setCrossOrigin(this.crossOrigin);const s=r.load(e,n,void 0,i);return t&&(s.mapping=t),s};zn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};zn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));var gg={isWebGLAvailable:function(){try{var e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch(t){return!1}},isWebGL2Available:function(){try{var e=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&e.getContext("webgl2"))}catch(t){return!1}},getWebGLErrorMessage:function(){return this.getErrorMessage(1)},getWebGL2ErrorMessage:function(){return this.getErrorMessage(2)},getErrorMessage:function(e){var t={1:"WebGL",2:"WebGL 2"},n={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext},i='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>',r=document.createElement("div");return r.id="webglmessage",r.style.fontFamily="monospace",r.style.fontSize="13px",r.style.fontWeight="normal",r.style.textAlign="center",r.style.background="#fff",r.style.color="#000",r.style.padding="1.5em",r.style.width="400px",r.style.margin="5em auto 0",n[e]?i=i.replace("$0","graphics card"):i=i.replace("$0","browser"),i=i.replace("$1",t[e]),r.innerHTML=i,r}};export{Nt as B,Ka as F,Pc as H,ve as L,Pn as M,ft as O,mg as P,Ic as S,S as V,gg as W,ee as a,gt as b,Vr as c,Qt as d,om as e,Dr as f};
