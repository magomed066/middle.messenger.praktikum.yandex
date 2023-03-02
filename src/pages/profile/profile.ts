import { Block, navigate, renderDOM } from "../../core";
import Popup from "../../core/utils/popup";
import template from "./template";

export class Profile extends Block {
    protected makePropsToState() {
        this.state = {
            handleLogoutLinkClick: () => {
                renderDOM(navigate("/"));
            },
            handleChangeProfileLinkClick: () => {
                renderDOM(navigate("/edit-profile"));
            },
            handleChangePasswordLinkClick: () => {
                renderDOM(navigate("/new-password"));
            },
            handleGoBackLinkClick: () => {
                renderDOM(navigate("/chats"));
            },
            handleSubmit: (e: Event) => {
                e.preventDefault();
            },
            handleEditAvatar: () => {
                new Popup({
                    className: ".modal",
                    activeClass: "active",
                    closeSelector: "modal-overflow",
                }).handleOpen();
            },
        };
    }

    render() {
        return template;
    }
}
