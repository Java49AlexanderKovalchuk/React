import { NavigatorProps } from "../model/NavigatorProps";

export const productsConfig: NavigatorProps = {
    className: "navigator-list-submenu",
    routes: [
        { path: "/products/dairy", label: "Dairy Products" },
        { path: "/products/bread", label: "Bread Products" }
    ]
}