const mainDiv = document.querySelector(".main-div");
const changeGridSizeButton = document.querySelector("#prompt-button");
const clearGridButton = document.querySelector("#clear-grid-button");

function randomColor(){
  const chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let hex = "#";
  for(let i=0;i<6;i++){
    index = Math.floor(Math.random() * 16);
    hex = hex.concat(chars[index]);
  }
  return hex;
}

function createGrid(size){
  mainDiv.innerHTML = "";
  for(let i=0;i<size*size;i++){
    const containerSize = 650;
    const widthHeight = containerSize / size;

    let div = document.createElement("div");
    div.classList.add("inside-div");

    div.style.width = `${widthHeight}px`;
    div.style.height = `${widthHeight}px`;

    div.addEventListener("mouseover", function () {
      let hexValue = randomColor();
      div.style.backgroundColor = `${hexValue}`;
    });

    mainDiv.appendChild(div);
  }
}

function changeGridSize() {
  let newSize;
  while(true) {
    newSize = parseInt(prompt("Enter new grid size(1-100): "));
    if(newSize >= 1 && newSize <= 100){
      break;
    }
    alert("Please enter a number between 1 and 100!");
  }
  createGrid(newSize);
}

function clearGrid(){
  const insideDivs = document.querySelectorAll(".inside-div");
  insideDivs.forEach(div => {
    div.style.backgroundColor = ("transparent");
  });
}

createGrid(16);

changeGridSizeButton.addEventListener("click", changeGridSize);
clearGridButton.addEventListener("click", clearGrid);