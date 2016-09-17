window.onload = function() {
  var x = 'What?';
  var y = 'Good! What about you bruddah?';
  var video = document.getElementById('video');
  var answer1 = document.createElement("button");
  var answer2 = document.createElement("button");
  var value1 = document.createTextNode(x);
  var value2 = document.createTextNode(y);

  video.addEventListener("ended", function(e) {
    console.log("ended fired!");
    answer1.appendChild(value1);
    document.getElementById('question').appendChild(answer1);

    answer2.appendChild(value2);
    document.getElementById('question').appendChild(answer2);
  }, false);

  video.addEventListener("loadedmetadata", function() {
    video.currentTime = video.duration - 4;
  }, false);

  video.load();
  video.play();
}
