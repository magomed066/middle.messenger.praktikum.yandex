import Block from "../../core/block/block";

import { Props } from "./types";

class Messages extends Block {
    static componentName = "Messages";

    constructor(props: Props) {
        super({ ...props, events: { click: props.onClick } });
    }

    protected makePropsToState(props: Props): void {
        this.state = {
            activeChatMessages: props.activeChatMessages,
        };
    }

    protected render(): string {
        const { activeChatMessages } = this.state as Props;

        const msg = activeChatMessages?.messages
            .map(
                (m) => `
            <li class="messages-list__item ${m.mine ? "me" : ""}">
                <div class="message ${m.mine ? "me" : ""}">
                    <p class="message__text">${m.text}</p>
                    <p class="time">${m.time}</p>
                </div>
            </li>
        `
            )
            .join("");

        return `

            <div class="messages">
                <p class="messages__date">Today</p>
                <ul class="messages-list">
                    
                    ${msg}

                </ul>
            </div>
        `;
    }
}

export default Messages;
