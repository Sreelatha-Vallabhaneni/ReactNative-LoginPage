import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from './form';


function LoginPage() {
  return (
    <View style={styles.container}>
      <Text>Github Login Page!</Text>
      <View>
        <LoginForm />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginPage;