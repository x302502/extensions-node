export {};
declare global {
    interface String {
        removeAccents(this: string): string;
        createInternalString(this: string): string;
        camelCaseToSnakeCase(this: string): string;
        snakeCaseToCamelCase(this: string): string;
        upperCaseFirstLetter(this: string): string;
        toCamelCase(this: string): string;
        removeNonWord(this: string): string;
        unCamelCase(this: string): string;
        toProperCase(this: string): string;
        toPascalCase(this: string): string;
        removeNonASCII(this: string): string;
        stripHtmlTags(this: string): string;
    }
}
