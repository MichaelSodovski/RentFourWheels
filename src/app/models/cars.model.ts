export class carsModel {

    constructor (
        public id?: number, 
        public carTypeId?: number, 
        public manufacturer?: string,
        public model?: string,
        public yearOfManufacture?: number,
        public gearBox?: string,
        public name?: string,
        public kilometrage?: number, 
        public usability?: string,
        public availability?: string,
        public vin?: number,
        public branchName?: number,
        public image?: File,
        public imageFileName?: string,
        ) {}
}