import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Profile = () => {
    return (
        <View style = {styles.profileCon}>
            <View style = {styles.header}>
                <View style = {styles.tempProfile}></View>
                <View style= {styles.headerStatus}>
                    <Text style = {styles.name}>ANDREW WILLY</Text>
                    <Text style = {styles.status}>Undergraduate Student</Text>
                    <Text style = {styles.univ}>Universitas Bina Nusantara</Text>
                </View>
                <View style = {styles.conSetting}>
                    <Image source = {require('../../assets/icons/settings.png')} style = {styles.setting}/>
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
                    <Text style = {styles.leftCon}>Program Progress</Text>
                </View>
                <View style = {[styles.conLeftRight]}>
                    <View style = {[styles.gpa, styles.shadowBox]}>
                        <Text style = {styles.rightCon}>Grade Point Averange</Text>
                        <View style={{
                                borderBottomColor: '#00000021',
                                borderBottomWidth: 1,
                            }}
                        />
                        <View style = {{alignItems: 'center'}}>
                            <Text style = {{fontSize:11, color: '#28527AB8'}}>All Semester</Text>
                            <Text style ={{fontSize:28, fontWeight:'bold', color: '#28527A'}}>A</Text>
                            <Image source = {require('../../assets/icons/VeryGood.png')} style = {{width:45,height:10}}/>
                        </View>
                    </View>
                    <View style = {[styles.totalPoints, styles.shadowBox]}>
                        <Text style = {styles.rightCon}>Total Points Reward</Text>
                        <View style={{
                                borderBottomColor: '#00000021',
                                borderBottomWidth: 1,
                            }}
                        />
                        <View style = {styles.pointDesc}>
                            <View style = {{alignItems:'center'}}>
                                <Text style = {{fontWeight:'bold', fontSize:20, color: '#28527A'}}>520</Text>
                                <Text style = {{color: '#28527A', fontSize:15, fontWeight: '400'}}>Points</Text>
                            </View>
                            <View>
                                <Image source= {require('../../assets/images/redeem-points.png')} style = {{marginLeft:10, width:47, height:44}}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            
            <View>
                <Text>My Books</Text>

            </View>

            <View>

            </View>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#8AC4D0',
        height: 120,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        padding: 20
    },
    tempProfile: {
        backgroundColor: '#FFFFFF',
        height: 80,
        width: 80,
        borderRadius:50
    },
    headerStatus: {
        marginLeft: 30,
        marginTop:8,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
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
    }
    
})
