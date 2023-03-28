export {};
declare global {
    interface ObjectConstructor {
        defEqual(targetValue: any, compareValue: any): boolean;
    }
}
