webpackJsonp([36],{"0SFF":function(t,i){},TSiE:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("ESgT"),e=s("P9l9"),n={name:"index",components:{Loading:a.default},data:function(){return{explainList:[],verDialogVisible:!0}},created:function(){this.getindCreditsAndGs()},methods:{back:function(){this.$router.back()},getindCreditsAndGs:function(){var t=this;e.a.post("findCreditsAndGs",{},"json",function(i,s){i.success?(t.explainList=i.data.creditsAndGs,t.verDialogVisible=!1):alert(i.status)})}}},c={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"jf_explain"},[a("div",{staticClass:"jf_explain_head"},[a("div",{staticClass:"back",on:{click:function(i){i.stopPropagation(),t.back()}}},[a("img",{attrs:{src:s("NDbq"),alt:""}})]),t._v(" "),a("div",{staticClass:"head"},[t._v("积分说明")])]),t._v(" "),a("div",{staticClass:"jf_explain_contain"},t._l(t.explainList,function(i){return a("div",{key:i.code,staticClass:"container_list"},[a("div",{staticClass:"list_top"},[a("div",{staticClass:"shu"}),t._v(" "),a("div",{staticClass:"list_title"},[t._v(t._s(i.title))])]),t._v(" "),a("div",{staticClass:"list_content"},[t._v("\n                "+t._s(i.content)+"积"+t._s(i.completeScore)+"分，每日上限"+t._s(i.topScore)+"分\n            ")])])})),t._v(" "),a("Loading",{attrs:{dialogVisible:t.verDialogVisible}})],1)},staticRenderFns:[]};var l=s("VU/8")(n,c,!1,function(t){s("0SFF")},"data-v-25c8f038",null);i.default=l.exports}});
//# sourceMappingURL=36.f8d7b706f68b9e85aa5c.js.map