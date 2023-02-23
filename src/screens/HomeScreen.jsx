import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../utils/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Olá eu sou a Home Screen</Text>
      <Button 
        mode="outlined"
        onPress={()=>navigation.navigate("About")}
      >Ir para Sobre</Button>
    </View>
  );
}
