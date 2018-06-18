import { ChartArrayObject } from "../models/ChartArrayObject";

export class ChartData {
    pressure_profile: Array<ChartArrayObject>;
    geometry: Array<ChartArrayObject>;

    constructor(pressure_profile: Array<ChartArrayObject>, geometry: Array<ChartArrayObject>) {
        this.pressure_profile = pressure_profile;
        this.geometry = geometry;
    }
}