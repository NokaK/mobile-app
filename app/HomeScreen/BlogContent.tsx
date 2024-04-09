import React from "react";
import { TouchableOpacity, Dimensions, Text, StyleSheet } from "react-native";
import { BlogModel } from "@/types/shared";
import { useNavigation } from "@react-navigation/native";

interface BlogContentProps {
  blog: BlogModel;
}

const BlogContent = ({ blog }: BlogContentProps) => {
  const navigation = useNavigation();
  const handleBlogClick = () => {
    navigation?.navigate("+blog", { blogId: blog.id });
  };

  return (
    <TouchableOpacity style={[styles.blogItem]} onPress={handleBlogClick}>
      <Text style={styles.blogTitle}>{blog.title}</Text>
      <Text style={styles.blogContent}>{blog.content}</Text>

      <Text style={styles.readMore}>Read More</Text>
    </TouchableOpacity>
  );
};
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  blogItem: {
    marginRight: 10,
    marginBottom: 10,
    width: (windowWidth - 60) / 2,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#cebcbc",
    height: 150,
    overflow: "hidden",
  },

  blogTitle: {
    fontSize: 13,
    lineHeight: 20,
    textTransform: "uppercase",
    marginBottom: 10,
    fontWeight: "bold",
  },
  blogContent: {
    height: 80,
  },
  readMore: {
    fontSize: 13,
    lineHeight: 20,
    textTransform: "uppercase",
    textAlign: "right",
    color: "#7492f3",
  },
});
export default BlogContent;
