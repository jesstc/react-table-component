import{f as w,b as E,j as o,d as M}from"./chunk-ZJJGQIVY-CYGgybVD.js";import{r as z}from"./index-CEThVCg_.js";import{P as t}from"./index-BDAnVJ5B.js";import{B as F,C as P}from"./Button-DRiXhZt-.js";var k={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},V={horizontal:e=>({"& > *:not(style) ~ *:not(style)":{marginStart:e}}),vertical:e=>({"& > *:not(style) ~ *:not(style)":{marginTop:e}})},N=w(function(l,p){const{size:i,colorScheme:u,variant:m,className:j,spacing:G="0.5rem",isAttached:f,isDisabled:y,orientation:c="horizontal",...R}=l,T=E("chakra-button__group",j),D=z.useMemo(()=>({size:i,colorScheme:u,variant:m,isDisabled:y}),[i,u,m,y]);let O={display:"inline-flex",...f?k[c]:V[c](G)};const q=c==="vertical";return o.jsx(F,{value:D,children:o.jsx(M.div,{ref:p,role:"group",__css:O,className:T,"data-attached":f?"":void 0,"data-orientation":c,flexDir:q?"column":void 0,...R})})});N.displayName="ButtonGroup";const s=({btns:e,direction:l="row"})=>{const p={display:"flex",flexDirection:l,gap:".5em"};return o.jsx(o.Fragment,{children:o.jsx(N,{style:p,spacing:l=="column"&&"0",children:e.map((i,u)=>o.jsx(P,{...i},u))})})};s.propTypes={btns:t.arrayOf(t.shape({content:t.string.isRequired,buttonColor:t.oneOf(["gray","red","yellow","green","blue"]),iconName:t.string,primary:t.bool})).isRequired,direction:t.oneOf(["row","column"])};s.__docgenInfo={description:"",methods:[],displayName:"CellButtonGroup",props:{direction:{defaultValue:{value:"'row'",computed:!1},description:"",type:{name:"enum",value:[{value:"'row'",computed:!1},{value:"'column'",computed:!1}]},required:!1},btns:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{content:{name:"string",required:!0},buttonColor:{name:"enum",value:[{value:"'gray'",computed:!1},{value:"'red'",computed:!1},{value:"'yellow'",computed:!1},{value:"'green'",computed:!1},{value:"'blue'",computed:!1}],required:!1},iconName:{name:"string",required:!1},primary:{name:"bool",required:!1}}}},required:!0}}};const Q=Object.freeze(Object.defineProperty({__proto__:null,CellButtonGroup:s},Symbol.toStringTag,{value:"Module"})),A={title:"Cell Conponents/ButtonGroup",component:s,argTypes:{btns:{control:"object",description:"Pass `CellButton` parameters to create button group. The parameters include `primary` (boolean), `content` (text), `buttonColor` (select options), and `iconName` (react-icons/md). See more information in the `Button` story page."},direction:{control:"inline-radio",options:["row","column"],description:"The flex direction of `Button` components."}},tags:["autodocs"]},d=e=>o.jsx(s,{...e}),r=d.bind({});r.args={btns:[{primary:!0,content:"Button 1",buttonColor:"blue",iconName:""},{primary:!1,content:"Button 2",buttonColor:"blue",iconName:""}]};const a=d.bind({});a.args={btns:[{content:"Edit",buttonColor:"green",iconName:"MdEdit"},{content:"Delete",buttonColor:"red",iconName:"MdDelete"}]};const n=d.bind({});n.args={btns:[{content:"Edit",buttonColor:"green",iconName:"MdEdit"},{content:"Delete",buttonColor:"red",iconName:"MdDelete"}],direction:"column"};var b,g,_;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:"args => <CellButtonGroup {...args} />",...(_=(g=r.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var v,B,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:"args => <CellButtonGroup {...args} />",...(x=(B=a.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var C,h,S;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:"args => <CellButtonGroup {...args} />",...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const I=["Default","FunctionButtonGroup","FlexByColumn"],U=Object.freeze(Object.defineProperty({__proto__:null,Default:r,FlexByColumn:n,FunctionButtonGroup:a,__namedExportsOrder:I,default:A},Symbol.toStringTag,{value:"Module"}));export{Q as _,U as a};
