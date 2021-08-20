import React from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import ScoreListViewItems from '../ScoreListViewItems'

const ScoreListView = ({itemList}) => (
    <ScrollView>
    <View>
            <FlatList
                // horizontal={true}
                data={itemList}
                renderItem={({ item }) => <ScoreListViewItems
                    id={item.id}
                    title={item.title}            
                    grade={item.grade}
                />}
            />
    </View>
    </ScrollView>
);

export default ScoreListView;