import Block from '../block/block'

export type Nullable<T> = T | null

export type Keys<T extends Record<string, unknown>> = keyof T
export type Values<T extends Record<string, unknown>> = T[Keys<T>]

export interface RegisteredComponent<Props extends Record<string, any>> {
	new (props: Props): Block
	componentName: string
}

export enum InputType {
	'text',
	'email',
	'password',
	'tel',
	'number',
}

export enum ButtonType {
	'button',
	'submit',
}

export interface Chat {
	id: number
	userName: string
	message: string
	time: string | number
	userAvatar: string
}

export interface ChatMessages {
	id: number
	userName: string
	message: string
	time: string | number
	userAvatar: string
	messages: [
		{
			id: string
			text: string
			media?: any
			time: string
			mine: boolean
		},
	]
}

export type Indexed<T = unknown> = {
	[key in string]: T
}
