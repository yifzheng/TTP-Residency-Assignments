// remove rows
function removeRow(){
    if (row === 1){
        while (col > -1){
            removeColumn();
        }
    }
    row -= 1;
    let table = document.getElementById("grid");
    let finalRow = table.rows.length - 1;
    table.deleteRow(finalRow);
}
function removeColumn(){
    if (col === 1){
        while (row > -1){
            removeRow();
        }
    }
    col -= 1;
    let table = document.getElementById("grid");
    let allCol = table.rows[0].cells.length - 1;
    for (let i = 0; i < table.rows.length; i++){
        table.rows[i].deleteCell(allCol);
    }
}