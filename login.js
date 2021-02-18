const logBtn = document.getElementById("logBtn");
logBtn.addEventListener('click',function() {
    let username = $("#username").val();
    let password = $("#password").val();
    console.log(username);
    console.log(password)
});