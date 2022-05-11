var ke=Object.defineProperty,$e=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var re=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;var ie=(h,e,t)=>e in h?ke(h,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):h[e]=t,G=(h,e)=>{for(var t in e||(e={}))we.call(e,t)&&ie(h,t,e[t]);if(re)for(var t of re(e))Le.call(e,t)&&ie(h,t,e[t]);return h},U=(h,e)=>$e(h,ye(e));import{f as I,g as H,o,c as v,b as u,i as a,j as Se,r as B,k as A,v as D,a as b,l as Te,m as X,n as ce,p as Ie,t as R,q as ve,s as C,x as P,y as J,z as Q,A as f,h as V,w as M,B as ue,C as T,D as xe,E as Ce,G as Ve,H as Be,T as Oe,I as x,J as Ne,F,K as j,L as Z,M as z,N as de,u as pe,O as he,P as Ee,Q as Me,R as Re,S as He,e as Pe,U as ge,V as Ae}from"./app.9ec52270.js";const De={class:"footer"},Fe=["innerHTML"],We=I({setup(h){const t=H().value.footer;return(r,n)=>(o(),v("footer",De,[u("span",{innerHTML:a(t)},null,8,Fe)]))}}),qe=["title"],Ke=I({setup(h){const e=["light","dark","auto"],t=H(),{currentMode:r}=Se(),n=()=>{const k=(e.indexOf(r.value)+1)%e.length;r.value=e[k]};return(L,k)=>{const m=B("VIcon");return o(),v("div",{class:"toggle-dark-button",title:a(t).toggleDarkMode,onClick:n},[A(b(m,{name:"fa-sun"},null,512),[[D,a(r)==="light"]]),A(b(m,{name:"fa-moon"},null,512),[[D,a(r)==="dark"]]),A(b(m,{name:"fa-magic"},null,512),[[D,a(r)==="auto"]])],8,qe)}}}),je=["title"],ze=I({emits:["toggle"],setup(h){const e=H();return(t,r)=>{const n=B("VIcon");return o(),v("div",{class:"toggle-sidebar-button",title:a(e).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:r[0]||(r[0]=L=>t.$emit("toggle"))},[b(n,{name:"bi-layout-sidebar-inset"})],8,je)}}}),Ye={class:"menu-btn-wrapper"},Ge={class:"menu-btn-icon"},Ue=u("span",null,null,-1),Xe=u("span",null,null,-1),Je=u("span",null,null,-1),Qe=[Ue,Xe,Je],Ze={class:"menu-progress"},et={class:"menu-btn-child-wrapper"},tt=I({emits:["toggle-sidebar","toggle-catalog"],setup(h){const e=Te({isMenuOpen:!1,isTextVisible:!1,isBtnIconVisible:!0,menuText:"0",borderLen:"0% 314.15926%"});X(()=>{window.addEventListener("scroll",t)}),ce(()=>{window.removeEventListener("scroll",t)});const t=()=>{const i=window.pageYOffset,l=k(),$=document.documentElement.clientHeight;let s=i/(l-$)*100;s>100&&(s=100),isNaN(s)||Math.round(s)<=0?(s=0,e.isTextVisible=!1,e.isBtnIconVisible=!0):(e.isTextVisible=!0,e.menuText=Math.round(s)+"%",e.isBtnIconVisible=!1),e.borderLen=3.1415926*(s||0)+"% 314.15926%"},r=()=>{e.isMenuOpen=!e.isMenuOpen},n=()=>{window.scrollTo({top:0,behavior:"smooth"})},L=()=>{window.scrollTo({top:k(),behavior:"smooth"})},k=()=>{const i=document.querySelector(".theme-container");return i?i.offsetHeight:0},m=Ie();return(i,l)=>{const $=B("VIcon");return o(),v("div",{class:P(["menu-btn-container",{open:a(e).isMenuOpen}])},[u("div",Ye,[u("div",{class:"menu-btn",onClick:r},[A(u("div",Ge,Qe,512),[[D,a(e).isBtnIconVisible]]),A(u("div",{class:"menu-text"},R(a(e).menuText),513),[[D,a(e).isTextVisible]]),(o(),v("svg",Ze,[u("circle",{class:"menu-border",cx:"50%",cy:"50%",r:"48%",style:ve({"stroke-dasharray":a(e).borderLen})},null,4)]))]),u("div",et,[b(Ke,{class:"menu-btn-child"}),u("div",{class:"menu-btn-child",onClick:L},[b($,{name:"fa-chevron-down",scale:"1.5"})]),u("div",{class:"menu-btn-child",onClick:n},[b($,{name:"fa-chevron-up"})]),a(m)?(o(),v("div",{key:0,class:"menu-btn-child menu-toc-btn",onClick:l[0]||(l[0]=s=>i.$emit("toggle-catalog"))},[b($,{name:"fa-list-ul"})])):C("",!0),b(ze,{class:"menu-btn-child menu-btn-sidebar",onToggle:l[1]||(l[1]=s=>i.$emit("toggle-sidebar"))})])])],2)}}}),nt={key:0,class:"nav-icon"},at=["href","rel","target","aria-label"],st={key:0,class:"nav-icon"},ot=I({inheritAttrs:!1}),K=I(U(G({},ot),{props:{item:{type:Object,required:!0}},setup(h){const e=h,t=J(),r=Be(),{item:n}=Q(e),L=f(()=>xe(n.value.link)),k=f(()=>Ce(n.value.link)||Ve(n.value.link)),m=f(()=>{if(!k.value){if(n.value.target)return n.value.target;if(L.value)return"_blank"}}),i=f(()=>m.value==="_blank"),l=f(()=>!L.value&&!k.value&&!i.value),$=f(()=>{if(!k.value){if(n.value.rel)return n.value.rel;if(i.value)return"noopener noreferrer"}}),s=f(()=>n.value.ariaLabel||n.value.text),_=f(()=>{const w=Object.keys(r.value.locales);return w.length?!w.some(O=>O===n.value.link):n.value.link!=="/"}),y=f(()=>_.value?t.path.startsWith(n.value.link):!1),p=f(()=>l.value?n.value.activeMatch?new RegExp(n.value.activeMatch).test(t.path):y.value:!1);return(w,O)=>{const N=B("VIcon"),g=B("RouterLink");return a(l)?(o(),V(g,ue({key:0,class:{"router-link-active":a(p)},to:a(n).link,"aria-label":a(s)},w.$attrs),{default:M(()=>[T(w.$slots,"before"),a(n).icon?(o(),v("span",nt,[b(N,{name:a(n).icon},null,8,["name"])])):C("",!0),u("span",null,R(a(n).text),1),T(w.$slots,"after")]),_:3},16,["class","to","aria-label"])):(o(),v("a",ue({key:1,class:"external-link",href:a(n).link,rel:a($),target:a(m),"aria-label":a(s)},w.$attrs),[T(w.$slots,"before"),a(n).icon?(o(),v("span",st,[b(N,{name:a(n).icon},null,8,["name"])])):C("",!0),u("span",null,R(a(n).text),1),T(w.$slots,"after")],16,at))}}})),me=I({setup(h){const e=r=>{r.style.height=r.scrollHeight+"px"},t=r=>{r.style.height=""};return(r,n)=>(o(),V(Oe,{name:"dropdown",onEnter:e,onAfterEnter:t,onBeforeLeave:e},{default:M(()=>[T(r.$slots,"default")]),_:3}))}}),lt=["aria-label"],rt={class:"title"},it={key:0,class:"nav-icon"},ut=u("span",{class:"arrow down"},null,-1),ct=["aria-label"],vt={class:"title"},dt={key:0,class:"nav-icon"},pt={class:"navbar-dropdown"},ht={class:"navbar-dropdown-subtitle"},gt={key:1},mt={class:"navbar-navbar-dropdown-subitem-wrapper"},ft=I({props:{item:{type:Object,required:!0}},setup(h){const e=h,{item:t}=Q(e),r=f(()=>t.value.ariaLabel||t.value.text),n=x(!1),L=J();Ne(()=>L.path,()=>{n.value=!1});const k=i=>{i.detail===0?n.value=!n.value:n.value=!1},m=(i,l)=>l[l.length-1]===i;return(i,l)=>{const $=B("VIcon");return o(),v("div",{class:P(["navbar-dropdown-wrapper",{open:n.value}])},[u("button",{class:"navbar-dropdown-title",type:"button","aria-label":a(r),onClick:k},[u("span",rt,[a(t).icon?(o(),v("span",it,[b($,{name:a(t).icon},null,8,["name"])])):C("",!0),u("span",null,R(a(t).text),1)]),ut],8,lt),u("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":a(r),onClick:l[0]||(l[0]=s=>n.value=!n.value)},[u("span",vt,[a(t).icon?(o(),v("span",dt,[b($,{name:a(t).icon},null,8,["name"])])):C("",!0),u("span",null,R(a(t).text),1)]),u("span",{class:P(["arrow",n.value?"down":"right"])},null,2)],8,ct),b(me,null,{default:M(()=>[A(u("ul",pt,[(o(!0),v(F,null,j(a(t).children,s=>(o(),v("li",{key:s.text,class:"navbar-dropdown-item"},[s.children?(o(),v(F,{key:0},[u("h4",ht,[s.link?(o(),V(K,{key:0,item:s,onFocusout:_=>m(s,a(t).children)&&s.children.length===0&&(n.value=!1)},null,8,["item","onFocusout"])):(o(),v("span",gt,R(s.text),1))]),u("ul",mt,[(o(!0),v(F,null,j(s.children,_=>(o(),v("li",{key:_.link,class:"navbar-dropdown-subitem"},[b(K,{item:_,onFocusout:y=>m(_,s.children)&&m(s,a(t).children)&&(n.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(o(),V(K,{key:1,item:s,onFocusout:_=>m(s,a(t).children)&&(n.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[D,n.value]])]),_:1})],2)}}}),bt={key:0,class:"navbar-items"},_t={key:0,class:"navbar-item"},kt={key:0,class:"nav-icon"},fe=I({emits:["toggle-search"],setup(h){const e=()=>{const s=z(),_=pe(),y=he(),p=H();return f(()=>{var c,d;const w=Object.keys(y.value.locales);if(w.length<2)return[];const O=s.currentRoute.value.path,N=s.currentRoute.value.fullPath;return[{text:(c=p.value.selectLanguageText)!=null?c:"unknown language",ariaLabel:(d=p.value.selectLanguageAriaLabel)!=null?d:"unknown language",icon:p.value.langIcon,children:w.map(S=>{var ee,te,ne,ae,se,oe;const E=(te=(ee=y.value.locales)==null?void 0:ee[S])!=null?te:{},W=(ae=(ne=p.value.locales)==null?void 0:ne[S])!=null?ae:{},q=`${E.lang}`,be=(se=W.selectLanguageName)!=null?se:q;let Y;if(q===y.value.lang)Y=N;else{const le=O.replace(_.value,S);s.getRoutes().some(_e=>_e.path===le)?Y=le:Y=(oe=W.home)!=null?oe:S}return{text:be,link:Y}})}]})},t=s=>Ee(s)?Me(s):s.children?U(G({},s),{children:s.children.map(t)}):s,n=(()=>{const s=H();return f(()=>(s.value.navbar||[]).map(t))})(),L=e(),k=f(()=>[...n.value,...i.value?L.value:[]]),m=Z(),i=f(()=>{const _=z().currentRoute.value.path;return m.value.layout===void 0&&_.indexOf("/page/")===-1&&de.value.path!==""}),l=H(),$=f(()=>l.value.search&&m.value.search!==!1);return(s,_)=>{const y=B("VIcon");return a(k).length?(o(),v("nav",bt,[(o(!0),v(F,null,j(a(k),p=>(o(),v("div",{key:p.text,class:"navbar-item"},[p.children?(o(),V(ft,{key:0,item:p},null,8,["item"])):(o(),V(K,{key:1,item:p},null,8,["item"]))]))),128)),a($)?(o(),v("div",_t,[u("a",{style:{cursor:"pointer"},onClick:_[0]||(_[0]=p=>s.$emit("toggle-search"))},[a(l).searchIcon?(o(),v("span",kt,[b(y,{name:a(l).searchIcon},null,8,["name"])])):C("",!0),u("span",null,R(a(l).searchText),1)])])):C("",!0)])):C("",!0)}}}),$t=I({props:{isSidebar:{type:Boolean,required:!0}},emits:["toggle-search"],setup(h){pe(),he();const e=H(),t=Z(),r=z(),n=x(null),L=x(null),k=f(()=>e.value.home||"/"),m="$ cd /home/",i=x(0),l=f(()=>i.value?{maxWidth:i.value+"px"}:{}),$=x(0),s=x(!1),_=x(!1),y=x(!0),p=()=>{const g=window.pageYOffset;g<$.value?g>0&&s.value?_.value=!0:(_.value=!1,s.value=!1):(_.value=!1,n.value&&g>n.value.offsetHeight&&(s.value=!0)),$.value=g},w=()=>{let g=!1;t.value.layout==="HomePage"&&(g=!0),t.value.layout==="Post"&&t.value.useHeaderImage&&(g=!0),t.value.layout==="Tags"&&e.value.pages&&e.value.pages.tags&&e.value.pages.tags.bgImage&&(g=!0),t.value.layout==="Links"&&e.value.pages&&e.value.pages.links&&e.value.pages.links.bgImage&&(g=!0),y.value=g};let O;X(()=>{const c=N(n.value,"paddingLeft")+N(n.value,"paddingRight"),d=()=>{var S;window.innerWidth<=719||!n.value?i.value=0:i.value=n.value.offsetWidth-c-(((S=L.value)==null?void 0:S.offsetWidth)||0)};d(),window.addEventListener("resize",d,!1),window.addEventListener("orientationchange",d,!1),w(),O=r.afterEach(()=>{w()}),window.addEventListener("scroll",p)}),ce(()=>{window.removeEventListener("scroll",p),O()});function N(g,c){var E,W,q;const d=(q=(W=(E=g==null?void 0:g.ownerDocument)==null?void 0:E.defaultView)==null?void 0:W.getComputedStyle(g,null))==null?void 0:q[c],S=Number.parseInt(d,10);return Number.isNaN(S)?0:S}return(g,c)=>{const d=B("RouterLink"),S=B("NavbarSearch");return o(),v("header",{ref_key:"navbar",ref:n,class:P(["navbar",{"is-fixed":s.value||h.isSidebar,"is-visible":_.value||h.isSidebar,invert:y.value}])},[u("span",{ref_key:"siteBrand",ref:L},[b(d,{to:a(k)},{default:M(()=>[u("span",{class:"site-name"},R(m))]),_:1},8,["to"])],512),u("div",{class:"navbar-items-wrapper",style:ve(a(l))},[T(g.$slots,"before"),b(fe,{class:"can-hide",onToggleSearch:c[0]||(c[0]=E=>g.$emit("toggle-search"))}),T(g.$slots,"after"),b(S)],4)],2)}}}),yt={class:"sidebar-item-children"},wt=I({props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(h){const e=h,{item:t,depth:r}=Q(e),n=J(),L=z(),k=f(()=>Re(t.value,n)),m=f(()=>({"sidebar-item":!0,"sidebar-heading":r.value===0,active:k.value,collapsible:t.value.collapsible})),i=x(!0),l=x(void 0);return t.value.collapsible&&(i.value=k.value,l.value=()=>{i.value=!i.value},L.afterEach(()=>{i.value=k.value})),($,s)=>{var y;const _=B("SidebarItem",!0);return o(),v("li",null,[a(t).link?(o(),V(K,{key:0,class:P(a(m)),item:a(t)},null,8,["class","item"])):(o(),v("p",{key:1,tabindex:"0",class:P(a(m)),onClick:s[0]||(s[0]=(...p)=>l.value&&l.value(...p)),onKeydown:s[1]||(s[1]=He((...p)=>l.value&&l.value(...p),["enter"]))},[Pe(R(a(t).text)+" ",1),a(t).collapsible?(o(),v("span",{key:0,class:P(["arrow",i.value?"down":"right"])},null,2)):C("",!0)],34)),(y=a(t).children)!=null&&y.length?(o(),V(me,{key:2},{default:M(()=>[A(u("ul",yt,[(o(!0),v(F,null,j(a(t).children,p=>(o(),V(_,{key:`${a(r)}${p.text}${p.link}`,item:p,depth:a(r)+1},null,8,["item","depth"]))),128))],512),[[D,i.value]])]),_:1})):C("",!0)])}}}),Lt={key:0,class:"sidebar-items"},St=I({setup(h){const e=ge();return(t,r)=>a(e).length?(o(),v("ul",Lt,[(o(!0),v(F,null,j(a(e),n=>(o(),V(wt,{key:n.link||n.text,item:n},null,8,["item"]))),128))])):C("",!0)}}),Tt={class:"sidebar"},It=I({emits:["toggle-search"],setup(h){return(e,t)=>(o(),v("aside",Tt,[b(fe,{onToggleSearch:t[0]||(t[0]=r=>e.$emit("toggle-search"))}),T(e.$slots,"top"),b(St),T(e.$slots,"bottom")]))}}),xt={class:"page-content"},Bt=I({setup(h){const e=Z(),t=H(),r=z(),n=f(()=>e.value.navbar!==!1&&t.value.navbar!==!1),L=f(()=>de.value.path===""),k=ge(),m=f(()=>k.value.length>0&&!L.value),i=x(!1),l=c=>{i.value=typeof c=="boolean"?c:!i.value},$={x:0,y:0},s=c=>{$.x=c.changedTouches[0].clientX,$.y=c.changedTouches[0].clientY},_=c=>{const d=c.changedTouches[0].clientX-$.x,S=c.changedTouches[0].clientY-$.y;Math.abs(d)>Math.abs(S)&&Math.abs(d)>40&&(d>0&&$.x<=80?l(!0):l(!1))},y=x(!1),p=c=>{y.value=typeof c=="boolean"?c:!y.value;const d=document.querySelector("html");y.value?d==null||d.classList.add("fixed"):d==null||d.classList.remove("fixed"),y.value&&setTimeout(function(){document.querySelector(".search-page input").focus()},400)},w=x(!1),O=c=>{w.value=typeof c=="boolean"?c:!w.value},N=f(()=>[{"no-navbar":!n.value,"no-sidebar":!m.value,"sidebar-open":i.value,"catalog-open":w.value,"search-open":y.value},e.value.pageClass]);let g;return X(()=>{g=r.afterEach(()=>{l(!1),p(!1)})}),Ae(()=>{g()}),(c,d)=>{const S=B("GungnirSearchPage");return o(),v("div",{class:P(["theme-container",a(N)]),onTouchstart:s,onTouchend:_},[T(c.$slots,"navbar",{},()=>[a(n)?(o(),V($t,{key:0,"is-sidebar":a(m),onToggleSearch:d[0]||(d[0]=E=>p(!0))},{before:M(()=>[T(c.$slots,"navbar-before")]),after:M(()=>[T(c.$slots,"navbar-after")]),_:3},8,["is-sidebar"])):C("",!0)]),u("div",{class:"sidebar-mask",onClick:d[1]||(d[1]=E=>l(!1))}),T(c.$slots,"sidebar",{},()=>[b(It,{onToggleSearch:d[2]||(d[2]=E=>p(!0))},{top:M(()=>[T(c.$slots,"sidebar-top")]),bottom:M(()=>[T(c.$slots,"sidebar-bottom")]),_:3})]),u("div",xt,[T(c.$slots,"page")]),b(S,{onToggleSearch:d[3]||(d[3]=E=>p(!1))}),b(tt,{onToggleSidebar:l,onToggleCatalog:O}),a(m)?C("",!0):(o(),V(We,{key:0}))],34)}}});export{Bt as _,K as a};