"use strict";function ScriptSet(){}ScriptSet.prototype.addMask=function(e){function t(){V=document.querySelectorAll(".post");for(var e={},t=[],n=0;n<V.length;n++){var a=V[n].querySelector(".post-content"),o=V[n].getAttribute("id"),s=V[n].querySelector(".post-author ul"),l=a.innerHTML,c=V[n].querySelector(".post-sig dd"),d=r(l),p=s.querySelector(".pa-author a")?V[n].querySelector('a[href*="/profile.php"]').href.split("=")[1]:"1";0!==Object.keys(d).length&&(e[n]={postId:o,userId:p,text:a,profile:s,changeList:d,signature:c},t.indexOf(p)+1||t.push(p))}var u=t.length>0?i(t):{};for(var m in e){if(e.hasOwnProperty(m)&&(e[m].username=u[e[m].userId].username,e[m].groupId=u[e[m].userId].groupId,e[m].groupTitle=u[e[m].userId].groupTitle,e[m].access=u[e[m].userId].access,e[m].changeList.avatar&&(e[m].access.common||e[m].access.extended))){if(!e[m].profile.querySelector(".pa-avatar img")){var g=z.indexOf("pa-avatar"),f=document.createElement("li");f.className="pa-avatar",f.innerHTML='<img src="'+e[m].changeList.avatar.content+'">';for(var v=++g;v<=z.length;v++){var h=e[m].profile.querySelector("."+z[v]);if(h){e[m].profile.insertBefore(f,h);break}v==z.length&&e[m].profile.appendChild(f)}}var k=e[m].profile.querySelector(".pa-avatar img");k.src=e[m].changeList.avatar.content,k.removeAttribute("width"),k.removeAttribute("height")}if(e.hasOwnProperty(m)&&e[m].access.extended){var x=e[m].changeList;for(var y in x)if(x.hasOwnProperty(y)){if("pa-author"==x[y].field&&"1"==e[m].userId&&(e[m].changeList[y].type="text"),!e[m].profile.getElementsByClassName(e[m].changeList[y].field)[0]){var b=z.indexOf(e[m].changeList[y].field),w=document.createElement("li");w.className=x[y].field;for(var E=++b;E<=z.length;E++){var L=e[m].profile.querySelector("."+z[E]);if(L){e[m].profile.insertBefore(w,L);break}E==z.length&&e[m].profile.appendChild(w)}}var O=e[m].profile.getElementsByClassName(e[m].changeList[y].field)[0];switch(e[m].changeList[y].type){case"html":var T=S(e[m].changeList[y].content);if(""===T&&(console.error("Что-то не так с маской в посте #"+e[m].postId),1===GroupID||2===GroupID)){var _=document.getElementById("admin_msg1");_.innerHTML="Что-то не так с маской в посте #"+e[m].postId+". Он подсвечен красным.<br><i>Сообщение показано только администрации.</i>",_.style.display="block",_.style.zIndex=1e4,document.getElementById(e[m].postId).style.border="solid 1px #f00"}O.innerHTML=T.length>255?T.slice(0,255):T;break;case"text":var M=e[m].changeList[y].content;"author"===y?O.innerText=M.length>25?M.slice(0,25):M:"title"===y?O.innerText=M.length>50?M.slice(0,50):M:O.innerText=M.length>255?M.slice(0,255):M;break;case"link":O.querySelector("a").innerText=e[m].changeList[y].content.length>25?e[m].changeList[y].content.slice(0,25):e[m].changeList[y].content;break;case"signature":if("1"!==UserID){if(!e[m].signature){var I=document.createElement("dl");I.className="post-sig",I.innerHTML="<dt><span>Подпись автора</span></dt><dd></dd>",e[m].text.appendChild(I),e[m].signature=I.querySelector(".post-sig dd")}e[m].signature.innerHTML=e[m].changeList[y].content}}}}H(e[m])}}function n(){V=document.querySelectorAll(".post");for(var e in V)if(V.hasOwnProperty(e)){var t=V[e].querySelector(".post-content"),n=new RegExp('<div class="code-box"><strong class="legend">Код:</strong><div class="blockcode"><div class="scrollbox" style="height: 4.5em"><pre>(.*?)?</pre></div></div></div>',"gi"),a=new RegExp('<dl class="post-sig"><dt><span>(.*?)?</span></dt><dd>(.*?)?</dd></dl>',"i"),r=t.innerHTML.match(a),o=t.innerHTML.match(n),i=t.innerHTML.replace(n,"|code-box-replacer|");i=i.replace(a,"|signature-replacer|");for(var s in J){var l=new RegExp("\\["+J[s]+"\\](.*?)\\[/"+J[s]+"\\]","gi");i=i.replace(l,"")}for(var c in o)i=i.replace(/\|code-box-replacer\|/i,o[c]);r&&(i=i.replace(/\|signature-replacer\|/i,r[0])),t.innerHTML=i}}function a(){var e=document.querySelector(".post-content");for(var t in J)if(J.hasOwnProperty(t)){var n=new RegExp("\\["+J[t]+"\\](.*?)\\[/"+J[t]+"\\]","gi");e.innerHTML=e.innerHTML.replace(n,"")}}function r(e){var t={},n=e.replace(/<div class="code-box"><strong class="legend">Код:<\/strong><div class="blockcode"><div class="scrollbox" style="height: 4.5em"><pre>(.*?)?<\/pre><\/div><\/div><\/div>/gi,"");for(var a in F)if(F.hasOwnProperty(a))for(var r=F[a].tag.split(","),o=r.length;o>=0;o--)if(r.hasOwnProperty(o)){var i=new RegExp("\\["+r[o]+"\\](.*?)\\[\\/"+r[o]+"\\]","gi"),s=new RegExp("\\[(\\/?)"+r[o]+"\\]","gi");n.match(i)&&(t[a]={tag:r[o],field:F[a]["class"],content:e.match(i)[0].replace(s,""),type:F[a].type})}return t}function o(){var e=[];for(var t in F)if(F.hasOwnProperty(t)){var n=F[t].tag.split(",");for(var a in n)n.hasOwnProperty(a)&&!e.indexOf(n[a])+1&&e.push(n[a])}return e}function i(t){var n=s(t);for(var a in n)n.hasOwnProperty(a)&&(1==n[a].groupId||2==n[a].groupId?n[a].access={common:!0,extended:!0}:3==n[a].groupId?n[a].access={common:e.guestAccess?Boolean(e.guestAccess.indexOf(FORUM.topic.forum_name)+1):!1,extended:e.guestAccess?Boolean(e.guestAccess.indexOf(FORUM.topic.forum_name)+1):!1}:n[a].access={common:e.forumAccess&&e.forumAccess[FORUM.topic.forum_name]?Boolean(e.forumAccess[FORUM.topic.forum_name].indexOf(n[a].groupTitle)+1):!0,extended:e.forumAccessExtended&&e.forumAccessExtended[FORUM.topic.forum_name]?Boolean(e.forumAccessExtended[FORUM.topic.forum_name].indexOf(n[a].groupTitle)+1):!1});return n}function s(e){var t={};if(e.indexOf("1")+1&&(t[1]={userId:"1",username:"Guest",groupId:"3",groupTitle:"Гость"},e.splice(e.indexOf("1"),1)),e.length>0){var n=e.join(",");$.ajax({async:!1,url:"/api.php?method=users.get&user_id="+n+"&fields=user_id,username,group_id,group_title",success:function(e){for(var n in e.response.users)e.response.users.hasOwnProperty(n)&&(t[e.response.users[n].user_id]={userId:n,username:e.response.users[n].username,groupId:e.response.users[n].group_id,groupTitle:e.response.users[n].group_title})}})}return t}function l(){var e=h();e&&(R()||"extended"===q()?e.addEventListener("click",function(e){e.ctrlKey?d():k()}):e.addEventListener("click",d));var t=y(),n=document.querySelector("#pun-main");n.appendChild(t),c()}function c(){var e=document.createElement("style");e.innerHTML='#mask_dialog .bg { position: fixed;display: flex;align-content: center;justify-content: center;align-items: center;z-index: 10;width: 100%;height: 100%;left: 0;top: 0;background: rgba(0,0,0,.4);cursor: pointer;}\n#mask_dialog .inner {cursor:default;margin: 0;width: 760px;max-width:99%;max-height: 90%;overflow-x: auto;z-index: 100;box-shadow: 0 0 40px #222;background: #e2e4f8;padding: 8px; border-radius: 25px;}\n#mask_dialog .inner * {box-sizing: border-box;}\n#mask_dialog .inner .mask-dialog-title {text-align: center;font-weight: 700;font-size: 18px;line-height: 34px;}\n#mask_dialog .inner .error-list {padding: 8px;margin: 8px;background: #DAA396;color: #BD0909;border: solid 1px;}\n#mask_dialog .inner .mask-block {display: flex;justify-content: space-between;align-items: stretch;}\n#mask_dialog .inner .mask-block .preview-block {flex: 0 0 120px;text-align: center;max-width: 120px;overflow: hidden;word-break: break-word;}\n#mask_dialog .inner .mask-block .preview-block > div {padding: 3px 0;}#mask_dialog .inner .mask-block .form-block {flex: 1 1 auto;}\n#mask_dialog .inner .mask-block .preview-block .preview-avatar img {max-width:100px;}\n#mask_dialog .inner .mask-block .form-block {flex: 1 1 auto;}\n#mask_dialog .inner .mask-block .form-block label {display: block;margin-bottom:px;}\n#mask_dialog .inner .mask-block .form-block label:after {content: "";display: table;clear: both;margin-bottom: 2px;}\n#mask_dialog .inner .mask-block .form-block .description {font-size: .9em;color: #999;font-style: italic;}\n#mask_dialog .inner .mask-block .form-block .add-template {cursor: pointer;float:right;padding: 2px 4px;border: solid 1px #ccc;}\n#mask_dialog .inner .mask-block .form-block input,#mask_dialog .inner .mask-block .form-block textarea {width: 100%;}\n#mask_dialog .inner .mask-block .form-block .mask-field {position: relative;}\n#mask_dialog .inner .mask-block .form-block .mask-field + .mask-field {margin-top: 10px;}\n#mask_dialog .inner .masks-storage {flex: 0 1 140px;display: flex;align-items:flex-start;align-content: flex-start;justify-content: flex-start;padding: 8px;flex-wrap: wrap;list-style: none;}\n#mask_dialog .inner .masks-storage.hidden  {display:none;}\n#mask_dialog .inner .masks-storage .mask-element {width: 60px;padding: 4px;position: relative;}\n#mask_dialog .inner .masks-storage .mask-element img {max-width: 100%;cursor:pointer;}\n#mask_dialog .inner .masks-storage .mask-element .mask-tooltip {position: absolute;top: 4px;min-width: 160px;right: 60px;padding:4px;z-index:5;overflow-y: auto;background: rgba(255,255,255,.6);border: solid 1px #ccc;display: none;}\n#mask_dialog .inner .masks-storage .mask-element > img:hover + .mask-tooltip {display: block;}\n#mask_dialog .inner .masks-storage .mask-element .mask-tooltip > * {zoom: .7}\n#mask_dialog .inner .masks-storage .mask-element .delete-mask {display: block;font-size: 10px;text-align:center;cursor:pointer;}\n#mask_dialog .inner .control {padding: 8px;text-align: center;}\n#mask_dialog .inner .control input + input {margin-left: 10px;}';var t=document.head.querySelector('link[href*="style"]');document.head.insertBefore(e,t)}function d(){var e=document.getElementById("main-reply");e.focus(),e.value=e.value+"[icon][/icon]",p(e,e.value.length-7,e.value.length-7)}function p(e,t,n){if(e.setSelectionRange)e.focus(),e.setSelectionRange(t,n);else if(e.createTextRange){var a=e.createTextRange();a.collapse(!0),a.moveEnd("character",n),a.moveStart("character",t),a.select()}}function u(e,t){var n="";switch(e){case"signature":break;case"avatar":n=""!==t?t:f(),A(n)?(delete G[e],D.querySelector(".preview-"+e+" img").src=n):G[e]="В поле [Аватар] должна быть ссылка на картинку формата jpg, gif или png";break;case"author":t.length>25?G[e]="Поле [Ник] не должно содержать больше 25 символов":(n=""!==t?t:UserLogin,delete G[e],D.querySelector(".preview-"+e).innerText=n);break;case"title":t.length>50?G[e]="Поле [Статус] не должно содержать больше 50 символов":(delete G[e],n=""!==t?t:v(),D.querySelector(".preview-"+e).innerText=n);break;default:t.length>255?G[e]="Поле ["+F[e].title+"] не должно содержать больше 255 символов":(delete G[e],n=""!==t?t:"",N(n)?G[e]="В поле ["+F[e].title+"] недопустимые теги":(delete G[e],D.querySelector(".preview-"+e).innerHTML=n))}m()}function m(){var e=document.querySelector("#mask_dialog .error-list");if(e.innerHTML="",Object.keys(G).length){e.style.display="block";for(var t in G)if(G.hasOwnProperty(t)){var n=document.createElement("li");n.innerHTML="<li> ! "+G[t]+"</li>",e.appendChild(n)}}else e.style.display="none"}function g(e){var t=document.querySelector("#mask_form");for(var n in F)if(F.hasOwnProperty(n)){var a=t.querySelector("#mask_"+n);e[n]?(a.value=e[n].value,P[n]={tag:e[n].tag,value:e[n].value},u(n,e[n].value)):(a.value="",delete P[n],u(n,""))}}function f(){return UserAvatar?UserAvatar:K}function v(){return UserTitle?UserTitle:"Статус"}function h(){var t=document.getElementById("form-buttons");if(t&&(C()||R())){var n=document.createElement("td");n.id="button-mask",n.title="Маска профиля",n.innerHTML='<img src="/i/blank.gif">';var a=e.buttonImage?e.buttonImage:"http://i.imgur.com/ONu0llO.png";return n.style.backgroundImage='url("'+a+'")',t.getElementsByTagName("tr")[0].appendChild(n),n}return null}function k(){var e=document.getElementById("mask_dialog");e.style.display="block",b(Q)}function x(){var e=document.getElementById("mask_dialog");e.style.display="none"}function y(){var t=document.createElement("div");t.id="mask_dialog",t.style.display="none";var n=document.createElement("div");n.className="bg",n.addEventListener("click",function(e){e.target===n&&x()});var a=document.createElement("div");a.className="inner container";var r=document.createElement("div");r.className="mask-dialog-title",r.innerHTML="Маска профиля";var o=document.createElement("ul");o.className="error-list",o.style.display="none";var i=void 0!==e.showPreview?e.showPreview:!0,s=document.createElement("div");D=s,s.className="preview-block",M();var l=document.createElement("form");l.id="mask_form";var c=function(e){F.hasOwnProperty(e)&&!function(){var t=document.createElement("div");t.className="mask-field "+e;var n=void 0;"html"===F[e].type||"signature"===F[e].type?(n=document.createElement("textarea"),n.id="mask_"+e):(n=document.createElement("input"),n.type="text",n.id="mask_"+e),n.addEventListener("blur",function(){var e=n.id.split("mask_")[1];""===n.value||N(n.value)?delete P[e]:P[e]={tag:F[e].tag.split(",")[0],value:n.value},u(e,n.value)});var a=document.createElement("label");if(a["for"]="mask_"+e,a.innerHTML+="<b>"+F[e].title+"</b>",F[e].description&&(a.innerHTML+='<div class="description">'+F[e].description+"</div>"),t.appendChild(a),F[e].defaultCode){var r=document.createElement("div");r.className="button add-template",r.innerText="« вставить шаблон",r.title="Вставить шаблон",r.addEventListener("click",function(){w(n,F[e].defaultCode),u(e,n.value)}),a.insertBefore(r,a.querySelector("b"))}t.appendChild(n),l.appendChild(t)}()};for(var d in F)c(d);var p=document.createElement("div");p.className="form-block",p.appendChild(l);var m=document.createElement("ul");m.className="masks-storage",Q.length>0||(m.className+=" hidden");var g=document.createElement("div");g.className="mask-block",i&&g.appendChild(s),g.appendChild(p),g.appendChild(m);var f=document.createElement("input");f.type="button",f.className="button",f.name="insertMask",f.value="Вставить маску",f.addEventListener("click",E);var v=document.createElement("input");v.type="button",v.className="button",v.name="clearMask",v.value="Очистить",v.addEventListener("click",T);var h=document.createElement("input");h.type="button",h.className="button",h.name="cancelMask",h.value="Отмена",h.addEventListener("click",_);var k=document.createElement("div");return k.className="control",k.appendChild(f),k.appendChild(v),k.appendChild(h),a.appendChild(r),a.appendChild(o),a.appendChild(g),a.appendChild(k),t.appendChild(n),n.appendChild(a),t}function b(e){var t=document.getElementById("mask_dialog"),n=t.querySelector(".masks-storage");e.length>0?n.className=n.className.replace(/ hidden/gi,""):n.className+=" hidden",n.innerHTML="";for(var a=function(t){var a=JSON.parse(e[t]),r=document.createElement("li");r.className="mask-element";var o=a.avatar?a.avatar.value:K,i=document.createElement("img");i.src=o;var s=document.createElement("div");s.className="mask-tooltip";for(var l in F)F.hasOwnProperty(l)&&"avatar"!==l&&a[l]&&(N(a[l].value.toString())||(s.innerHTML+='<div class="'+l+'"><b>'+F[l].title+":</b> "+a[l].value+"</div>"));var c=document.createElement("a");c.className="delete-mask",c.innerText="Удалить",c.title="Удалить маску из списка",c.addEventListener("click",function(){return O(t)}),r.appendChild(i),(a.avatar&&Object.keys(a).length>1||!a.avatar&&Object.keys(a).length>0)&&r.appendChild(s),r.appendChild(c),i.addEventListener("click",function(){return g(a)}),n.appendChild(r)},r=0;r<e.length;r++)a(r)}function w(e,t){e.value=t}function E(){if(Object.keys(P).length>0){var e=document.getElementById("main-reply");e.value=e.value+I();JSON.stringify(P);Object.keys(Q).length>0&&(Q=U().split("|splitKey|"),L(Q,P)+1?Q.splice(L(Q,P),1):Q.length>5&&Q.splice(0,1)),Q.push(JSON.stringify(P)),$.ajax({async:!1,url:"/api.php?method=storage.set&token="+ForumAPITicket+"&key=maskListUser&value="+encodeURI(Q.join("|splitKey|"))}),b(Q),T(),x()}}function L(e,t){for(var n=-1,a=0;a<e.length;a++){var r=JSON.parse(e[a]);if(Object.keys(r).length===Object.keys(t).length){var o=0;for(var i in r){if(r.hasOwnProperty(i)){if(JSON.stringify(r[i])!==JSON.stringify(t[i]))break;o++}o===Object.keys(r).length&&(n=a)}}}return n}function O(e){Q.splice(e,1),$.ajax({async:!1,url:"/api.php?method=storage.set&token="+ForumAPITicket+"&key=maskListUser&value="+encodeURI(Q.join("|splitKey|"))}),b(Q)}function T(){P={},M(),G={},m();var e=document.getElementById("mask_form");e.reset()}function _(){T(),x()}function M(){D.innerHTML="";for(var e in F)if(F.hasOwnProperty(e)){var t=document.createElement("div");switch(t.className="preview-"+e,e){case"author":t.innerHTML=UserLogin,D.appendChild(t);break;case"title":t.innerHTML=v(),D.appendChild(t);break;case"avatar":var n=f();t.innerHTML='<img src="'+n+'">',D.appendChild(t);break;case"signature":break;default:t.innerHTML="",D.appendChild(t)}}}function I(){var e="";for(var t in P)P.hasOwnProperty(t)&&(e+="["+P[t].tag+"]"+P[t].value+"[/"+P[t].tag+"]");return e}function S(e){for(var t="",n=!1,a=0;a<W.length;a++){var r=new RegExp("(<|&lt;)?"+W[a]);if(n=r.exec(e))return t=n[0].replace("&lt;",""),console.error("Forbidden tag <"+t+"> in mask"),""}for(var o=0;o<X.length;o++){var i=new RegExp(X[o]+"=");if(n=i.exec(e))return t=n[0].replace("&lt;",""),console.error("Forbidden event <"+t+"> in mask "),""}var s=/&lt;(.*?)?( xlink:| id=(.*?)?)/.test(e);return s&&console.error("Forbidden tag properties in mask"),s?"":e.replace(/&lt;/g,"<").replace(/&gt;/g,">")}function N(e){for(var t=!1,n=0;n<W.length;n++){var a=new RegExp("(<|&lt;)?"+W[n]);if(t=a.exec(e))return!0}for(var r=0;r<X.length;r++){var o=new RegExp(X[r]+"=");if(t=o.exec(e))return!0}return t}function A(e){return/\.jpg|\.png|\.gif/.test(e)}function C(){var t=FORUM.topic&&e.forumAccess?e.forumAccess[FORUM.topic.forum_name]?Boolean(e.forumAccess[FORUM.topic.forum_name].indexOf(GroupTitle)+1):!1:!0;return t||1===GroupID||2===GroupID}function R(){var t=FORUM.topic&&e.forumAccessExtended&&e.forumAccessExtended[FORUM.topic.forum_name]?Boolean(e.forumAccessExtended[FORUM.topic.forum_name].indexOf(GroupTitle)+1):!1;return t||1===GroupID||2===GroupID}function U(){var e=$.ajax({async:!1,url:"/api.php?method=storage.get&key=maskListUser"});return JSON.parse(e.responseText).response&&JSON.parse(e.responseText).response.storage.data.maskListUser?decodeURI(JSON.parse(e.responseText).response.storage.data.maskListUser):""}function H(e){var t=new RegExp('<div class="code-box"><strong class="legend">Код:</strong><div class="blockcode"><div class="scrollbox" style="height: 4.5em"><pre>(.*?)?</pre></div></div></div>',"gi"),n=new RegExp('<dl class="post-sig"><dt><span>(.*?)?</span></dt><dd>(.*?)?</dd></dl>',"i"),a=e.text.innerHTML.match(n),r=e.text.innerHTML.match(t),o=e.text.innerHTML.replace(t,"|code-box-replacer|");o=o.replace(n,"|signature-replacer|");for(var i in J){var s=new RegExp("\\["+J[i]+"\\](.*?)\\[/"+J[i]+"\\]","gi");o=o.replace(s,"")}for(var l in r)o=o.replace(/\|code-box-replacer\|/i,r[l]);a&&(o=o.replace(/\|signature-replacer\|/i,a[0])),e.text.innerHTML=o}function q(){var t=document.getElementById("pun-crumbs1"),n=t.innerHTML.match(/\/viewforum\.php\?id=(\d*?)">(.*?)<\/a>/gi)[0].replace(/\/viewforum\.php\?id=(\d*?)">(.*?)<\/a>/gi,"$2");if(e.forumAccessExtended&&e.forumAccessExtended[n]||1===GroupID||2===GroupID){if(e.forumAccessExtended[n].indexOf(GroupTitle)+1)return"exended"}else{if(!e.forumAccess||!e.forumAccess[n])return e.forumAccess||1===UserID?"none":"common";if(e.forumAccess[n].indexOf(GroupTitle)+1)return"common"}}var F={author:{title:"Ник",description:"Только текст",tag:"nick,nic","class":"pa-author",type:"link"},avatar:{title:"Аватар",description:"Прямая ссылка на картинку формата jpg, gif или png",tag:"icon,ava","class":"pa-avatar",type:"avatar"},signature:{title:"Подпись",description:"Принимает bb-коды",tag:"sign,sgn","class":"post-sig",type:"signature"}};if(e.changeList)for(var j in e.changeList)if(e.changeList.hasOwnProperty(j))if(F[j])for(var B in F[j])e.changeList[j][B]&&(F[j][B]=e.changeList[j][B]);else F[j]=e.changeList[j],e.changeList[j].type||(F[j].type="html");var P={},D={},G={},z=e.userFields?e.userFields:["pa-author","pa-title","pa-avatar","pa-fld1","pa-reg","pa-posts","pa-respect","pa-positive","pa-awards","pa-gifts"],J=o(),K=e.defaultAvatar?e.defaultAvatar:"http://i.imgur.com/bQuC3S1.png",Q=""!==U()?U().split("|splitKey|"):[],V=[],W=["input","button","script","iframe","frame","style","audio","video","form","footer","header","head","html","map","select","table","textarea","xmp","object","embed","var","meta"],X=["onblur","onchange","onclick","ondblclick","onfocus","onkeydown","onkeypress","onkeyup","onload","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onreset","onselect","onscroll","onsubmit","onunload","javascript","onerror","oninput","onafterprint","onbeforeprint","onbeforeunload","onhashchange","onmessage","onoffline","ononline","onpagehide","onpageshow","onpopstate","onresize","onstorage","oncontextmenu","oninvalid","onreset","onsearch","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","onmousedown","onmousewheel","onwheel","oncopy","oncut","onpaste","onabort","oncanplay","oncanplaythrough","oncuechange","ondurationchange","onemptied","onended","onerror","onloadeddata","onloadedmetadata","onloadstart","onpause","onplay","onplaying","onprogress","onratechange","onseeked","onseeking","onstalled","onsuspend","ontimeupdate","onvolumechange","onwaiting"];document.addEventListener("DOMContentLoaded",function(){FORUM.topic?(t(),1!==UserID&&l()):!FORUM.topic&&FORUM.editor?(1!==UserID&&l(),a()):n()})},window.hvScriptSet=new ScriptSet;
