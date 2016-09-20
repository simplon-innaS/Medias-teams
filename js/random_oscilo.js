// TOFIXED
// plus de 30 recurence de getElementbyId
/*---------------- osciloscope ----------------*/
//var piste = document.getElementById('audioOscilo').setAttribute('src',  './mp3/rehab.mp3');

var audio = new Audio();
  audio.src = './mp3/rehab.mp3';
  console.log(audio.src);
  audio.controls = true;
  audio.loop = true;
  // audio.autoplay = true;
  audio.crossOrigin = "anonymous";


  var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;
  window.addEventListener("load", initMp3Player, false);

  function frameLooper(){
    window.requestAnimationFrame(frameLooper);
    fbc_array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(fbc_array);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#59FFF3";
    bars = 100;
    for (var i = 0; i < bars; i++){
      bar_x = i * 4;
      bar_width = 2;
      bar_height = -(fbc_array[i]/2);
      ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
    }
  }
  function initMp3Player(){
    console.log("audio == "+ audio);
    document.getElementById('audio_box').appendChild(audio).setAttribute('id', 'audioOscilo');
    context = new AudioContext();
    analyser = context.createAnalyser();
    canvas = document.getElementById('analyser_render');
    ctx = canvas.getContext('2d');
    source = context.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(context.destination);
    playRandom();
    frameLooper();
  };



  /*---------------- PLAYRANDOM----------------*/
    playRandom();
    function playRandom(){
    // recuperer la SOURCE du MP3 default
    var playTrack = document.getElementById('audioOscilo');
    console.log(playTrack);

    // cacher / supprimer le control -- player
    playTrack.removeAttribute("controls");

    // tableau des données piste
    var PlayList = [
    	{track: 1, artist: "Rihanna", album: "Anti", title:"Needed Me", src: "./mp3/neededme.mp3", imgsrc: "./img/neededme.jpg" }, // 0
    	{track: 2, artist: "Young Money", album: "Rise Of An Empire", title:"Senile", src: "./mp3/senile.mp3", imgsrc: "./img/senile.jpg" } , // 1
    	{track: 3, artist: "Disiz la peste", album: "Le Poisson Rouge", title:"J'pète Les Plombs", src: "./mp3/jpetelesplombs.mp3", imgsrc: "./img/jpetelesplombs.jpg" }, // 2
    	{track: 4, artist: "Bjork", album: "Homogenic", title:"Joga", src: "./mp3/joga.mp3", imgsrc: "./img/joga.jpg" }, // 4
    	{track: 5, artist: "Yemi Alade", album: "King of Queens", title:"Johnny", src: "./mp3/johnny.mp3", imgsrc: "./img/johnny.jpg" },// 5
    	{track: 6, artist: "Midnite", album: "Unpolished", title:"Don't Move", src: "./mp3/dontmove.mp3", imgsrc: "./img/dontmove.jpg" }, // 6
    	{track: 7, artist: "Le Peuple De L'Herbe", album: "P.H Test/Two", title:"No Escape", src: "./mp3/noescape.mp3", imgsrc: "./img/noescape.jpg" },// 7
    	{track: 8, artist: "Vanessa Da Mata", album: "Good Luck ft Ben Harper", title:"Boa Sorte", src: "./mp3/boasorte.mp3", imgsrc: "./img/boasorte.jpg" }, // 8
    	{track: 9, artist: "Rihanna", album: "Good Girl Gone Bad", title:"Rehab", src: "./mp3/rehab.mp3", imgsrc: "./img/rehab.jpg" },// 9
    	{track: 10, artist: "Oscar Chavez", album: "Desde Mexico Para Siempre Che", title:"Hasta Siempre Comandante Che Guevara", src: "./mp3/hastasiemprecomandantecheguevara.mp3", imgsrc: "./img/hastasiemprecomandantecheguevara.jpg" }, // 10
    	];

      console.log(PlayList);
  /*---------------- PARTIE A RECRIRE SELON TERME DOC PRECEDENT -----------------*/
        // recuperation de UL
        var mediaPlayer = document.getElementById('controlers');
        piste = document.getElementById('btns');

  /*---------------- ECRIRE TEXTE ----------------*/
        // écrire du texte dans les différents balbutiements
        function setText(el,text) {
          el.innerHTML = text;
        };

  /*---------------- BTN  PRECECDENT ----------------*/

        // création de Next
        var prevBtn = document.createElement('button');
        prevBtn.type = 'button';
        mediaPlayer.appendChild(prevBtn);
        setText(prevBtn, "<");

        prevBtn.addEventListener("click", prev);

        function prev(){
          var trackPlayed = document.getElementById('audioOscilo').getAttribute('src')
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
                document.getElementById('audioOscilo').setAttribute('src', prevTrack);

                // remplacer les valeur
                document.getElementById('titre').innerHTML= PlayList[PlayList.length-1].title;
                document.getElementById('artiste').innerHTML=PlayList[PlayList.length-1].artist;
                document.getElementById('album').innerHTML=PlayList[PlayList.length-1].album;
                // document.getElementById('jacketsrc').setAttribute('src', PlayList[PlayList.length-1].imgsrc);

              }
              // Si la piste est différent à l'index[0] (Needed me)
              else if ((trackPlayed != PlayList[0].src)){
                prevTrack = PlayList[i-1].src;

                console.log(prevTrack);
                console.log(i, "autre l'index de ", prevTrack);
                document.getElementById('audioOscilo').setAttribute('src', prevTrack);

                // remplacer les valeur
                document.getElementById('titre').innerHTML= PlayList[i-1].title;
                document.getElementById('artiste').innerHTML= PlayList[i-1].artist;
                document.getElementById('album').innerHTML= PlayList[i-1].album;
                console.log(PlayList[i-1].title);
                // document.getElementById('jacketsrc').setAttribute('src', PlayList[i-1].imgsrc);
              }
              console.log(i, " et track prev =", prevTrack);
              break;
            };
          };

        };
  /*---------------- PLAY & PAUSE BTN  ----------------*/
        var playBtn = document.createElement('button');
        playBtn.type = 'button';
        mediaPlayer.appendChild(playBtn);
        setText(playBtn, "play");
        // ECOUTEUR DE 'EVENEMENT'
        playBtn.addEventListener("click", player);

        function player() {
          if (playTrack.paused) {
            setText(playBtn,"pause");
            playTrack.play();
          } else {
            setText(playBtn,"play");
            playTrack.pause();
          };
        };
  /*---------------- SON / MUET /---------------*/
        var muteBtn = document.createElement('button');
        muteBtn.type = 'button';
        mediaPlayer.appendChild(muteBtn);
        setText(muteBtn,"mute");
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
        var randomBtn = document.createElement('button');
        randomBtn.type = 'button';
        mediaPlayer.appendChild(randomBtn);
        setText(randomBtn, "random");
        randomBtn.addEventListener("click", randomer);
        function randomer() {
        for (var id = 0; id < PlayList.length; id++) {
          var index = Math.floor(Math.random()*PlayList.length);
          var randomSrc = PlayList[index].src;
          console.log(index, " l'index de ", randomSrc);
        }

        // Remplacer la ressource SRC par nouvelle SRC RANDOM
        document.getElementById('audioOscilo').setAttribute('src', randomSrc);

        // TOFIXED
        // mettre lancer une function qui appel le "setAttribute"
        // SUPPRIMER du tableauP "PlayList" la 'randomSrc'
        //  a revoir >> var del = PlayList.splice(0,1, randomSrc);
        // title >> title
        document.getElementById('titre').innerHTML= PlayList[index].title;
        document.getElementById('artiste').innerHTML= PlayList[index].artist;
        document.getElementById('album').innerHTML= PlayList[index].album;
        // document.getElementById('jacketsrc').setAttribute('src', PlayList[index].imgsrc);
        console.log(PlayList[index].title, "\n------");
      };

        // création de Next
        var nextBtn = document.createElement('button');
        nextBtn.type = 'button';
        mediaPlayer.appendChild(nextBtn);
        setText(nextBtn, ">");
        nextBtn.addEventListener("click", next);
        function next(){
          var trackPlayed = document.getElementById('audioOscilo').getAttribute('src');
          console.log(trackPlayed);

          var nextTrack;
          // comparaison de l'Attribut HTML et de la propriété du tableau
          for (var i = 0; i < PlayList.length; i++) {
          console.log("track joué = ",trackPlayed, PlayList[i].src);
          if(trackPlayed == PlayList[i].src){
            // Si la piste en Lecture est 0 (Needed me) on retourne la dernier piste de la PlayList (Jonny)
            if (trackPlayed == PlayList[PlayList.length-1].src){
              nextTrack = PlayList[0].src;
              document.getElementById('audioOscilo').setAttribute('src', nextTrack);

              // remplacer les valeur
              document.getElementById('titre').innerHTML= PlayList[0].title;
              document.getElementById('artiste').innerHTML=PlayList[0].artist;
              document.getElementById('album').innerHTML=PlayList[0].album;
              console.log(PlayList[0].title);
              // document.getElementById('jacketsrc').setAttribute('src', PlayList[0].imgsrc);

            }
            // Si la piste est différent à l'index[0] (Needed me)
            else if ((trackPlayed != PlayList[PlayList.length-1].src)){
              nextTrack = PlayList[i+1].src;

              document.getElementById('audioOscilo').setAttribute('src', nextTrack);

              // remplacer les valeur
              document.getElementById('titre').innerHTML= PlayList[i+1].title;
              document.getElementById('artiste').innerHTML= PlayList[i+1].artist;
              document.getElementById('album').innerHTML= PlayList[i+1].album;
              console.log(PlayList[i+1].title);
              // document.getElementById('jacketsrc').setAttribute('src', PlayList[i+1].imgsrc);
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
        function setAttributes(el, attrs) {
          for(var key in attrs){
            el.setAttribute(key, attrs[key]);
          };
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
