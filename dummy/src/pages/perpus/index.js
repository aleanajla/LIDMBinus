import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Platform, Dimensions, FlatList, TextInput} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'
import { Profile, Header} from '../../pages/index.js'
import { useNavigation } from '@react-navigation/core'
import Modal from 'react-native-modal'
import Recomend from '../recomend'
import MoreBooks from '../moreBooks'
import { recomendBooksData } from '../../assets/jsonData/recomendBooksData'
import RekomenBukuListView from '../../components/RekomenBukuListView'
import { moreBooksData } from '../../assets/jsonData/moreBooksData'
import BukuLainnyaListView from '../../components/bukuLainnyaListView'
import { allBooksData } from '../../assets/jsonData/allBooks'


const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const Perpus = () => {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(recomendBooksData);
    const [masterDataSource, setMasterDataSource] = useState(recomendBooksData);

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

    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    return (
        <ScrollView>
        <View style={styles.pages}>
            <Header/>
                
            <View style = {styles.garis}/>
            <ScrollView horizontal={true}>
                <View style={styles.bookOpt}>
                    <TouchableOpacity>
                        <Text style={styles.option}>Semua</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.option}>Umum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.option}>Tren</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.option}>Teknologi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.option}>Sosial</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.option}>Literatur</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.option}>Sains</Text>
                    </TouchableOpacity>
                   
                </View>
            </ScrollView>
            {/* <View style={styles.square}></View> */}
            <View style={styles.container}>
                <View style={styles.searchCon}>
                    <TextInput
                        style = {{marginLeft:20}}
                        onChangeText={(text) => searchFilterFunction(text)}
                        value={search}
                        underlineColorAndroid="transparent"
                        placeholder="Cari disini"
                    />
                    <Image source={require('../../assets/icons/Search.png')} style={{marginLeft:200}}/>
                </View>
                <Image source = {require('../../assets/icons/sort.png')}/>
            </View>
            {/* <ScrollView vertical={true}> */}
                <View style={styles.learnToday}>
                    <View styles={styles.left}>
                        <Text style={styles.learnText}>Apa yang ingin</Text>
                        <Text style={styles.learnText}>Anda Pelajari</Text>
                        <Text style={styles.learnText}>Hari ini?</Text>
                        <TouchableOpacity
                        onPress = {()=>{
                            navigation.navigate('GetStarted',{type:''})
                        }}> 
                        <View style={styles.started}>
                            <Text style={styles.textStart}>Mulai</Text>
                            <Image source = {require('../../assets/icons/arrow_right.png')} style={{left : 30}}/>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.right}>
                        <Image source = {require('../../assets/images/education.png')} style={{top :26}}/>
                    </View>
                </View>
                <View style={{padding :17}}>
                    <TouchableOpacity onPress = {()=>{ navigation.navigate('Recomend',{type:''})}}> 
                        <View style={styles.recTop}>
                            <Text style={styles.recText}>Direkomendasikan untuk Anda</Text>
                            <Image source = {require('../../assets/icons/arrow_right2.png')} style={styles.arrowText}/>
                        </View>
                    </TouchableOpacity>
                    <RekomenBukuListView
                        itemList = {filteredDataSource}
                        navigation={navigation}
                    />
                    <TouchableOpacity onPress = {()=>{ navigation.navigate('MoreBooks',{type:''})}}> 
                        <View style={styles.recTop}>
                            <Text style={styles.recText}>Lainnya</Text>
                            <Image source = {require('../../assets/icons/arrow_right2.png')} style={styles.arrowMore}/>
                        </View>
                    </TouchableOpacity>
                    <BukuLainnyaListView
                        itemList = {moreBooksData}
                        navigation={navigation}
                    />
                </View>
        </View>
        </ScrollView>
    )
}

export default Perpus;

const styles = StyleSheet.create({
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
        paddingLeft : 15,
        paddingRight : 15,
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
        paddingLeft : 5,
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    recText:{
        fontWeight : 'bold',
        color : WARNA_SEKUNDER,
        fontSize : 18,
    },
    arrowText:{
        top : 2,
    },
    reccomen:{
        flexDirection : 'row',
        paddingTop : 14
    },
    arrowMore:{
        top : 2,
    },
    centeredView :{
        flex: 1,
        justifyContent: "center",
        width: windowsWidth,
        height: windowsWidth,
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        paddingTop: 20,
        paddingBottom: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        elevation:5,
    },
    closeBtn :{
        marginLeft : 290,
        marginBottom : 5
    },
    topp:{
        flexDirection : 'row'
    },
    cover:{
        marginLeft : 0
    },
    title:{
        width : 200,
        paddingLeft : 10,
        fontWeight : 'bold',
        fontSize : 20,
        color : '#28527A'
    },
    author:{
        paddingLeft : 10,
        fontSize : 18,
        color : '#28527A8C'
    },
    add:{
        marginLeft : 10,
        marginTop : 4,
        backgroundColor : '#FAD586',
        width : 112,
        height : 35,
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center'
    },
    addText:{
        fontSize : 15,
        color : '#28527A',
        fontWeight : 'bold'
    },
    desc:{
        fontSize : 11,
        color : '#00000080',
        paddingTop : 17,
        paddingLeft : 20,
        paddingRight : 15
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
    }


})
