document.addEventListener("DOMContentLoaded", function() {
    const heartsContainer = document.querySelector(".hearts-container");
    const numberOfHearts = 20; // Defina o número de corações que deseja exibir

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heartsContainer.appendChild(heart);
    }
});
