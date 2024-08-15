import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import HomePage from './screens/HomePage';
import RandomImageGenerator from './screens/Page1';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Page5 from './screens/Page5';
import Page2 from './screens/Page2';
import Page4 from './screens/Page4';
import Page3 from './screens/Page3';
import Page1 from './screens/Page1';
import RegisterPage from './screens/Register';
import LoginPage from './screens/Login';
import {auth} from './screens/Auth'
import { signOut } from 'firebase/auth';
import Tabs from './components/Tabs';



const Stack = createNativeStackNavigator()

const LogOutButton = ({navigation}: any) =>{
  return (
    <View>
      <Button
      title='Log Out'
      onPress={async() => {
        await signOut(auth)
        navigation.navigate("Login")
      }}
      />
    </View>
  )
}


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Tabs'>
          <Stack.Screen 
            name='Register' 
            component={RegisterPage}
            options={{
              headerShown: false
            }}
            />
          <Stack.Screen 
            name='Login' 
            component={LoginPage}
            options={{
            headerShown: false
            }}
            />
          <Stack.Screen 
            name='HomePage' 
            component={Tabs}
            options={({navigation}) =>({
              headerShown: true,
              headerLeft: () => null,
              headerRight: () => <LogOutButton navigation={navigation}/>
            })
          }/>
        </Stack.Navigator>
      </NavigationContainer>
      );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
