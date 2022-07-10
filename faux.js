const _dict = ["fox", "foox", "fooox", "faux", "foxx", "fooxx", "foxo", "foooox", "foxxxxx", "fauux"];

module.exports = class {
	static translate(input, mode) {
		if (!mode || mode === "auto") mode = this.checkEncode(input) ? "decode" : "encode";

		return this[mode](input);
	}

	static checkEncode(input) {
		return _dict.some((s) => input.startsWith(s) && this.decode(input).trim().length >= 1);
	}

	static encode(input) {
		const inputArray = input.split("");
		const output = [];

		inputArray.map(letter => {
			const encoded = [];

			letter.charCodeAt(0).toString().split("").map(code => encoded.push(_dict[code]));
			output.push(encoded.join(" "));
		});

		return output.join("! ");
	}

	static decode (input) {
		const output = [];
		const encodedMessage = input.split("! ");

		encodedMessage.map(char => {
			const decoded = [];

			char.split(" ").map(id => {
				decoded.push(_dict.indexOf(id));
			});

			output.push(String.fromCharCode(decoded.join("")));
		});

		return output.join("");
	}
};