import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, paddingTop } from 'react-native'

const createAccount = () => {
    return (
        <View style={styles.page}>
            <View style={{paddingBottom: 50}}>
                <Image
                source={require('../../assets/images/logo.png')}
                />
            </View>
            <View style={styles.border}>
                <TouchableOpacity style={styles.border}>
                    <Text style={{fontSize : 15, color : '#28527A'}}>Create Account</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.loginText}>
                <Text style={{fontSize: 13, color: '#28527A'}}>Have an account already? </Text>
                <Text style={{fontSize: 13, color: '#28527A', textDecorationLine: 'underline'}}>Login</Text>
            </View>
        </View>
    )
}

export default createAccount;

const styles = StyleSheet.create({
    page:{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    border:{
        backgroundColor: '#FAD586',
        width: 220,
        marginTop: 5,
        marginBottom: 5,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: 'center'
    },
    loginText:{
        flexDirection: 'row',
        paddingTop: 5
    }
    
})