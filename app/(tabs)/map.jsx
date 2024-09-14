import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput, Modal } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import Slider from '@react-native-community/slider';

export default function MapScreen() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const dummyData = [
    {
      id: 1,
      name: 'Pizza Napoli',
      location: { latitude: 48.8588443, longitude: 3.2943506 },
      type: 'Salon', // Added type for salon or barber
      distance: '6.5km',
      image: require('../../assets/logo.png'), // Update with your image path
      rating: 4.5,
    },   {
      id: 2,
      name: 'Pizza Napoli',
      location: { latitude: 50.8588443, longitude: 4.2943506 },
      type: 'Salon', // Added type for salon or barber
      distance: '6.5km',
      image: require('../../assets/logo.png'), // Update with your image path
      rating: 4.5,
    },   {
      id: 3,
      name: 'Pizza Napoli',
      location: { latitude: 49.8588443, longitude: 6.2943506 },
      type: 'Salon', // Added type for salon or barber
      distance: '6.5km',
      image: require('../../assets/logo.png'), // Update with your image path
      rating: 4.5,
    },
    // Add more data as needed
  ];

  useEffect(() => {
    const getLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.warn('Location permission not granted');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    };

    getLocationPermission();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={i <= rating ? 'star' : 'star-outline'}
          size={16}
          color="#FFD700"
        />
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
           <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Search by the name of the salon"
                    style={styles.searchInput}
                />
                <Ionicons name="search" size={24} />
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Ionicons name="filter" size={24} style={styles.filterIcon} />
                </TouchableOpacity>
            </View>
      {initialRegion ? (
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
          showsUserLocation={true}
        >


        
              
          {dummyData.map((place) => (
            
            <Marker
              key={place.id}
              coordinate={place.location}
              onPress={() => setSelectedPlace(place)}
            >
              <View style={styles.marker}>
                <Image style={styles.markerImage} source={require('../../assets/logo.png')} /> 
              </View>
            </Marker>
          ))} 
        </MapView>
      ) : (
        <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#1faf73" />
            </View>      )}

      {selectedPlace && (
        <View style={styles.modal}>
          <Image style={styles.modalImage} source={selectedPlace.image} />
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedPlace.name}</Text>
            <View style={styles.ratingContainer}>{renderStars(selectedPlace.rating)}</View>
            <Text style={styles.modalDistance}>{selectedPlace.distance}</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.modalType}>{selectedPlace.type}</Text>
            <Text style={styles.modalType}>{selectedPlace.type}</Text>
</View>
            <View style={styles.actions}>
            
              
              <TouchableOpacity 
              style={{    flex: 1,
                alignContent:'center'
                ,
textAlign:'center'              }}
              > 
               <Link              style={styles.reserveButton}
 href={'barber/1'} >
                <Text style={styles.buttonText}>Reserve</Text>
                         </Link>



   </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => setSelectedPlace(null)} 
                style={styles.button}
              >
                <Text style={styles.buttonText2}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  marker: {
    alignItems: 'center',
  },
  markerImage: {
    width: 50,
    height: 50,
  },
  filterIcon: {
    marginLeft: 8,
    color: '#808080',
},
  searchContainer: {

    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 8,
    marginTop:35,
    marginBottom: 16,
},
searchInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 8,
},
  modal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    margin: 10,
    elevation: 5,
  },
  modalImage: {
    width: '100%',
    height: 200, // Increased the image size
  },
  modalContent: {
    padding: 15,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
},
  modalTitle: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  modalDistance: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  modalType: {
    width:100,
    margin:5,
    textAlign:'center',
    fontFamily: 'Poppins',
    fontSize: 14,
    padding:8,
    borderRadius:10,
    color: 'white',
    backgroundColor:'#1faf73',

    marginTop: 10,
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
  actions: {
    flexDirection: 'row',
    marginTop: 15,
  },
  reserveButton: {
    backgroundColor: '#1faf73',
    padding: 10,
    borderRadius: 8,
    textAlign:'center'   ,
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins',
    color: 'white',
  },
  buttonText2: {
    fontFamily: 'Poppins',
  }
});
