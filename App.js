/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect, useContext } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { AppContext } from './app/AppContext';



const App = (props) => {

  const [textValue, setTextValue] = useState('')
  const [_, setState] = useContext(AppContext);



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ alignSelf: 'center', bottom: 150, borderWidth: 5, }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>PixaBay Search App</Text>
      </View>
      <View style={{ bottom: 40 }}>
        <View style={{ borderWidth: 3, marginBottom: 2 }}>
          <TextInput style={{ borderColor: 'gray', borderWidth: 3 }} onChangeText={(text) => setTextValue(text)}
            value={textValue} placeholder={'please enter search'} />
        </View>
        <View style={{ borderWidth: 3 }}>
          <Button title='Send'
            onPress={() => {
              setState({ imagesLoaded: false, images: {} })
              props.navigation.navigate('Thumbnail', { searchValue: textValue })
              setTextValue('');
            }

            } />
        </View>
      </View>
    </ScrollView >

  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
