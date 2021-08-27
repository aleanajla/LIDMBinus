import React from 'react';
import {View, FlatList, StyleSheet, ScrollView, Image} from 'react-native';
import RecomendBooksListViewItems from '../RecomendBooksListViewItems';

const RecomendBooksListView = ({itemList, navigation}) => (
    <ScrollView>
      <View>
        <FlatList 
            horizontal={false}
            data={itemList}
            renderItem={({ item }) => <RecomendBooksListViewItems
                id={item.id}
                title={item.title}            
                author={item.author}
                desc={item.desc}
                image_url ={item.image_url}
                navigation={navigation}
            />}
            numColumns = {2}
        />
      </View>
    </ScrollView>
);

export default RecomendBooksListView;

const styles = StyleSheet.create({
    flatlist: {
      flexWrap: 'wrap'
    },
    content: {
      alignItems: 'flex-start'
    }
}) 