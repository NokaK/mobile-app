import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { BlogModel } from "@/types/shared";
import { useCategoryContext } from "../../stores/CategoryContext";
import BlogContent from "./BlogContent";
import { useBlogContext } from "../../stores/BlogContext";

const BlogList = () => {
  const { selectedCategory } = useCategoryContext();
  const { blogs } = useBlogContext();
  const filteredBlogs = selectedCategory
    ? blogs.filter((blog: BlogModel) => blog.category.id === selectedCategory)
    : blogs;

  return (
    <View style={styles.BlogWrapper}>
      {filteredBlogs.length === 0 && (
        <Text style={styles.emptyText}>No blogs found</Text>
      )}
      {filteredBlogs.map((blog: BlogModel) => (
        <React.Fragment key={blog.id}>
          <BlogContent blog={blog} />
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  BlogWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  emptyText: {
    fontSize: 16,
    textAlign: "center",
    width: "100%",
    marginTop: 50,
  },
});

export default BlogList;
