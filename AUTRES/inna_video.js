


function randomVideos(){
	var tagVideo = document.getElementsByTagName('video'); // autre (button / valeurs)
	for (var v = 0; v < tableauVideos.length, v < tagVideo.length, v++) {
		var videoRandom = Math.floor(Math.random()*PlayList.length);
		var srcRandom = tableauVideos[videoRandom].src;
		console.log('src random', srcRandom);
		tagVideo[v].setAttribute('src', srcRandom); // ou numéro ID/TRACK etc...
		delete srcRandom; // suppression définitive
		console.log('supp src Random', tableauVideos[v], srcRandom);
	};
};

function spliceVideo(){
	// J'ai 3 VIDEOS:
	// .riri / .beyonce / .bjork
	// lorsque jouvre la page un randomer choisi une video et stock les videos restantes(1 & 3)
	// lorsque je clique sur le btn 'voir' un autre choix aléatoire se fait et secletionne une video
	// et l'affiche à l'écran.
	
}

