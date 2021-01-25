export class branchModel {

    static cars: branchModel[];

    constructor (
        public branchId?: number, 
        public latitude?: number, 
        public longitude?: number, 
        public branchName?: string,
        public cars?: branchModel[]
        ) {}
}