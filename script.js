// Referências dos elementos
const modal = document.getElementById("modal");
const imgAmpliada = document.getElementById("img-ampliada");
const fotos = document.querySelectorAll(".foto img");
const fechar = document.querySelector(".fechar");

// Adiciona evento de clique a cada foto
fotos.forEach(foto => {
    foto.addEventListener('click', () => {
        modal.style.display = "block";
        imgAmpliada.src = foto.src;
    });
});

// Fechar modal ao clicar no 'X'
fechar.addEventListener('click', () => {
    modal.style.display = "none";
});

// Fechar modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
    if (e.target !== imgAmpliada) {
        modal.style.display = "none";
    }
});
