function logar() {
    var cpf = document.getElementById("cpf");
    var senha = document.getElementById("senha")

    if (cpf.Value == "11111111111" && senha.Value == "admin") {
        localStorage.getItem("acesso", true);

        window.location.href = "Controle de ponto.html";
    } else {
        alert("Funcionario não cadastrado consulte os dados ou entre em contato com o admin")
    }
}