import { METHOD, Options, RESPONSE_TYPE } from '../types/http'
import { queryStringify } from '../utils'

class HTTP {
	private readonly _baseUrl: string

	constructor(url: string) {
		this._baseUrl = url
	}

	async get<T>(url, options: Options = {} as Options): Promise<T> {
		return this.request(
			url,
			{
				...options,
				method: METHOD.GET,
			},
			options.timeout,
		)
	}

	async post<T>(url, options: Options = {} as Options): Promise<T> {
		return this.request(
			url,
			{
				...options,
				method: METHOD.POST,
			},
			options.timeout,
		)
	}

	async put<T>(url, options: Options = {} as Options): Promise<T> {
		return this.request(
			url,
			{
				...options,
				method: METHOD.PUT,
			},
			options.timeout,
		)
	}

	async patch<T>(url, options: Options = {} as Options): Promise<T> {
		return this.request(
			url,
			{
				...options,
				method: METHOD.PATCH,
			},
			options.timeout,
		)
	}

	async delete<T>(url, options: Options = {} as Options): Promise<T> {
		return this.request(
			url,
			{
				...options,
				method: METHOD.DELETE,
			},
			options.timeout,
		)
	}

	async request<T>(
		url: string,
		options: Options & { method: typeof METHOD[keyof typeof METHOD] },
		timeout = 5000,
	): Promise<T> {
		const {
			data,
			method,
			headers = {},
			withCredentials,
			responseType = RESPONSE_TYPE.default,
		} = options

		return new Promise((resolve, reject) => {
			if (!method) {
				reject('No method')
				return
			}

			const isGet = method === METHOD.GET

			const transformedUrl = isGet
				? `${this._baseUrl}${url}${queryStringify(data)}`
				: `${this._baseUrl}${url}`

			const xhr = new XMLHttpRequest()
			xhr.open(method, transformedUrl)

			xhr.responseType = responseType

			Object.values(headers).forEach((key) => {
				xhr.setRequestHeader(key, headers[key])
			})

			if (withCredentials) {
				xhr.withCredentials = true
			}

			xhr.onload = () => {
				resolve(xhr.response)
			}

			xhr.onerror = () => {
				reject(new Error(`An error occurred while sending: ${xhr.status}`))
			}

			xhr.ontimeout = () => {
				reject(new Error(`The timeout ${timeout} is out`))
			}

			xhr.timeout = timeout

			if (isGet && !data) {
				xhr.send()
			} else if (data instanceof FormData) {
				xhr.send(data)
			} else {
				xhr.send(JSON.stringify(data))
			}
		})
	}
}

export default HTTP
