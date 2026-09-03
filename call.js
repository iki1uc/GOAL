class CallPipeline {

    constructor(){
        this.order = [3, 9, 81, 243, 729];
    }

    // HWpipeline (Grundlauf)
    pipeline(stage){
        return {
            pipe: "HWpipeline",
            current: stage,
            next: this.next(stage),
            order: this.order
        };
    }

    // HWpipeline1 (ein Schritt)
    pipeline1(stage){
        return {
            pipe: "HWpipeline1",
            current: stage,
            next: this.next(stage)
        };
    }

    // HWpipeline12 (12 Schritte)
    pipeline12(stage){
        const chain = [];
        let current = stage;

        for(let i = 0; i < 12; i++){
            current = this.next(current);
            chain.push(current);
            if(current === null) break;
        }

        return {
            pipe: "HWpipeline12",
            start: stage,
            chain: chain
        };
    }

    // Hilfsfunktion
    next(stage){
        const index = this.order.indexOf(stage);
        return this.order[index + 1] || null;
    }
}

window.Call = new CallPipeline();
const impulse = MassHW.calcImpuls(ClockHW.speed);
