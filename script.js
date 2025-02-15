const mainDiv = document.querySelector(".main-div");

for(let i=0;i<256;i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("inside-div");
  mainDiv.appendChild(newDiv);
}