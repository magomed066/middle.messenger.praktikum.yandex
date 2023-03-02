const template = `
    <div class="profile-page centered-page">
        <nav>
           {{{
                Link 
                    className="back__link"
                    onClick=handleGoBackLinkClick
                    text="Go back"
           }}}
        </nav>
        <div class="card">
            <div class="details">
                <div class="details-avatar">
                    {{{
                        Avatar
                            url="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                            alt="profile"
                            onClick=handleEditAvatar
                    }}}

                    <p class="details-avatar__username">John doe</p>
                </div>

                <ul class="details-list">
                    <li class="details-list__item">
                        <p class="field">Email</p>
                        <p class="value">test@test.com</p>
                    </li>
                    <li class="details-list__item">
                        <p class="field">Login</p>
                        <p class="value">John</p>
                    </li>
                    <li class="details-list__item">
                        <p class="field">First name</p>
                        <p class="value">John</p>
                    </li>
                    <li class="details-list__item">
                        <p class="field">Last name</p>
                        <p class="value">Doe</p>
                    </li>
                    <li class="details-list__item">
                        <p class="field">Display name</p>
                        <p class="value">Doe</p>
                    </li>
                    <li class="details-list__item">
                        <p class="field">Phone</p>
                        <p class="value">123819230</p>
                    </li>
                </ul>

                <nav class="details-actions">
                    {{{
                        Link 
                            className="details-actions__item text-primary"
                            onClick=handleChangePasswordLinkClick
                            text="Change password"
                    }}}
                    {{{
                        Link 
                            className="details-actions__item text-primary"
                            onClick=handleChangeProfileLinkClick
                            text="Change profile"
                    }}}
                    {{{
                        Link 
                            className="details-actions__item text-danger"
                            onClick=handleLogoutLinkClick
                            text="Logout"
                    }}}
                </nav>
            </div>
        </div>

        <div class="modal">
            <div class="modal-overflow"></div>
            <form class="modal-dialog">
                <div class="modal-header">
                    <h2 class="modal__title">Download a file</h2>
                </div>
                
                <div class="modal-body">
                    <p className="text-primary">Choose from computer </p>   
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
    </form>

    </div>
`

export default template
