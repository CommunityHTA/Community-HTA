document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".login-button");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.querySelector("input[type='password']");
    
    // Definindo os elementos de alerta
    const alertaIcon = document.getElementById("alertaErroIcon");
    const alertaLabel = document.getElementById("alertaErroLabel");

    function handleLogin() { 
        const usernameContainer = usernameInput.closest(".input-content");
        const passwordContainer = passwordInput.closest(".input-content");
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === "anasilva" && password === "user100") {
            // Reseta o estilo dos campos de entrada
            usernameContainer.classList.remove("input-error");
            passwordContainer.classList.remove("input-error");
            alertaIcon.style.display = "none"; // Esconde o ícone de alerta
            alertaLabel.style.display = "none"; // Esconde a mensagem de erro
            window.location.href = "dashboard.html"; // Redireciona para a dashboard
        } else {
            usernameContainer.classList.add("input-error");
            passwordContainer.classList.add("input-error");
            alertaIcon.style.display = "block"; // Exibe o ícone de alerta
            alertaLabel.style.display = "block"; // Exibe a mensagem de erro
        }
    }

    loginButton.addEventListener("click", handleLogin);

    document.addEventListener("keydown", function (event) {
        // Verifica se a tecla pressionada foi Enter
        if (event.key === "Enter") {
            handleLogin(); // Chama a função de login
        }
    });

    // Alternar visibilidade da senha
    const togglePassword = document.getElementById("toggle-password");
    togglePassword.addEventListener("click", function () {
        const isPasswordType = passwordInput.getAttribute("type") === "password";
        passwordInput.setAttribute("type", isPasswordType ? "text" : "password");
        togglePassword.src = isPasswordType ? "icons/system/eye-slash.svg" : "icons/system/eye.svg";
    });

    mudaImagem();
});


function mudaImagem() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".indicator-dot");
    const title = document.querySelector(".promo-title");
    const description = document.querySelector(".promo-description");

    // Defina os textos correspondentes para cada imagem
    const texts = [
        { title: "Analyze health apps", description: "Evaluate apps to ensure they meet your patients’ needs. Whether discovering new options or reviewing one already in mind, make informed recommendations." },
        { title: "Plan and track assessments", description: "Use the calendar to view all upcoming assessments at a glance, ensuring you never miss a step in supporting your patients with the right app recommendations." },
        { title: "View latest results", description: "Quickly access and review your most recent assessments. Stay up-to-date on app evaluations and patient outcomes to make informed decisions efficiently." }
    ];

    let currentIndex = 0;

    function changeSlide() {
        // Esconde todas as imagens e remove os dots ativos
        slides.forEach((slide) => (slide.style.display = "none"));
        dots.forEach((dot) => dot.classList.remove("active"));

        // Exibe a imagem e ativa o dot correspondente
        slides[currentIndex].style.display = "block";
        dots[currentIndex].classList.add("active");

        // Atualiza o título e a descrição conforme o slide ativo
        title.textContent = texts[currentIndex].title;
        description.textContent = texts[currentIndex].description;

        // Atualiza o índice para a próxima imagem (ou reinicia no 0)
        currentIndex = (currentIndex + 1) % slides.length;
    }

    changeSlide(); // Chama a função imediatamente
    setInterval(changeSlide, 3000); // Alterna a cada 3 segundos
}
