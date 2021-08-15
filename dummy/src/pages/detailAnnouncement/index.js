import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Announcement } from '../../pages/index.js'

const DetailAnnouncement = () => {
    const navigation = useNavigation();
    return(
        <Text>Announcement</Text>
    )
}

export default DetailAnnouncement;

const styles = StyleSheet.create({

})