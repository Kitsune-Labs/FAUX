/* eslint-disable no-undef */
const faux = require("..");
const strings = {
	encoded: "foooox fooox! foox fox foox! foox fox foxxxxx! foox fox foxxxxx! foox foox foox! faux fooox! foxxxxx foooox! foox foox foox! foox foox foxx! foox fox foxxxxx! foox fox fox! faux faux",
	decoded: "Hello World!"
};

console.log(faux.encode("Hello World!"));

test("Encode", () => {
	expect(faux.encode("Hello World!")).toBe(strings.encoded);
});

test("Decode", () => {
	expect(faux.decode(strings.encoded))
		.toBe("Hello World!");
});

test("Check Encode (Not Encoded)", () => {
	expect(faux.checkEncode(strings.decoded)).toBe(false);
});

test("Check Encode (Is Encoded)", () => {
	expect(faux.checkEncode(strings.encoded)).toBe(true);
});

test("Translation (Manual Encode)", () => {
	expect(faux.translate(strings.decoded, "encode")).toBe(strings.encoded);
});

test("Translation (Manual Decode)", () => {
	expect(faux.translate(strings.encoded, "decode")).toBe(strings.decoded);
});

test("Translation (Auto encode)", () => {
	expect(faux.translate(strings.encoded)).toBe(strings.decoded);
});

test("Translation (Auto decode)", () => {
	expect(faux.translate(strings.decoded)).toBe(strings.encoded);
});