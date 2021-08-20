import React from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import AnnounceListViewItems from '../ListViewItems';

const AnnounceListView = ({itemList}) => (
    <ScrollView>
    <View>
            <FlatList
                horizontal={true}
                data={itemList}
                renderItem={({ item }) => <AnnounceListViewItems
                    id={item.id}
                    date={item.date}
                    title={item.title}            
                    description={item.description}
                />}
            />
    </View>
    </ScrollView>
);

export default AnnounceListView;