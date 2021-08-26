import React from 'react';
import {View, FlatList, StyleSheet, ScrollView, Image} from 'react-native';
import RekomenBukuListViewItems from '../RekomenBukuListViewItems';

const RekomenBukuListView = ({itemList}) => (
    <ScrollView>
      <View>
        <FlatList 
            horizontal={true}
            data={itemList}
            renderItem={({ item }) => <RekomenBukuListViewItems
                id={item.id}
                title={item.title}            
                author={item.author}
                image_url ={item.image_url}
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