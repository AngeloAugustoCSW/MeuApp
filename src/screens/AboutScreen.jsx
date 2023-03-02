import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../utils/styles";

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Olá eu sou a About Screen</Text>
      <Button mode="outlined" onPress={() => navigation.navigate("Contact")}>
        Ir para Contato
      </Button>
    </View>
  );
}
