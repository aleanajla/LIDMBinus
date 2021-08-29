import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, paddingTop, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Home } from '../../pages/index.js'
import { Button } from 'react-native-elements';

const SignIn = () => {
    const navigation = useNavigation();
    const [textInputPassword, setTextInputPassword] = useState('');
    const [textInputEmail, setTextInputEmail] = useState('');

    const checkTextInput = () => {
        //Check for the Email TextInput
        if (!textInputEmail.trim()) {
          alert('Masukkan Email');
          return;
        }
        //Check for the Password TextInput
        if (!textInputPassword.trim()) {
          alert('Masukkan kata sandi');
          return;
        }
        //Checked Successfully
        //Do whatever you want
        navigation.navigate('MainApp');
    };

    return (
        <View style={styles.page}>
            <View style={styles.up}>
                <Image
                    source={require('../../assets/images/logo.png')}
                />
            </View>
            <View style={styles.loginText}>
                <Text style={styles.textBold}>Email</Text>
                <View style={styles.box}>
                    <TextInput 
                    style={styles.input} 
                    onChangeText={(value) => setTextInputEmail(value)}
                    underlineColorAndroid="transparent" placeholder="Email"/>
                </View>
                <Text style={[styles.textBold, {paddingTop:31}]}>Kata Sandi</Text>
                <View style={styles.box}>
                    <TextInput 
                    style={styles.input}
                    secureTextEntry = {true}
                    onChangeText={(value) => setTextInputPassword(value)}
                    underlineColorAndroid="transparent"
                    placeholder="Password"/>
                </View>
            </View>
            <View style={styles.down}>
                {/* <TouchableOpacity onPress={()=>{navigation.navigate('MainApp',{type:''});}} style={styles.conClose}>
                    <Text style={styles.text}>MASUK</Text>
                </TouchableOpacity> */}
                <View style={{alignItems : 'center'}}>
                    <View style={styles.button}>
                        <Button 
                            title="MASUK"
                            type="clear"
                            onPress={checkTextInput}
                            color='white' 
                            buttonStyle={{color : 'white'}}
                            containerStyle={{borderRadius:20, width : 140, height:40, justifyContent : 'center'}}
                            titleStyle={{color : '#28527A', fontWeight : 'bold', fontSize : 15}}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={()=>{navigation.navigate('LupaKataSandi',{type:''});}}>
                    <Text style={{fontSize: 15, marginTop : 10, color: '#28527A', fontWeight: 'bold'}}>Lupa Kata Sandi? </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    page:{
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
        alignItems : 'center',
        // backgroundColor : 'red',
        height : 150,
        justifyContent : 'center'
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
    button:{
        backgroundColor : '#FAD586',
        borderRadius :64,
        justifyContent : 'center'
    }
})
