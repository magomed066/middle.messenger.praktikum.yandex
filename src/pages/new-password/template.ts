const template = `
    <main class="centered-page">
        <form class="card password-form" name="register" novalidate>
            {{{Textfield
                onInput=handleChangeInput
                onFocus=handleValidate
                onBlur=handleValidate
                type="password"
                label="Old password"
                id="oldPassword"
                minLength="3"
                maxLength="40"
                name="oldPassword"
                placeholder="Input your old password..."
            }}}

            {{{Textfield
                onInput=handleChangeInput
                onFocus=handleValidate
                onBlur=handleValidate
                type="password"
                label="New password"
                id="newPassword"
                minLength="3"
                maxLength="40"
                name="newPassword"
                placeholder="Input your new password..."
            }}}

            {{{Button
                onClick=handleSubmit
                text="Save"
                type="submit"
                className="btn-primary"
            }}}

            <nav class="card-navigation">
                {{{
                    Link 
                        className="card__link"
                        onClick=handleLinkClick
                        text="Cancel"
                }}}
            </nav>
        </form>
    </main>
`;

export default template;
