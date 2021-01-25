export class addCarModel {

    constructor (
        public id?: number, 
        public typeId?: number, 
        public kilometrage?: number, 
        public usability?: string,
        public availability?: string,
        public vin?: number,
        public branch?: number,
        public image?: File,
        public imageFileName?: string,
        ) {}
}