import { RegisteredComponent } from '../core/types/common'
import Input from './input'
import Button from './button'
import Textfield from './textfield'
import Link from './link/link'
import Avatar from './avatar'
import ChatActions from './chat-user-actions'
import ChatsList from './chats-list'
import ChatActionsItem from './chat-user-actions/chat-actions-item'
import chatListItem from './chats-list/chat-list-item'
import Messages from './messages/messages'
import ButtonSend from './button-send'

export const components: RegisteredComponent<any>[] = [
	Input,
	Textfield,
	Button,
	Link,
	Avatar,
	ChatActions,
	ChatsList,
	ChatActionsItem,
	chatListItem,
	Messages,
	ButtonSend,
]
