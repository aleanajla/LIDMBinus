import React from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import RelatedListViewItems from '../relatedListViewItems';

const RelatedListView = ({itemList}) => (
    // <ScrollView>
    <View>
            <FlatList style={styles.flatlist} contentContainerStyle={styles.content}
                horizontal={true}
                data={itemList}
                renderItem={({ item }) => <RelatedListViewItems
                    id={item.id}
                    title={item.title}            
                    author={item.author}
                    image_url ={item.image_url}
                />}
            />
    </View>
    // </ScrollView>
);

export default RelatedListView;

const styles = StyleSheet.create({
    flatlist: {
      flexWrap: 'wrap'
    },
    content: {
      alignItems: 'flex-start'
    }}) 