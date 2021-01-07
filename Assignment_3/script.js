// 1) Select the section with an id of container without using querySelector.
let container = document.getElementById("container");
console.log(container);

//2) Select the section with an id of container using querySelector.
let element = document.querySelector("#container");
console.log(element);

//3) Select all of the list items with a class of "second".
let element = document.getElementsByClassName("second");
console.log(element);

//4) Select a list item with a class of third, but only the list item inside of the ol tag.
let element = document.querySelector("ol .third");
console.log(element);

//5) Give the section with an id of container the text "Hello!".
document.getElementById("container").innerHTML = "<p>Hello!</p>";

//6) Add the class main to the div with a class of footer.
document.querySelector("div.footer").classList.add("main");

//7) Remove the class main on the div with a class of footer.
document.querySelector(".main").classList.remove("main");

//8) Create a new li element.
const elem = document.createElement("li");

//9) Give the li the text "four".
elem.innerText = "four"

//10) Append the li to the ul element.
document.querySelector("ul").appendChild(elem)


//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
let tags = document.querySelectorAll("ol");
for (let i = 0; i < tags.length; i++){
    tags[i].style.backgroundColor = "green"
}

//13) Remove the div with a class of footer.
document.querySelector(".footer").remove("footer")