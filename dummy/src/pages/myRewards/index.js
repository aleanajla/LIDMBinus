import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Profile } from '../../pages/index.js'

const myRewards = () => {
    const navigation = useNavigation();
    return(
        <View style= {styles.outer}>
            <View style= {styles.header}>  
                <TouchableOpacity
                    onPress={()=>{navigation.navigate('Profile',{type:''});}}
                    >
                    <Image source = {require('../../assets/icons/arrowBackBlack.png')} />
                </TouchableOpacity>
                <Text style={{color:'#022E57',fontSize:25,fontWeight:'bold', marginLeft:80}}>My Rewards</Text>
            </View>
            <View style= {styles.boxContent}>
                <View style={styles.eachBox}>
                    <Image source= {require('../../assets/icons/gojek.png')} style={styles.img}/>
                    <View style = {styles.ket}>
                        <Text style= {styles.company}>Gojek</Text>
                        <Text style={styles.details}>eVoucher Gofood 25k</Text>
                        <Text style={styles.untillDate}>Valid untill 29 September 2021</Text>
                    </View>
                    <View style = {styles.btnUse}>
                        <Text style= {styles.textUse}>Use</Text>
                    </View>
                </View>

                <View style={styles.eachBox}>
                    <Image source= {require('../../assets/icons/gojek.png')} style={styles.img}/>
                    <View style = {styles.ket}>
                        <Text style= {styles.company}>Gojek</Text>
                        <Text style={styles.details}>eVoucher Gofood 50k</Text>
                        <Text style={styles.untillDate}>Valid untill 25 September 2021</Text>
                    </View>
                    <View style = {styles.btnUse}>
                        <Text style= {styles.textUse}>Use</Text>
                    </View>
                </View>

                <View style={styles.eachBox}>
                    <Image source={require('../../assets/icons/udemy.png')} style={styles.img}/>
                    <View style = {styles.ket}>
                        <Text style= {styles.company}>Udemy</Text>
                        <Text style={styles.details}>eVoucher Udemy 100k</Text>
                        <Text style={styles.untillDate}>Valid untill 20 August 2021</Text>
                    </View>
                    <View style = {styles.btnUse}>
                        <Text style= {styles.textUse}>Use</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default myRewards;

const styles = StyleSheet.create({
    outer:{
        padding:20
    },
    header:{
        flexDirection:'row'
    },
    eachBox:{
        flexDirection:'row',
        marginBottom:20,
        backgroundColor: '#FFFFFF',
        borderRadius:10,
        width:334,
        height:98
    },
    boxContent:{
        margin:10,
        // marginTop:15,
        alignItems: 'center',
        paddingTop:20,
    },
    ket:{
        marginLeft:15,
        justifyContent:'center'
    },
    company:{
        fontSize:12,
        color:'#022E57',
        fontWeight:'bold'
    },
    untillDate:{
        fontSize:10,
        marginTop:10,
        color:'#28527AB0'
    },
    img:{
        marginTop:15,
        marginLeft:15
    },
    details:{
        color:WARNA_SEKUNDER
    },
    btnUse:{
        backgroundColor:'#28527A',
        width:52,
        height:26,
        justifyContent:'center',
        borderRadius:10,
        marginTop:10,
        marginLeft:25
    },
    textUse:{
        color:'#FFFFFF',
        textAlign:'center'
    }
})