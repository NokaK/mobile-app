import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryList from "./CategoryList";
import BlogList from "./BlogList";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import ModalContent from "@/components/ModalContent";
import { Modal } from "react-native";
import { BlogModel } from "@/types/shared";
import Select from "@/components/Select";
import { RootState } from "@/reducers/rootReducer";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const blogs = useSelector((state: RootState) => state.blogs);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogModel | null>(null);

  const handleBlogEdit = (id: number) => {
    const blog = blogs.find((blog) => blog.id === Number(id));

    if (blog) {
      setSelectedBlog(blog);
    }
  };

  return (
    <>
      <SafeAreaView edges={["top"]} />

      <ScrollView
        scrollEventThrottle={16}
        keyboardShouldPersistTaps="handled"
        style={styles.container}
      >
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
      </ScrollView>

      <Modal visible={isModalVisible} animationType="slide">
        <ModalContent
          onClose={() => setIsModalVisible(false)}
          blog={selectedBlog}
        />
      </Modal>
      {pickerVisible && (
        <Select
          items={blogs.map((blog) => ({
            label: blog.title,
            value: blog.id,
          }))}
          onDonePress={() => {
            setPickerVisible(false);
            setIsModalVisible(true);
          }}
          onEdit={handleBlogEdit}
          isPickerVisible={pickerVisible}
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
