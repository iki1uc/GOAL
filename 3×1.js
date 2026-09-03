class SLICE_3x1 {

    constructor(){
        this.size = 3;
        this.line = [];
    }

    // QI – reine Index-Schaltung
    qi(i){
        if(i < 0 || i >= this.size){
            throw new Error(`Index out of range: i=${i}`);
        }
        return i;
    }

    // IQQ – 3-Zustands-Schaltung
    iqq(i){
        return this.qi(i) % 3;
    }

    // OCTA – 8-Wege-Intelligenz
    octaRoute(qi){
        return qi % 8;
    }

    // PIPE 3 – tri-routing
    pipeTri(qi){
        return qi % 3;
    }

    // BUILD – erzeugt die 3×1 Linie
    build(){
        this.line = [];

        for(let i=0; i<3; i++){
            const qi  = this.qi(i);
            const iqq = this.iqq(i);

            this.line.push({
                qi: qi,
                iqq: iqq,
                octa: this.octaRoute(qi),
                pipe3: this.pipeTri(qi)
            });
        }

        return this.line;
    }
}

window.SLICE_3x1 = new SLICE_3x1();
