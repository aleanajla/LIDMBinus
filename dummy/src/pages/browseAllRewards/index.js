import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Home, ConTerms } from '../../pages/index.js'
import FoodVoucherListView from '../../components/foodVoucherListView'
import { foodVoucherData } from '../../assets/jsonData/foodVoucherData'
import EducationVoucherListView from '../../components/EducationVoucherListView'
import { educationVoucherData } from '../../assets/jsonData/educationVoucherData'
import StationaryVoucherListView from '../../components/StationaryListView'
import { stationaryVoucherData } from '../../assets/jsonData/stationaryVoucherData'

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
                        <Text style={{color : '#FFFFFF', fontWeight : 'bold', fontSize : 15, marginLeft:5}}>Perak</Text>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={{color:'white', fontSize : 14}}>Koin Saya</Text>
                        <View style={styles.coin}>
                            <Image source = {require('../../assets/images/coins2.png')}/>
                            <Text style={styles.coin2}>542</Text>
                        </View>
                        <Text style={{color:'white', fontSize : 14}}>tersedia hingga 29 November 2021</Text>
                    </View>
                </View>
                <Text style={styles.reward}>Pertukaran Hadiah</Text>
                <View style={styles.food}>
                    <Text style={styles.foodTitle}>Makanan</Text>
                    <ScrollView horizontal={true}>
                    <View style={styles.row}>
                        <FoodVoucherListView
                            itemList = {foodVoucherData}
                            navigation={navigation}
                        />
                        
                    </View>
                    </ScrollView>
                </View>
                <View style={styles.food}>
                    <Text style={styles.foodTitle}>Edukasi</Text>
                    <ScrollView horizontal={true}>
                    <View style={styles.row}>
                        <EducationVoucherListView
                            itemList = {educationVoucherData}
                            navigation={navigation}
                        />
                    </View>
                    </ScrollView>
                </View>
                <View style={styles.food}>
                    <Text style={styles.foodTitle}>Perlengkapan tulis</Text>
                    <ScrollView horizontal={true}>
                    <View style={styles.row}>
                        <StationaryVoucherListView
                            itemList = {stationaryVoucherData}
                            navigation={navigation}
                        />
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