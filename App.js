import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Recent from "./Screens/Recent";
import All from "./Screens/All";
import { Ionicons, AntDesign } from "react-native-vector-icons";
import { GlobalStyles } from "./Styles";
import { useState } from "react";
import { Modal, View, Pressable } from "react-native";
import Mod from "./Components/Modal";

const Bottom = createBottomTabNavigator();

export default function App() {
  const [modal, setModal] = useState(false);
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
            component={Recent}
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
            component={All}
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
