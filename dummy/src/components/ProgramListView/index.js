import React from 'react';
import {View, FlatList, StyleSheet, ScrollView, Image} from 'react-native';
import ProgramListViewItems from '../ProgramListViewItems';

const ProgramListView = ({itemList}) => (
    <ScrollView>
      <View>
          <FlatList //style={styles.flatlist} contentContainerStyle={styles.content}
              horizontal={false}
              data={itemList}
              renderItem={({ item }) => <ProgramListViewItems
                  id={item.id}
                  program={item.program}            
                  date={item.date}
                  image_url={item.image_url}
              />}
              numColumns = {3}
          />
      </View>
    </ScrollView>
);

export default ProgramListView;

const styles = StyleSheet.create({
    flatlist: {
      flexWrap: 'wrap'
    },
    content: {
      alignItems: 'flex-start'
    }
}) 