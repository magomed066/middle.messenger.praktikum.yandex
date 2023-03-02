import { Block, navigate, renderDOM, userActions, Validator } from '../../core'
import Popup from '../../core/utils/popup'
import template from './template'

import chats from './chats.json'
import messages from './messages.json'

export class Chats extends Block {
	validation: Validator
	messageValidation: Validator

	componentDidUpdate(
		oldProps: any,
		newProps: { activeChatID: string | number },
	): boolean {
		return true
	}

	protected makePropsToState(props) {
		this.state = {
			handleMenuClick: () => {
				new Popup({
					className: '.options-list',
					activeClass: 'active',
					isPopup: true,
				}).handleOpen()
			},
			handleLogoutLinkClick: () => {
				renderDOM(navigate('/'))
			},
			handleProfileLinkClick: () => {
				renderDOM(navigate('/profile'))
			},
			onChatUserActionClick: (e: Event) => {
				const target = e.target as HTMLElement
				const parent = target.closest('li')
				const action = parent?.getAttribute('data-action')

				if (userActions.ADD_USER === action) {
					this.setState({
						addUser: true,
						deleteUser: false,
					})

					new Popup({
						className: '.modal',
						activeClass: 'active',
						closeSelector: 'modal-overflow',
					}).handleOpen()
				}

				if (userActions.DELETE_USER === action) {
					this.setState({
						addUser: false,
						deleteUser: true,
					})

					new Popup({
						className: '.modal',
						activeClass: 'active',
						closeSelector: 'modal-overflow',
					}).handleOpen()
				}

				this.validation = new Validator('.modal-dialog')
			},

			handleSubmit: (evt: Event) => {
				evt.preventDefault()

				const isValid = this.validation.isValid()

				console.log(isValid)

				console.log(this.validation)

				if (isValid) {
					console.log(this.validation.values)
					this.validation.clearAllInputs()
				}
			},

			chatMenuActions: [
				{
					text: 'Add user',
					action: 'add_user',
				},
				{
					text: 'Delete user',
					action: 'delete_user',
				},
			],
			chats: chats.chats,

			handleChatUserClick: (id) => {
				this.setState({
					activeChatID: id,
					messages: messages.find((i) => i.id == id),
				})

				this.messageValidation = new Validator('.chat-panel')
			},

			handleMessageSubmit: (e: Event) => {
				e.preventDefault()

				const isValid = this.messageValidation.isValid()

				if (isValid) {
					console.log(this.messageValidation.values)
					this.messageValidation.clearAllInputs()
				}
			},
			handleChange: (evt: Event) => {},
			handleValidateMessage: (e: Event) => {
				const target = e.target as HTMLInputElement

				this.messageValidation.hideErrorMessage(target.name)

				if (target.classList.contains('input') && target.value) {
					this.validation.checkInput(target.name, target.value)
				}
			},
		}
	}

	render() {
		return template
	}
}
