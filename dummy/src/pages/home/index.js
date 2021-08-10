import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { Bell1, User } from '../../assets'
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'

const Home = () => {
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
                <View>
                    <View style = {styles.garis}/>
                </View>
                <View style = {styles.conPoints}>
                    <View>
                        <Image source = {require('../../assets/images/trophy.png')}
                                        style = {{width:70, height:70, marginTop:5}} />
                    </View>
                    <View style = {styles.conMid}>
                        <View style = {styles.midUpper}>
                            <Text style = {{color : '#28527A', fontWeight:'bold', fontSize:25}}>Silver</Text>
                            <Text style = {{color : '#28527A', fontWeight: '700', fontSize: 18, marginTop: 7.5, marginLeft: 6}}>520</Text>
                            <Text style = {{color : '#28527A', fontSize: 12, marginTop: 12,marginLeft:2}}>points</Text>
                        </View>
                        <View style = {styles.midBottom}>
                            <Text style = {{marginTop: 10}}>progress bar</Text>
                            <Text style = {{color : '#28527A', fontSize:7, marginTop: 7, marginLeft:20}}>Earn 200 Points more to reach Gold!</Text>
                        </View>
                    </View>
                    <View style = {styles.rightPoints}>
                        <Image source = {require('../../assets/images/coins.png')}
                                            style = {{width:75, height:75, marginTop:5, marginLeft:25}} />
                    </View>
                </View>
                <View style={styles.containerRow}>
                        <View style = {[styles.conLeftRight, {flex:1}]}>
                            <View>
                                <Text style = {{color: '#28527A', fontWeight: 'bold', fontSize: 18}}>Browse</Text>
                                <Text style = {{color: '#28527A', fontWeight: 'bold', fontSize: 18}}>All</Text>
                                <Text style = {{color: '#28527A', fontWeight: 'bold', fontSize: 18}}>Reward</Text>
                            </View>
                            <View>
                                {/* <Text>Gambar1</Text> */}
                                <Image source = {require('../../assets/images/badge.png')}
                                    style = {{width:60,height:60,marginLeft:20,marginTop:5}} />
                            </View>
                    </View>

                    <View style = {[styles.conLeftRight, {flex:1}]}>
                            <View>
                                <Text style = {{color: '#28527A', fontWeight: 'bold', fontSize: 18, marginTop:10}}>How to</Text>
                                <Text style = {{color: '#28527A', fontWeight: 'bold', fontSize: 18}}>Get Points?</Text>
                            </View>
                            <View>
                            <Image source = {require('../../assets/images/question.png')}
                                    style = {{width:50,height:55,marginTop:5}} />
                            </View>
                        </View>
                </View>

                <View style = {styles.containerAnnounce}>
                    <View style = {{flexDirection: 'row'}}>
                        <Text style = {{color: '#FFFFFF', fontSize: 25, fontWeight:'bold', marginLeft:20, marginTop:10}}>
                            Announce
                        </Text>
                        <Image source = {require('../../assets/icons/arrow_right_white.png')} 
                            style = {styles.arrow}
                        />
                    </View>
                    <View style = {styles.announceLR}>
                        <View style = {styles.announceLR2}>
                            <Text style = {styles.announcement1}>11 May 2021</Text>
                            <Text style = {styles.announcement}>Pembukaan Pendaftaran Mobilitas Mahasiswa Internasional – IISMA</Text>
                        </View>
                        <View style = {styles.announceLR2}>
                            <Text style = {styles.announcement1}>11 Febuary 2021</Text>
                            <Text style = {styles.announcement}>Sosialisasi Program Kampus Mengajar Angkatan 1 Tahun 2021</Text>
                        </View>
                    </View>
                </View>

                <View style = {styles.news}>
                    <Text style = {{color: '#28527A', fontSize:25, fontWeight: 'bold', marginLeft:30}}>Information</Text>
                    <View style={styles.containerNews}>
                        <View>
                            {/* <Text>Gambar1</Text> */}
                            <Image source = {require('../../assets/images/info1.png')} />
                        </View>
                        <View>
                            <Image source = {require('../../assets/images/info2.png')} />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    welcome :{
        paddingLeft: 30
    },
    pages : {
        //flex : 1,
        backgroundColor : '#F6F5F5',
        fontFamily: 'Open-Sans',
    },
    header :{
        flexDirection : 'row',
        paddingTop: 15,
        backgroundColor: '#F6F5F5'
    },
    imgHeader :{
        flexDirection : 'row',
        justifyContent : 'flex-end',
        paddingRight : 20,
        // justifyContent : 'space-between',
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
        // elevation: 5,
    },
    shadow :{
        // shadowColor: '#000000',
        // shadowOffset: {
        //     width: 0, 
        //     height: 4
        // },
        // shadowOpacity: 10,
        // shadowRadius: 10,
        // elevation:10
    },
    conPoints :{
        backgroundColor : 'white',
        padding:15,
        margin: 15,
        borderRadius: 7,
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
    conMid: {
        // alignItems: 'center',
        marginLeft:15,
        // marginTop: 10,
    },
    midUpper:{
        flexDirection: 'row'
    },
    containerRow : {
        flexDirection: 'row',
        marginTop:5,
        // paddingLeft:20,
        // paddingRight:20,
        padding: 10
    },
    conLeftRight:{
        // width:50,
        // height:79,
        padding:20,
        margin: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        flexDirection: 'row',
        shadowOffset: {
            width: 0, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:10
    },
    containerAnnounce:{
        backgroundColor: '#8AC4D0',
        // padding:100,
        width:360,
        height:230,
        margin:18,
        borderRadius: 20
    },
    arrow :{
        marginLeft: 160,
        marginTop: 15,
        width: 50,
        height:30
    },
    announceLR : {
        flexDirection: 'row',
        marginTop:5,
        padding: 10
    },
    announceLR2 :{
        padding:15,
        margin: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        // flexDirection: 'row',
        shadowOffset: {
            width: 0, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:10,
        width: 160,
        height:150
    },
    announcement1:{
        fontSize: 10,
        color : '#28527A'
    },
    announcement: {
        fontSize: 14,
        fontWeight: 'bold',
        color : '#28527A'
    },
    containerNews:{
        flexDirection: 'row',
        margin:20
    }

})

export default Home;
