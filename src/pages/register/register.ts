import { Block, navigate, renderDOM, Validator } from '../../core'
import template from './template'

export class Register extends Block {
	validation: Validator

	componentDidMount(props: any): void {
		this.validation = new Validator('.register-form')
	}

	protected makePropsToState() {
		this.state = {
			handleSubmit: (evt: Event) => {
				evt.preventDefault()

				const isValid = this.validation.isValid()

				if (isValid) {
					console.log(this.validation.values)
					this.validation.clearAllInputs()
				}
			},
			handleValidate: (e: Event) => {
				const target = e.target as HTMLInputElement

				this.validation.hideErrorMessage(target.name)

				if (target.classList.contains('input') && target.value) {
					this.validation.checkInput(target.name, target.value)
				}
			},
			handleLinkClick: () => {
				renderDOM(navigate('/'))
			},
		}
	}
	render() {
		return template
	}
}
