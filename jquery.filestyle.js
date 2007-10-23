/*
 * Style File - jQuery plugin for styling file input elements
 *  
 * Copyright (c) 2007 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Based on work by Shaun Inman
 *   http://www.shauninman.com/archive/2007/09/10/styling_file_inputs_with_css_and_the_dom
 *
 * Revision: $Id$
 *
 */

(function($) {
    
    $.fn.stylefile = function(options) {
                
        /* TODO: This should not override CSS. */
        var settings = {
            width : 250
        };
                
        if(options) {
            $.extend(settings, options);
        };
                        
        return this.each(function() {
            
            var self = this;
            var wrapper = $("<div>")
                            .css("width", settings.imagewidth + "px")
                            .css("height", settings.imageheight + "px")
                            .css("background", "url(" + settings.image + ") 0 0 no-repeat")
                            .css("background-position", "right")
                            .css("display", "inline")
                            .css("position", "absolute")
                            .css("overflow", "hidden")
                            .css("cursor", "pointer");
                            
            var filename = $('<input class="file">')
                             .css("display", "inline")
                             .css("width", settings.width + "px")
                             .addClass($(self).attr("class"));

            $(self).before(filename);
            $(self).wrap(wrapper);

            $(self).css("position", "relative")
                   .css("height", settings.imageheight + "px")
                   .css("width", settings.width + "px")
                   .css("display", "inline")
                   .css("opacity", "0.5");
            
            //alert(navigator.platform);
            if ($.browser.mozilla) {
                if (/Win/.test(navigator.platform)) {
                    $(self).css("margin-left", "-142px");                    
                } else {
                    $(self).css("margin-left", "-168px");                    
                };
            } else {
                $(self).css("margin-left", settings.imagewidth - settings.width + "px");                
            };

            $(self).bind("change", function() {
                filename.val($(self).val());
            });
      
        });
        

    };
    
})(jQuery);
