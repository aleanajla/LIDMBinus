import React from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import ResultProgramListViewItems from '../ResultProgramListViewItems';

const ResultProgramListView = ({itemList}) => (
    <ScrollView>
    <View>
            <FlatList style={styles.flatlist} contentContainerStyle={styles.content}
                // horizontal={true}
                data={itemList}
                renderItem={({ item }) => <ResultProgramListViewItems
                    id={item.id}
                    title={item.title}            
                    division={item.author}
                    place={item.place}
                    time={item.time}
                />}
            />
    </View>
    </ScrollView>
);

export default ResultProgramListView

const styles = StyleSheet.create({
    flatlist: {
      flexWrap: 'wrap'
    },
    content: {
      alignItems: 'flex-start'
    }}) 