jQuery(function(e){function t(){o&&sessionStorage.setItem("wc_cart_created",(new Date).getTime())}function n(e){o&&(localStorage.setItem(a,e),sessionStorage.setItem(a,e))}function r(){e.ajax(s)}if("undefined"==typeof wc_cart_fragments_params)return!1;var o=!0,a=wc_cart_fragments_params.cart_hash_key;try{o="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("wc","test"),window.sessionStorage.removeItem("wc"),window.localStorage.setItem("wc","test"),window.localStorage.removeItem("wc")}catch(w){o=!1}var s={url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",success:function(r){r&&r.fragments&&(e.each(r.fragments,function(t,n){e(t).replaceWith(n)}),o&&(sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(r.fragments)),n(r.cart_hash),r.cart_hash&&t()),e(document.body).trigger("wc_fragments_refreshed"))}};if(o){var i=null;e(document.body).on("wc_fragment_refresh updated_wc_div",function(){r()}),e(document.body).on("added_to_cart removed_from_cart",function(e,r,o){var s=sessionStorage.getItem(a);null!==s&&s!==undefined&&""!==s||t(),sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(r)),n(o)}),e(document.body).on("wc_fragments_refreshed",function(){clearTimeout(i),i=setTimeout(r,864e5)}),e(window).on("storage onstorage",function(e){a===e.originalEvent.key&&localStorage.getItem(a)!==sessionStorage.getItem(a)&&r()}),e(window).on("pageshow",function(t){t.originalEvent.persisted&&(e(".widget_shopping_cart_content").empty(),e(document.body).trigger("wc_fragment_refresh"))});try{var c=e.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),_=sessionStorage.getItem(a),g=Cookies.get("woocommerce_cart_hash"),m=sessionStorage.getItem("wc_cart_created");if(null!==_&&_!==undefined&&""!==_||(_=""),null!==g&&g!==undefined&&""!==g||(g=""),_&&(null===m||m===undefined||""===m))throw"No cart_created";if(m){var d=1*m+864e5,f=(new Date).getTime();if(d<f)throw"Fragment expired";i=setTimeout(r,d-f)}if(!c||!c["div.widget_shopping_cart_content"]||_!==g)throw"No fragment";e.each(c,function(t,n){e(t).replaceWith(n)}),e(document.body).trigger("wc_fragments_loaded")}catch(w){r()}}else r();Cookies.get("woocommerce_items_in_cart")>0?e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show():e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),e(document.body).on("adding_to_cart",function(){e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()})});
;(function(){var $;$=window.jQuery||window.Zepto||window.$;$.fn.fancySelect=function(opts){var isiOS,settings;if(opts==null){opts={};}
settings=$.extend({forceiOS:false,includeBlank:false,optionTemplate:function(optionEl){return optionEl.text();},triggerTemplate:function(optionEl){return optionEl.text();}},opts);isiOS=!!navigator.userAgent.match(/iP(hone|od|ad)/i);return this.each(function(){var copyOptionsToList,disabled,options,sel,trigger,updateTriggerText,wrapper;sel=$(this);if(sel.hasClass('fancified')||sel[0].tagName!=='SELECT'){return;}
sel.addClass('fancified');sel.css({width:1,height:1,display:'block',position:'absolute',top:0,left:0,opacity:0});sel.wrap('<div class="fancy-select">');wrapper=sel.parent();if(sel.data('class')){wrapper.addClass(sel.data('class'));}
wrapper.append('<div class="trigger">');if(!(isiOS&&!settings.forceiOS)){wrapper.append('<ul class="options">');}
trigger=wrapper.find('.trigger');options=wrapper.find('.options');disabled=sel.prop('disabled');if(disabled){wrapper.addClass('disabled');}
updateTriggerText=function(){var triggerHtml;triggerHtml=settings.triggerTemplate(sel.find(':selected'));return trigger.html(triggerHtml);};sel.on('blur.fs',function(){if(trigger.hasClass('open')){return setTimeout(function(){return trigger.trigger('close.fs');},120);}});trigger.on('close.fs',function(){trigger.removeClass('open');return options.removeClass('open');});trigger.on('click.fs',function(){var offParent,parent;if(!disabled){trigger.toggleClass('open');if(isiOS&&!settings.forceiOS){if(trigger.hasClass('open')){return sel.focus();}}else{if(trigger.hasClass('open')){parent=trigger.parent();offParent=parent.offsetParent();if((parent.offset().top+parent.outerHeight()+options.outerHeight()+20)>$(window).height()+$(window).scrollTop()){options.addClass('overflowing');}else{options.removeClass('overflowing');}}
options.toggleClass('open');if(!isiOS){return sel.focus();}}}});sel.on('enable',function(){sel.prop('disabled',false);wrapper.removeClass('disabled');disabled=false;return copyOptionsToList();});sel.on('disable',function(){sel.prop('disabled',true);wrapper.addClass('disabled');return disabled=true;});sel.on('change.fs',function(e){if(e.originalEvent&&e.originalEvent.isTrusted){return e.stopPropagation();}else{return updateTriggerText();}});sel.on('keydown',function(e){var hovered,newHovered,w;w=e.which;hovered=options.find('.hover');hovered.removeClass('hover');if(!options.hasClass('open')){if(w===13||w===32||w===38||w===40){e.preventDefault();return trigger.trigger('click.fs');}}else{if(w===38){e.preventDefault();if(hovered.length&&hovered.index()>0){hovered.prev().addClass('hover');}else{options.find('li:last-child').addClass('hover');}}else if(w===40){e.preventDefault();if(hovered.length&&hovered.index()<options.find('li').length-1){hovered.next().addClass('hover');}else{options.find('li:first-child').addClass('hover');}}else if(w===27){e.preventDefault();trigger.trigger('click.fs');}else if(w===13||w===32){e.preventDefault();hovered.trigger('mousedown.fs');}else if(w===9){if(trigger.hasClass('open')){trigger.trigger('close.fs');}}
newHovered=options.find('.hover');if(newHovered.length){options.scrollTop(0);return options.scrollTop(newHovered.position().top-12);}}});options.on('mousedown.fs','li',function(e){var clicked;clicked=$(this);sel.val(clicked.data('raw-value'));if(!isiOS){sel.trigger('blur.fs').trigger('focus.fs');}
options.find('.selected').removeClass('selected');clicked.addClass('selected');trigger.addClass('selected');return sel.val(clicked.data('raw-value')).trigger('change.fs').trigger('blur.fs').trigger('focus.fs');});options.on('mouseenter.fs','li',function(){var hovered,nowHovered;nowHovered=$(this);hovered=options.find('.hover');hovered.removeClass('hover');return nowHovered.addClass('hover');});options.on('mouseleave.fs','li',function(){return options.find('.hover').removeClass('hover');});copyOptionsToList=function(){var selOpts;updateTriggerText();if(isiOS&&!settings.forceiOS){return;}
selOpts=sel.find('option');return sel.find('option').each(function(i,opt){var optHtml;opt=$(opt);if(!opt.prop('disabled')&&(opt.val()||settings.includeBlank)){optHtml=settings.optionTemplate(opt);if(opt.prop('selected')){return options.append("<li data-raw-value=\""+(opt.val())+"\" class=\"selected\">"+optHtml+"</li>");}else{return options.append("<li data-raw-value=\""+(opt.val())+"\">"+optHtml+"</li>");}}});};sel.on('update.fs',function(){wrapper.find('.options').empty();return copyOptionsToList();});return copyOptionsToList();});};}).call(this);