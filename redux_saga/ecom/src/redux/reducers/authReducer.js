import { ActionTypes } from "../constants/actionType";

const initialState = {
  user1: null,
  user: [],
  loading: false,
  error: null,
  token: localStorage.getItem("token"),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // SIGNUP LOGOUT
    case ActionTypes.SIGNUP_REQUSET:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        user1: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

      case "LOGOUT":
      return {
        ...state,
        user: [],
      };
    default:
      return state;
  }
};

export default authReducer;