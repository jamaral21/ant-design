webpackJsonp([145,359],{668:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(83),s(82)),e=t(p),o=s(1),c=t(o),u=s(2);t(u);n.exports={content:[["p","\u5f53 Slider \u7684\u503c\u53d1\u751f\u6539\u53d8\u65f6\uff0c\u4f1a\u89e6\u53d1 ",["code","onChange"]," \u4e8b\u4ef6\uff0c\u5e76\u628a\u6539\u53d8\u540e\u7684\u503c\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002\u5728 ",["code","onmouseup"]," \u65f6\uff0c\u4f1a\u89e6\u53d1 ",["code","onAfterChange"]," \u4e8b\u4ef6\uff0c\u5e76\u628a\u5f53\u524d\u503c\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002"]],meta:{order:4,title:"\u4e8b\u4ef6",filename:"components/slider/demo/event.md",id:"components-slider-demo-event"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Slider <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >log</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Slider</span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >30</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>log<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Slider</span> <span class="token attr-name" >range</span> <span class="token attr-name" >step</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >10</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token number" >20</span><span class="token punctuation" >,</span> <span class="token number" >50</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>log<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Slider</span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >30</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onAfterChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>log<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log(n)}return c["default"].createElement("div",null,c["default"].createElement(e["default"],{defaultValue:30,onChange:n}),c["default"].createElement(e["default"],{range:!0,step:10,defaultValue:[20,50],onChange:n}),c["default"].createElement(e["default"],{defaultValue:30,onAfterChange:n}))}}}});