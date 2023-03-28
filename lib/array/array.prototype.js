"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.byMap = function (uniqueKeys) {
    return this.reduce((result, item) => {
        const key = uniqueKeys.map(key => item[key]).join();
        result[key] = item;
        return result;
    }, {});
};
Array.prototype.byMapJsonKey = function (uniqueKeys) {
    return this.reduce((result, item) => {
        const jsonKey = uniqueKeys.reduce((prevValue, currentValue) => {
            prevValue[currentValue] = item[currentValue];
            return prevValue;
        }, {});
        const key = JSON.stringify(jsonKey);
        result[key] = item;
        return result;
    }, {});
};
Array.prototype.byMapArray = function (groupKeys) {
    return this.reduce((result, item) => {
        const key = groupKeys.map(key => item[key]).join();
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
};
Array.prototype.byMapArrayJsonKey = function (groupKeys) {
    return this.reduce((result, item) => {
        const jsonKey = groupKeys.reduce((prevValue, currentValue) => {
            prevValue[currentValue] = item[currentValue];
            return prevValue;
        }, {});
        const key = JSON.stringify(jsonKey);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
};
