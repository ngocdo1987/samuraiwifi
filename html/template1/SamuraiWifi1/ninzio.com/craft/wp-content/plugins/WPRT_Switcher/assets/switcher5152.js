window.console = window.console || function() {
   var e = {};
   e.log = e.warn = e.debug = e.info = e.error = e.time = e.dir = e.profile = e.clear = e.exception = e.trace = e.assert = function() {};
   return e
}();

;(function($) {
   'use strict'
   var switchColor = {
      colorObj: {
         colorCookie: "colorCookie",
         switchClass: ".styleswitch",
         currentClass: "current",
         headLink: "head link[title=colors]",
         colorItem: ".color-box a.styleswitch",
         reset: ".switcher-container .reset",
         defaultColor: "color1"
      },
      loadEvent: function() {
         var e = switchColor.colorObj;

         if ($.cookie(e.colorCookie)) {
            switchColor.setColor($.cookie(e.colorCookie))
         } else {
            switchColor.setColor(e.defaultColor)
         }

         $(e.colorItem).on("click", function() {
            var e = $(this).attr("id");
            switchColor.setColor(e)
         });

         $(e.reset).click(function () {
            switchColor.setColor(e.defaultColor)
         })
      },
      setColor: function(e) {
         var t = switchColor.colorObj;
         var url = 'http://ninzio.com/craft/wp-content/plugins/WPRT_Switcher/'

         $.cookie(t.colorCookie, e);
         $(t.headLink).attr("href", url + "assets/" + e + "/" + e + ".css");

         var logo = url + 'assets/' + e + "/logo_" + e +'.png';
         var logo_retina = url + 'assets/' + e + "/logo_" + e +'@2x.png';
         var logo2 = url + 'assets/' + e + "/logo_white_" + e +'.png';
         var logo2_retina = url + 'assets/' + e + "/logo_white_" + e +'@2x.png';

         var flogo = url + 'assets/' + e + "/logo_white_" + e +'.png';

         if ( e === t.defaultColor ) {
            logo = url + 'assets/logo.png';
            logo_retina = url + 'assets/logo@2x.png';

            logo2 = url + 'assets/logo_white.png';
            logo2_retina = url + 'assets/logo_white@2x.png';

            flogo = url + 'assets/logo_white.png';
         }

         if ( $('body').is('.header-style-1, .header-style-5') ) {
            $('#site-logo').find('img').attr('src',logo);
            $('#site-logo').find('img').attr('data-retina',logo_retina);
         }

         if ( $('body').is('.header-style-2, .header-style-4') ) {
            $('#site-logo').find('img').attr('src',logo2);
            $('#site-logo').find('img').attr('data-retina',logo2_retina);
         }

         $('#footer .footer-logo').find('img').attr('src',flogo);   

         $(t.switchClass).removeClass(t.currentClass);
         $("#" + e).addClass(t.currentClass)
      }
   };

   var switchAnimate = {
      loadEvent: function() {
         $(".switcher-container .setting a").click(function(e) {
            var t = $(".switcher-container");

            if  ( t.css("left") === "-290px" ) {
               $(".switcher-container").animate({ left: "0"}, 300, 'easeInOutExpo')
            } else {
               $(".switcher-container").animate({ left: "-290px" }, 300, 'easeInOutExpo')
            }

            e.preventDefault();
        })
      }
   };

   $(document).ready(function() {
      var e =  '<div class="switcher-container">'+
                  '<div class="setting"><a href="#"></a></div>'+
                  '<div class="selector-box">'+
                     '<h2><a href="https://themeforest.net/item/thecraft-responsive-multipurpose-wordpress-theme/21311431?ref=ninzio">Purchase now $59</a></h2>'+
                     '<h3>Choose Color</h3>'+
                     '<div class="color-box clearfix">'+
                        '<a id="color1" class="styleswitch color current reset"></a>'+
                        '<a id="color2" class="styleswitch color"></a>'+
                        '<a id="color3" class="styleswitch color"></a>'+
                        '<a id="color4" class="styleswitch color"></a>'+
                        '<a id="color5" class="styleswitch color"></a>'+
                        '<a id="color6" class="styleswitch color"></a>'+
                        '<a id="color7" class="styleswitch color"></a>'+
                        '<a id="color8" class="styleswitch color"></a>'+
                     '</div>'+
                     '<div class="note-text">'+
                        '<p>You will find much more options for colors and styling in admin panel. This color picker is used only for demonstation purposes.</p>'+
                     '</div>'+
                  '</div>'+
               '</div>';
      $('body').append(e);
      switchColor.loadEvent();
      switchAnimate.loadEvent();
   });

})(jQuery);