const gridContainer = document.getElementById("grid-container");
const grid = document.createElement("div");
grid.classList.add("grid");
gridContainer.appendChild(grid);
const initialGridSize = 16;

function removeGrid() {
  const gridToRemove = document.getElementsByClassName("grid");
  while (gridToRemove[0].hasChildNodes()) {
    gridToRemove[0].removeChild(gridToRemove[0].firstChild);
  }
}

function newGrid() {
  removeGrid();
  let newGridSize = parseInt(prompt("Please enter a new grid size"));
  while (newGridSize > 100 || newGridSize < 16) {
    newGridSize = parseInt(prompt("Please enter a new grid size"));
  }

  drawGrid(newGridSize);
}
function drawBlack() {}

function drawGrid(rows) {
  for (let index = 1; index <= rows; index++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("flex-row");
    for (let index = 1; index <= rows; index++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.addEventListener("mousedown", () => {
        gridItem.style.background = "black";
      });
      gridDiv.appendChild(gridItem);
    }
    grid.appendChild(gridDiv);
  }
}

function drawInitialGrid() {
  drawGrid(initialGridSize);
}

drawInitialGrid();
