import { ButtonType } from "../../core/types/common";

export interface Props {
    onClick?: () => void;
    text: string;
    type: ButtonType;
    className?: "btn-primary" | "btn-secondary";
}
