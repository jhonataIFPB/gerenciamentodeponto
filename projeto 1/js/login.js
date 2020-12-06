function logar() {
    var cpf = document.getElementById("cpf");
    var senha = document.getElementById("senha")

    if (cpf.value == "00000000000" && senha.value == "admin") {
        localStorage.setItem("acesso", true);

        window.location.href = "Controledeponto.html";
    } else {
        alert("Funcionario não cadastrado consulte os dados ou entre em contato com o admin")
    }
}