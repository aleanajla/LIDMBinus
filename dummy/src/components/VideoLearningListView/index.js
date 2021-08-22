import React from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import VideoLearningListViewItems from '../VideoLearningListViewItems';

const VideoLearningListView = ({itemList}) => (
    <ScrollView>
    <View>
            <FlatList
                // horizontal={true}
                data={itemList}
                renderItem={({ item }) => <VideoLearningListViewItems
                    id={item.id}
                    cover={item.cover}            
                    title={item.title}
                    creator={item.creator}
                    description={item.description}
                    url={item.url}
                    image_url = {item.image_url}
                />}
            />
    </View>
    </ScrollView>
);

export default VideoLearningListView;