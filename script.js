// Lê os parâmetros da URL
const params = new URLSearchParams(window.location.search);

const nome = params.get("nome") || "Homenageado(a)";
const img = params.get("img");

// Coloca o nome na tela
document.getElementById("nome").textContent = nome;

// Elementos
const certificado = document.getElementById("certificado");
const download = document.getElementById("download");
const botao = download.querySelector("button");
const loading = document.querySelector(".loading");

// Se foi informada uma imagem
if (img) {

    setTimeout(() => {

        certificado.src = "certificados/" + img;

        certificado.style.display = "block";

        loading.style.display = "none";

        botao.style.display = "inline-block";

        download.href = "certificados/" + img;

    }, 3000);

} else {

    loading.innerHTML = "<p>Certificado não encontrado.</p>";

}
