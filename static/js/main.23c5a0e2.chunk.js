(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{55:function(n,e,t){"use strict";t.r(e);var c,i,a,r,o,s,d,l,p,x,j,h,b,u,g=t(0),m=t.n(g),O=t(24),f=t.n(O),k=t(2),v=t(3),y=v.a.div(c||(c=Object(k.a)(["\ndisplay: inline-block;\nmargin-top: 10px;\nbackground-color: #D64747;\nwidth: 100%;\nmin-height: max-content;\nposition: relative;\n&&{ \n  padding: 10px;\n  margin: 15px;\n}\n"]))),w=v.a.div(i||(i=Object(k.a)(["\ndisplay: flex;\njustify-content: baseline;\nalign-items: center;\ntext-align: center;\nheight: 20px;\n&&{ \n  padding: 10px;\n \n}\n"]))),D=v.a.div(a||(a=Object(k.a)(["\ndisplay: flex;\njustify-content: center ;\nbackground-color: #AB4C4C;\ntext-align: center;\nheight: max-content;\nmin-height: 400px;\n&&{ \n  padding: 10px;\n  margin: 10px\n}\n"]))),C=v.a.div(r||(r=Object(k.a)(["\nbackground-color: #D9D9D9;\ndisplay: flex;\nflex-direction: column;\nposition: static;\nalign-items: center;\npadding: 10px;\nwidth: 50%;\nmin-width: 100px;\nheight: 1;\nmin-height:max-content ;\nmax-height: 600px;\n&&{ \n  padding: 5px 10px 10px 10px;\n  margin: 15px;\n}\n\n\n"]))),N=v.a.div(o||(o=Object(k.a)(["\nbackground-color: #D9D9D9;\ndisplay:flex;\ntext-align: left;\njustify-content: space-between;\npadding: 10px;\nwidth: 50%;\nmin-width: 100px;\n\n&&{ \n  padding: 5px;\n  margin: 15px;\n}\n\n"]))),S=v.a.div(s||(s=Object(k.a)(["\ncolor: wheat;\nbackground-color: gray;\nheight: 128px;\nwidth:  128px;\nbackground-size: 200px;\noverflow: none;\nalign-self: center;\n\n&&{\n  padding: 0;\n}\n"]))),z=v.a.div(d||(d=Object(k.a)(["\nbackground-color:#C9C9C9;\nheight: 60%;\nwidth: 100%;\noverflow-y: scroll;\noverflow-x: hidden;\ncontain: content;\ndisplay: grid;\ngrid-template-columns: repeat(3,1fr);\n\ngrid-gap: 10px;\n\n&&{\n  padding: 10px;\n  margin: 20px 0 0 0 ;\n}\n"]))),E=v.a.table(l||(l=Object(k.a)(["\ncolor: #212121;\nfont-size: 14px;\nheight: max-content;\nalign-items: center;\njustify-content: center;\n"]))),I=v.a.td(p||(p=Object(k.a)(["\n\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ntext-align: left;\nfont-size: 12px;\ntext-transform: uppercase;\n"]))),B=v.a.input(x||(x=Object(k.a)(["\n&&{\n  width:30%;\n  height: 8px;\n  outline: none;\n  font-size: 14px;\n  padding: 20px;\n  background-color: #C9C9C9;\n  border-color: black;\n  text-transform: uppercase;\n}\n"]))),A=v.a.div(j||(j=Object(k.a)(["\n&&{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  min-height: max-content;\n  background-color: #D9D9D9;\n  font-size: 10px;\n  height: 20%;\n  width: auto;\n  text-transform: uppercase;\n  transition: all 300ms cubic-bezier(.27,1.16,.81,-0.14);\n}\n:hover {\n  background-color: #222;\n  color: #D9D9D9;\n}\n"]))),J=(t(15),v.a.div(h||(h=Object(k.a)(["\nbackground-color: #b0b0b0;\nheight: max-content;\nmin-height: 100vh;\nwidth: 100%;\ntop:0px;\nright:0px;\nbottom:0px;\nleft:0px;\nposition: absolute;\n"])))),M=v.a.div(b||(b=Object(k.a)(["\nbackground-color: #dedede;\nheight: 100px;\nwidth: 100%;\n"]))),P=v.a.div(u||(u=Object(k.a)(["\ndisplay: flex;\njustify-content: center;\nmin-height: max-content;\npadding: 10px 0 10px 0;\nheight: 100%;\n"]))),T=t(11),F=t.n(T),L=t(28),U=t(5),Y=t(12),_=t.n(Y),q=t(1),G=function(){var n=Object(g.useState)([]),e=Object(U.a)(n,2),t=e[0],c=e[1],i=Object(g.useState)([]),a=Object(U.a)(i,2),r=a[0],o=a[1],s=Object(g.useState)([]),d=Object(U.a)(s,2),l=d[0],p=d[1],x=Object(g.useState)("Choose a pok\xe9mon"),j=Object(U.a)(x,2),h=j[0],b=j[1],u=Object(g.useState)(null),m=Object(U.a)(u,2),O=m[0],f=m[1],k=function(){var n=Object(L.a)(F.a.mark((function n(){var e;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,_.a.get("https://pokeapi.co/api/v2/pokemon?offset=");case 3:e=n.sent,c(e.data.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return Object(g.useEffect)((function(){k()}),[]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)(C,{className:"nes-container is-rounded",children:[Object(q.jsx)(B,{className:"nes-input is-rounded",placeholder:"try it"}),Object(q.jsx)(z,{className:"nes-container is-rounded",children:t.map((function(n){return Object(q.jsx)(A,{className:"nes-container is-rounded",onClick:function(){b(n.name),_.a.get("https://pokeapi.co/api/v2/pokemon/".concat(n.name)).then((function(n){o(n.data.abilities),p(n.data.types),console.log(l),f(n.data.sprites.front_default),console.log(n)}))},children:n.name})}))})]}),Object(q.jsxs)(N,{className:"nes-container is-rounded",children:[Object(q.jsxs)(E,{children:[Object(q.jsx)("tr",{children:Object(q.jsx)(I,{children:h.toUpperCase()})}),Object(q.jsx)("tr",{children:Object(q.jsx)(S,{className:"nes-container is-rounded",children:Object(q.jsx)("img",{src:O,width:"100%",height:"100%"})})})]}),Object(q.jsxs)(E,{children:[Object(q.jsx)("tr",{children:Object(q.jsx)(I,{children:"TYPE"})}),Object(q.jsx)("tr",{children:l.map((function(n){return Object(q.jsx)(I,{className:"nes-container is-rounded",children:n.type.name})}))})]}),Object(q.jsxs)(E,{children:[Object(q.jsx)("tr",{children:Object(q.jsx)(I,{children:"ABILITIES"})}),Object(q.jsx)("tr",{children:r.map((function(n){return Object(q.jsx)(I,{className:"nes-container is-rounded",children:n.ability.name})}))})]})]})]})},H=function(){return Object(q.jsxs)(J,{children:[Object(q.jsx)(M,{children:"Main header at app"}),Object(q.jsx)(P,{children:Object(q.jsxs)(y,{className:"nes-container is-rounded",children:[Object(q.jsx)(w,{children:"Pok\xe9mon Catalect v1.0"}),Object(q.jsx)(D,{className:"nes-container is-rounded",children:Object(q.jsx)(G,{})})]})})]})};f.a.render(Object(q.jsx)(m.a.StrictMode,{children:Object(q.jsx)(H,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.23c5a0e2.chunk.js.map