class Arbeit {

    constructor(){
        this.stage = 3;          // Startstage
        this.mode = "CALL";      // CALL oder RECALL
        this.pipe = null;        // Pipeline-Name
        this.result = null;      // Ergebnis
    }

    // Stage setzen
    setStage(stage){
        this.stage = stage;
    }

    // CALL-Pipelines
    runCall(pipeName){
        this.mode = "CALL";
        this.pipe = pipeName;

        switch(pipeName){
            case "HWpipeline":
                this.result = Call.pipeline(this.stage);
                break;

            case "HWpipeline1":
                this.result = Call.pipeline1(this.stage);
                break;

            case "HWpipeline12":
                this.result = Call.pipeline12(this.stage);
                break;

            default:
                throw new Error(`Unbekannte CALL-Pipeline: ${pipeName}`);
        }

        return this.result;
    }

    // RECALL-Pipelines
    runRecall(pipeName){
        this.mode = "RECALL";
        this.pipe = pipeName;

        switch(pipeName){
            case "HWpipeline3":
                this.result = Recall.pipeline3(this.stage);
                break;

            case "HWpipeline6":
                this.result = Recall.pipeline6(this.stage);
                break;

            case "HWpipeline9":
                this.result = Recall.pipeline9(this.stage);
                break;

            default:
                throw new Error(`Unbekannte RECALL-Pipeline: ${pipeName}`);
        }

        return this.result;
    }

    // Ergebnis abrufen
    getResult(){
        return this.result;
    }
}

window.Arbeit = new Arbeit();
const t = TimeHW.update();
const z = ClockHW.compute(t.delta);

MassHW.setMasse(1, 1);
MassHW.calcImpuls(z);
MassHW.calcKraft(z);
MassHW.calcEnergie(z);
MassHW.calcGradient(z, ClockHW.curve);

Arbeit.mass = MassHW;
