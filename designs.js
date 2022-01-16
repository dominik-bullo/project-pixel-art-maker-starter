// Global variables
const grid = document.getElementById("pixelCanvas");
let color = document.getElementById("colorPicker").value;
let gHeight = document.getElementById("inputHeight").valueAsNumber;
let gWidth = document.getElementById("inputWidth").valueAsNumber;

// Select color input
const setColor = function () {
  color = document.getElementById("colorPicker").value;
};

// Select size input
const setSize = function () {
  gHeight = document.getElementById("inputHeight").valueAsNumber;
  gWidth = document.getElementById("inputWidth").valueAsNumber;
};

// Make Grid
const makeGrid = function () {
  for (let h = 0; h < gHeight; h++) {
    const row = document.createElement("tr");
    for (let w = 0; w < gWidth; w++) {
      const cell = document.createElement("td");
      cell.addEventListener("click", paintIt);
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
};

// Submit Form
document.querySelector("form").addEventListener("submit", function (evt) {
  evt.preventDefault();
  setSize();
  grid.innerHTML = "";
  makeGrid();
});

// Click on grid cell
const paintIt = function () {
  setColor();
  if (this.style.backgroundColor === "") {
    this.style.backgroundColor = color;
  } else {
    this.style.backgroundColor = "";
  }
};
