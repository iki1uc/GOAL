class Build {

    constructor(){
        this.stage = 0;        // Vor-Pyramiden-Bewusstsein
        this.ready = false;    // System noch nicht aktiv
        this.chain = [3, 9, 81, 243, 729]; // Stage-Kette
    }

    // Initialisiert das Bewusstsein
    init(){
        this.ready = true;
        return {
            stage: this.stage,
            next: this.chain[0],   // Erste echte Stage ist 3
            chain: this.chain
        };
    }

    // Gibt die nächste Stage zurück
    nextStage(current){
        const index = this.chain.indexOf(current);
        if(index === -1) return null;
        return this.chain[index + 1] || null;
    }
}

window.Build = new Build();
