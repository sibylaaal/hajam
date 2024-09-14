import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import Customheader from "../../components/customheader";
import { AntDesign, Entypo, Feather, FontAwesome } from "@expo/vector-icons";

export default function _Layout() {
    return (



        
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#1faf73', // Active tab color
                tabBarInactiveTintColor: 'gray', // Inactive tab color
                tabBarIndicatorStyle: {
                    backgroundColor: '#1faf73', // Active tab top border color
                    height: 3, // Adjust the height of the top border
                },
            }}
        >
            <Tabs.Screen 
                name="(home)" 
                options={{
                    title: "home",
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ size, color }) => (
                        <View style={{marginTop:5}}>
                            <AntDesign name="home" size={30} color={color} />
                        </View>
                    ),
                }} 
            />

            <Tabs.Screen 
                name="barber/[id]" 
                options={{
                    title: "barber",
                    headerShown: false,
                    tabBarButton: () => null, // Hide tab bar button for dynamic route
                }} 
            />
                <Tabs.Screen 
                name="news/[id]" 
                options={{
                    title: "news",
                    headerShown: false,
                    tabBarButton: () => null, // Hide tab bar button for dynamic route
                }} 
            />

            <Tabs.Screen 
                name="map" 
                options={{
                    title: "map",
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ size, color }) => (
                        <View style={{marginTop:5}}>
                            <Entypo name="map" size={24} color={color} />
                        </View>
                    ),
                }} 
            />

            <Tabs.Screen 
                name="news" 
                options={{
                    title: "home",
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ size, color }) => (
                        <View style={{marginTop:5}}>
                            <FontAwesome name="newspaper-o" size={24} color={color} />
                        </View>
                    ),
                }} 
            />
        </Tabs>
    );
}



