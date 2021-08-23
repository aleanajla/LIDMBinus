import React from 'react';
import {View, FlatList, StyleSheet, ScrollView, Image} from 'react-native';
import InformationListViewItems from '../InformationListViewItems';

const InformationListView = ({itemList, navigation}) => (
    <ScrollView>
        <View>
                <FlatList
                    horizontal={true}
                    data={itemList}
                    renderItem={({ item }) => <InformationListViewItems
                        id={item.id}
                        heading={item.heading}            
                        description={item.description}
                        image_url={item.image_url}
                        navigation={navigation}
                    />}
                />
        </View>
    </ScrollView>
);

export default InformationListView;