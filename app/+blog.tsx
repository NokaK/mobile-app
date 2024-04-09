import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import BlogScreen from "./BlogScreen";
const blog = () => {
  return (
    <>
      <View style={styles.container}>
        <BlogScreen />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
export default blog;
