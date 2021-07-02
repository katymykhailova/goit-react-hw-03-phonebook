(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{26:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},35:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(11),c=n.n(a),i=n(43),l=(n(35),n(28)),s=n(12),d=n(13),u=n(18),b=n(16),p=n(44),m=n(10),h=n(2);var g=Object(h.a)("section",{target:"ersiafj0"})({name:"14donlh",styles:"max-width:1170px;margin-left:auto;margin-right:auto;border:1px #e4e6ee solid;border-radius:0px 0px 4px 4px;box-shadow:0px 4px 4px rgb(0 0 0 / 25%);padding:20px;margin-bottom:20px"}),x=n(1);var f=function(e){var t=e.children,n=e.title;return Object(x.jsxs)(g,{children:[Object(x.jsx)("h1",{children:n}),t]})},j=n(21),O=n(29),v=Object(h.a)("button",{target:"e1f0fdok0"})("display:flex;align-items:center;justify-content:center;margin-left:10px;padding:10px;text-align:center;letter-spacing:0.06em;background-color:",(function(e){return e.theme.colors.blue}),";color:",(function(e){return e.theme.colors.white}),";border:0;border-radius:50%;cursor:pointer;& svg{color:",(function(e){return e.theme.colors.white}),";margin-right:0;}&:hover{background-color:",(function(e){return e.theme.colors.accentBlue}),";}"),y=["children","type","onClick"];function w(e){var t=e.children,n=(e.type,e.onClick),r=Object(O.a)(e,y);return Object(x.jsx)(v,Object(j.a)(Object(j.a)({type:"button",onClick:n},r),{},{children:t}))}w.defaultProps={onClick:function(){return null},children:null};var C=w,k=Object(h.a)("span",{target:"ehi7tkv1"})("& svg{color:",(function(e){return e.theme.colors.blue}),";margin-right:10px;}"),S=(Object(h.a)("button",{target:"ehi7tkv0"})("display:flex;align-items:center;justify-content:center;margin-left:10px;padding:10px 28px;max-width:200px;font-weight:700;font-size:12px;text-align:center;letter-spacing:0.06em;text-decoration:none;background-color:",(function(e){return e.theme.colors.blue}),";color:",(function(e){return e.theme.colors.white}),";border:0;border-radius:4px;cursor:pointer;&:hover{background-color:",(function(e){return e.theme.colors.accentBlue}),";}"),15);var z=function(e){var t=e.name,n=e.number,r=e.onDeleteContact;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(k,{children:[Object(x.jsx)(m.a,{size:S}),t,": ",n]}),Object(x.jsx)(C,{type:"button",onClick:r,"aria-label":"add contact",children:Object(x.jsx)(m.c,{size:S})})]})};var D=Object(h.a)("ul",{target:"ebua8sb1"})({name:"5zep1v",styles:"display:grid;justify-content:center;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));grid-gap:24px;padding:0;list-style:none"}),M=Object(h.a)("li",{target:"ebua8sb0"})("display:flex;align-items:center;justify-items:baseline;justify-content:space-between;margin-bottom:10px;padding:10px;border-bottom:1px solid ",(function(e){return e.theme.colors.grey}),";");var A=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(x.jsx)(D,{children:t.map((function(e){var t=e.id,r=e.name,o=e.number;return Object(x.jsx)(M,{children:Object(x.jsx)(z,{name:r,number:o,onDeleteContact:function(){return n(t)}})},t)}))})},B=n(27);var F=Object(h.a)("form",{target:"ezuoohd4"})({name:"1hcx8jb",styles:"padding:0"}),J=Object(h.a)("label",{target:"ezuoohd3"})({name:"d7h4p4",styles:"max-width:400px;display:flex;flex-direction:column;margin-left:10px"}),L=Object(h.a)("input",{target:"ezuoohd2"})("margin:10px 0;height:30px;padding-left:15px;background-color:transparent;border:1px solid ",(function(e){return e.theme.colors.blue}),";border-radius:4px;"),P=Object(h.a)("button",{target:"ezuoohd1"})("display:flex;align-items:center;justify-content:center;margin-left:10px;padding:10px 28px;max-width:200px;font-weight:700;font-size:12px;text-align:center;letter-spacing:0.06em;text-decoration:none;background-color:",(function(e){return e.theme.colors.blue}),";color:#fff;border:0;border-radius:4px;cursor:pointer;&:disabled,&:disabled:hover{background-color:#7fbff3;}&:hover{background-color:",(function(e){return e.theme.colors.accentBlue}),";}"),q=Object(h.a)("span",{target:"ezuoohd0"})({name:"1q35f0k",styles:"left:400px;bottom:0px;color:coral;margin-bottom:10px"});var E=Object(B.a)({mapPropsToValues:function(){return{name:"",number:""}},validate:function(e,t){var n={};return e.name?e.number?/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/i.test(e.name)?t.contacts.find((function(t){return t.name===e.name}))?n.name="".concat(e.name," \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u0445."):/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(e.number)||(n.number="\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"):n.name="\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.":n.number="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":n.name="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",n},handleSubmit:function(e,t){var n=t.props,r=t.setSubmitting,o=t.resetForm;n.onSubmit(e),r(!1),o()}})((function(e){var t=e.values,n=e.touched,r=e.errors,o=e.handleChange,a=e.handleSubmit,c=e.isSubmitting;return Object(x.jsxs)(F,{onSubmit:a,children:[Object(x.jsxs)(J,{children:["Name",Object(x.jsx)(L,{type:"text",name:"name",onChange:o,value:t.name}),n.name&&r.name&&Object(x.jsx)(q,{children:r.name})]}),Object(x.jsxs)(J,{children:["Number",Object(x.jsx)(L,{type:"tel",name:"number",onChange:o,value:t.number}),n.number&&r.number&&Object(x.jsx)(q,{children:r.number})]}),Object(x.jsx)(P,{type:"submit",disabled:c||""===t.name||""===t.number,children:"Add contacts"})]})})),I=n(25);var N=Object(h.a)("label",{target:"e16t0fpd1"})({name:"ic4by2",styles:"max-width:400px;display:flex;flex-direction:column"}),T=Object(h.a)(I.DebounceInput,{target:"e16t0fpd0"})("width:345px;margin:10px 0 0 0;height:30px;padding-left:15px;background-color:transparent;border:1px solid ",(function(e){return e.theme.colors.grey}),";border-radius:4px;");var K=function(e){e.value;var t=e.onChange;return Object(x.jsxs)(N,{children:["Find contacts by name",Object(x.jsx)(T,{type:"text",debounceTimeout:300,onChange:t})]})};var V=Object(h.a)("div",{target:"e3bivgq1"})({name:"32j8gx",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0, 0, 0, 0.5)"}),Z=Object(h.a)("div",{target:"e3bivgq0"})({name:"1xbz76p",styles:"position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);min-height:200px;max-width:400px;width:100%;padding:12px;background-color:#fff;border-radius:3px;box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)"}),U=document.querySelector("#modal-root"),H=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(a.createPortal)(Object(x.jsx)(V,{onClick:this.handleBackdropClick,children:Object(x.jsx)(Z,{children:this.props.children})}),U)}}]),n}(r.Component);var R=Object(h.a)("section",{target:"ejlwa5d0"})({name:"1ui4uwq",styles:"display:flex;align-items:flex-end;max-width:1170px;margin-left:auto;margin-right:auto;padding:0;margin-bottom:20px"});var W=function(e){var t=e.children;return Object(x.jsx)(R,{children:t})},$=n(26),G=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={contacts:$,filter:"",name:"",number:"",showModal:!1},e.changeFilter=function(t){e.setState({filter:t.target.value})},e.getVisibleContacts=function(){var t=e.state,n=t.contacts,r=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(r)}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.addContact=function(t){var n=t.name,r=t.number,o={id:Object(p.a)(),name:n,number:r};e.setState((function(e){var t=e.contacts;return{contacts:[o].concat(Object(l.a)(t))}}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.contacts,r=t.contacts;n!==r&&localStorage.setItem("contacts",JSON.stringify(n)),console.log(n.length),console.log(r.length),n.length>r.length&&0!==r.length&&this.toggleModal()}},{key:"render",value:function(){var e=this.state,t=e.filter,n=e.showModal,r=e.contacts,o=this.getVisibleContacts();return Object(x.jsxs)(f,{children:[Object(x.jsx)("h1",{children:"Phonebook"}),Object(x.jsxs)(W,{children:[Object(x.jsx)(K,{filter:t,onChange:this.changeFilter}),Object(x.jsx)(C,{type:"button",onClick:this.toggleModal,"aria-label":"add contact",children:Object(x.jsx)(m.b,{size:16})})]}),Object(x.jsx)("h2",{children:"Contacts"}),Object(x.jsx)(A,{contacts:o,onDeleteContact:this.deleteContact}),n&&Object(x.jsx)(H,{onClose:this.toggleModal,children:Object(x.jsx)(E,{onSubmit:this.addContact,contacts:r})})]})}}]),n}(r.Component),Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),o(e),a(e),c(e)}))};c.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(i.b,{theme:{colors:{white:"#ffffff",blue:"#2196f3",accentBlue:"#1e81d3",grey:"#e1dfdf"}},children:Object(x.jsx)(G,{})})}),document.getElementById("root")),Q()}},[[41,1,2]]]);
//# sourceMappingURL=main.b6001d67.chunk.js.map