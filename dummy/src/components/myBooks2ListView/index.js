import React from 'react';
import {View, FlatList, StyleSheet, ScrollView, Image} from 'react-native';
import MyBooksData2ListViewItems from '../myBookData2ListViewItems';

const MyBooksData2ListView = ({itemList, navigation}) => (
    <ScrollView>
      <View>
        <FlatList 
            horizontal={false}
            data={itemList}
            renderItem={({ item }) => <MyBooksData2ListViewItems
                id={item.id}
                title={item.title}            
                author={item.author}
                desc={item.desc}
                image_url ={item.image_url}
                navigation={navigation}
            />}
            numColumns = {2}
        />
      </View>
    </ScrollView>
);

export default MyBooksData2ListView;

const styles = StyleSheet.create({
    flatlist: {
      flexWrap: 'wrap'
    },
    content: {
      alignItems: 'flex-start'
    }
}) 