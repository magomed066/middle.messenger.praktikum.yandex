import Block from '../../../core/block/block'
import { Props } from './types'

export class ChatActionsItem extends Block {
	static componentName = 'ChatActionsItem'

	constructor(props: Props) {
		super({ ...props, events: { click: props.onClick } })
	}

	protected makePropsToState(props: Props): void {
		this.state = {
			text: props.text,
			action: props.action,
		}
	}

	protected render(): string {
		const { text, action } = this.state as Props

		return `
            <li class="options-list__item" data-action="${action}">
                <p>${text}</p>
            </li>
        `
	}
}
