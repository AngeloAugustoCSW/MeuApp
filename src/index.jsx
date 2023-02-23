import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Inicial do App" }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "Sobre" }}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{ title: "Contato" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
