import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Picker } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useState } from 'react/cjs/react.development'

const Register = () =>{
    const navigation = useNavigation();
    const [selectedPicker, setSelectedPicker] = useState("");
    return (
        <View style={styles.page}>
            <View style={styles.up}>
                <Image
                    source={require('../../assets/images/logo.png')}
                />
            </View>
            <View style={styles.loginText}>
                <Text style={styles.textBold}>Pilih Posisi yang Sesuai</Text>
                <View style={styles.box}>
                    <Picker
                        style={{paddingLeft: 10}}
                        selectedValue={selectedPicker}
                        onValueChange={(itemValue, itemIndex)=> setSelectedPicker(itemValue)}>
                        <Picker.Item label="Mahasiswa" value="1"/>
                        <Picker.Item label="Dosen" value="2"/>
                        <Picker.Item label="Sekolah" value="3"/>
                        <Picker.Item label="Perguruan Tinggi" value="4"/>
                    </Picker>
                </View>
            </View>
            <View style={[ styles.down, {paddingTop: 30}]} >
                <TouchableOpacity onPress={()=>{
                        navigation.navigate('Register2',{type:''});}}>
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
        justifyContent : 'center',
        paddingLeft : 8
    }
})
