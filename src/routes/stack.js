import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from '../pages/home';
import register from '../pages/Register';
import UserInformation from '../pages/UserInformation';


const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (

<Stack.Navigator initialRouteName='home'>
    <Stack.Screen
        name= 'home'
        component={home}
        options={{
            title: 'home',
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'white',
            headerShown: false,
          }}
    />
    <Stack.Screen
        name= 'register'
        component={register}
        options={{
            title: 'register',
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'white',
            headerShown: false,
          }}
    />
    <Stack.Screen
        name= 'UserInformation'
        component={UserInformation}
        options={{
            title: 'UserInformation',
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'white',
            headerShown: false,
          }}
    />
</Stack.Navigator>);}