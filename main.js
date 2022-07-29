// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso'); //depois ver melhor o e.target
    const inputAltura = e.target.querySelector('#altura'); //está pegando toda a estrutura do campo do inputPeso

    const peso = Number(inputPeso.value); //está pegando somente o valor do input peso e fazendo um cast pra number
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;

    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];

}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const paragrafo = document.createElement('p'); //cria um objeto (paragrafo) do tipo parágrado do HTML ('p')
    return paragrafo;
}


function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const paragrafo = criaP();

    if (isValid) {
        paragrafo.classList.add('paragrafo-resultado')
    } else {
        paragrafo.classList.add('bad')
    }

    paragrafo.innerHTML = msg;
    resultado.appendChild(paragrafo);
}

/*
 paragrafo.innerHTML = 'Qualquer coisa'; //inserindo um texto no objeto paragrafo pelo innerHTML
    paragrafo.classList.add('paragrafo-resultado'); //criando uma nova classe para o objeto paragrafo que criamos
    resultado.appendChild(paragrafo); //somente usando o appendChild que conseguimos colocar no HTML o objeto paragrafo
*/