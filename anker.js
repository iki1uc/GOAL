class Flanke {

    constructor(){
        this.mode = "ICE";     // Standard: stabil
        this.stage = null;     // aktuelle Stage
        this.target = null;    // Übergabe-Ziel
    }

    // Modus setzen (ICE / FEUER)
    setMode(mode){
        if(mode !== "ICE" && mode !== "FEUER"){
            throw new Error(`Ungültiger Modus: ${mode}`);
        }
        this.mode = mode;
    }

    // Stage setzen
    setStage(stage){
        this.stage = stage;
    }

    // Übergabe vorbereiten
    prepare(target){
        this.target = target;
        return {
            mode: this.mode,
            from: this.stage,
            to: this.target
        };
    }
}

window.Flanke = new Flanke();
