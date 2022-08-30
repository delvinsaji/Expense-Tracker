import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../Styles";
import Each from "../Components/Each";
import ExpenseHead from "../Components/ExpenseHead";

export default function Recent() {
  return (
    <View style={styles.background}>
      <ExpenseHead title={"Last 7 Days"} total={100} />
      <Each title={"Choclate"} val={100} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: GlobalStyles.colors.primary400,
    flex: 1,
  },
});
