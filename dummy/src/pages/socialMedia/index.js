import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { ProfileSettings } from '../../pages/index.js'
import { useNavigation } from '@react-navigation/core'

const SocialMedia = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={StyleSheet.pages}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('ProfileSettings',{type:''});}}>
                        <Image source = {require('../../assets/icons/arrowBack.png')} style={{width : 24, height:24}}/>
                    </TouchableOpacity>
                    <Text style={styles.title3}>SAVE</Text>
                </View>
            </View>
            <View style={styles.inside}>
                <View style={styles.title}>
                    <Text style={styles.titleTxt}>Social Media</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Facebook</Text>
                    <View style={styles.box}>
                        <TextInput style={styles.input} />
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Instagram</Text>
                    <View style={styles.box}>
                        <TextInput style={styles.input} />
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Twitter</Text>
                    <View style={styles.box}>
                        <TextInput style={styles.input} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default SocialMedia;

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
        // fontWeight : 'bold',
        fontSize : 20,
        // left : 105
    },
    inside:{
        paddingLeft : 20,
        paddingRight : 20
    },
    title:{
        // height : 80,
        // backgroundColor : 'grey',
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
        marginBottom : 30
    },
    container :{
        // marginTop : 30
    },
    text:{
        fontSize : 18,
        color : '#022E57',
        fontWeight : 'bold',
        paddingLeft : 7,
        marginBottom : 10
    },
    box:{
        height: 35,
        width: '100%',
        backgroundColor: '#E5E5E5',
        borderRadius : 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:7,
        marginBottom : 19
    },
    input:{
        marginLeft: 10,
    }
    
})