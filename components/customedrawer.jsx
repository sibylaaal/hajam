import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Image, Text, View, StyleSheet } from "react-native";

export default function CustomDrawer(props) {
    const router = useRouter();
    
    return (
        <View style={{ flex: 1 }}>
           
            <DrawerContentScrollView {...props}>
                 <View style={styles.header}>
                <Image 
                    style={styles.image} 
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/640px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg' }} 
                />
            </View>
                <DrawerItemList  {...props} />
                <DrawerItem label={'Logout'} activeBackgroundColor="#1faf73" labelStyle={{paddingLeft:20}} inactiveBackgroundColor="#1faf73" inactiveTintColor="white" onPress={() => router.replace('/')} />
            </DrawerContentScrollView>
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    {/* Add any footer text here */}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        alignItems: 'center',
        padding: 2,
        paddingTop:20,
        paddingBottom:10

    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 80,
    },
    footer: {
        padding: 10,
    },
    footerText: {
        color: 'white',
    },
});
