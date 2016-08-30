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
for (var p = 0; p < PlayList.length, p < tagAudio.length; p++) {
	// parourir le tableau de piste
	var pisteObj = PlayList[p]; // objet complet
	var piste = PlayList[p].src; // source
	var hOp = PlayList[p].hasOwnProperty('album'); // FALSE pour SENILE vérifie l'existence d'une propriété
	console.log("var piste => numero ", p, piste, "\npiste Objet =>",pisteObj, hOp);
	//	for (var cpt = 0; cpt < pisteObj.length; cpt++) {
	//		pisteObj = PlayList[cpt];
	var pisteOwnProp= Object.getOwnPropertyNames(pisteObj);
	for (var i = 0; i < pisteOwnProp.length; i++) {
		var prop = pisteOwnProp[i];
		console.log(pisteOwnProp[i]);

	}
	//var li = document.getElementsByTagName('li');
	//console.log(li);
	/*for (var i = 0; i < pisteObj.length; i++) {
	classe = getElementsByClassName(pisteOwnProp[i]);
	console.log(classe);

.li
}*/
for(var classe in pisteObj){
	var values = pisteObj[classe];
	console.log("classe ==>", classe, values);
	if (classe == prop) {
		console.log("yes");
		var tag = document.getElementsByClassName(classe);
		console.log(tag);
	}

}
//	var classe = document.getElementsByClassName(prop);
//		console.log(classe);

//	for(i = 0; i < pisteObj.length, i < classe.length; i++){
//		console.log("class ==>", classe);
//		classe[i].innerHTML = value;
//	}



tagAudio[p].setAttribute('src', piste);

//console.log("piste supprimée: ", PlayList.splice(0,1, piste));
console.log("piste ", p,"----", piste ,"----------------- Loop ", p+1);

};


// RECUPERER UN CONTAINER-PLAYER PAR ID
var containerPlayerId = document.getElementById('p-1');
// RECUPERER UN CONTAINER-PLAYER PAR class
var containerPlayerClass = document.getElementsByClassName('p-1')[0];



/*
// RECUPERER UNE CLASS DANS UN CONTAINER-PLAYER
//Sinon, puisqu'il y a plusieurs éléments (getElementsByClassName), un Array est renvoyé :
//il faut donc lui spécifier un indice entre crochet :
//var haut_gauche = document.getElementsByClassName("haut_gauche")[0];
var track = document.getElementsByClassName('track')[0];
var title = document.getElementsByClassName('title')[0];
var album = document.getElementsByClassName('album')[0];
var artist = document.getElementsByClassName('artist')[0];
var controlers = document.getElementsByClassName('controlers')[0].getAttribute('src');

//Ensuite, il faut passer par la méthode setAttribute() pour créer un attribut
//(dans ce cas, c'est l'attribut class).
// haut_gauche.setAttribute('class', 'haut_gauche');
// haut_gauche.setAttribute('className', 'haut_gauche'); // pour IE
*/

// recuperer tous les propriété du tableau d'objet


// test de l'existence de l'objet + afficher le conbtenu de la prop

for (var i = PlayList[0]; i < PlayList.length; i++) {
	var pisteObj =  i;
	console.log(pisteObj);
	for(var prop in pisteObj){
		console.log("propriété ==>", prop, pisteObj[prop]);
	}
}


/*
console.log("\nPROPRIETE DU TABLEAU D'OBJET PISTE");
// pisteObj =  PlayList[0];
pisteObjProp = PlayList;
//var propTab = []
for(var prop in pisteObj){
console.log("propriété ==>", prop, pisteObj[prop]);
};

pisteOwnProp= Object.getOwnPropertyNames(pisteObj);

console.log(pisteOwnProp);
for (var cpt = 0; cpt < pisteOwnProp.length; cpt++) {
pisteObj =PlayList[cpt];
console.log(pisteObj);
pisteOwnProp= Object.getOwnPropertyNames(pisteObj);
prop = pisteOwnProp[cpt];
console.log("tab prop =", prop);

// récupérer le TagName HTML qui correspond à la propriété Playliste
var tagLi = document.getElementsByClassName(prop);
console.log(tagLi);
for (var i = 0; i < PlayList.length - 1; i++) {
// récupérer la valeur de l'attribut du LI
var classe = tagLi[i].getAttribute('class');
console.log(classe);
// comparer la valeur de l'attribut class avec la propriété de l'obj
if (prop == classe && prop ) {
console.log('yes cette propriété et cette classe correspondent');
console.log("valeur de la prop ", prop , " et de  ", classe, 'est', pisteOwnProp.prop);

};
};
console.log("tab prop =", prop);
// propTab.push(prop);
//console.log(propTab);
}*/
/*
var classTab =  propTab;
console.log("classTab =>",classTab);

var track = document.getElementsByClassName(prop);
console.log("CE QUE JE DOIS REMPLACER POUR CE TABLEAU",'\n', '=> attribut SRC:', track);
// pour comparer il faut vérifier l'existance d'un des attribut
//	var hOp = PlayList[p].hasOwnProperty('PROPERTY');
// comparer la classe avec un element html
*/
