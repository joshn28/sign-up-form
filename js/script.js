const confirmPwInput = document.querySelector("#confirm-pw");
const pwInput = document.querySelector("#pw");

confirmPwInput.addEventListener("input", checkPasswords);
pwInput.addEventListener("input", checkPasswords);

function checkPasswords(e) {
    const errorMsg = document.querySelector(".error-msg");
    const password = e.target;
    
    let confirmPw;

    if (e.target.id === "confirm-pw") {
        confirmPw = document.querySelector("#pw");
    } else {
        confirmPw = document.querySelector("#confirm-pw");
    }

    if (password.value === confirmPw.value && password.value !== "") {
        password.classList.remove("error");
        password.classList.add("match");
        
        confirmPw.classList.remove("error");
        confirmPw.classList.add("match");
        
        errorMsg.style.visibility = "hidden";
    } else {
        password.classList.remove("match");
        password.classList.add("error");
        
        confirmPw.classList.remove("match");
        confirmPw.classList.add("error");

        errorMsg.style.visibility = "visible";
    }
}