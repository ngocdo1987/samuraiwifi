/*!
 * googlemaps-scrollprevent (jQuery Google Maps Scroll Prevent Plugin)
 * Version 0.6.5
 * URL: https://github.com/diazemiliano/googlemaps-scrollprevent
 * Description: googlemaps-scrollprevent is an easy solution to the problem of
 *              page scrolling with Google Maps.
 * Author: Emiliano Díaz https://github.com/diazemiliano/
 * Copyright: The MIT License (MIT) Copyright (c) 2016 Emiliano Díaz.
 */
(function(){var t={}.hasOwnProperty;!function(e){return e.fn.extend({scrollprevent:function(o){var s,n,i,r,a,l,c,p,u,d,g,h,v,w,m,f,b,y,x,k,q,D;if(c={"class":{wrap:"mapscroll-wrap",overlay:"mapscroll-overlay",progress:"mapscroll-progress",button:"mapscroll-button",icon:"mapscroll-icon"},pressDuration:650,triggerElm:"button",overlay:{iconLocked:'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 1792 1792" > <path transform="translate(1)" d="M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z" /> </svg>',iconUnloking:'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 1792 1792"> <path transform="translate(1)" d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z" /> </svg>',iconUnlocked:'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 1792 1792"> <path transform="translate(1)" d="M1728 576v256q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45v-256q0-106-75-181t-181-75-181 75-75 181v192h96q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h672v-192q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5z" /> </svg>'},onMapLock:function(){},onMapUnlock:function(){},printLog:!1},m=e.extend(!1,c,o),a=e(this),s=function(t){var e,o;return m.printLog&&window.console&&window.console.log?(e=new Date,o=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),console.log("mapScrollPrevent ["+o+"] : "+t)):void 0},a.length){s(a.length+" iFrames detected."),w="/* --- mapScrollPrevent.js CSS Classes --- */ ."+m["class"].overlay+" { position: absolute; overflow:hidden; cursor: pointer; text-align: center; background-color: rgba(0, 0, 0, 0); } ."+m["class"].button+" { text-rendering: optimizeLegibility; font-family: Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; padding-top: 15px; padding-bottom: 15px; width: 55px; position: absolute; right: 43px; bottom: 24px; border-color: rgba(0, 0, 0, 0.3); color: rgba(58, 132, 223, 0); background-color: rgba(255, 255, 255, 1); color: rgb(58, 132, 223); border-top-right-radius: 2px; border-top-left-radius: 2px; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; cursor: pointer; z-index: 1; } ."+m["class"].icon+" { display: none; position: relative; z-index: 1; fill: rgba(58, 132, 223, 1); } ."+m["class"].icon+"-locked { display: inline; } ."+m["class"].progress+" { position: absolute; top: 0; bottom: 0; left: 0; width: 0%; display: block; background-color: rgba(58, 132, 223, 0.4); } ."+m["class"].wrap+" { position: relative; text-align: center; display: inline-block; } ."+m["class"].wrap+" iframe { position: relative; top: 0; left: 0; } ."+m["class"].overlay+", ."+m["class"].button+", ."+m["class"].icon+" { transition: all .3s ease-in-out; } ."+m["class"].progress+" { width: 0%; }",y=m.overlay;for(u in y)t.call(y,u)&&(k=y[u],s("Icons founded... Replacing classes."),k=k.replace('#s(id|class)="[^"]+"#',""),d=u.split("icon"),g=k.split("svg").join('svg class="'+m["class"].icon+"-"+d[1].toLowerCase()+" "+m["class"].icon+'"'),m.overlay[u]=g);return f=e("<div class="+m["class"].overlay+"></div>"),r=e("<div class="+m["class"].button+"> <div class="+m["class"].progress+"> </div> "+m.overlay.iconLocked+" "+m.overlay.iconUnlocked+" "+m.overlay.iconUnloking+" </div>"),D=e("<div class="+m["class"].wrap+"></div>"),p=null,n=function(){return e("head").append('<style rel="stylesheet" type="text/css"> '+w+"</style>"),s("Plugin css applied.")},q=function(){return a.closest("."+m["class"].wrap).length?(p=!0,s("Iframe already wrapped")):(a.wrap(D),p=!1,s("Iframe isn't wrapped.")),D=a.closest("."+m["class"].wrap).append(r).append(f),f=D.children("."+m["class"].overlay),r=D.children("."+m["class"].button),l(),s("Iframe now wraped.")},l=function(){return e.each([f,D],function(){return this.height(a.height()),this.width(a.width()).css({top:a.position().top,left:a.position().left})}),s("Overlay positioned.")},b=function(t,e){var o,n,i;switch(e=e.closest("."+m["class"].wrap),i=e.find("."+m["class"].progress),n=e.find("."+m["class"].icon),f=e.find("."+m["class"].overlay),o=e.find("iframe"),n.hide(),t){case"enable":return e.find("."+m["class"].icon+"-unloking").show(),i.animate({width:"100%"},{duration:m.pressDuration,queue:!1}),s("Enabling Map.");case"disable":return o.css({"pointer-events":"none"}),e.find("."+m["class"].icon+"-locked").show(),i.animate({width:"0%"},{duration:m.pressDuration,queue:!1}),f.show(),m.onMapLock(),s("Disabling Map.");case"unlocked":return o.css({"pointer-events":"auto"}),e.find("."+m["class"].icon+"-unlocked").show(),i.css({width:"100%"}),f.hide(),m.onMapUnlock(),s("Map Enabled.")}},x=function(t){return b("unlocked",t),clearTimeout(this.timeOut)},this.mouseDownTime=0,this.mouseUpTime=0,h=function(t){return t.preventDefault(),t.stopPropagation(),console.log(t),this.mouseDownTime=e.now(),this.timeOut=setTimeout(x,m.pressDuration,e(this)),b("enable",e(this)),s("LongPress Started.")},v=function(t){return t.preventDefault(),t.stopPropagation(),console.log(t),this.mouseUpTime=e.now()-this.mouseDownTime,clearTimeout(this.timeOut),this.mouseUpTime<m.pressDuration?b("disable",e(this)):b("unlocked",e(this)),s(this.mouseUpTime/1e3+"s Pressed. ")},i=function(){var t;switch(e(window).bind("resize",l),a.bind("resize",l),"area"!==(t=m.triggerElm)&&"button"!==t&&(m.triggerElm=c.triggerElm),m.triggerElm){case"button":r.bind("mousedown touchstart",h).bind("mouseup touchend touchleave touchcancel",v).unbind("click");break;case"area":D.bind("mousedown touchstart",h).bind("mouseup touchend touchleave touchcancel",v).unbind("click")}return s("Events bounded.")},{start:function(){return s("Starting plugin..."),a.find(""+m["class"].wrap)?(n(),q(),i(),s("Plugin Started.")):(console.log(a.find(""+m["class"].wrap)),s("Already Started."))},stop:function(){return s("Stopping plugin..."),e("."+m["class"].overlay+", ."+m["class"].button).remove(),a.removeAttr("style"),console.log(a.parent().is("."+m["class"].wrap)),console.log(p),p||a.parent().is("."+m["class"].wrap)&&a.unwrap(),s("Plugin Stopped.")}}}return s('No Iframes detected. Try changing your "selector."')}})}(jQuery)}).call(this);
//# sourceMappingURL=googlemaps-scrollprevent.min.js.map