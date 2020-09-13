(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),u=n.n(r),c=(n(14),n(8)),m=n(1),s=function(e){return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Username"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,e.users.length>0?e.users.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.username),l.a.createElement("td",null,l.a.createElement("button",{className:"button muted-button",onClick:function(){return e.editRow(t)}},"Edit"),l.a.createElement("button",{className:"button muted-button",onClick:function(){return e.deleteUser(t.id)}},"Delete")))})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:3},"No users"))))},i=n(2),o=n(3),d=function(e){var t={id:null,name:"",username:""},n=Object(a.useState)(t),r=Object(m.a)(n,2),u=r[0],c=r[1],s=function(e){var t=e.target,n=t.name,a=t.value;c(Object(o.a)(Object(o.a)({},u),{},Object(i.a)({},n,a)))};return l.a.createElement("form",{onSubmit:function(n){n.preventDefault(),u.name&&u.username&&(e.addUser(u),c(t))}},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:u.name,onChange:s}),l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",name:"username",value:u.username,onChange:s}),l.a.createElement("button",null,"Add new user"))},E=function(e){var t=Object(a.useState)(e.currentUser),n=Object(m.a)(t,2),r=n[0],u=n[1],c=function(e){var t=e.target,n=t.name,a=t.value;u(Object(o.a)(Object(o.a)({},r),{},Object(i.a)({},n,a)))};return Object(a.useEffect)((function(){u(e.currentUser)}),[e]),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updateUser(r.id,r)}},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:r.name,onChange:c}),l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",name:"username",value:r.username,onChange:c}),l.a.createElement("button",null,"Update user"),l.a.createElement("button",{onClick:function(){return e.setEditing(!1)},className:"button muted-button"},"Cancel"))},b=function(){var e=Object(a.useState)([{id:1,name:"Tania",username:"floppydiskette"},{id:2,name:"Craig",username:"siliconeidolon"},{id:3,name:"Ben",username:"benisphere"}]),t=Object(m.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)(!1),i=Object(m.a)(u,2),o=i[0],b=i[1],f=Object(a.useState)({id:null,name:"",username:""}),p=Object(m.a)(f,2),h=p[0],v=p[1];return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"CRUD App with Hooks"),l.a.createElement("div",{className:"flex-row"},l.a.createElement("div",{className:"flex-large"},o?l.a.createElement("div",null,l.a.createElement("h2",null,"Edit user"),l.a.createElement(E,{setEditing:b,currentUser:h,updateUser:function(e,t){b(!1),r(n.map((function(n){return n.id===e?t:n})))}})):l.a.createElement("div",null,l.a.createElement("h2",null,"Add user"),l.a.createElement(d,{addUser:function(e){e.id=n.length+1,r([].concat(Object(c.a)(n),[e]))}}))),l.a.createElement("div",{className:"flex-large"},l.a.createElement("h2",null,"View users"),l.a.createElement(s,{users:n,deleteUser:function(e){r(n.filter((function(t){return t.id!==e}))),b(!1)},editRow:function(e){b(!0),v({id:e.id,name:e.name,username:e.username})}}))))};u.a.render(l.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.7f20375c.chunk.js.map