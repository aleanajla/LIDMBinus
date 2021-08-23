import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Home } from '../../pages/index.js'

const Information = ({route}) => {
    const navigation = useNavigation();
    const{id, heading, description, image_url} = route.params;
    return(
        <ScrollView>
        <View style={styles.pages}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <Image source = {require('../../assets/icons/arrowBackBlue.png')} style={[styles.header, {width : 24, height:24, top :10}]}/>
                </TouchableOpacity>
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>Kampus Merdeka</Text>
                <Text style={styles.heading}>{heading}</Text>
                <Text style={styles.text}>{description}</Text>
            </View>
        </View>
        </ScrollView>
    )
}

export default Information;

const styles = StyleSheet.create({
    header:{
        paddingLeft : 20,
        flexDirection : 'row',
        height : 60,
        alignItems : 'center',
    },
    info:{
        paddingLeft : 34,
    },
    title:{
        fontWeight : 'bold',
        fontSize : 30,
        color : '#28527A',
        paddingTop : 19
    },
    heading:{
        color : '#000000D6',
        fontSize : 18,
        fontWeight : 'bold',
        paddingTop : 10,
        textAlign : 'justify',
        width : 320
    },
    text:{
        paddingTop : 15,
        fontSize : 16,
        width : 344,
        color : '#000000D6',
        textAlign: 'justify',
        width : 320
    }
})