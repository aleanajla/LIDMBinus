import React from 'react';
import {View, FlatList, StyleSheet, ScrollView, Image} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import MyBooksDataListViewItems from '../myBooksDataListViewItems';

const MyBooksListView = ({itemList, navigation}) => (
    <ScrollView>
      <View>
        <FlatList 
            horizontal={true}
            data={itemList}
            renderItem={({ item }) => <MyBooksDataListViewItems
                id={item.id}
                title={item.title}            
                author={item.author}
                desc={item.desc}
                image_url ={item.image_url}
                progress = {item.progress}
                navigation={navigation}
            />}
            // numColumns = {2}
        />
      </View>
    </ScrollView>
);

export default MyBooksListView;

const styles = StyleSheet.create({
    flatlist: {
      flexWrap: 'wrap'
    },
    content: {
      alignItems: 'flex-start'
    }
}) 