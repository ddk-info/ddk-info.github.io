function addJavascript(jsname,pos) {
  var th = document.getElementsByTagName(pos)[0];
  var s = document.createElement('script');
  s.setAttribute('type','text/javascript');
  s.setAttribute('src',jsname);
  th.appendChild(s);
}

$( document ).ready(function() {
  addJavascript('app/javascripts/initMasonry.js','body');
  addJavascript('app/javascripts/initScrollTo.js','body');
  addJavascript('app/javascripts/initActiveNavbar.js','body');
});