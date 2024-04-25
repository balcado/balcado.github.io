const counters = document.querySelectorAll('.counter');
Math.trunc(document.querySelectorAll('.counter'));

const speed = 1000; 
 // The lower the slower
counters.forEach(counter => {
    
	const updateCount = () => {

		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setInterval(updateCount, speed);
            Math.trunc(counter.innerText);
		} else {
			counter.innerText = target;
		}
	};
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    
    if (scrollTop >= 500 && scrollTop < 3000) {

    } 
        else if (scrollTop >= 3000) {
            
            Math.trunc(updateCount());
        } 
            else {
                        
            }
    
  });
  
  
});
