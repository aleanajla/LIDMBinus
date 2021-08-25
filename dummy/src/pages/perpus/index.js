import React, { useEffect } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import CustomListView from '../../components/ListView'
import { newsData } from '../../assets/jsonData/newsData'
import { useState } from 'react/cjs/react.development'

const Perpus = ({navigation}) => {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(newsData);
    const [masterDataSource, setMasterDataSource] = useState(newsData);
    // const [toggleSort, setToggleSort] = useState(false);
    const [isFiltered, setIsFiltered] = useState(false);
    const [isDataSet, setIsDataSet] = useState([]);

    // const toggleOrderm = () => {
    //     setToggleSort(!toggleSort);
    // }

    const toggleFilter = () => {
        setIsFiltered(!isFiltered);
        console.log(isFiltered);
    }

    const getData = () => {
        if(filteredDataSource != null){
            let datas = [];
            datas = isFiltered ? filteredDataSource.sort((a,b) => a.title.localeCompare(b.title)): masterDataSource;
            setIsDataSet(datas);
        }
    }

    useEffect(()=> {
        getData();
    })

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
        <View style={{ flex: 1}}>
            <TextInput
                style = {{height: 40, borderWidth: 1, paddingLeft: 20, margin:5, borderColor:"#000", backgroundColor:"#FFF"}}
                onChangeText={(text) => searchFilterFunction(text)}
                value={search}
                underlineColorAndroid="transparent"
                placeholder="Search Here"
            />
            <TouchableOpacity onPress= {toggleFilter}>
                <Text>Press To Sort ASC</Text>
            </TouchableOpacity>
            
            <CustomListView
                itemList={isDataSet}
                navigation={navigation}
            />

            {console.log(isDataSet)}
        </View>
    )
}

export default Perpus;

const styles = StyleSheet.create({})
