import React from "react";
import FirstPage from "../components/pages/FirstPage";
import CategoryPage from "../components/pages/CategoryPage";
import ProfilePage from "../components/pages/ProfilePage/ProfilePage";
import AboutPage from "../components/pages/AboutPage";
import Login from "../components/pages/Login";

export interface AppRouter {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export const PrivateRouter: AppRouter[] = [
    {path: '/', exact: true, component: FirstPage},
    {path: '/page/:id', exact: true, component: CategoryPage},
    {path: '/about', exact: true, component: AboutPage},
    {path: '/profile', exact: true, component: ProfilePage},
]

export const PublicRouter: AppRouter[] = [
    {path: '/login', exact: true, component: Login}
]