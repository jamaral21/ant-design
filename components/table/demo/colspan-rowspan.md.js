webpackJsonp([118,359],{696:function(n,s,a){"use strict";function p(n){return n&&n.__esModule?n:{"default":n}}var t=(a(23),a(22)),o=p(t),c=a(1),e=p(c),u=a(2);p(u);n.exports={content:[["p","\u8868\u5934\u53ea\u652f\u6301\u5217\u5408\u5e76\uff0c\u4f7f\u7528 column \u91cc\u7684 colSpan \u8fdb\u884c\u8bbe\u7f6e\u3002"],["p","\u8868\u683c\u652f\u6301\u884c/\u5217\u5408\u5e76\uff0c\u4f7f\u7528 render \u91cc\u7684\u5355\u5143\u683c\u5c5e\u6027 colSpan \u6216\u8005 rowSpan \u8bbe\u503c\u4e3a 0 \u65f6\uff0c\u8bbe\u7f6e\u7684\u8868\u683c\u4e0d\u4f1a\u6e32\u67d3\u3002"]],meta:{order:13,title:"\u8868\u683c\u884c/\u5217\u5408\u5e76",filename:"components/table/demo/colspan-rowspan.md",id:"components-table-demo-colspan-rowspan"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Table <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token comment" spellcheck="true">// \u4e8b\u4f8b\u8868\u4e2d\u7b2c\u56db\u884c\u5408\u5e76\u4e86\u4e94\u5217\uff0c\u9664\u4e86\u7b2c\u4e00\u5217\u8bbe\u7f6e colSpan = 5 \u5916</span>\n<span class="token comment" spellcheck="true">// \u5176\u4ed6\u5217\u7684\u7b2c\u56db\u884c colSpan = 0 (\u88ab\u5408\u5e76\u6389\uff0c\u4e0d\u4f1a\u6e32\u67d3)</span>\n<span class="token keyword" >const</span> renderContent <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span>value<span class="token punctuation" >,</span> row<span class="token punctuation" >,</span> index<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >let</span> obj <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n    children<span class="token punctuation" >:</span> value<span class="token punctuation" >,</span>\n    props<span class="token punctuation" >:</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >if</span> <span class="token punctuation" >(</span>index <span class="token operator" >===</span> <span class="token number" >4</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    obj<span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>colSpan <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n  <span class="token keyword" >return</span> obj<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> columns <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u59d3\u540d\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span>text<span class="token punctuation" >,</span> row<span class="token punctuation" >,</span> index<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>index <span class="token operator" >&lt;</span> <span class="token number" >4</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >return</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      children<span class="token punctuation" >:</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n      props<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        colSpan<span class="token punctuation" >:</span> <span class="token number" >5</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u5e74\u9f84\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span>\n  render<span class="token punctuation" >:</span> renderContent<span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u5bb6\u5ead\u7535\u8bdd\'</span><span class="token punctuation" >,</span>\n  colSpan<span class="token punctuation" >:</span> <span class="token number" >2</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'tel\'</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span>value<span class="token punctuation" >,</span> row<span class="token punctuation" >,</span> index<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >let</span> obj <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n      children<span class="token punctuation" >:</span> value<span class="token punctuation" >,</span>\n      props<span class="token punctuation" >:</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    <span class="token comment" spellcheck="true">// \u7b2c\u4e09\u5217\u7684\u7b2c\u4e09\u884c\u884c\u5408\u5e76</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>index <span class="token operator" >===</span> <span class="token number" >2</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      obj<span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>rowSpan <span class="token operator" >=</span> <span class="token number" >2</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n\n    <span class="token comment" spellcheck="true">// \u7b2c\u4e09\u5217\u7684\u7b2c\u56db\u884c\u88ab\u5408\u5e76\u6ca1\u4e86\uff0c\u8bbe\u7f6e rowSpan = 0 \u76f4\u63a5\u4e0d\u7528\u6e32\u67d3</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>index <span class="token operator" >===</span> <span class="token number" >3</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      obj<span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>rowSpan <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>index <span class="token operator" >===</span> <span class="token number" >4</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      obj<span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>colSpan <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >return</span> obj<span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u624b\u673a\u53f7\'</span><span class="token punctuation" >,</span>\n  colSpan<span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'phone\'</span><span class="token punctuation" >,</span>\n  render<span class="token punctuation" >:</span> renderContent<span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u4f4f\u5740\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span><span class="token punctuation" >,</span>\n  render<span class="token punctuation" >:</span> renderContent<span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'1\'</span><span class="token punctuation" >,</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u80e1\u5f66\u658c\'</span><span class="token punctuation" >,</span>\n  age<span class="token punctuation" >:</span> <span class="token number" >32</span><span class="token punctuation" >,</span>\n  tel<span class="token punctuation" >:</span> <span class="token string" >\'0571-22098909\'</span><span class="token punctuation" >,</span>\n  phone<span class="token punctuation" >:</span> <span class="token number" >18889898989</span><span class="token punctuation" >,</span>\n  address<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'2\'</span><span class="token punctuation" >,</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u80e1\u5f66\u7956\'</span><span class="token punctuation" >,</span>\n  tel<span class="token punctuation" >:</span> <span class="token string" >\'0571-22098333\'</span><span class="token punctuation" >,</span>\n  phone<span class="token punctuation" >:</span> <span class="token number" >18889898888</span><span class="token punctuation" >,</span>\n  age<span class="token punctuation" >:</span> <span class="token number" >42</span><span class="token punctuation" >,</span>\n  address<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'3\'</span><span class="token punctuation" >,</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u674e\u5927\u5634\'</span><span class="token punctuation" >,</span>\n  age<span class="token punctuation" >:</span> <span class="token number" >32</span><span class="token punctuation" >,</span>\n  tel<span class="token punctuation" >:</span> <span class="token string" >\'0575-22098909\'</span><span class="token punctuation" >,</span>\n  phone<span class="token punctuation" >:</span> <span class="token number" >18900010002</span><span class="token punctuation" >,</span>\n  address<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'4\'</span><span class="token punctuation" >,</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u674e\u592b\u4eba\'</span><span class="token punctuation" >,</span>\n  age<span class="token punctuation" >:</span> <span class="token number" >18</span><span class="token punctuation" >,</span>\n  tel<span class="token punctuation" >:</span> <span class="token string" >\'0575-22098909\'</span><span class="token punctuation" >,</span>\n  phone<span class="token punctuation" >:</span> <span class="token number" >18900010002</span><span class="token punctuation" >,</span>\n  address<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'5\'</span><span class="token punctuation" >,</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u4e60\u5927\u5927\'</span><span class="token punctuation" >,</span>\n  age<span class="token punctuation" >:</span> <span class="token number" >18</span><span class="token punctuation" >,</span>\n  tel<span class="token punctuation" >:</span> <span class="token string" >\'0575-22098909\'</span><span class="token punctuation" >,</span>\n  phone<span class="token punctuation" >:</span> <span class="token number" >18900010002</span><span class="token punctuation" >,</span>\n  address<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Table</span> <span class="token attr-name" >columns</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>columns<span class="token punctuation" >}</span></span> <span class="token attr-name" >dataSource</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>data<span class="token punctuation" >}</span></span> <span class="token attr-name" >bordered</span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(n,s,a){var p={children:n,props:{}};return 4===a&&(p.props.colSpan=0),p},s=[{title:"\u59d3\u540d",dataIndex:"name",render:function(n,s,a){return 4>a?e["default"].createElement("a",{href:"#"},n):{children:e["default"].createElement("a",{href:"#"},n),props:{colSpan:5}}}},{title:"\u5e74\u9f84",dataIndex:"age",render:n},{title:"\u5bb6\u5ead\u7535\u8bdd",colSpan:2,dataIndex:"tel",render:function(n,s,a){var p={children:n,props:{}};return 2===a&&(p.props.rowSpan=2),3===a&&(p.props.rowSpan=0),4===a&&(p.props.colSpan=0),p}},{title:"\u624b\u673a\u53f7",colSpan:0,dataIndex:"phone",render:n},{title:"\u4f4f\u5740",dataIndex:"address",render:n}],a=[{key:"1",name:"\u80e1\u5f66\u658c",age:32,tel:"0571-22098909",phone:18889898989,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7"},{key:"2",name:"\u80e1\u5f66\u7956",tel:"0571-22098333",phone:18889898888,age:42,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7"},{key:"3",name:"\u674e\u5927\u5634",age:32,tel:"0575-22098909",phone:18900010002,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7"},{key:"4",name:"\u674e\u592b\u4eba",age:18,tel:"0575-22098909",phone:18900010002,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7"},{key:"5",name:"\u4e60\u5927\u5927",age:18,tel:"0575-22098909",phone:18900010002,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7"}];return e["default"].createElement(o["default"],{columns:s,dataSource:a,bordered:!0})}}}});