import React from 'react';
import { Text, 
  KeyboardAvoidingView, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity,
  Platform
} from 'react-native';


export default function App({ navigation }) {
  function handleList(){
    navigation.navigate('ListPage');
  }
  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === 'ios'} 
      style={styles.container}
    >
      <Text style={styles.text}>Avaliaê</Text>

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder ="Digite o Estabelecimento"
        placeholderTextColor= '#999'
        style={styles.input}
      />

      <TouchableOpacity onPress={handleList} style={styles.button}>
        <Text style={styles.buttonText}>Pesquisar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f7f5',
    padding: 20
  },

  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#db0f2b'
  },

  input: {
    alignSelf: 'stretch',
    height: 46,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    marginTop: 20,
    paddingHorizontal: 15

  },

  button: {
    alignSelf: 'stretch',
    height: 46,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 20,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },
});

