"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  }
});
console.log('Salut');
;
var video = document.getElementById('video');
var videoBtn = document.getElementById('videoBtn');
var play = false;

function playVideo() {
  if (!play) {
    video.play();
    videoBtn.classList.add('isPlaying');
  } else {
    video.pause();
    videoBtn.classList.remove('isPlaying');
  }

  play = !play;
}

video.addEventListener('ended', function () {
  play = false;
  videoBtn.classList.remove('isPlaying');
});
videoBtn.addEventListener('click', playVideo);
;