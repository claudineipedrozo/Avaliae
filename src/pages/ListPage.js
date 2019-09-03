import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default function ListPage({ navigation }) {

  function handleList(){
    navigation.navigate('LoginPage');
  }

  return (
    <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Supermercado Princesa'},
            {key: 'Supermercado Seriema'},
            {key: 'Supermercado Santa Clara'},
            {key: 'Farmácia Popular'},
            {key: 'Atlântico Super Center'},
            {key: 'Supermercado JR'},
            {key: 'Sertão'},
            {key: 'Magazine Luiza'},
            {key: 'Casas Bahia '},
            {key: 'Pastelaria Mineira'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      <TouchableOpacity onPress={handleList} style={styles.button}>
        <Text style={styles.buttonText}>Deseja Avaliar?</Text>        
      </TouchableOpacity>
    
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50
  },
  item: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    height: 44
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
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  }
});