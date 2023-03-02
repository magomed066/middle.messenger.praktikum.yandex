const template = `
    <main class="centered-page">
        <form class="card profile-form" name="register" novalidate>
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

            {{{Textfield
                onInput=handleChange
                onFocus=handleValidate
                onBlur=handleValidate
                type="email"
                id="Email"
                label="Email"  
                name="email"
                placeholder="Input your email..."
            }}}

            {{{Textfield
                onInput=handleChange
                onFocus=handleValidate
                onBlur=handleValidate
                type="text"
                id="first_name"
                label="First name"  
                name="first_name"
                placeholder="Input your first name..."
            }}}

            {{{Textfield
                onInput=handleChange
                onFocus=handleValidate
                onBlur=handleValidate
                type="text"
                id="second_name"
                label="Second name"  
                name="second_name"
                placeholder="Input your second name..."
            }}}

            {{{Textfield
                onInput=handleChangeInput
                onFocus=handleValidate
                onBlur=handleValidate
                type="display_name"
                label="Display name"
                id="display_name"
                name="display_name"
                placeholder="Input your display name..."
            }}}

            {{{Textfield
                onInput=handleChange
                onFocus=handleValidate
                onBlur=handleValidate
                type="text"
                id="phone"
                label="Phone"  
                name="phone"
                placeholder="Input your phone..."
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
`

export default template
