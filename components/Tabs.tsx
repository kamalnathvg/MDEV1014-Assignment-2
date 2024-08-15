import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Page1 from "../screens/Page1";
import Page2 from "../screens/Page2";
import Page3 from "../screens/Page3";
import Page4 from "../screens/Page4";
import Page5 from "../screens/Page5";


const Tab = createBottomTabNavigator()

const Tabs = () => {

    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: 'tomato',
            headerShown: false,
            tabBarInactiveTintColor: 'grey',
            tabBarStyle:{
                backgroundColor: 'lightblue'
            },
            headerStyle: {
                backgroundColor: 'lightblue'
            },

        }}
        >
            <Tab.Screen
            name="1"

            >
                {() => <Page1/>}
            </Tab.Screen>
            <Tab.Screen
            name="2"
            >
                {() => <Page2/>}
            </Tab.Screen>

            <Tab.Screen
            name="3"
            >
                {() => <Page3/>}
            </Tab.Screen>

            <Tab.Screen
            name="4"
            >
                {() => <Page4/>}
            </Tab.Screen>

            <Tab.Screen
            name="5"
            >
                {() => <Page5/>}
            </Tab.Screen>
        </Tab.Navigator>
    )
}


export default Tabs;