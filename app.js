function stop() {
    document.getElementById("stoplight").style.backgroundColor = "#cf1124";
    document.getElementById("readylight").style.backgroundColor = "#4b5069";
    document.getElementById("golight").style.backgroundColor = "#4b5069";
    document.getElementById("stopbtn").style.backgroundColor = "#cf1124";
    document.getElementById("readybtn").style.backgroundColor = "#4b5069";
    document.getElementById("gobtn").style.backgroundColor = "#4b5069";
  }


  function ready() {
    document.getElementById("readylight").style.backgroundColor = "#f7c948";
    document.getElementById("golight").style.backgroundColor = "#4b5069";
    document.getElementById("readylight").style.backgroundColor = "#4b5069";
    document.getElementById("readybtn").style.backgroundColor = "#f7c948";
    document.getElementById("gobtn").style.backgroundColor = "#4b5069";
    document.getElementById("stopbtn").style.backgroundColor = "#4b5069";
  }


  function go() {
    document.getElementById("golight").style.backgroundColor = "#199473";
    document.getElementById("readylight").style.backgroundColor = "#4b5069";
    document.getElementById("stoplight").style.backgroundColor = "#4b5069";
    document.getElementById("gobtn").style.backgroundColor = "#199473";
    document.getElementById("stopbtn").style.backgroundColor = "#4b5069";
    document.getElementById("readybtn").style.backgroundColor = "#4b5069";
  }
