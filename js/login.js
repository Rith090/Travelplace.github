document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "123456") {
        window.location.href = "overview.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
