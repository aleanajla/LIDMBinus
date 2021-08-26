import React from 'react';
import {View, FlatList, StyleSheet, ScrollView, Image} from 'react-native';
import BukuLainnyaListViewItems from '../bukuLainnyaListViewItems';

const BukuLainnyaListView = ({itemList}) => (
    <ScrollView>
      <View>
        <FlatList 
            horizontal={true}
            data={itemList}
            renderItem={({ item }) => <BukuLainnyaListViewItems
                id={item.id}
                title={item.title}            
                author={item.author}
                image_url ={item.image_url}
            />}
        />
      </View>
    </ScrollView>
);

export default BukuLainnyaListView;

const styles = StyleSheet.create({
    flatlist: {
      flexWrap: 'wrap'
    },
    content: {
      alignItems: 'flex-start'
    }
}) 