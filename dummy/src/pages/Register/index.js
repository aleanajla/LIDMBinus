import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView,
    Alert,
    Image
} from 'react-native'

const Register = () => {
    return (
        <View style={{flexDirection: row, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../images/logo-kampus-merdeka.png')}/>

            <Button 
                onPress = {onPressCreateAccount}
                title = "Create account"
            />
            <Text style={style.underline}>Have an account already? 
                <Button 
                title = "Log in"
                onPress = {onPressLogin}
                
                />
            </Text>
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    button:{
        color: '#FAD586'
    }

    );