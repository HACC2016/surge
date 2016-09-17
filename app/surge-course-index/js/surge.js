window.onload = function() {
  var header = document.getElementById('header');
  var title = document.getElementById('title');
  var vid = document.getElementById('home-video');

  function testScroll(ev){
      if(window.pageYOffset>400) {
        title.innerHTML = "Helloooooo";
  }
  window.onscroll = testScroll();

  vid.onended = function() {
    title.innerHTML = "HIHIHIHIHI";
  }
}
