import React, { useEffect } from 'react';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/userReducer';
import { NavLink } from 'react-router-dom';
import { auth } from '../../actions/user';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  });
  // const isAuth = useSelector((state) => state.user.isAuth);

  const email = useSelector((state) => state.user.currentUser.email);

  return (
    <div>
      <div className="navlink d-flex flex-column">
        <div>
          <h2>{`Hello: ${email}`}</h2>
        </div>

        <button>
          <NavLink to="profile">
            <h1>Show my name</h1>
          </NavLink>
        </button>

        <button onClick={() => dispatch(logout())}>
          <h1>Logout</h1>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
