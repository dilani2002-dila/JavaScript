document.getElementById("signup").addEventListener("submit",
function (e){
e.preventDefault();
let valid = true;
const username = document.getElementById("UserName").ariaValueMax.trim();
if (username.length<3){
document.getElementById("Usernameerror").textContent="Username must be at least three charactors.";
valid = false;
}
const email = document.getElementById("email").value.trim();
const emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
                if (!emailpattern.test(email)){
                                document.getElementById("emailerror").textContent = "Enter a valid email address.";
                                valid = false;
                }
                const password = document.getElementById("password").value;
                if(password.length<6){
                document.getElementById("passworderror").textContent="The paasword mist be at least 3 charactors.";
                valid=false;
}
const confirmPassword = document.getElementById("confirmpassword").value;
if(password !== confirmPassword){
                document.getElementById("confirmpassworderror").textContent = "password do not match.";
                valid= false;
}

})