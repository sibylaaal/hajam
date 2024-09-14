import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, useNavigation } from '@react-navigation/native';

export default function NewsDetailScreen() {
    const [newsDetail, setNewsDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        // Simulate fetching news detail data
        const fetchNewsDetail = async () => {
            setTimeout(() => {
                setNewsDetail({
                    title: "Alexander wears modified helmet in road races",
                    category: "Sports",
                    image: "https://www.nativys.com/image-get/2xzlrEhcrdObFcFQEwIC6FhGQJHvmXrybUJ36QKj.jpg",
                    source: "CNN Indonesia",
                    time: "4 hours ago",
                    content: `As a tech department, we're usually pretty good at spotting tech that's out of the ordinary. During time trials we're used to seeing new aero innovation, and while there are certainly aero tricks used in road stages, they are harder to spot.
                    \n\nA case in point, throughout the Volta ao Algarve, Alexander Kristoff has been wearing an old discontinued time trial helmet, complete with visor removed. In the road stages, Kristoff has been using this time trial helmet with the visor removed, and a new insert that covers the area where the visor would have been, likely improving the aero qualities of the helmet.`
                });
                setLoading(false);
            }, 1000);
        };

        fetchNewsDetail();
    }, []);

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#1faf73" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Link to={'/news'} style={styles.backButton} >
                <Ionicons name="arrow-back" size={24} color="#fff" />
            </Link>
            <ScrollView>
                <Image source={{ uri: newsDetail.image }} style={styles.image} />
                <View style={styles.header}>
                    <Text style={styles.category}>{newsDetail.category}</Text>
                    <Text style={styles.title}>{newsDetail.title}</Text>
                    <View style={styles.sourceContainer}>
                        <Text style={styles.source}>{newsDetail.source}</Text>
                        <Text style={styles.time}>{newsDetail.time}</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.content}>{newsDetail.content}</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 10,
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        padding: 8,
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width * 0.6,
    },
    header: {
        padding: 20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
    },
    category: {
        fontSize: 14,
        color: '#1faf73',
        fontFamily: 'Poppins',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        fontFamily: 'Poppins',
        marginVertical: 10,
    },
    sourceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    source: {
        fontSize: 14,
        color: '#999',
        fontFamily: 'Poppins',
    },
    time: {
        fontSize: 14,
        color: '#999',
        fontFamily: 'Poppins',
    },
    contentContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: 10,
    },
    content: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
        lineHeight: 24,
    },
});
