import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import CustomRow from '../ListViewItem';



const CustomListView = ({itemList}) => (
    <View style={{flex: 1}}>
        <FlatList
            data={itemList}
            renderItem={({ item }) => <CustomRow
                title={item.title}
                description={item.description}
                image_url={item.image_url}
            />}
        />
    </View>
);

export default CustomListView;