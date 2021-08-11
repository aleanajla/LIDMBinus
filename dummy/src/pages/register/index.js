import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Register = () =>{
    return (
        <View style={styles.page}>
            <View style={styles.up}>
                <Image
                    source={require('../../assets/images/logo.png')}
                />
            </View>
            <View style={styles.loginText}>
                <Text style={styles.textBold}>Pilih Posisi yang Sesuai</Text>
                <View style={styles.box}></View>
            </View>
            <View style={[ styles.down, {paddingTop: 30}]}>
                <TouchableOpacity>
                    <Text style={styles.text}>SELANJUTNYA</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    page:{
        // alignItems:'center',
    },
    up:{
        paddingTop : 139,
        // justifyContent :'flex-end',
        alignItems: 'center'
    },
    loginText:{
        paddingRight : 50,
        paddingLeft : 50,
        paddingTop : 70,
    },
    textBold:{
        fontSize : 18,
        fontWeight : 'bold',
        color: '#28527A',
        padding : 8
    },
    down:{
        alignItems : 'center'
    },
    text:{
        width: 130,
        height : 37,
        fontSize: 15,
        fontWeight : 'bold',
        color: '#28527A',
        padding: 8,
        paddingLeft : 14,
        margin : 9,
        // alignItems: 'center',
        backgroundColor : '#FAD586',
        borderBottomLeftRadius: 60,
        borderTopLeftRadius: 60,
        borderBottomRightRadius: 60,
        borderTopRightRadius: 60,
    },
    box:{
        height: 40,
        width: '100%',
        backgroundColor: '#E5E5E5',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    }
})
