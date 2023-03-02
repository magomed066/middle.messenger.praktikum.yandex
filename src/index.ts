import { components } from "./components";
import { navigate } from "./core/routing/routing";
import { renderDOM } from "./core/utils";
import registerComponent from "./core/utils/register-component";

components.forEach((component) => {
    registerComponent(component);
});

window.addEventListener("DOMContentLoaded", () => {
    renderDOM(navigate("/"));
});
