export {};
declare global {
    interface Array<T> {
        byMap(uniqueKeys: Array<keyof T>): {
            [key: string]: T;
        };
        byMapJsonKey(uniqueKeys: Array<keyof T>): {
            [key: string]: T;
        };
        byMapArray(groupKeys: Array<keyof T>): {
            [key: string]: T[];
        };
        byMapArrayJsonKey(groupKeys: Array<keyof T>): {
            [key: string]: T[];
        };
    }
}
