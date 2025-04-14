import { StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import HomeScreen from "@/app/HomeScreen";
const home = () => {
  return (
    <>
      <View style={styles.container}>
        <HomeScreen />
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
    fontSize: 25,
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
export default home;
