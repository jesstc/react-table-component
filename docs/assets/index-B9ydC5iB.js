import{r as s}from"./index-CEThVCg_.js";function m(e,t){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function p(e={}){const{name:t,strict:i=!0,hookName:x="useContext",providerName:d="Provider",errorMessage:n,defaultValue:l}=e,r=s.createContext(l);r.displayName=t;function a(){var c;const u=s.useContext(r);if(!u&&i){const o=new Error(n??m(x,d));throw o.name="ContextError",(c=Error.captureStackTrace)==null||c.call(Error,o,a),o}return u}return[r.Provider,a,r]}export{p as c};
