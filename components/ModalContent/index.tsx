import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { BlogModel } from "@/types/shared";
import { CATEGORY_DATA } from "@/data/blogs";
import Select from "../Select";
import { RootState } from "@/reducers/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, updateBlog } from "@/actions/blogActions";
import Button from "../Button";
interface ModalProps {
  onClose: () => void;
  blog?: BlogModel | null;
}
const ModalContent = ({ onClose, blog }: ModalProps) => {
  const dispatch = useDispatch();
  const blogs = useSelector((state: RootState) => state.blogs);
  const [blogInfo, setBlogInfo] = useState<BlogModel>({
    id: blog?.id || blogs.length + 1,
    title: blog?.title || "",
    content: blog?.content || "",
    author: blog?.author || "",
    date: blog?.date || "",
    category: {
      id: blog?.category.id || CATEGORY_DATA[0].id,
      title: blog?.category.title || CATEGORY_DATA[0].title,
    },
  });

  const handleBlogSubmit = () => {
    if (blog) {
      dispatch(updateBlog(blog.id, blogInfo));
      onClose();
      return;
    }
    dispatch(addBlog(blogInfo));

    onClose();
  };
  const handleSelectEdit = (value: number) => {
    setBlogInfo({
      ...blogInfo,
      category: {
        id: value,
        title: CATEGORY_DATA.find((category) => category.id === value)
          ?.title as string,
      },
    });
  };
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>
        {blog ? "Update Blog" : "Add New Blog"}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={blogInfo.title}
        onChangeText={(text) => setBlogInfo({ ...blogInfo, title: text })}
      />
      <TextInput
        style={[styles.input, { height: 200 }]}
        placeholder="Content"
        multiline
        value={blogInfo.content}
        onChangeText={(text) => setBlogInfo({ ...blogInfo, content: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Author"
        value={blogInfo.author}
        onChangeText={(text) => setBlogInfo({ ...blogInfo, author: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={blogInfo.date}
        onChangeText={(text) => setBlogInfo({ ...blogInfo, date: text })}
      />
      <View style={styles.select}>
        <Select
          onEdit={handleSelectEdit}
          items={CATEGORY_DATA.map((category) => ({
            label: category.title,
            value: category.id,
          }))}
          value={blogInfo.category.id}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text={blog ? "Update Blog" : "Add  Blog"}
          onPress={handleBlogSubmit}
          type="primary"
        />

        <Button text="Close" onPress={onClose} type="danger" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  select: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  buttonContainer: {
    width: "90%",
    marginTop: 20,
  },
});

export default ModalContent;
