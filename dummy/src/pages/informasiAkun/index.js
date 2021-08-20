import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, paddingTop, ScrollView } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'

const InformasiAkun = () => {
    return (
        <ScrollView>
            <View style={styles.page}>
                <View style={styles.up}>
                    <Image style={styles.img}
                        source={require('../../assets/images/logo.png')}
                    />
                </View>
                <View style={styles.information}>
                    <Text style={styles.info}>INFORMASI AKUN</Text>
                </View>
                <View style={styles.loginText}>
                    <Text style={styles.textBold}>Email</Text>
                    <View style={styles.box}>
                        <Text style={styles.textBox}>Masukkan alamat email yang aktif</Text>
                    </View>
                    <Text style={styles.textBottom}>Pastikan alamat email ini dapat anda akses</Text>
                </View>
                <View style={styles.loginText}>
                    <Text style={styles.textBold}>Ketik Ulang Email</Text>
                    <View style={styles.box}>
                        <Text style={styles.textBox}>Masukkan alamat email yang aktif</Text>
                    </View>
                    <Text style={styles.textBottom}>Pastikan alamat email ini dapat anda akses</Text>
                </View>
                <View style={styles.loginText}>
                    <Text style={styles.textBold}>Kata Sandi</Text>
                    <View style={styles.box}>
                        <Text style={styles.textBox}>Kata sandi</Text>
                    </View>
                    <Text style={styles.textBottom}>Minimal 8 karakter, dan mengandung kombinasi huruf kecil, huruf besar dan angka</Text>
                </View>
                <View style={[ styles.down, {paddingTop: 30}]}>
                    <TouchableOpacity>
                        <Text style={styles.text}>SELANJUTNYA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default InformasiAkun;

const styles = StyleSheet.create({
    page:{
        // alignItems:'center',
    },
    Image:{
        width: 25,
    },
    information:{
        width: '100%',
        height: 75,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor: WARNA_SEKUNDER,
        marginTop: 35,
    },
    info:{
        fontSize: 25,
        color : '#FFFFFF',
        fontWeight : 'bold',
    }, 
    up:{
        // paddingTop : 139,
        // justifyContent :'flex-end',
        alignItems: 'center',
        marginTop: 50
    },
    loginText:{
        paddingRight : 50,
        paddingLeft : 50,
        paddingTop : 35,
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
        alignItems : 'center',
        flexDirection : 'row',
    },
    textBox : {
        marginLeft: 15,
        color: '#28527A',
        fontSize: 13
    },
    textBottom : {
        marginLeft: 15,
        color: '#28527A',
        fontSize: 10
    }
})
