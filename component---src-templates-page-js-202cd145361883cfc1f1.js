(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{191:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return u}),a.d(e,"pageQuery",function(){return j});var n=a(0),M=a.n(n),r=a(202),i=a.n(r),L=a(203),s=a(210),o=a(201),c=a.n(o);var u=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props.pageContext.slug,e=this.props.data.markdownRemark,a=e.frontmatter;return a.id||(a.id=t),M.a.createElement(L.a,null,M.a.createElement(i.a,null,M.a.createElement("title",null,a.title+" – "+c.a.siteTitle)),M.a.createElement(s.a,{postPath:t,postNode:e,postSEO:!0}),M.a.createElement("div",{className:"container"},M.a.createElement("article",null,M.a.createElement("header",{className:"page-header"},M.a.createElement("h1",null,a.title)),M.a.createElement("div",{className:"page",dangerouslySetInnerHTML:{__html:e.html}}))))},n}(n.Component),j="2577585684"},201:function(t,e){var a={siteTitle:"Claudia Valdivieso",siteTitleShort:"Claudia Valdivieso",siteTitleAlt:"Claudia Valdivieso",siteLogo:"/logos/lavaldi.jpg",siteUrl:"https://lavaldi.com",repo:"https://github.com/lavaldi/lavaldi.github.com",dateFromFormat:"YYYY-MM-DD",dateFormat:"MMMM Do, YYYY",siteDescription:"Claudia Valdivieso, christian, wife and front end.",siteRss:"/rss.xml",googleAnalyticsID:"UA-99146766-1",postDefaultCategoryID:"code",userName:"Claudia",userEmail:"claumavaldivieso@gmail.com",userTwitter:"lavaldi_",menuLinks:[{name:"Me",link:"/me/"},{name:"Articles",link:"/blog/"},{name:"Contact",link:"/contact/"}],themeColor:"#EB374B",backgroundColor:"#ffffff"};"/"===a.siteUrl.substr(-1)&&(a.siteUrl=a.siteUrl.slice(0,-1)),a.siteRss&&"/"!==a.siteRss[0]&&(a.siteRss="/"+a.siteRss),t.exports=a},203:function(t,e,a){"use strict";var n=a(0),M=a.n(n),r=a(202),i=a.n(r),L=a(88),s=(a(213),a(35),a(87)),o=a(204),c=a.n(o),u=a(205),j=a.n(u),l=a(206),w=a.n(l);var m=function(t){var e,a;function n(){for(var e,a=arguments.length,n=new Array(a),M=0;M<a;M++)n[M]=arguments[M];return(e=t.call.apply(t,[this].concat(n))||this).state={scrolled:!1},e.navOnScroll=function(){window.scrollY>20?e.setState({scrolled:!0}):e.setState({scrolled:!1})},e}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){window.addEventListener("scroll",this.navOnScroll)},r.componentWillUnmount=function(){window.removeEventListener("scroll",this.navOnScroll)},r.render=function(){var t=this.state.scrolled,e=this.props.menuLinks,a=this.context;return M.a.createElement("nav",{className:t?"nav scroll":"nav"},M.a.createElement("div",{className:"nav-container"},M.a.createElement("div",{className:"brand"},M.a.createElement(s.Link,{to:"/"},M.a.createElement("img",{src:c.a,className:"favicon",alt:"Claudia Valdivieso"}),M.a.createElement("span",{className:"text"},"Claudia Valdivieso"))),M.a.createElement("div",{className:"links"},e.map(function(t){return M.a.createElement(s.Link,{key:t.name,to:t.link,activeClassName:"active"},t.name)}),M.a.createElement("div",{className:"cta"},M.a.createElement("button",{className:"dark-switcher",onClick:a.toggleDark},a.dark?M.a.createElement("span",null,M.a.createElement("img",{src:j.a,className:"theme-icon",alt:"Light Mode"})):M.a.createElement("span",null,M.a.createElement("img",{src:w.a,className:"theme-icon",alt:"Dark Mode"})))))))},n}(n.Component);m.contextType=L.b;var N=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){return M.a.createElement("footer",{className:"footer container"},M.a.createElement("a",{href:"https://twitter.com/lavaldi_",target:"_blank",rel:"noopener noreferrer"},"Twitter"),M.a.createElement("a",{href:"https://github.com/lavaldi",target:"_blank",rel:"noopener noreferrer"},"GitHub"),M.a.createElement("a",{href:"https://lavaldi.com/rss.xml",target:"_blank",rel:"noopener noreferrer"},"RSS"))},n}(n.Component),p=a(201),y=a.n(p),D=a(207),g=a.n(D);a(214);a.d(e,"a",function(){return T});var T=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.context,e=t.dark,a=t.notFound,n=this.props.children,r="";return e&&!a?r="dark":a&&(r="not-found"),M.a.createElement(M.a.Fragment,null,M.a.createElement(i.a,{bodyAttributes:{class:"theme "+r}},M.a.createElement("meta",{name:"description",content:y.a.siteDescription}),M.a.createElement("link",{rel:"shortcut icon",type:"image/png",href:g.a})),M.a.createElement(m,{menuLinks:y.a.menuLinks}),M.a.createElement("main",{id:"main-content"},n),M.a.createElement(N,null))},n}(n.Component);T.contextType=L.b},204:function(t,e,a){t.exports=a.p+"static/lavaldi-icon-cc3c67583be55729f545c487fe97c776.png"},205:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxnPgogICAgPHBhdGggZD0iTTY0LDMwLjM0Yy0xOC41OSwwLTMzLjY2LDE1LjA3LTMzLjY2LDMzLjY1YzAsMTguNTksMTUuMDcsMzMuNjYsMzMuNjYsMzMuNjYgYzE4LjU5LDAsMzMuNjYtMTUuMDcsMzMuNjYtMzMuNjZDOTcuNjYsNDUuNDEsODIuNTksMzAuMzQsNjQsMzAuMzR6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTU2Ljc2LDI0LjIxTDU2Ljc2LDI0LjIxaDE0LjQ5YzAuNjcsMCwxLjI5LTAuMzMsMS42OC0wLjg4YzAuMzgtMC41NCwwLjQ3LTEuMjUsMC4yNC0xLjg4IEw2NS45MiwxLjgzYy0wLjMtMC44MS0xLjA2LTEuMzQtMS45Mi0xLjM0cy0xLjYyLDAuNTQtMS45MiwxLjM0bC03LjI1LDE5LjYzYy0wLjIzLDAuNjMtMC4xNCwxLjMzLDAuMjQsMS44OCBDNTUuNDYsMjMuODksNTYuMDksMjQuMjEsNTYuNzYsMjQuMjF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTk3LjI2LDQwLjk5YzAuMzgsMC4zOSwwLjkxLDAuNiwxLjQ0LDAuNmMwLjEyLDAsMC4yNC0wLjAxLDAuMzYtMC4wM2MwLjY2LTAuMTIsMS4yMS0wLjU1LDEuNS0xLjE2IGw4Ljc2LTE5LjAxYzAuMzYtMC43OCwwLjE5LTEuNjktMC40MS0yLjNjLTAuNjEtMC42MS0xLjUzLTAuNzctMi4zMS0wLjQyTDg3LjYsMjcuNDRjLTAuNjEsMC4yOC0xLjA0LDAuODQtMS4xNiwxLjUgYy0wLjEyLDAuNjYsMC4xLDEuMzMsMC41NiwxLjgxTDk3LjI2LDQwLjk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0xMjYuMTgsNjIuMDhsLTE5LjY0LTcuMjRjLTAuNjMtMC4yMy0xLjMzLTAuMTQtMS44OCwwLjI0Yy0wLjU1LDAuMzgtMC44NywxLTAuODcsMS42N2wwLjAxLDE0LjQ5IGMwLDAuNjcsMC4zMywxLjMsMC44OCwxLjY4YzAuMzUsMC4yMywwLjc2LDAuMzYsMS4xNywwLjM2YzAuMjQsMCwwLjQ4LTAuMDQsMC43MS0wLjEzbDE5LjY0LTcuMjRjMC44LTAuMjksMS4zNC0xLjA2LDEuMzQtMS45MyBDMTI3LjUyLDYzLjE0LDEyNi45OSw2Mi4zOCwxMjYuMTgsNjIuMDh6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTEwMC41Niw4Ny42Yy0wLjI4LTAuNjEtMC44NC0xLjA0LTEuNS0xLjE2Yy0wLjY2LTAuMTEtMS4zNCwwLjEtMS44LDAuNTdMODcuMDEsOTcuMjYgYy0wLjQ3LDAuNDctMC42OSwxLjE1LTAuNTcsMS44MWMwLjEyLDAuNjUsMC41NSwxLjIyLDEuMTYsMS41bDE5LjAxLDguNzZjMC4yNywwLjEzLDAuNTYsMC4xOCwwLjg2LDAuMTggYzAuNTMsMCwxLjA1LTAuMjEsMS40NC0wLjZjMC42MS0wLjYxLDAuNzctMS41MiwwLjQxLTIuM0wxMDAuNTYsODcuNnoiIHN0eWxlPSJmaWxsOiNGQ0MyMUI7Ii8+CiAgICA8cGF0aCBkPSJNNzEuMjQsMTAzLjc4TDcxLjI0LDEwMy43OGwtMTQuNDksMC4wMWMtMC42NywwLTEuMjksMC4zMy0xLjY3LDAuODggYy0wLjM4LDAuNTUtMC40NywxLjI1LTAuMjUsMS44N2w3LjI1LDE5LjY0YzAuMywwLjgsMS4wNiwxLjM0LDEuOTIsMS4zNHMxLjYyLTAuNTQsMS45Mi0xLjM0bDcuMjUtMTkuNjQgYzAuMjMtMC42MywwLjE0LTEuMzMtMC4yNC0xLjg4QzcyLjU0LDEwNC4xMSw3MS45MiwxMDMuNzgsNzEuMjQsMTAzLjc4eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0zMC43NCw4Ny4wMWMtMC40Ny0wLjQ3LTEuMTQtMC42OC0xLjgtMC41N2MtMC42NiwwLjEyLTEuMjIsMC41NS0xLjUsMS4xNmwtOC43NiwxOS4wMSBjLTAuMzYsMC43OC0wLjE5LDEuNywwLjQyLDIuM2MwLjM5LDAuMzksMC45MSwwLjYsMS40NCwwLjZjMC4yOSwwLDAuNTgtMC4wNiwwLjg2LTAuMTlsMTkuMDEtOC43N2MwLjYxLTAuMjgsMS4wNC0wLjg0LDEuMTYtMS41IGMwLjEyLTAuNjYtMC4xLTEuMzMtMC41Ny0xLjhMMzAuNzQsODcuMDF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTIyLjE3LDczLjI5YzAuNDEsMCwwLjgyLTAuMTMsMS4xNy0wLjM3YzAuNTUtMC4zOCwwLjg4LTEuMDEsMC44OC0xLjY4bC0wLjAxLTE0LjQ5IGMwLTAuNjctMC4zMy0xLjI5LTAuODgtMS42OGMtMC41NS0wLjM4LTEuMjUtMC40Ny0xLjg3LTAuMjRMMS44Miw2Mi4wOGMtMC44LDAuMjktMS4zNCwxLjA2LTEuMzQsMS45MmMwLDAuODUsMC41MywxLjYyLDEuMzQsMS45MiBsMTkuNjUsNy4yNEMyMS43LDczLjI1LDIxLjkzLDczLjI5LDIyLjE3LDczLjI5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0yNy40NSw0MC40YzAuMjgsMC42MSwwLjg0LDEuMDQsMS41LDEuMTZjMC4xMiwwLjAyLDAuMjQsMC4wMywwLjM2LDAuMDNjMC41NCwwLDEuMDYtMC4yMSwxLjQ1LTAuNiBMNDEsMzAuNzRjMC40Ny0wLjQ4LDAuNjgtMS4xNSwwLjU2LTEuODFjLTAuMTItMC42NS0wLjU1LTEuMjEtMS4xNi0xLjQ5bC0xOS4wMi04Ljc2Yy0wLjc4LTAuMzYtMS42OS0wLjE5LTIuMywwLjQyIGMtMC42MSwwLjYxLTAuNzcsMS41Mi0wLjQxLDIuM0wyNy40NSw0MC40eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICA8L2c+Cjwvc3ZnPg=="},206:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxwYXRoIGQ9Ik0xMDUuODcsMTQuOTljLTMuNzQtMy4zOS03LjkxLTYuMzgtMTIuNDItOC44OWMtMC44Ny0wLjQ5LTItMC4zNS0yLjcxLDAuMzMgYy0wLjcxLDAuNjgtMC44MywxLjczLTAuMjksMi41M2MxNS42MywyMi45MywxMi4yOSw1Mi41Mi04LjExLDcxLjk3Yy0xMS45LDExLjM1LTI3Ljg1LDE3LjYtNDQuOTEsMTcuNiBjLTExLjM5LDAtMjIuNTQtMi44Ni0zMi4yNC04LjI3Yy0wLjg3LTAuNDktMi0wLjM2LTIuNzEsMC4zM2MtMC43MSwwLjY4LTAuODMsMS43Mi0wLjI4LDIuNTNjMi44MSw0LjEyLDYuMTIsNy45Myw5Ljg2LDExLjMyIGMxMi42MSwxMS40NSwyOS4yNywxNy43Niw0Ni45LDE3Ljc2YzE4LjI3LDAsMzUuMzQtNi43LDQ4LjA5LTE4Ljg2YzEyLjUzLTExLjk0LDE5LjMxLTI3LjcxLDE5LjA5LTQ0LjQgQzEyNS45Miw0Mi4yNSwxMTguNzIsMjYuNjQsMTA1Ljg3LDE0Ljk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KPC9zdmc+"},207:function(t,e,a){t.exports=a.p+"static/favicon-c0495cedcf86efc44cf53d77c920070c.png"},208:function(t,e,a){"use strict";a(216)("fixed",function(t){return function(){return t(this,"tt","","")}})},209:function(t,e,a){var n,M,r;a(36),a(8),a(124),a(35),r=function(){return function(){return function(t){var e=[];if(0===t.length)return"";if("string"!=typeof t[0])throw new TypeError("Url must be a string. Received "+t[0]);if(t[0].match(/^[^/:]+:\/*$/)&&t.length>1){var a=t.shift();t[0]=a+t[0]}t[0].match(/^file:\/\/\//)?t[0]=t[0].replace(/^([^/:]+):\/*/,"$1:///"):t[0]=t[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<t.length;n++){var M=t[n];if("string"!=typeof M)throw new TypeError("Url must be a string. Received "+M);""!==M&&(n>0&&(M=M.replace(/^[\/]+/,"")),M=n<t.length-1?M.replace(/[\/]+$/,""):M.replace(/[\/]+$/,"/"),e.push(M))}var r=e.join("/"),i=(r=r.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return r=i.shift()+(i.length>0?"?":"")+i.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},t.exports?t.exports=r():void 0===(M="function"==typeof(n=r)?n.call(e,a,e,t):n)||(t.exports=M)},210:function(t,e,a){"use strict";a.d(e,"a",function(){return u});a(208);var n=a(0),M=a.n(n),r=a(202),i=a.n(r),L=a(209),s=a.n(L),o=a(201),c=a.n(o);var u=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t,e,a,n=this.props,r=n.postNode,L=n.postPath,o=n.postSEO,u="",j=!0;if(o){var l=r.frontmatter;t=l.title,e=l.description?l.description:r.excerpt,l.banner?(u=l.banner,j=!1):l.thumbnail&&(u=l.thumbnail.childImageSharp.fixed.src),a=s()(c.a.siteUrl,L)}else t=c.a.siteTitle,e=c.a.siteDescription,u=c.a.siteLogo;j&&(u=s()(c.a.siteUrl,u));var w=c.a.siteUrl,m=[{"@context":"http://schema.org","@type":"WebSite",url:w,name:t,alternateName:c.a.siteTitleAlt?c.a.siteTitleAlt:""}];return o&&m.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:t,image:u}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:w,name:t,alternateName:c.a.siteTitleAlt?c.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:u},description:e}),M.a.createElement(i.a,null,M.a.createElement("meta",{name:"description",content:e}),M.a.createElement("meta",{name:"image",content:u}),M.a.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),M.a.createElement("meta",{property:"og:url",content:o?a:w}),o?M.a.createElement("meta",{property:"og:type",content:"article"}):null,M.a.createElement("meta",{property:"og:title",content:t}),M.a.createElement("meta",{property:"og:description",content:e}),M.a.createElement("meta",{property:"og:image",content:u}),M.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),M.a.createElement("meta",{name:"twitter:creator",content:c.a.userTwitter}),M.a.createElement("meta",{name:"twitter:title",content:t}),M.a.createElement("meta",{name:"twitter:description",content:e}),M.a.createElement("meta",{name:"twitter:image",content:u}))},n}(n.Component)}}]);
//# sourceMappingURL=component---src-templates-page-js-202cd145361883cfc1f1.js.map