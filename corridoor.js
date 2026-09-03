class Corridor {

    constructor(){
        this.station = null;
    }

    // Setzt die Stationsnummer
    setStation(number){
        this.station = number;
    }

    // Holt die Stationsnummer
    getStation(){
        return this.station;
    }

    // Übersetzer: 3×1 → 3×3 → 9×9 → Corridor
    translate(inputSize){
        switch(inputSize){
            case 3:   return 3;     // slice 3×1
            case 9:   return 9;     // slice 3×3
            case 81:  return 81;    // core 9×9
            case 243: return 243;   // corridor level 1
            case 729: return 729;   // corridor level 2
            default:
                throw new Error(`Unbekannte Stationsgröße: ${inputSize}`);
        }
    }
}

window.Corridor = new Corridor();
