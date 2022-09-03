import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Recent from "./Screens/Recent";
import All from "./Screens/All";
import { Ionicons, AntDesign } from "react-native-vector-icons";
import { GlobalStyles } from "./Styles";
import { useState, useEffect } from "react";
import { Modal, View, Pressable } from "react-native";
import Mod from "./Components/Modal";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Bottom = createBottomTabNavigator();
function latest(data) {
  data.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}

export default function App() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem("data2")
      .then((Response) => {
        setData(JSON.parse(Response));
      })
      .catch((error) => {
        alert(error);
      });
  }, [modal]);
  console.log(`${modal} 1`);
  data ? latest(data) : "";

  return (
    <View style={{ flex: 1 }}>
      <Modal visible={modal} animationType="slide">
        <Mod mod={setModal} />
      </Modal>
      <NavigationContainer>
        <Bottom.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
            tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
          }}
        >
          <Bottom.Screen
            name="Recent Expenses"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="hourglass" color={color} size={size} />
              ),
              headerRight: () => {
                return (
                  <View>
                    <Pressable
                      onPress={() => {
                        setModal(true);
                      }}
                    >
                      <AntDesign
                        name="plus"
                        color={GlobalStyles.colors.accent500}
                        size={20}
                        style={{ marginRight: 10 }}
                      />
                    </Pressable>
                  </View>
                );
              },
            }}
          >
            {(props) => (
              <Recent data={data ? data.reverse().slice(0, 7) : ""} v={modal} />
            )}
          </Bottom.Screen>
          <Bottom.Screen
            name="All Expenses"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="calendar" color={color} size={size} />
              ),
              headerRight: () => {
                return (
                  <View>
                    <Pressable
                      onPress={() => {
                        setModal(true);
                      }}
                    >
                      <AntDesign
                        name="plus"
                        color={GlobalStyles.colors.accent500}
                        size={20}
                        style={{ marginRight: 10 }}
                      />
                    </Pressable>
                  </View>
                );
              },
            }}
          >
            {(props) => <All data={data ? data : ""} v={modal} />}
          </Bottom.Screen>
        </Bottom.Navigator>
      </NavigationContainer>
    </View>
  );
}
