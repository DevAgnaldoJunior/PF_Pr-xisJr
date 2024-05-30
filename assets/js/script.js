//função para ir para alguma sessão
function goTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

  //HTML do carrossel
  //<img id="image" src="" alt="Imagem">
  // <div >
  //   <button onclick="trocarImagem(-1)">Imagem Anterior</button>
  // <button onclick="trocarImagem(1)">Próxima Imagem</button>
  // </div>

  //código do carrossel ativado por botão
let estado = 1;
let totalEstados = 5;

function trocarImagem(direcao) {
    estado += direcao;

    if (estado < 1) {
    estado = totalEstados;
    } else if (estado > totalEstados) {
    estado = 1;
    }

    var imagem = document.getElementById("img");

    switch (estado) {
    case 1:
        imagem.src = "";
        break;
    case 2:
        imagem.src = "";
        break;
    case 3:
        imagem.src = "";
        break;
    case 4:
        imagem.src = "";
        break;
    case 5:
        imagem.src = "";
        break;
    }
}