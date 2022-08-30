import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Recent from "./Screens/Recent";
import All from "./Screens/All";
import { Ionicons, AntDesign } from "react-native-vector-icons";
import { GlobalStyles } from "./Styles";

const Bottom = createBottomTabNavigator();

export default function App() {
  return (
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
            headerRight: () => (
              <AntDesign
                name="plus"
                color={GlobalStyles.colors.accent500}
                size={20}
                style={{ marginRight: 10 }}
              />
            ),
          }}
        />
        <Bottom.Screen
          name="All Expenses"
          component={All}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" color={color} size={size} />
            ),
            headerRight: () => (
              <AntDesign
                name="plus"
                color={GlobalStyles.colors.accent500}
                size={20}
                style={{ marginRight: 10 }}
              />
            ),
          }}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}
