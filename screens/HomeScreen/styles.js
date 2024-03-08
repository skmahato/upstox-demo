import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight || 0;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c3c3c8",
    marginTop: statusBarHeight,
  },
  headingContainer: {
    backgroundColor: "#7d007d",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
});
