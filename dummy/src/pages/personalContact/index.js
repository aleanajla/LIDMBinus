import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Settingss } from '../../pages/index.js'
import Modal from 'react-native-modal'
import { Input } from 'react-native-elements'
import { CheckBox } from 'react-native-elements'

const PersonaContact = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <View>
                <View style = {styles.header}>
                    <TouchableOpacity
                            onPress={()=>{navigation.navigate('ProfileSettings',{type:''});}}
                        >
                        <Image source={require('../../assets/icons/arrowBack.png')} />
                    </TouchableOpacity>
                    <Text style= {{color:'white', fontSize:18, width:'80%', textAlign:'right', marginLeft:40}}>SAVE</Text>
                </View>
                <View style= {styles.contentCon}>
                    <Text style={styles.title}>Personal Contact</Text>
                    <View style={{
                            borderBottomColor: '#00000047',
                            borderBottomWidth: 1,
                            marginTop:5
                        }}
                    />
                    <View>
                        <View style={styles.eachBox}>
                            <Text style={styles.textBold}>Email</Text>
                            <View style={styles.box}>
                                <TextInput style={styles.input} placeholder="" editable={false}/>
                            </View>
                        </View>
                        <View style={styles.eachBox}>
                            <Text style={styles.textBold}>No. Handphone</Text>
                            <View style={styles.box}>
                                <TextInput style={styles.input} placeholder="" editable={false}/>
                            </View>
                        </View>
                    </View>
                </View>

                <View style= {styles.contentCon}>
                    <Text style={styles.title}>Home Address</Text>
                    <View style={{
                            borderBottomColor: '#00000047',
                            borderBottomWidth: 1,
                            marginTop:5
                        }}
                    />
                    <View>
                        <View style={styles.eachBox}>
                            <Text style={styles.textBold}>Provinsi</Text>
                            <View style={styles.box}>
                                <TextInput style={styles.input} placeholder="" editable={false}/>
                            </View>
                        </View>
                        <View style={styles.eachBox}>
                            <Text style={styles.textBold}>Kota/Kabupaten</Text>
                            <View style={styles.box}>
                                <TextInput style={styles.input} placeholder="" editable={false}/>
                            </View>
                        </View>
                        <View style={styles.eachBox}>
                            <Text style={styles.textBold}>Kecamatan</Text>
                            <View style={styles.box}>
                                <TextInput style={styles.input} placeholder="" editable={false}/>
                            </View>
                        </View>
                        <View style={styles.eachBox}>
                            <Text style={styles.textBold}>Desa/Kelurahan</Text>
                            <View style={styles.box}>
                                <TextInput style={styles.input} placeholder="" editable={false}/>
                            </View>
                        </View>
                        <View style={styles.eachBox}>
                            <Text style={styles.textBold}>Kode Pos</Text>
                            <View style={styles.box}>
                                <TextInput style={styles.input} placeholder="" editable={false}/>
                            </View>
                        </View>
                    </View>
                </View>
                <CheckBox
                    title='Click Here'
                    checked={this.state.checked}
                />
            </View>
        </ScrollView>
    )
}

export default PersonaContact;

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