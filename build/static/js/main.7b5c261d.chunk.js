(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(2),s=n(16),o=n.n(s),a=n(3),u=function(e){var t=e.filter,n=e.setFilter;return Object(c.jsxs)("p",{children:["filter shown with",Object(c.jsx)("input",{value:t,onChange:function(e){n(e.target.value)}})]})},i=n(4),j=n(5),b=n.n(j),f="/api/persons",d={getAllPersons:function(){return b.a.get(f).then((function(e){return e.data}))},createPerson:function(e){return b.a.post(f,e).then((function(e){return e.data}))},deletePerson:function(e){return b.a.delete("".concat(f,"/").concat(e.id))},updatePerson:function(e,t){var n=Object(i.a)(Object(i.a)({},e),{},{number:t});return b.a.put("".concat(f,"/").concat(e.id),n)}},l=function(e){var t=e.persons,n=e.setPersons,s=e.setMessage,o=Object(r.useState)(""),u=Object(a.a)(o,2),j=u[0],b=u[1],f=Object(r.useState)(""),l=Object(a.a)(f,2),m=l[0],h=l[1],p=function(){b(""),h("")};return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c={name:j,number:m},r=t.find((function(e){return e.name===j&&e.number!==m}));r?function(e){window.confirm("".concat(e.name," is already added to phonebook, replace the old number with a new one?"))&&(d.updatePerson(e,m).then((function(){n(t.map((function(t){return t.name===e.name?Object(i.a)(Object(i.a)({},e),{},{number:m}):t}))),s({type:"success",content:"Updated ".concat(j)})})).catch((function(e){return s({type:"error",content:e.message})})),p())}(r):(d.createPerson(c).then((function(e){n(t.concat(e)),s({type:"success",content:"Added ".concat(j)})})).catch((function(e){return s({type:"error",content:e.message})})),p())},children:[Object(c.jsxs)("div",{children:["name:"," ",Object(c.jsx)("input",{value:j,onChange:function(e){return b(e.target.value)}})]}),Object(c.jsxs)("div",{children:["number:"," ",Object(c.jsx)("input",{value:m,onChange:function(e){return h(e.target.value)}})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},m=function(e){var t=e.persons,n=e.setPersons,r=e.setMessage;return Object(c.jsx)(c.Fragment,{children:t.map((function(e){return Object(c.jsxs)("p",{children:[e.name," ",e.number," ",Object(c.jsx)("button",{onClick:function(){return c=e,void(window.confirm("Delete ".concat(c.name))&&d.deletePerson(c).then((function(){n(t.filter((function(e){return e.name!==c.name}))),r({type:"success",content:"Deleted ".concat(c.name)})})).catch((function(e){return r({type:"error",content:"Information of ".concat(c.name," has already been removed from server")})})));var c},children:"delete"})]},e.id)}))})},h=(n(15),function(e){var t=e.message,n=e.setMessage;return Object(r.useEffect)((function(){var e=setTimeout((function(){n("")}),5e3);return function(){return clearTimeout(e)}}),[t,n]),t&&t.content?Object(c.jsx)("p",{className:t.type,children:t.content}):""}),p=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1],o=Object(r.useState)(""),i=Object(a.a)(o,2),j=i[0],b=i[1],f=Object(r.useState)({type:"success",content:""}),p=Object(a.a)(f,2),O=p[0],g=p[1];return Object(r.useEffect)((function(){d.getAllPersons().then((function(e){return s(e)})).catch((function(e){return g({type:"error",content:e.message})}))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(h,{message:O,setMessage:g}),Object(c.jsx)(u,{filter:j,setFilter:b}),Object(c.jsx)("h3",{children:"Add a new"}),Object(c.jsx)(l,{persons:n,setPersons:s,setMessage:g}),Object(c.jsx)("h3",{children:"Numbers"}),Object(c.jsx)(m,{persons:n.filter((function(e){return e.name.toLowerCase().includes(j)})),setPersons:s,setMessage:g})]})};o.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.7b5c261d.chunk.js.map