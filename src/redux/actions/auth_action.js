import moment from 'moment';
import firebase, {firebaseRef, githubProvider} from '../../firebase';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from '../../constants/action_types';


export const signInUserInState = (uid) => {
    return {
        type: AUTH_USER,
        uid
    }
}

export const signUpUser = ({email, password}) => {
    return (dispatch) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log('succ sign up');
            localStorage.setItem('uid', res.uid);
            dispatch(signInUserInState(res.uid));

        })
            .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
        dispatch({ type: AUTH_USER });
    }
}


export const signInUser = ({email, password}) => {
    return (dispatch) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            console.log('succ sign in');
            localStorage.setItem('uid', res.uid);
            dispatch(signInUserInState(res.uid));
        })
            .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    }
}

export const signOutUser = () => {
    console.log('sign out user');
    return (dispatch) => {
        dispatch({ type: UNAUTH_USER });
    }
}
