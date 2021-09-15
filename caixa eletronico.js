var soma = 0;
var nome = prompt("Poderia me informar o seu nome?");
alert("Olá " + nome + "! é um prazer ter você por aqui.");

var saldo = 100;

function transfer() {
    var nome2 = prompt("digite o nome de quem você quer transferir");
    senha(transfer);
    var conta = parseInt(prompt("digite o número da conta que será feita a transferência"));

    var transf = parseInt(prompt("digite o valor que você deseja transferir"));
    alert("Confirma a sua tranferência para " + nome2 + "na conta " + conta +  " no valor de " + transf + "?");
    
    saldo -= transf;

    if (saldo < transf) {
        alert("não foi possível realizar a transferência, saldo insuficiente");
    }
    else {
    alert("transferência realizada com sucesso!");
    }
}

function senha() {
    var password = parseInt(prompt("digite sua senha para ter acesso"));
    if (password == 3589) {
        alert("senha aceita com sucesso");

    } else if (password != 3589) {
        alert("senha incorreta, volte ao inicio");
        inicio();
    }
}

function deposito() {
    var soma = parseFloat(prompt("digite o valor que deseja depositar: "));
    var deposit = soma + saldo;
    alert("Seu novo saldo agora é R$" + deposit);
    saldo += deposit;

}

function ver_saldo() {
    alert('Seu saldo atual é: ' + saldo);
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    alert(`${nome}, foi um prazer ter você por aqui!`);
    if (confirma) {
        window.close();
    } else {
        inicio();
    }
}

function extrato() {

    alert ("pressione ENTER para acessar a função EXTRATO");
    alert("Mercadinho: - 50,02R$ \n\n POWEREDBethesda: -250R$\n\n Tarifa bancária: -49R$\n\n Pix Joãozinho: + 100R$");
    inicio();
}

function saque() {
     var saque = parseFloat(prompt ("digite o quanto necessita sacar: "));
     
    if (saque > saldo || saque < 0) {
        alert('Não é possível realizar o saque, operação não autorizada');
        return saldo;
    }

    saldo -= saque;
    alert('Saque realizado com sucesso!');
    return saldo;
}


function inicio() {
    var escolha = parseInt(prompt('Selecione uma opção 1.) Saldo 2.) Depósito 3.) Transferência  4.) Extrato 5.) Saque 6.) Sair'));

    switch (escolha) {

        case 1:

            alert('digite enter para acessar a função VER SALDO.');
            senha(ver_saldo);
            ver_saldo();
            inicio();

            break;
        case 2:

            alert('digite enter para acessar a função DEPOSITO.');
            senha();
            deposito();
            inicio();

            break;

        case 3:
            alert("digite enter para acessar a função TRANSFERÊNCIA");
            transfer();
            ver_saldo();
            inicio();

            break;

        case 4:
            extrato();
            inicio();

            
            break;

        case 5:
        saque ();
        ver_saldo ();
        inicio ();

            break;
            
        case 6:
            sair ();
            break;

            default:
                alert ("digite apenas números de 1 a 6");
                inicio ();

    }


}
inicio();