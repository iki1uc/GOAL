// 81_81_1 / api.js

import { geoAxes, geoLAGE } from "./geo.js";
import cubes from "./cubes.json" assert { type: "json" };

export function getCube(n) {
    const c = cubes.cubes[n];
    return {
        axes: geoAxes(c.Phi, c.phi, c.phi2, c.phiinfty),
        lage: geoLAGE(c.Phi, c.phi, c.phi2, c.phiinfty)
    };
}

export function getAllCubes() {
    return cubes.cubes.map(c => ({
        axes: geoAxes(c.Phi, c.phi, c.phi2, c.phiinfty),
        lage: geoLAGE(c.Phi, c.phi, c.phi2, c.phiinfty)
    }));
}

