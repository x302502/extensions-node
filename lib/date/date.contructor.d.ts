export {};
declare global {
    interface DateConstructor {
        toUTCDate(inputDate: Date): Date;
        nowUTC(): Date;
        withoutTime(dateTime: Date): Date;
    }
}
