import React, { useState } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function Reservations() {
    const reservations = [

        {
            id: 1,
            title: 'Interview Meeting',
            date: '11 Feb 2020',
            time: '10:30 am',
            duration: '2 Hrs',
            location: 'Chowmohalla Palace',
            address: 'EDL Tech Park / Wipro / Floor / Zone /',
            recurring: true
        },
        {
            id: 2,
            title: 'Design Sprint Meeting',
            date: '11 Feb 2020',
            time: '10:30 am',
            duration: '2 Hrs',
            location: 'Dragonstone',
            address: 'EDL Tech Park / Wipro / Floor / Zone /',
            recurring: false
        },
        {
            id: 3,
            title: 'Team Meeting',
            date: '11 Feb 2020',
            time: '10:30 am',
            duration: '2 Hrs',
            location: 'Dragonstone',
            address: 'EDL Tech Park / Wipro / Floor / Zone /',
            recurring: true
        },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.tabsContainer}>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText2}>Upcoming</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>Completed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>Cancelled</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.dateText}>Feb 11, 2020</Text>

            {reservations.map((reservation) => (
                <View key={reservation.id} style={styles.reservationCard}>
                    <View style={styles.reservationHeader}>
                        <Text style={styles.reservationTitle}>{reservation.title}</Text>
                        {reservation.recurring && (
                            <MaterialIcons name="repeat" size={20} color="#808080" />
                        )}
                    </View>
                    <Text style={styles.reservationTime}>{`${reservation.date} | ${reservation.time} | ${reservation.duration}`}</Text>
                    <Text style={styles.reservationLocation}>{reservation.location}</Text>
                    <Text style={styles.reservationAddress}>{reservation.address}</Text>
                    <TouchableOpacity style={styles.mapButton}>
                        <Text style={styles.mapButtonText}>View Map</Text>
                        <Ionicons name="location" size={16} color="#1faf73" />
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
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

    dateText: {
        fontFamily: 'Poppins',
        color: '#808080',
        marginBottom: 8,
    },
    reservationCard: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    reservationHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    reservationTitle: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: '#4A4A4A',
    },
    reservationTime: {
        fontFamily: 'Poppins',
        color: '#808080',
        marginBottom: 4,
    },
    reservationLocation: {
        fontFamily: 'Poppins',
        fontSize: 14,
        color: '#4A4A4A',
        marginBottom: 2,
    },
    reservationAddress: {
        fontFamily: 'Poppins',
        color: '#808080',
        marginBottom: 8,
    },
    mapButton: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    mapButtonText: {
        fontFamily: 'Poppins',
        color: '#1faf73',
        marginRight: 4,
    },
});
