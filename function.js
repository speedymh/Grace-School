$(document).ready(function(){

  $('li.about, ul.about-us').hover(function() {
    $('.primary').css('boxShadow', '0 0 0 rgba(0,0,0,0)');
    if($('ul.about-us').hasClass == true) {
      console.log(true)
    } else {
      $('ul.about-us').toggleClass('on-hover');
  }

    // $('ul.about-us').toggleClass('on-hover');
    // console.log('Hover');
  });
});
