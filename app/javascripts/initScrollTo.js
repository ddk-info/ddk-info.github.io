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
  scrollToProfile();
  scrollToResume();
};

initScrollTo();

