(this.webpackJsonpreact_step_form=this.webpackJsonpreact_step_form||[]).push([[0],{81:function(e,a,t){e.exports=t(93)},86:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),o=(t(86),t(60)),u=t(14),i=t(15),m=t(18),p=t(17),s=t(135),h=t(128),d=t(124),E=t(133),f=t(130),v=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).continue=function(a){a.preventDefault(),e.props.nextStep()},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=e.values,t=e.handleChange;return l.a.createElement(d.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{open:!0,fullWidth:!0,maxWidth:"sm"},l.a.createElement(h.a,{title:"Gracz"}),l.a.createElement(E.a,{placeholder:"Podaj nazwe pola",label:"Nazwa pola",onChange:t("name"),defaultValue:a.name,margin:"normal",fullWidth:!0}),l.a.createElement("br",null),l.a.createElement(E.a,{placeholder:"Podaj kolor",label:"Podaj kolor",onChange:t("colour"),defaultValue:a.colour,margin:"normal",fullWidth:!0}),l.a.createElement("br",null),l.a.createElement(E.a,{placeholder:"Podaj cene",label:"Podaj cene",onChange:t("price"),defaultValue:a.price,margin:"normal",fullWidth:!0}),l.a.createElement("br",null),l.a.createElement(f.a,{color:"primary",variant:"contained",onClick:this.continue},"Dalej"))))}}]),t}(n.Component),b=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).continue=function(a){a.preventDefault(),e.props.nextStep()},e.back=function(a){a.preventDefault(),e.props.prevStep()},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=e.values,t=e.handleChange;return l.a.createElement(d.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{open:!0,fullWidth:!0,maxWidth:"sm"},l.a.createElement(h.a,{title:"Budynki"}),l.a.createElement(E.a,{placeholder:"Podaj ilo\u015b\u0107 dom\xf3w",label:"Podaj ilo\u015b\u0107 dom\xf3w",onChange:t("housecount"),defaultValue:a.housecount,margin:"normal",fullWidth:!0}),l.a.createElement("br",null),l.a.createElement(E.a,{placeholder:"Podaj cene za dom",label:"Podaj cene za dom",onChange:t("house_price"),defaultValue:a.house_price,margin:"normal",fullWidth:!0}),l.a.createElement("br",null),l.a.createElement(E.a,{placeholder:"Podaj cene za hotel",label:"Podaj cene za hotel",onChange:t("hotel_price"),defaultValue:a.hotel_price,margin:"normal",fullWidth:!0}),l.a.createElement("br",null),l.a.createElement(f.a,{color:"secondary",variant:"contained",onClick:this.back},"Powr\xf3t"),l.a.createElement(f.a,{color:"primary",variant:"contained",onClick:this.continue},"Dalej"))))}}]),t}(n.Component),y=t(129),j=t(131),g=t(137),w=t(132),C=t(136),S=t(68),k=t.n(S),O=t(66),W=t.n(O),x=t(67),_=t.n(x),z=t(69),P=t.n(z),D=t(70),A=t.n(D),V=t(71),F=t.n(V),B=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).continue=function(a){a.preventDefault(),e.props.nextStep()},e.back=function(a){a.preventDefault(),e.props.prevStep()},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.values,a=e.name,t=e.colour,n=e.price,r=e.housecount,c=e.house_price,o=e.hotel_price;return l.a.createElement(d.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{open:!0,fullWidth:!0,maxWidth:"sm"},l.a.createElement(h.a,{title:"Confirm User Data"}),l.a.createElement(y.a,null,l.a.createElement(j.a,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null,l.a.createElement(W.a,null))),l.a.createElement(g.a,{primary:"Nazwa pola",secondary:a})),l.a.createElement(j.a,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null,l.a.createElement(_.a,null))),l.a.createElement(g.a,{primary:"Kolor",secondary:t})),l.a.createElement(j.a,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null,l.a.createElement(k.a,null))),l.a.createElement(g.a,{primary:"Cena",secondary:n})),l.a.createElement(j.a,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null,l.a.createElement(P.a,null))),l.a.createElement(g.a,{primary:"Ilosc dom\xf3w",secondary:r})),l.a.createElement(j.a,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null,l.a.createElement(A.a,null))),l.a.createElement(g.a,{primary:"Cena za dom",secondary:c})),l.a.createElement(j.a,null,l.a.createElement(w.a,null,l.a.createElement(C.a,null,l.a.createElement(F.a,null))),l.a.createElement(g.a,{primary:"Cena za hotel",secondary:o}))),l.a.createElement("br",null),l.a.createElement(f.a,{color:"secondary",variant:"contained",onClick:this.back},"Powr\xf3t"))))}}]),t}(n.Component),N=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).continue=function(a){a.preventDefault(),e.props.nextStep()},e.back=function(a){a.preventDefault(),e.props.prevStep()},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{open:!0,fullWidth:!0,maxWidth:"sm"},l.a.createElement(h.a,{title:"Success"}),l.a.createElement("h1",null,"W\u0142a\u015bnie wyrenderowa\u0142e\u015b swoj\u0105 wirtualn\u0105 kart\u0119"),l.a.createElement("p",null,"Czy chcesz zacz\u0105\u0107 ponownie ?"))))}}]),t}(n.Component),I=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={step:1,name:"",colour:"",price:"",housecount:"",house_price:"",hotel_price:""},e.nextStep=function(){var a=e.state.step;e.setState({step:a+1})},e.prevStep=function(){var a=e.state.step;e.setState({step:a-1})},e.handleChange=function(a){return function(t){e.setState(Object(o.a)({},a,t.target.value))}},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state.step,a=this.state,t={name:a.name,colour:a.colour,price:a.price,housecount:a.housecount,house_price:a.house_price,hotel_price:a.hotel_price};switch(e){case 1:return l.a.createElement(v,{nextStep:this.nextStep,handleChange:this.handleChange,values:t});case 2:return l.a.createElement(b,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:t});case 3:return l.a.createElement(B,{nextStep:this.nextStep,prevStep:this.prevStep,values:t});case 4:return l.a.createElement(N,null);default:console.log("")}}}]),t}(n.Component),J=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[81,1,2]]]);
//# sourceMappingURL=main.e2f89a87.chunk.js.map