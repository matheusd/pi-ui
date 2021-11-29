(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./src/docs/tabs.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return T}));var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),b=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),c=a("./node_modules/react/index.js"),s=a("./node_modules/@mdx-js/react/dist/esm.js"),i=a("./node_modules/docz/dist/index.esm.js"),o=a("./src/index.js"),d={};function T(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(s.b)("wrapper",Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"tabs"},"Tabs"),Object(s.b)("h2",{id:"properties"},"Properties"),Object(s.b)(i.d,{of:o.I,mdxType:"Props"}),Object(s.b)("h2",{id:"usage"},"Usage"),Object(s.b)("h3",{id:"simple-tabs"},"Simple Tabs"),Object(s.b)(i.c,{__position:1,__code:'() => {\n  const [activeTabIndex, setActiveTabIndex] = useState(0)\n  return (\n    <Fragment>\n      <Tabs onSelectTab={setActiveTabIndex} activeTabIndex={activeTabIndex}>\n        <Tab label="tab 1" />\n        <Tab label="tab 2" />\n        <Tab label="tab 3" />\n      </Tabs>\n    </Fragment>\n  )\n}',__scope:{props:this?this.props:a,useState:c.useState,Fragment:c.Fragment,Playground:i.c,Props:i.d,Tabs:o.I,Tab:o.G},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],b=t[1];return Object(s.b)(c.Fragment,{mdxType:"Fragment"},Object(s.b)(o.I,{onSelectTab:b,activeTabIndex:a,mdxType:"Tabs"},Object(s.b)(o.G,{label:"tab 1",mdxType:"Tab"}),Object(s.b)(o.G,{label:"tab 2",mdxType:"Tab"}),Object(s.b)(o.G,{label:"tab 3",mdxType:"Tab"})))})),Object(s.b)("h3",{id:"secondary-tabs"},"Secondary Tabs"),Object(s.b)(i.c,{__position:2,__code:'() => {\n  const [activeTabIndex, setActiveTabIndex] = useState(0)\n  return (\n    <Fragment>\n      <Tabs\n        onSelectTab={setActiveTabIndex}\n        activeTabIndex={activeTabIndex}\n        kind="secondary"\n      >\n        <Tab label="tab 1" />\n        <Tab label="tab 2" />\n        <Tab label="tab 3" />\n      </Tabs>\n    </Fragment>\n  )\n}',__scope:{props:this?this.props:a,useState:c.useState,Fragment:c.Fragment,Playground:i.c,Props:i.d,Tabs:o.I,Tab:o.G},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],b=t[1];return Object(s.b)(c.Fragment,{mdxType:"Fragment"},Object(s.b)(o.I,{onSelectTab:b,activeTabIndex:a,kind:"secondary",mdxType:"Tabs"},Object(s.b)(o.G,{label:"tab 1",mdxType:"Tab"}),Object(s.b)(o.G,{label:"tab 2",mdxType:"Tab"}),Object(s.b)(o.G,{label:"tab 3",mdxType:"Tab"})))})),Object(s.b)("h3",{id:"vertical-tabs"},"Vertical Tabs"),Object(s.b)(i.c,{__position:3,__code:'() => {\n  const [activeTabIndex, setActiveTabIndex] = useState(0)\n  return (\n    <Fragment>\n      <Tabs\n        mode="vertical"\n        onSelectTab={setActiveTabIndex}\n        activeTabIndex={activeTabIndex}\n      >\n        <Tab label="What is Politeia?" />\n        <Tab label="Proposals?" />\n        <Tab label="Censorship" />\n      </Tabs>\n    </Fragment>\n  )\n}',__scope:{props:this?this.props:a,useState:c.useState,Fragment:c.Fragment,Playground:i.c,Props:i.d,Tabs:o.I,Tab:o.G},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],b=t[1];return Object(s.b)(c.Fragment,{mdxType:"Fragment"},Object(s.b)(o.I,{mode:"vertical",onSelectTab:b,activeTabIndex:a,mdxType:"Tabs"},Object(s.b)(o.G,{label:"What is Politeia?",mdxType:"Tab"}),Object(s.b)(o.G,{label:"Proposals?",mdxType:"Tab"}),Object(s.b)(o.G,{label:"Censorship",mdxType:"Tab"})))})),Object(s.b)("h3",{id:"tabs-with-counting"},"Tabs with counting"),Object(s.b)(i.c,{__position:4,__code:'() => {\n  const [activeTabIndex, setActiveTabIndex] = useState(0)\n  return (\n    <Fragment>\n      <Tabs onSelectTab={setActiveTabIndex} activeTabIndex={activeTabIndex}>\n        <Tab label="tab 1" count={1} />\n        <Tab label="tab 2" count={4} />\n      </Tabs>\n    </Fragment>\n  )\n}',__scope:{props:this?this.props:a,useState:c.useState,Fragment:c.Fragment,Playground:i.c,Props:i.d,Tabs:o.I,Tab:o.G},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],b=t[1];return Object(s.b)(c.Fragment,{mdxType:"Fragment"},Object(s.b)(o.I,{onSelectTab:b,activeTabIndex:a,mdxType:"Tabs"},Object(s.b)(o.G,{label:"tab 1",count:1,mdxType:"Tab"}),Object(s.b)(o.G,{label:"tab 2",count:4,mdxType:"Tab"})))})),Object(s.b)("h3",{id:"tabs-with-content"},"Tabs with content"),Object(s.b)(i.c,{__position:5,__code:'() => {\n  const [activeTabIndex, setActiveTabIndex] = useState(0)\n  return (\n    <Fragment>\n      <Tabs onSelectTab={setActiveTabIndex} activeTabIndex={activeTabIndex}>\n        <Tab label="tab 1" count={1}>\n          <div>tab content 1</div>\n        </Tab>\n        <Tab label="tab 2" count={4}>\n          <div>tab content 2</div>\n        </Tab>\n      </Tabs>\n    </Fragment>\n  )\n}',__scope:{props:this?this.props:a,useState:c.useState,Fragment:c.Fragment,Playground:i.c,Props:i.d,Tabs:o.I,Tab:o.G},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],b=t[1];return Object(s.b)(c.Fragment,{mdxType:"Fragment"},Object(s.b)(o.I,{onSelectTab:b,activeTabIndex:a,mdxType:"Tabs"},Object(s.b)(o.G,{label:"tab 1",count:1,mdxType:"Tab"},Object(s.b)("div",null,"tab content 1")),Object(s.b)(o.G,{label:"tab 2",count:4,mdxType:"Tab"},Object(s.b)("div",null,"tab content 2"))))})),Object(s.b)("h3",{id:"tabs-in-dropwdown-mode"},"Tabs in dropwdown mode"),Object(s.b)(i.c,{__position:6,__code:'() => {\n  const [activeTabIndex, setActiveTabIndex] = useState(0)\n  return (\n    <Fragment>\n      <Tabs\n        onSelectTab={setActiveTabIndex}\n        activeTabIndex={activeTabIndex}\n        mode="dropdown"\n      >\n        <Tab label="All Proposals" count={4} />\n        <Tab label="In discussion" count={2} />\n        <Tab label="Voting" count={5} />\n        <Tab label="Approved" count={25} />\n        <Tab label="Rejected" count={30} />\n        <Tab label="Abandoned" count={5} />\n      </Tabs>\n    </Fragment>\n  )\n}',__scope:{props:this?this.props:a,useState:c.useState,Fragment:c.Fragment,Playground:i.c,Props:i.d,Tabs:o.I,Tab:o.G},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],b=t[1];return Object(s.b)(c.Fragment,{mdxType:"Fragment"},Object(s.b)(o.I,{onSelectTab:b,activeTabIndex:a,mode:"dropdown",mdxType:"Tabs"},Object(s.b)(o.G,{label:"All Proposals",count:4,mdxType:"Tab"}),Object(s.b)(o.G,{label:"In discussion",count:2,mdxType:"Tab"}),Object(s.b)(o.G,{label:"Voting",count:5,mdxType:"Tab"}),Object(s.b)(o.G,{label:"Approved",count:25,mdxType:"Tab"}),Object(s.b)(o.G,{label:"Rejected",count:30,mdxType:"Tab"}),Object(s.b)(o.G,{label:"Abandoned",count:5,mdxType:"Tab"})))})),Object(s.b)("h3",{id:"tabs-with-slide-content-animation"},"Tabs with slide content animation"),Object(s.b)(i.c,{__position:7,__code:'() => {\n  const [activeTabIndex, setActiveTabIndex] = useState(0)\n  return (\n    <div style={{ overflow: \'hidden\', position: \'relative\', height: \'80px\' }}>\n      <Tabs\n        onSelectTab={setActiveTabIndex}\n        activeTabIndex={activeTabIndex}\n        contentAnimation="slide"\n      >\n        <Tab label="tab 1" count={1}>\n          <div key={1}>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n            sit amet est sed urna sollicitudin imperdiet vitae eu massa.\n          </div>\n        </Tab>\n        <Tab label="tab 2" count={4}>\n          <div key={2}>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n            sit amet est sed urna sollicitudin imperdiet vitae eu massa.\n          </div>\n        </Tab>\n        <Tab label="tab 3">\n          <div key={3}>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n            sit amet est sed urna sollicitudin imperdiet vitae eu massa.\n          </div>\n        </Tab>\n      </Tabs>\n    </div>\n  )\n}',__scope:{props:this?this.props:a,useState:c.useState,Fragment:c.Fragment,Playground:i.c,Props:i.d,Tabs:o.I,Tab:o.G},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],b=t[1];return Object(s.b)("div",{style:{overflow:"hidden",position:"relative",height:"80px"}},Object(s.b)(o.I,{onSelectTab:b,activeTabIndex:a,contentAnimation:"slide",mdxType:"Tabs"},Object(s.b)(o.G,{label:"tab 1",count:1,mdxType:"Tab"},Object(s.b)("div",{key:1},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet est sed urna sollicitudin imperdiet vitae eu massa.")),Object(s.b)(o.G,{label:"tab 2",count:4,mdxType:"Tab"},Object(s.b)("div",{key:2},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet est sed urna sollicitudin imperdiet vitae eu massa.")),Object(s.b)(o.G,{label:"tab 3",mdxType:"Tab"},Object(s.b)("div",{key:3},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet est sed urna sollicitudin imperdiet vitae eu massa."))))})),Object(s.b)("h3",{id:"tabs-without-content-animation"},"Tabs without content animation"),Object(s.b)(i.c,{__position:8,__code:'() => {\n  const [activeTabIndex, setActiveTabIndex] = useState(0)\n  return (\n    <Fragment>\n      <Tabs\n        onSelectTab={setActiveTabIndex}\n        activeTabIndex={activeTabIndex}\n        contentAnimation="none"\n      >\n        <Tab label="tab 1" count={1}>\n          <div key={1}>tab content 1</div>\n        </Tab>\n        <Tab label="tab 2" count={4}>\n          <div key={2}>tab content 2</div>\n        </Tab>\n        <Tab label="tab 3">\n          <div key={3}>tab content 3</div>\n        </Tab>\n      </Tabs>\n    </Fragment>\n  )\n}',__scope:{props:this?this.props:a,useState:c.useState,Fragment:c.Fragment,Playground:i.c,Props:i.d,Tabs:o.I,Tab:o.G},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],b=t[1];return Object(s.b)(c.Fragment,{mdxType:"Fragment"},Object(s.b)(o.I,{onSelectTab:b,activeTabIndex:a,contentAnimation:"none",mdxType:"Tabs"},Object(s.b)(o.G,{label:"tab 1",count:1,mdxType:"Tab"},Object(s.b)("div",{key:1},"tab content 1")),Object(s.b)(o.G,{label:"tab 2",count:4,mdxType:"Tab"},Object(s.b)("div",{key:2},"tab content 2")),Object(s.b)(o.G,{label:"tab 3",mdxType:"Tab"},Object(s.b)("div",{key:3},"tab content 3"))))})))}T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/tabs.mdx"}}),T.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-tabs.7ca5efa96a3799c79842.js.map