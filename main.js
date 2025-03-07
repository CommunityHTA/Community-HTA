document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".login-button");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.querySelector("input[type='password']");

    function handleLogin() {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === "user100" && password === "user100") {
            // Login bem-sucedido, redireciona para a página dashboard.html
            window.location.href = "dashboard.html";
        } else {
            // Exibe um erro se o login falhar
            alert("Usuário ou senha incorretos!");
        }
    }

    // Evento de clique no botão de login
    loginButton.addEventListener("click", handleLogin);

    // Evento para detectar pressionamento da tecla "Enter"
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            handleLogin();
        }
    });
});