import { View, Text, StyleSheet, Modal } from "react-native";
import { GlobalStyles } from "../Styles";
import Each from "../Components/Each";
import ExpenseHead from "../Components/ExpenseHead";
import { useEffect } from "react";

export default function Recent(props) {
  useEffect(() => {
    console.log(props.data);
  }, [props.v]);
  return (
    <View style={styles.background}>
      <ExpenseHead title={"Last 7 Days"} total={100} />
      {props.data
        ? props.data.map((obj) => <Each title={obj.title} val={obj.price} />)
        : ""}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: GlobalStyles.colors.primary400,
    flex: 1,
  },
});
