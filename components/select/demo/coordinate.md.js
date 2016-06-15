webpackJsonp([154,359],{658:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(15),s(14)),o=t(p),c=s(1),e=t(c),u=s(2);t(u);n.exports={content:[["p","\u7701\u5e02\u8054\u52a8\u662f\u5178\u578b\u7684\u4f8b\u5b50\u3002"],["p","\u63a8\u8350\u4f7f\u7528 ",["a",{title:null,href:"/components/cascader"},"Cascader"]," \u7ec4\u4ef6\u3002"]],meta:{order:6,title:"\u8054\u52a8",filename:"components/select/demo/coordinate.md",id:"components-select-demo-coordinate"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Select <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Option <span class="token operator" >=</span> Select<span class="token punctuation" >.</span>Option<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> provinceData <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token string" >\'\u6d59\u6c5f\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u6c5f\u82cf\'</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> cityData <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n  \u6d59\u6c5f<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'\u676d\u5dde\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u5b81\u6ce2\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u6e29\u5dde\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  \u6c5f\u82cf<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'\u5357\u4eac\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u82cf\u5dde\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u9547\u6c5f\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      cities<span class="token punctuation" >:</span> cityData<span class="token punctuation" >[</span>provinceData<span class="token punctuation" >[</span><span class="token number" >0</span><span class="token punctuation" >]</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      secondCity<span class="token punctuation" >:</span> cityData<span class="token punctuation" >[</span>provinceData<span class="token punctuation" >[</span><span class="token number" >0</span><span class="token punctuation" >]</span><span class="token punctuation" >]</span><span class="token punctuation" >[</span><span class="token number" >0</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleProvinceChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      cities<span class="token punctuation" >:</span> cityData<span class="token punctuation" >[</span>value<span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      secondCity<span class="token punctuation" >:</span> cityData<span class="token punctuation" >[</span>value<span class="token punctuation" >]</span><span class="token punctuation" >[</span><span class="token number" >0</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onSecondCityChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      secondCity<span class="token punctuation" >:</span> value<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> provinceOptions <span class="token operator" >=</span> provinceData<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span>province <span class="token operator" >=</span><span class="token operator" >></span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>province<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>province<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> cityOptions <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>cities<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span>city <span class="token operator" >=</span><span class="token operator" >></span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>city<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>city<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Select</span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>provinceData<span class="token punctuation" >[</span><span class="token number" >0</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >90</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleProvinceChange<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token punctuation" >{</span>provinceOptions<span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Select</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Select</span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>secondCity<span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >90</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onSecondCityChange<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token punctuation" >{</span>cityOptions<span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Select</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=o["default"].Option,a=["\u6d59\u6c5f","\u6c5f\u82cf"],s={"\u6d59\u6c5f":["\u676d\u5dde","\u5b81\u6ce2","\u6e29\u5dde"],"\u6c5f\u82cf":["\u5357\u4eac","\u82cf\u5dde","\u9547\u6c5f"]},t=e["default"].createClass({displayName:"App",getInitialState:function(){return{cities:s[a[0]],secondCity:s[a[0]][0]}},handleProvinceChange:function(n){this.setState({cities:s[n],secondCity:s[n][0]})},onSecondCityChange:function(n){this.setState({secondCity:n})},render:function(){var s=a.map(function(a){return e["default"].createElement(n,{key:a},a)}),t=this.state.cities.map(function(a){return e["default"].createElement(n,{key:a},a)});return e["default"].createElement("div",null,e["default"].createElement(o["default"],{defaultValue:a[0],style:{width:90},onChange:this.handleProvinceChange},s),e["default"].createElement(o["default"],{value:this.state.secondCity,style:{width:90},onChange:this.onSecondCityChange},t))}});return e["default"].createElement(t,null)}}}});