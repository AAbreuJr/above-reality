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
  videoPanel.innerHTML = '<iframe width="900" height="500" src="https://www.youtube.com/embed/rNO_FSW5XmA" frameborder="0" allowfullscreen></iframe>';
  setTimeout(resetVid, 8500);
}

PrevVid = function(){
  var videoPanel = document.getElementById('vid');
  videoPanel.innerHTML = '<iframe width="900" height="500" src="https://www.youtube.com/embed/ivkyF5GuYto" frameborder="0" allowfullscreen></iframe>';
  setTimeout(resetVid, 8500);
}
