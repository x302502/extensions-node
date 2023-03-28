import { isDeepStrictEqual } from "util";
export { }
declare global {
    interface ObjectConstructor {
        defEqual(targetValue: any, compareValue: any): boolean
    }

}

Object.defEqual = function (targetValue: any, compareValue: any): boolean {
    return isDeepStrictEqual(targetValue, compareValue)
}


