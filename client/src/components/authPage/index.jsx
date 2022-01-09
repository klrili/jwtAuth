import Login from '../login';
import Registration from '../registration';
import React from 'react';
const AuthPage = () => {
  const [onClickPersonalArea, onClickPersonalAreaSet] = React.useState(false);
  const [onClickRegister, onClickRegisterSet] = React.useState(false);

  return (
    <div>
      {!onClickRegister && (
        <Login
          PersonalAreaClickOf={() => onClickPersonalAreaSet(!onClickPersonalArea)}
          register={() => {
            onClickRegisterSet(!onClickRegister);
            onClickPersonalAreaSet(!onClickPersonalArea);
          }}
        />
      )}

      {onClickRegister && (
        <Registration
          PersonalAreaClickOf={() => onClickRegisterSet(!onClickRegister)}
          register={() => {
            onClickRegisterSet(!onClickRegister);
            onClickPersonalAreaSet(!onClickPersonalArea);
          }}
        />
      )}
    </div>
  );
};

export default AuthPage;
