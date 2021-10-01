function ex1() {


    var num = parseInt(prompt("digite um número"));

    if (num < 0) {
        alert("seu número é negativo");

    } else if (num == 0) {
        alert("seu número é zero");

    } else if (num > 0) {
        alert("seu número é positivo");
    }
}

function ex2() {
    var num = 5;
    var i = 0;
    var result;

    while (i <= 10) {
        result = (num * i);

        document.write(num + " x " + i + " = " + result + "<br>");
        i++;
    }

}

function ex3() {
    alert("Você irá digitar três números DIFERENTES. E saberá qual deles é o maior");
    var num1 = parseInt(prompt("digite o primeiro número"));
    var num2 = parseInt(prompt("digite o segundo número: "));
    var num3 = parseInt(prompt("digite o terceiro número"));

    if (num1 > num2 && num1 > num3) {
        alert("O primeiro número é o maior!");
    } else if (num2 > num1 && num2 > num3) {
        alert("o segundo número é o maior!");
    } else if (num3 > num1 && num3 > num2) {
        alert("o terceiro número é o maior!");
    }
}

function ex4() {
    alert("Você irá digitar três números DIFERENTES. E saberá qual deles são os dois maiores, e a soma entre eles");

    var num1 = parseInt(prompt("digite o primeiro número"));
    var num2 = parseInt(prompt("digite o segundo número: "));
    var num3 = parseInt(prompt("digite o terceiro número"));
    var soma;
    if (num1 > num2 && num2 > num3)

    {
        soma = (num1 + num2);
        alert("a soma dos dois maiores são: " + soma);
    } else if (num1 > num3 && num3 > num2) {
        soma = (num1 + num3);
        alert("a soma dos dois maiores são: " + soma);

    } else {
        soma = (num2 + num3);
        alert("a soma dos dois maiores são: " + soma);
    }

}

function ex5() {
    function soma() {
        var num1 = parseFloat(prompt("digite o primeiro número: "));
        var num2 = parseFloat(prompt("digite o segundo número: "));
        var soma = num1 + num2;

        alert("a soma dos números é igual a: " + soma);

    }

    function subtrair() {
        var num1 = parseFloat(prompt("digite o primeiro número: "));
        var num2 = parseFloat(prompt("digite o segundo número: "));
        var sub = num1 - num2;

        alert("a subtração dos dois números é igual a: " + sub);
    }

    function multiplicar() {
        var num1 = parseFloat(prompt("digite o primeiro número: "));
        var num2 = parseFloat(prompt("digite o segundo número: "));
        var mult = (num1 * num2);

        alert("a multiplicação dos dois números é igual a: " + mult);

    }

    function dividir() {
        var num1 = parseFloat(prompt("digite o primeiro número: "));
        var num2 = parseFloat(prompt("digite o segundo número: "));
        var div = (num1 / num2);

        alert("a divisão dos dois números é igual a: " + div);
    }

    function sair () {
        confirm ("deseja sair?");
    }

    function menu() {

        var escolha = parseInt(prompt("digite o menu que deseja acessar: \n 1- Somar \n 2- Subtrair \n 3- Multiplicar \n 4- Dividir \n 5- Sair"));

        switch (escolha) {
            case 1:
                soma();
                menu();
                break;
            case 2:
                subtrair();
                menu();
                break;


            case 3:
                multiplicar();
                menu();
                break;

            case 4:

                dividir();
                menu();
                break;

            case 5:
                sair ();
                exercicios ();
                break;

                default:
                    alert("digite apenas números de 1 a 5");
                    menu();
        }

    }

    menu();
}

function ex6() {
    var num1 = parseFloat(prompt("digite o primeiro número: "));
    var num2 = parseFloat(prompt("digite o segundo número: "));

    if (num1 == num2) {
        alert("Números iguais");
    } else if (num1 > num2) {
        alert("Primeiro maior");

    } else {
        alert("segundo maior");
    }
}


function ex7() {
    var num = 0;

    while (num <= 10) {

        document.writeln("Número: " + num + "<br>");
        num++;
    }

}

function ex8() {

    var num = 10;

    while (num != 0) {

        document.writeln("Número: " + num + "<br>");
        num--;
    }
}



function ex9() {
    var num = 100;
    while (num < 110) {

        num++;
        document.write("numero: " + num + "<br>");
    }
}

function ex10() {
    var num = parseFloat(prompt("digite o número que deseja"));
    var i = 0;

    while (i < num) {
        i++;
        document.write("numero: " + i + "<br>");
    }
}


function ex11() {
    var num = 0;
    var i = 0;
    var num2 = 0;
    var media = 0;
    num = prompt("digite um número: ")
    while (i <= 5) {
        num = parseFloat(prompt("digite outro número: "));
        num = parseFloat(prompt("digite outro número: "));
        media = num + num2;
        i++;
    }
    var media = media / 10;
    alert("a média de todos os números que foram escolhidos é de: " + media);
}

function ex12() {
    var i = 1;
    var num2 = 0;
    for (i = 1; i <= 10; i++) {
        var num = parseFloat(prompt("digite o " + i + "° número:"));
        document.write("número: " + num + "<br>");
        num2 += num;

    }
    document.write("a soma de todos os números juntos é de: " + num2);
}

function ex13() {
    var i = 1;
    var num2 = 0;
    for (i = 1; i <= 10; i++) {
        var num = parseFloat(prompt("digite o " + i + "° número:"));
        document.write("número: " + num + "<br>");
        if (num >= 40) {
            num2 += num;
        }
    }
    document.write("a soma de todos os números juntos é de: " + num2);

}

function ex14() {
    var prova1 = parseFloat(prompt("digite o valor da primeira prova"));
    var prova2 = parseFloat(prompt("digite o valor da segunda prova"));
    var prova3 = parseFloat(prompt("digite o valor da terceira prova"));
    var prova4 = parseFloat(prompt("digite o valor da quarta prova"));
    var media = (prova1 + prova2 + prova3 + prova4) / 4;

    alert("sua média é: " + media);
}

function ex15() {
    var drone = 8190;
    var parcelas = parseInt(prompt("digite o tanto de parcelas que deseja pagar pelo drone: "));
    if (parcelas > 15) {
        alert("impossível continuar com essas parcelas, digite um valor até 15x");
        console.error("erro no programa, parcelas invalidas");
    } else {
        var valor = parseFloat(drone / parcelas);
        alert("o valor que você irá pagar por parcelas no drone é: " + valor);
    }
}

function ex16() {
    var n1 = parseFloat(prompt("digite sua primeira nota: "));
    var n2 = parseFloat(prompt("digite sua segunda nota: "));
    var media = (n1 + n2) / 2;

    if (media >= 7) {
        alert("aprovado! sua média é: " + media);
    } else {
        alert("reprovado!! sua média é: " + media);
    }
}

function ex17() {
    var idadehumana;
    var idadepet = parseInt(prompt("digite a idade do seu gatinho"));

    if (idadepet == 1) {
        alert("a idade do seu pet é igual a 15 anos");
    } else if (idadepet == 2) {
        alert("a idade do seu pet é igual a 25 anos");
    } else if (idadepet >= 3) {
        idadehumana = 25;
        for (var i = 3; i < idadepet; i++) {
            idadehumana = idadehumana + 4;
        }
        alert("a idade do seu pet é igual a " + idadehumana + " anos humanos");
    }
}

function ex18() {
    var preco = parseFloat(prompt("digite o valor do produto"));
    var aumento = parseFloat(prompt("digite o valor do aumento do produto"));
    var porcentagem = (aumento / 100);
    var calculo = preco * porcentagem;
    var valornovo = preco + calculo;

    alert("o valor do seu produto será de: " + valornovo + "\n Acrescimo de: " + aumento + "%");

    document.write("Valor da venda impresso é de: R$" + valornovo);
}

function ex19() {
    var a = parseInt(prompt("Digite o valor numerico da letra A:"));
    var b = parseInt(prompt("Digite o valor numerico da letra B:"));
    var troca;

    if (troca = a) {

    } else if (a = b) {

    } else if (b = troca) {

    }
    document.write("O novo valor de B é: " + troca);
    document.write(" O novo valor de A é: \n" + b);
}

function exercicios () {
var escolha = Number(prompt("digite a sua opção de exercício: \n(Exercícios do 1 até o 19)"));

switch (escolha) {
    case 1:
        ex1();
        exercicios();
        break;

    case 2:
        ex2();
        exercicios();
        break;

    case 3:
        ex3();
        exercicios();
        break;

    case 4:
        ex4();
        exercicios();
        break;

    case 5:
        ex5();
        exercicios();
        break;

    case 6:
        ex6();
        exercicios();
        break;

    case 7:
        ex7();
        exercicios();
        break;

    case 8:
        ex8();
        exercicios();
        break;

    case 9:
        ex9();
        exercicios();
        break;

    case 10:
        ex10();
        exercicios();
        break;

    case 11:
        ex11();
        exercicios();
        break;

    case 12:
        ex12();
        exercicios();
        break;

    case 13:
        ex13();
        exercicios();
        break;

    case 14:
        ex14();
        exercicios();
        break;

    case 15:
        ex15();
        exercicios();
        break;

    case 16:
        ex16();
        exercicios();
        break;

    case 17:
        ex17();
        exercicios();
        break;

    case 18:
        ex18();
        exercicios();
        break;

    case 19:
        ex19();
        exercicios();
        break;

    default:

        console.error("erro no sistema, nenhuma opção foi declarada");
        break;
}
}
exercicios ();