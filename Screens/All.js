import { View, StyleSheet } from "react-native";
import Each from "../Components/Each";
import ExpenseHead from "../Components/ExpenseHead";
import { GlobalStyles } from "../Styles";
export default function All() {
  return (
    <View style={styles.background}>
      <ExpenseHead title={"Total"} total={100} />
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
