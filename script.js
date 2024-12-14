

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let isvalid = true;


    const username = document.getElementById('username').value;
    const usernamePattern = /^[A-Za-z]{1,50}$/;
    const usernameError = document.getElementById('username-error');
   
    if (!usernamePattern.test(username)) {
        usernameError.textContent = "First Name cannot be empty";
        document.getElementById('img1').style.display = "flex"
        isvalid = false;
    } else {
        usernameError.textContent = "";
        document.getElementById('img1').style.display = "none"
    }

    const lastname = document.getElementById('lastname').value;
    const lastnamePattern = /^[a-zA-Z]+$/;
    const lastnameError = document.getElementById('lastname-error');
    if (!lastnamePattern.test(lastname)) {
        lastnameError.textContent = "Last Name cannot be empty";
        document.getElementById('img2').style.display = "flex"
        isvalid = false;
    } else {
        lastnameError.textContent = "";
        document.getElementById('img2').style.display = "none"
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailError = document.getElementById('email-error');
    if (!emailPattern.test(email)) {
        emailError.textContent = "Looks like this is not an email";
        document.getElementById('img3').style.display = "flex"
        isvalid = false;
    } else {
        emailError.textContent = "";
        document.getElementById('img3').style.display = "none"
    }

    const password = document.getElementById('password').value;
    const passwordPattern = /^[a-zA-Z0-9]{6,}$/;
    const passwordError = document.getElementById('password-error');
    if (password === "") {
        passwordError.textContent = "Password cannot be empty";
        document.getElementById('img4').style.display = "flex"
        isvalid = false;
    } else if (!passwordPattern.test(password)) {
        passwordError.textContent = "Pasword is too weak for being used";
        document.getElementById('img4').style.display = "flex"
        isvalid = false;
    } else {
        passwordError.textContent = "";
        document.getElementById('img4').style.display = "none"
    }

    if (isvalid) {
        alert("Successfully submitted");
        document.getElementById('signup-form').submit(); 
    }
});