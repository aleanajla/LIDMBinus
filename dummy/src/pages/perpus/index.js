import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import CustomListView from '../../components/ListView'
import { newsData } from '../../assets/jsonData/newsData'
import { useState } from 'react/cjs/react.development'

const Perpus = ({navigation}) => {
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
        <View style={{ flex: 1}}>
            <TextInput
                style = {{height: 40, borderWidth: 1, paddingLeft: 20, margin:5, borderColor:"#000", backgroundColor:"#FFF"}}
                onChangeText={(text) => searchFilterFunction(text)}
                value={search}
                underlineColorAndroid="transparent"
                placeholder="Search Here"
            />
            <CustomListView
                itemList={filteredDataSource}
                navigation={navigation}
            />
        </View>
    )
}

export default Perpus;

const styles = StyleSheet.create({})
