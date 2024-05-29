const arr=JSON.parse(localStorage.getItem("data")) || []

let signup=document.getElementById("signup")

signup.addEventListener("submit",(el)=>{
el.preventDefault();



let name = document.getElementById("name").value.trim();
let lastname = document.getElementById("lastname").value.trim();
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value.trim();


if (name === "" || lastname === "" || email === "" || password === "") {
    alert("Please fill in all fields.");
    return; 
}


let updata={
    name:document.getElementById("name").value,
    lastname:document.getElementById("lastname").value,
    email:document.getElementById("email").value,
    password:document.getElementById("password").value,

}
console.log(updata)
arr.push(updata)
localStorage.setItem("data",JSON.stringify(arr))

alert("account created successful😀")

document.getElementById("name").value=""
document.getElementById("lastname").value=""
document.getElementById("email").value=""
document.getElementById("password").value=""

})

let signin=document.getElementById("signin")

signin.addEventListener("submit",(el)=>{

el.preventDefault();


let email = document.getElementById("mail").value.trim();
let password = document.getElementById("pass").value.trim();

// Basic form validation
if (email === "" || password === "") {
    alert("Please fill in all fields.");
    return; // Stop further execution if fields are empty
}



let indata={
    email:document.getElementById("mail").value,
    password:document.getElementById("pass").value,
}
console.log(indata)

let user=JSON.parse(localStorage.getItem("data"))|| [];
let store=user.filter((el)=>el.email==indata.email && el.password==indata.password)

document.getElementById("mail").value=""
document.getElementById("pass").value=""

if(store[0])
    {
        alert("login successful ");
    }
    else{
        alert("invailid email or password !")
    }
})