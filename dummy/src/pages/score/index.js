import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
// import { Download, Info_blue} from '../../assets'
import ScoreListView from '../../components/ScoreListView'
import { scoreData } from '../../assets/jsonData/scoreData'
import * as Progress from 'react-native-progress';
import { color } from 'react-native-elements/dist/helpers';


const Score = () => {
    return (
        <ScrollView>
            <View style={styles.page}>
                <View style={styles.header}>
                    <Image source ={require('../../assets/icons/download.png')} style = {styles.download} />
                    <Image source ={require('../../assets/icons/infoBlue.png')} style = {styles.info} />
                </View>
                <View style={[styles.container]}>
                    <View style={styles.firstBox}>
                        <View style={styles.grade}>
                            <View style={styles.gradeTitle}>
                                <Text style={styles.grade2}>Grade</Text>
                                <Text style={styles.pass}>Pass</Text>
                            </View>
                            <View style = {{paddingTop: 8, borderBottomColor: '#C4C4C4', borderBottomWidth: 2,}}/>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={styles.detailsLeft}>
                                        <Progress.Circle 
                                            progress={1} 
                                            animated={true}
                                            // showsText={true} 
                                            // formatText(progress) = {}
                                            allowFontScaling={true}
                                            size={100} 
                                            thickness={10} 
                                            unfilledColor={'#889acc'} 
                                            color={'#FFD95D'} 
                                            textStyle={{color:'#000000C9', fontWeight:'bold', fontSize:25}} 
                                            borderWidth={1} 
                                        />
                                    </View>
                                    <View style={styles.detailsRight}>
                                        <Text style={{color:'#28527A'}}>Very Good</Text>
                                        <Image source={require('../../assets/icons/VeryGood.png')} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.grading}>
                                <View>
                                    <Text style={[styles.gradingTitle]}>Grading</Text>
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
                                        <View style={styles.ketIndikasi}>
                                            <Text style ={styles.ketIndikasi}>Very Good</Text>
                                            <Image source={require('../../assets/icons/VeryGood.png')}/>
                                        </View>
                                        <View>
                                            <Text style ={styles.ketIndikasi}>Good</Text>
                                            <Image source={require('../../assets/icons/Good.png')}/>
                                        </View>
                                        <View>
                                            <Text style ={styles.ketIndikasi}>Enough</Text>
                                            <Image source={require('../../assets/icons/Enough.png')}/>
                                        </View>
                                        <View>
                                            <Text style ={styles.ketIndikasi}>Bad</Text>
                                            <Image source={require('../../assets/icons/Bad.png')}/>
                                        </View>
                                        <View>
                                            <Text style ={styles.ketIndikasi}>Very Bad</Text>
                                            <Image source={require('../../assets/icons/VeryBad.png')}/>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    <ScoreListView
                        itemList = {scoreData}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default Score;

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
        marginTop: 5,
        padding:5,
        flexDirection : 'row',
        marginRight: 5,
    },
    grade:{
        width: 230,
        height: 178,
        backgroundColor : '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        margin : 5,
        shadowColor : '#000000',
        shadowOpacity : 0.1,
        shadowRadius : 10,
        shadowOffset:{
            width : 0,
            height : 4
        },
        elevation : 5
    },
    gradeTitle:{
        flexDirection : 'row',
        padding :3,
        paddingTop : 5,
        paddingLeft: 20,
        alignItems : 'center'
    },
    grade2:{
        fontWeight : 'bold',
        fontSize : 20,
        color : WARNA_SEKUNDER,
    },
    detailsLeft:{
        width : '50%',
        height :'100%',
        justifyContent : 'center',
        alignItems : 'center',
        paddingLeft : 15
    },
    detailsRight:{
        width : '50%',
        height :'100%',
        justifyContent : 'center',
        alignItems : 'center'
    },
    pass : {
        fontSize : 18,
        color: '#28527A',
        left : 95
    },
    grading:{
        width: 130,
        height: 178,
        backgroundColor : '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        margin : 5,
        shadowColor : '#000000',
        shadowOpacity : 0.1,
        shadowRadius : 10,
        shadowOffset:{
            width : 0,
            height : 4
        },
        elevation : 5
    },
    gradingTitle:{
        flexDirection : 'row',
        fontSize: 20,
        color: WARNA_SEKUNDER,
        fontWeight: 'bold',
        padding :3,
        paddingTop : 5,
        left : 25
    },
    containerGrading: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop : 6
    },
    ketGrade:{
        alignItems: 'center',
    },
    ketGrading: {
        fontSize: 17,
        fontWeight: 'bold',
        color: WARNA_SEKUNDER
    },
    indikasi:{
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
    },
    ketIndikasi :{
        fontSize: 9,
        color: '#28527A',
        alignItems: 'center',
    }
})
