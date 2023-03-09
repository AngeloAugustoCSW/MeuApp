import { useColorScheme } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import RootNavigation from "./src";

export default function App() {
  const theme = useColorScheme() === "dark" ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider theme={theme}>
      <RootNavigation />;
    </PaperProvider>
  );
}
