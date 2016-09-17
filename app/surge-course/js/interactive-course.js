window.onload = function() {
  var x = 'What?';
  var y = 'Good! What about you bruddah?';
  var y2 = 'Shootz!';

  var video = document.querySelector('#video');
  var source = document.querySelector('#video-source');

  var answer1 = document.createElement("button");
  answer1.setAttribute("id", "answerNumber1");
  var answer2 = document.createElement("button");
  answer2.setAttribute("id", "answerNumber2");
  var answer3 = document.createElement("button");
  answer3.setAttribute("id", "answerNumber3");
  var answer4 = document.createElement("button");
  answer4.setAttribute("id", "answerNumber4");
  var value1 = document.createTextNode(x);
  var value2 = document.createTextNode(y);
  var value3 = document.createTextNode(y2);
  var value4 = document.createTextNode("The End");

  // Removes an element from the document
  function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
    }

  video.addEventListener("ended", function(e) {

    console.log("ended fired!");
    answer1.appendChild(value1);
    document.getElementById('question').appendChild(answer1);

    answer2.appendChild(value2);
    document.getElementById('question').appendChild(answer2);

    document.querySelector("answerNumber1");
    document.querySelector("answerNumber2");

    answerNumber1.onclick = function() {
      console.log("hello");
      source.setAttribute('src', 'video1.mp4');
      video.load();
      video.play();

      removeElement('answerNumber1');
      removeElement('answerNumber2');

      video.addEventListener("ended", function(e) {
        console.log("ended fired for scenario1!");
        answer3.appendChild(value4);
        document.getElementById('question').appendChild(answer3);
        removeElement('answerNumber1');
        removeElement('answerNumber2');
      })
      }

  }, false);

  video.load();
  video.play();
}
