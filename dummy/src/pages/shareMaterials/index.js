import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { Bell1, User} from '../../assets'
import {SliderBox} from 'react-native-image-slider-box'
import { useNavigation } from '@react-navigation/core'
import { Learning, VideoLearning, Profile } from '../../pages/index.js'
import ShareMaterialsListView from '../../components/shareMaterialsListView'
import { shareMaterialsData } from '../../assets/jsonData/shareMaterialsData'

const ShareMaterials = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View styles={styles.pages}>
                <ShareMaterialsListView
                    itemList = {shareMaterialsData}
                />
            </View>
        </ScrollView>
    )
}

export default ShareMaterials;

const styles = StyleSheet.create({
    text1:{
        fontSize : 14,
        color : '#7F96AE'
    },
    text2:{
        color : WARNA_SEKUNDER,
        fontSize : 14,
        fontWeight : 'bold'
    },
})