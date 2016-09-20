// YOUTUBE VIDEO SEACH

compteur = 0;
(function() {
  var cx = '002590007848321285987:ahbmmnrn4yk';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
})();
function delai() {
  setTimeout(captureLien, 1500);
}
function captureLien() {
  if (compteur == 1){
    fenetre = document.getElementsByTagName("iframe")[0];
    document.body.removeChild(fenetre);
    var x = document.getElementsByTagName("a")[6];
    var fenetre = document.createElement("iframe");
    var v = x.toString().slice(32);
    console.log(v);
    fenetre.setAttribute("width", "100%");
    fenetre.setAttribute("height", "730");
    fenetre.setAttribute("id", "ytplayer");
    fenetre.setAttribute("src","http://www.youtube.com/embed/" + v +"?autoplay=1&enablejsapi=1&?allowfullscreen=1" );
    fenetre.classList.add("fenetre1");
    fenetre.setAttribute("type", "text/html");
    fenetre.setAttribute("frameborder", "");
    fenetre.setAttribute("allowfullscreen", "true");
    document.body.appendChild(fenetre);
  }
  else {
    var x = document.getElementsByTagName("a")[6];
    var fenetre = document.createElement("iframe");
    var v = x.toString().slice(32);
    console.log(v);
    fenetre.setAttribute("width", "100%");
    fenetre.setAttribute("height", "730");
    fenetre.setAttribute("id", "ytplayer");
    fenetre.setAttribute("src","http://www.youtube.com/embed/" + v +"?autoplay=1&enablejsapi=1&?allowfullscreen=1" );
    fenetre.classList.add("fenetre1");
    fenetre.setAttribute("type", "text/html");
    fenetre.setAttribute("frameborder", "");
    fenetre.setAttribute("allowfullscreen", "true");
    document.body.appendChild(fenetre);
    compteur = 1;
  }
}
