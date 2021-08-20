import React from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import ShareMaterialsListViewItems from '../shareMaterialsListViewItems';

const ShareMaterialsListView = ({itemList}) => (
    <ScrollView>
    <View>
            <FlatList
                // horizontal={true}
                data={itemList}
                renderItem={({ item }) => <ShareMaterialsListViewItems
                    id={item.id}
                    title={item.title}            
                    size={item.size}
                    type={item.type}
                />}
            />
    </View>
    </ScrollView>
);

export default ShareMaterialsListView;