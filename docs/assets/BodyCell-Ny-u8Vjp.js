import{j as t}from"./chunk-ZJJGQIVY-CYGgybVD.js";import"./index-CEThVCg_.js";import{P as l}from"./index-BDAnVJ5B.js";import{_ as x,a as d}from"./Badge.stories-D1d2pu1o.js";import{_ as f}from"./Button-DRiXhZt-.js";import{_ as u}from"./Button.stories-Bk7fUEFq.js";import{_ as j,a as b}from"./ButtonGroup.stories-C7GvtrKE.js";import{_ as g,a as v}from"./Dropdown.stories-BmIc8jes.js";import{_ as C,a as y}from"./Image.stories-hsd0WBXe.js";import{_ as T,a as B}from"./Radios.stories-B_bEaiqn.js";import{_ as F}from"./Text-C7-rraay.js";import{_ as h}from"./Text.stories-CZLcn0lI.js";import{_ as O,a as q}from"./ToggleSwitch.stories-CvoUl9qP.js";const n=Object.assign({"./Badge.jsx":x,"./Badge.stories.jsx":d,"./Button.jsx":f,"./Button.stories.jsx":u,"./ButtonGroup.jsx":j,"./ButtonGroup.stories.jsx":b,"./Dropdown.jsx":g,"./Dropdown.stories.jsx":v,"./Image.jsx":C,"./Image.stories.jsx":y,"./Radios.jsx":T,"./Radios.stories.jsx":B,"./Text.jsx":F,"./Text.stories.jsx":h,"./ToggleSwitch.jsx":O,"./ToggleSwitch.stories.jsx":q}),w=Object.keys(n).reduce((e,o)=>{const s=o.replace("./","Cell").replace(".jsx","");if(s.match(".stories")!==null){const _=s.replace(".stories","");e[_]=n[o].default}return e},{}),r=w,m=({cellType:e="CellText",isFixFirstCol:o=!1,isFixLastCol:s=!1,cellProps:_})=>{var p;const a=(p=r[e])==null?void 0:p.component;if(!a){const c=r.CellText.component;return t.jsxs("td",{children:[" ",t.jsx(c,{content:"Invalid cellType"})," "]})}let i="";return o&&(i+="fixed-first-col"),s&&(i+="fixed-last-col"),t.jsxs("td",{className:i,children:[" ",t.jsx(a,{..._})," "]})};m.propTypes={cellType:l.oneOf(Object.keys(r)),isFixFirstCol:l.bool,isFixLastCol:l.bool,cellProps:l.object};m.__docgenInfo={description:"",methods:[],displayName:"BodyCell",props:{cellType:{defaultValue:{value:"'CellText'",computed:!1},description:"",type:{name:"enum",computed:!0,value:"Object.keys(CellComponents)"},required:!1},isFixFirstCol:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isFixLastCol:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},cellProps:{description:"",type:{name:"object"},required:!1}}};export{m as B,r as C};