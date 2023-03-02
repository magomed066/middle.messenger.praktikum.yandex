import Block from "../../core/block/block";
import { Props } from "./types";

export class ChatsList extends Block<Props> {
    static componentName = "ChatsList";

    constructor(props: Props) {
        super(props);
    }

    protected makePropsToState(props: Props): void {
        this.state = {
            chats: props.chats,
            activeChatID: props.activeChatID,
        };
    }

    protected render(): string {
        const { chats, activeChatID } = this.state as Props;

        const chat = chats
            .map(
                (item) => `
                {{{
                    ChatsListItem
                        name="${item.userName}"
                        avatar="${item.userAvatar}"
                        time="${item.time}"
                        id="${item.id}"
                        message="${item.message}"
                        activeChatID="${activeChatID}"
                        onClick=handleChatUserClick
                }}}
            `
            )
            .join("");

        return `
            <ul class="chats-list">
                ${chat}
            </ul>
        `;
    }
}
