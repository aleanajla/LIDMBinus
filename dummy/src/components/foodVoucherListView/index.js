import React from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import FoodVoucherListViewItems from '../foodVoucherListViewItems';

const FoodVoucherListView = ({itemList, navigation}) => (
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
                image_url= {item.image_url}
                desc= {item.desc}
                conTerms ={item.conTerms}
                navigation={navigation}
            />}
        />
    </View>
    </ScrollView>
);

export default FoodVoucherListView;