document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".login-button");

    loginButton.addEventListener("click", function () {
        const username = document.getElementById("username").value;
        const password = document.querySelector("input[type='password']").value;

        if (username === "user100" && password === "user100") {
            // Login bem-sucedido, redireciona para outra página
            window.location.href = "selectApp.html";
        } else {
            // Exibe um erro se o login falhar
            alert("Usuário ou senha incorretos!");
        }
    });
});
