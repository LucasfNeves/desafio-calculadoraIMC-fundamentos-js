// function que envelopa meu escopo para não poluir o window
function mainEscope (){

    const formImc = document.querySelector('#formCalculatorImc');

    // escuta meu evento de submit
    formImc.addEventListener('submit', function (event){
        event.preventDefault();

        //Captura os valores dos input do meu form, pois a função addEventlistener está escutando o form
        const weigthInput = event.target.querySelector('#weigth');
        const heigthInput = event.target.querySelector('#heigth');

        // Validação
        const weigthValue = Number(weigthInput.value);
        const heigthValue =Number( heigthInput.value * 0.01)

        if (!weigthValue) return setResultForm('Peso inválido', false);
        if (!heigthValue) return setResultForm('Altura inválida', false);

        const resultImc = calculatorImc(weigthValue, heigthValue);
        const levelImc = getLevelImc(resultImc);

        const mensage = `Seu IMC é ${resultImc}, ${levelImc}.`;

        setResultForm(mensage, true);
    });

    function getLevelImc (resultImc) {
        const levelImc = [
            "Abaixo do peso",
            "Peso normal",
            "Sobrepeso",
            "Obesidade grau 1",
            "Obesidade grau 2",
            "Obesidade grau 3"
        ]; 

        if (resultImc >= 39.9) { 
            return levelImc[5];
        };
        if (resultImc >= 34.9) {
            return levelImc[4];
        };
        if (resultImc >= 29.9) {
            return levelImc[3];
        };
        if (resultImc >= 24.9) {
            return levelImc[2];
        };
        if (resultImc >= 18.5) {
            return levelImc[1];
        };
        if (resultImc < 18.5) { 
        return levelImc [0];
        };

    } ;

    function  calculatorImc (weigthValue, heigthValue) { 
        const resultImc = weigthValue / Math.pow(heigthValue, 2);
        return resultImc.toFixed(2);
    };

    const creatParagraph = () => {
        const paragraph = document.createElement('p');
        return paragraph;
    };
    
    // função que adiciona contéudo na página 
    function setResultForm (mensage, isValid) {
        const result = document.querySelector("#ImcCalculatorResult");
        result.innerHTML = '';
        const paragraph = creatParagraph();
       
        if (isValid) {
            paragraph.classList.add("IsValid")
        } else {
            paragraph.classList.add("NotValid")
        }

        paragraph.innerHTML = mensage;
        result.appendChild(paragraph);
    };
}

mainEscope();