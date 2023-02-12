import { NavigatorProps } from "./NavigatorProps";

export const productsConfig: NavigatorProps = {
    cssClassName: "products-list",
    routeItems: [
        { routingPath: "/products/dairy", label: "Dairy Products" },
        { routingPath: "/products/bread", label: "Bread Products" }
    ]
}