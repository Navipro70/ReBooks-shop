export class Book {
    constructor(
        public bookName: string,
        public id: number,
        public image: string,
        public author: string,
        public price: number,
        public currency: string,
        public shortDescription: string
    ) {
    }
}