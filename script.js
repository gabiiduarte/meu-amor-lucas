function trocarMensagem() {
  const mensagens = [
    "Eu amo seu sorriso 😍",
    "Você faz meu mundo mais feliz 🌎💖",
    "Obrigada por existir 🥹",
    "Te amo mais que tudo ❤️"
  ];

  const msg = document.getElementById("mensagem");
  const aleatoria = Math.floor(Math.random() * mensagens.length);
  msg.innerText = mensagens[aleatoria];
}
