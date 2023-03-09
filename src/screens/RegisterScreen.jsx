import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useState } from "react";
import { View } from "react-native";
import { Paragraph, TextInput } from "react-native-paper";
import { styles } from "../utils/styles";
export default function RegisterScreen() {
  const [email, setEmail] = useStateState("");
  const [senha, setSenha] = useStateState("");
  const [confirmarSenha, setConfirmarSenha] = useStateState("");

  function handleRegister() {
    console.log("Registrando usuário");
    if (checkIfPasswordsMatch()) {
      console.log("As senhas são iguais");
    } else {
      console.log("As senhas são diferentes");
    }
    if (checkPassLength()) {
      console.log("As senhas são grandes");
    } else {
      console.log("As senhas são pequenas");
    }
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Usuário criado com sucesso");
      })
      .catch((error) => {
        console.log("Erro ao criar usuário");
      });
  }

  function checkPassLength() {
    return senha.length >= 8;
  }

  function checkIfPasswordsMatch() {
    return senha === confirmarSenha;
  }

  function checkPassSpecialCharacters() {
    return senha.match(/[!@#$%^&*(),.?":{}|<>]/g);
  }

  return (
    <View style={styles.container}>
      <Paragraph>Sign in</Paragraph>
      <View>
        <Paragraph>Email</Paragraph>
        <TextInput
          mode="outlined"
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View>
        <Paragraph>Senha</Paragraph>
        <TextInput
          mode="outlined"
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={passwordVisible}
          right={
            <TextInput.Icon
              name={passwordVisible ? "eye-off" : "eye"}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
        />
      </View>
      <View>
        <Paragraph>Confirmar Senha</Paragraph>
        <TextInput
          mode="outlined"
          placeholder="Confirme sua senha"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button mode="contained" onPress={handleRegister}>
          Register
        </Button>
      </View>
    </View>
  );
}
