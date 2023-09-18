import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from '../components/TabNavigator';
import ChatScreen from '../screens/chat/ChatScreen';

const Stack = createStackNavigator()

const Navigation = (): JSX.Element => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="WhatsApp" 
                    options={{ headerShown: false }} 
                    component={TabNavigator} 
                />
                <Stack.Screen 
                    name='ChatScreen' 
                    options={{ headerShown: false }} 
                    component={ChatScreen} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation