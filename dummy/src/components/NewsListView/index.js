import React from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import NewsListViewItems from '../NewsListViewItem';

const NewsListView = ({itemList, navigation}) => (
    <ScrollView>
    <View>
            <FlatList
                // horizontal={true}
                data={itemList}
                renderItem={({ item }) => <NewsListViewItems
                    id={item.id}
                    title={item.title}            
                    description={item.description}
                    image_url ={item.image_url}
                    detail = {item.detail}
                    date = {item.date}
                    navigation={navigation}
                />}
            />
    </View>
    </ScrollView>
);

export default NewsListView;