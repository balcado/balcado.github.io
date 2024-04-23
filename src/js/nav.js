<script>
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= 500 && scrollTop < 3000) {
      var blurValue = Math.min(8 + (scrollTop - 500) / 100, 50); // Adjust the blur value from 8px to 50px
      $('nav').css({
        'background': '#10181e',
        '-webkit-backdrop-filter': 'blur(' + blurValue + 'px)',
        'backdrop-filter': 'blur(' + blurValue + 'px)'
      });
    } else if (scrollTop >= 3000) {
      var blurValue = Math.max(50 - (scrollTop - 3000) / 100, 8); // Adjust the blur value from 50px to 8px
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
</script>
