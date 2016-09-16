  playRandom();


    function playRandom(){
  // recuperer la SOURCE du MP3 default
  var playTrack = document.getElementById('track');
  console.log(playTrack);

  // cacher / supprimer le control -- player
  playTrack.removeAttribute("controls");

  // tableau des données piste
  var PlayList = [
    {piste: 1, artist: "Rihanna", album: "Anti", title:"Needed Me", src: "./mp3/neededme.mp3"  }, // 0
    {piste: 2, artist: "Young Money", album: "Rise Of An Empire", title:"Senile", src: "./mp3/senile.mp3" } , // 1
    {piste: 3, artist: "Rihanna", album: "Good Girl Gone Bad", title:"Rehab", src: "./mp3/rehab.mp3"}, // 2
    {piste: 4, artist: "Bjork", album: "Homogenic", title:"Joga", src: "./mp3/joga.mp3"}, // 3
    {piste: 5, artist: "Yemi Alade", album: "King of Queens", title:"Johnny", src: "./mp3/johnny.mp3"},// 4
    ];
    console.log(PlayList);

    /*---------------- PARTIE A RECRIRE SELON TERME DOC PRECEDENT -----------------*/
  // recuperation de UL
  var mediaPlayer = document.getElementById('controlers');
  piste = document.getElementById('btns');
  // écrire du texte dans les différents balbutiements
  function setText(el,text) {
    el.innerHTML = text;
  };
  // création de PREV
  var prevBtn = document.createElement('button');
  prevBtn.type = 'button';
  mediaPlayer.appendChild(prevBtn);
  setText(prevBtn, "<");

  /**** ****/
  prevBtn.addEventListener("click", prev);

  function prev(){
    var trackPlayed = document.getElementById('track').getAttribute('src')
    console.log(trackPlayed);

    var prevTrack;
    // comparaison de l'Attribut HTML et de la propriété du tableau
    for (var i = 0; i < PlayList.length; i++) {
      console.log("track joué = ",trackPlayed, PlayList[i].src);
      if(trackPlayed == PlayList[i].src){
        // Si la piste en Lecture est 0 (Needed me) on retourne la dernier piste de la PlayList (Jonny)
        if (trackPlayed == PlayList[0].src){
          prevTrack = PlayList[PlayList.length-1].src;
          console.log("Needed Me > Johnny= " + PlayList[PlayList.length-1].src, prevTrack);
          console.log(prevTrack);
          console.log(i, "5 l'index de ", prevTrack);
          document.getElementById('track').setAttribute('src', prevTrack);
          // remplacer les valeur
          document.getElementById('titre').innerHTML= PlayList[PlayList.length-1].title;
          document.getElementById('artiste').innerHTML=PlayList[PlayList.length-1].artist;
          document.getElementById('album').innerHTML=PlayList[PlayList.length-1].album;
          console.log(PlayList[PlayList.length-1].title);
        }
        // Si la piste est différent à l'index[0] (Needed me)
        else if ((trackPlayed != PlayList[0].src)){
          prevTrack = PlayList[i-1].src;
          console.log(prevTrack);
          console.log(i, "autre l'index de ", prevTrack);
          document.getElementById('track').setAttribute('src', prevTrack);
          // remplacer les valeur
          document.getElementById('titre').innerHTML= PlayList[i-1].title;
          document.getElementById('artiste').innerHTML= PlayList[i-1].artist;
          document.getElementById('album').innerHTML= PlayList[i-1].album;
          console.log(PlayList[i-1].title);
        }
        console.log(i, " et track prev =", prevTrack);
        break;
      };
    };
  };
  /*** ****/
  //LECTURE / PAUSE
  // création de PLAY
  var playBtn = document.createElement('button');
  playBtn.type = 'button';
  mediaPlayer.appendChild(playBtn);
  setText(playBtn, "play");
  // faire fonctionner le btn player
  playBtn.addEventListener("click", player);
  /* TOFIXED 'onplay'*/
  function player() {
    if (playTrack.paused) {
      setText(playBtn,"pause");
      playTrack.play();
    } else {
      setText(playBtn,"play");
      playTrack.pause();
    };
  };

  // SON / MUET
  // couper son >> mute btn
  var muteBtn = document.createElement('button');
  muteBtn.type = 'button';
  mediaPlayer.appendChild(muteBtn);
  setText(muteBtn,"mute");
  //***deplacer
  // event sur le BTN MUTE
  muteBtn.addEventListener("click", muter);
  function muter() {
    if (playTrack.volume == 0) {
      setText(this,"mute");
      playTrack.volume = 1;
    } else {
      setText(this,"unmute");
      playTrack.volume = 0;
    };
  };

  //*** REALY IMPORTANT
  // création de Random
  var randomBtn = document.createElement('button');
  randomBtn.type = 'button';
  mediaPlayer.appendChild(randomBtn);
  setText(randomBtn, "random");
  randomBtn.addEventListener("click", randomer);
  randomer();
  function randomer() {
    for (var id = 0; id < PlayList.length; id++) {
      var index = Math.floor(Math.random()*PlayList.length);
      var randomSrc = PlayList[index].src;
      console.log(index, " l'index de ", randomSrc);
    };
  // Remplacer la ressource SRC par nouvelle SRC RANDOM
  document.getElementById('track').setAttribute('src', randomSrc);
  // TOFIXED
  // mettre lancer une function qui appel le "setAttribute"
  // SUPPRIMER du tableauP "PlayList" la 'randomSrc'
  //  a revoir >> var del = PlayList.splice(0,1, randomSrc);
  // title >> title
  document.getElementById('titre').innerHTML= PlayList[index].title;
  document.getElementById('artiste').innerHTML= PlayList[index].artist;
  document.getElementById('album').innerHTML= PlayList[index].album;
  console.log(PlayList[index].title, "\n------");
  };
  // création de Next
  var nextBtn = document.createElement('button');
  nextBtn.type = 'button';
  mediaPlayer.appendChild(nextBtn);
  setText(nextBtn, ">");
  /**** ****/
  nextBtn.addEventListener("click", next);

  function next(){
    var trackPlayed = document.getElementById('track').getAttribute('src')
    console.log(trackPlayed);
    var nextTrack;
    // comparaison de l'Attribut HTML et de la propriété du tableau
    for (var i = 0; i < PlayList.length; i++) {
      console.log("track joué = ",trackPlayed, PlayList[i].src);
      if(trackPlayed == PlayList[i].src){
        // Si la piste en Lecture est 0 (Needed me) on retourne la dernier piste de la PlayList (Jonny)
        if (trackPlayed == PlayList[PlayList.length-1].src){
          nextTrack = PlayList[0].src;
          console.log("Needed Me > Johnny= " + PlayList[0].src, nextTrack);
          console.log(nextTrack);
          console.log(i, "5 l'index de ", nextTrack);
          document.getElementById('track').setAttribute('src', nextTrack);
          // remplacer les valeur
          document.getElementById('titre').innerHTML= PlayList[0].title;
          document.getElementById('artiste').innerHTML=PlayList[0].artist;
          document.getElementById('album').innerHTML=PlayList[0].album;
          console.log(PlayList[0].title)
        }
        // Si la piste est différent à l'index[0] (Needed me)
        else if ((trackPlayed != PlayList[PlayList.length-1].src)){
          nextTrack = PlayList[i+1].src;
          console.log(nextTrack);
          console.log(i, "autre l'index de ", nextTrack);
          document.getElementById('track').setAttribute('src', nextTrack);
          // remplacer les valeur
          document.getElementById('titre').innerHTML= PlayList[i+1].title;
          document.getElementById('artiste').innerHTML= PlayList[i+1].artist;
          document.getElementById('album').innerHTML= PlayList[i+1].album;
          console.log(PlayList[i+1].title);
        }
        console.log(i, " et track next =", nextTrack);
        break;
      };
    };
  };

  /* -------------------------------------------------------------------------*/
  ///// LES DIFFERENTS ACTIONS DES btns
  // Créer un controleur volume == "range"
  var volumeSlider = document.createElement("input");
  volumeSlider.type = "range";
  mediaPlayer.appendChild(volumeSlider);
  setText(volumeSlider, "volume");
  // paramétrer les attributs
  function setAttributes(el, attributes) {
    for(var key in attributes){
      el.setAttribute(key, attributes[key]);
    }
  };
  // attributs du curseur (souris) semblable muter()
  setAttributes(volumeSlider, { "type": "range", "min": "0", "max": "1", "step": "any", "value": "1" });
  // on donne une valeur à volume
  volumeSlider.addEventListener("input", function(){
    playTrack.volume = volumeSlider.value;
  });
  // sync controlers
  playTrack.addEventListener('volumechange', volumizer);
  function volumizer() {
    if (playTrack.volume == 0) {
      setText(muteBtn,"unmute");
    } else {
      setText(muteBtn,"mute");
    };
  };
  // fin de la musique
  playTrack.addEventListener('ended', finish);
  function finish() {
    playTrack.currentTime = 0;
    setText(playButton,"Play");
  };
};
