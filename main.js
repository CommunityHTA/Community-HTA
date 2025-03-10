document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".login-button");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.querySelector("input[type='password']");

    function handleLogin() { 
        const usernameField = document.getElementById("input-content");
        const passwordField = document.getElementById("password-content");
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === "user100" && password === "user100") {
            usernameInput.style.border = "2px solid #ccc";
            passwordInput.style.border = "2px solid #ccc";
            window.location.href = "dashboard.html";
        } else {
            alert("Usuário ou senha incorretos!");
            usernameField.style.border = "2px solid red";
            passwordField.style.border = "2px solid red";
        }
    }

    loginButton.addEventListener("click", handleLogin);

    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            handleLogin();
        }
    });

    mudaImagem();
});

function mudaImagem() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".indicator-dot");
    let currentIndex = 0;

    function changeSlide() {
        slides.forEach((slide) => (slide.style.display = "none"));
        dots.forEach((dot) => dot.classList.remove("active"));
        slides[currentIndex].style.display = "block";
        dots[currentIndex].classList.add("active");
        currentIndex = (currentIndex + 1) % slides.length;
    }

    changeSlide();
    setInterval(changeSlide, 3000);
}

