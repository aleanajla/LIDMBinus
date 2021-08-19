import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 5,
        backgroundColor: '#FFF',
        elevation: 2
    },
    title:{
        fontSize: 16,
        color: '#000'
    },
    description:{
        fontSize: 11,
        color:'#000'
    },
    photo:{
        height: 50,
        width: 50
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center'
    }
});

const CustomRow = ({title, description, image_url, id}) => (
    <TouchableOpacity
        onPress={() => {
            // navigation.navigate('NewsDetail', {type:{id}})
        }}
    >
        <View style={styles.container}>
                    <Image style={styles.photo} source={{uri: image_url}}/>
                    <View style={styles.container_text}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                </View>
    </TouchableOpacity>
    
    );

export default CustomRow;