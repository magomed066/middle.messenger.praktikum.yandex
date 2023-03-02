const template = `
    <main class="centered-page">
        <form class="card login-form" name="login" novalidate>
            <h1 class="card__title">Sign In</h1>

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
            onInput=handleChangeInput
            onFocus=handleValidate
            onBlur=handleValidate
            type="password"
            label="Password"
            id="password"
            minLength="3"
            maxLength="40"
            name="password"
            placeholder="Input your password..."
            }}}

            {{{Button
            onClick=handleSubmit
            text="Sign In"
            type="submit"
            className="btn-primary"
            }}}

            <nav class="card-navigation">
                {{{
                    Link 
                        className="card__link"
                        onClick=handleLinkClick
                        text="Don't have an account?"
                }}}
            </nav>
        </form>
    </main>
`;

export default template;
