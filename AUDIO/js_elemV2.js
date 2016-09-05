
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
var PlayList = [
	{track: 1, artist: "Rihanna", album: "Anti", title:"Needed Me", src: "./mp3/neededme.mp3", imgsrc: "./img/neededme.jpg" }, // 0
	{track: 2, artist: "Young Money", /*album: "Rise Of An Empire",*/ title:"Senile", src: "./mp3/senile.mp3", imgsrc: "./img/senile.jpg" } , // 1
	{track: 3, artist: "Rihanna", album: "Good Girl Gone Bad", title:"Rehab", src: "./mp3/rehab.mp3", imgsrc: "./img/rehab.jpg" }, // 2
	{track: 4, artist: "Bjork", album: "Homogenic", title:"Joga", src: "./mp3/joga.mp3", imgsrc: "./img/joga.jpg" }, // 3
	{track: 5, artist: "Yemi Alade", album: "King of Queens", title:"Johnny", src: "./mp3/johnny.mp3", imgsrc: "./img/johnny.jpg" },// 4
];

console.log("\nINSERER PISTE UN PAR UN DANS CHAQUE PLAYER");
//parcourr la playlist et insérer petit à petit
var tagAudio = document.getElementsByTagName('audio') ;
// PISTES DE MA PLAYLST ==
// TOFIXED bug sur la 51 lorsque la ligne doit bouclé
//	>> on a défini un cpt  < LaLongueur.deTagAudio ce qui n'est pas possible car
// il faut compter les 5pistes.
for (var p = 0; p < PlayList.length, p < tagAudio.length; p++) {

	// parourir le tableau de piste
	var pisteObj = PlayList[p]; // objet complet
	var piste = PlayList[p].src; // source
	var hOp = PlayList[p].hasOwnProperty('album'); // FALSE pour SENILE vérifie l'existence d'une propriété
	console.log(1,"var piste ==> numero ", p, piste, "\npiste Objet =>",pisteObj, hOp);
	// remplacer la piste
	//	for(var prop in pisteObj){
		for (var cpt = 0; cpt < pisteObj.length; cpt++) {
			pisteObj = PlayList[cpt];

			var pisteOwnProp= Object.getOwnPropertyNames(pisteObj);
			console.log(2,"propriété ==>", prop, pisteObj[prop]);
			// récupérer la valeur de l'attribut du LI
			var prLi =  prop;
			var tagLi = document.getElementsByClassName(prLi);
			console.log(3,"balise ==>",tagLi(prLi));
			var classe =  tagLi[p];
			var getClasse = classe.getAttribute("class");
			console.log(4, getClasse);
			// comparer la valeur de l'attribut class avec la propriété de l'obj
			if (prop == getClasse && prop) {
				console.log(5,'yes propriété == classe');
				console.log("==> valeur de la prop ", prop , " et de  ", getClasse, 'est', pisteObj[prop]);
			}
			console.log("tab prop =", prop , 'fuck you---------------');
			// TO FIXED
			// via les balise li je set la valeur contennu dans prop
		}

	tagAudio[p].setAttribute('src', piste);

	//console.log("piste supprimée: ", PlayList.splice(0,1, piste));
	console.log("piste ", p,"----", piste ,"----------------- Loop ", p+1);

}	/*

	// PASSER à une autre video:
	// Quand la piste est finie (piste.ended)
	// je charge l'autre piste piste(i+1).load()



	// récupérer le TagName HTML qui correspond à la propriété Playliste
	console.log(prop)
	var tagLi = document.getElementsByClassName(prop);
	console.log(tagLi);
	console.log(PlayList[p]);
	// récupérer la valeur de l'attribut du LI
	var classe =  tagLi[p];
	var getClasse = classe.getAttribute('class');
	console.log(getClasse);
	// comparer la valeur de l'attribut class avec la propriété de l'obj
	if (prop == getClasse && prop) {
		console.log('yes cette propriété et cette classe correspondent');
		console.log("valeur de la prop ", prop , " et de  ", getClasse, 'est', pisteObj[prop]);
	}
	console.log("tab prop =", prop);
	// propTab.push(prop);
	//console.log(propTab);
};

//parcourir la playlist et insérer petit à petit
// for (var r = 0 ; r < tagAudio.length ; r++){
// 	var replace = PlayList[r].src;
// // SUPPRIMER du tableauP "PlayList" la 'piste'
// console.log(replace);
// tagAudio[r].setAttribute('src', replace);
// console.log(PlayList.splice(0,1, replace));
// console.log("piste ", r,"----", replace ,"----------------- Loop ", r+1);
// //replace.eventListner('onplay', ftOnPlay)
// };

// RECUPERER UN CONTAINER-PLAYER PAR ID
var containerPlayerId = document.getElementById('p-1');
// RECUPERER UN CONTAINER-PLAYER PAR class
var containerPlayerClass = document.getElementsByClassName('p-1')[0];

// recuperer tous les propriété du tableau d'objet

console.log("\nPROPRIETE DU TABLEAU D'OBJET PISTE");
// pisteObj =  PlayList[0];
pisteObjProp = PlayList;
//var propTab = []
pisteOwnProp= Object.getOwnPropertyNames(pisteObj);
console.log(pisteOwnProp);
for (var cpt = 0; cpt < pisteObj.length; cpt++) {
pisteObj =PlayList[cpt];
console.log(pisteObj);

var classTab =  propTab;
console.log("classTab =>",classTab);

var track = document.getElementsByClassName(prop);
console.log("CE QUE JE DOIS REMPLACER POUR CE TABLEAU",'\n', '=> attribut SRC:', track);
// pour comparer il faut vérifier l'existance d'un des attribut
//	var hOp = PlayList[p].hasOwnProperty('PROPERTY');
// comparer la classe avec un element html
*/
