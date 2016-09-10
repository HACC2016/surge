window.onload = function() {
  var vid = document.getElementById("video");

  vid.addEventListener('ended', function() {
    alert("The video has ended.");
  }) 
  }
}
