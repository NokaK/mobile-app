import { BlogModel } from "@/types/shared";

export const ADD_BLOG = "ADD_BLOG";
export const UPDATE_BLOG = "UPDATE_BLOG";
export const DELETE_BLOG = "DELETE_BLOG";

export const addBlog = (blog: BlogModel) => ({
  type: ADD_BLOG,
  payload: blog,
});

export const updateBlog = (blogId: number, updatedBlog: BlogModel) => ({
  type: UPDATE_BLOG,
  payload: { blogId, updatedBlog },
});

export const deleteBlog = (blogId: number) => ({
  type: DELETE_BLOG,
  payload: blogId,
});
