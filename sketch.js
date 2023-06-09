(function () {    
    var circle = document.getElementById('ProgressBar');
    var text = document.getElementById('percent_val');
    var angle = 0;
    var percent = 70 * 5.5;
    
    window.timer = window.setInterval(function () {
      circle.setAttribute("stroke-dasharray", angle + ", 1000");
      text.innerHTML = parseInt(angle/5.5);
      
      if (angle > percent) {
        window.clearInterval(window.timer);
      }
      angle += 10;
    }.bind(this), 30);   
  })()
  

const NavPage = document.getElementsByClassName("navCardWrapper");
const NavBtn = document.getElementsByClassName("popUpCardNavButton");

NavBtn[0].onclick = function () {
  NavPage[0].dataset.status="Page1";
};

NavBtn[1].onclick = function () {
  NavPage[0].dataset.status="Page2";
};

NavBtn[2].onclick = function () {
  NavPage[0].dataset.status="Page3";
};