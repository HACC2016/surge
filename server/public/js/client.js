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
<<<<<<< HEAD
      tempBar.style.background = "#0A1C1F"
      source.setAttribute('src', 'assets/videos/what.mp4');
=======
      source.setAttribute('src', 'https://dl.dropboxusercontent.com/content_link/TZn9kvMFOCsrRvQzvbZkvRViHdPzyYmHNGkbxq4k0clQT0LwPcFOpBiwMfwenf9E/file');
>>>>>>> 5e20a33f60d63bd1eb0e4d6501c4f863a8d807a7
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
<<<<<<< HEAD
      tempBar.style.background = "#255B6F"
      source.setAttribute('src', 'assets/videos/ohsupbrah.mp4');
=======
      source.setAttribute('src', 'https://dl.dropboxusercontent.com/content_link/eDr2a5LY9HEi9MtaJtsLlrfdkmHfJMY7vTNG840DAy9n6AtOvIt3PtvjUyvgaEIR/file');
>>>>>>> 5e20a33f60d63bd1eb0e4d6501c4f863a8d807a7
      video.load();
      video.play();

      removeElement('answerNumber1');
      removeElement('answerNumber2');

      video.addEventListener("ended", function(e) {
        addButton("Shootz!", "answerNumber4");

        removeElement('answerNumber1');
        removeElement('answerNumber2');

        answerNumber4.onclick = function() {
<<<<<<< HEAD
          tempBar.style.background = "#39AAAC"
          source.setAttribute('src', 'assets/videos/shootz.mp4');
=======
          source.setAttribute('src', 'https://dl.dropboxusercontent.com/content_link/m2Z9tMUXNbcxr3XW42Ggc3MXJQ0vMSiymw0KooQ05RRrmXbF7bRvezCXXbZTQUEA/file');
>>>>>>> 5e20a33f60d63bd1eb0e4d6501c4f863a8d807a7
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

  video.load();
  video.play();
}
