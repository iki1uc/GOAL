class Flanke {

    constructor(){
        this.mode = "ICE";     // ICE oder FEUER
        this.stage = null;     // aktuelle Stage
        this.target = null;    // Übergabe-Ziel
        this.honor = null;     // Ruhm-Level aus der Urne
    }

    // Übernimmt die Werte aus einem Urnen-Eintrag
    loadFromUrne(entry){
        this.stage = entry.stage;
        this.mode = entry.element;   // ICE / FEUER
        this.honor = entry.honor;
    }

    // Übergabe vorbereiten
    prepare(targetStage){
        this.target = targetStage;

        return {
            mode: this.mode,
            from: this.stage,
            to: this.target,
            honor: this.honor
        };
    }
}

window.Flanke = new Flanke();
