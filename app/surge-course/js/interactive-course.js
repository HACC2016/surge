window.onload = function() {
  var video = document.getElementById('video');


  video.addEventListener("ended", function(e) {
    console.log("ended fired!");
    var answer = document.createElement("button");
    var value = document.createTextNode("What?");
    answer.appendChild(value);
    document.getElementById('question').appendChild(answer);
  }, false);

  video.addEventListener("loadedmetadata", function() {
    video.currentTime = video.duration - 4;
  }, false);

  video.load();
  video.play();
}
