import { Chat } from "../../../core/types/common";

export interface Props {
    onClick: (id: any) => void;
    id: Chat["id"];
    message: Chat["message"];
    time: Chat["time"];
    avatar: Chat["userAvatar"];
    name: Chat["userName"];
    activeChatID: number;
    events?: {
        click?: () => void;
    };
}
