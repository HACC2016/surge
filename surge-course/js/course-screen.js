window.onload = function() {
  var video = document.getElementsByTagName('video')[0];

  video.onended = function(e) {
    alert("hi");
  }
}
