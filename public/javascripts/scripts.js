var width = 20;
var id = null;

function markComplete() {
  if (width == 100) {
      return;
  }
var elem = document.getElementById("myBar");
  if (id) {
      clearInterval(id);
  }
    id = setInterval(frame, 33);

function frame() {
    width ++;
    elem.style.width = width + '%';
    elem.innerHTML = width * 1 + '%';

    if (width % 50 == 0) {
      clearInterval(id);
    }
  }
}

PlayVid = function() {
    //get the Video div and play new video on button click
    var videoPanel = document.getElementById('vid');
    videoPanel.innerHTML = '<iframe width="900" height="500" src="//www.youtube.com/embed/ldT8qxWh07Y?autoplay=1&start=17" frameborder="0" allowfullscreen></iframe>';
    setTimeout(resetVid, 8500);
}

PrevVid = function(){
    var videoPanel = document.getElementById('vid');
    videoPanel.innerHTML = '<iframe width="900" height="500" src="/videos/introduction.mp4" frameborder="0" allowfullscreen></iframe>';
    setTimeout(resetVid, 8500);
}
