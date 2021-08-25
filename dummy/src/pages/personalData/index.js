import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { ProfileSettings } from '../../pages/index.js'
import Modal from 'react-native-modal'
import { Input } from 'react-native-elements'

const PersonalData = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <View>
                <View style = {styles.header}>
                    <TouchableOpacity
                        onPress={()=>{navigation.goBack()}}
                    >
                        <Image source={require('../../assets/icons/arrowBack.png')} />
                    </TouchableOpacity>
                    <Text style= {{color:'white', fontSize:18, width:'80%', textAlign:'right', marginLeft:40}}>SAVE</Text>
                </View>
                <View style= {styles.contentCon}>
                    <Text style={styles.title}>Data Pribadi</Text>
                    <View style={{
                            borderBottomColor: '#00000047',
                            borderBottomWidth: 1,
                            marginTop:5
                        }}
                    />
                    <View>
                        <View style={styles.eachBox}>
                            <Text style={styles.textBold}>Nama Lengkap</Text>
                            <View style={styles.box}>
                                <TextInput style={styles.input} placeholder="   Andrew Willy" editable={false}/>
                            </View>
                        </View>
                        <View style={styles.eachBox}>
                            <Text style={styles.textBold}>Jenis Kelamin</Text>
                            <View style={styles.box}>
                                <TextInput style={styles.input} placeholder="   Laki - Laki" editable={false}/>
                            </View>
                        </View>
                        <View style={styles.eachBox}>
                            <Text style={styles.textBold}>Agama</Text>
                            <View style={styles.box}>
                                <TextInput style={styles.input} placeholder="   Budha" editable={false}/>
                            </View>
                        </View>
                        <View style={styles.eachBox}>
                            <Text style={styles.textBold}>NIK</Text>
                            <View style={styles.box}>
                                <TextInput style={styles.input} placeholder="   243274324783" editable={false}/>
                            </View>
                        </View>
                    </View>
                </View>

                <View style= {styles.contentCon}>
                    <Text style={styles.title}>Informasi Akademik</Text>
                    <View style={{
                            borderBottomColor: '#00000047',
                            borderBottomWidth: 1,
                            marginTop:5
                        }}
                    />
                    <View>
                        <View style={styles.eachBox}>
                            <Text style={styles.textBold}>Universitas</Text>
                            <View style={styles.box}>
                                <TextInput style={styles.input} placeholder="   Universitas Bina Nusantara" editable={false}/>
                            </View>
                        </View>
                        <View style={styles.eachBox}>
                            <Text style={styles.textBold}>Asal Sekolah Menegah Atas</Text>
                            <View style={styles.box}>
                                <TextInput style={styles.input} placeholder="   SMA Tarakanita 1" editable={false}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default PersonalData;

const styles = StyleSheet.create({
    header:{
        backgroundColor: WARNA_SEKUNDER,
        padding:20,
        flexDirection:'row'
    },
    textBold:{
        fontSize : 15,
        fontWeight : 'bold',
        color: '#28527A',
        padding : 8
    },
    box:{
        height: 40,
        width: '100%',
        backgroundColor: '#E5E5E5',
        marginLeft:5,
        borderRadius:20,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:10
    },
    eachBox:{
        paddingRight : 20,
        // paddingLeft : 10,
        paddingTop : 10,
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        color: '#022E57'
    },
    contentCon:{
        padding:20
    },
})