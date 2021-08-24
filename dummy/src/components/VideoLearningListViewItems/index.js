import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Linking, Alert} from 'react-native';
import { WARNA_SEKUNDER } from '../../utils/constants';
import { useCallback } from 'react';

// const OpenURLButton = ({ url, children}) => {
//     const handlePress = useCallback(async() => {
//         const supported = await Linking.canOpenURL(url);
//         if(supported){
//             await Linking.openURL(url);
//         }else{
//             Alert.alert('URL Error');
//         }
//     }, [url]);

//     return <TouchableOpacity title={children} onPress={handlePress}/>
// }

const VideoLearningListViewItems = ({id, cover, title, creator, description, url, image_url}) => (
    // <OpenURLButton url={url}>
    <View style={styles.container}>
        <View style={styles.square}>
            <View style={styles.left}>
                <Image source = {{uri:image_url}} style={styles.pic}/>
            </View>
            <View style={styles.right}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.acc}>{creator}</Text>
                <Text style={styles.desc}>{description}</Text>
            </View>
        </View>
    </View>
    // </OpenURLButton>
);

export default VideoLearningListViewItems;

const styles = StyleSheet.create({
    square:{
        height: 128,
        width: 370,
        backgroundColor: '#CCD1D9',
        marginTop: 19,
        borderRadius: 15,
        flexDirection : 'row',
        elevation : 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    left:{
        justifyContent : 'center',
        paddingLeft : 16,
        // backgroundColor : 'yellow',
        width : '45%'
    },
    right:{
        paddingLeft : 16,
        paddingTop : 12
    },
    title:{
        fontWeight : 'bold',
        fontSize : 13,
        color : '#1B3A58DB',
        width : 180,
        // paddingTop : 22
    },
    acc:{
        paddingTop : 2,
        fontSize : 11,
        fontWeight : 'bold',
        color : '#1B3A58DB',
    },
    desc:{
        paddingTop : 2,
        paddingRight : 5,
        fontSize : 10,
        color : '#787680',
        width : 200
    },
    pic:{
        width:143.8,
        height:80
    },
    container:{
        alignItems :'center'
    }
})