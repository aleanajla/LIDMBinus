import React from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import StationaryVoucherListViewItems from '../StationaryListViewItems';

const StationaryVoucherListView = ({itemList, navigation}) => (
    <ScrollView>
    <View>
        <FlatList
            horizontal={true}
            data={itemList}
            renderItem={({ item }) => <StationaryVoucherListViewItems
                id={item.id}
                company={item.company}           
                description={item.description}
                point={item.point} 
                image_url = {item.image_url}
                desc= {item.desc}
                conTerms ={item.conTerms}
                navigation={navigation}
            />}
        />
    </View>
    </ScrollView>
);

export default StationaryVoucherListView;