import { Indexed } from '../types/common'
import isObject from './is-object'

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */

function queryStringify(data: Indexed): string {
	if (!isObject(data)) {
		throw new Error('Data must be an object')
	}

	const keys = Object.keys(data)
	return keys.reduce((result, key, index) => {
		const value = data[key]
		const end = index < keys.length - 1 ? '&' : ''

		return `${result}${key}=${value}${end}`
	}, '?')
}

export default queryStringify
