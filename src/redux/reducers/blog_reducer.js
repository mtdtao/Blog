
export const blogsReducer = function(state = [], action) {
  switch(action.type) {
    case 'ADD_BLOG':
      return [ ...state, action.blog ];
    case 'ADD_BLOGS':
        return [ ...action.blogs];
  }

  return state;
}

export const viewBlogReducer = (state = {}, action) => {
    switch (action.type) {
        case 'VIEW_BLOG':
            return action.blog;
        default:
            return state;
    }
}

export const writeBlogReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_BLOG_ERROR':
            return { ...state };
        default:
            return state;
    }
}
