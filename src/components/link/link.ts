import Block from '../../core/block/block'

import { Props } from './types'

class Link extends Block {
	static componentName = 'Link'

	constructor(props: Props) {
		super({ ...props, events: { click: props.onClick } })
	}

	protected makePropsToState(props: Props): void {
		this.state = {
			text: props.text,
			href: props.href,
			className: props.className,
		}
	}

	protected render(): string {
		const { text, href, className } = this.state as Props

		return `<a class="${className ? className : ''}" ${
			href ? `href="${href}` : ''
		}>${text}</a>`
	}
}

export default Link
