//document.getElementyById("container").innerHTML ="conteudo";

// let container = document.getElementById("container");

//let maças = 2;
//let bananas = 3;
//let soma = maças + bananas;

//container.innerHTML = soma;


//let texto = "meu nome é ";
//let nome = "felipe ferreira";
//let soma = texto + nome;

//container.innerHTML = soma;

//const NASCIMENTO = "03/10/2000";
//let nome = "felipe ferreira";

//container.innerHTML = nome + NASCIMENTO;


function somar()
{

  let v1 = Number(Valor1.value);
  let v2 = Number(Valor2.value);
  document.getElementById("resultado").innerHTML = v1 + v2;

}


function subtrair()

{

    let v1 = Number(Valor1.value);
    let v2 = Number(Valor2.value);
    document.getElementById("resultado").innerHTML = v1 - v2;
  


}

function multiplicar()

{
     let v1 = Number(Valor1.value);
     let v2 = Number(Valor2.value);
     document.getElementById("resultado").innerHTML = v1 * v2;



}

function dividir()

{

let v1 = Number(Valor1.value);
let v2 = Number(Valor2.value);
document.getElementById("resultaddo").innerHTML = v1 / v2;


}