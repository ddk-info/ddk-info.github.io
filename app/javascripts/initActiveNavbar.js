initActiveNavbar = function() {
  items = $('.nav-content-list li')
  $.each(items, function(i, val) {
    $(this).click(function(){
      $(".nav-content-list li .glyphicon").removeClass("active")
      $(this).find(".glyphicon").addClass("active")
    });
  })
};

initActiveNavbar();
