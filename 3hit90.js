class Hit3to90 {

    constructor(){
        this.stage = 3;          // Startstage
        this.hit = 0;            // Impact-Wert
        this.threshold = 90;     // 90er Schwellwert
        this.element = "ICE";    // ICE / FEUER
        this.honor = "0%";       // Ruhm-Level
    }

    // Werte aus Urne übernehmen
    loadFromUrne(entry){
        this.element = entry.element;   // ICE / FEUER
        this.honor = entry.honor;       // 1% - 100%
    }

    // Impact berechnen
    calculateHit(){
        const honorValue = parseInt(this.honor); // z.B. "42%" → 42

        // FEUER verstärkt, ICE stabilisiert
        if(this.element === "FEUER"){
            this.hit = honorValue * 1.2;     // 20% Boost
        } else {
            this.hit = honorValue * 0.8;     // 20% Stabilisierung
        }

        return this.hit;
    }

    // Übergabe prüfen
    evaluate(){
        const hitValue = this.calculateHit();

        return {
            stage: this.stage,
            hit: hitValue,
            threshold: this.threshold,
            pass: hitValue >= this.threshold,   // Übergabe zu Stage 9?
            nextStage: hitValue >= this.threshold ? 9 : 3
        };
    }
}

window.Hit3to90 = new Hit3to90();
this.hit = MassHW.calcImpuls(this.hit);
