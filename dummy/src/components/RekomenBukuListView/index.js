import React from 'react';
import {View, FlatList, StyleSheet, ScrollView, Image} from 'react-native';
import RekomenBukuListViewItems from '../RekomenBukuListViewItems';
import { useNavigation } from '@react-navigation/core';

const RekomenBukuListView = ({itemList, navigation}) => (
    <ScrollView>
      <View>
        <FlatList 
            horizontal={true}
            data={itemList}
            renderItem={({ item }) => <RekomenBukuListViewItems
                id={item.id}
                title={item.title}            
                author={item.author}
                desc={item.desc}
                image_url ={item.image_url}
                navigation={navigation}
            />}
            // numColumns = {2}
        />
      </View>
    </ScrollView>
);

export default RekomenBukuListView;

const styles = StyleSheet.create({
    flatlist: {
      flexWrap: 'wrap'
    },
    content: {
      alignItems: 'flex-start'
    }
}) 