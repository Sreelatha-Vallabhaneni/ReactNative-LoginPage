import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

function LoginForm(){
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username or email"
          placeholderTextColor="rgba(255,255,255,0.7)"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
        />
        <TouchableOpacity>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
}

export default LoginForm;


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    padding: 20,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: '#FFF',
    marginBottom: 20,
    paddingHorizontal: 10
  },
});