import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button} from 'react-native';
import api from './api'
import {obterUsuarios} from './api';
export default function App() {
const {data, setData} = useState({})
const recebeUsuarios = () => {
  const response = obterUsuarios()
  setData(response)
}
  return (
    <View style={styles.container}>
      <Button title='Obter usuários' onPress={recebeUsuarios} style/>
      <FlatList
              data={data}
              keyExtractor={item => item.toString()}
              showsVerticalScrollIndicator={false}
              style={styles.FlatList}
              renderItem={({ item }) => (
                <View style={styles.ContainerView}>
                  <Text style={styles.Texto}>{item}</Text>
                  <TouchableOpacity onPress={() => removeTask(item)}>
                    <MaterialIcons
                      name="delete-forever"
                      size={25}
                      color="#f64c75"
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Button: {
    height: 40,
    width: 40,
    marginLeft: 10,
    marginTop: 50,
    marginBottom: 500000
  },

  FlatList: {
    flex: 1,
    marginTop: 5
  },
});

