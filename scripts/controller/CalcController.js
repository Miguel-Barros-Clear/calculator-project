class CalcController {
    constructor() {
        this._dataAtual;
        this._displayCalc = "0";
        this.initialize();
    }

    initialize(){
        let displayCalcE1 = document.querySelector('#display');
        let dateE1 = document.querySelector('#data');
        let timeE1 = document.querySelector('#hora');

        displayCalcE1.innerHTML = "4567"
        dateE1.innerHTML = "01/05/2020"
        timeE1.innerHTML = "00:00"
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor; 
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(valor){
        this._currentDate = valor;
    }
}