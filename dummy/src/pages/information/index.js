import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Home } from '../../pages/index.js'

const Information = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
        <View style={styles.pages}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Home',{type:''});}}>
                    <Image source = {require('../../assets/icons/arrowBackBlue.png')} style={[styles.header, {width : 34, height:34, top :10}]}/>
                </TouchableOpacity>
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>Kampus Merdeka</Text>
                <Text style={styles.heading}>Program persiapan karier yang komprehensif guna mempersiapkan generasi terbaik Indonesia</Text>
                <Text style={styles.text}>Kampus Merdeka merupakan bagian dari kebijakan Merdeka Belajar oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Republik Indonesia yang memberikan kesempaatan bagi mahasiswa/i untuk mengasah kemampuan sesuai bakat dan minat dengan terjun langsung ke dunia kerja sebagai persiapan karier masa depan.</Text>
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
        paddingLeft : 34
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
        paddingTop : 10
    },
    text:{
        paddingTop : 15,
        fontSize : 16,
        width : 344,
        color : '#000000D6'
    }
})