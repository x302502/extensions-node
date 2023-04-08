# Interface: PromiseConstructor

[promise/promise.contructor](../wiki/promise.promise.contructor).PromiseConstructor

## Table of contents

### Methods

- [allObject](../wiki/promise.promise.contructor.PromiseConstructor#allobject)
- [retry](../wiki/promise.promise.contructor.PromiseConstructor#retry)
- [when](../wiki/promise.promise.contructor.PromiseConstructor#when)

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

[promise/promise.contructor.ts:20](https://github.com/x302502/extensions-node/blob/59eb6dc/src/promise/promise.contructor.ts#L20)

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

[promise/promise.contructor.ts:21](https://github.com/x302502/extensions-node/blob/59eb6dc/src/promise/promise.contructor.ts#L21)

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

[promise/promise.contructor.ts:19](https://github.com/x302502/extensions-node/blob/59eb6dc/src/promise/promise.contructor.ts#L19)
