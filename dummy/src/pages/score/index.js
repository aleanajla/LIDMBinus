import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { Download, Info_blue, VeryGood, VeryBad, Good, Enough, Bad} from '../../assets'
//import { VeryGood, VeryBad, Good, Enough, Bad } from '../../assets'

const Score = () => {
    return (
        <View style={styles.page}>
            <View style={styles.header}>
                <Download style={styles.download}/>
                <Info_blue style={styles.info}/>
            </View>
            <View style={styles.container}>
                <View style={styles.firstBox}>
                    {/* <View style={[styles.box, { backgroundColor: "powderblue" }]}/> */}
                    <View style={styles.grade}>
                        <View style={styles.gradeTitle}>
                            <Text style={styles.grade2}>Grade</Text>
                            <Text style={styles.pass}>Pass</Text>
                        </View>
                        <View style = {{paddingTop: 8,
                            borderBottomColor: '#C4C4C4',
                            borderBottomWidth: 2,}}/>
                    </View>
                    <View style={styles.grading}>
                        <View>
                            <Text style={styles.gradingTitle}>Grading</Text>
                        </View>
                        <View style = {{paddingTop: 8,
                            borderBottomColor: '#C4C4C4',
                            borderBottomWidth: 2}}/>
                        <View style= {styles.containerGrading}>
                            <View style={styles.ketGrade}>
                                <Text style={styles.ketGrading}>A</Text>
                                <Text style={styles.ketGrading}>B</Text>
                                <Text style={styles.ketGrading}>C</Text>
                                <Text style={styles.ketGrading}>D</Text>
                                <Text style={styles.ketGrading}>E-F</Text>
                            </View>
                            <View style ={styles.indikasi}>
                                <Text style ={styles.ketIndikasi}>Very Good</Text>
                                <Text style ={styles.ketIndikasi}>Good</Text>
                                <Text style ={styles.ketIndikasi}>Enough</Text>
                                <Text style ={styles.ketIndikasi}>Bad</Text>
                                <Text style ={styles.ketIndikasi}>Very Bad</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* <View style = {style.scoreContainer}>
                        <View style = {style.scoreHeader}>
                            <Text>Presentation skills</Text>
                        </View>
                        <View style = {style.scoreMain}>
                            <View style = {style.scoreLeft}>
                                <Text>uhsduhudheuhe</Text>
                            </View>
                            <View style = {style.scoreRight}>
                                <Text>uhsduhudheuhe</Text>
                            </View>
                        </View>
                </View> */}
            </View>
        </View>
    )
}

export default Score

const styles = StyleSheet.create({
    page:{
        backgroundColor : '#F6F5F5'
    },
    header:{
        flexDirection : 'row',
        justifyContent : 'flex-end',
        paddingTop : 15,
        paddingRight: 20,
    },
    download:{
        padding : 14,
        marginTop : 5,
        right : 8
    },
    info:{
        padding : 18
    },
    firstBox:{
        marginTop: 20,
        padding:5,
        flexDirection : 'row',
        marginRight: 5,
    },
    grade:{
        width: 227,
        height: 178,
        backgroundColor : '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    gradeTitle:{
        flexDirection : 'row',
        padding :5,
        paddingTop : 7,
        paddingLeft: 20,
        alignItems : 'center'
    },
    grade2:{
        fontWeight : 'bold',
        fontSize : 20,
        color : WARNA_SEKUNDER,
    },
    pass : {
        fontSize : 18,
        color: '#28527A',
        left : 80
    },
    grading:{
        width: 150,
        height: 178,
        backgroundColor : '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems : 'center'
    },
    gradingTitle:{
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        fontSize: 20,
        color: WARNA_SEKUNDER,
        fontWeight: 'bold',
        paddingTop: 7
    },
    containerGrading: {
        flexDirection: 'row',
        justifyContent: 'center',
        // paddingTop : 10
    },
    ketGrade:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    ketGrading: {
        fontSize: 17,
        fontWeight: 'bold',
        color: WARNA_SEKUNDER
    },
    indikasi:{
        alignItems: 'center',
        // justifyContent: 'center',
    },
    ketIndikasi :{
        fontSize: 9,
        color: '#28527A',
    },
})

// {/* <View style={styles.containerGrading}>
//                                 <View>
//                                     <Text style={styles.ketGrade}>A</Text>
//                                 </View>
//                                 <View style = {styles.conIndikasi}>
//                                     <Text style={styles.indikasi}>Very Good</Text>
//                                     {/* <VeryGood/> */}
                            //     </View>
                            // </View>
                            // <View style={styles.containerGrading}>
                            //     <View>
                            //         <Text style={styles.ketGrade}>B</Text>
                            //     </View>
                            //     <View style = {styles.conIndikasi}>
                            //         <Text style={styles.indikasi}>Good</Text>
                            //         {/* <Good/> */}
                            //     </View>
                            // </View>
                            // <View style={styles.containerGrading}>
                            //     <View>
                            //         <Text style={styles.ketGrade}>C</Text>
                            //     </View>
                            //     <View style = {styles.conIndikasi}>
                            //         <Text style={styles.indikasi}>Enough</Text>
                            //         <Enough/>
                            //     </View>
                            // </View>
                            // <View style={styles.containerGrading}>
                            //     <View>
                            //         <Text style={styles.ketGrade}>D</Text>
                            //     </View>
                            //     <View style = {styles.conIndikasi}>
                            //         <Text style={styles.indikasi}>Bad</Text>
                            //         <Bad/>
                            //     </View>
                            // </View>
                            // <View style={styles.containerGrading}>
                            //     <View>
                            //         <Text style={styles.ketGrade}>E-F</Text>
                            //     </View>
                            //     <View style = {styles.conIndikasi}>
                            //         <Text style={styles.indikasi}>Very Bad</Text>
                            //         <VeryBad/>
                            //     </View>
                            // </View> }