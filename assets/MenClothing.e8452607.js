import{S as h,g as p}from"./Spinner.d39451d1.js";import{c as l}from"./ClothingPage.94ac33f0.js";import{_ as g,r as n,o as c,c as r}from"./index.667d2123.js";import"./_commonjsHelpers.b8add541.js";const m={data(){return{menClothes:[],isLoading:!1}},components:{clothingPage:l,Spinner:h},created(){this.getMenClothes()},methods:{async getMenClothes(){this.isLoading=!0;try{const{data:e}=await p.getClothes("men");e.values.forEach(o=>{const t={id:o[0],name:o[1],price:o[2],picture:o[3],product_img:o[4]};this.menClothes.push(t)}),this.isLoading=!1}catch(e){console.log(e),this.isLoading=!1}}}};function _(e,o,t,d,s,f){const i=n("Spinner"),a=n("clothing-page");return s.isLoading===!0?(c(),r(i,{key:0})):(c(),r(a,{key:1,"men-clothes":s.menClothes},null,8,["men-clothes"]))}const k=g(m,[["render",_]]);export{k as default};