scrollToProfile = function(){
  profile = $('.nav-content-list li#profile')
  profile.click(function() {
    $("section#profile").ScrollTo(2000);
  });
};

scrollToResume = function(){
  resume = $('.nav-content-list li#resume')
  resume.click(function() {
    $("section#resume").ScrollTo(2000);
  });
};



// Function initializer
initScrollTo = function() {
  // scrollToProfile();
  // scrollToResume();
  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav-content-list li a i ').each(function () {
          var currLink = $(this);
          console.log(currLink)
          var refElement = $(currLink.attr("scroll"));
          console.log(refElement)
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav-content-list li a i').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  };
  $(document).on("scroll", onScroll);
};

initScrollTo();

