window.onload = function() {
  var header = document.getElementById('header');
  var title = document.getElementById('title');

  function testScroll(ev){
      if(window.pageYOffset>400) {
        title.innerHTML = "Helloooooo";
  }
  window.onscroll = testScroll();
}
