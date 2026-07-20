const params = new URLSearchParams(window.location.search);

const id = params.get("id");
const nomeParam = params.get("nome");

const certificados = {
    "1":"AnaClaudia.png",
    "2":"AnaLuisa.png",
    "3":"AndredaSilva.png",
    "4":"Carla.png",
    "5":"anaCarolini.png",
    "6":"caroline.png",
    "7":"eliane.png",
    "8":"ferandaN.png",
    "9":"fernandaB.png",
    "10":"flavia.png",
    "11":"greicy.png",
    "12":"hayra.png",
    "13":"juliana.png",
    "14":"ligia.png",
    "15":"lilian.png",
    "16":"marcia.png",
    "17":"maricelia.png",
    "18":"marize.png",
    "19":"ney.png",
    "20":"patricia.png",
    "21":"paulo.png",
    "22":"pedro.png",
    "23":"raimundo.png",
    "24":"raquelA.png",
    "25":"raquelF.png",
    "26":"solange.png",
    "27":"thaynara.png",
    "28":"vanessa.png"
};

let arquivo = "";

if (id && certificados[id]) {
    arquivo = certificados[id];
} else if (nomeParam) {
    arquivo = nomeParam + ".png";
}

const nome = document.getElementById("nome");
const certificado = document.getElementById("certificado");
const download = document.getElementById("download");
const loading = document.querySelector(".loading");

if (!arquivo) {

    loading.innerHTML = "<h2>Certificado não encontrado.</h2>";

} else {

    nome.textContent = arquivo.replace(".png","");

    certificado.onload = function(){

        loading.style.display="none";
        certificado.style.display="block";

        download.href = certificado.src;
        download.download = arquivo;
        download.style.display="inline-block";

    };

    certificado.onerror = function(){

        loading.innerHTML="<h2>Erro ao carregar o certificado.</h2>";

    };

    setTimeout(function(){

        certificado.src="certificados/"+arquivo;

    },3000);

}
