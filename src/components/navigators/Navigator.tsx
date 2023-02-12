import { NavLink, Outlet } from "react-router-dom";
import { NavigatorProps } from "../../models/NavigatorProps";
import './navigators.css'

type NavProp = {
    navConfig: NavigatorProps;
}

export const Navigator: React.FC<NavProp> = (props) => {
    function getList(): JSX.Element[] {
        return props.navConfig.routeItems.map(el => {
            return <li className="navigator-item">
                <NavLink style={({ isActive }) => activeLink(isActive)}
                    to={el.routingPath}>{el.label}</NavLink>
            </li>
        })
    }
    function activeLink(isActive: boolean): React.CSSProperties | undefined {
        let res: React.CSSProperties = {};
        if (isActive) {
            res = { backgroundColor: "blue", color: "white" };
        }
        return res;
    }

    return <div>
        <nav>
            <ul className={props.navConfig.cssClassName}>
                {getList()}
            </ul>
        </nav>
        <Outlet></Outlet>
    </div>
}