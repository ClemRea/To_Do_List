(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){e.exports=a(25)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),l=a.n(r),o=a(1),i=a(3);var s=function(e,t){localStorage.setItem(e,JSON.stringify(t))};var u=function(e){return JSON.parse(localStorage.getItem(e))};var m=function(e){return!!localStorage.getItem(e)};var d=function(e){if(m("Todo")){var t=e,a=u("Todo");a.push(t),s("Todo",a)}else{var n=[],c=e;n.push(c),s("Todo",n)}};var f=function(e){var t=e.task,a=e.onDelete,n=e.isUrgent?"liste_element urgent_task":"liste_element";return c.a.createElement("li",{className:n,id:"liste_element"},t,c.a.createElement("span",{className:"icon_container",onClick:function(){var e=(u("Todo")||"[]").filter((function(e){return e.task!==t}));s("Todo",e),a(t)}},c.a.createElement("i",{className:"fa-solid fa-trash poubelle"})))};a(18);var g=function(e){var t=e.tasks,a=e.onDelete,n=Object(i.a)(t).sort((function(e,t){return e.urgent===t.urgent?0:e.urgent?-1:1}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"liste_container"},n.map((function(e,t){return c.a.createElement(f,{key:t,task:e.task,onDelete:a,isUrgent:e.urgent})}))))};a(6);var h=function(e){var t=e.label,a=e.checked,r=e.onChange,l=Object(n.useState)(a),i=Object(o.a)(l,2),s=i[0],u=i[1];return c.a.createElement("label",{htmlFor:"urgent",className:"urgent",id:"urgent"},t,c.a.createElement("input",{type:"checkbox",checked:s,onChange:function(e){var t=e.target.checked;u(t),r&&r(t)},id:"urgent",className:"urgent_checkbox"}))};var b=function(e){var t=e.tasks,a=e.onDelete,r=Object(n.useState)(1),l=Object(o.a)(r,2),i=l[0],s=l[1],u=Math.ceil(t.length/7),m=7*(i-1),d=m+7,f=Array.from({length:u},(function(e,t){return c.a.createElement("span",{key:t,className:"page_button ".concat(i===t+1?"active":""),onClick:function(){s(t+1)}},t+1)}));return c.a.createElement("div",null,c.a.createElement(g,{tasks:t.slice(m,d),onDelete:a}),u>1&&c.a.createElement("div",{className:"pagination"},f))};a(19),a(7),a(20),a(21);var E=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],l=function(){r(!a)},m=Object(n.useState)(""),f=Object(o.a)(m,2),E=f[0],v=f[1],k=Object(n.useState)([]),p=Object(o.a)(k,2),N=p[0],_=p[1],O=Object(n.useState)(!1),j=Object(o.a)(O,2),C=j[0],S=j[1];Object(n.useEffect)((function(){var e=u("Todo");e&&_(e)}),[]);var T=function(e){var t=N.filter((function(t){return t.task!==e}));_(t),s("Todo",t)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"btn_container"},c.a.createElement("button",{className:"btn",id:"add_btn",onClick:l})),N.length>7?c.a.createElement(b,{tasks:N,onDelete:T}):c.a.createElement(g,{tasks:N,onDelete:T}),a&&c.a.createElement("div",{className:"modal"},c.a.createElement("div",{className:"overlay"},c.a.createElement("div",{className:"modal_content",id:"modal_content"},c.a.createElement("form",{className:"form_container",id:"form_container"},c.a.createElement("input",{type:"text",id:"tache",name:"tache",placeholder:"T\xe2che :",className:"tache",value:E,onChange:function(e){return v(e.target.value)}}),c.a.createElement(h,{label:"Urgent",checked:C,onChange:function(e){S(e)}})),c.a.createElement("button",{className:"submit_btn",id:"submit_btn",onClick:function(){if(""!==E.trim()){var e={task:E,urgent:C};d(e),_([].concat(Object(i.a)(N),[e])),v(""),S(!1),s("Todo",[].concat(Object(i.a)(N),[e])),r(!1)}}},"AJOUTER"),c.a.createElement("button",{className:"close_modal",onClick:l},c.a.createElement("span",{className:"line l1"}),c.a.createElement("span",{className:"line l2"}))))))},v=function(e){var t=e.handleChange,a=e.isChecked;return c.a.createElement("div",{className:"toggle_container"},c.a.createElement("input",{type:"checkbox",id:"check",className:"toggle",onChange:t,checked:a}),c.a.createElement("label",{htmlFor:"check",className:"label_text"},"Dark Mode"))};a(22),a(23);var k=function(){var e=Object(n.useState)(!0===u("darkMode")),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){s("darkMode",a),document.body.setAttribute("data-theme",a?"dark":"light")}),[a]),c.a.createElement("div",{className:"header_container",id:"card_todo"},c.a.createElement(v,{isChecked:a,handleChange:function(){return r(!a)}}),c.a.createElement("h1",{className:"titre_h1",id:"titre_h1"},"A Faire :"),c.a.createElement(E,null))};var p=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(k,null))},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,26)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))};a(24);l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null))),N()}],[[9,1,2]]]);
//# sourceMappingURL=main.7548835c.chunk.js.map