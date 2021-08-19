import React from 'react';

import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import CustomRow from '../ListViewItem';

const CustomListView = ({itemList}) => (
    <ScrollView>
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
    </ScrollView>
);

export default CustomListView;