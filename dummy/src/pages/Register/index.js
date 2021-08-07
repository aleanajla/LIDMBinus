import React from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView, Alert, Image} from 'react-native'

const register = () => {
    return (
        <View style={{flexDirection: row, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./logo-kampus-merdeka.png')}/>

            <Button 
                onPress = {onPressCreateAccount}
                title = "Create account"
                color = '#FAD586'
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

export default register;

const styles = StyleSheet.create({
    underline: {textDecorationLine: 'underline'},
    
    );