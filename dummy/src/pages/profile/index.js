import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Settingss, Certificate, myRewards} from '../../pages/index.js'
import { useNavigation } from '@react-navigation/core'
import * as Progress from 'react-native-progress';
import { color } from 'react-native-elements/dist/helpers';
import { Avatar } from 'react-native-elements';

const Profile = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style = {styles.profileCon}>
            <View>
                <View style={styles.header1}>
                    <View>
                        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                            <Image source = {require('../../assets/icons/arrowBack.png')}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress = {()=>{navigation.navigate('Settingss',{type:''})}}>
                            <Image source = {require('../../assets/icons/settings.png')} style = {styles.setting}/>
                    </TouchableOpacity>
                </View>
                <View style = {styles.header}>
                    <Avatar
                        size="large"
                        rounded
                        overlayContainerStyle={{backgroundColor: 'white'}}
                        title="AW"
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        titleStyle={{color : 'black', fontSize : 25, fontWeight: 'bold'}}
                    />
                    <View style= {styles.headerStatus}>
                        <Text style = {styles.name}>ANDREW WILLY</Text>
                        <Text style = {styles.status}>Mahasiswa</Text>
                        <Text style = {styles.univ}>Universitas Bina Nusantara</Text>
                    </View>
                </View>
                <View style = {styles.programCon}>
                    <Text style = {styles.progTittle}>Program </Text>
                    <View style = {styles.progDesc}>
                        <View>
                            <Image source = {require('../../assets/images/internship.png')} style = {styles.intershipIMG}/>
                        </View>
                        <View style = {styles.ketProg}>
                            <Text style = {{color: '#28527A', fontWeight:'bold', fontSize:15}}>Magang - Lazada</Text>
                            <Text style = {{color: '#28527A', fontSize:15}}>Artificial Intelligence Intern</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.conProgress}>
                    <View style = {[styles.conLeftRight, {backgroundColor: '#FFFFFF'}, styles.shadowBox]}>
                        <Text style = {styles.leftCon}>Kemajuan Program</Text>
                        <Progress.Circle 
                            progress={0.4} 
                            animated={true}
                            showsText={true} 
                            // formatText(progress) = {}
                            allowFontScaling={true}
                            size={100} 
                            thickness={10} 
                            unfilledColor={'#889acc'} 
                            color={'#bec7e4'} 
                            textStyle={{color:'#000000C9', fontWeight:'bold', fontSize:25}} 
                            borderWidth={1} style={{marginTop:10}}
                        />
                        <View style={{marginBottom:5}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={{backgroundColor:'#b7c4e3', width:10, height:10}}></View>
                                <Text style={styles.indikatorProg}>Selesai</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={{backgroundColor:'#889acc', width:10, height:10}}></View>
                                <Text style={styles.indikatorProg}>Sedang</Text>
                            </View>
                        </View>
                    </View>
                    <View style = {[styles.conLeftRight]}>
                        <View style = {[styles.gpa, styles.shadowBox]}>
                            <Text style = {styles.rightCon}>Indeks Prestasi Kumulatif</Text>
                            <View style={{
                                    borderBottomColor: '#00000021',
                                    borderBottomWidth: 1,
                                }}
                            />
                            <View style = {{alignItems: 'center'}}>
                                <Text style = {{fontSize:11, color: '#28527AB8'}}>Semua Semester</Text>
                                <Text style ={{fontSize:28, fontWeight:'bold', color: '#28527A'}}>A</Text>
                                <Image source = {require('../../assets/icons/VeryGood.png')} style = {{width:45,height:10}}/>
                            </View>
                        </View>
                        <View style = {[styles.totalPoints, styles.shadowBox]}>
                            <Text style = {styles.rightCon}>Total Poin Hadiah</Text>
                            <View style={{
                                    borderBottomColor: '#00000021',
                                    borderBottomWidth: 1,
                                }}
                            />
                            <View style = {styles.pointDesc}>
                                <View style = {{alignItems:'center'}}>
                                    <Text style = {{fontWeight:'bold', fontSize:20, color: '#28527A'}}>520</Text>
                                    <Text style = {{color: '#28527A', fontSize:15, fontWeight: '400'}}>Poin</Text>
                                </View>
                                <View>
                                    <Image source= {require('../../assets/images/redeem-points.png')} style = {{marginLeft:10, width:47, height:44}}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                
                <View style = {styles.myBook}>
                    <TouchableOpacity onPress = {()=>{
                                navigation.navigate('MyBooks',{type:''})}}>
                        <View style= {{flexDirection:'row'}}>
                            <Text style ={{color: '#28527A', fontWeight: 'bold', fontSize:18}}>Buku Saya</Text>
                            <View style = {{marginLeft:220}}>
                                <Image source= {require('../../assets/icons/arrow_right2.png')}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style = {styles.books}>
                        <View style ={styles.styleBooks}>
                            <Image source = {require('../../assets/images/book3.png')} style={{marginBottom:5}}/>
                            <Progress.Bar progress={0.3} width={133} height={3} color={'#28527A'} unfilledColor={'#FAD586'}/>
                        </View>
                        <View style ={styles.styleBooks}>
                            <Image source = {require('../../assets/images/book4.png')} style={{marginBottom:5}}/>
                            <Progress.Bar progress={0.3} width={133} height={3} color={'#28527A'} unfilledColor={'#FAD586'}/>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    onPress = {()=>{
                        navigation.navigate('Certificate',{type:''})
                    }}
                >
                    <View style = {styles.myCertif}>
                        <Image source = {require('../../assets/images/certif.png')}/>
                        <Text style={styles.titleBox}>Sertifikat Saya</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {()=>{
                        navigation.navigate('myRewards',{type:''})
                    }}
                >
                <View style = {styles.myRewards}>
                    <Image source = {require('../../assets/icons/reward.png')} />
                    <Text style = {styles.titleBox}>Hadiah Saya</Text>
                </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Profile;

const styles = StyleSheet.create({
    profileCon:{
        marginBottom:30
    },
    header1:{
        flexDirection: 'row',
        backgroundColor: '#8AC4D0',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingLeft : 20,
        paddingRight : 20,
        paddingTop : 15

    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#8AC4D0',
        height: 100,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingLeft : 50
    },
    tempProfile: {
        backgroundColor: '#FFFFFF',
        height: 80,
        width: 80,
        borderRadius:50
    },
    headerStatus: {
        marginLeft: 20,
        marginTop:8,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
        left : 4
    },
    status: {
        color: '#000000',
        fontSize: 13,
        fontWeight: '800',
        marginLeft:5
    },
    univ: {
        color: '#000000',
        fontSize: 13,
        marginLeft:5
    },
    setting: {
        width: 35,
        height: 35,
    },
    conSetting: {
        marginLeft: 40,
        marginTop:10
    },
    programCon: {
        paddingLeft: 20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
        margin: 15,
        backgroundColor: '#FFFFFF',
        borderRadius:20,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:10
    },
    progDesc: {
        flexDirection: 'row',
        marginTop:10
    },
    progTittle: {
        color: '#28527A',
        fontWeight: 'bold',
        fontSize: 18
    },
    intershipIMG: {
        width:50,
        height:50,
        marginRight:20
    },
    conProgress: {
        flexDirection: 'row',
        marginLeft:15,
        marginRight:15
    },
    conLeftRight: {
        width:171,
        height:192,
        margin:5,
        borderRadius:20,
        alignItems: 'center'
        // padding: 10
    },
    gpa: {
        backgroundColor: '#FFFFFF',
        height:101,
        width:166,
        borderRadius:20,
        // alignItems: 'center'
    },
    totalPoints: {
        backgroundColor: '#FFFFFF',
        width: 166,
        height: 84,
        borderRadius: 20,
        marginTop:5,
        // alignItems: 'center'
    },
    leftCon: {
        fontSize: 18,
        color: '#28527A',
        fontWeight: 'bold',
        paddingTop:15,
        textAlign: 'center'
    },
    rightCon: {
        fontSize: 15,
        color: '#28527A',
        fontWeight: 'bold',
        paddingTop:6,
        marginBottom:4,
        textAlign: 'center'
    },
    pointDesc: {
        flexDirection: 'row',
        paddingLeft:35,
        paddingRight:35,
        marginTop:2
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
    myBook:{
        width:333,
        height:156,
        marginLeft:25,
        marginTop:10,
        marginRight:25
    },
    books:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-around'
    },
    myCertif:{
        width:350,
        height: 71,
        marginTop:50,
        backgroundColor: '#FFFFFF',
        marginLeft:20,
        marginRight:20,
        padding:15,
        borderRadius:20,
        flexDirection: 'row',
    },
    titleBox:{
        color:'#28527A', 
        fontSize:18, 
        fontWeight: 'bold', 
        marginLeft:20, 
        marginTop:10
    },
    myRewards:{
        backgroundColor:'#FFFFFF',
        marginLeft:20,
        marginRight:20,
        padding:15,
        borderRadius:20,
        flexDirection: 'row',
        marginTop:15
    },
     indikatorProg:{
         fontSize:12,
         marginLeft:5,
         marginTop:2
     },
    styleBooks:{
        alignItems:'center'
    }
})
