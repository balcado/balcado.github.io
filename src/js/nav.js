/* Listenner and Transparency Applicator */
$(window).scroll(function () {
if ($(window).scrollTop() >= 50)  {
$('nav').css('background','#10181e');
} else {
$('nav').css('background','transparent');
}
});
