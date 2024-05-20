import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary500,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
