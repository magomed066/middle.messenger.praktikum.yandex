const template = `
    <main class="chats-page">
        <div class="container">
            <div class="sidebar">
                <nav class="sidebar-header">
            
                    {{{
                        Link 
                            className="sidebar-header__link danger"
                            onClick=handleLogoutLinkClick
                            text="Logout"
                    }}}
                    {{{
                        Link 
                            className="sidebar-header__link"
                            onClick=handleProfileLinkClick
                            text="Profile"
                    }}}
                    
                </nav>


                <form class="search">
                    {{{Textfield
                        onInput=handleChange
                        onFocus=handleValidateMessage
                        onBlur=handleValidateMessage
                        type="text"
                        classes="search"
                        id="search"
                        noErrorText="true"
                        name="search"
                        placeholder="Input user name..."
                    }}}
                </form>
               

                {{{
                    ChatsList
                        chats=chats
                        activeChatID=activeChatID
                        handleChatUserClick=handleChatUserClick
                }}}

            </div>
            <div class="chat">
                {{#if activeChatID}}
                    <div class="chat-header">
                        <div class="user">
                            <div class="user__image">
                                <img src={{messages.userAvatar}} alt={{messages.userName}}/>
                            </div>
                            <p class="user__name">{{messages.userName}}</p>
                        </div>

                        {{{
                            ChatUserActions
                                actions=chatMenuActions
                                onClick=handleMenuClick
                                onChatUserActionClick=onChatUserActionClick
                        }}}
                    </div>

                    <div class="chat-body">
                        {{{
                            Messages 
                                activeChatMessages=messages
                        }}}
                    </div>

                    <div class="chat-footer">
                        <form class="chat-panel">
                            <span class="chat-panel__icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.44444 15.5556H15.5556C15.7778 15.5556 15.9444 15.4537 16.0556 15.25C16.1667 15.0463 16.1481 14.8519 16 14.6667L12.9444 10.5833C12.8333 10.4352 12.6852 10.3611 12.5 10.3611C12.3148 10.3611 12.1667 10.4352 12.0556 10.5833L9.16667 14.4444L7.11111 11.6944C7 11.5463 6.85185 11.4722 6.66667 11.4722C6.48148 11.4722 6.33333 11.5463 6.22222 11.6944L4 14.6667C3.85185 14.8519 3.83333 15.0463 3.94444 15.25C4.05556 15.4537 4.22222 15.5556 4.44444 15.5556ZM2.22222 20C1.61111 20 1.08778 19.7826 0.652222 19.3478C0.217407 18.9122 0 18.3889 0 17.7778V2.22222C0 1.61111 0.217407 1.08778 0.652222 0.652222C1.08778 0.217407 1.61111 0 2.22222 0H17.7778C18.3889 0 18.9122 0.217407 19.3478 0.652222C19.7826 1.08778 20 1.61111 20 2.22222V17.7778C20 18.3889 19.7826 18.9122 19.3478 19.3478C18.9122 19.7826 18.3889 20 17.7778 20H2.22222ZM2.22222 17.7778H17.7778V2.22222H2.22222V17.7778Z" fill="#186DEE"/>
                                </svg>
                            </span>

                            {{{Textfield
                                onInput=handleChange
                                onFocus=handleValidateMessage
                                onBlur=handleValidateMessage
                                type="text"
                                id="message"
                                noErrorText="true"
                                name="message"
                                placeholder="Input message..."
                            }}}
                        
                            {{{
                                ButtonSend
                                    type="submit"
                                    onClick=handleMessageSubmit
                            }}}
                        </form>
                    </div>
                {{/if}}
            </div>
        </div>

        <div class="modal">
            <div class="modal-overflow"></div>
            <form class="modal-dialog">
                <div class="modal-header">
                    <h2 class="modal__title">
                        {{#if addUser}} Add user {{/if}}
                        {{#if deleteUser}} Delete user {{/if}}
                    </h2>
                </div>
                
                <div class="modal-body">
                    {{{Textfield
                        onInput=handleChange
                        onFocus=handleValidate
                        onBlur=handleValidate
                        type="text"
                        id="login"
                        label="Login"
                        minLength="3"
                        maxLength="20"
                        name="login"
                        placeholder="Input your login..."
                    }}}
                </div>
        
                <div class="modal-footer">
                    {{{Button
                        onClick=handleSubmit
                        text="Save"
                        type="submit"
                        className="btn-primary"
                    }}}
                </div>
            </form>
        </div>
                  
    </main>    


`;

export default template;
