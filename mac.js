class MAC {

    constructor(){
        this.back = null;        // Rückimpuls
        this.mode = "BACK";      // später CALLBACK
        this.cplus = 1.0;        // Korrektor
    }

    // c+ setzen
    setCPlus(v){
        this.cplus = v;
    }

    // MAC empfängt ClockHW.compute()
    receive(timeValue){
        // Hinterkopf = Zeitwert korrigiert
        this.back = timeValue * this.cplus;

        return {
            mode: this.mode,
            raw: timeValue,
            corrected: this.back,
            directive: ClockHW.directive(this.back)
        };
    }

    // später wird das ein echter Callback
    callback(stage){
        return stage * this.cplus;
    }
}

window.MAC = new MAC();
