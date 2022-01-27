(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{12:function(t,e,s){},13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var a=s(1),n=s.n(a),c=s(7),i=s.n(c),r=(s(12),s(13),s(2)),o=s(3),l=s(5),d=s(4),j=s(0),u=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(r.a)(this,s),(a=e.call(this,t)).state={date:new Date},a}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({date:new Date})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return Object(j.jsx)("h1",{children:this.state.date.toLocaleString()})}}]),s}(n.a.Component),h=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(r.a)(this,s),(a=e.call(this,t)).handleSubmit=function(t){t.preventDefault(),a.props.createTask(a.state.task),a.setState({task:""})},a.handleChange=function(t){a.setState({task:t.target.value})},a.state={task:""},a}return Object(o.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("input",{type:"text",placeholder:"enter the task",value:this.state.task,onChange:this.handleChange,autoFocus:!0}),Object(j.jsx)("button",{className:"add",type:"submit",children:"Add"})]})}}]),s}(a.Component),b=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(r.a)(this,s),(a=e.call(this,t)).toggleTask=function(){a.props.toggleTask(a.props.id)},a.deleteTask=function(){a.props.deleteTask(a.props.id)},a.setEditingState=function(t){a.setState({isEditing:t})},a.handleChange=function(t){a.setState({task:t.target.value})},a.handleSubmit=function(t){t.preventDefault(),a.props.editTask(a.props.id,a.state.task),a.setState({isEditing:!1})},a.state={task:a.props.taskItem.task,isEditing:!1},a}return Object(o.a)(s,[{key:"render",value:function(){var t=this;return Object(j.jsx)("tr",{children:this.state.isEditing?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("td",{children:Object(j.jsx)("form",{onSubmit:this.handleSubmit,children:Object(j.jsx)("input",{value:this.state.task,onChange:this.handleChange,autoFocus:!0})})}),Object(j.jsxs)("td",{children:[Object(j.jsx)("button",{className:"save",onClick:this.handleSubmit,type:"submit",children:"Save"}),Object(j.jsx)("button",{className:"back",onClick:function(){return t.setEditingState(!1)},type:"button",children:"Back"})]})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("td",{className:"task",onClick:this.toggleTask,children:[Object(j.jsx)("input",{type:"checkbox",readOnly:!0,checked:this.props.taskItem.isCompleted}),Object(j.jsx)("span",{className:this.props.taskItem.isCompleted?"completed":"not-completed",children:this.props.taskItem.task})]}),Object(j.jsxs)("td",{children:[Object(j.jsx)("button",{className:"edit",onClick:function(){return t.setEditingState(!0)},children:"Edit"}),Object(j.jsx)("button",{className:"delete",onClick:this.deleteTask,children:"Delete"})]})]})})}}]),s}(a.Component),k=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Task"}),Object(j.jsx)("th",{children:"Actions"})]})}),Object(j.jsx)("tbody",{children:this.props.tasks.map((function(e,s){return Object(j.jsx)(b,{taskItem:e,id:s,deleteTask:t.props.deleteTask,editTask:t.props.editTask,toggleTask:t.props.toggleTask},s)}))})]})}}]),s}(a.Component),p=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[],O=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(r.a)(this,s),(a=e.call(this,t)).createTask=function(t){""!==t.trim()?(p.push({task:t,isCompleted:!1}),a.setState({tasks:p}),localStorage.setItem("tasks",JSON.stringify(p))):alert("Task can't be empty")},a.toggleTask=function(t){var e=p[t];e.isCompleted=!e.isCompleted,a.setState({tasks:p}),localStorage.setItem("tasks",JSON.stringify(p))},a.deleteTask=function(t){p.splice(t,1),a.setState({tasks:p}),localStorage.setItem("tasks",JSON.stringify(p))},a.editTask=function(t,e){p[t].task=e,a.setState({tasks:p}),localStorage.setItem("tasks",JSON.stringify(p))},a.state={tasks:p},a}return Object(o.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)("h1",{children:"To Do"}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)(h,{createTask:this.createTask}),Object(j.jsx)("br",{}),Object(j.jsx)(k,{deleteTask:this.deleteTask,tasks:this.state.tasks,editTask:this.editTask,toggleTask:this.toggleTask})]})]})}}]),s}(n.a.Component),m=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(j.jsx)("h1",{children:this.props.message})}}]),s}(n.a.Component),g=m;var f=function(t){return Object(j.jsxs)("div",{children:[" ",Object(j.jsxs)("h1",{children:["Hello ",t.name]}),Object(j.jsx)(g,{message:"Welcome to my chekclist app"})]})};var x=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{}),Object(j.jsx)(g,{message:"You can easily add,edit,mark done and delete tasks"}),Object(j.jsx)(O,{}),Object(j.jsx)(u,{})]})},v=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(e){var s=e.getCLS,a=e.getFID,n=e.getFCP,c=e.getLCP,i=e.getTTFB;s(t),a(t),n(t),c(t),i(t)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.5f705175.chunk.js.map