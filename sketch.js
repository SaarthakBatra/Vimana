(function () {    
    var circle1 = document.getElementById('ProgressBar');
    var text1 = document.getElementById('percent_val');
    var angle1 = 0;
    var percent1 = 60*4.7
    
    window.timer1 = window.setInterval(function () {
      circle1.setAttribute("stroke-dasharray", angle1 + ", 20000");
      text1.innerHTML = parseInt(angle1/471*100);
      
      if (angle1 >= percent1) {
        window.clearInterval(window.timer1);
      }
      angle1 += 7;
    }.bind(this), 30);   
  })()
  