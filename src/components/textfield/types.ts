import { InputType } from '../../core/types/common'

export interface Props {
	onInput?: () => void
	onFocus?: () => void
	onBlur?: () => void
	name: string
	type: InputType
	label?: string
	placeholder?: string
	minLength?: number
	maxLength?: number
	classes?: string
	labelFor?: string
	id?: string
	noErrorText?: boolean
}
