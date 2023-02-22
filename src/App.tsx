import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigator } from './components/navigators/Navigator';
import './App.css'

import { layoutConfig } from './config/layout-config';
import { Employees } from './components/pages/Employees';
import { AddEmployee } from './components/pages/AddEmployee';
import { AgeStatistics } from './components/pages/AgeStatistics';
import { SalaryStatistics } from './components/pages/SalaryStatistics';
import { Login } from './components/pages/Login';
import { Logout } from './components/pages/Logout';
import { Input } from './components/Input';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavigatorProps } from './model/NavigatorProps';


function App() {
    let authUser: string = useSelector<any, string>(state => state.auth.authenticated);
    const [routes, setRoutes] = useState(layoutConfig.routes);
    useEffect(() => {
        let sRoutes: { path: string; label: string; flAdmin: boolean; flAuth: boolean }[] = [];
        if (authUser.length === 0) {
            sRoutes = layoutConfig.routes.filter(n => n.label.includes('Login'));
        }
        else {
            if(authUser.includes('admin')) {
                sRoutes = layoutConfig.routes.filter(n => !n.label.includes("Login"));
            } 
            else {
                sRoutes = layoutConfig.routes.filter(n => !n.label.includes("Login"));
                sRoutes = layoutConfig.routes.filter(n => !n.label.includes("Add Employees"));
            }
            sRoutes[sRoutes.findIndex(n => n.path.includes(     '/logout'))].label = authUser;

        }
        
        setRoutes(sRoutes);

    }, [authUser]);

    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navigator routes={routes} />}>
                <Route index element={<Employees />} />
                <Route path='add' element={<AddEmployee />} />
                <Route path='statistics/age' element={<AgeStatistics />} />
                <Route path='statistics/salary' element={<SalaryStatistics />} />
                <Route path='login' element={<Login />} />
                <Route path='logout' element={<Logout />} />

            </Route>

        </Routes>
    </BrowserRouter>

}
export default App;