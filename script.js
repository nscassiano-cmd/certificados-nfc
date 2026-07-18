// Lê os parâmetros da URL
const params = new URLSearchParams(window.location.search);

const nome = params.get("nome") || "Homenageado(a)";

// Remove espaços do nome
const nomeArquivo = nome.replace(/\s+/g, "");

document.getElementById("nome").textContent = nome;

const certificado = document.getElementById("certificado");
const download = document.getElementById("download");
const botao = download.querySelector("button");
const loading = document.querySelector(".loading");

// Caminho do certificado
const caminho = "certificados/" + nomeArquivo + ".png";

setTimeout(() => {

    certificado.src = caminho;

    certificado.onload = () => {

        certificado.style.display = "block";
        loading.style.display = "none";
        botao.style.display = "inline-block";
        download.href = caminho;

    };

    certificado.onerror = () => {

        loading.innerHTML = "<p>Certificado não encontrado.</p>";

    };

}, 3000);
