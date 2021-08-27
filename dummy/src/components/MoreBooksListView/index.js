import React from 'react';
import {View, FlatList, StyleSheet, ScrollView, Image} from 'react-native';
import MoreBooksListViewItems from '../MoreBooksListViewItems';

const MoreBooksListView = ({itemList, navigation}) => (
    <ScrollView>
      <View>
        <FlatList 
            horizontal={false}
            data={itemList}
            renderItem={({ item }) => <MoreBooksListViewItems
                id={item.id}
                title={item.title}            
                author={item.author}
                image_url ={item.image_url}
                desc={item.desc}
                navigation={navigation}
            />}
            numColumns = {2}
        />
      </View>
    </ScrollView>
);

export default MoreBooksListView;

const styles = StyleSheet.create({
    flatlist: {
      flexWrap: 'wrap'
    },
    content: {
      alignItems: 'flex-start'
    }
}) 