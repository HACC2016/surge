window.onload = function() {
  // Video variables.
  var video = document.querySelector('#video');
  var source = document.querySelector('#video-source');
  var tempNumber = 0;
  var tempBar = document.getElementById('temperature');

  // Create button and append to div below video.
  function addButton(value, id) {
    var answer = document.createElement("button");
    answer.setAttribute("id", id);
    var value = document.createTextNode(value);
    answer.appendChild(value);
    document.getElementById('question').appendChild(answer);
  }

  // Removes an element from the document.
  function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
    }

  // On end of 1st video, append buttons to div.
  video.addEventListener("ended", function(e) {

    addButton("What?", "answerNumber1");
    addButton("Oh Sup Brah!", "answerNumber2");

    // On click of the answer, route to another video and remove the buttons.
    answerNumber1.onclick = function() {
      tempNumber = 1;
      source.setAttribute('src', 'assets/videos/what.mp4');
      video.load();
      video.play();

      removeElement('answerNumber1');
      removeElement('answerNumber2');

      video.addEventListener("ended", function(e) {
        addButton("The End", "answerNumber3");

        removeElement('answerNumber1');
        removeElement('answerNumber2');
      })
      }

    answerNumber2.onclick = function() {
      tempNumber = 2;
      source.setAttribute('src', 'assets/videos/ohsupbrah.mp4');
      video.load();
      video.play();

      removeElement('answerNumber1');
      removeElement('answerNumber2');

      video.addEventListener("ended", function(e) {
        addButton("Shootz!", "answerNumber4");

        removeElement('answerNumber1');
        removeElement('answerNumber2');

        answerNumber4.onclick = function() {
          tempNumber = 3;
          source.setAttribute('src', 'assets/videos/shootz.mp4');
          video.load();
          video.play();
          removeElement('answerNumber4');

          video.addEventListener("ended", function(e) {
            removeElement('answerNumber4');
            addButton("The End", "answerNumber5");
          })

        }
      })
    }

  }, false);

  if (tempNumber === 0) {
    tempBar.style.color = "black";
    console.log("black hello");
  } else if (tempNumber === 2) {
    tempBar.style.color = "yellow";
    console.log("yellow hello");
  } else if (tempNumber === 3) {
    tempBar.style.color = "blue";
    console.log("blue hello");
  }

  video.load();
  video.play();
}
