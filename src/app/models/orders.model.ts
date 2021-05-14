export class ordersModel {

    constructor (
        public orderId?: number, 
        public startDate?: Date, 
        public endDate?: Date, 
        public actualReturnDate?: Date, 
        public userId?: number,
        public vin?: number,
        public carId?: number,
        public avatar?: string,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        ) {}
}