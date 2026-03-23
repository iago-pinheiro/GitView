import React, {Component} from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { typography } from "../theme/typography";

export default class Cadastro extends Component {
  state = {
    email: "",
    password: "",
  }

  handleCadastro = async () => {
    const { email, password } = this.state;
    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    const user = { 
    email,
    password,
    }
    await AsyncStorage.setItem("user", JSON.stringify(user));
    alert("Cadastro realizado com sucesso!");
    this.props.navigation.navigate("login");
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="E-mail"
          value={this.state.email}
          onChangeText={(email) => this.setState({email})}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
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


