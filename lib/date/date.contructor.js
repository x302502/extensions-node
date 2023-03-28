"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Date.toUTCDate = (inputDate) => {
    return new Date(inputDate.getTime() + inputDate.getTimezoneOffset() * 60000);
};
Date.nowUTC = () => {
    const date = new Date();
    return Date.toUTCDate(date);
};
Date.withoutTime = (dateTime) => {
    const date = new Date(dateTime.getTime());
    date.setHours(0, 0, 0, 0);
    return date;
};
