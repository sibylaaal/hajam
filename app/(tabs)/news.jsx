import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions, FlatList, TextInput } from "react-native";

const fetchNewsData = async () => {
    // Replace with your API call to fetch news
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                breakingNews: [
                    {
                        id: 1,
                        title: "Alexander wears modified helmet in road races",
                        category: "Sports",
                        image: "https://www.nativys.com/image-get/2xzlrEhcrdObFcFQEwIC6FhGQJHvmXrybUJ36QKj.jpg",
                        source: "CNN Indonesia",
                        time: "4 hours ago"
                    },
                    {
                        id: 2,
                        title: "Alexander wears modified helmet in road races",
                        category: "Sports",
                        image: "https://www.nativys.com/image-get/2xzlrEhcrdObFcFQEwIC6FhGQJHvmXrybUJ36QKj.jpg",
                        source: "CNN Indonesia",
                        time: "4 hours ago"
                    }
                ],
                recommendations: [
                    {
                        id: 1,
                        title: "What Training Do Volleyball Players Need?",
                        category: "Sports",
                        image: "https://www.goodfellasdubai.com/wp-content/uploads/2020/02/dubai-marina-barbershop.jpg",
                        source: "McKindney",
                        date: "Feb 27, 2023"
                    },
                    {
                        id: 2,
                        title: "What Training Do Volleyball Players Need?",
                        category: "Sports",
                        image: "https://www.goodfellasdubai.com/wp-content/uploads/2020/02/dubai-marina-barbershop.jpg",
                        source: "McKindney",
                        date: "Feb 27, 2023"
                    },
                    {
                        id: 3,
                        title: "Secondary school places: When do parents find out?",
                        category: "Education",
                        image: "https://dailybarber.com/wp-content/uploads/DSZ-Barbers-4.jpg",
                        source: "Daily News",
                        date: "Feb 15, 2023"
                    }
                ]
            });
        }, 1000);
    });
};

export default function NewsScreen() {
    const [newsData, setNewsData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadNewsData = async () => {
            const data = await fetchNewsData();
            setNewsData(data);
            setLoading(false);
        };

        loadNewsData();
    }, []);

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#1faf73" />
            </View>
        );
    }

    const renderBreakingNewsItem = ({ item }) => (
        <Link style={{margin:4}} href={'news/1'}>

        <View style={styles.breakingNewsItem}>
            <Image source={{ uri: item.image }} style={styles.breakingNewsImage} />
            <View style={styles.breakingNewsInfo}>
                <Text style={styles.breakingNewsCategory}>{item.category}</Text>
                <Text style={styles.breakingNewsTitle}>{item.title}</Text>
                <View style={styles.breakingNewsFooter}>
                    <Text style={styles.breakingNewsSource}>{item.source}</Text>
                    <Text style={styles.breakingNewsTime}>{item.time}</Text>
                </View>
            </View>
        </View></Link>
    );

    const renderRecommendationItem = ({ item }) => (


<TouchableOpacity  style={styles.recommendationItem}>        
        <Image source={{ uri: item.image }} style={styles.recommendationImage} />

   
            <View style={styles.recommendationInfo}>
                <Text style={styles.recommendationCategory}>{item.category}</Text>
                <Text style={styles.recommendationTitle}>{item.title}</Text>
                <Text style={styles.recommendationSource}>{item.source} • {item.date}</Text>
            </View>   

        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Breaking News</Text>
                <View style={styles.searchContainer}>
                <TextInput
                    placeholder="What you looking for?"
                    style={styles.searchInput}
                />
                <Ionicons name="search" size={24} />
          
            </View>
            </View>
            <FlatList
                data={newsData.breakingNews}
                renderItem={renderBreakingNewsItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatList}
            />

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Recommendation</Text>
                <TouchableOpacity>
                    <Text style={styles.headerLink}>View all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={newsData.recommendations}
                renderItem={renderRecommendationItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatList}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 20,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    header: {
        justifyContent: 'space-between',
        marginTop:30,
        marginBottom: 10,
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: '900',
        fontFamily: 'Poppins',
        color: '#333',
    },
    headerLink: {
        color: '#1faf73',
        fontFamily: 'Poppins',
    },
    breakingNewsItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        width: Dimensions.get('window').width - 40,
        marginRight: 10,
    },
    breakingNewsImage: {
        width: '100%',
        height: 180,
    },
    breakingNewsInfo: {
        padding: 10,
    },
    breakingNewsCategory: {
        fontSize: 14,
        color: '#1faf73',
        fontFamily: 'Poppins',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        padding: 8,
        marginTop:18,
        marginBottom: 16,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        paddingHorizontal: 8,
    },
    breakingNewsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        fontFamily: 'Poppins',
        marginVertical: 5,
    },
    breakingNewsFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    breakingNewsSource: {
        fontSize: 12,
        color: '#999',
        fontFamily: 'Poppins',
    },
    breakingNewsTime: {
        fontSize: 12,
        color: '#999',
        fontFamily: 'Poppins',
    },
    recommendationItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        width: (Dimensions.get('window').width - 60) / 2,
        marginRight: 10,
        marginBottom: 20,
    },
    recommendationImage: {
        width: '100%',
        height: 100,
    },
    recommendationInfo: {
        padding: 10,
    },
    recommendationCategory: {
        fontSize: 14,
        color: '#1faf73',
        fontFamily: 'Poppins',
    },
    recommendationTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        fontFamily: 'Poppins',
        marginVertical: 5,
    },
    recommendationSource: {
        fontSize: 12,
        color: '#999',
        fontFamily: 'Poppins',
    },
    flatList: {
        paddingVertical: 10,
    },
});
