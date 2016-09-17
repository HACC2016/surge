window.onload = function() {
  var x = 'What?';
  var y = 'Good! What about you bruddah?';

  var video = document.querySelector('#video');
  var source = document.querySelector('#video-source');

  var answer1 = document.createElement("button");
  answer1.setAttribute("id", "answerNumber1");
  var answer2 = document.createElement("button");
  answer2.setAttribute("id", "answerNumber2");
  var value1 = document.createTextNode(x);
  var value2 = document.createTextNode(y);

  video.addEventListener("ended", function(e) {
    console.log("ended fired!");
    answer1.appendChild(value1);
    document.getElementById('question').appendChild(answer1);

    answer2.appendChild(value2);
    document.getElementById('question').appendChild(answer2);

    document.querySelector("answerNumber1");

    answerNumber1.onclick = function() {
      console.log("hello");
      source.setAttribute('src', 'video1.mp4');
      video.load();
      video.play();
    }

  }, false);

  video.load();
  video.play();
}
