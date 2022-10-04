const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    // Adiciona digito na tela da calculadora
    addDigit(digit) {
        // Verifica se a operacao ja tem um ponto
        if (digit == "." && this.currentOperationText.innerText.includes(".")) {
            return;
        }

        this.currentOperation = digit;
        this.updateScreen()
    }

    // Processa todas as operacoes da calculadora
    processOperation(operation) {
        // Verifica se o valor atual esta vazio
        if(this.currentOperationText.innerText === "" && operation !== "C"){
                // Muda a operacao
            if(this.previousOperationText !== ""){
                this.changeOperation(operation);
            }
            return;
        }

        // Pega o valor atual e anterior
        let operationValue;
        const previous = +this.previousOperationText.innerText.split(" ")[0];
        const current = +this.currentOperationText.innerText;

        switch (operation) {
            case "+":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "-":
                operationValue = previous - current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "*":
                operationValue = previous * current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "/":
                operationValue = previous / current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "DEL":
                this.processDelOperator();
                break;
            case "CE":
                this.processClearCurrentOperation();
                break;
            case "C":
                this.processClearOperation();
                break;
            case "=":
                this.processEqualsOperator();
                break;
            default:
                return;
        }
    }

    // Mudando valores na tela da calculadora
    updateScreen(operationValue = null, operation = null, current = null, previous = null) {
        if (operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            // Checando se o valor e zero, se for adiciona um valor atual
            if (previous === 0) {
                operationValue = current;
            }

            // Adiciona valor atual para anterior
            this.previousOperationText.innerText = `${operationValue} ${operation}`; // Crase usada para string
            this.currentOperationText.innerText = "";
        }
    }

    // Muda valor da operacao matematica
    changeOperation(operation){
        const mathOperations = ["*", "/", "+", "-"];

        // Verifica se nao chegou nada aleatorio no console da calculadora
        if(!mathOperations.includes(operation)){
            return;
        }

        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation; // slice remove o ultimo caractere 
    }

    // Deleta o ultimo digito
    processDelOperator(){
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0,-1);
    }

    // Apaga a operacao atual
    processClearCurrentOperation(){
        this.currentOperationText.innerText = ""; 
    }

    // Limpa a operacao toda
    processClearOperation(){
        this.currentOperationText.innerText = ""; 
        this.previousOperationText.innerText = ""; 
    }

    // Processa a operacao
    processEqualsOperator(){
        const operation = previousOperationText.innerText.split(" ")[1];
        this.processOperation(operation);
        
        // Mostrando resultado na parte principal da tela
        const show = new Calculator(previousOperationText, currentOperationText);
        show.addDigit(previousOperationText.innerText);
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0,-1);
        this.previousOperationText.innerText = ""; 
        
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if (+value >= 0 || value === ".") { // +value pega o valor e converte em num
            console.log(value);
            calc.addDigit(value);
        } else {
            calc.processOperation(value);
        }
    })
})