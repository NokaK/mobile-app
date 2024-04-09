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
import RNPickerSelect from "react-native-picker-select";
import { useBlogContext } from "../../stores/BlogContext";
interface ModalProps {
  onClose: () => void;
  blog?: BlogModel;
}
const ModalContent = ({ onClose, blog }: ModalProps) => {
  const { blogs, addBlog, updateBlog } = useBlogContext();
  const [blogInfo, setBlogInfo] = useState<BlogModel>({
    id: blog?.id || blogs.length + 2,
    title: blog?.title || "",
    content: blog?.content || "",
    author: blog?.author || "",
    date: blog?.date || "",
    category: {
      id: blog?.category.id || CATEGORY_DATA[1].id,
      title: blog?.category.title || CATEGORY_DATA[1].title,
    },
  });

  const handleBlogSubmit = () => {
    if (blog) {
      updateBlog(blog.id, blogInfo);
      onClose();
      return;
    }

    addBlog(blogInfo);
    onClose();
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
        <RNPickerSelect
          placeholder={{
            label: "Select a category...",
            value: null,
          }}
          onValueChange={(value) =>
            setBlogInfo({
              ...blogInfo,
              category: {
                id: value,
                title: CATEGORY_DATA.find((category) => category.id === value)
                  ?.title as string,
              },
            })
          }
          items={CATEGORY_DATA.map((category) => ({
            label: category.title,
            value: category.id,
          }))}
          value={blogInfo.category.id}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleBlogSubmit}>
          <Text style={styles.buttonText}>
            {" "}
            {blog ? "Update Blog" : "Add  Blog"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
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
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  select: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  buttonContainer: {
    width: "80%",
    marginTop: 20,
    gap: 10,
  },
  addButton: {
    width: "100%",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  closeButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ModalContent;
