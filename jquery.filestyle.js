/*
 * Style File - jQuery plugin for styling file input elements
 *  
 * Copyright (c) 2007-2009 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Based on work by Shaun Inman
 *   http://www.shauninman.com/archive/2007/09/10/styling_file_inputs_with_css_and_the_dom
 *
 */

(function($) {
    
    $.fn.filestyle = function(options) {
        

        var settings = {
            width: $(this).css('width'),
        	imagewidth : $(this).css('height')
        };
        if(options) {
            $.extend(settings, options);
        };
                        
        return this.each(function() {
            
            var self = this;
            if (settings.cssbutton == true ){
            	var wrapper = $('<div class="file_css_button">' + settings.cssbuttontext )
            				.css({
                                "display": "inline",
                                "position": "absolute",
                                "overflow": "hidden"
                            });
            }else{
            	var wrapper = $("<div>")
                            .css({
                                "width": settings.imagewidth + "px",
                                "height": settings.imageheight + "px",
                                "background": "url(" + settings.image + ") 0 0 no-repeat",
                                "background-position": "right",
                                "display": "inline",
                                "position": "absolute",
                                "overflow": "hidden"
                            });
            }
                       
            var filename = $('<input class="file">')
                             .addClass($(self).attr("class"))
                             .css({
                                 "display": "inline",
                                 "width": settings.width + "px"
                             });

            $(self).before(filename);
            $(self).wrap(wrapper);
			$(self).before(settings.cssbuttontext);
            $(self).css({
                        "position": "absolute",
                        "height": settings.imageheight + "px",
                        "width": settings.width + "px",
                        "display": "inline",
                        "cursor": "pointer",
                        "opacity": "0.0",
                        "right": "0"
                    });

            $(self).bind("change", function() {
                filename.val($(self).val());
            });
      
        });
       
    };
    
})(jQuery);