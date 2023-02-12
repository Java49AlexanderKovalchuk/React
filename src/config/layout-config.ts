import { NavigatorProps } from "../model/NavigatorProps";

export const layoutConfig: NavigatorProps = {
    className: 'navigator-list',
    routes: [
        { path: "/", label: 'Home' },
        { path: "/customers", label: 'Customers' },
        { path: "/orders", label: 'Orders' },
        { path: "/products", label: 'Products' }
    ]
}
