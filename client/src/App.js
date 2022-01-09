// import logo from './logo.svg';
// import './App.css';
import 'macro-css';
import React, { useEffect } from 'react';
import AuthPage from './components/authPage';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import { auth } from './actions/user';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import AuthRouters from './components/ProtectedRouters/isAuthRouter';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  });
  // console.log(isAuth);

  return (
    <div>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route element={<AuthRouters />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
