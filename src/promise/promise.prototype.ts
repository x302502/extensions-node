



export { };
interface IResultWhen {
    errors: any[];
    result: any[]
}
declare global {
    interface Promise<T = any> {
        // retry<TRes = any>(limit: number, idxRetry?: number): Promise<TRes> | undefined;
    }
}


// Promise.prototype.retry = function (limit: number, idxRetry?: number) {
//     return Promise.retry(() => this, limit, idxRetry)
// }


