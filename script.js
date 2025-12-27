const nome = "Lucas"; // Nome dele

// Adiciona o título com o nome dele
document.getElementById("titulo").innerText =
  `Oi, meu amor, ${nome} 💕`;

// Mensagens fofas de cada tesouro
const mensagens = [
  "Essa cartinha é pra te lembrar o quanto você é especial pra mim, EU TE AMO PRETO 💌",
  "Esse ursinho representa o carinho obg por tudo que vc faz eu me sinto amada 🧸",
  "você floresce todos os dias no meu coração🌹",
  "EU TE AMO E ESPEPERO QUE ACEITE FAZER PARTE DA MINHA VIDA!💖🥹"
];

let encontrados = 0;

// Função que mostra as mensagens ao clicar
function revelar(indice) {
  const msg = document.getElementById("mensagem");
  msg.style.opacity = 0;

  setTimeout(() => {
    msg.innerText = mensagens[indice];
    msg.style.opacity = 1;

    encontrados++;

    // Mensagem final após clicar nos 3 itens
    if (encontrados === 3) {
      setTimeout(() => {
        msg.innerText = mensagens[3];
      }, 1000);
    }
  }, 300);
}
