import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../Styles";

export default function Each(props) {
  return (
    <View style={styles.each}>
      <Text style={styles.val}>{props.title}</Text>
      <Text style={styles.val}>{props.val}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  each: {
    backgroundColor: GlobalStyles.colors.primary50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    margin: 10,
  },
  val: {
    color: GlobalStyles.colors.primary200,
    margin: 10,
  },
});
