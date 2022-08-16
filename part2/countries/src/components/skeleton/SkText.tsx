import SkLine from "./SkLine";

export enum Variant {
    base = 12,
    h6 = 12,
    h5 = 12,
    h4 = 12,
    h3 = 16,
    h2 = 20,
    h1 = 24,
}

interface SkTextProps {
    variant?: Variant;
    length?: number;
}

const DEFAULT_VARIANT = Variant.base;
const DEFAULT_LENGTH = 224;

export default function SkText({ variant, length }: SkTextProps) {
    const _variant = typeof variant !== "undefined" ? variant : DEFAULT_VARIANT;
    const _length =
        typeof length === "number" && length >= 1 ? length * 4 : DEFAULT_LENGTH;

    const styles: JSX.CSSProperties = {
        height: _variant + "px",
        width: _length + "px",
    };

    return <SkLine style={styles} />;
}
