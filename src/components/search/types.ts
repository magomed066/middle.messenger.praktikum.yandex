import { InputType } from "../../core/types/common";

export interface Props {
    onInput?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    name: string;
    placeholder?: string;
}
