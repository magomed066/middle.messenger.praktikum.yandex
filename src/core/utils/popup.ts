class Popup {
	protected _element: HTMLDivElement
	protected _activeClass: string
	protected _closeSelector: string

	constructor(options: {
		className: string
		activeClass: string
		closeSelector?: string
		isPopup?: boolean
	}) {
		this._element = document.querySelector(options.className) as HTMLDivElement
		this._activeClass = options.activeClass
		this._closeSelector = options?.closeSelector || ''

		this._element.addEventListener('click', this._closeByOuterClick.bind(this))

		if (options.isPopup) {
			document.addEventListener(
				'click',
				this._closePopupByOuterClick.bind(this),
			)
		}
	}

	protected _closeByOuterClick(e: Event) {
		const target = e.target as HTMLElement

		if (target.classList.contains(this._closeSelector)) {
			this.handleClose()
		}
	}

	protected _closePopupByOuterClick(e: Event) {
		const target = e.target as HTMLElement

		if (target.tagName === 'svg' || target.tagName === 'path') {
			return
		}
		this.handleClose()
	}

	public handleOpen() {
		this._element.classList.add(this._activeClass)
	}

	public handleClose() {
		this._element.classList.remove(this._activeClass)

		this._element.removeEventListener('click', this._closeByOuterClick)
		document.removeEventListener('click', this._closePopupByOuterClick)
	}
}

export default Popup
