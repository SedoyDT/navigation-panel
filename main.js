// Переключаель между добавлением и удалением "быстро реагирующего" класса к menu, когда пользователь нажмет на значок 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }