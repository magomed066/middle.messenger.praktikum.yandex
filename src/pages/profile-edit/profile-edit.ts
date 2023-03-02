import { Block, navigate, renderDOM, Validator } from "../../core";
import { Nullable } from "../../core/types/common";
import template from "./template";

export class ProfileEdit extends Block {
    validation: Nullable<Validator>;

    constructor(props: {}) {
        super(props);
        this.validation = null;
    }

    componentDidMount(): void {
        this.validation = new Validator(".profile-form");
    }

    protected makePropsToState() {
        this.state = {
            handleSubmit: (evt: Event) => {
                evt.preventDefault();

                const isValid = this.validation?.isValid();

                if (isValid) {
                    console.log(this.validation?.values);
                    this.validation?.clearAllInputs();
                }
            },
            handleValidate: (e: Event) => {
                const target = e.target as HTMLInputElement;

                this.validation?.hideErrorMessage(target.name);

                if (target.classList.contains("input") && target.value) {
                    this.validation?.checkInput(target.name, target.value);
                }
            },

            handleLinkClick: () => {
                renderDOM(navigate("/profile"));
            },
        };
    }
    render() {
        return template;
    }
}
