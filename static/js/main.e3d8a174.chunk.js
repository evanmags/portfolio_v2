(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e){e.exports={portfolio:{projects:[{name:"Snippets",langs:"JavaScript, Node.js, graphQL, mongoDB",links:{github:"https://github.com/evanmags/snippets"},description:["Snippets is a command line tool for storing and accessing all of your code snippets from one place.","Inspired by a reddit post about storing code snippets this project has proven a fantastic opportunity to get in depth with node.js and graphQL.","Currently in development, this application will interact with a dedicated server storing snippets as minified blobs in a database, then appending them to the file you are currently working on when accessed."]},{name:"Curly.js",langs:"JavaScript",links:{github:"https://github.com/evanmags/Curly.js",live_link:"https://evanmags.github.io/curly.js-docs"},description:["Curly was the result of working my way through learning React. This project started as a simple 'put things on the page' idea and an exploration of the DOM. As well Curly is an exploratin in the design and structure of software and how modern web frameworks function. While this project is not up to par with the likes of React, Vue, or Angular, it is something I am very proud of.","Starting simply, Curly allows you to build websites/apps using nothing but structured JavaScript objects. These objects are completely self contained, incorporating styling, events, and anything else you could imagine. Because they are JavaScript objects you can use all of the functionality of JavaScript in your styling as well.","Please have a look at the documentation for more information and explore the sandbox to get a taste for how building works.","Currently in development, redesign of documentation and complete refactor of codebase to incorporate object oriented principals for version 2.0.0."]},{name:"Pixelator",langs:"React",image:"",links:{live_link:"https://evanmags.github.io/pixelator/",github:"https://github.com/evanmags/pixelator"},description:["This was my first ever React project. A fun implementation of a pixel art editor that takes inspireation from the Etch-a-Sketch."]}]},blog:{posts:[{title:"I ran Today",description:"It was very windy but it was still a good day in my book. I did about 7 miles and it was faster than previous, similar runs. I felt ok about it but still want more.",length:"250 words. 4 minutes",date:"12/3/18"}]}}},24:function(e,t,a){e.exports=a(39)},29:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),i=a.n(r),s=a(13),c=(a(29),a(5)),l=a(6),u=a(9),p=a(7),m=a(8),d=a(11),h=a(10);function b(e){return e.internal?o.a.createElement(s.b,{id:e.text,className:"menubar__btn",to:e.href||"#"},e.text):o.a.createElement("a",{id:e.text,className:"menubar__btn",href:e.href||"#"},e.text)}function g(e){return o.a.createElement("div",{className:"menubar"},o.a.createElement(b,{text:"portfolio",href:"/portfolio",internal:!0}),o.a.createElement(b,{text:"github",href:"https://github.com/evanmags"}),o.a.createElement(b,{text:"codepen",href:"https://codepen.io/emags112/"}),o.a.createElement(b,{text:"ramblings",href:"/blog",internal:!0}))}var f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={class:"banner"},a.mouseenter=a.mouseenter.bind(Object(h.a)(Object(h.a)(a))),a.mouseleave=a.mouseleave.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"mouseenter",value:function(){console.log(window.location.pathname),"/portfolio_v2"===window.location.pathname&&this.setState({class:"banner banner-pop"})}},{key:"mouseleave",value:function(){this.setState({class:"banner"})}},{key:"render",value:function(){return o.a.createElement("header",{className:this.state.class,onMouseEnter:this.mouseenter,onMouseLeave:this.mouseleave},o.a.createElement("h1",{className:"banner__head"},"Evan Magnussen"),o.a.createElement("h2",{className:"banner__subhead"},"Web Developer - Runner - Cook - Guitarist"," "),o.a.createElement(g,null))}}]),t}(n.Component),v=a(20).blog.posts,j=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(n.Component);function y(e){return o.a.createElement("div",{className:"blog__card"},o.a.createElement("h2",{className:"blog__title"},e.title),o.a.createElement("span",{className:"blog__date"},e.date),o.a.createElement("p",{className:"blog__description"},e.desc),o.a.createElement("span",{className:"blog__length"},e.length))}var _=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"blog_cards",value:function(){return v.map(function(e){return o.a.createElement(y,{title:e.title,date:e.date,desc:e.description,length:e.length,key:e.title})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"blog"},this.state.reading?o.a.createElement(j,null):this.blog_cards())}}]),t}(n.Component),E=a(20).portfolio.projects,k=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"portfolio__card"},this.props.image&&o.a.createElement("img",{className:"card__image",src:this.props.image,alt:"project"}),o.a.createElement("div",{className:"card__body"},o.a.createElement("div",{className:"card__head"},o.a.createElement("h2",{className:"card__title"},this.props.name),o.a.createElement("span",{className:"card__languages"},this.props.langs)),o.a.createElement("div",{className:"card__description"},this.props.description),o.a.createElement("div",{className:"card__footer"},this.props.links.live_link&&o.a.createElement("a",{href:this.props.links.live_link},o.a.createElement("button",{className:"card__button"},"Live Site")),this.props.links.github&&o.a.createElement("a",{href:this.props.links.github},o.a.createElement("button",{className:"card__button"},"GitHub")),this.props.links.post&&o.a.createElement("a",{href:this.props.links.post},o.a.createElement("button",{className:"card__button"},"Read More!")))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={reading:!0},a.portfolio_cards=a.portfolio_cards.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"portfolio_cards",value:function(){return E.map(function(e){return o.a.createElement(k,{key:e.name,name:e.name,langs:e.langs,image:e.image,links:e.links||{},description:e.description.map(function(e){return o.a.createElement("p",{key:e.slice(0,5)},e)})})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"portfolio"},this.state.reading&&this.portfolio_cards())}}]),t}(n.Component),O=(a(38),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"App"},o.a.createElement(f,null),o.a.createElement(d.c,null,o.a.createElement(d.a,{path:"/portfolio",component:w}),o.a.createElement(d.a,{path:"/blog",component:_})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(s.a,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.e3d8a174.chunk.js.map