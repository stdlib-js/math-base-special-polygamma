// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nonnegative-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-factorial@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-trigamma@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-digamma@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-signum@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ldexp@v0.0.8-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-trunc@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-riemann-zeta@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.0.8-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.0.8-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.0.8-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-ln@v0.0.8-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-bernoulli@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-two@v0.0.8-esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@v0.0.8-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-evalpoly@esm/index.mjs";import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cospi@v0.0.7-esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sinpi@esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-pi@v0.0.8-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@esm/index.mjs";function P(t){if(t.__esModule)return t;var e=t.default;if("function"==typeof e){var s=function t(){if(this instanceof t){var s=[null];s.push.apply(s,arguments);var n=Function.bind.apply(e,s);return new n}return e.apply(this,arguments)};s.prototype=e.prototype}else s={};return Object.defineProperty(s,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(s,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),s}var M=P(Object.freeze({__proto__:null,default:()=>()=>{}})),S=M("polygamma");function k(t,s){var n,r,i,a,m,o;if(t+s===s)return 1===t?1/s:t*b(s)<g&&t<172?(1&t?1:-1)*e(t-1)*v(s,-t):(1&t?1:-1)*u(h(t)-t*b(s));if(r=s*s,0===(n=t>172&&t*t>g?0:e(t-1)*v(s,-t-1))?(n=h(t)-(t+1)*b(s),a=u(n+b(t+2*s)-y),n+=b(t*(t+1))-y-b(s),n=u(n)):(a=n*(t+2*s)/2,n*=t*(t+1)/2,n/=s),0===a)return a;for(o=1;i=n*x(2*o),!(d(i/(a+=i))<N);)if(n*=(t+(m=2*(o+=1))-2)*(t-1+m),n/=(m-1)*m,n/=r,o>1e6)return S("Series did not converge, closest value was: %d.",a),NaN;return t-1&1&&(a=-a),a}var D=M("polygamma");var F=M("polygamma"),T=[[-1]];function q(t,e,s){var n,i,a,m,o,l;switch(l=d(e)<d(s)?O(e):O(s),o=_(e),t){case 1:return-f/(l*l);case 2:return 19.739208802178716*o/v(l,3);case 3:return 31.00627668029982*function(t){return 0===t?-2:-4*t-2}(o*o)/v(l,4);case 4:return 97.40909103400244*o*function(t){return 0===t?16:16+8*t}(o*o)/v(l,5);case 5:return 306.01968478528147*function(t){return 0===t?-16:t*(-16*t-88)-16}(o*o)/v(l,6);case 6:return 961.3891935753045*o*function(t){return 0===t?272:272+t*(416+32*t)}(o*o)/v(l,7);case 7:return 3020.2932277767923*function(t){return 0===t?-272:t*(t*(-64*t-1824)-2880)-272}(o*o)/v(l,8);case 8:return 9488.531016070574*o*function(t){return 0===t?7936:7936+t*(24576+t*(7680+128*t))}(o*o)/v(l,9);case 9:return 29809.09933344621*function(t){return 0===t?-7936:t*(t*(t*(-256*t-31616)-185856)-137216)-7936}(o*o)/v(l,10);case 10:return 93648.04747608303*o*function(t){return 0===t?353792:353792+t*(1841152+t*(1304832+t*(128512+512*t)))}(o*o)/v(l,11);case 11:return 294204.0179738906*function(t){return 0===t?-353792:t*(t*(t*(t*(-1024*t-518656)-8728576)-21253376)-9061376)-353792}(o*o)/v(l,12);case 12:return 924269.1815233742*o*function(t){return 0===t?22368256:22368256+t*(175627264+t*(222398464+t*(56520704+t*(2084864+2048*t))))}(o*o)/v(l,13)}return t/2>1e6?(F("The value of `n` is so large that we're unable to compute the result in reasonable time."),NaN):((i=t-1)>=T.length&&function(t){var e,s,n,r,i,a,m,o,d;for(m=T.length-1;m<t-1;m++)for(s=((r=(i=m+2|0)-1|0)-(e=1&m|0))/2|0,n=(r+1-(e?0:1))/2|0,T.push(E(n+1)),o=0;o<=s;o++)d=(1+(a=2*o+e|0))/2|0,T[m+1][d]+=(a-i)*T[m][o]/(i-1),a&&(d=(a-1)/2|0,T[m+1][d]+=-a*T[m][o]/(i-1))}(t),m=w(T[i],o*o),1&i&&(m*=o),0===m?m:(n=t*z,0===l?m>=0?p:c:(n-=b(d(l))*(t+1),(n+=h(t)+b(d(m)))>g?m>=0?p:c:(a=u(n)*r(m),l<0&&t+1&1&&(a*=-1),a))))}var A=M("polygamma");var B=M("polygamma");function C(x,y){var w,_;return t(x)?0===x?n(y):1===x?s(y):y<0?a(y)===y?1&m(y)?p:(B("Evaluation at negative integer: %d.",y),NaN):(w=C(x,_=1-y)+f*q(x,_,y),1&x?-w:w):y<l(5/x,.25)?function(t,s){var n,r,i,a,m,l,f;if(i=e(t),n=1,0===(r=v(s,t+1)))return p;if((r=1/r)>2/N)return 1&t?l/r<i?p:r*i:l/r<i?c:-r*i;for(m=r,f=0;m+=a=n*o(f+t+1),!(d(a)<d(m*N));)if(n*=-s*(t+(f+=1))/f,f>1e6)return A("Series did not converge, best value is %d.",m),NaN;return j/i<m?p:(m*=i,1&t?m:-m)}(x,y):y>.4*19+4*x?k(x,y):1===y?(1&x?1:-1)*e(x)*o(x+1):.5===y?(w=(1&x?1:-1)*e(x)*o(x+1),d(w)>=i(j,-x-1)?1===r(w)?p:c:w*=i(1,x+1)-1):function(t,s){var n,r,i,a,o,d,l;if(o=t,(i=7.6000000000000005+4*t-m(s))>1e6)return D("Exceeded maximum series evaluations when evaluated at n = %d and x = %d",t,s),NaN;if(n=-o-1,a=0,b((l=s)+i)*n>-g){for(d=1;d<=i;d++)a+=v(l,n),l+=1;a*=e(t)}else for(d=1;d<=i;d++)r=b(l)*n+h(t+1),a+=u(r),l+=1;return t-1&1&&(a=-a),a+k(t,l)}(x,y):NaN}export{C as default};
//# sourceMappingURL=index.mjs.map
