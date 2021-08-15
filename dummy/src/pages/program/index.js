import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { Bell1, User} from '../../assets'
import { useNavigation } from '@react-navigation/core'
import { News, Home } from '../../pages/index.js'

const Program = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style = {styles.progContainer}>
                <View style = {styles.header}>
                    <View style = {styles.welcome}>
                        <Text style = {{fontSize: 14, color : '#28527A'}}>Welcome back,</Text>
                        <Text style = {{fontSize: 20,fontWeight: 'bold', color: WARNA_SEKUNDER}}>Andrew Willy</Text>
                    </View>
                    <View style = {styles.imgHeader}>
                        <Image source ={require('../../assets/icons/bell.png')} style = {styles.bell} />
                        <TouchableOpacity
                        onPress = {()=>{
                            navigation.navigate('Profile',{type:''})
                        }}> 
                            <Image source = {require('../../assets/icons/profile.png')} />
                        </TouchableOpacity>
                        
                    </View>
                </View>
                <View style = {styles.garis}/>
                <View>
                    <View style = {styles.conHeader}>
                        <TouchableOpacity
                            onPress={()=>{
                                navigation.navigate('Home',{type:''});
                            }}>
                            <View style = {styles.optHeader}>
                                <Text style = {styles.titleHeader}>Dashboard</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('Program',{type:''});
                        }}> 
                            <View style = {styles.optHeader2}>
                                <Text style = {styles.titleHeader2}>Program</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('News',{type:''});
                        }}> 
                            <View style = {styles.optHeader}>
                                <Text style = {styles.titleHeader}>News</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.detailsCon}>
                    <View style = {styles.ket}>
                        <View style = {styles.eachPoint}>
                            <View style = {[styles.point, {backgroundColor: '#28527A'}]}></View>
                            <View style = {styles.pointTitle}>
                                <Text style = {styles.ketTitle}>Program is Running</Text>
                            </View>
                        </View>
                        <View style = {styles.eachPoint}>
                            <View style = {[styles.point, {backgroundColor: '#8AC4D0'}]}></View>
                            <View style = {styles.pointTitle}>
                                <Text style = {styles.ketTitle}>Program soon available</Text>
                            </View>
                        </View>
                    </View>

                    <View style = {styles.row1}>
                        <View style = {styles.conRow1}>
                            <View style = {styles.conImage}>
                                <Image source = {require('../../assets/images/classroom.png')}/>
                            </View>
                            <View style = {styles.conTitle}>
                                <Text style = {styles.titleProg}>Kampus Mengajar</Text>
                            </View>
                            <View>
                                <Text style = {styles.regPeriod}>Registration Period:</Text>
                                <Text style = {styles.datePeriod}>15 Juni 2021 - 30 Juni 2021</Text>
                            </View>
                        </View>
                        <View style = {styles.conRow1}>
                            <View style = {styles.conImage}>
                                <Image source = {require('../../assets/images/internship.png')}/>
                            </View>
                            <View style = {styles.conTitle}>
                                <Text style = {styles.titleProg}>Magang</Text>
                            </View>
                            <View>
                                <Text style = {styles.regPeriod}>Registration Period:</Text>
                                <Text style = {styles.datePeriod}>10 Juni 2021 - 31 Juni 2021</Text>
                            </View>
                        </View>
                        <View style = {styles.conRow1}>
                            <View style = {styles.conImage}>
                                <Image source = {require('../../assets/images/shift.png')}/>
                            </View>
                            <View style = {styles.conTitle}>
                                <Text style = {styles.titleProg}>Pertukaran Mahasiswa Merdeka</Text>
                            </View>
                            <View>
                                <Text style = {styles.regPeriod}>Registration Period:</Text>
                                <Text style = {styles.datePeriod}>14 Juni 2021 - 27 Juni 2021</Text>
                            </View>
                        </View >
                    </View>

                    <View style = {styles.row1}>
                        <View style = {styles.conRow1}>
                            <View style = {styles.conImage}>
                                <Image source = {require('../../assets/images/motivate.png')}/>
                            </View>
                            <View style = {styles.conTitle}>
                                <Text style = {styles.titleProg}>Studi Independen</Text>
                            </View>
                            <View>
                                <Text style = {styles.regPeriod}>Registration Period:</Text>
                                <Text style = {styles.closed}>Closed</Text>
                            </View>
                        </View>
                        <View style = {styles.conRow2}>
                            <View style = {styles.conImage}>
                                <Image source = {require('../../assets/images/student.png')}/>
                            </View>
                            <View style = {styles.conTitle}>
                                <Text style = {styles.titleProg}>Indonesian International Student Mobility Awards</Text>
                            </View>
                            <View>
                                <Text style = {styles.regPeriod}>Registration Period:</Text>
                                <Text style = {styles.closed}>Closed</Text>
                            </View>
                        </View>
                        <View style = {styles.conRow2}>
                            <View style = {styles.conImage}>
                                <Image source = {require('../../assets/images/village.png')}/>
                            </View>
                            <View style = {styles.conTitle}>
                                <Text style = {styles.titleProg}>Membangun Desa (KKN Tematik)</Text>
                            </View>
                            <View>
                                <Text style = {styles.regPeriod}>Registration Period:</Text>
                                <Text style = {styles.closed}>Closed</Text>
                            </View>
                        </View >
                    </View>

                    <View style = {styles.row1}>
                        <View style = {styles.conRow2}>
                            <View style = {styles.conImage}>
                                <Image source = {require('../../assets/images/project-management.png')}/>
                            </View>
                            <View style = {styles.conTitle}>
                                <Text style = {styles.titleProg}>Proyek Kemanusiaan</Text>
                            </View>
                            <View>
                                <Text style = {styles.regPeriod}>Registration Period:</Text>
                                <Text style = {styles.closed}>Closed</Text>
                            </View>
                        </View>
                        <View style = {styles.conRow2}>
                            <View style = {styles.conImage}>
                                <Image source = {require('../../assets/images/research.png')}/>
                            </View>
                            <View style = {styles.conTitle}>
                                <Text style = {styles.titleProg}>Riset atau Penilitian</Text>
                            </View>
                            <View>
                                <Text style = {styles.regPeriod}>Registration Period:</Text>
                                <Text style = {styles.closed}>Closed</Text>
                            </View>
                        </View>
                        <View style = {styles.conRow2}>
                            <View style = {styles.conImage}>
                                <Image source = {require('../../assets/images/entrepreneur.png')}/>
                            </View>
                            <View style = {styles.conTitle}>
                                <Text style = {styles.titleProg}>Wirausaha</Text>
                            </View>
                            <View>
                                <Text style = {styles.regPeriod}>Registration Period:</Text>
                                <Text style = {styles.closed}>Closed</Text>
                            </View>
                        </View >
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Program;

const styles = StyleSheet.create({
    progContainer:{
        // alignItems: 'center'
    },
    welcome :{
        paddingLeft: 30
    },
    pages : {
        backgroundColor : '#F6F5F5',
        fontFamily: 'Open-Sans'
    },
    header :{
        flexDirection : 'row',
        paddingTop: 15,
        backgroundColor: '#F6F5F5'
    },
    imgHeader :{
        flexDirection : 'row',
        justifyContent : 'flex-end',
        paddingRight : 20,
        flex: 1
    },
    bell :{
        fontSize : 25, 
        padding : 17,
        right:10,
        top:3.5
    },
    garis:{
        paddingTop: 8,
        borderBottomColor: '#28527A',
        borderBottomWidth: 1,
    },
    detailsCon: {
        alignItems: 'center'
    },
    ket: {
        flexDirection : 'row',
    },
    eachPoint:{
        flexDirection: 'row'
    },
    point : {
        padding:8,
        borderRadius: 20,
        width: 10,
        height:10,
        marginTop: 8
    },
    pointTitle: {
        width: 90,
        height: 35,
        marginLeft: 15
    },
    ketTitle: {
        color: '#000000',
        fontSize: 12

    },
    row1: {
        flexDirection: 'row',
        // margin: ,
        padding: 3,
        // backgroundColor: '#28527A'
    },
    conRow1: {
        backgroundColor: '#28527A',
        margin: 5,
        // padding:40,
        borderRadius: 20,
        width: 115,
        padding: 10,
        height: 200
    },
    conRow2: {
        backgroundColor: '#8AC4D0',
        margin: 5,
        // padding:40,
        borderRadius: 20,
        width: 115,
        padding:10,
        height: 200
    },
    conImage: {
        paddingBottom: 10,
        alignItems: 'center'
    },
    titleProg: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'Open_Sans',
        textAlign: 'center'
    },
    conTitle: {
       width: 70,
       height:70,
       marginLeft: 12,
    //    alignItems: 'center'
    },
    regPeriod: {
        alignItems: 'center',
        fontSize: 10,
        color: '#FFFFFF',
        fontWeight: 'bold',
        alignContent: 'flex-end'
    },
    closed: {
        fontSize: 10,
        color: '#FFFFFF',
        justifyContent: 'flex-end',
    },
    datePeriod: {
        color: '#FFFFFF',
        fontSize: 8,
        alignItems: 'flex-end'
    },
    conHeader: {
        flexDirection: 'row',
        paddingTop : 10,
        paddingLeft: 20,
        // paddingRight:10,
        paddingBottom : 10,

    },
    optHeader: {
        // padding: 20,
        margin:8,
        // backgroundColor : '#ffffff',
        width: 105,
        height: 35,
        borderRadius:20,
        alignItems: 'center'
    },
    titleHeader: {
        color: '#28527A',
        marginTop: 6
    },
    titleHeader2: {
        color: '#28527A',
        marginTop:6,
        fontWeight: 'bold'
    },
    optHeader2: {
        backgroundColor: '#FAD586',
        margin: 8,
        width: 105,
        height: 35,
        borderRadius:20,
        alignItems: 'center'
    },
})
