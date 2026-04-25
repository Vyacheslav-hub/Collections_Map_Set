export class ErrorRepository {
    constructor() {
        this.errorMap = new Map;
        this.errorMap
            .set(404, 'Not Found')
            .set(400, 'Bad Request')
            .set(200, 'Ok')
            .set(204, 'No Content');
    };

    translate(code) {
        if (!this.errorMap.has(code)) {
            return 'Unknown error';
        }

        return this.errorMap.get(code);
    };
}

const error = new ErrorRepository();

console.log(error);

console.log(error.translate(404));

console.log(error.translate(500));


