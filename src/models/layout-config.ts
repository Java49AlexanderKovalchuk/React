import { NavigatorProps } from "./NavigatorProps";

export const layoutConfig: NavigatorProps = {
    cssClassName: 'navigator-list',
    routeItems: [
        {routingPath: "/", label: 'Home'},
        {routingPath: "/customers", label: 'Customers'},
        {routingPath: "/orders", label: 'Orders'},
        {routingPath: "/products", label: 'Products'}
    ]
}
