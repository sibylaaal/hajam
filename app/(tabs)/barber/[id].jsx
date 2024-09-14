import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions, FlatList, Modal, TextInput, Button } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useToast } from "react-native-toast-notifications";


const fetchBarberDetails = async (id=0) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                name: "Saalbach Hinterglemm",
                profileImages: [
                    "https://img.freepik.com/free-photo/vintage-chairs-barbershop_155003-10150.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720051200&semt=ais_user",
                    "https://img.freepik.com/free-photo/vintage-chairs-barbershop_155003-10150.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720051200&semt=ais_user",
                    "https://img.freepik.com/free-photo/vintage-chairs-barbershop_155003-10150.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720051200&semt=ais_user"
                ],
                rating: 4.9,
                location: "tetouan",
                guests: 4,
                beds: 2,
                baths: 2,
                highlights: ["Swimming pool", "Kids friendly", "Chair accessible", "Free parking"],
                description: "I live in New York. I like travelling, discover new culture and traditions, taste new food. I love meeting my guests and sharing new experiences.",
                price: 436
            });
        }, 1000);
    });
};





export default function Barber() {
    const [date, setDate] = useState(new Date())

    const { query, back } = useRouter();
    const [barber, setBarber] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedCity, setSelectedCity] = useState('');
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null); 
    const [errorDate,seterrorDate]=useState(false)
           const Toast=useToast()

    const handleConfirmDate = (date=0) => {

        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set time to the beginning of the day
    
        if (date < today) {
          seterrorDate(true)
        } else {
            seterrorDate(false)

          setSelectedDate(date);
        }
        hideDatePicker();
      };
    
      const handleConfirmTime = (time=0) => {
        setSelectedTime(time);
        hideTimePicker();
      };
    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const showTimePicker = () => {
        setTimePickerVisibility(true);
      };
    
      const hideTimePicker = () => {
        setTimePickerVisibility(false);
      };
    
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const loadBarberDetails = async () => {
            const details = await fetchBarberDetails(1);
            setBarber(details);
            setLoading(false);
        };

        loadBarberDetails();
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
                    <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
<View style={styles.modalContainer}>
                <ScrollView >
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <Ionicons name="filter" size={24} color="#1faf73" />
                            <Text style={styles.modalTitle}>Reserve</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Ionicons name="close" size={24} color="#1faf73" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.filterLabel}>Service</Text>
                        <View style={styles.tabsContainer}>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText2}>Hair</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>Shave</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>Both</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.filterLabel}>Cosmotique</Text>
                        <View style={styles.tabsContainer}>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>Creatine</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>Protien</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText2}>None</Text>
                </TouchableOpacity>
            </View>                


            <Text style={styles.filterLabel}>face</Text>
                        <View style={styles.tabsContainer}>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>clean</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>cream</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText2}>None</Text>
                </TouchableOpacity>
            </View>    

            <View style={styles.datePickerContainer}>
              <TouchableOpacity style={styles.datePickerButton} onPress={showDatePicker}>
                <Text style={styles.datePickerButtonText}>{selectedDate ? selectedDate.toLocaleDateString() : "Choose a date"}</Text>
              </TouchableOpacity>
          
            
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
              />
                 

            </View> 
            <View>
                    
                {
                errorDate&&<View ><Text style={{color:'red' ,fontFamily:'Poppins'}} >Wrong Date</Text></View>
              }  
              </View>
            <View style={styles.datePickerContainer}>
              <TouchableOpacity style={styles.datePickerButton} onPress={showTimePicker}>
                <Text style={styles.datePickerButtonText}>{selectedTime ? selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "Choose a time"}</Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleConfirmTime}
                onCancel={hideTimePicker}
              />
            </View>
           

                        <TouchableOpacity
                            style={styles.applyButton}
                            onPress={() =>{setModalVisible(false) 
                                setDatePickerVisibility(false)
                            } }
                        >
                            <Text style={styles.applyButtonText}>Reserve (40dh)</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                </View>
            </Modal>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.favButton}>
                    <AntDesign name="heart" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content}>
                <FlatList
                    data={barber ? barber.profileImages : []}
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={styles.image} />
                    )}
                    showsHorizontalScrollIndicator={false}
                />

                <View style={styles.detailsContainer}>
                    {barber && (
                        <>
                            <Text style={styles.name}>{barber.name}</Text>
                            <View style={styles.ratingPlaceContainer}>
                                <Ionicons name="star" size={16} color="#FFD700" />
                                <Text style={styles.rating}> {barber.rating} (2.4k reviews)</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <Text style={styles.place}>{barber.location}</Text>
                                <Text style={styles.info}>{barber.guests} Guests</Text>
                                <Text style={styles.info}>{barber.beds} sits</Text>
                                <Text style={styles.info}>{barber.baths} barbers</Text>
                            </View>

                            <Text style={styles.highlightsTitle}>Highlights</Text>
                            {barber.highlights.map((highlight, index) => (
                                <Text key={index} style={styles.highlight}>{highlight}</Text>
                            ))}

                            <Text style={styles.descriptionTitle}>Description</Text>
                            <Text style={styles.description}>{barber.description}</Text>
                        </>
                    )}
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <Text style={styles.price}>${barber.price} / person</Text>
                <TouchableOpacity onPress={()=>setModalVisible(true)} style={styles.bookButton}>
                    <Text style={styles.bookButtonText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        marginBottom: 70, // Adjust this value based on the height of your footer
    },
    loaderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginVertical: 16,
    },
    tab: {
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    tabText: {
        fontFamily: 'Poppins',
        color: '#4A4A4A',
        padding:6,

    },
    tabText2: {
        fontFamily: 'Poppins',
        color: '#f0f0f0',
        backgroundColor:'#1faf73',
        padding:6,
        borderRadius:10

    },
    header: {
        position: 'absolute',
        top: 40,
        left: 20,
        right: 20,
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        padding: 10,
    },
    favButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        padding: 10,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 0.75,
    },
    detailsContainer: {
        padding: 20,
    },
    name: {
        fontSize: 24,
fontFamily:'Poppins' ,
color:'#4A4A4A'
    ,   marginVertical: 10,
    },
    ratingPlaceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        width: '100%',
        height:'80%',
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
    datePickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      },
      datePickerButton: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
        marginRight: 10,
      },
      datePickerButtonText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: '#4A4A4A',
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
    rating: {
        fontSize: 16,
        
        marginLeft: 5,
    },
    place: {
        backgroundColor: '#f0f0f0',
        padding: 5,
        borderRadius: 10,
        fontSize: 16,
        color: '#808080',
        marginRight: 10,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    info: {
        backgroundColor: '#f0f0f0',
        padding: 5,
        borderRadius: 10,
        fontSize: 16,
        color: '#808080',
    },
    highlightsTitle: {
        fontSize: 20,
fontFamily:'Poppins' ,
color:'#4A4A4A'    ,   
        marginVertical: 10,
    },
    highlight: {
        fontSize: 16,
        
        marginBottom: 5,
    },
    descriptionTitle: {
        fontSize: 20,
fontFamily:'Poppins' ,
color:'#4A4A4A'   ,    
        marginVertical: 10,
    },
    description: {
        fontSize: 16,
        color: '#808080',
        marginVertical: 10,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    price: {
        fontSize: 18,
fontFamily:'Poppins' ,
color:'#4A4A4A'  ,     color: '#1faf73',
    },
    bookButton: {
        backgroundColor: '#1faf73',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    bookButtonText: {
        fontSize: 18,
        color: '#fff',
fontFamily:'Poppins' ,
color:'white'   },
});
