import React from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import FoodVoucherListViewItems from '../foodVoucherListViewItems';

const FoodVoucherListView = ({itemList}) => (
    <ScrollView>
    <View>
        <FlatList
            horizontal={true}
            data={itemList}
            renderItem={({ item }) => <FoodVoucherListViewItems
                id={item.id}
                company={item.company}           
                description={item.description}
                point={item.point} 
            />}
        />
    </View>
    </ScrollView>
);

export default FoodVoucherListView;