import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomListView from '../../components/ListView'
import { newsData } from '../../assets/jsonData/newsData'

const Perpus = ({navigation}) => {
    return (
        <View style={{ flex: 1}}>
            <CustomListView
                itemList={newsData}
                navigation={navigation}
            />
        </View>
    )
}

export default Perpus;

const styles = StyleSheet.create({})
