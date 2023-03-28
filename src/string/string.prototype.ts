

export { };
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


String.prototype.removeAccents = function (this: string): string {
    return String.removeAccents(this);
}
String.prototype.createInternalString = function (this: string): string {
    return String.createInternalString(this);
}
String.prototype.camelCaseToSnakeCase = function (this: string): string {
    return String.camelCaseToSnakeCase(this);
}
String.prototype.snakeCaseToCamelCase = function (this: string): string {
    return String.snakeCaseToCamelCase(this);
}
String.prototype.upperCaseFirstLetter = function (this: string): string {
    return String.upperCaseFirstLetter(this);
}
String.prototype.toCamelCase = function (this: string): string {
    return String.toCamelCase(this);
}
String.prototype.removeNonWord = function (this: string): string {
    return String.removeNonWord(this);
}
String.prototype.unCamelCase = function (this: string): string {
    return String.unCamelCase(this);
}
String.prototype.toProperCase = function (this: string): string {
    return String.toProperCase(this);
}
String.prototype.toPascalCase = function (this: string): string {
    return String.toPascalCase(this);
}
String.prototype.removeNonASCII = function (this: string): string {
    return String.removeNonASCII(this);
}
String.prototype.stripHtmlTags = function (this: string): string {
    return String.stripHtmlTags(this);
}



