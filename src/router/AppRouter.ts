import React from "react";

import {
    FirstPage,
    CategoryPage,
    ProfilePage,
    Login,
    AboutPage
} from "../pages";

export interface AppRouter {
    path: string;
    component: React.ComponentType | any;
    exact?: boolean;
    key?: string;
}

export enum RouterNames {
    LOGIN = '/login',
    ABOUT = '/about',
    PROFILE = '/profile',
    FIRST_PAGE = '/',
    CATEGORY_PAGE = '/page/:id'
}

export const PrivateRouter: AppRouter[] = [
    {path: RouterNames.FIRST_PAGE, component: FirstPage},
    {path: RouterNames.CATEGORY_PAGE, component: CategoryPage},
    {path: RouterNames.ABOUT, component: AboutPage},
    {path: RouterNames.PROFILE, component: ProfilePage},
]

export const PublicRouter: AppRouter[] = [
    {path: RouterNames.LOGIN, component: Login}
]