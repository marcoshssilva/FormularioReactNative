/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from 'react';

import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const ConfirmationPage: () => Node = ({ navigation }) => {

  const back = () => navigation.navigate('Home');

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text>Seu cadastro foi realizado com sucesso!</Text>

        <TouchableOpacity onPress={back}>
          <Text>Realizar outro cadastro.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const Page: () => Node = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [nome, setNome] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [email, setEmail] = React.useState('');

  const showAfterSubscribe = () => navigation.navigate('ConfirmationPage');

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        background: isDarkMode ? Colors.dark : Colors.light,
      }}>
      <View>
        <Text
          style={{
            ...styles.text,
            color: isDarkMode ? Colors.light : Colors.dark,
            background: isDarkMode ? Colors.dark : Colors.light,
          }}>
          Seu Nome:
        </Text>
        <TextInput
          style={{ ...styles.inputField }}
          onChangeText={text => setNome(text)}
        />

        <Text
          style={{
            ...styles.text,
            color: isDarkMode ? Colors.light : Colors.dark,
            background: isDarkMode ? Colors.dark : Colors.light,
          }}>
          Seu Telefone:
        </Text>
        <TextInput
          style={{ ...styles.inputField }}
          onChangeText={text => setTelefone(text)}
          keyboardType="numeric"
        />

        <Text
          style={{
            ...styles.text,
            color: isDarkMode ? Colors.light : Colors.dark,
            background: isDarkMode ? Colors.dark : Colors.light,
          }}>
          Seu Email:
        </Text>
        <TextInput
          style={{ ...styles.inputField }}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View>
        <TouchableOpacity
          style={{ ...styles.submitButton }}
          onPress={showAfterSubscribe}>
          <Text style={{ color: '#000000' }}>Efetuar Inscrição</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24.5,
    justifyContent: 'space-between',
  },
  text: {
    textAlign: 'left',
    fontSize: 16,
  },
  title: {
    fontSize: 35,
    marginBottom: 16,
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  submitButton: {
    padding: 10,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
  },
  inputField: {
    borderBottomWidth: 3,
    marginBottom: 16,
  },
});

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Page} options={{
            title: 'Cadastro',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        <Stack.Screen
          name="ConfirmationPage"
          component={ConfirmationPage}
          options={{
            title: 'Confirmação de cadastro.',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
