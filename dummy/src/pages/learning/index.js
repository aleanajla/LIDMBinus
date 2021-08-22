import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType'
// import ImageBackground from 'react-native/Libraries/Image/ImageBackground'
// import { Bell1, User } from '../../assets'
import { useNavigation } from '@react-navigation/core'
import { VideoLearning, ShareMaterials, Profile } from '../../pages/index.js'
import RelatedListView from '../../components/relatedListView'
import { relatedBooksData } from '../../assets/jsonData/relatedBooksData'

const Learning = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={styles.pages}>
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
                <View style = {styles.conHeader}>
                    <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate('VideoLearning',{type:''});
                    }}>
                        <View style={styles.videoLearning}>
                            <Text style = {styles.text1}>Video</Text>
                            <Text style = {styles.text1}>Learning</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate('ShareMaterials',{type:''});
                    }}>
                        <View style={styles.shareMaterials}>
                            <Text style = {styles.text1}>Share</Text>
                            <Text style = {styles.text1}>Materials</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.relatedBooks}>
                        <Text style = {styles.text2}>Related</Text>
                        <Text style = {styles.text2}>Books</Text>
                    </View>
                </View>
                {/* <View style={{paddingTop : 15}}>
                    <RelatedListView
                        itemList={relatedBooksData}
                    /> */}
                <View>
                    <RelatedListView
                        itemList = {relatedBooksData}
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

export default Learning;

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
    conHeader: {
        flexDirection: 'row',
        paddingTop : 16,
        paddingLeft : 16,
        paddingRight : 16
    },
    videoLearning:{
        width : 120,
        height : 45,
        alignItems : 'center',
        justifyContent : 'center',
    },
    shareMaterials:{
        width : 120,
        height : 45,
        alignItems : 'center',
        justifyContent : 'center',
    },
    relatedBooks:{
        backgroundColor : '#FAD586',
        width : 95,
        height : 45,
        alignItems : 'center',
        borderRadius : 20,
        marginLeft : 22,
        justifyContent : 'center'
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
    // booksVertical:{
    //     alignItems : 'center'
    // }
    
})
