import React from 'react'
import { useCallback } from 'react';
import { StyleSheet, Text, View,Linking, Alert, Button } from 'react-native'

const webURL = 'https://google.com';

const OpenURLButton = ({ url, children}) => {
    const handlePress = useCallback(async() => {
        const supported = await Linking.canOpenURL(url);
        if(supported){
            await Linking.openURL(url);
        }else{
            Alert.alert('URL Error');
        }
    }, [url]);

    return <Button title={children} onPress={handlePress}/>
}

const Schedule = () => {
    return (
        <View style={{ flex: 1}}>
            <View>
                <OpenURLButton url={webURL}>Open Supported URL</OpenURLButton>
            </View>
        </View>
    )
}

export default Schedule; 

const styles = StyleSheet.create({})
