var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {       
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {       
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {      
        tdImc.textContent = calculaImc(peso, altura);
    }
}

function calculaImc(peso, altura)
{ 
    return (peso / (altura * altura)).toFixed(2);
}

function validaPeso(peso)
{
    var pesoValido = peso >= 0 && peso <= 1000;   
    return pesoValido;
}

function validaAltura(altura)
{
    var validaAltura = altura >= 0 && altura <= 3.00;
    return validaAltura;  
}
