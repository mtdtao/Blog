import moment from 'moment';
import firebase, {firebaseRef, githubProvider} from '../../firebase';

export var viewBlog = (blog) => {
    return {
        type: 'VIEW_BLOG',
        blog
    };
}

export var addBlog = (blog) => {
    return {
        type: 'ADD_BLOG',
        blog
    };
}

export var addBlogs = (blogs) => {
    return {
        type: 'ADD_BLOGS',
        blogs
    };
}

export var addBlogError = (err) => {
    return {
        type: 'ADD_BLOG_ERROR',
        err
    };
}

export var postBlog = (history, {blog_title, blog_body}) => {
    return (dispatch, getState) => {
        var blog = {
            blog_title,
            blog_body,
            createdAt: moment().unix()
        };

        var blogRef = firebaseRef.child(`blogs`).push(blog);

        return blogRef.then(() => {
            dispatch(addBlog({
                ...blog,
                id: blogRef.key
            }));
            history.push(`/blog/${blogRef.key}`);
        }).catch((err) => {
            console.log('fail add blog');
            console.log(err);
            dispatch(addBlogError(err));
        })
    };
};

export var getBlogs = () => {
    return (dispatch, getState) => {
        const blogsRef = firebaseRef.child(`blogs`);

        return blogsRef.once('value').then((snapshot) => {
            var blogs = snapshot.val() || {};
            var parsedBlogs = [];

            Object.keys(blogs).forEach((blogId) => {
                parsedBlogs.push({
                    id: blogId,
                    ...blogs[blogId]
                });
            });
            dispatch(addBlogs(parsedBlogs));
        })
    }
}

export var loadViewBlog = (id) => {
    return (dispatch, getState) => {
        const blogRef = firebaseRef.child(`blogs`).child(id);
        return blogRef.once('value').then((snapshot) => {
            var blog = snapshot.val();
            dispatch(viewBlog(blog));
        })
    }

}
