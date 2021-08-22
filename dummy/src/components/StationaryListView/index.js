import React from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import StationaryVoucherListViewItems from '../StationaryListViewItems';

const StationaryVoucherListView = ({itemList}) => (
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
            />}
        />
    </View>
    </ScrollView>
);

export default StationaryVoucherListView;