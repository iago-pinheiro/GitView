import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { typography } from "../theme/typography";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    const user = await AsyncStorage.getItem("user");
    if (!user) {
      Alert.alert("Usuário não encontrado. Por favor, cadastre-se.");
      return;
    }
    const userJson = JSON.parse(user);
    if(userJson.email === email && userJson.password === password) {
      Alert.alert("Login realizado com sucesso!");
      navigation.navigate("main");
    }
  };


  const handleCadastro = () => {
    navigation.navigate("cadastro");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#b71ef4", marginTop: 10 }]}
        onPress={handleCadastro}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "80%",
    fontFamily: typography.regular,
  },
  button: {
    backgroundColor: "#b71ef4",
    borderRadius: 5,
    padding: 15,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontFamily: typography.bold,
  },
});

export default Login;
