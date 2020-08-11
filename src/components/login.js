import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import LoginForm from './form';


function LoginPage() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" style="auto" />
      <Image source={require("../../assets/reactnative-logo.png")} style={styles.logo} />
      <Text style={{color: "navy", fontWeight: "700"}} >React Native Login Page!</Text>
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
  logo: {
    marginVertical: 20,
    width: 100,
    height: 100,
    borderRadius: 8
  }
});

export default LoginPage;