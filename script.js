




function gerar(){

    const nome = document.getElementById("nomeInput").value;
    const banco = document.getElementById("bancoInput").value;
    const valor = Number(document.getElementById("valorInput").value);

    document.getElementById("nome").textContent = nome;
    document.getElementById("banco").textContent = banco;

    document.getElementById("valor").textContent =
        valor.toLocaleString("pt-BR",{
            style:"currency",
            currency:"BRL"
        });

    const agora = new Date();

    document.getElementById("data").textContent =
        agora.toLocaleString("pt-BR");

    const id =
        "SIM-" +
        Math.random().toString(36).substring(2,10).toUpperCase();

    document.getElementById("id").textContent = id;
}