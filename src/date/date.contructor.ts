export { };

declare global {
    interface DateConstructor {
        toUTCDate(inputDate: Date): Date;
        nowUTC(): Date;
        withoutTime(dateTime: Date): Date;
        firstDayOfYear(year: number): Date;
        lastDayOfYear(year: number): Date;
        firstDayOfMonth(year: number, month: number): Date;
        lastDayOfMonth(year: number, month: number): Date;
    }
}

Date.toUTCDate = (inputDate: Date) => {
    return new Date(inputDate.getTime() + inputDate.getTimezoneOffset() * 60000);
}

Date.nowUTC = () => {
    const date = new Date();
    return Date.toUTCDate(date);
}

Date.withoutTime = (dateTime: Date) => {
    const date = new Date(dateTime.getTime());
    date.setHours(0, 0, 0, 0);
    return date;
}

Date.firstDayOfYear = (year: number) => {
    return new Date(year, 0, 1, 0, 0, 0, 0);
}

Date.lastDayOfYear = (year: number) => {
    return new Date(year, 11, 31, 23, 59, 59, 999);
}

Date.firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1, 0, 0, 0, 0);
}
Date.lastDayOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0, 23, 59, 59, 99);
}