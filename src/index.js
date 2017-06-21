import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import reduxThunk from 'redux-thunk';

import App from './containers/app';
import NavBar from './containers/navBar';
import Footer from './containers/footer';
import Blogs from './containers/blogs';
import Blog from './containers/blog';
import WriteBlog from './containers/write_blog';
import SignIn from './containers/auth/signin';
import SignUp from './containers/auth/signup';
import reducers from './redux/reducers';
import actions from './redux/actions';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

if (localStorage.getItem('uid')) {
    store.dispatch(actions.signInUserInState(localStorage.getItem('uid')));
}

// require('./index.scss');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className='main-body'>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Blogs}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/write" component={WriteBlog}/>
                    <Route path='/blog/:_id' component={Blog}/>
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
