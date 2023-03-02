import { Chat } from '../../core/types/common'

export interface Props {
	chats: Chat[]
	activeChatID: number
	handleChatUserClick: () => void
}
