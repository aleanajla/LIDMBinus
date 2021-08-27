import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Perpus } from '../../pages/index.js'
import GetStartedListView from '../../components/getStartedListView'
import { getStartedData } from '../../assets/jsonData/getStarted'

const GetStarted = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <View style={styles.pages}>
                <View style = {styles.header}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}} style={styles.conClose}>
                        <Image source = {require('../../assets/icons/arrowBack.png')} style = {styles.close}/>
                    </TouchableOpacity>
                    <Text style={styles.settings}> BUKU </Text>
                </View>
                <View style={{paddingTop : 15}}>
                    <GetStartedListView
                        itemList={getStartedData}
                        navigation={navigation}
                    />
                    {/* <View style={styles.row}>
                        <View style={styles.bookLeft}>
                            <Image source = {require('../../assets/images/book3.png')}/>
                            <Text style={styles.bookTitle}>If Then: How the</Text>
                            <Text style={styles.bookTitle}>Simulmatics Corporation</Text>
                            <Text style={styles.bookTitle}>Invented the Future</Text>
                            <Text style={styles.bookAuthor}>Author : Jill Lepore</Text>
                        </View>
                        <View style={styles.bookRight}>
                            <Image source = {require('../../assets/images/book4.png')}/>
                            <Text style={styles.bookTitle}>The Hype Machine</Text>
                            <Text style={styles.bookAuthor}>Author : Sinan Aral</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.bookLeft}>
                            <Image source = {require('../../assets/images/book8.png')}/>
                            <Text style={styles.bookTitle}>Predict and Surveil</Text>
                            <Text style={styles.bookAuthor}>Author : Sarah Brayne</Text>
                        </View>
                        <View style={styles.bookRight}>
                            <Image source = {require('../../assets/images/book7.png')}/>
                            <Text style={styles.bookTitle}>Voices From the Valley</Text>
                            <Text style={styles.bookAuthor}>Author : Ben Tarnoff and</Text>
                            <Text style={styles.bookAuthor}>Moira Weigel</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.bookLeft}>
                            <Image source = {require('../../assets/images/book5.png')}/>
                            <Text style={styles.bookTitle}>Digitize and Punish</Text>
                            <Text style={styles.bookAuthor}>Author : Brian Jefferson</Text>
                        </View>
                        <View style={styles.bookRight}>
                            <Image source = {require('../../assets/images/book6.png')}/>
                            <Text style={styles.bookTitle}>New Laws Of Robotic</Text>
                            <Text style={styles.bookAuthor}>Author : Frank Pasquale</Text>
                        </View>
                    </View> */}
                </View>
            </View>
        </ScrollView>
    )
}

export default GetStarted;

const styles = StyleSheet.create({
    header:{
        display: 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        // justifyContent: 'space-between',
        paddingRight: 28,
        paddingLeft : 28,
        backgroundColor: WARNA_SEKUNDER,
        height : 74,
        justifyContent:'center'
    },
    close: {
        marginTop: 5,
        alignItems:'flex-start',
        alignContent:'flex-start'
    },
    conClose:{
        position:'absolute',
        left:25
    },
    settings:{
        fontSize:25,
        color: WARNA_UTAMA,
        fontWeight: 'bold',
    },
    title3:{
        color : 'white',
        fontWeight : 'bold',
        fontSize : 25,
        left : 105
    },
    text1:{
        fontSize : 14,
        color : '#7F96AE'
    },
    text2:{
        color : WARNA_SEKUNDER,
        fontSize : 14,
        fontWeight : 'bold'
    },
    row:{
        flexDirection : 'row',
        paddingTop : 15,
        paddingBottom : 15
    },
    bookLeft:{
        width: '50%',
        alignItems : 'center'
    },
    bookRight:{
        width: '50%',
        alignItems : 'center'
    },
    bookTitle:{
        color : WARNA_SEKUNDER,
        fontSize : 15,
        fontWeight : 'bold'
    },
    bookAuthor:{
        color : WARNA_SEKUNDER,
        fontSize : 11
    },
})