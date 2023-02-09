import { Text, View } from "react-native";

function HomeScreen() {
  return (
    <View>
      <Text> Welcome to home page</Text>
    </View>
  );
}

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>My App</Text>
    </View>
  );
}
