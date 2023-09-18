import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CallsScreen from '../screens/calls/CallsScreen';
import ChatListScreen from '../screens/chat-list/ChatListScreen';
import StoriesScreen from '../screens/stories/StoriesScreen';
import Header from './Header';

const Tab = createMaterialTopTabNavigator()

const TabNavigator = (): JSX.Element => {
    return(
        <>
            <Header />
            <Tab.Navigator 
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 12, color: '#FFF' },
                    tabBarStyle: { backgroundColor: '#128C7E' },
                    tabBarIndicatorStyle: {backgroundColor: '#FFF'}
                }}
            >
                <Tab.Screen name="Chat" component={ChatListScreen} />
                <Tab.Screen name="Stories" component={StoriesScreen} />
                <Tab.Screen name="Calls" component={CallsScreen} />
            </Tab.Navigator>
        </>
    )
}

export default TabNavigator