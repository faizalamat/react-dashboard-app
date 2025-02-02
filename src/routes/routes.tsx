import { Route, Routes } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";

interface RouteConfig {
    element: React.ComponentType;
    path: string;
}

export const routes = [
    {
        path:"/",
        element: Dashboard,
    },
    {
        path:"/login",
        element: Login,
    },
]

// export const renderRoutes = (routes: { element: any; path: any; }[]) => {
//     return (
//         <Routes>
//             {routes?.map((route: { element: any; path: any; },index: any) => {
//                 const Component = route.element;
//                 return <Route key={index} path={route.path} element={<Component />} />
//             })}
//         </Routes>
//     )
// }

export const renderRoutes = (routes: RouteConfig[]) => {
    return (
        <Routes>
            {routes?.map(({ element: Component, path }, index) => (
                <Route key={index} path={path} element={<Component />} />
            ))}
        </Routes>
    );
};