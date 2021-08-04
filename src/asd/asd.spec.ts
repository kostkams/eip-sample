import Asd from './asd';

describe('Asd', () => {
    test('sub', () => {
        expect(new Asd().sub(2 ,1)).toBe(1);
    });
});
