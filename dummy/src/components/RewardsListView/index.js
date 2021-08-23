import React from 'react';
import {View, FlatList, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
import RewardsListViewItems from '../RewardsListViewItems';

const RewardsListView = ({itemList}) => (
    <ScrollView>
        <View>
                <FlatList style={styles.flatlist} contentContainerStyle={styles.content}
                    // horizontal={true}
                    data={itemList}
                    renderItem={({item}) => <RewardsListViewItems
                        id={item.id}
                        company={item.company}
                        details={item.details}
                        deadline={item.deadline}
                        image_url ={item.image_url}
                    />}
                />
        </View>
    </ScrollView>
);

export default RewardsListView

const styles = StyleSheet.create({
    flatlist: {
      flexWrap: 'wrap'
    },
    content: {
      alignItems: 'flex-start'
    }
}) 