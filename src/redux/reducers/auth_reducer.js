import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from '../../constants/action_types';

export default function(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', uid: action.uid };
    case UNAUTH_USER:
      return { ...state, error: '', uid: null };
    case AUTH_ERROR:
      return { ...state, error: action.payload, uid: null };
  }

  return state;
}
