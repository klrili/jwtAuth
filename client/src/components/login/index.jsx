import styles from './login.module.scss';
import Input from '../../utils/input/Input';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/user';
import { Navigate } from 'react-router-dom';
function Login({ register }) {
  const [email, setMail] = useState();
  const [password, setPassword] = useState();
  const [visible, setVisible] = React.useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);

  // dispatch(clearReg());
  return (
    <div>
      {isAuth && <Navigate to="/" />}
      <div className={styles.font}>
        <div className="font">
          <div className={styles.login}>
            <div className="login">
              <h1>Sign-In</h1>
              <div className="d-flex flex-column">
                <h4>Email</h4>
                <Input value={email} setValue={setMail} type="text" placeholder="write email" />
                <h4>Password</h4>
                <div className="d-flex">
                  <Input
                    value={password}
                    setValue={setPassword}
                    type={!visible && 'password'}
                    placeholder=" write password"
                  />
                  <img
                    onClick={() => setVisible(!visible)}
                    src={visible === false ? './img/visibleOrNot.png' : './img/visible.png'}
                    alt="visibleOrNot"
                  />
                </div>
              </div>

              <button onClick={() => dispatch(login(email, password))}>
                <h2>Continue</h2>
              </button>

              <div onClick={register} className={styles.reg}>
                Create account
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
