initMasonry = function() {
  var delayInterval, myStopFunction;
  delayInterval = setInterval(function() {
    $('#masonry-js').imagesLoaded(function() {
      return $('#masonry-js').masonry({
        itemSelector: ".item",
      });
    });
    return myStopFunction();
  }, 1200);
  return myStopFunction = function() {
    return clearInterval(delayInterval);
  };
};

initMasonry();
