
// Colors = [0% pink, 20% pink, 40% Pink, 60% pink, 80% pink 100% pink]
//
//
// Var current cell = 100% transparent;
//
// Onclick  {
// current cell = current  opacity +20% opacity +1
//
// };
window.onload = function() {
  let cells = document.getElementsByClassName("cell")

  console.log(cells.length)

function addOpacity(evt){
  evt.target.style.opacity  = Number(evt.target.style.opacity) + 0.1;

}

  for (let i=0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "pink";
    cells[i].style.opacity = "0";
    cells[i].addEventListener("click",addOpacity)

  }


}
