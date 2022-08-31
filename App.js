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

function Rec() {
  return <Recent></Recent>;
}

function Al() {
  return <All></All>;
}
export default function App() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem("data1")
      .then((Response) => {
        setData(JSON.parse(Response));
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

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
            component={Rec}
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
          />
          <Bottom.Screen
            name="All Expenses"
            component={Al}
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
          />
        </Bottom.Navigator>
      </NavigationContainer>
    </View>
  );
}
