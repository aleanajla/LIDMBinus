import React from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import CertificateListViewItems from '../CertificateListViewItems'

const CertificateListView = ({itemList}) => (
    <ScrollView>
    <View>
            <FlatList
                // horizontal={true}
                data={itemList}
                renderItem={({ item }) => <CertificateListViewItems
                    id={item.id}
                    title={item.title}
                    date={item.date}            
                />}
            />
    </View>
    </ScrollView>
);

export default CertificateListView;