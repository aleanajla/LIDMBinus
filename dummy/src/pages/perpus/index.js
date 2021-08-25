import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Platform, Dimensions, FlatList} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'
import { Profile, Header} from '../../pages/index.js'
import { useNavigation } from '@react-navigation/core'
import Modal from 'react-native-modal'
import Recomend from '../recomend'
import MoreBooks from '../moreBooks'

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const Perpus = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    return (
        <ScrollView>
        <Modal
            animationType="slide" //slide, fade, none
            transparent={true} //true or false
            visible={modalVisible}
            hasBackdrop={true}
            backdropOpacity={0.5}
            onRequestClose={() => {
                setModalVisible(!modalVisible)}}
            >
                <View styles={styles.centeredView}>
                    <View style={styles.modalView}>
                    <TouchableOpacity onPress={()=> setModalVisible(!modalVisible)}>
                        <View style={styles.closeBtn}>
                            <Image source = {require('../../assets/icons/closeBlack.png')}/>
                        </View>
                    </TouchableOpacity>
                        <View style={styles.topp}>
                            <Image source={require('../../assets/images/predict.png')} style={styles.cover}/>
                            <View style={styles.rightt}>
                                <Text style={styles.title}>New Laws of Robotics: Defending Human Expertise in the Age of AI</Text>
                                <Text style={styles.author}>by Frank Pasquale</Text>
                                <View style={styles.add}>
                                    <Text style={styles.addText}>Add to Libary</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.desc}>
                            Isaac Asimov quickened dozens of short stories and half a dozen novels with Laws of Robotics that restricted his fictional machines while leaving enough loopholes for propulsive plots. Frank Pasquale’s New Laws of Robotics takes aim at the more mundane artificial intelligence technology of today and our immediate tomorrow, but with more ambition. He plots a future where technologies like factory robots, medical diagnosis algorithms, and online learning make society more just.
                            Rather than just binding machines, Pasquale’s new laws aim to limit the humans who build and deploy them. He lays out four: that AI systems never pose as people; do not feed arms races for military or social control; augment professionals but don’t replace them; and always indicate the people who built, own, and control them. 
                            This form of robot law enforcement is about much more than computer code—Pasquale calls for a society-wide reengineering of policy, politics, economics, and labor relations to set technology on a more regulated and egalitarian path. He wants to reprogram the future of tech like classroom robots and online platforms with labor unions and regulatory agencies. That future can be harder to imagine than the overfamiliar outlines of standard tech utopias, which don’t much concern themselves with administrative law. But Pasquale makes a good case for injecting more bureaucracy into our techno-dreams, if we really want to make the world a better place. —Tom Simonite
                        </Text>
                    </View> 
                </View>
            
        </Modal>
        <View style={styles.pages}>
            <Header/>
                
            <View style = {styles.garis}/>
            <ScrollView horizontal={true}>
                <View style={styles.bookOpt}>
                    <Text style={styles.option}>Semua</Text>
                    <Text style={styles.option}>Umum</Text>
                    <Text style={styles.option}>Tren</Text>
                    <Text style={styles.option}>Teknologi</Text>
                    <Text style={styles.option}>Sosial</Text>
                    <Text style={styles.option}>Literatur</Text>
                    <Text style={styles.option}>Sains</Text>
                </View>
            </ScrollView>
            <View style={styles.square}></View>
            {/* <ScrollView vertical={true}> */}
                <View style={styles.learnToday}>
                    <View styles={styles.left}>
                        <Text style={styles.learnText}>Apa yang ingin</Text>
                        <Text style={styles.learnText}>Anda Pelajari</Text>
                        <Text style={styles.learnText}>Hari ini?</Text>
                        <TouchableOpacity
                        onPress = {()=>{
                            navigation.navigate('GetStarted',{type:''})
                        }}> 
                        <View style={styles.started}>
                            <Text style={styles.textStart}>Mulai</Text>
                            <Image source = {require('../../assets/icons/arrow_right.png')} style={{left : 30}}/>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.right}>
                        <Image source = {require('../../assets/images/education.png')} style={{top :26}}/>
                    </View>
                </View>
                <View style={{padding :17}}>
                    <TouchableOpacity onPress = {()=>{ navigation.navigate('Recomend',{type:''})}}> 
                        <View style={styles.recTop}>
                            <Text style={styles.recText}>Direkomendasikan untuk Anda</Text>
                            <Image source = {require('../../assets/icons/arrow_right2.png')} style={styles.arrowText}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.reccomen}>
                        <View style={styles.bookLeft}>
                        <TouchableOpacity onPress={()=> setModalVisible(true)}>
                            <Image source = {require('../../assets/images/book1.png')}/>
                        </TouchableOpacity>
                            <Text style={styles.bookTitle}>Predict and Surveil</Text>
                            <Text style={styles.bookAuthor}>Author : Sarah Brayne</Text>
                        </View>
                        <View style={styles.bookRight}>
                            <Image source = {require('../../assets/images/book2.png')}/>
                            <Text style={styles.bookTitle}>Voices From the Valley</Text>
                            <Text style={styles.bookAuthor}>Author : Ben Tarnoff and</Text>
                            <Text style={styles.bookAuthor}>Moira Weigel</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress = {()=>{ navigation.navigate('MoreBooks',{type:''})}}> 
                        <View style={styles.recTop}>
                            <Text style={styles.recText}>Lainnya</Text>
                            <Image source = {require('../../assets/icons/arrow_right2.png')} style={styles.arrowMore}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.reccomen}>
                        <View style={styles.bookLeft}>
                            <Image source = {require('../../assets/images/book5.png')}/>
                            <Text style={styles.bookTitle}>Digitize and Punish</Text>
                            <Text style={styles.bookAuthor}>Author : Brian Jefferson</Text>
                        </View>
                        <View style={styles.bookRight}>
                            <Image source = {require('../../assets/images/book4.png')}/>
                            <Text style={styles.bookTitle}>The Hype Machine</Text>
                            <Text style={styles.bookAuthor}>Author : Sinan Aral</Text>
                        </View>
                    </View>
                </View>
            {/* </ScrollView> */}
        </View>
        </ScrollView>
    )
}

export default Perpus;

const styles = StyleSheet.create({
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
        // fontSize : 25, 
        padding : 17,
        right:10,
        top:3.5
    },
    garis:{
        paddingTop: 8,
        borderBottomColor: '#28527A',
        borderBottomWidth: 1,
    },
    welcome :{
        paddingLeft: 30
    },
    bookOpt:{
        flexDirection : 'row',
        paddingLeft : 20,
        paddingRight : 7,
        paddingTop : 10,
        paddingBottom : 10,
    },
    option:{
        fontSize : 16,
        color : '#28527A70',
        paddingRight : 13,
    },
    square:{
        height: 30,
        width: 360,
        backgroundColor: '#DADADA',
        marginLeft: 15 ,
        marginBottom : 13
    },
    learnToday:{
        backgroundColor : WARNA_SEKUNDER,
        padding:17,
        marginLeft: 15,
        marginRight:15,
        borderRadius: 20,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:10
    },
    learnText:{
        fontSize : 25,
        color : '#FFFFFF',
        fontWeight : 'bold'
    },
    left:{
        width : '50%',
        backgroundColor : 'red'
    },
    right:{
        left : 33
    },
    started:{
        backgroundColor: '#FBEEAC',
        width : 125,
        height : 37,
        paddingTop : 7,
        paddingLeft : 15,
        paddingRight : 15,
        borderRadius : 10,
        marginTop : 10,
        flexDirection: 'row'
    },
    textStart:{
        color : WARNA_SEKUNDER,
        fontSize : 15,
        fontWeight: 'bold',
    },
    recTop:{
        flexDirection : 'row',
        paddingLeft : 5
    },
    recText:{
        fontWeight : 'bold',
        color : WARNA_SEKUNDER,
        fontSize : 18,
    },
    arrowText:{
        left : 80,
        top : 2
    },
    reccomen:{
        flexDirection : 'row',
        paddingTop : 14
    },
    bookLeft:{
        // backgroundColor: 'red',
        width: '50%',
        alignItems : 'center'
    },
    bookRight:{
        // backgroundColor: 'yellow',
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
    arrowMore:{
        top : 2,
        left : 265
    },
    centeredView :{
        flex: 1,
        justifyContent: "center",
        width: windowsWidth,
        height: windowsWidth,
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        paddingTop: 20,
        // paddingLeft: 10,
        // paddingRight:10,
        paddingBottom: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        elevation:5,
    },
    closeBtn :{
        marginLeft : 290,
        marginBottom : 5
    },
    // btnSeeMore:{
    //     width: 251.123, 
    //     height: 44.5, 
    //     backgroundColor: '#28527A',
    //     alignItems : 'center',
    //     justifyContent: 'center',
    //     borderRadius : 20,
    //     marginTop : 35
        
    // },
    topp:{
        flexDirection : 'row'
    },
    cover:{
        marginLeft : 0
    },
    title:{
        width : 200,
        paddingLeft : 10,
        fontWeight : 'bold',
        fontSize : 20,
        color : '#28527A'
    },
    author:{
        paddingLeft : 10,
        fontSize : 18,
        color : '#28527A8C'
    },
    add:{
        marginLeft : 10,
        marginTop : 4,
        backgroundColor : '#FAD586',
        width : 112,
        height : 35,
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center'
    },
    addText:{
        fontSize : 15,
        color : '#28527A',
        fontWeight : 'bold'
    },
    desc:{
        fontSize : 11,
        color : '#00000080',
        paddingTop : 17,
        paddingLeft : 20,
        paddingRight : 15
    }


})
