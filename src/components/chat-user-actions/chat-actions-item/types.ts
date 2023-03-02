import { userActions } from "../../../core";

export interface Props {
    onClick?: () => void;
    action: userActions;
    text: string;
    events?: {
        click?: () => void;
    };
}
