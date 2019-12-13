import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import logo from '~/assets/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#EE4E62',
    fontSize: 24,
    marginTop: 10,
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  button: {
    height: 46,
    backgroundColor: '#EE4E62',
    alignSelf: 'stretch',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default function Login({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      style={styles.container}
    >
      <Image source={logo} />
      <Text style={styles.title}>GYMPOINT</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Informe seu ID de cadastro"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar no sistema</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
