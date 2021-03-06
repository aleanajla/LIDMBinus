import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity, Platform, Dimensions, FlatList } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { Bell1, User} from '../../assets'
import { useNavigation } from '@react-navigation/core'
import { News, Home, Magang, Profile } from '../../pages/index.js'
import Modal from 'react-native-modal'
import ProgramListView from '../../components/ProgramListView'
import { programData } from '../../assets/jsonData/programData'

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const Program = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView>

            <Modal
                animationType="slide" 
                transparent={true} 
                visible={modalVisible}
                hasBackdrop={true} 
                backdropOpacity={0.5}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)}}
                >
                    <View styles={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.text4}><Text>Program Saat Ini Tidak Tersedia</Text></Text>
                        <TouchableOpacity
                            onPress={()=> setModalVisible(!modalVisible)}>
                            <View style={styles.closeBtn}>
                                <Text style={styles.closeTxt}>Tutup</Text>
                            </View>
                        </TouchableOpacity>
                        </View> 
                    </View>
            </Modal>
            <View style = {styles.progContainer}>
                <View style = {styles.detailsCon}>
                    <View style = {styles.ket}>
                        <View style = {styles.eachPoint}>
                            <View style = {[styles.point, {backgroundColor: '#28527A'}]}></View>
                            <View style = {styles.pointTitle}>
                                <Text style = {styles.ketTitle}>Program Sedang Berjalan</Text>
                            </View>
                        </View>
                        <View style = {styles.eachPoint}>
                            <View style = {[styles.point, {backgroundColor: '#8AC4D0'}]}></View>
                            <View style = {styles.pointTitle}>
                                <Text style = {styles.ketTitle}>Program Segera Tersedia</Text>
                            </View>
                        </View>
                    </View>
                    
                    {/* <ProgramListView
                        itemList = {programData}
                    /> */}
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
                        <TouchableOpacity onPress={()=>{navigation.navigate('Magang',{type:''});}}> 
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
                        </TouchableOpacity>
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
                        <TouchableOpacity onPress={()=> setModalVisible(true)}>
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
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> setModalVisible(true)}>
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
                        </TouchableOpacity>
                    </View >

                    <View style = {styles.row1}>
                        <TouchableOpacity onPress={()=> setModalVisible(true)}>
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
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> setModalVisible(true)}>
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
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> setModalVisible(true)}>
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
                        </TouchableOpacity> 
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Program;

const styles = StyleSheet.create({
    detailsCon: {
        alignItems: 'center',
        marginTop: 10,
    },
    ket: {
        flexDirection : 'row',
    },
    eachPoint:{
        flexDirection: 'row',
        margin:5
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
    centeredView :{
        flex: 1,
        justifyContent: "center",
        width: windowsWidth,
        height: windowsWidth,
        alignItems: "center",
    },
    modalView: {
        // width : 300,
        // height :190,
        paddingTop:20,
        paddingRight:35,
        paddingLeft:35,
        paddingBottom:20,
        margin:20,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        elevation:5,
    },
    text4:{
        fontSize : 22,
        color : 'black',
        fontWeight : 'bold',
        textAlign : 'center'
    },
    closeBtn:{
        backgroundColor : '#28527A',
        borderRadius : 20,
        justifyContent : 'center',
        alignItems : 'center',
        width:151,
        height:36,
        marginTop : 13
    },
    closeTxt:{
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold'
    }
})
