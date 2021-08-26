import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { ProfileSettings } from '../../pages/index.js'
import { useNavigation } from '@react-navigation/core'

const ChangePassword = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={StyleSheet.pages}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Settingss',{type:''});}}>
                        <Image source = {require('../../assets/icons/arrowBack.png')} style={{width : 24, height:24}}/>
                    </TouchableOpacity>
                    <Text style={styles.title3}>SIMPAN</Text>
                </View>
            </View>
            <View style={styles.inside}>
                <View style={styles.title}>
                    <Text style={styles.titleTxt}>Ganti Kata Sandi</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.info}>Silahkan ubah kata sandi dengan yang baru</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Kata sandi sekarang</Text>
                    <View style={styles.box}>
                        <TextInput style={styles.input} />
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Kata sandi baru</Text>
                    <View style={styles.box}>
                        <TextInput style={styles.input} />
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Ketik ulang kata sandi</Text>
                    <View style={styles.box}>
                        <TextInput style={styles.input} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ChangePassword;

const styles = StyleSheet.create({
    pages:{
        backgroundColor : 'white',
        height : 900,
        width : 100
    },
    header:{
        paddingLeft : 20,
        paddingRight : 25,
        flexDirection : 'row',
        height : 70,
        backgroundColor : '#28527A',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    title3:{
        color : 'white',
        fontSize : 20,
    },
    inside:{
        paddingLeft : 20,
        paddingRight : 20
    },
    title:{
        marginTop : 35
    },
    titleTxt:{
        fontSize : 25,
        color : '#022E57',
        fontWeight : 'bold',
        paddingBottom : 13,
        paddingLeft : 4
    },
    line:{
        backgroundColor : '#00000047',
        width : '100%',
        height : 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 10
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation:15,
    },
    info:{
        paddingLeft : 7,
        fontSize : 11,
        color : '#000000A1',
        marginBottom : 16,
        marginTop : 7
    },
    container :{
        // marginTop : 30
    },
    text:{
        fontSize : 16,
        color : '#022E57',
        fontWeight : 'bold',
        paddingLeft : 7,
        marginBottom : 10
    },
    box:{
        height: 35,
        width: '100%',
        backgroundColor: '#E5E5E5',
        borderRadius : 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:7,
        marginBottom : 19
    },
    input:{
        marginLeft: 10,
    },
})