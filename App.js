import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";

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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen name = "Home" component={HomeScreen} />
        </Stack.Navigator>
        {/* <Appbar />
        <Introduce/>
        <Footer /> */}
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
