$(document).ready(function(){

  $('li.about').click(function() {

    $(this).toggleClass('clicked');
    $('ul.about-us').toggleClass('clicked');
    $('span.about').toggleClass('clicked');

    $('li.grace').removeClass('clicked');
    $('ul.grace-schools').removeClass('clicked');
    $('span.schools').removeClass('clicked');
  });
  $('li.grace').click(function() {

    $(this).toggleClass('clicked');
    $('ul.grace-schools').toggleClass('clicked');
    $('span.schools').toggleClass('clicked');

    $('li.about').removeClass('clicked');
    $('ul.about-us').removeClass('clicked');
    $('span.about').removeClass('clicked');
  });
  $('li.menu-contact, li.life').click(function() {
    $('li.grace, li.about, ul.about-us, ul.grace-schools, span.schools, span.about').removeClass('clicked');
  });
});
