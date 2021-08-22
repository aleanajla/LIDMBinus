import React from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import EducationVoucherListViewItems from '../EducationVoucherListViewItems';

const EducationVoucherListView = ({itemList, navigation}) => (
    <ScrollView>
    <View>
        <FlatList
            horizontal={true}
            data={itemList}
            renderItem={({ item }) => <EducationVoucherListViewItems
                id={item.id}
                company={item.company}           
                description={item.description}
                point={item.point} 
                image_url={item.image_url}
                desc= {item.desc}
                conTerms ={item.conTerms}
                navigation={navigation}
            />}
        />
    </View>
    </ScrollView>
);

export default EducationVoucherListView;