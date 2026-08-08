alert("SCRIPT NOVO CARREGADO");

```javascript
// ================================
// CERTIFICADOS NFC
// 32 ENFERMEIRAS
// ================================

const params = new URLSearchParams(window.location.search);

const id = params.get("id");
const nomeParam = params.get("nome");


// ================================
// LISTA DOS CERTIFICADOS
// ================================

const certificados = {

    "1": {
        arquivo: "AnaClaudia.png",
        nome: "Ana Claudia"
    },

    "2": {
        arquivo: "AnaLuisa.png",
        nome: "Ana Luisa"
    },

    "3": {
        arquivo: "AndredaSilva.png",
        nome: "Andrea da Silva"
    },

    "4": {
        arquivo: "Carla.png",
        nome: "Carla"
    },

    "5": {
        arquivo: "anaCarolini.png",
        nome: "Ana Carolini"
    },

    "6": {
        arquivo: "caroline.png",
        nome: "Caroline"
    },

    "7": {
        arquivo: "eliane.png",
        nome: "Eliane"
    },

    "8": {
        arquivo: "ferandaN.png",
        nome: "Fernanda Nunes"
    },

    "9": {
        arquivo: "fernandaB.png",
        nome: "Fernanda Bruch"
    },

    "10": {
        arquivo: "flavia.png",
        nome: "Flavia"
    },

    "11": {
        arquivo: "greicy.png",
        nome: "Greicy"
    },

    "12": {
        arquivo: "hayra.png",
        nome: "Hayra"
    },

    "13": {
        arquivo: "juliana.png",
        nome: "Juliana"
    },

    "14": {
        arquivo: "ligia.png",
        nome: "Ligia"
    },

    "15": {
        arquivo: "lilian.png",
        nome: "Lilian"
    },

    "16": {
        arquivo: "marcia.png",
        nome: "Marcia"
    },

    "17": {
        arquivo: "maricelia.png",
        nome: "Maricelia"
    },

    "18": {
        arquivo: "marlize.png",
        nome: "Marlize"
    },

    "19": {
        arquivo: "ney.png",
        nome: "Ney Carlos"
    },

    "20": {
        arquivo: "patricia.png",
        nome: "Patricia"
    },

    "21": {
        arquivo: "paulo.png",
        nome: "Paulo"
    },

    "22": {
        arquivo: "pedro.png",
        nome: "Pedro"
    },

    "23": {
        arquivo: "raimundo.png",
        nome: "Raimundo"
    },

    "24": {
        arquivo: "raquelA.png",
        nome: "Raquel Alves"
    },

    "25": {
        arquivo: "raquelF.png",
        nome: "Raquel Francisco"
    },

    "26": {
        arquivo: "solange.png",
        nome: "Solange"
    },

    "27": {
        arquivo: "thaynara.png",
        nome: "Thaynara"
    },

    "28": {
        arquivo: "vanessa.png",
        nome: "Vanessa"
    },

    "29": {
        arquivo: "enfMaria.png",
        nome: "Maria Luiza"
    },

    "30": {
        arquivo: "enferTayara.png",
        nome: "Tayara"
    },

    "31": {
        arquivo: "enferMarine.png",
        nome: "Mariane"
    },

    "32": {
        arquivo: "enfLeticia.png",
        nome: "Leticia"
    }

};


// ================================
// ELEMENTOS DA PÁGINA
// ================================

const nome = document.getElementById("nome");

const mensagem = document.getElementById("mensagem");

const certificado = document.getElementById("certificado");

const download = document.getElementById("download");

const loading = document.querySelector(".loading");


// ================================
// LOCALIZA O CERTIFICADO
// ================================

let certificadoInfo = null;


// Pelo ID
if (id && certificados[id]) {

    certificadoInfo = certificados[id];

}


// Pelo nome
else if (nomeParam) {

    certificadoInfo = {

        arquivo: nomeParam + ".png",

        nome: nomeParam

    };

}


// ================================
// CERTIFICADO NÃO ENCONTRADO
// ================================

if (!certificadoInfo) {

    loading.innerHTML =
        "<h2>Certificado não encontrado.</h2>";

}


// ================================
// CARREGAR CERTIFICADO
// ================================

else {

    const arquivo = certificadoInfo.arquivo;

    const nomePessoa = certificadoInfo.nome;


    // Mostra o nome correto
    nome.textContent = nomePessoa;


    // Mensagem
    mensagem.textContent =
        "Esta homenagem foi preparada com muito carinho em reconhecimento à sua dedicação, compromisso e cuidado com tantas vidas.";


    // Caminho do certificado
    const urlCertificado =
        "certificados/" + arquivo;


    console.log("ID:", id);

    console.log("Nome:", nomePessoa);

    console.log("Arquivo:", arquivo);

    console.log("URL:", urlCertificado);


    // ================================
    // CERTIFICADO CARREGOU
    // ================================

    certificado.onload = function () {

        console.log("Certificado carregado com sucesso!");


        loading.style.display = "none";


        certificado.style.display = "block";


        nome.style.display = "block";


        mensagem.style.display = "block";


        // Botão download
        download.href = urlCertificado;

        download.download = arquivo;

        download.style.display = "inline-block";

    };


    // ================================
    // ERRO
    // ================================

    certificado.onerror = function () {

        console.error(
            "Erro ao carregar:",
            urlCertificado
        );


        loading.innerHTML =
            "<h2>Erro ao carregar o certificado.</h2>" +
            "<p>Arquivo: " +
            arquivo +
            "</p>";

    };


    // ================================
    // INICIA O CARREGAMENTO
    // ================================

    certificado.src = urlCertificado;

}
```
