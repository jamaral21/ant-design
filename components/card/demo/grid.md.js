webpackJsonp([316,359],{493:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(27),s(26)),e=t(p),o=(s(18),s(17)),c=t(o),l=(s(94),s(93)),u=t(l),k=s(1),i=t(k),r=s(2);t(r);n.exports={content:{"zh-CN":[["p","\u5728\u7cfb\u7edf\u6982\u89c8\u9875\u9762\u5e38\u5e38\u548c\u6805\u683c\u8fdb\u884c\u914d\u5408\u3002"]],"en-US":[["p","Cards usually cooperate with grid layout in overview page."]]},meta:{order:4,title:{"zh-CN":"\u6805\u683c\u5361\u7247","en-US":"Grid card"},filename:"components/card/demo/grid.md",id:"components-card-demo-grid"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Card<span class="token punctuation" >,</span> Col<span class="token punctuation" >,</span> Row <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> background<span class="token punctuation" >:</span> <span class="token string" >\'#ECECEC\'</span><span class="token punctuation" >,</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'30px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>8<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Card</span> <span class="token attr-name" >title"</span> <span class="token attr-name" >bordered</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Card content<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Card</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>8<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Card</span> <span class="token attr-name" >title"</span> <span class="token attr-name" >bordered</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Card content<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Card</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>8<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Card</span> <span class="token attr-name" >title"</span> <span class="token attr-name" >bordered</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Card content<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Card</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return i["default"].createElement("div",{style:{background:"#ECECEC",padding:"30px"}},i["default"].createElement(e["default"],null,i["default"].createElement(c["default"],{span:"8"},i["default"].createElement(u["default"],{title:"Card title",bordered:!1},"Card content")),i["default"].createElement(c["default"],{span:"8"},i["default"].createElement(u["default"],{title:"Card title",bordered:!1},"Card content")),i["default"].createElement(c["default"],{span:"8"},i["default"].createElement(u["default"],{title:"Card title",bordered:!1},"Card content"))))},style:"/* Increase grid spacing of 16px  */\n.code-box-demo .ant-row {\n  margin-left: -8px;\n  margin-right: -8px;\n}\n.code-box-demo .ant-row > div {\n  padding: 0 8px;\n}",highlightedStyle:'<span class="token comment" spellcheck="true">/* Increase grid spacing of 16px  */</span>\n<span class="token selector" ><span class="token class" >.code-box-demo</span> <span class="token class" >.ant-row</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-left</span><span class="token punctuation" >:</span> -<span class="token number" >8</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> -<span class="token number" >8</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.code-box-demo</span> <span class="token class" >.ant-row</span> > div </span><span class="token punctuation" >{</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >0</span> <span class="token number" >8</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});