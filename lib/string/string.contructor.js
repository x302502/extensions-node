"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Convert string to camelCase text.
 */
function lowerCase(str) {
    return str.toLowerCase();
}
/**
 * "Safer" String.toUpperCase()
 */
function upperCase(str) {
    return str.toUpperCase();
}
String.removeAccents = (str) => {
    const AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
        "dđ",
        "DĐ",
        "eèẻẽéẹêềểễếệ",
        "EÈẺẼÉẸÊỀỂỄẾỆ",
        "iìỉĩíị",
        "IÌỈĨÍỊ",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
        "uùủũúụưừửữứự",
        "UÙỦŨÚỤƯỪỬỮỨỰ",
        "yỳỷỹýỵ",
        "YỲỶỸÝỴ"
    ];
    for (let i = 0; i < AccentsMap.length; i++) {
        let re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
        let char = AccentsMap[i][0];
        str = str.replace(re, char);
    }
    return str;
    // if (str.search(/[\xC0-\xFF]/g) > -1) {
    //     return str
    //         .replace(/[\xC0-\xC5]/g, "A")
    //         .replace(/[\xC6]/g, "AE")
    //         .replace(/[\xC7]/g, "C")
    //         .replace(/[\xC8-\xCB]/g, "E")
    //         .replace(/[\xCC-\xCF]/g, "I")
    //         .replace(/[\xD0]/g, "D")
    //         .replace(/[\xD1]/g, "N")
    //         .replace(/[\xD2-\xD6\xD8]/g, "O")
    //         .replace(/[\xD9-\xDC]/g, "U")
    //         .replace(/[\xDD]/g, "Y")
    //         .replace(/[\xDE]/g, "P")
    //         .replace(/[\xE0-\xE5]/g, "a")
    //         .replace(/[\xE6]/g, "ae")
    //         .replace(/[\xE7]/g, "c")
    //         .replace(/[\xE8-\xEB]/g, "e")
    //         .replace(/[\xEC-\xEF]/g, "i")
    //         .replace(/[\xF1]/g, "n")
    //         .replace(/[\xF2-\xF6\xF8]/g, "o")
    //         .replace(/[\xF9-\xFC]/g, "u")
    //         .replace(/[\xFE]/g, "p")
    //         .replace(/[\xFD\xFF]/g, "y");
    // }
    // return str;
};
String.createInternalString = (text) => {
    return String.removeAccents(text.trim().toLowerCase()).split(" ").filter(item => !!item).join("_");
};
String.camelCaseToSnakeCase = (text) => {
    return String.removeAccents(text.trim()).split(/(?=[A-Z])/).join('_').toLowerCase();
};
String.snakeCaseToCamelCase = (text) => {
    if (text.startsWith("_")) {
        text = text.substring(1);
    }
    return String.removeAccents(text.trim()).replace(/([-_][a-z])/g, (group) => group.toUpperCase()
        .replace('-', '')
        .replace('_', ''));
};
String.upperCaseFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
/**
 * Remove non-word chars.
 */
String.removeNonWord = (str) => {
    return str.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, "");
};
String.toCamelCase = (str) => {
    let strMix = String.removeAccents(str);
    return String.removeNonWord(strMix)
        .replace(/\-/g, " ") //convert all hyphens to spaces
        .replace(/\s[a-z]/g, upperCase) //convert first char of each word to UPPERCASE
        .replace(/\s+/g, "") //remove spaces
        .replace(/^[A-Z]/g, lowerCase); //convert first char to lowercase
};
/**
 * Add space between camelCase text.
 */
String.unCamelCase = (str) => {
    return str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2").toLowerCase();
};
/**
 * UPPERCASE first char of each word.
 */
String.toProperCase = (str) => {
    return lowerCase(str).replace(/^\w|\s\w/g, upperCase);
};
/**
 * camelCase + UPPERCASE first char
 */
String.toPascalCase = (str) => {
    return str.replace(new RegExp(/[-_]+/, 'g'), ' ')
        .replace(new RegExp(/[^\w\s]/, 'g'), '')
        .replace(new RegExp(/\s+(.)(\w+)/, 'g'), ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`)
        .replace(new RegExp(/\s/, 'g'), '')
        .replace(new RegExp(/\w/), s => s.toUpperCase());
};
/**
 * Remove HTML tags from string.
 */
String.stripHtmlTags = (str) => {
    return str.replace(/<[^>]*>/g, "");
};
/**
 * Remove non-printable ASCII chars
 */
String.removeNonASCII = (str) => {
    // Matches non-printable ASCII chars -
    // http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
    return str.replace(/[^\x20-\x7E]/g, "");
};
