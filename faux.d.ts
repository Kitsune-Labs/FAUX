declare module "@kitsune-labs/faux" {
    export function translate(input: string): string;

    export function checkEncode(input: string): string;

    export function encode(input: string): string;

	export function decode(input: string): string;
}