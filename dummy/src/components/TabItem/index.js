import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { WARNA_UTAMA } from '../../utils/constants'
import {Book, Clipboard, Home, Calender, Study} from '../../assets'

const TabItem = ({label, isFocused, onLongPress, onPress}) => {
    
    const Icon = () => {

        if(label === "Perpus"){
            return <Book/>;
        }
        if(label === "Score"){
            return <Clipboard/>;
        }
        if(label === "Home"){
            return <Home/>;
        }
        if(label === "Calender"){
            return <Calender/>;
        }
        if(label === "Learning"){
            return <Study/>;
        }
    }

    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.container}
                >
                    {/* <Icon /> */}
                {<Text style={styles.text}>
                {label.toUpperCase()}
                </Text>}
            </TouchableOpacity>
        </View>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container:{
        alignContent : 'center',
        padding: 5
    },
    text: {
        color: WARNA_UTAMA
    }
})
