import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Main from "./pages/main";
import User from "./pages/user";
import { typography } from "./theme/typography";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: "Login",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#b71ef4" },
            headerTitleStyle: { color: "#fff", fontFamily: typography.bold },
          }}
        />
        <Stack.Screen
          name="cadastro"
          component={Cadastro}
          options={{
            title: "Cadastro de Usuário",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#b71ef4" },
            headerTitleStyle: { color: "#fff", fontFamily: typography.bold },
          }}
        />
        <Stack.Screen
          name="main"
          component={Main}
          options={{
            title: "GitHub Viewer",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#b71ef4" },
            headerTitleStyle: { color: "#fff", fontFamily: typography.bold },
          }}
        />
        <Stack.Screen
          name="user"
          component={User}
          options={{
            title: "Perfil do Usuário",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#b71ef4" },
            headerTitleStyle: { color: "#fff", fontFamily: typography.bold },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
