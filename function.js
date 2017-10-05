$(document).ready(function(){

  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    console.log(wScroll);

    if (wScroll > 1) {
      $('menu').css('background', 'white');
      $('menu').css('paddingTop', '0');
      $('menu').find('li').css('textShadow', 'none');
      $('menu').find('li').css('color', 'black');
      $('menu').find('.underline').css('background', 'black');
      $('menu').css('boxShadow', '0px 5px 20px rgba(0,0,0,.1)');
      $('menu').find('li.menu-contact').css('border', '1px solid black');
    } else {
      $('menu').css('background', 'transparent');
      $('menu').css('paddingTop', '20px');
      $('menu').find('li').css('textShadow', '5px 5px 5px rgba(0,0,0,.4)');
      $('menu').find('li').css('color', 'white');
      $('menu').find('.underline').css('background', 'white');
      $('menu').css('boxShadow', 'none');
      $('menu').find('li.menu-contact').css('border', '1px solid white');
    }
  })
});
