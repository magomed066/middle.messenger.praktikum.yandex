const template = `
    <main class="centered-page">
        <form class="card register-form" name="register" novalidate>
            <h1 class="card__title">Sign Up</h1>

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
                onInput=handleChange
                onFocus=handleValidate
                onBlur=handleValidate
                type="text"
                id="phone"
                label="Phone"  
                name="phone"
                placeholder="Input your phone..."
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
            text="Sign Up"
            type="submit"
            className="btn-primary"
            }}}

            <nav class="card-navigation">
                {{{
                    Link 
                        className="card__link"
                        onClick=handleLinkClick
                        text="Already have an account?"
                }}}
            </nav>
            
        </form>
    </main>
`;

export default template;
