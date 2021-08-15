import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { Bell1, User} from '../../assets'
import {SliderBox} from 'react-native-image-slider-box'
import { useNavigation } from '@react-navigation/core'
import { Learning, VideoLearning } from '../../pages/index.js'

const ShareMaterials = () => {
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
                </View>
                <View styles={styles.container}>
                    <View style={styles.square}>
                        <View style={styles.left}>
                            <Image source = {require('../../assets/icons/ppt.png')}/>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>IntroductionToPython.ppt</Text>
                            <Text style={styles.mb}>5 MB</Text>
                        </View>
                    </View>
                    <View style={styles.square}>
                        <View style={styles.left}>
                            <Image source = {require('../../assets/icons/pdf.png')}/>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>IntroductionToPython.pdf</Text>
                            <Text style={styles.mb}>2 MB</Text>
                        </View>
                    </View>
                    <View style={styles.square}>
                        <View style={styles.left}>
                            <Image source = {require('../../assets/icons/pdf.png')}/>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>IntroductionToPython.pdf</Text>
                            <Text style={styles.mb}>2 MB</Text>
                        </View>
                    </View>
                    <View style={styles.square}>
                        <View style={styles.left}>
                            <Image source = {require('../../assets/icons/ppt.png')}/>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>AdvancedPandas.pptx</Text>
                            <Text style={styles.mb}>8 MB</Text>
                        </View>
                    </View>
                    <View style={styles.square}>
                        <View style={styles.left}>
                            <Image source = {require('../../assets/icons/pdf.png')}/>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>AdvancedPandas.pdf</Text>
                            <Text style={styles.mb}>2 MB</Text>
                        </View>
                    </View>
                    <View style={styles.square}>
                        <View style={styles.left}>
                            <Image source = {require('../../assets/icons/ppt.png')}/>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>DataVisualization.pptx</Text>
                            <Text style={styles.mb}>4 MB</Text>
                        </View>
                    </View>
                    <View style={styles.square}>
                        <View style={styles.left}>
                            <Image source = {require('../../assets/icons/ppt.png')}/>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>ScikitLearn.pptx</Text>
                            <Text style={styles.mb}>7 MB</Text>
                        </View>
                    </View>
                    <View style={styles.square}>
                        <View style={styles.left}>
                            <Image source = {require('../../assets/icons/pdf.png')}/>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>ScikitLearn.pdf</Text>
                            <Text style={styles.mb}>5 MB</Text>
                        </View>
                    </View>
                    <View style={styles.square}>
                        <View style={styles.left}>
                            <Image source = {require('../../assets/icons/pdf.png')}/>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>AI_Application.pdf</Text>
                            <Text style={styles.mb}>2 MB</Text>
                        </View>
                    </View>
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
    square:{
        height: 72,
        width: 370,
        backgroundColor: '#CCD1D9',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 19,
        borderRadius: 15,
        flexDirection : 'row',
        elevation : 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    left:{
        justifyContent : 'center',
        paddingLeft : 16,
    },
    right:{
        paddingLeft : 16,
        // justifyContent : 'center',
    },
    title:{
        fontWeight : 'bold',
        fontSize : 17,
        color : '#1B3A58DB',
        paddingTop : 22
    },
    mb:{
        fontSize : 12,
        color : WARNA_SEKUNDER,
        left : 238
    }
})