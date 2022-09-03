import { View, StyleSheet } from "react-native";
import Each from "../Components/Each";
import ExpenseHead from "../Components/ExpenseHead";
import { GlobalStyles } from "../Styles";
import { useEffect, useState } from "react";

export default function All(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let a = 0;
    for (let i = 0; i < props.data.length; i++) {
      a = a + (Number(props.data[i].price) ? Number(props.data[i].price) : 0);
    }
    setCount(a);
  }, [props.v]);
  return (
    <View style={styles.background}>
      <ExpenseHead title={"Total"} total={count} />
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
