import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Profile } from '../../pages/index.js'
import CertificateListView from '../../components/CertificateListView'
import { certificateData } from '../../assets/jsonData/certificateData'

const Certificate = () => {
    const navigation = useNavigation();
    return(
        <View style = {styles.outerbox}>
            <View style = {styles.header}>
                <TouchableOpacity
                    onPress={()=>{navigation.navigate('Profile',{type:''});}}
                >
                    <Image source={require('../../assets/icons/arrowBackBlack.png')} />
                </TouchableOpacity>
                <Text style = {{color:'#022E57', fontSize:25, fontWeight:'bold', marginLeft:75}}>My Certificate</Text>
            </View>
            <View style = {styles.certifCon}>
                <CertificateListView
                    itemList = {certificateData}
                />
            </View>
        </View>
    )
}

export default Certificate;

const styles = StyleSheet.create({
    outerbox:{
        paddingTop:20
    },
    header:{
        flexDirection:'row',
        paddingLeft : 20,
        alignItems:'center'
    },
    certifCon:{
        marginTop:20,
        alignItems:'center'
    },
})