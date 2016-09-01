
/***** STRUCTURE D'UN PLAYER TYPE *******/
// <!-- first player -->
//       <ul class="player-container" id="p-1">
//         <li><img src="./img/neededme.jpg"></li>
//         <li class="title">title </li>
//         <li class="album">album  </li>
//         <li class="artist">artist </li>
//         <!--  <li id="temps">time <span>00:00</span> </li>-->
//         <li class="controlers">
//           <form class="btns" method="get" onsubmit="playRandom(); return false"></form>
//         </li>
//         <!-- player default -->
//         <li class="media_player">
//           <audio class="track" src="./neededme.mp3" type="audio/mpeg" controls></audio>
//         </li>
//       </ul>
// <!-- end of first player -->

// >> RECUPERER LA VALEUR DU LECTEUR DEFAULT DABORD




// tableau des données piste
var PlayLists = [
{track: 1, artist: "Rihanna", album: "Anti", title:"Needed Me", src: "./mp3/neededme.mp3", imgsrc: "./img/neededme.jpg" }, // 0
{track: 2, artist: "Young Money", /*album: "Rise Of An Empire",*/ title:"Senile", src: "./mp3/senile.mp3", imgsrc: "./img/senile.jpg" } , // 1
{track: 3, artist: "Rihanna", album: "Good Girl Gone Bad", title:"Rehab", src: "./mp3/rehab.mp3", imgsrc: "./img/rehab.jpg" }, // 2
{track: 4, artist: "Bjork", album: "Homogenic", title:"Joga", src: "./mp3/joga.mp3", imgsrc: "./img/joga.jpg" }, // 3
{track: 5, artist: "Yemi Alade", album: "King of Queens", title:"Johnny", src: "./mp3/johnny.mp3", imgsrc: "./img/johnny.jpg" },// 4
];

console.log("\nINSERER PISTE UN PAR UN DANS CHAQUE PLAYER");
//parcourr la playlist et insérer petit à petit
var tagAudio = document.getElementsByTagName('audio');
var tagImg = document.getElementsByTagName('img');

// écrire du texte dans les différents balbutiements
  function setText(el,propriete) {
    el.innerHTML = propriete;
  }
// PISTES DE MA PLAYLST ==
for (var p = 0; p < PlayLists.length, p < tagAudio.length, p < tagImg.length; p++) {
	// parourir le tableau de piste
	var pisteObj = PlayLists[p]; // objet complet
	var piste = PlayLists[p].src; // source
	var image = PlayLists[p].imgsrc; // img
	var hOp = PlayLists[p].hasOwnProperty('album'); // FALSE pour SENILE vérifie l'existence d'une propriété
	console.log("var piste => numero ", p, piste, "\npiste Objet =>",pisteObj, hOp);
	/// remplacer la piste
	tagImg[p].setAttribute('src', image);
	//var removedImg = PlayLists.splice(4, 1, image);
//  console.log(removedImg);
  delete image[p];
  console.log("après supp pisteObj= ", pisteObj);
	tagAudio[p].setAttribute('src', piste);
	//var removedAudio = PlayLists.splice(piste, 1);
	//console.log("piste supprimée: ", PlayLists.splice(0,1, piste));
	console.log("piste ", p,"----", piste, image ,"----------------- Loop ", p+1);
};



//parcourir la playlist et insérer petit à petit
for (var r = 0 ; r < tagAudio.length ; r++){
	var replace = PlayLists[r].src;
// SUPPRIMER du tableauP "PlayLists" la 'piste'
console.log(replace);
tagAudio[r].setAttribute('src', replace);
console.log(PlayLists.splice(0,1, replace));
console.log("piste ", r,"----", replace ,"----------------- Loop ", r+1);
//replace.eventListner('onplay', ftOnPlay)
};


// PASSER à une autre video:
// Quand la piste est finie (piste.ended)
// je charge l'autre piste piste(i+1).load()




// RECUPERER UN CONTAINER-PLAYER PAR ID
var containerPlayerId = document.getElementById('p-1');
// RECUPERER UN CONTAINER-PLAYER PAR class
var containerPlayerClass = document.getElementsByClassName('p-1')[0];

// recuperer tous les propriété du tableau d'objet
console.log("\nPROPRIETE DU TABLEAU D'OBJET PISTE");
//var propTab = []
// for(var prop in pisteObj){
// 	console.log("propriété ==>", prop);
// };

	pisteOwnProp= Object.getOwnPropertyNames(pisteObj);
	console.log(pisteOwnProp);
for (var cpt = 0; cpt < pisteOwnProp.length; cpt++) {
	pisteObj =PlayLists[cpt];
	console.log(pisteObj);

	pisteOwnProp= Object.getOwnPropertyNames(pisteObj);
	prop = pisteOwnProp[cpt];
	console.log("tab prop =", prop);

	// récupérer le TagName HTML qui correspond à la propriété Playliste

	//console.log(tagLi);
	for (var i = 0; i < PlayLists.length - 1, i < tagAudio.length; i++) {
		pisteObj=  PlayLists[i];
		var tagLi = document.getElementsByClassName(prop);
    console.log(tagLi, prop);
		console.log('reucpérer li', tagLi.length, PlayLists.length - 1, tagAudio.length);
		classe = tagLi[i].getAttribute('class');
		console.log("valeur de la prop ", prop , " et de class '", classe, "' est'", pisteObj[prop]);
		// récupérer la valeur de l'attribut du LI

		classe.innerHtml = pisteObj[prop];
		// comparer la valeur de l'attribut class avec la propriété de l'obj
		if (prop == classe ) {

			setText(tagLi, pisteObj[prop]);
			console.log('ENTRE',pisteObj[prop]);
			tagLi[i];

		delete pisteObj[prop];
		console.log(pisteObj[prop]);
		};
	};
	// propTab.push(prop);
	//console.log(propTab);
}

/*
var classTab =  propTab;
console.log("classTab =>",classTab);

var track = document.getElementsByClassName(prop);
console.log("CE QUE JE DOIS REMPLACER POUR CE TABLEAU",'\n', '=> attribut SRC:', track);
// pour comparer il faut vérifier l'existance d'un des attribut
//	var hOp = PlayLists[p].hasOwnProperty('PROPERTY');
// comparer la classe avec un element html
*/
