import {
	Chats,
	Login,
	NewPassword,
	NotFound,
	Profile,
	ProfileEdit,
	Register,
} from './../../pages/'

export const navigate = (to?: string) => {
	const path = to ? to : '/'

	switch (path) {
		case '/':
			return new Login()
		case '/register':
			return new Register()
		case '/profile':
			return new Profile()
		case '/edit-profile':
			return new ProfileEdit()
		case '/new-password':
			return new NewPassword()
		case '/chats':
			return new Chats()
		default:
			return new NotFound()
	}
}
