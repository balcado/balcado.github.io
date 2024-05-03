
if (!mobile){
        function desktop() {
            var device = desktop
                AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      disable: $(device),
    });
        }
        document.getElementById('device').addEventListener('click', desktop);
    }
    else if (!desktop){  
    function mobile() {
            var device = mobile
            AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      disable: $(device),
    });
        }
        document.getElementById('device').addEventListener('click', mobile);
    }
    else {
              function device() {
            var device = device
                      AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      disable: $(device),
    });
        }
        document.getElementById('device').addEventListener('click', device);
    }
    }
    
