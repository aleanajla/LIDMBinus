import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, paddingTop, TextInput } from 'react-native'

const signIn = () => {
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
                    <TextInput style={styles.input} placeholder="Email"/>
                </View>
                <Text style={[styles.textBold, {paddingTop:31}]}>Password</Text>
                <View style={styles.box}>
                    <TextInput style={styles.input} placeholder="Password"/>
                </View>
            </View>
            <View style={[ styles.down, {paddingTop: 30}]}>
                <TouchableOpacity>
                    <Text style={styles.text}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>SIGN UP</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{fontSize: 15, color: '#28527A', fontWeight: 'bold'}}>Forgot Password? </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default signIn;

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
