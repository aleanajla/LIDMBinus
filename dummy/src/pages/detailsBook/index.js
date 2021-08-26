import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Share } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { News } from '../../pages/index.js'

const DetailsBook = ({route}) => {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <Text>Details Book</Text>
        </ScrollView>
    )
}

export default DetailsBook;

const styles = StyleSheet.create({


})