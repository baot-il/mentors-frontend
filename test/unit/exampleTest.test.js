describe('Testing sum and minus', () => {
    function sum(a, b) {
        return a + b;
    }
    function minus(a, b) {
        return a - b;
    }

    it('Testing sum', () => {
        expect(sum(2, 2)).toBe(4);
    });

    it('Testing minus', () => {
        expect(minus(5, 2)).toBe(3);
    });
});
