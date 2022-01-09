import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
const AuthRouters = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return isAuth === true ? <Outlet /> : <Navigate to="auth" />;
};

export default AuthRouters;
