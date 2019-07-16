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


$(".side-dots").find('div').on('click', function () {
  let $el = $(this)
    , id = $el.attr('id');

  id = id.split('-')[0]
  $('html, body').animate({
    scrollTop: $("#" + id).offset().top
  }, 100);

  return false;
});
