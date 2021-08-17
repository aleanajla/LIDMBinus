import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Profile } from '../../pages/index.js'

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
                <View style = {[styles.box, styles.shadowBox]}>
                    <View>
                        <Text style = {styles.title}>Internship Sofware Engineering in Tokopedia</Text>
                        <Text style = {styles.date}>25 July 2021</Text>
                    </View>
                    <View>
                        <Image source = {require('../../assets/icons/download.png')} style ={styles.download}/>
                    </View>
                </View>

                <View style = {[styles.box, styles.shadowBox]}>
                    <View>
                        <Text style = {styles.title}>Independent study program in Dicoding (Back-end Engineer)</Text>
                        <Text style = {styles.date}>20 Agustus 2020</Text>
                    </View>
                    <View>
                        <Image source = {require('../../assets/icons/download.png')} style ={styles.download}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Certificate;

const styles = StyleSheet.create({
    outerbox:{
        padding:20
    },
    header:{
        flexDirection:'row',
    },
    certifCon:{
        marginTop:20,
        alignItems:'center'
    },
    box:{
        flexDirection:'row',
        width:350,
        height:75,
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        marginBottom:15,
        paddingTop:10,
        paddingLeft:15
    },
    title:{
        fontSize:15,
        fontWeight:'800',
        width:272,
        height:37,
        color:'#022E57'
    },
    date:{
        fontSize:12,
        marginTop:5
    },
    download:{
        marginTop:15,
        marginLeft:15
    },
    shadowBox:{
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:10
    }
})