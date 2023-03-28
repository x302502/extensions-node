export {};
declare global {
    interface StringConstructor {
        removeAccents(str: string): string;
        createInternalString(str: string): string;
        camelCaseToSnakeCase(str: string): string;
        snakeCaseToCamelCase(str: string): string;
        upperCaseFirstLetter(str: string): string;
        toCamelCase(str: string): string;
        removeNonWord(str: string): string;
        unCamelCase(str: string): string;
        toProperCase(str: string): string;
        toPascalCase(str: string): string;
        removeNonASCII(str: string): string;
        stripHtmlTags(str: string): string;
    }
}
