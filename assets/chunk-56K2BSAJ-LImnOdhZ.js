import{u as q}from"./chunk-DFWC5MHP-CMJ6hTz_.js";import{a as r,c}from"./chunk-ZJJGQIVY-CYGgybVD.js";function x(i){const{isDisabled:e,isInvalid:n,isReadOnly:d,isRequired:l,...a}=F(i);return{...a,disabled:e,readOnly:d,required:l,"aria-invalid":r(n),"aria-required":r(l),"aria-readonly":r(d)}}function F(i){var e,n,d;const l=q(),{id:a,disabled:o,readOnly:u,required:t,isRequired:b,isInvalid:v,isReadOnly:y,isDisabled:f,onFocus:I,onBlur:R,...m}=i,s=i["aria-describedby"]?[i["aria-describedby"]]:[];return l!=null&&l.hasFeedbackText&&(l!=null&&l.isInvalid)&&s.push(l.feedbackId),l!=null&&l.hasHelpText&&s.push(l.helpTextId),{...m,"aria-describedby":s.join(" ")||void 0,id:a??(l==null?void 0:l.id),isDisabled:(e=o??f)!=null?e:l==null?void 0:l.isDisabled,isReadOnly:(n=u??y)!=null?n:l==null?void 0:l.isReadOnly,isRequired:(d=t??b)!=null?d:l==null?void 0:l.isRequired,isInvalid:v??(l==null?void 0:l.isInvalid),onFocus:c(l==null?void 0:l.onFocus,I),onBlur:c(l==null?void 0:l.onBlur,R)}}export{F as a,x as u};
