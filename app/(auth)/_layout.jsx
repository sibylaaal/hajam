import { Stack, useRouter } from "expo-router";
import { useContext } from "react";



export default function layout(){

   return (
        
        
        <Stack >

<Stack.Screen name='sign-in' options={{headerShown:false}}/>
<Stack.Screen name='sign-up' options={{headerShown:false}}/>

  </Stack>
        
    )
}