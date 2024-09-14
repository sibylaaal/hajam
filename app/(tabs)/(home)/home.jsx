import React, { useState } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, TextInput, Modal, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import Slider from '@react-native-community/slider';

export default function Index() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false); // State to track favorite status

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Where Do You Want To Go?"
                    style={styles.searchInput}
                />
                <Ionicons name="search" size={24} />
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Ionicons name="filter" size={24} style={styles.filterIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.categoriesContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Categories</Text>
                    <Text style={styles.seeAll}>See All</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesScroll}>
                    <View style={styles.category}>
                        <MaterialCommunityIcons style={{ padding: 10 }} name="baby-bottle-outline" size={50} color="#808080" />
                        <Text style={styles.categoryText}>Baby</Text>
                    </View>
                    <View style={styles.category}>
                        <Ionicons name="man" style={{ padding: 10 }} size={50} color="#808080" />
                        <Text style={styles.categoryText}>Man</Text>
                    </View>
                    <View style={styles.category}>
                        <Ionicons name="woman" style={{ padding: 10 }} size={50} color="#808080" />
                        <Text style={styles.categoryText}>Woman</Text>
                    </View>
                    <View style={styles.category}>
                        <FontAwesome name="hand-stop-o" style={{ padding: 10 }} size={50} color="#808080" />
                        <Text style={styles.categoryText}>Nails</Text>
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
                <Link href={'barber/1'}>
                    <View style={styles.popularItem}>
                        <Image
                            source={{ uri: 'https://ncd.eanocookie.com/image/eap/eaimages/blog_gallery/salon-de-coiffure_03f1005d10.jpg' }} // Replace with actual image URL
                            style={styles.popularImage}
                        />
                        <View style={styles.popularInfo}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.popularTitle}>Saalbach Hinterglemm</Text>
            <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
                <Ionicons name={isFavorite ? 'heart' : 'heart-outline'}  size={30} color={isFavorite ? '#1faf73' : '#808080'} />
            </TouchableOpacity>
        </View>
                            <Text style={styles.popularPrice}>$436</Text>
                            <Text style={styles.popularLocation}>Austria</Text>
                            <View style={styles.popularRatingContainer}>
                                <Ionicons name="star" size={16} color="#FFD700" />
                                <Text style={styles.popularRating}>4.9 (12.6K)</Text>
                            </View>
                            <Text style={styles.popularDetails}>2 Beds • 2 Baths • 4 Guests</Text>
                            {/* Heart icon for favorite */}
                          
                        </View>
                    </View>
                </Link>
                {/* More popular items */}
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <Ionicons name="filter" size={24} color="#1faf73" />
                            <Text style={styles.modalTitle}>Filter</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Ionicons name="close" size={24} color="#1faf73" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.filterLabel}>City</Text>
                        <TextInput
                            style={styles.filterInput}
                            placeholder="Enter city"
                            value={selectedCity}
                            onChangeText={setSelectedCity}
                        />

                        <Text style={styles.filterLabel}>Price</Text>
                        <Slider
                            style={{ width: '100%', height: 40 }}
                            minimumValue={0}
                            maximumValue={1000}
                            minimumTrackTintColor="#1faf73"
                            maximumTrackTintColor="#d3d3d3"
                            thumbTintColor="#1faf73"
                            value={price}
                            onValueChange={(value) => setPrice(value)}
                        />
                        <Text style={{fontFamily:'Poppins'}} >Selected Price: ${price.toFixed(0)}</Text>

                        <Text style={styles.filterLabel}>Rating</Text>
                        <Slider
                            style={{ width: '100%', height: 40 }}
                            minimumValue={0}
                            maximumValue={5}
                            minimumTrackTintColor="#1faf73"
                            maximumTrackTintColor="#d3d3d3"
                            thumbTintColor="#1faf73"
                            value={rating}
                            onValueChange={(value) => setRating(value)}
                        />
                        <Text style={{fontFamily:'Poppins'}}>Selected Rating: {rating.toFixed(1)}</Text>

                        <TouchableOpacity
                            style={styles.applyButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.applyButtonText}>APPLY</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        padding: 8,
        marginBottom: 16,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        paddingHorizontal: 8,
    },
    filterIcon: {
        marginLeft: 8,
        color: '#808080',
    },
    categoriesContainer: {
        marginBottom: 16,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Poppins',
        color: '#4A4A4A'
    },
    seeAll: {
        color: '#808080',
    },
    categoriesScroll: {
        paddingVertical: 8,
    },
    category: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginRight: 12,
        padding: 12,
        alignItems: 'center',
    },
    categoryText: {
        marginTop: 6,
        color: '#808080',
        fontFamily: 'Poppins'
    },
    bannerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1faf73',
        borderRadius: 8,
        padding: 7,
        marginBottom: 16,
    },
    iconContainer: {
        backgroundColor: '#129B5E',
        borderRadius: 32,
        padding: 16,
    },
    textContainer: {
        marginLeft: 16,
    },
    bannerText: {
        fontSize: 18,
        fontFamily: 'Poppins',
        color: '#4A4A4A',
        color: 'white',
    },
    bannerSubText: {
        color: 'white',
    },
    imageContainer: {
        marginLeft: 'auto',
    },
    bannerImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    mostPopularContainer: {
        marginBottom: 16,
    },
    popularItem: {
        flexDirection: 'row',
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        paddingBottom: 16,
    },
    popularImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 16,
    },
    popularInfo: {
    },
    popularTitle: {
        fontSize: 16,
        fontFamily: 'Poppins',
        color: '#808080'
    },
    popularPrice: {
        color: '#1faf73',
        fontSize: 16,
        fontFamily: 'Poppins',
        color: '#808080',
        marginTop: 4,
    },
    popularLocation: {
        color: '#808080',
        marginTop: 4,
    },
    popularRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    popularRating: {
        marginLeft: 4,
        color: '#808080',
    },
    popularDetails: {
        color: '#808080',
        marginTop: 4,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        width: '100%',
        height:'70%',
        marginTop:280,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 16,
    },
    modalTitle: {
        fontSize: 18,
        fontFamily: 'Poppins',
        color: '#4A4A4A',
        color: '#1faf73',
    },
    filterLabel: {
        alignSelf: 'flex-start',
        marginTop: 8,
        fontFamily:'Poppins'
    },
    filterInput: {
        fontFamily:'Poppins'
,
        borderWidth: 1,
        borderColor: '#d3d3d3',
        borderRadius: 8,
        padding: 8,
        width: '100%',
        marginBottom: 8,
    },
    applyButton: {
        backgroundColor: '#1faf73',
        borderRadius: 8,
        padding: 12,
        marginTop: 16,
        width: '100%',
        alignItems: 'center',
    },
    applyButtonText: {
        color: 'white',
        fontFamily: 'Poppins',
    },
    favoriteButton: {
marginLeft:10,
    },
});


