import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { ProfileSettings } from '../../pages/index.js'
import { useNavigation } from '@react-navigation/core'

const CompleteDocument = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
             <View style={StyleSheet.pages}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('ProfileSettings',{type:''});}}>
                        <Image source = {require('../../assets/icons/arrowBack.png')} style={{width : 24, height:24}}/>
                    </TouchableOpacity>
                    <Text style={styles.title3}>SIMPAN</Text>
                </View>
            </View>
            <View style={styles.inside}>
                <View style={styles.title}>
                    <Text style={styles.titleTxt}>Selesaikan Pengiisian Dokumen</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Curriculum Vitae (Wajib)</Text>
                    <Text style={styles.text2}>Unggah CV kamu dengan format PDF dengan ukuran maksimal 2 MB</Text>
                    <TouchableOpacity>
                        <View style={styles.box}>
                            <Image source = {require('../../assets/icons/file.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Transkripsi Nilai (Wajib)</Text>
                    <Text style={styles.text2}>Unggah Transkrip nilai kamu dengan format PDF dengan ukuran maksimal 2 MB</Text>
                    <TouchableOpacity>
                        <View style={styles.box}>
                            <Image source = {require('../../assets/icons/file.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Sertifikat Pengalaman Organisasi (Opsional)</Text>
                    <Text style={styles.text2}>Kamu bisa menambahkan sertifikat dengan maksimal ukuran 5MB per sertifikat</Text>
                    <TouchableOpacity>
                        <View style={styles.box}>
                            <Image source = {require('../../assets/icons/file.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.box}>
                            <Image source = {require('../../assets/icons/file.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.box}>
                            <Image source = {require('../../assets/icons/file.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.box}>
                            <Image source = {require('../../assets/icons/file.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.box}>
                            <Image source = {require('../../assets/icons/file.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default CompleteDocument;

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
        marginBottom : 24
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
        fontSize : 18,
        color : '#022E57',
        fontWeight : 'bold',
        paddingLeft : 7,
        // marginBottom : 10
    },
    text2:{
        fontSize : 11,
        color : '#000000A1',
        paddingLeft : 7,
        paddingTop : 3,
        paddingBottom : 10
    },
    box:{
        height: 55,
        width: 155,
        backgroundColor: '#E5E5E5',
        borderRadius : 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:7,
        marginBottom : 19,
        marginLeft : 7,
        justifyContent :'center',
        alignItems : 'center'
    },
    input:{
        marginLeft: 10,
    },
})