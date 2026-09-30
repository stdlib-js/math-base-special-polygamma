"use strict";var f=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(i){throw (a=0, i)}};};var y=f(function(je,g){
var pr=require('@stdlib/math-base-special-bernoulli/dist'),P=require('@stdlib/math-base-special-factorial/dist'),S=require('@stdlib/math-base-special-gammaln/dist'),cr=require('@stdlib/math-base-special-abs/dist'),N=require('@stdlib/math-base-special-exp/dist'),A=require('@stdlib/math-base-special-pow/dist'),I=require('@stdlib/math-base-special-ln/dist'),E=require('@stdlib/constants-float64-max-ln/dist'),_=require('@stdlib/constants-float64-ln-two/dist'),Ir=require('@stdlib/constants-float64-eps/dist'),mr=1e6,T=172;function Nr(r,a){var i,v,o,s,t,e,u;if(r+a===a)return r===1?1/a:(t=r*I(a),t<E&&r<T?(r&1?1:-1)*P(r-1)*A(a,-r):(r&1?1:-1)*N(S(r)-r*I(a)));if(v=a*a,r>T&&r*r>E?i=0:i=P(r-1)*A(a,-r-1),i===0?(i=S(r)-(r+1)*I(a),s=N(i+I(r+2*a)-_),i+=I(r*(r+1))-_-I(a),i=N(i)):(s=i*(r+2*a)/2,i*=r*(r+1)/2,i/=a),s===0)return s;for(u=1;o=i*pr(u*2),s+=o,!(cr(o/s)<Ir);)if(u+=1,e=2*u,i*=(r+e-2)*(r-1+e),i/=(e-1)*e,i/=v,u>mr)return NaN;return r-1&1&&(s=-s),s}g.exports=Nr
});var R=f(function(Ce,X){
var yr=require('@stdlib/math-base-special-factorial/dist'),Pr=require('@stdlib/math-base-special-gammaln/dist'),Sr=require('@stdlib/math-base-special-trunc/dist'),Ar=require('@stdlib/math-base-special-exp/dist'),Er=require('@stdlib/math-base-special-pow/dist'),M=require('@stdlib/math-base-special-ln/dist'),_r=require('@stdlib/constants-float64-max-ln/dist'),Tr=y(),gr=1e6,Mr=19;function Xr(r,a){var i,v,o,s,t,e,u,q,l,c;if(e=.4*Mr,u=e+4*r,q=r,s=u-Sr(a),s>gr)return NaN;if(i=-q-1,c=a,t=0,o=0,M(c+s)*i>-_r){for(l=1;l<=s;l++)o=Er(c,i),t+=o,c+=1;t*=yr(r)}else for(l=1;l<=s;l++)v=M(c)*i+Pr(r+1),t+=Ar(v),c+=1;return r-1&1&&(t=-t),t+Tr(r,c)}X.exports=Xr
});var z=f(function(We,b){
function Rr(r){return r===0?-2:-2+r*-4}b.exports=Rr
});var w=f(function(He,k){
function br(r){return r===0?16:16+r*8}k.exports=br
});var d=f(function(Je,L){
function zr(r){return r===0?-16:-16+r*(-88+r*-16)}L.exports=zr
});var O=f(function(Ke,F){
function kr(r){return r===0?272:272+r*(416+r*32)}F.exports=kr
});var D=f(function(Qe,h){
function wr(r){return r===0?-272:-272+r*(-2880+r*(-1824+r*-64))}h.exports=wr
});var G=f(function(Ue,B){
function Lr(r){return r===0?7936:7936+r*(24576+r*(7680+r*128))}B.exports=Lr
});var C=f(function(Ve,j){
function dr(r){return r===0?-7936:-7936+r*(-137216+r*(-185856+r*(-31616+r*-256)))}j.exports=dr
});var H=f(function(Ye,W){
function Fr(r){return r===0?353792:353792+r*(1841152+r*(1304832+r*(128512+r*512)))}W.exports=Fr
});var K=f(function(Ze,J){
function Or(r){return r===0?-353792:-353792+r*(-9061376+r*(-21253376+r*(-8728576+r*(-518656+r*-1024))))}J.exports=Or
});var U=f(function($e,Q){
function hr(r){return r===0?22368256:22368256+r*(175627264+r*(222398464+r*(56520704+r*(2084864+r*2048))))}Q.exports=hr
});var rr=f(function(xe,x){
var Dr=require('@stdlib/math-base-tools-evalpoly/dist'),Br=require('@stdlib/math-base-special-gammaln/dist'),Gr=require('@stdlib/math-base-special-signum/dist'),jr=require('@stdlib/math-base-special-cospi/dist'),V=require('@stdlib/math-base-special-sinpi/dist'),m=require('@stdlib/math-base-special-abs/dist'),Cr=require('@stdlib/math-base-special-exp/dist'),n=require('@stdlib/math-base-special-pow/dist'),Y=require('@stdlib/math-base-special-ln/dist'),Wr=require('@stdlib/constants-float64-max-ln/dist'),Z=require('@stdlib/constants-float64-pinf/dist'),$=require('@stdlib/constants-float64-ninf/dist'),Hr=require('@stdlib/constants-float64-ln-pi/dist'),Jr=require('@stdlib/constants-float64-pi/dist'),Kr=require('@stdlib/array-base-zeros/dist'),Qr=z(),Ur=w(),Vr=d(),Yr=O(),Zr=D(),$r=G(),xr=C(),re=H(),ee=K(),ae=U(),ie=1e6,ue=9.869604401089358,te=31.00627668029982,ve=97.40909103400244,se=306.01968478528147,oe=961.3891935753045,fe=3020.2932277767923,le=9488.531016070574,ne=29809.09933344621,qe=93648.04747608303,pe=294204.0179738906,ce=924269.1815233742,p=[[-1]];function Ie(r){var a,i,v,o,s,t,e,u,q,l;for(u=p.length-1;u<r-1;u++)for(i=u&1|0,t=u+2|0,s=t-1|0,v=(s-i)/2|0,a=i?0:1,o=(s+1-a)/2|0,p.push(Kr(o+1)),q=0;q<=v;q++)e=2*q+i|0,l=(e+1)/2|0,p[u+1][l]+=(e-t)*p[u][q]/(t-1),e&&(l=(e-1)/2|0,p[u+1][l]+=-e*p[u][q]/(t-1))}function me(r,a,i){var v,o,s,t,e,u;switch(u=m(a)<m(i)?V(a):V(i),e=jr(a),r){case 1:return-Jr/(u*u);case 2:return 2*ue*e/n(u,3);case 3:return te*Qr(e*e)/n(u,4);case 4:return ve*e*Ur(e*e)/n(u,5);case 5:return se*Vr(e*e)/n(u,6);case 6:return oe*e*Yr(e*e)/n(u,7);case 7:return fe*Zr(e*e)/n(u,8);case 8:return le*e*$r(e*e)/n(u,9);case 9:return ne*xr(e*e)/n(u,10);case 10:return qe*e*re(e*e)/n(u,11);case 11:return pe*ee(e*e)/n(u,12);case 12:return ce*e*ae(e*e)/n(u,13)}return r/2>ie?NaN:(o=r-1,o>=p.length&&Ie(r),t=Dr(p[o],e*e),o&1&&(t*=e),t===0?t:(v=r*Hr,u===0||(v-=Y(m(u))*(r+1),v+=Br(r)+Y(m(t)),v>Wr)?t>=0?Z:$:(s=Cr(v)*Gr(t),u<0&&r+1&1&&(s*=-1),s)))}x.exports=me
});var tr=f(function(ra,ur){
var Ne=require('@stdlib/math-base-special-factorial/dist'),ye=require('@stdlib/math-base-special-riemann-zeta/dist'),er=require('@stdlib/math-base-special-abs/dist'),Pe=require('@stdlib/math-base-special-pow/dist'),ar=require('@stdlib/constants-float64-pinf/dist'),ir=require('@stdlib/constants-float64-eps/dist'),Se=require('@stdlib/constants-float64-max/dist'),Ae=1e6;function Ee(r,a){var i,v,o,s,t,e;if(o=Ne(r),i=1,v=Pe(a,r+1),v===0)return ar;if(v=1/v,v>2/ir)return r&1?v*o:-(v*o);for(t=v,e=0;s=i*ye(e+r+1),t+=s,!(er(s)<er(t*ir));)if(e+=1,i*=-a*(r+e)/e,e>Ae)return NaN;return Se/o<t?ar:(t*=o,r&1?t:-t)}ur.exports=Ee
});var qr=f(function(ea,nr){
var _e=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),vr=require('@stdlib/math-base-special-factorial/dist'),Te=require('@stdlib/math-base-special-trigamma/dist'),ge=require('@stdlib/math-base-special-digamma/dist'),Me=require('@stdlib/math-base-special-signum/dist'),sr=require('@stdlib/math-base-special-ldexp/dist'),Xe=require('@stdlib/math-base-special-floor/dist'),Re=require('@stdlib/math-base-special-trunc/dist'),or=require('@stdlib/math-base-special-riemann-zeta/dist'),be=require('@stdlib/math-base-special-abs/dist'),ze=require('@stdlib/math-base-special-min/dist'),fr=require('@stdlib/constants-float64-pinf/dist'),ke=require('@stdlib/constants-float64-ninf/dist'),we=require('@stdlib/constants-float64-max/dist'),Le=require('@stdlib/constants-float64-pi/dist'),de=R(),Fe=y(),Oe=rr(),he=tr(),De=19;function lr(r,a){var i,v,o;return _e(r)?r===0?ge(a):r===1?Te(a):a<0?Xe(a)===a?Re(a)&1?fr:NaN:(o=1-a,v=lr(r,o)+Le*Oe(r,o,a),r&1?-v:v):(i=ze(5/r,.25),a<i?he(r,a):a>.4*De+4*r?Fe(r,a):a===1?(r&1?1:-1)*vr(r)*or(r+1):a===.5?(v=(r&1?1:-1)*vr(r)*or(r+1),be(v)>=sr(we,-r-1)?Me(v)===1?fr:ke:(v*=sr(1,r+1)-1,v)):de(r,a)):NaN}nr.exports=lr
});var Be=qr();module.exports=Be;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
