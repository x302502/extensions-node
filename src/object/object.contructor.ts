import { isDeepStrictEqual } from "util";
export { }
declare global {
    interface ObjectConstructor {
        defEqual(targetValue: any, compareValue: any): boolean;
        deepClone<T = any>(targetValue: T): T;
    }

}

Object.defEqual = function (targetValue: any, compareValue: any): boolean {
    return isDeepStrictEqual(targetValue, compareValue)
}

Object.deepClone = function <T = any>(targetValue: T): T {
    return JSON.parse(JSON.stringify(targetValue));
}




