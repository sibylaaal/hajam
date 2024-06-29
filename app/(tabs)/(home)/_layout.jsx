

import {Drawer} from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Header } from 'react-native/Libraries/NewAppScreen'
import Customheader from '../../../components/customheader'
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomDrawer from '../../../components/customedrawer';
import { Entypo } from '@expo/vector-icons';

export default function _Layout(){
    return (
        <GestureHandlerRootView style={{flex:1}} >








            <Drawer screenOptions={{drawerHideStatusBarOnOpen:false,drawerActiveTintColor:'#1faf73' }} drawerContent={CustomDrawer }>
                <Drawer.Screen options={{header:()=><Customheader/>,drawerIcon:({size,color})=>(
                    <AntDesign name="home" size={24} color={color} />
                )}} name='home'/>
         
                <Drawer.Screen options={{header:()=><Customheader/>,drawerIcon:({size,color})=>(
                    <AntDesign name="profile" size={24} color={color} />
                )}} name='profile'/>
                  <Drawer.Screen options={{header:()=><Customheader/>,drawerLabel:'My reservations ',drawerIcon:({size,color})=>(
                    <Entypo name="list" size={24} color={color} />
                                    )}} name='reservations'/>
                                    
                                    <Drawer.Screen options={{header:()=><Customheader/>,drawerLabel:'My Favorites ',drawerIcon:({size,color})=>(
                    <Entypo name="heart" size={24} color={color} />
                                    )}} name='fav'/>
            </Drawer>
        </GestureHandlerRootView>
    )
}

