import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, Dimensions, Picker} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useState } from 'react/cjs/react.development'
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType'
import CheckBox from 'react-native-check-box'
import { useNavigation } from '@react-navigation/core'
import Modal from 'react-native-modal'

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const LupaKataSandi = () => {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);
    const [selectedPicker, setSelectedPicker] = useState("tgl");
    const [modalVisible, setModalVisible] = useState(false);
    const [textInputEmail, setTextInputEmail] = useState('');
    
    
    return (
        
        <ScrollView>
            <Modal
                animationType="slide" //slide, fade, none
                transparent={true} //true or false
                visible={modalVisible}
                backdropOpacity={0.5}
                onRequestClose={() => {
                setModalVisible(!modalVisible)}}
                >
                    <View styles={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                onPress={()=> setModalVisible(!modalVisible)}>
                                <View style={styles.closeBtn}>
                                    <Image source = {require('../../assets/icons/closeBlack.png')}/>
                                </View>
                            </TouchableOpacity>
                            <Image source = {require('../../assets/images/message.png')} style={{width: 100, height:100}}/>
                            <Text style={{fontSize:15, color:WARNA_SEKUNDER, fontWeight:'bold', marginTop:10, marginBottom : 10, textAlign : 'center'}}>Silahkan cek email untuk informasi aktivasi akun.</Text>
                            <TouchableOpacity onPress={()=>{navigation.navigate('SignIn',{type:''});}}>
                                <View style = {styles.btnSeeMore}>
                                    <Text style={{color : '#28527A', fontWeight:'bold', fontSize : 15}}>KEMBALI KE HALAMAN AWAL</Text>
                                </View>
                            </TouchableOpacity>
                            
                        </View> 
                    </View>
                    
            </Modal>
            <View style={styles.page}>
            <View style={styles.up}>
                <Image
                    source={require('../../assets/images/logo2.png')}
                />
            </View>
            <View style={styles.data}>
                <Text style={styles.dataText}>LUPA KATA SANDI</Text>
            </View>
                <View style={styles.form}>
                    <Text style={styles.textBold}>Masukkan Alamat Email yang Terdaftar</Text>
                    <View style={{alignItems : 'center'}}>
                        <View style={styles.box}>
                            <TextInput style={styles.input} placeholder="contoh:soekarno@gmail.com"/>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=> setModalVisible(true)}>
                        <View style={{width : windowsWidth, alignItems : 'center', marginTop : 23}}>
                            <View style={styles.selanjutnya}>
                                <Text style={styles.selanjutnyaText}>KIRIM</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default LupaKataSandi;

const styles = StyleSheet.create({
    page:{
        width : windowsWidth,
        marginBottom : 20
    },
    up:{
        paddingTop : 22,
        alignItems: 'center'
    },
    data:{
        width : windowsWidth,
        backgroundColor : '#28527A',
        height : 48,
        justifyContent : 'center',
        alignItems : 'center',
        // marginBottom : 53
    },
    dataText:{
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold'
    },
    box:{
        backgroundColor : '#E5E5E5',
        width : 305,
        height : 40,
        borderRadius : 10,
        marginTop : 5,
        paddingLeft : 25
    },
    textBold:{
        left : 47,
        fontSize : 16,
        fontWeight : 'bold',
        color : '#28527A'
    },
    input:{
        fontSize : 14,
        color : '#28527A66'
    },
    form:{
        marginTop : 60
    },
    selanjutnya :{
        marginTop : 20,
        backgroundColor : '#FAD586',
        width : 140,
        height : 40,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius :64
    },
    selanjutnyaText:{
        color : '#28527A',
        fontWeight : 'bold',
    },
    centeredView :{
        flex: 1,
        justifyContent: "center",
        width: windowsWidth,
        height: windowsWidth,
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin:20,
        backgroundColor: "white",
        borderRadius: 20,
        paddingTop: 20,
        paddingLeft:35,
        paddingRight:35,
        paddingBottom:35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        elevation:5,
    },
    closeBtn :{
        marginLeft : 250,
        marginBottom : 20
    },
    btnSeeMore:{
        width: 280, 
        height: 40, 
        backgroundColor : '#FAD586',
        alignItems : 'center',
        justifyContent: 'center',
        borderRadius : 20,
        marginTop : 5
        
    }


})

