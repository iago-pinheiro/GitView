import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, Alert, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigation()

  const handleLogin = () => {
    if(email === "teste@teste.com" && password === "1234"){
      navigation.navigate("main")
    } else{
      Alert.alert("E-mail ou senha inválidos!")
    }
  }

return(
 <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder='Email'
      value={email}
      onChangeText={setEmail}
    />
    <TextInput
      style={styles.input}
      placeholder='Password'
      value={password}
      onChangeText={setPassword}
      secureTextEntry={true}
    />
    <TouchableOpacity style={styles.button} onPress={() => handleLogin(email, password)}>
      <Text style={styles.buttonText} >LOGIN</Text>
    </TouchableOpacity>
 </View> 
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#9705f9c2",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    width: "80%",
    alignItems: "center"
  },
  buttonText:{
    color: "#fff"
  }
})

export default Login
  