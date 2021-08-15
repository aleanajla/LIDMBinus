import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Dashboard } from '../../pages/index.js'

const ConTerms = () => {
    const navigation = useNavigation();
    return(
        <Text>Con Terms Rewards</Text>
    )
}

export default ConTerms;

const styles = StyleSheet.create({

})