import React from 'react';
import {View, FlatList, StyleSheet, ScrollView, Image} from 'react-native';
import RelatedListViewItems from '../relatedListViewItems';

const RelatedListView = ({itemList}) => (
    <ScrollView>
      <View>
        <FlatList 
            horizontal={false}
            data={itemList}
            renderItem={({ item }) => <RelatedListViewItems
                id={item.id}
                title={item.title}            
                author={item.author}
                image_url ={item.image_url}
            />}
            numColumns = {2}
        />
      </View>
    </ScrollView>
);

export default RelatedListView;

const styles = StyleSheet.create({
    flatlist: {
      flexWrap: 'wrap'
    },
    content: {
      alignItems: 'flex-start'
    }
}) 