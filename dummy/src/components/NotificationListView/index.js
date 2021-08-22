import React from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import NotificationListViewItems from '../NotificationListViewItem';

const NotificationListView = ({itemList}) => (
    <ScrollView>
    <View>
            <FlatList
                // horizontal={true}
                data={itemList}
                renderItem={({ item }) => <NotificationListViewItems
                    id={item.id}
                    title={item.title}            
                    date={item.date}
                />}
            />
    </View>
    </ScrollView>
);

export default NotificationListView;