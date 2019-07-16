let sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight()
  , side_dots = $(".side-dots .dot");
$(window).on('scroll', function () {
  let cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      let currentDot = "#"+ $(this).attr('id') +"-dot"
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      $(".side-dots").find('div').removeClass('active')

      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      $(currentDot).addClass('active')
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');

  nav_height = nav_height - 50
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 100);

  nav_height = nav_height + 50
  return false;
});

$(".side-dots").find('div').on('click', function () {
  let $el = $(this)
    , id = $el.attr('id');

  console.log(nav_height)
  nav_height = nav_height - 50
  id = id.split('-')[0]
  $('html, body').animate({
    scrollTop: $("#" + id).offset().top - nav_height
  }, 100);

  nav_height += 50
  return false;
});
