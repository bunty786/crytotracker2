(this.webpackJsonpcrytotracker2=this.webpackJsonpcrytotracker2||[]).push([[0],{19:function(e,c,t){},20:function(e,c,t){},39:function(e,c,t){},41:function(e,c,t){"use strict";t.r(c);var a=t(2),n=t.n(a),r=t(13),s=t.n(r),i=(t(19),t(4)),o=(t(20),t(14)),l=t.n(o),j=(t(38),t(39),t(0)),m=function(e){var c=e.name,t=e.image,a=e.symbol,n=e.price,r=e.volume,s=e.priceChange,i=e.marketcap;return Object(j.jsx)("div",{className:"coin-cotainer",children:Object(j.jsxs)("div",{className:"coin-row",children:[Object(j.jsxs)("div",{className:"coin",children:[Object(j.jsx)("img",{src:t,alt:"crypto"}),Object(j.jsx)("h3",{children:c}),Object(j.jsx)("p",{className:"coin-symbol",children:a})]}),Object(j.jsxs)("div",{className:"coin-data",children:[Object(j.jsxs)("p",{className:"coin-price",children:["\u20b9",n]}),Object(j.jsxs)("p",{className:"coin-volume",children:["\u20b9",r.toLocaleString()]}),s<0?Object(j.jsxs)("p",{className:"coin-percent red",children:[s.toFixed(2),"%"]}):Object(j.jsxs)("p",{className:"coin-percent green",children:[s.toFixed(2),"%"]}),Object(j.jsxs)("p",{className:"coin-marketcap",children:["MKTCap:\u20b9",i.toLocaleString()]})]})]})})};var p=function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],n=c[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],p=s[1];Object(a.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){n(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]);var d=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"coin-search",children:[Object(j.jsx)("h1",{className:"coin-text",children:"Crypto Tracker"}),Object(j.jsx)("from",{children:Object(j.jsx)("input",{className:"coin-input ",type:"text",placeholder:"Search a Coin",onChange:function(e){p(e.target.value)}})})]}),Object(j.jsx)("div",{className:"coin-app",children:d.map((function(e){return Object(j.jsx)(m,{name:e.name,image:e.image,symbol:e.symbol,marketcap:e.market_cap,price:e.current_price,priceChange:e.market_cap_change_percentage_24h,volume:e.total_volume},e.id)}))})]})};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.0b125793.chunk.js.map