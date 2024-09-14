import React, { useState } from 'react';
import { Text, View, TextInput, Switch, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function Profile() {
    const [name, setName] = useState('Zain Malik');
    const [email, setEmail] = useState('zainmalik02323@gmail.com');
    const [phone, setPhone] = useState('(628) 267-9041');
    const [pushNotifications, setPushNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(true);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.profilePic}>
                    <Text style={styles.profilePicText}>ZM</Text>
                </View>
                <Text style={styles.profileName}>Zain Malik</Text>
                <Text style={styles.profileJoined}>Joined August 17, 2023</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>General</Text>
                <View style={styles.sectionItem}>
                    <Ionicons name="person-outline" size={24} color="black" />
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View style={styles.sectionItem}>
                    <MaterialIcons name="email" size={24} color="black" />
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.sectionItem}>
                    <Ionicons name="call-outline" size={24} color="black" />
                    <TextInput
                        style={styles.input}
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                    />
                </View>
                <View style={styles.sectionItem}>
                    <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
                    <Text style={styles.sectionText}>Feedback</Text>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Notifications</Text>
                <View style={styles.sectionItem}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                    <Text style={styles.sectionText}>Push notifications</Text>
                    <Switch
                        value={pushNotifications}
                        onValueChange={setPushNotifications}
                        thumbColor="#1faf73"
                        trackColor={{ true: '#b0f3d2', false: '#ccc' }}
                    />
                </View>
                <View style={styles.sectionItem}>
                    <Ionicons name="chatbubbles-outline" size={24} color="black" />
                    <Text style={styles.sectionText}>SMS notifications</Text>
                    <Switch
                        value={smsNotifications}
                        onValueChange={setSmsNotifications}
                        thumbColor="#1faf73"
                        trackColor={{ true: '#b0f3d2', false: '#ccc' }}
                    />
                </View>
            </View>
            <View style={{margin:10}}>
                     <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>    
            </View>
            <View style={{padding:10}}></View>
   
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    profileHeader: {
        alignItems: 'center',
        marginBottom: 20,
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
        fontFamily:'Poppins'
    },
    profileName: {
        fontSize: 22,
        fontFamily:'Poppins',
        marginTop: 10,
    },
    profileJoined: {
        fontSize: 14,
        color: '#888',
    },
    section: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily:'Poppins',
        marginBottom: 10,
    },
    sectionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionText: {
        fontWeight:'700',
        fontSize: 16,
        marginLeft: 10,
    },
    input: {
        fontFamily:'Poppins',
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginLeft: 10,
        borderRadius: 5,
    },
    saveButton: {
        backgroundColor: '#1faf73',
        padding: 10,
        marginBottom:10,
        borderRadius: 5,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 18,




        fontFamily:'Poppins'
    },
});
