(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{28:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var r,a,c=t(0),o=t.n(c),i=t(9),u=t.n(i),s=t(5),l=t(6),d=t(15),b="ADD_CONTACT",j="DELETE_CONTACT",m="FILTER_CONTACT",p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;return n.type===m?n.payload:e},f=t(17),x=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b:return[].concat(Object(f.a)(e),[n.payload]);case j:return e.filter((function(e){return n.payload!==e.id}));default:return e}},h=Object(l.combineReducers)({contacts:O,filter:p}),g=Object(l.createStore)(h,Object(d.devToolsEnhancer)()),v=(t(27),t(28),t(14)),y=t(16),C=t.n(y),z=t(2),w=t(3),T=w.a.form(r||(r=Object(z.a)(["\n  display: flex;\n"]))),k=t(11),A=w.a.button(a||(a=Object(z.a)(["\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n"]))),L=t(1);var R,S=function(e){var n=e.text,t=e.onClick,r=e.title;return Object(L.jsx)(A,{title:r,onClick:t,children:n})},E=w.a.h2(R||(R=Object(z.a)(["\n  font-size: ","px;\n  color: ",";\n  margin-right: ","px;\n  margin-left: ","px;\n  margin-top: ","px;\n"])),(function(e){return e.size}),(function(e){return e.color}),(function(e){return e.marginR}),(function(e){return e.marginL}),(function(e){return e.marginT}));var D,F=function(e){var n=e.marginT,t=e.marginR,r=e.marginL,a=e.text,c=e.size,o=e.color;return Object(L.jsx)(E,{marginT:n,marginR:t,marginL:r,color:o,size:c,children:a})},N=w.a.input(D||(D=Object(z.a)(["\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid gray;\n  background-color: transparent;\n\n  &:hover {\n    border-bottom: 1px solid #000d59;\n  }\n"])));var J=function(e){var n=e.value,t=e.type,r=e.name,a=e.onChange,c=e.placeholder;return Object(L.jsx)(N,{placeholder:c,value:n,type:t,name:r,onChange:a})};var Z,_,q=Object(s.b)((function(e){return{contacts:e.contacts}}),(function(e){return{onSubmit:function(n){return e(function(e){return{type:b,payload:{id:C()(),name:e.name,number:e.number}}}(n))}}}))((function(e){var n=e.contacts,t=e.onSubmit,r=Object(c.useState)(""),a=Object(v.a)(r,2),o=a[0],i=a[1],u=Object(c.useState)(""),s=Object(v.a)(u,2),l=s[0],d=s[1],b=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":i(r);break;case"number":d(r);break;default:return}};return Object(L.jsxs)(T,{onSubmit:function(e){if(e.preventDefault(),n.find((function(e){return e.name.toLowerCase()===o.toLowerCase()})))return alert("".concat(o," is already in contacts")),i(""),void d("");""===o&&""===l||(""!==o&&""!==l?(t({name:o,number:l}),i(""),d("")):alert("Pleasy fill empty fields"))},children:[Object(L.jsx)(F,{marginR:15,size:18,text:"Name"}),Object(L.jsx)(J,{placeholder:"type name...",value:o,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:b}),Object(L.jsx)(F,{marginR:15,marginL:30,size:18,text:"Number"}),Object(L.jsx)(J,{placeholder:"type number...",value:l,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:b}),Object(L.jsx)(S,{title:"Add to contacts",text:Object(L.jsx)(k.b,{size:50,color:"#187bcd"}),size:20,type:"submit"})]})})),B=w.a.p(Z||(Z=Object(z.a)(["\n  font-size: 18px;\n"]))),I=w.a.p(_||(_=Object(z.a)([""])));var M,P,H=function(e){var n=e.contact;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(B,{children:n.name}),Object(L.jsx)(I,{children:n.number})]})},K=w.a.ul(M||(M=Object(z.a)(["\n  list-style: none;\n  display: flex;\n"]))),$=w.a.li(P||(P=Object(z.a)(["\n  padding: 5px;\n  margin-right: 40px;\n"])));var G=function(e){return e.contacts.filter((function(n){return n.name.toLowerCase().includes(e.filter.toLowerCase())}))},Q=Object(s.b)((function(e){return{contacts:G(e)}}),(function(e){return{onDeleteContact:function(n){return e(function(e){return{type:j,payload:e}}(n))}}}))((function(e){var n=e.contacts,t=e.onDeleteContact;return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(K,{children:n.map((function(e){return Object(L.jsxs)($,{children:[Object(L.jsx)(H,{contact:e}),Object(L.jsx)(S,{title:"Remove from contacts",text:Object(L.jsx)(k.a,{color:"#ff4f4f",size:30}),type:"button",onClick:function(){return t(e.id)}})]},e.id)}))})})}));var U,V=Object(s.b)((function(e){return{value:e.filter}}),(function(e){return{onChange:function(n){return e((t=n.target.value,{type:m,payload:t}));var t}}}))((function(e){var n=e.value,t=e.onChange;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(F,{size:18,text:"Find Contacts by name"}),Object(L.jsx)(J,{placeholder:"type to find contacts...",type:"text",name:"filter",value:n,onChange:t})]})})),W=w.a.div(U||(U=Object(z.a)(["\n  width: 100%;\n  height: 100vh;\n  padding: 15px;\n  margin-left: auto;\n  margin-right: auto;\n"])));var X=function(e){var n=e.children;return Object(L.jsx)(W,{children:n})};var Y=function(){return Object(L.jsxs)(X,{children:[Object(L.jsx)(F,{color:"#424242",size:30,text:"Phonebook"}),Object(L.jsx)("div",{style:{border:"1px solid gray",width:"fit-content",padding:"20px"},children:Object(L.jsx)(q,{})}),Object(L.jsx)(V,{}),Object(L.jsx)(F,{marginT:40,size:20,text:"Contacts"}),Object(L.jsx)(Q,{})]})};u.a.render(Object(L.jsx)(o.a.StrictMode,{children:Object(L.jsx)(s.a,{store:g,children:Object(L.jsx)(Y,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.457638b5.chunk.js.map