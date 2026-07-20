// Lê o parâmetro da URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Lista dos certificados
const certificados = {
    "1": "AnaClaudia.png",
    "2": "AnaLuisa.png",
    "3": "AndredaSilva.png",
    "4": "Carla.png",
    "5": "anaCarolini.png",
    "6": "caroline.png",
    "7": "eliane.png",
    "8": "ferandaN.png",
    "9": "fernandaB.png",
    "10": "flavia.png",
    "11": "greicy.png",
    "12": "hayra.png",
    "13": "juliana.png",
    "14": "ligia.png",
    "15": "lilian.png",
    "16": "marcia.png",
    "17": "maricelia.png",
    "18": "marize.png",
    "19": "ney.png",
    "20": "patricia.png",
    "21": "paulo.png",
    "22": "pedro.png",
    "23": "raimundo.png",
    "24": "raquelA.png",
    "25": "raquelF.png",
    "26": "solange.png",
    "27": "thaynara.png",
    "28": "vanessa.png"
};

// Elementos da página
const nome = document.getElementById("nome");
const certificado = document.getElementById("certificado");
const download = document.getElementById("download");
const botao = download.querySelector("button");
const loading = document.querySelector(".loading");

// Verifica se existe o ID
if (id && certificados[id]) {

    const arquivo = certificados[id];

    // Nome sem extensão
    nome.textContent = arquivo.replace(".png", "");

    setTimeout(() => {

        certificado.src = "certificados/" + arquivo;

        certificado.onload = () => {

    loading.style.display = "none";

    certificado.style.display = "block";

    download.href = caminho;
    download.setAttribute("download", arquivo);

    // Mostra o link e o botão
    download.style.display = "inline-block";

    const botao = download.querySelector("button");
    botao.style.display = "inline-block";

};
        certificado.onerror = () => {
            loading.innerHTML = "<p>Erro ao carregar o certificado.</p>";
        };

    }, 2000);

} else {

    nome.textContent = "";
    loading.innerHTML = "<p>Certificado não encontrado.</p>";

}
