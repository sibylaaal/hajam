import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const favoritesData = [
    {
        id: 1,
        name: 'Favorite 1',
        description: 'Description 1',
        image: 'https://img.freepik.com/free-photo/vintage-chairs-barbershop_155003-10150.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720051200&semt=ais_user', // Replace with actual image URL
        rating: 4.5,
        location: 'Location 1',
        guests: 2,
        beds: 1,
        baths: 1,
        highlights: ["Highlight 1", "Highlight 2"],
        price: 100,
    },
    {
        id: 2,
        name: 'Favorite 2',
        description: 'Description 2',
        image: 'https://img.freepik.com/free-photo/vintage-chairs-barbershop_155003-10150.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720051200&semt=ais_user', // Replace with actual image URL
        rating: 4.0,
        location: 'Location 2',
        guests: 3,
        beds: 2,
        baths: 2,
        highlights: ["Highlight 3", "Highlight 4"],
        price: 150,
    },
    // Add more items as needed
];

export default function Favorite() {
    const [isFavorited, setIsFavorited] = useState(favoritesData.map(() => true)); // Assume all items are favorited initially

    const toggleFavorite = (index) => {
        const updatedFavorites = [...isFavorited];
        updatedFavorites[index] = !updatedFavorites[index];
        setIsFavorited(updatedFavorites);
    };

    const renderFavoriteItem = ({ item, index }) => (
        <TouchableOpacity style={styles.favoriteItem}>
            <View style={{paddingVertical:30,paddingHorizontal:15}}>
            <Image source={{ uri: item.image }} style={styles.image} /></View>
            <View style={styles.detailsContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.name}>{item.name}</Text>
                    <TouchableOpacity onPress={() => toggleFavorite(index)} style={styles.favoriteButton}>
                        <Ionicons name={isFavorited[index] ? 'heart' : 'heart-outline'} size={20} color={isFavorited[index] ? '#1faf73' : '#808080'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.ratingPlaceContainer}>
                    <Ionicons name="star" size={16} color="#FFD700" />
                    <Text style={styles.rating}> {item.rating} (2.4k reviews)</Text>
                </View>
                <Text style={styles.place}>{item.location}</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.info}>{item.guests} Guests</Text>
                    <Text style={styles.info}>{item.beds} Beds</Text>
                    <Text style={styles.info}>{item.baths} Baths</Text>
                </View>
                <Text style={styles.price}>${item.price} </Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={favoritesData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderFavoriteItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    favoriteItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    image: {
        width: 120,
        height: 120,
    },
    detailsContainer: {
        flex: 1,
        padding: 12,
    },
    name: {
        fontSize: 16,
        fontFamily: 'Poppins',
        color: '#4A4A4A',
        marginBottom: 6,
    },
    ratingPlaceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    rating: {
        fontSize: 14,
        marginLeft: 5,
    },
    place: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 10,
        fontSize: 12,
        color: '#808080',
        marginBottom: 6,
        alignSelf: 'flex-start',
    },
    infoContainer: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    info: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 10,
        fontSize: 12,
        color: '#808080',
        marginRight: 8,
    },
    price: {
        fontSize: 14,
        fontFamily: 'Poppins',
        color: '#1faf73',
        marginTop: 6,
    },
    favoriteButton: {
        padding: 8,
        marginLeft: 'auto',
    },
});
