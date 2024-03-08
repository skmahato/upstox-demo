import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
    marginBottom: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  upperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  upperLeft: {
    flex: 1,
    alignItems: "flex-start",
  },
  symbolText: {
    fontWeight: "bold",
  },
  ltpValue: { fontWeight: "bold" },
  profitAndLossValue: { fontWeight: "bold" },
  upperRight: {
    flex: 1,
    alignItems: "flex-end",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  bottomLeft: {
    flex: 1,
    alignItems: "flex-start",
  },
  bottomRight: {
    flex: 1,
    alignItems: "flex-end",
  },
});
