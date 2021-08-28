import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, Dimensions, Picker} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
// import { useState } from 'react/cjs/react.development'
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType'
import CheckBox from 'react-native-check-box'
import { useNavigation } from '@react-navigation/core'
import Modal from 'react-native-modal'
import { Button } from 'react-native-elements';

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const Register3 = () => {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);
    const [selectedPicker, setSelectedPicker] = useState("tgl");
    const [modalVisible, setModalVisible] = useState(false);

    const [textInputUniv, setTextInputUniv] = useState('');
    const [textInputProdi, setTextInputProdi] = useState('');
    const [textInputNim, setTextInputNim] = useState('');
    const [textInputNik, setTextInputNik] = useState('');

    const checkTextInput = () => {
        if (!textInputUniv.trim()) {
            alert('Masukkan Perguruan Tinggi Asal');
            return;
        }
          if (!textInputProdi.trim()) {
            alert('Masukkan Program Studi');
            return;
        }
          if (!textInputNim.trim()) {
            alert('Masukkan Nomor Induk Mahasiswa');
            return;
        }
        if (!textInputNik.trim()) {
            alert('Masukkan Nomor Induk Kependudukan');
            return;
        }
        setModalVisible(true);
    }
    
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
                            <Image source = {require('../../assets/icons/checked.png')} style={{width : 100, height:100}}/>
                            <Text style={{fontSize:16, color:WARNA_SEKUNDER, fontWeight:'bold', marginTop:15, textAlign : 'center'}}>Akun Anda Telah Berhasil Dibuat</Text>
                            <TouchableOpacity onPress={()=>{navigation.navigate('SignIn',{type:''});}}>
                                <View style = {styles.btnSeeMore}>
                                    <Text style={{color : '#28527A', fontWeight:'bold', fontSize : 15}}>SIGN IN</Text>
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
                <Text style={styles.dataText}>DATA</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.textBold}>Perguruan Tinggi Asal</Text>
                <View style={{alignItems : 'center'}}>
                    <View style={styles.box}>
                        <TextInput onChangeText={
                                    (value) => setTextInputUniv(value)
                                }
                              underlineColorAndroid="transparent"
                              style={styles.input} placeholder="Masukkan perguruan tinggi asal"/>
                    </View>
                </View>
            </View>
            <View style={styles.form}>
                <Text style={styles.textBold}>Program Studi</Text>
                <View style={{alignItems : 'center'}}>
                    <View style={styles.box}>
                        <TextInput 
                        onChangeText={
                            (value) => setTextInputProdi(value)
                        }
                      underlineColorAndroid="transparent"
                      style={styles.input} placeholder="Masukkan program studi"/>
                    </View>
                </View>
            </View>
            <View style={styles.form}>
                <Text style={styles.textBold}>Nomor Induk Mahasiswa (NIM)</Text>
                <View style={{alignItems : 'center'}}>
                    <View style={styles.box}>
                        <TextInput s
                        onChangeText={
                            (value) => setTextInputNim(value)
                        }
                      underlineColorAndroid="transparent"
                      tyle={styles.input} placeholder="Masukkan NIM lengkap"/>
                    </View>
                </View>
            </View>
            <View style={styles.form}>
                <Text style={styles.textBold}>Nomor Induk Kependudukan (NIK)</Text>
                <View style={{alignItems : 'center'}}>
                    <View style={styles.box}>
                        <TextInput 
                        onChangeText={
                            (value) => setTextInputNik(value)
                        }
                      underlineColorAndroid="transparent"
                      style={styles.input} placeholder="Masukkan NIK lengkap"/>
                    </View>
                </View>
            </View>
            <View style={styles.form}>
                <Text style={styles.textBold}>Tanggal Lahir</Text>
                <View style={{alignItems : 'center'}}>
                    <View style={styles.ttl}>
                        <View style={styles.box2}>
                            <TextInput style={styles.input} placeholder="tgl"/>
                            {/* <Picker
                                style={{paddingLeft: 10}}
                                selectedValue={selectedPicker}
                                onValueChange={(itemValue, itemIndex)=> setSelectedPicker(itemValue)}>
                                <Picker.Item label="tgl" value="1"/>
                                <Picker.Item label="1" value="2"/>
                                <Picker.Item label="2" value="3"/>
                                <Picker.Item label="3" value="4"/>
                            </Picker> */}
                            {/* <Text>{selectedPicker}</Text> */}
                        </View>
                        
                        <View style={styles.box3}>
                            <TextInput style={styles.input} placeholder="bulan"/>
                        </View>
                        <View style={styles.box4}>
                            <TextInput style={styles.input} placeholder="tahun"/>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.form}>
                <View style={{flexDirection : 'row', alignItems : 'center'}}>
                    <CheckBox
                        style={{paddingLeft: 50, width : '20%'}}
                        isChecked = {isChecked}
                        onClick= {() => {setIsChecked(!isChecked)}}
                        tintColors={{false: "white", true:"#022E57"}}
                    />
                    <Text style={styles.textBold2}>Dengan ini saya menyetujui Ketentuan Penggunaan dan Kebijakan Privasi dari Kampus Merdeka</Text>
                </View>
                <View style={{alignItems : 'center', marginTop : 20}}>
                    <View style={styles.button}>
                        <Button 
                            title="BUAT AKUN"
                            type="clear"
                            onPress={checkTextInput}
                            color='white' 
                            buttonStyle={{color : 'white'}}
                            containerStyle={{borderRadius:20, width : 140, height:40, justifyContent : 'center'}}
                            titleStyle={{color : '#28527A', fontWeight : 'bold', fontSize : 15}}
                        />
                    </View>
                </View>
            </View>
            
            </View>
        </ScrollView>
    );
}

export default Register3;

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
        marginBottom : 53
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
    box2:{
        backgroundColor : '#E5E5E5',
        borderRadius : 10,
        justifyContent : 'center',
        paddingLeft : 8,
        width : 60,
        height : 40,
        alignItems : 'center'
    },
    box3:{
        backgroundColor : '#E5E5E5',
        width : 117,
        height : 40,
        borderRadius : 10,
        alignItems : 'center'
    },
    box4:{
        backgroundColor : '#E5E5E5',
        width : 87,
        height : 40,
        borderRadius : 10,
        alignItems : 'center'
    },
    ttl:{
        flexDirection : 'row', 
        justifyContent : 'space-between', 
        width : windowsWidth,
        paddingLeft : 47,
        paddingRight : 47,
        marginTop : 5,
    },
    textBold2:{
        // left : 97,
        left: 20,
        fontSize : 13,
        fontWeight : 'bold',
        color : '#28527AE5',
        width : 275,
        // top : 10
    },
    textBold3:{
        fontSize : 16,
        fontWeight : 'bold',
        color : '#28527A',
    },
    form:{
        // marginTop : 53,
        marginBottom : 20
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
        width: 110, 
        height: 35, 
        backgroundColor : '#FAD586',
        alignItems : 'center',
        justifyContent: 'center',
        borderRadius : 20,
        marginTop : 15
        
    },
    button:{
        backgroundColor : '#FAD586',
        borderRadius :64,
        justifyContent : 'center'
    }


})

