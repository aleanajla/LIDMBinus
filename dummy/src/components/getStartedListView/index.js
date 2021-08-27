import React from 'react';
import {View, FlatList, StyleSheet, ScrollView, Image} from 'react-native';
import GetStartedListViewItems from '../getStartedListViewItems';

const GetStartedListView = ({itemList, navigation}) => (
    <ScrollView>
      <View>
        <FlatList 
            horizontal={false}
            data={itemList}
            renderItem={({ item }) => <GetStartedListViewItems
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

export default GetStartedListView;

const styles = StyleSheet.create({
    flatlist: {
      flexWrap: 'wrap'
    },
    content: {
      alignItems: 'flex-start'
    }
}) 