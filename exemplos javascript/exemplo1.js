function somar(){
    var varn1;
    varn1 = parseInt(document.querySelector("#n1").value);

    var varn2;
    varn2 = parseInt(document.querySelector("#n2").value);

    var soma = 0;

    soma = varn1 + varn2;

//alert ("Soma= " + soma );
alert(`O resutado da soma é igual a ${soma}`)
}