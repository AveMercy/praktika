import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context);

    console.log(user);
    return (
        <Routes>

            {publicRoutes.map(({ path, Component }) => (
                <Route path={path} key={path} element={<Component />} />
            ))}


            {user.isAuth && authRoutes.map(({ path, Component }) => (
                <Route path={path} key={path} element={<Component />} />
            ))}


            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
};

export default AppRouter;