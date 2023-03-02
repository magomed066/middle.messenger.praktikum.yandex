export type Listener<T extends unknown[] = any[]> = (...args: T) => void

interface IEventBus {
	on(event: string, cb: Listener): void
	off(event: string, cb: Listener): void
	emit(event: string, ...args: any): void
}

class EventBus<
	E extends string = string,
	M extends { [K in E]: unknown[] } = Record<E, any[]>,
> implements IEventBus
{
	private listeners: { [key in E]?: Listener<M[E]>[] } = {}

	on(event: E, callback: Listener<M[E]>) {
		if (!this.listeners[event]) {
			this.listeners[event] = []
		}

		this.listeners[event]?.push(callback)
	}

	off(event: E, callback: Listener<M[E]>) {
		if (!this.listeners[event]) {
			throw new Error(`There is no such an event: ${event}`)
		}

		this.listeners[event] = this.listeners[event]?.filter(
			(listener) => listener !== callback,
		)
	}

	emit(event: E, ...args: M[E]) {
		if (!this.listeners[event]) {
			return
		}

		this.listeners[event]?.forEach(function (listener) {
			listener(...args)
		})
	}
}

export default EventBus
