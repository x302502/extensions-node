export {};
interface IObjectPromise<T = any> {
    [key: string]: () => Promise<T>;
}
interface IObject {
    [key: string]: any;
}
interface IResultWhen {
    errors: any[];
    result: any[];
}
declare global {
    interface PromiseConstructor {
        when(promises: Promise<any>[]): PromiseLike<IResultWhen>;
        allObject(objPromise: IObjectPromise): Promise<IObject>;
        retry<T = any>(funcPromise: () => Promise<T>, limit: number, idxRetry?: number): Promise<T> | undefined;
    }
}
