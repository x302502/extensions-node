export { }
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

/**
 * Convert string to camelCase text.
 */
function lowerCase(str: string) {
  return str.toLowerCase();
}

/**
 * "Safer" String.toUpperCase()
 */
function upperCase(str: string) {
  return str.toUpperCase();
}

String.removeAccents = (str: string) => {

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
String.createInternalString = (text: string): string => {
  return String.removeAccents(text.trim().toLowerCase()).split(" ").filter(item => !!item).join("_");
}
String.camelCaseToSnakeCase = (text: string): string => {
  return String.removeAccents(text.trim()).split(/(?=[A-Z])/).join('_').toLowerCase()
}
String.snakeCaseToCamelCase = (text: string): string => {
  if (text.startsWith("_")) {
    text = text.substring(1)
  }
  return String.removeAccents(text.trim()).replace(
    /([-_][a-z])/g,
    (group) => group.toUpperCase()
      .replace('-', '')
      .replace('_', '')
  );
}
String.upperCaseFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


/**
 * Remove non-word chars.
 */
String.removeNonWord = (str: string) => {
  return str.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, "");
}


String.toCamelCase = (str: string) => {
  let strMix = String.removeAccents(str);
  return String.removeNonWord(strMix)
    .replace(/\-/g, " ") //convert all hyphens to spaces
    .replace(/\s[a-z]/g, upperCase) //convert first char of each word to UPPERCASE
    .replace(/\s+/g, "") //remove spaces
    .replace(/^[A-Z]/g, lowerCase); //convert first char to lowercase

}


/**
 * Add space between camelCase text.
 */
String.unCamelCase = (str: string) => {
  return str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2").toLowerCase();
}
/**
 * UPPERCASE first char of each word.
 */
String.toProperCase = (str: string) => {
  return lowerCase(str).replace(/^\w|\s\w/g, upperCase);
}

/**
 * camelCase + UPPERCASE first char
 */
String.toPascalCase = (str: string) => {
  return str.replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w+)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(new RegExp(/\s/, 'g'), '')
    .replace(new RegExp(/\w/), s => s.toUpperCase());
}

/**
 * Remove HTML tags from string.
 */
String.stripHtmlTags = (str: string) => {
  return str.replace(/<[^>]*>/g, "");
}

/**
 * Remove non-printable ASCII chars
 */
String.removeNonASCII = (str) => {
  // Matches non-printable ASCII chars -
  // http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
  return str.replace(/[^\x20-\x7E]/g, "");
}
