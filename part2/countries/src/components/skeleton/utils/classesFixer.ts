export function classesFixer(classes?: string) {
    return typeof classes !== "undefined" ? " " + classes : "";
}