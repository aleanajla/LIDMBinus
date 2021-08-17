import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Home, ConTerms } from '../../pages/index.js'

const BrowseAllRewards = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <View style={styles.pages}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Home',{type:''});}}>
                    <Image source = {require('../../assets/icons/arrowBackBlue.png')} style={{marginTop : 15, left:17, width : 34, height:34}}/>
                </TouchableOpacity>
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
                    <View style={styles.row}>
                        <View style={styles.container}>
                            <View style={styles.boxTop}>
                                <Image source = {require('../../assets/images/shopee.png')}/>
                            </View>
                            <View style={styles.boxBottom}>
                                <Text style={styles.title}>Shopee</Text>
                                <Text style={styles.desc}>eVoucher Shopee Food 25k</Text>
                                <Text style={styles.desc}>100 Points</Text>
                                <View style={styles.reedemBox}>
                                    <Text style={styles.reedem}>Reedem</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=>{navigation.navigate('ConTerms',{type:''});}}>
                        <View style={styles.container}>
                            <View style={styles.boxTop}>
                                <Image source = {require('../../assets/images/gojek.png')}/>
                            </View>
                            <View style={styles.boxBottom}>
                                <Text style={styles.title}>Gojek</Text>
                                <Text style={styles.desc}>eVoucher Gofood 25k</Text>
                                <Text style={styles.desc}>100 Points</Text>
                                <View style={styles.reedemBox}>
                                    <Text style={styles.reedem}>Reedem</Text>
                                </View>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <View style={styles.container}>
                            <View style={styles.boxTop}>
                                <Image source = {require('../../assets/images/gojek.png')}/>
                            </View>
                            <View style={styles.boxBottom}>
                                <Text style={styles.title}>Shopee</Text>
                                <Text style={styles.desc}>eVoucher gofood 75k</Text>
                                <Text style={styles.desc}>300 Points</Text>
                                <View style={styles.reedemBox}>
                                    <Text style={styles.reedem}>Reedem</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    </ScrollView>
                </View>
                <View style={styles.food}>
                    <Text style={styles.foodTitle}>Education</Text>
                    <ScrollView horizontal={true}>
                    <View style={styles.row}>
                        <View style={styles.container}>
                            <View style={styles.boxTop}>
                                <Image source = {require('../../assets/images/dicoding.png')}/>
                            </View>
                            <View style={styles.boxBottom}>
                                <Text style={styles.title}>Dicoding</Text>
                                <Text style={styles.desc}>eVoucher Course 150k</Text>
                                <Text style={styles.desc}>500 Points</Text>
                                <View style={styles.reedemBox}>
                                    <Text style={styles.reedem}>Reedem</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.boxTop}>
                                <Image source = {require('../../assets/images/arkademi.png')}/>
                            </View>
                            <View style={styles.boxBottom}>
                                <Text style={styles.title}>Arkademi</Text>
                                <Text style={styles.desc}>eVoucher Course 150k</Text>
                                <Text style={styles.desc}>500 Points</Text>
                                <View style={styles.reedemBox}>
                                    <Text style={styles.reedem}>Reedem</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.boxTop}>
                                <Image source = {require('../../assets/images/udemy.png')}/>
                            </View>
                            <View style={styles.boxBottom}>
                                <Text style={styles.title}>udemy</Text>
                                <Text style={styles.desc}>eVoucher Course 150k</Text>
                                <Text style={styles.desc}>500 Points</Text>
                                <View style={styles.reedemBox}>
                                    <Text style={styles.reedem}>Reedem</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    </ScrollView>
                </View>
                <View style={styles.food}>
                    <Text style={styles.foodTitle}>Stationary</Text>
                    <ScrollView horizontal={true}>
                    <View style={styles.row}>
                        <View style={styles.container}>
                            <View style={styles.boxTop}>
                                <Image source = {require('../../assets/images/gramedia.png')}/>
                            </View>
                            <View style={styles.boxBottom}>
                                <Text style={styles.title}>Gramedia</Text>
                                <Text style={styles.desc}>eVoucher Digital 25k</Text>
                                <Text style={styles.desc}>100 Points</Text>
                                <View style={styles.reedemBox}>
                                    <Text style={styles.reedem}>Reedem</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.boxTop}>
                                <Image source = {require('../../assets/images/gramedia.png')}/>
                            </View>
                            <View style={styles.boxBottom}>
                                <Text style={styles.title}>Gramedia</Text>
                                <Text style={styles.desc}>eVoucher Digital 50k</Text>
                                <Text style={styles.desc}>200 Points</Text>
                                <View style={styles.reedemBox}>
                                    <Text style={styles.reedem}>Reedem</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.boxTop}>
                                <Image source = {require('../../assets/images/gramedia.png')}/>
                            </View>
                            <View style={styles.boxBottom}>
                                <Text style={styles.title}>Gramedia</Text>
                                <Text style={styles.desc}>eVoucher Digital 50k</Text>
                                <Text style={styles.desc}>200 Points</Text>
                                <View style={styles.reedemBox}>
                                    <Text style={styles.reedem}>Reedem</Text>
                                </View>
                            </View>
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
    foodTitle:{
        fontSize : 18, 
        color : '#28527A', 
        fontWeight : 'bold', 
        left : 18,
        marginTop : 8,
        marginBottom : 12
    },
    row:{
        flexDirection : 'row'
    },
    container:{
        width : 161,
        height : 167,
        backgroundColor : '#F6F5F5',
        left : 17,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:10,
        marginBottom : 20,
        marginRight : 17
    },
    boxTop:{
        width : '100%',
        height : 70,
        justifyContent : 'center',
        alignItems : 'center'
    },
    boxBottom:{
        width : '100%',
        backgroundColor : 'white',
        // height : '100%'
        height : 97,
        padding : 8,
    },
    title:{
        fontSize : 15,
        color : '#022E57',
        fontWeight : 'bold'
    },
    desc:{
        fontSize : 11,
        color : '#022E57'
    },
    reedemBox:{
        width : 71,
        backgroundColor : '#FAD586',
        height : 23,
        marginTop : 4,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    reedem:{
        fontSize : 12,
        color : '#28527A',
        fontWeight : 'bold'
    }
    
})