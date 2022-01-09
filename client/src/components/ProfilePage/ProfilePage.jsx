import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/userReducer';
import { NavLink } from 'react-router-dom';
import { auth } from '../../actions/user';

const ProfilePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  });

  const userName = useSelector((state) => state.user.currentUser.userName);

  return (
    <div>
      <div className="navlink d-flex flex-column">
        <div>
          <h2>{`your name: ${userName}`}</h2>
        </div>
        <button>
          <NavLink to="/">
            <h1>return to homepage</h1>
          </NavLink>
        </button>
        <button onClick={() => dispatch(logout())}>
          <h1>Logout</h1>
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
