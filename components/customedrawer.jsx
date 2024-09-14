import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function CustomDrawer(props) {
    const router = useRouter();
    
    return (
        <View style={{ flex: 1 }}>
           
            <DrawerContentScrollView {...props}>
                 <View style={styles.header}>
                 <View style={styles.profilePic}>
                    <Text style={styles.profilePicText}>ZM</Text>
                </View>
                <Text style={{fontFamily:'Poppins',fontSize:30,color:'#808080'}}>
                    Bilal korchi
                </Text>
            </View>
                <DrawerItemList  {...props} />
            </DrawerContentScrollView>
            <View style={styles.footer}>
                <Text style={styles.footerText}>
<TouchableOpacity style={{padding:10 ,borderRadius:10,backgroundColor:'#f0f0f0'}} onPress={()=>router.replace('/')}>
<Ionicons name="exit-outline" size={30}  color="#808080" />

</TouchableOpacity>

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
    profilePic: {
        backgroundColor: '#d9d9d9',
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePicText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
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
