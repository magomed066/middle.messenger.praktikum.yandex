type Inputs = NodeListOf<HTMLInputElement>

const validation = {
	email: /@/i,
	password: /^[\w!@#$%^&*]{8,}$/gi,
	login: /^[a-zA-Z0-9_]{3,20}$/gi,
	name: /^[a-zA-Zа-яёА-ЯЁ]{2,}([a-zA-Z]+)*$/gi,
	phone: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
	empty: /^$|^\S+.*/g,
}

class Validator {
	protected form: HTMLFormElement
	protected inputs: Inputs
	protected isAllFieldsValid: Record<string, boolean>

	public values: Record<string, string>

	constructor(formSelector: string) {
		this.form = document.querySelector(formSelector) as HTMLFormElement
		this.inputs = this.form.querySelectorAll('input')
		this.values = {}
		this.isAllFieldsValid = {}
	}

	protected _getAllInputsValues(inputs: Inputs) {
		inputs.forEach((input) => {
			this.values[input.name] = input.value.trim()
		})
	}

	isValid() {
		let isValid: boolean = false

		this._getAllInputsValues(this.inputs)

		for (let inputName in this.values) {
			isValid = this.checkInput(inputName, this.values[inputName]) as boolean

			this.isAllFieldsValid[inputName] = isValid
		}

		const isValidForm = Object.values(this.isAllFieldsValid).every(
			(el) => el === true,
		)

		return isValidForm
	}

	checkInput(inputName: string, value: string) {
		if (!value) {
			this._showErrorMessage(inputName, false)
			return false
		}

		if (inputName === 'login') {
			return this._checkValidity(inputName, value, validation.login)
		}

		if (inputName === 'display_name') {
			return this._checkValidity(inputName, value, validation.login)
		}
		if (inputName === 'email') {
			return this._checkValidity(inputName, value, validation.email)
		}

		if (
			inputName === 'password' ||
			inputName === 'oldPassword' ||
			inputName === 'newPassword'
		) {
			return this._checkValidity(inputName, value, validation.password)
		}
		if (inputName === 'first_name' || inputName === 'second_name') {
			return this._checkValidity(inputName, value, validation.name)
		}
		if (inputName === 'phone') {
			return this._checkValidity(inputName, value, validation.phone)
		}
		if (inputName === 'message') {
			return this._checkValidity(inputName, value, validation.empty)
		}
	}

	protected _checkValidity(inputName: string, value: string, regExp: RegExp) {
		let isValid = new RegExp(regExp).test(value)

		const isValidForm = Object.values(this.isAllFieldsValid).every(
			(el) => el === true,
		)

		if (isValidForm) {
			isValid = true
			return true
		}

		if (!isValid) {
			this._showErrorMessage(inputName, isValid)
		} else {
			this.hideErrorMessage(inputName)
		}

		return isValid
	}

	protected _showErrorMessage(inputName: string, isValid?: boolean) {
		for (let input of this.inputs) {
			const textfield = input.closest('.textfield') as HTMLDivElement

			if (textfield && input.name === inputName && !isValid) {
				textfield.classList.add('error')
			}
		}
	}

	hideErrorMessage(inputName: string) {
		this.inputs.forEach((input) => {
			const textfield =
				input.name === inputName &&
				(input.closest('.textfield') as HTMLDivElement)

			if (textfield) {
				textfield.classList.remove('error')
			}
		})
	}

	clearAllInputs() {
		this.inputs.forEach((input) => (input.value = ''))
	}
}

export default Validator
