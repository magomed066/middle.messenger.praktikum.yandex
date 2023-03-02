import { prependOnceListener } from 'process'
import { Block } from '../../core'
import { Props } from './types'

export class Input extends Block {
	static componentName = 'Input'
	constructor(props: Props) {
		super({
			...props,
			events: {
				input: props.onInput,
				focus: props.onFocus,
				blur: props.onBlur,
			},
		})
	}

	protected makePropsToState(props: Props): void {
		this.state = {
			name: props.name,
			type: props.type,
			minLength: props.minLength,
			maxLength: props.maxLength,
			placeholder: props.placeholder,
			id: props.id,
		}
	}

	protected render(): string {
		const { name, type, minLength, maxLength, placeholder, id } = this
			.state as Props

		return `
            <input
                class="textfield__input"
                id="${id}"
                type=${type}
                minlength=${minLength}
                maxlength=${maxLength}
                required
                name="${name}"
                placeholder="${placeholder ? placeholder : ''}"
            />
        `
	}
}
