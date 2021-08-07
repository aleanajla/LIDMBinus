import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { WARNA_UTAMA } from '../../utils/constants'
import {study, calender, home, book, clipboard} from '../../assets'

const TabItem = ({label, isFocused, onLongPress, onPress}) => {
    
    const Icon = () => {
        if(label === "home"){
            return <home/>;
        }
        if(label === "perpus"){
            return <book/>;
        }
        if(label === "score"){
            return <clipboard/>;
        }
        if(label === "calender"){
            return <calender/>;
        }
        if(label === "learning"){
            return <study/>;
        }
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
            >
            <Text style={styles.text}>
                {label}
            </Text>
        </TouchableOpacity>
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
