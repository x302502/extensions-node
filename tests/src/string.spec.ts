import "../../src/index";
describe("String", () => {
  beforeEach(() => {});
  //removeAccents(this: string): string;
  it("should remove accents", () => {
    const str = "Xin chào thế giới";
    expect(str.removeAccents()).toBe("Xin chao the gioi");
  });

  //createInternalString(this: string): string;
  it("should create internal string", () => {
    const str = "Hello World  ";
    expect(str.createInternalString()).toBe("hello_world");
  });

  //camelCaseToSnakeCase(this: string): string;
  it("should camelCaseToSnakeCase", () => {
    const str = "helloWorldExample";
    expect(str.camelCaseToSnakeCase()).toBe("hello_world_example");
  });

  //snakeCaseToCamelCase(this: string): string;
  it("should snakeCaseToCamelCase", () => {
    const str = "hello_world_example";
    expect(str.snakeCaseToCamelCase()).toBe("helloWorldExample");
  });

  //upperCaseFirstLetter(this: string): string;
  it("should upperCaseFirstLetter", () => {
    const str = "hello world";
    expect(str.upperCaseFirstLetter()).toBe("Hello world");
  });

  //toCamelCase(this: string): string;
  it("should toCamelCase", () => {
    const str = "hello-world example";
    expect(str.toCamelCase()).toBe("helloWorldExample");
  });

  //removeNonWord(this: string): string;
  it("should removeNonWord", () => {
    const str = "hello@world! (example)";
    expect(str.removeNonWord()).toBe("helloworld example");
  });

  //unCamelCase(this: string): string;
  it("should unCamelCase", () => {
    const str = "helloWorldExample";
    expect(str.unCamelCase()).toBe("hello world example");
  });

  //toProperCase(this: string): string;
  it("should toProperCase", () => {
    const str = "hello world example";
    expect(str.toProperCase()).toBe("Hello World Example");
  });

  //toPascalCase(this: string): string;
  it("should toPascalCase", () => {
    const str = "hello_world-example";
    expect(str.toPascalCase()).toBe("HelloWorldExample");
  });

  //removeNonASCII(this: string): string;
  it("should removeNonASCII", () => {
    const str = "hello©®™ world€£¥";
    expect(str.removeNonASCII()).toBe("hello world");
  });

  //stripHtmlTags(this: string): string;
  it("should stripHtmlTags", () => {
    const str = "<div>Hello <b>World</b></div>";
    expect(str.stripHtmlTags()).toBe("Hello World");
  });
});
