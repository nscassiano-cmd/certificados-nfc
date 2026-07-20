// ==============================
// Certificados NFC
// ==============================

// Lê o ID da URL
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

const nome = document.getElementById("nome");
const certificado = document.getElementById("certificado");
const download = document.getElementById("download");
const loading = document.querySelector(".loading");

if (!id || !certificados[id]) {

    nome.innerHTML = "";
    loading.innerHTML = "<h2>Certificado não encontrado.</h2>";

} else {

    const arquivo = certificados[id];
    const caminho = "certificados/" + arquivo;

    nome.innerHTML = arquivo.replace(".png","");

    setTimeout(() => {

        certificado.src = caminho;

    },2000);

    certificado.onload = function(){

    loading.style.display = "none";

    certificado.style.display = "block";

    download.href = caminho;
    download.download = arquivo;

    // mostra o link
    download.style.display = "inline-block";

    }

    certificado.onerror = function(){

        loading.innerHTML = "<h2>Erro ao carregar certificado.</h2>";

    }

}
