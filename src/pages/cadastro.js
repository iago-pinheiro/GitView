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
      <View>
        <TextInput
          placeholder="E-mail"
          value={this.state.email}
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput
          placeholder="Senha"
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
        />
      </View>

    )
  }

}
