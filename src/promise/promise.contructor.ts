

export { };
interface IObjectPromise<T = any> {
    [key: string]: () => Promise<T>
}
interface IObject { [key: string]: any }

interface IResultWhen {
    errors: any[];
    result: any[]
}
interface IResultRetry<T = any> {
    status: "SUCCESS" | "FAIL";
    result: T
}
declare global {
    interface PromiseConstructor {
        when(promises: Promise<any>[]): PromiseLike<IResultWhen>;
        allObject(objPromise: IObjectPromise): Promise<IObject>;
        retry<T = any>(funcPromise: () => Promise<T>, limit: number, idxRetry?: number): Promise<T> | undefined;
    }
}
Promise.when = (promises: Promise<any>[]): PromiseLike<IResultWhen> => {
    return new Promise((resolve, reject) => {
        let errors: any[] = [];
        let result: any[] = [];
        let count = 0;
        if (promises.length === 0) {
            resolve({
                errors,
                result
            });
        } else {
            for (const [idx, promise] of promises.entries()) {
                promise.then(res => {
                    result.push(res);
                    count += 1;
                    if (count === promises.length) {
                        resolve({
                            errors,
                            result
                        });
                    }
                }).catch(err => {
                    errors.push(err);
                    count += 1;
                    if (count === promises.length) {
                        resolve({
                            errors,
                            result
                        });
                    }
                });
            }
        }

    });
}

Promise.allObject = async (objPromise: IObjectPromise = {}) => {
    const list = [];
    for (let index = 0; index < Object.keys(objPromise).length; index++) {
        const key = Object.keys(objPromise)[index];
        list.push(objPromise[key]())
    }
    const res = await Promise.all(list)
    const output = {};
    for (let index = 0; index < Object.keys(objPromise).length; index++) {
        const key = Object.keys(objPromise)[index];
        Object.assign(output, {
            [key]: res[index]
        })
    }
    return output;
}


Promise.retry = async <T = any>(funcPromise: () => Promise<T>, limit: number, idxRetry: number = 1) => {
    const { status, result } = await funcPromise().then(result => {
        return {
            status: "SUCCESS",
            result
        }
    })
        .catch(err => {
            if (idxRetry >= limit) {
                throw err;
            }
            return {
                status: "FAIL",
                result: err
            };
        })
    if (status === "FAIL") {
        return Promise.retry(funcPromise, limit, idxRetry + 1)
    }
    return result;
}



