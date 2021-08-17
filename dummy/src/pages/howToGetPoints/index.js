import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType'
import { Home } from '../../assets'

const howToGetPoints = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <View style ={{padding:15,margin:10}}>
                <TouchableOpacity
                    onPress={()=>{navigation.navigate('Home',{type:''});}}
                >
                    <Image source ={require('../../assets/icons/arrowBackBlue.png')} style = {{width:30,height:30}} />
                </TouchableOpacity>
                <View style = {[styles.rewardLevel, styles.shadowBox]}>
                    <View>
                        <Text style = {{fontSize:20, fontWeight:'bold', color: '#022E57',textAlign:'center'}}>Reward Level</Text>
                    </View>
                    <View style = {styles.imgLevel}>
                        <View style ={styles.imgBox}>
                            <Image source = {require('../../assets/icons/bronze.png')} />
                            <Text style = {styles.titleLevel}>Bronze</Text>
                            <Text style = {styles.points}>0 PTS</Text>
                        </View>
                        <View style ={styles.imgBox}>
                            <Image source = {require('../../assets/icons/Silver.png')} />
                            <Text style = {styles.titleLevel}>Silver</Text>
                            <Text style = {styles.points}>350 PTS</Text>
                        </View>
                        <View style ={styles.imgBox}>
                            <Image source = {require('../../assets/icons/gold.png')} />
                            <Text style = {styles.titleLevel}>Gold</Text>
                            <Text style = {styles.points}>800 PTS</Text>
                        </View>
                    <View style ={styles.imgBox}>
                            <Image source = {require('../../assets/icons/Platinum.png')} />
                            <Text style = {styles.titleLevel}>Platinum</Text>
                            <Text style = {styles.points}>4000 PTS</Text>
                    </View>
                    </View>
                </View>
                <View style ={[styles.howToEarnPoint, styles.shadowBox]}>
                    <Text style ={{fontSize:20, fontWeight:'bold',color:'#022E57',marginTop:10}}>How to Get Points?</Text>
                    <View style ={styles.imgBox2}>
                        <View style = {styles.perBox}>
                            <Image source = {require('../../assets/icons/select.png')} />
                            <Text style= {[{width:253,height:48}, styles.ket]}>Select the content of programs provided by Kampus Merdeka that can be accessed from sub-menu programs on home page</Text>
                        </View>
                        <View style = {styles.perBox}>
                            <Image source ={require('../../assets/icons/share.png')}/>
                            <Text style={[{width:252, height:34}, styles.ket]}>Select share content on social media that available </Text>
                        </View>
                        <View style = {styles.perBox}>
                            <Image source={require('../../assets/icons/getPoints.png')}/>
                            <Text style ={[{width:191,height:20}, styles.ket]}>Users get 5 points for every share </Text>
                        </View>
                    </View>
                </View>
                <View style = {[styles.HowItWorks, styles.shadowBox]}>
                    <Text style = {{color:'#022E57', fontSize:20, textAlign:'center', fontWeight:'bold',marginTop:20}}>How it Works?</Text>
                    <View style ={styles.imgBox3}>
                        <View style = {styles.perBox2}>
                            <Image source={require('../../assets/icons/points.png')}/>
                            <Text style = {[{width:257, height:33}, styles.ket]}>Users get 5 points for every share of content provided by Kampus Merdeka on social media</Text>
                        </View>
                        <View style = {styles.perBox2}>
                            <Image source={require('../../assets/icons/gifts.png')} />
                            <Text style = {[{width:257, height:33}, styles.ket]}>Redeem the points to various deals and promotions</Text>
                        </View>
                        <View style = {styles.perBox2}>
                            <Image source ={require('../../assets/icons/levelUp.png')} />
                            <Text style = {[{width:257, height:33}, styles.ket]}>Earn enough points to levels up and unclock the exclusive deals and promotions</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default howToGetPoints;

const styles = StyleSheet.create({
    rewardLevel:{
        backgroundColor: '#FFFFFF',
        width:339,
        height:154,
        paddingLeft:15,
        paddingRight:15,
        justifyContent: 'center',
        marginTop:20,
        borderRadius:20
    }, 
    imgLevel: {
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingTop:15,
    },
    titleLevel:{
        fontSize:15,
        fontWeight:'bold',
        color: '#000000B5',
    },
    imgBox:{
        alignItems:'center'
    },
    shadowBox: {
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:10
    },
    points:{
        fontSize:10
    },
    howToEarnPoint:{
        alignItems:'center',
        height:210,
        width:339,
        marginTop:25,
        backgroundColor: '#FFFFFF',
        borderRadius:20,
    },
    imgBox2:{
        marginTop:10
    },
    perBox:{
        flexDirection:'row',
        paddingBottom:15,
        alignItems:'center'
    },
    ket:{
        marginLeft:15,
        fontSize:13
    },
    HowItWorks:{
        width:339,
        height:307,
        backgroundColor: '#FFFFFF',
        marginTop:20,
        borderRadius:20
    },
    imgBox3:{
        margin:10
    },
    perBox2:{
        flexDirection: 'row',
        paddingTop:20,
        paddingBottom:10
    }

})