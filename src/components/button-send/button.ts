import Block from '../../core/block/block'
import { Props } from './types'

export class ButtonSend extends Block {
	static componentName = 'ButtonSend'

	constructor(props: Props) {
		super({ ...props, events: { click: props.onClick } })
	}

	protected makePropsToState(props: Props): void {
		this.state = {
			text: props.text,
			type: props.type,
			className: props.className,
		}
	}

	protected render(): string {
		const { type, className } = this.state as Props

		return `
            <button type="${type}" class="chat-panel__submit ${className}">
                <svg class="chat-panel__icon" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.4 17.4L18.85 9.92003C19.0304 9.84318 19.1842 9.715 19.2923 9.55142C19.4004 9.38785 19.4581 9.1961 19.4581 9.00003C19.4581 8.80395 19.4004 8.6122 19.2923 8.44863C19.1842 8.28505 19.0304 8.15687 18.85 8.08003L1.4 0.600025C1.2489 0.53412 1.08377 0.506868 0.919509 0.520728C0.755246 0.534589 0.597018 0.589125 0.459098 0.679417C0.321179 0.76971 0.207908 0.892917 0.129505 1.03793C0.0511009 1.18293 0.010031 1.34518 0.00999999 1.51003L0 6.12003C0 6.62003 0.37 7.05002 0.87 7.11002L15 9.00003L0.87 10.88C0.37 10.95 0 11.38 0 11.88L0.00999999 16.49C0.00999999 17.2 0.74 17.69 1.4 17.4Z" fill="white"/>
                </svg>
            </button>
        `
	}
}
