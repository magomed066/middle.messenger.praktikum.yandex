import Block from "../../core/block/block";
import { Props } from "./types";

export class Button extends Block {
    static componentName = "Button";

    constructor(props: Props) {
        super({ ...props, events: { click: props.onClick } });
    }

    protected makePropsToState(props: Props): void {
        this.state = {
            text: props.text,
            type: props.type,
            className: props.className,
        };
    }

    protected render(): string {
        const { text, type, className } = this.state as Props;

        return `<Button class="btn ${
            className ? className : ""
        }" type="${type}">${text}</Button>`;
    }
}
