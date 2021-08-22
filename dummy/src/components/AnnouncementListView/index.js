import React from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import AnnouncementListViewItems from '../AnnouncementListViewItems'

const AnnouncementListView = ({itemList}) => (
    <ScrollView>
    <View>
            <FlatList
                // horizontal={true}
                data={itemList}
                renderItem={({ item }) => <AnnouncementListViewItems
                    id={item.id}
                    date={item.date}
                    title={item.title}            
                    description={item.description}
                />}
            />
    </View>
    </ScrollView>
);

export default AnnouncementListView;