[extensionsjs](../README.md) / [Modules](../modules.md) / [promise/promise.contructor](../modules/promise_promise_contructor.md) / PromiseConstructor

# Interface: PromiseConstructor

[promise/promise.contructor](../modules/promise_promise_contructor.md).PromiseConstructor

## Table of contents

### Methods

- [allObject](promise_promise_contructor.PromiseConstructor.md#allobject)
- [retry](promise_promise_contructor.PromiseConstructor.md#retry)
- [when](promise_promise_contructor.PromiseConstructor.md#when)

## Methods

### allObject

▸ **allObject**(`objPromise`): `Promise`<`IObject`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `objPromise` | `IObjectPromise`<`any`\> |

#### Returns

`Promise`<`IObject`\>

#### Defined in

[promise/promise.contructor.ts:20](https://github.com/x302502/extensions-node/blob/9dfce28/src/promise/promise.contructor.ts#L20)

___

### retry

▸ **retry**<`T`\>(`funcPromise`, `limit`, `idxRetry?`): `undefined` \| `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `funcPromise` | () => `Promise`<`T`\> |
| `limit` | `number` |
| `idxRetry?` | `number` |

#### Returns

`undefined` \| `Promise`<`T`\>

#### Defined in

[promise/promise.contructor.ts:21](https://github.com/x302502/extensions-node/blob/9dfce28/src/promise/promise.contructor.ts#L21)

___

### when

▸ **when**(`promises`): `PromiseLike`<`IResultWhen`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `promises` | `Promise`<`any`\>[] |

#### Returns

`PromiseLike`<`IResultWhen`\>

#### Defined in

[promise/promise.contructor.ts:19](https://github.com/x302502/extensions-node/blob/9dfce28/src/promise/promise.contructor.ts#L19)
