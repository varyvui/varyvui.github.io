import{d as F,g as V,E as b,c as R,a as l,w as a,r as s,o as k,G as v,e as h}from"./index-jtPpoW33.js";const E={class:"va-page-box"},T=F({__name:"form-validation",setup(M){const g=V(),x=V(),y=V(),i=b({name:"",phone:"",email:""}),w={name:[{type:"string",required:!0}],phone:[{required:!0},{type:"number",transform(d){return+d}}],email:[{required:!0},{type:"email",message:"Must be valid email!"}]},u=b({name:"",phone:"",email:"",url:""}),q={name:[{type:"string",required:!0}],phone:[{required:!0},{type:"number",transform(d){return+d}}],email:[{required:!0},{type:"email",message:"Must be valid email!"}],url:[{type:"url",required:!0}]},m=b({minLen:"",maxLen:"",minValue:"",maxValue:""}),U={minLen:[{required:!0},{validator(d,e,r,n,p){const t=[];e.length<6&&t.push(new Error("This value is too short. It should have 6 characters or more.")),r(t)}}],maxLen:[{required:!0},{validator(d,e,r,n,p){const t=[];e.length>6&&t.push(new Error("This value is too long. It should have 6 characters or fewer.")),r(t)}}],minValue:[{required:!0},{validator(d,e,r,n,p){const t=[];+e<6&&t.push(new Error("This value should be greater than or equal to 6.")),r(t)}}],maxValue:[{required:!0},{validator(d,e,r,n,p){const t=[];+e>6&&t.push(new Error("This value should be lower than or equal to 6.")),r(t)}}]};function S(d){}return(d,e)=>{const r=s("va-input"),n=s("va-form-item"),p=s("va-button"),t=s("va-form"),f=s("va-card"),_=s("va-col"),L=s("va-row");return k(),R("div",E,[l(L,{gutter:16},{default:a(()=>[l(_,{lg:6},{default:a(()=>[l(f,{header:"General Form"},{default:a(()=>[l(t,{ref_key:"formRef",ref:g,rules:w,group:i,inline:"",onSubmit:e[4]||(e[4]=v(()=>{},["prevent"]))},{default:a(()=>[l(n,{"label-width":"80px",name:"name",label:"Name"},{default:a(()=>[l(r,{placeholder:"name",modelValue:i.name,"onUpdate:modelValue":e[0]||(e[0]=o=>i.name=o),border:""},null,8,["modelValue"])]),_:1}),l(n,{"label-width":"80px",name:"phone",label:"Phone"},{default:a(()=>[l(r,{placeholder:"phone",modelValue:i.phone,"onUpdate:modelValue":e[1]||(e[1]=o=>i.phone=o),border:""},null,8,["modelValue"])]),_:1}),l(n,{"label-width":"80px",name:"email",label:"Email"},{default:a(()=>[l(r,{placeholder:"email",modelValue:i.email,"onUpdate:modelValue":e[2]||(e[2]=o=>i.email=o),border:""},null,8,["modelValue"])]),_:1}),l(n,null,{default:a(()=>[l(p,{onClick:e[3]||(e[3]=o=>void 0),theme:"primary"},{default:a(()=>[h(" Submit ")]),_:1})]),_:1})]),_:1},8,["group"])]),_:1}),l(f,{header:"Range Validation",class:"m-t-20"},{default:a(()=>[l(t,{ref_key:"rangeFormRef",ref:x,rules:U,group:m,inline:"",onSubmit:e[10]||(e[10]=v(()=>{},["prevent"]))},{default:a(()=>[l(n,{name:"minLen"},{default:a(()=>[l(r,{placeholder:"Min 6 chars",modelValue:m.minLen,"onUpdate:modelValue":e[5]||(e[5]=o=>m.minLen=o),border:""},null,8,["modelValue"])]),_:1}),l(n,{name:"maxLen"},{default:a(()=>[l(r,{placeholder:"Max 6 chars",modelValue:m.maxLen,"onUpdate:modelValue":e[6]||(e[6]=o=>m.maxLen=o),border:""},null,8,["modelValue"])]),_:1}),l(n,{name:"minValue"},{default:a(()=>[l(r,{placeholder:"Min value is 6",modelValue:m.minValue,"onUpdate:modelValue":e[7]||(e[7]=o=>m.minValue=o),border:""},null,8,["modelValue"])]),_:1}),l(n,{name:"maxValue"},{default:a(()=>[l(r,{placeholder:"Max value is 6",modelValue:m.maxValue,"onUpdate:modelValue":e[8]||(e[8]=o=>m.maxValue=o),border:""},null,8,["modelValue"])]),_:1}),l(n,null,{default:a(()=>[l(p,{onClick:e[9]||(e[9]=o=>void 0),theme:"primary"},{default:a(()=>[h(" Submit ")]),_:1})]),_:1})]),_:1},8,["group"])]),_:1})]),_:1}),l(_,{lg:6},{default:a(()=>[l(f,{header:"Validation Type"},{default:a(()=>[l(t,{ref_key:"typeFormRef",ref:y,rules:q,group:u,inline:"",onSubmit:e[16]||(e[16]=v(()=>{},["prevent"]))},{default:a(()=>[l(n,{"label-width":"80px",name:"name",label:"Name"},{default:a(()=>[l(r,{placeholder:"name",modelValue:u.name,"onUpdate:modelValue":e[11]||(e[11]=o=>u.name=o),border:""},null,8,["modelValue"])]),_:1}),l(n,{"label-width":"80px",name:"phone",label:"Phone"},{default:a(()=>[l(r,{placeholder:"phone",modelValue:u.phone,"onUpdate:modelValue":e[12]||(e[12]=o=>u.phone=o),border:""},null,8,["modelValue"])]),_:1}),l(n,{"label-width":"80px",name:"email",label:"Email"},{default:a(()=>[l(r,{placeholder:"email",modelValue:u.email,"onUpdate:modelValue":e[13]||(e[13]=o=>u.email=o),border:""},null,8,["modelValue"])]),_:1}),l(n,{"label-width":"80px",name:"url",label:"Url"},{default:a(()=>[l(r,{placeholder:"url",modelValue:u.url,"onUpdate:modelValue":e[14]||(e[14]=o=>u.url=o),border:""},null,8,["modelValue"])]),_:1}),l(n,null,{default:a(()=>[l(p,{onClick:e[15]||(e[15]=o=>void 0),theme:"primary"},{default:a(()=>[h(" Submit ")]),_:1})]),_:1})]),_:1},8,["group"])]),_:1})]),_:1})]),_:1})])}}});export{T as default};
