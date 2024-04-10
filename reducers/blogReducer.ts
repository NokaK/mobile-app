import { ADD_BLOG, UPDATE_BLOG, DELETE_BLOG } from "@/actions/blogActions";
import { BLOGS } from "@/data/blogs";
import { BlogModel } from "@/types/shared";

const initialState: BlogModel[] = [...BLOGS];

const blogReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_BLOG:
      return [...state, action.payload];
    case UPDATE_BLOG:
      return state.map((blog) =>
        blog.id === action.payload.blogId ? action.payload.updatedBlog : blog
      );
    case DELETE_BLOG:
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
};

export default blogReducer;
