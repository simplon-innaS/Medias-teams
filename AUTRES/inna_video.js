var tagVideo = documet.getElementsByTagName('video');

for (var v = 0; v < tableauVideos.length, v < tagVideo.length, v++) {
	var videoRandom = Math.floor(Math.random()*PlayList.length);
	var srcRandom = tableauVideos[videoRandom].src;
	console.log('src random', srcRandom);
	delete srcRandom;
	console.log('supp src Random', tableauVideos[v], srcRandom);
}