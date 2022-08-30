import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../Styles";

export default function ExpenseHead(props) {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.text}>{props.total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: GlobalStyles.colors.primary700,
    margin: 5,
  },
  text: {
    margin: 5,
    color: "white",
    margin: 10,
  },
});
