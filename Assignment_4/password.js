function validatePassword(){
    let password = document.getElementById("pass").value;
    if (password !== "12345678"){
        alert("Password Incorrect")
    }
    alert("Submission Received");
}
