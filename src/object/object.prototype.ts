export { };
declare global {
    interface Object {
        defEqual(this: Object, compareValue: any): boolean;
        deepClone(this: Object): Object;
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


Object.defineProperty(Object.prototype, 'deepClone', {
    // enumerable: false,
    // configurable: false,
    // writable: false, 
    value: function () {
        return Object.deepClone(this);
    }
});

