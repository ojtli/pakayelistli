interface Mappings {
    [index: string]: string | string[];
}
interface StringOptions {
    /**
     * overwrite or pass your own mappings.
     * existing mappings will be overwritten, else it'll be appended to defaults
     */
    mappings?: Mappings;
}
interface RegexOptions extends StringOptions {
    /**
     * RegExp flags, ium. Defaults to i
     */
    flags?: string;
}
export declare class DiacriticRegex {
    /** Generate a that returns a RegExp, that can be reused with the same options */
    toRegex(options?: RegexOptions): (input: string) => RegExp;
    /** Generate a that returns a string, that can be reused with the same options */
    toString(options?: StringOptions): (input: string) => string;
    private mergeMappings;
    private replacer;
}
export {};
