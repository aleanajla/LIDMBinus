import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { Bell1, User} from '../../assets'
import {SliderBox} from 'react-native-image-slider-box'
import { useNavigation } from '@react-navigation/core'
import { Learning, ShareMaterials } from '../../pages/index.js'

const VideoLearning = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View styles={styles.pages}>
                <View style = {styles.header}>
                    <View style = {styles.welcome}>
                        <Text style = {{fontSize: 14, color : '#28527A'}}>Welcome back,</Text>
                        <Text style = {{fontSize: 20,fontWeight: 'bold', color: WARNA_SEKUNDER}}>Andrew Willy</Text>
                    </View>
                    <View style = {styles.imgHeader}>
                        <Bell1 style = {styles.bell}/>
                        <User style = {styles.user}/>
                    </View>
                </View>
                <View style = {styles.garis}/>
                <View style = {styles.conHeader}>
                        <View style={styles.videoLearning}>
                            <Text style = {styles.text2}>Video</Text>
                            <Text style = {styles.text2}>Learning</Text>
                        </View>
                    <TouchableOpacity onPress={()=>{navigation.navigate('ShareMaterials',{type:''});}}>
                        <View style={styles.shareMaterials}>
                            <Text style = {styles.text1}>Share</Text>
                            <Text style = {styles.text1}>Materials</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Learning',{type:''});}}>
                        <View style={styles.relatedBooks}>
                            <Text style = {styles.text1}>Related</Text>
                            <Text style = {styles.text1}>Books</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View styles={styles.container}>
                    <View style={styles.square}>
                        <View style={styles.left}>
                            <Image source = {require('../../assets/images/youtube1.png')}/>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>Artifical Intelligence in 5 Minutes | What is Artifical...</Text>
                            <Text style={styles.acc}>Simplilearn</Text>
                            <Text style={styles.desc}>By the end of this video, you will understand: 0:00 What is Artificial Intelligence? 03:13 Difference between Artificial intelligence, Machine Learning...</Text>
                        </View>
                    </View>
                    <View style={styles.square}>
                        <View style={styles.left}>
                            <Image source = {require('../../assets/images/youtube2.png')}/>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>Artifical Intelligence Full Course | Artifical Intellige...</Text>
                            <Text style={styles.acc}>Edureka!</Text>
                            <Text style={styles.desc}>Following topics are covered in this video: 00:00 Introduction 02:27 History Of AI 06:45 Demand For AI 08:46 What Is Artificial Intelligence?...</Text>
                        </View>
                    </View>
                    <View style={styles.square}>
                        <View style={styles.left}>
                            <Image source = {require('../../assets/images/youtube3.png')}/>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>Penerapan Artifical Intelligence di Indonesia</Text>
                            <Text style={styles.acc}>Ekrut Offical</Text>
                            <Text style={styles.desc}>Apa itu Artificial Intelligence? Apa kamu pernah mendengar istilah Artificial Intelligence? Lalu, bagaimana ya penerapan Artificial Intelligence di...</Text>
                        </View>
                    </View>
                    <View style={styles.square}>
                        <View style={styles.left}>
                            <Image source = {require('../../assets/images/youtube4.png')}/>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>Understanding Artifical Intelligence and It’s Future...</Text>
                            <Text style={styles.acc}>TED x Talks</Text>
                            <Text style={styles.desc}>Neil Nie demonstrates how artificial intelligence--and particularly, object recognition--works... and how it will effect the future.</Text>
                        </View>
                    </View>
                    <View style={styles.square}>
                        <View style={styles.left}>
                            <Image source = {require('../../assets/images/youtube5.png')}/>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>How Does Artifial Intelligence learn? || Brianna Brownell</Text>
                            <Text style={styles.acc}>TED-Ed</Text>
                            <Text style={styles.desc}>Explore the three major methods of machine learning, which allows computers to write their own rules to problem solve and process data.</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default VideoLearning;

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
        paddingLeft : 30,
        paddingRight : 16
    },
    videoLearning:{
        width : 95,
        height : 45,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#FAD586',
        borderRadius : 20,
    },
    shareMaterials:{
        width : 95,
        height : 45,
        alignItems : 'center',
        justifyContent : 'center',
        marginLeft : 30
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
    container:{
        backgroundColor : '#CCD1D9',
        paddingTop : 17,
        width: 356,
        height: 72
    },
    square:{
        height: 128,
        width: 370,
        backgroundColor: '#CCD1D9',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 19,
        borderRadius: 15,
        flexDirection : 'row'
    },
    left:{
        justifyContent : 'center',
        paddingLeft : 16,
    },
    right:{
        paddingLeft : 16,
        paddingTop : 12
    },
    title:{
        fontWeight : 'bold',
        fontSize : 13,
        color : '#1B3A58DB',
        width : 180,
        // paddingTop : 22
    },
    acc:{
        paddingTop : 2,
        fontSize : 11,
        fontWeight : 'bold',
        color : '#1B3A58DB',
    },
    desc:{
        paddingTop : 2,
        paddingRight : 5,
        fontSize : 10,
        color : '#787680',
        width : 200
    },
})