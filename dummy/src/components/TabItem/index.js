import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { WARNA_UTAMA } from '../../utils/constants'
import {images} from '../../assets/iconNavbar'

const TabItem = ({label, isFocused, onLongPress, onPress}) => {
    const Icon = (label) => {
        if(label === "Perpus"){
            return images.Perpus.uri;
        }
        if(label === "Score"){
            return images.Score.uri;
        }
        if(label === "Home"){
            return images.Home.uri;
        }
        if(label === "Schedule"){
            return images.Schedule.uri;
        }
        if(label === "Learning"){
            return images.Learning.uri;
        }
    }

    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                onLongPress={onLongPress}
                style = { label === "Home" ? styles.conHome : styles.container}
                >
                    <Image source= {Icon(label)} styles = {styles.navbar}/>
            </TouchableOpacity>
        </View>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container:{
        paddingLeft: 20,
        paddingRight : 20,
    },
    conHome:{
        marginBottom: 20,
        position: 'absolute',
        bottom:-10,
        left:-25,

    },
    text: {
        color: WARNA_UTAMA
    },
    navbar: {
        alignItems: 'center'
    }
})
