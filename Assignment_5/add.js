let col = 1;
let row = 0;
let currentColor = "azure";
let borderColor = "black";
let color = false;
// function to change color
/* function changeColor() {
    this.style.backgroundColor = currentColor;
    this.classList.remove("uncolored");
} */

// create()  cell function
function create() {
    let cell = document.createElement("td");
    cell.classList.add("grid-cell");
    cell.classList.add("uncolored");
    cell.addEventListener("mousedown", e => color = true);
    cell.addEventListener("mousemove", e => {
        if (color) {
            cell.style.backgroundColor = currentColor;
            cell.classList.remove("uncolored");
        }
    });
    cell.addEventListener("mouseup", e => {
        if (color) {
            color = false;
        }
    })
    return cell;
}

//function to add row
function addRow() {
    row++;
    let table = document.getElementById("grid");
    let newRow = document.createElement("tr");
    newRow.classList.add("grid-row");
    table.appendChild(newRow);

    for (let i = 0; i < col; i++) {
        newRow.appendChild(create());
    }

}

// add column
function addColumn() {
    col++;
    let table = document.getElementById("grid");
    let newCol = document.getElementsByClassName("grid-row");
    for (let i = 0; i < newCol.length; i++) {
        newCol[i].appendChild(create());
    }
}