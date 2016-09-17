window.onload = function() {
  var video = document.getElementById('video');

  video.addEventListener("ended", function(e) {
    console.log("ended fired!");
  }, false);

  video.addEventListener("loadedmetadata", function() {
    video.currentTime = video.duration - 4;
  }, false);

  video.load();
  video.play();
}
