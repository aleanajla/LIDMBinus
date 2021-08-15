import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Home } from '../../pages/index.js'

const BrowseAllRewards = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <View style={styles.pages}>
                <Image source = {require('../../assets/icons/arrowBackBlue.png')} style={{marginTop : 15, left:17, width : 34, height:34}}/>
                <View style={styles.boxCoin}>
                    <View style={styles.top}>
                        <Image source = {require('../../assets/images/trophy.png')} style={{width:20, height:20, marginLeft:12}}/>
                        <Text style={{color : '#FFFFFF', fontWeight : 'bold', fontSize : 15, marginLeft:5}}>Silver</Text>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={{color:'white', fontSize : 14}}>My Coins</Text>
                        <View style={styles.coin}>
                            <Image source = {require('../../assets/images/coins2.png')}/>
                            <Text style={styles.coin2}>542</Text>
                        </View>
                        <Text style={{color:'white', fontSize : 14}}>Available untill 29 Novmber 2021</Text>
                    </View>
                </View>
                <Text style={styles.reward}>Reward Exchange</Text>
                <View style={styles.food}>
                <Text style={styles.foodTitle}>Food</Text>
                    <ScrollView horizontal={true}>
                        <View style={styles.box}>
                            <View style={styles.boxTop}>
                                <Image source = {require('../../assets/images/shopee.png')}/>
                            </View>
                            <View style={styles.bottom2}>
                            <Text style={styles.title}>Shopee</Text>
                            <Text style={styles.desc}>eVoucher Shopee Food 25k</Text>
                            <Text style={styles.desc}>100 Points</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.food}>
                <Text style={styles.foodTitle}>Food</Text>
                    <ScrollView horizontal={true}>
                        <View style={styles.box}>
                            <View style={styles.boxTop}>
                                {/* <Image source = {require('../../assets/images/shopee.png')}/> */}
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.food}>
                <Text style={styles.foodTitle}>Food</Text>
                    <ScrollView horizontal={true}>
                        <View style={styles.box}>
                            <View style={styles.boxTop}>
                                {/* <Image source = {require('../../assets/images/shopee.png')}/> */}
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}

export default BrowseAllRewards;

const styles = StyleSheet.create({
    pages:{
      backgroundColor : 'white',
      height : '100%' 
    },
    boxCoin:{
        width : 315,
        height : 146,
        backgroundColor : '#28527A',
        borderRadius : 20,
        marginTop : 26,
        left : 38
    },
    top:{
        top : 8,
        left : 11,
        backgroundColor : '#022E57',
        width : 90,
        height : 30,
        borderRadius : 10,
        flexDirection : 'row',
        alignItems : 'center'
    },
    bottom:{
        justifyContent : 'center',
        alignItems : 'center',
        top : 7
    },
    coin:{
        flexDirection : 'row',
        alignItems : 'center'
    },
    coin2:{
        left : 7,
        fontSize : 35,
        color : 'white',
        fontWeight : 'bold'
    },
    reward:{
        color : '#28527A',
        fontSize : 23,
        fontWeight :'bold',
        left : 18,
        marginTop : 20
    },
    box:{
        width : 131,
        height : 137,
        marginLeft : 17,
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 2, 
        //     height: 4
        // },
        // shadowOpacity: 0.2,
        // shadowRadius: 5,
        // elevation:10
    },
    foodTitle:{
        fontSize : 20, 
        color : '#28527A', 
        fontWeight : 'bold', 
        left : 18,
        marginTop : 12,
        marginBottom : 12
    },
    boxTop:{
        backgroundColor : '#F6F5F5',
        height : 68,
        justifyContent : 'center',
        alignItems : 'center'
    },
    title:{
        width : '100%',
        color : '#022E57',
        fontSize : 15,
        fontWeight : 'bold'
    },
    desc:{
        width : '100%',
        color : '#022E57',
        fontSize : 12
    },
    bottom2:{
        width : '100%',
        height : '100%',
        color : 'E5E5E5'
    }
})