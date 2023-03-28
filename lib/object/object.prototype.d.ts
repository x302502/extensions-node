export {};
declare global {
    interface Object {
        defEqual(this: Object, compareValue: any): boolean;
    }
}
