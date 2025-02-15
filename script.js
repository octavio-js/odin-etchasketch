const mainDiv = document.querySelector(".main-div");
const changeGridSizeButton = document.querySelector("#prompt-button");

function createGrid(size){
  mainDiv.innerHTML = "";
  for(let i=0;i<size*size;i++){
    const containerSize = 700;
    const widthHeight = containerSize / size;

    let div = document.createElement("div");
    div.classList.add("inside-div");

    div.style.width = `${widthHeight}px`;
    div.style.height = `${widthHeight}px`;

    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = "white";
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

createGrid(16);

changeGridSizeButton.addEventListener("click", changeGridSize);