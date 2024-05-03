$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
  if (scrollTop >= 0 && scrollTop <= 50) {
      $('nav').css({
            'display': 'none'
          

      });
    }
       else if (scrollTop <= 100) {
      $('nav').css({
                  'display': 'none',
                    'animation': 'nav-opacity 3s ease-in-out'

      });
    } 
    else if (scrollTop >= 120 && scrollTop < 3500) {
      var blurValue = Math.min(8 + (scrollTop - 500) / 200,20); // Adjust the blur value from 8px to 20px
      $('nav').css({
        'background': '#10181e',
        '-webkit-backdrop-filter': 'blur(' + blurValue + 'px)',
        'backdrop-filter': 'blur(' + blurValue + 'px)',
      });
          $('nav.z-depth-0').css({
                 'display': 'block'
      });
    } else if (scrollTop >= 5100) {
      var blurValue = Math.max(20 - (scrollTop - 3500) / 200, 8); // Adjust the blur value from 20px to 8px
      $('nav').css({
        'background': 'transparent',
        '-webkit-backdrop-filter': 'blur(' + blurValue + 'px)',
        'backdrop-filter': 'blur(' + blurValue + 'px)'
      });
    } else {
      $('nav').css({
        'background': 'transparent',
        '-webkit-backdrop-filter': 'blur(8px)',
        'backdrop-filter': 'blur(8px)'
      });
    }
    

   
  });
  