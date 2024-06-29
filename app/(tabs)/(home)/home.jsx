import React from 'react';
import { Text, View, Image, ScrollView, StyleSheet, TextInput } from 'react-native';
import { AntDesign, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Where Do You Want To Go?"
                    style={styles.searchInput}
                />
                <Ionicons name="search" size={24} />
            </View>

            <View style={styles.categoriesContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Categories</Text>
                    <Text style={styles.seeAll}>See All</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesScroll}>
                    <View style={styles.category}>
                     <MaterialCommunityIcons style={{padding:10}} name="baby-bottle-outline" size={50} color="#808080" />
                        <Text style={styles.categoryText}>baby </Text>
                    </View>
                    <View style={styles.category}>
                                           <AntDesign name="man" style={{padding:10}} size={50} color="#808080" />

                        <Text style={styles.categoryText}>Man</Text>
                    </View>
                    <View style={styles.category}>
                                           <AntDesign name="woman" style={{padding:10}} size={50} color="#808080" />

                        <Text style={styles.categoryText}>Woman</Text>
                    </View>
                    <View style={styles.category}>
                                           <AntDesign name="man" style={{padding:10}} size={50} color="#808080" />

                        <Text style={styles.categoryText}>Island</Text>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.bannerContainer}>
            <View style={styles.iconContainer}>
                <Ionicons name="cut" size={32} color="white" />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.bannerText}>Find Nearby Barbers</Text>
                <Text style={styles.bannerSubText}>Discover the best barbers near you</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image 
                    source={{ uri: 'https://example.com/barber.jpg' }} // Replace with actual image URL
                    style={styles.bannerImage}
                />
            </View>
        </View>

            <View style={styles.mostPopularContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Most Popular</Text>
                    <Text style={styles.seeAll}>See All</Text>
                </View>
                <View style={styles.popularItem}>
                    <Image
                        source={{ uri: 'https://e1.pxfuel.com/desktop-wallpaper/856/367/desktop-wallpaper-white-green-thumbnail.jpg' }} // Replace with actual image URL
                        style={styles.popularImage}
                    />
                    <View style={styles.popularInfo}>
                        <Text style={styles.popularTitle}>Saalbach Hinterglemm</Text>
                        <Text style={styles.popularPrice}>$436</Text>
                        <Text style={styles.popularLocation}>Austria</Text>
                        <View style={styles.popularRatingContainer}>
                            <Ionicons name="star" size={16} color="#FFD700" />
                            <Text style={styles.popularRating}>4.9 (12.6K)</Text>
                        </View>
                        <Text style={styles.popularDetails}>2 Beds • 2 Baths • 4 Guests</Text>
                    </View>
                </View>
                <View style={styles.popularItem}>
                    <Image
                        source={{ uri: 'https://e1.pxfuel.com/desktop-wallpaper/856/367/desktop-wallpaper-white-green-thumbnail.jpg' }} // Replace with actual image URL
                        style={styles.popularImage}
                    />
                    <View style={styles.popularInfo}>
                        <Text style={styles.popularTitle}>Saalbach Hinterglemm</Text>
                        <Text style={styles.popularPrice}>$436</Text>
                        <Text style={styles.popularLocation}>Austria</Text>
                        <View style={styles.popularRatingContainer}>
                            <Ionicons name="star" size={16} color="#FFD700" />
                            <Text style={styles.popularRating}>4.9 (12.6K)</Text>
                        </View>
                        <Text style={styles.popularDetails}>2 Beds • 2 Baths • 4 Guests</Text>
                    </View>
                </View>
                <View style={styles.popularItem}>
                    <Image
                        source={{ uri: 'https://e1.pxfuel.com/desktop-wallpaper/856/367/desktop-wallpaper-white-green-thumbnail.jpg' }} // Replace with actual image URL
                        style={styles.popularImage}
                    />
                    <View style={styles.popularInfo}>
                        <Text style={styles.popularTitle}>Saalbach Hinterglemm</Text>
                        <Text style={styles.popularPrice}>$436</Text>
                        <Text style={styles.popularLocation}>Austria</Text>
                        <View style={styles.popularRatingContainer}>
                            <Ionicons name="star" size={16} color="#FFD700" />
                            <Text style={styles.popularRating}>4.9 (12.6K)</Text>
                        </View>
                        <Text style={styles.popularDetails}>2 Beds • 2 Baths • 4 Guests</Text>
                    </View>
                </View>
                <View style={styles.popularItem}>
                    <Image
                        source={{ uri: 'https://e1.pxfuel.com/desktop-wallpaper/856/367/desktop-wallpaper-white-green-thumbnail.jpg' }} // Replace with actual image URL
                        style={styles.popularImage}
                    />
                    <View style={styles.popularInfo}>
                        <Text style={styles.popularTitle}>Saalbach Hinterglemm</Text>
                        <Text style={styles.popularPrice}>$436</Text>
                        <Text style={styles.popularLocation}>Austria</Text>
                        <View style={styles.popularRatingContainer}>
                            <Ionicons name="star" size={16} color="#FFD700" />
                            <Text style={styles.popularRating}>4.9 (12.6K)</Text>
                        </View>
                        <Text style={styles.popularDetails}>2 Beds • 2 Baths • 4 Guests</Text>
                    </View>
                </View>
                <View style={styles.popularItem}>
                    <Image
                        source={{ uri: 'https://e1.pxfuel.com/desktop-wallpaper/856/367/desktop-wallpaper-white-green-thumbnail.jpg' }} // Replace with actual image URL
                        style={styles.popularImage}
                    />
                    <View style={styles.popularInfo}>
                        <Text style={styles.popularTitle}>Saalbach Hinterglemm</Text>
                        <Text style={styles.popularPrice}>$436</Text>
                        <Text style={styles.popularLocation}>Austria</Text>
                        <View style={styles.popularRatingContainer}>
                            <Ionicons name="star" size={16} color="#FFD700" />
                            <Text style={styles.popularRating}>4.9 (12.6K)</Text>
                        </View>
                        <Text style={styles.popularDetails}>2 Beds • 2 Baths • 4 Guests</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({


    bannerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#1faf73', // Purple background
        borderRadius: 10,
        margin: 10,
    },
    iconContainer: {
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    bannerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bannerSubText: {
        color: 'white',
        fontSize: 14,
    },
    imageContainer: {
        marginLeft: 10,
    },
    bannerImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    searchInput: {
        flex: 1,
        padding: 5,
        fontSize: 16,
    },
    categoriesContainer: {
        margin: 10,
        
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    seeAll: {
        color: '#1faf73',
    },
    categoriesScroll: {
        paddingHorizontal: 5,
    },
    category: {
        backgroundColor: '#f0f0f0',
paddingHorizontal:20,
borderRadius:10,
        alignItems: 'center',
        marginRight: 10,
    },
    categoryImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    categoryText: {
        marginTop: 5,
        color:'#808080',
        paddingBottom:5,
        fontSize: 14,
        fontWeight: 'bold',
    },
    mostPopularContainer: {
        margin: 10,
    },
    popularItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    popularImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    popularInfo: {
        flex: 1,
        marginLeft: 10,
    },
    popularTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    popularPrice: {
        fontSize: 16,
        color: 'green',
    },
    popularLocation: {
        fontSize: 14,
        color: '#666',
    },
    popularRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    popularRating: {
        marginLeft: 5,
        fontSize: 14,
        color: '#666',
    },
    popularDetails: {
        fontSize: 14,
        color: '#666',
    },
});
