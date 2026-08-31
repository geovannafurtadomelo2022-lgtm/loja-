const formulario = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Verifica nome
    if (nome === "") {
        mensagem.textContent = "Digite seu nome completo.";
        return;
    }

    // Verifica e-mail
    if (email === "") {
        mensagem.textContent = "Digite seu e-mail.";
        return;
    }

    // Verifica formato do e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        mensagem.textContent = "Digite um e-mail válido.";
        return;
    }

    // Verifica senha
    if (senha === "") {
        mensagem.textContent = "Digite uma senha.";
        return;
    }

    if (senha.length < 6) {
        mensagem.textContent = "A senha precisa ter pelo menos 6 caracteres.";
        return;
    }

    // Tudo certo
    mensagem.style.color = "#4caf50";
    mensagem.textContent = "Cadastro realizado com sucesso!";

    formulario.reset();

});