webpackJsonp([321,359],{488:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(92),a(91)),o=t(p),e=a(1),c=t(e),u=a(2);t(u);n.exports={content:{"zh-CN":[["p","\u4e00\u4e2a\u590d\u6742\u7684\u5e94\u7528\u793a\u4f8b\u3002"],["h2","en_US"],["p","A complex application."],["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Calendar <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >getListData</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >let</span> listData<span class="token punctuation" >;</span>\n  <span class="token keyword" >switch</span> <span class="token punctuation" >(</span>value<span class="token punctuation" >.</span><span class="token function" >getDayOfMonth</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >case</span> <span class="token number" >8</span><span class="token punctuation" >:</span>\n      listData <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'warning\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u8b66\u544a\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'normal\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u666e\u901a\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >;</span> <span class="token keyword" >break</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >case</span> <span class="token number" >10</span><span class="token punctuation" >:</span>\n      listData <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'warning\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u8b66\u544a\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'normal\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u666e\u901a\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'error\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >;</span> <span class="token keyword" >break</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >case</span> <span class="token number" >15</span><span class="token punctuation" >:</span>\n      listData <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'warning\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u8b66\u544a\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'normal\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u666e\u901a\u4e8b\u9879\u597d\u957f\u554a\u3002\u3002....\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'error\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'error\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'error\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'error\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >;</span> <span class="token keyword" >break</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >default</span><span class="token punctuation" >:</span>\n  <span class="token punctuation" >}</span>\n  <span class="token keyword" >return</span> listData <span class="token operator" >||</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >dateCellRender</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >let</span> listData <span class="token operator" >=</span> <span class="token function" >getListData</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ul</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>events<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token punctuation" >{</span>\n        listData<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>item<span class="token punctuation" >,</span> index<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>index<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >className</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token template-string" ><span class="token string" >`event-</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>item<span class="token punctuation" >.</span>type<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u25cf<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n            <span class="token punctuation" >{</span>item<span class="token punctuation" >.</span>content<span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >)</span>\n      <span class="token punctuation" >}</span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>ul</span><span class="token punctuation" >></span></span>\n  <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >getMonthData</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >if</span> <span class="token punctuation" >(</span>value<span class="token punctuation" >.</span><span class="token function" >getMonth</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >===</span> <span class="token number" >8</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token number" >1394</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >monthCellRender</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >let</span> num <span class="token operator" >=</span> <span class="token function" >getMonthData</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >return</span> num <span class="token operator" >?</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>notes-month<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>section</span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>num<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>section</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u5f85\u529e\u4e8b\u9879\u6570<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span> <span class="token punctuation" >:</span> <span class="token keyword" >null</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Calendar</span> <span class="token attr-name" >dateCellRender</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>dateCellRender<span class="token punctuation" >}</span></span> <span class="token attr-name" >monthCellRender</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>monthCellRender<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'},["code","import { Calendar } from 'antd';\n\nfunction getListData(value) {\n  let listData;\n  switch (value.getDayOfMonth()) {\n    case 8:\n      listData = [\n        { type: 'warning', content: '\u8fd9\u91cc\u662f\u8b66\u544a\u4e8b\u9879.' },\n        { type: 'normal', content: '\u8fd9\u91cc\u662f\u666e\u901a\u4e8b\u9879.' },\n      ]; break;\n    case 10:\n      listData = [\n        { type: 'warning', content: '\u8fd9\u91cc\u662f\u8b66\u544a\u4e8b\u9879.' },\n        { type: 'normal', content: '\u8fd9\u91cc\u662f\u666e\u901a\u4e8b\u9879.' },\n        { type: 'error', content: '\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879.' },\n      ]; break;\n    case 15:\n      listData = [\n        { type: 'warning', content: '\u8fd9\u91cc\u662f\u8b66\u544a\u4e8b\u9879.' },\n        { type: 'normal', content: '\u8fd9\u91cc\u662f\u666e\u901a\u4e8b\u9879\u597d\u957f\u554a\u3002\u3002....' },\n        { type: 'error', content: '\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879.' },\n        { type: 'error', content: '\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879.' },\n        { type: 'error', content: '\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879.' },\n        { type: 'error', content: '\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879.' },\n      ]; break;\n    default:\n  }\n  return listData || [];\n}\n\nfunction dateCellRender(value) {\n  let listData = getListData(value);\n  return (\n    <ul className=\"events\">\n      {\n        listData.map((item, index) =>\n          <li key={index}>\n            <span className={`event-${item.type}`}>\u25cf</span>\n            {item.content}\n          </li>\n        )\n      }\n    </ul>\n  );\n}\n\nfunction getMonthData(value) {\n  if (value.getMonth() === 8) {\n    return 1394;\n  }\n}\n\nfunction monthCellRender(value) {\n  let num = getMonthData(value);\n  return num ? <div className=\"notes-month\">\n    <section>{num}</section>\n    <span>\u5f85\u529e\u4e8b\u9879\u6570</span>\n  </div> : null;\n}\n\nReactDOM.render(\n  <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />\n, mountNode);"]]],"en-US":[["h2","zh-CN"],["p","\u4e00\u4e2a\u590d\u6742\u7684\u5e94\u7528\u793a\u4f8b\u3002"],["h2","en_US"],["p","A complex application."]]},meta:{order:2,title:{"zh-CN":"\u901a\u77e5\u4e8b\u9879\u65e5\u5386\u6f14\u793a","en-US":"A demo of Notice Calendar"},filename:"components/calendar/demo/notice-calendar.md",id:"components-calendar-demo-notice-calendar"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en_US"},"en_US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Calendar <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >getListData</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >let</span> listData<span class="token punctuation" >;</span>\n  <span class="token keyword" >switch</span> <span class="token punctuation" >(</span>value<span class="token punctuation" >.</span><span class="token function" >getDayOfMonth</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >case</span> <span class="token number" >8</span><span class="token punctuation" >:</span>\n      listData <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'warning\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u8b66\u544a\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'normal\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u666e\u901a\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >;</span> <span class="token keyword" >break</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >case</span> <span class="token number" >10</span><span class="token punctuation" >:</span>\n      listData <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'warning\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u8b66\u544a\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'normal\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u666e\u901a\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'error\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >;</span> <span class="token keyword" >break</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >case</span> <span class="token number" >15</span><span class="token punctuation" >:</span>\n      listData <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'warning\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u8b66\u544a\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'normal\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u666e\u901a\u4e8b\u9879\u597d\u957f\u554a\u3002\u3002....\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'error\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'error\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'error\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'error\'</span><span class="token punctuation" >,</span> content<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879.\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >;</span> <span class="token keyword" >break</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >default</span><span class="token punctuation" >:</span>\n  <span class="token punctuation" >}</span>\n  <span class="token keyword" >return</span> listData <span class="token operator" >||</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >dateCellRender</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >let</span> listData <span class="token operator" >=</span> <span class="token function" >getListData</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ul</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>events<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token punctuation" >{</span>\n        listData<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>item<span class="token punctuation" >,</span> index<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>index<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >className</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token template-string" ><span class="token string" >`event-</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>item<span class="token punctuation" >.</span>type<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u25cf<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n            <span class="token punctuation" >{</span>item<span class="token punctuation" >.</span>content<span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >)</span>\n      <span class="token punctuation" >}</span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>ul</span><span class="token punctuation" >></span></span>\n  <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >getMonthData</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >if</span> <span class="token punctuation" >(</span>value<span class="token punctuation" >.</span><span class="token function" >getMonth</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >===</span> <span class="token number" >8</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token number" >1394</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >monthCellRender</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >let</span> num <span class="token operator" >=</span> <span class="token function" >getMonthData</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >return</span> num <span class="token operator" >?</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>notes-month<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>section</span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>num<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>section</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u5f85\u529e\u4e8b\u9879\u6570<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span> <span class="token punctuation" >:</span> <span class="token keyword" >null</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Calendar</span> <span class="token attr-name" >dateCellRender</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>dateCellRender<span class="token punctuation" >}</span></span> <span class="token attr-name" >monthCellRender</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>monthCellRender<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){var s=void 0;switch(n.getDayOfMonth()){case 8:s=[{type:"warning",content:"\u8fd9\u91cc\u662f\u8b66\u544a\u4e8b\u9879."},{type:"normal",content:"\u8fd9\u91cc\u662f\u666e\u901a\u4e8b\u9879."}];break;case 10:s=[{type:"warning",content:"\u8fd9\u91cc\u662f\u8b66\u544a\u4e8b\u9879."},{type:"normal",content:"\u8fd9\u91cc\u662f\u666e\u901a\u4e8b\u9879."},{type:"error",content:"\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879."}];break;case 15:s=[{type:"warning",content:"\u8fd9\u91cc\u662f\u8b66\u544a\u4e8b\u9879."},{type:"normal",content:"\u8fd9\u91cc\u662f\u666e\u901a\u4e8b\u9879\u597d\u957f\u554a\u3002\u3002...."},{type:"error",content:"\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879."},{type:"error",content:"\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879."},{type:"error",content:"\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879."},{type:"error",content:"\u8fd9\u91cc\u662f\u9519\u8bef\u4e8b\u9879."
}]}return s||[]}function s(s){var a=n(s);return c["default"].createElement("ul",{className:"events"},a.map(function(n,s){return c["default"].createElement("li",{key:s},c["default"].createElement("span",{className:"event-"+n.type},"\u25cf"),n.content)}))}function a(n){return 8===n.getMonth()?1394:void 0}function t(n){var s=a(n);return s?c["default"].createElement("div",{className:"notes-month"},c["default"].createElement("section",null,s),c["default"].createElement("span",null,"\u5f85\u529e\u4e8b\u9879\u6570")):null}return c["default"].createElement(o["default"],{dateCellRender:s,monthCellRender:t})},style:".events {\n  line-height: 24px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.events li {\n  color: #999;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.events li span {\n  vertical-align: middle;\n}\n\n.events li span:first-child {\n  font-size: 9px;\n  margin-right: 4px;\n}\n\n.event-warning {\n  color: #fac450;\n}\n\n.event-normal {\n  color: #2db7f5;\n}\n\n.event-error {\n  color: #f50;\n}\n\n.notes-month {\n  text-align: center;\n}\n.notes-month section {\n  font-size: 28px;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.events</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >line-height</span><span class="token punctuation" >:</span> <span class="token number" >24</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >list-style</span><span class="token punctuation" >:</span> none<span class="token punctuation" >;</span>\n  <span class="token property" >margin</span><span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.events</span> li </span><span class="token punctuation" >{</span>\n  <span class="token property" >color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#999</span><span class="token punctuation" >;</span>\n  <span class="token property" >overflow</span><span class="token punctuation" >:</span> hidden<span class="token punctuation" >;</span>\n  <span class="token property" >text-overflow</span><span class="token punctuation" >:</span> ellipsis<span class="token punctuation" >;</span>\n  <span class="token property" >white-space</span><span class="token punctuation" >:</span> nowrap<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.events</span> li span </span><span class="token punctuation" >{</span>\n  <span class="token property" >vertical-align</span><span class="token punctuation" >:</span> middle<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.events</span> li span<span class="token pseudo-class" >:first-child</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >font-size</span><span class="token punctuation" >:</span> <span class="token number" >9</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >4</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.event-warning</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#fac450</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.event-normal</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#2db7f5</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.event-error</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#f50</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.notes-month</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >text-align</span><span class="token punctuation" >:</span> center<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.notes-month</span> section </span><span class="token punctuation" >{</span>\n  <span class="token property" >font-size</span><span class="token punctuation" >:</span> <span class="token number" >28</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});