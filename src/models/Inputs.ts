export class Inputs {
    x: number;
    y: number;
    volumetric_expansion: number;
    C_Value_Threshold_for_Erosion: number;
    required_flowrate: number; // m3/hr
    density: number; // kg/m3
    viscosity: number; // cP
    outlet_pressure: number; // bar
    Re_laminar_max: number;
    Re_transitional_max: number;
}
