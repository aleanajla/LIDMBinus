import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Button } from 'react-native-elements';

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;


const Register2 = () =>{
    const navigation = useNavigation();
    const [textInputPassword, setTextInputPassword] = useState('');
    const [textInputEmail, setTextInputEmail] = useState('');
    const [textInputCheckEmail, setTextInputCheckEmail] = useState('');
    const checkTextInput = () => {
        //Check for the Password TextInput
        if (!textInputEmail.trim()) {
          alert('Masukkan Email');
          return;
        }
        if(!textInputCheckEmail.trim()){
            alert('Masukkan Cek Email');
            return;
        }
        if(textInputEmail.trim() != textInputCheckEmail.trim()){
            alert('Alamat email tidak cocok');
            return;
        }
        //Check for the Email TextInput
        if (!textInputPassword.trim()) {
          alert('Masukkan kata sandi');
          return;
        }
        //Checked Successfully
        //Do whatever you want
        navigation.navigate("Register3");
    };

    return (
        <ScrollView>
            <View style={styles.page}>
                <View style={styles.up}>
                    <Image
                        source={require('../../assets/images/logo2.png')}
                    />
                </View>
                <View style={styles.data}>
                    <Text style={styles.dataText}>DATA</Text>
                </View>
                <View style={styles.loginText}>
                    <View style={styles.container}>
                        <Text style={styles.textBold}>Email</Text>
                        <View style={styles.box}>
                            <TextInput 
                             onChangeText={
                                    (value) => setTextInputEmail(value)
                                }
                              underlineColorAndroid="transparent"
                              style={styles.input} placeholder="Masukkan alamat email yang aktif"/>
                        </View>
                        <Text style={styles.little}>Pastikan alamat email ini dapat anda akses</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.textBold}>Ketik Ulang Email</Text>
                        <View style={styles.box}>
                            <TextInput style={styles.input}
                            onChangeText={
                                (value) => setTextInputCheckEmail(value)
                              }
                              underlineColorAndroid="transparent"
                            placeholder="Masukkan alamat email yang aktif"/>
                        </View>
                        <Text style={styles.little}>Pastikan alamat email ini dapat anda akses</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.textBold}>Kata Sandi</Text>
                        <View style={styles.box}>
                            <TextInput 
                            onChangeText={
                                (value) => setTextInputPassword(value)
                              }
                              underlineColorAndroid="transparent"
                              style={styles.input} placeholder="Kata Sandi"
                              secureTextEntry = {true}
                              />
                        </View>
                        <Text style={styles.little}>Minimal 8 karakter, dan mengandung kombinasi huruf kecil, huruf besar dan angka</Text>
                    </View>
                </View>
                <View style={{alignItems : 'center'}}>
                    <View style={styles.button}>
                        <Button 
                            title="SELANJUTNYA"
                            type="clear"
                            onPress={checkTextInput}
                            color='white' 
                            buttonStyle={{color : 'white'}}
                            containerStyle={{borderRadius:20, width : 140, height:40, justifyContent : 'center'}}
                            titleStyle={{color : '#28527A', fontWeight : 'bold', fontSize : 15}}
                        />
                    </View>
                </View>
                {/* <TouchableOpacity onPress={()=>{navigation.navigate("Register3", {type:''});}} style={styles.conClose}>
                    <View style={{width : windowsWidth, alignItems : 'center', marginTop : 23}}>
                        <View style={styles.selanjutnya}>
                            <Text style={styles.selanjutnyaText}>SELANJUTNYA</Text>
                        </View>
                    </View>
                </TouchableOpacity> */}
            </View>
        </ScrollView>
    )
}

export default Register2;

const styles = StyleSheet.create({
    page:{
        paddingBottom : 50
    },
    loginText:{
        paddingRight : 50,
        paddingLeft : 50,
        // paddingTop : 40,
    },
    textBold:{
        fontSize : 18,
        fontWeight : 'bold',
        color: '#28527A',
        padding : 8
    },
    down:{
        alignItems : 'center',
        width: 150,
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
    little:{
        color: "#28527A66",
        fontSize:10,
        paddingLeft : 15,
    },
    container:{
        marginBottom: 25,
    },
    button:{
        backgroundColor : '#FAD586',
        borderRadius :64,
        justifyContent : 'center'
    }

})
