class MassHW {

    constructor(){
        this.masse = 1;
        this.dichte = 1;
        this.impuls = 0;
        this.kraft = 0;
        this.energie = 0;
        this.gradient = 1;
    }

    // Masse berechnen
    setMasse(m, d){
        this.masse = m;
        this.dichte = d;
    }

    // Impuls berechnen
    calcImpuls(geschwindigkeit){
        this.impuls = this.masse * geschwindigkeit;
        return this.impuls;
    }

    // Kraft berechnen
    calcKraft(zeit){
        this.kraft = this.impuls / zeit;
        return this.kraft;
    }

    // Energie berechnen
    calcEnergie(zeit){
        this.energie = this.kraft * zeit;
        return this.energie;
    }

    // Zeitkrümmung
    calcGradient(zeit, kurve){
        this.gradient = Math.pow(zeit, kurve);
        return this.gradient;
    }
}

window.MassHW = new MassHW();
