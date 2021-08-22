import React from 'react';

import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import CustomRow from '../ListViewItem';

const CustomListView = ({itemList, navigation}) => (
    <ScrollView>
    <View style={{flex: 1}}>
            <FlatList
                data={itemList}
                renderItem={({ item }) => <CustomRow
                    title={item.title}
                    description={item.description}
                    image_url={item.image_url}
                    id={item.id}
                    navigation={navigation}
                />}
            />
    </View>
    </ScrollView>
);

export default CustomListView;