import {ErrorRepository} from "../ErrorRepository.js";
describe('ErrorRepository', () => {
    let error;

    beforeEach(() => {
        error = new ErrorRepository();
    });

    describe('Проверка существующих кодов', () => {
        test.each([
            [404, 'Not Found'],
            [400, 'Bad Request'],
            [200, 'Ok'],
            [204, 'No Content'],
        ])('добавление кода %i', (code, expected) => {
            expect(error.translate(code)).toBe(expected);
        });
    });

    test('Проверка несуществующего кода', () => {
        const result = error.translate(500)
        expect(result).toBe('Unknown error');
    })
});
