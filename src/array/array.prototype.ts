export { };
declare global {
    interface Array<T> {

        byMap(uniqueKeys: Array<keyof T>): { [key: string]: T }
        byMapJsonKey(uniqueKeys: Array<keyof T>): { [key: string]: T }

        byMapArray(groupKeys: Array<keyof T>): { [key: string]: T[] }
        byMapArrayJsonKey(groupKeys: Array<keyof T>): { [key: string]: T[] }
    }
}


Array.prototype.byMap = function <T>(this: Array<T>, uniqueKeys: Array<keyof T>) {
    return this.reduce<{ [key: string]: T }>((result, item) => {
        const key = uniqueKeys.map(key => item[key]).join();
        result[key] = item;
        return result;
    }, {})
}

Array.prototype.byMapJsonKey = function <T>(this: Array<T>, uniqueKeys: Array<keyof T>) {
    return this.reduce<{ [key: string]: T }>((result, item) => {
        const jsonKey = uniqueKeys.reduce<{ [key in keyof T]?: T[key] }>((prevValue, currentValue) => {
            prevValue[currentValue] = item[currentValue];
            return prevValue;
        }, {})
        const key = JSON.stringify(jsonKey);
        result[key] = item;
        return result;
    }, {})
}


Array.prototype.byMapArray = function <T>(this: Array<T>, groupKeys: Array<keyof T>) {
    return this.reduce<{ [key: string]: T[] }>((result, item) => {
        const key = groupKeys.map(key => item[key]).join();
        if (!result[key]) {
            result[key] = []
        }
        result[key].push(item);
        return result;
    }, {})
}
Array.prototype.byMapArrayJsonKey = function <T>(this: Array<T>, groupKeys: Array<keyof T>) {
    return this.reduce<{ [key: string]: T[] }>((result, item) => {
        const jsonKey = groupKeys.reduce<{ [key in keyof T]?: T[key] }>((prevValue, currentValue) => {
            prevValue[currentValue] = item[currentValue];
            return prevValue;
        }, {})
        const key = JSON.stringify(jsonKey);
        if (!result[key]) {
            result[key] = []
        }
        result[key].push(item);
        return result;
    }, {})
}

