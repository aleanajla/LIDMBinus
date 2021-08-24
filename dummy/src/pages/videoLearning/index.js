import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { Bell1, User} from '../../assets'
import { useNavigation } from '@react-navigation/core'
import { Learning, ShareMaterials, Profile } from '../../pages/index.js'
import VideoLearningListView from '../../components/VideoLearningListView'
import { vidLearningData } from '../../assets/jsonData/vidLearningData'

const VideoLearning = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View styles={styles.pages}>
                <VideoLearningListView
                    itemList = {vidLearningData}
                />
            </View>
        </ScrollView>
    )
}

export default VideoLearning;

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
    container:{
        backgroundColor : '#CCD1D9',
        paddingTop : 17,
        width: 356,
        height: 72
    },
})