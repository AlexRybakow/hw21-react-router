(this["webpackJsonphw-21-react-router"]=this["webpackJsonphw-21-react-router"]||[]).push([[0],{19:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(20),r=a.n(n),i=(a(26),a(2)),o=(a(27),a(8)),A=a(0),l=[{to:"/hw21-react-router/",label:"Home Page"},{to:"/hw21-react-router/posts",label:"Posts"},{to:"/hw21-react-router/contacts",label:"Contact book"},{to:"/hw21-react-router/photos",label:"Photos"}],j=function(){return Object(A.jsx)("nav",{className:"navigation",children:Object(A.jsx)("ul",{className:"flex",children:l.map((function(e){return Object(A.jsx)("li",{className:"navigation-item",children:Object(A.jsx)(o.b,{exact:!0,to:e.to,children:e.label})},e.to)}))})})},h=a.p+"static/media/spok.c86c57bf.jpeg",d=function(){return Object(A.jsxs)("div",{className:"home-page",children:[Object(A.jsx)("img",{className:"home-pic",src:h,alt:"mr-spock"}),Object(A.jsx)("h1",{children:"Choose the page and live long and prosper"})]})},p=(a(34),a(35),function(e){var t=e.author,a=e.content,s=e.image,c=e.date,n=e.network;return Object(A.jsxs)("div",{className:"post-container",children:[Object(A.jsx)("div",{className:"user-avatar",children:Object(A.jsx)("img",{src:t.photo,alt:"avatar"})}),Object(A.jsxs)("div",{className:"post-body",children:[Object(A.jsxs)("div",{className:"user-info",children:[Object(A.jsx)("p",{className:"user-name",children:t.name}),Object(A.jsx)("p",{className:"user-nickname",children:t.nickname}),Object(A.jsx)("p",{className:"post-date",children:c})]}),Object(A.jsxs)("div",{className:"post-content",children:[Object(A.jsx)("p",{className:"post-text",children:a}),Object(A.jsx)("img",{className:"post-image",src:s,alt:"post-pic"})]}),Object(A.jsxs)("div",{className:"post-networks",children:[Object(A.jsxs)("div",{className:"network-logo",children:[Object(A.jsx)("img",{src:"data:image/png;base64,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",alt:"like"}),n.like]}),Object(A.jsxs)("div",{className:"network-logo",children:[Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAACXBIWXMAABJ0AAASdAHeZh94AAACd0lEQVRoQ+2ZOaoqQRRArw/FETNB0NAFaGTkGhQc0B2YmWlqKoixO1AcUNdgZKQLMFQQzMQBUXi/b3P7+XqoHrDff/U/deBiVVnVzaGqy1ut51MC/gM+6POfR4jwhhDhDSHCG0KEN4QIb9jKtZbLJeRyOapZ83g8oNVqQTQapZb3eT6fkEwmoV6vU4sGFDGjWCyi6OdoNKIWa87nszzG7UilUnQHPaYipVJJdSG7MtfrVTXOrUin03QHPUwRrYQS4/GYerDhRkRZTqywkuFCxEpCCbNldrlcDMe8G2Yiql1LWk4wnU6pZo0kA+VymWovbrcbSA8mxGIxarGP1+uF/X4Ph8OBWl5IIrBer6mmQdaRYD0TVmHnmXFKt9s1vJfZjMg/iIVCASaTCRYdgzMyHA6p5g7S9k0l+3w0Gg1YLBbg9/u/IhQK0dd6cOqDwaCqf61Wg9lsRj1+CZoZHdls1nB6e70e9fg52u224b0tl5YR9/udSmpOpxOV+EJkv7whRH4SVvqPOySLXxXBLdvj8UAgEPgK3PqbzSb1ULNarSAcDqv643j8CWFuv7jVSWN1gVujmwwGA8P72I18Pi9fx/GMRCIRKrlDtVoFKc2hmjMwN5zP53KZedTNZDKw2Wyo9iIej0MikZCPnk45Ho+w3W7lzEALylQqFapZI2Xp6rRKnhcDWEvr3cAUnwUeDYzGaAOPGlr+uggeuszAbNponBJGEgh3IghLBo8aLLgUQbTLzEwCYYrgq5fvF3Ir8FWRXRQZ1nL6DnPX6vf7sNvt5POHW2Dm3Ol0wOfzUYs1dl8Oin91eUOI8IYQ4Q0hwhtChDeECF8A/AFMh7EYXKAhgAAAAABJRU5ErkJggg==",alt:"repost"}),n.repost]}),Object(A.jsxs)("div",{className:"network-logo",children:[Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAACXBIWXMAABJ0AAASdAHeZh94AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABABJREFUaEPtmstPE1EUh8+A5eEDWPhKKSIrcaP+AUAgND5A3alghOpKN2IsJlak1QUuJLoGXbJBu8CdFe0CEkUIgbrmoYAorSxIBBIgyvXeO2de7VQGgnDH9EtO5sw9Z86cX2/nXjpBIhT4D0jDo+1JCRGNlBDRsCSkva0dSktKQZKkLTV2z7a2NuxiDdjym4z6eg9bmuNMQosf3ywzr19f58GuzDEV8uZNd0Kh7TVNWDftzYwEIfeb7usKyJa7J5c8efKUTExMYNa/Z3Jykjyl98zNyUvop4n2GI9BSCAQwGTtE2Czs910d79V+1F6C/gfYFRGFdLT02tIPFxYhBFxYD3pe+zp7cWIToicIFtBwSEcFY8C1yFDrwrca7jZYBoUFX2vDQ235LH4QDAY5AGRCb4MGnpmQOh1KGHQDuh7DoVCJH3Xrt0Ph4aG6DmA764P3G4390VneWkZ3n94z32qAeD4sROqsoGBAdQrPqxXpW+mQdqzO4fML/yk5wArKyvgcDi4Lzqs18zMTO5TDZC2sLBAXYkPWBURfheGK1fqoLnZjyPmxGIxuH79BrdY7AeOmsNqsZqsthUyMjLQk0DWQDcXCdL4FFnB57unTqliZgwPDyfkRSIRjBqJz7vna8LI32G5cu90g2TOeoTIN5PFK9c1Nt7BqIbzYD6P6fNc+S6Mani93rg8ede2gv66df2wmpmZ4Uf6a4EfFcZGx9DT+B79hp7G9Ldp9DTGRsfRk1FqR2ei/GgFuhuyCzcyI7oppf6LzhcY1aiuPqvmKfXPnT2PUY3Ozk4eY7WUPGZWUK7jpr+RFaamprCAbB7PVYwkku90qXmu/AIcTYTV0Ndk97CCnC8Rx46M9QtRGBkZIaurq3iWnGg0SujqhWfJYbVYTatMf51WhbMPacNCtpuOjg5VSNWZqvU97CLxrP05egCVlZUg4WxQaatsSnhAdH79/gWOHWzzZiscgbm5OXu+1yovq0CPQFFhEeTl5TFN9npGtGdDXvojkU983FZCwuGwQcSpk6cxYiMh/ma/QQTrWY/wQrq6ukhWZrZBhFmvG1q1Wloe8Vz2fnYz4WsQrTs7OwuDg4Pwsf+jHNCxd+8+Gjf5SWB1Rubn58nFC5fUT2Q7zO8PYDeJrClkfPwzKS0p0xXUpnerrNHbiN0kJ+lXq6+vD656rsHo2AiOyJsP48D+g1B7uRaWl5b4+WbCvq5sXzhSXAxudyU4nU6MrEH8jLzqehX34libgeIjR0l/v5gvKAxCsrN2qk3rBVSUV5CJL1v3Jn4jqEIUMXqrqakli4uLmCo2hhlRzHvbi2H7QPvWBLQ+bsVh+wFpUjr/Q8zupP4XRTRSQkQjJUQsAP4A96MBRQU7OiAAAAAASUVORK5CYII=",alt:"comment"}),n.comment]})]})]})]})}),m=a.p+"static/media/RossAvatar.f9692886.png",b=a.p+"static/media/RossImage.b8d2916f.png",g=a.p+"static/media/ProfessorAvatar.095a126f.jpg",u=a.p+"static/media/ProfessorImage.08a0e793.png",O=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"post-feed",children:[Object(A.jsx)(p,{author:{name:"Ross Geller",photo:m,nickname:"@divorce-force"},content:"Why even Facebook don't believe that we were on a break??",image:b,date:"12 \u0430\u043f\u0440.",network:{like:10,repost:5,comment:3}}),Object(A.jsx)(p,{author:{name:"Sergio Marquina",photo:g,nickname:"@professor"},content:"Hey,do you want interesting job?",image:u,date:"12 \u0430\u043f\u0440.",network:{like:14,repost:8,comment:6}})]})})},x=a(10),N=a(11),f=a(13),C=a(12),k=(a(19),function(e){Object(f.a)(a,e);var t=Object(C.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return Object(A.jsxs)("div",{className:"container",children:[Object(A.jsxs)("p",{className:"name",children:[Object(A.jsx)("span",{children:"First name:"}),this.props.contact.firstName]}),Object(A.jsxs)("p",{className:"last-name",children:[Object(A.jsx)("span",{children:"Last name:"}),this.props.contact.lastName]}),Object(A.jsxs)("p",{className:"phone-number",children:[Object(A.jsx)("span",{children:"Phone number"}),this.props.contact.phone]}),Object(A.jsxs)("p",{className:"gender",children:[Object(A.jsx)("span",{children:"Gender:"}),this.props.contact.gender]})]})}}]),a}(s.Component)),v=function(e){Object(f.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(x.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{firstName:"\u0414\u0436\u043e\u0437\u0435\u0444",lastName:"\u0422\u0440\u0456\u0431\u0456\u0430\u043d\u0441\u044c\u043a\u0438\u0439",phone:"+380981238756",gender:"male"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380956319521",gender:"male"}],input:""},e.handleSearchChange=function(t){e.setState({input:t.target.value})},e}return Object(N.a)(a,[{key:"render",value:function(){var e,t=this.state.input;return e=""!==t?e=this.state.contacts.filter((function(e){return e.lastName.toLowerCase().includes(t.toLowerCase())||e.firstName.toLowerCase().includes(t.toLowerCase())||e.phone.includes(t)})):this.state.contacts,Object(A.jsxs)("div",{className:"contacts-wrapper",children:[Object(A.jsx)("div",{className:"search",children:Object(A.jsx)("input",{className:"user-input",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",value:this.state.input,onChange:this.handleSearchChange})}),e.map((function(e,t){return Object(A.jsx)(k,{contact:e},t)}))]})}}]),a}(s.Component),B=a.p+"static/media/photo1.1764a81d.jpg",w=a.p+"static/media/photo2.42eb3a6c.jpg",F=a.p+"static/media/photo3.0d0fea16.jpg",G=a.p+"static/media/photo4.ac015a6f.jpg",P=a.p+"static/media/photo5.e34d08c6.jpg",Q=a.p+"static/media/photo6.9ffe2c98.jpg",y=a.p+"static/media/photo7.41a94360.jpg",R=a.p+"static/media/photo8.bc1011bb.jpg",D=a.p+"static/media/photo9.bde4042d.jpg",U=function(){return Object(A.jsxs)("div",{className:"photos flex",children:[Object(A.jsx)("img",{src:B,alt:"big-bang-theory"}),Object(A.jsx)("img",{src:w,alt:"big-bang-theory"}),Object(A.jsx)("img",{src:F,alt:"big-bang-theory"}),Object(A.jsx)("img",{src:G,alt:"big-bang-theory"}),Object(A.jsx)("img",{src:P,alt:"big-bang-theory"}),Object(A.jsx)("img",{src:Q,alt:"big-bang-theory"}),Object(A.jsx)("img",{src:y,alt:"big-bang-theory"}),Object(A.jsx)("img",{src:R,alt:"big-bang-theory"}),Object(A.jsx)("img",{src:D,alt:"big-bang-theory"})]})};var L=function(){return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)("header",{className:"header flex",children:Object(A.jsx)(j,{})}),Object(A.jsx)("main",{className:"main-block",children:Object(A.jsxs)(i.c,{children:[Object(A.jsx)(i.a,{path:"/hw21-react-router/",exact:!0,children:Object(A.jsx)(d,{})}),Object(A.jsx)(i.a,{path:"/hw21-react-router/posts",children:Object(A.jsx)(O,{})}),Object(A.jsx)(i.a,{path:"/hw21-react-router/contacts",children:Object(A.jsx)(v,{})}),Object(A.jsx)(i.a,{path:"/hw21-react-router/photos",children:Object(A.jsx)(U,{})})]})})]})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};r.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(o.a,{children:Object(A.jsx)(L,{})})}),document.getElementById("root")),E()}},[[36,1,2]]]);
//# sourceMappingURL=main.54828d36.chunk.js.map