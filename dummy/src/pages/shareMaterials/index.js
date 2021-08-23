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
                {/* <View style = {styles.header}>
                    <View style = {styles.welcome}>
                        <Text style = {{fontSize: 14, color : '#28527A'}}>Welcome back,</Text>
                        <Text style = {{fontSize: 20,fontWeight: 'bold', color: WARNA_SEKUNDER}}>Andrew Willy</Text>
                    </View>
                    <View style = {styles.imgHeader}>
                        <Image source ={require('../../assets/icons/bell.png')} style = {styles.bell} />
                        <TouchableOpacity
                        onPress = {()=>{
                            navigation.navigate('Profile',{type:''})
                        }}> 
                            <Image source = {require('../../assets/icons/profile.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.garis}/> */}
                {/* <View style = {styles.conHeader}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('VideoLearning',{type:''});}}>
                        <View style={styles.videoLearning}>
                            <Text style = {styles.text1}>Video</Text>
                            <Text style = {styles.text1}>Learning</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.shareMaterials}>
                        <Text style = {styles.text2}>Share</Text>
                        <Text style = {styles.text2}>Materials</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Learning',{type:''});}}>
                        <View style={styles.relatedBooks}>
                            <Text style = {styles.text1}>Related</Text>
                            <Text style = {styles.text1}>Books</Text>
                        </View>
                    </TouchableOpacity>
                </View> */}
                <View styles={styles.container}>
                    <ShareMaterialsListView
                        itemList = {shareMaterialsData}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default ShareMaterials;

const styles = StyleSheet.create({
    header :{
        flexDirection : 'row',
        paddingTop: 15,
        backgroundColor: '#F6F5F5'
    },
    imgHeader :{
        flexDirection : 'row',
        justifyContent : 'flex-end',
        paddingRight : 20,
        flex: 1
    },
    bell :{
        fontSize : 25, 
        padding : 17,
        right:10,
        top:3.5
    },
    garis:{
        paddingTop: 8,
        borderBottomColor: '#28527A',
        borderBottomWidth: 1,
    },
    welcome :{
        paddingLeft: 30
    },
    conHeader: {
        flexDirection: 'row',
        paddingTop : 16,
        paddingLeft : 16,
        paddingRight : 16
    },
    videoLearning:{
        width : 120,
        height : 45,
        alignItems : 'center',
        justifyContent : 'center',
    },
    shareMaterials:{
        width : 95,
        height : 45,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#FAD586',
        borderRadius : 20,
        marginLeft : 20
    },
    relatedBooks:{
        width : 110,
        height : 45,
        alignItems : 'center',
        marginLeft : 22,
        justifyContent : 'center'
    },
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