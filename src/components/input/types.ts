import { InputType } from "../../core/types/common";

export interface Props {
    onInput?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    name: string;
    type: InputType;
    minLength?: string;
    maxLength?: string;
    placeholder?: string;
    id?: string;
    events?: {
        input?: () => void;
        focus?: () => void;
        blur?: () => void;
    };
}
