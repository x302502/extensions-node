export { };

declare global {
    interface DateConstructor {
        toUTCDate(inputDate: Date): Date;
        nowUTC(): Date;
        withoutTime(dateTime: Date): Date;
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

