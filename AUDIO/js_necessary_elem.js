// >> RECUPERER LA VALEUR DU LECTEUR DEFAULT DABORD
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

console.log("\n#1 INSERER PISTE UN PAR UN DANS CHAQUE PLAYER");
//parcourr la playlist et insérer petit à petit
var tagAudio = document.getElementsByTagName('audio');
var tagImg = document.getElementsByTagName('img');

// écrire du texte dans les différents balbutiements
var text;
function setText(el,text){
	el.innerHTML = text;
}
// PISTES DE MA PLAYLST == et suppression de l'index
insertProp();
function insertProp(){
	for (var p = 0; p < PlayList.length, p < tagAudio.length, p < tagImg.length; p++) {
	// parourir le tableau de piste
	var pisteObj = PlayList[p]; // objet complet
	var piste = PlayList[p].src; // source
	var image = PlayList[p].imgsrc;
	var hOp = PlayList[p].hasOwnProperty('album'); // FALSE pour SENILE vérifie l'existence d'une propriété
	//console.log("var piste => numero ", p, piste, "\npiste Objet =>",pisteObj, hOp);

	/// remplacer l'image de la piste
	/// /!\ si l'on veut une playliste alléatoire mettre le code de pist_random.js
	console.log("\n#A INSERER LA JACKET DE L'ALBUM :", image);
	tagImg[p].setAttribute('src', image);
	delete PlayList[p].imgsrc;
	console.log("TAG IMAGE après supression OK :",pisteObj);

	console.log("\n#B INSERER LA SOURCE DE L'AUDIO", piste);
	tagAudio[p].setAttribute('src', piste);
	delete PlayList[p].src;
	console.log("TAG AUDIO après suppression OK",pisteObj);

	// recuperer tous les propriété du tableau d'objet
	console.log("\n# PROPRIETE DU TABLEAU D'OBJET PISTE");
	var props ="";
	for (prop in pisteObj){
		props += prop +  " => " + pisteObj[prop] + "\n";
		console.log(props);
		var tagLiClass = document.getElementsByClassName(prop)[p];
		if (tagLiClass !== undefined|| tagLiClass !== null ) {
			console.log('RECUPERER la classe de LI équivalent à la propriété', tagLiClass);
			classe = tagLiClass.getAttribute('class');
			console.log(classe, " est un ",typeof(classe)) ;
			setText(tagLiClass, pisteObj[prop]);
		};
		console.log("piste pisteObj avant ended", pisteObj, tagAudio[p]);

// ON PROGRESS
		var audioEnded = tagAudio[p];
		var audioNext = tagAudio[p] + p;

		console.log(audioNext)
		audioEnded.addEventListener("ended", function(){
			audioEnded.ended;
			
			console.log("ended", audioNext);
			audioNext;
	});
	console.log("piste ", p,"----", piste, image ,"----------------- Loop ", p+1);
	document.getElementsByTagName('li');
	};
};
};

var controlers = document.getElementsByClassName('btns');
function audioPlay() {
		// création de Next
	var playBtn = document.createElement('button');
		playBtn.type = 'button';
		playBtn.class = 'btn';
		controlers.appendChild(playBtn);
		setText(playBtn, ">");
       console.log(tagAudio);
       var button = document.getElementById("play");
       if (tagAudio.paused) {
         tagAudio.play();
          button.textContent = "||";
       } else {
         tagAudio.pause();
          button.textContent = ">";
       }
    }
// PASSER à une autre video:
// Quand la piste est finie (piste.ended)
// je charge l'autre piste piste(i+1).load()

tagAudio.onended = function(){ alert('yes'); }


// RECUPERER UN CONTAINER-PLAYER PAR ID
var containerPlayerId = document.getElementById('p-1');
// RECUPERER UN CONTAINER-PLAYER PAR class
var containerPlayerClass = document.getElementsByClassName('p-1')[0];
