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

export enum RouterName {
    LOGIN = '/login',
    ABOUT = '/about',
    PROFILE = '/profile',
    FIRST_PAGE = '/',
    CATEGORY_PAGE = '/page/:id'
}

export const PrivateRouter: AppRouter[] = [
    {path: RouterName.FIRST_PAGE, exact: true, component: FirstPage},
    {path: RouterName.CATEGORY_PAGE, exact: true, component: CategoryPage},
    {path: RouterName.ABOUT, exact: true, component: AboutPage},
    {path: RouterName.PROFILE, exact: true, component: ProfilePage},
]

export const PublicRouter: AppRouter[] = [
    {path: RouterName.LOGIN, exact: true, component: Login}
]