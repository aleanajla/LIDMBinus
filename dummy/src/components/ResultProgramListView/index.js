import React from 'react';
import {View, FlatList, StyleSheet, ScrollView, Image} from 'react-native';
import ResultProgramListViewItems from '../ResultProgramListViewItems';

const ResultProgramListView = ({itemList, navigation}) => (
    <ScrollView>
      <View>
              <FlatList 
                  // horizontal={true}
                  data={itemList}
                  renderItem={({ item }) => <ResultProgramListViewItems
                      id={item.id}
                      title={item.title}            
                      division={item.division}
                      place={item.place}
                      time={item.time}
                      image_url = {item.image_url}
                      remote = {item.remote}
                      desc = {item.desc}
                      kriteria = {item.kriteria}
                      durasiWaktu = {item.durasiWaktu}
                      durasiBulan = {item.durasiBulan}
                      navigation={navigation}
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