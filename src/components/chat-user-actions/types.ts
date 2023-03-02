import { userActions } from "../../core";
import { ButtonType } from "../../core/types/common";

export interface Props {
    onClick?: () => void;
    onChatUserActionClick: () => void;
    actions: {
        text: string;
        action: userActions;
    }[];
}
