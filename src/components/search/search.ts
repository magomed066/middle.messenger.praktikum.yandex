import { prependOnceListener } from 'process'
import { Block } from '../../core'
import { Props } from './types'

export class Search extends Block {
	static componentName = 'Search'
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

			placeholder: props.placeholder,
		}
	}

	protected render(): string {
		const { name, placeholder } = this.state as Props

		return `
            <div class="textfield-search">
                <input type="text" placeholder="Search for..." class="textfield-search__input">
            </div>
        `
	}
}
