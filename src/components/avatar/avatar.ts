import Block from "../../core/block/block";
import { Props } from "./types";

export class Avatar extends Block<Props> {
    static componentName = "Avatar";

    constructor(props: Props) {
        super({ ...props, events: { click: props.onClick } });
    }

    protected makePropsToState(props: Props): void {
        this.state = {
            url: props.url,
            alt: props.alt,
        };
    }

    protected render(): string {
        const { url, alt } = this.state as Props;

        return `
            <div class="avatar-wrapper" >
                <img class="profile-pic" src="${url}" alt="${alt}" />
                <input class="file-upload" hidden="true" type="file" accept="image/*"/>
            </div>
        `;
    }
}
