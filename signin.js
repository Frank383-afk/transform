let content = document.querySelector(".content");
let buttoncraete = document.getElementById("accountbutton");
let box = document.querySelector(".boxes");
let boxone = document.querySelector(".box");
let htwo = document.getElementById("htwo");


 htwo.innerText = "Hello, Don't have an account?";
buttoncraete.onclick = function(){
  content.classList.add("active");
  
  signup.innerText = "Sign in";
 
}
let buttonexit = document.getElementById("buttonexit");


let signup = document.getElementById("signup");
 signup.innerText = "Sign up";

signup.onclick = function(){
   content.classList.toggle("active");
     signup.innerText = "Sign in";
     htwo.innerText = "Hello, Have an account, Sign in";
     if(signup.innerText === "Sign in"){
        htwo.innerText = "Hello, Have an account ";
     }
     else{
         signup.innerText = "Sign up";
        htwo.innerText = "Hello, Have an account";
     }
};

let createacc = document.getElementById("createacc");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let emial = document.getElementById("email");
let pass = document.getElementById("password");
let loc = document.getElementById("location");

createacc.onclick = function(){
   const name = firstname.value;
   const mail = emial.value;
   const password = pass.value;
   const lname = lastname.value;
   const location = loc.value;

  const all = [name, password, mail, lname, location];
  const selected = [all[0], all[2], all[1]];
  console.log(selected);

  localStorage.setItem("userdata", JSON.stringify(selected));

  content.classList.remove("active");
};
let done = document.getElementById("done");
let nameone = document.getElementById("nameone");
let emailone = document.getElementById("emailone");
let passone = document.getElementById("passone");
done.onclick = function(){
   const freename = nameone.value;
   const freeemail = emailone.value;
   const freepass = passone.value;

   const dizzy = [freename, freeemail, freepass];
    let data = JSON.parse(localStorage.getItem("userdata"));
console.log(data);
  if(dizzy[0] === data[0] && dizzy[1] === data[1] && dizzy[2] === data[2]){
    alert("Account correct");
    window.location.href = "transforml.html";
  }

else{
    alert("Account not found");

}
}