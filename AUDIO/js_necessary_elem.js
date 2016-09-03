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
var tagAudio = document.getElementsByTagName('audio');
var tagImg = document.getElementsByTagName('img');
// écrire du texte dans les différents balbutiements
  function setText(el,text) {
    el.innerHTML = text;
  }

// PISTES DE MA PLAYLST == et suppression de l'index
for (var p = 0; p < PlayList.length, p < tagAudio.length, p < tagImg.length; p++) {
	// parourir le tableau de piste
	var pisteObj = PlayList[p]; // objet complet
	var piste = PlayList[p].src; // source
	var image = PlayList[p].imgsrc;
	var hOp = PlayList[p].hasOwnProperty('album'); // FALSE pour SENILE vérifie l'existence d'une propriété
	console.log("var piste => numero ", p, piste, "\npiste Objet =>",pisteObj, hOp);
	

	/// remplacer la piste
	//tagImg[p].setAttribute('src', image);
	//delete PlayList[p].imgsrc;
	//console.log("TAG image",pisteObj);
	var pisteRandom = Math.floor(Math.random()*PlayList.length);
	var srcRandom = PlayList[pisteRandom].src;
	console.log('src random', srcRandom);
	delete srcRancom;
	console.log('supp src Random', PlayList[p], srcRandom);


// METTRE LA SUPPRESSION DE TAG AUDIO A LFIN DU CODE POUR NE PAS AVOIR
// DE SOUCIS AUNIVEAU DE LA SUITE DU CODE;
	tagAudio[p].setAttribute('src', piste);
	//delete PlayList[p].src;
	//console.log("TAG audio",pisteObj);




	//console.log("piste supprimée: ", PlayList.splice(0,1, piste));
	console.log("piste ", p,"----", piste, image ,"----------------- Loop ", p+1);
	document.getElementsByTagName('li');
};
/*
// PASSER à une autre video:
// Quand la piste est finie (piste.ended)
// je charge l'autre piste piste(i+1).load() 

// RECUPERER UN CONTAINER-PLAYER PAR ID
var containerPlayerId = document.getElementById('p-1');
// RECUPERER UN CONTAINER-PLAYER PAR class
var containerPlayerClass = document.getElementsByClassName('p-1')[0];

// recuperer tous les propriété du tableau d'objet
console.log("\nPROPRIETE DU TABLEAU D'OBJET PISTE");
//METHOD #1 avec le 'for in  '
//var propTab = []
// for(var prop in pisteObj){
// 	console.log("propriété ==>", prop);
// };
	
	pisteOwnProp= Object.getOwnPropertyNames(pisteObj);
	console.log(pisteOwnProp);

for (var cpt = 0; cpt < pisteOwnProp.length; cpt++) {
	pisteObj =PlayList[cpt];
	console.log(pisteObj);

	pisteOwnProp= Object.getOwnPropertyNames(pisteObj);
	prop = pisteOwnProp[cpt];
	console.log("tab prop =", prop);
	// récupérer le TagName HTML qui correspond à la propriété Playliste

	//console.log(tagLi);
	for (var i = 0; i < PlayList.length - 1, i < tagAudio.length; i++) {
		pisteObj=  PlayList[i];
		var tagLi = document.getElementsByClassName(prop)[i];
		console.log('RECUPERER li[i]', tagLi);
		classe = tagLi.getAttribute('class');





		console.log("valeur de la prop ", prop , " et de class '", classe, "' est'", pisteObj[prop]);
		// récupérer la valeur de l'attribut du LI
		

		// ne m
		// testarche pas >> classe.innerHtml = pisteObj[prop];

		if (prop == classe ) {
			tagLi.innerHtml = pisteObj[prop];
			setText(document.getElementsByClassName(prop), pisteObj[prop]);
		// comparer la valeur de l'attribut class avec la propriété de l'obj


			setText(tagLi, pisteObj[prop]);
			console.log('ENTRE',pisteObj[prop]);
			tagLi[i];

		delete pisteObj[prop];
		console.log(pisteObj);

		};
	};
	// propTab.push(prop);
	//console.log(propTab);
}
*/
/*
var classTab =  propTab;
console.log("classTab =>",classTab);

var track = document.getElementsByClassName(prop);
console.log("CE QUE JE DOIS REMPLACER POUR CE TABLEAU",'\n', '=> attribut SRC:', track);
// pour comparer il faut vérifier l'existance d'un des attribut
//	var hOp = PlayList[p].hasOwnProperty('PROPERTY');
// comparer la classe avec un element html
*/