import{S as h,g as p}from"./Spinner.d39451d1.js";import{c as d}from"./ClothingPage.94ac33f0.js";import{_ as l,r as i,o as n,c}from"./index.667d2123.js";import"./_commonjsHelpers.b8add541.js";const g={data(){return{kidsClothes:[],isLoading:!1}},components:{clothingPage:d,Spinner:h},created(){this.getKidsClothes()},methods:{async getKidsClothes(){this.isLoading=!0;try{const{data:s}=await p.getClothes("kids");s.values.forEach(o=>{const t={id:o[0],name:o[1],price:o[2],picture:o[3],product_img:o[4]};this.kidsClothes.push(t)}),this.isLoading=!1}catch(s){console.log(s),this.isLoading=!1}}}};function _(s,o,t,f,e,u){const r=i("Spinner"),a=i("clothing-page");return e.isLoading===!0?(n(),c(r,{key:0})):(n(),c(a,{key:1,"kids-clothes":e.kidsClothes},null,8,["kids-clothes"]))}const S=l(g,[["render",_]]);export{S as default};
