import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { blogsReducer, viewBlogReducer, writeBlogReducer } from './blog_reducer';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  form,
  blogs: blogsReducer,
  blogViewing: viewBlogReducer,
  writeBlog: writeBlogReducer,
  auth: authReducer
});

export default rootReducer;
