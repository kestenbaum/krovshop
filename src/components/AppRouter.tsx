import React, {FC} from 'react';
import {Route, Routes } from 'react-router-dom';
import {useAppSelector} from "../hooks/redux";
import {PrivateRouter} from "../router/AppRouter";

export const AppRouter:FC = () => {
    const auth = useAppSelector(state => state.AuthSliceReducer.auth)

    return (
        auth
        ?
            <Routes>
                <>
                    {PrivateRouter.map(route =>
                        <Route
                            path={route.path}
                            key={route.path}
                            element={route.component}
                        />
                    )}
                </>
            </Routes> : null
    );
};
