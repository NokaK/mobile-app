// BlogContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { BlogModel } from "@/types/shared";
import { BLOGS } from "@/data/blogs";

interface BlogContextType {
  blogs: BlogModel[];
  addBlog: (blog: BlogModel) => void;
  updateBlog: (blogId: number, updatedBlog: BlogModel) => void;
  deleteBlog: (blogId: number) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [blogs, setBlogs] = useState<BlogModel[]>(BLOGS);

  const addBlog = (blog: BlogModel) => {
    setBlogs([...blogs, blog]);
  };

  const updateBlog = (blogId: number, updatedBlog: BlogModel) => {
    setBlogs(blogs.map((blog) => (blog.id === blogId ? updatedBlog : blog)));
  };

  const deleteBlog = (blogId: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== blogId));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogContext must be used within a BlogProvider");
  }
  return context;
};
