import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

const Program = () => {
    return (
        <ScrollView>
            <View style = {styles.progContainer}>
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
                        {/* <View style = {styles.conImage}>
                            <Image source = {require('../assets/images/classroom.png')}/>
                        </View> */}
                        <View style = {styles.conTitle}>
                            <Text style = {styles.titleProg}>Kampus Mengajar</Text>
                        </View>
                        <View>
                            <Text style = {styles.regPeriod}>Registration Period:</Text>
                            <Text style = {styles.datePeriod}>15 Juni 2021 - 30 Juni 2021</Text>
                        </View>
                    </View>
                    <View style = {styles.conRow1}>
                        {/* <View style = {styles.conImage}>
                            <Image source = {require('../assets/images/internship.png')}/>
                        </View> */}
                        <View style = {styles.conTitle}>
                            <Text style = {styles.titleProg}>Magang</Text>
                        </View>
                        <View>
                            <Text style = {styles.regPeriod}>Registration Period:</Text>
                            <Text style = {styles.datePeriod}>10 Juni 2021 - 31 Juni 2021</Text>
                        </View>
                    </View>
                    <View style = {styles.conRow1}>
                        {/* <View style = {styles.conImage}>
                            <Image source = {require('../assets/images/shift.png')}/>
                        </View> */}
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
                        {/* <View style = {styles.conImage}>
                            <Image source = {require('..assets/images/motivate.png')}/>
                        </View> */}
                        <View style = {styles.conTitle}>
                            <Text style = {styles.titleProg}>Studi Independen</Text>
                        </View>
                        <View>
                            <Text style = {styles.regPeriod}>Registration Period:</Text>
                            <Text style = {styles.closed}>Closed</Text>
                        </View>
                    </View>
                    <View style = {styles.conRow2}>
                        {/* <View style = {styles.conImage}>
                            <Image source = {require('../assets/images/student.png')}/>
                        </View> */}
                        <View style = {styles.conTitle}>
                            <Text style = {styles.titleProg}>Indonesian International Student Mobility Awards</Text>
                        </View>
                        <View>
                            <Text style = {styles.regPeriod}>Registration Period:</Text>
                            <Text style = {styles.closed}>Closed</Text>
                        </View>
                    </View>
                    <View style = {styles.conRow2}>
                        {/* <View style = {styles.conImage}>
                            <Image source = {require('../assets/images/village.png')}/>
                        </View> */}
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
                        {/* <View style = {styles.conImage}>
                            <Image source = {require('../assets/images/project-management.png')}/>
                        </View> */}
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
                            {/* <Image source = {require('../assets/images/research.png')}/> */}
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
                        {/* <View style = {styles.conImage}>
                            <Image source = {require('../assets/images/entrepreneur.png')}/>
                        </View> */}
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
        </ScrollView>
    )
}

export default Program;

const styles = StyleSheet.create({
    progContainer:{
        alignItems: 'center'
    },
    ket: {
        flexDirection : 'row',
        marginTop: 10
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
    }
})
