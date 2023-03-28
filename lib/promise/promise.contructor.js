"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Promise.when = (promises) => {
    return new Promise((resolve, reject) => {
        let errors = [];
        let result = [];
        let count = 0;
        if (promises.length === 0) {
            resolve({
                errors,
                result
            });
        }
        else {
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
};
Promise.allObject = async (objPromise = {}) => {
    const list = [];
    for (let index = 0; index < Object.keys(objPromise).length; index++) {
        const key = Object.keys(objPromise)[index];
        list.push(objPromise[key]());
    }
    const res = await Promise.all(list);
    const output = {};
    for (let index = 0; index < Object.keys(objPromise).length; index++) {
        const key = Object.keys(objPromise)[index];
        Object.assign(output, {
            [key]: res[index]
        });
    }
    return output;
};
Promise.retry = async (funcPromise, limit, idxRetry = 1) => {
    const { status, result } = await funcPromise().then(result => {
        return {
            status: "SUCCESS",
            result
        };
    })
        .catch(err => {
        if (idxRetry >= limit) {
            throw err;
        }
        return {
            status: "FAIL",
            result: err
        };
    });
    if (status === "FAIL") {
        return Promise.retry(funcPromise, limit, idxRetry + 1);
    }
    return result;
};
