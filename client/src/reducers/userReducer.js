const REG = 'REG';
const REG_ERRORS = 'REG_ERRORS';
const CLEAR_REG_ERRORS = 'CLEAR_REG_ERRORS';
const CLEAR_REG = 'CLEAR_REG';
const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

const defaultState = {
  regErrors: {},
  regRes: {},
  currentUser: {},
  isAuth: false,
};
export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    case REG:
      return {
        ...state,
        regRes: action.payload,
      };
    case REG_ERRORS:
      return {
        ...state,
        regErrors: action.payload,
      };
    case CLEAR_REG_ERRORS:
      return {
        ...state,
        regErrors: {},
      };
    case CLEAR_REG:
      return {
        ...state,
        regRes: {},
      };

    default:
      return state;
  }
}
export const reg = (res) => ({ type: REG, payload: res });
export const regErrors = (resEr) => ({ type: REG_ERRORS, payload: resEr });
export const clearReg = () => ({ type: CLEAR_REG });
export const clearRegErrors = () => ({ type: CLEAR_REG_ERRORS });
export const setUser = (user) => ({ type: SET_USER, payload: user });
export const logout = () => ({ type: LOGOUT });
