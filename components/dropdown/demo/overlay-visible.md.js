webpackJsonp([272,359],{538:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(70),s(69)),e=t(p),o=(s(9),s(7)),c=t(o),u=(s(21),s(20)),l=t(u),k=s(1),i=t(k),r=s(2);t(r);n.exports={content:[["p","\u9ed8\u8ba4\u662f\u70b9\u51fb\u5173\u95ed\u83dc\u5355\uff0c\u53ef\u4ee5\u5173\u95ed\u6b64\u529f\u80fd\u3002"]],meta:{order:6,title:"\u83dc\u5355\u9690\u85cf\u65b9\u5f0f",filename:"components/dropdown/demo/overlay-visible.md",id:"components-dropdown-demo-overlay-visible"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Menu<span class="token punctuation" >,</span> Dropdown<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> OverlayVisible <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      visible<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleMenuClick</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>e<span class="token punctuation" >.</span>key <span class="token operator" >===</span> <span class="token string" >\'3\'</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> visible<span class="token punctuation" >:</span> <span class="token boolean" >false</span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleVisibleChange</span><span class="token punctuation" >(</span>flag<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> visible<span class="token punctuation" >:</span> flag <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> menu <span class="token operator" >=</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleMenuClick<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u70b9\u6211\u4e0d\u4f1a\u5173\u95ed\u83dc\u5355<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u70b9\u6211\u8fd8\u662f\u4e0d\u4f1a\u5173\u95ed\u83dc\u5355<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>3<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u70b9\u6211\u624d\u4f1a\u5173\u95ed\u83dc\u5355<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Dropdown</span> <span class="token attr-name" >overlay</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>menu<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onVisibleChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleVisibleChange<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >visible</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>visible<span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-dropdown-link<span class="token punctuation" >"</span></span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          \u9f20\u6807\u79fb\u5165 <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>down<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Dropdown</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>OverlayVisible</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=i["default"].createClass({displayName:"OverlayVisible",getInitialState:function(){return{visible:!1}},handleMenuClick:function(n){"3"===n.key&&this.setState({visible:!1})},handleVisibleChange:function(n){this.setState({visible:n})},render:function(){var n=i["default"].createElement(l["default"],{onClick:this.handleMenuClick},i["default"].createElement(l["default"].Item,{key:"1"},"\u70b9\u6211\u4e0d\u4f1a\u5173\u95ed\u83dc\u5355"),i["default"].createElement(l["default"].Item,{key:"2"},"\u70b9\u6211\u8fd8\u662f\u4e0d\u4f1a\u5173\u95ed\u83dc\u5355"),i["default"].createElement(l["default"].Item,{key:"3"},"\u70b9\u6211\u624d\u4f1a\u5173\u95ed\u83dc\u5355"));return i["default"].createElement(e["default"],{overlay:n,onVisibleChange:this.handleVisibleChange,visible:this.state.visible},i["default"].createElement("a",{className:"ant-dropdown-link",href:"#"},"\u9f20\u6807\u79fb\u5165 ",i["default"].createElement(c["default"],{type:"down"})))}});return i["default"].createElement(n,null)}}}});