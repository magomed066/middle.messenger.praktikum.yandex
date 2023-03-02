export interface Props {
    onInput?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    name: string;
    placeholder?: string;
    events?: {
        input?: () => void;
        focus?: () => void;
        blur?: () => void;
    };
}
