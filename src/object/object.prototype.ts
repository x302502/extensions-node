export { };
declare global {
    interface Object {
        defEqual(this: Object, compareValue: any): boolean
    }
}
Object.defineProperty(Object.prototype, 'defEqual', {
    // enumerable: false,
    // configurable: false,
    // writable: false, 
    value: function (compareValue: any) {
        return Object.defEqual(this, compareValue);
    }
});

