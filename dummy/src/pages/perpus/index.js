import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'
import { Bell1, User } from '../../assets'

const Perpus = () => {
    return (
        <ScrollView>
        <View style={styles.pages}>
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
            <ScrollView horizontal={true}>
                <View style={styles.bookOpt}>
                    <Text style={styles.option}>All</Text>
                    <Text style={styles.option}>General</Text>
                    <Text style={styles.option}>Trending</Text>
                    <Text style={styles.option}>Technology</Text>
                    <Text style={styles.option}>Social</Text>
                    <Text style={styles.option}>Literature</Text>
                    <Text style={styles.option}>Science</Text>
                </View>
            </ScrollView>
            <View style={styles.square}></View>
            {/* <ScrollView vertical={true}> */}
                <View style={styles.learnToday}>
                    <View styles={styles.left}>
                        <Text style={styles.learnText}>What would you</Text>
                        <Text style={styles.learnText}>like to learn</Text>
                        <Text style={styles.learnText}>today?</Text>
                        <View style={styles.started}>
                            <Text style={styles.textStart}>Get Started</Text>
                            <Image source = {require('../../assets/icons/arrow_right.png')} style={{left : 6}}/>
                        </View>
                    </View>
                    <View style={styles.right}>
                        <Image source = {require('../../assets/images/education.png')} style={{top :26}}/>
                    </View>
                </View>
                <View style={{padding :17}}>
                    <View style={styles.recTop}>
                        <Text style={styles.recText}>Reccomend For You</Text>
                        <Image source = {require('../../assets/icons/arrow_right2.png')} style={styles.arrowText}/>
                    </View>
                    <View style={styles.reccomen}>
                        <View style={styles.bookLeft}>
                            <Image source = {require('../../assets/images/book1.png')}/>
                            <Text style={styles.bookTitle}>Predict and Surveil</Text>
                            <Text style={styles.bookAuthor}>Author : Sarah Brayne</Text>
                        </View>
                        <View style={styles.bookRight}>
                            <Image source = {require('../../assets/images/book2.png')}/>
                            <Text style={styles.bookTitle}>Voices From the Valley</Text>
                            <Text style={styles.bookAuthor}>Author : Ben Tarnoff and</Text>
                            <Text style={styles.bookAuthor}>Moira Weigel</Text>
                        </View>
                    </View>
                    <View style={styles.recTop}>
                        <Text style={styles.recText}>More</Text>
                        <Image source = {require('../../assets/icons/arrow_right2.png')} style={styles.arrowMore}/>
                    </View>
                    <View style={styles.reccomen}>
                        <View style={styles.bookLeft}>
                            <Image source = {require('../../assets/images/book5.png')}/>
                            <Text style={styles.bookTitle}>Digitize and Punish</Text>
                            <Text style={styles.bookAuthor}>Author : Brian Jefferson</Text>
                        </View>
                        <View style={styles.bookRight}>
                            <Image source = {require('../../assets/images/book4.png')}/>
                            <Text style={styles.bookTitle}>The Hype Machine</Text>
                            <Text style={styles.bookAuthor}>Author : Sinan Aral</Text>
                        </View>
                    </View>
                </View>
            {/* </ScrollView> */}
        </View>
        </ScrollView>
    )
}

export default Perpus;

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
    bookOpt:{
        flexDirection : 'row',
        paddingLeft : 20,
        paddingRight : 7,
        paddingTop : 10,
        paddingBottom : 10,
    },
    option:{
        fontSize : 16,
        color : '#28527A70',
        paddingRight : 13,
    },
    square:{
        height: 30,
        width: 360,
        backgroundColor: '#DADADA',
        marginLeft: 15 ,
        marginBottom : 13
    },
    learnToday:{
        backgroundColor : WARNA_SEKUNDER,
        padding:17,
        marginLeft: 15,
        marginRight:15,
        borderRadius: 20,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:10
    },
    learnText:{
        fontSize : 25,
        color : '#FFFFFF',
        fontWeight : 'bold'
    },
    left:{
        width : '50%',
        backgroundColor : 'red'
    },
    right:{
        left : 33
    },
    started:{
        backgroundColor: '#FBEEAC',
        width : 125,
        height : 37,
        paddingTop : 7,
        paddingLeft : 7,
        paddingRight : 7,
        borderRadius : 10,
        marginTop : 10,
        flexDirection: 'row'
    },
    textStart:{
        color : WARNA_SEKUNDER,
        fontSize : 15,
        fontWeight: 'bold',
    },
    recTop:{
        flexDirection : 'row',
        paddingLeft : 5
    },
    recText:{
        fontWeight : 'bold',
        color : WARNA_SEKUNDER,
        fontSize : 18,
    },
    arrowText:{
        left : 150,
        top : 2
    },
    reccomen:{
        flexDirection : 'row',
        paddingTop : 14
    },
    bookLeft:{
        // backgroundColor: 'red',
        width: '50%',
        alignItems : 'center'
    },
    bookRight:{
        // backgroundColor: 'yellow',
        width: '50%',
        alignItems : 'center'
    },
    bookTitle:{
        color : WARNA_SEKUNDER,
        fontSize : 15,
        fontWeight : 'bold'
    },
    bookAuthor:{
        color : WARNA_SEKUNDER,
        fontSize : 11
    },
    arrowMore:{
        top : 2,
        left : 265
    }

})
