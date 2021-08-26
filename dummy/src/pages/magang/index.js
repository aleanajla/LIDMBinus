import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { Bell1, User } from '../../assets'
import { useNavigation } from '@react-navigation/core'
import { Program, DetailsProgram, Profile, Header } from '../../pages/index.js'
import ResultProgramListView from '../../components/ResultProgramListView'
import {resultProgramData}  from '../../assets/jsonData/resultProgramData.js'
import { useState } from 'react/cjs/react.development'

const Magang = ({route}) => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(resultProgramData);
    const [masterDataSource, setMasterDataSource] = useState(resultProgramData);

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

    return(
        <ScrollView>
            <View styles={styles.pages}>
                <TouchableOpacity
                    onPress={()=>{navigation.goBack()}}
                >
                    <View style={styles.img1}>
                        <Image source = {require('../../assets/icons/arrowBackBlue.png')}/>
                    </View>
                </TouchableOpacity>
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
                <ResultProgramListView
                    itemList = {filteredDataSource}
                    navigation={navigation}
                />
            </View>
        </ScrollView>
    )
}

export default Magang;

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
    search:{
        marginTop :15,
        height: 35,
        width: 360,
        backgroundColor: '#DADADA',
        marginLeft: 15 ,
        marginBottom : 13,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    searchText:{
        alignItems : 'center',
        color : '#28527A80'
    },
    img1:{
        paddingTop : 15,
        paddingLeft : 15
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