function clearAll(){
    let cells = document.getElementsByClassName("grid-cell");
    let arr = Array.from(cells);
    arr.forEach(cell =>
    {
        cell.style.backgroundColor = null;
        cell.classList.remove(...cell.classList);
        cell.classList.add("grid-cell");
        cell.classList.add("uncolored");
    });
}