import { Block } from '../../core'
import { Props } from './types'

export class Textfield extends Block {
	static componentName = 'Textfield'
	constructor(props: Props) {
		super({
			...props,
			events: {
				input: props.onInput,
				blur: props.onBlur,
				focus: props.onFocus,
			},
		})
	}

	protected makePropsToState(props: Props): void {
		this.state = {
			name: props.name,
			classes: props.classes,
			type: props.type,
			minLength: props.minLength,
			maxLength: props.maxLength,
			label: props.label,
			placeholder: props.placeholder,
			onFocus: props.onFocus,
			onInput: props.onInput,
			onBlur: props.onBlur,
			labelFor: props.labelFor,
			if: props.id,
			noErrorText: props.noErrorText,
		}
	}
	protected render(): string {
		const {
			name,
			classes,
			type,
			minLength,
			maxLength,
			placeholder,
			label,
			labelFor,
			id,
			noErrorText,
		} = this.state as Props

		const labelEl = label
			? `<label for="${labelFor}" class="textfield__label">${label}</label>`
			: ''

		const err = noErrorText
			? ''
			: `<p class="textfield__error">Invalid data</p>`

		return `
            <div class="textfield ${classes ? classes : ''}">
                ${labelEl}
                <div class="textfield-wrap">
                {{{Input
                    id="${id}"
                    onInput=handleClearError
                    onFocus=onFocus
                    onBlur=onBlur
                    type="${type}"
                    minLength="${minLength}"
                    maxLength="${maxLength}"
                    name="${name}"
                    placeholder="${placeholder}"
                }}}
                ${err}
                </div>
            </div>
        `
	}
}

export default Textfield
