class Controller {
    constructor() {
        this._dataAtual;
        this._displayCalc = "0";
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor; 
    }

    get dataAtual(){
        return this._dataAtual;
    }

    set dataAtual(valor){
        this._dataAtual = valor;
    }
}