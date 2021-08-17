import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { Bell1, User } from '../../assets'
import { useNavigation } from '@react-navigation/core'
import { Program, DetailsProgram, Profile } from '../../pages/index.js'

const Magang = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <View styles={styles.pages}>
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
                <TouchableOpacity onPress={()=>{navigation.navigate('Program',{type:''});}}> 
                    <View style={styles.search}>
                        <Text style={styles.searchText}>Sementara jadi back ke program</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('DetailsProgram',{type:''});}}> 
                    <View style={styles.square}>
                        <View style={styles.left}>
                            <Image source = {require('../../assets/images/lazada.png')} style={styles.image}/>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>Artificial Intelligence Intern</Text>
                            <Text style={styles.division}>Program Magang Lazada Indonesia Customer Care Team</Text>
                            <View style={styles.inside}>
                                <View style={styles.left2}>
                                    <Text style={styles.leftText}>Kota Jakarta Selatan</Text>
                                    <Text style={styles.leftText}>20 SKS - 5 Bulan</Text>
                                </View>
                                <View style={styles.right2}>
                                    <Image source = {require('../../assets/icons/checkGreen.png')} style={styles.check}/>
                                    <Text style={styles.rightText}>Certified</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.square}>
                    <View style={styles.left}>
                        <Image source = {require('../../assets/images/telkom.png')} style={styles.image}/>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.title}>Application/ Software Requirement Analyst</Text>
                        {/* <Text style={styles.division}>Program Magang Lazada Indonesia Customer Care Team</Text> */}
                        <View style={styles.inside}>
                            <View style={styles.left2}>
                                <Text style={styles.leftText}>Kota Jakarta Selatan</Text>
                                <Text style={styles.leftText}>20 SKS - 6 Bulan</Text>
                            </View>
                            <View style={styles.right2}>
                                <Image source = {require('../../assets/icons/checkGreen.png')} style={styles.check}/>
                                <Text style={styles.rightText}>Certified</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.square}>
                    <View style={styles.left}>
                        <Image source = {require('../../assets/images/smartfren.png')} style={styles.image}/>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.title}>Software Developer</Text>
                        <Text style={styles.division}>Smartfren Technology Internship</Text>
                        <View style={styles.inside}>
                            <View style={styles.left2}>
                                <Text style={styles.leftText}>Kota Jakarta Pusat</Text>
                                <Text style={styles.leftText}>20 SKS - 5 Bulan</Text>
                            </View>
                            <View style={styles.right2}>
                                <Image source = {require('../../assets/icons/checkGreen.png')} style={styles.check}/>
                                <Text style={styles.rightText}>Certified</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.square}>
                    <View style={styles.left}>
                        <Image source = {require('../../assets/images/tokopedia.png')} style={styles.image}/>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.title}>Data Analyst</Text>
                        <Text style={styles.division}>Program Magang</Text>
                        <View style={styles.inside}>
                            <View style={styles.left2}>
                                <Text style={styles.leftText}>Kota Jakarta Selatan</Text>
                                <Text style={styles.leftText}>20 SKS - 3 Bulan</Text>
                            </View>
                            <View style={styles.right2}>
                                <Image source = {require('../../assets/icons/checkGreen.png')} style={styles.check}/>
                                <Text style={styles.rightText}>Certifed</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.square}>
                    <View style={styles.left}>
                        <Image source = {require('../../assets/images/tokopedia.png')} style={styles.image}/>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.title}>Software Engineer</Text>
                        <Text style={styles.division}>Tokopedia</Text>
                        <View style={styles.inside}>
                            <View style={styles.left2}>
                                <Text style={styles.leftText}>Kota Jakarta Selatan</Text>
                                <Text style={styles.leftText}>20 SKS - 6 Bulan</Text>
                            </View>
                            <View style={styles.right2}>
                                <Image source = {require('../../assets/icons/checkGreen.png')} style={styles.check}/>
                                <Text style={styles.rightText}>Certifed</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Magang;

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
    welcome :{
        paddingLeft: 30
    },
    search:{
        marginTop :15,
        height: 35,
        width: 360,
        backgroundColor: '#DADADA',
        marginLeft: 15 ,
        marginBottom : 13,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    searchText:{
        alignItems : 'center',
        color : '#28527A80'
    },
    square:{
        height: 105,
        width: 360,
        backgroundColor: '#E5E5E5',
        marginLeft : 15,
        marginRight : 15,
        borderRadius : 15,
        flexDirection : 'row',
        marginBottom : 13,
    },
    left:{
        width : '25%',
        justifyContent : 'center',
        alignItems : 'center'
    },
    image:{
        height : 55,
        width : 55,
    },
    right:{
        top : 10,
        width : 250
    },
    title:{
        fontWeight : 'bold',
        color : '#28527A',
        fontSize : 15,
    },
    division:{
        color: '#28527AD9',
        fontSize : 12
    },
    inside:{
        top : 3,
        flexDirection : 'row'
    },
    left2:{
        width : '50%',
    },
    right2:{
        width : '50%',
        left : 15,
        alignItems : 'center',
        flexDirection : 'row'
    },
    leftText:{
        color : '#0000007A',
        fontSize : 11
    },
    rightText:{
        fontSize : 11,
        color : '#71A132'
    },
    check:{
        width : 16,
        height : 16,
        marginRight : 2
    }
})