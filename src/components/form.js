import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";

function LoginForm(){
  const [passwordInput, setPasswordInput] = useState('')
    return (
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Username or email"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing = {()=> passwordInput.focus()}
            keyboardType = "email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            secureTextEntry
            returnKeyType= "go"
            ref={(input) => setPasswordInput(input)}
          />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: '#FFF',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderTopLeftRadius: 16,
    borderBottomRightRadius:16
  },
  buttonContainer: {
    backgroundColor: '#2988b9',
    paddingVertical: 15,
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});

export default LoginForm;