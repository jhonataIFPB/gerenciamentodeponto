$(function() {
    var operacao = "A" //"A"=adição;
    var indice_selecionado = -1;
    var tbfunci = localStorage.getItem("tbfunci");
    tbfunci = JSON.parse(tbfunci);
    if (tbfunci == null)
        tbfunci = [];
});

function add() {
    var funci = JSON.stringify({
        Nome: $("#Nome").val(),
        email: $("#E-mail").val(),
        endereço: $("cpf").val(),
        telefone: $("Telefone").val(),
        senha: $("Senha").val(),
    });
    tbfunci.push(funci);
    localStorage.setItem("tbfunci", JSON.stringify(tbfunci));
    alert("Funcionario cadastrado")
    return true;
}

$("#form").on("submit", function() {
    if (operacao == "A")
        return add();
    else
        alert("Funcionario ja cadastrado")
});