import React from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import AnnouncementListViewItems from '../AnnouncementListViewItems'

const AnnouncementListView = ({itemList, navigation}) => (
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
                    navigation={navigation}
                />}
            />
    </View>
    </ScrollView>
);

export default AnnouncementListView;