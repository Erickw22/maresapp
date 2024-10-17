import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Principal from './screens/Principal';
import RedfSenha from './screens/RedfSenha';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Perfil from './screens/Perfil';
import Ecopoints from './screens/Ecopoints';
import Chat from './screens/Chat';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
      <Stack.Screen name="Cadastro" component={Cadastro}  options={{headerShown: false}}/>
      <Stack.Screen name="Principal" component={Principal} options={{headerShown: false}}/>
      <Stack.Screen name="RedfSenha" component={RedfSenha} options={{headerShown: false}}/>
      <Stack.Screen name="Perfil" component={Perfil} options={{headerShown: false}}/>
      <Stack.Screen name="Ecopoints" component={Ecopoints} options={{headerShown: false}}/>
      <Stack.Screen name="Chat" component={Chat} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',*/
  },
});
