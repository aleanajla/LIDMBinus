import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/core'

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const Register2 = () =>{
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <View style={styles.up}>
                <Image
                    source={require('../../assets/images/logo.png')}
                />
            </View>
            <View style={styles.loginText}>
                <View>
                    <Text style={styles.textBold}>Email</Text>
                    <View style={styles.box}>
                        <TextInput style={styles.input} placeholder="Masukkan alamat email yang aktif"/>
                    </View>
                    <Text style={style.little}>>Pastikan alamat email ini dapat anda akses</Text>
                </View>
                <View>
                    <Text style={styles.textBold}>Ketik Ulang Email</Text>
                    <View style={styles.box}>
                        <TextInput style={styles.input} placeholder="Masukkan alamat email yang aktif"/>
                    </View>
                    <Text style={style.little}>>Pastikan alamat email ini dapat anda akses</Text>
                </View>
                <View>
                    <Text style={styles.textBold}>Kata Sandi</Text>
                    <View style={styles.box}>
                        <TextInput style={styles.input} placeholder="Kata Sandi"/>
                    </View>
                    <Text style={style.little}>Minimal 8 karakter, dan mengandung kombinasi huruf kecil, huruf besar dan angka</Text>
                </View>
            </View>
            <View style={[ styles.down, {paddingTop: 30}]}>
                <TouchableOpacity onPress = {()=>{ navigation.navigate('Register3',{type:''})}}> 
                    <Text style={styles.text}>SELANJUTNYA</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>DAFTAR DIRI</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{fontSize: 15, color: '#28527A', fontWeight: 'bold'}}>Forgot Password? </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Register2;

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
        paddingTop : 40,
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
        width: 122,
        height : 34,
        fontSize: 15,
        fontWeight : 'bold',
        color: '#28527A',
        paddingTop: 7,
        paddingLeft : 37,
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
    },
    input:{
        marginLeft: 10,
    }

})
