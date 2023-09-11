function eveTongglePass(){    
    
    var passwordInput = document.getElementById("password-input");
    var toggleBtn = document.getElementById("tonggle-pass");
    if (passwordInput.type =="password"){
        passwordInput.type = "text";
        toggleBtn.classList.add("show-password");
        console.log("hello2");
        
    }
    else{
        passwordInput.type = "password";
        toggleBtn.classList.remove("show-password");
        console.log("hello3");
    }
}
