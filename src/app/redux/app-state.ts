import { carsModel } from '../models/cars.model';

export class appState {
    public cars: carsModel[];

    public constructor() {
        this.cars = [];
    }
}