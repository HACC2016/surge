window.onload = function() {
  var vid = document.getElementById("video").addEventListener('ended', function(){
    console.log("Video has ended!");
  }, false);
}
