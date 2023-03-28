"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
Object.defEqual = function (targetValue, compareValue) {
    return (0, util_1.isDeepStrictEqual)(targetValue, compareValue);
};
