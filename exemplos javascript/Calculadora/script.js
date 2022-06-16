function calcular(){
    let optionMessage =
    `O que deseja fazer?` +
    `\n Digite:` +
    `\n 1. Soma` +
    `\n 2. Subtrair` +
    `\n 3. Multiplicar` +
    `\n 4. Dividir`;

    let option = window.prompt(optionMessage);
    let result;

    let number1 = parseInt(window.document.getElementById("number1").value);
    let number2 = parseInt(window.document.getElementById("number2").value);

    switch (option) {
        case 1: // somar
            result = number1 + number2;
            break;
        case 2: // sub
            result = number1 - number2;
            break;
        case 3: // multiplicar
            result = number1 * number2;
            break;
        case 4: // dividir
            result = number1 / number2;
            break;

    }
    let elementoHTML = window.document.getElementById("Resultado: " + result);

  


}