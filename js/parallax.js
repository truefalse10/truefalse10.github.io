$(document).ready(function(){
   // cache the window object
   $window = $(window);

   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);

      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards
        var yPos = -($window.scrollTop() / $scroll.data('speed'));

        // background position
        var coords = '50% '+ yPos + 'px';

        // move the background
        $scroll.css({ backgroundPosition: coords });
      }); // end window scroll
   });  // end section function

   // var intro = $("#intro");
   // intro.css({'height':($(window).height())+'px'});
   //
   // // listen for window resize
   // $(window).resize(function(){
   //     intro.css({'height':($(window).height())+'px'})
   // })

   // intro animation
   $(".slider").css({'width':'100px'});

   // gallery image replacement
   var gallery = $(".single-project-gallery");

   var mainImg = $(".main-image img");
   var previewImages = $(".preview-images img");

   previewImages.click(function() {
       var prevSrc = $(this).attr('src')
       mainImg.attr('src', prevSrc);
   });



});
