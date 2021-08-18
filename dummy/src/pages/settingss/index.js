import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { ProfileSettings } from '../../pages/index.js'
import { useNavigation } from '@react-navigation/core'

const Settingss = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={styles.pages}>
                <View style = {styles.header}>
                    <Image source = {require('../../assets/icons/close.png')} style = {styles.close}/>
                    <Text style={styles.settings}> SETTINGS </Text>
                    {/* <Text style={styles.save}> SAVE </Text> */}
                </View>
                <View style = {styles.main}>
                    <View style={styles.imgText}>
                        <Image source = {require('../../assets/icons/person_outline.png')} style = {styles.img} />
                        <Text style = {styles.headA}>Account</Text>
                    </View>
                    <View style = {[styles.garis]}/>
                    <View style = {styles.accountCon}>
                        <TouchableOpacity
                            onPress = {()=>{
                                navigation.navigate('ProfileSettings',{type:''})
                            }}> 
                            <View style={styles.container}>
                                <Text style={styles.text}>Profile</Text>
                                <Image source = {require('../../assets/icons/arrowForward.png')}/>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.container}>
                            <Text style={styles.text}>Complete the Document</Text>
                            <Image source = {require('../../assets/icons/arrowForward.png')}/>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.text}>Change Password</Text>
                            <Image source = {require('../../assets/icons/arrowForward.png')}/>
                        </View>
                    </View>
                    <View style={styles.imgText}>
                        <Image source ={require('../../assets/icons/bell.png')} style = {styles.bell} />
                        <Text style = {styles.head}>Notification</Text>
                    </View>
                    <View style = {[styles.garis]}/>
                    <View style = {styles.notifCon}>
                        <View style={styles.container}>
                            <Text style={styles.text}>Notification</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.woyofa}>
                    <View style={styles.imgTextL}>
                        <View style={styles.imgText}>
                            <Image source = {require('../../assets/icons/logout.png')} style ={{marginTop:7}} />
                            <Text style={styles.logout}>Log Out</Text>
                        </View>
                    </View>
                </View>  
            </View>
        </ScrollView>
    );
}

export default Settingss;

const styles = StyleSheet.create({
    pages:{
        display: 'flex',
        flexDirection : 'column',
        // alignItems : 'center',
    },
    main:{
        margin: 25
    },
    header:{
        display: 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        // justifyContent: 'space-between',
        paddingRight: 28,
        paddingLeft : 28,
        backgroundColor: WARNA_SEKUNDER,
        height : 84
    },
    head:{
        color: '#022E57',
        fontSize: 25,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    headA:{
        color: WARNA_SEKUNDER,
        fontSize: 25,
        marginLeft: 10,
        marginTop: 5,
        color: '#022E57',
        fontWeight: 'bold'
    },
    imgText:{
        display: 'flex',
        flexDirection : 'row',
        padding: 10,
    },
    img:{ 
        width: 30,
        height: 30,
        marginTop:8
    },
    imgTextL:{
        width: 130,
        height: 50,
        alignItems : 'center',
        backgroundColor:'#022E57',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:10

    },
    woyofa:{
        display: 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        marginTop: 10,
    },
    container: {
        display: 'flex',
        flexDirection : 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        height : 40,
        alignItems : 'center',
        marginBottom : 5
    },
    logout:{
        color: WARNA_UTAMA,
        marginLeft: 10,
        marginTop:5,
        fontWeight: 'bold'
    },
    text:{
        color: '#022E5775',
        fontSize: 20,
        fontWeight: '700'
    },
    garis:{
        paddingTop: 2,
        borderBottomColor: '#28527A',
        borderBottomWidth: 1,
    },
    close: {
        marginTop: 10
    },
    settings:{
        fontSize:35,
        color: WARNA_UTAMA,
        fontWeight: 'bold',
        left : 60
    },
    save:{
        fontSize: 15,
        color: WARNA_UTAMA,
        marginTop:10
    },
    bell :{
        width:28,
        height:28,
        marginTop:3
    },
    accountCon: {
        marginTop:10
    },
    notifCon: {
        marginTop:10
    },
})