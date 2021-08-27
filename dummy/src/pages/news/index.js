import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import {SliderBox} from 'react-native-image-slider-box'
import { useNavigation } from '@react-navigation/core'
import { Program, Home, Profile, DetailNews} from '../../pages/index.js'
import { newsData } from '../../assets/jsonData/newsData'
import NewsListView from '../../components/NewsListView'
import { useState } from 'react/cjs/react.development'

const image =[
    require('../../assets/slider/News1.png'),
    require('../../assets/slider/News2.png'),
    require('../../assets/slider/News3.png'),
    require('../../assets/slider/News4.png')
];

const News = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(newsData);
    const [masterDataSource, setMasterDataSource] = useState(newsData);

    const searchFilterFunction = (text) => {
        if(text){
            const newData = masterDataSource.filter(
                function (item) {
                    const itemData = item.title ? item.title.toUpperCase(): ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData)>-1;
                }
            );
            setFilteredDataSource(newData);
            setSearch(text);
        }else{
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    }

    return (
        <ScrollView>
            <View style={styles.pages}>
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
                </View> */}
                <View style={styles.container}>
                    <View style={styles.searchCon}>
                        <TextInput
                            style = {{marginLeft:20}}
                            onChangeText={(text) => searchFilterFunction(text)}
                            value={search}
                            underlineColorAndroid="transparent"
                            placeholder="Search Here"
                        />
                        <Image source={require('../../assets/icons/Search.png')} style={{marginLeft:185}}/>
                    </View>
                    <Image source = {require('../../assets/icons/sort.png')}/>
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
                    <Text  style = {styles.newsHeader}>Berita Tentang Kampus Merdeka</Text>
                </View>
                
                <NewsListView
                    // itemList ={newsData}
                    itemList={filteredDataSource}
                    navigation={navigation}
                />
            </View>
        </ScrollView>
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
    },
    searchCon:{
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        borderRadius: 20,
        backgroundColor:'#E5E5E5', 
        width:330,
        marginRight : 3
    },
    container:{
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        marginBottom: 10,
        marginTop : 10,
    }
})