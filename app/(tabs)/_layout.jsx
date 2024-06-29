import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import Customheader from "../../components/customheader";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";


export default function _Layout(){
return(

    
    
    
    <Tabs >
   <Tabs.Screen name="(home)" options={{title:"home",headerShown:false,tabBarLabel:''  ,tabBarActiveTintColor:'#1faf73',tabBarActiveTintColor:'#1faf73',tabBarIcon:({size,color})=>(
           <View >
                                <AntDesign  name="home" size={30} color={color} />

    </View>
   )}}  />
      <Tabs.Screen name="map" options={{title:"home",headerShown:false,tabBarLabel:''  ,tabBarActiveTintColor:'#1faf73',tabBarActiveTintColor:'#1faf73',tabBarIcon:({size,color})=>(
           <View >
<Entypo name="map"  size={24} color={color}/>
    </View>
   )}}  />
     <Tabs.Screen name="barbers" options={{title:"home",headerShown:false,tabBarLabel:''  ,tabBarActiveTintColor:'#1faf73',tabBarActiveTintColor:'#1faf73',tabBarIcon:({size,color})=>(
           <View >
      <Feather name="shopping-bag" size={24} color={color} />
    </View>
   )}}  />

    </Tabs>
)
}