class TranswarpStage {

    constructor(){
        this.stage = 3;
    }

    set(value){
        this.stage = value;   // jede Zahl erlaubt
        return this.stage;
    }

    next(){
        return this.stage * 3;   // Transwarp-Faktor
    }

    continuum(){
        return this.stage ** 2;  // Continuum-Faltung
    }
}

window.TranswarpStage = new TranswarpStage();
