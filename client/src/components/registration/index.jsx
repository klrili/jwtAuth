import styles from './register.module.scss';
import Input from '../../utils/input/Input';
import { registration } from '../../actions/user';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearReg } from '../../reducers/userReducer';
import { clearRegErrors } from '../../reducers/userReducer';

function Registration({ PersonalAreaClickOf, register }) {
  const regRes = useSelector((state) => state.user.regRes);
  const regErrors = useSelector((state) => state.user.regErrors);
  const dispatch = useDispatch();
  const [email, setMail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [userName, setName] = useState();
  const [surName, setSurName] = useState();

  useEffect(() => {
    if (regRes.message) {
      register();
      dispatch(clearReg());
    }
    if (regErrors.message) {
      setTimeout(() => dispatch(clearRegErrors()), 2000);
    }
  });
  return (
    <div>
      <div className={styles.font}>
        <div className="font">
          <div className={styles.login}>
            <div className="login">
              <h1>Create account</h1>
              <div className="d-flex flex-column">
                <h4>Your name</h4>
                <Input
                  value={userName}
                  setValue={setName}
                  type="text"
                  placeholder="write your name"
                />
                <h4>Surname</h4>
                <Input
                  value={surName}
                  setValue={setSurName}
                  type="text"
                  placeholder="write your surname"
                />

                <h4>Email</h4>
                <Input value={email} setValue={setMail} type="text" placeholder="write email" />

                <h4>Password</h4>
                <div className="d-flex">
                  <Input
                    value={password}
                    setValue={setPassword}
                    type="password"
                    placeholder=" write password"
                  />
                </div>
                <h4>Re-enter password</h4>
                <div className="d-flex">
                  <Input
                    value={repeatPassword}
                    setValue={setRepeatPassword}
                    type="password"
                    placeholder=" repeat password"
                  />
                </div>
                <h3>{regErrors.message}</h3>
                {password !== repeatPassword ? <h3>password mismatch</h3> : null}
              </div>
              <button
                disabled={password !== repeatPassword}
                className="registration_btn"
                onClick={() => {
                  dispatch(registration(userName, surName, email, password));
                  // isReg();
                }}>
                <h2>Continue</h2>
              </button>

              <div onClick={register} className={styles.reg}>
                Already have an account
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registration;
