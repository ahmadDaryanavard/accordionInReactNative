import { Dimensions } from "react-native";

const width = (percentage = 100) =>
  (Dimensions.get("screen").width * percentage) / 100;
export { width };
