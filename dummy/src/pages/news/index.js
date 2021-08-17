import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import {SliderBox} from 'react-native-image-slider-box'
import { useNavigation } from '@react-navigation/core'
import { Program, Home, Profile, DetailNews} from '../../pages/index.js'

const image =[
    require('../../assets/slider/News1.png'),
    require('../../assets/slider/News2.png'),
    require('../../assets/slider/News3.png'),
    require('../../assets/slider/News4.png')
];

const News = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.pages}>
            <View style = {styles.header}>
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
            <View style = {styles.garis}/>
            <View>
                <View style = {styles.conHeader}>
                    <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('Home',{type:''});
                        }}>
                        <View style = {styles.optHeader}>
                            <Text style = {styles.titleHeader}>Dashboard</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate('Program',{type:''});
                    }}> 
                        <View style = {styles.optHeader}>
                            <Text style = {styles.titleHeader}>Program</Text>
                        </View>
                    </TouchableOpacity>

                    <View style = {styles.optHeader2}>
                        <Text style = {styles.titleHeader2}>News</Text>
                    </View>
                </View>
            </View>
            
            <View>
                <SliderBox images = {image}
                    sliderBoxHeight = {145}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="#FAD586"
                    inactiveDotColor="#28527A"
                    ImageComponentStyle={{borderRadius: 20, width: '94%', marginTop: 5, marginBottom:25}}
                />
            </View>

            <View>
                <Text  style = {styles.newsHeader}>News About Kampus Merdeka</Text>
            </View>

            <TouchableOpacity onPress={()=>{navigation.navigate('DetailNews',{type:''});}}>
                <View style={styles.eachNews}>
                    <View styles={styles.left}>
                        <Image source={require('../../assets/images/nadiem.png')}/>
                    </View>
                    <View style={styles.right}>
                        <Text style = {styles.title}>Kampus Merdeka ala Mas Menteri Nadiem Makarim, Seperti Apa Konsepnya?</Text>
                        <Text style = {styles.desc}>Menteri Pendidikan dan Kebudayaan Republik Indonesia, Nadiem Makarim,  baru saja
                            mengeluarkan lima permendikbud mengenai landasan penerapan kebijakan Merdeka...
                        </Text>
                        <Text style= {styles.more}>read more...</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={styles.eachNews}>
                <View styles={styles.left}>
                    <Image source={require('../../assets/images/nadiem2.png')}/>
                </View>
                <View style={styles.right}>
                    <Text style = {styles.title}>Inilah Arti “Kampus Merdeka” dalam kebijakan “Merdeka Belajar” ala Mendikbud Nadiem</Text>
                    <Text style = {styles.desc}>Nadiem menegaskan kebijakan Kampus Merdeka ini merupakan kelanjutan dari konsep
                        Merdeka Belajar. Pelaksanaannya paling memungkinkan untuk segera...
                    </Text>
                    <Text style= {styles.more}>read more...</Text>
                </View>
            </View>

            <View style={styles.eachNews}>
                <View styles={styles.left}>
                    <Image source={require('../../assets/images/kampusMerdeka.png')}/>
                </View>
                <View style={styles.right}>
                    <Text style = {styles.title}>Kampus Merdeka ala Mas Menteri Nadiem Makarim, Seperti Apa Konsepnya?</Text>
                    <Text style = {styles.desc}>"Kebijakan Kampus Merdeka ini merupakan kelanjutan dari konsep Merdeka Belajar.
                        Pelaksanaannya paling memungkinkan untuk segera dilangsungkan, hanya mengubah
                        peraturan menteri, tidak sampai mengubah Peraturan...
                    </Text>
                    <Text style= {styles.more}>read more...</Text>
                </View>
            </View>
        </View>
    )
}

export default News;

const styles = StyleSheet.create({
    welcome :{
        paddingLeft: 30
    },
    pages : {
        backgroundColor : '#F6F5F5',
        fontFamily: 'Open-Sans'
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
    conHeader: {
        flexDirection: 'row',
        paddingTop : 10,
        paddingLeft: 20,
        // paddingRight:10,
        paddingBottom : 10,

    },
    optHeader: {
        // padding: 20,
        margin:8,
        // backgroundColor : '#ffffff',
        width: 105,
        height: 35,
        borderRadius:20,
        alignItems: 'center'
    },
    titleHeader: {
        color: '#28527A',
        marginTop: 6
    },
    titleHeader2: {
        color: '#28527A',
        marginTop:6,
        fontWeight: 'bold'
    },
    optHeader2: {
        backgroundColor: '#FAD586',
        margin: 8,
        width: 105,
        height: 35,
        borderRadius:20,
        alignItems: 'center'
    },
    square:{
        height: 155,
        width: 400,
        backgroundColor: WARNA_SEKUNDER,
        // marginTop: 30
    },
    newsCon: {
        padding:15,
        paddingTop : 10,
    },
    conleftright: {
        margin: 10,
        backgroundColor: '#E5E5E5',
        borderRadius: 20,
        height: 130
    },
    newsHeader:{
        paddingTop : 23,
        fontSize : 18,
        color: WARNA_SEKUNDER,
        fontWeight : 'bold',
        marginLeft : 15
    },
    title : {
        fontSize: 10,
        fontWeight: 'bold',
        color : WARNA_SEKUNDER,
        width : 225,
        padding : 2
    },
    desc : {
        fontSize : 8,
        color : WARNA_SEKUNDER,
        width : 225,
        padding : 2
    },
    right:{
        paddingLeft : 7
    },
    eachNews:{
        flexDirection : 'row',
        backgroundColor :'#E5E5E5',
        width : 375,
        margin : 7,
        padding : 5,
        borderRadius : 10,
        justifyContent : 'center'
    },
    more:{
        fontSize : 7,
        fontWeight : 'bold',
        color : WARNA_SEKUNDER,
        padding : 2,
    }
})