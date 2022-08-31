import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../Styles";
import { Pressable, TextInput } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Mod(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();

  async function press() {
    var current = new Date();
    try {
      await AsyncStorage.getItem("data2")
        .then((Response) => {
          if (Response !== null) {
            let a = [
              ...JSON.parse(Response),
              { title: title, price: price, current: current },
            ];
            AsyncStorage.setItem("data2", JSON.stringify(a));
          } else {
            AsyncStorage.setItem(
              "data2",
              JSON.stringify([{ title: title, price: price, current: current }])
            );
          }
        })
        .catch((error) => {
          alert(error);
        });
    } catch (e) {
      alert(e);
    }
  }

  return (
    <View style={{ backgroundColor: GlobalStyles.colors.primary700, flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headertext}>Add Expense</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Expense Title"
        placeholderTextColor={GlobalStyles.colors.accent500}
        value={title}
        onChangeText={(e) => {
          setTitle(e);
        }}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Expense Value"
        placeholderTextColor={GlobalStyles.colors.accent500}
        value={price}
        onChangeText={(e) => {
          setPrice(e);
        }}
      ></TextInput>
      <Pressable
        style={styles.buttonview}
        onPress={() => {
          press();
          props.mod(false);
        }}
      >
        <Text style={styles.button}>Add Expense</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: GlobalStyles.colors.accent500,
    marginTop: 30,
    alignItems: "center",
    paddingBottom: 10,
  },
  headertext: {
    color: GlobalStyles.colors.accent500,
    fontSize: 20,
  },
  buttonview: {
    backgroundColor: GlobalStyles.colors.accent500,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 60,
    marginLeft: 60,
    marginTop: 40,
    marginBottom: 10,
  },
  button: {
    button: GlobalStyles.colors.primary500,
  },
  input: {
    margin: 20,
    marginBottom: 0,
    borderColor: GlobalStyles.colors.accent500,
    borderWidth: 1,
    padding: 15,
    color: "white",
  },
});
