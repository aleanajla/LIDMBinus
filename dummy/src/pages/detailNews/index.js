import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { News } from '../../pages/index.js'

const DetailNews = () => {
    const navigation = useNavigation();
    return(
        <Text>Detail News</Text>
    )
}

export default DetailNews;

const styles = StyleSheet.create({

})