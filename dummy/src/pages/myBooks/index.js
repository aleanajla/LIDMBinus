import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useState } from 'react/cjs/react.development'
import MyBooksListView from '../../components/myBooksListView'
import { myBooksData } from '../../assets/jsonData/myBooksData'
import MyBooksData2ListView from '../../components/myBooks2ListView'
import { myBooksData2 } from '../../assets/jsonData/myBooksData2'
import { WARNA_SEKUNDER } from '../../utils/constants'


const MyBooks = () => {
    const navigation = useNavigation();

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(myBooksData2);
    const [masterDataSource, setMasterDataSource] = useState(myBooksData2);

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
            <View>
                <View style={styles.upperCon}>
                    <View style= {styles.header}>
                        <View style={{position:'absolute', left:0}}>
                            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                                <Image source={require('../../assets/icons/arrowBack.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.title}>My Books</Text>
                        </View>
                    </View>

                    <View>
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
                            <Image source = {require('../../assets/icons/sortWhite.png')}/>
                        </View>
                    </View>
                
                    <View style = {styles.onGoing}>
                        <Text style= {styles.subTitle1}>Sedang Dibaca</Text>
                            <MyBooksListView
                                itemList={myBooksData}
                                navigation={navigation}
                            />
                    </View>
                </View>
                <View style={styles.collection}>
                    <Text style= {styles.subTitle}>Koleksi</Text>
                    <MyBooksData2ListView
                            itemList={filteredDataSource}
                            navigation={navigation}
                    />
                </View>
            </View>
       </ScrollView>
    )
}

export default MyBooks;

const styles = StyleSheet.create({
    upperCon:{
        backgroundColor: WARNA_SEKUNDER,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        padding:20
    },
    header:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:30,
        color: 'white',
        fontWeight: 'bold'
    },
    titlePage:{
        marginTop:10
    },  
    onGoing:{
        marginTop:10,
    },
    collection:{
        marginTop:20,
        padding:20
    },
    subTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: WARNA_SEKUNDER,
        marginBottom:25
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
        marginRight : 3,
        marginTop:10
    },
    container:{
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        marginBottom: 10,
        marginTop : 10,
    },
    subTitle1:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom:25
    }
    
})