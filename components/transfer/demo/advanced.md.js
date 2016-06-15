webpackJsonp([69,359],{745:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(115),a(114)),o=t(p),c=(a(6),a(5)),e=t(c),u=a(1),l=t(u),i=a(2);t(i);n.exports={content:[["p","\u7a7f\u68ad\u6846\u9ad8\u7ea7\u7528\u6cd5\uff0c\u53ef\u914d\u7f6e\u64cd\u4f5c\u6587\u6848\uff0c\u53ef\u5b9a\u5236\u5bbd\u9ad8\uff0c\u53ef\u5bf9\u5e95\u90e8\u8fdb\u884c\u81ea\u5b9a\u4e49\u6e32\u67d3\u3002"]],meta:{order:2,title:"\u9ad8\u7ea7\u7528\u6cd5",filename:"components/transfer/demo/advanced.md",id:"components-transfer-demo-advanced"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Transfer<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      mockData<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      targetKeys<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >componentDidMount</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >getMock</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >getMock</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> targetKeys <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> mockData <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >for</span> <span class="token punctuation" >(</span><span class="token keyword" >let</span> i <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span> i <span class="token operator" >&lt;</span> <span class="token number" >20</span><span class="token punctuation" >;</span> i<span class="token operator" >++</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n        key<span class="token punctuation" >:</span> i<span class="token punctuation" >,</span>\n        title<span class="token punctuation" >:</span> <span class="token template-string" ><span class="token string" >`\u5185\u5bb9</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>i <span class="token operator" >+</span> <span class="token number" >1</span><span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >,</span>\n        description<span class="token punctuation" >:</span> <span class="token template-string" ><span class="token string" >`\u5185\u5bb9</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>i <span class="token operator" >+</span> <span class="token number" >1</span><span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >\u7684\u63cf\u8ff0`</span></span><span class="token punctuation" >,</span>\n        chosen<span class="token punctuation" >:</span> Math<span class="token punctuation" >.</span><span class="token function" >random</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >*</span> <span class="token number" >2</span> <span class="token operator" >></span> <span class="token number" >1</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n      <span class="token keyword" >if</span> <span class="token punctuation" >(</span>data<span class="token punctuation" >.</span>chosen<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n        targetKeys<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span>data<span class="token punctuation" >.</span>key<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span>\n      mockData<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span>data<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> mockData<span class="token punctuation" >,</span> targetKeys <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleChange</span><span class="token punctuation" >(</span>targetKeys<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> targetKeys <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >renderFooter</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ghost<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> float<span class="token punctuation" >:</span> <span class="token string" >\'right\'</span><span class="token punctuation" >,</span> margin<span class="token punctuation" >:</span> <span class="token number" >5</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>getMock<span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >></span></span>\n        \u5237\u65b0\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Transfer</span>\n        <span class="token attr-name" >dataSource</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>mockData<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >showSearch</span>\n        <span class="token attr-name" >listStyle</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span>\n          width<span class="token punctuation" >:</span> <span class="token number" >250</span><span class="token punctuation" >,</span>\n          height<span class="token punctuation" >:</span> <span class="token number" >300</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >operations</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'\u5411\u53f3\u64cd\u4f5c\u6587\u6848\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u5411\u5de6\u64cd\u4f5c\u6587\u6848\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >targetKeys</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>targetKeys<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleChange<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >render</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item <span class="token operator" >=</span><span class="token operator" >></span> <span class="token template-string" ><span class="token string" >`</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>item<span class="token punctuation" >.</span>title<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >-</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>item<span class="token punctuation" >.</span>description<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >footer</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>renderFooter<span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >/></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=l["default"].createClass({displayName:"App",getInitialState:function(){return{mockData:[],targetKeys:[]}},componentDidMount:function(){this.getMock()},getMock:function(){for(var n=[],s=[],a=0;20>a;a++){var t={key:a,title:"\u5185\u5bb9"+(a+1),description:"\u5185\u5bb9"+(a+1)+"\u7684\u63cf\u8ff0",chosen:2*Math.random()>1};t.chosen&&n.push(t.key),s.push(t)}this.setState({mockData:s,targetKeys:n})},handleChange:function(n){this.setState({targetKeys:n})},renderFooter:function(){return l["default"].createElement(e["default"],{type:"ghost",size:"small",style:{"float":"right",margin:5},onClick:this.getMock},"\u5237\u65b0")},render:function(){return l["default"].createElement(o["default"],{dataSource:this.state.mockData,showSearch:!0,listStyle:{width:250,height:300},operations:["\u5411\u53f3\u64cd\u4f5c\u6587\u6848","\u5411\u5de6\u64cd\u4f5c\u6587\u6848"],targetKeys:this.state.targetKeys,onChange:this.handleChange,render:function(n){return n.title+"-"+n.description},footer:this.renderFooter})}});return l["default"].createElement(n,null)}}}});