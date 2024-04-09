import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryList from "./CategoryList";
import BlogList from "./BlogList";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ModalContent from "@/components/ModalContent";
import { Modal } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useBlogContext } from "@/stores/BlogContext";
import { BlogModel } from "@/types/shared";
import { useRef, useEffect } from "react";

const HomeScreen = () => {
  const { blogs } = useBlogContext();
  const pickerRef = useRef<RNPickerSelect>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [blogInfo, setBlogInfo] = useState<BlogModel>(blogs[0]);
  const handleBlogEdit = (id: number) => {
    const blog = blogs.find((blog) => blog.id === id);
    if (blog) {
      setBlogInfo(blog);
    }
  };
  useEffect(() => {
    if (pickerVisible && pickerRef.current) {
      pickerRef.current.togglePicker();
    }
  }, [pickerVisible]);
  return (
    <>
      <SafeAreaView edges={["top"]} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Welcome back</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <Ionicons name="add" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPickerVisible(true)}>
              <Ionicons name="create" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <CategoryList />
        <BlogList />
      </View>
      <Modal visible={isModalVisible} animationType="slide">
        <ModalContent
          onClose={() => setIsModalVisible(false)}
          blog={blogInfo}
        />
      </Modal>
      {pickerVisible && (
        <RNPickerSelect
          ref={pickerRef}
          onValueChange={(value) => handleBlogEdit(value)}
          items={blogs.map((blog) => ({
            label: blog.title,
            value: blog.id,
          }))}
          onDonePress={() => {
            setPickerVisible(false);
            setIsModalVisible(true);
          }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    textAlign: "left",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
  },
  select: {},
});

export default HomeScreen;
