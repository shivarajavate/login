function onUsernameChange(event) {
    var usernameInput = document.getElementById("username");
    usernameInput.value = event.target.value;   
}

function onPasswordChange(event) {
    var passwordInput = document.getElementById("password");
    passwordInput.value = event.target.value;
}

function onSubmit() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var detailsLabel = document.getElementById("details");

    if (!usernameInput.value || !passwordInput.value) {
        detailsLabel.textContent = '';
        return;
    }
    
    detailsLabel.textContent = `username: ${usernameInput.value} and password: ${passwordInput.value} submitted`;
    usernameInput.value = '';
    passwordInput.value = '';
}