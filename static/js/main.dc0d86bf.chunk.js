(this["webpackJsonphw-21-react-router"]=this["webpackJsonphw-21-react-router"]||[]).push([[0],{19:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(20),r=a.n(n),i=(a(26),a(2)),o=(a(27),a(8)),j=a(0),l=[{to:"/hw21-react-router/",label:"Home Page"},{to:"/hw21-react-router/posts",label:"Posts"},{to:"/hw21-react-router/contacts",label:"Contact book"},{to:"/hw21-react-router/photos",label:"Photos"}],h=function(){return Object(j.jsx)("nav",{className:"navigation",children:Object(j.jsx)("ul",{className:"flex",children:l.map((function(e){return Object(j.jsx)("li",{className:"navigation-item",children:Object(j.jsx)(o.b,{exact:!0,to:e.to,children:e.label})},e.to)}))})})},p=a.p+"static/media/spok.c86c57bf.jpeg",m=function(){return Object(j.jsxs)("div",{className:"home-page",children:[Object(j.jsx)("img",{className:"home-pic",src:p,alt:"mr-spock"}),Object(j.jsx)("h1",{children:"Choose the page and live long and prosper"})]})},b=(a(34),a(35),function(e){var t=e.author,a=e.content,c=e.image,s=e.date;e.network;return Object(j.jsxs)("div",{className:"post-container",children:[Object(j.jsx)("div",{className:"user-avatar",children:Object(j.jsx)("img",{src:t.photo,alt:"avatar"})}),Object(j.jsxs)("div",{className:"post-body",children:[Object(j.jsxs)("div",{className:"user-info",children:[Object(j.jsx)("p",{className:"user-name",children:t.name}),Object(j.jsx)("p",{className:"user-nickname",children:t.nickname}),Object(j.jsx)("p",{className:"post-date",children:s})]}),Object(j.jsxs)("div",{className:"post-content",children:[Object(j.jsx)("p",{className:"post-text",children:a}),Object(j.jsx)("img",{className:"post-image",src:c,alt:"post-pic"})]})]})]})}),d=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"post-feed",children:[Object(j.jsx)(b,{author:{name:"Ross Geller",photo:"https://i.pinimg.com/originals/20/13/a4/2013a4bece1fd4e40c261ea4a609c90a.png",nickname:"@divorce-force"},content:"Why even Facebook don't believe that we were on a break??",image:"https://cdn3.whatculture.com/images/2016/01/e4PD8qSM.png",date:"12 \u0430\u043f\u0440."}),Object(j.jsx)(b,{author:{name:"Sergio Marquina",photo:"http://d1ydle56j7f53e.cloudfront.net/assets/news_images/The-Professor--1--111036.jpg",nickname:"@professor"},content:"Hey,do you want interesting job?",image:"https://miro.medium.com/max/1120/0*XhURthSzEKmBSAMW.png",date:"12 \u0430\u043f\u0440."})]})})},u=a(10),g=a(11),x=a(13),O=a(12),f=(a(19),function(e){Object(x.a)(a,e);var t=Object(O.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("p",{className:"name",children:[Object(j.jsx)("span",{children:"First name:"}),this.props.contact.firstName]}),Object(j.jsxs)("p",{className:"last-name",children:[Object(j.jsx)("span",{children:"Last name:"}),this.props.contact.lastName]}),Object(j.jsxs)("p",{className:"phone-number",children:[Object(j.jsx)("span",{children:"Phone number"}),this.props.contact.phone]}),Object(j.jsxs)("p",{className:"gender",children:[Object(j.jsx)("span",{children:"Gender:"}),this.props.contact.gender]})]})}}]),a}(c.Component)),N=function(e){Object(x.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(u.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={contacts:[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{firstName:"\u0414\u0436\u043e\u0437\u0435\u0444",lastName:"\u0422\u0440\u0456\u0431\u0456\u0430\u043d\u0441\u044c\u043a\u0438\u0439",phone:"+380981238756",gender:"male"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380956319521",gender:"male"}],input:""},e.handleSearchChange=function(t){e.setState({input:t.target.value})},e}return Object(g.a)(a,[{key:"render",value:function(){var e,t=this.state.input;return e=""!==t?e=this.state.contacts.filter((function(e){return e.lastName.toLowerCase().includes(t.toLowerCase())||e.firstName.toLowerCase().includes(t.toLowerCase())||e.phone.includes(t)})):this.state.contacts,Object(j.jsxs)("div",{className:"contacts-wrapper",children:[Object(j.jsx)("div",{className:"search",children:Object(j.jsx)("input",{className:"user-input",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",value:this.state.input,onChange:this.handleSearchChange})}),e.map((function(e,t){return Object(j.jsx)(f,{contact:e},t)}))]})}}]),a}(c.Component),v=a.p+"static/media/photo1.1764a81d.jpg",w=a.p+"static/media/photo2.42eb3a6c.jpg",y=a.p+"static/media/photo3.0d0fea16.jpg",k=a.p+"static/media/photo4.ac015a6f.jpg",C=a.p+"static/media/photo5.e34d08c6.jpg",S=a.p+"static/media/photo6.9ffe2c98.jpg",P=a.p+"static/media/photo7.41a94360.jpg",F=a.p+"static/media/photo8.bc1011bb.jpg",L=a.p+"static/media/photo9.bde4042d.jpg",M=function(){return Object(j.jsxs)("div",{className:"photos flex",children:[Object(j.jsx)("img",{src:v,alt:"big-bang-theory"}),Object(j.jsx)("img",{src:w,alt:"big-bang-theory"}),Object(j.jsx)("img",{src:y,alt:"big-bang-theory"}),Object(j.jsx)("img",{src:k,alt:"big-bang-theory"}),Object(j.jsx)("img",{src:C,alt:"big-bang-theory"}),Object(j.jsx)("img",{src:S,alt:"big-bang-theory"}),Object(j.jsx)("img",{src:P,alt:"big-bang-theory"}),Object(j.jsx)("img",{src:F,alt:"big-bang-theory"}),Object(j.jsx)("img",{src:L,alt:"big-bang-theory"})]})};var A=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"header flex",children:Object(j.jsx)(h,{})}),Object(j.jsx)("main",{className:"main-block",children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/hw21-react-router/",exact:!0,children:Object(j.jsx)(m,{})}),Object(j.jsx)(i.a,{path:"/hw21-react-router/posts",children:Object(j.jsx)(d,{})}),Object(j.jsx)(i.a,{path:"/hw21-react-router/contacts",children:Object(j.jsx)(N,{})}),Object(j.jsx)(i.a,{path:"/hw21-react-router/photos",children:Object(j.jsx)(M,{})})]})})]})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(A,{})})}),document.getElementById("root")),B()}},[[36,1,2]]]);
//# sourceMappingURL=main.dc0d86bf.chunk.js.map