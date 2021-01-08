let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let imRight = document.getElementById("imRight");
let noImRight = document.getElementById("noImRight");
button1.addEventListener("click",change1);
button2.addEventListener("click",change2);

function change1(){
    imRight.style.display = "block";
    noImRight.style.display = "none";
    
}
function change2(){
    noImRight.style.display = "block";
    imRight.style.display = "none";
}