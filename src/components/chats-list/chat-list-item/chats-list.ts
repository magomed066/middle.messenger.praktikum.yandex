import Block from "../../../core/block/block";
import { Props } from "./types";

export class ChatsListItem extends Block<Props> {
    static componentName = "ChatsListItem";

    constructor(props: Props) {
        super({ ...props, events: { click: () => props.onClick(props.id) } });
    }

    protected makePropsToState(props: Props): void {
        this.state = {
            id: props.id,
            message: props.message,
            avatar: props.avatar,
            time: props.time,
            name: props.name,
            activeChatID: props.activeChatID,
        };
    }

    protected render(): string {
        const { id, name, avatar, message, time, activeChatID } = this
            .state as Props;

        return `
            <li class="chats-list__item ${id === activeChatID ? "active" : ""}">
                <div class="avatar">
                    <img src="${avatar}" alt="${name}">
                </div>
                <div class="user">
                    <p class="user__name">${name}</p>
                    <p class="user__message">${message}</p>
                </div>
                <div class="info">
                    <p class="info__time">${time}</p>
                </div>
            </li>
        `;
    }
}
