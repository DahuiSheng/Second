import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import TopScreen from "./screens/TopScreen";
import { Ionicons } from "@expo/vector-icons";

import {
  Text,
  HStack,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
} from "native-base";
import Appbar from "./components/Appbar"
import Footer from "./components/Footer";
import Introduce from "./components/Introduce";

// Define the config
// const config = {
//   useSystemColorMode: false,
//   initialColorMode: "dark",
// };

// extend the theme
// export const theme = extendTheme({ config });

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={() => ({
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name = "Home"
            component={HomeScreen}
            options={{
              title: "ホーム画面",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-home" size={size} color={color} />
              )
            }}
          />
          <Tab.Screen
            name = "Top"
            component={TopScreen}
            options={{
              title: "Top画面",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="globe" size={size} color={color} />
              )
            }}
          />
          {/* <Tab.Screen
            name = "Top"
            component={TopScreen}
            options={{
              title: "Top画面",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="thumbs-up-outline" size={size} color={color} />
              )
            }}
          /> */}
          <Tab.Screen
            name = "User"
            component={UserScreen}
            options={{
              title: "ユーザ画面",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              )
            }}
          />
        </Tab.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

// Color Switch Component
// function ToggleDarkMode() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <HStack space={2} alignItems="center">
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === "light"}
//         onToggle={toggleColorMode}
//         aria-label={
//           colorMode === "light" ? "switch to dark mode" : "switch to light mode"
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }
