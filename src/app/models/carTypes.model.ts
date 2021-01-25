export class CarTypesModel {

    static carsTypes: CarTypesModel[];

    constructor (
        public carTypeId?: number, 
        public manufacturer?: string, 
        public model?: string, 
        public dailyCost?: number,
        public delayCost?: number,
        public yearOfManufacture?: number,
        public gearBox?: string,
        public icon?: File,
        public iconFileName?: string,
        public carsTypes?: CarTypesModel[]
        ) {}
}