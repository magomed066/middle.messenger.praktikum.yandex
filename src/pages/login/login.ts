import { Block, navigate, Validator } from '../../core'
import { Nullable } from '../../core/types/common'
import { renderDOM } from '../../core/utils'
import template from './template'

export class Login extends Block {
	validation: Nullable<Validator>

	constructor(props: {}) {
		super(props)
		this.validation = null
	}

	componentDidMount(): void {
		this.validation = new Validator('.login-form')
	}

	protected makePropsToState() {
		this.state = {
			handleChange: () => {},
			handleSubmit: (evt: Event) => {
				evt.preventDefault()

				const isValid = this.validation?.isValid()

				console.log(this.validation)

				if (isValid) {
					console.log(this.validation?.values)
					this.validation?.clearAllInputs()

					renderDOM(navigate('/chats'))
				}
			},
			handleValidate: (e: Event) => {
				const target = e.target as HTMLInputElement

				this.validation?.hideErrorMessage(target.name)

				if (target.classList.contains('input') && target.value) {
					this.validation?.checkInput(target.name, target.value)
				}
			},
			handleLinkClick: () => {
				renderDOM(navigate('/register'))
			},
		}
	}
	render() {
		return template
	}
}
